// actions/settings.ts
"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { hashPassword, comparePassword } from "@/lib/auth";

/* ─── Update profile (name only — email is immutable) ─── */
export async function updateProfileAction(formData: FormData) {
  const user = await getSession();
  if (!user) redirect("/login");

  const name = (formData.get("name") as string)?.trim();

  await prisma.user.update({
    where: { id: user.id },
    data:  { name: name || null },
  });

  revalidatePath("/settings");
  return { success: "Profile updated successfully." };
}

/* ─── Update password ────────────────────────────────── */
export async function updatePasswordAction(formData: FormData) {
  const user = await getSession();
  if (!user) redirect("/login");

  const currentPassword = formData.get("currentPassword") as string;
  const newPassword     = formData.get("newPassword")     as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!currentPassword || !newPassword || !confirmPassword)
    return { error: "All password fields are required." };
  if (newPassword.length < 8)
    return { error: "New password must be at least 8 characters." };
  if (newPassword !== confirmPassword)
    return { error: "New passwords do not match." };

  const dbUser = await prisma.user.findUnique({ where: { id: user.id } });
  if (!dbUser) return { error: "User not found." };

  const valid = await comparePassword(currentPassword, dbUser.password);
  if (!valid) return { error: "Current password is incorrect." };

  const hashed = await hashPassword(newPassword);
  await prisma.user.update({ where: { id: user.id }, data: { password: hashed } });

  return { success: "Password changed successfully." };
}

/* ─── Update notification + simulation preferences ─────── */
export interface PreferencesPayload {
  defaultGrowthRate:   number;
  defaultGrowthPeriod: string;
  currency:            string;
  fiscalYearStart:     number;
  notifWelcome:        boolean;
  notifReportReady:    boolean;
  notifProductUpdates: boolean;
  notifWeeklyDigest:   boolean;
}

export async function updatePreferencesAction(data: PreferencesPayload) {
  const user = await getSession();
  if (!user) redirect("/login");

  await prisma.userPreferences.upsert({
    where:  { userId: user.id },
    update: data,
    create: { userId: user.id, ...data },
  });

  revalidatePath("/settings");
  return { success: "Preferences saved." };
}

/* ─── Delete account ──────────────────────────────────── */
export async function deleteAccountAction(formData: FormData) {
  const user = await getSession();
  if (!user) redirect("/login");

  const confirmation = formData.get("confirmation") as string;
  if (confirmation !== "DELETE")
    return { error: 'Type "DELETE" to confirm account deletion.' };

  await prisma.user.delete({ where: { id: user.id } });

  const cookieStore = await cookies();
  cookieStore.delete("token");
  redirect("/login");
}