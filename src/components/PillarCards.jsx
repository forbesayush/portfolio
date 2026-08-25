import React from 'react';
import { motion } from 'framer-motion';
import { Box, Compass, Database, Check, ArrowUpRight, Sparkles, Layers, Cpu } from 'lucide-react';
import { pillars } from '../data/portfolioData';

const pillarIcons = {
  product: Box,
  strategy: Compass,
  'data-technology': Database
};

export default function PillarCards() {
  return (
    <section className="py-24 relative bg-[#FAFAFA] dark:bg-[#08090A] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-linear-brand"></span>
            <span>Section 04 &bull; Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            What I Work On.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            Three interconnected disciplines engineered to take products from ambiguous early problems to structured, scalable market execution.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.id] || Box;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] transition-all duration-200 group flex flex-col justify-between relative overflow-hidden linear-card"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 tracking-widest uppercase font-medium">
                      PILLAR {pillar.num}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight mb-1.5">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono font-medium text-linear-brand dark:text-linear-accent mb-4 tracking-wide uppercase">
                    {pillar.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Capabilities List */}
                <div className="pt-5 border-t border-black/[0.04] dark:border-white/[0.06]">
                  <div className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-3 font-medium">
                    Domain Capabilities & Methods
                  </div>
                  <div className="space-y-2">
                    {pillar.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-normal"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-brand/80 dark:bg-linear-accent/80 shrink-0"></span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
