"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { openai } from "@/lib/openai";
import type { InsightData } from "@/types";

function computeMetrics(sim: Awaited<ReturnType<typeof prisma.simulation.findFirst>> & {
  revenueSources: { name: string; amount: number }[];
  expenseItems: { name: string; amount: number }[];
  classrooms: { capacity: number; enrolled: number }[];
}) {
  const totalRevenue = sim!.revenueSources.reduce((s, r) => s + r.amount, 0);
  const totalExpenses = sim!.expenseItems.reduce((s, e) => s + e.amount, 0);
  const netMonthlyIncome = totalRevenue - totalExpenses;

  // Break-even: how many students needed at avg tuition per-student rate
  const tuition = sim!.revenueSources.find(r =>
    r.name.toLowerCase().includes("tuition")
  );
  const tuitionAmount = tuition?.amount ?? totalRevenue;
  const totalEnrolled = sim!.classrooms.reduce((s, c) => s + c.enrolled, 0);
  const perStudentRevenue = totalEnrolled > 0 ? tuitionAmount / totalEnrolled : tuitionAmount;
  const breakEvenEnrollment = perStudentRevenue > 0
    ? Math.ceil(totalExpenses / perStudentRevenue)
    : 0;

  // Capacity
  const totalCapacity = sim!.classrooms.reduce((s, c) => s + c.capacity, 0);
  const capacityUtilization = totalCapacity > 0
    ? (totalEnrolled / totalCapacity) * 100
    : 0;

  // Largest expense
  let largestExpense = sim!.expenseItems[0];
  for (const e of sim!.expenseItems) {
    if (e.amount > largestExpense.amount) largestExpense = e;
  }
  const largestExpensePct = totalExpenses > 0
    ? (largestExpense.amount / totalExpenses) * 100
    : 0;

  return {
    totalRevenue,
    totalExpenses,
    netMonthlyIncome,
    breakEvenEnrollment,
    capacityUtilization,
    largestExpenseName: largestExpense?.name ?? "N/A",
    largestExpensePct,
  };
}

export async function generateInsightsAction(simulationId: string) {
  const user = await getSession();
  if (!user) redirect("/login");

  const sim = await prisma.simulation.findFirst({
    where: { id: simulationId, userId: user.id },
    include: {
      revenueSources: true,
      expenseItems: true,
      classrooms: true,
      businessGoals: true,
    },
  });

  if (!sim) return { error: "Simulation not found." };

  const metrics = computeMetrics(sim as Parameters<typeof computeMetrics>[0]);

  const prompt = `
You are an expert financial advisor and operations consultant specializing in childcare and daycare centers.

Analyze the following daycare center data and provide structured insights:

**Business:** ${sim.businessName}
**Operating Hours:** ${sim.operatingHours} hours/day, ${sim.operatingDays} days/year

**Revenue Sources:**
${sim.revenueSources.map(r => `- ${r.name}: $${r.amount}/month`).join("\n")}
**Total Monthly Revenue:** $${metrics.totalRevenue}

**Expense Items:**
${sim.expenseItems.map(e => `- ${e.name}: $${e.amount}/month`).join("\n")}
**Total Monthly Expenses:** $${metrics.totalExpenses}

**Net Monthly Income:** $${metrics.netMonthlyIncome}

**Classrooms:**
${sim.classrooms.map(c => `- ${c.name}: ${c.enrolled}/${c.capacity} enrolled (staff ratio 1:${c.staffRatio})`).join("\n")}
**Capacity Utilization:** ${metrics.capacityUtilization.toFixed(1)}%
**Break-Even Enrollment:** ${metrics.breakEvenEnrollment} students

**Business Goals:**
${sim.businessGoals.map(g => `- ${g.name}: ${g.targetValue}${g.unit}`).join("\n")}

Respond ONLY with valid JSON (no markdown) in this exact structure:
{
  "executiveSummary": {
    "financialOverview": "2-3 sentence overview of financial health",
    "profitabilityStatus": "1-2 sentence profitability assessment",
    "enrollmentStatus": "1-2 sentence enrollment assessment",
    "recommendations": ["recommendation 1", "recommendation 2", "recommendation 3", "recommendation 4"]
  },
  "recommendations": [
    {
      "title": "Short title",
      "description": "Detailed description of the recommendation",
      "priority": "high|medium|low",
      "impact": "Expected financial or operational impact"
    }
  ],
  "actionPlan": [
    {
      "phase": "Phase 1",
      "title": "Phase title",
      "actions": ["action 1", "action 2", "action 3"],
      "timeline": "e.g. Week 1-2"
    }
  ]
}

Provide exactly 5 recommendations and 3 action plan phases. Be specific with numbers and percentages based on the actual data provided.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    max_tokens: 2000,
  });

  let aiData: InsightData;
  
  try {
    const raw = response.choices[0].message.content ?? "{}";
    aiData = JSON.parse(raw);
  } catch {
    return { error: "Failed to parse AI response." };
  }

  await prisma.insight.upsert({
    where: { simulationId },
    update: {
      netMonthlyIncome: metrics.netMonthlyIncome,
      breakEvenEnrollment: metrics.breakEvenEnrollment,
      capacityUtilization: metrics.capacityUtilization,
      largestExpenseName: metrics.largestExpenseName,
      largestExpensePct: metrics.largestExpensePct,
      executiveSummary: aiData.executiveSummary,
      recommendations: aiData.recommendations,
      actionPlan: aiData.actionPlan,
    },
    create: {
      simulationId,
      netMonthlyIncome: metrics.netMonthlyIncome,
      breakEvenEnrollment: metrics.breakEvenEnrollment,
      capacityUtilization: metrics.capacityUtilization,
      largestExpenseName: metrics.largestExpenseName,
      largestExpensePct: metrics.largestExpensePct,
      executiveSummary: aiData.executiveSummary,
      recommendations: aiData.recommendations,
      actionPlan: aiData.actionPlan,
    },
  });

  await prisma.simulation.update({
    where: { id: simulationId },
    data: { status: "COMPLETED" },
  });

  redirect(`/simulator/${simulationId}/insights`);
}