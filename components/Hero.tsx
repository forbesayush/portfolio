'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL, STATS } from '@/lib/data';

const CHARS = PERSONAL.name.split('');

function useTypewriter(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayed;
}

export default function Hero() {
  const tagline = useTypewriter(PERSONAL.tagline, 35);
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-20 pt-28 pb-10 w-full overflow-hidden">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" className="opacity-[0.03]">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#06b6d4" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center w-full relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10 md:mb-12"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
          </span>
          <span className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase">
            Open to New Opportunities — Global &amp; Remote
          </span>
        </motion.div>

        {/* Name — character stagger */}
        <h1 className="text-6xl md:text-9xl font-semibold text-white tracking-tight leading-[1.1] md:leading-[1.15] mb-8 md:mb-10 overflow-hidden text-center">
          {CHARS.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
              style={{ color: char === ' ' ? 'transparent' : (i >= 5 ? 'var(--text-hero-grey)' : 'var(--text-primary)') }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Typewriter tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-zinc-400 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-6 md:mb-8 min-h-[2rem] text-center"
        >
          {tagline}
          <span className="cursor-blink text-cyan-400 ml-0.5">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-zinc-500 text-sm font-mono mb-12 md:mb-16 text-center"
        >
          {PERSONAL.location}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-20"
        >
          <a
            href="#pipeline"
            className="group px-8 py-4 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            See the Pipeline
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 gap-2 whitespace-nowrap"
          >
            LinkedIn ↗
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10 w-full"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-semibold text-white mb-1">{s.value}</div>
              <div className="text-zinc-400 text-sm">{s.label}</div>
              <div className="text-zinc-600 text-xs font-mono mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs font-mono z-10"
      >
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
