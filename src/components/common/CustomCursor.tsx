import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'view' | 'link' | 'pointer'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop/mouse) and when reduced motion is not preferred
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Inspect target element for custom data-cursor attributes or interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const closestCursor = target.closest('[data-cursor]') as HTMLElement | null;
        if (closestCursor) {
          const type = closestCursor.getAttribute('data-cursor') || 'pointer';
          const text = closestCursor.getAttribute('data-cursor-text') || '';
          setCursorType(type as any);
          setCursorText(text);
          return;
        }

        const isClickable = target.closest('button, a, input, select, textarea, [role="button"]');
        if (isClickable) {
          setCursorType('pointer');
          setCursorText('');
          return;
        }

        setCursorType('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const render = () => {
      // Spring interpolation for outer ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden="true"
    >
      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#d4ff33] pointer-events-none z-50 mix-blend-difference transition-transform duration-75"
        style={{ willChange: 'transform' }}
      />

      {/* Trailing Ring / Reticle */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center transition-all duration-200 ${
          cursorType === 'view'
            ? '-ml-7 -mt-7 w-14 h-14 rounded-full bg-[#d4ff33] text-[#08090b] shadow-lg shadow-[#d4ff33]/30 scale-100'
            : cursorType === 'link'
            ? '-ml-5 -mt-5 w-10 h-10 rounded-full border-2 border-[#d4ff33] bg-[#d4ff33]/10 scale-110'
            : cursorType === 'pointer'
            ? '-ml-5 -mt-5 w-10 h-10 rounded-full border border-[#d4ff33]/70 bg-[#d4ff33]/5 scale-105'
            : '-ml-4 -mt-4 w-8 h-8 rounded-full border border-white/20 scale-100'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorType === 'view' && (
          <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest text-[#08090b]">
            {cursorText || 'VIEW'}
          </span>
        )}
      </div>
    </div>
  );
};

