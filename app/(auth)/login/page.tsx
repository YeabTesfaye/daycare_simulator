// app/login/page.tsx

import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { LoginForm } from "@/components/auth/login-form";

export default async function LoginPage() {
  const user = await getSession();

  if (user) {
    redirect("/overview"); 
  }

  return <LoginForm />;
}