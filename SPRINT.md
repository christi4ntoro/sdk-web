# Studio Deki — Sprint Log

- Sprint 1: Foundation
- Sprint 2: Homepage
- Sprint 3: Content pages
- Sprint 4: Insights
- Sprint 5: CSS migration — zero inline styles in components
- Sprint 6: globals.css audit, dead code removed
- Sprint 7: i18n refactor — t() strings to /locales/es.json + /locales/en.json, prep for PT-BR
- Sprint 8: Cookie consent + GA4 — GDPR banner, block tracking until accepted
- Sprint 9: Best practices audit — accessibility, SEO, performance, code quality (report only)
- Sprint 10a: Fix broken items — C1 form field mismatch, A4 form labels, P1 server components
- Sprint 10b: Separate form intents — CTA reduced to email + topic with auto-reply, Contact kept as full qualification
- Sprint 11: Accessibility + SEO fixes — A1, A2, A3, A7, A8, A9, S1, S2, S3, S4
- Sprint 12: Security + Performance — C2, C3, C4, P2, P4. OG image added.
- Sprint 13: Favicon + OG image confirmed working
- Sprint 14: PT-BR — add third locale (one new JSON file)
- Sprint 15: Color token overhaul — new palette, renamed --dk-amber to --dk-accent, --dk-mid to --dk-secondary, fully rounded buttons
- Sprint 16: Mobile-first refactor — all media queries flipped to min-width, padding fixed on mobile
- Sprint 17: MD schema refactor — nested lang frontmatter, :::lang body separators, lib/blog.ts parser updated
- Sprint 18: Article page — breadcrumbs, TOC, progress bar, key takeaways box, related articles, final CTA
- Sprint 19: Homepage latest insights — 3 latest cards, view all button
- Sprint 20: Article processing — manual workflow via Claude.ai chat. Prompt covers takeaways, translation, internal links, image suggestions. ARTICLES.md maintains current article index for link suggestions.
- Sprint 21: Global search in Nav — client-side, full-screen overlay, searches title/excerpt/tags in active language
- Sprint 22: Client logos — SVG mask technique, infinite marquee, theme-aware via currentColor
- Sprint 23: Social networks in footer — LinkedIn + Instagram icons
- Sprint 24: Microcopy — curiosity gap CTAs by article category, manifesto and insights global links updated
- Sprint 25: Micro animations — arrow icon on CTAs with hover translate effect

## Upcoming
- Sprint 26: Accessibility + SEO — A1-A9, S1-S4 from Sprint 9 audit
- Sprint 27: Manifesto to MDX — use next-mdx-remote, map dk-manifesto-* classes, content editable in .mdx file
- Sprint 28: URL-based language routing — /es/ /en/ /pt/ prefixes, per-language OG meta tags.
  Prerequisite: PT-BR content ready and active user base in Europe justifies the investment.
  CHECK ALL IMPLICATIONS BEFORE EXECUTING — especially single-file article structure.