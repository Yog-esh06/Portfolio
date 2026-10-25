import React, { useEffect } from 'react';
import { ExperienceItem } from '../../types';
import { X, Calendar, MapPin, Award, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

interface ExperienceModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (experience) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [experience, onClose]);

  if (!experience) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d0f14] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#f5f5f0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Company & Role Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/30 flex items-center gap-1.5 font-semibold">
            <Building size={12} /> {experience.organization}
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/60">
            {experience.division}
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
          {experience.role}
        </h3>

        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-white/50 mb-6 pb-6 border-b border-white/10">
          <span className="flex items-center gap-1.5 text-[#34d399]">
            <Calendar size={13} />
            {experience.period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            {experience.location}
          </span>
          {experience.status && (
            <span className="flex items-center gap-1.5 text-white/70">
              <ShieldCheck size={13} className="text-[#34d399]" />
              {experience.status}
            </span>
          )}
        </div>

        {/* Audit Scope / Responsibilities */}
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 mb-3 flex items-center gap-2">
            <CheckCircle2 size={13} className="text-[#34d399]" /> Scope & Impact Highlights
          </h4>
          <ul className="space-y-3">
            {experience.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#cbd5e1] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-2 flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Badges / Accreditations */}
        {experience.badges && experience.badges.length > 0 && (
          <div className="mb-6 pt-6 border-t border-white/10">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 mb-3 flex items-center gap-2">
              <Award size={13} className="text-[#d4ff33]" /> Employee Skill Badges & Coursework Credentials
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {experience.badges.map((b, i) => (
                <div
                  key={i}
                  className="font-mono text-xs p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white/90 flex items-center gap-2 hover:border-[#34d399]/40 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Tag Cloud */}
        {experience.skills && experience.skills.length > 0 && (
          <div className="pt-6 border-t border-white/10">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 mb-3">
              Technologies & Domains
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((s, i) => (
                <span
                  key={i}
                  className="font-mono text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[#94a3b8]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
