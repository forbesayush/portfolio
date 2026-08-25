import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, GitMerge, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Compass, BarChart, CheckCircle2, Sparkles } from 'lucide-react';
import { consultingFramework } from '../data/portfolioData';

const capabilities = [
  'Market Entry Strategy',
  'Competitive Benchmarking',
  'International Expansion',
  'Business Analytics',
  'Growth & Retention Strategy',
  'Digital Transformation',
  'Customer Persona Analysis',
  'Strategic Frameworks (SWOT/Porter/BCG)'
];

const consultingDeepDives = {
  '01': {
    title: 'UNDERSTAND — Defining the Core Business Challenge',
    detail: 'Aligning with senior stakeholders on core commercial objectives, organizational boundaries, time horizons, and constraints to ensure absolute alignment before formulating hypotheses.'
  },
  '02': {
    title: 'STRUCTURE — MECE Problem Decomposition',
    detail: 'Deconstructing ambiguous market challenges using MECE issue trees, Porter’s Five Forces, and value-chain breakdowns to isolate root drivers from surface symptoms.'
  },
  '03': {
    title: 'ANALYSE — Quantitative & Competitive Benchmarking',
    detail: 'Executing financial modeling, unit economic evaluations, multi-country cohort retention diagnostics, and international competitor teardowns.'
  },
  '04': {
    title: 'RECOMMEND — Actionable Strategic Synthesis',
    detail: 'Formulating prioritized, data-backed strategic recommendations with explicit risk-mitigation plans, resource allocations, and ROI projections.'
  },
  '05': {
    title: 'EXECUTE — Phased Implementation Roadmaps',
    detail: 'Designing phased go-to-market milestones, cross-functional governance structures, and sprint backlogs that translate strategy into live operational reality.'
  },
  '06': {
    title: 'MEASURE — Governance & Real-Time KPIs',
    detail: 'Establishing automated MIS telemetry dashboards, stakeholder adoption tracking, and post-launch feedback loops to ensure continuous commercial realization.'
  }
};

export default function StrategyFramework() {
  const [selectedStep, setSelectedStep] = useState('01');
  const activeDeepDive = consultingDeepDives[selectedStep] || consultingDeepDives['01'];

  return (
    <section id="strategy" className="py-24 relative bg-white dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-500 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-rose-500"></span>
            <span>Section 08 &bull; Brand & Growth Consulting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            How I Solve Strategic Growth Problems.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            A structured consulting methodology combining classic business frameworks with modern performance marketing data to unlock defensible market differentiation.
          </p>
        </div>

        {/* 6-Stage Consulting Framework */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-4 text-left">
          {consultingFramework.map((stage) => {
            const isSelected = selectedStep === stage.step;
            return (
              <button
                key={stage.step}
                onClick={() => setSelectedStep(stage.step)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-150 group flex flex-col justify-between overflow-hidden relative ${
                  isSelected
                    ? 'bg-white dark:bg-[#0E1015] border-black/20 dark:border-white/20 shadow-xs text-zinc-950 dark:text-white linear-card'
                    : 'bg-white/70 dark:bg-[#0E1015]/60 border-black/[0.06] dark:border-white/[0.06] hover:bg-white dark:hover:bg-[#0E1015]'
                }`}
              >
                <div>
                  <div className="text-[10px] font-mono font-semibold text-linear-brand dark:text-linear-accent mb-2">
                    STEP {stage.step}
                  </div>
                  <h3 className="text-sm font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight mb-1.5">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-black/[0.04] dark:border-white/[0.06] text-[10px] font-mono text-zinc-400 dark:text-zinc-500 font-medium">
                  {isSelected ? '● Active' : 'Explore'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mb-8 p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-xs text-left linear-card"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
              <h4 className="text-sm sm:text-base font-display font-bold text-zinc-950 dark:text-white uppercase">
                {activeDeepDive.title}
              </h4>
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 font-medium bg-black/[0.03] dark:bg-white/[0.04] px-3 py-1 rounded-lg border border-black/[0.06] dark:border-white/[0.08]">
                Management Consulting Practice
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {activeDeepDive.detail}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Strategic Capabilities Matrix */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-xs text-left linear-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
            <div>
              <h3 className="text-base font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight">
                Consulting & Strategic Advisory Toolkit
              </h3>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                Rigorous frameworks applied to live business engagements.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] px-3 py-1 rounded-lg self-start md:self-auto font-medium">
              Management Consulting Ready
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06] text-xs text-zinc-700 dark:text-zinc-300 font-normal"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-linear-brand/80 dark:bg-linear-accent/80 shrink-0"></span>
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
