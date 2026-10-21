import React from 'react';
import { achievementsData } from '../../data/achievements';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Trophy, ExternalLink, ShieldCheck } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 lg:py-28 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 05. COMPETITIVE ACCOLADES"
          title="Hackathons & National Standing"
          subtitle="Validated competition outcomes: Top 8 finalist ranking at The Industry Games and 1st place championship in healthcare assistive tech."
          accent="orange"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item) => {
            const isTopFinalist = item.id === 'industry-games-finalist';
            const isWinner = item.badgeType === 'winner';

            return (
              <div
                key={item.id}
                className={`rounded-3xl p-6 sm:p-8 glass-panel border transition-all duration-300 ${
                  isTopFinalist
                    ? 'border-[#ff5f1f]/40 bg-gradient-to-b from-[#0f1319] to-[#1c120c]/40 hover:border-[#ff5f1f]'
                    : isWinner
                    ? 'border-[#c8f135]/40 bg-gradient-to-b from-[#0f1319] to-[#141d14]/40 hover:border-[#c8f135]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#ff5f1f]">
                      <Trophy size={18} />
                    </span>
                    <Badge variant={isTopFinalist ? 'orange' : isWinner ? 'lime' : 'neutral'}>
                      {item.ranking}
                    </Badge>
                  </div>
                  <span className="font-mono text-xs text-white/40">{item.year}</span>
                </div>

                {/* Competition Name & Subtitle */}
                <h3 className="font-display text-2xl font-bold text-[#f8fafc] mb-1">
                  {item.title}
                </h3>
                <div className="font-mono text-xs text-[#38bdf8] mb-4">
                  {item.competition} • <span className="text-white/60">{item.scale}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Associated Project Banner */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-6 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-white/40 block">Associated Project</span>
                    <span className="font-mono text-xs text-[#f8fafc] font-semibold">{item.associatedProject}</span>
                  </div>
                  {item.projectUrl && (
                    <a
                      href={item.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Evidence Verification Line */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/5 font-mono text-[11px] text-white/50">
                  <ShieldCheck size={13} className="text-[#c8f135]" />
                  <span>{item.evidence}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

