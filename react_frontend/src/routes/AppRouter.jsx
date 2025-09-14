import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../ui/Layout/Layout';
import Home from '../ui/pages/Home';
import Dashboard from '../ui/pages/Dashboard';
import Login from '../ui/pages/Login';
import NotFound from '../ui/pages/NotFound';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from '../state/auth/AuthContext';
import { ThemeProvider } from '../state/theme/ThemeContext';

/**
 * PUBLIC_INTERFACE
 * AppRouter is the main router for the application, registering all routes and wrapping providers.
 * - Routes:
 *    /           -> Home
 *    /dashboard  -> Dashboard (protected)
 *    /login      -> Login
 * - Wraps AuthProvider and ThemeProvider to provide auth and theme state across the app.
 * Returns the full app tree with routing and layout.
 */
export default function AppRouter() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
