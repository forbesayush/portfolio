import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Filter, RefreshCw, BarChart3, ArrowRight, Target, TrendingUp } from 'lucide-react';
import { marketingFramework } from '../data/portfolioData';

const stepIcons = [Search, Sparkles, Filter, RefreshCw, BarChart3];

const stageDeepDives = {
  '01': {
    title: 'RESEARCH & STP — Consumer Insights & Positioning',
    bullets: [
      'Customer telemetry & cohort drop-off mapping across live digital interfaces.',
      'Qualitative usability interviews to uncover deep consumer pain points and cognitive biases.',
      'Competitive landscape tearing down to carve defensible brand moats and pricing power.'
    ],
    deliverable: 'Audience Persona & Positioning Blueprint'
  },
  '02': {
    title: 'HOOK & CREATIVE — Narrative & Creative Matrix',
    bullets: [
      'Engineering high-converting video and static creative angles with pattern-interrupt hooks.',
      'Developing emotional value propositions tailored to customer awareness stages (AIDA).',
      'Systematic creative testing matrices to identify high-ROAS campaign assets.'
    ],
    deliverable: 'High-Converting Creative Playbook'
  },
  '03': {
    title: 'FUNNEL CRO — Conversion Optimization & Bundling',
    bullets: [
      'Building mobile-first landing pages with zero checkout latency.',
      'Engineering dynamic tiered volume discounts (Buy 2 Get 1) to elevate Average Order Value (AOV).',
      'Eliminating checkout friction and integrating 1-click express payments.'
    ],
    deliverable: 'High-Converting Storefront & Cart Architecture'
  },
  '04': {
    title: 'LIFECYCLE & LTV — Automated Retention & Loyalty',
    bullets: [
      'Deploying automated Klaviyo email flows (Welcome, Abandoned Cart, Win-Back).',
      'Engineering predictive replenishment notifications timed to consumer consumption cycles.',
      'Building VIP customer loyalty tiers to maximize long-term Customer Lifetime Value (LTV).'
    ],
    deliverable: 'Automated CRM Retention Workflows'
  },
  '05': {
    title: 'ANALYZE & SCALE — Attribution & Scaling Economics',
    bullets: [
      'Tracking blended Customer Acquisition Cost (CAC) and Marketing Efficiency Ratio (MER).',
      'Cohort retention curve modeling to substantiate marketing budget scaling.',
      'Automated Power BI and Google Analytics 4 dashboards for executive visibility.'
    ],
    deliverable: 'Full-Funnel Growth Dashboards & Unit Economics Model'
  }
};

export default function ProductFramework() {
  const [selectedStep, setSelectedStep] = useState('01');
  const activeDeepDive = stageDeepDives[selectedStep] || stageDeepDives['01'];

  return (
    <section id="product" className="py-24 relative bg-[#FAFAFA] dark:bg-[#08090A] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-500 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-rose-500"></span>
            <span>Section 07 &bull; Go-To-Market Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            The Growth & Marketing Engine.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            A systematic 5-stage framework designed to take new campaigns from initial customer discovery to scalable, repeatable, high-margin revenue.
          </p>
        </div>

        {/* 5-Step Marketing Lifecycle Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative mb-4">
          {marketingFramework.map((step, idx) => {
            const Icon = stepIcons[idx] || Search;
            const isSelected = selectedStep === step.step;

            return (
              <button
                key={step.step}
                onClick={() => setSelectedStep(step.step)}
                className={`text-left p-5 rounded-2xl border transition-all duration-150 group flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? 'bg-white dark:bg-[#0E1015] border-rose-500/40 shadow-xs text-zinc-950 dark:text-white linear-card'
                    : 'bg-white/70 dark:bg-[#0E1015]/60 border-black/[0.06] dark:border-white/[0.06] hover:bg-white dark:hover:bg-[#0E1015]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-medium text-rose-500">
                      STAGE {step.step}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-base font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight mb-0.5">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3 tracking-tight">
                    {step.sub}
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-black/[0.04] dark:border-white/[0.06] text-[10px] font-mono text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-1">
                  <span>{isSelected ? 'Active Playbook' : 'Explore'}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mb-8 p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-xs text-left linear-card"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 mb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div>
                <span className="text-[10px] font-mono text-rose-500 uppercase font-medium">
                  Stage {selectedStep} Growth Blueprint
                </span>
                <h4 className="text-base sm:text-lg font-display font-bold text-zinc-950 dark:text-white uppercase mt-0.5">
                  {activeDeepDive.title}
                </h4>
              </div>
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-black/[0.03] dark:bg-white/[0.04] px-3 py-1 rounded-lg border border-black/[0.06] dark:border-white/[0.08] font-medium self-start sm:self-auto">
                Deliverable: {activeDeepDive.deliverable}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {activeDeepDive.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06] text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Growth Philosophy Quote */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-left linear-card">
          <div className="space-y-1 max-w-3xl">
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
              The Marketing & Growth Commitment
            </span>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
              "Great marketing is not vanity metrics; it is the science of understanding human psychology, engineering viral growth loops, and maximizing Customer Lifetime Value (LTV)."
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-rose-600 dark:text-rose-400 bg-rose-500/10 px-3.5 py-1.5 rounded-lg border border-rose-500/20 font-medium">
              Data-Backed &bull; Creative &bull; ROI-Driven
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
