import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  ArrowUp, 
  HelpCircle,
  MapPin
} from 'lucide-react';

interface FooterProps {
  onOpenGuide: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-md">
                M
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Mutsinzi.dev
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Software Developer & Full-Stack Engineer dedicated to building scalable web applications, backend microservices, and Web3 solutions in Rwanda and beyond.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <MapPin size={13} className="text-blue-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-slate-400 hover:text-blue-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold mb-3">
              Explore
            </h4>
            <ul className="space-y-1.5 text-xs">
              {navLinks.slice(4).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-slate-400 hover:text-blue-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenResume}
                  className="text-slate-400 hover:text-blue-400 transition text-left cursor-pointer"
                >
                  Download CV
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold mb-3">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2 mb-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white rounded-full flex items-center justify-center transition text-xs"
                title="GitHub"
              >
                <Github size={13} />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white rounded-full flex items-center justify-center transition text-xs"
                title="LinkedIn"
              >
                <Linkedin size={13} />
              </a>
              <a
                href={personalInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-pink-400 rounded-full flex items-center justify-center transition text-xs"
                title="Instagram"
              >
                <Instagram size={13} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-7 h-7 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-blue-400 rounded-full flex items-center justify-center transition text-xs"
                title="Email"
              >
                <Mail size={13} />
              </a>
              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="w-7 h-7 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-emerald-400 rounded-full flex items-center justify-center transition text-xs"
                title="Phone"
              >
                <Phone size={13} />
              </a>
            </div>

            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition underline cursor-pointer"
            >
              <HelpCircle size={12} />
              <span>Setup Guide</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-center sm:text-left text-slate-500 font-mono text-[11px]">
            <span>© 2026 {personalInfo.name}. All Rights Reserved.</span>
            <span className="mx-2">•</span>
            <span className="text-blue-400">Available for Freelance & Full-Time</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition text-xs cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
};
