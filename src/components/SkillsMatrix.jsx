import React from 'react';
import { motion } from 'framer-motion';
import { Layers, BarChart3, TrendingUp, Target, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { skillsMatrix } from '../data/portfolioData';

const categoryIcons = {
  'Product & Growth Systems': Layers,
  'Financial & Unit Analytics': BarChart3,
  'Lifecycle CRM & Retention': TrendingUp,
  'Brand Strategy & Consulting': Target
};

export default function SkillsMatrix() {
  return (
    <section id="stack" className="py-24 relative bg-[#07080B] border-t border-b border-white/[0.08] text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>SECTION 04 &bull; FINTECH & GROWTH CAPABILITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-4">
            Technical & Strategic Tool Stack.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            A comprehensive matrix of quantitative data analytics, conversion optimization engines, retention flow frameworks, and brand strategy models.
          </p>
        </div>

        {/* 4-Column Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsMatrix.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Layers;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-3xl bg-[#0D0E15] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                      DOMAIN 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white uppercase mb-1">
                    {cat.category}
                  </h3>

                  <p className="text-xs text-slate-400 font-normal mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List with Proficiency Meters */}
                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-200 truncate pr-2">{skill.name}</span>
                          <span className="text-emerald-400 font-bold">{skill.level}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 + sIdx * 0.05 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Domain Badge */}
                <div className="pt-5 border-t border-white/[0.06] mt-6 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>AUDITED CAPABILITY</span>
                  <span className="text-blue-400 font-bold">VERIFIED</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
