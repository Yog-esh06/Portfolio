import { useRef, useEffect } from 'react';

interface MagneticOptions {
  strength?: number;
  radius?: number;
}

export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(options: MagneticOptions = {}) {
  const ref = useRef<T | null>(null);
  const { strength = 0.25, radius = 50 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if user prefers reduced motion or is on touch device
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || isTouch) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (dist < radius + Math.max(rect.width, rect.height) / 2) {
        targetX = (e.clientX - centerX) * strength;
        targetY = (e.clientY - centerY) * strength;
      } else {
        targetX = 0;
        targetY = 0;
      }
    };

    const onMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01 || targetX !== 0 || targetY !== 0) {
        el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      } else {
        el.style.transform = 'translate3d(0, 0, 0)';
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    el.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
      if (el) el.style.transform = 'translate3d(0, 0, 0)';
    };
  }, [strength, radius]);

  return ref;
}

