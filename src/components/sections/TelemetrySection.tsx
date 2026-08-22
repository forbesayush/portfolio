import React, { useState, useEffect } from 'react';
import { Activity, Cpu, GitCommit, Radio, Server, Wifi, RefreshCw } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

const SIMULATED_COMMITS = [
  { hash: 'e49a21c', msg: 'perf(webgpu): vectorized tile binning in WGSL compute pipeline', time: '2m ago' },
  { hash: '8f01b33', msg: 'feat(aegis): hierarchical BFT consensus with zero-copy ring buffer', time: '18m ago' },
  { hash: '3d90aa7', msg: 'refactor(pqc): migrate ML-KEM-1024 key ratcheting to Wasm', time: '1h ago' },
  { hash: '7c4210e', msg: 'fix(splatting): dynamic LoD octree pruning for 120 FPS spatial render', time: '3h ago' },
];

export const TelemetrySection: React.FC = () => {
  const [activeNodes, setActiveNodes] = useState(1248);
  const [throughput, setThroughput] = useState(45210);
  const [gpuLoad, setGpuLoad] = useState(38);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodes((prev) => prev + Math.floor(Math.random() * 5 - 2));
      setThroughput((prev) => Math.floor(45000 + Math.random() * 1200));
      setGpuLoad((prev) => Math.min(95, Math.max(20, prev + Math.floor(Math.random() * 7 - 3))));
      setPulseKey((k) => k + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    soundManager.playClick();
    setThroughput(48500);
    setGpuLoad(45);
    soundManager.playSuccess();
  };

  return (
    <section id="telemetry" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-2">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyber-cyan" />
            <span>LIVE EDGE TELEMETRY</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            SYSTEM VITALS &amp; RUNTIME STATE
          </h2>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-cyber-neon">
            <span className="w-2 h-2 rounded-full bg-cyber-neon animate-ping" />
            ALL NODES SYNCHRONIZED
          </span>
          <button
            onClick={handleRefresh}
            onMouseEnter={() => soundManager.playHover()}
            className="p-2 rounded-lg bg-surface-glass hover:bg-surface-glass-hover border border-white/10 hover:border-cyber-cyan/50 text-slate-300 hover:text-cyber-cyan transition-all"
            title="Poll fresh telemetry metrics"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Bento 1: Swarm Nodes State */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-surface-glass border border-white/10 backdrop-blur-xl hover:border-cyber-cyan/40 transition-all duration-300 shadow-spatial relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">
                  AEGIS Swarm Runtime Cluster
                </h3>
                <span className="font-mono text-[11px] text-slate-400">
                  Decentralized WebAssembly Agent Mesh
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs">
              HEALTH: 100%
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-3 rounded-xl bg-black/30 border border-white/5">
              <span className="font-mono text-[10px] text-slate-400 block mb-1">ACTIVE SWARMS</span>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                {activeNodes.toLocaleString()}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-white/5">
              <span className="font-mono text-[10px] text-slate-400 block mb-1">CONSENSUS RATE</span>
              <span className="font-display font-bold text-xl text-cyber-cyan tracking-tight">
                {throughput.toLocaleString()} <span className="text-xs font-normal">ops/s</span>
              </span>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-white/5">
              <span className="font-mono text-[10px] text-slate-400 block mb-1">FAULT TOLERANCE</span>
              <span className="font-display font-bold text-xl text-cyber-neon tracking-tight">
                BFT (2f+1)
              </span>
            </div>
          </div>

          {/* Animated node waveform */}
          <div className="flex items-end gap-1.5 h-14 pt-2">
            {[45, 62, 78, 55, 89, 94, 60, 72, 85, 92, 44, 68, 80, 95, 70, 88, 62, 77, 91, 58].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-cyber-cyan/20 to-cyber-cyan rounded-t transition-all duration-500"
                style={{
                  height: `${Math.min(100, Math.max(15, h + ((pulseKey + i) % 7) * 4))}%`,
                  opacity: 0.4 + (i / 20) * 0.6,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bento 2: WebGPU Shader Engine */}
        <div className="p-6 rounded-2xl bg-surface-glass border border-white/10 backdrop-blur-xl hover:border-cyber-amber/40 transition-all duration-300 shadow-spatial relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyber-amber/10 border border-cyber-amber/30 flex items-center justify-center text-cyber-amber">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs text-cyber-amber font-bold">120 FPS</span>
          </div>

          <h3 className="font-display font-bold text-white text-base mb-1">
            WebGPU Compute Engine
          </h3>
          <p className="text-xs text-slate-400 font-sans mb-4">
            Direct compute dispatch with zero CPU pipeline stalls.
          </p>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between font-mono text-[11px] text-slate-400 mb-1">
                <span>GPU Shader Load</span>
                <span className="text-cyber-amber">{gpuLoad}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-cyber-amber transition-all duration-500 rounded-full"
                  style={{ width: `${gpuLoad}%` }}
                />
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 font-mono text-[10px] text-slate-400 flex justify-between">
              <span>VRAM ALLOCATION:</span>
              <span className="text-white font-bold">184 MB / 4.0 GB</span>
            </div>
          </div>
        </div>

        {/* Bento 3: Post-Quantum Security Node */}
        <div className="p-6 rounded-2xl bg-surface-glass border border-white/10 backdrop-blur-xl hover:border-cyber-neon/40 transition-all duration-300 shadow-spatial relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyber-neon/10 border border-cyber-neon/30 flex items-center justify-center text-cyber-neon">
              <Wifi className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs text-cyber-neon font-bold">NIST L5</span>
          </div>

          <h3 className="font-display font-bold text-white text-base mb-1">
            Quantum Shield (ML-KEM)
          </h3>
          <p className="text-xs text-slate-400 font-sans mb-4">
            Ephemeral key ratcheting with zero-knowledge attestation.
          </p>

          <div className="space-y-2 font-mono text-[11px] text-slate-300">
            <div className="flex justify-between p-2 rounded-lg bg-black/30 border border-white/5">
              <span className="text-slate-500">Algorithm:</span>
              <span className="text-cyber-neon">ML-KEM 1024</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-black/30 border border-white/5">
              <span className="text-slate-500">Signatures:</span>
              <span className="text-white">Dilithium-5</span>
            </div>
          </div>
        </div>

        {/* Bento 4: Live Git Commit Log */}
        <div className="md:col-span-3 lg:col-span-4 p-6 rounded-2xl bg-surface-glass border border-white/10 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan font-bold">
              <GitCommit className="w-4 h-4 text-cyber-cyan" />
              <span>RECENT PRODUCTION COMMITS</span>
            </div>
            <span className="font-mono text-[10px] text-slate-500">BRANCH: main (HEAD)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SIMULATED_COMMITS.map((c) => (
              <div
                key={c.hash}
                className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/5 hover:border-cyber-cyan/30 transition-all group"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="font-mono text-[11px] text-cyber-amber px-2 py-0.5 rounded bg-cyber-amber/10 border border-cyber-amber/30 flex-shrink-0">
                    {c.hash}
                  </span>
                  <span className="font-mono text-xs text-slate-300 truncate group-hover:text-white transition-colors">
                    {c.msg}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500 flex-shrink-0 ml-3">
                  {c.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
