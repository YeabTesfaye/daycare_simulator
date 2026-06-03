// components/budget-simulation/budget-simulation-client.tsx
"use client";

import { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  BarChart,
  Bar,
} from "recharts";
import type {
  PieLabelRenderProps,
} from "recharts";
import type {
  TrendDataPoint,
  ExpenseDataPoint,
  MonthlyProfitDataPoint,
  ProfitMetrics,
} from "@/types";

/* ─── Local types ────────────────────────────────────────── */

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

interface SliderConfig {
  key:     keyof SimParams;
  label:   string;
  min:     number;
  max:     number;
  step:    number;
  prefix?: string;
  suffix?: string;
}

interface PieSliceProps {
  cx:         number;
  cy:         number;
  innerRadius:number;
  outerRadius:number;
  startAngle: number;
  endAngle:   number;
  fill:       string;
  opacity?:   number;
}

interface BarSliceProps {
  x:      number;
  y:      number;
  width:  number;
  height: number;
  profit: number;
  index:  number;
}

/* ─── Constants ──────────────────────────────────────────── */

const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
] as const;

// Fixed expense breakdown percentages (salaries excluded — tracked separately)
const EXPENSE_SLICES: { label: string; pct: number; color: string }[] = [
  { label: "Staff Salaries",  pct: 0.51, color: "#3b82f6" },
  { label: "Facility Costs",  pct: 0.20, color: "#22c55e" },
  { label: "Supplies",        pct: 0.15, color: "#f59e0b" },
  { label: "Administrative",  pct: 0.10, color: "#ef4444" },
  { label: "Other",           pct: 0.05, color: "#8b5cf6" },
];

const ROW1_SLIDERS: SliderConfig[] = [
  { key: "studentCount",      label: "Student Count",              min: 1,    max: 300,    step: 1,   col: 1 } as SliderConfig & { col: number },
  { key: "tuitionFee",        label: "Tuition Fee per Student ($)", min: 500,  max: 5000,   step: 50,  prefix: "$", col: 2 } as SliderConfig & { col: number },
  { key: "growthRate",        label: "Growth Rate (%)",             min: 0,    max: 30,     step: 0.5, suffix: "%", col: 3 } as SliderConfig & { col: number },
];

const ROW2_SLIDERS: SliderConfig[] = [
  { key: "staffSalaries",     label: "Staff Salaries ($)",          min: 1000, max: 150000, step: 500, prefix: "$" },
  { key: "facilityCosts",     label: "Facility Costs ($)",          min: 500,  max: 50000,  step: 250, prefix: "$" },
  { key: "classroomCapacity", label: "Classroom Capacity",          min: 10,   max: 300,    step: 1   },
];

const ROW3_SLIDERS: SliderConfig[] = [
  { key: "supplies",          label: "Supplies ($)",                min: 200,  max: 20000,  step: 100, prefix: "$" },
  { key: "administrative",    label: "Administrative ($)",          min: 200,  max: 20000,  step: 100, prefix: "$" },
];

/* ─── Formatters ─────────────────────────────────────────── */

function fmtK(v: number): string {
  const abs = Math.abs(v);
  if (abs >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000)     return `$${(v / 1_000).toFixed(0)}k`;
  return `$${v.toFixed(0)}`;
}

function fmtFull(v: number): string {
  return v.toLocaleString("en-US", {
    style:                "currency",
    currency:             "USD",
    maximumFractionDigits: 2,
  });
}

/* ─── Custom Recharts components (no Cell) ───────────────── */

// Pie slice rendered via the `shape` prop — colour comes from the data object
function PieSlice(props: PieSliceProps & { fill: string }) {
  const {
    cx, cy, innerRadius, outerRadius,
    startAngle, endAngle, fill, opacity = 1,
  } = props;

  const toRad = (deg: number) => (deg * Math.PI) / 180;

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

  return <path d={d} fill={fill} opacity={opacity} />;
}

