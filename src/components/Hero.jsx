import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin, Sparkles, CheckCircle2, Award, Globe2, FileText, TrendingUp, BarChart3, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenBrief }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-24 overflow-hidden bg-slate-50 dark:bg-obsidian-950 transition-colors duration-300">
      
      {/* Background Subtle Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-blue-500/8 dark:bg-accent-dark/8 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Top Hairline Accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono tracking-wide shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark animate-pulse"></span>
            {personalInfo.educationBadge}
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-mono tracking-wide shadow-2xs">
            {personalInfo.focusBadge}
          </div>
        </div>

        {/* Centered Executive Portrait Spotlight */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Ambient Multi-layer Glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-sky-400/25 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700"></div>

            {/* Framed Portrait Box */}
            <div className="relative w-48 sm:w-60 md:w-64 aspect-[4/5] rounded-3xl bg-white dark:bg-obsidian-850 p-2 border border-slate-200 dark:border-white/15 shadow-2xl overflow-hidden">
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-900">
                <img
                  src="/ayush-chatterjee.png"
                  alt="Ayush Chatterjee - MBA, Product & Strategy Professional"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              </div>
            </div>

            {/* Centered Status Badge below image */}
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/95 dark:bg-obsidian-900/95 backdrop-blur-xl border border-slate-700/80 dark:border-white/20 text-white text-[11px] font-mono tracking-wide shadow-lg shadow-slate-950/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open to PM & Strategy Roles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Name Header */}
        <div className="mb-3 pt-2">
          <span className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold block mb-2">
            Executive Portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white uppercase transition-colors">
            {personalInfo.name}
          </h1>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient-primary tracking-tight mb-4 uppercase">
          {personalInfo.title}
        </h2>

        {/* Supporting Headline */}
        <p className="text-base sm:text-lg md:text-xl font-normal text-slate-700 dark:text-slate-300 tracking-tight max-w-2xl mx-auto mb-6 leading-relaxed">
          {personalInfo.supportingHeadline}
        </p>

        {/* Editorial Bio Quote */}
        <div className="max-w-2xl mx-auto mb-8">
          <blockquote className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal bg-white dark:bg-obsidian-900/50 border-l-4 border-accent dark:border-accent-dark pl-4 py-3 rounded-r-lg shadow-2xs border border-slate-200/80 dark:border-white/5 text-left">
            "{personalInfo.bio}"
          </blockquote>
        </div>

        {/* Centered CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-obsidian-950 font-bold text-xs tracking-widest uppercase hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-glow-blue group"
          >
            <span>VIEW MY WORK</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-obsidian-850 border border-slate-300 dark:border-white/15 text-slate-800 dark:text-slate-200 font-bold text-xs tracking-widest uppercase hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:text-slate-950 dark:hover:text-white transition-all duration-300 shadow-2xs group"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenBrief}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl bg-blue-50 dark:bg-accent-dark/10 border border-blue-200 dark:border-accent-dark/20 text-accent dark:text-accent-dark font-bold text-xs tracking-widest uppercase hover:bg-blue-100 dark:hover:bg-accent-dark/20 transition-all shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>1-PAGE BRIEF</span>
          </button>
        </div>

        {/* 3-Part Micro Value Grid Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10">
          <div className="p-3.5 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-2xs text-left">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Location Scope</div>
            <div className="text-sm font-display font-bold text-slate-950 dark:text-white mt-0.5">India &rarr; Global Markets</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Germany, Ireland, Netherlands, Australia</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-2xs text-left">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Primary Track</div>
            <div className="text-sm font-display font-bold text-accent dark:text-accent-dark mt-0.5">Product Management</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Product Strategy, PRD, UX Diagnostics</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-2xs text-left">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Secondary Track</div>
            <div className="text-sm font-display font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">Strategy & Consulting</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Market Entry, SWOT/Porter Frameworks</div>
          </div>
        </div>

        {/* Core Positioning Bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] max-w-3xl mx-auto">
          <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2 font-semibold">
            Core Career Positioning
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-mono font-bold text-slate-800 dark:text-slate-300">
            <span className="px-2.5 py-1 rounded bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-2xs">PRODUCT</span>
            <span className="text-accent dark:text-accent-dark">×</span>
            <span className="px-2.5 py-1 rounded bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-2xs">STRATEGY</span>
            <span className="text-accent dark:text-accent-dark">×</span>
            <span className="px-2.5 py-1 rounded bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-2xs">TECHNOLOGY</span>
            <span className="text-accent dark:text-accent-dark">×</span>
            <span className="px-2.5 py-1 rounded bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-2xs">DATA</span>
            <span className="text-accent dark:text-accent-dark">×</span>
            <span className="px-2.5 py-1 rounded bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-2xs">GLOBAL BUSINESS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
