import React from 'react';
import { skillsData } from '../../data/skills';
import { SectionHeading } from '../common/SectionHeading';
import { Terminal, Cpu, Server, Database } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Terminal size={18} className="text-[#c8f135]" />;
      case 1: return <Cpu size={18} className="text-[#a855f7]" />;
      case 2: return <Server size={18} className="text-[#38bdf8]" />;
      default: return <Database size={18} className="text-[#ff5f1f]" />;
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, idx) => (
            <div
              key={category.title}
              className="rounded-3xl p-6 sm:p-8 glass-panel border border-white/10 hover:border-white/20 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 rounded-xl bg-white/5 border border-white/10">
                  {getCategoryIcon(idx)}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f8fafc]">
                  {category.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#94a3b8] mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                      skill.highlight
                        ? 'bg-[#c8f135]/5 border-[#c8f135]/30 text-[#f8fafc]'
                        : 'bg-white/[0.02] border-white/10 text-[#cbd5e1]'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-[#c8f135]' : 'bg-white/40'}`} />
                    <span className="font-medium">{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] text-white/40 border-l border-white/10 pl-1.5">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

