"use client";

import React from "react";
import { PROFILE_CONTENT } from "@/lib/content";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto z-10 relative">
      <motion.h2
        className="text-xs uppercase tracking-widest text-sky-400 mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        Academic Background
      </motion.h2>
      <motion.h3
        className="text-3xl md:text-5xl font-bold text-white mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        Education
      </motion.h3>

      <motion.div
        className="space-y-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {PROFILE_CONTENT.education.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="group relative p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-sky-500/40 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h4 className="text-xl font-semibold text-white group-hover:text-sky-300 transition-colors">
                {edu.degree}
              </h4>
              <span className="text-sm font-mono text-neutral-500 mt-1 md:mt-0">{edu.period}</span>
            </div>
            <p className="text-sky-400 text-sm font-medium mb-2">{edu.institution}</p>
            {edu.details && (
              <p className="text-neutral-400 text-sm leading-relaxed">{edu.details}</p>
            )}
          </motion.div>
        ))}
      </motion.div>

      {PROFILE_CONTENT.certifications.length > 0 && (
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
            Certifications &amp; Courses
          </h4>
          <div className="flex flex-wrap gap-3">
            {PROFILE_CONTENT.certifications.map((cert, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-lg bg-neutral-900/60 border border-neutral-800 text-neutral-300 text-xs font-mono hover:border-sky-500/40 hover:text-sky-300 transition-colors"
              >
                {cert.title}
                <span className="text-neutral-500 ml-1">· {cert.issuer}</span>
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
