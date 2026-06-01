"use client";

import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import type { RevenueSourceInput } from "@/types";
import { nanoid } from "nanoid";

interface Props {
  items: RevenueSourceInput[];
  onChange: (items: RevenueSourceInput[]) => void;
}

export function RevenueSources({ items, onChange }: Props) {
  function addItem() {
    onChange([...items, { id: nanoid(), name: "", amount: 0, tag: "" }]);
  }

  function removeItem(idx: number) {
    onChange(items.filter((_, i) => i !== idx));
  }

  function updateItem(idx: number, field: keyof RevenueSourceInput, value: string | number) {
    onChange(items.map((item, i) => (i === idx ? { ...item, [field]: value } : item)));
  }

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-semibold text-gray-800">Revenue Sources</h3>
        <span className="text-gray-400 text-sm">ⓘ</span>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div
            key={item.id ?? idx}
            className="border border-gray-200 rounded-xl p-4 flex items-center gap-3"
          >
            <div className="w-36 shrink-0">
              <Input
                value={item.name}
                onChange={e => updateItem(idx, "name", e.target.value)}
                placeholder="Source name"
                className="border-0 p-0 h-auto focus-visible:ring-0 text-sm text-gray-700"
              />
            </div>
            <div className="flex items-center gap-1 flex-1">
              <span className="text-gray-400 text-sm">$</span>
              <Input
                type="number"
                value={item.amount || ""}
                onChange={e => updateItem(idx, "amount", parseFloat(e.target.value) || 0)}
                placeholder="0"
                className="flex-1"
              />
            </div>
            <Input
              value={item.tag ?? ""}
              onChange={e => updateItem(idx, "tag", e.target.value)}
              placeholder="Tag/Note"
              className="flex-1"
            />
            <button
              type="button"
              onClick={() => removeItem(idx)}
              className="w-8 h-8 border border-red-300 text-red-400 hover:bg-red-50 rounded flex items-center justify-center shrink-0"
            >
              <Minus className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addItem}
        className="mt-3 flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 border border-dashed border-blue-300 rounded-lg px-4 py-2 hover:bg-blue-50 transition-colors"
      >
        <Plus className="h-4 w-4" /> Add Revenue Source
      </button>
    </section>
  );
}