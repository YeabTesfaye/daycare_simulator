
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { openai } from "@/lib/openai";
import type { InsightData } from "@/types";

/* ═══════════════════════════════════════════════════════════
   Types
═══════════════════════════════════════════════════════════ */

interface SimWithRelations {
  id: string;
  businessName: string;
  operatingHours: number;
  operatingDays: number;
  revenueSources: { name: string; amount: number }[];
  expenseItems: { name: string; amount: number }[];
  classrooms: { name: string; capacity: number; enrolled: number; staffRatio: number }[];
  businessGoals: { name: string; targetValue: number; unit: string }[];
}

interface ComputedMetrics {
  totalRevenue: number;
  totalExpenses: number;
  netMonthlyIncome: number;
  breakEvenEnrollment: number;
  capacityUtilization: number;
  totalEnrolled: number;
  totalCapacity: number;
  largestExpenseName: string;
  largestExpensePct: number;
  expenseRatio: number;           // expenses / revenue  (0-1)
  requiredStaff: number;          // derived from classrooms + staffRatio
}

/* ═══════════════════════════════════════════════════════════
   Pure financial helpers
═══════════════════════════════════════════════════════════ */

function computeMetrics(sim: SimWithRelations): ComputedMetrics {
  const totalRevenue  = sim.revenueSources.reduce((s, r) => s + r.amount, 0);
  const totalExpenses = sim.expenseItems.reduce((s, e) => s + e.amount, 0);
  const netMonthlyIncome = totalRevenue - totalExpenses;

  // Per-student revenue — use the "Tuition" line if present, else split
  // total revenue equally across all enrolled students.
  const tuitionLine = sim.revenueSources.find((r) =>
    r.name.toLowerCase().includes("tuition"),
  );
  const revenueForBreakEven = tuitionLine?.amount ?? totalRevenue;
  const totalEnrolled = sim.classrooms.reduce((s, c) => s + c.enrolled, 0);
  const perStudentRevenue =
    totalEnrolled > 0 ? revenueForBreakEven / totalEnrolled : revenueForBreakEven;
  const breakEvenEnrollment =
    perStudentRevenue > 0 ? Math.ceil(totalExpenses / perStudentRevenue) : 0;

  // Capacity
  const totalCapacity = sim.classrooms.reduce((s, c) => s + c.capacity, 0);
  const capacityUtilization =
    totalCapacity > 0 ? (totalEnrolled / totalCapacity) * 100 : 0;

  // Largest expense
  const sorted = [...sim.expenseItems].sort((a, b) => b.amount - a.amount);
  const largest = sorted[0] ?? { name: "N/A", amount: 0 };
  const largestExpensePct =
    totalExpenses > 0 ? (largest.amount / totalExpenses) * 100 : 0;

  // Required staff derived from classrooms (enrolled / staffRatio, rounded up)
  const requiredStaff = sim.classrooms.reduce(
    (s, c) => s + Math.ceil(c.enrolled / c.staffRatio),
    0,
  );

  return {
    totalRevenue,
    totalExpenses,
    netMonthlyIncome,
    breakEvenEnrollment,
    capacityUtilization,
    totalEnrolled,
    totalCapacity,
    largestExpenseName: largest.name,
    largestExpensePct,
    expenseRatio: totalRevenue > 0 ? totalExpenses / totalRevenue : 0,
    requiredStaff,
  };
}

/* ═══════════════════════════════════════════════════════════
   OpenAI prompt builder
═══════════════════════════════════════════════════════════ */

function buildPrompt(sim: SimWithRelations, m: ComputedMetrics): string {
  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return `
You are an expert financial advisor and operations consultant specialising in
childcare and daycare centre management.

Analyse the following data and respond ONLY with valid JSON — no markdown fences,
no preamble, no trailing text.

══════════════════════════════════
BUSINESS DATA
══════════════════════════════════
Centre name   : ${sim.businessName}
Operating     : ${sim.operatingHours} hours/day × ${sim.operatingDays} days/year

Revenue sources (monthly):
${sim.revenueSources.map((r) => `  • ${r.name}: ${fmt(r.amount)}`).join("\n")}
  TOTAL REVENUE : ${fmt(m.totalRevenue)}/month

Expense items (monthly):
${sim.expenseItems.map((e) => `  • ${e.name}: ${fmt(e.amount)}`).join("\n")}
  TOTAL EXPENSES: ${fmt(m.totalExpenses)}/month

Net monthly income  : ${fmt(m.netMonthlyIncome)}
Expense ratio       : ${(m.expenseRatio * 100).toFixed(1)}%
Break-even enrolment: ${m.breakEvenEnrollment} students

Classrooms:
${sim.classrooms
  .map(
    (c) =>
      `  • ${c.name}: ${c.enrolled}/${c.capacity} enrolled  |  staff ratio 1:${c.staffRatio}`,
  )
  .join("\n")}
Total enrolment     : ${m.totalEnrolled} / ${m.totalCapacity} capacity (${m.capacityUtilization.toFixed(1)}%)
Required staff count: ${m.requiredStaff}
Largest expense     : ${m.largestExpenseName} (${m.largestExpensePct.toFixed(1)}% of costs)

Business goals:
${sim.businessGoals.map((g) => `  • ${g.name}: ${g.targetValue}${g.unit}`).join("\n")}

══════════════════════════════════
REQUIRED JSON STRUCTURE
══════════════════════════════════
{
  "executiveSummary": {
    "financialOverview"  : "2–3 sentence overview referencing actual dollar figures",
    "profitabilityStatus": "1–2 sentence profitability assessment with specific numbers",
    "enrollmentStatus"   : "1–2 sentence enrollment assessment with capacity percentage",
    "recommendations"    : [
      "Actionable recommendation 1 with specific numbers",
      "Actionable recommendation 2",
      "Actionable recommendation 3",
      "Actionable recommendation 4"
    ]
  },
  "recommendations": [
    {
      "title"      : "Short, punchy title",
      "description": "Detailed 2–3 sentence description referencing the centre's actual data",
      "priority"   : "high | medium | low",
      "impact"     : "Quantified expected outcome, e.g. 'Could increase net income by $X/month'"
    }
    // exactly 5 items
  ],
  "actionPlan": [
    {
      "phase"   : "Phase 1",
      "title"   : "Descriptive phase title",
      "actions" : ["specific action 1", "specific action 2", "specific action 3"],
      "timeline": "e.g. Week 1–2"
    }
    // exactly 3 phases
  ]
}

Rules:
- Reference the centre's REAL numbers in every narrative field.
- Use plain English — no bullet characters inside strings.
- recommendations array must contain EXACTLY 5 objects.
- actionPlan array must contain EXACTLY 3 objects.
- Respond with raw JSON only.
`.trim();
}

