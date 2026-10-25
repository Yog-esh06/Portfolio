import React, { useEffect } from 'react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { X, FileText } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { label: '01. Competition Accolades', href: '#achievements' },
  { label: '02. Flagship Projects', href: '#work' },
  { label: '03. Project Library', href: '#library' },
  { label: '04. Systems Research', href: '#research' },
  { label: '05. Deloitte Experience', href: '#experience' },
  { label: '06. 72 Credentials', href: '#certificates' },
  { label: '07. LinkedIn Updates', href: '#updates' },
  { label: '08. Technical Skills', href: '#skills' },
  { label: '09. Contact', href: '#contact' }
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenResume }) => {
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

  return (
    <div 
      className="fixed inset-0 z-50 lg:hidden bg-black/90 backdrop-blur-xl flex flex-col justify-between p-6 transition-all duration-300"
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
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="font-mono text-sm text-[#cbd5e1] hover:text-[#d4ff33] py-2 px-3 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between"
          >
            <span>{item.label}</span>
          </a>
        ))}

        <button
          onClick={() => { onClose(); onOpenResume(); }}
          className="mt-3 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#d4ff33] text-[#08090b] font-mono text-xs font-bold"
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
            className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 font-mono text-xs text-white"
          >
            <GithubIcon size={15} /> GitHub
          </a>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 font-mono text-xs text-[#38bdf8]"
          >
            <LinkedinIcon size={15} /> LinkedIn
          </a>
        </div>
        <div className="text-center font-mono text-[11px] text-white/40">
          SRM Institute of Science and Technology • Class of 2028
        </div>
      </div>
    </div>
  );
};
