import React, { useState } from 'react';
import { linkedInPosts } from '../../data/posts';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { LinkedinIcon, GithubIcon } from '../common/Icons';
import { Calendar, ExternalLink, ArrowUpRight, Info } from 'lucide-react';

export const LinkedInUpdates: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="updates" className="py-24 lg:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="// 08. WRITING & UPDATES"
          title="From LinkedIn"
          subtitle="Professional dispatches, hackathon post-mortems, research presentations, and learning milestones."
          accent="cyan"
        />

        {/* Source Limitation Transparency Callout */}
        <div className="mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-[#94a3b8]">
          <Info size={16} className="text-[#38bdf8] mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed">
            Displaying public activity milestones captured directly from LinkedIn. To maintain strict factual accuracy, older posts behind LinkedIn's member-only authentication wall are omitted rather than reconstructed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {linkedInPosts.map((post) => {
            const isExpanded = expandedIds[post.id];
            const isLong = post.content.length > 220;
            const displayText = isLong && !isExpanded ? `${post.content.slice(0, 220)}...` : post.content;

            return (
              <div
                key={post.id}
                className="flex flex-col justify-between rounded-3xl p-6 sm:p-7 glass-panel border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  {/* Header: Category Badge & Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant={post.category === 'Hackathon Win' ? 'orange' : post.category === 'Research Presentation' ? 'cyan' : 'lime'}>
                      {post.category}
                    </Badge>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-white/40">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>

                  {/* Post Title */}
                  <h3 className="font-display text-lg font-bold text-[#f5f5f0] mb-3 leading-snug">
                    {post.title}
                  </h3>

                  {/* Content / Authentic Text */}
                  <div className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-4">
                    <p>{displayText}</p>
                    {isLong && (
                      <button
                        onClick={() => toggleExpand(post.id)}
                        className="text-[#38bdf8] text-xs font-mono font-medium hover:underline mt-2 inline-block"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom: Tags & Action Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-white/5">
                    {post.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/60">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2">
                    {post.projectUrl ? (
                      <a
                        href={post.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#d4ff33] hover:text-white transition-colors"
                      >
                        <GithubIcon size={13} />
                        <span>{post.associatedProject}</span>
                      </a>
                    ) : post.associatedProject ? (
                      <span className="font-mono text-xs text-white/50">
                        {post.associatedProject}
                      </span>
                    ) : <div />}

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#38bdf8] hover:underline font-medium transition-colors"
                    >
                      <LinkedinIcon size={13} />
                      <span>View on LinkedIn</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* LinkedIn Profile Footer Link */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
              <LinkedinIcon size={20} />
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm">
                Yogesh R. Mehta on LinkedIn
              </div>
              <div className="text-xs text-[#94a3b8] font-mono">
                Updates on multi-agent architectures, cloud telemetry, and systems research.
              </div>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/yog-esh06/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-semibold border border-white/10 transition-colors whitespace-nowrap"
          >
            <span>Open Profile</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
};
