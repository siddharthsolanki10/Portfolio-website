import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_PROJECTS, Project } from '../data/projects';
import { Hero3DBackground } from '../components/Hero3DBackground';

const HERO_QUOTES = [
  {
    quote: "Simplicity is the prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    quote: "Architecting resilient backends and systems that endure.",
    author: "Siddharth Solanki",
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
];

export const Home: React.FC = () => {
  const [quoteIdx, setQuoteIdx] = React.useState(0);
  const featuredProject = ALL_PROJECTS.find(p => p.featured) || ALL_PROJECTS[0];
  const gridProjects = ALL_PROJECTS.filter(p => p.id !== featuredProject.id);

  return (
    <>
      {/* ── SKIP LINK ── */}
      <a
        href="#main-content"
        className="skip-link"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '16px',
          zIndex: 1000,
          background: 'var(--seal)',
          color: 'var(--washi)',
          padding: '8px 16px',
        }}
      >
        Skip to content
      </a>

      {/* ═══════════════════════════════════════════════════════
          HERO — Cinematic Japanese Landscape with 3D Depth & Embers
      ════════════════════════════════════════════════════════ */}
      <section
        className="section--hero"
        id="hero"
        aria-label="Introduction"
        style={{ minHeight: 'calc(100vh - var(--nav-h))', position: 'relative' }}
      >
        <Hero3DBackground>
          {/* Hero Content Box */}
          <div
            id="main-content"
            style={{
              position: 'relative',
              zIndex: 10,
              paddingLeft: 'clamp(24px, 7vw, 90px)',
              paddingRight: 'clamp(20px, 4vw, 48px)',
              maxWidth: 'clamp(320px, 60vw, 760px)',
              paddingTop: 'clamp(40px, 8vh, 80px)',
              paddingBottom: 'clamp(40px, 8vh, 80px)',
            }}
          >
            {/* Vertical Red Spine Accent */}
            <div
              className="sweep-spine"
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 'clamp(10px, 4vw, 56px)',
                top: '8%',
                bottom: '8%',
                width: '1px',
                background: 'linear-gradient(180deg, transparent, var(--seal-bright) 20%, var(--seal) 80%, transparent)',
                opacity: 0.65,
              }}
            />

            {/* Dominant Name Heading */}
            <h1 className="hero-name sweep-name sweep-line-accent">
              Siddharth
              <br />
              Solanki
            </h1>

            {/* Minimalist Quote Block */}
            <blockquote className="hero-quote sweep-role">
              <p className="hero-quote-text">
                “{HERO_QUOTES[quoteIdx].quote}”
              </p>
              <footer className="hero-quote-footer">
                <cite className="hero-quote-author">
                  {HERO_QUOTES[quoteIdx].author}
                </cite>
                <button
                  type="button"
                  onClick={() => setQuoteIdx((prev) => (prev + 1) % HERO_QUOTES.length)}
                  className="hero-quote-cycle-btn"
                  title="Switch Quote"
                  aria-label="Switch to next quote"
                >
                  <span>next quote</span>
                  <span aria-hidden="true">↻</span>
                </button>
              </footer>
            </blockquote>

            {/* Clean Minimal Action CTAs */}
            <div className="hero-actions sweep-role">
              <Link to="/work" className="hero-btn-primary" id="hero-cta">
                <span>Explore Selected Works</span>
                <span className="hero-btn-arrow">→</span>
              </Link>

              <Link to="/contact" className="hero-btn-secondary">
                <span>Get In Touch ↗</span>
              </Link>
            </div>
          </div>
        </Hero3DBackground>
      </section>

      {/* ══════════════════════════════════════════════════
          CORE ARCHITECTURAL DISCIPLINES
      ══════════════════════════════════════════════════ */}
      <section className="section" aria-label="Core Disciplines">
        <p className="section-label">core engineering disciplines</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--sp-5)' }}>
          {/* Discipline 1 */}
          <div className="pillar-card">
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--seal-bright)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 'var(--sp-2)' }}>
              01 / Architecture
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--washi)', marginBottom: 'var(--sp-2)' }}>
              Backend Engineering &amp; REST APIs
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--washi-dim)', lineHeight: 1.6, marginBottom: 'var(--sp-4)' }}>
              Designing high-throughput API gateways, stateless JWT dual-token authentication, strict Role-Based Access Control (RBAC), and clean layered MVC patterns in Node.js and NestJS.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {['Node.js', 'Express', 'NestJS', 'REST APIs', 'JWT/RBAC', 'Cloudinary'].map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Discipline 2 */}
          <div className="pillar-card">
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--seal-bright)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 'var(--sp-2)' }}>
              02 / Interfaces
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--washi)', marginBottom: 'var(--sp-2)' }}>
              Enterprise Frontend Systems
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--washi-dim)', lineHeight: 1.6, marginBottom: 'var(--sp-4)' }}>
              Crafting accessible, multi-portal enterprise UIs using React 19, TypeScript, and Tailwind CSS. Implementing design tokens, normalized RTK Query caching, and high-density data tables.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {['React 19', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Shadcn UI', 'React Flow'].map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Discipline 3 */}
          <div className="pillar-card">
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--seal-bright)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 'var(--sp-2)' }}>
              03 / Scalability
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--washi)', marginBottom: 'var(--sp-2)' }}>
              Distributed Storage &amp; AI Automation
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--washi-dim)', lineHeight: 1.6, marginBottom: 'var(--sp-4)' }}>
              Managing transactional relational schemas with PostgreSQL and NoSQL aggregations in MongoDB. Integrating Redis caching, n8n workflow engines, and containerized Docker environments.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {['PostgreSQL', 'MongoDB', 'Redis', 'Docker Compose', 'n8n Automation', 'OpenAI GPT'].map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SELECTED WORKS SHOWCASE
      ══════════════════════════════════════════════════ */}
      <section className="section" aria-label="Selected Work">
        <p className="section-label">selected engineering works</p>

        {/* Featured Showcase: Kidolio */}
        <div className="project-featured-card">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--sp-4)', marginBottom: 'var(--sp-4)' }}>
            <div>
              <span style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.12em', color: 'var(--seal-bright)', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: 'var(--sp-1)' }}>
                FEATURED PRODUCTION SYSTEM
              </span>
              <Link to={`/work/${featuredProject.id}`} style={{ textDecoration: 'none' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: 'var(--washi)', lineHeight: 1.1, margin: 0 }}>
                  {featuredProject.name}
                </h2>
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
              {featuredProject.live && (
                <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: 'var(--text-xs)', padding: 'var(--sp-2) var(--sp-4)' }}>
                  Live Demo ↗
                </a>
              )}
              <a href={featuredProject.repo} target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: 'var(--text-xs)', padding: 'var(--sp-2) var(--sp-4)' }}>
                GitHub ↗
              </a>
            </div>
          </div>

          <p style={{ fontSize: 'var(--text-body)', color: 'var(--washi)', lineHeight: 1.6, maxWidth: 'var(--max-prose)', marginBottom: 'var(--sp-3)' }}>
            {featuredProject.tagline}
          </p>

          <p style={{ fontSize: '0.875rem', color: 'var(--washi-dim)', lineHeight: 1.6, maxWidth: 'var(--max-prose)', marginBottom: 'var(--sp-5)' }}>
            {featuredProject.summary}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--hairline)', paddingTop: 'var(--sp-4)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {featuredProject.tags.map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>

            <Link to={`/work/${featuredProject.id}`} className="btn-text" style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>
              Read Full Case Study →
            </Link>
          </div>
        </div>

        {/* Remaining 3 Projects Grid */}
        <div className="project-grid">
          {gridProjects.map((project: Project) => (
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
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', color: 'var(--washi)', marginBottom: 'var(--sp-2)' }}>
                    {project.name}
                  </h3>
                </Link>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--washi)', lineHeight: 1.5, marginBottom: 'var(--sp-3)', fontWeight: 500 }}>
                  {project.tagline}
                </p>

                <p style={{ fontSize: '0.84rem', color: 'var(--washi-dim)', lineHeight: 1.6, marginBottom: 'var(--sp-5)' }}>
                  {project.summary}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'var(--sp-4)' }}>
                  {project.tags.slice(0, 5).map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--hairline)', paddingTop: 'var(--sp-4)' }}>
                  <Link to={`/work/${project.id}`} className="btn-text" style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                    Case Study →
                  </Link>

                  <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
                    {project.live && project.live !== project.repo && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-text" style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>
                        Live ↗
                      </a>
                    )}
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-text" style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>
                      Code ↗
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 'var(--sp-8)', textAlign: 'center' }}>
          <Link to="/work" className="btn" style={{ padding: 'var(--sp-3) var(--sp-6)' }}>
            View Full Architectural Portfolio &amp; Details →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ABOUT TEASER
      ══════════════════════════════════════════════════ */}
      <section className="section" aria-label="About Teaser">
        <p className="section-label">about the engineer</p>
        <div style={{ maxWidth: 'var(--max-prose)' }}>
          <p style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.7, color: 'var(--washi)', marginBottom: 'var(--sp-4)' }}>
            I am a Full-Stack Developer with a deep focus on backend architecture, system design, and building resilient web applications.
            Currently working at DevsTree IT Services and pursuing Computer Engineering at Silver Oak University.
          </p>
          <p style={{ fontSize: 'var(--text-body)', lineHeight: 1.7, color: 'var(--washi-dim)', marginBottom: 'var(--sp-5)' }}>
            Based in Ahmedabad, Gujarat, I balance hands-on backend development with crafting modern, responsive user interfaces.
          </p>
          <Link to="/about" className="btn-text" style={{ fontWeight: 600 }}>
            Read the full journey, background &amp; skills matrix →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CURRENT FOCUS: SYSTEM DESIGN
      ══════════════════════════════════════════════════ */}
      <section className="section" aria-label="Current Focus">
        <p className="section-label">current focus</p>
        <div className="case-study-section-card" style={{ maxWidth: '900px', borderLeft: '3px solid var(--seal-bright)', background: 'linear-gradient(135deg, rgba(27, 25, 23, 0.9) 0%, rgba(18, 17, 16, 0.95) 100%)', padding: 'var(--sp-6)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', marginBottom: 'var(--sp-2)' }}>
            <span className="section-index-num">SYSTEM DESIGN</span>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Active Architectural Exploration
            </span>
          </div>
          
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', color: 'var(--washi)', marginBottom: 'var(--sp-3)' }}>
            Distributed Scalability &amp; Backend Engineering
          </h3>
          
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--washi-dim)', lineHeight: 1.7, marginBottom: 'var(--sp-5)' }}>
            Currently deepening expertise in high-concurrency microservices, multi-tier Redis caching, database indexing across PostgreSQL and MongoDB, and event-driven automation pipelines.
          </p>
          
          <Link to="/about" className="btn-text" style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>
            Explore technical skills &amp; background →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section className="section" aria-label="Contact CTA">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-5)', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--hairline)', paddingTop: 'var(--sp-7)' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', color: 'var(--washi)', marginBottom: '4px' }}>
              Ready to build something impactful?
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--washi-dim)' }}>
              Open for full-time engineering roles, backend consulting, and full-stack projects.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-4)', alignItems: 'center' }}>
            <Link to="/contact" className="btn btn-hero-primary" style={{ padding: 'var(--sp-3) var(--sp-6)' }}>
              Get in touch →
            </Link>
            <a href="https://drive.google.com/file/d/1Vzl2JS4MK70O-PruAtDu6qurf4qgRKiV/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer">
              Download resume (PDF)
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .skip-link:focus {
          top: 16px !important;
          outline: 2px solid var(--seal-bright);
        }
        @media (max-width: 768px) {
          #hero > div:last-of-type {
            max-width: 95% !important;
            padding-left: clamp(20px, 5vw, 32px) !important;
            padding-right: 20px !important;
          }
          #hero img {
            object-position: 50% center !important;
          }
        }
      `}</style>
    </>
  );
};
