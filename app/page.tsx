'use client';
import dynamic from 'next/dynamic';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Pipeline from '@/components/Pipeline';
import CaseStudies from '@/components/CaseStudies';
import Toolkit from '@/components/Toolkit';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SecurityWrapper from '@/components/SecurityWrapper';

const ParticleCanvas = dynamic(() => import('@/components/ParticleCanvas'), { ssr: false });

export default function Home() {
  return (
    <SecurityWrapper>
      <main className="relative min-h-screen">
        <ParticleCanvas />
        <div className="relative z-10">
          <Nav />
          <Hero />
          <Pipeline />
          <CaseStudies />
          <Toolkit />
          <Contact />
          <Footer />
        </div>
      </main>
    </SecurityWrapper>
  );
}
