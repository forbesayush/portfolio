import React, { useState } from 'react';
import { Mail, Copy, Check, FileText, ArrowUp, Sun, Moon, Download } from 'lucide-react';
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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 p-1.5 rounded-full bg-white/95 dark:bg-obsidian-900/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 shadow-2xl shadow-slate-950/15 animate-fade-in ring-1 ring-slate-900/5">
      
      {/* 1-Page Brief Button */}
      <button
        onClick={onOpenBrief}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-obsidian-800 text-slate-800 dark:text-slate-200 hover:text-accent dark:hover:text-accent-dark text-xs font-mono font-semibold transition-all hover:bg-slate-200/70 dark:hover:bg-obsidian-750"
        title="Open 1-Page Executive Brief"
      >
        <FileText className="w-3.5 h-3.5 text-accent dark:text-accent-dark" />
        <span className="hidden sm:inline">1P Brief</span>
      </button>

      {/* Download CV Action */}
      <a
        href="/Ayush_Chatterjee_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-obsidian-800 text-slate-800 dark:text-slate-200 hover:text-accent dark:hover:text-accent-dark text-xs font-mono font-semibold transition-all hover:bg-slate-200/70 dark:hover:bg-obsidian-750"
        title="Download Official CV"
      >
        <Download className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
        <span className="hidden sm:inline">CV</span>
      </a>

      {/* Copy Email Button */}
      <button
        onClick={copyEmail}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent text-white hover:bg-blue-700 dark:hover:bg-accent-hover text-xs font-mono font-semibold transition-all shadow-sm"
        title="Copy direct email address"
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        <span>{copied ? 'Copied!' : 'Copy Email'}</span>
      </button>

      {/* Theme Toggle */}
      <button
        onClick={onToggleTheme}
        className="p-2 rounded-full bg-slate-100 dark:bg-obsidian-800 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-dark transition-all hover:bg-slate-200/70"
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
      </button>

      {/* Scroll Top Button */}
      <button
        onClick={scrollToTop}
        className="p-2 rounded-full bg-slate-100 dark:bg-obsidian-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all hover:bg-slate-200/70"
        title="Scroll to top"
      >
        <ArrowUp className="w-3.5 h-3.5" />
      </button>

    </div>
  );
}
