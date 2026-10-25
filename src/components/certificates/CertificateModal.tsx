import React, { useEffect } from 'react';
import { CertificateItem } from '../../types';
import { Badge } from '../common/Badge';
import { X, Building, ExternalLink } from 'lucide-react';

interface CertificateModalProps {
  cert: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cert-title"
    >
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#0e1117] border border-white/10 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <Badge variant="lime">{cert.category}</Badge>
          {cert.year && (
            <span className="font-mono text-xs text-white/40 border border-white/10 px-2 py-0.5 rounded-full">
              {cert.year}
            </span>
          )}
        </div>

        <h3 id="modal-cert-title" className="font-display text-2xl font-bold text-white mb-2 leading-snug">
          {cert.title}
        </h3>

        <div className="flex items-center gap-2 font-mono text-xs text-[#d4ff33] mb-6 font-semibold">
          <Building size={14} />
          <span>Issued by {cert.issuer}</span>
        </div>

        {cert.description && (
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-sm text-[#cbd5e1] leading-relaxed mb-6">
            {cert.description}
          </div>
        )}

        <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-mono text-white/60">
          <div className="flex items-center justify-between">
            <span className="text-white/40">Category:</span>
            <span className="text-white/80">{cert.category}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/40">Issuing Organization:</span>
            <span className="text-white/80">{cert.issuer}</span>
          </div>
          {cert.credentialUrl && (
            <div className="flex items-center justify-between pt-2">
              <span className="text-white/40">Credential Link:</span>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38bdf8] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>View Online Credential</span>
                <ExternalLink size={12} />
              </a>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-all"
          >
            Close (ESC)
          </button>
        </div>
      </div>
    </div>
  );
};
