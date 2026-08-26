import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, TrendingUp, Layers, CheckCircle2, Award, Globe2, Sparkles, ArrowRight } from 'lucide-react';
import { personalInfo, corePillars, academicCredentials } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#07080B] text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>SECTION 01 &bull; EXECUTIVE DOSSIER & BIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-4">
            A Strategic Mind With A Growth Perspective.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Operating directly at the intersection of <strong className="text-white font-semibold">consumer buying psychology</strong>, <strong className="text-white font-semibold">quantitative unit economics (CAC : LTV)</strong>, and <strong className="text-white font-semibold">frictionless product conversion (CRO)</strong>.
          </p>
        </div>

        {/* 2-Column Dossier: Profile Manifesto & Academic Foundations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Manifesto Card */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-[#0D0E15] border border-white/[0.08] flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-blue-400 tracking-wider">
                CORE VALUE PROPOSITION
              </div>
              <blockquote className="text-xl sm:text-2xl font-display font-bold text-white leading-snug border-l-2 border-blue-500 pl-4 py-1">
                "{personalInfo.brandStatementLead}"
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-2">
                {personalInfo.brandStatementBody}
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-display font-bold text-sm text-white">
                  AC
                </div>
                <div>
                  <div className="text-sm font-display font-bold text-white uppercase">
                    Ayush Chatterjee
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    MBA (IT & International Business) &bull; Strategist
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-semibold bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Credentials</span>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Credentials */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-[#0D0E15] border border-white/[0.08] flex flex-col justify-between shadow-2xl space-y-6">
            <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
              ACADEMIC CREDENTIALS & DEGREES
            </div>

            <div className="space-y-4">
              {academicCredentials.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">
                      {edu.duration}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      {edu.grade}
                    </span>
                  </div>
                  <h4 className="text-sm font-display font-bold text-white uppercase">
                    {edu.degree}
                  </h4>
                  <div className="text-xs text-slate-400 font-mono">
                    {edu.specialization}
                  </div>
                  <div className="text-[11px] text-slate-400 font-normal pt-1">
                    {edu.institution}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2 pt-2 border-t border-white/[0.08]">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>STEM-Aligned Business & IT Leadership Curriculum</span>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div>
          <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-6">
            THE 4 MODERN PRODUCT & GROWTH PILLARS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {corePillars.map((p, idx) => (
              <div key={p.id} className="p-6 rounded-2xl bg-[#0D0E15] border border-white/[0.08] hover:border-blue-500/30 transition-colors text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                      0{idx + 1} &bull; {p.subtitle}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10">
                      {p.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white uppercase mb-2">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] space-y-1">
                  {p.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
