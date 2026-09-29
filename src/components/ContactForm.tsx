import React, { useState } from 'react';

type FormState = 'default' | 'loading' | 'success' | 'error';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('default');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrors({});

    // Simulate API call
    setTimeout(() => {
      // For demonstration, randomly succeed or fail
      if (Math.random() > 0.3) {
        setFormState('success');
      } else {
        setFormState('error');
        setErrors({ email: 'Please provide a valid email address.' });
      }
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <div style={{ padding: 'var(--sp-5) 0' }}>
        <p style={{ color: 'var(--washi)', marginBottom: 'var(--sp-4)' }}>
          Message received. I'll get back to you shortly.
        </p>
        <button onClick={() => setFormState('default')} className="btn-text">
          send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {formState === 'error' && Object.keys(errors).length === 0 && (
        <div style={{ marginBottom: 'var(--sp-5)', color: 'var(--seal-bright)', fontSize: 'var(--text-sm)' }}>
          Something went wrong. Please try again.
        </div>
      )}

      <div className={`input-group ${errors.name ? 'has-error' : ''}`}>
        <label htmlFor="name" className="input-label">Name</label>
        <input type="text" id="name" name="name" className="input-field" required aria-invalid={!!errors.name} />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className={`input-group ${errors.email ? 'has-error' : ''}`}>
        <label htmlFor="email" className="input-label">Email</label>
        <input type="email" id="email" name="email" className="input-field" required aria-invalid={!!errors.email} />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className={`input-group ${errors.message ? 'has-error' : ''}`}>
        <label htmlFor="message" className="input-label">Message</label>
        <textarea id="message" name="message" className="input-field" rows={4} required aria-invalid={!!errors.message} />
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      <button 
        type="submit" 
        className={`btn ${formState === 'loading' ? 'loading' : ''}`}
        disabled={formState === 'loading'}
        aria-disabled={formState === 'loading'}
      >
        {formState === 'loading' ? 'sending' : 'send message'}
      </button>
    </form>
  );
};
