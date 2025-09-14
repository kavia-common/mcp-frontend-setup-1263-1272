import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './layout.css';

/**
 * PUBLIC_INTERFACE
 * Layout provides the common shell (navbar, content area, footer).
 * Params:
 *  - children: React node to render in the main content area.
 */
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}
