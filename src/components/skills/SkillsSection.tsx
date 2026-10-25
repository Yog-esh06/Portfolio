import React from 'react';
import { skillsData } from '../../data/skills';
import { SectionHeading } from '../common/SectionHeading';
import { Terminal, Cpu, Server, Database } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryMeta = (index: number) => {
    switch (index) {
      case 0: 
        return { 
          icon: <Terminal size={18} className="text-[#d4ff33]" />, 
          accent: 'hover:border-[#d4ff33]/50 hover:shadow-[#d4ff33]/10',
          titleHover: 'group-hover:text-[#d4ff33]',
          chipHover: 'hover:text-[#d4ff33] hover:border-[#d4ff33]/50 hover:bg-[#d4ff33]/10'
        };
      case 1: 
        return { 
          icon: <Cpu size={18} className="text-[#c084fc]" />, 
          accent: 'hover:border-[#c084fc]/50 hover:shadow-[#c084fc]/10',
          titleHover: 'group-hover:text-[#c084fc]',
          chipHover: 'hover:text-[#c084fc] hover:border-[#c084fc]/50 hover:bg-[#c084fc]/10'
        };
      case 2: 
        return { 
          icon: <Server size={18} className="text-[#38bdf8]" />, 
          accent: 'hover:border-[#38bdf8]/50 hover:shadow-[#38bdf8]/10',
          titleHover: 'group-hover:text-[#38bdf8]',
          chipHover: 'hover:text-[#38bdf8] hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/10'
        };
      default: 
        return { 
          icon: <Database size={18} className="text-[#ff7849]" />, 
          accent: 'hover:border-[#ff7849]/50 hover:shadow-[#ff7849]/10',
          titleHover: 'group-hover:text-[#ff7849]',
          chipHover: 'hover:text-[#ff7849] hover:border-[#ff7849]/50 hover:bg-[#ff7849]/10'
        };
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 07. TECHNICAL CAPABILITIES"
          title="Tools, Solvers & Infrastructure"
          subtitle="Grounded engineering proficiency organized by architectural domains without arbitrary percentage bars."
          accent="lime"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillsData.map((category, idx) => {
            const meta = getCategoryMeta(idx);

            return (
              <div
                key={category.title}
                className={`rounded-3xl p-6 sm:p-8 bg-[#0b0d12] border border-white/10 ${meta.accent} transition-all duration-300 group shadow-lg`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {meta.icon}
                  </span>
                  <h3 className={`font-display text-xl sm:text-2xl font-bold text-[#f8fafc] ${meta.titleHover} transition-colors duration-200`}>
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-[#94a3b8] group-hover:text-[#cbd5e1] mb-6 leading-relaxed transition-colors">
                  {category.description}
                </p>

                {/* Skills Chips with vibrant hover effects */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-200 cursor-default ${meta.chipHover} ${
                        skill.highlight
                          ? 'bg-white/[0.04] border-white/20 text-[#f8fafc] font-semibold'
                          : 'bg-white/[0.02] border-white/10 text-[#cbd5e1]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-[#d4ff33]' : 'bg-white/40'}`} />
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-white/40 border-l border-white/10 pl-1.5">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
