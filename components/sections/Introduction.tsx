"use client";

import React from "react";
import { PROFILE_CONTENT } from "@/lib/content";
import SplitReveal from "@/components/motion/SplitReveal";

export default function Introduction() {
  const { person } = PROFILE_CONTENT;

  return (
    <section className="relative w-full bg-neutral-950 text-neutral-100 py-32 md:py-48 px-4 md:px-8 z-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SplitReveal
          as="h2"
          text="I work where data meets decisions."
          className="font-display text-4xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight font-medium"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-12 max-w-4xl">
          <div className="text-neutral-400">
            <SplitReveal
              text={person.summary}
              className="text-lg md:text-xl font-body leading-relaxed"
            />
          </div>

          <div className="flex flex-col gap-4 border-l-2 border-sky-400/40 pl-6 mt-4 md:mt-0">
            <SplitReveal text="Product Research" className="text-sm font-mono uppercase tracking-widest text-sky-400" delay={0.1} />
            <SplitReveal text="Business Analytics" className="text-sm font-mono uppercase tracking-widest text-sky-400" delay={0.15} />
            <SplitReveal text="Strategic Roadmapping" className="text-sm font-mono uppercase tracking-widest text-sky-400" delay={0.2} />
            <SplitReveal text="Technology Solutions" className="text-sm font-mono uppercase tracking-widest text-sky-400" delay={0.25} />
          </div>
        </div>
      </div>
    </section>
  );
}
