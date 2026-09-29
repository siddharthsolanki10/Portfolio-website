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

    // Warm embers, vermilion sparks, and golden Japanese firefly hues
    const colors = [
      'rgba(255, 120, 80, ',   // vermilion ember
      'rgba(255, 195, 120, ',  // golden lantern glow
      'rgba(230, 86, 79, ',    // seal bright red
      'rgba(255, 235, 195, ',  // warm washi spark
      'rgba(240, 160, 90, ',   // amber flicker
    ];

    // Create 3D particles with varying depth layers
    const particleCount = Math.min(42, Math.max(20, Math.floor(width / 30)));
    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const z = Math.random(); // 0 = distant background, 1 = immediate foreground
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        size: 1 + z * 3.4,
        baseAlpha: 0.2 + z * 0.65,
        speedY: 0.25 + (1 - z) * 0.45,
        speedX: (Math.random() - 0.5) * 0.28,
        wobbleSpeed: 0.012 + Math.random() * 0.018,
        wobbleOffset: Math.random() * Math.PI * 2,
        color: colorBase,
      };
    });

    let time = 0;

    // 60FPS Hardware-accelerated 3D Depth Loop
    const render = () => {
      time += 0.02;

      // When user is not actively moving mouse, apply subtle organic 3D breathing drift
      let targetX = mousePos.current.x;
      let targetY = mousePos.current.y;

      if (!isInteracting.current) {
        targetX += Math.sin(time * 0.5) * 0.12;
        targetY += Math.cos(time * 0.4) * 0.08;
      }

      // Smooth lerp for liquid, cinematic feel
      const lerpFactor = 0.065;
      currentPos.current.x += (targetX - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetY - currentPos.current.y) * lerpFactor;

      const { x: curX, y: curY } = currentPos.current;

      // 1. 3D Parallax & Perspective tilt on Background Image
      if (bgImgRef.current) {
        const tiltX = -curY * 5.5; // pitch
        const tiltY = curX * 5.5;  // yaw
        const transX = -curX * 26; // horizontal parallax
        const transY = -curY * 18; // vertical parallax
        bgImgRef.current.style.transform = `scale(1.09) perspective(1200px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translate3d(${transX.toFixed(1)}px, ${transY.toFixed(1)}px, 0)`;
      }

      // 2. Parallax on Volumetric Moon Halo (moon is centered around 50% X, 40% Y)
      if (moonGlowRef.current) {
        const moonParallaxX = curX * 35;
        const moonParallaxY = curY * 24;
        const moonPulse = 1 + Math.sin(time * 1.5) * 0.04;
        moonGlowRef.current.style.transform = `translate(calc(-50% + ${moonParallaxX.toFixed(1)}px), calc(-50% + ${moonParallaxY.toFixed(1)}px)) scale(${moonPulse.toFixed(3)})`;
      }

      // 3. Dynamic Cursor Spotlight
      if (spotlightRef.current) {
        const spotX = ((curX + 1) * 50).toFixed(1);
        const spotY = ((curY + 1) * 50).toFixed(1);
        spotlightRef.current.style.background = `radial-gradient(circle 650px at ${spotX}% ${spotY}%, rgba(255, 140, 90, 0.09) 0%, rgba(179, 21, 27, 0.03) 45%, transparent 70%)`;
      }

      // 4. Render 3D Canvas Particles with Z-layer Parallax
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle upward with natural organic sway
        p.y -= p.speedY;
        p.wobbleOffset += p.wobbleSpeed;
        p.x += Math.sin(p.wobbleOffset) * 0.38 + p.speedX;

        // Wrap around boundaries
        if (p.y < -20) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 10;
        if (p.x > width + 20) p.x = -10;

        // 3D Parallax offset based on particle depth: foreground particles move significantly faster
        const parallaxOffsetX = -curX * (p.z * 38);
        const parallaxOffsetY = -curY * (p.z * 25);

        const renderX = p.x + parallaxOffsetX;
        const renderY = p.y + parallaxOffsetY;

        // Pulsing luminescence
        const pulse = 0.72 + Math.sin(time * 2.4 + p.wobbleOffset) * 0.28;
        const currentAlpha = p.baseAlpha * pulse;

        // Draw glowing ember
        ctx.beginPath();
        ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha.toFixed(3)})`;
        ctx.shadowColor = p.color + '0.9)';
        ctx.shadowBlur = p.size * (4 + p.z * 5.5);
        ctx.fill();
      });

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    // Mouse movement listener
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

    // Touch support for mobile 3D tilt
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
        perspective: '1200px',
      }}
    >
      {/* 1. Deep 3D Background Image Layer with Perspective Tilt */}
      <div
        ref={bgImgRef}
        aria-hidden="true"
        className="hero-3d-bg-layer"
        style={{
          position: 'absolute',
          inset: -32, // Bleed buffer to allow 3D parallax without exposing container edges
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

      {/* 2. Volumetric Moon Halo Layer centered right behind the golden moon */}
      <div
        ref={moonGlowRef}
        aria-hidden="true"
        className="hero-3d-moon-glow"
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          width: '540px',
          height: '540px',
          maxWidth: '85vw',
          maxHeight: '85vw',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255, 200, 110, 0.28) 0%, rgba(230, 86, 79, 0.16) 42%, rgba(179, 21, 27, 0.05) 65%, transparent 80%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          zIndex: 1,
          willChange: 'transform',
        }}
      />

      {/* 3. Interactive Volumetric Cursor Torch / Spotlight */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="hero-3d-spotlight"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'background 120ms ease-out',
        }}
      />

      {/* 4. Atmospheric Horizon Mist Layer at the Lake Base */}
      <div
        aria-hidden="true"
        className="hero-mist-layer"
        style={{
          position: 'absolute',
          bottom: '12%',
          left: 0,
          right: 0,
          height: '180px',
          background: 'linear-gradient(to top, rgba(179, 21, 27, 0.12) 0%, rgba(14, 12, 11, 0.2) 50%, transparent 100%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* 5. Editorial Japanese Gradient Veils — preserves 100% text readability while keeping artwork vibrant */}
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

      {/* 6. Floating 3D Embers & Sparks Canvas */}
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

      {/* 7. Foreground Content Plane (Sits cleanly on top of 3D depth) */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        {children}
      </div>
    </div>
  );
};
