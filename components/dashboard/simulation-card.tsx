import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, ArrowRight } from "lucide-react";

interface Props {
  simulation: {
    id: string;
    businessName: string;
    status: string;
    updatedAt: Date;
    insight?: { netMonthlyIncome: number } | null;
  };
}

export function SimulationCard({ simulation }: Props) {
  const href =
    simulation.status === "COMPLETED"
      ? `/simulator/${simulation.id}/insights`
      : `/simulator/${simulation.id}/inputs`;

  return (
    <Link href={href}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer border-gray-200">
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Building2 className="h-5 w-5 text-blue-500" />
            </div>
            <Badge
              variant={simulation.status === "COMPLETED" ? "default" : "secondary"}
              className={
                simulation.status === "COMPLETED"
                  ? "bg-green-100 text-green-700 hover:bg-green-100"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
              }
            >
              {simulation.status === "COMPLETED" ? "Completed" : "Draft"}
            </Badge>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">
            {simulation.businessName}
          </h3>
          <p className="text-xs text-gray-400 mb-4">
            Updated {formatDistanceToNow(simulation.updatedAt)} ago
          </p>
          {simulation.insight && (
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-gray-400" />
              <span
                className={
                  simulation.insight.netMonthlyIncome >= 0
                    ? "text-green-600 font-medium"
                    : "text-red-600 font-medium"
                }
              >
                ${simulation.insight.netMonthlyIncome.toLocaleString()}/mo
              </span>
            </div>
          )}
          <div className="mt-3 flex items-center text-blue-500 text-xs font-medium">
            View {simulation.status === "COMPLETED" ? "Insights" : "Inputs"}{" "}
            <ArrowRight className="h-3 w-3 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}