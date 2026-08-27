"use client";

import React from "react";
import { PROFILE_CONTENT } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto z-10 relative">
      <h2 className="text-xs uppercase tracking-widest text-sky-400 mb-2">Track Record</h2>
      <h3 className="text-3xl md:text-5xl font-bold text-white mb-16">Professional Experience</h3>

      <div className="space-y-12 border-l border-neutral-800 pl-6 md:pl-10">
        {PROFILE_CONTENT.experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-neutral-700 group-hover:bg-sky-400 transition-colors" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h4 className="text-xl font-semibold text-white">
                {exp.role} <span className="text-sky-400">@ {exp.company}</span>
              </h4>
              <span className="text-sm font-mono text-neutral-500">{exp.period}</span>
            </div>
            <p className="text-xs text-neutral-400 mb-4">{exp.location}</p>
            <ul className="list-disc list-inside space-y-2 text-sm text-neutral-300">
              {exp.description.map((point, pIdx) => (
                <li key={pIdx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
