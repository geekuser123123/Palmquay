# Palmquay: Website

A one-page site for Palmquay, which provides Solo and self-directed 401(k) plan support from an
office in North Miami Beach, Florida (serving Miami). It's static with no dependencies, built with Node and hosted on
**Cloudflare** (Workers static assets via `wrangler.jsonc`, or Pages).

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check (fails while placeholders remain)
```

## Deploy to Cloudflare

**Workers (current setup):** Workers & Pages → Create → Import a repository → this repo.
Build command `npm run build`, deploy command `npx wrangler deploy`. `wrangler.jsonc` serves `./dist`.
Every push to the branch redeploys automatically.

**Pages (alternative):** Build command `node build.mjs`, output directory `dist`.

Security headers and redirects live in `src/static/_headers` and `src/static/_redirects`, which
are copied into `dist/` and applied by Cloudflare. After the first deploy, set `site.url` in
`site.config.mjs` to the live address (or custom domain) so canonicals, the sitemap and the form's
thank-you redirect are correct.

## Contact form (n8n)

The meeting form posts to an **n8n Webhook**, and the n8n workflow routes each submission
(email, sheet, CRM) and redirects the visitor to `/thank-you/`. Put the webhook's production URL
in `form.webhookUrl` in `site.config.mjs`. Until then the form shows a "not connected yet" notice
and won't send. Setup steps: `docs/N8N-FORM-SETUP.md`.

## Office

**99 NW 183rd St, North Miami Beach, FL 33169** (storefront office). Phone: **(786) 460-5530**.

## Structure

The homepage (`/`) holds every section, each reachable from the menu and the sticky section bar:
Services · How it works · Who does what · 401(k) basics · FAQ · About · Visit & contact (meeting form).
`/privacy-policy/`, `/terms/` and `/disclosures/` are separate pages under Florida law,
plus `/thank-you/` and `404.html`.

## Design

- **Palette:** deep ocean `#0F2E33`, flamingo `#D9466C` (buttons), aqua `#5CC8BC`, pink `#F7A8BC`, shell `#FCFAF6`
- **Type:** DM Serif Display (display) and Instrument Sans (text), both self-hosted
- **Logo:** a rounded diamond with a palm leaning over a wooden quay above the water (`src/brand.mjs`)
- **Hero:** drone video past Brickell Key toward the Miami skyline (desktop only; phones get the poster image)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
