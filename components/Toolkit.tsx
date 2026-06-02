'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TOOLKIT, CERTIFICATIONS } from '@/lib/data';

const CATEGORIES = ['All', 'Analytics', 'Design', 'PM Tools', 'Methodology', 'Research', 'Tech'];

export default function Toolkit() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? TOOLKIT : TOOLKIT.filter(t => t.category === activeCategory);

  return (
    <section id="toolkit" className="py-[140px] md:py-[180px] px-6 md:px-20 border-t border-white/5 w-full flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3 text-center"
        >04 // Toolkit</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4 text-center"
        >
          Tools &amp; Methods
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed text-center"
        >
          The full stack of tools, frameworks, and methodologies I deploy across every pipeline stage.
        </motion.p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center justify-center px-4 py-2 text-xs font-mono rounded-full border transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 border-cyan-500/60 text-cyan-400'
                  : 'border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto">

        {/* Tool grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-y-6 gap-x-4 mb-20">
          {filtered.map((tool, i) => (
            <motion.div
              key={tool.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass rounded-2xl p-5 cursor-default group flex flex-col items-center text-center"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{tool.emoji}</div>
              <div className="text-white text-sm font-medium mb-1">{tool.name}</div>
              <div className="text-zinc-600 text-xs font-mono group-hover:text-cyan-400 transition-colors">{tool.category}</div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-8 text-center"
          >
            Certifications
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="glass rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: cert.provider === 'IBM' ? 'rgba(59,130,246,0.15)' : cert.provider === 'Google' ? 'rgba(16,185,129,0.15)' : 'rgba(139,92,246,0.15)' }}>
                  {cert.provider === 'IBM' ? '🔵' : cert.provider === 'Google' ? '🟢' : cert.provider === 'Coursera' ? '🟠' : '🟣'}
                </div>
                <div>
                  <div className="text-white text-sm font-medium leading-snug mb-1">{cert.title}</div>
                  <div className="text-zinc-500 text-xs font-mono">{cert.provider} · {cert.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
