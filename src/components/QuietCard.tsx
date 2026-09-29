import React from 'react';

interface QuietCardProps {
  quote: string;
  name: string;
  role: string;
}

export const QuietCard: React.FC<QuietCardProps> = ({ quote, name, role }) => {
  return (
    <blockquote className="quiet-card">
      <p style={{ fontSize: 'var(--text-body-lg)', fontStyle: 'italic', color: 'var(--washi)' }}>
        "{quote}"
      </p>
      <footer style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-4)', marginTop: 'var(--sp-2)' }}>
        <div style={{ width: '16px', height: '16px', background: 'var(--seal)' }} aria-hidden="true" />
        <div>
          <cite style={{ display: 'block', fontStyle: 'normal', fontWeight: 500, color: 'var(--washi)', fontSize: 'var(--text-sm)' }}>
            {name}
          </cite>
          <span style={{ color: 'var(--washi-dim)', fontSize: 'var(--text-xs)' }}>
            {role}
          </span>
        </div>
      </footer>
    </blockquote>
  );
};
