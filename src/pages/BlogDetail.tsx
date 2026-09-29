import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Using a hardcoded null to simulate article not found / empty state for now
  const article: any = null;

  if (!article) {
    return (
      <div className="section section--page">
        <h1 className="page-title">Article Not Found</h1>
        <EmptyState message="This article doesn't exist or was removed." actionText="Return to blog list" actionLink="/blog" />
      </div>
    );
  }

  return (
    <article className="section section--page">
      <Link to="/blog" className="btn-text" style={{ display: 'inline-block', marginBottom: 'var(--sp-6)' }}>Return to blog list</Link>
      
      <header style={{ marginBottom: 'var(--sp-7)' }}>
        <h1 className="page-title" style={{ display: 'block', borderBottom: 'none', marginBottom: 'var(--sp-2)' }}>{article.title}</h1>
        <div style={{ display: 'flex', gap: 'var(--sp-4)', fontSize: 'var(--text-sm)', color: 'var(--seal-bright)' }}>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readingTime} read</span>
        </div>
      </header>

      <div style={{ maxWidth: 'var(--max-prose)', color: 'var(--washi-dim)', lineHeight: 1.7, fontSize: 'var(--text-body)' }}>
        {/* Content goes here */}
      </div>
    </article>
  );
};
