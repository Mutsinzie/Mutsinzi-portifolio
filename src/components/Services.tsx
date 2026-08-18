import React from 'react';
import { servicesData } from '../data/portfolioData';
import { 
  Globe, 
  Layers, 
  Server, 
  Database, 
  CodeXml, 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Globe':
      return <Globe size={20} className="text-blue-400" />;
    case 'Layers':
      return <Layers size={20} className="text-purple-400" />;
    case 'Server':
      return <Server size={20} className="text-cyan-400" />;
    case 'Database':
      return <Database size={20} className="text-emerald-400" />;
    case 'CodeXml':
      return <CodeXml size={20} className="text-blue-400" />;
    case 'ShieldCheck':
      return <ShieldCheck size={20} className="text-amber-400" />;
    case 'Wrench':
      return <Wrench size={20} className="text-indigo-400" />;
    default:
      return <Globe size={20} className="text-blue-400" />;
  }
};

export const Services: React.FC = () => {
  const scrollToContact = () => {
    const elem = document.getElementById('contact');
    if (elem) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const offsetPosition = elemRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2 px-2.5 py-1 bg-blue-600/10 border border-blue-500/20 rounded-md">
            Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Developer Services & Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Tailored engineering services to turn concepts into high-performing, scalable, and secure digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                {/* Service Icon */}
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Service Feature Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {service.highlights.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Discuss Service CTA */}
              <button
                onClick={scrollToContact}
                className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400 hover:text-blue-400 transition cursor-pointer"
              >
                <span>Discuss scope</span>
                <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white mb-1">Have a custom software or blockchain project in mind?</h3>
            <p className="text-slate-400 text-xs">Let's discuss requirements, system architecture, and timelines.</p>
          </div>
          <button
            onClick={scrollToContact}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-md transition shrink-0 cursor-pointer"
          >
            Get In Touch
          </button>
        </div>

      </div>
    </section>
  );
};
