import { redirect } from "next/navigation";
import { getSimulationAction } from "@/actions/simulation";
import { WizardHeader } from "@/components/simulator/wizard-header";
import { ActionPlan } from "@/components/simulator/step-next-steps/action-plan";

export default async function NextStepsPage({
  params,
}: {
  params: { id: string };
}) {
  const simulation = await getSimulationAction(params.id);
  if (!simulation || !simulation.insight) redirect("/overview");

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <WizardHeader currentStep={3} simulationName={simulation.businessName} />
      <ActionPlan
        simulationId={simulation.id}
        actionPlan={simulation.insight.actionPlan as Parameters<typeof ActionPlan>[0]["actionPlan"]}
        recommendations={simulation.insight.recommendations as Parameters<typeof ActionPlan>[0]["recommendations"]}
      />
    </div>
  );
}