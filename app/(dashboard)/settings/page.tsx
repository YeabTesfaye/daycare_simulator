// app/(dashboard)/settings/page.tsx
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SettingsClient } from "./settings-client";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const [totalSims, completedSims, prefs] = await Promise.all([
    prisma.simulation.count({ where: { userId: user.id } }),
    prisma.simulation.count({ where: { userId: user.id, status: "COMPLETED" } }),
    prisma.userPreferences.findUnique({ where: { userId: user.id } }),
  ]);

  return (
    <SettingsClient
      user={{
        id:        user.id,
        name:      user.name ?? "",
        email:     user.email,
        createdAt: user.createdAt.toISOString(),
      }}
      stats={{ totalSims, completedSims }}
      preferences={prefs ?? {
        defaultGrowthRate:   5,
        defaultGrowthPeriod: "Annually",
        currency:            "USD",
        fiscalYearStart:     1,
        notifWelcome:        true,
        notifReportReady:    true,
        notifProductUpdates: false,
        notifWeeklyDigest:   false,
      }}
    />
  );
}