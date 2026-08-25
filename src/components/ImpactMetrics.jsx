import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { impactNumbers } from '../data/portfolioData';
import { TrendingUp, ShieldCheck, Zap, BarChart3, Award, Sparkles, CheckCircle2 } from 'lucide-react';

function CounterItem({ item, index, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = item.num;
    const duration = 1000;
    const increment = end / (duration / 25);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [inView, item.num]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-6 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/[0.08] dark:border-white/[0.08] transition-all duration-200 group flex flex-col justify-between overflow-hidden linear-card text-left"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium">
            METRIC #{String(index + 1).padStart(2, '0')}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span>
        </div>

        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-zinc-950 dark:text-white">
            {inView ? count : 0}
          </span>
          <span className="text-2xl sm:text-3xl font-display font-semibold text-zinc-600 dark:text-zinc-400">
            {item.suffix}
          </span>
        </div>

        <h3 className="text-sm font-display font-semibold uppercase tracking-tight text-zinc-900 dark:text-zinc-200 mb-2 leading-snug">
          {item.label}
        </h3>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-normal leading-relaxed pt-3 border-t border-black/[0.04] dark:border-white/[0.06]">
        {item.sub}
      </p>
    </motion.div>
  );
}

export default function ImpactMetrics() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section ref={containerRef} className="py-24 relative bg-[#FAFAFA] dark:bg-[#08090A] border-t border-b border-black/[0.06] dark:border-white/[0.08] overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-500 uppercase mb-3 font-semibold">
              <span className="w-2 h-[2px] bg-rose-500"></span>
              <span>Section 03 &bull; Marketing ROI & Performance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-950 dark:text-white tracking-tight uppercase leading-tight">
              Verified Marketing Outcomes.
            </h2>
          </div>
          <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-2 bg-rose-500/10 px-3.5 py-2 rounded-xl border border-rose-500/20 shrink-0 font-medium">
            <ShieldCheck className="w-4 h-4 text-rose-500" />
            <span className="text-rose-600 dark:text-rose-400 font-semibold">Verified Marketing & D2C Telemetry</span>
          </div>
        </div>

        {/* 7 Impact Metrics Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {impactNumbers.slice(0, 4).map((item, idx) => (
            <CounterItem key={idx} item={item} index={idx} inView={isInView} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {impactNumbers.slice(4).map((item, idx) => (
            <CounterItem key={idx + 4} item={item} index={idx + 4} inView={isInView} />
          ))}
        </div>

      </div>
    </section>
  );
}
