"use client";

import { Input } from "@/components/ui/input";
import {  Plus } from "lucide-react";
import type { ClassroomInput } from "@/types";
import { nanoid } from "nanoid";

interface Props {
  classrooms: ClassroomInput[];
  onChange: (classrooms: ClassroomInput[]) => void;
}

export function ClassroomSection({ classrooms, onChange }: Props) {
  function addClassroom() {
    onChange([
      ...classrooms,
      { id: nanoid(), name: "New Room", capacity: 10, staffRatio: 4, enrolled: 0 },
    ]);
  }
  function removeClassroom(idx: number) {
    onChange(classrooms.filter((_, i) => i !== idx));
  }
  function updateClassroom(idx: number, field: keyof ClassroomInput, value: string | number) {
    onChange(classrooms.map((c, i) => (i === idx ? { ...c, [field]: value } : c)));
  }

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-semibold text-gray-800">Classrooms</h3>
        <span className="text-gray-400 text-sm">ⓘ</span>
      </div>

      {/* Header labels */}
      <div className="grid grid-cols-4 gap-3 px-4 mb-2">
        <span className="text-xs text-gray-400">Room Name</span>
        <span className="text-xs text-gray-400">Capacity</span>
        <span className="text-xs text-gray-400">Staff Ratio (1:N)</span>
        <span className="text-xs text-gray-400">Enrolled</span>
      </div>

      <div className="space-y-3">
        {classrooms.map((room, idx) => (
          <div key={room.id ?? idx} className="border border-gray-200 rounded-xl p-4">
            <div className="grid grid-cols-4 gap-3">
              <Input
                value={room.name}
                onChange={e => updateClassroom(idx, "name", e.target.value)}
                placeholder="Room name"
              />
              <Input
                type="number"
                value={room.capacity || ""}
                onChange={e => updateClassroom(idx, "capacity", parseInt(e.target.value) || 0)}
                placeholder="15"
              />
              <Input
                type="number"
                step="0.5"
                value={room.staffRatio || ""}
                onChange={e => updateClassroom(idx, "staffRatio", parseFloat(e.target.value) || 0)}
                placeholder="4.0"
              />
              <Input
                type="number"
                value={room.enrolled || ""}
                onChange={e => updateClassroom(idx, "enrolled", parseInt(e.target.value) || 0)}
                placeholder="12"
              />
            </div>
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => removeClassroom(idx)}
                className="text-xs text-red-400 border border-red-200 rounded px-3 py-1 hover:bg-red-50"
              >
                Remove Classroom
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addClassroom}
        className="mt-3 flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 border border-dashed border-blue-300 rounded-lg px-4 py-2 hover:bg-blue-50 transition-colors"
      >
        <Plus className="h-4 w-4" /> Add Classroom
      </button>
    </section>
  );
}