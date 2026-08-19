import React, { useState } from 'react';
import { Search, FileText, Code2, BarChart3, RefreshCw, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
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
    <section id="product" className="py-24 relative bg-slate-50 dark:bg-obsidian-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
            Section 06 &bull; Product Thinking
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-6">
            How I Think About Products.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            My objective is to develop into a Product Manager capable of connecting ambiguous customer problems with business viability and precision technology execution.
          </p>
        </div>

        {/* 5-Step Product Framework Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-6">
          {productThinkingFramework.map((step, idx) => {
            const Icon = stepIcons[idx] || Search;
            const isLast = idx === productThinkingFramework.length - 1;
            const isSelected = selectedStep === step.step;

            return (
              <button
                key={step.step}
                onClick={() => setSelectedStep(step.step)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 group flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-white dark:bg-obsidian-850 border-accent dark:border-accent-dark shadow-card-hover ring-2 ring-accent dark:ring-accent-dark'
                    : 'bg-white/80 dark:bg-obsidian-900 border-slate-200 dark:border-white/[0.08] hover:border-accent/40 shadow-card-light'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-accent dark:text-accent-dark">
                      STAGE {step.step}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-accent text-white'
                        : 'bg-slate-100 dark:bg-obsidian-950 text-slate-600 dark:text-slate-400 group-hover:bg-accent group-hover:text-white'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-950 dark:text-white uppercase tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-4 tracking-tight font-medium">
                    {step.sub}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 text-[10px] font-mono text-accent font-semibold flex items-center gap-1">
                  <span>{isSelected ? 'Active Deep Dive' : 'Click to Explore'}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-card-light animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-white/5">
            <div>
              <span className="text-xs font-mono text-accent uppercase font-bold">
                Stage {selectedStep} Operational Blueprint
              </span>
              <h4 className="text-lg sm:text-xl font-display font-bold text-slate-950 dark:text-white uppercase mt-0.5">
                {activeDeepDive.title}
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-obsidian-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5 font-semibold self-start sm:self-auto">
              Deliverable: {activeDeepDive.deliverable}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeDeepDive.bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950/60 border border-slate-200 dark:border-white/5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Positioning Summary Quote */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-card-light dark:shadow-card-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-3xl">
            <span className="text-xs font-mono text-accent dark:text-accent-dark uppercase tracking-wider font-bold">
              The Product Management Commitment
            </span>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              "Great product management is neither pure code nor pure marketing; it is the discipline of creating defensible business value by solving real human friction with software that works flawlessly."
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-obsidian-950 px-3 py-2 rounded-lg border border-slate-200 dark:border-white/5 font-medium">
              Pragmatic &bull; User-Centric &bull; Data-Backed
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
