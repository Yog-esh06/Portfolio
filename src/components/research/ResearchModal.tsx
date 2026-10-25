import React, { useEffect } from 'react';
import { ResearchPaper } from '../../types';
import { Badge } from '../common/Badge';
import { X, Users, ExternalLink, BarChart3, AlertCircle, Calendar } from 'lucide-react';

interface ResearchModalProps {
  paper: ResearchPaper | null;
  onClose: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ paper, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (paper) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [paper, onClose]);

  if (!paper) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-research-title"
    >
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0e1117] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
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

        {/* Top Meta Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="cyan">{paper.track}</Badge>
          <span className="flex items-center gap-1 font-mono text-xs text-white/50 border border-white/10 px-2.5 py-0.5 rounded-full">
            <Calendar size={12} />
            {paper.venue} ({paper.year})
          </span>
          <span className="font-mono text-xs text-white/60 border border-white/10 px-2.5 py-0.5 rounded-full">
            {paper.status}
          </span>
        </div>

        {/* Paper Title */}
        <h3 id="modal-research-title" className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
          {paper.title}
        </h3>

        {/* Collaborators / Investigators */}
        {paper.collaborators && (
          <div className="flex items-center gap-2 font-mono text-xs text-[#94a3b8] mb-6">
            <Users size={14} className="text-[#38bdf8]" />
            <span>Investigators: <strong className="text-white">{paper.collaborators.join(', ')}</strong></span>
          </div>
        )}

        {/* Abstract */}
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-white/40 font-semibold block mb-2">
            Abstract & Motivation
          </span>
          <p className="text-sm text-[#cbd5e1] leading-relaxed">
            {paper.abstract}
          </p>
        </div>

        {/* Problem vs Methodology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#ff7849] font-semibold block mb-2">
              Research Challenge
            </span>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              {paper.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] font-semibold block mb-2">
              Experimental Methodology
            </span>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              {paper.methodology}
            </p>
          </div>
        </div>

        {/* Findings / Quantitative Benchmarks */}
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-white/40 block mb-3 flex items-center gap-2">
            <BarChart3 size={14} className="text-[#d4ff33]" /> Quantitative Findings & Parameters
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {paper.results.map((res, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-mono text-xs text-[#94a3b8] mb-1">{res.metric}</div>
                <div className="font-display text-2xl font-bold text-[#d4ff33] mb-1">{res.value}</div>
                {res.comparison && (
                  <div className="font-mono text-[11px] text-white/50">{res.comparison}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Simulation Disclaimer if present */}
        {paper.disclaimer && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-amber-200/90 mb-6 flex items-start gap-2.5">
            <AlertCircle size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
            <p className="leading-relaxed">
              <strong>Validation Scope:</strong> {paper.disclaimer}
            </p>
          </div>
        )}

        {/* Repository Action & Tags */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-1.5">
            {paper.tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/60">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {paper.repoUrl && (
              <a
                href={paper.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#38bdf8] text-[#08090b] font-mono text-xs font-bold hover:bg-[#60a5fa] transition-colors"
              >
                <span>View Repository</span>
                <ExternalLink size={13} />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-all"
            >
              Close (ESC)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
