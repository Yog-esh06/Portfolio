import React from 'react';
import { experienceData } from '../../data/experience';
import { SectionHeading } from '../common/SectionHeading';
import { Calendar, MapPin, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 04. PROFESSIONAL EXPERIENCE"
          title="Industry Practice & Technical Audits"
          subtitle="Enterprise controls assurance at Deloitte and academic research appointments at SRM Institute of Science and Technology."
          accent="lime"
        />

        <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#090b0e] border-2 border-[#d4ff33] group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-white/10 hover:border-white/20 transition-all">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#f8fafc]">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-sm text-[#d4ff33] mt-0.5 font-semibold">
                      {exp.organization} — <span className="text-[#94a3b8] font-normal">{exp.division}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-white/50">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#d4ff33]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#94a3b8] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff33] mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Deloitte Badges Strip */}
                {exp.badges && exp.badges.length > 0 && (
                  <div className="pt-4 border-t border-white/5">
                    <span className="font-mono text-xs uppercase tracking-wider text-white/40 block mb-2.5 flex items-center gap-1.5">
                      <Award size={13} className="text-[#d4ff33]" /> Internal Employee Skill Badges & Recognitions
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#d4ff33]/5 border border-[#d4ff33]/20 text-[#d4ff33]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
