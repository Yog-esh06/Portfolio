import React from 'react';
import { profileData } from '../../data/profile';
import { HeroVisualizer } from './HeroVisualizer';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { ArrowDown, Award, ShieldCheck, FileText, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Editorial Focus */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c8f135] animate-pulse" />
              <span className="font-mono text-xs text-[#cbd5e1] tracking-wide">
                {profileData.statusBadge}
              </span>
            </div>

            {/* Name Heading */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f8fafc] leading-[1.08] mb-4">
              Yogesh <span className="text-[#c8f135]">R. Mehta</span>
            </h1>

            {/* Engineering Headline */}
            <p className="font-mono text-base sm:text-lg text-[#38bdf8] font-medium tracking-wide mb-6">
              {profileData.title}
            </p>

            {/* Editorial Narrative */}
            <div className="space-y-3 text-base text-[#94a3b8] leading-relaxed max-w-2xl mb-8">
              <p>
                {profileData.bio[0]}
              </p>
              <p>
                {profileData.bio[1]}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c8f135] text-[#090b0e] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#d6f658] transition-all shadow-lg hover:shadow-[#c8f135]/20 hover:-translate-y-0.5"
              >
                <span>Explore Work</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] text-[#f8fafc] font-mono text-xs font-semibold hover:bg-white/10 transition-all border border-white/10 hover:-translate-y-0.5"
              >
                <GithubIcon size={16} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] text-[#38bdf8] font-mono text-xs font-semibold hover:bg-[#38bdf8]/10 transition-all border border-[#38bdf8]/20 hover:-translate-y-0.5"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
              {profileData.stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-xl sm:text-2xl font-bold text-[#f8fafc]">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-[#94a3b8] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Systems Visualizer */}
          <div className="lg:col-span-5">
            <HeroVisualizer />
          </div>

        </div>

        {/* Proof Strip with Verified Highlights */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <div className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f1f]" />
            <span>Verified Track Record & Key Accolades</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Industry Games */}
            <a 
              href="#achievements"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#ff5f1f]/40 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#ff5f1f] font-semibold flex items-center gap-1.5">
                  <Award size={13} /> TOP 8 FINALIST
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f8fafc]">The Industry Games</div>
              <div className="text-xs text-[#94a3b8] mt-1">Out of 300+ competitors with STRATA</div>
            </a>

            {/* 2. Deloitte Experience */}
            <a 
              href="#experience"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#c8f135]/40 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#c8f135] font-semibold flex items-center gap-1.5">
                  <ShieldCheck size={13} /> CONTROLS ASSURANCE
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f8fafc]">Deloitte Internship</div>
              <div className="text-xs text-[#94a3b8] mt-1">Audit & Assurance, 6 skill badges</div>
            </a>

            {/* 3. SRM Research Day */}
            <a 
              href="#research"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#38bdf8]/40 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#38bdf8] font-semibold flex items-center gap-1.5">
                  <FileText size={13} /> RESEARCH DAY 2026
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f8fafc]">VM Fault Detection</div>
              <div className="text-xs text-[#94a3b8] mt-1">System-level cloud anomaly telemetry</div>
            </a>

            {/* 4. Rehab Tech Challenge */}
            <a 
              href="#achievements"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a855f7]/40 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#a855f7] font-semibold flex items-center gap-1.5">
                  <Award size={13} /> 1ST PLACE WINNER
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f8fafc]">Rehab Tech Challenge</div>
              <div className="text-xs text-[#94a3b8] mt-1">Computer vision pose tracking system</div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

