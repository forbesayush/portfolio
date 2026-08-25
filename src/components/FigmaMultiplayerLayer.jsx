import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Sparkles, CornerDownLeft, Send, Check } from 'lucide-react';

// Custom SVG Figma Cursor
function FigmaCursorIcon({ color = "#7B61FF" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
      <path
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L17.7841 12.3673H5.65376Z"
        fill={color}
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function FigmaMultiplayerLayer({ showCursors = true, isDesignMode = true }) {
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [commentReplyText, setCommentReplyText] = useState('');
  const [repliedComments, setRepliedComments] = useState({});

  // Collaborative Figma comments pinned to specific page sections
  const figmaComments = [
    {
      id: 'c1',
      author: 'Sarah (VP Growth @ D2C Brand)',
      role: 'Growth Director',
      color: '#FF7262',
      section: 'Funnel Simulator',
      text: 'The breakdown of the 17% repeat deficit here is genius. Exactly how we structure retention in Klaviyo.',
      time: '12m ago',
      position: { top: '38%', left: '8%' },
      tag: '💬 #01'
    },
    {
      id: 'c2',
      author: 'Marcus (Partner @ Venture Studio)',
      role: 'Investor / Strategist',
      color: '#00C48C',
      section: 'Casebooks',
      text: 'Verified 22% UX defect drop + 15% task flow speed at OnePlus is a defensible product metric.',
      time: '34m ago',
      position: { top: '62%', right: '7%' },
      tag: '💬 #02'
    }
  ];

  const handleReply = (commentId) => {
    if (!commentReplyText.trim()) return;
    setRepliedComments(prev => ({
      ...prev,
      [commentId]: [...(prev[commentId] || []), { author: 'You (Visitor)', text: commentReplyText, time: 'Just now' }]
    }));
    setCommentReplyText('');
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      
      {/* 1. Animated Multiplayer Collaborative Cursors */}
      {showCursors && (
        <>
          {/* Cursor 1: Ayush (Growth Lead) */}
          <motion.div
            className="absolute z-40 flex items-start gap-1"
            initial={{ x: '25vw', y: '35vh' }}
            animate={{
              x: ['25vw', '38vw', '32vw', '25vw'],
              y: ['35vh', '42vh', '28vh', '35vh'],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FigmaCursorIcon color="#7B61FF" />
            <div className="figma-cursor-tag bg-[#7B61FF] text-white">
              <span>Ayush C. (Growth Lead)</span>
              <span className="text-[9px] opacity-80 font-mono">❖ Editing</span>
            </div>
          </motion.div>

          {/* Cursor 2: D2C Hiring Manager */}
          <motion.div
            className="absolute z-40 hidden sm:flex items-start gap-1"
            initial={{ x: '75vw', y: '50vh' }}
            animate={{
              x: ['75vw', '62vw', '70vw', '75vw'],
              y: ['50vh', '65vh', '55vh', '50vh'],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <FigmaCursorIcon color="#00C48C" />
            <div className="figma-cursor-tag bg-[#00C48C] text-zinc-950 font-semibold">
              <span>D2C Recruiter 👁️</span>
              <span className="text-[9px] opacity-75 font-mono">Viewing Funnel</span>
            </div>
          </motion.div>

          {/* Cursor 3: Marketing Director */}
          <motion.div
            className="absolute z-40 hidden md:flex items-start gap-1"
            initial={{ x: '50vw', y: '78vh' }}
            animate={{
              x: ['50vw', '42vw', '56vw', '50vw'],
              y: ['78vh', '70vh', '82vh', '78vh'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            <FigmaCursorIcon color="#FF7262" />
            <div className="figma-cursor-tag bg-[#FF7262] text-white">
              <span>CMO / Partner 💬</span>
            </div>
          </motion.div>
        </>
      )}

      {/* 2. Interactive Figma Comment Pins on Canvas */}
      {figmaComments.map((c) => {
        const isOpen = activeCommentId === c.id;
        const replies = repliedComments[c.id] || [];

        return (
          <div
            key={c.id}
            style={{
              position: 'absolute',
              top: c.position.top,
              left: c.position.left,
              right: c.position.right
            }}
            className="pointer-events-auto z-40"
          >
            {/* Clickable Comment Avatar Pin */}
            <button
              onClick={() => setActiveCommentId(isOpen ? null : c.id)}
              className="group relative flex items-center gap-1.5 p-1.5 rounded-full bg-white dark:bg-[#0E1015] border-2 shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
              style={{ borderColor: c.color }}
              title={`View comment from ${c.author}`}
            >
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
                style={{ backgroundColor: c.color }}
              >
                <MessageSquare className="w-3 h-3 fill-current" />
              </div>
              <span className="text-[11px] font-mono font-bold pr-2 text-zinc-800 dark:text-zinc-200">
                {c.tag}
              </span>
            </button>

            {/* Comment Thread Flyout Modal */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 sm:-left-4 w-72 sm:w-80 p-4 rounded-2xl bg-white dark:bg-[#0E1015] border border-black/10 dark:border-white/15 shadow-2xl z-50 text-left"
                >
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-black/[0.06] dark:border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-bold"
                        style={{ backgroundColor: c.color }}
                      >
                        {c.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-display font-bold text-zinc-950 dark:text-white leading-tight">
                          {c.author}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400">
                          {c.role} &bull; {c.time}
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveCommentId(null)}
                      className="p-1 text-zinc-400 hover:text-zinc-950 dark:hover:text-white rounded-md transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                    "{c.text}"
                  </p>

                  {/* Thread Replies */}
                  {replies.length > 0 && (
                    <div className="space-y-2 mb-3 pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
                      {replies.map((r, rIdx) => (
                        <div key={rIdx} className="p-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] text-xs">
                          <span className="font-bold text-zinc-900 dark:text-white text-[11px] block">{r.author}</span>
                          <span className="text-zinc-600 dark:text-zinc-300 text-[11px]">{r.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Quick Reply Form */}
                  <div className="flex items-center gap-1.5 pt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                    <input
                      type="text"
                      value={commentReplyText}
                      onChange={(e) => setCommentReplyText(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleReply(c.id)}
                      placeholder="Reply to thread..."
                      className="flex-1 px-2.5 py-1.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-rose-500"
                    />
                    <button
                      onClick={() => handleReply(c.id)}
                      className="p-1.5 rounded-lg bg-rose-500 text-white hover:bg-rose-600 transition-colors"
                      title="Post Reply"
                    >
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

    </div>
  );
}
