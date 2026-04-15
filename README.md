# Travel Advisor
Travel Advisor is a web app that allows frequent travelers to keep a dashboard of important information across six widgets: airport lookup, world time, weather, currency conversion, unit conversion, and country info. Widgets are organized into two tabs — **Travel** and **Reference** — keeping the interface clean and uncluttered. The app is designed to be easy to use and accessible on both phones and computers.

[![Netlify Status](https://api.netlify.com/api/v1/badges/084cfa77-9581-4632-9e57-14049a250313/deploy-status)](https://app.netlify.com/sites/traveladvisor/deploys)
![GitHub top language](https://img.shields.io/github/languages/top/lfernandez79/travelAdvisor?label=JavaScript)

## User Story
As a frequent traveler, I often need to know important information about the places I'm visiting. Travel Advisor allows me to keep a dashboard of this information, including airport locations, timezones, and currency exchange rates. With this information at my fingertips, I can travel with confidence and make the most of my trips.

## [Try it](https://traveladvisor.netlify.app/)

## Technology
The following technologies are used in Travel Advisor:
- HTML
- CSS
- Vanilla JavaScript (ES Modules)
- Bootstrap 5
- Vite (build tool)
- REST APIs

Here are some screenshots of Travel Advisor in action:

<img src="public/airPlane/travelAdvisor.png" width="70%">

## Getting Started

```bash
npm install
npm run dev      # start local dev server at http://localhost:5173
npm run build    # build for production
```

Copy `.env.example` to `.env` and add your RapidAPI key for the Airport Finder widget:

```
VITE_AIRPORT_API_KEY=your_rapidapi_key_here
```

## APIs
Travel Advisor uses the following APIs:

1. [Airport Info](https://rapidapi.com/Active-api/api/airport-info/) — Provides airport details by IATA code (e.g. DFW, JFK). Requires a RapidAPI key stored in `.env`.

2. [TimeAPI](https://timeapi.io/) — Provides the current local time for any timezone. Free, no API key required. Select from a dropdown of major world cities grouped by region.

3. [ExchangeRate API](https://www.exchangerate-api.com/) — Provides live currency exchange rates. Free, no API key required.

4. [wttr.in](https://wttr.in/) — Provides current weather conditions by city name (temperature, description, humidity, wind). Free, no API key required.

5. [REST Countries](https://restcountries.com/) — Provides country details by name (flag, capital, population, languages, currency, region). Free, no API key required.

The Unit Converter widget requires no API — all conversions (°C↔°F, km↔mi, kg↔lbs, L↔gal) are computed locally.

## Accomplished

> ~~Migrate from jQuery to vanilla JavaScript~~ — Completed. Migrated to vanilla JS ES modules with the Fetch API, replaced MomentJS with native `Intl.DateTimeFormat`, and upgraded Bootstrap 4 to Bootstrap 5.

> ~~UI modernization~~ — Completed. Refreshed design with a cohesive color palette (coral-to-steel-blue card headers, ocean-tone body gradient), responsive card layout, improved input styling, and a clean SVG wave footer with API credits.

> ~~Weather widget~~ — Completed. Shows current conditions, temperature (°C/°F), feels-like, humidity, and wind speed for any city via wttr.in.

> ~~Unit Converter widget~~ — Completed. Converts temperature, distance, weight, and volume using pure JS math — no API required.

> ~~Country Info widget~~ — Completed. Shows flag, capital, region, population, languages, and currency for any country via REST Countries.

> ~~Tabbed interface~~ — Completed. Six widgets organized into two pill tabs (Travel / Reference) to keep the dashboard clean and simple.
