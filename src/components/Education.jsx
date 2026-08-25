import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="py-24 relative bg-[#FAFAFA] dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-500 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-rose-500"></span>
            <span>Section 09 &bull; Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight mb-4">
            Education & Marketing Credentials.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            Specialized academic foundation in International Marketing, Consumer Behavior, Technology Systems, and Global Business Strategy.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] transition-all duration-200 shadow-xs flex flex-col justify-between relative group linear-card"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-300 bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] px-3 py-0.5 rounded-md font-medium">
                    {edu.graduation}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight mb-0.5">
                  {edu.degree}
                </h3>
                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3.5">
                  {edu.institution}
                </div>

                <div className="inline-block px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-4 font-medium">
                  {edu.specialization}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {edu.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-black/[0.04] dark:border-white/[0.06] mt-5 flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                <span>RCM Bhubaneswar</span>
                <span className="text-linear-brand dark:text-linear-accent font-medium">Verified Curriculum</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
