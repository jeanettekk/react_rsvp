# Rhys & Teniola Wedding

An anime-inspired, scroll-driven wedding invitation for Saturday, 27 February 2027. The landing page is presented as a deluxe manga edition, with the couple's real photograph and wedding information kept at the centre of the experience.

## Local development

```bash
npm install
npm run dev
```

Run `npm run lint` and `npm run build` before publishing. The production build also creates `dist/404.html`, allowing the `/rsvp` route to survive direct GitHub Pages refreshes.

## Content

Wedding details, navigation, story prompts, schedule entries, wedding-party placeholders, and venue links live in [`src/data/wedding.js`](src/data/wedding.js). Replace the clearly marked story and wedding-party placeholders when final copy and portraits are ready.

The live Google RSVP form remains embedded at `/rsvp`.

## Deployment

The Vite and router base path is `/react_rsvp/`, matching the GitHub Pages URL.

```bash
npm run deploy
```
