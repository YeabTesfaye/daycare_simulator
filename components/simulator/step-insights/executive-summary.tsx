import type { InsightData } from "@/types";

interface Props {
  summary: InsightData["executiveSummary"];
  recommendations: InsightData["recommendations"];
}

export function ExecutiveSummary({ summary, recommendations }: Props) {
  return (
    <div>
      <h3 className="text-lg font-bold text-blue-500 mb-4">
        Executive Summary
      </h3>
      <div className="space-y-3 mb-6">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Financial Overview: </span>
          {summary.financialOverview}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Profitability Status: </span>
          {summary.profitabilityStatus}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Enrollment Status: </span>
          {summary.enrollmentStatus}
        </p>
      </div>

      <h4 className="text-sm font-bold text-blue-500 mb-3">
        Recommendations:
      </h4>
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        {summary.recommendations.map((rec, idx) => (
          <div
            key={idx}
            className={`px-5 py-3 text-sm text-gray-700 ${
              idx !== summary.recommendations.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            {rec}
          </div>
        ))}
      </div>
    </div>
  );
}