import React, { useEffect, useState, useRef } from 'react';
import { soundManager } from '../../audio/soundManager';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 1200,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();

          const startTime = performance.now();
          let lastTick = 0;

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentVal = Math.round(easeProgress * value);

            setDisplayValue(currentVal);

            // Subtle sound tick on key intervals (every ~20% progress)
            if (currentVal !== lastTick && currentVal % Math.max(1, Math.floor(value / 4)) === 0) {
              lastTick = currentVal;
              soundManager.playTick?.();
            }

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={containerRef} className={`inline-block tabular-nums ${className}`}>
      {prefix}
      {hasAnimated ? displayValue : value}
      {suffix}
    </span>
  );
};
