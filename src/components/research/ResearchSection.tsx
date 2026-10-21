import React from 'react';
import { researchData } from '../../data/research';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Users, ExternalLink, CheckCircle, BarChart3 } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-20 lg:py-28 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 03. ACADEMIC & SYSTEMS RESEARCH"
          title="Empirical Research & Ablation Studies"
          subtitle="Peer-reviewed research and experimental ablation frameworks conducted at SRM Institute of Science and Technology."
          accent="cyan"
        />

        <div className="space-y-12">
          {researchData.map((paper) => (
            <div
              key={paper.id}
              className="rounded-3xl p-6 sm:p-8 lg:p-10 glass-panel border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300"
            >
              {/* Paper Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="cyan">{paper.track}</Badge>
                  <span className="font-mono text-xs text-white/50 border border-white/10 px-2.5 py-0.5 rounded-full">
                    {paper.venue} ({paper.year})
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#c8f135]">
                  <CheckCircle size={14} />
                  <span>{paper.status}</span>
                </div>
              </div>

              {/* Title & Collaborators */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f8fafc] mb-3 leading-snug">
                {paper.title}
              </h3>

              {paper.collaborators && (
                <div className="flex items-center gap-2 font-mono text-xs text-[#94a3b8] mb-6">
                  <Users size={14} className="text-[#38bdf8]" />
                  <span>Investigators: <strong className="text-white">{paper.collaborators.join(', ')}</strong></span>
                </div>
              )}

              {/* Abstract */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 mb-8">
                <span className="font-mono text-xs uppercase tracking-wider text-white/40 font-semibold block mb-2">
                  Abstract & Research Motivation
                </span>
                <p className="text-sm text-[#cbd5e1] leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              {/* Problem vs Methodology Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#ff5f1f] font-semibold block mb-2">
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

              {/* Experimental Findings / Results Strip */}
              <div className="mb-8">
                <span className="font-mono text-xs uppercase tracking-wider text-white/40 block mb-3 flex items-center gap-2">
                  <BarChart3 size={14} className="text-[#c8f135]" /> Empirical Benchmarks & Quantitative Findings
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {paper.results.map((res, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="font-mono text-xs text-[#94a3b8] mb-1">{res.metric}</div>
                      <div className="font-display text-2xl font-bold text-[#c8f135] mb-1">{res.value}</div>
                      {res.comparison && (
                        <div className="font-mono text-[11px] text-white/50">{res.comparison}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Supporting Artifacts */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-1.5">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>

                {paper.repoUrl && (
                  <a
                    href={paper.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#38bdf8] hover:text-white transition-colors"
                  >
                    <span>View Research Repository</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

