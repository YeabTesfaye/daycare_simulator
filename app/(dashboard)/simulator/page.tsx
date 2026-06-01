import { createSimulationAction } from "@/actions/simulation";

export default function SimulatorPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 text-center">
        <h1 className="text-2xl font-bold text-blue-500 mb-2">
          Center Operations Simulator
        </h1>
        <p className="text-gray-500 mb-10">
          Simulate cash flow, budgeting, staffing, and financial events
        </p>

        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {[
            { icon: "💰", title: "Financial Analysis", desc: "Calculate net income, break-even points, and expense ratios" },
            { icon: "👥", title: "Staffing Optimization", desc: "Determine optimal staff levels based on enrollment" },
            { icon: "📈", title: "Growth Planning", desc: "Simulate expansion scenarios and financial impacts" },
            { icon: "🛡️", title: "Risk Assessment", desc: "Evaluate financial resilience against unexpected events" },
          ].map(f => (
            <div
              key={f.title}
              className="p-6 border border-gray-200 rounded-xl text-left hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-3">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {f.title}
              </h3>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-8 max-w-xl mx-auto">
          This AI-powered tool helps daycare center owners understand their
          financial health, optimize staffing, and plan for growth with
          personalized insights and recommendations.
        </p>

        <form action={createSimulationAction}>
          <button
            type="submit"
            className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}