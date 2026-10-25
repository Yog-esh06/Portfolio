import React, { useState } from 'react';
import { researchData } from '../../data/research';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { ArrowUpRight, Users } from 'lucide-react';
import { ResearchModal } from './ResearchModal';
import { ResearchPaper } from '../../types';

export const ResearchSection: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);

  return (
    <section id="research" className="py-16 sm:py-20 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 03. ACADEMIC & SYSTEMS RESEARCH"
          title="Empirical Research & Systems Studies"
          subtitle="Empirical systems research, acoustic neural ablation, and software digital twin simulations."
          accent="cyan"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchData.map((paper) => {
            const primaryMetric = paper.results[0];

            return (
              <div
                key={paper.id}
                onClick={() => setSelectedPaper(paper)}
                className="group cursor-pointer flex flex-col justify-between rounded-3xl p-6 sm:p-7 glass-panel border border-white/10 hover:border-[#38bdf8]/50 hover:shadow-xl hover:shadow-[#38bdf8]/10 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Thumbnail Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <Badge variant="cyan">{paper.track}</Badge>
                    <span className="font-mono text-xs text-white/40 group-hover:text-[#38bdf8] transition-colors">
                      {paper.year}
                    </span>
                  </div>

                  {/* Thumbnail Title with multi-color hover */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors duration-200 mb-2 leading-snug">
                    {paper.title}
                  </h3>

                  {/* Venue */}
                  <div className="font-mono text-xs text-[#94a3b8] mb-4">
                    <span>{paper.venue}</span>
                  </div>

                  {/* Collaborators / Team */}
                  {paper.collaborators && (
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-white/50 mb-4">
                      <Users size={12} className="text-[#38bdf8]" />
                      <span className="truncate">{paper.collaborators.join(', ')}</span>
                    </div>
                  )}

                  {/* Minimum Info: Primary Benchmark Metric Card */}
                  {primaryMetric && (
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-4 group-hover:border-[#38bdf8]/20 transition-colors">
                      <div className="font-mono text-[10px] text-white/40 uppercase tracking-wider">{primaryMetric.metric}</div>
                      <div className="font-display text-xl font-bold text-[#d4ff33] group-hover:text-[#38bdf8] transition-colors">
                        {primaryMetric.value}
                      </div>
                      {primaryMetric.comparison && (
                        <div className="font-mono text-[10px] text-white/50 truncate mt-0.5">{primaryMetric.comparison}</div>
                      )}
                    </div>
                  )}
                </div>

                {/* Thumbnail Bottom: Click Cue */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2 font-mono text-xs">
                  <span className="text-white/40 text-[11px]">{paper.status}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#38bdf8] group-hover:underline">
                    <span>Abstract & Details</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Research Paper Detail Modal */}
      <ResearchModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
      />
    </section>
  );
};
