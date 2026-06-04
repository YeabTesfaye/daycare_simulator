// app/(dashboard)/budget-simulation/budget-simulation-client.tsx
// NOTE: this file lives at app/(dashboard)/budget-simulation/budget-simulation-client.tsx
// (co-located with page.tsx, not in components/)
"use client";

import { useState, useMemo, useTransition } from "react";
import {
  LineChart, Line,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie,
  BarChart, Bar,
  ReferenceLine,
} from "recharts";
import type { PieLabelRenderProps } from "recharts";
import {
  Save, Download, RefreshCw, Plus, Trash2,
  Loader2, CheckCircle2, ChevronDown, Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  saveScenarioAction,
  deleteScenarioAction,
  type BudgetScenarioData,
} from "@/actions/budget-simulation";
import type {
  TrendDataPoint,
  ExpenseDataPoint,
  MonthlyProfitDataPoint,
  ProfitMetrics,
} from "@/types";

/* ═══════════════════════════════════════════════════════════
   Types
═══════════════════════════════════════════════════════════ */

interface SimParams {
  studentCount:      number;
  tuitionFee:        number;
  growthRate:        number;
  growthPeriod:      "Monthly" | "Quarterly" | "Annually";
  staffSalaries:     number;
  facilityCosts:     number;
  supplies:          number;
  administrative:    number;
  classroomCapacity: number;
}

interface SavedScenario {
  id:        string;
  name:      string;
  updatedAt: Date;
}

interface SimDefaults {
  studentCount:      number;
  tuitionFee:        number;
  staffSalaries:     number;
  facilityCosts:     number;
  supplies:          number;
  administrative:    number;
  classroomCapacity: number;
  sourceName:        string;
}

interface Props {
  userInitials: string;
  savedScenario: (SimParams & { id: string; name: string }) | null;
  allScenarios:  SavedScenario[];
  simDefaults:   SimDefaults | null;
}

interface SliderCfg {
  key:     keyof SimParams;
  label:   string;
  min:     number;
  max:     number;
  step:    number;
  prefix?: string;
  suffix?: string;
  hint:    string;
}

interface PieSliceShape {
  cx: number; cy: number;
  innerRadius: number; outerRadius: number;
  startAngle: number; endAngle: number;
  fill: string;
  name: string;
}

interface BarShape {
  x: number; y: number;
  width: number; height: number;
  profit: number;
}

/* ═══════════════════════════════════════════════════════════
   Constants
═══════════════════════════════════════════════════════════ */

const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
] as const;

const EXPENSE_COLORS: Record<string, string> = {
  "Staff Salaries":  "#3b82f6",
  "Facility Costs":  "#22c55e",
  "Supplies":        "#f59e0b",
  "Administrative":  "#ef4444",
};

const FALLBACK_DEFAULTS: SimParams = {
  studentCount:      20,
  tuitionFee:        800,
  growthRate:        5,
  growthPeriod:      "Annually",
  staffSalaries:     10000,
  facilityCosts:     2000,
  supplies:          1000,
  administrative:    500,
  classroomCapacity: 30,
};

// All sliders in display order with hints
const SLIDER_DEFS: SliderCfg[] = [
  {
    key: "studentCount", label: "Student Count",
    min: 1, max: 300, step: 1,
    hint: "Current enrolled students. Multiplied by tuition to get monthly revenue.",
  },
  {
    key: "tuitionFee", label: "Tuition Fee per Student ($)",
    min: 100, max: 5000, step: 50, prefix: "$",
    hint: "Monthly tuition charged per child. The biggest single revenue lever.",
  },
  {
    key: "growthRate", label: "Growth Rate (%)",
    min: 0, max: 30, step: 0.5, suffix: "%",
    hint: "Annual rate at which revenue grows. Expenses grow at 30% of this rate.",
  },
  {
    key: "staffSalaries", label: "Staff Salaries ($)",
    min: 1000, max: 150000, step: 500, prefix: "$",
    hint: "Total monthly payroll. Typically 50–55% of total expenses in a healthy daycare.",
  },
  {
    key: "facilityCosts", label: "Facility Costs ($)",
    min: 500, max: 50000, step: 250, prefix: "$",
    hint: "Rent, utilities, and maintenance combined.",
  },
  {
    key: "supplies", label: "Supplies ($)",
    min: 200, max: 20000, step: 100, prefix: "$",
    hint: "Food, educational materials, and consumables.",
  },
  {
    key: "administrative", label: "Administrative ($)",
    min: 200, max: 20000, step: 100, prefix: "$",
    hint: "Insurance, software, and admin overhead.",
  },
  {
    key: "classroomCapacity", label: "Classroom Capacity",
    min: 5, max: 300, step: 1,
    hint: "Max students your space can hold. Affects capacity utilization % only.",
  },
];

