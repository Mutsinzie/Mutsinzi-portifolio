import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle, Award, Briefcase, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { personalInfo, skillsData, educationData, experienceData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);

    const link = document.createElement('a');
    link.href = personalInfo.cvPath;
    link.download = 'Mutsinzi_Emmanuel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity"
      onClick={onClose}
      id="resume-modal"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/95 border border-slate-800 rounded-3xl shadow-2xl text-slate-100 p-6 sm:p-8 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              <FileText size={16} />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Mutsinzi Emmanuel — CV</h2>
              <p className="text-[11px] text-slate-400 font-mono">Software Developer | Full-Stack & Web3</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-sm transition cursor-pointer"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition cursor-pointer"
              aria-label="Close modal"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="mb-5 p-3 bg-emerald-950/60 border border-emerald-800 rounded-xl text-xs text-emerald-300 flex items-center gap-2 animate-fadeIn">
            <CheckCircle size={15} className="text-emerald-400 shrink-0" />
            <span>
              Download requested for <strong>Mutsinzi_Emmanuel_CV.pdf</strong>! Place your PDF file in <code>src/assets/Mutsinzi_Emmanuel_CV.pdf</code>.
            </span>
          </div>
        )}

        {/* Formatted CV Document Preview */}
        <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 space-y-6 text-slate-300">
          {/* Top Header */}
          <div className="border-b border-slate-800 pb-5 text-center sm:text-left sm:flex sm:justify-between sm:items-start">
            <div>
              <h1 className="text-xl font-bold text-white mb-0.5">{personalInfo.name}</h1>
              <p className="text-blue-400 font-mono text-xs mb-2">
                Software Developer | Full-Stack Developer
              </p>
              <p className="text-xs text-slate-400 max-w-xl">
                {personalInfo.shortBio}
              </p>
            </div>
            <div className="mt-3 sm:mt-0 text-xs text-slate-400 space-y-0.5 sm:text-right font-mono text-[11px]">
              <p>📍 {personalInfo.location}</p>
              <p>📞 {personalInfo.phone}</p>
              <p>✉️ {personalInfo.email}</p>
              <p>📸 @{personalInfo.instagram}</p>
            </div>
          </div>

          {/* Technical Summary */}
          <div>
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
              Professional Statement
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              "{personalInfo.aboutStatement}"
            </p>
          </div>

          {/* Core Technical Proficiencies */}
          <div>
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3">
              Technical Stack & Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="font-semibold text-slate-200 block mb-1 text-[11px]">Frontend:</span>
                <span className="text-slate-400 text-[11px]">HTML5, CSS3, JavaScript, React.js, Tailwind CSS</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="font-semibold text-slate-200 block mb-1 text-[11px]">Backend:</span>
                <span className="text-slate-400 text-[11px]">Node.js, Express.js, Python, Django, REST APIs</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="font-semibold text-slate-200 block mb-1 text-[11px]">Databases:</span>
                <span className="text-slate-400 text-[11px]">MySQL, MongoDB, Relational Schema Design</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="font-semibold text-slate-200 block mb-1 text-[11px]">Blockchain:</span>
                <span className="text-slate-400 text-[11px]">Solidity, Ethereum, Smart Contracts, Web3</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 sm:col-span-2">
                <span className="font-semibold text-slate-200 block mb-1 text-[11px]">Tools & Environment:</span>
                <span className="text-slate-400 text-[11px]">Git, GitHub, VS Code, Postman, Docker</span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3">
              Experience & Project Trajectory
            </h3>
            <div className="space-y-3">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-3.5 bg-slate-900/70 rounded-xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <span className="font-semibold text-white text-xs">{exp.title}</span>
                    <span className="text-[10px] text-blue-400 font-mono">{exp.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mb-1.5">{exp.organization} • {exp.type}</div>
                  <p className="text-xs text-slate-300 mb-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3">
              Education & Academic Background
            </h3>
            <div className="space-y-2.5">
              {educationData.map((edu) => (
                <div key={edu.id} className="p-3 bg-slate-900/70 rounded-xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-0.5">
                    <span className="font-semibold text-white text-xs">{edu.program}</span>
                    <span className="text-[10px] text-blue-400 font-mono">{edu.startDate} - {edu.graduationDate}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mb-1">{edu.institution}</div>
                  <p className="text-xs text-slate-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-5 flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-slate-800">
          <p className="text-xs text-slate-400">
            Direct Contact: <a href={`mailto:${personalInfo.email}`} className="text-blue-400 underline">{personalInfo.email}</a>
          </p>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl shadow-md transition cursor-pointer"
          >
            <Download size={14} />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};
