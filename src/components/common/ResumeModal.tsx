import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, ShieldCheck, GraduationCap, Briefcase, Award } from 'lucide-react';
import { profileData } from '../../data/profile';
import { experienceData } from '../../data/experience';
import { researchData } from '../../data/research';
import { skillsData } from '../../data/skills';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resumePdfPath = './documents/Yogesh-R-Mehta-Resume.pdf';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0e1117] border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#08090b]/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#d4ff33]/10 border border-[#d4ff33]/25 text-[#d4ff33]">
              <FileText size={20} />
            </div>
            <div>
              <h2 id="modal-resume-title" className="font-display text-xl font-bold text-white">
                Curriculum Vitae / Resume
              </h2>
              <span className="font-mono text-xs text-white/50">
                Yogesh R. Mehta • Verified Technical Record
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumePdfPath}
              download="Yogesh-R-Mehta-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#d4ff33] text-[#08090b] font-mono text-xs font-bold hover:bg-[#bce628] transition-all"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink size={16} />
            </a>

            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-sm text-[#cbd5e1] font-sans">
          
          {/* Top Document Header */}
          <div className="pb-6 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl font-extrabold text-white tracking-tight">
                  {profileData.name}
                </h1>
                <p className="font-mono text-sm text-[#d4ff33] mt-1 font-semibold">
                  {profileData.title}
                </p>
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-white/50 mt-2">
                  <span>{profileData.location}</span>
                  <span>•</span>
                  <span>{profileData.institution}</span>
                  <span>•</span>
                  <span>Graduating {profileData.graduation}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 font-mono text-xs text-white/60">
                <a href={profileData.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4ff33] transition-colors">
                  github.com/Yog-esh06
                </a>
                <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#38bdf8] transition-colors">
                  linkedin.com/in/yog-esh06
                </a>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#d4ff33]">
              <GraduationCap size={16} /> Education
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h4 className="font-display font-bold text-white text-base">
                  SRM Institute of Science and Technology, Kattankulathur
                </h4>
                <span className="font-mono text-xs text-white/40">Expected May 2028</span>
              </div>
              <p className="text-sm text-[#94a3b8]">
                Bachelor of Technology (B.Tech) in Computer Science and Engineering
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                  Data Structures & Algorithms
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                  Operating Systems
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                  DBMS
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                  Machine Learning
                </span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#d4ff33]">
              <Briefcase size={16} /> Professional Experience
            </div>
            {experienceData.map((exp) => (
              <div key={exp.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="font-display font-bold text-white text-base">
                    {exp.role} — <span className="text-[#d4ff33]">{exp.organization}</span>
                  </h4>
                  <span className="font-mono text-xs text-white/40">{exp.period}</span>
                </div>
                <div className="font-mono text-xs text-white/50 mb-3">
                  {exp.division} • {exp.location}
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff33] mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Research Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#d4ff33]">
              <Award size={16} /> Research & Publications
            </div>
            {researchData.map((paper) => (
              <div key={paper.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="font-display font-bold text-white text-sm sm:text-base">
                    {paper.title}
                  </h4>
                  <span className="font-mono text-xs text-[#d4ff33]">{paper.venue}</span>
                </div>
                {paper.collaborators && (
                  <p className="font-mono text-xs text-white/50 mb-2">
                    Investigators: {paper.collaborators.join(', ')}
                  </p>
                )}
                <p className="text-xs text-[#94a3b8] leading-relaxed mb-3">
                  {paper.abstract}
                </p>
                <div className="flex flex-wrap gap-2">
                  {paper.results.map((r, i) => (
                    <span key={i} className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#d4ff33]/5 border border-[#d4ff33]/20 text-[#d4ff33]">
                      <strong>{r.metric}:</strong> {r.value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Capabilities */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#d4ff33]">
              <CheckCircle2 size={16} /> Technical Competencies
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsData.map((cat) => (
                <div key={cat.title} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-mono text-xs font-bold text-white mb-2">{cat.title}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Notice */}
        <div className="p-4 border-t border-white/10 bg-[#08090b]/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/50">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#d4ff33]" />
            <span>Target PDF: public/documents/Yogesh-R-Mehta-Resume.pdf</span>
          </div>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors"
          >
            Close Document (ESC)
          </button>
        </div>

      </div>
    </div>
  );
};

