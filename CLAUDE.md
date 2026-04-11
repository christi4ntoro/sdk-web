# Studio Deki — Claude Code Init

## Project
eLearning studio website. Next.js 15 App Router, TypeScript, Tailwind CSS + custom CSS classes, Vercel deployment.

## Stack
- Framework: Next.js 15 (App Router, Turbopack)
- Styling: Tailwind CSS utilities + custom classes in app/globals.css
- Fonts: Plus Jakarta Sans (all weights, single font system)
- Language: TypeScript strict mode
- i18n: JSON locale files in /locales/, t('namespace.key') API, generateMetadata() for server pages
- Theme: Light/dark via CSS custom properties + data-theme on html
- Email: Resend via /api/contact — reads RESEND_TO_EMAIL + RESEND_FROM_EMAIL from env
- Blog/Insights: MD files in content/blog/, read via lib/blog.ts
- Deploy: Vercel, domain studiodeki.co
- Analytics: GA4 via next/third-parties, blocked until cookie consent accepted
- Cookie consent: GDPR banner, persisted in localStorage key: sdk-cookie-consent

## Folder structure
app/                      Pages and API routes
  layout.tsx              Root layout, fonts, metadata, JSON-LD
  globals.css             ALL styles live here. No inline styles in components.
  page.tsx                Homepage (imports home components)
  contact/page.tsx        Server component, metadata export
  services/page.tsx       Server component, metadata export
  insights/page.tsx       Server shell only, imports InsightsContent
  insights/[slug]/page.tsx
  manifesto/page.tsx      Server shell only, imports ManifestoContent
  api/contact/route.ts    Handles both contact form and CTA form via formType field
components/
  layout/
    Nav.tsx               Sticky nav, mobile drawer, inline SVG logo, search trigger
    Footer.tsx            Lang select, theme toggle, inline SVG logo, social icons
  home/
    Hero.tsx
    NumbersBand.tsx
    Services.tsx
    ClientLogos.tsx       SVG mask technique, infinite marquee, theme-aware
    Statement.tsx
    ManifestoTeaser.tsx
    CTASection.tsx        2-field form: email + topic dropdown, auto-reply via Resend
    LatestInsights.tsx    3 latest articles by date
  contact/
    ContactForm.tsx       Full qualification form, client component
  services/
    ServicesContent.tsx   Client component
  insights/
    InsightsContent.tsx   Client component, receives posts as props
    InsightArticle.tsx    Client component — TOC, progress bar, key takeaways, related articles
  manifesto/
    ManifestoContent.tsx  Client component with full ES/EN/PT copy
