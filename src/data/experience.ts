import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Principal Spatial & AI Architect',
    company: 'Nexus Cognitive Labs',
    location: 'San Francisco, CA',
    period: '2025 to Present',
    badge: 'Current',
    summary: 'Leading architecture for multi-agent platforms and spatial interfaces across research teams.',
    achievements: [
      'Built a Rust/Wasm agent runtime that reduced multi-agent consensus latency by 72%.',
      'Shipped in-browser 6DoF volumetric rendering using WebGPU compute shaders.',
      'Rolled out NIST Post-Quantum Cryptography (ML-KEM) across internal distributed buses.',
      'Migrated legacy monolith services to a federated mesh, cutting deploy cycles from days to hours.'
    ],
    technologies: ['Rust', 'WebGPU / WGSL', 'Multi-Agent LLMs', 'Three.js', 'Distributed Raft', 'Wasm'],
    architecturalImpact: 'Removed single-point-of-failure bottlenecks across cloud clusters, reducing annual infrastructure spend while maintaining high uptime.'
  },
  {
    id: 'exp-2',
    role: 'Staff Distributed Systems Engineer',
    company: 'HyperScale Systems',
    location: 'New York (Remote)',
    period: '2023 to 2025',
    badge: 'Infrastructure',
    summary: 'Owned the high-throughput state storage team. Focused on zero-GC streaming queues and hardware-accelerated telemetry pipelines.',
    achievements: [
      'Designed a lock-free memory ring buffer for high-volume message ingestion with sub-20 microsecond p99 latency.',
      'Connected HNSW vector indexes with hot-storage RocksDB instances through a distributed cache-hydration layer.',
      'Mentored 14 senior engineers on distributed consensus and kernel bypass programming.'
    ],
    technologies: ['C++23', 'Go', 'DPDK', 'Kafka', 'eBPF', 'SIMD optimizations'],
    architecturalImpact: 'Enabled real-time asset settlement for financial exchanges with zero data loss during regional partition events.'
  },
  {
    id: 'exp-3',
    role: 'Senior Creative Technologist & Graphics Lead',
    company: 'Voxel Creative Studio',
    location: 'London, UK (Remote)',
    period: '2021 to 2023',
    badge: 'WebGL & Interaction',
    summary: 'Built interactive 3D web experiences with custom shaders, physics simulations, and spatial platforms for product launches.',
    achievements: [
      'Won multiple Awwwards and FWA honors for interactive 3D WebGL product campaigns.',
      'Created a procedural sound and physics engine using the native Web Audio API with Verlet integration.'
    ],
    technologies: ['Three.js', 'GLSL Shaders', 'Web Audio API', 'GSAP', 'TypeScript', 'React'],
    architecturalImpact: 'Increased average user dwell time significantly and supported millions of unique sessions across global product launch sites.'
  }
];
