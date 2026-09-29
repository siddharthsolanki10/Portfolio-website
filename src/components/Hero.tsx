import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="section section--hero" id="hero" aria-label="Introduction">
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 'var(--sp-6)' }}>
        {/* Spine line — 1px red vertical rule evoking an unrolled scroll edge */}
        <div
          className="spine-line sweep-spine"
          style={{ alignSelf: 'stretch' }}
          aria-hidden="true"
        />

        <div>
          {/* Name — the single bold gesture */}
          <h1
            className="sweep-name sweep-line-accent"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: 'var(--text-display)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--washi)',
              marginBottom: 'var(--sp-4)',
            }}
          >
            Siddharth
            <br />
            Solanki
          </h1>

          {/* Role line */}
          <p
            className="sweep-role"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-body-lg)',
              color: 'var(--washi-dim)',
              letterSpacing: '0.01em',
            }}
          >
            Full-stack developer, building for the modern web.
          </p>
        </div>
      </div>
    </section>
  );
};
