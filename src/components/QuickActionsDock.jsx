import React, { useState } from 'react';
import { Mail, Copy, Check, FileText, ArrowUp, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function QuickActionsDock({ isDark, onToggleTheme, onOpenBrief }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-1.5 rounded-full bg-white/90 dark:bg-obsidian-900/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl animate-fade-in">
      
      {/* 1-Page Brief Button */}
      <button
        onClick={onOpenBrief}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-obsidian-800 text-slate-800 dark:text-slate-200 hover:text-accent dark:hover:text-accent-dark text-xs font-mono font-semibold transition-all"
        title="Open 1-Page Executive Brief"
      >
        <FileText className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">1P Brief</span>
      </button>

      {/* Copy Email Button */}
      <button
        onClick={copyEmail}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-white hover:bg-blue-700 dark:hover:bg-accent-hover text-xs font-mono font-semibold transition-all shadow-sm"
        title="Copy direct email address"
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Email'}</span>
      </button>

      {/* Theme Toggle */}
      <button
        onClick={onToggleTheme}
        className="p-2 rounded-full bg-slate-100 dark:bg-obsidian-800 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-dark transition-all"
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
      </button>

      {/* Scroll Top Button */}
      <button
        onClick={scrollToTop}
        className="p-2 rounded-full bg-slate-100 dark:bg-obsidian-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all"
        title="Scroll to top"
      >
        <ArrowUp className="w-3.5 h-3.5" />
      </button>

    </div>
  );
}
