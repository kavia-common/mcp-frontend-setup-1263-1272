import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import './pages.css';

/**
 * PUBLIC_INTERFACE
 * Home page shows a welcome message and backend health placeholder.
 */
export default function Home() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api
      .getHealth()
      .then((res) => {
        if (mounted) setHealth(res);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="page">
      <h1 className="title">Welcome to MCP</h1>
      <p className="subtitle">
        A minimal, extendable frontend ready for your MCP application.
      </p>
      <div className="card">
        <h3>Backend Health</h3>
        {loading ? <p>Checking...</p> : <pre className="pre">{JSON.stringify(health, null, 2)}</pre>}
      </div>
    </section>
  );
}
