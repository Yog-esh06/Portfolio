import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'orange' | 'cyan' | 'purple' | 'neutral';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  icon
}) => {
  const styles = {
    lime: 'bg-[#c8f135]/10 text-[#c8f135] border-[#c8f135]/25',
    orange: 'bg-[#ff5f1f]/10 text-[#ff5f1f] border-[#ff5f1f]/25',
    cyan: 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/25',
    purple: 'bg-[#a855f7]/10 text-[#a855f7] border-[#a855f7]/25',
    neutral: 'bg-white/5 text-[#94a3b8] border-white/10'
  };

  const sizeClasses = size === 'sm' 
    ? 'text-[11px] px-2.5 py-1' 
    : 'text-xs px-3 py-1.5 font-medium';

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border font-mono tracking-wide ${styles[variant]} ${sizeClasses}`}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

