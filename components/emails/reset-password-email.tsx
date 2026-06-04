// components/emails/reset-password-email.tsx

interface ResetPasswordEmailProps {
  resetLink: string;
  email:     string;
}

export function ResetPasswordEmail({ resetLink, email }: ResetPasswordEmailProps) {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#3b82f6",
          borderRadius: "12px 12px 0 0",
          padding: "40px 40px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "rgba(255,255,255,0.25)",
              borderRadius: "8px",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            🍼
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "15px", margin: 0 }}>
              AI Insight
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "10px",
                letterSpacing: "3px",
                margin: 0,
                marginTop: "2px",
              }}
            >
              SIMULATOR
            </p>
          </div>
        </div>

        {/* Lock icon */}
        <div
          style={{
            width: "56px",
            height: "56px",
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
            fontSize: "26px",
          }}
        >
          🔐
        </div>

        <h1
          style={{
            color: "#ffffff",
            fontSize: "26px",
            fontWeight: 700,
            margin: 0,
          }}
        >
          Reset Your Password
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "14px",
            marginTop: "8px",
            marginBottom: 0,
          }}
        >
          We received a request to reset your password.
        </p>
      </div>

      {/* Body */}
      <div
        style={{
          backgroundColor: "#f8fafc",
          padding: "40px",
          borderRadius: "0 0 12px 12px",
          border: "1px solid #e2e8f0",
          borderTop: "none",
        }}
      >
        <p style={{ color: "#374151", fontSize: "15px", marginTop: 0 }}>
          Hi there,
        </p>
        <p style={{ color: "#6b7280", fontSize: "15px", lineHeight: 1.6 }}>
          Someone requested a password reset for the AI Insight Simulator account
          associated with <strong>{email}</strong>. Click the button below to
          choose a new password.
        </p>

        {/* CTA */}
        <div style={{ textAlign: "center", margin: "32px 0" }}>
          <a
            href={resetLink}
            style={{
              display: "inline-block",
              backgroundColor: "#3b82f6",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
              padding: "13px 32px",
              borderRadius: "8px",
            }}
          >
            Reset Password →
          </a>
        </div>

        {/* Expiry warning */}
        <div
          style={{
            backgroundColor: "#fef3c7",
            border: "1px solid #fde68a",
            borderRadius: "8px",
            padding: "14px 18px",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              color: "#92400e",
              fontSize: "13px",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            ⏰ <strong>This link expires in 1 hour.</strong> If you don&apos;t
            reset your password within that time, you&apos;ll need to request a
            new link.
          </p>
        </div>

        {/* Fallback link */}
        <p style={{ color: "#9ca3af", fontSize: "12px" }}>
          If the button doesn&apos;t work, copy and paste this link into your
          browser:
        </p>
        <p
          style={{
            color: "#3b82f6",
            fontSize: "12px",
            wordBreak: "break-all",
            margin: "4px 0 24px",
          }}
        >
          {resetLink}
        </p>

        <p
          style={{
            color: "#9ca3af",
            fontSize: "13px",
            textAlign: "center",
            marginBottom: 0,
          }}
        >
          If you didn&apos;t request a password reset, you can safely ignore
          this email. Your password will remain unchanged.
        </p>
      </div>
    </div>
  );
}