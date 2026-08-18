import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles, 
  Search,
  Layers,
  CheckCircle,
  BarChart3
} from 'lucide-react';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'blockchain' | 'tools';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: SkillCategory; label: string; icon: any; count: number }[] = [
    { id: 'all', label: 'All Skills', icon: Layers, count: skillsData.length },
    { id: 'frontend', label: 'Frontend', icon: Code2, count: skillsData.filter(s => s.category === 'frontend').length },
    { id: 'backend', label: 'Backend', icon: Server, count: skillsData.filter(s => s.category === 'backend').length },
    { id: 'database', label: 'Database', icon: Database, count: skillsData.filter(s => s.category === 'database').length },
    { id: 'blockchain', label: 'Blockchain', icon: Cpu, count: skillsData.filter(s => s.category === 'blockchain').length },
    { id: 'tools', label: 'Tools', icon: Wrench, count: skillsData.filter(s => s.category === 'tools').length },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2 px-2.5 py-1 bg-blue-600/10 border border-blue-500/20 rounded-md">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technical Stack & Proficiencies
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Structured proficiencies across modern frontend, backend systems, relational data, and decentralized protocols.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-center md:justify-start">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                  }`}
                >
                  <Icon size={13} />
                  <span>{cat.label}</span>
                  <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${isActive ? 'bg-blue-700 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-60">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search skill (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-900/60 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white text-sm group-hover:text-blue-400 transition">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="text-[9px] uppercase font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Core
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {skill.category}
                </span>
              </div>

              {/* Progress Indicator */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>Proficiency</span>
                  <span className="text-slate-300 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-slate-900/30 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-xs">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-2 text-xs text-blue-400 underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Structured Category Summary Bento */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
            <Code2 size={18} className="text-blue-400 mx-auto mb-1.5" />
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-0.5">Frontend</h4>
            <p className="text-[10px] text-slate-500">React, Tailwind, ES6+, HTML/CSS</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
            <Server size={18} className="text-purple-400 mx-auto mb-1.5" />
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-0.5">Backend</h4>
            <p className="text-[10px] text-slate-500">Node, Express, Python, Django, REST</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
            <Database size={18} className="text-cyan-400 mx-auto mb-1.5" />
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-0.5">Database</h4>
            <p className="text-[10px] text-slate-500">MySQL, MongoDB, Relational Schemas</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
            <Cpu size={18} className="text-amber-400 mx-auto mb-1.5" />
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-0.5">Blockchain</h4>
            <p className="text-[10px] text-slate-500">Solidity, Ethereum, Smart Contracts</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-center col-span-2 sm:col-span-1">
            <Wrench size={18} className="text-emerald-400 mx-auto mb-1.5" />
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-0.5">Tools</h4>
            <p className="text-[10px] text-slate-500">Git, GitHub, VS Code, Postman, Docker</p>
          </div>
        </div>

      </div>
    </section>
  );
};
