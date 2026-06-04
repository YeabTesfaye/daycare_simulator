"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Props {
  netMonthlyIncome: number;
  breakEvenEnrollment: number;
  capacityUtilization: number;
  largestExpenseName: string;
  largestExpensePct: number;
  expenseItems: { name: string; amount: number }[];
}

function GaugeChart({ value }: { value: number }) {
  // Fix: clamp to 100 for visual, use pct directly (not /200)
  const clamped = Math.min(value, 100);
  const pct = clamped / 100;
  const data = [
    { value: pct },
    { value: 1 - pct },
  ];
  const color =
    value > 100 ? "#f59e0b" : value > 75 ? "#3b82f6" : "#f59e0b";

  return (
    <div className="relative w-32 h-16 mx-auto">
      <ResponsiveContainer width="100%" height={80}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={40}
            outerRadius={55}
            paddingAngle={0}
            dataKey="value"
          >
            <Cell fill={color} />
            <Cell fill="#e5e7eb" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div
        className="absolute inset-0 flex items-end justify-center pb-1"
        style={{ color }}
      >
        <span className="text-lg font-bold">{value.toFixed(1)}%</span>
      </div>
    </div>
  );
}

function DonutChart({ pct, name }: { pct: number; name: string }) {
  const data = [{ value: pct }, { value: 100 - pct }];
  return (
    <div className="relative w-28 h-28 mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={38}
            outerRadius={52}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            paddingAngle={2}
          >
            <Cell fill="#3b82f6" />
            <Cell fill="#e5e7eb" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xs font-semibold text-gray-800 text-center leading-tight px-2">
          {name}
        </span>
        <span className="text-xs text-gray-500">{pct.toFixed(1)}%</span>
      </div>
    </div>
  );
}

export function KpiCards({
  netMonthlyIncome,
  breakEvenEnrollment,
  capacityUtilization,
  largestExpenseName,
  largestExpensePct,
}: Props) {
  const isProfit = netMonthlyIncome >= 0;

  // Fix: format with currency style (already includes $), no manual $ prefix
  const formattedIncome = Math.abs(netMonthlyIncome).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Net Monthly Income */}
      <div className="border border-gray-200 rounded-xl p-5">
        <p className="text-xs text-gray-500 mb-2">Net Monthly Income</p>
        <p className={`text-2xl font-bold ${isProfit ? "text-green-600" : "text-red-500"}`}>
          {isProfit ? "+" : "-"}{formattedIncome}
        </p>
        <p className="text-xs text-gray-400 mt-2">
          {isProfit
            ? "The center is generating a profit."
            : "The daycare center is currently operating at a loss, indicating the need for increased revenue or reduced expenses."}
        </p>
      </div>

      {/* Break-Even */}
      <div className="border border-gray-200 rounded-xl p-5">
        <p className="text-xs text-gray-500 mb-2">Break-Even Enrollment</p>
        <p className="text-3xl font-bold text-gray-900">
          {breakEvenEnrollment}{" "}
          <span className="text-lg font-normal text-gray-500">students</span>
        </p>
        <p className="text-xs text-gray-400 mt-2">
          To cover fixed costs, the center needs at least {breakEvenEnrollment} students
          enrolled at the current tuition rate.
        </p>
      </div>

      {/* Largest Expense Donut */}
      <div className="border border-gray-200 rounded-xl p-5 flex flex-col items-center">
        <p className="text-xs text-gray-500 mb-2 self-start">Largest Expense</p>
        <DonutChart pct={largestExpensePct} name={largestExpenseName} />
      </div>

      {/* Capacity Utilization Gauge */}
      <div className="border border-gray-200 rounded-xl p-5">
        <p className="text-xs font-semibold text-gray-800 mb-2 text-center">
          Capacity Utilization
        </p>
        <GaugeChart value={capacityUtilization} />
        <p className="text-xs text-gray-400 mt-3 text-center">
          {capacityUtilization > 100
            ? "The center is over capacity, which may indicate a need for additional resources or space."
            : "Center is operating within capacity."}
        </p>
      </div>
    </div>
  );
}