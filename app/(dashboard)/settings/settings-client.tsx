// components/settings/settings-client.tsx
"use client";

import { useState, useTransition } from "react";
import {
  updateProfileAction,
  updatePasswordAction,
  deleteAccountAction,
} from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  AlertCircle,
  CheckCircle2,
  User,
  Lock,
  Bell,
  Trash2,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Types ──────────────────────────────────────────────── */
interface Props {
  user: { id: string; name: string; email: string };
}

type Tab = "profile" | "password" | "notifications" | "danger";

/* ─── Feedback banner ────────────────────────────────────── */
function Feedback({ result }: { result: { error?: string; success?: string } | null }) {
  if (!result) return null;
  const isError = !!result.error;
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-sm rounded-lg px-4 py-3 border",
        isError
          ? "bg-red-50 border-red-200 text-red-700"
          : "bg-green-50 border-green-200 text-green-700",
      )}
    >
      {isError ? (
        <AlertCircle className="h-4 w-4 shrink-0" />
      ) : (
        <CheckCircle2 className="h-4 w-4 shrink-0" />
      )}
      {result.error ?? result.success}
    </div>
  );
}

/* ─── Tab button ─────────────────────────────────────────── */
function TabBtn({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors w-full text-left",
        active
          ? "bg-blue-50 text-blue-600 font-medium"
          : "text-gray-600 hover:bg-gray-50",
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

/* ─── Main ───────────────────────────────────────────────── */
export function SettingsClient({ user }: Props) {
  const [tab, setTab] = useState<Tab>("profile");

  const [name,  setName]  = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [currentPw,  setCurrentPw]  = useState("");
  const [newPw,      setNewPw]      = useState("");
  const [confirmPw,  setConfirmPw]  = useState("");

  const [deleteConfirm, setDeleteConfirm] = useState("");

  const [notifEmail,   setNotifEmail]   = useState(true);
  const [notifReports, setNotifReports] = useState(true);
  const [notifUpdates, setNotifUpdates] = useState(false);

  const [profileResult,  setProfileResult]  = useState<{ error?: string; success?: string } | null>(null);
  const [passwordResult, setPasswordResult] = useState<{ error?: string; success?: string } | null>(null);
  const [deleteResult,   setDeleteResult]   = useState<{ error?: string; success?: string } | null>(null);

  const [isPendingProfile,  startProfile]  = useTransition();
  const [isPendingPassword, startPassword] = useTransition();
  const [isPendingDelete,   startDelete]   = useTransition();

  const initials = user.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : user.email[0].toUpperCase();

  /* ── Handlers ── */
  function handleProfile(e: React.FormEvent) {
    e.preventDefault();
    setProfileResult(null);
    const fd = new FormData();
    fd.set("name", name);
    fd.set("email", email);
    startProfile(async () => {
      const r = await updateProfileAction(fd);
      setProfileResult(r ?? null);
    });
  }

  function handlePassword(e: React.FormEvent) {
    e.preventDefault();
    setPasswordResult(null);
    const fd = new FormData();
    fd.set("currentPassword", currentPw);
    fd.set("newPassword",     newPw);
    fd.set("confirmPassword", confirmPw);
    startPassword(async () => {
      const r = await updatePasswordAction(fd);
      setPasswordResult(r ?? null);
      if (!r?.error) { setCurrentPw(""); setNewPw(""); setConfirmPw(""); }
    });
  }

  function handleDelete(e: React.FormEvent) {
    e.preventDefault();
    setDeleteResult(null);
    const fd = new FormData();
    fd.set("confirmation", deleteConfirm);
    startDelete(async () => {
      const r = await deleteAccountAction(fd);
      if (r) setDeleteResult(r);
    });
  }

  /* ─── Render ─────────────────────────────────────────── */
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Settings</h1>
      <p className="text-gray-500 text-sm mb-8">
        Manage your account preferences and profile
      </p>

      <div className="flex gap-6">
        {/* ── Sidebar tabs ── */}
        <aside className="w-48 shrink-0 space-y-1">
          <TabBtn active={tab === "profile"}       onClick={() => setTab("profile")}       icon={User}  label="Profile" />
          <TabBtn active={tab === "password"}      onClick={() => setTab("password")}      icon={Lock}  label="Password" />
          <TabBtn active={tab === "notifications"} onClick={() => setTab("notifications")} icon={Bell}  label="Notifications" />
          <TabBtn active={tab === "danger"}        onClick={() => setTab("danger")}        icon={Trash2} label="Danger Zone" />
        </aside>

        {/* ── Panel ── */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

          {/* ─ Profile ─ */}
          {tab === "profile" && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Profile</h2>
              <p className="text-sm text-gray-500 mb-6">
                Update your personal information
              </p>

              {/* Avatar preview */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-blue-500 text-white text-xl">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{user.name || "No name set"}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <form onSubmit={handleProfile} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    readOnly
                    disabled
                    placeholder="you@email.com"
                    className="mt-1"
                    required
                  />
                </div>

                {profileResult && <Feedback result={profileResult} />}

                <Button
                  type="submit"
                  disabled={isPendingProfile}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  {isPendingProfile && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
                  Save Changes
                </Button>
              </form>
            </div>
          )}

          {/* ─ Password ─ */}
          {tab === "password" && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Password</h2>
              <p className="text-sm text-gray-500 mb-6">
                Change your account password
              </p>

              <form onSubmit={handlePassword} className="space-y-5">
                <div>
                  <Label htmlFor="currentPassword" className="text-sm font-medium">
                    Current Password
                  </Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={currentPw}
                    onChange={(e) => setCurrentPw(e.target.value)}
                    placeholder="••••••••"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="newPassword" className="text-sm font-medium">
                    New Password
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={newPw}
                    onChange={(e) => setNewPw(e.target.value)}
                    placeholder="Min. 8 characters"
                    className="mt-1"
                    required
                    minLength={8}
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPw}
                    onChange={(e) => setConfirmPw(e.target.value)}
                    placeholder="Repeat new password"
                    className="mt-1"
                    required
                  />
                </div>

                <div className="text-xs text-gray-400 bg-gray-50 rounded-lg px-4 py-3">
                  Password must be at least 8 characters long.
                </div>

                {passwordResult && <Feedback result={passwordResult} />}

                <Button
                  type="submit"
                  disabled={isPendingPassword}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  {isPendingPassword && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
                  Update Password
                </Button>
              </form>
            </div>
          )}

          {/* ─ Notifications ─ */}
          {tab === "notifications" && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Notifications</h2>
              <p className="text-sm text-gray-500 mb-6">
                Choose when and how you hear from us
              </p>

              <div className="space-y-0 divide-y divide-gray-100">
                {[
                  {
                    id:      "notifEmail",
                    label:   "Email Notifications",
                    desc:    "Receive general account notifications by email",
                    value:   notifEmail,
                    setter:  setNotifEmail,
                  },
                  {
                    id:      "notifReports",
                    label:   "Simulation Reports",
                    desc:    "Email me when an AI report finishes generating",
                    value:   notifReports,
                    setter:  setNotifReports,
                  },
                  {
                    id:      "notifUpdates",
                    label:   "Product Updates",
                    desc:    "News about new features and improvements",
                    value:   notifUpdates,
                    setter:  setNotifUpdates,
                  },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                    {/* Toggle */}
                    <button
                      type="button"
                      onClick={() => item.setter(!item.value)}
                      className={cn(
                        "relative w-10 h-5 rounded-full transition-colors",
                        item.value ? "bg-blue-500" : "bg-gray-300",
                      )}
                    >
                      <span
                        className={cn(
                          "absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all",
                          item.value ? "left-5" : "left-0.5",
                        )}
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  className="bg-blue-500 hover:bg-blue-600"
                  onClick={() => {/* preferences are local-state only for MVP */}}
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          )}

          {/* ─ Danger Zone ─ */}
          {tab === "danger" && (
            <div>
              <h2 className="text-lg font-bold text-red-600 mb-1">Danger Zone</h2>
              <p className="text-sm text-gray-500 mb-6">
                Permanently delete your account and all data. This cannot be undone.
              </p>

              <div className="border-2 border-red-200 rounded-xl p-6 bg-red-50">
                <div className="flex items-start gap-3 mb-5">
                  <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-700 text-sm">
                      Delete account permanently
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      All your simulations, insights, and data will be permanently
                      erased. There is no way to recover this information.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleDelete} className="space-y-4">
                  <div>
                    <Label
                      htmlFor="deleteConfirm"
                      className="text-sm font-medium text-gray-700"
                    >
                      Type <span className="font-mono font-bold">DELETE</span> to
                      confirm
                    </Label>
                    <Input
                      id="deleteConfirm"
                      value={deleteConfirm}
                      onChange={(e) => setDeleteConfirm(e.target.value)}
                      placeholder="DELETE"
                      className="mt-1 font-mono"
                    />
                  </div>

                  {deleteResult && <Feedback result={deleteResult} />}

                  <Button
                    type="submit"
                    variant="destructive"
                    disabled={deleteConfirm !== "DELETE" || isPendingDelete}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    {isPendingDelete && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
                    Delete My Account
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}