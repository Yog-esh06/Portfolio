import React from 'react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { ArrowUp, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-20 pb-12 bg-[#06080a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 glass-panel border border-white/10 mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#c8f135] font-semibold block mb-3">
              // LET'S CONNECT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f8fafc] mb-4">
              Building Scalable Systems & Rigorous Models
            </h2>
            <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed mb-8">
              Open to technical collaboration, systems engineering discussions, and undergraduate research opportunities. Feel free to connect on LinkedIn or inspect my active code repositories.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c8f135] text-[#090b0e] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#d6f658] transition-all shadow-lg hover:shadow-[#c8f135]/20 hover:-translate-y-0.5"
              >
                <LinkedinIcon size={16} />
                <span>Connect on LinkedIn</span>
                <ExternalLink size={14} />
              </a>

              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-[#f8fafc] font-mono text-xs font-semibold hover:bg-white/10 transition-all border border-white/10 hover:-translate-y-0.5"
              >
                <GithubIcon size={16} />
                <span>Explore GitHub Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Decorative ambient radial glow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#c8f135]/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Lower Footer Navigation & Meta */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#c8f135] text-[#090b0e] flex items-center justify-center font-display font-bold text-xs">
                YM
              </div>
              <span className="font-display font-bold text-base text-white">Yogesh R. Mehta</span>
            </div>
            <p className="text-xs text-[#94a3b8] max-w-sm leading-relaxed">
              B.Tech in Computer Science and Engineering, SRM Institute of Science and Technology (2028). Engineering practical software systems across AI/ML, operations research, and cloud reliability.
            </p>
          </div>

          {/* Quick Sections */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-3">
              Sections
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#94a3b8]">
              <li><a href="#work" className="hover:text-[#c8f135] transition-colors">01. Flagship Systems</a></li>
              <li><a href="#library" className="hover:text-[#c8f135] transition-colors">02. Repository Archive</a></li>
              <li><a href="#research" className="hover:text-[#c8f135] transition-colors">03. Systems Research</a></li>
              <li><a href="#experience" className="hover:text-[#c8f135] transition-colors">04. Deloitte Experience</a></li>
              <li><a href="#achievements" className="hover:text-[#c8f135] transition-colors">05. Accolades</a></li>
              <li><a href="#certificates" className="hover:text-[#c8f135] transition-colors">06. 72 Credentials</a></li>
            </ul>
          </div>

          {/* Verified Deployments */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-3">
              Live Deployments
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#94a3b8]">
              <li>
                <a href="https://strata-ai.me" target="_blank" rel="noopener noreferrer" className="hover:text-[#c8f135] flex items-center gap-1 transition-colors">
                  <span>STRATA Console</span>
                  <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a href="https://realcost-sigma.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#c8f135] flex items-center gap-1 transition-colors">
                  <span>RealCost App</span>
                  <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Yog-esh06" target="_blank" rel="noopener noreferrer" className="hover:text-[#c8f135] flex items-center gap-1 transition-colors">
                  <span>GitHub (@Yog-esh06)</span>
                  <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[11px] text-white/40 text-center sm:text-left">
            © {currentYear} Yogesh R. Mehta. Statically compiled for GitHub Pages.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-white/60 hover:text-[#c8f135] transition-colors p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};

