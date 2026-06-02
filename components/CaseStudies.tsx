'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '@/lib/data';

function useCountUp(target: number, duration = 1500, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return value;
}

function MetricCard({ value, suffix, label, color, trigger }: {
  value: number; suffix: string; label: string; color: string; trigger: boolean;
}) {
  const count = useCountUp(value, 1500, trigger);
  return (
    <div className="text-center p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
      <div className="text-3xl font-semibold mb-1" style={{ color }}>
        {count}{suffix}
      </div>
      <div className="text-zinc-500 text-xs">{label}</div>
    </div>
  );
}

function CaseCard({ study }: { study: typeof CASE_STUDIES[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateX: 20, y: 40 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-3xl overflow-hidden"
    >
      {/* Header bar */}
      <div className="h-1.5 w-full" style={{ background: `linear-gradient(to right, ${study.color}, ${study.color}80)` }} />
      <div className="p-8 md:p-10 flex flex-col items-center text-center">
        {/* Type badge */}
        <div className="inline-block text-xs font-mono px-3 py-1 rounded-full border mb-5 mx-auto"
          style={{ color: study.color, borderColor: study.color + '40', background: study.color + '10' }}>
          {study.type}
        </div>
        <div className="flex flex-col items-center gap-2 mb-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1 text-center">{study.title}</h3>
          <div className="font-mono text-sm" style={{ color: study.color }}>{study.company}</div>
          <div className="font-mono text-xs text-zinc-500 px-3 py-1.5 border border-white/10 rounded-full w-max mt-1">
            {study.period}
          </div>
        </div>

        {/* Problem & Approach */}
        <div className="flex flex-col gap-6 mb-8 max-w-3xl w-full text-center">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 text-center">Problem</div>
            <p className="text-zinc-400 text-sm leading-relaxed text-center">{study.problem}</p>
          </div>
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 text-center">Approach</div>
            <p className="text-zinc-400 text-sm leading-relaxed text-center">{study.approach}</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 w-full">
          {study.metrics.map((m, i) => (
            <MetricCard key={i} value={m.value} suffix={m.suffix} label={m.label} color={study.color} trigger={visible} />
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {study.tags.map((t, i) => (
            <span key={i} className="text-xs font-mono text-zinc-500 px-2.5 py-1 border border-white/5 rounded-lg hover:border-white/20 hover:text-zinc-400 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="py-44 md:py-52 px-6 md:px-20 border-t border-white/5 w-full flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3 text-center"
        >03 // Work</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4 text-center"
        >
          Case Studies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-zinc-400 max-w-xl mx-auto mb-16 leading-relaxed text-center"
        >
          Real products, real data, real outcomes — each case study follows the same pipeline framework.
        </motion.p>
      </div>
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col gap-12 md:gap-16">
          {CASE_STUDIES.map((study) => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
