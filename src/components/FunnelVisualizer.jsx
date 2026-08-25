import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Filter, ChevronRight, BarChart3, ShoppingBag, RefreshCw } from 'lucide-react';
import { growthFunnelData } from '../data/portfolioData';

export default function FunnelVisualizer() {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const activeStage = growthFunnelData[selectedStageIndex];

  return (
    <section id="funnel" className="py-24 relative bg-black border-t border-b border-white/10 text-cream overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cream/60 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-cream"></span>
            <span>Section 06 &bull; Growth Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-hn font-bold text-cream tracking-tight uppercase leading-tight mb-4">
            Interactive Growth & Funnel Simulator.
          </h2>
          <p className="text-base sm:text-lg text-cream/70 leading-relaxed font-normal">
            A full-funnel marketing architecture designed to optimize Customer Acquisition Cost (CAC), eliminate checkout drop-off, and maximize Customer Lifetime Value (LTV).
          </p>
        </motion.div>

        {/* 4-Stage Interactive Pipeline Header with Sliding Hover & Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {growthFunnelData.map((stage, idx) => {
            const isActive = selectedStageIndex === idx;
            return (
              <motion.button
                key={stage.stage}
                onClick={() => setSelectedStageIndex(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className={`p-4 rounded-xl border text-left transition-all duration-200 relative ${
                  isActive
                    ? 'bg-[#141414] border-white/40 shadow-md'
                    : 'bg-[#0E1015] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono font-bold uppercase text-cream/70">
                    {stage.stage}
                  </span>
                  <span className="text-[10px] font-mono text-cream/40 font-medium">0{idx + 1}</span>
                </div>
                <div className="text-xs sm:text-sm font-hn font-bold text-cream uppercase truncate">
                  {stage.name.split('•')[1] || stage.name}
                </div>
                {isActive && (
                  <motion.div 
                    layoutId="activeFunnelIndicator"
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-cream"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive (Sliding AnimatePresence transition) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.stage}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 sm:p-10 rounded-2xl bg-[#141414] border border-white/15 shadow-xl relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <div className="text-xs font-mono uppercase text-cream/50 tracking-wider mb-1">
                  Stage {selectedStageIndex + 1} of 4 &bull; {activeStage.stage}
                </div>
                <h3 className="text-2xl sm:text-3xl font-hn font-bold text-cream uppercase tracking-tight">
                  {activeStage.name}
                </h3>
              </div>
              <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-cream" />
                <div>
                  <div className="text-[10px] font-mono text-cream/50 uppercase">Benchmark KPI</div>
                  <div className="text-sm font-bold text-cream">{activeStage.benchmark}</div>
                </div>
              </div>
            </div>

            {/* Middle row: Strategy & Playbook */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase text-cream/70 tracking-wider">
                  Tactical Playbook
                </h4>
                <p className="text-xs sm:text-sm text-cream/80 leading-relaxed">
                  {activeStage.playbook}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase text-cream/70 tracking-wider">
                  Key Marketing Channels
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeStage.channels.map((ch, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-cream/80">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: Metrics Grid */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-cream/50 tracking-wider mb-3">
                Live Optimization Telemetry
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeStage.metrics.map((met, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="p-4 rounded-xl bg-black/60 border border-white/10"
                  >
                    <div className="text-lg font-hn font-bold text-cream">{met.value}</div>
                    <div className="text-[10px] font-mono text-cream/50 uppercase mt-0.5">{met.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
