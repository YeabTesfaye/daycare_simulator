import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { FileText } from "lucide-react";

export default async function ReportsPage() {
  const user = await getSession();
  const simulations = await prisma.simulation.findMany({
    where: { userId: user!.id, status: "COMPLETED" },
    include: { insight: true },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Reports</h1>
      {simulations.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border">
          <FileText className="h-10 w-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No completed simulations yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {simulations.map(sim => (
            <Link
              key={sim.id}
              href={`/simulator/${sim.id}/insights`}
              className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">{sim.businessName}</h3>
                <p className="text-sm text-gray-400">
                  Generated {formatDistanceToNow(sim.updatedAt)} ago
                </p>
              </div>
              {sim.insight && (
                <div className="text-right">
                  <p className={`font-bold ${sim.insight.netMonthlyIncome >= 0 ? "text-green-600" : "text-red-500"}`}>
                    ${sim.insight.netMonthlyIncome.toLocaleString()}/mo
                  </p>
                  <p className="text-xs text-gray-400">
                    {sim.insight.capacityUtilization.toFixed(1)}% capacity
                  </p>
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}