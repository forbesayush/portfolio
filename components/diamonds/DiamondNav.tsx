"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavProps {
  reservedCount: number;
  onOpenDrawer: () => void;
}

export default function DiamondNav({ reservedCount, onOpenDrawer }: NavProps) {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 inset-x-0 z-50 px-6 py-4 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/80 flex items-center justify-between text-neutral-100"
    >
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
          ← Portfolio Home
        </Link>
        <span className="text-neutral-700">|</span>
        <span className="font-display font-bold tracking-tighter text-xl text-white flex items-center gap-2">
          <span>D-DZIRE</span>
          <span className="text-sky-400 font-mono text-xs px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/50">
            LAB-GROWN LUXURY
          </span>
        </span>
      </div>

      <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest text-neutral-400 font-mono">
        <a href="#hero" className="hover:text-sky-400 transition-colors">3D Diamond</a>
        <a href="#specs" className="hover:text-sky-400 transition-colors">IGI Certification</a>
        <a href="#analytics" className="hover:text-sky-400 transition-colors">Retail Analytics</a>
      </nav>

      <button
        onClick={onOpenDrawer}
        className="relative px-5 py-2 rounded-full bg-sky-400 text-black font-semibold text-xs uppercase tracking-wider hover:bg-sky-300 transition-all flex items-center gap-2 shadow-lg shadow-sky-400/20"
      >
        <span>Reserve Consultation</span>
        <span className="w-5 h-5 rounded-full bg-black text-sky-400 text-[10px] flex items-center justify-center font-bold">
          {reservedCount}
        </span>
      </button>
    </motion.header>
  );
}
