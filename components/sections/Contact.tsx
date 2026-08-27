"use client";

import React from "react";
import { PROFILE_CONTENT } from "@/lib/content";

export default function Contact() {
  const { person } = PROFILE_CONTENT;

  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center z-10 relative">
      <h2 className="text-xs uppercase tracking-widest text-sky-400 mb-2">Get In Touch</h2>
      <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Have a problem worth solving?</h3>
      <p className="text-neutral-400 text-lg mb-10">
        Let&apos;s talk data, products, strategy, and growth.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <a
          href={`mailto:${person.email}`}
          className="px-8 py-4 rounded-full bg-sky-500 text-black font-semibold hover:bg-sky-400 transition-colors"
        >
          {person.email} ↗
        </a>
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 text-white font-medium hover:bg-neutral-800 transition-colors"
        >
          LinkedIn Profile ↗
        </a>
      </div>
    </section>
  );
}
