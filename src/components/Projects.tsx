import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Info, 
  ArrowUpRight,
  Code2,
  FolderGit2
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Backend & Auth', 'Management Systems', 'Blockchain & Web3'];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === 'All') return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 relative bg-slate-950/70 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2 px-2.5 py-1 bg-blue-600/10 border border-blue-500/20 rounded-md">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Selected Projects & Systems
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Real-world full-stack architectures, inventory management software, security auth microservices, and decentralized smart contracts.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col backdrop-blur-md"
            >
              {/* Image Preview Container */}
              <div
                className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Category Badge overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-blue-300 bg-slate-950/80 border border-blue-500/30 rounded-md">
                    {project.category}
                  </span>
                  {project.isFeatured && (
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-slate-950/80 border border-amber-500/30 rounded-md flex items-center gap-1">
                      <Sparkles size={10} /> Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight size={16} className="text-slate-500 group-hover:text-blue-400 transition shrink-0 ml-2" />
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
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

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-2.5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition cursor-pointer"
                  >
                    <ExternalLink size={13} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition cursor-pointer"
                  >
                    <Github size={13} />
                    <span>Source</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 transition cursor-pointer"
                    title="View architectural details"
                    aria-label="View architectural details"
                  >
                    <Info size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-depth Project Details */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
