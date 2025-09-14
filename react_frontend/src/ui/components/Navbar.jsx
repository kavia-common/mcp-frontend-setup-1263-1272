import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../../state/theme/ThemeContext';
import { useAuth } from '../../state/auth/AuthContext';
import './navbar.css';

/**
 * PUBLIC_INTERFACE
 * Navbar renders application navigation, auth actions, and theme toggle.
 */
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">
          MCP
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Dashboard
          </NavLink>
        </nav>
      </div>
      <div className="nav-right">
        <button
          className="btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        {isAuthenticated ? (
          <>
            <span className="user-pill" title={user?.email || ''}>
              {user?.name || 'User'}
            </span>
            <button className="btn outline" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
