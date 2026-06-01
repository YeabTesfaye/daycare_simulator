import type { InsightData } from "@/types";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

interface Props {
  recommendations: InsightData["recommendations"];
}

const PRIORITY_STYLES = {
  high: "bg-red-100 text-red-700",
  medium: "bg-yellow-100 text-yellow-700",
  low: "bg-green-100 text-green-700",
};

export function RecommendationCards({ recommendations }: Props) {
  return (
    <div className="space-y-4">
      {recommendations.map((rec, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition-colors"
        >
          <div className="flex items-start justify-between gap-4 mb-2">
            <h4 className="font-semibold text-gray-900 text-sm">{rec.title}</h4>
            <Badge className={PRIORITY_STYLES[rec.priority]}>
              {rec.priority} priority
            </Badge>
          </div>
          <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
          <div className="flex items-center gap-2 text-xs text-blue-600 bg-blue-50 rounded-lg px-3 py-2">
            <TrendingUp className="h-3 w-3 shrink-0" />
            <span>{rec.impact}</span>
          </div>
        </div>
      ))}
    </div>
  );
}