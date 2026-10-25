import React from 'react';
import { Project } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import { ArrowUpRight, Activity, ArrowRight } from 'lucide-react';

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects, onSelectProject }) => {
  const featured = projects.filter((p) => p.featured).sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0));

  return (
    <section id="work" className="py-20 lg:py-28 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 01. FLAGSHIP SYSTEMS"
          title="Engineered for Production & Research"
          subtitle="Real software architectures: multi-agent swarms, operations research solvers, causal counterfactuals, and telemetry benchmarks."
          accent="lime"
        />

        {/* Featured Projects Stack */}
        <div className="space-y-12">
          {featured.map((project, index) => {
            const isStrata = project.id === 'strata';

            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden glass-panel border transition-all duration-300 ${
                  isStrata 
                    ? 'border-[#c8f135]/40 bg-gradient-to-b from-[#0f1319] via-[#0f1319] to-[#141d14]/40 hover:border-[#c8f135]' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  
                  {/* Top Bar: Category, Status, Accolades */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-white/40 font-medium">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                      <Badge variant="lime">{project.category}</Badge>
                      {project.badge && (
                        <Badge variant="orange" icon={<Activity size={12} />}>
                          {project.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-white/50">
                      <Activity size={14} className="text-[#c8f135]" />
                      <span>{project.status}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="max-w-3xl mb-6">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f8fafc] group-hover:text-[#c8f135] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="font-mono text-sm sm:text-base text-[#38bdf8] leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Summary & Problem Framing */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
                    <div className="lg:col-span-7 space-y-4 text-sm text-[#94a3b8] leading-relaxed">
                      <p>{project.summary}</p>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block mb-1">
                          Core Problem Solved
                        </span>
                        <p className="text-xs text-[#94a3b8] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    </div>

                    {/* Architecture Steps preview */}
                    <div className="lg:col-span-5 space-y-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-white/40 block mb-2">
                        System Pipeline
                      </span>
                      {project.architecture.map((step, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start justify-between gap-3">
                          <div>
                            <span className="font-mono text-xs text-[#f8fafc] font-medium block">
                              {step.name}
                            </span>
                            <span className="text-[11px] text-[#94a3b8] leading-tight block mt-0.5">
                              {step.detail}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-[#c8f135] uppercase px-1.5 py-0.5 rounded bg-[#c8f135]/10 whitespace-nowrap">
                            {step.role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Row (if available) */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 pt-4 border-t border-white/5">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <div className="font-mono text-[11px] text-[#94a3b8] mb-0.5">{m.label}</div>
                          <div className="font-display text-base sm:text-lg font-bold text-[#f8fafc]">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom Bar: Technologies & CTA Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="font-mono text-[11px] px-2 py-1 text-white/40">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#f8fafc] font-mono text-xs font-medium border border-white/10 transition-colors"
                      >
                        <span>Deep Dive Architecture</span>
                        <ArrowRight size={13} />
                      </button>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#c8f135] text-[#090b0e] font-mono text-xs font-bold hover:bg-[#d6f658] transition-colors"
                        >
                          <span>Live Replay</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}

                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

