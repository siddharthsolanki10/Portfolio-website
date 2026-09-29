import React from 'react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  message: string;
  actionText: string;
  actionLink?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ message, actionText, actionLink, onAction }) => {
  return (
    <div style={{ padding: 'var(--sp-6) 0' }}>
      <p style={{ color: 'var(--washi-dim)', marginBottom: 'var(--sp-4)' }}>
        {message}
      </p>
      {onAction ? (
        <button onClick={onAction} className="btn-text" type="button">
          {actionText}
        </button>
      ) : actionLink ? (
        <Link to={actionLink} className="btn-text">
          {actionText}
        </Link>
      ) : null}
    </div>
  );
};
