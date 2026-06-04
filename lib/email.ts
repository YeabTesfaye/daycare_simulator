// lib/email.ts
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { WelcomeEmail } from "@/components/emails/welcome-email";
import { ResetPasswordEmail } from "@/components/emails/reset-password-email";

// Lazy-initialise so the module loads fine even before env vars are set
function getTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER!,
      pass: process.env.GMAIL_APP_PASSWORD!,
    },
  });
}

function fromAddress() {
  return `"AI Insight Simulator" <${process.env.GMAIL_USER}>`;
}

/* ─── Welcome email ──────────────────────────────────────── */
export async function sendWelcomeEmail(to: string, name: string) {
  try {
    const html = await render(WelcomeEmail({ name, email: to }));

    await getTransporter().sendMail({
      from:    fromAddress(),
      to,
      subject: "Welcome to AI Insight Simulator 🍼",
      html,
    });

    console.log(`[sendWelcomeEmail] ✓ Sent to ${to}`);
    return { success: true };
  } catch (error) {
    console.error("[sendWelcomeEmail] ✗ Failed:", error);
    // Never throw — a failed welcome email must not break registration
    return { success: false, error };
  }
}

/* ─── Password reset email ───────────────────────────────── */
export async function sendPasswordResetEmail(to: string, resetToken: string) {
  try {
    const baseUrl   = process.env.NEXTAUTH_URL ?? "http://localhost:3000";
    const resetLink = `${baseUrl}/reset-password?token=${resetToken}`;
    const html      = await render(ResetPasswordEmail({ resetLink, email: to }));

    await getTransporter().sendMail({
      from:    fromAddress(),
      to,
      subject: "Reset your AI Insight Simulator password",
      html,
    });

    console.log(`[sendPasswordResetEmail] ✓ Sent to ${to}`);
    return { success: true };
  } catch (error) {
    console.error("[sendPasswordResetEmail] ✗ Failed:", error);
    return { success: false, error };
  }
}