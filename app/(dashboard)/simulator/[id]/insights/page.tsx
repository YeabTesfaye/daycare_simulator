import { redirect } from "next/navigation";
import { getSimulationAction } from "@/actions/simulation";
import { WizardHeader } from "@/components/simulator/wizard-header";
import { InsightsDashboard } from "@/components/simulator/step-insights/insights-dashboard";

export default async function InsightsPage({
  params,
}: {
  params : Promise<{ id: string }>;
}) {
  const { id } = await params;
  const simulation = await getSimulationAction(id);
  if (!simulation) redirect("/overview");
  if (!simulation.insight) redirect(`/simulator/${id}/inputs`);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <WizardHeader currentStep={2} simulationName={simulation.businessName} />
      <InsightsDashboard
        simulation={simulation}
        insight={simulation.insight}
      />
    </div>
  );
}