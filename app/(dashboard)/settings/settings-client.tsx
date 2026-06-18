// components/settings/settings-client.tsx
"use client";

import { useState, useTransition } from "react";
import { format } from "date-fns";
import {
  updateProfileAction,
  updatePasswordAction,
  updatePreferencesAction,
  deleteAccountAction,
  type PreferencesPayload,
} from "@/actions/settings";
import { Button }   from "@/components/ui/button";
import { Input }    from "@/components/ui/input";
import { Label }    from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  User, Lock, Bell, Loader2,
  AlertCircle, CheckCircle2, FlaskConical,
  TrendingUp, Settings2, ShieldAlert,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════ */
/*  Types                                                  */
/* ═══════════════════════════════════════════════════════ */

interface Props {
  user: { id: string; name: string; email: string; createdAt: string };
  stats: { totalSims: number; completedSims: number };
  preferences: PreferencesPayload;
}

type Tab = "profile" | "password" | "preferences" | "danger";

interface TabDef {
  id:    Tab;
  label: string;
  icon:  React.ElementType;
  desc:  string;
}

/* ═══════════════════════════════════════════════════════ */
/*  Small helpers                                          */
/* ═══════════════════════════════════════════════════════ */

function Alert({
  result,
}: {
  result: { error?: string; success?: string } | null;
}) {
  if (!result) return null;
  const ok = !result.error;
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-sm rounded-xl px-4 py-3 border",
        ok
          ? "bg-green-50 border-green-200 text-green-700"
          : "bg-red-50 border-red-200 text-red-700",
      )}
    >
      {ok ? (
        <CheckCircle2 className="h-4 w-4 shrink-0" />
      ) : (
        <AlertCircle className="h-4 w-4 shrink-0" />
      )}
      {result.error ?? result.success}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  label,
  desc,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  desc: string;
}) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={cn(
          "relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 ml-6",
          checked ? "bg-blue-500" : "bg-gray-200",
        )}
        aria-checked={checked}
        role="switch"
      >
        <span
          className={cn(
            "absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200",
            checked ? "left-[22px]" : "left-0.5",
          )}
        />
      </button>
    </div>
  );
}

