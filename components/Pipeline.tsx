'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PIPELINE_STAGES } from '@/lib/data';

type Stage = typeof PIPELINE_STAGES[0];

function StageModal({ stage, onClose }: { stage: Stage; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [onClose]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
        className="relative glass rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        style={{ borderColor: stage.color + '30' }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
          aria-label="Close"
        >✕</button>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
            style={{ background: stage.color + '20', border: `1px solid ${stage.color}40` }}>
            {stage.emoji}
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest mb-1" style={{ color: stage.color }}>STAGE</p>
            <h3 className="text-2xl font-semibold text-white">{stage.label}</h3>
          </div>
        </div>
        <div className="space-y-4">
          {stage.artifacts.map((art, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h4 className="text-white font-medium text-sm">{art.title}</h4>
                <span className="flex-shrink-0 text-xs font-mono px-2 py-1 rounded-full"
                  style={{ color: stage.color, background: stage.color + '15' }}>
                  {art.type}
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{art.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Pipeline() {
  const [active, setActive] = useState<Stage | null>(null);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = sectionRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const scrollFraction = total > 0 ? scrolled / total : 0;
      setProgress(Math.min(1, Math.max(0, scrollFraction)));
    };
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    window.addEventListener('resize', fn);
    return () => {
      window.removeEventListener('scroll', fn);
      window.removeEventListener('resize', fn);
    };
  }, []);

  const completedCount = Math.floor(progress * PIPELINE_STAGES.length);

  return (
    <>
      <section id="pipeline" ref={sectionRef} className="py-[140px] md:py-[180px] px-6 md:px-20 border-t border-white/5 w-full flex flex-col items-center">
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3 text-center"
          >02 // Pipeline</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 text-center"
          >
            The Product Pipeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-xl mx-auto mb-16 leading-relaxed text-center"
          >
            Every product I touch passes through a rigorous six-stage pipeline — from raw insight to shipped feature to measured outcome. Click any stage to explore the artifacts.
          </motion.p>
        </div>

        <div className="max-w-7xl w-full mx-auto">

          {/* Progress bar */}
          <div className="w-full h-px bg-white/5 rounded-full mb-16 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
              style={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Pipeline nodes — desktop horizontal, mobile vertical */}
          <div className="relative">
            {/* Connector line SVG — desktop */}
            <div className="hidden md:block absolute top-6 left-6 right-6" style={{ zIndex: 0 }}>
              <svg width="100%" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                <line x1="0" y1="6" x2="100" y2="6" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <motion.line
                  x1="0" y1="6" x2="100" y2="6"
                  stroke="url(#pipeGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="100"
                  strokeDashoffset={100 - progress * 100}
                />
                <defs>
                  <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Stage nodes */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-y-8 gap-x-4 md:gap-0 relative z-10">
              {PIPELINE_STAGES.map((stage, i) => {
                const isCompleted = i < completedCount;
                const isActive = i === completedCount;
                return (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center gap-3 cursor-pointer group"
                    onClick={() => setActive(stage)}
                  >
                    {/* Node circle */}
                    <div className="relative">
                      {isActive && (
                        <div
                          className="absolute inset-0 rounded-full pulse-ring"
                          style={{ background: stage.color + '30' }}
                        />
                      )}
                      <motion.div
                        whileHover={{ scale: 1.2, y: -4 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="relative w-12 h-12 rounded-full flex items-center justify-center border-2 text-xl transition-all duration-300"
                        style={{
                          borderColor: isCompleted || isActive ? stage.color : 'rgba(255,255,255,0.1)',
                          background: isCompleted || isActive ? stage.color + '20' : 'transparent',
                          opacity: isCompleted || isActive ? 1 : 0.4,
                        }}
                      >
                        {isCompleted ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stage.color} strokeWidth="2.5">
                            <motion.path
                              d="M5 13l4 4L19 7"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.4 }}
                            />
                          </svg>
                        ) : (
                          <span>{stage.emoji}</span>
                        )}
                      </motion.div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-mono font-medium text-white group-hover:text-cyan-400 transition-colors"
                        style={{ color: isActive ? stage.color : undefined }}>
                        {stage.label}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-600 mt-0.5 group-hover:text-zinc-400 transition-colors">
                        {stage.artifacts.length} artifacts
                      </div>
                    </div>
                    {/* Click hint */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-cyan-400">
                      click to explore
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Stage detail cards — always visible below pipeline */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PIPELINE_STAGES.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setActive(stage)}
                className="glass rounded-2xl p-6 cursor-pointer group transition-all duration-300"
                style={{ borderColor: stage.color + '20' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{stage.emoji}</span>
                  <div>
                    <div className="text-white font-medium text-sm">{stage.label}</div>
                    <div className="font-mono text-[10px] tracking-widest" style={{ color: stage.color }}>
                      STAGE 0{i + 1}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {stage.artifacts.slice(0, 2).map((art, j) => (
                    <div key={j} className="text-zinc-500 text-xs flex items-start gap-2">
                      <span style={{ color: stage.color }} className="mt-0.5 flex-shrink-0">▹</span>
                      <span className="group-hover:text-zinc-400 transition-colors">{art.title}</span>
                    </div>
                  ))}
                  {stage.artifacts.length > 2 && (
                    <div className="text-xs font-mono" style={{ color: stage.color }}>
                      +{stage.artifacts.length - 2} more →
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && <StageModal stage={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}
