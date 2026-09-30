# Rhys & Teniola Wedding Website

A Vite and React wedding website with event details, wedding-party galleries, an RSVP form, and gift-registry information.

## Development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
npm run preview
```

## Source layout

- `src/components/` contains reusable UI and composed landing-page sections.
- `src/pages/` contains route and landing-page feature entry points.
- `src/data/` contains content-heavy page data and image metadata.
- `src/config/` contains shared application configuration such as navigation.
- `src/hooks/` contains reusable browser and interaction behavior.
- `src/styles/` contains feature-specific page styles.
- `src/assets/images/` contains source images transformed by Vite Imagetools.

Page components should remain focused on composition. Put repeated rendering in `components`, static content collections in `data`, and behavior shared by multiple components in `hooks`. Keep component-only CSS beside its component; place styles shared by a page feature in `styles`.

## Deployment

The production build uses the `/react_rsvp/` base path for GitHub Pages. The deployment workflow is defined in `.github/workflows/deploy.yml`.
