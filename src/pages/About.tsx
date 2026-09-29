import React from 'react';
import { SideArt } from '../components/SideArt';

export const About: React.FC = () => {
  return (
    <div className="section section--page">
      <SideArt
        src="/about-art.jpg"
        alt="Master craftsman in contemplation, Japanese ink wash art"
        kanji="職人"
        badge="craftsmanship"
      />
      <h1 className="page-title">About</h1>

      {/* 1. Extended Bio */}
      <section style={{ maxWidth: 'var(--max-prose)', marginBottom: 'var(--sp-9)' }}>
        <p style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.7, color: 'var(--washi)', marginBottom: 'var(--sp-5)' }}>
          I am a Full-Stack Developer with a deep focus on backend architecture, system design, and building resilient web applications.
          From interactive React frontends to robust Node.js and NestJS microservices, I care about software that is reliable, scalable, and intuitive to use.
        </p>
        <p style={{ fontSize: 'var(--text-body)', lineHeight: 1.7, color: 'var(--washi-dim)', marginBottom: 'var(--sp-5)' }}>
          Based in Ahmedabad, Gujarat, I balance hands-on backend development with crafting modern, responsive user interfaces.
          My technical journey is grounded in disciplined engineering practices—prioritizing clean data schemas, strict type safety, secure authorization boundaries, and maintainable abstractions.
        </p>
        <p style={{ fontSize: 'var(--text-body)', lineHeight: 1.7, color: 'var(--washi-dim)' }}>
          Whether orchestrating multi-tenant logistics platforms like PRISM, engineering AI-powered career roadmaps with SkillSync, or designing media streaming pipelines, I approach software with craftsmanship and intentionality.
        </p>
      </section>

      {/* 2. Experience */}
      <section style={{ marginBottom: 'var(--sp-9)' }}>
        <p className="section-label">experience</p>
        <div style={{ display: 'flex', gap: 'var(--sp-5)' }}>
          <div className="spine-line" style={{ alignSelf: 'stretch', opacity: 0.5 }} aria-hidden="true" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--sp-7)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', color: 'var(--washi)' }}>
                  Backend Developer Intern
                </h3>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>Ahmedabad, India</span>
              </div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--seal-bright)', marginBottom: 'var(--sp-2)', fontWeight: 500 }}>
                DevsTree IT Services Pvt. Ltd.
              </div>
              <p style={{ color: 'var(--washi-dim)', lineHeight: 1.6, fontSize: '0.9375rem' }}>
                Engineering and optimizing backend services, designing RESTful APIs, and implementing database models with PostgreSQL and MongoDB. Working with NestJS, Node.js, and Docker to build scalable and maintainable application services.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', color: 'var(--washi)' }}>
                  Full-Stack Engineer & Project Architect
                </h3>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>2023 — Present</span>
              </div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--seal-bright)', marginBottom: 'var(--sp-2)', fontWeight: 500 }}>
                Independent Systems & Open Source
              </div>
              <p style={{ color: 'var(--washi-dim)', lineHeight: 1.6, fontSize: '0.9375rem' }}>
                Architected and shipped end-to-end web platforms including PRISM Logistics OS (multi-tenant portal with dual-layer RBAC), SkillSync (AI roadmap generator with n8n and React Flow), and Kidolio (developmental tracking platform).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Education */}
      <section style={{ marginBottom: 'var(--sp-9)' }}>
        <p className="section-label">education</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
          <div className="case-study-section-card" style={{ margin: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-1)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-h2)', color: 'var(--washi)' }}>
                Bachelor of Technology in Computer Engineering
              </h3>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--seal-bright)', fontWeight: 600 }}>2023 — Present</span>
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--washi)', marginBottom: 'var(--sp-2)' }}>
              Silver Oak University, Ahmedabad
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--washi-dim)', lineHeight: 1.6 }}>
              Rigorous coursework focusing on Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Object-Oriented Software Engineering.
            </p>
          </div>

          <div className="case-study-section-card" style={{ margin: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--sp-2)', marginBottom: 'var(--sp-1)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--washi)' }}>
                Higher Secondary Certificate (HSC – XII Science, PCM)
              </h3>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>2022 — 2023</span>
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--washi)' }}>
              Pulkit Madhyamik Shala, Junagadh • GSEB Board
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Technical Skills */}
      <section style={{ marginBottom: 'var(--sp-9)' }}>
        <p className="section-label">skills & technologies</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--sp-5)' }}>
          {/* Frontend */}
          <div className="case-study-section-card" style={{ margin: 0 }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--washi)', marginBottom: 'var(--sp-3)', borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--sp-2)' }}>
              Frontend Engineering
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['React.js', 'TypeScript', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Shadcn UI', 'Radix UI', 'React Flow', 'Vite', 'React Hook Form', 'HTML5 / Modern CSS'].map((s) => (
                <span key={s} className="tech-pill">{s}</span>
              ))}
            </div>
          </div>

          {/* Backend & Architecture */}
          <div className="case-study-section-card" style={{ margin: 0 }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--washi)', marginBottom: 'var(--sp-3)', borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--sp-2)' }}>
              Backend & Architecture
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'System Design', 'JWT Authentication', 'RBAC Security Matrix', 'Microservices Architecture'].map((s) => (
                <span key={s} className="tech-pill">{s}</span>
              ))}
            </div>
          </div>

          {/* Databases & Storage */}
          <div className="case-study-section-card" style={{ margin: 0 }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--washi)', marginBottom: 'var(--sp-3)', borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--sp-2)' }}>
              Databases & Caching
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['PostgreSQL', 'MongoDB', 'Mongoose ODM', 'Knex.js', 'Redis', 'Aggregation Pipelines', 'Schema Indexing & Optimization'].map((s) => (
                <span key={s} className="tech-pill">{s}</span>
              ))}
            </div>
          </div>

          {/* DevOps, Cloud & AI */}
          <div className="case-study-section-card" style={{ margin: 0 }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--washi)', marginBottom: 'var(--sp-3)', borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--sp-2)' }}>
              DevOps, Cloud & Automation
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['Docker', 'Docker Compose', 'Git & GitHub', 'AWS (EC2 / S3)', 'Cloudinary CDN', 'n8n Automation', 'OpenAI GPT Integration', 'Linux CLI'].map((s) => (
                <span key={s} className="tech-pill">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Current Focus: System Design */}
      <section>
        <p className="section-label">current focus</p>
        <div className="case-study-section-card" style={{ margin: 0, borderLeft: '3px solid var(--seal-bright)', background: 'linear-gradient(135deg, rgba(27, 25, 23, 0.9) 0%, rgba(18, 17, 16, 0.95) 100%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', marginBottom: 'var(--sp-3)' }}>
            <span className="section-index-num">FOCUS</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', color: 'var(--washi)', margin: 0 }}>
              System Design & Distributed Scalability
            </h2>
          </div>

          <p style={{ fontSize: 'var(--text-body)', color: 'var(--washi)', lineHeight: 1.7, marginBottom: 'var(--sp-4)', maxWidth: 'var(--max-prose)' }}>
            I am actively investing time in mastering large-scale system design patterns and engineering resilient backend architectures that remain stable under high throughput.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--sp-4)', marginTop: 'var(--sp-5)' }}>
            <div style={{ background: 'rgba(18, 17, 16, 0.6)', border: '1px solid var(--hairline)', padding: 'var(--sp-4)', borderRadius: '2px' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--washi)', fontSize: '0.95rem', marginBottom: 'var(--sp-2)' }}>
                High-Concurrency Backend Services
              </h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--washi-dim)', lineHeight: 1.6 }}>
                Designing stateless API gateways, rate limiting, connection pooling, and horizontal scaling strategies with Node.js and NestJS.
              </p>
            </div>

            <div style={{ background: 'rgba(18, 17, 16, 0.6)', border: '1px solid var(--hairline)', padding: 'var(--sp-4)', borderRadius: '2px' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--washi)', fontSize: '0.95rem', marginBottom: 'var(--sp-2)' }}>
                Distributed Caching & Storage
              </h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--washi-dim)', lineHeight: 1.6 }}>
                Multi-tier caching layers with Redis, read-replica segregation in PostgreSQL, and compound indexing architectures for sub-100ms queries.
              </p>
            </div>

            <div style={{ background: 'rgba(18, 17, 16, 0.6)', border: '1px solid var(--hairline)', padding: 'var(--sp-4)', borderRadius: '2px' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--washi)', fontSize: '0.95rem', marginBottom: 'var(--sp-2)' }}>
                Event-Driven Workflows & AI Pipelines
              </h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--washi-dim)', lineHeight: 1.6 }}>
                Combining webhook automation engines (n8n), asynchronous task workers, and structured LLM prompt orchestration into mission-critical business flows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
