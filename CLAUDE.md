# SMG Website — Project Context

## What this is
Marketing website for Standard Method Group (standardmethodgroup.com).
5-page static site built with Astro. Hosted on GitHub Pages.

## Architecture
- Framework: Astro (static output, minimal client JS: view transitions and motion)
- CSS: Vanilla CSS with custom properties in src/styles/tokens.css
- Form: Formspree (endpoint: TBD)
- Analytics: Cloudflare Web Analytics (beacon in src/layouts/Base.astro)
- Hosting: GitHub Pages (repo: ArtificialDegeneracy/standardmethodgroup.com,
  custom domain via public/CNAME; deploy via .github/workflows/deploy.yml)
- DNS: Google/Squarespace Domains (nameservers ns-cloud-*.googledomains.com)
- Note: NOT on Cloudflare Pages despite earlier notes; Cloudflare is only
  used for the Web Analytics beacon

## Design system
- Colors: Navy #1B2A4A, Warm White #F7F5F2, Teal #2A7D6E, Deep Teal #1F5F53
- Fonts: Inter (headings, 600/500), Source Serif 4 (body, 400/600)
- Spacing: 8px base unit (8, 16, 24, 40, 64, 96)
- Max width: 1120px (960px for focused reading sections)
- Border radius: 6px on buttons and form fields

## Brand voice rules (for any copy generation)
Canonical source is the `smg-branding` skill (~/.claude/skills/smg-branding/SKILL.md).
Keep this section in sync with it.

- No "digital transformation," "synergy," "streamline," "tech stack," or "SaaS"
  in visible copy
- No em dashes in new copy. Use a comma, colon, or full stop; split the sentence
  if it only holds together with a dash. En dashes in numeric ranges (2-4 weeks,
  $8,000-$12,000) and hyphens in compounds are fine. Existing copy stays as-is;
  this applies going forward.
- Write like a peer talking to a business owner, not a vendor pitching a client
- Lead with outcomes, not features
- Technical terms (automation, AI, integration, workflow) are fine when they make
  the sentence clearer or match how a buyer searches. Explain the solution in plain
  language first, define the term if an owner might not know it, and never use a
  technical term as the headline benefit
- Never promise revenue or outcomes outside SMG's control. Results appear on the site
  only with a baseline, an after figure, and client approval (see src/data/results.json)
- Plain nouns and concrete numbers beat abstractions. Name the actual thing
- No exclamation points. No rhetorical questions as headlines
- Sentence case for headings, not Title Case

## Key files
- src/data/results.json — client results; only entries with approved: true render
- src/data/seo.json — all title tags and meta descriptions
- src/data/schema.json — LocalBusiness structured data
- src/styles/tokens.css — all design tokens
- src/layouts/Base.astro — HTML shell (nav, footer, head, schema)

## Testing
- Run `npm run build` after any change to verify clean build
- Check responsive behavior at 375px (mobile) and 1440px (desktop)
- Validate schema at https://search.google.com/test/rich-results
