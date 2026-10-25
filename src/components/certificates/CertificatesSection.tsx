import React, { useState, useMemo } from 'react';
import { certificatesData } from '../../data/certificates';
import { CertificateItem } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { CertificateModal } from './CertificateModal';
import { Search, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Deloitte Exclusive',
  'Hackathons & Awards',
  'AI & ML',
  'Data & Analytics',
  'NPTEL',
  'Job Simulations',
  'Systems & Dev'
] as const;

type CategoryFilter = typeof CATEGORIES[number];

export const CertificatesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  const filteredCerts = useMemo(() => {
    return certificatesData.filter((c) => {
      const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCat;

      const matchesSearch = 
        c.title.toLowerCase().includes(query) ||
        c.issuer.toLowerCase().includes(query) ||
        (c.description && c.description.toLowerCase().includes(query));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="certificates" className="py-24 lg:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 06. CERTIFICATIONS & CREDENTIALS"
          title="Technical Credentials & Learning Records"
          subtitle="Curated professional certifications, national NPTEL engineering accreditations, and technical job simulations."
          accent="lime"
        />

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-mono text-xs px-3.5 py-1.5 rounded-xl border transition-all ${
                    active
                      ? 'bg-[#d4ff33] text-[#08090b] border-[#d4ff33] font-bold shadow-md shadow-[#d4ff33]/15'
                      : 'bg-white/[0.03] text-[#94a3b8] border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search credentials by title, issuer, skill..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#d4ff33] focus:ring-1 focus:ring-[#d4ff33] transition-all font-mono"
            />
          </div>

        </div>

        {/* Inventory Summary Line */}
        <div className="flex items-center justify-between font-mono text-xs text-white/40 mb-6">
          <span>Displaying {filteredCerts.length} of {certificatesData.length} indexed credentials</span>
          {searchQuery && (
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-[#d4ff33] hover:underline"
            >
              Reset search
            </button>
          )}
        </div>

        {/* Certificates Grid */}
        {filteredCerts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCerts.map((cert) => {
              const isDeloitte = cert.category === 'Deloitte Exclusive';
              const isNPTEL = cert.category === 'NPTEL';

              return (
                <div
                  key={cert.id}
                  onClick={() => setActiveCert(cert)}
                  className={`group cursor-pointer rounded-2xl p-5 glass-panel border transition-all duration-200 hover:-translate-y-1 ${
                    isDeloitte 
                      ? 'border-[#d4ff33]/30 hover:border-[#d4ff33]' 
                      : isNPTEL
                      ? 'border-[#38bdf8]/30 hover:border-[#38bdf8]'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Category Pill & Year */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant={isDeloitte ? 'lime' : isNPTEL ? 'cyan' : 'neutral'}>
                      {cert.category}
                    </Badge>
                    {cert.year && (
                      <span className="font-mono text-[11px] text-white/40">{cert.year}</span>
                    )}
                  </div>

                  {/* Title & Issuer */}
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#f8fafc] group-hover:text-[#d4ff33] transition-colors mb-1 leading-snug">
                    {cert.title}
                  </h4>
                  <div className="font-mono text-xs text-[#d4ff33] mb-3">
                    {cert.issuer}
                  </div>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-3 mb-4">
                      {cert.description}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 font-mono text-[10px] text-white/40">
                    <span className="text-white/50">{cert.category}</span>
                    <span className="flex items-center gap-1 text-[#d4ff33] group-hover:underline transition-colors">
                      Details <ArrowUpRight size={11} />
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl glass-panel border border-white/10">
            <SlidersHorizontal size={32} className="mx-auto text-white/30 mb-3" />
            <h4 className="font-display text-lg font-bold text-white mb-1">No credentials match your filter</h4>
            <p className="text-sm text-[#94a3b8] mb-4">Try clearing your search term or exploring another category.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Certificate Modal */}
      <CertificateModal 
        cert={activeCert} 
        onClose={() => setActiveCert(null)} 
      />
    </section>
  );
};
