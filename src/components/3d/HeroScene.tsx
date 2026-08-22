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

    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 22;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x0a0f1d, 1);
    container.appendChild(renderer.domElement);

    // 1. Lightweight Particle Vortex (GPU-rotated, 0 CPU buffer mutation)
    const particleCount = 500;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const accentColor = new THREE.Color(0x38bdf8);
    const azureColor = new THREE.Color(0x60a5fa);
    const warmAccentColor = new THREE.Color(0xe07a5f);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 5 + Math.random() * 16;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.75
        ? accentColor.clone().lerp(warmAccentColor, 0.35)
        : azureColor.clone().lerp(accentColor, Math.random());

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleTexture = createGlowTexture();
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 2. Central Torus Knot Geometry (Optimized low-poly wireframe)
    const coreGeometry = new THREE.TorusKnotGeometry(3.8, 0.9, 64, 16, 2, 3);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.LineSegments(coreWireframe, coreMaterial);
    scene.add(coreMesh);

    // 3. Inner Icosahedron
    const innerSphereGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    scene.add(innerSphere);

    // Passive mouse movement with ticking
    let isTicking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (isTicking) return;
      isTicking = true;
      requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -((e.clientY / window.innerHeight) * 2 - 1);
        mouseRef.current.targetX = x;
        mouseRef.current.targetY = y;
        isTicking = false;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Render loop with visibility optimization
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let isVisible = true;

    // Pause when document is hidden or scrolled far down
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Skip render if tab is hidden or scrolled far beyond hero
      if (!isVisible || scrollRef.current > 0.6) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const scroll = scrollRef.current;

      // GPU-based object transforms (0 CPU buffer updates)
      coreMesh.rotation.x = elapsedTime * 0.12 + my * 0.3;
      coreMesh.rotation.y = elapsedTime * 0.18 + mx * 0.3;

      innerSphere.rotation.x = -elapsedTime * 0.15;
      innerSphere.rotation.y = -elapsedTime * 0.2;

      particleSystem.rotation.y = elapsedTime * 0.05 + mx * 0.15;
      particleSystem.rotation.x = my * 0.15;

      camera.position.x = mx * 1.5;
      camera.position.y = my * 1.5 - scroll * 4;
      camera.lookAt(0, -scroll * 2, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerSphereGeo.dispose();
      innerSphereMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

function createGlowTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(56, 189, 248, 0.8)');
    gradient.addColorStop(0.7, 'rgba(56, 189, 248, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
  }
  return new THREE.CanvasTexture(canvas);
}

