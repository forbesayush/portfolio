"use client";

import React from "react";

const SPECS = [
  {
    title: "GORE-TEX® 3L Membrane",
    metric: "28,000mm Waterproof",
    description: "Impermeable outer shell tested in extreme sub-zero alpine storm conditions."
  },
  {
    title: "800-Fill Goose Down",
    metric: "RDS Certified Ethics",
    description: "Maximum warmth-to-weight thermal insulation ratio for extreme climate retention."
  },
  {
    title: "Encrypted NFC Chip",
    metric: "Blockchain Verified",
    description: "Embedded smart tag in sleeve patch authenticating item serial number and drop edition."
  },
  {
    title: "YKK® AquaGuard® Zips",
    metric: "Tactical Matte Black",
    description: "Fully sealed polyurethane-laminated zippers guaranteeing zero water entry."
  }
];

export default function ProductSpecs() {
  return (
    <section id="specs" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest text-orange-500 font-mono mb-2 block">
          ENGINEERING ARCHITECTURE
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Built For The Extreme Elements.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SPECS.map((s, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-orange-500/40 transition-colors group"
          >
            <span className="text-xs font-mono text-orange-400 mb-3 block">{s.metric}</span>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
              {s.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