// Bar slice rendered via the `shape` prop — colour depends on profit sign
function ProfitBar(props: BarSliceProps) {
  const { x, y, width, height, profit } = props;
  const fill = profit >= 0 ? "#818cf8" : "#f87171";
  const r    = 3;
  if (height === 0) return null;
  return (
    <path
      d={`M ${x + r} ${y}
          h ${width - 2 * r}
          a ${r} ${r} 0 0 1 ${r} ${r}
          v ${height - r}
          H ${x}
          v ${-(height - r)}
          a ${r} ${r} 0 0 1 ${r} ${-r}
          Z`}
      fill={fill}
    />
  );
}

/* ─── Tooltip components ─────────────────────────────────── */

interface LinePayloadEntry {
  name:  string;
  color: string;
  value: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LineTrendTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow text-xs">
      <p className="font-semibold mb-1">{label}</p>
      {(payload as unknown as LinePayloadEntry[]).map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: {fmtFull(p.value)}
        </p>
      ))}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProfitBarTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const value = payload[0]?.value ?? 0;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow text-xs">
      <p className="font-semibold mb-1">{label}</p>
      <p style={{ color: "#6366f1" }}>profit: {fmtFull(value)}</p>
    </div>
  );
}

/* ─── Pie outer label ────────────────────────────────────── */

function PieOuterLabel(props: PieLabelRenderProps) {
  const { cx = 0, cy = 0, midAngle = 0, outerRadius = 0, name, percent } = props;
  const RADIAN = Math.PI / 180;
  const r = (outerRadius as number) + 32;
  const x = (cx as number) + r * Math.cos(-(midAngle as number) * RADIAN);
  const y = (cy as number) + r * Math.sin(-(midAngle as number) * RADIAN);
  const pct = ((percent ?? 0) * 100).toFixed(0);

  // find colour from slice data
  const slice = EXPENSE_SLICES.find((s) => s.label === name);
  const fill  = slice?.color ?? "#6b7280";

  return (
    <text
      x={x}
      y={y}
      fill={fill}
      textAnchor={x > (cx as number) ? "start" : "end"}
      dominantBaseline="central"
      fontSize={11}
      fontWeight={500}
    >
      {`${name}: ${pct}%`}
    </text>
  );
}

/* ─── Slider sub-component ───────────────────────────────── */

interface SliderProps {
  cfg:    SliderConfig;
  params: SimParams;
  onSet:  (key: keyof SimParams, value: number) => void;
}