function SelectField({
  label, value, onChange, options, hint,
}: {
  label: string;
  value: string | number;
  onChange: (v: string) => void;
  options: { value: string | number; label: string }[];
  hint?: string;
}) {
  return (
    <div>
      <Label className="text-sm font-medium text-gray-700">{label}</Label>
      {hint && <p className="text-xs text-gray-400 mt-0.5 mb-1.5">{hint}</p>}
      <div className="relative mt-1">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm
                     text-gray-700 bg-white appearance-none cursor-pointer pr-8
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <ChevronRight className="pointer-events-none absolute right-3 top-1/2
                                  -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  Main                                                   */
/* ═══════════════════════════════════════════════════════ */

export function SettingsClient({ user, stats, preferences }: Props) {
  const [tab, setTab] = useState<Tab>("profile");

  /* ── Profile state ── */
  const [name,     setName]  = useState(user.name);
  const [profRes,  setProfRes]  = useState<{ error?: string; success?: string } | null>(null);
  const [ipProf,   startProf]  = useTransition();

  /* ── Password state ── */
  const [curPw,   setCurPw]   = useState("");
  const [newPw,   setNewPw]   = useState("");
  const [confPw,  setConfPw]  = useState("");
  const [pwRes,   setPwRes]   = useState<{ error?: string; success?: string } | null>(null);
  const [ipPw,    startPw]    = useTransition();

  /* ── Preferences state ── */
  const [prefs,    setPrefs]   = useState<PreferencesPayload>({ ...preferences });
  const [prefRes,  setPrefRes] = useState<{ error?: string; success?: string } | null>(null);
  const [ipPref,   startPref]  = useTransition();

  /* ── Danger state ── */
  const [delConfirm, setDelConfirm] = useState("");
  const [delRes,     setDelRes]     = useState<{ error?: string; success?: string } | null>(null);
  const [ipDel,      startDel]      = useTransition();

  const initials = user.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : user.email[0].toUpperCase();

  const memberSince = format(new Date(user.createdAt), "MMMM d, yyyy");

  const TABS: TabDef[] = [
    { id: "profile",     label: "Profile",          icon: User,       desc: "Name & account info" },
    { id: "password",    label: "Password",          icon: Lock,       desc: "Change your password" },
    { id: "preferences", label: "Preferences",       icon: Settings2,  desc: "Simulation & display" },
    { id: "danger",      label: "Danger Zone",       icon: ShieldAlert, desc: "Delete account" },
  ];

  /* ── Handlers ── */
  function handleProfile(e: React.FormEvent) {
    e.preventDefault();
    setProfRes(null);
    const fd = new FormData();
    fd.set("name", name);
    fd.set("email", user.email);
    startProf(async () => {
      const r = await updateProfileAction(fd);
      setProfRes(r ?? null);
    });
  }

  function handlePassword(e: React.FormEvent) {
    e.preventDefault();
    setPwRes(null);
    const fd = new FormData();
    fd.set("currentPassword", curPw);
    fd.set("newPassword",     newPw);
    fd.set("confirmPassword", confPw);
    startPw(async () => {
      const r = await updatePasswordAction(fd);
      setPwRes(r ?? null);
      if (!r?.error) { setCurPw(""); setNewPw(""); setConfPw(""); }
    });
  }

  function handlePreferences(e: React.FormEvent) {
    e.preventDefault();
    setPrefRes(null);
    startPref(async () => {
      const r = await updatePreferencesAction(prefs);
      setPrefRes(r ?? null);
    });
  }

  function handleDelete(e: React.FormEvent) {
    e.preventDefault();
    setDelRes(null);
    const fd = new FormData();
    fd.set("confirmation", delConfirm);
    startDel(async () => {
      const r = await deleteAccountAction(fd);
      if (r) setDelRes(r);
    });
  }

  /* ── Render ── */
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-8 space-y-6">

        {/* ── Profile hero banner ── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="h-24 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600" />
          <div className="px-8 pb-6">
            <div className="flex items-end justify-between -mt-10 mb-4">
              <div className="relative">
                <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                  <AvatarFallback className="bg-blue-500 text-white text-2xl font-bold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              {/* Account stats */}
              <div className="flex gap-6 mb-1">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{stats.totalSims}</p>
                  <p className="text-xs text-gray-500">Simulations</p>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{stats.completedSims}</p>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.totalSims > 0
                      ? Math.round((stats.completedSims / stats.totalSims) * 100)
                      : 0}%
                  </p>
                  <p className="text-xs text-gray-500">Completion</p>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              {user.name || "No name set"}
            </h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-xs text-gray-400 mt-1">Member since {memberSince}</p>
          </div>
        </div>

        {/* ── Settings panels ── */}
        <div className="flex gap-6">

          {/* Sidebar */}
          <aside className="w-52 shrink-0 space-y-1">
            {TABS.map(({ id, label, icon: Icon, desc }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-xl transition-all group",
                  tab === id
                    ? id === "danger"
                      ? "bg-red-50 border border-red-200"
                      : "bg-blue-50 border border-blue-200"
                    : "hover:bg-white border border-transparent hover:border-gray-200",
                )}
              >
                <div className="flex items-center gap-2.5 mb-0.5">
                  <Icon className={cn(
                    "h-4 w-4 shrink-0",
                    tab === id
                      ? id === "danger" ? "text-red-500" : "text-blue-500"
                      : "text-gray-400 group-hover:text-gray-600",
                  )} />
                  <span className={cn(
                    "text-sm font-medium",
                    tab === id
                      ? id === "danger" ? "text-red-700" : "text-blue-700"
                      : "text-gray-600",
                  )}>
                    {label}
                  </span>
                </div>
                <p className="text-xs text-gray-400 pl-6.5 ml-[26px]">{desc}</p>
              </button>
            ))}
          </aside>

          {/* Panel */}
          <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm
                          overflow-hidden">

            {/* ─── Profile ─────────────────────────────────────── */}
            {tab === "profile" && (
              <div>
                <div className="px-8 py-6 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900">Profile</h2>
                    <p className="text-xs text-gray-500">Update your display name</p>
                  </div>
                </div>
                <div className="p-8">
                  <form onSubmit={handleProfile} className="space-y-5 max-w-md">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        value={user.email}
                        readOnly
                        disabled
                        className="mt-1.5 bg-gray-50 text-gray-500 cursor-not-allowed"
                      />
                      <p className="text-xs text-gray-400 mt-1">
                        Email cannot be changed. Contact support if needed.
                      </p>
                    </div>

                    <Alert result={profRes} />

                    <Button
                      type="submit"
                      disabled={ipProf}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      {ipProf && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
                      Save Changes
                    </Button>
                  </form>

                  {/* Account summary card */}
                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">
                      Account Summary
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: FlaskConical, label: "Total simulations", value: stats.totalSims, color: "text-blue-500", bg: "bg-blue-50" },
                        { icon: TrendingUp,  label: "Completed & analysed", value: stats.completedSims, color: "text-green-500", bg: "bg-green-50" },
                      ].map((item) => (
                        <div key={item.label}
                          className="flex items-center gap-3 border border-gray-100
                                     rounded-xl p-3 bg-gray-50">
                          <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", item.bg)}>
                            <item.icon className={cn("h-4 w-4", item.color)} />
                          </div>
                          <div>
                            <p className="text-lg font-bold text-gray-900">{item.value}</p>
                            <p className="text-xs text-gray-500">{item.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── Password ─────────────────────────────────────── */}
            {tab === "password" && (
              <div>
                <div className="px-8 py-6 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Lock className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900">Password</h2>
                    <p className="text-xs text-gray-500">Keep your account secure</p>
                  </div>
                </div>
                <div className="p-8">
                  <form onSubmit={handlePassword} className="space-y-5 max-w-md">
                    {[
                      { id: "curPw",  label: "Current Password",  val: curPw,  set: setCurPw,  ph: "Your current password" },
                      { id: "newPw",  label: "New Password",       val: newPw,  set: setNewPw,  ph: "Min. 8 characters" },
                      { id: "confPw", label: "Confirm New Password", val: confPw, set: setConfPw, ph: "Repeat new password" },
                    ].map((f) => (
                      <div key={f.id}>
                        <Label htmlFor={f.id} className="text-sm font-medium text-gray-700">
                          {f.label}
                        </Label>
                        <Input
                          id={f.id}
                          type="password"
                          value={f.val}
                          onChange={(e) => f.set(e.target.value)}
                          placeholder={f.ph}
                          className="mt-1.5"
                          required
                        />
                      </div>
                    ))}

                    {/* Password strength indicator */}
                    {newPw.length > 0 && (
                      <div className="space-y-1.5">
                        <div className="flex gap-1">
                          {[
                            newPw.length >= 8,
                            /[A-Z]/.test(newPw),
                            /[0-9]/.test(newPw),
                            /[^A-Za-z0-9]/.test(newPw),
                          ].map((met, i) => (
                            <div key={i} className={cn(
                              "flex-1 h-1 rounded-full transition-colors",
                              met ? "bg-blue-500" : "bg-gray-200",
                            )} />
                          ))}
                        </div>
                        <p className="text-xs text-gray-400">
                          Strength: {
                            [
                              newPw.length >= 8,
                              /[A-Z]/.test(newPw),
                              /[0-9]/.test(newPw),
                              /[^A-Za-z0-9]/.test(newPw),
                            ].filter(Boolean).length
                          } / 4 — use uppercase, numbers, and symbols for a stronger password
                        </p>
                      </div>
                    )}

                    <Alert result={pwRes} />

                    <Button
                      type="submit"
                      disabled={ipPw}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      {ipPw && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
                      Update Password
                    </Button>
                  </form>

                  <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl max-w-md">
                    <p className="text-xs text-blue-700 leading-relaxed">
                      <span className="font-semibold">Tip:</span> You can also use the
                      &ldquo;Forgot password&rdquo; link on the login page to reset via
                      email if you forget your current password.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ─── Preferences ──────────────────────────────────── */}
            {tab === "preferences" && (
              <div>
                <div className="px-8 py-6 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Settings2 className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900">Preferences</h2>
                    <p className="text-xs text-gray-500">
                      Simulation defaults and notification settings
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <form onSubmit={handlePreferences} className="space-y-8">

                    {/* Simulation defaults */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                        <FlaskConical className="h-4 w-4 text-blue-400" />
                        Simulation Defaults
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <Label className="text-sm font-medium text-gray-700">
                            Default Growth Rate (%)
                          </Label>
                          <p className="text-xs text-gray-400 mt-0.5 mb-1.5">
                            Pre-filled in Budget Simulation
                          </p>
                          <Input
                            type="number"
                            min={0} max={50} step={0.5}
                            value={prefs.defaultGrowthRate}
                            onChange={(e) =>
                              setPrefs((p) => ({
                                ...p,
                                defaultGrowthRate: parseFloat(e.target.value) || 0,
                              }))
                            }
                            className="mt-1"
                          />
                        </div>

                        <SelectField
                          label="Default Growth Period"
                          value={prefs.defaultGrowthPeriod}
                          onChange={(v) => setPrefs((p) => ({ ...p, defaultGrowthPeriod: v }))}
                          options={[
                            { value: "Annually",  label: "Annually (recommended)" },
                            { value: "Quarterly", label: "Quarterly" },
                            { value: "Monthly",   label: "Monthly" },
                          ]}
                        />

                        <SelectField
                          label="Currency"
                          value={prefs.currency}
                          onChange={(v) => setPrefs((p) => ({ ...p, currency: v }))}
                          hint="Used in all financial displays"
                          options={[
                            { value: "USD", label: "USD — US Dollar" },
                            { value: "EUR", label: "EUR — Euro" },
                            { value: "GBP", label: "GBP — British Pound" },
                            { value: "CAD", label: "CAD — Canadian Dollar" },
                            { value: "AUD", label: "AUD — Australian Dollar" },
                            { value: "ETB", label: "ETB — Ethiopian Birr" },
                          ]}
                        />

                        <SelectField
                          label="Fiscal Year Start"
                          value={prefs.fiscalYearStart}
                          onChange={(v) =>
                            setPrefs((p) => ({ ...p, fiscalYearStart: parseInt(v) }))
                          }
                          hint="Month your financial year begins"
                          options={[
                            { value: 1,  label: "January" },
                            { value: 4,  label: "April" },
                            { value: 7,  label: "July" },
                            { value: 10, label: "October" },
                          ]}
                        />
                      </div>
                    </div>

                    {/* Notifications */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Bell className="h-4 w-4 text-blue-400" />
                        Email Notifications
                      </h3>
                      <p className="text-xs text-gray-400 mb-4">
                        Sent to <span className="font-medium text-gray-600">{/* user email */}</span>
                      </p>
                      <div className="border border-gray-100 rounded-xl px-5 divide-y divide-gray-100">
                        <Toggle
                          checked={prefs.notifReportReady}
                          onChange={(v) => setPrefs((p) => ({ ...p, notifReportReady: v }))}
                          label="AI Report Ready"
                          desc="Email me when a simulation insight finishes generating"
                        />
                        <Toggle
                          checked={prefs.notifWeeklyDigest}
                          onChange={(v) => setPrefs((p) => ({ ...p, notifWeeklyDigest: v }))}
                          label="Weekly Digest"
                          desc="Summary of your simulations and key metrics every Monday"
                        />
                        <Toggle
                          checked={prefs.notifProductUpdates}
                          onChange={(v) => setPrefs((p) => ({ ...p, notifProductUpdates: v }))}
                          label="Product Updates"
                          desc="New features, improvements, and announcements"
                        />
                        <Toggle
                          checked={prefs.notifWelcome}
                          onChange={(v) => setPrefs((p) => ({ ...p, notifWelcome: v }))}
                          label="Onboarding Emails"
                          desc="Tips to get started with the simulator"
                        />
                      </div>
                    </div>

                    <Alert result={prefRes} />

                    <Button
                      type="submit"
                      disabled={ipPref}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      {ipPref && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
                      Save Preferences
                    </Button>
                  </form>
                </div>
              </div>
            )}

            {/* ─── Danger Zone ──────────────────────────────────── */}
            {tab === "danger" && (
              <div>
                <div className="px-8 py-6 border-b border-red-100 bg-red-50 flex items-center gap-3">
                  <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center">
                    <ShieldAlert className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h2 className="font-bold text-red-700">Danger Zone</h2>
                    <p className="text-xs text-red-500">
                      Irreversible actions — proceed with caution
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="border-2 border-red-200 rounded-2xl overflow-hidden">
                    <div className="bg-red-50 px-6 py-4 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-700 text-sm">
                          Delete account permanently
                        </p>
                        <p className="text-xs text-red-600 mt-1 leading-relaxed">
                          This will permanently delete your account and erase all
                          simulations, insights, budget scenarios, and data.
                          This action cannot be undone.
                        </p>
                      </div>
                    </div>

                    {/* What gets deleted */}
                    <div className="px-6 py-4 bg-white border-t border-red-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        What will be deleted
                      </p>
                      <ul className="space-y-1.5 text-sm text-gray-600">
                        {[
                          `${stats.totalSims} simulation${stats.totalSims !== 1 ? "s" : ""} and all their data`,
                          "All AI-generated insights and recommendations",
                          "All saved budget scenarios",
                          "Your profile and account credentials",
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="px-6 py-5 bg-white border-t border-red-100">
                      <form onSubmit={handleDelete} className="space-y-4 max-w-sm">
                        <div>
                          <Label htmlFor="del" className="text-sm font-medium text-gray-700">
                            Type <span className="font-mono font-bold text-red-600">DELETE</span> to confirm
                          </Label>
                          <Input
                            id="del"
                            value={delConfirm}
                            onChange={(e) => setDelConfirm(e.target.value)}
                            placeholder="DELETE"
                            className="mt-1.5 font-mono border-red-200 focus:ring-red-400"
                          />
                        </div>

                        <Alert result={delRes} />

                        <Button
                          type="submit"
                          variant="destructive"
                          disabled={delConfirm !== "DELETE" || ipDel}
                          className="bg-red-600 hover:bg-red-700 text-white w-full"
                        >
                          {ipDel && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
                          Permanently Delete My Account
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}