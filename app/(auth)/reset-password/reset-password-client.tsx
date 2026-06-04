// app/(auth)/reset-password/reset-password-client.tsx
"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { resetPasswordAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, AlertCircle, CheckCircle2 } from "lucide-react";

export function ResetPasswordClient() {
  const searchParams    = useSearchParams();
  const router          = useRouter();
  const token           = searchParams.get("token");

  const [newPassword,     setNewPassword]     = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error,           setError]           = useState<string | null>(null);
  const [success,         setSuccess]         = useState(false);
  const [isPending,       startTransition]    = useTransition();

  // No token in URL → show an error immediately
  if (!token) {
    return (
      <ResetLayout>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <AlertCircle className="h-12 w-12 text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Invalid Link</h1>
          <p className="text-sm text-gray-500">
            This password reset link is invalid or has expired.
          </p>
          <Link
            href="/forgot-password"
            className="block text-sm text-blue-500 hover:underline"
          >
            Request a new reset link
          </Link>
        </div>
      </ResetLayout>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const fd = new FormData();
    fd.set("token",           token!);
    fd.set("newPassword",     newPassword);
    fd.set("confirmPassword", confirmPassword);

    startTransition(async () => {
      const result = await resetPasswordAction(fd);
      if (result?.error) {
        setError(result.error);
      } else {
        setSuccess(true);
        // Redirect to login after 2.5 s
        setTimeout(() => router.push("/login"), 2500);
      }
    });
  }

  return (
    <ResetLayout>
      {success ? (
        <div className="text-center space-y-4">
          <div className="flex justify-center text-green-500">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Password Updated!
          </h1>
          <p className="text-sm text-gray-600">
            Your password has been changed successfully. Redirecting you to
            login…
          </p>
          <Link href="/login" className="block text-sm text-blue-500 hover:underline">
            Go to Login
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            Set New Password
          </h1>
          <p className="text-sm text-gray-500 text-center mb-7">
            Choose a strong password for your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="newPassword" className="text-sm text-gray-600 font-normal">
                New Password
              </Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="pl-9 h-11"
                  required
                  minLength={8}
                  autoFocus
                />
              </div>
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-sm text-gray-600 font-normal">
                Confirm Password
              </Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat new password"
                  className="pl-9 h-11"
                  required
                />
              </div>
            </div>

            {/* Password strength hint */}
            {newPassword.length > 0 && newPassword.length < 8 && (
              <p className="text-xs text-amber-600">
                Password must be at least 8 characters.
              </p>
            )}

            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 p-3 rounded-lg">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-11 bg-blue-400 hover:bg-blue-500 text-white rounded-full font-medium text-sm mt-2"
            >
              {isPending ? "Updating…" : "Update Password"}
            </Button>
          </form>

          <p className="mt-5 text-sm text-center text-gray-500">
            <Link href="/login" className="text-blue-500 hover:underline">
              Back to Login
            </Link>
          </p>
        </>
      )}
    </ResetLayout>
  );
}

/* ── Shared split layout matching login page ── */
function ResetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left panel */}
      <div className="w-full md:w-[30%] flex flex-col justify-center px-8 md:px-12 bg-white">
        <div className="max-w-70 w-full mx-auto">{children}</div>
      </div>

      {/* Right panel — same branding as login */}
      <div className="hidden md:flex md:w-[70%] flex-col items-center justify-center bg-white gap-2 py-8">
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