// components/simulator/step-insights/insights-dashboard.tsx
"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { KpiCards } from "./kpi-cards";
import { ExecutiveSummary } from "./executive-summary";
import { RecommendationCards } from "./recommendation-cards";
import { ExpenseBreakdown } from "./expense-breakdown";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight, Loader2 } from "lucide-react";
import type { InsightData } from "@/types";
import { sendReportEmail } from "@/actions/send-report-email";

interface Props {
  simulation: {
    id: string;
    businessName: string;
    expenseItems: { name: string; amount: number }[];
    revenueSources: { name: string; amount: number }[];
    classrooms: { capacity: number; enrolled: number }[];
  };
  insight: {
    netMonthlyIncome: number;
    breakEvenEnrollment: number;
    capacityUtilization: number;
    largestExpenseName: string;
    largestExpensePct: number;
    executiveSummary: unknown;
    recommendations: unknown;
    actionPlan: unknown;
  };
}

export function InsightsDashboard({ simulation, insight }: Props) {
  const router = useRouter();
  const [emailSent, setEmailSent]   = useState(false);
  const [isPending, startTransition] = useTransition();

  const executiveSummary = insight.executiveSummary as InsightData["executiveSummary"];
  const recommendations  = insight.recommendations  as InsightData["recommendations"];
  const actionPlan       = insight.actionPlan        as InsightData["actionPlan"];

  /* ── PDF download: build a printable page and trigger browser print ── */
  function handleDownloadPDF() {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const totalRevenue  = simulation.revenueSources.reduce((s, r) => s + r.amount, 0);
    const totalExpenses = simulation.expenseItems.reduce((s, e) => s + e.amount, 0);

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${simulation.businessName} — AI Insight Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; color: #1a1a2e; }
            h1   { color: #2B4BAA; font-size: 24px; margin-bottom: 4px; }
            h2   { color: #2B4BAA; font-size: 18px; margin-top: 32px; border-bottom: 2px solid #e5e7eb; padding-bottom: 6px; }
            h3   { color: #374151; font-size: 14px; margin-top: 16px; }
            .subtitle { color: #6b7280; font-size: 13px; margin-bottom: 32px; }
            .kpi-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin: 16px 0; }
            .kpi      { border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; }
            .kpi-val  { font-size: 22px; font-weight: 700; margin: 6px 0; }
            .positive { color: #16a34a; }
            .negative { color: #dc2626; }
            .neutral  { color: #1d4ed8; }
            .rec-item { border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px 16px; margin: 8px 0; font-size: 13px; }
            .badge    { display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; margin-left: 8px; }
            .high     { background: #fee2e2; color: #b91c1c; }
            .medium   { background: #fef3c7; color: #92400e; }
            .low      { background: #dcfce7; color: #166534; }
            .phase    { border-left: 4px solid #3b82f6; padding: 12px 16px; margin: 8px 0; background: #eff6ff; border-radius: 0 6px 6px 0; }
            @media print { body { margin: 20px; } }
          </style>
        </head>
        <body>
          <h1>${simulation.businessName}</h1>
          <p class="subtitle">AI Insight Simulator Report — Generated ${new Date().toLocaleDateString()}</p>

          <h2>Financial Snapshot</h2>
          <div class="kpi-grid">
            <div class="kpi">
              <div style="font-size:11px;color:#6b7280;">Net Monthly Income</div>
              <div class="kpi-val ${insight.netMonthlyIncome >= 0 ? "positive" : "negative"}">
                $${insight.netMonthlyIncome.toLocaleString()}
              </div>
            </div>
            <div class="kpi">
              <div style="font-size:11px;color:#6b7280;">Total Revenue</div>
              <div class="kpi-val neutral">$${totalRevenue.toLocaleString()}</div>
            </div>
            <div class="kpi">
              <div style="font-size:11px;color:#6b7280;">Total Expenses</div>
              <div class="kpi-val negative">$${totalExpenses.toLocaleString()}</div>
            </div>
            <div class="kpi">
              <div style="font-size:11px;color:#6b7280;">Break-Even</div>
              <div class="kpi-val neutral">${insight.breakEvenEnrollment} students</div>
            </div>
          </div>

          <h2>Executive Summary</h2>
          <p><strong>Financial Overview:</strong> ${executiveSummary.financialOverview}</p>
          <p><strong>Profitability Status:</strong> ${executiveSummary.profitabilityStatus}</p>
          <p><strong>Enrollment Status:</strong> ${executiveSummary.enrollmentStatus}</p>

          <h3>Key Recommendations</h3>
          ${executiveSummary.recommendations.map((r) => `<div class="rec-item">• ${r}</div>`).join("")}

          <h2>Detailed Recommendations</h2>
          ${recommendations
            .map(
              (r) => `
            <div class="rec-item">
              <strong>${r.title}</strong>
              <span class="badge ${r.priority}">${r.priority}</span>
              <p style="margin:6px 0 4px;font-size:12px;color:#374151;">${r.description}</p>
              <p style="font-size:11px;color:#3b82f6;">Impact: ${r.impact}</p>
            </div>`,
            )
            .join("")}

          <h2>Action Plan</h2>
          ${actionPlan
            .map(
              (p) => `
            <div class="phase">
              <strong>${p.phase}: ${p.title}</strong>
              <span style="font-size:11px;color:#6b7280;margin-left:8px;">${p.timeline}</span>
              <ul style="margin:8px 0 0;padding-left:18px;font-size:12px;">
                ${p.actions.map((a) => `<li style="margin:4px 0;">${a}</li>`).join("")}
              </ul>
            </div>`,
            )
            .join("")}

          <h2>Expense Breakdown</h2>
          <table style="width:100%;border-collapse:collapse;font-size:13px;">
            <thead>
              <tr style="background:#f9fafb;">
                <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;">Item</th>
                <th style="text-align:right;padding:8px;border:1px solid #e5e7eb;">Amount</th>
                <th style="text-align:right;padding:8px;border:1px solid #e5e7eb;">% of Total</th>
              </tr>
            </thead>
            <tbody>
              ${simulation.expenseItems
                .map(
                  (e) => `
                <tr>
                  <td style="padding:8px;border:1px solid #e5e7eb;">${e.name}</td>
                  <td style="text-align:right;padding:8px;border:1px solid #e5e7eb;">$${e.amount.toLocaleString()}</td>
                  <td style="text-align:right;padding:8px;border:1px solid #e5e7eb;">
                    ${totalExpenses > 0 ? ((e.amount / totalExpenses) * 100).toFixed(1) : 0}%
                  </td>
                </tr>`,
                )
                .join("")}
            </tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  }

  /* ── Send report to email (calls a simple server action) ── */
  function handleSendEmail() {
    startTransition(async () => {
      const totalRevenue  = simulation.revenueSources.reduce((s, r) => s + r.amount, 0);
    const totalExpenses = simulation.expenseItems.reduce((s, e) => s + e.amount, 0);

    const result = await sendReportEmail({
      businessName:        simulation.businessName,
      netMonthlyIncome:    insight.netMonthlyIncome,
      totalRevenue,
      totalExpenses,
      breakEvenEnrollment: insight.breakEvenEnrollment,
      capacityUtilization: insight.capacityUtilization,
      largestExpenseName:  insight.largestExpenseName,
      largestExpensePct:   insight.largestExpensePct,
      financialOverview:   executiveSummary.financialOverview,
      profitabilityStatus: executiveSummary.profitabilityStatus,
      enrollmentStatus:    executiveSummary.enrollmentStatus,
      recommendations,
      actionPlan,
      expenseItems:        simulation.expenseItems,
    });

    if (result.success) {
      setEmailSent(true);
      setTimeout(() => setEmailSent(false), 4000);
    }
    });
  }

  return (
    <div className="space-y-6">
      {/* ── KPI + Executive Summary card ── */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-blue-500 mb-6">Insights</h2>

        <KpiCards
          netMonthlyIncome={insight.netMonthlyIncome}
          breakEvenEnrollment={insight.breakEvenEnrollment}
          capacityUtilization={insight.capacityUtilization}
          largestExpenseName={insight.largestExpenseName}
          largestExpensePct={insight.largestExpensePct}
          expenseItems={simulation.expenseItems}
        />

        <div className="mt-8">
          <ExecutiveSummary
            summary={executiveSummary}
            recommendations={recommendations}
          />
        </div>

        {/* ── Export Results + Next Steps row (screenshot 2) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 pt-8 border-t border-gray-100">
          {/* Export Results */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-5">Export Results</h3>
            <div className="space-y-3">
              <Button
                onClick={handleDownloadPDF}
                className="w-full bg-blue-500 hover:bg-blue-600 justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download PDF Report
              </Button>
              <Button
                variant="outline"
                onClick={handleSendEmail}
                disabled={isPending || emailSent}
                className="w-full justify-center gap-2"
              >
                {isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Mail className="h-4 w-4" />
                )}
                {emailSent ? "Report Sent!" : "Send Report to My Email"}
              </Button>
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-5">Next Steps</h3>
            <Button
              onClick={() =>
                router.push(`/simulator/${simulation.id}/next-steps`)
              }
              className="w-full bg-blue-500 hover:bg-blue-600 justify-center gap-2"
            >
              <ArrowRight className="h-4 w-4" />
              View Personalized Action Plan
            </Button>
          </div>
        </div>
      </div>

      {/* ── Detailed Recommendations ── */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-blue-500 mb-6">
          Detailed Recommendations
        </h2>
        <RecommendationCards recommendations={recommendations} />
      </div>

      {/* ── Expense Breakdown chart ── */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-blue-500 mb-6">
          Expense Breakdown
        </h2>
        <ExpenseBreakdown expenseItems={simulation.expenseItems} />
      </div>

      {/* ── Footer nav ── */}
      <div className="flex justify-between items-center pb-4">
        <Button
          variant="outline"
          onClick={() => router.push(`/simulator/${simulation.id}/inputs`)}
        >
          Back to Inputs
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => router.push(`/simulator/${simulation.id}/next-steps`)}
        >
          View Action Plan →
        </Button>
      </div>
    </div>
  );
}