function SimSlider({ cfg, params, onSet }: SliderProps) {
  const raw     = params[cfg.key] as number;
  const display = `${cfg.prefix ?? ""}${raw}${cfg.suffix ?? ""}`;
  const pct     = ((raw - cfg.min) / (cfg.max - cfg.min)) * 100;

  return (
    <div>
      <label className="text-sm font-medium text-gray-700 block mb-2">
        {cfg.label}
      </label>
      <div className="mb-2">
        <input
          type="range"
          min={cfg.min}
          max={cfg.max}
          step={cfg.step}
          value={raw}
          onChange={(e) => onSet(cfg.key, parseFloat(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #3b82f6 ${pct}%, #e5e7eb ${pct}%)`,
          }}
        />
      </div>
      <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white">
        {display}
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────── */

interface Props {
  userInitials: string;
}

export function BudgetSimulationClient({ userInitials }: Props) {
  const [params, setParams] = useState<SimParams>({
    studentCount:      107,
    tuitionFee:        2050,
    growthRate:        5,
    growthPeriod:      "Monthly",
    staffSalaries:     48000,
    facilityCosts:     18800,
    supplies:          14100,
    administrative:    9400,
    classroomCapacity: 73,
  });

  function set(key: keyof SimParams, value: number | string) {
    setParams((p) => ({ ...p, [key]: value }));
  }

  /* ── Derived financials ──
     totalExpenses = staffSalaries + facilityCosts + supplies + administrative
     monthlyRevenue = studentCount × tuitionFee
     growthFactor is applied per-month to revenue; expenses grow at 30% of that rate
  ── */
  const { trendData, expenseData, profitMetrics, monthlyProfitData } =
    useMemo<{
      trendData:        TrendDataPoint[];
      expenseData:      ExpenseDataPoint[];
      profitMetrics:    ProfitMetrics;
      monthlyProfitData: MonthlyProfitDataPoint[];
    }>(() => {
      const baseRevenue    = params.studentCount * params.tuitionFee;
      const baseExpenses   =
        params.staffSalaries +
        params.facilityCosts +
        params.supplies +
        params.administrative;

      // Monthly growth rate normalised by period
      const annualGrowth =
        params.growthPeriod === "Monthly"    ? params.growthRate / 100 * 12
        : params.growthPeriod === "Quarterly"  ? params.growthRate / 100 * 4
        : params.growthRate / 100;
      const monthlyGrowth = annualGrowth / 12;

      const trendData: TrendDataPoint[] = MONTHS.map((month, i) => {
        const revMult  = Math.pow(1 + monthlyGrowth, i);
        const expMult  = Math.pow(1 + monthlyGrowth * 0.3, i);
        const revenue  = Math.round(baseRevenue  * revMult);
        const expenses = Math.round(baseExpenses * expMult);
        return { month, revenue, expenses, profit: revenue - expenses };
      });

      // Pie: use actual slider values, not fixed percentages
      const expenseData: ExpenseDataPoint[] = [
        { name: "Staff Salaries", value: params.staffSalaries,  pct: params.staffSalaries  / baseExpenses, color: "#3b82f6" },
        { name: "Facility Costs", value: params.facilityCosts,  pct: params.facilityCosts  / baseExpenses, color: "#22c55e" },
        { name: "Supplies",       value: params.supplies,        pct: params.supplies        / baseExpenses, color: "#f59e0b" },
        { name: "Administrative", value: params.administrative,  pct: params.administrative  / baseExpenses, color: "#ef4444" },
      ];

      const last            = trendData[trendData.length - 1];
      const profitPerStudent = params.studentCount > 0 ? last.profit / params.studentCount : 0;
      const capacityUtil     = params.classroomCapacity > 0
        ? (params.studentCount / params.classroomCapacity) * 100
        : 0;

      const profitMetrics: ProfitMetrics = {
        profitPerStudent,
        capacityUtilization: capacityUtil,
        monthlyNetProfit:    last.profit,
      };

      const monthlyProfitData: MonthlyProfitDataPoint[] = trendData.map(
        ({ month, profit }) => ({ month, profit }),
      );

      return { trendData, expenseData, profitMetrics, monthlyProfitData };
    }, [params]);

  /* ── Render ── */
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-6 mt-6 bg-white rounded-2xl border border-t-4 border-t-blue-400 border-gray-200 shadow-sm">

        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-gray-100">
          <div>
            <h1 className="text-xl font-bold text-blue-500">
              Daycare Budget Simulation
            </h1>
            <p className="text-sm text-gray-500">
              Test different scenarios and see financial projections
            </p>
          </div>
          {/* Real user initials */}
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center
                          text-white font-bold text-sm select-none">
            {userInitials}
          </div>
        </div>

        <div className="p-8 space-y-10">

          {/* ── Parameters ── */}
          <section>
            <h2 className="text-lg font-bold text-blue-500 mb-6">
              Simulation Parameters
            </h2>

            {/* Row 1: count / tuition / growth rate */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 mb-6">
              {ROW1_SLIDERS.map((cfg) => (
                <SimSlider key={cfg.key} cfg={cfg} params={params} onSet={set} />
              ))}
            </div>

            {/* Row 2: growth period dropdown / staff salaries / facility costs / capacity */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 mb-6">
              {/* Growth Period dropdown */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Growth Period
                </label>
                <div className="relative">
                  <select
                    value={params.growthPeriod}
                    onChange={(e) =>
                      set("growthPeriod", e.target.value as SimParams["growthPeriod"])
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm
                               text-gray-700 bg-white appearance-none cursor-pointer pr-8"
                  >
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Annually</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    ▾
                  </span>
                </div>
              </div>
              {ROW2_SLIDERS.map((cfg) => (
                <SimSlider key={cfg.key} cfg={cfg} params={params} onSet={set} />
              ))}
            </div>

            {/* Row 3: supplies / administrative */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
              {ROW3_SLIDERS.map((cfg) => (
                <SimSlider key={cfg.key} cfg={cfg} params={params} onSet={set} />
              ))}
            </div>
          </section>

          {/* ── Results ── */}
          <section>
            <h2 className="text-lg font-bold text-blue-500 mb-6">
              Simulation Results
            </h2>

            {/* Row 1: trend line + expense pie */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

              {/* Revenue & Expenses Trend */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-4">
                  Revenue &amp; Expenses Trend
                </h3>
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart
                    data={trendData}
                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="4 4" stroke="#f0f0f0" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tickFormatter={fmtK}
                      tick={{ fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<LineTrendTooltip />} />
                    <Legend
                      formatter={(v: string) => (
                        <span className="text-xs text-gray-600">— {v}</span>
                      )}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      name="revenue"
                    />
                    <Line
                      type="monotone"
                      dataKey="expenses"
                      stroke="#f97316"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      name="expenses"
                    />
                    <Line
                      type="monotone"
                      dataKey="profit"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      name="profit"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Expense Breakdown Pie — no Cell, colours via shape prop */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-4">
                  Expense Breakdown
                </h3>
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="45%"
                      cy="50%"
                      outerRadius={85}
                      innerRadius={0}
                      dataKey="value"
                      nameKey="name"
                      labelLine={false}
                      label={PieOuterLabel}
                      shape={(props: unknown) => {
                        const p = props as PieSliceProps & { name: string };
                        const slice = expenseData.find((s) => s.name === p.name);
                        return <PieSlice {...p} fill={slice?.color ?? "#6b7280"} />;
                      }}
                    />
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      iconType="square"
                      iconSize={10}
                      formatter={(v: string) => (
                        <span className="text-xs text-gray-600">{v}</span>
                      )}
                    />
                    <Tooltip
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      formatter={(value: any) => [
                        fmtFull(Number(value || 0)),
                        "Amount",
                      ]}
                      contentStyle={{
                        borderRadius: 8,
                        border: "1px solid #e5e7eb",
                        fontSize: 12,
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Row 2: profit metrics + monthly profit bar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              {/* Profit Metrics */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-5">
                  Profit Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p
                      className="text-2xl font-bold"
                      style={{
                        color: profitMetrics.profitPerStudent >= 0 ? "#16a34a" : "#dc2626",
                      }}
                    >
                      {fmtFull(profitMetrics.profitPerStudent)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Profit per Student</p>
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold"
                      style={{
                        color:
                          profitMetrics.capacityUtilization <= 100
                            ? "#16a34a"
                            : "#f59e0b",
                      }}
                    >
                      {profitMetrics.capacityUtilization.toFixed(1)}%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Capacity Utilization</p>
                  </div>
                </div>
                <div className="text-center border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Monthly Net Profit:
                  </p>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      color: profitMetrics.monthlyNetProfit >= 0 ? "#16a34a" : "#dc2626",
                    }}
                  >
                    {fmtFull(profitMetrics.monthlyNetProfit)}
                  </p>
                </div>
              </div>

              {/* Monthly Profit — no Cell, colour via shape prop */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-4">
                  Monthly Profit
                </h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart
                    data={monthlyProfitData}
                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="4 4" stroke="#f0f0f0" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tickFormatter={fmtK}
                      tick={{ fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<ProfitBarTooltip />} />
                    <Bar
                      dataKey="profit"
                      shape={(props: unknown) => {
                        const p = props as BarSliceProps;
                        return <ProfitBar {...p} />;
                      }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="h-8" />
    </div>
  );
}