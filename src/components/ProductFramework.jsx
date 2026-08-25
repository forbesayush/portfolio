import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Code2, BarChart3, RefreshCw, ArrowRight, CheckCircle2, Sparkles, Layers, Check } from 'lucide-react';
import { productThinkingFramework } from '../data/portfolioData';

const stepIcons = [Search, FileText, Code2, BarChart3, RefreshCw];

const stageDeepDives = {
  '01': {
    title: 'DISCOVER — Root-Cause Problem Identification',
    bullets: [
      'Customer telemetry & cohort drop-off mapping across live digital interfaces.',
      'Qualitative usability interviews to distinguish surface complaints from systemic friction.',
      'Competitive landscape tearing down to spot differentiation opportunities.'
    ],
    deliverable: 'Problem Brief & Value Proposition Canvas'
  },
  '02': {
    title: 'DEFINE — Requirements Engineering & Prioritization',
    bullets: [
      'Drafting exhaustive Product Requirement Documents (PRDs) with user stories and edge cases.',
      'RICE scoring (Reach, Impact, Confidence, Effort) to prevent feature bloat.',
      'Aligning cross-functional stakeholders on Acceptance Criteria.'
    ],
    deliverable: 'PRD, Acceptance Criteria & Sprint Roadmap'
  },
  '03': {
    title: 'BUILD — Agile Delivery & Technical Diagnostics',
    bullets: [
      'Collaborating in bi-weekly sprints with frontend, backend, and QA teams.',
      'Structured operating system build diagnostics to catch regressions early.',
      'Iterative prototype validation and usability benchmark tracking.'
    ],
    deliverable: 'Tested Release Builds & QA Defect Logs'
  },
  '04': {
    title: 'MEASURE — Telemetry & Behavioral Analytics',
    bullets: [
      'Monitoring North Star metrics, task-flow completion speed, and defect recurrence rates.',
      'Tracking conversion funnel velocity and Average Order Value (AOV).',
      'Automated MIS reporting pipelines for real-time stakeholder visibility.'
    ],
    deliverable: 'Power BI Performance Dashboards & Funnel Audits'
  },
  '05': {
    title: 'IMPROVE — Continuous Data-Driven Optimization',
    bullets: [
      'A/B experimentation to validate micro-copy, CTA placement, and checkout flows.',
      'Systematic bug remediation cycles reducing post-release defect recurrence.',
      'Translating user feedback into the next strategic product iteration.'
    ],
    deliverable: 'Optimization Backlog & Feature Enhancements'
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
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-linear-brand"></span>
            <span>Section 06 &bull; Product Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            How I Think About Products.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            My objective is to develop into a Product Manager capable of connecting ambiguous customer problems with business viability and precision technology execution.
          </p>
        </div>

        {/* 5-Step Product Framework Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative mb-4">
          {productThinkingFramework.map((step, idx) => {
            const Icon = stepIcons[idx] || Search;
            const isSelected = selectedStep === step.step;

            return (
              <button
                key={step.step}
                onClick={() => setSelectedStep(step.step)}
                className={`text-left p-5 rounded-2xl border transition-all duration-150 group flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? 'bg-white dark:bg-[#0E1015] border-black/20 dark:border-white/20 shadow-xs text-zinc-950 dark:text-white linear-card'
                    : 'bg-white/70 dark:bg-[#0E1015]/60 border-black/[0.06] dark:border-white/[0.06] hover:bg-white dark:hover:bg-[#0E1015]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-medium text-linear-brand dark:text-linear-accent">
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
                  <span>{isSelected ? 'Active Deep Dive' : 'Explore'}</span>
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
                <span className="text-[10px] font-mono text-linear-brand dark:text-linear-accent uppercase font-medium">
                  Stage {selectedStep} Operational Blueprint
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
                  <span className="w-1.5 h-1.5 rounded-full bg-linear-brand/80 dark:bg-linear-accent/80 shrink-0 mt-1.5"></span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Product Positioning Summary Quote */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-left linear-card">
          <div className="space-y-1 max-w-3xl">
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
              The Product Management Commitment
            </span>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
              "Great product management is neither pure code nor pure marketing; it is the discipline of creating defensible business value by solving real human friction with software that works flawlessly."
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-black/[0.03] dark:bg-white/[0.04] px-3.5 py-1.5 rounded-lg border border-black/[0.06] dark:border-white/[0.08] font-medium">
              Pragmatic &bull; User-Centric &bull; Data-Backed
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
