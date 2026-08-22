import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'aegis-swarm',
    title: 'AEGIS Swarm OS',
    tagline: 'Distributed multi-agent runtime with Byzantine consensus',
    description: 'Coordinates LLM workers across edge nodes and browser threads using lock-free WebAssembly ring buffers and WebRTC data channels.',
    category: 'AI Systems',
    tags: ['Rust', 'WebAssembly', 'Multi-Agent', 'WebRTC', 'Vector Cache'],
    metrics: [
      { label: 'Throughput', value: '45K ops/s' },
      { label: 'Consensus', value: 'Sub-3ms' },
      { label: 'Recovery', value: 'Automatic' },
      { label: 'Status', value: 'Production' }
    ],
    architectureSummary: 'Lock-free ring buffer compiled to Wasm with SIMD acceleration. Runs speculative quorum voting across peer nodes with local vector state caching.',
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
    tagline: 'In-browser neural field streaming and WebGPU renderer',
    description: '6DoF volumetric rendering pipeline streaming 3D Gaussian splats to modern browsers at 120 FPS on consumer GPUs.',
    category: 'Spatial & WebGL',
    tags: ['WebGPU', 'WGSL', 'Gaussian Splatting', 'Three.js', 'Compute Shaders'],
    metrics: [
      { label: 'Framerate', value: '120 FPS' },
      { label: 'Streaming', value: '1.8 MB/s' },
      { label: 'VRAM', value: '180 MB' },
      { label: 'Status', value: 'Live' }
    ],
    architectureSummary: 'WebGPU compute pipeline with dynamic level-of-detail pruning. Octree spatial partitioning with float16 spherical harmonics.',
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
    tagline: 'Hardware-isolated post-quantum key exchange with encrypted tunneling',
    description: 'Micro-segmentation network running NIST ML-KEM (Kyber-1024) and Dilithium signatures for secure backend communication.',
    category: 'Quantum & Security',
    tags: ['Post-Quantum Crypto', 'eBPF', 'Go', 'gRPC', 'Zero Trust'],
    metrics: [
      { label: 'Key Gen', value: '0.14 ms' },
      { label: 'Standard', value: 'NIST Level 5' },
      { label: 'Cipher', value: 'ML-KEM 1024' },
      { label: 'Status', value: 'Internal' }
    ],
    architectureSummary: 'Kernel-level eBPF packet routing with hardware security module attestation. Ephemeral session ratcheting with zero memory copies.',
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
    tagline: 'In-memory event sourcing engine with sub-microsecond storage',
    description: 'Event streaming engine built for high-volume financial telemetry and live simulations with zero garbage collection pauses.',
    category: 'Distributed Systems',
    tags: ['C++23', 'DPDK Kernel Bypass', 'Lock-Free Queues', 'Kafka', 'SIMD'],
    metrics: [
      { label: 'Ingestion', value: '12M msgs/s' },
      { label: 'p99 Latency', value: '14 μs' },
      { label: 'GC Pauses', value: '0 ms' },
      { label: 'Status', value: 'Production' }
    ],
    architectureSummary: 'Zero-copy memory mapped ring buffers using DPDK bypass. Cache-line-aligned columnar disk serialization with hardware CRC32 checksums.',
    liveUrl: '#',
    githubUrl: 'https://github.com/forbesayush',
    featured: false,
    year: '2024',
    accentColor: '#8a2be2',
    glslPreset: 'core'
  }
];
