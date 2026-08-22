import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'AI & Agent Systems',
    description: 'Agent architectures, custom inference kernels, and vector stores.',
    skills: [
      {
        name: 'Multi-Agent Orchestration',
        level: 0,
        experience: '4+ Years',
        description: 'Hierarchical planner and critic networks with consensus-driven decision loops.',
        codeSnippet: `export async function resolveSwarmConsensus(nodes: AgentNode[]): Promise<DecisionMatrix> {
  const votes = await Promise.all(nodes.map(n => n.evaluateHypothesis(context)));
  return BFTConsensusEngine.verifyQuorum(votes, { threshold: 0.67 });
}`
      },
      {
        name: 'Fine-Tuning & Quantization',
        level: 0,
        experience: '3+ Years',
        description: 'LoRA, AWQ activation quantization, and custom Triton kernels.',
        codeSnippet: `@triton.jit
def fused_attention_kernel(Q, K, V, Out, sm_scale):
    pid = tl.program_id(0)
    ...`
      },
      {
        name: 'Vector Indexes & HNSW',
        level: 0,
        experience: '4+ Years',
        description: 'Distributed vector clustering, IVF-PQ indexing, and graph-based search.',
        codeSnippet: `const index = new HNSWVectorIndex({ dimensions: 1536, metric: 'cosine' });
index.buildGraphWithQuantization(embeddingsBuffer);`
      }
    ]
  },
  {
    category: 'Spatial & WebGL / WebGPU',
    description: 'Compute shaders, 3D Gaussian splatting, and canvas rendering.',
    skills: [
      {
        name: 'WebGPU & WGSL Compute',
        level: 0,
        experience: '5+ Years',
        description: 'GPU compute pipelines, volumetric raymarching, and particle systems.',
        codeSnippet: `@compute @workgroup_size(64, 1, 1)
fn cs_main(@builtin(global_invocation_id) id: vec3<u32>) {
    let particle = particles[id.x];
    particles[id.x].position += particle.velocity * u_time.delta;
}`
      },
      {
        name: 'Three.js & R3F',
        level: 0,
        experience: '6+ Years',
        description: 'Scene graph optimization, instanced rendering, and custom PBR shaders.',
        codeSnippet: `const mesh = new THREE.InstancedMesh(geometry, customShaderMaterial, 50000);
mesh.setMatrixAt(i, dynamicTransformationMatrix);`
      },
      {
        name: 'Physics & Motion',
        level: 0,
        experience: '6+ Years',
        description: 'Spring dynamics, timeline sequencing, and smooth scroll integration.',
        codeSnippet: `const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
gsap.ticker.add((time) => lenis.raf(time * 1000));`
      }
    ]
  },
  {
    category: 'Distributed Systems',
    description: 'Lock-free concurrency, kernel bypass, and Raft consensus.',
    skills: [
      {
        name: 'Rust & WebAssembly',
        level: 0,
        experience: '5+ Years',
        description: 'SIMD vectorization, multithreading, and zero-overhead Wasm bridges.',
        codeSnippet: `#[wasm_bindgen]
pub fn compute_spatial_hash(points: &[f32]) -> Vec<u32> {
    points.par_chunks_exact(3).map(|p| hash_coords(p[0], p[1], p[2])).collect()
}`
      },
      {
        name: 'Lock-Free Queues & DPDK',
        level: 0,
        experience: '4+ Years',
        description: 'Atomic memory ordering, ring buffers, and kernel bypass ingestion.',
        codeSnippet: `std::atomic<size_t> head_{0}, tail_{0};
void push(T item) {
    auto current_tail = tail_.load(std::memory_order_relaxed);
    ...
}`
      },
      {
        name: 'Distributed Consensus',
        level: 0,
        experience: '5+ Years',
        description: 'Leader election, log replication, snapshotting, and cluster reconfiguration.',
        codeSnippet: `func (n *RaftNode) RequestVote(ctx context.Context, req *VoteRequest) (*VoteResponse, error) {
    n.mu.Lock()
    defer n.mu.Unlock()
    return n.processVoteCandidate(req)
}`
      }
    ]
  }
];
