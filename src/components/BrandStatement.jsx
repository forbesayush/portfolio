import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Quote, Zap } from 'lucide-react';

export default function BrandStatement() {
  return (
    <section className="py-24 relative bg-white dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] overflow-hidden transition-colors duration-300">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-500 uppercase mb-6 font-semibold"
        >
          <span className="w-2 h-[2px] bg-rose-500"></span>
          <span>Section 14 &bull; Growth Philosophy</span>
        </motion.div>

        {/* Large Typography Statement */}
        <motion.blockquote 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight leading-[1.2] uppercase mb-8 max-w-4xl mx-auto"
        >
          "<span className="text-gradient-minimal">{personalInfo.brandStatementLead}</span>"
        </motion.blockquote>

        {/* Secondary Supporting Manifesto Card */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] shadow-card-light dark:shadow-card-dark text-left linear-card"
        >
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
            {personalInfo.brandStatementBody}
          </p>
          
          <div className="pt-5 border-t border-black/[0.06] dark:border-white/[0.08] mt-5 flex items-center gap-3.5">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-black/10 dark:border-white/15 shrink-0 bg-zinc-950">
              <img
                src="/ayush-chatterjee.png"
                alt="Ayush Chatterjee"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-left">
              <div className="text-sm font-display font-bold text-zinc-950 dark:text-white uppercase tracking-tight">
                Ayush Chatterjee
              </div>
              <div className="text-xs font-mono text-rose-500 font-normal">
                MBA (IT & International Business) &bull; Growth & Marketing
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
