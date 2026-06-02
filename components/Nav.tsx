'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL } from '@/lib/data';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = ['about', 'pipeline', 'work', 'toolkit', 'contact'];
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-black/70 backdrop-blur-2xl border-b border-white/5' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="font-mono font-bold text-2xl md:text-3xl text-white tracking-tight">
          AC<span className="text-cyan-400">.</span>
        </div>
        <div className="hidden md:flex items-center gap-10 md:gap-12">
          {links.map((l, i) => (
            <motion.a
              key={l}
              href={`#${l}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="text-base md:text-lg font-mono text-zinc-400 hover:text-cyan-400 transition-colors capitalize"
            >
              {l}
            </motion.a>
          ))}
        </div>
        <motion.a
          href={PERSONAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden md:inline-flex px-6 py-3 text-base md:text-lg font-mono border border-cyan-500/60 text-cyan-400 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
        >
          Hire Me ↗
        </motion.a>
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-2xl border-t border-white/5 px-6 py-6 flex flex-col gap-4"
        >
          {links.map(l => (
            <a key={l} href={`#${l}`} onClick={() => setMobileOpen(false)} className="text-base md:text-lg font-mono text-zinc-400 hover:text-cyan-400 capitalize transition-colors">
              {l}
            </a>
          ))}
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-mono text-cyan-400">Hire Me ↗</a>
        </motion.div>
      )}
    </motion.nav>
  );
}
