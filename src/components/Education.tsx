import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2 px-2.5 py-1 bg-blue-600/10 border border-blue-500/20 rounded-md">
            Academics
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Formal foundations in computer science principles, software engineering methodologies, and professional certifications.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition backdrop-blur-md"
            >
              {/* Top Meta info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {edu.program}
                    </h3>
                    <p className="text-xs text-slate-400">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 bg-slate-800 text-blue-300 border border-slate-700 rounded">
                    {edu.startDate} – {edu.graduationDate}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Certificate */}
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-slate-950/70 border border-slate-800 rounded text-[11px] text-slate-300 mb-3">
                <Award size={13} className="text-blue-400" />
                <span>Credential: {edu.certificate}</span>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                {edu.description}
              </p>

              {/* Skills gained */}
              {edu.skillsGained && edu.skillsGained.length > 0 && (
                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] uppercase font-mono text-slate-500 block mb-1.5">Competencies Developed:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
