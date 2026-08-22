import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroSceneProps {
  scrollProgress?: number;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ scrollProgress = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 18;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x0a0f1d, 1);
    container.appendChild(renderer.domElement);

    // 1. Subtle, elegant ambient glowing particles
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const terracottaColor = new THREE.Color(0xe07a5f);
    const softBlueColor = new THREE.Color(0x38bdf8);
    const slateColor = new THREE.Color(0x64748b);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Wide spread across the whole screen space
      positions[i3] = (Math.random() - 0.5) * 45;
      positions[i3 + 1] = (Math.random() - 0.5) * 35;
      positions[i3 + 2] = (Math.random() - 0.5) * 20 - 2;

      scales[i] = Math.random() * 0.8 + 0.2;

      // Color distribution: mostly subtle soft blue & slate, occasional warm terracotta highlight
      const rand = Math.random();
      let col: THREE.Color;
      if (rand < 0.2) {
        col = terracottaColor.clone().multiplyScalar(0.7);
      } else if (rand < 0.6) {
        col = softBlueColor.clone().multiplyScalar(0.6);
      } else {
        col = slateColor.clone().multiplyScalar(0.5);
      }

      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleTexture = createGlowTexture();
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 2. Gentle ambient glow plane in background (warm + blue blend)
    const ambientLightGroup = new THREE.Group();
    scene.add(ambientLightGroup);

    // Event Listeners
    let isTicking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (isTicking) return;
      isTicking = true;
      requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        mouseRef.current.targetX = x * 0.4;
        mouseRef.current.targetY = y * 0.4;
        isTicking = false;
      });
    };

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Animation Loop with Visibility Gating
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Pause rendering when scrolled past hero section or tab hidden
      if (document.hidden || scrollRef.current > 0.5) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      // Gentle floating motion for the particle dust
      particleSystem.rotation.y = elapsedTime * 0.02 + mouseRef.current.x * 0.15;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.015) * 0.05 + mouseRef.current.y * 0.1;

      // Subtle parallax on camera
      camera.position.x = mouseRef.current.x * 1.5;
      camera.position.y = mouseRef.current.y * 1.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

// Canvas-generated radial glow sprite texture
function createGlowTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(224, 122, 95, 0.8)');
  gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.3)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}
