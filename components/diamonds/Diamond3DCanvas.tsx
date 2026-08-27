"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshTransmissionMaterial, AdaptiveDpr, Preload } from "@react-three/drei";
import * as THREE from "three";

interface Diamond3DProps {
  metalColor?: string;
}

function DiamondMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.15;
    }
  });

  return (
    <group scale={1.35}>
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.7}>
        {/* Central Faceted Diamond Geometry */}
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.7, 3]} />
          <MeshTransmissionMaterial
            backside
            samples={16}
            resolution={512}
            transmission={0.96}
            roughness={0.05}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
            thickness={1.2}
            chromaticAberration={0.8}
            anisotropy={0.5}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.05}
            color="#ffffff"
            ior={2.42} // Exact Refractive Index of Diamond
          />
        </mesh>
      </Float>

      {/* Orbiting Halo Ring */}
      <group ref={ringRef}>
        <mesh>
          <torusGeometry args={[2.5, 0.015, 16, 100]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} wireframe />
        </mesh>
      </group>
    </group>
  );
}

export default function Diamond3DCanvas({ metalColor = "#e2e8f0" }: Diamond3DProps) {
  return (
    <div className="w-full h-[500px] md:h-[650px] relative">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{ powerPreference: "high-performance", antialias: true, alpha: true }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={2.0} color="#38bdf8" />
        <pointLight position={[5, 10, -5]} intensity={1.8} color="#e0e7ff" />
        <DiamondMesh />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.0} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.5} />
        <Preload all />
      </Canvas>
    </div>
  );
}
