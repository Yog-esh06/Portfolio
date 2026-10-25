import React, { useEffect } from 'react';
import { AchievementItem } from '../../types';
import { Badge } from '../common/Badge';
import { X, Trophy, ExternalLink, Calendar, Award } from 'lucide-react';

interface AchievementModalProps {
  achievement: AchievementItem | null;
  onClose: () => void;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (achievement) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [achievement, onClose]);

  if (!achievement) return null;

  const isWinner = achievement.badgeType === 'winner';
  const isFinalist = achievement.badgeType === 'finalist';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-achievement-title"
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#0e1117] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant={isWinner ? 'lime' : isFinalist ? 'orange' : 'neutral'}>
            <span className="flex items-center gap-1.5">
              <Trophy size={13} />
              {achievement.ranking}
            </span>
          </Badge>
          <span className="flex items-center gap-1 font-mono text-xs text-white/50 border border-white/10 px-2.5 py-0.5 rounded-full">
            <Calendar size={12} />
            {achievement.year}
          </span>
          <span className="font-mono text-xs text-[#38bdf8] border border-[#38bdf8]/20 bg-[#38bdf8]/5 px-2.5 py-0.5 rounded-full">
            {achievement.scale}
          </span>
        </div>

        {/* Title */}
        <h3 id="modal-achievement-title" className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 leading-snug">
          {achievement.title}
        </h3>

        {/* Competition Organizers */}
        <div className="font-mono text-xs sm:text-sm text-[#cbd5e1] mb-6 flex items-center gap-2">
          <Award size={14} className={isWinner ? 'text-[#d4ff33]' : 'text-[#ff7849]'} />
          <span>{achievement.competition}</span>
        </div>

        {/* Full Detailed Description */}
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-sm text-[#cbd5e1] leading-relaxed mb-6 space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-white/40 font-semibold block">
            Technical Overview & Outcome
          </span>
          <p>{achievement.description}</p>
        </div>

        {/* Associated Project Info & Link */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="font-mono text-[10px] uppercase text-white/40 block mb-0.5">Associated System / Project</span>
            <span className="font-mono text-sm text-white font-semibold">{achievement.associatedProject}</span>
          </div>

          {achievement.projectUrl && (
            <a
              href={achievement.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#d4ff33] text-[#08090b] font-mono text-xs font-bold hover:bg-[#bce628] transition-colors whitespace-nowrap"
            >
              <span>View Repository</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>

        {/* Footer Close */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-all"
          >
            Close (ESC)
          </button>
        </div>
      </div>
    </div>
  );
};