/* ═══════════════════════════════════════════════════════════
   Route handler
═══════════════════════════════════════════════════════════ */

export async function POST(request: NextRequest) {
  /* ── Auth ── */
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  /* ── Parse body ── */
  let simulationId: string;
  try {
    const body = await request.json();
    simulationId = body.simulationId;
    if (!simulationId || typeof simulationId !== "string") throw new Error();
  } catch {
    return NextResponse.json(
      { error: "simulationId is required in the request body" },
      { status: 400 },
    );
  }

  /* ── Load simulation ── */
  const sim = await prisma.simulation.findFirst({
    where: { id: simulationId, userId: user.id },
    include: {
      revenueSources: true,
      expenseItems: true,
      classrooms: true,
      businessGoals: true,
    },
  });

  if (!sim) {
    return NextResponse.json(
      { error: "Simulation not found or access denied" },
      { status: 404 },
    );
  }

  /* ── Guard: need at least some revenue and expense data ── */
  if (sim.revenueSources.length === 0) {
    return NextResponse.json(
      { error: "Add at least one revenue source before generating insights." },
      { status: 422 },
    );
  }
  if (sim.expenseItems.length === 0) {
    return NextResponse.json(
      { error: "Add at least one expense item before generating insights." },
      { status: 422 },
    );
  }

  /* ── Compute metrics ── */
  const metrics = computeMetrics(sim as SimWithRelations);

  /* ── Call OpenAI ── */
  let aiPayload: {
    executiveSummary: InsightData["executiveSummary"];
    recommendations: InsightData["recommendations"];
    actionPlan: InsightData["actionPlan"];
  };

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      max_tokens: 2400,
      response_format: { type: "json_object" },   // enforces JSON mode
      messages: [
        {
          role: "system",
          content:
            "You are a financial operations consultant specialising in childcare centres. " +
            "Always respond with valid JSON matching the schema the user provides.",
        },
        { role: "user", content: buildPrompt(sim as SimWithRelations, metrics) },
      ],
    });

    const raw = completion.choices[0]?.message?.content ?? "{}";
    aiPayload = JSON.parse(raw);
  } catch (err) {
    console.error("[generate-insights] OpenAI error:", err);
    return NextResponse.json(
      { error: "AI generation failed. Please try again." },
      { status: 502 },
    );
  }

  /* ── Validate shape (defensive) ── */
  if (
    !aiPayload.executiveSummary ||
    !Array.isArray(aiPayload.recommendations) ||
    !Array.isArray(aiPayload.actionPlan)
  ) {
    return NextResponse.json(
      { error: "AI returned an unexpected response shape. Please try again." },
      { status: 502 },
    );
  }

  /* ── Persist insight ── */
  const insight = await prisma.insight.upsert({
    where: { simulationId },
    create: {
      simulationId,
      netMonthlyIncome:    metrics.netMonthlyIncome,
      breakEvenEnrollment: metrics.breakEvenEnrollment,
      capacityUtilization: metrics.capacityUtilization,
      largestExpenseName:  metrics.largestExpenseName,
      largestExpensePct:   metrics.largestExpensePct,
      executiveSummary:    aiPayload.executiveSummary,
      recommendations:     aiPayload.recommendations,
      actionPlan:          aiPayload.actionPlan,
    },
    update: {
      netMonthlyIncome:    metrics.netMonthlyIncome,
      breakEvenEnrollment: metrics.breakEvenEnrollment,
      capacityUtilization: metrics.capacityUtilization,
      largestExpenseName:  metrics.largestExpenseName,
      largestExpensePct:   metrics.largestExpensePct,
      executiveSummary:    aiPayload.executiveSummary,
      recommendations:     aiPayload.recommendations,
      actionPlan:          aiPayload.actionPlan,
    },
  });

  /* ── Mark simulation COMPLETED ── */
  await prisma.simulation.update({
    where: { id: simulationId },
    data: { status: "COMPLETED" },
  });

  /* ── Return full payload ── */
  const responsePayload: InsightData = {
    netMonthlyIncome:    insight.netMonthlyIncome,
    breakEvenEnrollment: insight.breakEvenEnrollment,
    capacityUtilization: insight.capacityUtilization,
    largestExpenseName:  insight.largestExpenseName,
    largestExpensePct:   insight.largestExpensePct,
    executiveSummary:    aiPayload.executiveSummary,
    recommendations:     aiPayload.recommendations,
    actionPlan:          aiPayload.actionPlan,
  };

  return NextResponse.json({ success: true, insight: responsePayload }, { status: 200 });
}