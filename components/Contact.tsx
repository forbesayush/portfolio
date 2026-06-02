'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL, FAQS } from '@/lib/data';

// ─── Honeypot logic ─────────────────────────────────────
const LOAD_TIME = Date.now();

function validateHoneypot(website: string, company2: string): boolean {
  return website === '' && company2 === '';
}

function validateTimeGate(): boolean {
  return Date.now() - LOAD_TIME >= 3000;
}

// ─── FAQ Accordion ───────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="border border-white/5 rounded-2xl overflow-hidden glass"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
          >
            <span className="text-white font-medium text-sm">{f.q}</span>
            <span className={`text-cyan-400 text-xl transition-transform duration-300 flex-shrink-0 ml-4 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">{f.a}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Contact Form with full honeypot suite ───────────────
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // Honeypot fields — invisible to real users
  const [website, setWebsite] = useState('');
  const [company2, setCompany2] = useState('');
  const [hasMoved, setHasMoved] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fn = () => setHasMoved(true);
    window.addEventListener('mousemove', fn, { once: true });
    window.addEventListener('keydown', fn, { once: true });
    return () => { window.removeEventListener('mousemove', fn); window.removeEventListener('keydown', fn); };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Behavioral gate
    if (!hasMoved) { setErrorMsg('Please interact with the page first.'); setStatus('error'); return; }
    // Time gate
    if (!validateTimeGate()) { setErrorMsg('Form submitted too quickly. Please try again.'); setStatus('error'); return; }
    // Honeypot — fake success to fool bots
    if (!validateHoneypot(website, company2)) {
      // Fake loading then fake success for bots
      setStatus('loading');
      await new Promise(r => setTimeout(r, 1200));
      setStatus('success');
      return;
    }
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please fill in all fields.'); setStatus('error'); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.'); setStatus('error'); return;
    }
    setStatus('loading');
    try {
      // Log to Google Sheets (same endpoint as before)
      await fetch(
        'https://script.google.com/macros/s/AKfycbzWvur0FBtdlhYQnADdvJWR2Ij3BRIqSoVbBSidPLRyQKanKpf1x9cFCGAnv1EGRkDd/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message, type: 'contact', timestamp: new Date().toISOString() }),
        }
      );
      setStatus('success');
      setName(''); setEmail(''); setMessage('');
    } catch {
      setErrorMsg('Something went wrong. Please reach out directly on LinkedIn.');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot fields — visually hidden, screen-reader hidden */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
        <input tabIndex={-1} autoComplete="off" name="website" value={website} onChange={e => setWebsite(e.target.value)} />
        <input tabIndex={-1} autoComplete="off" name="company2" value={company2} onChange={e => setCompany2(e.target.value)} />
        {/* Bait email for scrapers */}
        <a href="mailto:do-not-email@spam-trap.ayushchatterjee.me">contact@noreply.ayushchatterjee.me</a>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="relative group">
          <input
            type="text" value={name} onChange={e => setName(e.target.value)}
            placeholder="Your Name" required
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/[0.05] transition-all duration-200 group-hover:border-white/20"
          />
        </div>
        <div className="relative group">
          <input
            type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com" required
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/[0.05] transition-all duration-200 group-hover:border-white/20"
          />
        </div>
      </div>
      <div>
        <textarea
          value={message} onChange={e => setMessage(e.target.value)}
          placeholder="Tell me about the role or project..." required rows={5}
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 focus:bg-white/[0.05] transition-all duration-200 resize-none"
        />
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
            className="text-red-400 text-sm font-mono"
          >{errorMsg}</motion.p>
        )}
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="text-green-400 text-sm font-mono flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Message sent! I'll get back to you soon.
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        whileHover={{ scale: status === 'idle' ? 1.03 : 1 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-3 ${
          status === 'success'
            ? 'bg-green-500/20 border border-green-500/40 text-green-400 cursor-default'
            : 'bg-cyan-500 text-black hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed'
        }`}
      >
        {status === 'loading' && (
          <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        )}
        {status === 'idle' && 'Send Message →'}
        {status === 'loading' && 'Sending...'}
        {status === 'success' && '✓ Sent!'}
        {status === 'error' && 'Try Again →'}
      </motion.button>
    </form>
  );
}

// ─── Contact Section ─────────────────────────────────────
export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* FAQ first */}
        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3"
          >05 // FAQ</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-12"
          >Frequently Asked</motion.h2>
          <div className="max-w-3xl">
            <FAQ />
          </div>
        </div>

        {/* Contact split */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3"
            >06 // Contact</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6"
            >
              Let's Build<br />
              <span className="text-zinc-500">Something Great</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-zinc-400 leading-relaxed mb-8 text-sm"
            >
              I'm actively looking for Product Manager roles — remote, hybrid, or global. If you're building something meaningful and need someone who's analytical, execution-focused, and customer-obsessed, let's talk.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors text-sm group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">🔗</span>
                linkedin.com/in/ayush-chatterjee
              </a>
              <a href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors text-sm group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">✉️</span>
                {PERSONAL.email}
              </a>
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors text-sm group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">⚡</span>
                github.com/forbesayush
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-white font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
