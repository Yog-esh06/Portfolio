import React from 'react';
import { profileData } from '../../data/profile';
import { HeroVisualizer } from './HeroVisualizer';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { ArrowDown, FileText, ChevronRight, Download, Trophy, ShieldCheck, Activity } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#d4ff33] animate-pulse" />
              <span className="font-mono text-xs text-[#cbd5e1] tracking-wide">
                SRM IST B.Tech CSE (2028) • Open for Summer 2027 Internships
              </span>
            </div>

            {/* Name Heading */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f5f5f0] leading-[1.06] mb-3">
              Yogesh <span className="text-[#d4ff33]">R. Mehta</span>
            </h1>

            {/* Role Headline */}
            <p className="font-mono text-base sm:text-lg text-[#38bdf8] font-medium tracking-wide mb-6">
              Systems Engineer & AI/ML Researcher
            </p>

            {/* Recruiter-Focused Narrative */}
            <div className="space-y-3 text-base text-[#94a3b8] leading-relaxed max-w-2xl mb-8">
              <p>
                Computer Science undergraduate building practical software systems across agentic AI swarms, operations research solvers for dynamic routing, causal inference for defended decision-making, and cloud virtual machine reliability.
              </p>
              <p>
                Experienced in Controls Assurance at <strong>Deloitte</strong> (Audit & Assurance, Chennai), 1st place winner at the <strong>Rehab Tech Challenge</strong> with Neuro-Move, Top 8 finalist at <strong>The Industry Games</strong> with STRATA, and presenter at <strong>SRM Research Day 2026</strong>.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#d4ff33] text-[#08090b] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#bce628] transition-all shadow-lg hover:shadow-[#d4ff33]/20 hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowDown size={14} />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.06] text-[#f5f5f0] font-mono text-xs font-semibold hover:bg-white/10 transition-all border border-white/10 hover:-translate-y-0.5"
              >
                <FileText size={15} className="text-[#d4ff33]" />
                <span>View Resume</span>
              </button>

              <a
                href="./documents/Yogesh-R-Mehta-Resume.pdf"
                download="Yogesh-R-Mehta-Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-white/[0.03] text-white/70 hover:text-white font-mono text-xs font-semibold hover:bg-white/10 transition-all border border-white/10 hover:-translate-y-0.5"
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
                className="p-3.5 rounded-xl bg-white/[0.04] text-[#f5f5f0] hover:bg-white/10 transition-all border border-white/10 hover:-translate-y-0.5"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 rounded-xl bg-white/[0.04] text-[#38bdf8] hover:bg-[#38bdf8]/10 transition-all border border-[#38bdf8]/20 hover:-translate-y-0.5"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
              {profileData.stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-xl sm:text-2xl font-bold text-[#f5f5f0]">
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

        {/* Proof Points Strip: Directly highlights Hackathons & Experience */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <div className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff33]" />
            <span>Key Career Milestones & Evidence</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Rehab Tech Win */}
            <a 
              href="#achievements"
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#d4ff33]/40 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#d4ff33] font-semibold flex items-center gap-1.5">
                  <Trophy size={13} /> 1ST PLACE WINNER
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f5f5f0]">Rehab Tech Challenge</div>
              <div className="text-xs text-[#94a3b8] mt-1">Neuro-Move computer vision system</div>
            </a>

            {/* 2. Industry Games Top 8 */}
            <a 
              href="#achievements"
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff4d22]/40 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#ff4d22] font-semibold flex items-center gap-1.5">
                  <Trophy size={13} /> TOP 8 FINALIST
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f5f5f0]">The Industry Games</div>
              <div className="text-xs text-[#94a3b8] mt-1">Top 8 out of 300+ with STRATA</div>
            </a>

            {/* 3. Deloitte Controls Assurance */}
            <a 
              href="#experience"
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#d4ff33]/40 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#d4ff33] font-semibold flex items-center gap-1.5">
                  <ShieldCheck size={13} /> CONTROLS ASSURANCE
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f5f5f0]">Deloitte Internship</div>
              <div className="text-xs text-[#94a3b8] mt-1">Audit & Assurance, 150+ learning hrs</div>
            </a>

            {/* 4. SRM Research Day 2026 */}
            <a 
              href="#research"
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#38bdf8]/40 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-[#38bdf8] font-semibold flex items-center gap-1.5">
                  <Activity size={13} /> RESEARCH DAY 2026
                </span>
                <ChevronRight size={13} className="text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="font-semibold text-sm text-[#f5f5f0]">Cloud VM Fault Detection</div>
              <div className="text-xs text-[#94a3b8] mt-1">Presented hypervisor telemetry framework</div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};
