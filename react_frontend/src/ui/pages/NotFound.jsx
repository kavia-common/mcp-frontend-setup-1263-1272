import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

/**
 * PUBLIC_INTERFACE
 * NotFound shows a friendly 404 page with navigation back to Home.
 */
export default function NotFound() {
  return (
    <section className="page">
      <h1 className="title">404</h1>
      <p className="subtitle">The page you are looking for does not exist.</p>
      <Link to="/" className="btn">Go Home</Link>
    </section>
  );
}
