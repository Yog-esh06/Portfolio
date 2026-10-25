import React, { useState } from 'react';
import { experienceData } from '../../data/experience';
import { ExperienceItem } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { ExperienceModal } from './ExperienceModal';
import { Calendar, MapPin, Award, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 04. PROFESSIONAL EXPERIENCE"
          title="Industry Practice & Technical Audits"
          subtitle="Enterprise controls assurance at Deloitte and academic research appointments at SRM Institute of Science and Technology."
          accent="lime"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((exp) => (
            <div 
              key={exp.id} 
              onClick={() => setSelectedExperience(exp)}
              className="group cursor-pointer rounded-3xl p-6 sm:p-7 bg-[#0b0d12] border border-white/10 hover:border-[#34d399]/50 hover:bg-[#0f131a] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg hover:shadow-[#34d399]/10"
            >
              <div>
                {/* Header Badge & Period */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#34d399]/10 border border-[#34d399]/30 text-[#34d399] font-semibold group-hover:bg-[#34d399]/20 transition-colors">
                    {exp.organization}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-white/40 group-hover:text-white/60 transition-colors">
                    <Calendar size={12} className="text-[#34d399]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Title with multi-color hover */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f8fafc] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#34d399] group-hover:to-[#d4ff33] transition-all duration-300 mb-1">
                  {exp.role}
                </h3>
                
                <p className="font-mono text-xs text-[#94a3b8] group-hover:text-[#38bdf8] transition-colors mb-4 flex items-center gap-2">
                  <span>{exp.division}</span>
                  <span className="text-white/20">•</span>
                  <span className="flex items-center gap-1 text-white/50"><MapPin size={11} /> {exp.location}</span>
                </p>

                {/* Clean 1-sentence teaser */}
                <p className="text-xs sm:text-sm text-[#94a3b8] group-hover:text-[#cbd5e1] leading-relaxed line-clamp-2 mb-5 transition-colors">
                  {exp.highlights[0]}
                </p>

                {/* Badges preview strip */}
                {exp.badges && exp.badges.length > 0 && (
                  <div className="flex items-center gap-2 mb-4 font-mono text-[11px] text-[#34d399]/90 group-hover:text-[#34d399]">
                    <Award size={13} />
                    <span>{exp.badges.length} Certified Badges & Learning Records</span>
                  </div>
                )}
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-white/50 group-hover:text-white transition-colors">
                <span className="flex items-center gap-1.5 text-white/40 group-hover:text-[#34d399] transition-colors">
                  <ShieldCheck size={13} className="text-[#34d399]" /> Verified Internship
                </span>
                <span className="inline-flex items-center gap-1 text-[#34d399] font-semibold group-hover:translate-x-0.5 transition-transform">
                  View Full Details <ArrowUpRight size={13} />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Experience Detail Modal */}
      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
};
