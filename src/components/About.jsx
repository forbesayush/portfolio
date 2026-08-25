import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, CheckCircle2, Layers, Cpu, Users, BarChart2, Globe, Sparkles, Target, Zap } from 'lucide-react';
import { careerEvolution, competencies } from '../data/portfolioData';

export default function About() {
  const [selectedStep, setSelectedStep] = useState(careerEvolution[careerEvolution.length - 1]);

  return (
    <section id="about" className="py-24 relative bg-white dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-500 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-rose-500"></span>
            <span>Section 01 &bull; Growth & Marketing Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            A Strategic Mind With A Growth Perspective.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            My career sits directly at the convergence of <strong className="text-zinc-950 dark:text-white font-semibold">consumer buying psychology</strong>, <strong className="text-zinc-950 dark:text-white font-semibold">performance marketing economics</strong>, <strong className="text-zinc-950 dark:text-white font-semibold">frictionless D2C conversion (CRO)</strong>, and <strong className="text-zinc-950 dark:text-white font-semibold">global brand strategy</strong>. Rather than treating creative brand storytelling and quantitative analytics as separate silos, I engineer full-funnel growth engines.
          </p>
        </div>

        {/* Visual Story Evolution Pipeline */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-5 text-left">
            <div>
              <h3 className="text-base font-display font-bold text-zinc-900 dark:text-white uppercase tracking-tight">
                Career Evolution Story
              </h3>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                Deliberate progression across operational, analytical, and technical domains.
              </p>
            </div>
            <span className="hidden sm:inline-flex text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] px-3 py-1 rounded-full font-medium">
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
                  className={`text-left p-3 rounded-xl border transition-all duration-150 group relative ${
                    isSelected
                      ? 'bg-black/[0.06] dark:bg-white/[0.1] border-black/20 dark:border-white/20 text-zinc-950 dark:text-white shadow-xs'
                      : 'bg-white dark:bg-[#0E1015] border-black/[0.06] dark:border-white/[0.06] text-zinc-600 dark:text-zinc-400 hover:border-black/15 dark:hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-semibold text-zinc-400 dark:text-zinc-500">
                      #{item.step}
                    </span>
                    {isLast && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    )}
                  </div>
                  <div className="text-xs font-display font-semibold tracking-tight uppercase line-clamp-1 mb-0.5 text-zinc-900 dark:text-zinc-100">
                    {item.name}
                  </div>
                  <div className="text-[10px] line-clamp-1 text-zinc-500 dark:text-zinc-400">
                    {item.role}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Evolution Detail Card */}
          <motion.div
            key={selectedStep.step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-3.5 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left linear-card"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-linear-brand text-white font-mono text-[10px] font-bold">
                  Step {selectedStep.step}
                </span>
                <h4 className="text-sm font-display font-bold text-zinc-950 dark:text-white uppercase tracking-wide">
                  {selectedStep.name} &bull; {selectedStep.role}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl font-normal">
                {selectedStep.description}
              </p>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-black/[0.03] dark:bg-white/[0.04] px-3 py-1.5 rounded-lg border border-black/[0.06] dark:border-white/[0.08] font-medium">
                Focus: {selectedStep.tag}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Core Understanding Matrix */}
        <div className="text-left">
          <div className="mb-6">
            <h3 className="text-base font-display font-bold text-zinc-900 dark:text-white uppercase tracking-tight">
              Core Understanding Matrix
            </h3>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
              Bridging business, qualitative human experience, and structured technology execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {competencies.map((comp, idx) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="p-5 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] transition-all duration-150 linear-card"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-linear-brand dark:text-linear-accent tracking-wider uppercase font-semibold">
                    {comp.subtitle}
                  </span>
                </div>
                <h4 className="text-sm font-display font-bold text-zinc-900 dark:text-zinc-100 mb-1.5 tracking-tight">
                  {comp.title}
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {comp.desc}
                </p>
              </motion.div>
            ))}
            
            {/* Global Strategy Bridge Card */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 tracking-wider uppercase font-semibold mb-2">
                  Unified Vision
                </div>
                <h4 className="text-sm font-display font-bold text-zinc-900 dark:text-white mb-1.5">
                  Global PM & Strategy
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Connecting consumer empathy with quantitative data, engineering roadmaps, and international scalability.
                </p>
              </div>
              <div className="pt-3 text-[11px] font-mono font-medium text-linear-brand dark:text-linear-accent flex items-center gap-1">
                <span>Transferable globally</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
