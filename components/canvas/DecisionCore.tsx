"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, AdaptiveDpr, Preload } from "@react-three/drei";
import * as THREE from "three";

function CoreGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t / 4) * 0.2;
      meshRef.current.rotation.y = Math.cos(t / 2) * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15;
      ringRef.current.rotation.x = Math.sin(t / 3) * 0.2;
    }
  });

  return (
    <group scale={1.3}>
      {/* Central Decision Core */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.8, 16]} />
          <MeshTransmissionMaterial
            backside
            samples={8}
            resolution={256}
            transmission={0.92}
            roughness={0.15}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
            thickness={0.8}
            chromaticAberration={0.3}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.3}
            temporalDistortion={0.1}
            color="#0f172a"
          />
        </mesh>
      </Float>

      {/* Outer Orbit Ring */}
      <group ref={ringRef}>
        <mesh>
          <torusGeometry args={[2.8, 0.012, 16, 100]} />
          <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  );
}

export default function DecisionCoreCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ powerPreference: "high-performance", antialias: true, alpha: true }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#f43f5e" />
        <CoreGeometry />
        <Preload all />
      </Canvas>
    </div>
  );
}
