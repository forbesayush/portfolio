import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowRight, Target, Users, Zap, TrendingUp, Sparkles, CheckCircle2, ChevronRight, BarChart3, ShoppingBag, RefreshCw } from 'lucide-react';
import { growthFunnelData } from '../data/portfolioData';

export default function FunnelVisualizer() {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const activeStage = growthFunnelData[selectedStageIndex];

  return (
    <section id="funnel" className="py-24 relative bg-white dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="figma-frame-tag figma-component-tag">
              ❖ FUNNEL_SIMULATOR [Component: Full-Funnel Engine]
            </span>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-500 uppercase font-semibold">
              <span className="w-2 h-[2px] bg-rose-500"></span>
              <span>Section 06 &bull; Growth Engineering</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            Interactive Growth & Funnel Simulator.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            A full-funnel marketing architecture designed to optimize Customer Acquisition Cost (CAC), eliminate checkout drop-off, and maximize Customer Lifetime Value (LTV).
          </p>
        </div>

        {/* 4-Stage Interactive Pipeline Header */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {growthFunnelData.map((stage, idx) => {
            const isActive = selectedStageIndex === idx;
            return (
              <button
                key={stage.stage}
                onClick={() => setSelectedStageIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 relative ${
                  isActive
                    ? 'bg-black/[0.04] dark:bg-white/[0.05] border-rose-500 shadow-sm'
                    : 'bg-black/[0.01] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[11px] font-mono font-bold uppercase ${
                    isActive ? stage.textColor : 'text-zinc-400'
                  }`}>
                    {stage.stage}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 font-medium">0{idx + 1}</span>
                </div>
                <div className="text-xs sm:text-sm font-display font-bold text-zinc-950 dark:text-white uppercase truncate">
                  {stage.name.split('•')[1] || stage.name}
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">
                  {stage.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Stage Blueprint Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.stage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-card-light dark:shadow-card-dark linear-card"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-bold uppercase bg-black/[0.04] dark:bg-white/[0.05] border ${activeStage.borderColor} ${activeStage.textColor}`}>
                    {activeStage.stage} &bull; {activeStage.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight">
                  {activeStage.name}
                </h3>
              </div>
              <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] max-w-md text-xs text-zinc-600 dark:text-zinc-300">
                <strong className="text-zinc-900 dark:text-white font-semibold">Core Strategy: </strong>
                {activeStage.strategy}
              </div>
            </div>

            {/* Channels & Telemetry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Marketing Channels */}
              <div className="md:col-span-6 space-y-3">
                <div className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 font-semibold tracking-wider">
                  Target Marketing Channels & Tactile Formats
                </div>
                <div className="space-y-2">
                  {activeStage.channels.map((channel, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] text-xs text-zinc-800 dark:text-zinc-200"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></div>
                      <span className="font-medium">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion Metrics & Benchmarks */}
              <div className="md:col-span-6 space-y-3">
                <div className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 font-semibold tracking-wider">
                  Verified Marketing KPIs & Benchmarks
                </div>
                <div className="space-y-2.5">
                  {activeStage.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between"
                    >
                      <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 font-medium">
                        {metric.label}
                      </span>
                      <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.05] border ${activeStage.borderColor} ${activeStage.textColor}`}>
                        {metric.benchmark}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/20 text-[11px] font-mono text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Tested across multi-country storefronts and luxury retail scenarios.</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
