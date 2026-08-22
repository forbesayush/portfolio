import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'aegis-swarm',
    title: 'AEGIS Swarm OS',
    tagline: 'Decentralized multi-agent runtime with fast consensus',
    description: 'A distributed agent runtime that coordinates language model agents across edge workers and browser threads. Handles Byzantine fault tolerance with self-healing memory pools.',
    category: 'AI Systems',
    tags: ['Rust/Wasm', 'Distributed Consensus', 'Multi-Agent LLMs', 'WebRTC Mesh', 'Vector Cache'],
    metrics: [
      { label: 'Throughput', value: '~45K ops/s' },
      { label: 'Consensus', value: 'Sub-3ms' },
      { label: 'Fault Recovery', value: 'Automatic' },
      { label: 'Status', value: 'Production' }
    ],
    architectureSummary: 'Lock-free ring buffer compiled to WebAssembly with SIMD acceleration. Runs speculative voting across agent nodes with local vector state hydration.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    featured: true,
    year: '2025',
    accentColor: '#00f0ff',
    glslPreset: 'particles'
  },
  {
    id: 'chronos-nerf',
    title: 'Chronos Volumetric NeRF',
    tagline: 'Neural radiance field streaming with WebGPU rendering',
    description: 'A 6DoF neural rendering pipeline that streams volumetric 3D Gaussian splats to the browser. Targets 120 FPS on modern GPUs.',
    category: 'Spatial & WebGL',
    tags: ['WebGPU', 'GLSL Raymarching', '3D Gaussian Splatting', 'Compute Shaders', 'Three.js'],
    metrics: [
      { label: 'Target FPS', value: '120' },
      { label: 'Streaming', value: '~1.8 MB/s' },
      { label: 'VRAM', value: '~180 MB' },
      { label: 'Status', value: 'Beta' }
    ],
    architectureSummary: 'Custom WebGPU compute pipeline with dynamic level-of-detail pruning. Uses octree spatial partitioning and float16 compressed spherical harmonics.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    featured: true,
    year: '2025',
    accentColor: '#ffaa00',
    glslPreset: 'mesh'
  },
  {
    id: 'quantum-mesh',
    title: 'KyberShield Zero-Trust Mesh',
    tagline: 'Post-quantum key exchange with encrypted tunneling',
    description: 'A micro-segmentation network running NIST ML-KEM (Kyber-1024) and Dilithium digital signatures for backend service communication.',
    category: 'Quantum & Security',
    tags: ['Post-Quantum Cryptography', 'eBPF Kernel Probes', 'Go / gRPC', 'ML-KEM 1024', 'Zero Trust'],
    metrics: [
      { label: 'Key Gen', value: '~0.14 ms' },
      { label: 'Security', value: 'NIST Level 5' },
      { label: 'Protocol', value: 'ML-KEM 1024' },
      { label: 'Status', value: 'Internal' }
    ],
    architectureSummary: 'Kernel-level eBPF packet routing paired with hardware security module attestation. Ephemeral session ratcheting with memory encryption.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    featured: true,
    year: '2024',
    accentColor: '#00ffaa',
    glslPreset: 'quantum'
  },
  {
    id: 'hyper-flow',
    title: 'HyperFlow State Reactor',
    tagline: 'In-memory event sourcing with low-latency storage',
    description: 'An event streaming engine built for financial telemetry and simulation state, optimized for zero garbage collection pauses.',
    category: 'Distributed Systems',
    tags: ['C++23', 'Kernel Bypass (DPDK)', 'Lock-Free Queues', 'Kafka/Pulsar Bridges', 'SIMD JSON'],
    metrics: [
      { label: 'Ingestion', value: 'Millions/s' },
      { label: 'p99 Latency', value: 'Low μs' },
      { label: 'GC Pause', value: 'Zero' },
      { label: 'Status', value: 'Production' }
    ],
    architectureSummary: 'Zero-copy memory mapped ring buffers using DPDK kernel bypass. Cache-line-aligned columnar disk serialization with hardware CRC32 checksum pipelines.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    featured: false,
    year: '2023-2024',
    accentColor: '#8a2be2',
    glslPreset: 'core'
  }
];
