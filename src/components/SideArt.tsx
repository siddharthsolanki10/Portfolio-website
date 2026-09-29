import React, { useRef, useEffect } from 'react';

interface SideArtProps {
  src: string;
  alt: string;
  badge?: string;
  kanji?: string;
  topOffset?: string;
}

export const SideArt: React.FC<SideArtProps> = ({
  src,
  alt,
  badge,
  kanji,
  topOffset = 'var(--nav-h)',
}) => {
  const artRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const onMove = (e: MouseEvent) => {
      if (!artRef.current) return;
      const { innerWidth, innerHeight } = window;
      const rx = (e.clientX / innerWidth - 0.5) * -16;
      const ry = (e.clientY / innerHeight - 0.5) * -10;
      artRef.current.style.transform = `translate(${rx}px, ${ry}px) scale(1.03)`;
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="side-art-wrapper"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: topOffset,
        right: 0,
        width: 'clamp(360px, 46vw, 720px)',
        height: 'clamp(420px, 58vw, 820px)',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Artwork image with Ronin ink-filter and dissolve mask */}
      <img
        ref={artRef}
        src={src}
        alt={alt}
        className="side-art-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'right top',
          filter: 'invert(1) sepia(0.35) hue-rotate(310deg) saturate(0.48) brightness(0.62)',
          opacity: 0.82,
          transition: 'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transformOrigin: 'center center',
          WebkitMaskImage: `
            radial-gradient(
              ellipse 75% 75% at 75% 32%,
              black 0%,
              black 32%,
              rgba(0,0,0,0.65) 55%,
              transparent 82%
            )`,
          maskImage: `
            radial-gradient(
              ellipse 75% 75% at 75% 32%,
              black 0%,
              black 32%,
              rgba(0,0,0,0.65) 55%,
              transparent 82%
            )`,
        }}
      />

      {/* Optional Japanese Kanji Badge */}
      {(kanji || badge) && (
        <div
          className="side-art-badge"
          style={{
            position: 'absolute',
            top: 'clamp(20px, 3vw, 40px)',
            right: 'var(--side-margin)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '2px',
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        >
          {kanji && (
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1rem, 1.4vw, 1.35rem)',
                color: 'var(--washi)',
                letterSpacing: '0.12em',
              }}
            >
              {kanji}
            </span>
          )}
          {badge && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--seal-bright)',
              }}
            >
              {badge}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
