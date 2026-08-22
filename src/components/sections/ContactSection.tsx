import React, { useState } from 'react';
import { Send, Mail, Calendar, Key, Check, Sparkles, Radio } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../../audio/soundManager';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Job Opportunity',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pgpCopied, setPgpCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundManager.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      soundManager.playSuccess();

      // Trigger particle burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#00f0ff', '#ffaa00', '#00ffaa', '#ffffff'],
        });
      } catch {
        // ignore
      }
    }, 800);
  };

  const handleCopyPgp = () => {
    soundManager.playClick();
    navigator.clipboard.writeText('8F32 99A1 C402 B889 00EA 2027 D301 77FE');
    setPgpCopied(true);
    soundManager.playSuccess();
    setTimeout(() => setPgpCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-2">
            <Radio className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
            <span>CONTACT</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            GET IN TOUCH
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-400">
          I usually reply within a day
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Col: Contact Credentials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-7 rounded-2xl bg-surface-glass border border-white/10 backdrop-blur-xl shadow-spatial space-y-6">
            <h3 className="font-display font-bold text-xl text-white">
              Reach Me
            </h3>
            <p className="font-sans text-sm text-slate-300 leading-relaxed">
              I'm open to staff and principal architecture roles, advisory work, and interesting collaborations.
            </p>

            <div className="space-y-4 font-mono text-xs">
              {/* Email */}
              <a
                href="mailto:ayushchatterjee.edu@gmail.com"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-cyber-cyan/40 text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-cyber-cyan/10 text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase">Direct Email</span>
                  <span className="text-cyber-cyan font-bold">ayushchatterjee.edu@gmail.com</span>
                </div>
              </a>

              {/* Calendar Sync */}
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-cyber-amber/40 text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-cyber-amber/10 text-cyber-amber group-hover:bg-cyber-amber group-hover:text-black transition-colors">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase">30-Min Technical Sync</span>
                  <span className="text-cyber-amber font-bold">cal.com/ayushchatterjee/30min</span>
                </div>
              </a>

              {/* Calendar Sync End */}
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-9 rounded-2xl bg-surface-glass border border-white/10 backdrop-blur-xl shadow-spatial relative overflow-hidden">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-cyber-neon/20 border border-cyber-neon/50 text-cyber-neon flex items-center justify-center mx-auto shadow-glow-neon/30">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  MESSAGE SENT
                </h3>
                <p className="font-sans text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  onMouseEnter={() => soundManager.playHover()}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-slate-400 uppercase">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onKeyDown={() => soundManager.playTypeKey()}
                      placeholder="Sarah Chen"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-slate-400 uppercase">
                      EMAIL CONTACT *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onKeyDown={() => soundManager.playTypeKey()}
                      placeholder="you@company.com"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-slate-400 uppercase">
                    TOPIC
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-cyan transition-colors"
                  >
                    <option value="Job Opportunity" className="bg-background-secondary text-white">
                      Job Opportunity
                    </option>
                    <option value="Project Collaboration" className="bg-background-secondary text-white">
                      Project Collaboration
                    </option>
                    <option value="Consulting / Advisory" className="bg-background-secondary text-white">
                      Consulting / Advisory
                    </option>
                    <option value="Speaking / Workshop" className="bg-background-secondary text-white">
                      Speaking / Workshop
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-slate-400 uppercase">
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onKeyDown={() => soundManager.playTypeKey()}
                    placeholder="Tell me what you have in mind..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => soundManager.playHover()}
                  data-cursor-text="TRANSMIT"
                  className="w-full py-4 rounded-xl bg-cyber-cyan hover:bg-cyber-neon text-black font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-glow-cyan/30 flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : 'group-hover:translate-x-1 transition-transform'}`} />
                  <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
