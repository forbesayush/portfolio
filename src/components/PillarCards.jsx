import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, ShoppingBag, BarChart3, ArrowUpRight, Sparkles } from 'lucide-react';
import { marketingPillars } from '../data/portfolioData';

const pillarIcons = {
  performance: TrendingUp,
  brand: Target,
  d2c: ShoppingBag,
  analytics: BarChart3
};

export default function PillarCards() {
  return (
    <section className="py-24 relative bg-black border-t border-b border-white/10 text-cream overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 text-left"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cream/60 uppercase mb-3 font-semibold">
            <span className="w-2 h-[2px] bg-cream"></span>
            <span>Section 04 &bull; Core Marketing Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-hn font-bold text-cream tracking-tight uppercase leading-tight mb-4">
            The Modern Growth Stack.
          </h2>
          <p className="text-base sm:text-lg text-cream/70 leading-relaxed font-normal">
            Four interconnected growth disciplines engineered to take digital brands from ambiguous customer acquisition to scalable, profitable market dominance.
          </p>
        </motion.div>

        {/* 4 Pillar Cards Grid with Staggered Sliding Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {marketingPillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.id] || TrendingUp;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-2xl bg-[#141414] border border-white/15 hover:border-white/30 transition-all group flex flex-col justify-between relative overflow-hidden shadow-xl"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cream">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-cream/50 tracking-widest uppercase font-medium">
                      PILLAR 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-hn font-bold text-cream uppercase tracking-tight mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] font-mono font-bold text-cream/70 mb-3 tracking-wide uppercase">
                    {pillar.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-cream/70 leading-relaxed font-normal mb-5">
                    {pillar.description}
                  </p>
                </div>

                {/* Capabilities List */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[10px] font-mono tracking-widest text-cream/50 uppercase mb-2.5 font-medium">
                    Tactics & Methods
                  </div>
                  <div className="space-y-1.5">
                    {pillar.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[11px] text-cream/80 font-normal"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cream/70 shrink-0"></span>
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
