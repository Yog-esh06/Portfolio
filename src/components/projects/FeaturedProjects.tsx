import React from 'react';
import { Project } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import { ExternalLink, Layers, ArrowRight } from 'lucide-react';

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects, onSelectProject }) => {
  const featured = projects.filter((p) => p.featured).sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));

  return (
    <section id="work" className="py-16 sm:py-20 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 02. FLAGSHIP SYSTEMS"
          title="Featured Engineering Projects"
          subtitle="Production-grade distributed engines, reinforcement learning solvers, and operations research systems."
          accent="lime"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => {
            const isStrata = project.id === 'strata';
            const isAeon = project.id === 'aeon';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer flex flex-col justify-between rounded-3xl p-6 sm:p-7 glass-panel border transition-all duration-300 hover:-translate-y-1.5 ${
                  isStrata 
                    ? 'border-[#ff7849]/30 hover:border-[#ff7849] hover:shadow-xl hover:shadow-[#ff7849]/10' 
                    : isAeon 
                    ? 'border-[#d4ff33]/30 hover:border-[#d4ff33] hover:shadow-xl hover:shadow-[#d4ff33]/10'
                    : 'border-white/10 hover:border-[#38bdf8]/50 hover:shadow-xl hover:shadow-[#38bdf8]/10'
                }`}
              >
                <div>
                  {/* Thumbnail Header: Index & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-white/40 font-semibold">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                      <Badge variant={isStrata ? 'orange' : isAeon ? 'lime' : 'cyan'}>
                        {project.category}
                      </Badge>
                    </div>

                    {project.badge && (
                      <span className="font-mono text-[10px] text-white/60 border border-white/10 px-2 py-0.5 rounded-full">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title with dynamic multi-color gradient on hover */}
                  <h3 className="font-display text-2xl font-bold text-[#f8fafc] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#d4ff33] group-hover:via-[#38bdf8] group-hover:to-[#ff7849] transition-all duration-300 mb-2 leading-tight">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="font-mono text-xs text-[#38bdf8] group-hover:text-[#60a5fa] leading-relaxed mb-3 line-clamp-2 transition-colors">
                    {project.tagline}
                  </p>

                  {/* Minimal Thumbnail Summary */}
                  <p className="text-xs sm:text-sm text-[#94a3b8] group-hover:text-[#cbd5e1] line-clamp-3 leading-relaxed mb-5 transition-colors">
                    {project.summary}
                  </p>

                  {/* Core Architecture Highlight Chip */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-5 flex items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-white/40 flex items-center gap-1.5">
                      <Layers size={13} className="text-[#d4ff33]" /> Architecture
                    </span>
                    <span className="text-white/80 font-medium truncate">
                      {project.architecture[0]?.name || 'Pipeline'}
                    </span>
                  </div>
                </div>

                {/* Thumbnail Bottom: Technologies & Action Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-white/5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70 group-hover:border-[#d4ff33]/30 group-hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 text-white/40">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2">
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#d4ff33] group-hover:underline">
                      <span>Full Deep Dive</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>

                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} live demo`}
                          className="p-2 rounded-xl bg-white/5 hover:bg-[#d4ff33] hover:text-[#08090b] text-white/70 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} source code`}
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                          title="GitHub Repository"
                        >
                          <GithubIcon size={14} />
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
