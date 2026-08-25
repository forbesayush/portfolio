import React, { useState } from 'react';
import { Target, GitMerge, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Compass, BarChart, CheckCircle2 } from 'lucide-react';
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
    <section id="strategy" className="py-24 relative bg-white dark:bg-obsidian-900/60 border-t border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
            Section 07 &bull; Strategy & Consulting
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-6">
            How I Approach Business Problems.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Applying structured management consulting methodologies to deconstruct complex commercial challenges, evaluate market trade-offs, and deliver defensible recommendations.
          </p>
        </div>

        {/* 6-Stage Consulting Framework */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-6">
          {consultingFramework.map((stage) => {
            const isSelected = selectedStep === stage.step;
            return (
              <button
                key={stage.step}
                onClick={() => setSelectedStep(stage.step)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 group flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-500 shadow-md ring-2 ring-indigo-500'
                    : 'bg-slate-50 dark:bg-obsidian-850 border-slate-200 dark:border-white/[0.08] hover:border-indigo-400'
                }`}
              >
                <div>
                  <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                    STEP {stage.step}
                  </div>
                  <h3 className="text-sm font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                  {isSelected ? '● Active' : 'Explore'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200 dark:border-white/5">
            <h4 className="text-base sm:text-lg font-display font-bold text-slate-950 dark:text-white uppercase">
              {activeDeepDive.title}
            </h4>
            <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
              Management Consulting Practice
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {activeDeepDive.detail}
          </p>
        </div>

        {/* Strategic Capabilities Matrix */}
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-card-dark">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
            <div>
              <h3 className="text-lg font-display font-bold text-slate-950 dark:text-white uppercase tracking-tight">
                Consulting & Strategic Advisory Toolkit
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                Rigorous frameworks applied to live business engagements.
              </p>
            </div>
            <span className="text-xs font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-3 py-1.5 rounded-lg self-start md:self-auto font-semibold">
              Management Consulting Ready
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-obsidian-950/60 border border-slate-200 dark:border-white/[0.05] text-xs text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-all shadow-sm font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
