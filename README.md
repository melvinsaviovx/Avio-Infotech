# Avio Infotech · ATELIER (Angular 21)

This is the edited version of the user-supplied Avio Infotech Angular website. It retains the existing Angular routes and uses the user's supplied metallic AVIO logo.

## Run locally (Node 22 recommended)

```bash
npm ci
npm start
```

Open http://localhost:4200

To create the production build:

```bash
npm run build
```

Deploy to Vercel with the Angular framework preset. The project includes `vercel.json` and SPA routing rewrites.

## Changes in this edition

- **Official supplied logo** replaces previous art in brand PNG/WebP, hero, header, and favicon; footer no longer repeats the small pictogram.
- Removed decorative arrow glyphs throughout the site.
- Rebuilt the homepage with an editorial AVIO INFOTECH headline, restrained typography and direct expertise/contact calls-to-action.
- Created `src/app/components/tech-field.component.ts`: an actual canvas animation (connections, nodes, orbits, pulse arcs and pointer-follow interaction). It pauses when off-screen or the tab is hidden, renders a still image for users requesting reduced motion, and adds **no external JavaScript packages**.
- Added `src/atelier.css`, loaded after the original two CSS files, with coordinated page-level refinement, hover/focus animations, and responsive layouts.
- Contact dropdown/input/textarea retain matching styles. The enquiry form validates and creates a **local summary**; a copy action and a `tel:` link work. **No backend delivery is falsely claimed**.
- Kept genuine services, company pages, leadership, and Archovexa venture content.

## Important production checklist

- Verify navigation, pointer/keyboard interactions and 360px/390px/768px/1440px layouts in actual browsers.
- Test `npm run build` and address compiler/audit findings before deploying.
- The enquiry form **does not send messages to Avio Infotech**. To add actual form submission, configure a real verified mailbox or backend endpoint and add anti-spam protection, rate limits and privacy handling. Until then, users can call the publicly listed phone number.
- Review and approve privacy and terms copy before publishing. Reconfirm founder photos hosted on avioinfotech.in; the current pages use those URLs.
- Update the social/OG metadata if the canonical domain changes.
- Check vendor, font and dependency licensing and the accessibility of animations on actual mobile devices.

## Design constraints

- Primary palette: `#000000` / `#ffffff`; deep cobalt `#2c3480` as a selective accent.
- No false statistics, testimonials, customer logos, or fabricated realtime metrics.
- Canvas imagery is **generative decorative motion**, not a live status dashboard.
