import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Principal Spatial & AI Architect',
    company: 'Nexus Cognitive Labs',
    location: 'San Francisco, CA',
    period: '2025 to Present',
    badge: 'Current Leadership',
    summary: 'Directing the architecture for multi-agent swarm platforms and volumetric spatial interfaces across enterprise research teams.',
    achievements: [
      'Built a Rust and Wasm agent runtime that cut multi-agent consensus latency by 72% across 1,000 active nodes.',
      'Shipped in-browser 6DoF neural rendering with WebGPU compute shaders, maintaining 120 FPS on standard consumer laptops.',
      'Implemented NIST Post-Quantum Cryptography ML-KEM across internal distributed state buses.'
    ],
    technologies: ['Rust', 'WebGPU / WGSL', 'Multi-Agent LLMs', 'Three.js', 'Distributed Raft', 'Wasm'],
    architecturalImpact: 'Eliminated single-point failure bottlenecks across cloud clusters, cutting infrastructure costs by $1.8M annually while holding 99.999% uptime.'
  },
  {
    id: 'exp-2',
    role: 'Staff Distributed Systems Engineer',
    company: 'HyperScale Systems',
    location: 'New York (Remote)',
    period: '2023 to 2025',
    badge: 'Core Infrastructure',
    summary: 'Led the high-throughput state storage team, developing zero-GC streaming queues and hardware-accelerated telemetry pipelines.',
    achievements: [
      'Engineered a lock-free memory ring buffer handling 12 million messages per second with sub-20-microsecond p99 latency.',
      'Designed a distributed cache-hydration layer that connected HNSW vector indexes with hot-storage RocksDB instances.',
      'Mentored 14 senior engineers across distributed consensus, kernel bypass programming, and graphics pipelines.'
    ],
    technologies: ['C++23', 'Go', 'DPDK', 'Kafka', 'eBPF', 'SIMD optimizations'],
    architecturalImpact: 'Enabled real-time global asset settlement for tier-1 financial exchanges with zero data loss during regional cloud partition events.'
  },
  {
    id: 'exp-3',
    role: 'Senior Creative Technologist & Graphics Lead',
    company: 'Voxel Creative Studio',
    location: 'London, UK (Remote)',
    period: '2021 to 2023',
    badge: 'WebGL & Interaction',
    summary: 'Built interactive 3D web experiences, custom shaders, dynamic physics simulations, and spatial web platforms.',
    achievements: [
      'Won 4 Awwwards Site of the Year and FWA of the Month honors for interactive 3D WebGL product launches.',
      'Created a procedural sound and physics engine using the native Web Audio API and Verlet integration.'
    ],
    technologies: ['Three.js', 'GLSL Shaders', 'Web Audio API', 'GSAP', 'TypeScript', 'React'],
    architecturalImpact: 'Boosted average user dwell time by 340% and supported over 45M unique global user sessions across product launch sites.'
  }
];
