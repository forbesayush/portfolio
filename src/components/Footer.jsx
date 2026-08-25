import React from 'react';
import { ArrowUp, Globe2, ShieldCheck, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAFAFA] dark:bg-[#08090A] border-t border-black/[0.06] dark:border-white/[0.08] py-14 text-zinc-500 dark:text-zinc-400 transition-colors duration-300 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/[0.06] dark:border-white/[0.08]">
          
          {/* Left Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-[#14171F] border border-black/10 dark:border-white/[0.12] flex items-center justify-center font-display font-bold text-xs text-white">
              <span>AC</span>
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-xs tracking-wider text-zinc-950 dark:text-white uppercase">
                {personalInfo.name}
              </div>
              <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                MBA &bull; Product Management & Strategy
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <a href="#about" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">ABOUT</a>
            <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
            <a href="#experience" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">EXPERIENCE</a>
            <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
            <a href="#case-studies" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">CASE STUDIES</a>
            <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
            <a href="#strategy" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">STRATEGY</a>
            <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
            <a href="#product" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">PRODUCT</a>
            <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
            <a href="#global" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">GLOBAL</a>
            <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
            <a href="#contact" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">CONTACT</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all group"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400 dark:text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Ayush Chatterjee. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-600 dark:text-zinc-300 font-medium">{personalInfo.portfolioDomain}</span>
            <span>&bull;</span>
            <span>India &rarr; Global Innovation Practice</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
