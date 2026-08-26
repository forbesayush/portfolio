import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, TrendingUp, Layers, CheckCircle2, Award, Globe2, Sparkles } from 'lucide-react';
import { personalInfo, corePillars, academicCredentials } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAFAF8] text-[#111318] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#B38F5B]/30 text-[#8A6B3D] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B38F5B]"></span>
            <span>EXECUTIVE DOSSIER & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-luxury font-bold text-[#111318] tracking-tight uppercase mb-4">
            A Strategic Mind With A Growth Perspective.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed font-normal">
            Operating directly at the convergence of <strong className="text-[#111318] font-semibold">consumer buying psychology</strong>, <strong className="text-[#111318] font-semibold">quantitative unit economics (CAC : LTV)</strong>, and <strong className="text-[#111318] font-semibold">frictionless product conversion (CRO)</strong>.
          </p>
        </div>

        {/* 2-Column Dossier: Profile Manifesto & Academic Foundations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Manifesto Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-black/[0.08] shadow-luxury-card flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-[#8A6B3D] tracking-widest">
                CORE OPERATING PHILOSOPHY
              </div>
              <blockquote className="text-2xl sm:text-3xl font-luxury font-bold text-[#111318] leading-snug border-l-2 border-[#B38F5B] pl-5 py-1 italic">
                "{personalInfo.brandStatementLead}"
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-normal pt-2">
                {personalInfo.brandStatementBody}
              </p>
            </div>

            <div className="pt-6 border-t border-black/[0.06] mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#FAFAF8] border border-[#B38F5B]/30 flex items-center justify-center font-luxury font-bold text-base text-[#8A6B3D] shadow-sm">
                  AC
                </div>
                <div>
                  <div className="text-sm font-luxury font-bold text-[#111318] uppercase tracking-wide">
                    Ayush Chatterjee
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    MBA (IT & International Business) &bull; Strategist
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-[#8A6B3D] flex items-center gap-1.5 font-semibold bg-[#FAFAF8] px-3.5 py-1.5 rounded-full border border-[#B38F5B]/30 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#B38F5B]" />
                <span>Verified Credentials</span>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Credentials */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-black/[0.08] shadow-luxury-card flex flex-col justify-between space-y-6">
            <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-widest">
              ACADEMIC FOUNDATION & DEGREES
            </div>

            <div className="space-y-4">
              {academicCredentials.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FAFAF8] border border-black/[0.06] space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8A6B3D] font-bold uppercase">
                      {edu.duration}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#FFFFFF] text-emerald-800 border border-black/[0.06] font-semibold">
                      {edu.grade}
                    </span>
                  </div>
                  <h4 className="text-sm font-luxury font-bold text-[#111318] uppercase">
                    {edu.degree}
                  </h4>
                  <div className="text-xs text-slate-600 font-sans">
                    {edu.specialization}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono pt-0.5">
                    {edu.institution}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[11px] font-mono text-slate-500 flex items-center gap-2 pt-2 border-t border-black/[0.06]">
              <Award className="w-4 h-4 text-[#B38F5B] shrink-0" />
              <span>STEM-Aligned Business & IT Leadership Curriculum</span>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div>
          <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-widest mb-6">
            THE 4 MODERN PRODUCT & GROWTH PILLARS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {corePillars.map((p, idx) => (
              <div key={p.id} className="p-6 rounded-2xl bg-[#FFFFFF] border border-black/[0.08] hover:border-[#B38F5B]/50 transition-colors text-left flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                      0{idx + 1} &bull; {p.subtitle}
                    </span>
                    <span className="text-[10px] font-mono text-[#8A6B3D] font-bold px-2 py-0.5 rounded bg-[#FAFAF8] border border-black/[0.06]">
                      {p.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-luxury font-bold text-[#111318] uppercase mb-2">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-sans leading-relaxed mb-4 font-normal">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/[0.06] space-y-1">
                  {p.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="text-[11px] font-sans text-slate-600 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#B38F5B]"></span>
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
