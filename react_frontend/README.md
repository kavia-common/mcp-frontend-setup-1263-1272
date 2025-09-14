# MCP React Frontend

A ready-to-run React frontend scaffold for the MCP application with routing, authentication context (mock), theme handling, and a clean UI shell.

## Highlights
- React 18 with React Router v6
- Pages: Home, Dashboard (protected), Login, 404
- Contexts: Auth (mock), Theme (light/dark)
- Components: Navbar, Footer, Layout
- Service layer: api.js with placeholder methods
- Minimal CSS using CSS variables and responsive layout

## Quick Start
- Install: `npm install`
- Run dev server: `npm start` (http://localhost:3000)
- Run tests: `npm test`
- Build: `npm run build`

## Structure
```
src/
  routes/
    AppRouter.jsx
    ProtectedRoute.jsx
  services/
    api.js
  state/
    auth/
      AuthContext.jsx
    theme/
      ThemeContext.jsx
  ui/
    Layout/
      Layout.jsx
      layout.css
    components/
      Navbar.jsx
      navbar.css
      Footer.jsx
      footer.css
    pages/
      Home.jsx
      Dashboard.jsx
      Login.jsx
      NotFound.jsx
      pages.css
  App.js
  App.css
  index.css
  index.js
```

## Configuration
No environment variables are required for this scaffold. Replace services/api.js with real endpoints when backend is available.

## Notes
- Authentication is mocked via localStorage. Replace AuthContext with real auth flows as needed.
- Theme is persisted in localStorage and applied to `:root` via data-theme.
