"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import type { InsightData } from "@/types";

interface Props {
  simulationId: string;
  actionPlan: InsightData["actionPlan"];
  recommendations: InsightData["recommendations"];
}

const PHASE_COLORS = [
  "border-l-blue-500 bg-blue-50",
  "border-l-green-500 bg-green-50",
  "border-l-purple-500 bg-purple-50",
];

export function ActionPlan({ simulationId, actionPlan, recommendations }: Props) {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-blue-500 mb-2">Action Plan</h2>
        <p className="text-sm text-gray-500 mb-8">
          A personalized roadmap based on your simulation data
        </p>

        <div className="space-y-6">
          {actionPlan.map((phase, idx) => (
            <div
              key={idx}
              className={`border-l-4 rounded-r-xl p-6 ${
                PHASE_COLORS[idx % PHASE_COLORS.length]
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="outline" className="text-xs">
                  {phase.phase}
                </Badge>
                <h3 className="font-semibold text-gray-900">{phase.title}</h3>
                <div className="ml-auto flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  {phase.timeline}
                </div>
              </div>
              <ul className="space-y-2">
                {phase.actions.map((action, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-blue-500 mb-6">
          Priority Actions Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations
            .filter(r => r.priority === "high")
            .map((rec, idx) => (
              <div
                key={idx}
                className="border border-red-200 bg-red-50 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-red-100 text-red-700 text-xs">
                    High Priority
                  </Badge>
                </div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">
                  {rec.title}
                </h4>
                <p className="text-xs text-gray-600">{rec.impact}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => router.push(`/simulator/${simulationId}/insights`)}
        >
          ← Back to Insights
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => router.push("/overview")}
        >
          New Simulation <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}