"use server";

import { render } from "@react-email/render";
import { ReportEmail } from "@/components/emails/report-email";
import nodemailer from "nodemailer";
import { getSession } from "@/lib/auth";

function getTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER!,
      pass: process.env.GMAIL_APP_PASSWORD!,
    },
  });
}

export async function sendReportEmail(payload: {
  businessName: string;
  netMonthlyIncome: number;
  totalRevenue: number;
  totalExpenses: number;
  breakEvenEnrollment: number;
  capacityUtilization: number;
  largestExpenseName: string;
  largestExpensePct: number;
  financialOverview: string;
  profitabilityStatus: string;
  enrollmentStatus: string;
  recommendations: { title: string; priority: string; description: string; impact: string }[];
  actionPlan: { phase: string; title: string; timeline: string; actions: string[] }[];
  expenseItems: { name: string; amount: number }[];
}) {
  const user = await getSession();
  console.log(user, "USER")
  if (!user?.email) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const html = await render(ReportEmail(payload));
    await getTransporter().sendMail({
      from: `"AI Insight Simulator" <${process.env.GMAIL_USER}>`,
      to: user?.email,
      subject: `${payload.businessName} — Your AI Insight Report`,
      html,
    });
    console.log(`[sendReportEmail] ✓ Sent to ${user?.email}`);
    return { success: true };
  } catch (error) {
    console.error("[sendReportEmail] ✗ Failed:", error);
    return { success: false, error };
  }
}