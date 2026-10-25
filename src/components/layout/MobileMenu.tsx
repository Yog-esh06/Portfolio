import React, { useEffect } from 'react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { X, FileText } from 'lucide-react';
import { TabId } from './SectionTabs';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  activeTab?: TabId;
  onSelectTab?: (tab: TabId) => void;
}

const NAV_ITEMS: { label: string; tab: TabId; color: string }[] = [
  { label: '01. Hackathons & Accolades', tab: 'hackathons', color: 'hover:text-[#ff7849]' },
  { label: '02. Engineering Projects', tab: 'projects', color: 'hover:text-[#d4ff33]' },
  { label: '03. Systems Research', tab: 'research', color: 'hover:text-[#38bdf8]' },
  { label: '04. Deloitte Experience', tab: 'experience', color: 'hover:text-[#34d399]' },
  { label: '05. Technical Certifications', tab: 'certificates', color: 'hover:text-[#c084fc]' },
  { label: '06. LinkedIn Updates', tab: 'updates', color: 'hover:text-[#60a5fa]' },
  { label: '07. Technical Skills', tab: 'skills', color: 'hover:text-[#f472b6]' }
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  onOpenResume, 
  activeTab,
  onSelectTab 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleItemClick = (tab: TabId) => {
    if (onSelectTab) {
      onSelectTab(tab);
    }
    onClose();
    setTimeout(() => {
      const element = document.getElementById('sections-tabs');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div 
      className="fixed inset-0 z-50 lg:hidden bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 transition-all duration-300"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Bar with Brand & Close */}
      <div className="flex items-center justify-between pt-2 pb-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#d4ff33] text-[#08090b] flex items-center justify-center font-display font-extrabold text-xs">
            YM
          </div>
          <span className="font-display font-bold text-sm text-white">Yogesh R. Mehta</span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close Navigation"
          className="p-2 rounded-xl bg-white/5 text-white/80 hover:text-white border border-white/10"
        >
          <X size={20} />
        </button>
      </div>

      {/* Nav List */}
      <nav className="flex flex-col gap-2 my-auto py-6">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.tab;
          return (
            <button
              key={item.tab}
              onClick={() => handleItemClick(item.tab)}
              className={`font-mono text-sm text-left py-2.5 px-3 rounded-xl transition-all flex items-center justify-between ${
                isActive
                  ? 'bg-white/10 text-white font-bold'
                  : `text-[#cbd5e1] ${item.color} hover:bg-white/5`
              }`}
            >
              <span>{item.label}</span>
              {isActive && <span className="w-2 h-2 rounded-full bg-[#d4ff33]" />}
            </button>
          );
        })}

        <button
          onClick={() => { onClose(); onOpenResume(); }}
          className="mt-4 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#d4ff33] text-[#08090b] font-mono text-xs font-bold shadow-lg shadow-[#d4ff33]/20"
        >
          <FileText size={15} />
          <span>View Curriculum Vitae / Resume</span>
        </button>
      </nav>

      {/* Footer Socials */}
      <div className="pt-6 border-t border-white/10 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs hover:border-[#d4ff33]/40 transition-colors"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#38bdf8] font-mono text-xs hover:border-[#38bdf8]/40 transition-colors"
          >
            <LinkedinIcon size={14} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};
