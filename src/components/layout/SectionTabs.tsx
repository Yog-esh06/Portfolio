import React from 'react';
import { Trophy, Layers, BookOpen, Briefcase, Award, Code2 } from 'lucide-react';
import { LinkedinIcon } from '../common/Icons';

export type TabId = 'hackathons' | 'projects' | 'research' | 'experience' | 'certificates' | 'updates' | 'skills';

interface TabConfig {
  id: TabId;
  label: string;
  countBadge?: string;
  icon: React.ReactNode;
  activeColorClass: string;
  hoverColorClass: string;
  glowClass: string;
}

interface SectionTabsProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const tabsConfig: TabConfig[] = [
  {
    id: 'hackathons',
    label: 'Hackathons & Accolades',
    countBadge: '1st & Top 8',
    icon: <Trophy size={15} />,
    activeColorClass: 'bg-[#ff7849] text-[#08090b] border-[#ff7849] font-bold shadow-lg shadow-[#ff7849]/25',
    hoverColorClass: 'hover:text-[#ff7849] hover:border-[#ff7849]/50 hover:bg-[#ff7849]/10',
    glowClass: 'text-[#ff7849]'
  },
  {
    id: 'projects',
    label: 'Engineering Projects',
    countBadge: '13 Repos',
    icon: <Layers size={15} />,
    activeColorClass: 'bg-[#d4ff33] text-[#08090b] border-[#d4ff33] font-bold shadow-lg shadow-[#d4ff33]/25',
    hoverColorClass: 'hover:text-[#d4ff33] hover:border-[#d4ff33]/50 hover:bg-[#d4ff33]/10',
    glowClass: 'text-[#d4ff33]'
  },
  {
    id: 'research',
    label: 'Academic Research',
    countBadge: '3 Papers',
    icon: <BookOpen size={15} />,
    activeColorClass: 'bg-[#38bdf8] text-[#08090b] border-[#38bdf8] font-bold shadow-lg shadow-[#38bdf8]/25',
    hoverColorClass: 'hover:text-[#38bdf8] hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/10',
    glowClass: 'text-[#38bdf8]'
  },
  {
    id: 'experience',
    label: 'Professional Experience',
    countBadge: 'Deloitte',
    icon: <Briefcase size={15} />,
    activeColorClass: 'bg-[#34d399] text-[#08090b] border-[#34d399] font-bold shadow-lg shadow-[#34d399]/25',
    hoverColorClass: 'hover:text-[#34d399] hover:border-[#34d399]/50 hover:bg-[#34d399]/10',
    glowClass: 'text-[#34d399]'
  },
  {
    id: 'certificates',
    label: 'Certifications',
    countBadge: '34 Curated',
    icon: <Award size={15} />,
    activeColorClass: 'bg-[#c084fc] text-[#08090b] border-[#c084fc] font-bold shadow-lg shadow-[#c084fc]/25',
    hoverColorClass: 'hover:text-[#c084fc] hover:border-[#c084fc]/50 hover:bg-[#c084fc]/10',
    glowClass: 'text-[#c084fc]'
  },
  {
    id: 'updates',
    label: 'From LinkedIn',
    countBadge: '5 Posts',
    icon: <LinkedinIcon size={14} />,
    activeColorClass: 'bg-[#60a5fa] text-[#08090b] border-[#60a5fa] font-bold shadow-lg shadow-[#60a5fa]/25',
    hoverColorClass: 'hover:text-[#60a5fa] hover:border-[#60a5fa]/50 hover:bg-[#60a5fa]/10',
    glowClass: 'text-[#60a5fa]'
  },
  {
    id: 'skills',
    label: 'Technical Skills',
    countBadge: 'Systems',
    icon: <Code2 size={15} />,
    activeColorClass: 'bg-[#f472b6] text-[#08090b] border-[#f472b6] font-bold shadow-lg shadow-[#f472b6]/25',
    hoverColorClass: 'hover:text-[#f472b6] hover:border-[#f472b6]/50 hover:bg-[#f472b6]/10',
    glowClass: 'text-[#f472b6]'
  }
];

export const SectionTabs: React.FC<SectionTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div id="sections-tabs" className="sticky top-16 sm:top-20 z-30 py-4 bg-[#08090b]/90 backdrop-blur-xl border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal Scrollable Tabs Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {tabsConfig.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl font-mono text-xs whitespace-nowrap border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? tab.activeColorClass
                    : `bg-white/[0.03] text-[#94a3b8] border-white/10 ${tab.hoverColorClass}`
                }`}
              >
                <span className={`transition-colors ${isActive ? 'text-[#08090b]' : 'text-white/60 group-hover:' + tab.glowClass}`}>
                  {tab.icon}
                </span>

                <span className={`transition-colors ${isActive ? 'text-[#08090b]' : 'group-hover:text-white'}`}>
                  {tab.label}
                </span>

                {tab.countBadge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border transition-colors ${
                    isActive
                      ? 'bg-black/20 text-[#08090b] border-black/20'
                      : 'bg-white/5 text-white/40 border-white/10 group-hover:border-white/20'
                  }`}>
                    {tab.countBadge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
