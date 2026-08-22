import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
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
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-cyber-neon tracking-wider uppercase block mb-1">
            STACK &amp; KERNELS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            WHAT I WORK WITH
          </h2>
        </div>

        {/* Category Tabs */}
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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                activeCategoryIndex === idx
                  ? 'bg-cyber-neon text-black font-bold'
                  : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Workbench Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Skill Cards */}
        <div className="lg:col-span-5 space-y-3">
          <p className="font-mono text-xs text-slate-400 mb-2">
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
                data-cursor-text="VIEW"
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white/10 border-cyber-neon/80 shadow-glow-neon/10'
                    : 'bg-[#090b10] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-display font-bold text-white text-base">
                    {skill.name}
                  </h4>
                  <span className="font-mono text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    {skill.experience}
                  </span>
                </div>

                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right: Code Sandbox Panel */}
        <div className="lg:col-span-7 rounded-xl bg-[#090b10] border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyber-neon" />
              <span className="font-mono text-xs text-slate-200 font-bold">
                {currentSkill.name}
              </span>
            </div>

            <button
              onClick={handleCopyCode}
              onMouseEnter={() => soundManager.playHover()}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3 h-3 text-cyber-neon" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Code Body */}
          <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto bg-black/70">
            <pre className="text-cyber-cyan/90 font-mono">
              <code>{currentSkill.codeSnippet || '// No code snippet'}</code>
            </pre>
          </div>

          {/* Footer */}
          <div className="px-5 py-2.5 bg-white/5 border-t border-white/5 font-mono text-[11px] text-slate-400 flex justify-between">
            <span>Environment: Production Tested</span>
            <span className="text-slate-300">TypeScript / Rust / WGSL</span>
          </div>
        </div>
      </div>
    </section>
  );
};
