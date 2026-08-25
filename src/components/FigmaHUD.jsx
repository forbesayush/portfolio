import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, Layout, Component, MessageSquare, Palette, Play, Eye, Copy, Check, Sparkles, ZoomIn, ZoomOut, X } from 'lucide-react';

export default function FigmaHUD({ 
  showCursors, 
  onToggleCursors, 
  isDesignMode, 
  onToggleDesignMode,
  onOpenBrief
}) {
  const [activeTool, setActiveTool] = useState('select');
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [copiedHex, setCopiedHex] = useState(null);

  const designTokens = [
    { name: 'Marketing Coral', hex: '#FF5B37', role: 'Primary CTA & Brand Hook' },
    { name: 'Ultra Violet', hex: '#8B5CF6', role: 'Strategy & Intelligence' },
    { name: 'Cyber Cyan', hex: '#06B6D4', role: 'Funnel Telemetry & CRO' },
    { name: 'Growth Emerald', hex: '#10B981', role: 'Verified ROI & Conversion' },
    { name: 'Obsidian Canvas', hex: '#08090A', role: 'Dark Surface Canvas' },
    { name: 'Alabaster Light', hex: '#FAFAFA', role: 'Light Surface Canvas' }
  ];

  const copyHex = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <>
      {/* Floating Figma Top Tool Ribbon */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.3 }}
        className="fixed top-20 sm:top-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 p-1 rounded-xl bg-white/95 dark:bg-[#14171F]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 shadow-xl transition-all"
      >
        {/* Figma Canvas Label */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 pr-3 border-r border-black/[0.08] dark:border-white/[0.1] text-[11px] font-mono font-bold text-zinc-800 dark:text-zinc-200">
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span>FIGMA CANVAS</span>
        </div>

        {/* Pointer Tool (V) */}
        <button
          onClick={() => setActiveTool('select')}
          className={`p-2 rounded-lg text-xs font-mono transition-colors flex items-center gap-1 ${
            activeTool === 'select'
              ? 'bg-[#0C8CE9] text-white shadow-xs'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
          }`}
          title="Select / Move (V)"
        >
          <MousePointer2 className="w-3.5 h-3.5" />
        </button>

        {/* Frame Tool (F) / Auto-Layout View */}
        <button
          onClick={() => {
            setActiveTool('frame');
            onToggleDesignMode();
          }}
          className={`p-2 rounded-lg text-xs font-mono transition-colors flex items-center gap-1 ${
            isDesignMode
              ? 'bg-[#7B61FF] text-white shadow-xs'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
          }`}
          title="Toggle Figma Frame Inspector & Auto-Layout Tags (F)"
        >
          <Layout className="w-3.5 h-3.5" />
        </button>

        {/* Multiplayer / Comments Tool (C) */}
        <button
          onClick={() => {
            setActiveTool('comments');
            onToggleCursors();
          }}
          className={`p-2 rounded-lg text-xs font-mono transition-colors flex items-center gap-1 relative ${
            showCursors
              ? 'bg-[#00C48C] text-zinc-950 font-bold shadow-xs'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
          }`}
          title="Toggle Multiplayer Cursors & Comments (C)"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="text-[10px] hidden md:inline">Multiplayer</span>
        </button>

        {/* Design Tokens Palette Inspector */}
        <button
          onClick={() => setIsPaletteOpen(prev => !prev)}
          className={`p-2 rounded-lg text-xs font-mono transition-colors flex items-center gap-1 ${
            isPaletteOpen
              ? 'bg-rose-500 text-white shadow-xs'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
          }`}
          title="Inspect Design System Color Tokens"
        >
          <Palette className="w-3.5 h-3.5" />
          <span className="text-[10px] hidden md:inline">Tokens</span>
        </button>

        {/* Prototype Play Trigger */}
        <div className="pl-1 border-l border-black/[0.08] dark:border-white/[0.1]">
          <button
            onClick={onOpenBrief}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-xs font-mono font-bold text-zinc-900 dark:text-white transition-all shadow-xs"
            title="Present 1-Page Interactive Prototype Brief"
          >
            <Play className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>Present</span>
          </button>
        </div>
      </motion.div>

      {/* Design System Token Flyout Drawer */}
      <AnimatePresence>
        {isPaletteOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-36 sm:top-20 left-1/2 -translate-x-1/2 z-50 w-80 sm:w-96 p-4 rounded-2xl bg-white dark:bg-[#14171F] border border-black/10 dark:border-white/15 shadow-2xl text-left"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center">
                  <Palette className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase text-zinc-950 dark:text-white">
                    Figma Design System Tokens
                  </h3>
                  <p className="text-[10px] text-zinc-500 font-mono">
                    Click any swatch to copy HEX code
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsPaletteOpen(false)}
                className="p-1 text-zinc-400 hover:text-zinc-950 dark:hover:text-white rounded-md transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Token Swatches Grid */}
            <div className="space-y-2">
              {designTokens.map((token) => (
                <button
                  key={token.hex}
                  onClick={() => copyHex(token.hex)}
                  className="w-full flex items-center justify-between p-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-colors text-left group"
                >
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-5 h-5 rounded-lg border border-black/10 dark:border-white/10 shrink-0 shadow-xs"
                      style={{ backgroundColor: token.hex }}
                    ></div>
                    <div>
                      <div className="text-xs font-display font-semibold text-zinc-900 dark:text-white">
                        {token.name}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-mono">
                        {token.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-rose-500">
                    <span>{copiedHex === token.hex ? 'Copied!' : token.hex}</span>
                    {copiedHex === token.hex ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </div>
                </button>
              ))}
            </div>

            {/* Auto-Layout Specs */}
            <div className="mt-3 pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>Auto-Layout: ↕ 24px Gap</span>
              <span>Radius: 16px</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
