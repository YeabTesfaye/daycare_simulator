// components/simulator/step-next-steps/next-steps-client.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { InsightData } from "@/types";

interface Props {
  simulationId: string;
  actionPlan: InsightData["actionPlan"];
  recommendations: InsightData["recommendations"];
  executiveSummaryRecs: string[];
  netMonthlyIncome: number;
}

/* derive a 0-100 health score from net income + action plan phases */
function healthScore(netIncome: number, checkedCount: number, totalCount: number): number {
  const incomeScore  = netIncome >= 0 ? Math.min(60, 60 * (netIncome / 5000)) : 0;
  const actionScore  = totalCount > 0 ? (checkedCount / totalCount) * 40 : 40;
  return Math.min(100, Math.round(incomeScore + actionScore));
}

function performanceLabel(score: number): {
  label: string;
  message: string;
  color: string;
  bg: string;
} {
  if (score >= 80)
    return {
      label: "Excellent Performance!",
      message:
        "Your center simulation shows strong financial health with no immediate action items. Keep monitoring your metrics and consider growth opportunities.",
      color: "text-green-600",
      bg: "bg-green-50 border-green-200",
    };
  if (score >= 50)
    return {
      label: "Good Performance",
      message:
        "Your center is on track. Focus on the recommended actions below to move from good to excellent.",
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-200",
    };
  return {
    label: "Needs Attention",
    message:
      "Your center has significant areas for improvement. Review the action items carefully and prioritise high-impact changes.",
    color: "text-yellow-600",
    bg: "bg-yellow-50 border-yellow-200",
  };
}

export function NextStepsClient({
  simulationId,
  actionPlan,
  recommendations,
  executiveSummaryRecs,
  netMonthlyIncome,
}: Props) {
  const router = useRouter();

  // Build a flat list of all actionable items from executiveSummaryRecs
  // (mirrors what the Insights page shows in the recommendations box)
  const allActions = executiveSummaryRecs;
  const [checked, setChecked] = useState<boolean[]>(allActions.map(() => false));

  function toggle(idx: number) {
    setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  }

  const checkedCount = checked.filter(Boolean).length;
  const score        = healthScore(netMonthlyIncome, checkedCount, allActions.length);
  const perf         = performanceLabel(score);

  return (
    <div className="space-y-5">
      {/* ── Wizard card wrapper (blue top border like inputs/insights) ── */}
      <div className="bg-white rounded-2xl border border-t-4 border-t-blue-400 border-gray-200 shadow-sm">

        {/* Header strip */}
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-blue-500">Next Steps</h2>
          <p className="text-sm text-gray-500 mt-0.5">Personalized Action Plan for Improvement</p>
        </div>

        <div className="p-8 space-y-8">

          {/* ── Personalized Action Plan (checkbox list) ── */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-500 mb-1">
              Personalized Action Plan
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Based on your simulation results, here are targeted recommendations
              to improve your center&apos;s performance
            </p>

            <div className="space-y-0 divide-y divide-gray-100">
              {allActions.map((action, idx) => (
                <label
                  key={idx}
                  className="flex items-start gap-3 py-4 cursor-pointer group"
                >
                  {/* Custom checkbox styled like screenshot */}
                  <div
                    onClick={() => toggle(idx)}
                    className={cn(
                      "mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border-2 transition-colors",
                      checked[idx]
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300 bg-white group-hover:border-blue-400",
                    )}
                  >
                    {checked[idx] && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-sm leading-relaxed transition-colors",
                      checked[idx] ? "text-gray-400 line-through" : "text-gray-700",
                    )}
                  >
                    {action}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* ── Your Progress ── */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-500 mb-5">Your Progress</h3>

            {/* Progress bar */}
            <div className="relative mb-4">
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${score}%`,
                    background:
                      score >= 80
                        ? "#22c55e"
                        : score >= 50
                        ? "#3b82f6"
                        : "#f59e0b",
                  }}
                />
              </div>
              {/* Checkmark badge at end */}
              <div
                className={cn(
                  "absolute -top-1 h-6 w-6 rounded-full flex items-center justify-center transition-all duration-500",
                  score >= 80 ? "bg-green-500" : score >= 50 ? "bg-blue-500" : "bg-yellow-500",
                )}
                style={{ left: `calc(${score}% - 12px)` }}
              >
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Performance message */}
            <div className={cn("border rounded-xl p-4 flex items-start gap-3 mt-6", perf.bg)}>
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                  score >= 80 ? "bg-green-500" : score >= 50 ? "bg-blue-500" : "bg-yellow-500",
                )}
              >
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className={cn("font-semibold text-sm", perf.color)}>{perf.label}</p>
                <p className="text-sm text-gray-600 mt-1">{perf.message}</p>
              </div>
            </div>
          </div>

          {/* ── Phase breakdown from AI ── */}
          {actionPlan.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-500 mb-5">
                Implementation Roadmap
              </h3>
              <div className="space-y-4">
                {actionPlan.map((phase, idx) => {
                  const colors = [
                    { border: "border-l-blue-500",   bg: "bg-blue-50"   },
                    { border: "border-l-green-500",  bg: "bg-green-50"  },
                    { border: "border-l-purple-500", bg: "bg-purple-50" },
                  ];
                  const c = colors[idx % colors.length];
                  return (
                    <div key={idx} className={cn("border-l-4 rounded-r-xl p-4", c.border, c.bg)}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {phase.phase}
                          </span>
                          <span className="font-semibold text-gray-900 text-sm">
                            — {phase.title}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 bg-white px-2 py-0.5 rounded-full border border-gray-200">
                          {phase.timeline}
                        </span>
                      </div>
                      <ul className="space-y-1.5 mt-3">
                        {phase.actions.map((action, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Footer nav ── */}
      <div className="flex items-center justify-between pb-4">
        <Button
          variant="outline"
          onClick={() => router.push(`/simulator/${simulationId}/inputs`)}
        >
          Back to Inputs
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => router.push(`/simulator/${simulationId}/insights`)}
        >
          View Insights
        </Button>
      </div>
    </div>
  );
}