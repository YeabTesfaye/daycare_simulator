"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import type { SimulationFormData } from "@/types";

// Strips any DB-generated fields before passing to Prisma nested create
function cleanRevenue(items: SimulationFormData["revenueSources"]) {
  return items.map((r) => ({ name: r.name, amount: r.amount, tag: r.tag }));
}
function cleanExpenses(items: SimulationFormData["expenseItems"]) {
  return items.map((e) => ({ name: e.name, amount: e.amount, tag: e.tag }));
}
function cleanClassrooms(items: SimulationFormData["classrooms"]) {
  return items.map((c) => ({
    name: c.name,
    capacity: c.capacity,
    staffRatio: c.staffRatio,
    enrolled: c.enrolled,
  }));
}
function cleanGoals(items: SimulationFormData["businessGoals"]) {
  return items.map((g) => ({
    name: g.name,
    targetValue: g.targetValue,
    unit: g.unit,
  }));
}

export async function createSimulationAction() {
  const user = await getSession();
  if (!user) redirect("/login");

  const sim = await prisma.simulation.create({
    data: {
      userId: user.id,
      businessName: "My Daycare Center",
      revenueSources: {
        create: [
          { name: "Tuition", amount: 15000 },
          { name: "Application Fee", amount: 500 },
        ],
      },
      expenseItems: {
        create: [
          { name: "Staff Salaries", amount: 10000 },
          { name: "Food Supplies", amount: 3000 },
          { name: "Rent", amount: 2000 },
          { name: "Utilities", amount: 400 },
        ],
      },
      classrooms: {
        create: [
          { name: "Toddler Room", capacity: 10, staffRatio: 4.0, enrolled: 8 },
          { name: "Pre school Room", capacity: 15, staffRatio: 6.0, enrolled: 12 },
        ],
      },
      businessGoals: {
        create: [
          { name: "Increase Enrollment", targetValue: 15, unit: "%" },
          { name: "Reduce supply costs", targetValue: 10, unit: "%" },
        ],
      },
    },
  });

  redirect(`/simulator/${sim.id}/inputs`);
}

export async function saveSimulationAction(
  simulationId: string,
  data: SimulationFormData
) {
  const user = await getSession();
  if (!user) redirect("/login");

  const sim = await prisma.simulation.findUnique({
    where: { id: simulationId },
  });
  if (!sim || sim.userId !== user.id) {
    return { error: "Not found." };
  }

  await prisma.$transaction(async (tx) => {
    await tx.revenueSource.deleteMany({ where: { simulationId } });
    await tx.expenseItem.deleteMany({ where: { simulationId } });
    await tx.classroom.deleteMany({ where: { simulationId } });
    await tx.businessGoal.deleteMany({ where: { simulationId } });

    await tx.simulation.update({
      where: { id: simulationId },
      data: {
        businessName: data.businessName,
        operatingHours: data.operatingHours,
        operatingDays: data.operatingDays,
        revenueSources: { create: cleanRevenue(data.revenueSources) },
        expenseItems: { create: cleanExpenses(data.expenseItems) },
        classrooms: { create: cleanClassrooms(data.classrooms) },
        businessGoals: { create: cleanGoals(data.businessGoals) },
      },
    });
  });

  revalidatePath(`/simulator/${simulationId}/inputs`);
  return { success: true };
}

export async function getSimulationsAction() {
  const user = await getSession();
  if (!user) return [];

  return prisma.simulation.findMany({
    where: { userId: user.id },
    include: { insight: true },
    orderBy: { updatedAt: "desc" },
  });
}

export async function getSimulationAction(id: string) {
  const user = await getSession();
  if (!user) redirect("/login");

  return prisma.simulation.findFirst({
    where: { id, userId: user.id },
    include: {
      revenueSources: true,
      expenseItems: true,
      classrooms: true,
      businessGoals: true,
      insight: true,
    },
  });
}