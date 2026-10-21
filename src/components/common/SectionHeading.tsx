import React from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  accent?: 'lime' | 'orange' | 'cyan';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  accent = 'lime'
}) => {
  const accentColorClass = 
    accent === 'orange' ? 'text-[#ff5f1f]' : 
    accent === 'cyan' ? 'text-[#38bdf8]' : 
    'text-[#c8f135]';

  const dotBg = 
    accent === 'orange' ? '#ff5f1f' : 
    accent === 'cyan' ? '#38bdf8' : 
    '#c8f135';

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-2">
        <span 
          className="w-2 h-2 rounded-full inline-block animate-pulse-subtle" 
          style={{ backgroundColor: dotBg }} 
        />
        <span className={`font-mono text-xs font-semibold tracking-wider uppercase ${accentColorClass}`}>
          {number}
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-white/10" />
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f8fafc]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

