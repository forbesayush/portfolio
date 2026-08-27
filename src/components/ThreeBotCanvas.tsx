import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBotCanvasProps {
  cursorX: number;
  cursorY: number;
  scrollVel: number;
  isScrolled: boolean;
  petSpeed: number;
  theme?: 'dark' | 'light';
}

export const ThreeBotCanvas: React.FC<ThreeBotCanvasProps> = ({
  cursorX,
  cursorY,
  scrollVel,
  isScrolled,
  petSpeed,
  theme = 'dark',
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const botGroupRef = useRef<THREE.Group | null>(null);
  const headGroupRef = useRef<THREE.Group | null>(null);
  const leftEarRef = useRef<THREE.Mesh | null>(null);
  const rightEarRef = useRef<THREE.Mesh | null>(null);
  const tailRef = useRef<THREE.Mesh | null>(null);
  const coreLightRef = useRef<THREE.PointLight | null>(null);
  const ring1Ref = useRef<THREE.Mesh | null>(null);
  const ring2Ref = useRef<THREE.Mesh | null>(null);
  const eyeTextureRef = useRef<THREE.CanvasTexture | null>(null);
  const blinkTimerRef = useRef(0);
  const isBlinkingRef = useRef(false);
  const cursorRef = useRef({ x: cursorX, y: cursorY });

  useEffect(() => {
    cursorRef.current = { x: cursorX, y: cursorY };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;
    const isDark = theme === 'dark';

    // 1. Three.js Motion Studio Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.3, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 2. Dynamic Motion Lighting Setup
    const ambientLight = new THREE.AmbientLight(isDark ? 0xffffff : 0xfffbeb, isDark ? 2.0 : 2.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, isDark ? 5.2 : 4.8);
    keyLight.position.set(4, 7, 6);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const amberRimLight = new THREE.PointLight(0xd97706, isDark ? 12 : 9, 12);
    amberRimLight.position.set(-5, 3, 4);
    scene.add(amberRimLight);

    const violetRimLight = new THREE.PointLight(0x8b5cf6, isDark ? 10 : 7, 12);
    violetRimLight.position.set(5, -3, 3);
    scene.add(violetRimLight);

    // 3. Motion Bot Group
    const botGroup = new THREE.Group();
    botGroupRef.current = botGroup;
    scene.add(botGroup);

    // Materials
    const armorMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x18181b : 0xf5f3ef,
      metalness: isDark ? 0.88 : 0.65,
      roughness: isDark ? 0.12 : 0.10,
    });

    const satinGoldMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      emissive: 0xb45309,
      emissiveIntensity: isDark ? 0.7 : 0.4,
      metalness: 0.9,
      roughness: 0.12,
    });

    const darkTitaniumMat = new THREE.MeshStandardMaterial({
      color: 0x09090b,
      metalness: 0.92,
      roughness: 0.08,
    });

    // --- Torso ---
    const bodyGeo = new THREE.CapsuleGeometry(0.88, 0.9, 16, 32);
    const bodyMesh = new THREE.Mesh(bodyGeo, armorMat);
    bodyMesh.position.set(0, -0.1, 0);
    botGroup.add(bodyMesh);

    // Gold Accent Ring
    const waistRingGeo = new THREE.TorusGeometry(0.9, 0.055, 16, 80);
    const waistRing = new THREE.Mesh(waistRingGeo, satinGoldMat);
    waistRing.position.set(0, -0.52, 0);
    waistRing.rotation.x = Math.PI / 2;
    botGroup.add(waistRing);

    // Motion Reactor Core (Pulsing Energy Sphere)
    const coreGeo = new THREE.SphereGeometry(0.2, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xd97706,
      emissiveIntensity: isDark ? 6.0 : 4.8,
      metalness: 0.1,
      roughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0, 0.1, 0.92);
    botGroup.add(coreMesh);

    const coreLight = new THREE.PointLight(0xd97706, isDark ? 9 : 7, 4);
    coreLight.position.set(0, 0.1, 1.0);
    coreLightRef.current = coreLight;
    botGroup.add(coreLight);

    // --- Kinetic 3D Orbit Rings ---
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.022, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xd97706, transparent: true, opacity: isDark ? 0.75 : 0.55 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1Ref.current = ring1;
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.85, 0.016, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: isDark ? 0.65 : 0.45 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 5;
    ring2.rotation.x = -Math.PI / 4;
    ring2Ref.current = ring2;
    scene.add(ring2);

    // --- Head Group ---
    const headGroup = new THREE.Group();
    headGroupRef.current = headGroup;
    headGroup.position.set(0, 1.12, 0);
    botGroup.add(headGroup);

    const headGeo = new THREE.SphereGeometry(0.72, 32, 32);
    const headMesh = new THREE.Mesh(headGeo, armorMat);
    headMesh.scale.set(1, 0.92, 0.88);
    headGroup.add(headMesh);

    // Gold Crown Arch
    const crownGeo = new THREE.TorusGeometry(0.67, 0.045, 12, 60, Math.PI);
    const crownMesh = new THREE.Mesh(crownGeo, satinGoldMat);
    crownMesh.rotation.x = -Math.PI / 2;
    crownMesh.rotation.y = Math.PI;
    crownMesh.position.set(0, 0.28, 0);
    headGroup.add(crownMesh);

    // Ears
    const earGeo = new THREE.ConeGeometry(0.2, 0.5, 4);
    const leftEar = new THREE.Mesh(earGeo, armorMat);
    leftEar.position.set(-0.38, 0.72, -0.04);
    leftEar.rotation.z = -0.32;
    leftEarRef.current = leftEar;
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, armorMat);
    rightEar.position.set(0.38, 0.72, -0.04);
    rightEar.rotation.z = 0.32;
    rightEarRef.current = rightEar;
    headGroup.add(rightEar);

    const innerEarGeo = new THREE.ConeGeometry(0.08, 0.22, 4);
    const leftInnerEar = new THREE.Mesh(innerEarGeo, satinGoldMat);
    leftInnerEar.position.set(-0.43, 0.78, 0.02);
    leftInnerEar.rotation.z = -0.32;
    headGroup.add(leftInnerEar);

    const rightInnerEar = new THREE.Mesh(innerEarGeo, satinGoldMat);
    rightInnerEar.position.set(0.43, 0.78, 0.02);
    rightInnerEar.rotation.z = 0.32;
    headGroup.add(rightInnerEar);

    // --- Kinetic Animated HUD Visor Face ---
    const visorScreenGeo = new THREE.PlaneGeometry(1.0, 0.5);
    const eyeCanvas = document.createElement('canvas');
    eyeCanvas.width = 512;
    eyeCanvas.height = 256;
    const eyeCtx = eyeCanvas.getContext('2d');

    const drawEyes = (blinking: boolean, speed: number, frameTime: number) => {
      if (!eyeCtx) return;

      eyeCtx.fillStyle = isDark ? '#09090b' : '#1c1917';
      eyeCtx.fillRect(0, 0, 512, 256);

      // Kinetic Audio Visualizer Bars on top of visor
      eyeCtx.fillStyle = 'rgba(217, 119, 6, 0.3)';
      for (let i = 0; i < 16; i++) {
        const barH = Math.abs(Math.sin(frameTime * 4 + i * 0.5)) * 18 + 4;
        eyeCtx.fillRect(160 + i * 12, 24 - barH / 2, 8, barH);
      }

      const mainEyeColor = speed > 8 ? '#f59e0b' : isDark ? '#fbbf24' : '#d97706';
      const eyeGlowColor = speed > 8 ? '#fbbf24' : isDark ? '#f59e0b' : '#fbbf24';

      eyeCtx.shadowColor = eyeGlowColor;
      eyeCtx.shadowBlur = 24;
      eyeCtx.fillStyle = mainEyeColor;
      eyeCtx.strokeStyle = mainEyeColor;

      const drawSingleEye = (cx: number) => {
        if (blinking) {
          eyeCtx.lineWidth = 10;
          eyeCtx.beginPath();
          eyeCtx.moveTo(cx - 48, 118);
          eyeCtx.lineTo(cx + 48, 118);
          eyeCtx.stroke();
        } else if (speed > 8) {
          // Excited Arcs `^ ^`
          eyeCtx.lineWidth = 10;
          eyeCtx.beginPath();
          eyeCtx.arc(cx, 134, 40, 1.1 * Math.PI, 1.9 * Math.PI);
          eyeCtx.stroke();
        } else {
          // Almond Pupils
          eyeCtx.beginPath();
          eyeCtx.ellipse(cx, 118, 48, 34, -0.08, 0, Math.PI * 2);
          eyeCtx.fill();

          eyeCtx.fillStyle = isDark ? '#000000' : '#0c0a09';
          eyeCtx.shadowBlur = 0;
          eyeCtx.beginPath();
          eyeCtx.ellipse(cx, 118, 16, 28, 0, 0, Math.PI * 2);
          eyeCtx.fill();

          eyeCtx.fillStyle = '#ffffff';
          eyeCtx.beginPath();
          eyeCtx.ellipse(cx + 12, 104, 8, 6, 0.4, 0, Math.PI * 2);
          eyeCtx.fill();

          eyeCtx.fillStyle = mainEyeColor;
          eyeCtx.shadowColor = eyeGlowColor;
          eyeCtx.shadowBlur = 24;
        }
      };

      drawSingleEye(148);
      drawSingleEye(364);

      if (!blinking) {
        eyeCtx.shadowBlur = 10;
        eyeCtx.strokeStyle = mainEyeColor;
        eyeCtx.lineWidth = 6;
        eyeCtx.beginPath();
        eyeCtx.arc(256, 212, 20, 0.15 * Math.PI, 0.85 * Math.PI);
        eyeCtx.stroke();
      }
    };

    drawEyes(false, 0, 0);

    const eyeTexture = new THREE.CanvasTexture(eyeCanvas);
    eyeTextureRef.current = eyeTexture;

    const visorMat = new THREE.MeshBasicMaterial({ map: eyeTexture, transparent: true });
    const visorMesh = new THREE.Mesh(visorScreenGeo, visorMat);
    visorMesh.position.set(0, -0.02, 0.72);
    headGroup.add(visorMesh);

    const bezelGeo = new THREE.BoxGeometry(1.08, 0.55, 0.05);
    const bezelMesh = new THREE.Mesh(bezelGeo, darkTitaniumMat);
    bezelMesh.position.set(0, -0.02, 0.68);
    headGroup.add(bezelMesh);

    const borderGeo = new THREE.BoxGeometry(1.15, 0.62, 0.03);
    const borderMesh = new THREE.Mesh(borderGeo, satinGoldMat);
    borderMesh.position.set(0, -0.02, 0.66);
    headGroup.add(borderMesh);

    // Tail
    const tailCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -1.0, -0.2),
      new THREE.Vector3(0.3, -1.3, -0.4),
      new THREE.Vector3(0.8, -1.1, -0.2),
      new THREE.Vector3(1.0, -0.7, 0.1),
      new THREE.Vector3(0.8, -0.35, 0.3),
    ]);
    const tailGeo = new THREE.TubeGeometry(tailCurve, 20, 0.065, 8, false);
    const tailMesh = new THREE.Mesh(tailGeo, armorMat);
    tailRef.current = tailMesh;
    botGroup.add(tailMesh);

    const tailTipGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const tailTip = new THREE.Mesh(tailTipGeo, satinGoldMat);
    tailTip.position.set(0.8, -0.35, 0.3);
    botGroup.add(tailTip);

    // Hover Pods
    const podGeo = new THREE.CylinderGeometry(0.15, 0.18, 0.3, 24);
    const podPositions = [
      [-0.75, -1.1, -0.5],
      [0.75, -1.1, -0.5],
      [-0.75, -1.1, 0.5],
      [0.75, -1.1, 0.5],
    ] as const;

    podPositions.forEach(([x, y, z]) => {
      const pod = new THREE.Mesh(podGeo, armorMat);
      pod.position.set(x, y, z);
      botGroup.add(pod);

      const podRing = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.02, 8, 30), satinGoldMat);
      podRing.position.set(x, y - 0.15, z);
      podRing.rotation.x = Math.PI / 2;
      botGroup.add(podRing);
    });

    // 4. Mouse Drag Rotation
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !botGroupRef.current) return;
      const deltaMove = {
        x: e.clientX - previousMousePosition.current.x,
        y: e.clientY - previousMousePosition.current.y,
      };
      botGroupRef.current.rotation.y += deltaMove.x * 0.012;
      botGroupRef.current.rotation.x += deltaMove.y * 0.012;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => { isDragging.current = false; };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // 5. Animation Loop with Kinetic Motion Graphics Dynamics
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      blinkTimerRef.current += 0.016;
      if (blinkTimerRef.current > 3.6) {
        isBlinkingRef.current = true;
        if (blinkTimerRef.current > 3.75) {
          isBlinkingRef.current = false;
          blinkTimerRef.current = 0;
        }
      }

      drawEyes(isBlinkingRef.current, petSpeed, t);
      if (eyeTextureRef.current) {
        eyeTextureRef.current.needsUpdate = true;
      }

      if (botGroupRef.current) {
        botGroupRef.current.position.y = Math.sin(t * 2.5) * 0.14;

        if (!isDragging.current) {
          botGroupRef.current.rotation.y += 0.006 + scrollVel * 0.002;

          const targetRotX = (cursorRef.current.y - window.innerHeight / 2) * 0.0002;
          const targetRotY = (cursorRef.current.x - window.innerWidth / 2) * 0.0002;

          botGroupRef.current.rotation.x += (targetRotX - botGroupRef.current.rotation.x) * 0.05;
          botGroupRef.current.rotation.y += targetRotY * 0.015;
        }
      }

      // Kinetic 3D Orbit Rings Rotation
      if (ring1Ref.current) {
        ring1Ref.current.rotation.z = t * 0.5;
        ring1Ref.current.rotation.y = Math.sin(t * 0.4) * 0.3;
      }
      if (ring2Ref.current) {
        ring2Ref.current.rotation.z = -t * 0.4;
        ring2Ref.current.rotation.x = Math.cos(t * 0.3) * 0.3;
      }

      if (headGroupRef.current && !isDragging.current) {
        headGroupRef.current.rotation.y = Math.sin(t * 1.5) * 0.12;
        headGroupRef.current.rotation.z = Math.sin(t * 1.0) * 0.06;
      }

      if (tailRef.current) {
        tailRef.current.rotation.z = Math.sin(t * 3.5) * 0.22;
      }

      if (leftEarRef.current) leftEarRef.current.rotation.z = -0.32 + Math.sin(t * 2.4) * 0.06;
      if (rightEarRef.current) rightEarRef.current.rotation.z = 0.32 - Math.sin(t * 2.4) * 0.06;

      if (coreLightRef.current) {
        coreLightRef.current.intensity = (isDark ? 6.5 : 5.5) + Math.sin(t * 7) * 2.0;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 320;
      const h = container.clientHeight || 320;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [scrollVel, petSpeed, theme]);

  return (
    <div
      ref={mountRef}
      className={`w-full h-full cursor-grab active:cursor-grabbing transition-transform duration-500 ${
        isScrolled ? 'scale-90' : 'scale-100'
      }`}
    />
  );
};
