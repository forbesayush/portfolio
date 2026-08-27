import React from 'react';
import { motion } from 'framer-motion';

/**
 * CinematicSection – a full‑screen cinematic scene.
 * It can display a looping video or a canvas animation as a backdrop
 * with a headline and a CTA. The component is lazy‑loaded in the page
 * to keep the initial bundle small.
 */
export const CinematicSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video background – replace src with your cinematic footage */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/cinematic-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Elevate Your Product Strategy
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          Data‑driven insights, seamless execution, and a relentless focus on impact.
        </p>
        <a
          href="#work"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-md transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};
