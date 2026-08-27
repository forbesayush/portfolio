"use client";

import React from "react";
import { PROFILE_CONTENT } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto z-10 relative">
      <h2 className="text-xs uppercase tracking-widest text-sky-400 mb-2">Capability Matrix</h2>
      <h3 className="text-3xl md:text-5xl font-bold text-white mb-16">Domain Expertise</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROFILE_CONTENT.skills.map((cat, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800">
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-neutral-800 pb-2">
              {cat.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s, sIdx) => (
                <span key={sIdx} className="px-3 py-1.5 rounded-lg bg-neutral-800/70 text-neutral-200 text-xs font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
