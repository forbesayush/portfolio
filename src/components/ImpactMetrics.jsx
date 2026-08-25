import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { impactNumbers } from '../data/portfolioData';
import { ShieldCheck, TrendingUp, Zap, Sparkles, ArrowRight } from 'lucide-react';

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
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative p-6 rounded-2xl bg-[#0E1015] border border-white/10 hover:border-white/20 transition-colors group flex flex-col justify-between overflow-hidden text-left"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-mono text-cream/50 uppercase tracking-wider font-medium">
            METRIC #{String(index + 1).padStart(2, '0')}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>

        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl sm:text-5xl font-hn font-bold tracking-tight text-cream">
            {inView ? count : 0}
          </span>
          <span className="text-2xl sm:text-3xl font-hn font-semibold text-cream/60">
            {item.suffix}
          </span>
        </div>

        <h3 className="text-sm font-hn font-semibold uppercase tracking-tight text-cream mb-2 leading-snug">
          {item.label}
        </h3>
      </div>

      <p className="text-xs text-cream/60 font-normal leading-relaxed pt-3 border-t border-white/5">
        {item.sub}
      </p>
    </motion.div>
  );
}

export default function ImpactMetrics() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  const tickerItems = [
    "35% MIS ACCELERATION",
    "66% GTM ADOPTION",
    "22% UX DEFECT CUT",
    "15% TASK FLOW SPEED",
    "5 GLOBAL STOREFRONTS",
    "3.4X CAC:LTV RATIO",
    "+24% D2C AOV LIFT",
    "17% REPEAT DEFICIT RESOLVED"
  ];

  return (
    <section ref={containerRef} className="py-24 relative bg-black border-t border-b border-white/10 overflow-hidden text-cream">
      
      {/* 1. Continuous Sliding Metric Marquee Ticker */}
      <div className="mb-14 border-y border-white/10 py-3 bg-white/[0.02] overflow-hidden">
        <div className="marquee flex w-max whitespace-nowrap text-xs font-mono font-bold tracking-[0.2em] text-cream/70">
          <div className="flex items-center gap-8 pr-8">
            {tickerItems.map((tick, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cream/40"></span>
                <span>{tick}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-8 pr-8">
            {tickerItems.map((tick, i) => (
              <span key={`dup-${i}`} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cream/40"></span>
                <span>{tick}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 text-left"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cream/60 uppercase mb-3 font-semibold">
              <span className="w-2 h-[2px] bg-cream"></span>
              <span>Section 03 &bull; Marketing ROI & Performance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-hn font-bold text-cream tracking-tight uppercase leading-tight">
              Verified Marketing Outcomes.
            </h2>
          </div>
          <div className="text-xs font-mono text-cream flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10 shrink-0 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Telemetry</span>
          </div>
        </motion.div>

        {/* 7 Impact Metrics Bento Grid with Sliding Entrances */}
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
