import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';
import { personalInfo, stats } from '../data/portfolioData';
import { 
  Sparkles, 
  Download, 
  ArrowUpRight, 
  FolderGit2, 
  Cpu, 
  Clock, 
  Flame,
  Layers,
  ShieldCheck,
  Code2,
  Terminal
} from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

const getStatIcon = (iconName: string) => {
  switch (iconName) {
    case 'FolderGit2':
      return <FolderGit2 className="text-blue-400" size={20} />;
    case 'Cpu':
      return <Cpu className="text-purple-400" size={20} />;
    case 'Clock':
      return <Clock className="text-cyan-400" size={20} />;
    case 'Flame':
      return <Flame className="text-amber-400" size={20} />;
    default:
      return <Sparkles className="text-blue-400" size={20} />;
  }
};

const AnimatedCounter: React.FC<{ value: number; duration?: number }> = ({ value, duration = 1.2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round((duration * 1000) / 16);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(start + (end - start) * Math.min(progress, 1));
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2 px-2.5 py-1 bg-blue-600/10 border border-blue-500/20 rounded-md">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineering High-Performance Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Bridging robust backend foundations with responsive client interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* Left Column: Mission Quote & Narrative */}
          <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              {/* Sleek Statement Card */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 mb-6 relative">
                <span className="text-3xl font-serif text-blue-500/30 absolute top-2 right-4">“</span>
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic">
                  "{personalInfo.aboutStatement}"
                </p>
              </div>

              <div className="space-y-3.5 text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                {personalInfo.aboutDetails.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Core Interests */}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2.5">
                  Core Engineering Disciplines
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:border-blue-500/50 hover:text-blue-300 transition"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition cursor-pointer"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition"
              >
                <span>Explore Work</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Highlights Bento Stack */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-5 flex items-start gap-4 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Layers size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Full-Stack Architecture</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Harmonious integration of React frontends with Node.js/Python microservices.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-5 flex items-start gap-4 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Databases & Web3</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  MySQL relational indexing and EVM Solidity smart contract implementation.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-5 flex items-start gap-4 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <Terminal size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Clean & Modular Code</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strict focus on readability, maintainability, DRY principles, and Git version control.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                  {getStatIcon(item.iconName)}
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1 flex items-baseline">
                <AnimatedCounter value={item.value} />
                <span className="text-blue-400 ml-0.5 text-xl sm:text-2xl">{item.suffix}</span>
              </div>

              <h4 className="text-xs font-semibold text-slate-200 mb-0.5">{item.label}</h4>
              <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-1">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
