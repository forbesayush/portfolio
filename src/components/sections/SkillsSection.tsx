import React, { useState } from 'react';
import { Cpu, Code2, Copy, Check, Terminal } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { soundManager } from '../../audio/soundManager';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentCategory = skillCategories[activeCategoryIndex];
  const currentSkill = currentCategory.skills[selectedSkillIndex] || currentCategory.skills[0];

  const handleCopyCode = () => {
    if (!currentSkill.codeSnippet) return;
    soundManager.playClick();
    navigator.clipboard.writeText(currentSkill.codeSnippet);
    setCopied(true);
    soundManager.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-cyber-neon font-mono text-xs tracking-widest uppercase mb-2">
            <Cpu className="w-3.5 h-3.5 text-cyber-neon" />
            <span>HOLOGRAPHIC SKILL MATRIX</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            CORE MASTERY &amp; SYSTEM KERNELS
          </h2>
        </div>

        {/* Category switcher tabs */}
        <div className="flex flex-wrap gap-2">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => {
                soundManager.playClick();
                setActiveCategoryIndex(idx);
                setSelectedSkillIndex(0);
              }}
              onMouseEnter={() => soundManager.playHover()}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                activeCategoryIndex === idx
                  ? 'bg-cyber-neon text-black font-bold shadow-glow-neon/30'
                  : 'bg-surface-glass hover:bg-surface-glass-hover text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Left Skill Cards / Right Code Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Skills list */}
        <div className="lg:col-span-5 space-y-4">
          <p className="font-sans text-sm text-slate-400 mb-2">
            {currentCategory.description}
          </p>

          {currentCategory.skills.map((skill, idx) => {
            const isSelected = selectedSkillIndex === idx;
            return (
              <div
                key={skill.name}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedSkillIndex(idx);
                }}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor-text="INSPECT"
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-surface-glass-hover border-cyber-neon/60 shadow-glow-neon/20 -translate-x-1'
                    : 'bg-surface-glass border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-bold text-white text-base">
                    {skill.name}
                  </h4>
                  <span className="font-mono text-xs text-cyber-neon font-bold">
                    {skill.level}%
                  </span>
                </div>

                <p className="font-sans text-xs text-slate-300 mb-3 leading-relaxed">
                  {skill.description}
                </p>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-neon rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="flex justify-between items-center mt-3 font-mono text-[10px] text-slate-500">
                  <span>EXPERIENCE: {skill.experience}</span>
                  <span className="text-cyber-cyan flex items-center gap-1">
                    <Code2 className="w-3 h-3" />
                    {isSelected ? 'ACTIVE SANDBOX' : 'CLICK TO VIEW CODE'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Code Sandbox Terminal Preview */}
        <div className="lg:col-span-7 flex flex-col rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl overflow-hidden shadow-spatial">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-cyber-neon" />
              <span className="font-mono text-xs text-slate-300 font-bold">
                {currentSkill.name} (Architecture Kernel)
              </span>
            </div>

            <button
              onClick={handleCopyCode}
              onMouseEnter={() => soundManager.playHover()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-cyber-neon" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED' : 'COPY CODE'}</span>
            </button>
          </div>

          {/* Code Body */}
          <div className="p-6 flex-1 font-mono text-xs leading-relaxed text-slate-200 overflow-x-auto bg-black/80">
            <pre className="text-cyber-cyan/90 font-mono">
              <code>{currentSkill.codeSnippet || '// No code snippet attached'}</code>
            </pre>
          </div>

          {/* Sandbox Info Footer */}
          <div className="px-5 py-3 bg-white/5 border-t border-white/5 font-mono text-[11px] text-slate-400 flex justify-between">
            <span>RUNTIME: 2027 Edge Node V8 + SIMD Wasm</span>
            <span className="text-cyber-neon">VERIFIED PRODUCTION COMPATIBLE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
