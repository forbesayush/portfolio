import React, { useState } from 'react';
import { Send, Mail, Calendar, Sparkles } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundManager.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      soundManager.playSuccess();

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#00f0ff', '#00ffaa', '#ffffff'],
        });
      } catch {
        // ignore
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 text-left">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs sm:text-sm text-cyber-cyan tracking-wider uppercase block mb-1.5 font-bold">
            Contact
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Start a conversation
          </h2>
        </div>
        <div className="font-mono text-xs sm:text-sm text-slate-400 font-medium">
          I usually reply within a day
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-7 sm:p-8 rounded-2xl bg-[#090b10] border border-white/10 space-y-6 shadow-2xl">
            <h3 className="font-display font-black text-xl sm:text-2xl text-white">
              Direct Channels
            </h3>
            <p className="font-sans text-base text-slate-300 leading-relaxed font-normal">
              Open to full-time product management and consulting roles, MBA internships, and project collaborations.
            </p>

            <div className="space-y-3.5 font-mono text-xs sm:text-sm">
              {/* Email */}
              <a
                href="mailto:ayushchatterjee.edu@gmail.com"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-cyan/40 text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-cyber-cyan/10 text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Email</span>
                  <span className="text-cyber-cyan font-bold text-sm sm:text-base">ayushchatterjee.edu@gmail.com</span>
                </div>
              </a>

              {/* Calendar Sync */}
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-amber/40 text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-cyber-amber/10 text-cyber-amber group-hover:bg-cyber-amber group-hover:text-black transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Schedule Intro Call</span>
                  <span className="text-cyber-amber font-bold text-sm sm:text-base">30-minute chat</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-9 rounded-2xl bg-[#090b10] border border-white/10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-cyber-neon/20 border border-cyber-neon/40 text-cyber-neon flex items-center justify-center mx-auto">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  Message Sent
                </h3>
                <p className="font-sans text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thanks for getting in touch. I'll reply to your email shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  onMouseEnter={() => soundManager.playHover()}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-mono font-medium text-white transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs sm:text-sm text-slate-300 font-bold uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onKeyDown={() => soundManager.playTypeKey()}
                      placeholder="Alex"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs sm:text-sm text-slate-300 font-bold uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onKeyDown={() => soundManager.playTypeKey()}
                      placeholder="you@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-xs sm:text-sm text-slate-300 font-bold uppercase">
                    Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#0c0f18] border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-cyber-cyan transition-colors font-medium"
                  >
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Consulting / Advisory">Consulting / Advisory</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-xs sm:text-sm text-slate-300 font-bold uppercase">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onKeyDown={() => soundManager.playTypeKey()}
                    placeholder="Tell me what you have in mind..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => soundManager.playHover()}
                  data-cursor-text="SEND"
                  className="w-full py-4 rounded-xl bg-cyber-cyan hover:bg-cyber-neon text-black font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 shadow-glow-cyan/20 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
