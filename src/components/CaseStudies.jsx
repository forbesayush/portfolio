import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Target, Zap, TrendingUp, ChevronRight } from 'lucide-react';
import { starCaseStudies } from '../data/portfolioData';

export default function CaseStudies() {
  const [activeStarTab, setActiveStarTab] = useState({});

  const getTab = (id) => activeStarTab[id] || 'all';
  const setTab = (id, tab) => setActiveStarTab(prev => ({ ...prev, [id]: tab }));

  return (
    <section id="projects" className="py-24 bg-[#FAFAF8] text-[#111318] overflow-hidden text-left">
      
      {/* Luxury Ribbon Marquee Ticker */}
      <div className="w-full bg-[#111318] text-[#FAFAF8] py-3.5 overflow-hidden mb-16 select-none shadow-sm">
        <div className="flex w-max whitespace-nowrap font-luxury font-medium text-lg sm:text-2xl tracking-[0.2em] uppercase animate-luxury-marquee">
          <span className="pr-12">✦ STAR METHOD CASEBOOKS &bull; VERIFIED ROI &bull; PRODUCT ARCHITECTURE &bull; UNIT ECONOMICS ✦&nbsp;</span>
          <span className="pr-12">✦ STAR METHOD CASEBOOKS &bull; VERIFIED ROI &bull; PRODUCT ARCHITECTURE &bull; UNIT ECONOMICS ✦&nbsp;</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#B38F5B]/30 text-[#8A6B3D] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B38F5B]"></span>
            <span>STRUCTURED STAR METHOD CASEBOOKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-luxury font-bold text-[#111318] tracking-tight uppercase mb-4">
            Commercial Project Teardowns.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            Every initiative is deconstructed through the <strong className="text-[#111318] font-semibold">STAR Method</strong> (Situation &bull; Task &bull; Action &bull; Result) with verified percentage gains and deliverable breakdowns.
          </p>
        </div>

        {/* 2-Column Luxury Editorial Casebook Grid */}
        <div className="space-y-12">
          {starCaseStudies.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const currentTab = getTab(project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-[#FFFFFF] border border-black/[0.08] overflow-hidden hover:border-[#B38F5B]/50 transition-colors shadow-luxury-card"
              >
                
                {/* Visual / Highlight Panel (5 Cols) */}
                <div className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#FAFAF8] border-b lg:border-b-0 ${
                  isEven ? 'lg:border-r border-black/[0.06]' : 'lg:order-last lg:border-l border-black/[0.06]'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#B38F5B]/30 text-[#8A6B3D] uppercase tracking-wider shadow-sm">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-bold">
                        CASE #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-luxury font-bold text-[#111318] tracking-tight mb-4">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 font-normal">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Key Stats Chips */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[#FFFFFF] border border-black/[0.06] shadow-sm mb-5">
                      {project.keyStats.map((st, sIdx) => (
                        <div key={sIdx} className="text-center">
                          <div className="text-[9px] font-mono text-slate-400 uppercase truncate">{st.label}</div>
                          <div className="text-base sm:text-lg font-luxury font-bold text-[#8A6B3D] mt-0.5">{st.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/[0.06]">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-0.5 rounded-md bg-[#FFFFFF] text-[10px] font-mono text-slate-600 border border-black/[0.06]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* STAR Method Breakdown Panel (7 Cols) */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between bg-[#FFFFFF]">
                  <div>
                    
                    {/* Header & Tabs */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-black/[0.06]">
                      <div className="text-[11px] font-mono text-[#8A6B3D] font-bold uppercase tracking-widest">
                        [ {project.category} ] &bull; [ VERIFIED IMPACT ]
                      </div>

                      {/* Tab Switcher */}
                      <div className="flex items-center gap-1 p-1 rounded-xl bg-[#FAFAF8] border border-black/[0.06] text-[11px] font-mono font-bold">
                        <button
                          onClick={() => setTab(project.id, 'all')}
                          className={`px-3 py-1 rounded-lg transition-colors ${
                            currentTab === 'all' ? 'bg-[#111318] text-white' : 'text-slate-500 hover:text-black'
                          }`}
                        >
                          ALL
                        </button>
                        <button
                          onClick={() => setTab(project.id, 'S')}
                          className={`px-2.5 py-1 rounded-lg transition-colors ${
                            currentTab === 'S' ? 'bg-[#8A6B3D] text-white' : 'text-slate-500 hover:text-black'
                          }`}
                        >
                          [S]
                        </button>
                        <button
                          onClick={() => setTab(project.id, 'T')}
                          className={`px-2.5 py-1 rounded-lg transition-colors ${
                            currentTab === 'T' ? 'bg-[#8A6B3D] text-white' : 'text-slate-500 hover:text-black'
                          }`}
                        >
                          [T]
                        </button>
                        <button
                          onClick={() => setTab(project.id, 'A')}
                          className={`px-2.5 py-1 rounded-lg transition-colors ${
                            currentTab === 'A' ? 'bg-[#8A6B3D] text-white' : 'text-slate-500 hover:text-black'
                          }`}
                        >
                          [A]
                        </button>
                        <button
                          onClick={() => setTab(project.id, 'R')}
                          className={`px-2.5 py-1 rounded-lg transition-colors ${
                            currentTab === 'R' ? 'bg-emerald-700 text-white' : 'text-slate-500 hover:text-black'
                          }`}
                        >
                          [R]
                        </button>
                      </div>
                    </div>

                    {/* STAR Method Breakdown Blocks */}
                    <div className="space-y-3 text-xs font-sans">
                      {(currentTab === 'all' || currentTab === 'S') && (
                        <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-black/[0.04]">
                          <div className="font-mono font-bold text-[#8A6B3D] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B38F5B]"></span>
                            <span>[S] Situation & Commercial Context</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed font-normal">{project.star.situation}</p>
                        </div>
                      )}

                      {(currentTab === 'all' || currentTab === 'T') && (
                        <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-black/[0.04]">
                          <div className="font-mono font-bold text-[#8A6B3D] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B38F5B]"></span>
                            <span>[T] Task & Target KPI</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed font-normal">{project.star.task}</p>
                        </div>
                      )}

                      {(currentTab === 'all' || currentTab === 'A') && (
                        <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-black/[0.04]">
                          <div className="font-mono font-bold text-[#8A6B3D] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B38F5B]"></span>
                            <span>[A] Action & Systems Engineered</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed font-normal">{project.star.action}</p>
                        </div>
                      )}

                      {(currentTab === 'all' || currentTab === 'R') && (
                        <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-emerald-600/30 bg-emerald-50/40">
                          <div className="font-mono font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                            <span>[R] Verified Quantifiable Result</span>
                          </div>
                          <p className="text-slate-800 leading-relaxed font-semibold">{project.star.result}</p>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Deliverables List */}
                  <div className="pt-4 mt-4 border-t border-black/[0.06]">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-bold mb-2">
                      Key Deliverables Built:
                    </div>
                    <div className="space-y-1">
                      {project.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="text-[11px] font-sans text-slate-700 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B38F5B] shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
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
