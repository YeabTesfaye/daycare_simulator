import { LoginForm } from "@/components/auth/login-form";
import {redirect} from "next/navigation";
import {getSession} from "@/lib/auth";
export default async function RegisterPage() {
  const user = await getSession();
  if (user) {
    redirect("/overview");
  }
  return <LoginForm mode="register" />;
}