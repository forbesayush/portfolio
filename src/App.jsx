import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isDrawerOpen]);

  const navLinks = ['Story', 'Jobs', 'Message'];
  const socialLinks = ['Instagram', 'TikTok', 'YouTube'];

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black font-hn text-cream select-none">
      
      {/* 1. Background Image (Full-bleed, behind everything, z-0 default) */}
      <img
        src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85"
        alt=""
        className="absolute inset-0 h-full w-full object-cover anim-fade-in pointer-events-none"
      />

      {/* 2. Marquee Name Track (z-10) */}
      <div 
        className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden anim-fade-up pointer-events-none"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-cream">
          <span className="pr-[6vw]">Marcus &mdash; Bennet&nbsp;</span>
          <span className="pr-[6vw]">Marcus &mdash; Bennet&nbsp;</span>
        </div>
      </div>

      {/* 3. Horizontal Cream Rule (z-10) */}
      <div 
        className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream anim-line"
        style={{ animationDelay: '1200ms' }}
      />

      {/* 4. Desktop & Mobile Footer (z-30 mobile, sm:z-10 desktop) */}
      <footer className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn text-cream pointer-events-auto">
        <div 
          className="anim-fade-up text-left"
          style={{ animationDelay: '1400ms' }}
        >
          <div>Visuals Composer</div>
          <div>Digital Crafter</div>
          <div>Obsessed by The Office</div>
        </div>
        <div 
          className="anim-fade-up text-right"
          style={{ animationDelay: '1550ms' }}
        >
          <div>A homage to</div>
          <div>Marcus Holloway</div>
        </div>
      </footer>

      {/* 5. Front Portrait Cutout (z-20, sits above marquee, pointer-events none) */}
      <img
        src="https://stone-expand-60400629.figma.site/_assets/v11/8da570354e86aa0d44ac3e4aa335a72c8e750d68.png"
        alt="Portrait"
        className="absolute inset-0 z-20 h-full w-full object-cover pointer-events-none anim-rise-in"
      />

      {/* 6. Header (z-30) */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8 text-cream pointer-events-auto">
        {/* Brand / Logo */}
        <a 
          href="#" 
          className="font-hn text-lg tracking-wide text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300"
          style={{ animationDelay: '800ms' }}
        >
          Marcus
        </a>

        {/* Desktop Cluster (Year, Nav, Social) */}
        <div className="hidden sm:flex items-start gap-16 lg:gap-24">
          {/* Year */}
          <span 
            className="font-hn text-sm text-cream anim-fade-up"
            style={{ animationDelay: '900ms' }}
          >
            2025
          </span>

          {/* Nav Stack */}
          <nav className="flex flex-col gap-0.5 text-sm font-hn">
            {navLinks.map((link, idx) => (
              <a
                key={link}
                href="#"
                className="text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300"
                style={{ animationDelay: `${1000 + idx * 80}ms` }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social Stack */}
          <div className="flex flex-col gap-0.5 text-sm font-hn">
            {socialLinks.map((link, idx) => (
              <a
                key={link}
                href="#"
                className="text-cream anim-fade-up hover:opacity-60 transition-opacity duration-300"
                style={{ animationDelay: `${1150 + idx * 80}ms` }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* 7. Mobile Hamburger Trigger Button (z-50) */}
      <button
        onClick={() => setIsDrawerOpen(prev => !prev)}
        className="sm:hidden fixed top-6 right-6 z-50 h-10 w-10 flex items-center justify-center anim-fade-up cursor-pointer focus:outline-none"
        style={{ animationDelay: '900ms' }}
        aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
      >
        <div className="relative h-4 w-6 flex flex-col justify-between items-end">
          <span 
            className={`h-[2px] w-6 bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
              isDrawerOpen ? 'translate-y-[7px] rotate-45' : ''
            }`} 
          />
          <span 
            className={`h-[2px] w-6 bg-cream transition-opacity duration-300 ${
              isDrawerOpen ? 'opacity-0' : 'opacity-100'
            }`} 
          />
          <span 
            className={`h-[2px] w-6 bg-cream transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
              isDrawerOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`} 
          />
        </div>
      </button>

      {/* 8. Mobile Drawer (z-40) */}
      {/* Backdrop */}
      <div 
        onClick={() => setIsDrawerOpen(false)}
        className={`sm:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer Panel */}
      <div 
        className={`sm:hidden fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-[#141414] px-8 py-10 flex flex-col justify-between transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Icon inside panel */}
        <button
          onClick={() => setIsDrawerOpen(false)}
          className={`absolute right-6 top-6 text-cream transition-all duration-300 ${
            isDrawerOpen ? 'rotate-0 opacity-100 delay-300' : 'rotate-90 opacity-0'
          }`}
          aria-label="Close drawer"
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        {/* Top: Site Index */}
        <div className="mt-8">
          <span 
            className={`block uppercase tracking-[0.2em] text-cream/50 text-xs transition-all duration-500 ease-out ${
              isDrawerOpen ? 'translate-y-0 opacity-100 delay-[250ms]' : 'translate-y-3 opacity-0'
            }`}
          >
            Site Index
          </span>
          <nav className="mt-6 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={link}
                href="#"
                onClick={() => setIsDrawerOpen(false)}
                className={`text-4xl font-hn text-cream hover:opacity-60 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isDrawerOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{
                  transitionDelay: isDrawerOpen ? `${300 + idx * 80}ms` : '0ms'
                }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom: Find Me */}
        <div>
          <span 
            className={`block uppercase tracking-[0.2em] text-cream/50 text-xs transition-all duration-500 ease-out ${
              isDrawerOpen ? 'translate-y-0 opacity-100 delay-[500ms]' : 'translate-y-3 opacity-0'
            }`}
          >
            Find Me
          </span>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((link, idx) => (
              <a
                key={link}
                href="#"
                onClick={() => setIsDrawerOpen(false)}
                className={`text-sm font-hn text-cream hover:opacity-60 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isDrawerOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isDrawerOpen ? `${550 + idx * 60}ms` : '0ms'
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
