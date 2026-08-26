import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import ExperienceTimeline from './components/ExperienceTimeline';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExecutiveBriefModal from './components/ExecutiveBriefModal';
import { trackVisitor } from './utils/telegramTracker';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    trackVisitor();
  }, []);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F8FAFC] flex flex-col font-sans selection:bg-orange-500/20 selection:text-orange-200 antialiased relative">
      
      {/* Refined Digital Marketing Navigation Header */}
      <Navbar 
        onOpenBrief={() => setIsBriefOpen(true)}
      />

      {/* Main Content Modules */}
      <main className="flex-grow">
        
        {/* Module 01: Hero & Marketing Positioning */}
        <Hero 
          onOpenBrief={() => setIsBriefOpen(true)}
        />

        {/* Module 02: STAR Method Marketing Campaigns */}
        <CaseStudies />

        {/* Module 03: Work Experience & Career Ledger */}
        <ExperienceTimeline />

        {/* Module 04: Marketing Philosophy & Academic Foundation */}
        <About />

        {/* Module 05: Consultation & Brand Inquiry */}
        <Contact />

      </main>

      {/* Global Clean Footer */}
      <Footer />

      {/* 1-Page Executive ATS Brief Modal */}
      <ExecutiveBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />

    </div>
  );
}
