import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-[#FAFAFA] dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-linear-brand"></span>
            <span>Endorsements & Collaborative Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            Stakeholder Endorsements.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            Reflections from engineering collaborators, growth leaders, and academic mentors on analytical rigor, product execution, and problem solving.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] transition-all duration-150 shadow-xs flex flex-col justify-between group linear-card"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-8 h-8 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-medium bg-black/[0.03] dark:bg-white/[0.04] px-2.5 py-0.5 rounded-md border border-black/[0.06] dark:border-white/[0.08]">
                    Verified
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
                <div className="font-display font-bold text-zinc-950 dark:text-white text-sm uppercase tracking-wide">
                  {t.author}
                </div>
                <div className="text-xs font-mono text-linear-brand dark:text-linear-accent font-medium mt-0.5">
                  {t.title}
                </div>
                <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mt-0.5">
                  {t.domain}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
