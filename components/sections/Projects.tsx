"use client";

import React from "react";
import { PROFILE_CONTENT } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      <h2 className="text-xs uppercase tracking-widest text-sky-400 mb-2">Case Studies</h2>
      <h3 className="text-3xl md:text-5xl font-bold text-white mb-16">Featured Product & Data Work</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROFILE_CONTENT.projects.map((proj, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm flex flex-col justify-between hover:border-sky-500/50 transition-colors group"
          >
            <div>
              <span className="text-xs font-mono text-sky-400 mb-3 block">{proj.category}</span>
              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                {proj.title}
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">{proj.description}</p>
            </div>
            <div>
              <div className="p-3 mb-6 rounded-lg bg-sky-950/30 border border-sky-800/30 text-sky-300 text-xs font-semibold">
                Result: {proj.metric}
              </div>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
