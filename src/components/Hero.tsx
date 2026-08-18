import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  ArrowRight, 
  FolderGit2, 
  MessageSquare,
  MapPin,
  Code2,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Sleek Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Profile Card & Quick Bio */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xl backdrop-blur-md relative overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Profile Photo with Sleek Frame */}
              <div className="mb-5">
                <ProfileAvatar size="hero" showUploadTrigger={true} />
              </div>

              {/* Name & Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {personalInfo.name}
              </h1>
              <p className="text-blue-400 text-xs sm:text-sm font-mono mb-4">
                Software Developer | Full-Stack Developer
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
                {personalInfo.shortBio}
              </p>

              {/* Social Icons Row */}
              <div className="flex items-center gap-2.5 mb-6">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-xs text-slate-300 hover:text-white border border-slate-700 transition"
                  title="GitHub"
                >
                  <Github size={15} />
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-xs text-slate-300 hover:text-white border border-slate-700 transition"
                  title="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>

                <a
                  href={personalInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-xs text-slate-300 hover:text-pink-400 border border-slate-700 transition"
                  title={`@${personalInfo.instagram}`}
                >
                  <Instagram size={15} />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-xs text-slate-300 hover:text-blue-400 border border-slate-700 transition"
                  title={personalInfo.email}
                >
                  <Mail size={15} />
                </a>

                <a
                  href={`tel:${personalInfo.phoneRaw}`}
                  aria-label="Phone"
                  className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-xs text-slate-300 hover:text-emerald-400 border border-slate-700 transition"
                  title={personalInfo.phone}
                >
                  <Phone size={15} />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex w-full gap-3">
                <button
                  onClick={() => scrollTo('projects')}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FolderGit2 size={14} />
                  <span>View Projects</span>
                </button>

                <button
                  onClick={() => scrollTo('contact')}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare size={14} className="text-blue-400" />
                  <span>Contact Me</span>
                </button>
              </div>
            </motion.div>

            {/* Technical Stack Summary Bento Box */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-md">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <Code2 size={14} className="text-blue-400" />
                <span>Technical Core</span>
              </h3>
              
              <div className="space-y-3.5">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 font-mono">Frontend</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5', 'CSS3'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-800 rounded text-[10px] text-blue-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 font-mono">Backend, Databases & Web3</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Node.js', 'Express.js', 'MySQL', 'Solidity', 'REST APIs', 'MongoDB'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-800 rounded text-[10px] text-purple-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Banner & Key Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Row Bento: Featured Project + Services Mini Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Featured Project Callout Card */}
              <div
                onClick={() => scrollTo('projects')}
                className="bg-blue-600 rounded-3xl p-6 text-white relative overflow-hidden group shadow-lg cursor-pointer flex flex-col justify-between"
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/20 text-white mb-3">
                    <Sparkles size={11} /> Featured System
                  </div>
                  <h3 className="text-lg font-bold mb-1">Store Management System</h3>
                  <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                    Full-featured inventory, sales reporting, and CRUD database management.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs font-semibold">
                  <span className="underline underline-offset-2">Explore Architecture</span>
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </div>

              {/* Services Highlights Bento Card */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-md">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                      Developer Services
                    </h3>
                    <span className="text-[10px] text-slate-500 font-mono">7 Specializations</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">• Web Apps</div>
                    <div className="flex items-center gap-1.5">• Smart Contracts</div>
                    <div className="flex items-center gap-1.5">• API Systems</div>
                    <div className="flex items-center gap-1.5">• Database Design</div>
                  </div>
                </div>

                <button
                  onClick={() => scrollTo('services')}
                  className="text-xs text-blue-400 hover:text-blue-300 font-medium text-left flex items-center gap-1 cursor-pointer"
                >
                  <span>View all services</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Quick Experience / Highlights Box */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-7 flex-1 flex flex-col justify-between backdrop-blur-md">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={14} className="text-blue-400" />
                  <span>Engineering Highlights & Quick Connect</span>
                </h3>
                <span className="text-[10px] text-slate-500 font-mono">Rwanda (CAT)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Timeline Snippets */}
                <div className="space-y-4">
                  <div className="relative pl-4 border-l border-slate-700">
                    <div className="absolute -left-1 top-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-xs font-bold text-white">Mutsinzi Store Management</p>
                    <p className="text-[10px] text-slate-500">React • Node.js • MySQL</p>
                  </div>

                  <div className="relative pl-4 border-l border-slate-700">
                    <div className="absolute -left-1 top-1 w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p className="text-xs font-bold text-white">User Auth Core System</p>
                    <p className="text-[10px] text-slate-500">JWT & Bcrypt Security</p>
                  </div>

                  <div className="relative pl-4 border-l border-slate-700">
                    <div className="absolute -left-1 top-1 w-2 h-2 bg-amber-500 rounded-full"></div>
                    <p className="text-xs font-bold text-white">Smart Contract Suite</p>
                    <p className="text-[10px] text-slate-500">Ethereum / Solidity / Web3</p>
                  </div>
                </div>

                {/* Quick Contact Box */}
                <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3 font-mono">
                      Fast Communication
                    </h4>
                    <div className="space-y-2 mb-4 text-xs text-slate-300">
                      <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-blue-400 transition truncate">
                        <div className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-[10px] text-slate-400 shrink-0">✉</div>
                        <span className="truncate">{personalInfo.email}</span>
                      </a>
                      <a href={`tel:${personalInfo.phoneRaw}`} className="flex items-center gap-2 hover:text-emerald-400 transition">
                        <div className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-[10px] text-slate-400 shrink-0">✆</div>
                        <span>{personalInfo.phone}</span>
                      </a>
                      <div className="flex items-center gap-2 text-slate-400">
                        <div className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-[10px] shrink-0">📍</div>
                        <span>Kigali, Rwanda</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => scrollTo('contact')}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-md shadow-blue-600/20"
                  >
                    Hire / Contact Now
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
