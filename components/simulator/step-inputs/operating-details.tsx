"use client";

import { Input } from "@/components/ui/input";

interface Props {
  hours: number;
  days: number;
  onHoursChange: (v: number) => void;
  onDaysChange: (v: number) => void;
}

export function OperatingDetails({ hours, days, onHoursChange, onDaysChange }: Props) {
  return (
    <section className="mb-8">
      <h3 className="font-semibold text-gray-800 mb-4">Operating Details</h3>
      <div className="flex gap-4">
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 flex-1">
          <Input
            type="number"
            value={hours || ""}
            onChange={e => onHoursChange(parseFloat(e.target.value) || 0)}
            className="border-0 p-0 h-auto focus-visible:ring-0 w-20"
          />
          <span className="text-gray-500 text-sm">hours</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 flex-1">
          <Input
            type="number"
            value={days || ""}
            onChange={e => onDaysChange(parseInt(e.target.value) || 0)}
            className="border-0 p-0 h-auto focus-visible:ring-0 w-20"
          />
          <span className="text-gray-500 text-sm">days</span>
        </div>
      </div>
    </section>
  );
}