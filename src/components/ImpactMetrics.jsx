import React, { useState, useEffect, useRef } from 'react';
import { impactNumbers } from '../data/portfolioData';
import { TrendingUp, ShieldCheck, Zap, BarChart3, Award } from 'lucide-react';

function CounterItem({ item, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = item.num;
    const duration = 1200;
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
    <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-850/80 border border-slate-200 dark:border-white/[0.08] hover:border-accent/40 dark:hover:border-white/20 transition-all duration-300 group hover:shadow-card-hover dark:hover:shadow-card-dark flex flex-col justify-between">
      <div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl sm:text-5xl font-display font-extrabold text-slate-950 dark:text-white tracking-tight group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
            {inView ? count : 0}
          </span>
          <span className="text-2xl sm:text-3xl font-display font-bold text-accent dark:text-accent-dark">
            {item.suffix}
          </span>
        </div>
        <h3 className="text-sm font-display font-bold uppercase tracking-tight text-slate-900 dark:text-slate-200 mb-2">
          {item.label}
        </h3>
      </div>
      <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed pt-3 border-t border-slate-100 dark:border-white/[0.05]">
        {item.sub}
      </p>
    </div>
  );
}

export default function ImpactMetrics() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative bg-slate-100/70 dark:bg-obsidian-900/40 border-t border-b border-slate-200 dark:border-white/[0.08] overflow-hidden transition-colors duration-300">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/5 dark:bg-accent-dark/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent dark:text-accent-dark uppercase mb-3 font-semibold">
              <span className="w-2 h-[2px] bg-accent dark:bg-accent-dark"></span>
              Section 03 &bull; Verified Impact
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 dark:text-white tracking-tight uppercase leading-tight">
              Defensible Metrics & Proven Outcomes.
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-700 dark:text-slate-400 flex items-center gap-2 bg-white dark:bg-obsidian-850 px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 shrink-0 font-medium shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Strictly Verified Data from Live Roles</span>
          </div>
        </div>

        {/* 7 Impact Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {impactNumbers.slice(0, 4).map((item, idx) => (
            <CounterItem key={idx} item={item} inView={inView} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {impactNumbers.slice(4).map((item, idx) => (
            <CounterItem key={idx + 4} item={item} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
}
