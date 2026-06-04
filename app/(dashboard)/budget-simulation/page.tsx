// app/(dashboard)/budget-simulation/page.tsx
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BudgetSimulationClient } from "./budget-simulation-client";

export const metadata: Metadata = {
  title: "Budget Simulation | AI Insight Simulator",
  description: "Test different financial scenarios for your daycare center.",
};

export const dynamic = "force-dynamic";

export default async function BudgetSimulationPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const initials = user.name
    ? user.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)
    : user.email[0].toUpperCase();

  // Latest saved scenario (pre-loads the last thing they worked on)
  const savedScenario = await prisma.budgetScenario.findFirst({
    where:   { userId: user.id },
    orderBy: { updatedAt: "desc" },
  });

  // All scenario names for the switcher dropdown
  const allScenarios = await prisma.budgetScenario.findMany({
    where:   { userId: user.id },
    orderBy: { updatedAt: "desc" },
    select:  { id: true, name: true, updatedAt: true },
  });

  // Latest completed simulation to offer "Load from simulation" pre-fill
  const latestSim = await prisma.simulation.findFirst({
    where:   { userId: user.id, status: "COMPLETED" },
    include: { revenueSources: true, expenseItems: true, classrooms: true },
    orderBy: { updatedAt: "desc" },
  });

  let simDefaults: {
    studentCount:      number;
    tuitionFee:        number;
    staffSalaries:     number;
    facilityCosts:     number;
    supplies:          number;
    administrative:    number;
    classroomCapacity: number;
    sourceName:        string;
  } | null = null;

  if (latestSim) {
    const tuitionLine   = latestSim.revenueSources.find(r =>
      r.name.toLowerCase().includes("tuition")
    );
    const totalEnrolled = latestSim.classrooms.reduce((s, c) => s + c.enrolled, 0);
    const totalCapacity = latestSim.classrooms.reduce((s, c) => s + c.capacity, 0);

    const find = (kws: string[]) =>
      latestSim.expenseItems.find(e =>
        kws.some(k => e.name.toLowerCase().includes(k))
      )?.amount ?? 0;

    simDefaults = {
      sourceName:        latestSim.businessName,
      studentCount:      totalEnrolled || 20,
      tuitionFee:
        tuitionLine && totalEnrolled > 0
          ? Math.round(tuitionLine.amount / totalEnrolled)
          : (tuitionLine?.amount ?? 500),
      staffSalaries:     find(["staff", "salary", "salaries"]),
      facilityCosts:     find(["rent", "facility", "facilities"]),
      supplies:          find(["supply", "supplies", "food"]),
      administrative:    find(["admin", "utilities", "utility"]),
      classroomCapacity: totalCapacity || 30,
    };
  }

  return (
    <BudgetSimulationClient
      userInitials={initials}
      savedScenario={savedScenario}
      allScenarios={allScenarios}
      simDefaults={simDefaults}
    />
  );
}