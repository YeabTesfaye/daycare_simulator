// components/budget-simulation/budget-simulation-client.tsx
"use client";

import { useState, useMemo } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
  PieChart, Pie, Cell,
  BarChart, Bar,
} from "recharts";

/* ─── types ─────────────────────────────────────────────── */
interface Params {
  studentCount:     number;
  tuitionFee:       number;
  growthRate:       number;
  growthPeriod:     "Monthly" | "Quarterly" | "Annually";
  monthlyExpenses:  number;
  classroomCapacity:number;
  staffSalaries:    number;
}

/* ─── constants ─────────────────────────────────────────── */
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const EXPENSE_COLORS = ["#3b82f6","#22c55e","#f59e0b","#ef4444","#8b5cf6"];

const EXPENSE_CATEGORIES = [
  { key: "staffSalaries",   label: "Staff Salaries",   pct: 0.51 },
  { key: "facilityCosts",   label: "Facility Costs",   pct: 0.20 },
  { key: "supplies",        label: "Supplies",          pct: 0.15 },
  { key: "administrative",  label: "Administrative",    pct: 0.10 },
  { key: "other",           label: "Other",             pct: 0.05 },
];

const SLIDER_CONFIG: {
  key: keyof Params;
  label: string;
  min: number; max: number; step: number;
  prefix?: string; suffix?: string;
  col: 1 | 2 | 3;
}[] = [
  { key:"studentCount",      label:"Student Count",          min:1,   max:300, step:1,    col:1 },
  { key:"tuitionFee",        label:"Tuition Fee per Student ($)", min:500, max:5000, step:50, prefix:"$", col:2 },
  { key:"growthRate",        label:"Growth Rate (%)",         min:0,   max:30,  step:0.5,  suffix:"%", col:3 },
  { key:"monthlyExpenses",   label:"Monthly Expenses ($)",    min:5000,max:200000,step:500, prefix:"$", col:2 },
  { key:"classroomCapacity", label:"Classroom Capacity",      min:10,  max:200, step:1,    col:3 },
  { key:"staffSalaries",     label:"Staff Salaries ($)",      min:5000,max:200000,step:500, prefix:"$", col:1 },
];

/* ─── helpers ───────────────────────────────────────────── */
function fmtK(v: number) {
  if (Math.abs(v) >= 1000) return `$${(v / 1000).toFixed(0)}k`;
  return `$${v.toFixed(0)}`;
}
function fmtFull(v: number) {
  return v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
}

