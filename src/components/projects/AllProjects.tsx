import React, { useState, useMemo } from 'react';
import { Project } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import { Search, ExternalLink, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

interface AllProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['All', 'Agentic AI', 'Operations Research', 'Causal AI', 'FinTech & Full-Stack', 'Systems & Infra'] as const;
type CategoryFilter = typeof CATEGORIES[number];

export const AllProjects: React.FC<AllProjectsProps> = ({ projects, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.technologies.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="library" className="py-16 sm:py-20 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 02. REPOSITORY ARCHIVE"
          title="All Systems & Software Repositories"
          subtitle="Complete catalog of open-source architectures, operations research solvers, and full-stack applications."
          accent="cyan"
        />

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-mono text-xs px-3.5 py-1.5 rounded-xl border transition-all ${
                    active
                      ? 'bg-[#38bdf8] text-[#08090b] border-[#38bdf8] font-bold shadow-md shadow-[#38bdf8]/15'
                      : 'bg-white/[0.03] text-[#94a3b8] border-white/10 hover:border-[#38bdf8]/40 hover:text-[#38bdf8]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search repositories by tech, title..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all font-mono"
            />
          </div>

        </div>

        {/* Results Counter */}
        <div className="font-mono text-xs text-white/40 mb-6 flex items-center justify-between">
          <span>Showing {filteredProjects.length} of {projects.length} repositories</span>
          {searchQuery && (
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-[#38bdf8] hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col justify-between rounded-2xl p-6 glass-panel border border-white/10 hover:border-[#38bdf8]/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#38bdf8]/10 transition-all duration-200"
              >
                <div>
                  
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <Badge variant="cyan">{project.category}</Badge>
                    <span className="font-mono text-[10px] text-white/50 border border-white/10 px-2 py-0.5 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline with multi-color hover */}
                  <h4 className="font-display text-xl font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors duration-200 mb-1.5">
                    {project.title}
                  </h4>
                  <p className="font-mono text-xs text-[#cbd5e1] group-hover:text-white mb-3 line-clamp-2 leading-relaxed transition-colors">
                    {project.tagline}
                  </p>

                  {/* Minimal Summary */}
                  <p className="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                </div>

                {/* Footer: Tech Chips & Actions */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-white/5">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70 group-hover:border-[#38bdf8]/30 group-hover:text-white transition-colors">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 text-white/40">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38bdf8] font-semibold group-hover:underline">
                      <span>Inspect Details</span>
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>

                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} live deployment`}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-[#38bdf8] hover:text-[#08090b] text-white/70 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} repository`}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                          title="GitHub Repository"
                        >
                          <GithubIcon size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl glass-panel border border-white/10">
            <SlidersHorizontal size={32} className="mx-auto text-white/30 mb-3" />
            <h4 className="font-display text-lg font-bold text-white mb-1">No repositories match your filter</h4>
            <p className="text-sm text-[#94a3b8] mb-4">Try clearing your search term or selecting 'All'.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
