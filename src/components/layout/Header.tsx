import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { profileData } from '../../data/profile';
import { TabId } from './SectionTabs';

interface HeaderProps {
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
  onOpenResume: () => void;
  activeTab?: TabId;
  onSelectTab?: (tab: TabId) => void;
}

interface NavLinkItem {
  label: string;
  tab: TabId;
  hoverColor: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Accolades', tab: 'hackathons', hoverColor: 'hover:text-[#ff7849]' },
  { label: 'Projects', tab: 'projects', hoverColor: 'hover:text-[#d4ff33]' },
  { label: 'Research', tab: 'research', hoverColor: 'hover:text-[#38bdf8]' },
  { label: 'Experience', tab: 'experience', hoverColor: 'hover:text-[#34d399]' },
  { label: 'Certificates', tab: 'certificates', hoverColor: 'hover:text-[#c084fc]' },
  { label: 'Updates', tab: 'updates', hoverColor: 'hover:text-[#60a5fa]' },
  { label: 'Skills', tab: 'skills', hoverColor: 'hover:text-[#f472b6]' }
];

export const Header: React.FC<HeaderProps> = ({ 
  onMobileMenuToggle, 
  isMobileMenuOpen,
  onOpenResume,
  activeTab,
  onSelectTab
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: TabId, e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelectTab) {
      onSelectTab(tab);
    }
    const element = document.getElementById('sections-tabs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#08090b]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Monogram Brand */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group"
          aria-label="Yogesh R. Mehta - Home"
        >
          <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center font-display font-extrabold text-sm tracking-wider group-hover:border-[#d4ff33] group-hover:text-[#d4ff33] transition-all">
            YM
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-sm text-[#f5f5f0] group-hover:text-[#d4ff33] transition-colors">
              Yogesh R. Mehta
            </span>
            <span className="block font-mono text-[10px] text-white/40">
              Systems & AI/ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 p-1.5 rounded-2xl backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.tab;
            return (
              <button
                key={link.tab}
                onClick={(e) => handleNavClick(link.tab, e)}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs transition-all ${
                  isActive
                    ? 'bg-white/10 text-white font-bold shadow-sm'
                    : `text-[#94a3b8] ${link.hoverColor} hover:bg-white/5`
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Strip */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-semibold border border-white/10 hover:border-[#d4ff33]/40 hover:text-[#d4ff33] transition-all"
          >
            <FileText size={13} className="text-[#d4ff33]" />
            <span>Resume</span>
          </button>

          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#38bdf8] hover:text-[#60a5fa] border border-[#38bdf8]/20 transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            aria-label="Open Resume"
            className="p-2 rounded-xl bg-white/5 text-[#d4ff33] border border-white/10"
          >
            <FileText size={16} />
          </button>
          <button
            onClick={onMobileMenuToggle}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="p-2 rounded-xl bg-white/5 text-white/80 hover:text-white border border-white/10"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>
    </header>
  );
};
