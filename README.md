# Privacy & Prep — Astro Starter

Static affiliate-friendly site with Astro + MDX + Tailwind. Centralized affiliate placeholders in `affiliate/links.json` and masked links at `/go/<slug>/`.

## Quick Start
1) Install Node LTS (>=18).
2) `npm install`
3) `npm run dev`

## Deploy (Vercel)
- Import this repo into Vercel → framework = Astro → deploy.
- Add your custom domain (privacyandprep.com) in Vercel → follow DNS steps.

## DNS (Bluehost → Vercel)
- In Bluehost DNS, change nameservers to Vercel **OR** add the two A records + CNAME Vercel provides.
- Wait for propagation.

## Content
- Write MDX files in `/content/guides/...` (see samples).
- Use product links via `/go/<slug>/` (slugs live in `affiliate/links.json`). Update one file to change links site‑wide.

## Components
- `ProductCard`, `ProsCons`, `SpecTable`, `ChecklistItem`, `CTABox` available under `src/components`.

## SEO
- Sitemap + robots via `@astrojs/sitemap`.
