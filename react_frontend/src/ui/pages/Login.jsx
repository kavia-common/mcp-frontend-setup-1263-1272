import React, { useState } from 'react';
import { useAuth } from '../../state/auth/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import './pages.css';

/**
 * PUBLIC_INTERFACE
 * Login provides a basic form to authenticate (mocked).
 * On success redirects to intended route or dashboard.
 */
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const [form, setForm] = useState({ email: '', password: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await login(form);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err?.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="page narrow">
      <h1 className="title">Login</h1>
      <form className="card form" onSubmit={onSubmit} aria-busy={submitting}>
        {error && <div className="alert">{error}</div>}
        <label className="field">
          <span>Email</span>
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={onChange}
          />
        </label>
        <label className="field">
          <span>Password</span>
          <input
            required
            type="password"
            name="password"
            placeholder="••••••••"
            value={form.password}
            onChange={onChange}
          />
        </label>
        <button className="btn primary" type="submit" disabled={submitting}>
          {submitting ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
      <p className="muted small">
        Tip: Use any email and password to sign in (mock auth).
      </p>
    </section>
  );
}
