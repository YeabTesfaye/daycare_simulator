"use client";
import Link from "next/link";
import { useState, useTransition } from "react";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Building2, TrendingUp, ArrowRight, Trash2, Loader2 } from "lucide-react";
import { deleteSimulation } from "@/actions/simulation";
import { toast } from "sonner";

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
  const [isPending, startTransition] = useTransition();
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

  const href =
    simulation.status === "COMPLETED"
      ? `/simulator/${simulation.id}/insights`
      : `/simulator/${simulation.id}/inputs`;

  function handleDelete() {
    startTransition(async () => {
      try {
        await deleteSimulation(simulation.id);
        toast.success(`"${simulation.businessName}" deleted`);
        setDialogOpen(false);
        router.refresh();
      } catch (err) {
        console.error("Delete error:", err);
        toast.error("Failed to delete simulation");
      }
    });
  }

  return (
    <>
      {/* ✅ AlertDialog is completely outside the Link */}
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete simulation?</AlertDialogTitle>
            <AlertDialogDescription>
              <span className="font-medium text-gray-900">
                {simulation.businessName}
              </span>{" "}
              and all its data will be permanently removed. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
                disabled={isPending}
                className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50">
                            Cancel
              </AlertDialogCancel>
            <Button
              onClick={handleDelete}
              disabled={isPending}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 mr-2 animate-spin" />
                  Deleting…
                </>
              ) : (
                "Delete"
              )}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Card with trash button trigger — no AlertDialogTrigger needed */}
      <div className="relative group">
        {/* ✅ Trash button directly sets dialogOpen, no AlertDialogTrigger */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDialogOpen(true); // ✅ open dialog via state, not trigger
            }}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>

        <Link href={href}>
          <Card
            className={`hover:shadow-md transition-all cursor-pointer border-gray-200 ${
              isPending ? "opacity-50 pointer-events-none" : ""
            }`}
          >
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
                View {simulation.status === "COMPLETED" ? "Insights" : "Inputs"}
                <ArrowRight className="h-3 w-3 ml-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </>
  );
}