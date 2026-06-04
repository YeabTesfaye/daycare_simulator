// app/(auth)/reset-password/page.tsx
// Handles the link from the email: /reset-password?token=xxx

import { Suspense } from "react";
import { ResetPasswordClient } from "./reset-password-client";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordClient />
    </Suspense>
  );
}