

import { createSimulationAction } from "@/actions/simulation";

export default function NewSimulatorPage() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-2xl px-10 py-12 text-center">

        {/* ── Title ── */}
        <h1 className="text-2xl font-bold text-blue-500 mb-2">
          Center Operations Simulator
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Simulate cash flow, budgeting, staffing, and financial events
        </p>

        {/* ── 2×2 feature grid ── */}
        <div className="grid grid-cols-2 gap-5 mb-10">
          {FEATURES.map((f) => (
            <FeatureTile key={f.title} {...f} />
          ))}
        </div>

        {/* ── Body copy ── */}
        <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          This AI-powered tool helps daycare center owners understand their
          financial health, optimize staffing, and plan for growth with
          personalized insights and recommendations.
        </p>

        {/* ── CTA – server action creates the simulation row then redirects ── */}
        <form action={createSimulationAction}>
          <button
            type="submit"
            className="px-12 py-3 bg-blue-500 hover:bg-blue-600 active:bg-blue-700
                       text-white rounded-lg font-medium text-sm transition-colors
                       focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─────────────────── feature tile ─────────────────── */

interface Feature {
  icon: string;
  title: string;
  desc: string;
  /** controls the subtle tint on the icon bubble */
  color: "blue" | "teal" | "rose" | "purple";
}

const ICON_BG: Record<Feature["color"], string> = {
  blue:   "bg-blue-50",
  teal:   "bg-teal-50",
  rose:   "bg-rose-50",
  purple: "bg-purple-50",
};

function FeatureTile({ icon, title, desc, color }: Feature) {
  return (
    <div
      className="border border-gray-200 rounded-xl p-6 text-left
                 hover:border-blue-200 hover:bg-blue-50/20
                 transition-colors duration-150"
    >
      <div
        className={`w-12 h-12 ${ICON_BG[color]} rounded-full
                    flex items-center justify-center text-2xl mb-4`}
      >
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

const FEATURES: Feature[] = [
  {
    icon: "💰",
    color: "blue",
    title: "Financial Analysis",
    desc: "Calculate net income, break-even points, and expense ratios",
  },
  {
    icon: "👥",
    color: "teal",
    title: "Staffing Optimization",
    desc: "Determine optimal staff levels based on enrollment",
  },
  {
    icon: "📈",
    color: "rose",
    title: "Growth Planning",
    desc: "Simulate expansion scenarios and financial impacts",
  },
  {
    icon: "🛡️",
    color: "purple",
    title: "Risk Assessment",
    desc: "Evaluate financial resilience against unexpected events",
  },
];