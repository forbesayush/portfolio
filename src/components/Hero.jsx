import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin, Sparkles, CheckCircle2, Award, Globe2, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenBrief }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-24 overflow-hidden bg-slate-50 dark:bg-obsidian-950 transition-colors duration-300">
      
      {/* Background Subtle Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/8 dark:bg-accent-dark/8 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-indigo-500/6 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Top Hairline Accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Positioning & Content (7 Cols) */}
          <div className="lg:col-span-7 text-left">
            
            {/* Subtle Visual Indicators / Badges */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono tracking-wide shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark animate-pulse"></span>
                {personalInfo.educationBadge}
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-mono tracking-wide shadow-2xs">
                {personalInfo.focusBadge}
              </div>
            </div>

            {/* Large Confident Editorial Name */}
            <div className="mb-3">
              <span className="text-xs sm:text-sm font-mono tracking-ultra text-slate-500 dark:text-slate-400 uppercase mb-2 font-semibold block">
                Executive Portfolio &bull; Ayush Chatterjee
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white uppercase transition-colors">
                {personalInfo.name}
              </h1>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient-primary tracking-tight mb-5 uppercase">
              {personalInfo.title}
            </h2>

            {/* Supporting Headline */}
            <p className="text-base sm:text-lg md:text-xl font-normal text-slate-700 dark:text-slate-300 tracking-tight max-w-2xl mb-6 leading-relaxed">
              {personalInfo.supportingHeadline}
            </p>

            {/* Short Editorial Introduction */}
            <div className="max-w-2xl mb-8">
              <blockquote className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal bg-white dark:bg-obsidian-900/50 border-l-4 border-accent dark:border-accent-dark pl-4 py-3 rounded-r-lg shadow-2xs border border-slate-200/80 dark:border-white/5">
                "{personalInfo.bio}"
              </blockquote>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-obsidian-950 font-bold text-xs tracking-widest uppercase hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-glow-blue group"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white dark:bg-obsidian-850 border border-slate-300 dark:border-white/15 text-slate-800 dark:text-slate-200 font-bold text-xs tracking-widest uppercase hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:text-slate-950 dark:hover:text-white transition-all duration-300 shadow-2xs group"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenBrief}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-50 dark:bg-accent-dark/10 border border-blue-200 dark:border-accent-dark/20 text-accent dark:text-accent-dark font-bold text-xs tracking-widest uppercase hover:bg-blue-100 dark:hover:bg-accent-dark/20 transition-all shadow-2xs group"
              >
                <FileText className="w-4 h-4" />
                <span>1-PAGE BRIEF</span>
              </button>
            </div>

            {/* Core Positioning Bar */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] max-w-2xl">
              <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2 font-semibold">
                Core Career Positioning
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono font-bold text-slate-800 dark:text-slate-300">
                <span className="px-2 py-0.5 rounded bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-2xs">PRODUCT</span>
                <span className="text-accent dark:text-accent-dark">×</span>
                <span className="px-2 py-0.5 rounded bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-2xs">STRATEGY</span>
                <span className="text-accent dark:text-accent-dark">×</span>
                <span className="px-2 py-0.5 rounded bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-2xs">TECHNOLOGY</span>
                <span className="text-accent dark:text-accent-dark">×</span>
                <span className="px-2 py-0.5 rounded bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-2xs">DATA</span>
                <span className="text-accent dark:text-accent-dark">×</span>
                <span className="px-2 py-0.5 rounded bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-2xs">GLOBAL</span>
              </div>
            </div>

          </div>

          {/* Right Column: Executive Framed Portrait Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative background aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Framed Card */}
              <div className="relative rounded-3xl bg-white dark:bg-obsidian-850 p-3.5 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden">
                
                {/* Portrait Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900">
                  <img
                    src="/ayush-chatterjee.png"
                    alt="Ayush Chatterjee - MBA, Product & Strategy Professional"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Vignette at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"></div>

                  {/* Overlaid Bottom Details */}
                  <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wide mb-1 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Open to Product & Strategy Roles</span>
                    </div>
                    <div className="text-white font-display font-bold text-lg leading-tight uppercase">
                      Ayush Chatterjee
                    </div>
                    <div className="text-slate-300 text-xs font-mono">
                      MBA &bull; IT & International Business
                    </div>
                  </div>
                </div>

                {/* Card Footer Quick Highlights */}
                <div className="pt-3.5 pb-1 px-1 grid grid-cols-2 gap-2 text-left text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200 dark:border-white/5">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Location Scope</div>
                    <div className="font-bold text-slate-900 dark:text-white truncate">India &rarr; Global</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200 dark:border-white/5">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Primary Track</div>
                    <div className="font-bold text-accent dark:text-accent-dark truncate">Product Strategy</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