/* ═══════════════════════════════════════════════════════════
   Formatters
═══════════════════════════════════════════════════════════ */

function fmtK(v: number): string {
  const a = Math.abs(v);
  if (a >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (a >= 1_000)     return `$${(v / 1_000).toFixed(0)}k`;
  return `$${v.toFixed(0)}`;
}

function fmtFull(v: number): string {
  return v.toLocaleString("en-US", {
    style: "currency", currency: "USD", maximumFractionDigits: 2,
  });
}

/* ═══════════════════════════════════════════════════════════
   Custom chart shapes (no deprecated Cell)
═══════════════════════════════════════════════════════════ */

function PieSlice(props: PieSliceShape) {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, name } = props;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const x1o = cx + outerRadius * Math.cos(-toRad(startAngle));
  const y1o = cy + outerRadius * Math.sin(-toRad(startAngle));
  const x2o = cx + outerRadius * Math.cos(-toRad(endAngle));
  const y2o = cy + outerRadius * Math.sin(-toRad(endAngle));
  const x1i = cx + innerRadius * Math.cos(-toRad(startAngle));
  const y1i = cy + innerRadius * Math.sin(-toRad(startAngle));
  const x2i = cx + innerRadius * Math.cos(-toRad(endAngle));
  const y2i = cy + innerRadius * Math.sin(-toRad(endAngle));
  const large = endAngle - startAngle > 180 ? 1 : 0;
  const d = [
    `M ${x1o} ${y1o}`,
    `A ${outerRadius} ${outerRadius} 0 ${large} 0 ${x2o} ${y2o}`,
    `L ${x2i} ${y2i}`,
    `A ${innerRadius} ${innerRadius} 0 ${large} 1 ${x1i} ${y1i}`,
    "Z",
  ].join(" ");
  const color = EXPENSE_COLORS[name] ?? "#6b7280";
  return <path d={d} fill={color} />;
}

function ProfitBarShape(props: BarShape) {
  const { x, y, width, height, profit } = props;
  if (!height || height === 0) return null;
  const fill = profit >= 0 ? "#818cf8" : "#f87171";
  const r = Math.min(3, width / 2);
  return (
    <path
      d={`M ${x + r} ${y} h ${width - 2 * r} a ${r} ${r} 0 0 1 ${r} ${r}
          v ${height - r} H ${x} v ${-(height - r)} a ${r} ${r} 0 0 1 ${r} ${-r} Z`}
      fill={fill}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   Tooltip components
═══════════════════════════════════════════════════════════ */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TrendTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-md text-xs min-w-[160px]">
      <p className="font-semibold text-gray-700 mb-2">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex justify-between gap-4">
          <span style={{ color: p.color }}>— {p.name}</span>
          <span className="font-medium text-gray-800">{fmtFull(p.value ?? 0)}</span>
        </div>
      ))}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProfitTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const v = payload[0]?.value ?? 0;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-md text-xs">
      <p className="font-semibold text-gray-700 mb-1">{label}</p>
      <p style={{ color: v >= 0 ? "#818cf8" : "#f87171" }}>
        profit: <span className="font-medium">{fmtFull(v)}</span>
      </p>
    </div>
  );
}

function PieOuterLabel(props: PieLabelRenderProps) {
  const { cx = 0, cy = 0, midAngle = 0, outerRadius = 0, name, percent } = props;
  const r = (outerRadius as number) + 28;
  const x = (cx as number) + r * Math.cos(-(midAngle as number) * Math.PI / 180);
  const y = (cy as number) + r * Math.sin(-(midAngle as number) * Math.PI / 180);
  const pct = ((percent ?? 0) * 100).toFixed(0);
  const color = EXPENSE_COLORS[name as string] ?? "#6b7280";
  return (
    <text x={x} y={y} fill={color}
      textAnchor={x > (cx as number) ? "start" : "end"}
      dominantBaseline="central" fontSize={11} fontWeight={500}
    >
      {`${name}: ${pct}%`}
    </text>
  );
}

/* ═══════════════════════════════════════════════════════════
   Slider sub-component
═══════════════════════════════════════════════════════════ */

