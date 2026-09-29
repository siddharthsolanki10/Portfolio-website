import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState';
import { getProjectById, getNextProject } from '../data/projects';

export const WorkDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Map legacy slugs if user arrives at old routes
  const normalizedSlug = slug === 'youtube-backend' ? 'youtube-clone' : slug;
  const project = getProjectById(normalizedSlug || '');
  const nextProject = project ? getNextProject(project.id) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="section section--page">
        <h1 className="page-title">Project Not Found</h1>
        <EmptyState
          message="This project doesn't exist or may have been renamed."
          actionText="Back to portfolio"
          actionLink="/work"
        />
      </div>
    );
  }

  const SectionTitle = ({ number, title }: { number: string; title: string }) => (
    <div className="case-study-section-title">
      <span className="section-index-num">{number}</span>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', color: 'var(--washi)', margin: 0 }}>
        {title}
      </h2>
    </div>
  );

  const SectionText = ({ children }: { children: React.ReactNode }) => (
    <p style={{ color: 'var(--washi-dim)', lineHeight: 1.8, fontSize: '1rem', marginBottom: 'var(--sp-4)' }}>
      {children}
    </p>
  );

  return (
    <article className="section section--page" style={{ maxWidth: '960px', margin: '0 auto' }}>
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" style={{ marginBottom: 'var(--sp-5)', display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: 'var(--text-sm)' }}>
        <Link to="/work" className="btn-text" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          ← Back to Works
        </Link>
        <span style={{ color: 'var(--washi-dim)' }}>/</span>
        <span style={{ color: 'var(--washi)' }}>{project.name}</span>
      </nav>

      {/* Hero Header */}
      <header className="case-study-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', marginBottom: 'var(--sp-3)' }}>
          <span style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.12em', color: 'var(--seal-bright)', textTransform: 'uppercase', fontWeight: 600 }}>
            {project.category} Architecture
          </span>
          <span style={{ color: 'var(--washi-dim)', fontSize: 'var(--text-xs)' }}>•</span>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>{project.time}</span>
        </div>

        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-display)', color: 'var(--washi)', lineHeight: 1.1, marginBottom: 'var(--sp-4)' }}>
          {project.title}
        </h1>

        {/* Project Description Section Header */}
        <div style={{ margin: 'var(--sp-5) 0 var(--sp-6) 0' }}>
          <p className="section-label" style={{ marginBottom: 'var(--sp-2)' }}>project description & objectives</p>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--washi)', lineHeight: 1.6, fontWeight: 500, marginBottom: 'var(--sp-3)' }}>
            {project.tagline}
          </p>
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--washi-dim)', lineHeight: 1.7, maxWidth: 'var(--max-prose)' }}>
            {project.summary}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-4)', margin: 'var(--sp-6) 0' }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ background: 'var(--seal)', borderColor: 'var(--seal)', color: 'var(--washi)', fontWeight: 600 }}
            >
              Visit Live Demo ↗
            </a>
          )}
          {project.repoFrontend ? (
            <>
              <a href={project.repoFrontend} target="_blank" rel="noopener noreferrer" className="btn">
                Frontend Repo ↗
              </a>
              <a href={project.repoBackend} target="_blank" rel="noopener noreferrer" className="btn">
                Backend Repo ↗
              </a>
            </>
          ) : (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn">
              View Repository ↗
            </a>
          )}
        </div>

        {/* Project Metadata Matrix */}
        <div className="case-study-meta-grid">
          <div>
            <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--washi-dim)', marginBottom: 'var(--sp-1)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              My Role
            </span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--washi)', fontWeight: 500 }}>
              {project.role}
            </span>
          </div>

          <div>
            <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--washi-dim)', marginBottom: 'var(--sp-1)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Timeline
            </span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--washi)' }}>
              {project.time}
            </span>
          </div>

          <div>
            <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--washi-dim)', marginBottom: 'var(--sp-1)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Primary Technologies
            </span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--washi)' }}>
              {project.tags.slice(0, 4).join(', ')}
            </span>
          </div>

          <div>
            <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--washi-dim)', marginBottom: 'var(--sp-1)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Source Verification
            </span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--seal-bright)' }}>
              Verified Production Code
            </span>
          </div>
        </div>

        {/* Key Metrics Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'var(--sp-4)', marginTop: 'var(--sp-6)', padding: 'var(--sp-5)', background: 'var(--ink-2)', border: '1px solid var(--hairline)' }}>
          {project.metrics.map((m, idx) => (
            <div key={idx}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--washi)' }}>
                {m.value}
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Main Case Study Sections */}
      <div>
        {/* 01. Overview */}
        <section className="case-study-section-card">
          <SectionTitle number="01" title="Executive Overview" />
          <SectionText>{project.overview}</SectionText>
        </section>

        {/* 02. The Problem */}
        <section className="case-study-section-card">
          <SectionTitle number="02" title="The Problem & Objectives" />
          <SectionText>{project.problem}</SectionText>
        </section>

        {/* 03. My Role */}
        <section className="case-study-section-card">
          <SectionTitle number="03" title="Engineering Scope & Responsibilities" />
          <SectionText>{project.myRole}</SectionText>
        </section>

        {/* 04. System Architecture & Data Flow */}
        <section className="case-study-section-card">
          <SectionTitle number="04" title="System Architecture & Data Flow" />
          <SectionText>{project.architecture}</SectionText>

          {/* Architecture Diagram Visualization */}
          {project.architectureDiagram && (
            <div className="architecture-diagram-container">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--sp-4)' }}>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--seal-bright)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Architectural Pipeline
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--washi-dim)' }}>
                  Stateless & Microservice Topology
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--sp-4)', position: 'relative' }}>
                {/* Client Layer */}
                <div style={{ background: 'rgba(18, 17, 16, 0.8)', border: '1px solid var(--hairline)', padding: 'var(--sp-4)', borderRadius: '2px' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--washi-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>01 / Presentation</span>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--washi)', marginTop: '4px' }}>
                    {project.architectureDiagram.client}
                  </div>
                </div>

                {/* Gateway Layer */}
                <div style={{ background: 'rgba(18, 17, 16, 0.8)', border: '1px solid var(--hairline)', padding: 'var(--sp-4)', borderRadius: '2px' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--seal-bright)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>02 / Gateway & Auth</span>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--washi)', marginTop: '4px' }}>
                    {project.architectureDiagram.gateway}
                  </div>
                </div>

                {/* Core Services */}
                <div style={{ background: 'rgba(18, 17, 16, 0.8)', border: '1px solid var(--hairline)', padding: 'var(--sp-4)', borderRadius: '2px' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--washi-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>03 / Domain Services</span>
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '4px', fontSize: '0.8125rem', color: 'var(--washi)' }}>
                    {project.architectureDiagram.services.map((svc, sIdx) => (
                      <li key={sIdx} style={{ marginBottom: '2px' }}>• {svc}</li>
                    ))}
                  </ul>
                </div>

                {/* Database Layer */}
                <div style={{ background: 'rgba(18, 17, 16, 0.8)', border: '1px solid var(--hairline)', padding: 'var(--sp-4)', borderRadius: '2px' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--washi-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>04 / Data Store</span>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--washi)', marginTop: '4px' }}>
                    {project.architectureDiagram.database}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 05. Technology */}
        <section className="case-study-section-card">
          <SectionTitle number="05" title="Technology Selection & Rationale" />
          <SectionText>{project.technology}</SectionText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', marginTop: 'var(--sp-4)' }}>
            {project.tags.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </section>

        {/* 06. Development Process */}
        <section className="case-study-section-card">
          <SectionTitle number="06" title="Engineering & Sprint Process" />
          <SectionText>{project.process}</SectionText>
        </section>

        {/* 07. Challenges */}
        <section className="case-study-section-card">
          <SectionTitle number="07" title="Technical Roadblocks & Challenges" />
          <SectionText>{project.challenges}</SectionText>
        </section>

        {/* 08. Solutions */}
        <section className="case-study-section-card">
          <SectionTitle number="08" title="Architectural Solutions & Decisions" />
          <SectionText>{project.solutions}</SectionText>
        </section>

        {/* 09. Core Features */}
        <section className="case-study-section-card">
          <SectionTitle number="09" title="Key Features & Capabilities" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--sp-4)', marginTop: 'var(--sp-4)' }}>
            {project.features.map((feature, fIdx) => (
              <div
                key={fIdx}
                style={{
                  background: 'rgba(18, 17, 16, 0.5)',
                  border: '1px solid var(--hairline)',
                  padding: 'var(--sp-4)',
                  borderRadius: '2px',
                  borderLeft: '2px solid var(--seal-bright)'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--washi)', marginBottom: 'var(--sp-2)' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--washi-dim)', lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Results */}
        <section className="case-study-section-card">
          <SectionTitle number="10" title="Measurable Impact & Results" />
          <SectionText>{project.results}</SectionText>
        </section>

        {/* 11. Technical Deep-Dive */}
        <section className="case-study-section-card" style={{ marginBottom: 'var(--sp-8)' }}>
          <details style={{ cursor: 'pointer' }}>
            <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', color: 'var(--washi)', listStyle: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                <span className="section-index-num">11</span>
                <span>Technical Deep-Dive & Internals</span>
              </div>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--seal-bright)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Expand Details ↓
              </span>
            </summary>
            <div style={{ marginTop: 'var(--sp-5)', paddingTop: 'var(--sp-4)', borderTop: '1px solid var(--hairline)' }}>
              <SectionText>{project.techDetails}</SectionText>
            </div>
          </details>
        </section>
      </div>

      {/* Dynamic Next Project Navigation */}
      {nextProject && (
        <aside style={{ borderTop: '1px solid var(--hairline)', paddingTop: 'var(--sp-7)', marginTop: 'var(--sp-9)' }}>
          <p className="section-label">next case study</p>
          <Link
            to={`/work/${nextProject.id}`}
            className="row-item"
            style={{ textDecoration: 'none', borderTop: '1px solid var(--hairline)' }}
          >
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--seal-bright)', display: 'block', marginBottom: 'var(--sp-1)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              Continue Reading →
            </span>
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-h2)', color: 'var(--washi)', display: 'block', marginBottom: 'var(--sp-1)' }}>
              {nextProject.name}
            </span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--washi-dim)' }}>
              {nextProject.tagline}
            </span>
          </Link>
        </aside>
      )}
    </article>
  );
};
