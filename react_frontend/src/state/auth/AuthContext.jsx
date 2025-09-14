import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';

// Simple localStorage keys for mock auth
const AUTH_KEY = 'mcp_auth_user';

const AuthContext = createContext(null);

/**
 * PUBLIC_INTERFACE
 * useAuth exposes authentication state and actions.
 * Returns:
 *  - user: object | null
 *  - isAuthenticated: boolean
 *  - login({ email, password }): Promise<void> mock login
 *  - logout(): void clears session
 */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}

/**
 * PUBLIC_INTERFACE
 * AuthProvider wraps the app and provides mock authentication state.
 * Persisted in localStorage for demo purposes. Replace with real API as needed.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (raw) {
        setUser(JSON.parse(raw));
      }
    } catch {
      // ignore parsing errors in demo
    }
  }, []);

  const login = async ({ email, password }) => {
    // Mock delay
    await new Promise((r) => setTimeout(r, 400));
    // Very basic demo validation
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    const mockUser = { email, name: email.split('@')[0] || 'User', roles: ['user'] };
    localStorage.setItem(AUTH_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
