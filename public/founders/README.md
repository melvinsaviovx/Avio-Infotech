# Founder portraits (separate asset folder)

This folder stores founder-specific image assets independently of the AVIO brand logo in `public/brand/`.

The uploaded project does not contain the founders' actual photographs. The leadership page continues to use the existing live image URLs:

- Melvin Savio V X: https://avioinfotech.in/melvin.jpg
- Shalvin Savio V X: https://avioinfotech.in/shalvin.jpeg

If those URLs are unavailable, the local `melvin-monogram.svg` and `shalvin-monogram.svg` files are shown as branded fallbacks (not actual portraits).

**To make the portraits fully local:** copy authorised photos into this folder, for example `melvin.jpg` and `shalvin.jpeg`, then change the `image` values in `src/app/core/site-data.ts` to `/founders/melvin.jpg` and `/founders/shalvin.jpeg`. No component changes are necessary.
