import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, FileText, ArrowUp, Sun, Moon, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function QuickActionsDock({ isDark, onToggleTheme, onOpenBrief }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(personalInfo.email);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = personalInfo.email;
      document.body.appendChild(textarea);
      textarea.select();
      try { document.execCommand('copy'); } catch(e) {}
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, delay: 0.2 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 dark:bg-[#0E1015]/90 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.12] shadow-dock-light dark:shadow-dock-dark transition-colors"
    >
      
      {/* 1-Page Brief Button */}
      <button
        onClick={onOpenBrief}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.05] text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white text-xs font-mono font-medium transition-all"
        title="Open 1-Page Executive Brief"
      >
        <FileText className="w-3.5 h-3.5 text-linear-brand dark:text-linear-accent" />
        <span className="hidden sm:inline">1P Brief</span>
      </button>

      {/* Download CV Action */}
      <a
        href="/Ayush_Chatterjee_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.05] text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white text-xs font-mono font-medium transition-all"
        title="Download Official CV"
      >
        <Download className="w-3.5 h-3.5 text-zinc-400" />
        <span className="hidden sm:inline">CV</span>
      </a>

      {/* Copy Email Button */}
      <button
        onClick={copyEmail}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full linear-btn-primary text-xs font-mono font-medium transition-all"
        title="Copy direct email address"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
        <span>{copied ? 'Copied!' : 'Copy Email'}</span>
      </button>

      {/* Theme Toggle */}
      <button
        onClick={onToggleTheme}
        className="p-1.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
      </button>

      {/* Scroll Top Button */}
      <button
        onClick={scrollToTop}
        className="p-1.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
        title="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </motion.div>
  );
}
