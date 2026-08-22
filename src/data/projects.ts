import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'aegis-swarm',
    title: 'AEGIS Swarm OS',
    tagline: 'Decentralized multi-agent runtime with sub-millisecond consensus',
    description: 'A distributed agent runtime that runs across edge workers and browser threads. It handles coordination between hierarchical language model agents with Byzantine fault tolerance and self-healing memory pools.',
    category: 'AI Systems',
    tags: ['Rust/Wasm', 'Distributed Consensus', 'Multi-Agent LLMs', 'WebRTC Mesh', 'Vector Cache'],
    metrics: [
      { label: 'Throughput', value: '45,000 ops/s' },
      { label: 'Consensus Latency', value: '< 2.4 ms' },
      { label: 'Fault Recovery', value: 'Zero Data Loss' },
      { label: 'Active Swarms', value: '1,200+' }
    ],
    architectureSummary: 'Built on a lock-free ring buffer compiled to WebAssembly with SIMD acceleration. It runs speculative voting across agent nodes with local vector state hydration.',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    year: '2027',
    accentColor: '#00f0ff',
    glslPreset: 'particles'
  },
  {
    id: 'chronos-nerf',
    title: 'Chronos Volumetric NeRF',
    tagline: 'Real-time neural radiance field streaming and WebGPU renderer',
    description: 'A 6DoF neural rendering pipeline that streams volumetric 3D Gaussian splats straight to the browser at 120 FPS on consumer GPUs.',
    category: 'Spatial & WebGL',
    tags: ['WebGPU', 'GLSL Raymarching', '3D Gaussian Splatting', 'Compute Shaders', 'Three.js'],
    metrics: [
      { label: 'Framerate', value: '120 FPS' },
      { label: 'Streaming Bitrate', value: '1.8 MB/s' },
      { label: 'VRAM Footprint', value: '180 MB' },
      { label: 'Resolution', value: 'Native 4K' }
    ],
    architectureSummary: 'Custom WebGPU compute pipeline with dynamic level-of-detail pruning. Uses octree spatial partitioning and float16 compressed spherical harmonics for real-time light transport.',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    year: '2026-2027',
    accentColor: '#ffaa00',
    glslPreset: 'mesh'
  },
  {
    id: 'quantum-mesh',
    title: 'KyberShield Zero-Trust Mesh',
    tagline: 'Hardware-isolated post-quantum key exchange with encrypted tunneling',
    description: 'A micro-segmentation network running NIST ML-KEM (Kyber-1024) and Dilithium digital signatures for autonomous backend services.',
    category: 'Quantum & Security',
    tags: ['Post-Quantum Cryptography', 'eBPF Kernel Probes', 'Go / gRPC', 'ML-KEM 1024', 'Zero Trust'],
    metrics: [
      { label: 'Key Gen Latency', value: '0.14 ms' },
      { label: 'Encrypted Bandwidth', value: '80 Gbps' },
      { label: 'Security Level', value: 'NIST Level 5' },
      { label: 'Zero-Day Intercept', value: '99.98%' }
    ],
    architectureSummary: 'Kernel-level eBPF packet routing paired with hardware security module attestation. It runs ephemeral session ratcheting with zero-overhead memory encryption.',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    year: '2026',
    accentColor: '#00ffaa',
    glslPreset: 'quantum'
  },
  {
    id: 'hyper-flow',
    title: 'HyperFlow State Reactor',
    tagline: 'In-memory event sourcing engine with sub-microsecond storage',
    description: 'An event streaming engine optimized for financial telemetry and live simulation states, built with zero garbage collection pauses.',
    category: 'Distributed Systems',
    tags: ['C++23', 'Kernel Bypass (DPDK)', 'Lock-Free Queues', 'Kafka/Pulsar Bridges', 'SIMD JSON'],
    metrics: [
      { label: 'Ingestion Rate', value: '12M msgs/s' },
      { label: 'p99 Latency', value: '14 μs' },
      { label: 'GC Pause', value: '0.00 ms (Zero-GC)' },
      { label: 'Cluster Uptime', value: '99.9999%' }
    ],
    architectureSummary: 'Zero-copy memory mapped ring buffers using DPDK kernel bypass. It features cache-line-aligned columnar disk serialization with hardware CRC32 checksum pipelines.',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false,
    year: '2025-2026',
    accentColor: '#8a2be2',
    glslPreset: 'core'
  }
];
