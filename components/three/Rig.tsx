"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Rig() {
  useFrame((state) => {
    state.camera.position.lerp(
      new THREE.Vector3(state.pointer.x * 0.5, state.pointer.y * 0.5, 7),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}
