import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'AI & Agent Systems',
    description: 'Agent architectures, custom transformer kernels, vector indexing, and memory stores.',
    skills: [
      {
        name: 'Multi-Agent Orchestration',
        level: 0,
        experience: '4+ Years',
        description: 'Hierarchical planner/critic networks with task decomposition and consensus-driven decision loops.',
        codeSnippet: `export async function resolveSwarmConsensus(nodes: AgentNode[]): Promise<DecisionMatrix> {
  const votes = await Promise.all(nodes.map(n => n.evaluateHypothesis(context)));
  return BFTConsensusEngine.verifyQuorum(votes, { threshold: 0.67 });
}`
      },
      {
        name: 'Fine-Tuning & Quantization (AWQ/GGUF)',
        level: 0,
        experience: '3+ Years',
        description: 'Low-rank adaptation (LoRA), activation quantization, custom inference kernels in CUDA/Triton.',
        codeSnippet: `@triton.jit
def fused_attention_kernel(Q, K, V, Out, sm_scale):
    # Memory-efficient fused flash attention kernel
    pid = tl.program_id(0)
    ...`
      },
      {
        name: 'Vector Databases & HNSW Indexing',
        level: 0,
        experience: '4+ Years',
        description: 'Distributed vector clustering, inverted file indexing (IVF-PQ), graph-based nearest neighbor search.',
        codeSnippet: `const index = new HNSWVectorIndex({ dimensions: 1536, metric: 'cosine' });
index.buildGraphWithQuantization(embeddingsBuffer);`
      }
    ]
  },
  {
    category: 'Spatial Computing & WebGL/WebGPU',
    description: 'Raymarching, compute shaders, 3D Gaussian splatting, canvas rendering.',
    skills: [
      {
        name: 'WebGPU Compute & GLSL Shaders',
        level: 0,
        experience: '5+ Years',
        description: 'Parallel compute pipelines, volumetric raymarching, fluid particle simulations on the GPU.',
        codeSnippet: `@compute @workgroup_size(64, 1, 1)
fn cs_main(@builtin(global_invocation_id) id: vec3<u32>) {
    let particle = particles[id.x];
    particles[id.x].position += particle.velocity * u_time.delta;
}`
      },
      {
        name: 'Three.js & React Three Fiber',
        level: 0,
        experience: '6+ Years',
        description: 'Scene graph optimization, instanced mesh rendering, custom buffer geometry, PBR lighting setups.',
        codeSnippet: `const mesh = new THREE.InstancedMesh(geometry, customShaderMaterial, 50000);
mesh.setMatrixAt(i, dynamicTransformationMatrix);`
      },
      {
        name: 'Physics & Motion',
        level: 0,
        experience: '6+ Years',
        description: 'Spring dynamics, timeline sequencing, layout transitions with Framer Motion, Lenis smooth scroll integration.',
        codeSnippet: `const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
gsap.ticker.add((time) => lenis.raf(time * 1000));`
      }
    ]
  },
  {
    category: 'Distributed Systems & Core',
    description: 'Lock-free concurrency, kernel bypass networking, microsecond event storage, memory safety.',
    skills: [
      {
        name: 'Rust & WebAssembly',
        level: 0,
        experience: '5+ Years',
        description: 'Zero-overhead abstractions, SIMD vectorization, multi-threading, Wasm bridge interfaces.',
        codeSnippet: `#[wasm_bindgen]
pub fn compute_spatial_hash(points: &[f32]) -> Vec<u32> {
    points.par_chunks_exact(3).map(|p| hash_coords(p[0], p[1], p[2])).collect()
}`
      },
      {
        name: 'Lock-Free Queues & DPDK',
        level: 0,
        experience: '4+ Years',
        description: 'Atomic memory ordering (Acquire-Release), ring-buffer caches, kernel bypass packet ingestion.',
        codeSnippet: `std::atomic<size_t> head_{0}, tail_{0};
void push(T item) {
    auto current_tail = tail_.load(std::memory_order_relaxed);
    ...
}`
      },
      {
        name: 'Distributed Consensus (Raft / Paxos)',
        level: 0,
        experience: '5+ Years',
        description: 'Leader election, log replication, snapshotting, dynamic cluster reconfiguration.',
        codeSnippet: `func (n *RaftNode) RequestVote(ctx context.Context, req *VoteRequest) (*VoteResponse, error) {
    n.mu.Lock()
    defer n.mu.Unlock()
    return n.processVoteCandidate(req)
}`
      }
    ]
  }
];
