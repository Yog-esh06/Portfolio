import React, { useEffect, useRef, useState } from 'react';

export const SpotlightBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    setActive(true);

    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const update = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (containerRef.current) {
        containerRef.current.style.setProperty('--spotlight-x', `${currentX.toFixed(1)}px`);
        containerRef.current.style.setProperty('--spotlight-y', `${currentY.toFixed(1)}px`);
      }

      setCoords({ x: Math.round(currentX), y: Math.round(currentY) });
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        // Default initial coordinates in center
        ['--spotlight-x' as any]: '50vw',
        ['--spotlight-y' as any]: '50vh',
      }}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div 
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(650px circle at var(--spotlight-x) var(--spotlight-y), rgba(212, 255, 51, 0.035), rgba(255, 77, 34, 0.015) 40%, transparent 80%)`,
        }}
      />

      {/* Subtle Architectural Crosshairs Follower */}
      {active && (
        <div 
          className="absolute hidden xl:block transition-opacity duration-300 opacity-40 text-[9px] font-mono text-white/20 select-none"
          style={{
            transform: 'translate3d(var(--spotlight-x), var(--spotlight-y), 0)',
            willChange: 'transform'
          }}
        >
          <div className="absolute -left-3 -top-3 w-6 h-[1px] bg-white/20" />
          <div className="absolute -left-3 -top-3 w-[1px] h-6 bg-white/20" />
          <div className="absolute left-3 top-3 whitespace-nowrap pl-1 pt-1 tracking-tighter">
            X:{coords.x} Y:{coords.y}
          </div>
        </div>
      )}

      {/* Engineering Corner Watermarks */}
      <div className="absolute top-4 right-6 font-mono text-[9px] text-white/10 uppercase tracking-widest hidden md:block select-none">
        PORTFOLIO :: YOGESH R. MEHTA // SYSTEMS & RESEARCH
      </div>
      <div className="absolute bottom-4 left-6 font-mono text-[9px] text-white/10 uppercase tracking-widest hidden md:block select-none">
        LAT: 12.8230° N, LON: 80.0450° E // SRM IST CHENNAI
      </div>
    </div>
  );
};

