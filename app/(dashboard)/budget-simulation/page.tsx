// app/(dashboard)/budget-simulation/page.tsx

import { Metadata } from "next"; // Import the Metadata type
import { getSession } from "@/lib/auth";
import { BudgetSimulationClient } from "./budget-simulation-client";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Budget Simulation",
  description: "Simulate and manage your upcoming budgets and expenses.",
};

export default async function BudgetSimulationPage() {
  const user = await getSession();

  if(!user) redirect("/login")
  const initials = user.name
    ? user.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)
    : user.email[0].toUpperCase();

  return <BudgetSimulationClient userInitials={initials} />;
}
