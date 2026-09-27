# HeadphonesBase

International headphone selection platform, statically exported with Next.js and deployed to GitHub Pages at https://headphonesbase.com.

## Develop and verify

Node 22, Python 3. Run `npm ci`, `npm run dev` for development. Release: `npm run build`, `npm run validate`, `npx playwright install chromium`, `npx playwright test`. CI checks desktop and mobile user journeys before merging; Pages builds and validates the export again. Keep `public/CNAME`, static export and trailing slashes.

## Editorial data

`data/headphones.json` contains 50 models with manufacturer source URLs, review dates, explicit ANC status and sparse specifications. Missing values mean not verified, not zero. Dates are evidence-review dates and must only advance after another review. Use-case tags, criteria and shortlists live separately in `lib/categories.ts`; they are editorial interpretations, not measured rankings. Preserve existing slugs. Source images identify exact models; finishes and impedance variants can differ. Images load lazily and have reserved dimensions and a manufacturer-link fallback.

When adding a model, read the primary source, capture only supported fields, note variant-specific conditions, confirm the photograph against the source and run validation. Do not infer neutrality, comfort, latency or ANC performance from marketing specifications.

## Commerce

`data/offers.json` is intentionally empty. `lib/commerce.ts` defines a separate schema for approved merchant offers, with region, evidence, review and expiry dates. No fabricated affiliate links, stock or prices. Before activating offers: obtain actual program approval and URLs, verify image-use permissions for any licensed commercial feeds, implement runtime expiry checks or a daily rebuild, then verify disclosure and `rel="sponsored"` labeling. Do not change editorial order based on commissions. No analytics or advertising trackers are installed.

## Release scope

50 profiles; 13 categories; 9 selection guides; shareable comparisons of up to four models; combined catalogue filters; canonical metadata, Product and Breadcrumb structured data; 80 sitemap URLs. Product markup intentionally has no invented Offer or AggregateRating. Search engine indexing is not guaranteed by a sitemap. Search Console ownership and affiliate account onboarding require the owner's accounts.

## Knowledge release (2026-09-27)
History and technology have stable IDs and primary-source provenance in separate JSON collections. `scripts/export-data.py` builds versioned static JSON records and a graph before Next export. Unknown manufacturing entities and succession links remain unknown; `branded_by` is intentionally different from `manufactured_by`. Numeric impedance excludes ambiguous variant lists. Static snapshots are public, not a live API, MCP server or paid data service.

Four Audeze profiles extend the catalogue to 54. MM-100 cable-table conflict is visible. All legacy image references are retained but marked rights-unverified; no photograph displays until rights, permission/license URL and attribution are recorded. This is a rights gate, not a claim that original assets are broken.

The timeline is an initial set of six milestones; additional telegraphy, military, ANC, TWS, DSP and spatial-audio history is not yet covered. Five initial technology terms are not a complete encyclopedia. Program registration/tax validation is not final affiliate approval; offers remain empty.
