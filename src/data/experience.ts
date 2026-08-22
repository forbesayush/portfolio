import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Principal Spatial & AI Architect',
    company: 'Nexus Cognitive Labs',
    location: 'San Francisco, CA',
    period: '2025 to Present',
    badge: 'Current',
    summary: 'Lead architecture for multi-agent swarm platforms and browser WebGPU interfaces.',
    achievements: [
      'Built a Rust/Wasm agent runtime that reduced multi-agent consensus latency by 72%.',
      'Shipped in-browser 6DoF volumetric rendering with WebGPU compute shaders.',
      'Implemented NIST Post-Quantum Cryptography (ML-KEM) across internal buses.'
    ],
    technologies: ['Rust', 'WebGPU', 'WGSL', 'Multi-Agent', 'Three.js', 'Wasm'],
    architecturalImpact: 'Eliminated single-point failure bottlenecks across cloud clusters while maintaining 99.99% uptime.'
  },
  {
    id: 'exp-2',
    role: 'Staff Distributed Systems Engineer',
    company: 'HyperScale Systems',
    location: 'New York, Remote',
    period: '2023 to 2025',
    badge: 'Infrastructure',
    summary: 'Led the telemetry and state engine team, focusing on zero-GC streaming pipelines.',
    achievements: [
      'Designed a lock-free ring buffer handling 12 million messages per second with sub-20μs p99 latency.',
      'Built a distributed cache hydration layer connecting HNSW vector indexes with RocksDB.',
      'Mentored engineers on distributed consensus and kernel bypass networking.'
    ],
    technologies: ['C++23', 'Go', 'DPDK', 'Kafka', 'eBPF', 'SIMD'],
    architecturalImpact: 'Enabled real-time asset settlement for financial exchanges with zero data loss during network partitions.'
  },
  {
    id: 'exp-3',
    role: 'Senior Creative Technologist & Graphics Lead',
    company: 'Voxel Creative Studio',
    location: 'London, UK, Remote',
    period: '2021 to 2023',
    badge: 'WebGL & Interaction',
    summary: 'Built interactive 3D web experiences, custom shaders, and procedural audio systems.',
    achievements: [
      'Shipped WebGL product launches recognized by Awwwards and FWA.',
      'Created a procedural sound and physics engine using the native Web Audio API.'
    ],
    technologies: ['Three.js', 'GLSL', 'Web Audio API', 'TypeScript', 'React'],
    architecturalImpact: 'Increased user session duration significantly across global interactive product launches.'
  }
];
