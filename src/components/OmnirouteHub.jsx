import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Copy, Check, Cpu, Zap, ArrowRight, ShieldCheck, 
  Layers, Code2, Server, Play, Sparkles, RefreshCw, Box, ExternalLink
} from 'lucide-react';

export default function OmnirouteHub({ onBackToPortfolio }) {
  const [selectedTool, setSelectedTool] = useState('claude');
  const [selectedModel, setSelectedModel] = useState('openai/gpt-5.4');
  const [customMessage, setCustomMessage] = useState('Optimize database query indexing');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('cli'); // 'cli' | 'proxy' | 'config'

  const tools = [
    { id: 'claude', name: 'Claude Code', type: 'Autonomous Agent', desc: 'Anthropic CLI coding assistant' },
    { id: 'aider', name: 'Aider', type: 'Pair Programming', desc: 'Git-integrated terminal pair programmer' },
    { id: 'codex', name: 'OpenAI Codex', type: 'Code Generator', desc: 'Official Codex CLI tool' },
    { id: 'goose', name: 'Goose', type: 'Autonomous Agent', desc: 'Block open-source on-machine developer' },
    { id: 'opencode', name: 'OpenCode', type: 'Task Runner', desc: 'Multi-step coding instruction engine' },
    { id: 'gemini', name: 'Gemini CLI', type: 'Google Ecosystem', desc: 'Official Google Gemini developer CLI' },
    { id: 'qwen', name: 'Qwen', type: 'Alibaba Open', desc: 'Qwen code assistant runtime' },
  ];

  const models = [
    { id: 'auto', name: 'Auto (Zero Config)', provider: 'Omniroute Smart Router', tag: 'Fastest' },
    { id: 'openai/gpt-5.4', name: 'OpenAI GPT-5.4', provider: 'OpenAI Next-Gen', tag: 'Top Reasoning' },
    { id: 'glm/glm-5.2', name: 'GLM-5.2', provider: 'Zhipu AI / GLM', tag: 'Ultra Fast' },
    { id: 'anthropic/claude-3-7-sonnet', name: 'Claude 3.7 Sonnet', provider: 'Anthropic', tag: 'Coding Benchmark' },
    { id: 'deepseek/deepseek-r1', name: 'DeepSeek R1', provider: 'DeepSeek AI', tag: 'Open Weights' },
  ];

  const generateCommand = () => {
    switch (selectedTool) {
      case 'claude':
        return `omniroute run claude --model ${selectedModel}`;
      case 'aider':
        return `omniroute run aider --model ${selectedModel} -- --message "${customMessage}"`;
      case 'codex':
        return `omniroute run codex --model ${selectedModel}`;
      case 'goose':
        return `omniroute run goose --model ${selectedModel}`;
      case 'opencode':
        return `omniroute run opencode --model ${selectedModel} -- run "${customMessage}"`;
      case 'gemini':
        return `omniroute run gemini --model ${selectedModel} -- --skip-trust -p "${customMessage}"`;
      case 'qwen':
        return `omniroute run qwen --model ${selectedModel} -- -p "${customMessage}"`;
      default:
        return `omniroute run ${selectedTool} --model ${selectedModel}`;
    }
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const curlExample = `curl http://localhost:20128/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${selectedModel}",
    "messages": [
      {"role": "user", "content": "${customMessage}"}
    ]
  }'`;

  const pythonExample = `from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:20128/v1",
    api_key="omniroute"  # Managed by local daemon
)

response = client.chat.completions.create(
    model="${selectedModel}",
    messages=[{"role": "user", "content": "${customMessage}"}]
)

print(response.choices[0].message.content)`;

  const vsCodeConfig = `{
  "continue.models": [
    {
      "title": "Omniroute (${selectedModel})",
      "provider": "openai",
      "model": "${selectedModel}",
      "apiBase": "http://localhost:20128/v1",
      "apiKey": "omniroute"
    }
  ]
}`;

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F8FAFC] font-sans antialiased text-left selection:bg-orange-500/20 selection:text-orange-200">
      
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#090A0F]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-sm font-mono font-bold text-sm">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm text-white tracking-tight">
                Omniroute Studio
              </span>
              <span className="text-[10px] font-mono text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 ml-2">
                v3.8.49
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onBackToPortfolio && (
              <button
                onClick={onBackToPortfolio}
                className="text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/[0.08] hover:bg-white/[0.04] transition-colors"
              >
                &larr; Return to Portfolio
              </button>
            )}

            <button
              onClick={() => copyToClipboard('npm install -g omniroute', 'install')}
              className="text-xs font-mono text-white bg-orange-600 hover:bg-orange-500 px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              {copiedIndex === 'install' ? <Check className="w-3.5 h-3.5" /> : <Terminal className="w-3.5 h-3.5" />}
              <span>{copiedIndex === 'install' ? 'Copied Command!' : 'npm i -g omniroute'}</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-portfolio mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Hero Banner */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Universal AI Coding Gateway &bull; Local Daemon Port 20128</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
            Run Any Coding Agent With Any Upstream Model.
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Omniroute seamlessly bridges Claude Code, Aider, Codex, Goose, OpenCode, and IDE extensions to any LLM backend (GPT-5.4, GLM-5.2, Claude 3.7 Sonnet, DeepSeek R1) with zero configuration friction.
          </p>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE ROUTING PLAYGROUND */}
        {/* ======================================================== */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1118] border border-white/[0.08] shadow-2xl space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-1">
                Interactive Router Playground
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Generate & Execute Routing Commands
              </h2>
            </div>

            {/* Mode Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#090A0F] border border-white/[0.08] text-xs font-mono">
              <button
                onClick={() => setActiveTab('cli')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'cli' ? 'bg-white text-black font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                CLI Command
              </button>
              <button
                onClick={() => setActiveTab('proxy')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'proxy' ? 'bg-white text-black font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Local Proxy API
              </button>
              <button
                onClick={() => setActiveTab('config')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'config' ? 'bg-white text-black font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                IDE Config
              </button>
            </div>
          </div>

          {/* Grid Selection: Agent Tool + Target Model */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Step 1: Select Coding Agent (6 Cols) */}
            <div className="lg:col-span-6 space-y-3">
              <label className="block text-xs font-mono uppercase text-slate-400 font-semibold">
                1. Select Coding Agent CLI:
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tools.map((tool) => {
                  const isSelected = selectedTool === tool.id;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => setSelectedTool(tool.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-orange-500/10 border-orange-500 text-white ring-1 ring-orange-500/40'
                          : 'bg-[#090A0F] border-white/[0.06] text-slate-400 hover:text-slate-200 hover:border-white/[0.12]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-100">{tool.name}</span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase">{tool.type}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 truncate">{tool.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Upstream Model (6 Cols) */}
            <div className="lg:col-span-6 space-y-3">
              <label className="block text-xs font-mono uppercase text-slate-400 font-semibold">
                2. Select Upstream Model:
              </label>
              
              <div className="space-y-2">
                {models.map((model) => {
                  const isSelected = selectedModel === model.id;
                  return (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModel(model.id)}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-orange-500/10 border-orange-500 text-white ring-1 ring-orange-500/40'
                          : 'bg-[#090A0F] border-white/[0.06] text-slate-400 hover:text-slate-200 hover:border-white/[0.12]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-orange-400' : 'bg-slate-600'}`}></span>
                        <div>
                          <div className="text-xs font-bold text-slate-100">{model.name}</div>
                          <div className="text-[10px] font-mono text-slate-500">{model.provider}</div>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono text-orange-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                        {model.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Optional Prompt Input for Aider / OpenCode / Gemini */}
          {(selectedTool === 'aider' || selectedTool === 'opencode' || selectedTool === 'gemini' || selectedTool === 'qwen') && (
            <div className="pt-2">
              <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-1.5">
                Instruction / Message:
              </label>
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="e.g. Refactor user authentication hook with TypeScript"
                className="clean-input text-xs font-mono"
              />
            </div>
          )}

          {/* ======================================================== */}
          {/* OUTPUT TERMINAL BOX */}
          {/* ======================================================== */}
          <div className="rounded-xl bg-[#090A0F] border border-white/[0.1] p-4 sm:p-5 font-mono text-xs relative overflow-hidden">
            
            {/* Header Chrome */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-slate-400 text-[11px] ml-2">
                  {activeTab === 'cli' ? 'Terminal Execution' : activeTab === 'proxy' ? 'cURL / Python REST Spec' : 'VS Code Extension Configuration'}
                </span>
              </div>

              <button
                onClick={() => copyToClipboard(
                  activeTab === 'cli' ? generateCommand() : activeTab === 'proxy' ? curlExample : vsCodeConfig,
                  'terminal'
                )}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] transition-colors"
              >
                {copiedIndex === 'terminal' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copiedIndex === 'terminal' ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Code Body */}
            {activeTab === 'cli' && (
              <div className="space-y-3">
                <div className="text-slate-100 font-bold leading-relaxed whitespace-pre-wrap select-all">
                  <span className="text-orange-400">$</span> {generateCommand()}
                </div>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-white/[0.04]">
                  Tip: Use <span className="text-slate-300 font-bold">omniroute configure {selectedTool}</span> to persist this model as your default.
                </div>
              </div>
            )}

            {activeTab === 'proxy' && (
              <div className="space-y-4">
                <div className="text-slate-300 whitespace-pre-wrap select-all leading-relaxed">
                  {curlExample}
                </div>
                <div className="pt-3 border-t border-white/[0.06]">
                  <div className="text-[11px] text-slate-500 mb-2 font-bold uppercase">Python SDK Equivalent:</div>
                  <pre className="text-slate-400 text-[11px] whitespace-pre-wrap leading-relaxed">
                    {pythonExample}
                  </pre>
                </div>
              </div>
            )}

            {activeTab === 'config' && (
              <div className="space-y-3">
                <div className="text-slate-300 whitespace-pre-wrap select-all leading-relaxed">
                  {vsCodeConfig}
                </div>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-white/[0.04]">
                  Compatible with: <span className="text-slate-300">Cline, Continue.dev, Cursor, Kilo, and OpenCode</span>.
                </div>
              </div>
            )}

          </div>

        </div>

        {/* ======================================================== */}
        {/* ARCHITECTURE PIPELINE & FEATURES */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/[0.07] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-orange-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-100">Zero-Config 'Auto' Routing</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Pass <code className="text-orange-400 font-mono text-xs">--model auto</code> to let Omniroute dynamically match query complexity to the fastest, lowest-cost available provider.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/[0.07] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-orange-400">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-100">Local OpenAI Gateway (Port 20128)</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              A standard OpenAI REST proxy runs locally, allowing legacy OpenAI SDK scripts, curl commands, and IDE plugins to route requests without code changes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/[0.07] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-orange-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-100">Multi-Agent Persistence</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Configures persistent defaults for Claude Code, Codex, Aider, Goose, Cline, and Continue in one centralized dashboard.
            </p>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 text-xs font-mono text-slate-500 text-center">
        <div className="max-w-portfolio mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>&copy; {new Date().getFullYear()} Omniroute Universal Model Gateway.</div>
          <div className="flex items-center gap-4">
            <button onClick={onBackToPortfolio} className="hover:text-white">Portfolio</button>
            <button onClick={() => copyToClipboard('npm install -g omniroute', 'footer')} className="hover:text-white">
              Install CLI
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
