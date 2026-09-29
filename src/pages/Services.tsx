import React from 'react';
import { Link } from 'react-router-dom';
import { SideArt } from '../components/SideArt';

export const Services: React.FC = () => {
  return (
    <div className="section section--page">
      <SideArt
        src="/services-art.jpg"
        alt="Traditional Japanese pagoda in mist, Japanese sumi-e ink wash art"
        kanji="構築"
        badge="resilience"
      />
      <h1 className="page-title">Services</h1>
      <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--washi-dim)', marginBottom: 'var(--sp-7)', maxWidth: 'var(--max-prose)' }}>
        I offer freelance development and consulting for teams needing robust architectural solutions and polished interfaces.
      </p>

      <div>
        {/* Outcome-focused rows per V2 spec */}
        <div className="row-item" style={{ pointerEvents: 'none' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-h2)', color: 'var(--washi)', display: 'block', marginBottom: 'var(--sp-1)' }}>Backend Development</span>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--washi-dim)' }}>Building scalable, resilient services using Node.js and PostgreSQL.</span>
        </div>
        <div className="row-item" style={{ pointerEvents: 'none' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-h2)', color: 'var(--washi)', display: 'block', marginBottom: 'var(--sp-1)' }}>API Architecture</span>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--washi-dim)' }}>Designing RESTful or GraphQL APIs with clean documentation and secure auth boundaries.</span>
        </div>
        <div className="row-item" style={{ pointerEvents: 'none' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-h2)', color: 'var(--washi)', display: 'block', marginBottom: 'var(--sp-1)' }}>Performance Optimization</span>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--washi-dim)' }}>Auditing existing stacks to reduce latency, fix memory leaks, and improve UX.</span>
        </div>
      </div>

      <div style={{ marginTop: 'var(--sp-8)' }}>
        <Link to="/contact" className="btn">Discuss a potential project</Link>
      </div>
    </div>
  );
};
