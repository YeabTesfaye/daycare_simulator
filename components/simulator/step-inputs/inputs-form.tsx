// components/simulator/step-inputs/inputs-form.tsx
"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { saveSimulationAction } from "@/actions/simulation";
import { generateInsightsAction } from "@/actions/insights";
import { RevenueSources } from "./revenue-sources";
import { ExpenseItems } from "./expense-items";
import { ClassroomSection } from "./classroom-section";
import { OperatingDetails } from "./operating-details";
import { BusinessGoals } from "./business-goals";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Loader2 } from "lucide-react";
import type {
  RevenueSourceInput,
  ExpenseItemInput,
  ClassroomInput,
  BusinessGoalInput,
} from "@/types";

interface Props {
  simulation: {
    id: string;
    businessName: string;
    operatingHours: number;
    operatingDays: number;
    revenueSources: RevenueSourceInput[];
    expenseItems: ExpenseItemInput[];
    classrooms: ClassroomInput[];
    businessGoals: BusinessGoalInput[];
  };
}

export function InputsForm({ simulation }: Props) {
  const router = useRouter();

  const [isPendingSave, startSave]         = useTransition();
  const [isPendingGenerate, startGenerate] = useTransition();
  const [saveSuccess, setSaveSuccess]      = useState(false);
  const [generateError, setGenerateError]  = useState<string | null>(null);

  const [businessName,    setBusinessName]    = useState(simulation.businessName);
  const [operatingHours,  setOperatingHours]  = useState(simulation.operatingHours);
  const [operatingDays,   setOperatingDays]   = useState(simulation.operatingDays);
  const [revenueSources,  setRevenueSources]  = useState<RevenueSourceInput[]>(simulation.revenueSources);
  const [expenseItems,    setExpenseItems]    = useState<ExpenseItemInput[]>(simulation.expenseItems);
  const [classrooms,      setClassrooms]      = useState<ClassroomInput[]>(simulation.classrooms);
  const [businessGoals,   setBusinessGoals]   = useState<BusinessGoalInput[]>(simulation.businessGoals);

  const formData = {
    businessName,
    operatingHours,
    operatingDays,
    revenueSources,
    expenseItems,
    classrooms,
    businessGoals,
  };

  /* ── Save without generating ── */
  function handleSave() {
    setSaveSuccess(false);
    startSave(async () => {
      const result = await saveSimulationAction(simulation.id, formData);
      if (!result?.error) setSaveSuccess(true);
    });
  }

  /* ── Save then generate (calls API route via server action) ── */
  function handleGenerate() {
    setGenerateError(null);
    startGenerate(async () => {
      // Save first so the API route reads fresh data
      await saveSimulationAction(simulation.id, formData);

      const result = await generateInsightsAction(simulation.id);
      // generateInsightsAction redirects on success, so we only land here on error
      if (result?.error) setGenerateError(result.error);
    });
  }

  const isBusy = isPendingSave || isPendingGenerate;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-xl font-bold text-blue-500 mb-6">
        Operational &amp; Financial Data Entry
      </h2>

      {/* ── Business Information ── */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="font-semibold text-gray-800">Business Information</h3>
          <span className="text-gray-400 text-sm" title="The name of your daycare centre">ⓘ</span>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <Label htmlFor="businessName" className="sr-only">Business Name</Label>
          <Input
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Your Daycare Center Name"
            className="border-0 text-gray-700 text-base focus-visible:ring-0 p-0 h-auto"
          />
        </div>
      </section>

      <RevenueSources  items={revenueSources} onChange={setRevenueSources} />
      <ExpenseItems    items={expenseItems}   onChange={setExpenseItems} />
      <ClassroomSection classrooms={classrooms} onChange={setClassrooms} />
      <OperatingDetails
        hours={operatingHours}
        days={operatingDays}
        onHoursChange={setOperatingHours}
        onDaysChange={setOperatingDays}
      />
      <BusinessGoals goals={businessGoals} onChange={setBusinessGoals} />

      {/* ── Status messages ── */}
      {saveSuccess && !isPendingSave && (
        <div className="flex items-center gap-2 text-green-700 text-sm bg-green-50
                        border border-green-200 rounded-lg px-4 py-3 mb-4">
          ✓ Inputs saved successfully.
        </div>
      )}

      {generateError && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50
                        border border-red-200 rounded-lg px-4 py-3 mb-4">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {generateError}
        </div>
      )}

      {/* ── Footer actions ── */}
<div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-gray-100">
  <Button
    variant="outline"
    disabled={isBusy}
    onClick={() => router.push("/overview")}
    className="rounded-lg border-gray-200 text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 px-5 transition-colors"
  >
    Back
  </Button>

  <Button
    onClick={handleSave}
    disabled={isBusy}
    className="bg-[#52c41a] hover:opacity-90 text-white rounded-lg px-5 border-none shadow-none disabled:opacity-50 transition-opacity"
  >
    {isPendingSave && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
    {isPendingSave ? "Saving…" : "Save My Inputs"}
  </Button>

  <Button
    onClick={handleGenerate}
    disabled={isBusy}
    className="bg-[#1890ff] hover:opacity-90 text-white rounded-lg px-5 border-none shadow-none disabled:opacity-50 transition-opacity"
  >
    {isPendingGenerate && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
    {isPendingGenerate ? "Generating…" : "Generate Insights"}
  </Button>
</div>

    </div>
  );
}