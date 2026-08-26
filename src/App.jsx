import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsMatrix from './components/SkillsMatrix';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExecutiveBriefModal from './components/ExecutiveBriefModal';
import QuickActionsDock from './components/QuickActionsDock';
import { trackVisitor } from './utils/telegramTracker';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  useEffect(() => {
    // Default dark theme for FinTech aesthetic
    document.documentElement.classList.add('dark');
    // Track visitor arrival via encrypted Telegram bot telemetry
    trackVisitor();
  }, []);

  return (
    <div className="min-h-screen bg-[#07080B] text-slate-100 flex flex-col font-sans selection:bg-blue-500/25 selection:text-blue-200 antialiased relative">
      
      {/* Sticky FinTech Navigation Bar */}
      <Navbar 
        onOpenBrief={() => setIsBriefOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Section 00: FinTech Hero with 3D Titanium Card & Live Telemetry */}
        <Hero 
          onOpenBrief={() => setIsBriefOpen(true)} 
        />

        {/* Section 01: Executive Bio & 4 Core Growth Pillars */}
        <About />

        {/* Section 02: STAR Method Project Casebooks (Situation, Task, Action, Result) */}
        <CaseStudies />

        {/* Section 03: Verified Career Ledger & Transaction Feed */}
        <ExperienceTimeline />

        {/* Section 04: FinTech & Growth Capability Matrix */}
        <SkillsMatrix />

        {/* Section 05: Instant Settlement & Communication Hub */}
        <Contact />

      </main>

      {/* Global FinTech Footer */}
      <Footer />

      {/* Floating Action Dock */}
      <QuickActionsDock 
        onOpenBrief={() => setIsBriefOpen(true)} 
      />

      {/* 1-Page Executive ATS Audit Brief Modal */}
      <ExecutiveBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />

    </div>
  );
}
