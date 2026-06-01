"use client";

import { useRouter } from "next/navigation";
import { KpiCards } from "./kpi-cards";
import { ExecutiveSummary } from "./executive-summary";
import { RecommendationCards } from "./recommendation-cards";
import { ExpenseBreakdown } from "./expense-breakdown";
import { Button } from "@/components/ui/button";
import type { InsightData } from "@/types";

interface Props {
  simulation: {
    id: string;
    businessName: string;
    expenseItems: { name: string; amount: number }[];
    revenueSources: { name: string; amount: number }[];
    classrooms: { capacity: number; enrolled: number }[];
  };
  insight: {
    netMonthlyIncome: number;
    breakEvenEnrollment: number;
    capacityUtilization: number;
    largestExpenseName: string;
    largestExpensePct: number;
    executiveSummary: unknown;
    recommendations: unknown;
    actionPlan: unknown;
  };
}

export function InsightsDashboard({ simulation, insight }: Props) {
  const router = useRouter();

  const executiveSummary = insight.executiveSummary as InsightData["executiveSummary"];
  const recommendations = insight.recommendations as InsightData["recommendations"];
  const actionPlan = insight.actionPlan as InsightData["actionPlan"];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-blue-500 mb-6">Insights</h2>

        <KpiCards
          netMonthlyIncome={insight.netMonthlyIncome}
          breakEvenEnrollment={insight.breakEvenEnrollment}
          capacityUtilization={insight.capacityUtilization}
          largestExpenseName={insight.largestExpenseName}
          largestExpensePct={insight.largestExpensePct}
          expenseItems={simulation.expenseItems}
        />

        <div className="mt-8">
          <ExecutiveSummary
            summary={executiveSummary}
            recommendations={recommendations}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-blue-500 mb-6">
          Detailed Recommendations
        </h2>
        <RecommendationCards recommendations={recommendations} />
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-blue-500 mb-2">
          Expense Breakdown
        </h2>
        <ExpenseBreakdown expenseItems={simulation.expenseItems} />
      </div>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={() => router.push(`/simulator/${simulation.id}/inputs`)}
        >
          Back to Inputs
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => router.push(`/simulator/${simulation.id}/next-steps`)}
        >
          View Action Plan →
        </Button>
      </div>
    </div>
  );
}