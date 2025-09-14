import React from 'react';
import './footer.css';

/**
 * PUBLIC_INTERFACE
 * Footer renders a simple sticky footer with app info.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <span>MCP Frontend</span>
      <span>•</span>
      <a
        href="https://react.dev/"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
        title="React Docs"
      >
        React
      </a>
    </footer>
  );
}
