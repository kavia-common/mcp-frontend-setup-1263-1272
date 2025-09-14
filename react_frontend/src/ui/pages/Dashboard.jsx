import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../state/auth/AuthContext';
import './pages.css';

/**
 * PUBLIC_INTERFACE
 * Dashboard is a protected page showing placeholder widgets and user context.
 */
export default function Dashboard() {
  const { user } = useAuth();
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    let mounted = true;
    api.getDashboardSummary().then((res) => {
      if (mounted) setSummary(res);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="page">
      <h1 className="title">Dashboard</h1>
      <p className="subtitle">Hello, {user?.name || 'User'}!</p>
      <div className="grid">
        {summary?.widgets?.map((w) => (
          <div key={w.id} className="card">
            <div className="card-title">{w.title}</div>
            <div className="metric">{w.value}</div>
          </div>
        )) || <p>Loading...</p>}
      </div>
      {summary?.lastUpdated && (
        <p className="muted">Last updated: {new Date(summary.lastUpdated).toLocaleString()}</p>
      )}
    </section>
  );
}
