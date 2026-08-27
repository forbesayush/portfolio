"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, AdaptiveDpr, Preload } from "@react-three/drei";
import * as THREE from "three";

interface Jacket3DProps {
  color?: string;
}

function JacketMesh({ color = "#ff4500" }: Jacket3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const collarRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.25;
    }
  });

  return (
    <group ref={groupRef} scale={1.25}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Main Puffer Jacket Torso Geometry */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <cylinderGeometry args={[1.3, 1.5, 2.8, 32, 16]} />
          <MeshDistortMaterial
            color={color}
            roughness={0.2}
            metalness={0.1}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
            distort={0.15}
            speed={1.5}
          />
        </mesh>

        {/* High Puffer Collar */}
        <mesh ref={collarRef} position={[0, 1.6, 0]}>
          <torusGeometry args={[1.2, 0.35, 16, 32]} />
          <meshStandardMaterial color={color === "#ff4500" ? "#111" : "#ff4500"} roughness={0.3} />
        </mesh>

        {/* Left Sleeve */}
        <mesh position={[-1.7, 0.4, 0]} rotation={[0, 0, 0.25]}>
          <capsuleGeometry args={[0.45, 2.0, 16, 32]} />
          <meshStandardMaterial color={color} roughness={0.25} metalness={0.1} />
        </mesh>

        {/* Right Sleeve */}
        <mesh position={[1.7, 0.4, 0]} rotation={[0, 0, -0.25]}>
          <capsuleGeometry args={[0.45, 2.0, 16, 32]} />
          <meshStandardMaterial color={color} roughness={0.25} metalness={0.1} />
        </mesh>

        {/* Metallic Zipper Center Strip */}
        <mesh position={[0, 0, 1.35]}>
          <boxGeometry args={[0.1, 2.6, 0.05]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Holographic Brand Patch */}
        <mesh position={[-0.6, 0.6, 1.38]}>
          <boxGeometry args={[0.4, 0.3, 0.02]} />
          <meshStandardMaterial color="#38bdf8" roughness={0.1} metalness={0.8} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Jacket3DCanvas({ color = "#ff4500" }: Jacket3DProps) {
  return (
    <div className="w-full h-[500px] md:h-[650px] relative">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{ powerPreference: "high-performance", antialias: true }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={2.0} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={1.5} color={color} />
        <pointLight position={[5, 10, -5]} intensity={1.0} color="#38bdf8" />
        <JacketMesh color={color} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.5} />
        <Preload all />
      </Canvas>
    </div>
  );
}
