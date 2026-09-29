import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_PROJECTS } from '../data/projects';

export const Work: React.FC = () => {
  return (
    <section className="section" id="work" aria-label="Work">
      <p className="section-label">work & architecture</p>

      <div>
        {ALL_PROJECTS.map((project, i) => (
          <React.Fragment key={project.id}>
            {i === 0 && <hr className="hairline" />}

            <Link
              to={`/work/${project.id}`}
              className="row-item"
              aria-label={`${project.name} — ${project.tagline}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: 'var(--text-h2)',
                    color: 'var(--washi)',
                    display: 'block',
                    marginBottom: 'var(--sp-1)',
                    lineHeight: 1.3,
                  }}
                >
                  {project.name}
                </span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--seal-bright)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  {project.category}
                </span>
              </div>
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--washi-dim)',
                  lineHeight: 1.5,
                  display: 'block',
                  marginBottom: 'var(--sp-2)'
                }}
              >
                {project.tagline}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags.slice(0, 4).map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </Link>

            <hr className="hairline" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
