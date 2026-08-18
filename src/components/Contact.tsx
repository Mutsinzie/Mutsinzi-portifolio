import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { 
  Mail, 
  Phone, 
  Instagram, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Copy, 
  Check, 
  MessageSquare,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyText = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = (): boolean => {
    const errs: Partial<ContactFormData> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errs.message = 'Please enter your message.';
    else if (formData.message.trim().length < 10) errs.message = 'Message should be at least 10 characters.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/70 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2 px-2.5 py-1 bg-blue-600/10 border border-blue-500/20 rounded-md">
            Communication
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Have a project, job opportunity, freelance inquiry, or just want to connect? Reach out anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Phone Card */}
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Phone</span>
                    <a
                      href={`tel:${personalInfo.phoneRaw}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyText(personalInfo.phoneRaw, 'phone')}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 truncate">
                  <div className="w-9 h-9 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-purple-400 transition truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyText(personalInfo.email, 'email')}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer shrink-0 ml-2"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/40 transition group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                    <Instagram size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Instagram</span>
                    <a
                      href={personalInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-pink-400 transition flex items-center gap-1"
                    >
                      <span>@{personalInfo.instagram}</span>
                      <ArrowUpRight size={12} className="text-slate-500" />
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-pink-400 transition"
                  title="Visit Instagram Profile"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 transition">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick status pill */}
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-400">
              <Clock size={15} className="text-blue-400 shrink-0" />
              <span>
                <strong>Response Time:</strong> 1–4 hours (Rwanda CAT).
              </span>
            </div>
          </div>

          {/* Right Column: Sleek Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/50 border border-slate-800 shadow-xl backdrop-blur-md">
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-5">
                Fill out the form below and I will get back to you immediately.
              </p>

              {submitted && (
                <div className="mb-5 p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-700/50 text-emerald-200 flex items-start gap-2.5 animate-fadeIn text-xs">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-emerald-300 font-semibold mb-0.5">
                      Message Sent Successfully!
                    </strong>
                    <p className="text-[11px] text-emerald-200/80">
                      Thank you for reaching out, Mutsinzi Emmanuel will review your note and respond to your email shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                      Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-3 py-2 bg-slate-950 border rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none transition ${
                        errors.name ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                      Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-3 py-2 bg-slate-950 border rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none transition ${
                        errors.email ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Subject <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    className={`w-full px-3 py-2 bg-slate-950 border rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none transition ${
                      errors.subject ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Describe your project, goals, or questions..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-3 py-2 bg-slate-950 border rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none transition ${
                      errors.message ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={13} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
