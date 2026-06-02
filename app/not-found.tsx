"use client";

import { useRouter } from "next/navigation";
import { Home, ArrowLeft, TrendingUp, AlertCircle } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-indigo-950 flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Brand */}
      <div className="flex items-center gap-2 mb-12">
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-900/50">
          <TrendingUp size={20} className="text-white" />
        </div>
        <span className="text-xl font-black text-white tracking-tight">NexTradeX</span>
      </div>

      {/* 404 block */}
      <div className="relative text-center">
        {/* Giant 404 */}
        <p className="text-[120px] sm:text-[160px] font-black leading-none bg-linear-to-b from-cyan-400 to-blue-600 bg-clip-text text-transparent select-none">
          404
        </p>

        {/* Divider line */}
        <div className="w-16 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto -mt-4 mb-6 rounded-full" />

        <div className="flex items-center justify-center gap-2 mb-3">
          <AlertCircle size={20} className="text-cyan-400" />
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Page Not Found
          </h1>
        </div>
        
        <p className="text-slate-400 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-900/60 border border-blue-700/50 hover:border-cyan-500/60 hover:bg-blue-800/60 text-white text-sm font-bold transition-all active:scale-95"
        >
          <ArrowLeft size={16} />
          Go Back
        </button>

        <button
          onClick={() => router.push("/home")}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-cyan-600 to-blue-600 hover:brightness-110 text-white text-sm font-bold shadow-lg shadow-cyan-900/40 transition-all active:scale-95"
        >
          <Home size={16} />
          Back to Home
        </button>
      </div>

      {/* Bottom hint */}
      <div className="mt-16 flex items-center gap-2 text-slate-600 text-xs">
        <TrendingUp size={13} />
        <span>NexTradeX — Advanced Cryptocurrency Platform</span>
      </div>
    </div>
  );
}