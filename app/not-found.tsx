// app/not-found.tsx
import Link from "next/link";
import { Baby } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm max-w-md w-full p-10 text-center">

        {/* Blocks illustration */}
        <div className="flex items-end justify-center gap-2 mb-8">
          {[
            { letter: "4", bg: "bg-blue-500",   size: "h-16 w-16", text: "text-2xl" },
            { letter: "0", bg: "bg-red-400",    size: "h-20 w-20", text: "text-3xl" },
            { letter: "4", bg: "bg-yellow-400", size: "h-16 w-16", text: "text-2xl" },
          ].map((block, i) => (
            <div
              key={i}
              className={`${block.bg} ${block.size} rounded-xl flex items-center justify-center
                          shadow-md border-b-4 border-black/10`}
            >
              <span className={`${block.text} font-black text-white`}>
                {block.letter}
              </span>
            </div>
          ))}
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Baby className="h-4 w-4 text-white" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-gray-900 leading-none">AI Insight</p>
            <p className="text-xs text-gray-400 tracking-widest">SIMULATOR</p>
          </div>
        </div>

        <h1 className="text-xl font-bold text-gray-900 mb-2">
          This room is empty!
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Looks like this page wandered off. Let&apos;s get you back to the
          daycare dashboard.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/overview"
            className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm
                       font-medium rounded-lg transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/simulator"
            className="px-6 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700
                       text-sm font-medium rounded-lg transition-colors"
          >
            New Simulation
          </Link>
        </div>
      </div>
    </div>
  );
}