lib/
  lang-context.tsx        Auto-detect browser lang, localStorage persist, key: sdk-lang
  theme-context.tsx       OS preference + manual toggle, localStorage persist, key: sdk-theme
  blog.ts                 Reads content/blog/*.md via gray-matter + marked
content/blog/             Markdown articles with nested frontmatter
locales/
  es.json                 All Spanish UI strings, namespaced
  en.json                 All English UI strings, namespaced
  pt.json                 All PT-BR UI strings, namespaced
public/
  logos/                  Client SVG logos, currentColor fill, CSS mask in ClientLogos
  blog/[slug]/            Article images: featured.jpg + supporting images
  og-image.jpg            1200x630px social sharing image
scripts/                  CLI tools (none active — article processing is manual via Claude.ai)

## Critical rules — always follow these

### CSS
- ALL styles go in app/globals.css. Zero inline styles in components.
- Never add style={{}} props to JSX elements.
- Never add <style></style> tags inside components.
- Class naming convention: dk-[component]-[element]
- Tailwind only for responsive grid utilities: grid grid-cols-1 md:grid-cols-3 gap-px
- No duplicate rules across sections.
- Typography for p, h2, h3 uses base tokens only: .dk-body, .dk-body-sm, .dk-display-*, etc.
- Never redefine paragraph or heading styles per-component.
- Mobile first: all media queries use min-width, never max-width.
- Base styles are mobile. Desktop overrides at min-width: 769px.

### Architecture
- Pages in app/ are server components with metadata exports.
- Client components use 'use client' and live in components/.
- Never put useLang() or useTheme() in page.tsx files.
- Pattern: page.tsx (server, metadata) → imports ClientComponent (client, hooks)
- Forms: contact form and CTA form use different field sets. API reads formType to distinguish.

### Language
- All copy uses t('namespace.key') from useLang()
- ES is default. Browser language auto-detects on mount.
- PT-BR active in /locales/pt.json
- tutear throughout all ES copy (tú not usted)
- No em dashes in copy. Use commas, colons or periods instead.
- generateMetadata() reads locale for server-rendered metadata.

### Fonts
- Single font: Plus Jakarta Sans via next/font/google
- CSS variables: --font-display and --font-sans both point to Plus Jakarta Sans
- No other fonts. No Google Fonts CDN links.

### Logo
- Nav and Footer use inline SVG paths, not next/image
- Nav logo: fill="currentColor", color controlled via CSS
- Footer logo: fill="currentColor" — follows theme
- SVG circle element: fill="#00DB46" hardcoded, never changes

### Content
- Articles live in content/blog/[slug].md
- Slugs are in English. Proper nouns stay as-is (copa-airlines, ley-2466).
- Public URL is /insights/[slug] not /blog/[slug]
- lib/blog.ts reads from content/blog/

### Article frontmatter schema
date, author, featuredImage, readingTime, bodyES/EN/PT flags
Nested per language (es/en/pt):
  title, excerpt, category, tags, featuredImageAlt, keyTakeaways (array of 3)
Body separated by :::es ::: :::en ::: :::pt ::: markers
Fallback: missing EN/PT body shows ES with language note
Author: 'Studio Deki' default, supports named authors
Images: public/blog/[slug]/featured.jpg (1200x630px JPG, under 300kb)

### Article categories (used for microcopy mapping)
- Caso de estudio / Case Study / Caso de estudo
- Diseño de aprendizaje / Learning Design / Design de aprendizagem
- Tecnología / Technology / Tecnologia
- Estrategia / Strategy / Estratégia
- Compliance (same all languages)

### Dark mode
- CSS custom properties in globals.css under [data-theme="dark"]
- ThemeProvider sets data-theme on html element
- OS preference detected on mount, user override in localStorage key: sdk-theme

### Security
- Content Security Policy in next.config.mjs
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- poweredByHeader: false
- Markdown sanitized before dangerouslySetInnerHTML

### Client logos
- SVG files in public/logos/[slug].svg
- All paths use fill="currentColor"
- Rendered via CSS mask-image technique in ClientLogos.tsx
- Never use next/image for client logos

## Design tokens (globals.css :root)
--dk-dark:      #0C0C15   primary text, nav bg
--dk-accent:    #7349FF   accent, never changes in dark mode
--dk-surface:   #F9FAFC   page background
--dk-secondary: #4628AA   secondary text
--dk-white:     #FFFFFF   card backgrounds
--dk-deep:      matches --dk-surface (footer background)
--dk-border:    #E6E7FD
--dk-error:     #ff6b6b

## Brand voice
- tutear (tú) in all Spanish copy
- No em dashes in copy
- No "instructional design" as primary positioning
- Use "experiencias de aprendizaje" or "diseño de experiencias eLearning"
- Key proof point: 92% completion rate at Copa Airlines
- Positioning: science/data-backed, AI-accelerated, human-centered
- CTAs use curiosity gap principle — open a question, don't describe what's behind the link

## Known limitations (future sprints)
- OG meta tags serve Spanish by default regardless of user language.
  Fix requires Sprint 28 (URL routing).
- Slugs are in English by convention. Proper nouns stay as-is.
- Manifesto copy lives in ManifestoContent.tsx — future Sprint 27 migrates to MDX.

## Current sprint status
- Sprints 1-25 complete. Client logos, social icons, microcopy, arrow micro-interactions done.
- Sprint 26 next: Accessibility + SEO fixes — A1-A9, S1-S4 from audit

## Commands
```bash
npm run dev       # local dev
npm run build     # production build
npm run lint      # eslint
git push          # triggers Vercel auto-deploy
```

## Environment variables
- RESEND_API_KEY        — email sending via /api/contact
- RESEND_TO_EMAIL       — destination email address
- RESEND_FROM_EMAIL     — sender address (use onboarding@resend.dev until domain verified)