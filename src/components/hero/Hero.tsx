import React from 'react';
import { profileData } from '../../data/profile';
import { HeroBackgroundAnimation } from './HeroBackgroundAnimation';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { ArrowDown, FileText, ChevronRight, Download, Trophy, Briefcase, Activity } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onSelectTab?: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onSelectTab }) => {
  const handleTabClick = (tabId: string, e: React.MouseEvent) => {
    if (onSelectTab) {
      e.preventDefault();
      onSelectTab(tabId);
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-white/[0.06] overflow-hidden">
      {/* Full-Bleed Ambient Background Animation */}
      <HeroBackgroundAnimation />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header Content */}
        <div className="max-w-4xl">
          
          {/* Status Pill - Clean degree without summer internships text */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit mb-6 hover:border-[#d4ff33]/40 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#d4ff33] animate-pulse" />
            <span className="font-mono text-xs text-[#cbd5e1] tracking-wide hover:text-white transition-colors">
              SRM IST • B.Tech CSE (2028)
            </span>
          </div>

          {/* Name Heading */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f5f5f0] leading-[1.06] mb-3 cursor-default">
            <span>Yogesh</span>{' '}
            <span className="text-[#d4ff33]">R. Mehta</span>
          </h1>

          {/* Role Headline with colorful hover */}
          <p className="font-mono text-base sm:text-xl text-[#38bdf8] hover:text-[#d4ff33] font-medium tracking-wide mb-6 transition-colors duration-300 cursor-default">
            Systems Engineer & AI/ML Researcher
          </p>

          {/* Updated About Me / Narrative */}
          <div className="space-y-4 text-base sm:text-lg text-[#94a3b8] leading-relaxed mb-8">
            <p>
              Computer Science undergraduate at SRM IST engineering resilient software systems, distributed multi-agent architectures, and grounded machine learning models. I specialize in building operable systems that solve real operational challenges—from{' '}
              <span className="text-[#cbd5e1] hover:text-[#d4ff33] transition-colors cursor-default font-medium">multi-agent investigation swarms</span> and{' '}
              <span className="text-[#cbd5e1] hover:text-[#38bdf8] transition-colors cursor-default font-medium">combinatorial routing solvers</span> to{' '}
              <span className="text-[#cbd5e1] hover:text-[#ff7849] transition-colors cursor-default font-medium">causal decision engines</span> and{' '}
              <span className="text-[#cbd5e1] hover:text-[#a855f7] transition-colors cursor-default font-medium">cloud VM fault telemetry</span>.
            </p>
            <p className="text-sm sm:text-base text-[#cbd5e1]">
              Hands-on experience in Controls Assurance at{' '}
              <strong 
                onClick={(e) => handleTabClick('experience', e)}
                className="text-[#f5f5f0] hover:text-[#d4ff33] transition-colors cursor-pointer underline decoration-[#d4ff33]/40 underline-offset-4"
              >
                Deloitte
              </strong>{' '}
              (Audit & Assurance, Chennai), 1st place winner at the{' '}
              <strong 
                onClick={(e) => handleTabClick('hackathons', e)}
                className="text-[#f5f5f0] hover:text-[#ff7849] transition-colors cursor-pointer underline decoration-[#ff7849]/40 underline-offset-4"
              >
                Rehab Tech Challenge
              </strong>{' '}
              with Neuro-Move, national finalist at{' '}
              <strong 
                onClick={(e) => handleTabClick('hackathons', e)}
                className="text-[#f5f5f0] hover:text-[#fbbf24] transition-colors cursor-pointer underline decoration-[#fbbf24]/40 underline-offset-4"
              >
                The Industry Games
              </strong>{' '}
              with STRATA, and research presenter at{' '}
              <strong 
                onClick={(e) => handleTabClick('research', e)}
                className="text-[#f5f5f0] hover:text-[#38bdf8] transition-colors cursor-pointer underline decoration-[#38bdf8]/40 underline-offset-4"
              >
                SRM Research Day 2026
              </strong>.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="#sections-tabs"
              onClick={(e) => handleTabClick('projects', e)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#d4ff33] text-[#08090b] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#38bdf8] hover:text-[#08090b] transition-all shadow-lg hover:shadow-[#38bdf8]/20 hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowDown size={14} />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.06] text-[#f5f5f0] font-mono text-xs font-semibold hover:bg-white/10 hover:text-[#d4ff33] hover:border-[#d4ff33]/40 transition-all border border-white/10 hover:-translate-y-0.5"
            >
              <FileText size={15} className="text-[#d4ff33]" />
              <span>View Resume</span>
            </button>

            <a
              href="./documents/Yogesh-R-Mehta-Resume.pdf"
              download="Yogesh-R-Mehta-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-white/[0.03] text-white/70 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 font-mono text-xs font-semibold hover:bg-white/10 transition-all border border-white/10 hover:-translate-y-0.5"
              title="Direct PDF Download"
            >
              <Download size={14} />
              <span className="hidden sm:inline">PDF</span>
            </a>

            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3.5 rounded-xl bg-white/[0.04] text-[#f5f5f0] hover:text-[#d4ff33] hover:border-[#d4ff33]/40 hover:bg-white/10 transition-all border border-white/10 hover:-translate-y-0.5"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3.5 rounded-xl bg-white/[0.04] text-[#38bdf8] hover:text-[#60a5fa] hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/10 transition-all border border-[#38bdf8]/20 hover:-translate-y-0.5"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>

          {/* Quick Metrics Strip with hover colors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
            {profileData.stats.map((stat, i) => (
              <div key={i} className="group cursor-default">
                <div className="font-display text-xl sm:text-2xl font-bold text-[#f5f5f0] group-hover:text-[#d4ff33] transition-colors duration-200">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-[#94a3b8] group-hover:text-[#38bdf8] mt-0.5 transition-colors duration-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Milestone Quick Tabs Jumper */}
        <div className="mt-14 pt-8 border-t border-white/[0.08]">
          <div className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff33]" />
            <span>Key Career Milestones & Accolades (Click to Open Tab)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Rehab Tech Win */}
            <a 
              href="#sections-tabs"
              onClick={(e) => handleTabClick('hackathons', e)}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#d4ff33] hover:bg-white/[0.05] transition-all group cursor-pointer hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#d4ff33] group-hover:text-[#bce628] font-semibold flex items-center gap-1.5 transition-colors">
                  <Trophy size={13} /> 1ST PLACE WINNER
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-[#d4ff33] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f5f5f0] group-hover:text-[#d4ff33] transition-colors">Rehab Tech Challenge</div>
              <div className="text-xs text-[#94a3b8] group-hover:text-[#cbd5e1] mt-1 transition-colors">Neuro-Move computer vision system</div>
            </a>

            {/* 2. Industry Games Finalist - ONLY Finalist here */}
            <a 
              href="#sections-tabs"
              onClick={(e) => handleTabClick('hackathons', e)}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff7849] hover:bg-white/[0.05] transition-all group cursor-pointer hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#ff7849] group-hover:text-[#ff9066] font-semibold flex items-center gap-1.5 transition-colors">
                  <Trophy size={13} /> FINALIST
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-[#ff7849] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f5f5f0] group-hover:text-[#ff7849] transition-colors">The Industry Games</div>
              <div className="text-xs text-[#94a3b8] group-hover:text-[#cbd5e1] mt-1 transition-colors">Finalist out of 300+ with STRATA</div>
            </a>

            {/* 3. Deloitte Controls Assurance */}
            <a 
              href="#sections-tabs"
              onClick={(e) => handleTabClick('experience', e)}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#34d399] hover:bg-white/[0.05] transition-all group cursor-pointer hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#34d399] group-hover:text-[#4ade80] font-semibold flex items-center gap-1.5 transition-colors">
                  <Briefcase size={13} /> CONTROLS ASSURANCE
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-[#34d399] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f5f5f0] group-hover:text-[#34d399] transition-colors">Deloitte Internship</div>
              <div className="text-xs text-[#94a3b8] group-hover:text-[#cbd5e1] mt-1 transition-colors">Audit & Assurance, 150+ learning hrs</div>
            </a>

            {/* 4. SRM Research Day 2026 */}
            <a 
              href="#sections-tabs"
              onClick={(e) => handleTabClick('research', e)}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#38bdf8] hover:bg-white/[0.05] transition-all group cursor-pointer hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#38bdf8] group-hover:text-[#60a5fa] font-semibold flex items-center gap-1.5 transition-colors">
                  <Activity size={13} /> RESEARCH DAY 2026
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-[#38bdf8] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f5f5f0] group-hover:text-[#38bdf8] transition-colors">Cloud VM Fault Detection</div>
              <div className="text-xs text-[#94a3b8] group-hover:text-[#cbd5e1] mt-1 transition-colors">Presented hypervisor telemetry framework</div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};
