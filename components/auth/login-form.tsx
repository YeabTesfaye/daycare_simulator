"use client";
import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { loginAction, registerAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Lock, AlertCircle } from "lucide-react";

interface LoginFormProps {
  mode?: "login" | "register";
}

export function LoginForm({ mode = "login" }: LoginFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const action = mode === "login" ? loginAction : registerAction;
      const result = await action(formData);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left panel — narrow, ~35% width */}
      <div className="w-full md:w-[35%] flex flex-col justify-center px-8 md:px-14 bg-white">
        <div className="max-w-xs w-full mx-auto">
          <h1 className="text-3xl font-light text-gray-800 mb-8">
            {mode === "login" ? "Login" : "Create Account"}
          </h1>

          <form action={handleSubmit} className="space-y-5">
            {mode === "register" && (
              <div>
                <Label htmlFor="name" className="text-sm text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-1 h-11"
                  required
                />
              </div>
            )}

            <div>
              <Label htmlFor="email" className="text-sm text-gray-700">
                Email
              </Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="pl-9 h-11"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-sm text-gray-700">
                  Password
                </Label>
                {mode === "login" && (
                  <button
                    type="button"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••••••"
                  className="pl-9 h-11"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-11 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium"
            >
              {isPending
                ? "Please wait..."
                : mode === "login"
                ? "Login Now"
                : "Create Account"}
            </Button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            {mode === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-blue-500 hover:underline">
                  Register
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link href="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Right panel — large blocks image + big bold branding */}
      <div className="hidden md:flex md:w-[65%] flex-col items-center justify-center bg-white gap-6">
        {/* Blocks image — large, dominant */}
        <div className="relative w-[520px] h-[400px]">
          <Image
            src="/images/blocks.png"
            alt="Daycare blocks spelling DAY CARE"
            fill
            sizes="520px"
            className="object-contain"
            priority
          />
        </div>

        {/* Branding — chunky bold blue */}
        <div className="text-center -mt-2">
          <p
            className="font-black text-[#2B3FAA] leading-none"
            style={{
              fontSize: "clamp(3rem, 5.5vw, 5rem)",
              fontFamily: "'Arial Black', 'Franklin Gothic Heavy', Impact, sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            AI insight
          </p>
          <p className="text-xs tracking-[0.45em] uppercase text-gray-400 mt-2">
            SIMULATOR
          </p>
        </div>
      </div>
    </div>
  );
}