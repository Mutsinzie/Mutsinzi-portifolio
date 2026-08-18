import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { SetupGuideModal } from './components/SetupGuideModal';
import { HelpCircle, FileText } from 'lucide-react';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased relative">
      
      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Floating Quick Action Helper Buttons (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsGuideOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono shadow-lg backdrop-blur-md transition cursor-pointer"
          title="Open Setup & Customization Guide"
        >
          <HelpCircle size={13} className="text-blue-400" />
          <span className="hidden sm:inline">Guide</span>
        </button>

        <button
          onClick={() => setIsResumeOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 backdrop-blur-md transition cursor-pointer"
          title="View & Download Mutsinzi's CV"
        >
          <FileText size={13} />
          <span>Curriculum Vitae</span>
        </button>
      </div>

      {/* CV / Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* 13-Point Setup & Deployment Guide Modal */}
      <SetupGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

    </div>
  );
}

export default App;
