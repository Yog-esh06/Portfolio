import React from 'react';
import { achievementsData } from '../../data/achievements';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Trophy, ExternalLink } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 lg:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 02. COMPETITION & RESEARCH MILESTONES"
          title="Hackathon Results & Achievements"
          subtitle="Validated competition outcomes and academic symposium presentations, led by our med-tech hackathon win and national finalist finish."
          accent="orange"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((item) => {
            const isWinner = item.badgeType === 'winner';
            const isTopFinalist = item.id === 'industry-games-finalist';

            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between rounded-3xl p-7 sm:p-8 glass-panel border transition-all duration-300 ${
                  isWinner
                    ? 'border-[#d4ff33]/40 bg-gradient-to-b from-[#0e1117] to-[#141a0d]/40 hover:border-[#d4ff33]'
                    : isTopFinalist
                    ? 'border-[#ff4d22]/40 bg-gradient-to-b from-[#0e1117] to-[#1c0f0a]/40 hover:border-[#ff4d22]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Header: Standing Badge & Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`p-2 rounded-xl bg-white/5 border border-white/10 ${isWinner ? 'text-[#d4ff33]' : 'text-[#ff4d22]'}`}>
                        <Trophy size={18} />
                      </span>
                      <Badge variant={isWinner ? 'lime' : isTopFinalist ? 'orange' : 'neutral'}>
                        {item.ranking}
                      </Badge>
                    </div>
                    <span className="font-mono text-xs text-white/40">{item.year}</span>
                  </div>

                  {/* Title & Competition */}
                  <h3 className="font-display text-2xl font-bold text-[#f5f5f0] mb-1.5">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs text-[#38bdf8] mb-4">
                    {item.competition} • <span className="text-white/60">{item.scale}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer: Associated Project Banner & Evidence */}
                <div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 mb-4 flex items-center justify-between gap-3">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-white/40 block">Associated Project</span>
                      <span className="font-mono text-xs text-[#f5f5f0] font-semibold">{item.associatedProject}</span>
                    </div>
                    {item.projectUrl && (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                        title="View repository"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <div className="font-mono text-[11px] text-white/40 pt-2 border-t border-white/5">
                    Evidence: {item.evidence}
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
