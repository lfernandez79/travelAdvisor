# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies (first time only)
npm run dev      # start Vite dev server at http://localhost:5173 (or 5174 if port is taken)
npm run build    # build to dist/
npm run preview  # preview the production build
```

## Architecture

Single-page dashboard with six independent API-driven widgets. Each widget is an ES module in `src/modules/` that registers a click event listener and writes results into its own card div.

| Widget | Module | API |
|---|---|---|
| Airport Finder | `src/modules/airport.js` | `airport-info.p.rapidapi.com` — IATA code lookup (key in `.env`) |
| World Time | `src/modules/timezone.js` | `timeapi.io/api/time/current/zone` — free, no key |
| Currency Converter | `src/modules/currency.js` | `api.exchangerate-api.com/v4/latest` — free, no key, CORS-enabled |
| Weather | `src/modules/weather.js` | `wttr.in/{city}?format=j1` — free, no key, returns temp/conditions/humidity/wind |
| Unit Converter | `src/modules/converter.js` | No API — pure JS math (°C↔°F, km↔mi, kg↔lbs, L↔gal) |
| Country Info | `src/modules/country.js` | `restcountries.com/v3.1/name/{name}` — free, no key, returns flag/capital/population/languages/currency |

`src/main.js` is the Vite entry point — it only imports the six modules.

## Environment Variables

Copy `.env.example` to `.env` and fill in the key. Vite exposes `VITE_` prefixed vars via `import.meta.env`.

```
VITE_AIRPORT_API_KEY=your_rapidapi_key_here
```

The RapidAPI key is only needed for the Airport Finder widget. The other two APIs are free with no authentication. In production (Netlify), set `VITE_AIRPORT_API_KEY` in the Netlify dashboard under Site configuration → Environment variables.

## Result Rendering Pattern

Each module follows the same pattern to avoid the old jQuery global-clear bug:
1. Look for an existing `.{widget}-result` element inside its card div and remove it
2. Create a new `<ul>` with that class, populate it with `<li>` elements, and append it

This scopes DOM updates to each card so triggering one widget never clears another's results.

## Design System

**Color palette:**
- Body background: diagonal gradient `#7a9baa → #5c7f8a` (sky/ocean tones)
- Card background: `#f8f9fa` (near-white, contrasts against the body)
- Card header: animated gradient `#f05f57 → #347B98` (coral sunset to steel blue)
- Accent / focus ring: `#347B98`
- Footer background: `#3d6470`

**Card hover effect:** blue-tinted shadow `rgba(52, 123, 152, 0.4)` + 3px upward lift via `translateY(-3px)`

**Responsive layout:** cards use `col-12 col-md-6 col-lg-4` — stack on mobile, 2-col on tablet, 3-col on desktop.

**Footer:** CSS SVG wave divider transitions from the body gradient into the footer, followed by API attribution links and copyright. No external image dependencies.

## Static Assets

Favicons and images live in `public/airPlane/`. Vite serves `public/` at the root, so references in `index.html` use `/airPlane/...` paths.

## Currency Notes

The currency dropdown only includes currencies supported by the ECB via `exchangerate-api.com`. HRK (Croatian Kuna) and RUB (Russian Ruble) were intentionally removed — HRK was retired when Croatia adopted the Euro, and RUB is no longer available due to sanctions.
