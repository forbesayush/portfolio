import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin, Sparkles, CheckCircle2, Award, Globe2, FileText, Download, Zap, ChevronRight, TrendingUp, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenBrief }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#FAFAFA] dark:bg-[#08090A] transition-colors duration-300">
      
      {/* Dynamic Ambient Marketing Spotlight Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-rose-500/15 via-purple-500/10 to-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Left Column: Marketing Positioning & Headline (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Marketing Pill Badges */}
            <motion.div variants={itemVariants} className="inline-flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-mono tracking-wide shadow-2xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>{personalInfo.educationBadge}</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-zinc-600 dark:text-zinc-400 text-xs font-mono tracking-wide">
                <span>{personalInfo.focusBadge}</span>
              </div>
            </motion.div>

            {/* Main Marketing Header */}
            <motion.div variants={itemVariants} className="space-y-1">
              <div className="text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
                Marketing & Growth Portfolio
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-zinc-950 dark:text-white uppercase leading-[1.05]">
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Headline with Marketing Gradient */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient-marketing tracking-tight uppercase">
                {personalInfo.title}
              </h2>
            </motion.div>

            {/* Supporting Headline */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl font-normal text-zinc-600 dark:text-zinc-300 tracking-tight max-w-2xl leading-relaxed">
              {personalInfo.supportingHeadline}
            </motion.p>

            {/* Editorial Consumer Psychology Quote */}
            <motion.div variants={itemVariants} className="max-w-2xl">
              <blockquote className="relative text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal bg-black/[0.02] dark:bg-white/[0.03] border-l-2 border-rose-500 pl-4 pr-4 py-3 rounded-r-xl border-y border-r border-black/[0.06] dark:border-white/[0.06]">
                "{personalInfo.bio}"
              </blockquote>
            </motion.div>

            {/* Marketing Action CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg marketing-btn-primary font-mono font-semibold text-xs tracking-wider uppercase shadow-glow-coral"
              >
                <span>EXPLORE CAMPAIGNS</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#funnel"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-black/[0.05] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-zinc-900 dark:text-zinc-100 border border-black/[0.08] dark:border-white/[0.1] font-mono font-semibold text-xs tracking-wider uppercase transition-all shadow-xs"
              >
                <span>GROWTH FUNNEL</span>
                <TrendingUp className="w-3.5 h-3.5 text-rose-500" />
              </a>

              <a
                href="/Ayush_Chatterjee_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-zinc-700 dark:text-zinc-300 border border-black/[0.06] dark:border-white/[0.08] font-mono font-medium text-xs tracking-wider uppercase transition-all"
                title="Download Official CV"
              >
                <Download className="w-3.5 h-3.5 text-zinc-400" />
                <span>MARKETING CV</span>
              </a>

              <button
                onClick={onOpenBrief}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-zinc-700 dark:text-zinc-300 border border-black/[0.06] dark:border-white/[0.08] font-mono font-medium text-xs tracking-wider uppercase transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-400" />
                <span>1P BRIEF</span>
              </button>
            </motion.div>

            {/* Core Marketing Equation */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] max-w-2xl">
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-2 font-medium">
                Core Growth Engine
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                <span className="px-2.5 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 font-bold">ACQUISITION (CAC)</span>
                <span className="text-zinc-400">&plus;</span>
                <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 font-bold">CONVERSION (CRO)</span>
                <span className="text-zinc-400">&plus;</span>
                <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-bold">LIFECYCLE (LTV)</span>
                <span className="text-zinc-400">&equals;</span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">PROFITABLE SCALE</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Executive Framed Portrait Card (5 Cols) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Main Framed Matte Card */}
              <div className="relative rounded-2xl bg-white dark:bg-[#0E1015] p-3 border border-black/[0.08] dark:border-white/[0.08] shadow-card-light dark:shadow-card-dark linear-card">
                
                {/* Portrait Image Container */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-zinc-950">
                  <img
                    src="/ayush-chatterjee.png"
                    alt="Ayush Chatterjee - MBA, Marketing & Growth Strategist"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  
                  {/* Bottom Vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                  {/* Overlaid Bottom Details */}
                  <div className="absolute inset-x-0 bottom-0 p-4 text-left space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-zinc-200 text-[11px] font-mono tracking-wide mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                      <span>Open to Growth & Marketing Roles</span>
                    </div>
                    <div className="text-white font-display font-bold text-lg leading-tight uppercase tracking-tight">
                      Ayush Chatterjee
                    </div>
                    <div className="text-zinc-400 text-xs font-mono">
                      MBA &bull; Marketing, IT & International Business
                    </div>
                  </div>
                </div>

                {/* Card Footer Quick Highlights */}
                <div className="pt-3 pb-1 px-1 grid grid-cols-2 gap-2 text-left text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06]">
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase font-medium">
                      Location Scope
                    </div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100 truncate text-xs mt-0.5">India &rarr; Global Markets</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06]">
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase font-medium">
                      Core Specialization
                    </div>
                    <div className="font-semibold text-rose-500 truncate text-xs mt-0.5">Growth & D2C Strategy</div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
