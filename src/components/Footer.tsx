import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

/* ─────────────────────────────────────────────────────
   Reusable nav-link with translate-on-hover micro-anim
───────────────────────────────────────────────────── */
interface FooterNavLinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  external?: boolean;
}
const FLink: React.FC<FooterNavLinkProps> = ({ to, href, children, external }) => {
  const base: React.CSSProperties = {
    display: 'inline-block',
    fontSize: 'var(--text-sm)',
    color: 'var(--washi-dim)',
    textDecoration: 'none',
    transition: 'color 280ms ease, transform 280ms ease',
    lineHeight: 1.7,
  };
  if (to) return (
    <Link to={to} className="ftr-link" style={base}>{children}</Link>
  );
  return (
    <a
      href={href}
      className="ftr-link"
      style={base}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
};

/* ─────────────────────────────────────────────────────
   Column label
───────────────────────────────────────────────────── */
const ColLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{
    display: 'block',
    fontSize: '0.6875rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--washi-dim)',
    opacity: 0.45,
    marginBottom: 'var(--sp-5)',
    fontFamily: 'var(--font-sans)',
  }}>
    <span style={{ color: 'var(--seal)', opacity: 0.7 }}>[ </span>
    {children}
    <span style={{ color: 'var(--seal)', opacity: 0.7 }}> ]</span>
  </span>
);

