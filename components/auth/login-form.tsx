"use client";
import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { loginAction, registerAction, forgotPasswordAction } from "@/actions/auth"; // Added forgotPasswordAction
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Lock, AlertCircle, Mail, CheckCircle2 } from "lucide-react"; // Added Mail and CheckCircle2

interface LoginFormProps {
  mode?: "login" | "register" | "forgot-password"; // Added forgot-password mode
}

export function LoginForm({ mode = "login" }: LoginFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false); // Tracks successful email submission
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    setError(null);
    setSuccess(false);
    
    startTransition(async () => {
      // Determine the correct server action based on the mode
      let action;
      if (mode === "login") action = loginAction;
      else if (mode === "register") action = registerAction;
      else action = forgotPasswordAction;

      const result = await action(formData);
      
      if (result?.error) {
        setError(result.error);
      } else if (mode === "forgot-password") {
        setSuccess(true);
      }
    });
  }

  // Helper variables to clean up conditional headers and button text
  const pageTitle = 
    mode === "login" ? "Login" : 
    mode === "register" ? "Create Account" : 
    "Reset Password";

  const buttonText = 
    isPending ? "Please wait..." : 
    mode === "login" ? "Login Now" : 
    mode === "register" ? "Create Account" : 
    "Send Reset Link";

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left panel — narrow, ~30% width */}
      <div className="w-full md:w-[30%] flex flex-col justify-center px-8 md:px-12 bg-white">
        <div className="max-w-70 w-full mx-auto">
          {/* Title — centered, thin font weight */}
          <h1 className="text-3xl font-bold  text-gray-700 mb-8 text-center">
            {pageTitle}
          </h1>

          {/* Success State for Forgot Password */}
          {success && mode === "forgot-password" ? (
            <div className="text-center space-y-4">
              <div className="flex justify-center text-green-500">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <p className="text-sm text-gray-600">
                We sent a password reset link to your email address. Please check your inbox.
              </p>
              <Link 
                href="/login" 
                className="block text-sm text-blue-500 hover:underline pt-2"
              >
                Back to Login
              </Link>
            </div>
          ) : (
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
                  {mode === "forgot-password" ? (
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  ) : (
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  )}
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

              {mode !== "forgot-password" && (
                <div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-sm text-gray-600 font-normal">
                      Password
                    </Label>
                    {mode === "login" && (
                      <Link
                        href="/forgot-password"
                        className="text-sm text-blue-500 hover:underline font-normal"
                      >
                        Forgot?
                      </Link>
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
              )}

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
                {buttonText}
              </Button>
            </form>
          )}

          {/* Bottom links layout adjustments */}
          {!success && (
            <p className="mt-5 text-sm text-center text-gray-500">
              {mode === "login" && (
                <>
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="text-blue-500 hover:underline">
                    Register
                  </Link>
                </>
              )}
              {mode === "register" && (
                <>
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-500 hover:underline">
                    Login
                  </Link>
                </>
              )}
              {mode === "forgot-password" && (
                <Link href="/login" className="text-blue-500 hover:underline">
                  Back to Login
                </Link>
              )}
            </p>
          )}
        </div>
      </div>

      {/* Right panel — image dominant, large branding below */}
      <div className="hidden md:flex md:w-[70%] flex-col items-center justify-center bg-white gap-2 py-8">
        <div className="relative w-240 h-205">
          <Image
            src="/images/blocks.png"
            alt="Daycare blocks spelling DAY CARE"
            fill
            sizes="full"
            className="object-contain"
            priority
          />
        </div>
  
      </div>
    </div>
  );
}
