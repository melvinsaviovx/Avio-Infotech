# Avio Infotech — Bespoke Angular 21 Website

A full redesign of the supplied Angular website, using the existing AVIO emblem, a black / warm-white / cobalt palette, substantial live technical motion, and consistent spacing and controls.

## Run locally

Requires a supported Node.js version for Angular 21 (for example Node.js 22.12+ in the Node 22 line).

```bash
npm ci
npm start
```

Open `http://localhost:4200`.

To validate before deployment:

```bash
npm run build
npm audit
npm audit --omit=dev
```

## Site pages

Home, What we do, Our story, Our product (Archovexa), People, Contact, Privacy Policy, Terms of Use, and Not Found.

## Design and UX changes

- Completely replaced the previous layered CSS theme with one dedicated `src/styles.css`.
- Removed decorative section numbers, serial labels, arrow glyphs and the `INDEPENDENT TECHNOLOGY COMPANY` wording throughout the Angular site.
- New responsive editorial hero and prominent official emblem with live HTML canvas network motion, pointer movement, moving paths and controlled blue illumination.
- New navigation, service descriptions and service-to-contact routes, distinct company, venture, leadership and legal sections.
- Founder cards stay black in their default state; hover adds subtle photo treatment only.
- Consistent styled input / select / textarea, with focus and validation states.
- All visible calls to action have destinations or actions. The contact form **does not transmit a message** because no verified, configured backend or email endpoint was supplied. It validates and generates a copyable enquiry. Phone link uses the phone number published on the old site.
- Cookie preferences appear in a **non-blocking** panel on first visit. `Essential only` stores only necessary preference data. `Personalise` lets visitors turn enhanced motion on or off. The `Cookie preferences` footer control opens the panel again. No analytics or advertising pixels are installed. The settings are stored in browser localStorage as `avio_cookie_preferences_v1`.
- Motion respects the operating system's reduced-motion preference and user preference. The animated canvas also pauses in hidden tabs / when not visible.
- The existing founder images are referenced from `avioinfotech.in`; consider self-hosting verified copies before deployment.

## Deployment

A `vercel.json` is included. Confirm the output path with your Angular build (`dist/avioinfotech/browser`) before deploying.

## Publication checks

- Complete `npm ci` and `npm run build` locally (the package registry was not reachable in the development environment).
- Exercise all routes, form validation, mobile menu and cookie settings in a real Angular runtime.
- Confirm contact information, founder photos and the Archovexa outbound link.
- Have a legal professional review the starter Privacy Policy and Terms for your actual hosting, retention and legal obligations.
- Investigate any vulnerabilities reported by `npm audit`; avoid `npm audit fix --force` without reviewing changes.

## Local QA completed

TypeScript parsing: no syntax errors (all 18 `.ts` files). CSS parsed successfully. All static `routerLink` destinations resolve to known routes. No unwanted 01–05 UI counters or the removed company phrase remain. Desktop and mobile hero layout rendered through static markup with no horizontal overflow. **This is not a substitute for an Angular production build or full E2E browser test.**


## Header/footer logo and founder assets

The supplied AVIO mark appears beside the company name in both the top-left navigation and bottom-left footer, using `public/brand/avio-nav-mark.webp`. It is a resized export of the supplied logo (not a newly drawn logo).

Founder-specific image assets now live in `public/founders/`. See that folder's README for replacing the live-site photo URLs with local portrait files; branded SVG monogram fallbacks are included.
