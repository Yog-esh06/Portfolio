import React, { useEffect } from 'react';
import { Project } from '../../types';
import { Badge } from './Badge';
import { GithubIcon } from './Icons';
import { X, ExternalLink, Layers, Cpu, Activity, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f1319] border border-white/10 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="lime">{project.category}</Badge>
          {project.badge && (
            <Badge variant="orange" icon={<Activity size={12} />}>
              {project.badge}
            </Badge>
          )}
          <span className="font-mono text-xs text-white/50 border border-white/10 px-2.5 py-0.5 rounded-full">
            {project.status}
          </span>
        </div>

        <h2 id="modal-project-title" className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
          {project.title}
        </h2>
        <p className="font-mono text-sm sm:text-base text-[#c8f135] mb-6 leading-relaxed">
          {project.tagline}
        </p>

        {/* Summary */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-6 text-sm text-[#cbd5e1] leading-relaxed">
          {project.summary}
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-red-500/[0.04] border border-red-500/20">
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <AlertCircle size={14} /> The Problem
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#c8f135]/[0.04] border border-[#c8f135]/20">
            <div className="flex items-center gap-2 text-[#c8f135] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers size={14} /> The Solution & Architecture
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Pipeline Steps */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mb-6">
            <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#94a3b8] font-semibold mb-3">
              <Layers size={14} className="text-[#38bdf8]" /> Architecture & Execution Flow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecture.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs text-[#c8f135] font-semibold">{step.name}</span>
                    <span className="font-mono text-[10px] text-white/40 uppercase">{step.role}</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Metrics Strip */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6">
            <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#94a3b8] font-semibold mb-3">
              <Cpu size={14} className="text-[#c8f135]" /> Project Metrics & Standards
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                  <div className="font-display text-lg font-bold text-[#f8fafc]">{metric.value}</div>
                  <div className="font-mono text-[11px] text-[#94a3b8] mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#94a3b8] font-semibold mb-2.5">
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-8">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#94a3b8] font-semibold mb-2.5">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94a3b8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8f135] mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c8f135] text-[#090b0e] font-mono text-xs font-bold hover:bg-[#d6f658] transition-all"
            >
              <ExternalLink size={14} /> Open Live Deployment
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white font-mono text-xs font-semibold hover:bg-white/20 transition-all border border-white/10"
            >
              <GithubIcon size={14} /> View GitHub Repository
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 text-xs font-mono text-white/50 hover:text-white transition-colors"
          >
            Close Window (ESC)
          </button>
        </div>
      </div>
    </div>
  );
};

