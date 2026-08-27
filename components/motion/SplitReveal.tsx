"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface SplitRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export default function SplitReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "div",
}: SplitRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      gsap.set(containerRef.current, { autoAlpha: 1 });

      gsap.from(".reveal-word", {
        yPercent: 120,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.04,
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  const Component = Tag as any;

  return (
    <Component
      ref={containerRef as any}
      className={`split-reveal overflow-hidden ${className}`}
      style={{ opacity: 0 }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] mr-[0.25em]">
          <span className="reveal-word inline-block">{word}</span>
        </span>
      ))}
    </Component>
  );
}
