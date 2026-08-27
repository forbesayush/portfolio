"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROFILE_CONTENT } from "@/lib/content";

export default function Navigation() {
  const { person } = PROFILE_CONTENT;

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-full bg-neutral-900/60 backdrop-blur-md border border-neutral-800 text-sm text-neutral-300">
        <span className="font-semibold tracking-wider text-white">{person.brandName}</span>
        <div className="hidden md:flex items-center space-x-6 text-xs uppercase tracking-widest">
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
          <a href="#education" className="hover:text-sky-400 transition-colors">Education</a>
        </div>
        <a
          href={`mailto:${person.email}`}
          className="text-xs px-4 py-2 rounded-full border border-sky-400/40 text-sky-400 hover:bg-sky-400/10 transition-colors"
        >
          Let&apos;s Talk ↗
        </a>
      </nav>
    </motion.header>
  );
}
