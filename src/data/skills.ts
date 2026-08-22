import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Autonomous AI & Agent Systems',
    description: 'Hierarchical agent architectures, custom transformer kernels, vector indexing, and memory cache stores.',
    skills: [
      {
        name: 'Multi-Agent Swarm Orchestration',
        level: 98,
        experience: '4+ Years',
        description: 'Hierarchical planner and critic networks, task decomposition, and consensus-driven decision loops.',
        codeSnippet: `export async function resolveSwarmConsensus(nodes: AgentNode[]): Promise<DecisionMatrix> {
  const votes = await Promise.all(nodes.map(n => n.evaluateHypothesis(context)));
  return BFTConsensusEngine.verifyQuorum(votes, { threshold: 0.67 });
}`
      },
      {
        name: 'Fine-Tuning & Quantization (AWQ/GGUF)',
        level: 92,
        experience: '3+ Years',
        description: 'Low-rank adaptation (LoRA), activation quantization, and custom inference kernels in CUDA and Triton.',
        codeSnippet: `@triton.jit
def fused_attention_kernel(Q, K, V, Out, sm_scale):
    # Memory-efficient fused flash attention kernel
    pid = tl.program_id(0)
    ...`
      },
      {
        name: 'Vector Databases & HNSW Indexing',
        level: 95,
        experience: '4+ Years',
        description: 'Distributed vector clustering, inverted file indexing (IVF-PQ), and graph traversal.',
        codeSnippet: `const index = new HNSWVectorIndex({ dimensions: 1536, metric: 'cosine' });
index.buildGraphWithQuantization(embeddingsBuffer);`
      }
    ]
  },
  {
    category: 'Spatial Computing & WebGL/WebGPU',
    description: 'Real-time raymarching, compute shaders, 3D Gaussian splatting, and canvas rendering.',
    skills: [
      {
        name: 'WebGPU Compute & GLSL Shaders',
        level: 96,
        experience: '5+ Years',
        description: 'Writing parallel compute pipelines, volumetric raymarching, and fluid particle simulations.',
        codeSnippet: `@compute @workgroup_size(64, 1, 1)
fn cs_main(@builtin(global_invocation_id) id: vec3<u32>) {
    let particle = particles[id.x];
    particles[id.x].position += particle.velocity * u_time.delta;
}`
      },
      {
        name: 'Three.js & React Three Fiber',
        level: 94,
        experience: '6+ Years',
        description: 'Scene graph optimization, instanced mesh rendering, custom buffer geometry, and PBR lighting.',
        codeSnippet: `const mesh = new THREE.InstancedMesh(geometry, customShaderMaterial, 50000);
mesh.setMatrixAt(i, dynamicTransformationMatrix);`
      },
      {
        name: 'Physics & Motion Choreography',
        level: 97,
        experience: '6+ Years',
        description: 'Spring dynamics, timeline sequencing, layout transitions with Framer Motion, and Lenis smooth scroll.',
        codeSnippet: `const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
gsap.ticker.add((time) => lenis.raf(time * 1000));`
      }
    ]
  },
  {
    category: 'Distributed Core & Systems',
    description: 'Lock-free concurrency, kernel bypass networking, microsecond event storage, and memory safety.',
    skills: [
      {
        name: 'Rust & WebAssembly',
        level: 95,
        experience: '5+ Years',
        description: 'Zero-overhead abstractions, SIMD vectorization, multi-threading, and Wasm bridge interfaces.',
        codeSnippet: `#[wasm_bindgen]
pub fn compute_spatial_hash(points: &[f32]) -> Vec<u32> {
    points.par_chunks_exact(3).map(|p| hash_coords(p[0], p[1], p[2])).collect()
}`
      },
      {
        name: 'Lock-Free Queues & DPDK',
        level: 90,
        experience: '4+ Years',
        description: 'Atomic memory ordering (Acquire-Release), ring-buffer caches, and kernel bypass packet ingestion.',
        codeSnippet: `std::atomic<size_t> head_{0}, tail_{0};
void push(T item) {
    auto current_tail = tail_.load(std::memory_order_relaxed);
    ...
}`
      },
      {
        name: 'Distributed Consensus (Raft / Paxos)',
        level: 93,
        experience: '5+ Years',
        description: 'Leader election, log replication, snapshotting, and dynamic cluster reconfiguration.',
        codeSnippet: `func (n *RaftNode) RequestVote(ctx context.Context, req *VoteRequest) (*VoteResponse, error) {
    n.mu.Lock()
    defer n.mu.Unlock()
    return n.processVoteCandidate(req)
}`
      }
    ]
  }
];
