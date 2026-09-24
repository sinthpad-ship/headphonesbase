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
