import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createSimulationAction } from "@/actions/simulation";
import { Button } from "@/components/ui/button";
import { SimulationCard } from "@/components/dashboard/simulation-card";
import { Plus, FlaskConical } from "lucide-react";

export default async function OverviewPage() {
  const user = await getSession();
  const simulations = await prisma.simulation.findMany({
    where: { userId: user!.id },
    include: { insight: true },
    orderBy: { updatedAt: "desc" },
  });

  console.log("Simulations:", simulations);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your daycare simulations
          </p>
        </div>
        <form action={createSimulationAction}>
          <Button className="bg-blue-500 hover:bg-blue-600 gap-2">
            <Plus className="h-4 w-4" /> New Simulation
          </Button>
        </form>
      </div>

      {simulations.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-2xl border border-gray-200">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <FlaskConical className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            No simulations yet
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Create your first simulation to get AI-powered insights.
          </p>
          <form action={createSimulationAction}>
            <Button className="bg-blue-500 hover:bg-blue-600">
              Create Simulation
            </Button>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {simulations.map(sim => (
            <SimulationCard key={sim.id} simulation={sim} />
          ))}
        </div>
      )}
    </div>
  );
}