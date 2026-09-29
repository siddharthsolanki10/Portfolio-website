import React, { useState } from 'react';
import { ContactForm } from '../components/ContactForm';
import { SideArt } from '../components/SideArt';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'solankisiddharth059@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="section section--page">
      <SideArt
        src="/contact-art.jpg"
        alt="Torii gate and glowing stone lantern, Japanese sumi-e ink wash art"
        kanji="縁"
        badge="connection"
      />

      <header style={{ marginBottom: 'var(--sp-7)' }}>
        <h1 className="page-title">Contact & Collaboration</h1>
        <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--washi-dim)', maxWidth: 'var(--max-prose)', lineHeight: 1.7 }}>
          Whether you want to discuss backend architecture, explore engineering opportunities, or collaborate on a project — let&apos;s connect.
        </p>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--sp-8)' }}>
        {/* Form Column */}
        <div style={{ maxWidth: '640px' }}>
          <div className="case-study-section-card" style={{ margin: 0, padding: 'var(--sp-6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', marginBottom: 'var(--sp-4)' }}>
              <span className="section-index-num">MESSAGE</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', color: 'var(--washi)', margin: 0 }}>
                Send a Message
              </h2>
            </div>
            
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--washi-dim)', marginBottom: 'var(--sp-6)', lineHeight: 1.6 }}>
              Fill out the form below or email me directly at{' '}
              <a href={`mailto:${email}`} style={{ color: 'var(--seal-bright)', textDecoration: 'underline' }}>
                {email}
              </a>.
            </p>

            <ContactForm />
          </div>
        </div>

        {/* Info Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
          {/* Location & Availability Card */}
          <div className="case-study-section-card" style={{ margin: 0 }}>
            <span className="section-label" style={{ marginBottom: 'var(--sp-3)', display: 'block' }}>location & status</span>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-3)', marginBottom: 'var(--sp-3)' }}>
              <span style={{ fontSize: '1.25rem', color: 'var(--seal-bright)' }}>📍</span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--washi)', marginBottom: '2px' }}>
                  Ahmedabad, Gujarat, India
                </h3>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>
                  Indian Standard Time (IST • UTC+5:30)
                </span>
              </div>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.25)', borderRadius: '2px', marginTop: 'var(--sp-2)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ fontSize: 'var(--text-xs)', color: '#4ade80', fontWeight: 600 }}>
                Available for Full-Time &amp; Freelance Roles
              </span>
            </div>
          </div>

          {/* Direct Email Card */}
          <div className="case-study-section-card" style={{ margin: 0 }}>
            <span className="section-label" style={{ marginBottom: 'var(--sp-3)', display: 'block' }}>direct communication</span>
            
            <div style={{ marginBottom: 'var(--sp-4)' }}>
              <a
                href={`mailto:${email}`}
                style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--washi)', wordBreak: 'break-all', display: 'block', marginBottom: '4px' }}
              >
                {email}
              </a>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>
                Response time: typically within 24 hours
              </span>
            </div>

            <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
              <a
                href={`mailto:${email}`}
                className="btn"
                style={{ fontSize: 'var(--text-xs)', padding: 'var(--sp-2) var(--sp-4)' }}
              >
                Compose Email ↗
              </a>
              <button
                onClick={handleCopyEmail}
                className="btn"
                style={{ fontSize: 'var(--text-xs)', padding: 'var(--sp-2) var(--sp-4)', borderColor: copied ? 'var(--seal-bright)' : undefined }}
              >
                {copied ? '✓ Copied to Clipboard' : 'Copy Email Address'}
              </button>
            </div>
          </div>

          {/* Online Channels */}
          <div className="case-study-section-card" style={{ margin: 0 }}>
            <span className="section-label" style={{ marginBottom: 'var(--sp-3)', display: 'block' }}>verified profiles</span>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
              <div>
                <a
                  href="https://github.com/siddharthsolanki10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-text"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  GitHub <span>↗</span>
                </a>
                <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>
                  github.com/siddharthsolanki10 • Open source repositories &amp; microservices
                </span>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/siddharthsolanki10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-text"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  LinkedIn <span>↗</span>
                </a>
                <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>
                  linkedin.com/in/siddharthsolanki10 • Career background &amp; professional updates
                </span>
              </div>

              <div>
                <a
                  href="https://siddharthsolanki.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-text"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  Live Portfolio <span>↗</span>
                </a>
                <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>
                  siddharthsolanki.vercel.app • Production hosted showcase
                </span>
              </div>
            </div>
          </div>

          {/* Resume Card */}
          <div className="case-study-section-card" style={{ margin: 0 }}>
            <span className="section-label" style={{ marginBottom: 'var(--sp-3)', display: 'block' }}>resume &amp; credentials</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--sp-3)' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--washi)', marginBottom: '2px' }}>
                  Siddharth Solanki Resume
                </h4>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>
                  Official PDF • Full-Stack &amp; Backend Engineering
                </span>
              </div>
              <a
                href="/Public/SiddharthSolanki-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ fontSize: 'var(--text-xs)', padding: 'var(--sp-2) var(--sp-4)' }}
              >
                Download PDF ↗
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (min-width: 900px) {
          .section--page > div[style*="gridTemplateColumns"] {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </div>
  );
};
