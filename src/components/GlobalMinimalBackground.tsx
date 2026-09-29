import React, { useEffect, useRef } from 'react';

interface ZenParticle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speedY: number;
  speedX: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export const GlobalMinimalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const isPointerActive = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Minimal, sparse zen particles (faint dust motes in moonlight)
    const count = Math.min(18, Math.max(10, Math.floor(width / 90)));
    const particles: ZenParticle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 1 + Math.random() * 1.5,
      alpha: 0.08 + Math.random() * 0.18,
      speedY: 0.12 + Math.random() * 0.22,
      speedX: (Math.random() - 0.5) * 0.15,
      pulseSpeed: 0.01 + Math.random() * 0.015,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let rafId: number;
    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth lerp mouse coordinates for the subtle ambient glow
      if (isPointerActive.current && glowRef.current) {
        const lerp = 0.08;
        currentPos.current.x += (mousePos.current.x - currentPos.current.x) * lerp;
        currentPos.current.y += (mousePos.current.y - currentPos.current.y) * lerp;

        glowRef.current.style.transform = `translate3d(${currentPos.current.x.toFixed(1)}px, ${currentPos.current.y.toFixed(1)}px, 0)`;
      }

      // Draw faint, minimal particles
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += Math.sin(time + p.pulseOffset) * 0.2 + p.speedX;

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const pulse = 0.75 + Math.sin(time * 1.8 + p.pulseOffset) * 0.25;
        const currentAlpha = p.alpha * pulse;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(236, 230, 218, ${currentAlpha.toFixed(3)})`; // warm washi ivory
        ctx.shadowColor = 'rgba(230, 86, 79, 0.4)';
        ctx.shadowBlur = p.size * 2;
        ctx.fill();
      });

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    const handlePointerMove = (e: MouseEvent) => {
      isPointerActive.current = true;
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (currentPos.current.x === -1000) {
        currentPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerLeave = () => {
      isPointerActive.current = false;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="global-minimal-bg"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* 1. Subtle, gentle cursor-following warm ambient glow across all pages */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          top: '-250px',
          left: '-250px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230, 86, 79, 0.045) 0%, rgba(179, 21, 27, 0.015) 45%, transparent 70%)',
          filter: 'blur(50px)',
          willChange: 'transform',
          pointerEvents: 'none',
          opacity: 0.85,
        }}
      />

      {/* 2. Quiet, minimal corner vignette for editorial depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(10, 9, 8, 0.35) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* 3. Sparse, minimal floating zen particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
