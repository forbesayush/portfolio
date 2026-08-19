import React from 'react';
import { ArrowUp, Globe2, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-obsidian-950 border-t border-slate-200 dark:border-white/[0.08] py-12 text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/[0.06]">
          
          {/* Left Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-obsidian-850 border border-slate-800 dark:border-white/10 flex items-center justify-center font-display font-bold text-xs text-white shadow-sm">
              AC
            </div>
            <div>
              <div className="font-display font-bold text-sm tracking-wider text-slate-950 dark:text-white uppercase">
                {personalInfo.name}
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                MBA &bull; Product Management & Strategy Professional
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-semibold">
            <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-white transition-colors">ABOUT</a>
            <span className="text-slate-300 dark:text-slate-700">&bull;</span>
            <a href="#experience" className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-white transition-colors">EXPERIENCE</a>
            <span className="text-slate-300 dark:text-slate-700">&bull;</span>
            <a href="#case-studies" className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-white transition-colors">CASE STUDIES</a>
            <span className="text-slate-300 dark:text-slate-700">&bull;</span>
            <a href="#strategy" className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-white transition-colors">STRATEGY</a>
            <span className="text-slate-300 dark:text-slate-700">&bull;</span>
            <a href="#product" className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-white transition-colors">PRODUCT</a>
            <span className="text-slate-300 dark:text-slate-700">&bull;</span>
            <a href="#global" className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-white transition-colors">GLOBAL</a>
            <span className="text-slate-300 dark:text-slate-700">&bull;</span>
            <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-white transition-colors">CONTACT</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-accent-dark/40 transition-all shadow-2xs"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Ayush Chatterjee. All verified rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Portfolio: {personalInfo.portfolioDomain}</span>
            <span>&bull;</span>
            <span>Target: India &rarr; Global Markets</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
