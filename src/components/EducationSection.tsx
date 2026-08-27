import React from 'react';
import { ayushData } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';

interface SectionProps {
  theme?: 'dark' | 'light';
}

export const EducationSection: React.FC<SectionProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="education"
      className={`py-32 px-6 md:px-12 transition-colors duration-500 relative border-t ${
        isDark ? 'bg-neutral-950 text-white border-white/10' : 'bg-[#faf8f5] text-neutral-900 border-neutral-200'
      }`}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Education Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col items-start gap-3">
              <span className="font-mono-code text-[11px] uppercase tracking-[0.28em] text-amber-500 font-bold">
                [04 / ACADEMICS]
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Education &amp; <span className="font-playfair italic font-normal text-amber-500">Degrees</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {ayushData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-6 sm:p-8 flex items-start gap-5 border transition-all duration-300 ${
                    isDark
                      ? 'bg-neutral-900/70 border-white/10 hover:border-amber-500/50 shadow-2xl'
                      : 'bg-white border-neutral-200 hover:border-amber-500/50 shadow-md'
                  }`}
                >
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-amber-500 font-mono-code font-bold uppercase tracking-wider">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-bold leading-snug">{edu.degree}</h3>
                    <p className={`text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>{edu.institution}</p>
                    {edu.details && (
                      <p className={`text-xs mt-2 leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{edu.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col items-start gap-3">
              <span className="font-mono-code text-[11px] uppercase tracking-[0.28em] text-amber-500 font-bold">
                CREDENTIALS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Certifications &amp; <span className="font-playfair italic font-normal text-amber-500">Honors</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {ayushData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-5 flex items-center gap-4 border transition-all duration-300 ${
                    isDark
                      ? 'bg-neutral-900/70 border-white/10 hover:border-amber-500/50 shadow-2xl'
                      : 'bg-white border-neutral-200 hover:border-amber-500/50 shadow-md'
                  }`}
                >
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold">{cert.title}</h3>
                    <span className={`text-xs font-mono-code mt-0.5 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
