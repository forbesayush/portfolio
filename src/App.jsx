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
import SpotlightCommandPalette from './components/SpotlightCommandPalette';
import QuickActionsDock from './components/QuickActionsDock';
import { trackVisitor } from './utils/telegramTracker';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    trackVisitor();

    // Global Command+K / Ctrl+K listener
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSpotlightOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090E] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased relative">
      
      {/* Sticky App OS Navigation Header */}
      <Navbar 
        onOpenBrief={() => setIsBriefOpen(true)}
        onOpenSpotlight={() => setIsSpotlightOpen(true)}
      />

      {/* Main App Content Modules */}
      <main className="flex-grow">
        
        {/* Module 00: Executive Studio Hero & Telemetry Dials */}
        <Hero 
          onOpenBrief={() => setIsBriefOpen(true)}
          onOpenSpotlight={() => setIsSpotlightOpen(true)}
        />

        {/* Module 01: Executive Bio & 4 Product Pillars */}
        <About />

        {/* Module 02: STAR Method Project Deck (Situation, Task, Action, Result) */}
        <CaseStudies />

        {/* Module 03: Verified Experience Ledger & Timeline */}
        <ExperienceTimeline />

        {/* Module 04: Product & Growth Capability Stack */}
        <SkillsMatrix />

        {/* Module 05: Superhuman / Raycast Style Direct Transmission Terminal */}
        <Contact />

      </main>

      {/* Global App Footer */}
      <Footer />

      {/* Floating System Dock */}
      <QuickActionsDock 
        onOpenBrief={() => setIsBriefOpen(true)}
        onOpenSpotlight={() => setIsSpotlightOpen(true)}
      />

      {/* Raycast-Style Spotlight Command Palette (⌘K) */}
      <SpotlightCommandPalette
        isOpen={isSpotlightOpen}
        onClose={() => setIsSpotlightOpen(false)}
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
