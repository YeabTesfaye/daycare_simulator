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
      {/* Left panel — narrow, ~30% width */}
      <div className="w-full md:w-[30%] flex flex-col justify-center px-8 md:px-12 bg-white">
        <div className="max-w-70 w-full mx-auto">
          {/* Title — centered, thin font weight like Image 2 */}
          <h1 className="text-3xl font-light text-gray-700 mb-8 text-center">
            {mode === "login" ? "Login" : "Create Account"}
          </h1>

          <form action={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div>
                <Label htmlFor="name" className="text-sm text-gray-600 font-normal">
                  Full Name
                </Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="pl-9 h-11 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-sm"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="email" className="text-sm text-gray-600 font-normal">
                Email
              </Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="pl-9 h-11 border border-blue-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-sm text-gray-600 font-normal">
                  Password
                </Label>
                {mode === "login" && (
                  <button
                    type="button"
                    className="text-sm text-blue-500 hover:underline font-normal"
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
                  className="pl-9 h-11 border border-blue-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
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
              className="w-full h-11 bg-blue-400 hover:bg-blue-500 text-white rounded-full font-medium text-sm mt-2"
            >
              {isPending
                ? "Please wait..."
                : mode === "login"
                ? "Login Now"
                : "Create Account"}
            </Button>
          </form>

          <p className="mt-5 text-sm text-center text-gray-500">
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

      {/* Right panel — image dominant, large branding below */}
      <div className="hidden md:flex md:w-[70%] flex-col items-center justify-center bg-white gap-2 py-8">
        {/* Blocks image — very large, fills most of the panel height */}
        <div className="relative w-140 h-105">
          <Image
            src="/images/blocks.png"
            alt="Daycare blocks spelling DAY CARE"
            fill
            sizes="560px"
            className="object-contain"
            priority
          />
        </div>

        {/* Branding — massive, playful, matching Image 2's chunky condensed look */}
        <div className="text-center mt-0">
          <p
            className="font-black text-[#2B3FAA] leading-none tracking-tight"
            style={{
              fontSize: "clamp(4rem, 7vw, 6.5rem)",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontWeight: 900,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
            }}
          >
            AI insight
          </p>
          <p
            className="tracking-[0.55em] uppercase text-gray-400 mt-2"
            style={{ fontSize: "0.85rem" }}
          >
            SIMULATOR
          </p>
        </div>
      </div>
    </div>
  );
}