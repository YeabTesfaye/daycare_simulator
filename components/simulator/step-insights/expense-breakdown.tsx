"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface Props {
  expenseItems: { name: string; amount: number }[];
}

const COLORS = [
  "#3b82f6",
  "#60a5fa",
  "#93c5fd",
  "#bfdbfe",
  "#dbeafe",
  "#1d4ed8",
];

export function ExpenseBreakdown({ expenseItems }: Props) {
  const data = expenseItems.map(e => ({ name: e.name, amount: e.amount }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={v => `$${v.toLocaleString()}`}
        />
        <Tooltip
         formatter={(value) => [`$${Number(value).toLocaleString()}`, "Amount"]}
          contentStyle={{ borderRadius: 8, border: "1px solid #e5e7eb" }}
        />
        <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}