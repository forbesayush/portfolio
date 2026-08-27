"use client";

import React from "react";

const SPECS = [
  {
    title: "Type IIa Purity Standard",
    metric: "> 99.99% Carbon Purity",
    description: "Chemically identical to the rarest 1-2% of natural diamonds with zero nitrogen impurities."
  },
  {
    title: "IGI & GIA Certified",
    metric: "Triple Excellent Rating",
    description: "Individual serial laser inscriptions with full certificate verification for Cut, Polish & Symmetry."
  },
  {
    title: "Retail KPI & FOCO Engine",
    metric: "10% Forecast Accuracy Gain",
    description: "Ayush Chatterjee deployed retail tracking dashboards in Excel/Power BI across 5,000+ data entries."
  },
  {
    title: "100% Conflict-Free",
    metric: "Zero Footprint Synthesis",
    description: "Sustainably grown using renewable solar & wind plasma power reactors."
  }
];

export default function DiamondSpecs() {
  return (
    <section id="specs" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest text-sky-400 font-mono mb-2 block">
          OPTICAL & ANALYTICAL PRECISION
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Where Fine Craftsmanship Meets Data Intelligence.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SPECS.map((s, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-sky-500/40 transition-colors group"
          >
            <span className="text-xs font-mono text-sky-400 mb-3 block">{s.metric}</span>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
              {s.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
