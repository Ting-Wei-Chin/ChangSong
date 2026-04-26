# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **香頌日和 (Chanson Soleil)** — a luxury residential development in Taipei's Da'an District. Single-page React app with cinematic scroll animations.

## Commands

```bash
npm run dev       # Start dev server (Vite, http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

No test suite exists in this project.

## Architecture

**Stack:** React 18 + Vite + Tailwind CSS v3 + Framer Motion + Lenis smooth scroll

**Key design pattern — two central config files:**
- `src/theme.js` — single source of truth for all design tokens (colors, typography, animation timings, layout). `tailwind.config.js` imports directly from this file, so editing `theme.js` automatically updates all Tailwind utility classes site-wide.
- `src/assets.js` — all media references (video, section backgrounds, floor plans, gallery images). All values default to `null`, which triggers CSS gradient placeholders. Replace `null` with a path like `'/images/hero.jpg'` to use real media. Media files go in `public/images/` or `public/videos/`.

**Smooth scroll:** Lenis is initialized globally in `main.jsx` and exposed as `window.__lenis` so Framer Motion's `useScroll` stays in sync. Do not initialize Lenis again in components.

**Page structure** (`App.jsx`): linear single-page layout — Navbar → HeroSection → PoeticSection → ImageRevealSection → FeatureSection → UnitsSection → LocationSection → GallerySection → ContactSection → Footer.

**Scroll-driven animations:** Components use Framer Motion's `useScroll` + `useTransform` with a `ref` pinned to the section element. `ImageRevealSection` uses a 250vh sticky container to create a scroll-scrubbed wipe effect between two images.

**Tailwind custom tokens** available as utilities: `bg-gold`, `text-dark`, `bg-cream`, `font-serif`, `tracking-wide/wider/widest`, `max-w-site`, etc. — all defined in `theme.js` → `tailwind.config.js`.

**Section IDs** used for in-page navigation: `#hero`, `#features`, `#units`, `#location`, `#gallery`, `#contact`.
