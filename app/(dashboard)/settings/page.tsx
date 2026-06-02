// app/(dashboard)/settings/page.tsx
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { SettingsClient } from "./settings-client";

export default async function SettingsPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  return (
    <SettingsClient
      user={{
        id:    user.id,
        name:  user.name ?? "",
        email: user.email,
      }}
    />
  );
}