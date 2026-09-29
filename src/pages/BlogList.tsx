import React from 'react';
import { Link } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState';
import { SideArt } from '../components/SideArt';

const ALL_POSTS: any[] = [];

export const BlogList: React.FC = () => {
  return (
    <div className="section section--page">
      <SideArt
        src="/blog-art.jpg"
        alt="Calligraphy brush and suzuri ink stone, Japanese sumi-e ink wash art"
        kanji="筆記"
        badge="writings"
      />
      <h1 className="page-title">Blog</h1>
      <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--washi-dim)', marginBottom: 'var(--sp-7)', maxWidth: 'var(--max-prose)' }}>
        Thoughts on software architecture, React performance, and building for the web.
      </p>

      <div>
        {ALL_POSTS.length > 0 ? (
          ALL_POSTS.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="row-item">
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--sp-1)' }}>
                 <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-h2)', color: 'var(--washi)', lineHeight: 1.3 }}>{post.title}</span>
                 <span style={{ fontSize: 'var(--text-xs)', color: 'var(--washi-dim)' }}>{post.date}</span>
               </div>
               <span style={{ fontSize: 'var(--text-sm)', color: 'var(--washi-dim)', lineHeight: 1.5 }}>{post.excerpt}</span>
            </Link>
          ))
        ) : (
          <EmptyState 
            message="Nothing published here yet — check back soon, or see the work section instead." 
            actionText="View the full portfolio" 
            actionLink="/work" 
          />
        )}
      </div>
    </div>
  );
};
