/**
 * ============================================================================
 *  PALMQUAY — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for the page, footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Required items show a marked placeholder
 *    on the page and are listed when you run `node build.mjs`.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://palmquay.kevin-c4h.workers.dev', // no trailing slash — confirm after first Cloudflare deploy
    googleSiteVerification: 'LxOy6ZUOVECz_G50ijhAmLbAMQaZWioxcyJdlC8w2XM', // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Palmquay',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once the fictitious name is registered (Florida Division of Corporations, Sunbiz)
    owner: null, // optional
    foundingYear: null,

    phone: '(786) 460-5530',
    phoneE164: '+17864605530',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed storefront office that receives clients during the
     * posted hours (Google Business Profile "Local store"). The address shows
     * on the site, the map appears and storefront schema is output ONLY once
     * streetAddress and postalCode are real. Until then, marked placeholders.
     */
    locationType: 'office',
    address: {
      streetAddress: '99 NW 183rd St', // real, staffed office — add suite if any
      addressLocality: 'North Miami Beach',
      addressRegion: 'FL',
      postalCode: '33169',
      addressCountry: 'US',
    },
    geo: null, // real coordinates of the office only
    serviceArea: ['Miami, FL'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Eastern Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  /**
   * Contact form — submissions are POSTed to an n8n Webhook (production URL,
   * https://…/webhook/…). The n8n workflow routes them (email, sheet, CRM) and
   * should answer with a redirect to `redirect_to` (the /thank-you/ page).
   * Until webhookUrl is set, the form shows a "not connected yet" notice and won't send.
   * See docs/N8N-FORM-SETUP.md.
   */
  form: { name: 'consultation', provider: 'n8n', webhookUrl: null },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // Pexels video 6345130 — drone past Brickell Key toward the Miami skyline at sunset (Pexels License)
    heroVideo: { webm: '/assets/media/hero.webm', mp4: '/assets/media/hero.mp4', poster: '/assets/media/hero-poster.webp' },
    // Stock photos from Pexels (Pexels License), no identifiable people — sources in docs/MEDIA.md
    images: {
      bay: { src: '/assets/media/bay.webp', pos: '50% 60%', alt: 'Palm-lined causeway and sailboats on Biscayne Bay at dusk' },
      downtown: { src: '/assets/media/downtown.webp', pos: '50% 45%', alt: 'Downtown Miami towers and palm trees under a blue sky' },
      causeway: { src: '/assets/media/causeway.webp', pos: '50% 55%', alt: 'Biscayne Bay and a palm-lined causeway under summer clouds' },
    },
  },
};
