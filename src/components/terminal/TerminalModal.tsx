import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { soundManager } from '../../audio/soundManager';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'systemctl status neural-core',
      output: (
        <div className="text-cyber-cyan">
          ● neural-core.service: Ayush Chatterjee Autonomous Core<br />
          &nbsp;&nbsp;Loaded: loaded (/etc/systemd/system/neural-core.service)<br />
          &nbsp;&nbsp;Active: <span className="text-cyber-neon font-bold">active (running)</span> since 2027-01-01 00:00:00 UTC<br />
          &nbsp;&nbsp;Tasks: 128 threads | Memory: 42.4M | Latency: 0.12ms<br />
          Type <span className="text-cyber-amber font-bold">'help'</span> to see available commands or <span className="text-cyber-amber font-bold">'exit'</span> to close.
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, logs]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          soundManager.playModalClose();
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        soundManager.playModalClose();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    soundManager.playClick();
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ').toLowerCase();

    let outputNode: React.ReactNode;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div className="text-cyber-amber font-bold">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              <div><span className="text-cyber-cyan font-bold">whoami</span>: Display bio and architecture focus</div>
              <div><span className="text-cyber-cyan font-bold">projects</span>: List flagship software systems</div>
              <div><span className="text-cyber-cyan font-bold">skills</span>: Display proficiency matrix and languages</div>
              <div><span className="text-cyber-cyan font-bold">experience</span>: View career milestones</div>
              <div><span className="text-cyber-cyan font-bold">cat resume.txt</span>: Print technical resume</div>
              <div><span className="text-cyber-cyan font-bold">contact</span>: Get direct communication channels</div>
              <div><span className="text-cyber-cyan font-bold">sudo hire</span>: Trigger interview protocol</div>
              <div><span className="text-cyber-cyan font-bold">clear</span>: Wipe terminal screen</div>
              <div><span className="text-cyber-cyan font-bold">exit</span>: Close terminal</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="space-y-2 text-slate-200">
            <div className="text-cyber-cyan font-bold">AYUSH CHATTERJEE [Staff Spatial &amp; Distributed AI Architect]</div>
            <p>
              I build low-latency distributed architectures, in-browser WebGPU 3D graphics, and decentralized multi-agent platforms. Over 8 years designing enterprise high-throughput infrastructure.
            </p>
            <div className="font-mono text-xs text-slate-400">
              Location: San Francisco, CA | Available: 2027 initiatives
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-slate-200">
            <div className="text-cyber-amber font-bold">FLAGSHIP PRODUCTION PLATFORMS:</div>
            <div className="space-y-1">
              <div>• <span className="text-cyber-cyan font-bold">AEGIS Swarm OS</span>: Distributed multi-agent runtime (Rust/Wasm) [45k ops/s]</div>
              <div>• <span className="text-cyber-amber font-bold">Chronos NeRF</span>: 120 FPS WebGPU neural radiance field volumetric engine</div>
              <div>• <span className="text-cyber-neon font-bold">KyberShield Mesh</span>: NIST ML-KEM-1024 Post-Quantum Zero-Trust network</div>
              <div>• <span className="text-purple-400 font-bold">HyperFlow State</span>: Zero-GC Lock-free DPDK event reactor [12M msgs/s]</div>
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-slate-300 font-mono text-xs">
            <div className="text-cyber-cyan font-bold">CORE PROFICIENCY:</div>
            <div>[AI / Agents] Rust, Multi-Agent Swarms, AWQ/GGUF, Triton, HNSW Vector DB [98%]</div>
            <div>[Graphics/WebGPU] WebGPU/WGSL, Three.js, Raymarching, Gaussian Splats [96%]</div>
            <div>[Systems/Core] C++23, Go, DPDK Kernel Bypass, Lock-Free Queues, Raft Consensus [95%]</div>
            <div>[Modern Web] React 19, TypeScript, Tailwind CSS, Lenis, Web Audio API [98%]</div>
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-1.5 text-slate-200">
            <div><span className="text-cyber-cyan font-bold">2025 to Present:</span> Principal Spatial &amp; AI Architect at Nexus Cognitive Labs</div>
            <div><span className="text-cyber-amber font-bold">2023 to 2025:</span> Staff Distributed Systems Engineer at HyperScale Systems</div>
            <div><span className="text-cyber-neon font-bold">2021 to 2023:</span> Senior Creative Technologist &amp; Graphics Lead at Voxel Studio</div>
          </div>
        );
        break;

      case 'cat':
        if (args === 'resume.txt' || args === 'resume') {
          outputNode = (
            <div className="space-y-2 font-mono text-xs text-slate-300">
              <div className="text-cyber-cyan font-bold">================== RESUME.TXT ==================</div>
              <div>NAME: Ayush Chatterjee | ROLE: Staff Spatial &amp; AI Systems Architect</div>
              <div>EMAIL: ayushchatterjee.edu@gmail.com | GITHUB: github.com/forbesayush</div>
              <div>SUMMARY: Systems engineer building edge AI swarms, WebGPU compute, and distributed consensus.</div>
              <div>KEY METRICS: $1.8M/yr cloud cost reduction, 12M msgs/sec ingestion, 120 FPS 4K browser spatial render.</div>
              <div className="text-cyber-cyan font-bold">================================================</div>
            </div>
          );
        } else {
          outputNode = <div className="text-red-400">cat: file not found: {args || 'specify file'}</div>;
        }
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-slate-200">
            <div>Email: <span className="text-cyber-cyan font-bold">ayushchatterjee.edu@gmail.com</span></div>
            <div>PGP Key Fingerprint: <span className="text-cyber-amber font-mono text-xs">8F32 99A1 C402 B889 00EA 2027 D301 77FE</span></div>
            <div>Calendar Sync: <span className="text-cyber-neon font-bold">cal.com/ayushchatterjee/30min</span></div>
          </div>
        );
        break;

      case 'sudo':
        if (args.includes('hire')) {
          outputNode = (
            <div className="space-y-2 text-cyber-neon font-bold">
              <div>[ACCESS GRANTED: PRIORITY STATUS]</div>
              <div className="text-slate-200 font-normal">
                You have triggered the direct intro protocol. Sending notification to Ayush...
              </div>
              <div className="text-cyber-cyan">Direct link: ayushchatterjee.edu@gmail.com | Subject: "Fast-Track Discussion"</div>
            </div>
          );
        } else {
          outputNode = <div className="text-red-400">sudo: user is not in sudoers file.</div>;
        }
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        soundManager.playModalClose();
        onClose();
        return;

      default:
        outputNode = (
          <div className="text-red-400">
            Command not recognized: <span className="text-white font-bold">{trimmed}</span>. Type <span className="text-cyber-amber font-bold">'help'</span> for list.
          </div>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        command: trimmed,
        output: outputNode,
      },
    ]);
    setInput('');
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    soundManager.playTypeKey();
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx >= history.length) {
          setHistoryIdx(-1);
          setInput('');
        } else {
          setHistoryIdx(nextIdx);
          setInput(history[nextIdx]);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative bg-background-secondary/95 border border-cyber-amber/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-sm transition-all duration-300 ${
          isFullScreen ? 'w-full h-full max-h-none' : 'w-full max-w-3xl h-[650px] max-h-[85vh]'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.focus();
        }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-black/50 border-b border-white/10 select-none">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:opacity-100" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer hover:opacity-100" onClick={() => setIsFullScreen(!isFullScreen)} />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <TerminalIcon className="w-3.5 h-3.5 text-cyber-amber" />
              <span>ayush@quantum-core: ~ (zsh)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-1 rounded text-slate-400 hover:text-white"
              title={isFullScreen ? 'Restore Size' : 'Maximize'}
            >
              {isFullScreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => {
                soundManager.playModalClose();
                onClose();
              }}
              className="p-1 rounded text-slate-400 hover:text-red-400"
              aria-label="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-slate-100 font-mono text-xs">
          {logs.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyber-cyan">root@ayushchatterjee:~$</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
              <div className="pl-4 py-1 leading-relaxed">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(input);
            }}
            className="flex items-center gap-2 pt-1"
          >
            <span className="text-cyber-cyan flex-shrink-0">root@ayushchatterjee:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDownInput}
              className="flex-1 bg-transparent text-white font-mono focus:outline-none border-none p-0"
              spellCheck={false}
              autoComplete="off"
            />
          </form>

          <div ref={terminalEndRef} />
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 border-t border-white/5 bg-black/40 text-[10px] text-slate-500 flex justify-between font-mono">
          <span>Shortcuts: Up/Down for history • 'help' for commands</span>
          <span>Press ESC or Ctrl+K to close</span>
        </div>
      </div>
    </div>
  );
};
