import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState(experiences[0].id);
  const activeExp = experiences.find(e => e.id === activeTab) || experiences[0];

  return (
    <section id="experience" className="py-24 relative bg-black border-t border-b border-white/10 text-cream overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 text-left"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cream/60 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-cream"></span>
            <span>Section 02 &bull; Career & Campaign Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-hn font-bold text-cream tracking-tight uppercase leading-tight mb-4">
            Verified Marketing Experience.
          </h2>
          <p className="text-base sm:text-lg text-cream/70 leading-relaxed font-normal">
            Real-world D2C storefront audits, cross-border retention modeling, user journey conversion optimization, and high-ticket consultative marketing.
          </p>
        </motion.div>

        {/* Experience Layout: Left Tabs Slide, Right Details Slide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
          
          {/* Navigation / Role Selector Column (Left Sliding Stack) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {experiences.map((exp, idx) => {
              const isSelected = exp.id === activeTab;
              return (
                <motion.button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ x: 4 }}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 relative group overflow-hidden ${
                    isSelected
                      ? 'bg-[#141414] border-white/30 text-cream shadow-lg'
                      : 'bg-[#0E1015] border-white/5 text-cream/60 hover:text-cream hover:border-white/15'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm font-hn font-bold uppercase tracking-tight text-cream">
                      {exp.company}
                    </h3>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform shrink-0 mt-0.5 ${
                      isSelected ? 'text-cream translate-x-1' : 'text-cream/30'
                    }`} />
                  </div>

                  <div className="text-xs text-cream/70 font-normal mb-2.5 line-clamp-1">
                    {exp.role}
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-[11px] font-mono text-cream/40">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cream/40" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cream/40" />
                      {exp.location}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Detailed Experience Panel (Right Slide-In Panel with AnimatePresence) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 sm:p-8 rounded-2xl bg-[#141414] border border-white/15 shadow-xl relative overflow-hidden"
              >
                {/* Header info */}
                <div className="pb-6 border-b border-white/10 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-hn font-bold text-cream uppercase">
                      {activeExp.company}
                    </h3>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/10 text-cream uppercase tracking-wider font-semibold">
                      {activeExp.type}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-cream/80 mb-2">
                    {activeExp.role}
                  </div>
                  <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-normal">
                    {activeExp.summary}
                  </p>
                </div>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {activeExp.metrics.map((m, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.06 }}
                      className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-left"
                    >
                      <div className="text-base sm:text-lg font-hn font-bold text-cream">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-cream/50 uppercase leading-tight mt-0.5">
                        {m.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase text-cream/60 tracking-wider">
                    Key Impact Milestones & Deliverables
                  </h4>
                  <div className="space-y-2.5 text-xs sm:text-sm text-cream/80 font-normal leading-relaxed">
                    {activeExp.verifiedPoints.map((point, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + idx * 0.05 }}
                        className="flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cream shrink-0 mt-2"></span>
                        <span>{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech & Framework Tags */}
                <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                  {activeExp.skills.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-cream/70 border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
