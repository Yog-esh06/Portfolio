import React, { useEffect, useRef } from 'react';

export const HeroVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Node particle system representing distributed systems / swarms
    const nodeCount = 38;
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      type: 'lime' | 'orange' | 'cyan' | 'dim';
    }

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const typeRand = Math.random();
      const type = typeRand > 0.85 ? 'orange' : typeRand > 0.65 ? 'cyan' : typeRand > 0.35 ? 'lime' : 'dim';
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: type === 'dim' ? 1.5 : Math.random() * 2 + 2,
        type
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const checkReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Draw subtle background grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connecting edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.22;
            ctx.strokeStyle = `rgba(200, 241, 53, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!checkReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Subtle attraction toward mouse center
          const dmx = mouseX - node.x;
          const dmy = mouseY - node.y;
          const mdist = Math.sqrt(dmx * dmx + dmy * dmy);
          if (mdist < 140 && mdist > 10) {
            node.x += (dmx / mdist) * 0.2;
            node.y += (dmy / mdist) * 0.2;
          }

          // Wall bounce
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        if (node.type === 'lime') {
          ctx.fillStyle = '#c8f135';
          ctx.shadowColor = '#c8f135';
          ctx.shadowBlur = 8;
        } else if (node.type === 'orange') {
          ctx.fillStyle = '#ff5f1f';
          ctx.shadowColor = '#ff5f1f';
          ctx.shadowBlur = 8;
        } else if (node.type === 'cyan') {
          ctx.fillStyle = '#38bdf8';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }

      // Center telemetry ring motif
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.strokeStyle = 'rgba(200, 241, 53, 0.12)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.arc(0, 0, 90, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255, 95, 31, 0.1)';
      ctx.beginPath();
      ctx.arc(0, 0, 140, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* HUD Telemetry Overlay Overlay */}
      <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[11px] text-white/50 bg-[#090b0e]/80 px-3 py-1.5 rounded-md border border-white/10 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c8f135] animate-ping" />
        <span>SYS.TELEMETRY :: ACTIVE RUNTIME</span>
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/40 bg-[#090b0e]/80 px-2.5 py-1 rounded border border-white/10 pointer-events-none">
        SRM IST // RESEARCH LAB
      </div>
    </div>
  );
};

