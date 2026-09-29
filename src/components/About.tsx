import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="section" id="about" aria-label="About">
      <p className="section-label">about</p>

      <div style={{ maxWidth: 'var(--max-prose)' }}>
        {/* PLACEHOLDER — replace with your real copy */}
        <p
          style={{
            fontSize: 'var(--text-body-lg)',
            lineHeight: 1.7,
            color: 'var(--washi)',
            marginBottom: 'var(--sp-5)',
          }}
        >
          I build web applications with a focus on clean architecture and
          thoughtful user experience. My work leans toward the backend as
          much as the frontend — from React interfaces to Node.js services,
          database design to deployment pipelines.
        </p>

        <p
          style={{
            fontSize: 'var(--text-body)',
            lineHeight: 1.7,
            color: 'var(--washi-dim)',
            marginBottom: 'var(--sp-5)',
          }}
        >
          Based in Ahmedabad, I've spent the last few years working across
          the MERN stack, TypeScript, NestJS, and cloud infrastructure.
          I care about code that's easy to reason about and products that
          feel right to use.
        </p>

        <p
          style={{
            fontSize: 'var(--text-body)',
            lineHeight: 1.7,
            color: 'var(--washi-dim)',
          }}
        >
          When I'm not writing code, I'm probably reading about systems
          design or exploring new tools. I believe the best work comes
          from discipline and clarity, not complexity.
        </p>
        {/* END PLACEHOLDER */}
      </div>
    </section>
  );
};
