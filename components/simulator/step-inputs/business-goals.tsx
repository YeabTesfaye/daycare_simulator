"use client";

import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import type { BusinessGoalInput } from "@/types";
import { nanoid } from "nanoid";

interface Props {
  goals: BusinessGoalInput[];
  onChange: (goals: BusinessGoalInput[]) => void;
}

export function BusinessGoals({ goals, onChange }: Props) {
  function addGoal() {
    onChange([...goals, { id: nanoid(), name: "", targetValue: 0, unit: "%" }]);
  }
  function removeGoal(idx: number) {
    onChange(goals.filter((_, i) => i !== idx));
  }
  function updateGoal(idx: number, field: keyof BusinessGoalInput, value: string | number) {
    onChange(goals.map((g, i) => (i === idx ? { ...g, [field]: value } : g)));
  }

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-semibold text-gray-800">Business Goals</h3>
        <span className="text-gray-400 text-sm">ⓘ</span>
      </div>
      <div className="space-y-3">
        {goals.map((goal, idx) => (
          <div key={goal.id ?? idx} className="border border-gray-200 rounded-xl p-4 flex items-center gap-3">
            <div className="flex-1">
              <Input
                value={goal.name}
                onChange={e => updateGoal(idx, "name", e.target.value)}
                placeholder="Goal description"
                className="border-0 p-0 h-auto focus-visible:ring-0 text-sm text-gray-700"
              />
            </div>
            <div className="flex items-center gap-1 w-32">
              <Input
                type="number"
                value={goal.targetValue || ""}
                onChange={e => updateGoal(idx, "targetValue", parseFloat(e.target.value) || 0)}
                placeholder="10"
                className="text-right"
              />
              <span className="text-gray-500 text-sm shrink-0">%</span>
            </div>
            <button
              type="button"
              onClick={() => removeGoal(idx)}
              className="w-8 h-8 border border-red-300 text-red-400 hover:bg-red-50 rounded flex items-center justify-center"
            >
              <Minus className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addGoal}
        className="mt-3 flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 border border-dashed border-blue-300 rounded-lg px-4 py-2 hover:bg-blue-50 transition-colors"
      >
        <Plus className="h-4 w-4" /> Add Goal
      </button>
    </section>
  );
}