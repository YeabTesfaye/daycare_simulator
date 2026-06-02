// app/(dashboard)/simulator/[id]/next-steps/page.tsx
import { redirect } from "next/navigation";
import { getSimulationAction } from "@/actions/simulation";
import { WizardHeader } from "@/components/simulator/wizard-header";
import type { InsightData } from "@/types";
import { NextStepsClient } from "./next-steps-client";

export default async function NextStepsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const simulation = await getSimulationAction(id);
  if (!simulation || !simulation.insight) {
    redirect(`/simulator/${id}/inputs`);
  }

  const actionPlan     = simulation.insight.actionPlan     as InsightData["actionPlan"];
  const recommendations = simulation.insight.recommendations as InsightData["recommendations"];
  const executiveSummary = simulation.insight.executiveSummary as InsightData["executiveSummary"];
  const netMonthlyIncome = simulation.insight.netMonthlyIncome;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <WizardHeader currentStep={3} simulationName={simulation.businessName} />
      <NextStepsClient
        simulationId={simulation.id}
        actionPlan={actionPlan}
        recommendations={recommendations}
        executiveSummaryRecs={executiveSummary.recommendations}
        netMonthlyIncome={netMonthlyIncome}
      />
    </div>
  );
}