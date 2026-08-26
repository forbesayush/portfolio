import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExecutiveDashboard from './components/ExecutiveDashboard';
import CaseStudies from './components/CaseStudies';
import ExperienceTimeline from './components/ExperienceTimeline';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExecutiveBriefModal from './components/ExecutiveBriefModal';
import QuickActionsDock from './components/QuickActionsDock';
import { trackVisitor } from './utils/telegramTracker';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  useEffect(() => {
    // Remove dark class for luxury light theme
    document.documentElement.classList.remove('dark');
    // Track visitor arrival via encrypted Telegram bot telemetry
    trackVisitor();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#111318] flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#5B4323] antialiased relative">
      
      {/* Luxury Navigation Bar */}
      <Navbar 
        onOpenBrief={() => setIsBriefOpen(true)}
      />

      {/* Main Content Modules */}
      <main className="flex-grow">
        
        {/* Module 00: Editorial Luxury Hero */}
        <Hero 
          onOpenBrief={() => setIsBriefOpen(true)}
        />

        {/* Module 01: Interactive Executive Growth Dashboard & Panels */}
        <ExecutiveDashboard />

        {/* Module 02: STAR Method Project Casebooks (Situation, Task, Action, Result) */}
        <CaseStudies />

        {/* Module 03: Commercial Experience Ledger */}
        <ExperienceTimeline />

        {/* Module 04: Executive Bio & 4 Core Pillars */}
        <About />

        {/* Module 05: Private Mandate & Communication Terminal */}
        <Contact />

      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating System Action Dock */}
      <QuickActionsDock 
        onOpenBrief={() => setIsBriefOpen(true)}
      />

      {/* 1-Page Executive ATS Brief Modal */}
      <ExecutiveBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />

    </div>
  );
}
