import React from 'react';
import { experienceData, experienceFallbackQuote } from '../data/portfolioData';
import { Briefcase, Calendar, Building, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2 px-2.5 py-1 bg-blue-600/10 border border-blue-500/20 rounded-md">
            Trajectory
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work & Development Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Hands-on technical implementation, freelance deliveries, and real-world system architecture projects.
          </p>
        </div>

        {/* Fallback & Philosophy Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
          <p className="text-xs text-slate-300 italic font-medium leading-relaxed">
            "{experienceFallbackQuote}"
          </p>
        </div>

        {/* Sleek Vertical Timeline */}
        <div className="max-w-3xl mx-auto space-y-4">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition backdrop-blur-md relative"
            >
              {/* Meta header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <span className="text-[11px] font-mono px-2.5 py-0.5 bg-slate-800 text-blue-300 border border-slate-700 rounded">
                  {exp.period}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {exp.type}
                </span>
              </div>

              {/* Title & Org */}
              <h3 className="text-base font-bold text-white mb-0.5">
                {exp.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-3 flex items-center gap-1.5">
                <Building size={13} className="text-blue-400" />
                <span>{exp.organization}</span>
              </p>

              {/* Description */}
              <p className="text-slate-300 text-xs leading-relaxed mb-3.5">
                {exp.description}
              </p>

              {/* Responsibilities */}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul className="space-y-1 mb-4 text-xs text-slate-400">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="h-1 w-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech badges */}
              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
