import React, { useState } from 'react';
import { Camera, Check, Sparkles, UploadCloud } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showUploadTrigger?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  size = 'hero',
  showUploadTrigger = true,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(personalInfo.profilePhotoPath);
  const [imageError, setImageError] = useState<boolean>(false);
  const [showReplaceModal, setShowReplaceModal] = useState<boolean>(false);
  const [customFileLoaded, setCustomFileLoaded] = useState<boolean>(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImageSrc(previewUrl);
      setImageError(false);
      setCustomFileLoaded(true);
      setShowReplaceModal(false);
    }
  };

  const getDimensionClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-12 h-12';
      case 'md':
        return 'w-24 h-24';
      case 'lg':
        return 'w-36 h-36';
      case 'hero':
      default:
        return 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64';
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Sleek Ambient Glow */}
      <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 pointer-events-none"></div>

      {/* Sleek Circular Border Frame */}
      <div
        id="profile-photo-container"
        className={`relative ${getDimensionClasses()} rounded-full border-2 border-blue-500 p-1.5 shadow-2xl transition-transform duration-500 hover:scale-[1.02] group`}
      >
        <div className="w-full h-full rounded-full bg-slate-900 border border-slate-800 overflow-hidden relative flex items-center justify-center">
          {!imageError ? (
            <img
              src={imageSrc}
              alt={`${personalInfo.name} - Software Developer Profile`}
              className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            // Sleek Fallback Placeholder matching Design Specification
            <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-center p-3 relative select-none">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center mb-1">
                <span className="text-base font-bold text-blue-400 font-mono">ME</span>
              </div>
              <span className="text-[11px] font-semibold text-white truncate max-w-full">
                {personalInfo.name}
              </span>
              <span className="text-[9px] text-slate-500 italic font-mono mt-0.5">
                /src/assets/profile.jpg
              </span>
            </div>
          )}

          {/* Quick Change Overlay */}
          {showUploadTrigger && (
            <button
              onClick={() => setShowReplaceModal(true)}
              title="Replace or preview photo"
              aria-label="Upload custom photo"
              className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-1 cursor-pointer"
            >
              <div className="p-2 bg-blue-600 rounded-full shadow">
                <Camera size={16} />
              </div>
              <span className="text-[10px] font-mono text-blue-300">
                {customFileLoaded ? 'Loaded' : 'Change'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Floating Rwanda / Availability Tag */}
      <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] text-slate-400 font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Rwanda</span>
        <span className="text-slate-600">•</span>
        <span className="text-blue-400">Available</span>
      </div>

      {/* Quick Replacement Modal */}
      {showReplaceModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowReplaceModal(false)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Camera size={18} className="text-blue-400" /> Profile Photo Setup
              </h3>
              <button
                onClick={() => setShowReplaceModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              Place your headshot in the project assets directory:
            </p>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 mb-4 font-mono text-xs text-blue-300">
              📁 <strong className="text-white">src/assets/profile.jpg</strong>
            </div>

            <div className="border-t border-slate-800 pt-4">
              <p className="text-[11px] text-slate-400 mb-3">
                Or preview your local photo instantly:
              </p>
              <label className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-xl cursor-pointer text-xs transition">
                <UploadCloud size={16} />
                <span>Select Photo File</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {customFileLoaded && (
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 py-1.5 rounded-lg">
                <Check size={14} /> Custom photo active in browser!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
