import React, { useState } from 'react';
import { achievementsData } from '../../data/achievements';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Trophy, ArrowUpRight } from 'lucide-react';
import { AchievementModal } from './AchievementModal';
import { AchievementItem } from '../../types';

export const AchievementsSection: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  return (
    <section id="achievements" className="py-16 sm:py-20 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 01. COMPETITION & RESEARCH MILESTONES"
          title="Hackathon Results & Accolades"
          subtitle="Validated competition outcomes and academic symposium presentations, led by our med-tech hackathon win and national finalist finish."
          accent="orange"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item) => {
            const isWinner = item.badgeType === 'winner';
            const isTopFinalist = item.id === 'industry-games-finalist';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedAchievement(item)}
                className={`group cursor-pointer flex flex-col justify-between rounded-3xl p-6 sm:p-7 glass-panel border transition-all duration-300 hover:-translate-y-1.5 ${
                  isWinner
                    ? 'border-[#d4ff33]/30 bg-gradient-to-b from-[#0e1117] to-[#141a0d]/30 hover:border-[#d4ff33] hover:shadow-xl hover:shadow-[#d4ff33]/10'
                    : isTopFinalist
                    ? 'border-[#ff7849]/30 bg-gradient-to-b from-[#0e1117] to-[#1c0f0a]/30 hover:border-[#ff7849] hover:shadow-xl hover:shadow-[#ff7849]/10'
                    : 'border-white/10 hover:border-[#38bdf8]/40 hover:shadow-xl hover:shadow-[#38bdf8]/10'
                }`}
              >
                <div>
                  {/* Thumbnail Top Bar: Ranking Badge & Year */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className={`p-2 rounded-xl bg-white/5 border border-white/10 ${
                        isWinner ? 'text-[#d4ff33] group-hover:text-[#e4ff66]' : 'text-[#ff7849] group-hover:text-[#ff9066]'
                      } transition-colors`}>
                        <Trophy size={16} />
                      </span>
                      <Badge variant={isWinner ? 'lime' : isTopFinalist ? 'orange' : 'neutral'}>
                        {item.ranking}
                      </Badge>
                    </div>
                    <span className="font-mono text-xs text-white/40 group-hover:text-[#38bdf8] transition-colors">{item.year}</span>
                  </div>

                  {/* Thumbnail Title with vibrant multi-color hover */}
                  <h3 className={`font-display text-xl sm:text-2xl font-bold text-[#f5f5f0] mb-2 transition-colors duration-200 ${
                    isWinner 
                      ? 'group-hover:text-[#d4ff33]' 
                      : isTopFinalist 
                      ? 'group-hover:text-[#ff7849]' 
                      : 'group-hover:text-[#38bdf8]'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Competition & Scale */}
                  <div className="font-mono text-xs text-[#94a3b8] mb-4">
                    <span className="text-[#38bdf8] group-hover:text-[#60a5fa] transition-colors">{item.competition}</span>
                    <span className="text-white/30 mx-1.5">•</span>
                    <span className="text-white/50">{item.scale}</span>
                  </div>

                  {/* Minimum Info: Crisp 1-Line Impact Summary */}
                  <p className="text-xs sm:text-sm text-[#94a3b8] group-hover:text-[#cbd5e1] line-clamp-2 leading-relaxed mb-4 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Thumbnail Bottom: Project Chip & Click Cue */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2 font-mono text-xs">
                  <span className="text-white/60 truncate max-w-[200px] sm:max-w-[240px]">
                    <span className="text-white/30 text-[10px] uppercase block">Project</span>
                    <strong className="text-[#f5f5f0] group-hover:text-[#d4ff33] transition-colors">{item.associatedProject}</strong>
                  </span>
                  
                  <span className={`inline-flex items-center gap-1 font-semibold text-xs transition-colors ${
                    isWinner ? 'text-[#d4ff33] group-hover:underline' : 'text-[#ff7849] group-hover:underline'
                  }`}>
                    <span>Details</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal for Full Accolade Breakdown */}
      <AchievementModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
};
