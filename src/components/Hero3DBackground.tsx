import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number; // 0 (far) to 1 (near)
  size: number;
  baseAlpha: number;
  speedY: number;
  speedX: number;
  wobbleSpeed: number;
  wobbleOffset: number;
  color: string;
}

interface Hero3DBackgroundProps {
  children?: React.ReactNode;
}

export const Hero3DBackground: React.FC<Hero3DBackgroundProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const moonGlowRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Mouse & idle motion smoothing
  const mousePos = useRef({ x: 0, y: 0 }); // target (-1 to 1)
  const currentPos = useRef({ x: 0, y: 0 }); // lerped current (-1 to 1)
  const isInteracting = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Warm embers and faint washi sparks — understated and minimal
    const colors = [
      'rgba(255, 140, 100, ',  // muted vermilion ember
      'rgba(255, 210, 150, ',  // golden lantern glow
      'rgba(245, 235, 220, ',  // warm washi spark
    ];

    // Minimal count of particles (delicate, not overwhelming)
    const particleCount = Math.min(18, Math.max(10, Math.floor(width / 75)));
    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const z = Math.random(); // 0 = distant background, 1 = foreground
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        size: 0.9 + z * 1.6,
        baseAlpha: 0.12 + z * 0.28,
        speedY: 0.16 + (1 - z) * 0.24,
        speedX: (Math.random() - 0.5) * 0.14,
        wobbleSpeed: 0.008 + Math.random() * 0.012,
        wobbleOffset: Math.random() * Math.PI * 2,
        color: colorBase,
      };
    });

    let time = 0;

    // Smooth, Minimal 60FPS Parallax Loop
    const render = () => {
      time += 0.015;

      let targetX = mousePos.current.x;
      let targetY = mousePos.current.y;

      if (!isInteracting.current) {
        targetX += Math.sin(time * 0.4) * 0.06;
        targetY += Math.cos(time * 0.3) * 0.04;
      }

      // Smooth lerp for liquid, gentle feel
      const lerpFactor = 0.055;
      currentPos.current.x += (targetX - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetY - currentPos.current.y) * lerpFactor;

      const { x: curX, y: curY } = currentPos.current;

      // 1. Subtle, Minimal 3D Parallax & Perspective tilt (low angle: max 1.5 deg)
      if (bgImgRef.current) {
        const tiltX = -curY * 1.4; // subtle pitch
        const tiltY = curX * 1.4;  // subtle yaw
        const transX = -curX * 8;  // subtle horizontal shift
        const transY = -curY * 6;  // subtle vertical shift
        bgImgRef.current.style.transform = `scale(1.03) perspective(1400px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translate3d(${transX.toFixed(1)}px, ${transY.toFixed(1)}px, 0)`;
      }

      // 2. Gentle Parallax on Volumetric Moon Halo
      if (moonGlowRef.current) {
        const moonParallaxX = curX * 14;
        const moonParallaxY = curY * 10;
        const moonPulse = 1 + Math.sin(time * 1.2) * 0.025;
        moonGlowRef.current.style.transform = `translate(calc(-50% + ${moonParallaxX.toFixed(1)}px), calc(-50% + ${moonParallaxY.toFixed(1)}px)) scale(${moonPulse.toFixed(3)})`;
      }

      // 3. Minimal Ambient Cursor Sheen
      if (spotlightRef.current) {
        const spotX = ((curX + 1) * 50).toFixed(1);
        const spotY = ((curY + 1) * 50).toFixed(1);
        spotlightRef.current.style.background = `radial-gradient(circle 600px at ${spotX}% ${spotY}%, rgba(255, 140, 90, 0.045) 0%, transparent 65%)`;
      }

      // 4. Render Minimal Canvas Particles
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.wobbleOffset += p.wobbleSpeed;
        p.x += Math.sin(p.wobbleOffset) * 0.22 + p.speedX;

        if (p.y < -15) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 10;
        if (p.x > width + 15) p.x = -10;

        // Subtle 3D depth shift
        const parallaxOffsetX = -curX * (p.z * 16);
        const parallaxOffsetY = -curY * (p.z * 10);

        const renderX = p.x + parallaxOffsetX;
        const renderY = p.y + parallaxOffsetY;

        const pulse = 0.8 + Math.sin(time * 2.0 + p.wobbleOffset) * 0.2;
        const currentAlpha = p.baseAlpha * pulse;

        ctx.beginPath();
        ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha.toFixed(3)})`;
        ctx.shadowColor = p.color + '0.5)';
        ctx.shadowBlur = p.size * (2 + p.z * 2.5);
        ctx.fill();
      });

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    const handleMouseMove = (e: MouseEvent) => {
      isInteracting.current = true;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mousePos.current = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      };
    };

    const handleMouseLeave = () => {
      isInteracting.current = false;
      mousePos.current = { x: 0, y: 0 };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      isInteracting.current = true;
      const touch = e.touches[0];
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((touch.clientY - rect.top) / rect.height) * 2 - 1;
      mousePos.current = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      };
    };

    const handleTouchEnd = () => {
      isInteracting.current = false;
      mousePos.current = { x: 0, y: 0 };
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('touchmove', handleTouchMove, { passive: true });
      container.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-3d-scene"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - var(--nav-h))',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        perspective: '1400px',
      }}
    >
      {/* 1. Deep 3D Background Image Layer with Subtle Perspective Tilt */}
      <div
        ref={bgImgRef}
        aria-hidden="true"
        className="hero-3d-bg-layer"
        style={{
          position: 'absolute',
          inset: -20,
          zIndex: 0,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      >
        <img
          src="/hero-bg.jpg"
          alt="Japanese moonscape with Torii gate and mountain silhouettes"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            display: 'block',
          }}
        />
      </div>

      {/* 2. Soft, Understated Volumetric Moon Halo */}
      <div
        ref={moonGlowRef}
        aria-hidden="true"
        className="hero-3d-moon-glow"
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          width: '500px',
          height: '500px',
          maxWidth: '80vw',
          maxHeight: '80vw',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255, 200, 110, 0.16) 0%, rgba(230, 86, 79, 0.08) 42%, transparent 70%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          zIndex: 1,
          willChange: 'transform',
        }}
      />

      {/* 3. Subtle Ambient Cursor Light */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'background 140ms ease-out',
        }}
      />

      {/* 4. Soft Horizon Mist Layer */}
      <div
        aria-hidden="true"
        className="hero-mist-layer"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: 0,
          right: 0,
          height: '140px',
          background: 'linear-gradient(to top, rgba(179, 21, 27, 0.07) 0%, rgba(14, 12, 11, 0.15) 50%, transparent 100%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* 5. Editorial Japanese Gradient Veils for Pristine Text Readability */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'linear-gradient(to right, rgba(14, 12, 11, 0.94) 0%, rgba(14, 12, 11, 0.82) 42%, rgba(14, 12, 11, 0.38) 72%, rgba(14, 12, 11, 0.1) 88%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'linear-gradient(to bottom, rgba(14, 12, 11, 0.45) 0%, transparent 25%, transparent 68%, rgba(14, 12, 11, 0.98) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* 6. Minimal Floating Embers Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
        }}
      />

      {/* 7. Foreground Content Plane */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        {children}
      </div>
    </div>
  );
};
