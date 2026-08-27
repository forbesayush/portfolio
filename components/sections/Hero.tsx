"use client";

import dynamic from "next/dynamic";
import SplitReveal from "@/components/motion/SplitReveal";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { PROFILE_CONTENT } from "@/lib/content";

const DecisionCoreScene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-neutral-950" />,
});

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { person } = PROFILE_CONTENT;

  useGSAP(
    () => {
      gsap.to(".hero-text", {
        yPercent: -20,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-neutral-950 text-neutral-100"
    >
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        <DecisionCoreScene />
      </div>

      {/* Gradient Overlay for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950 pointer-events-none" />

      {/* Hero Content Layer */}
      <div className="hero-text relative z-20 flex flex-col items-center px-4 md:px-8 text-center">
        <SplitReveal
          as="h1"
          text={person.brandName}
          className="font-display text-[18vw] md:text-[14vw] leading-[0.8] tracking-tighter"
          delay={0.2}
        />
        <SplitReveal
          as="p"
          text={person.role}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-sky-400 font-mono mt-4"
          delay={0.5}
        />
        <SplitReveal
          text={person.tagline}
          className="text-xl md:text-3xl font-light text-neutral-300 leading-tight mt-6 max-w-4xl"
          delay={0.8}
        />

        <div className="mt-12 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-neutral-500">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
