# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (Vite)
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run lint       # ESLint
npm run deploy     # build + push to gh-pages branch (GitHub Pages)
```

There is no test suite.

## Architecture

**Stack:** React 19 + Vite + Tailwind CSS 3 + react-router-dom v7. Deployed to GitHub Pages via `gh-pages`.

### Routing & page structure

`App.jsx` wraps everything in `ThemeProvider → LanguageProvider → Router`. There are two routes:
- `/` — the main landing page, composed of section components: `Hero → About → Products → Impact → Contact`
- `/hifzqalb` — standalone product landing page (`src/pages/HifzQalb.jsx`)

`Header` and `Footer` render on every route.

### Internationalisation (English / Bangla)

All UI copy lives in the `translations` object exported from `src/contexts/LanguageContext.jsx` — nothing is hardcoded in components. Every component that needs text calls `const { t } = useLanguage()` and reads from `t`.

Language is resolved in priority order: `?lang=` URL param → `localStorage` → browser `navigator.language`. Switching language sets `lang-bn` on `<html>`, which swaps all display/serif fonts to Hind Siliguri via a global CSS rule in `index.css`.

When adding or changing any visible text, update both `translations.en` and `translations.bn`.

### Theme (light / dark)

`ThemeContext` adds/removes the `dark` class on `<html>`. Tailwind's `darkMode: 'class'` handles the rest. User preference is persisted in `localStorage` under the key `hidayasoft-theme`.

### Design tokens (Tailwind)

Custom palette defined in `tailwind.config.js`:
- `primary` — emerald greens (brand colour)
- `gold` — amber/warm accent
- `ink` — deep neutral surfaces used for dark mode backgrounds

Custom font families: `font-sans` (Inter), `font-display` (Plus Jakarta Sans), `font-serif` (Playfair Display), `font-arabic` (Amiri). Bangla text uses `font-bangla` / `Hind Siliguri`.

### Products section pattern

`Products.jsx` merges translation data with a static `META` array that holds non-translatable metadata (status badge, preview component, `href` for external links, `slug` for internal routes). Each product card renders a preview component from `ProductPreviews.jsx`. To add a new product: add an entry to `translations.en.products.items` + `translations.bn.products.items`, and a corresponding entry in `META`.

### Reveal animation

`Reveal.jsx` is a lightweight scroll-entrance wrapper using `IntersectionObserver`. Wrap any block in `<Reveal>` (optionally with a `delay` prop in ms) to animate it in when it scrolls into view.

### SEO

`react-helmet-async` manages `<head>` tags. Meta titles, descriptions, og:* tags, and hreflang alternates are set in `App.jsx` using values from `t.seo`. The canonical URL switches between `hidayasoft.com/` (English) and `hidayasoft.com/?lang=bn` (Bangla).

---

## Contribution Guidelines

**Tone & language:** Maintain a professional, respectful, faith-conscious tone. Spell Islamic terms fully and respectfully. Avoid slang or culturally inappropriate references.

**Content:** When using Quran verses or Hadith as sample data, use authentic references and mark them clearly. Do not fabricate or use unverified religious content.

**File naming:** kebab-case for files (`masjid-dashboard.js`), PascalCase for React components (`PrayerWidget.jsx`).

**Design:** Simple, modern, minimal. Use accessible colour contrasts. Islamic-inspired aesthetics (geometric patterns, calligraphy motifs, calming tones) where appropriate.

**Faith alignment:** All contributions must respect Islamic values and ethics. Nothing that contradicts Islamic principles.
