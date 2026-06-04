// actions/auth.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { randomBytes } from "crypto";
import { prisma } from "@/lib/prisma";
import {
  hashPassword,
  comparePassword,
  createToken,
} from "@/lib/auth";
import {
  sendWelcomeEmail,
  sendPasswordResetEmail,
} from "@/lib/email";

/* ─── Login ──────────────────────────────────────────────── */
export async function loginAction(formData: FormData) {
  const email    = (formData.get("email")    as string)?.trim().toLowerCase();
  const password =  formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { error: "Invalid credentials." };

  const valid = await comparePassword(password, user.password);
  if (!valid) return { error: "Invalid credentials." };

  const token = await createToken(user.id);
  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge:   60 * 60 * 24 * 7,
    path:     "/",
  });

  redirect("/overview");
}

/* ─── Register ───────────────────────────────────────────── */
export async function registerAction(formData: FormData) {
  const email    = (formData.get("email")    as string)?.trim().toLowerCase();
  const password =  formData.get("password") as string;
  const name     = (formData.get("name")     as string)?.trim();

  if (!email || !password) {
    return { error: "All fields are required." };
  }
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return { error: "Email already in use." };

  const hashed = await hashPassword(password);
  const user = await prisma.user.create({
    data: { email, password: hashed, name: name || null },
  });

  // Send welcome email — fire and forget (don't block registration on it)
  sendWelcomeEmail(email, name).catch((err) =>
    console.error("[register] welcome email failed:", err)
  );

  const token = await createToken(user.id);
  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge:   60 * 60 * 24 * 7,
    path:     "/",
  });

  redirect("/overview");
}

/* ─── Logout ─────────────────────────────────────────────── */
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  redirect("/login");
}

/* ─── Forgot password ────────────────────────────────────── */
export async function forgotPasswordAction(formData: FormData) {
  const email = (formData.get("email") as string)?.trim().toLowerCase();

  if (!email) return { error: "Email address is required." };

  // Always return success even if the email doesn't exist —
  // this prevents user enumeration attacks.
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    // Simulate a short delay so timing attacks are harder
    await new Promise((r) => setTimeout(r, 500));
    return { success: true };
  }

  // Delete any existing unused tokens for this user
  await prisma.passwordResetToken.deleteMany({
    where: { userId: user.id, used: false },
  });

  // Create a new token (expires in 1 hour)
  const rawToken = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

  await prisma.passwordResetToken.create({
    data: {
      token:    rawToken,
      userId:   user.id,
      expiresAt,
    },
  });

  // Send the email
  const result = await sendPasswordResetEmail(email, rawToken);
  if (!result.success) {
    // Still show success to the user but log internally
    console.error("[forgotPassword] Failed to send reset email:", result.error);
  }

  return { success: true };
}

/* ─── Reset password ─────────────────────────────────────── */
export async function resetPasswordAction(formData: FormData) {
  const token           = formData.get("token")           as string;
  const newPassword     = formData.get("newPassword")     as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!token || !newPassword || !confirmPassword) {
    return { error: "All fields are required." };
  }
  if (newPassword.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }
  if (newPassword !== confirmPassword) {
    return { error: "Passwords do not match." };
  }

  // Look up the token
  const resetRecord = await prisma.passwordResetToken.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!resetRecord) {
    return { error: "Invalid or expired reset link. Please request a new one." };
  }
  if (resetRecord.used) {
    return { error: "This reset link has already been used." };
  }
  if (resetRecord.expiresAt < new Date()) {
    return { error: "This reset link has expired. Please request a new one." };
  }

  // Update the password and mark token as used in a transaction
  const hashed = await hashPassword(newPassword);
  await prisma.$transaction([
    prisma.user.update({
      where: { id: resetRecord.userId },
      data:  { password: hashed },
    }),
    prisma.passwordResetToken.update({
      where: { id: resetRecord.id },
      data:  { used: true },
    }),
  ]);

  return { success: true };
}