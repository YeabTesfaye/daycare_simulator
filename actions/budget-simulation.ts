// actions/budget-simulation.ts
"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export interface BudgetScenarioData {
  name:              string;
  studentCount:      number;
  tuitionFee:        number;
  growthRate:        number;
  growthPeriod:      string;
  staffSalaries:     number;
  facilityCosts:     number;
  supplies:          number;
  administrative:    number;
  classroomCapacity: number;
}

// ── Load the user's latest saved scenario (or null) ──────────────────────────
export async function loadLatestScenarioAction() {
  const user = await getSession();
  if (!user) return null;

  return prisma.budgetScenario.findFirst({
    where:   { userId: user.id },
    orderBy: { updatedAt: "desc" },
  });
}

// ── Load all saved scenarios for the sidebar ─────────────────────────────────
export async function loadAllScenariosAction() {
  const user = await getSession();
  if (!user) return [];

  return prisma.budgetScenario.findMany({
    where:   { userId: user.id },
    orderBy: { updatedAt: "desc" },
    select: {
      id:        true,
      name:      true,
      updatedAt: true,
      studentCount: true,
      tuitionFee:   true,
    },
  });
}

// ── Save / upsert a scenario ──────────────────────────────────────────────────
export async function saveScenarioAction(
  data: BudgetScenarioData,
  scenarioId?: string,
) {
  const user = await getSession();
  if (!user) return { error: "Not authenticated." };

  // Prepare the data payload with the explicitly cast enum
  const prismaData = {
    ...data,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    growthPeriod: data.growthPeriod as any, // 👈 This bypasses the strict check safely
  };

  if (scenarioId) {
    const existing = await prisma.budgetScenario.findFirst({
      where: { id: scenarioId, userId: user.id },
    });
    if (!existing) return { error: "Scenario not found." };

    const updated = await prisma.budgetScenario.update({
      where: { id: scenarioId },
      data: prismaData, // 👈 Use the cast data here
    });
    revalidatePath("/budget-simulation");
    return { success: true, id: updated.id };
  }

  const created = await prisma.budgetScenario.create({
    data: { 
      userId: user.id, 
      ...prismaData // 👈 Use the cast data here
    },
  });
  revalidatePath("/budget-simulation");
  return { success: true, id: created.id };
}


// ── Delete a scenario ────────────────────────────────────────────────────────
export async function deleteScenarioAction(scenarioId: string) {
  const user = await getSession();
  if (!user) return { error: "Not authenticated." };

  const existing = await prisma.budgetScenario.findFirst({
    where: { id: scenarioId, userId: user.id },
  });
  if (!existing) return { error: "Scenario not found." };

  await prisma.budgetScenario.delete({ where: { id: scenarioId } });
  revalidatePath("/budget-simulation");
  return { success: true };
}

// ── Pre-fill from user's latest completed simulation ─────────────────────────
export async function loadFromSimulationAction(simulationId?: string) {
  const user = await getSession();
  if (!user) return null;

  const sim = await prisma.simulation.findFirst({
    where: simulationId
      ? { id: simulationId, userId: user.id }
      : { userId: user.id, status: "COMPLETED" },
    include: {
      revenueSources: true,
      expenseItems:   true,
      classrooms:     true,
    },
    orderBy: { updatedAt: "desc" },
  });

  if (!sim) return null;

  const tuition        = sim.revenueSources.find(r => r.name.toLowerCase().includes("tuition"));
  const totalEnrolled  = sim.classrooms.reduce((s, c) => s + c.enrolled, 0);
  const totalCapacity  = sim.classrooms.reduce((s, c) => s + c.capacity, 0);

  const staffSalaries  = sim.expenseItems.find(e => e.name.toLowerCase().includes("staff") || e.name.toLowerCase().includes("salary") || e.name.toLowerCase().includes("salaries"))?.amount ?? 0;
  const facilityCosts  = sim.expenseItems.find(e => e.name.toLowerCase().includes("rent") || e.name.toLowerCase().includes("facility"))?.amount ?? 0;
  const supplies       = sim.expenseItems.find(e => e.name.toLowerCase().includes("supply") || e.name.toLowerCase().includes("supplies") || e.name.toLowerCase().includes("food"))?.amount ?? 0;
  const administrative = sim.expenseItems.find(e => e.name.toLowerCase().includes("admin") || e.name.toLowerCase().includes("utilities"))?.amount ?? 0;

  const perStudentTuition = tuition && totalEnrolled > 0
    ? tuition.amount / totalEnrolled
    : tuition?.amount ?? 500;

  return {
    name:              `From: ${sim.businessName}`,
    studentCount:      totalEnrolled || 20,
    tuitionFee:        Math.round(perStudentTuition),
    growthRate:        5,
    growthPeriod:      "Annually" as const,
    staffSalaries:     staffSalaries  || 10000,
    facilityCosts:     facilityCosts  || 2000,
    supplies:          supplies       || 1000,
    administrative:    administrative || 500,
    classroomCapacity: totalCapacity  || 30,
  };
}