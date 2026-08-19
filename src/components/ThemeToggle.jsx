import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-xl border transition-all duration-300 flex items-center justify-center focus:outline-none bg-white dark:bg-obsidian-850 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent shadow-sm"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700" />
      )}
    </button>
  );
}