/* ─── Custom tooltip for line chart ─────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LineTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow text-xs">
      <p className="font-semibold mb-1">{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: {fmtFull(p.value)}
        </p>
      ))}
    </div>
  );
}

/* ─── Custom tooltip for bar chart ──────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BarTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow text-xs">
      <p className="font-semibold mb-1">{label}</p>
      <p style={{ color: "#6366f1" }}>profit: {fmtFull(payload[0].value)}</p>
    </div>
  );
}

/* ─── Pie label renderer ─────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PieLabel({ cx, cy, midAngle, outerRadius, name, pct, fill }: any) {
  const RADIAN = Math.PI / 180;
  const r  = outerRadius + 30;
  const x  = cx + r * Math.cos(-midAngle * RADIAN);
  const y  = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill={fill} textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" fontSize={12} fontWeight={500}>
      {`${name}: ${(pct * 100).toFixed(0)}%`}
    </text>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export function BudgetSimulationClient() {
  const [params, setParams] = useState<Params>({
    studentCount:      107,
    tuitionFee:        2050,
    growthRate:        5,
    growthPeriod:      "Monthly",
    monthlyExpenses:   47000,
    classroomCapacity: 73,
    staffSalaries:     48000,
  });

  function set(key: keyof Params, value: number | string) {
    setParams((p) => ({ ...p, [key]: value }));
  }

  /* ── Derived data ── */
  const { trendData, expenseData, profitMetrics, monthlyProfitData } = useMemo(() => {
    const monthlyRevenue = params.studentCount * params.tuitionFee;
    const growthFactor =
      params.growthPeriod === "Monthly"
        ? params.growthRate / 100
        : params.growthPeriod === "Quarterly"
        ? params.growthRate / 100 / 3
        : params.growthRate / 100 / 12;

    const trendData = MONTHS.map((month, i) => {
      const multiplier = Math.pow(1 + growthFactor, i);
      const revenue    = monthlyRevenue * multiplier;
      const expenses   = (params.monthlyExpenses + params.staffSalaries) * Math.pow(1 + growthFactor * 0.3, i);
      return {
        month,
        revenue:  Math.round(revenue),
        expenses: Math.round(expenses),
        profit:   Math.round(revenue - expenses),
      };
    });

    const totalExpenses = params.monthlyExpenses + params.staffSalaries;
    const expenseData = EXPENSE_CATEGORIES.map((cat, i) => ({
      name:  cat.label,
      value: Math.round(totalExpenses * cat.pct),
      pct:   cat.pct,
      color: EXPENSE_COLORS[i],
    }));
    // Override Staff Salaries with actual slider value
    expenseData[0].value = params.staffSalaries;

    const latestRevenue  = trendData[trendData.length - 1].revenue;
    const latestExpenses = trendData[trendData.length - 1].expenses;
    const latestProfit   = latestRevenue - latestExpenses;
    const capacityUtil   = params.studentCount > 0 && params.classroomCapacity > 0
      ? (params.studentCount / params.classroomCapacity) * 100
      : 0;
    const profitPerStudent = params.studentCount > 0 ? latestProfit / params.studentCount : 0;

    const monthlyProfitData = trendData.map((d) => ({
      month:  d.month,
      profit: d.profit,
    }));

    return {
      trendData,
      expenseData,
      profitMetrics: {
        profitPerStudent,
        capacityUtilization: capacityUtil,
        monthlyNetProfit: latestProfit,
      },
      monthlyProfitData,
    };
  }, [params]);

  /* ── Slider component ── */
  function Slider({ cfg }: { cfg: typeof SLIDER_CONFIG[number] }) {
    const raw = params[cfg.key] as number;
    const display = `${cfg.prefix ?? ""}${raw}${cfg.suffix ?? ""}`;
    const pct = ((raw - cfg.min) / (cfg.max - cfg.min)) * 100;

    return (
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">
          {cfg.label}
        </label>
        {/* Styled range input */}
        <div className="relative mb-2">
          <input
            type="range"
            min={cfg.min}
            max={cfg.max}
            step={cfg.step}
            value={raw}
            onChange={(e) => set(cfg.key, parseFloat(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3b82f6 ${pct}%, #e5e7eb ${pct}%)`,
            }}
          />
        </div>
        {/* Editable number input */}
        <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white">
          {display}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ── Page header (matches screenshot 4 blue-top-border card) ── */}
      <div className="mx-6 mt-6 bg-white rounded-2xl border border-t-4 border-t-blue-400 border-gray-200 shadow-sm">
        <div className="p-6 flex items-center justify-between border-b border-gray-100">
          <div>
            <h1 className="text-xl font-bold text-blue-500">
              Daycare Budget Simulation
            </h1>
            <p className="text-sm text-gray-500">
              Test different scenarios and see financial projections
            </p>
          </div>
          {/* Avatar circle matching screenshot */}
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
        </div>

        <div className="p-8 space-y-10">

          {/* ── Simulation Parameters ── */}
          <section>
            <h2 className="text-lg font-bold text-blue-500 mb-6">
              Simulation Parameters
            </h2>

            {/* 3-column grid for sliders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
              {/* Row 1 */}
              {SLIDER_CONFIG.filter((c) => c.col === 1).slice(0, 1).map((cfg) => (
                <Slider key={cfg.key} cfg={cfg} />
              ))}
              {SLIDER_CONFIG.filter((c) => c.col === 2).slice(0, 1).map((cfg) => (
                <Slider key={cfg.key} cfg={cfg} />
              ))}
              {SLIDER_CONFIG.filter((c) => c.col === 3).slice(0, 1).map((cfg) => (
                <Slider key={cfg.key} cfg={cfg} />
              ))}

              {/* Row 2 — Growth Period dropdown in col 1 */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Growth Period
                </label>
                <div className="relative">
                  <select
                    value={params.growthPeriod}
                    onChange={(e) => set("growthPeriod", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white appearance-none cursor-pointer pr-8"
                  >
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Annually</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                </div>
              </div>
              {SLIDER_CONFIG.filter((c) => c.col === 2).slice(1).map((cfg) => (
                <Slider key={cfg.key} cfg={cfg} />
              ))}
              {SLIDER_CONFIG.filter((c) => c.col === 3).slice(1).map((cfg) => (
                <Slider key={cfg.key} cfg={cfg} />
              ))}

              {/* Row 3 — Staff Salaries spans col 1 only */}
              {SLIDER_CONFIG.filter((c) => c.col === 1).slice(1).map((cfg) => (
                <Slider key={cfg.key} cfg={cfg} />
              ))}
            </div>
          </section>

          {/* ── Simulation Results ── */}
          <section>
            <h2 className="text-lg font-bold text-blue-500 mb-6">
              Simulation Results
            </h2>

            {/* Row 1: Line chart + Pie chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

              {/* Revenue & Expenses Trend */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-4">
                  Revenue &amp; Expenses Trend
                </h3>
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={trendData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="4 4" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={fmtK} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<LineTooltip />} />
                    <Legend
                      formatter={(v) => (
                        <span className="text-xs text-gray-600">- {v}</span>
                      )}
                    />
                    <Line type="monotone" dataKey="revenue"  stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} name="revenue" />
                    <Line type="monotone" dataKey="expenses" stroke="#f97316" strokeWidth={2} dot={{ r: 3 }} name="expenses" />
                    <Line type="monotone" dataKey="profit"   stroke="#8b5cf6" strokeWidth={2} dot={{ r: 3 }} name="profit" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Expense Breakdown Pie */}
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
                      outerRadius={90}
                      dataKey="value"
                      labelLine={false}
                      label={PieLabel}
                    >
                      {expenseData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      iconType="square"
                      iconSize={10}
                      formatter={(v) => <span className="text-xs text-gray-600">{v}</span>}
                    />
                    <Tooltip
                      formatter={(value) => [
                        fmtFull(Number(value ?? 0)), "Amount"
                      ]}
                      contentStyle={{ borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 12 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Row 2: Profit Metrics + Monthly Profit bar */}
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
                        color:
                          profitMetrics.profitPerStudent >= 0 ? "#16a34a" : "#dc2626",
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
                          profitMetrics.capacityUtilization <= 100 ? "#16a34a" : "#f59e0b",
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
                      color:
                        profitMetrics.monthlyNetProfit >= 0 ? "#16a34a" : "#dc2626",
                    }}
                  >
                    {fmtFull(profitMetrics.monthlyNetProfit)}
                  </p>
                </div>
              </div>

              {/* Monthly Profit bar */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-4">
                  Monthly Profit
                </h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={monthlyProfitData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="4 4" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={fmtK} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<BarTooltip />} />
                    <Bar dataKey="profit" radius={[3, 3, 0, 0]}>
                      {monthlyProfitData.map((entry, i) => (
                        <Cell
                          key={i}
                          fill={entry.profit >= 0 ? "#818cf8" : "#f87171"}
                          opacity={i === 2 ? 0.5 : 1} /* highlight Mar like screenshot */
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* bottom padding */}
      <div className="h-8" />
    </div>
  );
}