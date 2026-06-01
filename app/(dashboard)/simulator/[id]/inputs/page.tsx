import { redirect } from "next/navigation";
import { getSimulationAction } from "@/actions/simulation";
import { WizardHeader } from "@/components/simulator/wizard-header";
import { InputsForm } from "@/components/simulator/step-inputs/inputs-form";

export default async function InputsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const simulation = await getSimulationAction(id);
  if (!simulation) redirect("/overview");

  // Format the data to convert 'null' properties to 'undefined'
  const sanitizedSimulation = {
    ...simulation,
    revenueSources: simulation.revenueSources.map(source => ({
      ...source,
      tag: source.tag ?? undefined,
    })),
    expenseItems: simulation.expenseItems.map(item => ({
      ...item,
      tag: item.tag ?? undefined,
    })),
    // If classrooms or businessGoals also have 'tag' properties that cause errors,
    // map over them here using the same template:
    // classrooms: simulation.classrooms.map(c => ({ ...c, tag: c.tag ?? undefined })),
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <WizardHeader currentStep={1} simulationName={simulation.businessName} />
      {/* Pass the cleaned data here */}
      <InputsForm simulation={sanitizedSimulation} />
    </div>
  );
}
