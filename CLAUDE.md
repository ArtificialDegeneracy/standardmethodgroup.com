# SMG Website — Project Context

## What this is
Marketing website for Standard Method Group (standardmethodgroup.com).
5-page static site built with Astro. Hosted on Cloudflare Pages.

## Architecture
- Framework: Astro (static output, zero client JS)
- CSS: Vanilla CSS with custom properties in src/styles/tokens.css
- Form: Formspree (endpoint: TBD)
- Analytics: TBD (Plausible or GA4)
- Hosting: Cloudflare Pages

## Design system
- Colors: Navy #1B2A4A, Warm White #F7F5F2, Teal #2A7D6E, Deep Teal #1F5F53
- Fonts: Inter (headings, 600/500), Source Serif 4 (body, 400/600)
- Spacing: 8px base unit (8, 16, 24, 40, 64, 96)
- Max width: 1120px (960px for focused reading sections)
- Border radius: 6px on buttons and form fields

## Brand voice rules (for any copy generation)
- No "automation," "AI," "digital transformation," "leverage," "synergy,"
  "streamline," "optimize," or "empower" in visible copy
- No jargon: no "workflows," "integrations," "tech stack," or "SaaS"
- Write like a peer talking to a business owner, not a vendor pitching a client
- Lead with outcomes, not features

## Key files
- src/data/seo.json — all title tags and meta descriptions
- src/data/schema.json — LocalBusiness structured data
- src/styles/tokens.css — all design tokens
- src/layouts/Base.astro — HTML shell (nav, footer, head, schema)

## Testing
- Run `npm run build` after any change to verify clean build
- Check responsive behavior at 375px (mobile) and 1440px (desktop)
- Validate schema at https://search.google.com/test/rich-results
