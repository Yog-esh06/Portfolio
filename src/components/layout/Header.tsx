import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { profileData } from '../../data/profile';

interface HeaderProps {
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Library', href: '#library' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Accolades', href: '#achievements' },
  { label: 'Credentials', href: '#certificates' },
  { label: 'Skills', href: '#skills' }
];

export const Header: React.FC<HeaderProps> = ({ onMobileMenuToggle, isMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#090b0e]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' 
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
          <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center font-display font-bold text-sm tracking-wider group-hover:border-[#c8f135] group-hover:text-[#c8f135] transition-all">
            YM
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-sm text-[#f8fafc] group-hover:text-[#c8f135] transition-colors">
              Yogesh R. Mehta
            </span>
            <span className="block font-mono text-[10px] text-white/40">
              Systems & Research
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 p-1.5 rounded-2xl backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-xl font-mono text-xs text-[#94a3b8] hover:text-[#f8fafc] hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Strip */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
          >
            <GithubIcon size={17} />
          </a>

          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#38bdf8] border border-white/10 transition-colors"
          >
            <LinkedinIcon size={17} />
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-[#c8f135] text-[#090b0e] font-mono text-xs font-bold hover:bg-[#d6f658] transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={onMobileMenuToggle}
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="lg:hidden p-2 rounded-xl bg-white/5 text-white/80 hover:text-white border border-white/10 transition-colors"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>
    </header>
  );
};

