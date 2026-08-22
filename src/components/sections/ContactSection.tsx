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
          <span className="font-mono text-xs text-cyber-cyan tracking-wider uppercase block mb-1">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            START A CONVERSATION
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-400">
          I usually reply within a day
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-xl bg-[#090b10] border border-white/10 space-y-5">
            <h3 className="font-display font-bold text-lg text-white">
              Direct Channels
            </h3>
            <p className="font-sans text-sm text-slate-300 leading-relaxed">
              Open to staff engineering roles, architecture consulting, and technical advisory.
            </p>

            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <a
                href="mailto:ayushchatterjee.edu@gmail.com"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                className="flex items-center gap-3 p-3.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyber-cyan/40 text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2 rounded bg-cyber-cyan/10 text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase">Email</span>
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
                className="flex items-center gap-3 p-3.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyber-amber/40 text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2 rounded bg-cyber-amber/10 text-cyber-amber group-hover:bg-cyber-amber group-hover:text-black transition-colors">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase">Schedule Intro Call</span>
                  <span className="text-cyber-amber font-bold">30-minute chat</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-xl bg-[#090b10] border border-white/10">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-cyber-neon/20 border border-cyber-neon/40 text-cyber-neon flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Message Sent
                </h3>
                <p className="font-sans text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thanks for getting in touch. I'll reply to your email shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  onMouseEnter={() => soundManager.playHover()}
                  className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-mono text-xs text-slate-400 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onKeyDown={() => soundManager.playTypeKey()}
                      placeholder="Alex"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-mono text-xs text-slate-400 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onKeyDown={() => soundManager.playTypeKey()}
                      placeholder="you@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-mono text-xs text-slate-400 uppercase">
                    Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#0c0f18] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyber-cyan transition-colors"
                  >
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Consulting / Advisory">Consulting / Advisory</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block font-mono text-xs text-slate-400 uppercase">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onKeyDown={() => soundManager.playTypeKey()}
                    placeholder="Tell me what you have in mind..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => soundManager.playHover()}
                  data-cursor-text="SEND"
                  className="w-full py-3 rounded-lg bg-cyber-cyan hover:bg-cyber-neon text-black font-mono font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
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
