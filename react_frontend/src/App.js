import React from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';

/**
 * PUBLIC_INTERFACE
 * App is a lightweight wrapper returning the AppRouter.
 * Maintained for compatibility with existing tests/imports.
 */
export default function App() {
  return <AppRouter />;
}
