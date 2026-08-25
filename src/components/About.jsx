import React, { useState } from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Layers, Cpu, Users, BarChart2, Globe, Sparkles, Target } from 'lucide-react';
import { careerEvolution, competencies } from '../data/portfolioData';

export default function About() {
  const [selectedStep, setSelectedStep] = useState(careerEvolution[careerEvolution.length - 1]);

  return (
    <section id="about" className="py-24 relative bg-white dark:bg-obsidian-900/60 border-t border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
            Section 01 &bull; About & Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight mb-6">
            A Business Mind With A Product Perspective.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            My career interests sit directly at the convergence of <strong className="text-slate-900 dark:text-white font-semibold">business model viability</strong>, <strong className="text-slate-900 dark:text-white font-semibold">technology execution</strong>, <strong className="text-slate-900 dark:text-white font-semibold">frictionless user experience</strong>, and <strong className="text-slate-900 dark:text-white font-semibold">product strategy</strong>. Rather than viewing these as separate silos, I connect ground-level consumer realities with data architectures and strategic roadmaps.
          </p>
        </div>

        {/* Visual Story Evolution Pipeline */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white tracking-wide uppercase">
                The Career Evolution Story
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                A connected, deliberate progression across operational, analytical, and technical domains.
              </p>
            </div>
            <span className="hidden sm:inline-flex text-xs font-mono text-accent dark:text-accent-dark bg-blue-50 dark:bg-accent-dark/10 border border-blue-200 dark:border-accent-dark/20 px-3 py-1 rounded font-semibold">
              Interactive Pathway
            </span>
          </div>

          {/* Evolution Flow Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {careerEvolution.map((item, idx) => {
              const isSelected = selectedStep.step === item.step;
              const isLast = idx === careerEvolution.length - 1;
              return (
                <button
                  key={item.step}
                  onClick={() => setSelectedStep(item)}
                  className={`text-left p-3 rounded-xl border transition-all duration-200 group relative ${
                    isSelected
                      ? 'bg-blue-50/80 dark:bg-accent-dark/15 border-accent dark:border-accent-dark shadow-sm text-slate-950 dark:text-white ring-1 ring-accent dark:ring-accent-dark'
                      : isLast
                      ? 'bg-slate-900 text-white dark:bg-obsidian-800 dark:border-accent-dark/40 dark:text-slate-200 hover:bg-slate-800'
                      : 'bg-slate-50 dark:bg-obsidian-850 border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-400 hover:bg-white dark:hover:bg-obsidian-800 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold ${
                      isLast && !isSelected ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      #{item.step}
                    </span>
                    {isLast && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark animate-ping"></span>
                    )}
                  </div>
                  <div className={`text-xs font-display font-bold tracking-tight uppercase line-clamp-1 mb-1 ${
                    isLast && !isSelected ? 'text-white' : 'text-slate-900 dark:text-slate-100'
                  }`}>
                    {item.name}
                  </div>
                  <div className={`text-[11px] line-clamp-1 ${
                    isLast && !isSelected ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {item.role}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Evolution Detail Card */}
          <div className="mt-4 p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-card-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-accent dark:bg-accent-dark text-white dark:text-obsidian-950 font-mono text-xs font-bold">
                  Step {selectedStep.step}
                </span>
                <h4 className="text-base font-display font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                  {selectedStep.name} — {selectedStep.role}
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl font-normal">
                {selectedStep.description}
              </p>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <span className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-obsidian-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5 font-medium shadow-sm">
                Focus: {selectedStep.tag}
              </span>
            </div>
          </div>
        </div>

        {/* 7 Core Competency Pillars */}
        <div>
          <div className="mb-8">
            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white tracking-wide uppercase">
              Core Understanding Matrix
            </h3>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              Bridging business, qualitative human experience, and structured technology execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {competencies.map((comp) => (
              <div
                key={comp.title}
                className="p-5 rounded-2xl bg-white dark:bg-obsidian-850/70 border border-slate-200 dark:border-white/[0.07] hover:border-slate-300 dark:hover:border-white/20 transition-all group hover:shadow-card-light"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-accent dark:text-accent-dark tracking-wider uppercase font-bold">
                    {comp.subtitle}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-accent transition-colors"></div>
                </div>
                <h4 className="text-base font-display font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {comp.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {comp.desc}
                </p>
              </div>
            ))}
            
            {/* Global Strategy Bridge Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-accent-dark/10 dark:via-obsidian-850 dark:to-obsidian-850 border border-blue-200 dark:border-accent-dark/20 flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs font-mono text-accent dark:text-accent-dark tracking-wider uppercase font-bold mb-2">
                  Unified Vision
                </div>
                <h4 className="text-base font-display font-bold text-slate-900 dark:text-white mb-2">
                  Global PM & Strategy
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Connecting consumer empathy with quantitative data, engineering roadmaps, and international scalability.
                </p>
              </div>
              <div className="pt-3 text-[11px] font-mono font-bold text-accent dark:text-accent-dark flex items-center gap-1">
                <span>Transferable globally</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