/* ─────────────────────────────────────────────────────
   Main Footer
───────────────────────────────────────────────────── */
export const Footer: React.FC = () => {
  const artRef = useRef<HTMLImageElement>(null);

  /* Subtle parallax on mouse move — disabled for reduced-motion */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const onMove = (e: MouseEvent) => {
      if (!artRef.current) return;
      const { innerWidth, innerHeight } = window;
      const rx = (e.clientX / innerWidth - 0.5) * -14;
      const ry = (e.clientY / innerHeight - 0.5) * -8;
      artRef.current.style.transform = `translate(${rx}px, ${ry}px) scale(1.04)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <footer
      id="footer"
      role="contentinfo"
      aria-label="Site footer"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--ink)',
        borderTop: '1px solid var(--hairline)',
      }}
    >

      {/* ══════════════════════════════════════════════════
          SAMURAI ART — atmospheric, top-right, fading into darkness
      ══════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 'clamp(340px, 50vw, 680px)',
          height: 'clamp(380px, 55vw, 760px)',
          pointerEvents: 'none',
          zIndex: 0,
          /* CSS mask — makes the artwork dissolve into the dark bg on all four edges */
          WebkitMaskImage: `
            radial-gradient(
              ellipse 72% 78% at 78% 28%,
              black 0%,
              black 28%,
              rgba(0,0,0,0.65) 52%,
              transparent 80%
            )`,
          maskImage: `
            radial-gradient(
              ellipse 72% 78% at 78% 28%,
              black 0%,
              black 28%,
              rgba(0,0,0,0.65) 52%,
              transparent 80%
            )`,
        }}
      >
        <img
          ref={artRef}
          src="/samurai-footer.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'right top',
            /* Invert white→dark, turn black ink into warm washi tones */
            filter: 'invert(1) sepia(0.35) hue-rotate(310deg) saturate(0.45) brightness(0.52)',
            opacity: 0.75,
            transition: 'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transformOrigin: 'center center',
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════
          CLOSING STATEMENT — the cinematic centrepiece
      ══════════════════════════════════════════════════ */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(72px, 10vw, 140px) clamp(24px, 6vw, 80px) 0',
        maxWidth: '1400px',
      }}>

        {/* Red accent mark — thin horizontal rule + seal color dot */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--sp-3)',
          marginBottom: 'var(--sp-6)',
        }}>
          <div style={{
            width: '32px',
            height: '1px',
            background: 'var(--seal)',
            opacity: 0.8,
          }} />
          <span style={{
            fontSize: '0.6875rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--seal)',
            opacity: 0.7,
            fontFamily: 'var(--font-sans)',
          }}>
            available for work
          </span>
        </div>

        {/* Main headline */}
        <h2
          aria-label="Let's build something worth remembering."
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: 'clamp(2.8rem, 7.5vw, 7rem)',
            lineHeight: 1.06,
            letterSpacing: '-0.025em',
            color: 'var(--washi)',
            marginBottom: 'clamp(32px, 4vw, 56px)',
            maxWidth: '14ch',
          }}
        >
          Let&apos;s build<br />
          <em style={{ fontStyle: 'italic', color: 'rgba(236,230,218,0.65)' }}>
            something
          </em>
          <br />
          worth remembering.
        </h2>

        {/* Contact CTA */}
        <a
          href="mailto:solankisiddharth059@gmail.com"
          className="ftr-cta"
          aria-label="Send an email to start a conversation"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6em',
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
            color: 'rgba(236,230,218,0.72)',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            fontStyle: 'italic',
            position: 'relative',
            paddingBottom: '3px',
          }}
        >
          <span>Start a conversation</span>
          <span className="ftr-arrow" style={{ display: 'inline-block', transition: 'transform 300ms ease', fontSize: '1.1em' }}>→</span>
        </a>

        {/* Subtle Japanese proverb — right-aligned, very muted */}
        <div style={{
          marginTop: 'clamp(48px, 6vw, 88px)',
          paddingBottom: 'clamp(48px, 6vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '4px',
        }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
            color: 'rgba(236,230,218,0.2)',
            letterSpacing: '0.08em',
            fontStyle: 'italic',
          }}>
            七転び八起き
          </span>
          <span style={{
            fontSize: '0.6875rem',
            letterSpacing: '0.1em',
            color: 'rgba(148,140,126,0.3)',
            fontFamily: 'var(--font-sans)',
          }}>
            Fall seven times, stand up eight.
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════════════ */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        height: '1px',
        background: 'var(--hairline)',
        margin: '0 clamp(24px, 6vw, 80px)',
      }} />

      {/* ══════════════════════════════════════════════════
          FOUR-COLUMN GRID
      ══════════════════════════════════════════════════ */}
      <div
        className="ftr-grid"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--sp-7) var(--sp-6)',
          padding: 'clamp(40px, 5vw, 72px) clamp(24px, 6vw, 80px)',
          maxWidth: '1400px',
        }}
      >
        {/* ── IDENTITY ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <ColLabel>identity</ColLabel>
          <div style={{ marginBottom: 'var(--sp-3)' }}>
            <BrandLogo size="footer" variant="primary" asLink={true} to="/" />
          </div>
          <p style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--washi-dim)',
            lineHeight: 1.7,
            maxWidth: '26ch',
            marginBottom: 'var(--sp-2)',
            opacity: 0.75,
          }}>
            Full-stack engineer building scalable architectures and refined interfaces.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', color: 'var(--washi-dim)', opacity: 0.65 }}>
            <span style={{ color: 'var(--seal-bright)', fontSize: '0.75rem' }}>📍</span>
            <span>Ahmedabad, Gujarat, India</span>
          </div>
        </div>

        {/* ── PAGES ── */}
        <div>
          <ColLabel>pages</ColLabel>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { to: '/',         label: 'Home'     },
              { to: '/work',     label: 'Work'     },
              { to: '/about',    label: 'About'    },
              { to: '/blog',     label: 'Blog'     },
              { to: '/contact',  label: 'Contact'  },
            ].map(({ to, label }) => (
              <li key={to}><FLink to={to}>{label}</FLink></li>
            ))}
          </ul>
        </div>

        {/* ── CONNECT ── */}
        <div>
          <ColLabel>connect</ColLabel>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <li><FLink href="mailto:solankisiddharth059@gmail.com">Email (solankisiddharth059@gmail.com)</FLink></li>
            <li><FLink href="https://github.com/siddharthsolanki10" external>GitHub (@siddharthsolanki10)</FLink></li>
            <li><FLink href="https://www.linkedin.com/in/siddharthsolanki10/" external>LinkedIn</FLink></li>
            <li><FLink href="https://siddharthsolanki.vercel.app/" external>Live Portfolio</FLink></li>
          </ul>
        </div>

        {/* ── UTILITY ── */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <ColLabel>utility</ColLabel>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <li>
                <FLink href="https://drive.google.com/file/d/1Vzl2JS4MK70O-PruAtDu6qurf4qgRKiV/view?usp=sharing" external>Resume (PDF)</FLink>
              </li>
              <li>
                <FLink to="/contact">Direct Message</FLink>
              </li>
            </ul>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ftr-top"
            aria-label="Back to top"
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: 'var(--text-xs)',
              color: 'var(--washi-dim)',
              opacity: 0.45,
              transition: 'opacity 280ms ease',
              letterSpacing: '0.04em',
              fontFamily: 'var(--font-sans)',
              marginTop: 'auto',
            }}
          >
            <span className="ftr-top-arrow" style={{ display: 'inline-block', transition: 'transform 280ms ease' }}>↑</span>
            <span>Back to top</span>
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          COPYRIGHT BAR
      ══════════════════════════════════════════════════ */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--hairline)',
        padding: 'var(--sp-4) clamp(24px, 6vw, 80px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 'var(--sp-3)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)', opacity: 0.5 }}>
            © {new Date().getFullYear()} Siddharth Solanki. All rights reserved.
          </span>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)', opacity: 0.3 }}>•</span>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            <span>Ahmedabad, Gujarat • Available for opportunities</span>
          </div>
        </div>

        <span style={{
          fontSize: 'var(--text-xs)',
          color: 'var(--washi-dim)',
          opacity: 0.35,
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
        }}>
          Crafted with React &amp; TypeScript
        </span>
      </div>

      {/* ══════════════════════════════════════════════════
          MICRO-INTERACTION STYLES
      ══════════════════════════════════════════════════ */}
      <style>{`
        /* Nav links */
        .ftr-link {
          position: relative;
        }
        .ftr-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--seal-bright);
          transition: width 300ms cubic-bezier(0.65, 0, 0.35, 1);
        }
        .ftr-link:hover {
          color: var(--washi) !important;
          transform: translateX(5px) !important;
        }
        .ftr-link:hover::after {
          width: 100%;
        }

        /* CTA link */
        .ftr-cta {
          position: relative;
        }
        .ftr-cta::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background: var(--seal);
          transition: width 380ms cubic-bezier(0.65, 0, 0.35, 1);
        }
        .ftr-cta:hover {
          color: var(--washi) !important;
        }
        .ftr-cta:hover::after {
          width: 100%;
        }
        .ftr-cta:hover .ftr-arrow {
          transform: translateX(8px) !important;
          color: var(--seal-bright);
        }

        /* Back to top */
        .ftr-top:hover {
          opacity: 0.85 !important;
        }
        .ftr-top:hover .ftr-top-arrow {
          transform: translateY(-4px) !important;
        }

        /* Responsive: Tablet (2×2) */
        @media (max-width: 900px) {
          .ftr-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Responsive: Mobile (1 col) */
        @media (max-width: 560px) {
          .ftr-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .ftr-link,
          .ftr-link::after,
          .ftr-cta,
          .ftr-cta::after,
          .ftr-arrow,
          .ftr-top,
          .ftr-top-arrow {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </footer>
  );
};
