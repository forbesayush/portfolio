"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, PerformanceMonitor, Preload } from "@react-three/drei";
import { Suspense } from "react";
import { DecisionCore } from "./DecisionCore";
import { Rig } from "./Rig";

function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function Scene() {
  const [hasWebGL, setHasWebGL] = useState(false);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());
  }, []);

  if (!hasWebGL) {
    return <div className="fixed inset-0 pointer-events-none z-0 bg-neutral-950" aria-hidden="true" />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 35 }}
        aria-label="Decorative 3D background"
        role="img"
      >
        <PerformanceMonitor
          onIncline={() => {}}
          onDecline={() => {}}
          flipflops={3}
          onFallback={() => console.warn("WebGL perf regress — static fallback")}
        />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38bdf8" />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#f43f5e" />
          <DecisionCore />
          <Rig />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
