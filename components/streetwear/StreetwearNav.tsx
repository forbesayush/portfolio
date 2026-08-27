"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function StreetwearNav({ cartCount, onOpenCart }: NavProps) {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 inset-x-0 z-50 px-6 py-4 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/80 flex items-center justify-between text-neutral-100"
    >
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
          ← Portfolio
        </Link>
        <span className="text-neutral-700">|</span>
        <span className="font-display font-bold tracking-tighter text-xl text-white">
          NEO<span className="text-orange-500">//</span>DROP 04
        </span>
      </div>

      <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest text-neutral-400 font-mono">
        <a href="#hero" className="hover:text-orange-500 transition-colors">Showcase</a>
        <a href="#specs" className="hover:text-orange-500 transition-colors">Tech Specs</a>
        <a href="#features" className="hover:text-orange-500 transition-colors">Materials</a>
      </nav>

      <button
        onClick={onOpenCart}
        className="relative px-5 py-2 rounded-full bg-orange-500 text-black font-semibold text-xs uppercase tracking-wider hover:bg-orange-400 transition-all flex items-center gap-2"
      >
        <span>Bag</span>
        <span className="w-5 h-5 rounded-full bg-black text-orange-500 text-[10px] flex items-center justify-center font-bold">
          {cartCount}
        </span>
      </button>
    </motion.header>
  );
}
