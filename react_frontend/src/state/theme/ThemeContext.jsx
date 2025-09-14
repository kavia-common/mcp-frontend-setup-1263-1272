import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const THEME_KEY = 'mcp_theme';
const ThemeContext = createContext(null);

/**
 * PUBLIC_INTERFACE
 * useTheme exposes theme control.
 * Returns:
 *  - theme: 'light' | 'dark'
 *  - toggleTheme(): void
 *  - setTheme(next): void
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

/**
 * PUBLIC_INTERFACE
 * ThemeProvider manages and applies theme to the document root.
 * Uses localStorage to persist the user's selection.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'dark' || saved === 'light') {
        setTheme(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
