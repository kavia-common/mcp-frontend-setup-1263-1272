import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../state/auth/AuthContext';

/**
 * PUBLIC_INTERFACE
 * ProtectedRoute guards child components and redirects unauthenticated users to /login.
 * Params:
 *  - children: React node to render when authenticated.
 * Returns children or a redirect to /login with state.from for post-login navigation.
 */
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}
