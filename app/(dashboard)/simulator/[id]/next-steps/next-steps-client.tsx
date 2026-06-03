"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import type { InsightData } from "@/types";

interface Props {
  simulationId: string;
  actionPlan: InsightData["actionPlan"];
  recommendations: InsightData["recommendations"];
  executiveSummaryRecs: string[];
  netMonthlyIncome: number;
}

// ✅ Fixed: score based purely on income + checked actions (0-100)
function healthScore(netIncome: number, checkedCount: number, totalCount: number): number {
  // Income contributes 60pts: profitable = full 60, loss scales down
  const incomeScore = netIncome >= 0
    ? Math.min(60, 30 + (netIncome / 5000) * 30) // profitable: 30-60
    : Math.max(0, 30 + (netIncome / 5000) * 30);  // loss: 0-30
  const actionScore = totalCount > 0 ? (checkedCount / totalCount) * 40 : 0;
  return Math.min(100, Math.round(incomeScore + actionScore));
}

function performanceLabel(score: number) {
  if (score >= 80) return {
    label: "Excellent Performance!",
    message: "Your center shows strong financial health. Keep monitoring your metrics and consider growth opportunities.",
    color: "text-green-600",
    bg: "bg-green-50 border-green-200",
    dotColor: "bg-green-500",
  };
  if (score >= 50) return {
    label: "Good Performance",
    message: "Your center is on track. Focus on the recommended actions below to move from good to excellent.",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
    dotColor: "bg-blue-500",
  };
  return {
    label: "Needs Attention",
    message: "Your center has significant areas for improvement. Review the action items carefully and prioritise high-impact changes.",
    color: "text-yellow-600",
    bg: "bg-yellow-50 border-yellow-200",
    dotColor: "bg-yellow-500",
  };
}

const priorityConfig = {
  high:   { label: "High",   class: "bg-red-100 text-red-700 border-red-200" },
  medium: { label: "Medium", class: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  low:    { label: "Low",    class: "bg-green-100 text-green-700 border-green-200" },
};

export function NextStepsClient({
  simulationId,
  actionPlan,
  recommendations,
  executiveSummaryRecs,
  netMonthlyIncome,
}: Props) {
  const router = useRouter();
  const [checked, setChecked] = useState<boolean[]>(executiveSummaryRecs.map(() => false));

  function toggle(idx: number) {
    setChecked(prev => prev.map((v, i) => (i === idx ? !v : v)));
  }

  const checkedCount = checked.filter(Boolean).length;
  const score = healthScore(netMonthlyIncome, checkedCount, executiveSummaryRecs.length);
  const perf  = performanceLabel(score);

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl border border-t-4 border-t-blue-400 border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-blue-500">Next Steps</h2>
          <p className="text-sm text-gray-500 mt-0.5">Personalized Action Plan for Improvement</p>
        </div>

        <div className="p-8 space-y-8">

          {/* ── Action checklist ── */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-500 mb-1">Personalized Action Plan</h3>
            <p className="text-sm text-gray-500 mb-6">
              Check off items as you complete them — your progress score updates in real time.
            </p>
            <div className="space-y-0 divide-y divide-gray-100">
              {executiveSummaryRecs.map((action, idx) => (
                <label key={idx} className="flex items-start gap-3 py-4 cursor-pointer group">
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
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className={cn("text-sm leading-relaxed transition-colors", checked[idx] ? "text-gray-400 line-through" : "text-gray-700")}>
                    {action}
                  </span>
                </label>
              ))}
            </div>
            {/* ✅ live counter */}
            <p className="text-xs text-gray-400 mt-4">
              {checkedCount} of {executiveSummaryRecs.length} actions completed
            </p>
          </div>

          {/* ── Progress ── */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-blue-500">Your Progress</h3>
              {/* ✅ show score number */}
              <span className={cn("text-2xl font-bold", perf.color)}>{score}%</span>
            </div>
            <div className="relative mb-6">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${score}%`,
                    background: score >= 80 ? "#22c55e" : score >= 50 ? "#3b82f6" : "#f59e0b",
                  }}
                />
              </div>
              <div
                className={cn("absolute -top-1.5 h-6 w-6 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm", perf.dotColor)}
                style={{ left: `calc(${Math.min(score, 95)}% - 12px)` }}
              >
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            {/* ✅ income context */}
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
              <TrendingUp className="h-4 w-4" />
              <span>
                Net monthly income:{" "}
                <span className={cn("font-semibold", netMonthlyIncome >= 0 ? "text-green-600" : "text-red-600")}>
                  ${netMonthlyIncome.toLocaleString()}/mo
                </span>
                {" "}· Actions completed: <span className="font-semibold text-gray-700">{checkedCount}/{executiveSummaryRecs.length}</span>
              </span>
            </div>
            <div className={cn("border rounded-xl p-4 flex items-start gap-3", perf.bg)}>
              <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5", perf.dotColor)}>
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className={cn("font-semibold text-sm", perf.color)}>{perf.label}</p>
                <p className="text-sm text-gray-600 mt-1">{perf.message}</p>
              </div>
            </div>
          </div>

          {/* ── ✅ AI Recommendations (was unused) ── */}
          {recommendations.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-500 mb-1">Detailed Recommendations</h3>
              <p className="text-sm text-gray-500 mb-5">AI-generated recommendations ranked by priority</p>
              <div className="space-y-3">
                {recommendations.map((rec, idx) => {
                  const p = priorityConfig[rec.priority] ?? priorityConfig.medium;
                  return (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900 text-sm">{rec.title}</h4>
                        <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full border shrink-0", p.class)}>
                          {p.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Info className="h-3 w-3" />
                        <span>Impact: {rec.impact}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Implementation Roadmap ── */}
          {actionPlan.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-500 mb-5">Implementation Roadmap</h3>
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
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{phase.phase}</span>
                          <span className="font-semibold text-gray-900 text-sm">— {phase.title}</span>
                        </div>
                        <span className="text-xs text-gray-400 bg-white px-2 py-0.5 rounded-full border border-gray-200">{phase.timeline}</span>
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

      <div className="flex items-center justify-between pb-4">
        <Button variant="outline" onClick={() => router.push(`/simulator/${simulationId}/inputs`)}>
          Back to Inputs
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => router.push(`/simulator/${simulationId}/insights`)}>
          View Insights
        </Button>
      </div>
    </div>
  );
}