function SimSlider({
  cfg, params, onSet,
}: {
  cfg: SliderCfg;
  params: SimParams;
  onSet: (key: keyof SimParams, v: number) => void;
}) {
  const [showHint, setShowHint] = useState(false);
  const raw = params[cfg.key] as number;
  const pct = ((raw - cfg.min) / (cfg.max - cfg.min)) * 100;

  return (
    <div>
      <div className="flex items-center gap-1.5 mb-2">
        <label className="text-sm font-medium text-gray-700">{cfg.label}</label>
        <button
          type="button"
          onClick={() => setShowHint(!showHint)}
          className="text-gray-400 hover:text-blue-500 transition-colors"
        >
          <Info className="h-3.5 w-3.5" />
        </button>
      </div>
      {showHint && (
        <p className="text-xs text-blue-600 bg-blue-50 rounded-md px-2 py-1.5 mb-2 leading-relaxed">
          {cfg.hint}
        </p>
      )}
      <input
        type="range"
        min={cfg.min} max={cfg.max} step={cfg.step}
        value={raw}
        onChange={(e) => onSet(cfg.key, parseFloat(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer mb-2"
        style={{
          background: `linear-gradient(to right, #3b82f6 ${pct}%, #e5e7eb ${pct}%)`,
        }}
      />
      <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800
                      bg-white font-medium">
        {cfg.prefix ?? ""}{raw.toLocaleString()}{cfg.suffix ?? ""}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Stat card
═══════════════════════════════════════════════════════════ */

function StatCard({
  label, value, sub, valueColor, size = "normal",
}: {
  label: string;
  value: string;
  sub?: string;
  valueColor?: string;
  size?: "normal" | "large";
}) {
  return (
    <div className="text-center">
      <p className={cn(
        "font-bold",
        size === "large" ? "text-3xl" : "text-2xl",
      )} style={{ color: valueColor }}>
        {value}
      </p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Main component
═══════════════════════════════════════════════════════════ */

export function BudgetSimulationClient({
  userInitials,
  savedScenario,
  allScenarios,
  simDefaults,
}: Props) {
  // ── State ──────────────────────────────────────────────
  const [params, setParams] = useState<SimParams>(() => {
    if (savedScenario) {
      return {
        studentCount:      savedScenario.studentCount,
        tuitionFee:        savedScenario.tuitionFee,
        growthRate:        savedScenario.growthRate,
        growthPeriod:      savedScenario.growthPeriod as SimParams["growthPeriod"],
        staffSalaries:     savedScenario.staffSalaries,
        facilityCosts:     savedScenario.facilityCosts,
        supplies:          savedScenario.supplies,
        administrative:    savedScenario.administrative,
        classroomCapacity: savedScenario.classroomCapacity,
      };
    }
    if (simDefaults) {
      return {
        ...FALLBACK_DEFAULTS,
        studentCount:      simDefaults.studentCount,
        tuitionFee:        simDefaults.tuitionFee,
        staffSalaries:     simDefaults.staffSalaries   || FALLBACK_DEFAULTS.staffSalaries,
        facilityCosts:     simDefaults.facilityCosts   || FALLBACK_DEFAULTS.facilityCosts,
        supplies:          simDefaults.supplies        || FALLBACK_DEFAULTS.supplies,
        administrative:    simDefaults.administrative  || FALLBACK_DEFAULTS.administrative,
        classroomCapacity: simDefaults.classroomCapacity,
      };
    }
    return FALLBACK_DEFAULTS;
  });

  const [currentScenarioId, setCurrentScenarioId] = useState<string | undefined>(
    savedScenario?.id
  );
  const [scenarioName, setScenarioName] = useState(savedScenario?.name ?? "My Scenario");
  const [editingName,  setEditingName]  = useState(false);
  const [scenarios,    setScenarios]    = useState<SavedScenario[]>(allScenarios);
  const [saveStatus,   setSaveStatus]   = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [showScenarios, setShowScenarios] = useState(false);
  const [isPending, startTransition] = useTransition();

  function set(key: keyof SimParams, value: number | string) {
    setParams((p) => ({ ...p, [key]: value }));
    setSaveStatus("idle"); // mark dirty
  }

  // ── Load from simulation ───────────────────────────────
  function handleLoadFromSim() {
    if (!simDefaults) return;
    setParams((p) => ({
      ...p,
      studentCount:      simDefaults.studentCount,
      tuitionFee:        simDefaults.tuitionFee,
      staffSalaries:     simDefaults.staffSalaries   || p.staffSalaries,
      facilityCosts:     simDefaults.facilityCosts   || p.facilityCosts,
      supplies:          simDefaults.supplies        || p.supplies,
      administrative:    simDefaults.administrative  || p.administrative,
      classroomCapacity: simDefaults.classroomCapacity,
    }));
    setScenarioName(`From: ${simDefaults.sourceName}`);
    setSaveStatus("idle");
  }

  // ── Reset to fallback defaults ─────────────────────────
  function handleReset() {
    setParams(FALLBACK_DEFAULTS);
    setScenarioName("My Scenario");
    setCurrentScenarioId(undefined);
    setSaveStatus("idle");
  }

  // ── Save scenario ──────────────────────────────────────
  function handleSave() {
    setSaveStatus("saving");
    const data: BudgetScenarioData = { name: scenarioName, ...params };
    startTransition(async () => {
      const result = await saveScenarioAction(data, currentScenarioId);
      if (result.error) {
        setSaveStatus("error");
        return;
      }
      setCurrentScenarioId(result.id);
      setSaveStatus("saved");
      // Refresh scenario list
      setScenarios((prev) => {
        const exists = prev.find((s) => s.id === result.id);
        if (exists) return prev.map((s) => s.id === result.id ? { ...s, name: scenarioName, updatedAt: new Date() } : s);
        return [{ id: result.id!, name: scenarioName, updatedAt: new Date() }, ...prev];
      });
      setTimeout(() => setSaveStatus("idle"), 2000);
    });
  }

  // ── Load a different scenario ──────────────────────────
  function handleLoadScenario(scenario: SavedScenario & Partial<SimParams>) {
    if (scenario.studentCount !== undefined) {
      setParams({
        studentCount:      scenario.studentCount,
        tuitionFee:        scenario.tuitionFee      ?? FALLBACK_DEFAULTS.tuitionFee,
        growthRate:        scenario.growthRate       ?? FALLBACK_DEFAULTS.growthRate,
        growthPeriod:      (scenario.growthPeriod as SimParams["growthPeriod"]) ?? "Annually",
        staffSalaries:     scenario.staffSalaries    ?? FALLBACK_DEFAULTS.staffSalaries,
        facilityCosts:     scenario.facilityCosts    ?? FALLBACK_DEFAULTS.facilityCosts,
        supplies:          scenario.supplies         ?? FALLBACK_DEFAULTS.supplies,
        administrative:    scenario.administrative   ?? FALLBACK_DEFAULTS.administrative,
        classroomCapacity: scenario.classroomCapacity ?? FALLBACK_DEFAULTS.classroomCapacity,
      });
    }
    setCurrentScenarioId(scenario.id);
    setScenarioName(scenario.name);
    setShowScenarios(false);
    setSaveStatus("idle");
  }

  // ── Delete scenario ────────────────────────────────────
  function handleDelete(id: string) {
    startTransition(async () => {
      await deleteScenarioAction(id);
      setScenarios((prev) => prev.filter((s) => s.id !== id));
      if (currentScenarioId === id) {
        handleReset();
      }
    });
  }

  // ── PDF export ─────────────────────────────────────────
  function handleExportPDF() {
    const w = window.open("", "_blank");
    if (!w) return;
    const baseRevenue  = params.studentCount * params.tuitionFee;
    const baseExpenses =
      params.staffSalaries + params.facilityCosts +
      params.supplies      + params.administrative;
    const netProfit = baseRevenue - baseExpenses;
    w.document.write(`
      <!DOCTYPE html><html><head>
      <title>${scenarioName} — Budget Simulation</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; color: #111; }
        h1   { color: #3b82f6; } h2 { color: #374151; margin-top: 28px; }
        table { width: 100%; border-collapse: collapse; margin: 12px 0; }
        th, td { text-align: left; padding: 8px 12px; border: 1px solid #e5e7eb; font-size: 13px; }
        th { background: #f9fafb; font-weight: 600; }
        .pos { color: #16a34a; font-weight: 700; }
        .neg { color: #dc2626; font-weight: 700; }
      </style></head><body>
      <h1>Daycare Budget Simulation</h1>
      <p style="color:#6b7280;font-size:13px;">Scenario: <strong>${scenarioName}</strong> · Generated ${new Date().toLocaleDateString()}</p>
      <h2>Parameters</h2>
      <table>
        <tr><th>Parameter</th><th>Value</th></tr>
        <tr><td>Student Count</td><td>${params.studentCount}</td></tr>
        <tr><td>Tuition Fee / Student</td><td>${fmtFull(params.tuitionFee)}</td></tr>
        <tr><td>Growth Rate</td><td>${params.growthRate}% (${params.growthPeriod})</td></tr>
        <tr><td>Classroom Capacity</td><td>${params.classroomCapacity}</td></tr>
      </table>
      <h2>Monthly Financials</h2>
      <table>
        <tr><th>Category</th><th>Amount</th></tr>
        <tr><td>Revenue</td><td class="pos">${fmtFull(baseRevenue)}</td></tr>
        <tr><td>Staff Salaries</td><td>${fmtFull(params.staffSalaries)}</td></tr>
        <tr><td>Facility Costs</td><td>${fmtFull(params.facilityCosts)}</td></tr>
        <tr><td>Supplies</td><td>${fmtFull(params.supplies)}</td></tr>
        <tr><td>Administrative</td><td>${fmtFull(params.administrative)}</td></tr>
        <tr><td><strong>Total Expenses</strong></td><td>${fmtFull(baseExpenses)}</td></tr>
        <tr><td><strong>Net Profit</strong></td>
          <td class="${netProfit >= 0 ? "pos" : "neg"}">${fmtFull(netProfit)}</td></tr>
      </table>
      <h2>Key Metrics</h2>
      <table>
        <tr><th>Metric</th><th>Value</th></tr>
        <tr><td>Profit per Student</td><td>${fmtFull(params.studentCount > 0 ? netProfit / params.studentCount : 0)}</td></tr>
        <tr><td>Capacity Utilization</td><td>${params.classroomCapacity > 0 ? ((params.studentCount / params.classroomCapacity) * 100).toFixed(1) : 0}%</td></tr>
        <tr><td>Staff Cost Ratio</td><td>${baseExpenses > 0 ? ((params.staffSalaries / baseExpenses) * 100).toFixed(1) : 0}%</td></tr>
        <tr><td>Break-Even Students</td><td>${params.tuitionFee > 0 ? Math.ceil(baseExpenses / params.tuitionFee) : "N/A"}</td></tr>
      </table>
      </body></html>
    `);
    w.document.close();
    setTimeout(() => w.print(), 400);
  }

  /* ── Derived financial data ───────────────────────────────────────────────
     CORRECT growth rate logic:
       growthPeriod = "Annually"  → the rate IS the annual rate, e.g. 5%/year
       growthPeriod = "Quarterly" → 5% per quarter = 5%×4 = 20%/year
       growthPeriod = "Monthly"   → 5% per month  = 5%×12 = 60%/year
     Then monthly compound factor = (1 + annualRate)^(1/12) - 1
     Expenses grow at 30% of the revenue growth rate (costs grow slower).
  ────────────────────────────────────────────────────────────────────────── */
  const {
    trendData, expenseData, profitMetrics,
    monthlyProfitData, breakEvenStudents,
  } = useMemo<{
    trendData:         TrendDataPoint[];
    expenseData:       ExpenseDataPoint[];
    profitMetrics:     ProfitMetrics;
    monthlyProfitData: MonthlyProfitDataPoint[];
    breakEvenStudents: number;
  }>(() => {
    const baseRevenue  = params.studentCount * params.tuitionFee;
    const baseExpenses =
      params.staffSalaries + params.facilityCosts +
      params.supplies      + params.administrative;

    // Normalise to annual rate, then compute monthly compound factor
    const annualRate =
      params.growthPeriod === "Monthly"   ? params.growthRate / 100 * 12
      : params.growthPeriod === "Quarterly" ? params.growthRate / 100 * 4
      : params.growthRate / 100;

    const monthlyRevGrowth = Math.pow(1 + annualRate, 1 / 12) - 1;
    const monthlyExpGrowth = Math.pow(1 + annualRate * 0.3, 1 / 12) - 1;

    const trendData: TrendDataPoint[] = MONTHS.map((month, i) => {
      const revenue  = Math.round(baseRevenue  * Math.pow(1 + monthlyRevGrowth, i));
      const expenses = Math.round(baseExpenses * Math.pow(1 + monthlyExpGrowth, i));
      return { month, revenue, expenses, profit: revenue - expenses };
    });

    const expenseData: ExpenseDataPoint[] = [
      { name: "Staff Salaries", value: params.staffSalaries, pct: params.staffSalaries / baseExpenses, color: "#3b82f6" },
      { name: "Facility Costs", value: params.facilityCosts, pct: params.facilityCosts / baseExpenses, color: "#22c55e" },
      { name: "Supplies",       value: params.supplies,       pct: params.supplies       / baseExpenses, color: "#f59e0b" },
      { name: "Administrative", value: params.administrative, pct: params.administrative / baseExpenses, color: "#ef4444" },
    ].filter(e => e.value > 0);

    const last  = trendData[trendData.length - 1];
    const first = trendData[0];
    const profitMetrics: ProfitMetrics = {
      profitPerStudent:    params.studentCount > 0 ? first.profit / params.studentCount : 0,
      capacityUtilization: params.classroomCapacity > 0
        ? (params.studentCount / params.classroomCapacity) * 100 : 0,
      monthlyNetProfit: first.profit, // current month (Jan), not projected
    };

    // Break-even: how many students at current tuition to cover current expenses
    const breakEvenStudents = params.tuitionFee > 0
      ? Math.ceil(baseExpenses / params.tuitionFee) : 0;

    const monthlyProfitData: MonthlyProfitDataPoint[] = trendData.map(
      ({ month, profit }) => ({ month, profit })
    );

    return { trendData, expenseData, profitMetrics, monthlyProfitData, breakEvenStudents };
  }, [params]);

  const staffPct = useMemo(() => {
    const total = params.staffSalaries + params.facilityCosts +
                  params.supplies      + params.administrative;
    return total > 0 ? (params.staffSalaries / total) * 100 : 0;
  }, [params]);

  const isUnderstaffed = staffPct > 60;
  const isOverCapacity = profitMetrics.capacityUtilization > 100;

  /* ── Render ─────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <div className="mx-6 mt-6 bg-white rounded-2xl border border-t-4 border-t-blue-400
                      border-gray-200 shadow-sm">

        {/* ── Header ── */}
        <div className="p-6 flex items-center justify-between border-b border-gray-100">
          <div className="flex-1 min-w-0">
            {/* Editable scenario name */}
            {editingName ? (
              <div className="flex items-center gap-2">
                <Input
                  value={scenarioName}
                  onChange={(e) => setScenarioName(e.target.value)}
                  onBlur={() => setEditingName(false)}
                  onKeyDown={(e) => e.key === "Enter" && setEditingName(false)}
                  className="h-8 text-lg font-bold text-blue-500 border-blue-300 w-72"
                  autoFocus
                />
              </div>
            ) : (
              <button
                onClick={() => setEditingName(true)}
                className="text-xl font-bold text-blue-500 hover:text-blue-600 text-left
                           transition-colors group flex items-center gap-2"
              >
                {scenarioName}
                <span className="text-xs text-gray-400 font-normal opacity-0
                                 group-hover:opacity-100 transition-opacity">
                  click to rename
                </span>
              </button>
            )}
            <p className="text-sm text-gray-500 mt-0.5">
              Daycare Budget Simulation · test scenarios before committing
            </p>
          </div>

          <div className="flex items-center gap-2 ml-4 shrink-0">
            {/* Load from sim */}
            {simDefaults && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleLoadFromSim}
                className="gap-1.5 text-xs border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300"
                title={`Load data from "${simDefaults.sourceName}"`}
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Load from Simulation
              </Button>
            )}
            {/* Save */}

            <Button
            size="sm"
            onClick={handleSave}
            disabled={isPending || saveStatus === "saving"}
            className={cn(
              "gap-1.5 text-xs",
              saveStatus === "saved"
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white",
            )}
          >
            {saveStatus === "saving" ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : saveStatus === "saved" ? (
              <CheckCircle2 className="h-3.5 w-3.5" />
            ) : (
              <Save className="h-3.5 w-3.5" />
            )}
            {saveStatus === "saved" ? "Saved!" : "Save Scenario"}
          </Button>
                      

            {/* Export PDF */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportPDF}
              className="gap-1.5 text-xs border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300"
            >
              <Download className="h-3.5 w-3.5" />
              Export PDF
            </Button>

            {/* Scenarios dropdown */}
            {scenarios.length > 0 && (
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowScenarios(!showScenarios)}
                  className="gap-1.5 text-xs border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300"
                >
                  Scenarios ({scenarios.length})
                  <ChevronDown className="h-3.5 w-3.5" />
              </Button>
                {showScenarios && (
                  <div className="absolute right-0 top-full mt-1 w-64 bg-white border
                                  border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                    <div className="p-2 space-y-0.5 max-h-64 overflow-y-auto">
                      <button
                        onClick={handleReset}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg
                                   hover:bg-gray-50 text-sm text-gray-700 text-left"
                      >
                        <Plus className="h-3.5 w-3.5 text-blue-500" />
                        New scenario
                      </button>
                      {scenarios.map((s) => (
                        <div key={s.id}
                          className={cn(
                            "flex items-center justify-between px-3 py-2 rounded-lg",
                            currentScenarioId === s.id ? "bg-blue-50" : "hover:bg-gray-50",
                          )}
                        >
                          <button
                            onClick={() => handleLoadScenario(s)}
                            className="flex-1 text-sm text-left text-gray-700"
                          >
                            {s.name}
                          </button>
                          <button
                            onClick={() => handleDelete(s.id)}
                            className="text-gray-300 hover:text-red-400 transition-colors ml-2"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center
                            justify-center text-white font-bold text-sm select-none ml-1">
              {userInitials}
            </div>
          </div>
        </div>

        <div className="p-8 space-y-10">

          {/* ── Warnings ── */}
          {(isUnderstaffed || isOverCapacity) && (
            <div className="space-y-2">
              {isUnderstaffed && (
                <div className="flex items-start gap-2 bg-yellow-50 border border-yellow-200
                                rounded-xl px-4 py-3 text-sm text-yellow-800">
                  <Info className="h-4 w-4 mt-0.5 shrink-0 text-yellow-500" />
                  Staff salaries are {staffPct.toFixed(0)}% of total expenses —
                  above the 55% industry benchmark. Consider optimising scheduling or reviewing staffing ratios.
                </div>
              )}
              {isOverCapacity && (
                <div className="flex items-start gap-2 bg-orange-50 border border-orange-200
                                rounded-xl px-4 py-3 text-sm text-orange-800">
                  <Info className="h-4 w-4 mt-0.5 shrink-0 text-orange-500" />
                  Capacity utilization is {profitMetrics.capacityUtilization.toFixed(0)}% —
                  over capacity. Either expand space or cap enrollment to maintain quality.
                </div>
              )}
            </div>
          )}

          {/* ── Parameters ── */}
          <section>
            <h2 className="text-lg font-bold text-blue-500 mb-1">
              Simulation Parameters
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Adjust sliders — all charts update instantly. Click the{" "}
              <Info className="h-3.5 w-3.5 inline text-gray-400" /> icon on any
              parameter for a detailed explanation.
            </p>

            {/* Row 1 — Revenue parameters */}
            <div className="mb-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Revenue
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                {SLIDER_DEFS.filter(s =>
                  ["studentCount","tuitionFee","growthRate"].includes(s.key)
                ).map(cfg => (
                  <SimSlider key={cfg.key} cfg={cfg} params={params} onSet={set} />
                ))}
              </div>
            </div>

            {/* Growth Period — full width row under revenue */}
            <div className="mt-6 mb-8 max-w-xs">
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Growth Period
              </label>
              <p className="text-xs text-blue-600 bg-blue-50 rounded-md px-2 py-1.5 mb-2 leading-relaxed">
                The period your growth rate refers to. &ldquo;5% Annually&rdquo; =
                5% total per year. &ldquo;5% Monthly&rdquo; = 60% per year.
              </p>
              <div className="relative">
                <select
                  value={params.growthPeriod}
                  onChange={(e) => set("growthPeriod", e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm
                             text-gray-700 bg-white appearance-none cursor-pointer pr-8"
                >
                  <option value="Annually">Annually (recommended)</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Monthly">Monthly</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2
                                        -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Row 2 — Expense parameters: 4-col grid (fixes the hiding bug) */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Monthly Expenses
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                {SLIDER_DEFS.filter(s =>
                  ["staffSalaries","facilityCosts","supplies","administrative"].includes(s.key)
                ).map(cfg => (
                  <SimSlider key={cfg.key} cfg={cfg} params={params} onSet={set} />
                ))}
              </div>
            </div>

            {/* Row 3 — Capacity */}
            <div className="mt-6 max-w-xs">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Capacity
              </p>
              <SimSlider
                cfg={SLIDER_DEFS.find(s => s.key === "classroomCapacity")!}
                params={params}
                onSet={set}
              />
            </div>
          </section>

          {/* ── Key Metrics Summary ── */}
          <section>
            <h2 className="text-lg font-bold text-blue-500 mb-5">
              Current Month Snapshot
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="col-span-2 md:col-span-1 border border-gray-200 rounded-xl p-4
                              flex flex-col items-center justify-center">
                <StatCard
                  label="Monthly Revenue"
                  value={fmtK(params.studentCount * params.tuitionFee)}
                  valueColor="#16a34a"
                  size="normal"
                />
              </div>
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col
                              items-center justify-center">
                <StatCard
                  label="Total Expenses"
                  value={fmtK(
                    params.staffSalaries + params.facilityCosts +
                    params.supplies      + params.administrative
                  )}
                  valueColor="#dc2626"
                />
              </div>
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col
                              items-center justify-center">
                <StatCard
                  label="Net Profit"
                  value={fmtFull(profitMetrics.monthlyNetProfit)}
                  valueColor={profitMetrics.monthlyNetProfit >= 0 ? "#16a34a" : "#dc2626"}
                  size="normal"
                />
              </div>
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col
                              items-center justify-center">
                <StatCard
                  label="Break-Even Students"
                  value={String(breakEvenStudents)}
                  sub={`you have ${params.studentCount}`}
                  valueColor={
                    params.studentCount >= breakEvenStudents ? "#16a34a" : "#f59e0b"
                  }
                />
              </div>
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col
                              items-center justify-center">
                <StatCard
                  label="Capacity Utilization"
                  value={`${profitMetrics.capacityUtilization.toFixed(0)}%`}
                  valueColor={
                    profitMetrics.capacityUtilization > 100
                      ? "#f59e0b"
                      : profitMetrics.capacityUtilization < 70
                      ? "#dc2626"
                      : "#16a34a"
                  }
                />
              </div>
            </div>
          </section>

          {/* ── Charts ── */}
          <section>
            <h2 className="text-lg font-bold text-blue-500 mb-6">
              12-Month Projections
            </h2>

            {/* Row 1: trend + pie */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

              {/* Revenue & Expenses Trend */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  Revenue &amp; Expenses Trend
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Revenue grows at the full growth rate; expenses at 30% of that rate.
                </p>
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={trendData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="4 4" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={fmtK} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<TrendTooltip />} />
                    <Legend formatter={(v: string) => <span className="text-xs text-gray-600">— {v}</span>} />
                    <ReferenceLine y={0} stroke="#e5e7eb" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="revenue"  stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} name="revenue" />
                    <Line type="monotone" dataKey="expenses" stroke="#f97316" strokeWidth={2} dot={{ r: 3 }} name="expenses" />
                    <Line type="monotone" dataKey="profit"   stroke="#8b5cf6" strokeWidth={2} dot={{ r: 3 }} name="profit" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Expense Breakdown Pie */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  Expense Breakdown
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Healthy daycares keep staff salaries below 55% of total costs.
                  {staffPct > 55 && (
                    <span className="text-yellow-600 font-medium">
                      {" "}Yours is currently {staffPct.toFixed(0)}%.
                    </span>
                  )}
                </p>
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="45%" cy="50%"
                      outerRadius={85} innerRadius={0}
                      dataKey="value" nameKey="name"
                      labelLine={false} label={PieOuterLabel}
                      shape={(p: unknown) => <PieSlice {...(p as PieSliceShape)} />}
                    />
                    <Legend
                      layout="horizontal" verticalAlign="bottom"
                      iconType="square" iconSize={10}
                      formatter={(v: string) => <span className="text-xs text-gray-600">{v}</span>}
                    />
                    <Tooltip
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      formatter={(v: any) => [fmtFull(Number(v || 0)), "Amount"]}
                      contentStyle={{ borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 12 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Row 2: profit metrics + monthly bar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              {/* Profit Metrics */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-5">
                  Profit Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold"
                      style={{ color: profitMetrics.profitPerStudent >= 0 ? "#16a34a" : "#dc2626" }}
                    >
                      {fmtFull(profitMetrics.profitPerStudent)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Profit per Student</p>
                    <p className="text-xs text-gray-400">target: $150–$400</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold"
                      style={{ color: profitMetrics.capacityUtilization <= 100 ? "#16a34a" : "#f59e0b" }}
                    >
                      {profitMetrics.capacityUtilization.toFixed(1)}%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Capacity Utilization</p>
                    <p className="text-xs text-gray-400">target: 70–90%</p>
                  </div>
                </div>
                <div className="text-center border-t border-gray-100 pt-5">
                  <p className="text-xs text-gray-400 mb-1">Monthly Net Profit (current)</p>
                  <p className="text-3xl font-bold"
                    style={{ color: profitMetrics.monthlyNetProfit >= 0 ? "#16a34a" : "#dc2626" }}
                  >
                    {fmtFull(profitMetrics.monthlyNetProfit)}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Break-even at {breakEvenStudents} students
                    {params.studentCount < breakEvenStudents
                      ? ` — need ${breakEvenStudents - params.studentCount} more`
                      : " ✓ enrolled above break-even"}
                  </p>
                </div>
              </div>

              {/* Monthly Profit Bar */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  Monthly Profit Projection
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Purple = profit, red = loss. Hover for exact figures.
                </p>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={monthlyProfitData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="4 4" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={fmtK} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <ReferenceLine y={0} stroke="#9ca3af" strokeDasharray="3 3" />
                    <Tooltip content={<ProfitTooltip />} />
                    <Bar dataKey="profit" shape={(p: unknown) => <ProfitBarShape {...(p as BarShape)} />} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* ── How to use ── */}
          <section className="border border-blue-100 bg-blue-50 rounded-xl p-6">
            <h2 className="font-bold text-blue-600 text-sm mb-3">
              How to use this simulation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-blue-700 leading-relaxed">
              <div>
                <p className="font-semibold mb-1">1. Set your baseline</p>
                <p>
                  Click &ldquo;Load from Simulation&rdquo; to pre-fill your real data.
                  This makes the charts reflect your actual business, not generic defaults.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">2. Test one change at a time</p>
                <p>
                  Move a single slider and watch the profit metrics update instantly.
                  E.g. raise tuition by $100 and see how much the monthly profit improves.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">3. Save promising scenarios</p>
                <p>
                  Hit &ldquo;Save Scenario&rdquo; before testing the next idea.
                  Use the Scenarios dropdown to compare saved versions side by side.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
