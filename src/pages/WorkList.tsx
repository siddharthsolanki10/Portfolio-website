import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState';
import { SideArt } from '../components/SideArt';
import { ALL_PROJECTS, Project } from '../data/projects';

export const WorkList: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => {
        if (filter === 'fullstack') return p.category === 'fullstack';
        if (filter === 'backend') return p.category === 'backend' || p.tags.includes('Node.js') || p.tags.includes('Express.js');
        if (filter === 'frontend') return p.category === 'frontend' || p.category === 'fullstack';
        return true;
      });

  const featuredProject = filteredProjects.find(p => p.featured) || filteredProjects[0];
  const remainingProjects = filteredProjects.filter(p => p.id !== featuredProject?.id);

  const getFilterCount = (tag: string) => {
    if (tag === 'all') return ALL_PROJECTS.length;
    if (tag === 'fullstack') return ALL_PROJECTS.filter(p => p.category === 'fullstack').length;
    if (tag === 'backend') return ALL_PROJECTS.filter(p => p.category === 'backend' || p.tags.includes('Node.js')).length;
    if (tag === 'frontend') return ALL_PROJECTS.filter(p => p.category === 'frontend' || p.category === 'fullstack').length;
    return 0;
  };

  return (
    <div className="section section--page">
      <SideArt
        src="/work-art.jpg"
        alt="Forged katana sword on stand, Japanese sumi-e ink wash art"
        kanji="軌跡"
        badge="architecture"
      />

      <header style={{ marginBottom: 'var(--sp-7)' }}>
        <h1 className="page-title">Work & Architecture</h1>
        <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--washi-dim)', maxWidth: 'var(--max-prose)', lineHeight: 1.7 }}>
          Selected engineering works spanning multi-tenant enterprise operating systems, AI workflow automation, and high-throughput backend services.
        </p>
      </header>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-7)', borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--sp-3)' }}>
        {['all', 'fullstack', 'backend', 'frontend'].map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`filter-tab ${filter === tag ? 'active' : ''}`}
            aria-pressed={filter === tag}
            style={{ color: filter === tag ? 'var(--washi)' : 'var(--washi-dim)' }}
          >
            {tag === 'all' ? 'All Works' : tag}
            <span className="filter-badge">{getFilterCount(tag)}</span>
          </button>
        ))}
      </div>

      {/* Featured Project Showcase */}
      {featuredProject && (
        <div style={{ marginBottom: 'var(--sp-9)' }}>
          <p className="section-label">featured project</p>
          
          <div className="project-featured-card">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--sp-4)', marginBottom: 'var(--sp-4)' }}>
              <div>
                <span style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.12em', color: 'var(--seal-bright)', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: 'var(--sp-1)' }}>
                  {featuredProject.category.toUpperCase()} ARCHITECTURE
                </span>
                <Link to={`/work/${featuredProject.id}`} style={{ textDecoration: 'none' }}>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-display)', color: 'var(--washi)', lineHeight: 1.1, margin: 0, transition: 'color 200ms ease' }}>
                    {featuredProject.name}
                  </h2>
                </Link>
              </div>

              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
                {featuredProject.live && (
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ fontSize: 'var(--text-xs)', padding: 'var(--sp-2) var(--sp-4)' }}
                  >
                    Live Demo ↗
                  </a>
                )}
                <a
                  href={featuredProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ fontSize: 'var(--text-xs)', padding: 'var(--sp-2) var(--sp-4)' }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--washi)', lineHeight: 1.6, maxWidth: 'var(--max-prose)', marginBottom: 'var(--sp-5)' }}>
              {featuredProject.tagline}
            </p>

            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--washi-dim)', lineHeight: 1.6, maxWidth: 'var(--max-prose)', marginBottom: 'var(--sp-6)' }}>
              {featuredProject.summary}
            </p>

            {/* Metrics Chips */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 'var(--sp-4)', marginBottom: 'var(--sp-6)', padding: 'var(--sp-4)', background: 'rgba(18, 17, 16, 0.6)', border: '1px solid var(--hairline)' }}>
              {featuredProject.metrics.map((m, idx) => (
                <div key={idx}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--washi)' }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="tech-pill">{tag}</span>
                ))}
              </div>

              <Link
                to={`/work/${featuredProject.id}`}
                className="btn-text"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: 'var(--text-sm)' }}
              >
                Read Case Study →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Selected Projects Grid */}
      <div>
        <p className="section-label">all selected systems</p>

        {remainingProjects.length > 0 ? (
          <div className="project-grid">
            {remainingProjects.map((project: Project) => (
              <article key={project.id} className="project-card">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--sp-3)' }}>
                    <span style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', color: 'var(--seal-bright)', textTransform: 'uppercase', fontWeight: 600 }}>
                      {project.category}
                    </span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>
                      {project.time}
                    </span>
                  </div>

                  <Link to={`/work/${project.id}`} style={{ textDecoration: 'none' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', color: 'var(--washi)', marginBottom: 'var(--sp-2)', lineHeight: 1.3 }}>
                      {project.name}
                    </h2>
                  </Link>

                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--washi)', lineHeight: 1.5, marginBottom: 'var(--sp-3)', fontWeight: 500 }}>
                    {project.tagline}
                  </p>

                  <p style={{ fontSize: '0.84rem', color: 'var(--washi-dim)', lineHeight: 1.6, marginBottom: 'var(--sp-5)' }}>
                    {project.summary}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'var(--sp-5)' }}>
                    {project.tags.slice(0, 5).map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="tech-pill" style={{ opacity: 0.7 }}>+{project.tags.length - 5}</span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--hairline)', paddingTop: 'var(--sp-4)' }}>
                    <Link
                      to={`/work/${project.id}`}
                      className="btn-text"
                      style={{ fontWeight: 600, fontSize: 'var(--text-sm)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      Case Study →
                    </Link>

                    <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
                      {project.live && project.live !== project.repo && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-text"
                          style={{ color: 'var(--washi-dim)', fontSize: 'var(--text-xs)' }}
                        >
                          Live ↗
                        </a>
                      )}
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-text"
                        style={{ color: 'var(--washi-dim)', fontSize: 'var(--text-xs)' }}
                      >
                        Code ↗
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            message="No projects found matching this filter."
            actionText="Reset filter"
            onAction={() => setFilter('all')}
          />
        )}
      </div>
    </div>
  );
};
