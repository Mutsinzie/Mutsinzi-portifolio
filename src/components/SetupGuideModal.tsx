import React, { useState } from 'react';
import { X, BookOpen, Copy, Check, Terminal, Globe, Code2, Camera, FileText, Phone, Mail, Instagram, Layers, Cloud } from 'lucide-react';

interface SetupGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SetupGuideModal: React.FC<SetupGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const steps = [
    {
      id: 1,
      title: 'Installing Dependencies',
      icon: Terminal,
      content: 'Run the following command in your terminal inside the project folder:',
      code: 'npm install'
    },
    {
      id: 2,
      title: 'Starting the Development Server',
      icon: Terminal,
      content: 'Launch the Vite local development server on port 3000:',
      code: 'npm run dev'
    },
    {
      id: 3,
      title: 'Adding Your Profile Photo',
      icon: Camera,
      content: 'Place your professional headshot image in the assets folder with this exact name:',
      code: 'src/assets/profile.jpg',
      note: 'The website will automatically load your photo, with responsive circular frames, sleek glowing accents, and fallback protection.'
    },
    {
      id: 4,
      title: 'Adding Your CV / Resume',
      icon: FileText,
      content: 'Save your resume in PDF format inside the assets folder with this exact name:',
      code: 'src/assets/Mutsinzi_Emmanuel_CV.pdf',
      note: 'The "Download CV" buttons across the navbar, hero, about, and CV modal will link directly to this file.'
    },
    {
      id: 5,
      title: 'Changing Phone Number',
      icon: Phone,
      content: 'Open `src/data/portfolioData.ts` and update the `phone` and `phoneRaw` properties:',
      code: `export const personalInfo = {\n  // ...\n  phone: '0792417527',\n  phoneRaw: '0792417527',\n  // ...\n};`
    },
    {
      id: 6,
      title: 'Changing Email Address',
      icon: Mail,
      content: 'Open `src/data/portfolioData.ts` and update the `email` property:',
      code: `export const personalInfo = {\n  // ...\n  email: 'mutsinzie333@gmail.com',\n  // ...\n};`
    },
    {
      id: 7,
      title: 'Changing Instagram Username',
      icon: Instagram,
      content: 'Open `src/data/portfolioData.ts` and update the `instagram` and `instagramUrl` properties:',
      code: `export const personalInfo = {\n  // ...\n  instagram: 'w.i.n.n.e.r_25',\n  instagramUrl: 'https://instagram.com/w.i.n.n.e.r_25',\n  // ...\n};`
    },
    {
      id: 8,
      title: 'Adding Your Real GitHub Account',
      icon: Code2,
      content: 'Open `src/data/portfolioData.ts` and update the `githubUrl` field:',
      code: `export const personalInfo = {\n  // ...\n  githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME',\n  // ...\n};`
    },
    {
      id: 9,
      title: 'Adding Your Real LinkedIn Account',
      icon: Globe,
      content: 'Open `src/data/portfolioData.ts` and update the `linkedinUrl` field:',
      code: `export const personalInfo = {\n  // ...\n  linkedinUrl: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME',\n  // ...\n};`
    },
    {
      id: 10,
      title: 'Adding New Projects',
      icon: Layers,
      content: 'Open `src/data/portfolioData.ts` and append a new object to the `projectsData` array:',
      code: `{\n  id: 'my-new-project',\n  title: 'My New Awesome App',\n  category: 'Full-Stack',\n  description: 'Short summary of the application.',\n  detailedDescription: 'In-depth breakdown of features & architecture.',\n  technologies: ['React', 'Node.js', 'PostgreSQL'],\n  features: ['Feature 1', 'Feature 2'],\n  image: 'https://images.unsplash.com/...',\n  githubUrl: 'https://github.com/mutsinzi-emmanuel/repo',\n  liveUrl: 'https://my-app.demo.app',\n  isFeatured: true\n}`
    },
    {
      id: 11,
      title: 'Changing Skills or Adding New Skills',
      icon: Code2,
      content: 'Open `src/data/portfolioData.ts` and update the `skillsData` array under any category (`frontend`, `backend`, `database`, `blockchain`, `tools`):',
      code: `{\n  name: 'TypeScript',\n  level: 90,\n  category: 'frontend',\n  highlight: true\n}`
    },
    {
      id: 12,
      title: 'Deploying the Portfolio to Vercel',
      icon: Cloud,
      content: 'Deploy in under 2 minutes with GitHub and Vercel:',
      code: `# 1. Push your code to GitHub:\ngit init\ngit add .\ngit commit -m "Initial portfolio commit"\ngit branch -M main\ngit remote add origin https://github.com/YOUR_USERNAME/portfolio.git\ngit push -u origin main\n\n# 2. Go to vercel.com -> "Add New Project" -> Import your GitHub repo\n# 3. Framework Preset: Vite (automatically detected)\n# 4. Click "Deploy"!`
    },
    {
      id: 13,
      title: 'Deploying the Portfolio to Netlify',
      icon: Cloud,
      content: 'Deploy smoothly on Netlify with automatic build triggers:',
      code: `# 1. Go to app.netlify.com -> "Add new site" -> "Import an existing project"\n# 2. Select GitHub and authorize your portfolio repository\n# 3. Set Build Command: npm run build\n# 4. Set Publish Directory: dist\n# 5. Click "Deploy site"`
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity"
      onClick={onClose}
      id="setup-guide-modal"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/95 border border-slate-800 rounded-3xl shadow-2xl text-slate-100 p-6 sm:p-8 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 sticky top-0 bg-slate-900/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              <BookOpen size={16} />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Setup, Customization & Deployment Guide</h2>
              <p className="text-[11px] text-slate-400 font-mono">13 Step-by-step instructions to easily maintain & deploy your website</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition cursor-pointer"
            aria-label="Close guide"
          >
            <X size={15} />
          </button>
        </div>

        {/* Central Data File Notice */}
        <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl mb-6 text-xs text-slate-300 flex items-start gap-3">
          <div className="p-1.5 bg-blue-600/20 rounded-lg shrink-0 mt-0.5 text-blue-400">
            <Code2 size={15} />
          </div>
          <div>
            <strong className="text-white block mb-0.5">Central Configuration Architecture</strong>
            All personal information, phone, email, Instagram, social links, projects, skills, education, and services are managed inside one file: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300 font-mono text-[11px]">src/data/portfolioData.ts</code>.
          </div>
        </div>

        {/* Accordion / List of 13 Steps */}
        <div className="space-y-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-bold">
                      {step.id}
                    </span>
                    <h3 className="font-semibold text-white text-xs sm:text-sm flex items-center gap-1.5">
                      <Icon size={14} className="text-blue-400 hidden sm:inline" />
                      {step.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => copyToClipboard(step.code, idx)}
                    className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 transition cursor-pointer shrink-0"
                    title="Copy snippet"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check size={11} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={11} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-400 mb-2">{step.content}</p>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 overflow-x-auto">
                  <pre className="font-mono text-[11px] text-blue-300 leading-relaxed whitespace-pre-wrap">
                    {step.code}
                  </pre>
                </div>

                {step.note && (
                  <p className="text-[11px] text-slate-400 mt-2 italic">
                    💡 {step.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-slate-800 text-center">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition cursor-pointer"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
