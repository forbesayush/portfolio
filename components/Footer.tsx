'use client';
import { motion } from 'framer-motion';
import { PERSONAL } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="font-mono font-bold text-lg text-white">AC<span className="text-cyan-400">.</span></div>
          <span className="text-zinc-600 text-sm font-mono">© 2026 Ayush Chatterjee</span>
        </div>
        <div className="font-mono text-xs text-zinc-700 text-center">
          Built with precision · Next.js · Framer Motion · Deployed on GitHub Pages
        </div>
        <div className="flex gap-5 text-zinc-600 text-sm font-mono">
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <span>·</span>
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <span>·</span>
          <a href={`mailto:${PERSONAL.email}`} className="hover:text-cyan-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
