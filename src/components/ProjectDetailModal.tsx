import React from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, CheckCircle2, Layers, Sparkles, Terminal } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity"
      onClick={onClose}
      id="project-detail-modal"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900/95 border border-slate-800 rounded-3xl shadow-2xl text-slate-100 p-6 sm:p-8 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition cursor-pointer"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-blue-300 bg-slate-950 border border-blue-500/30 rounded-md">
            {project.category}
          </span>
          {project.isFeatured && (
            <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-slate-950 border border-amber-500/30 rounded-md flex items-center gap-1">
              <Sparkles size={10} /> Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
          {project.title}
        </h2>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden mb-6 border border-slate-800 bg-slate-950 aspect-video max-h-64">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        </div>

        {/* Description */}
        <div className="mb-5">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1.5 flex items-center gap-1.5">
            <Terminal size={13} className="text-blue-400" /> Overview & Architecture
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {project.detailedDescription || project.description}
          </p>
        </div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-5">
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-blue-400" /> Key Features & Capabilities
            </h3>
            <ul className="grid sm:grid-cols-1 gap-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-950/50 p-2 rounded-lg border border-slate-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1.5">
            <Layers size={13} className="text-blue-400" /> Technologies Used
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition"
          >
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
          >
            <Github size={14} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};
