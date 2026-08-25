import React from 'react';
import { motion } from 'framer-motion';
import { Box, Database, Cpu, Briefcase, Check, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categories = [
  { 
    key: 'product', 
    label: 'PRODUCT MANAGEMENT', 
    icon: Box, 
  },
  { 
    key: 'data', 
    label: 'DATA & ANALYTICS', 
    icon: Database, 
  },
  { 
    key: 'technology', 
    label: 'SOFTWARE & TECH', 
    icon: Cpu, 
  },
  { 
    key: 'business', 
    label: 'BUSINESS & STRATEGY', 
    icon: Briefcase, 
  },
];

export default function SkillsMatrix() {
  return (
    <section className="py-24 relative bg-white dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-linear-brand"></span>
            <span>Section 09 &bull; Competency Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            Technical & Professional Toolkit.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            A calibrated blend of product methodologies, quantitative analytics, software technologies, and enterprise business strategy.
          </p>
        </div>

        {/* 4 Category Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const skills = skillsData[cat.key] || [];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] transition-all duration-150 shadow-xs flex flex-col justify-between group linear-card"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-5 pb-3.5 border-b border-black/[0.06] dark:border-white/[0.08]">
                    <div className="w-8 h-8 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                      {cat.label}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.05] text-xs text-zinc-700 dark:text-zinc-300 font-normal"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-brand/80 dark:bg-linear-accent/80 shrink-0"></span>
                        <span className="leading-snug">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 mt-5 border-t border-black/[0.04] dark:border-white/[0.06] text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase flex items-center justify-between font-medium">
                  <span>Zero Fluff</span>
                  <span className="text-linear-brand dark:text-linear-accent">Applied Capability</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
