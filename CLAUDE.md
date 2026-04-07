# Studio Deki — Claude Code Init

## Project
eLearning studio website. Next.js 15 App Router, TypeScript, Tailwind CSS + custom CSS classes, Vercel deployment.

## Stack
- Framework: Next.js 15 (App Router, Turbopack)
- Styling: Tailwind CSS utilities + custom classes in app/globals.css
- Fonts: Plus Jakarta Sans (all weights, single font system)
- Language: TypeScript strict mode
- i18n: Custom context, ES/EN, PT hook ready
- Theme: Light/dark via CSS custom properties + data-theme on html
- Email: Resend via /api/contact
- Blog/Insights: MDX files in content/blog/, read via lib/blog.ts
- Deploy: Vercel, domain studiodeki.co

## Folder structure
app/                    Pages and API routes
layout.tsx            Root layout, fonts, metadata, JSON-LD
globals.css           ALL styles live here. No inline styles in components.
page.tsx              Homepage (imports home components)
contact/page.tsx
services/page.tsx
insights/page.tsx     Server shell only, imports InsightsContent
insights/[slug]/page.tsx
manifesto/page.tsx    Server shell only, imports ManifestoContent
api/contact/route.ts
components/
layout/
Nav.tsx             Sticky nav, mobile drawer, inline SVG logo
Footer.tsx          Lang select, theme toggle, inline SVG logo
home/
Hero.tsx
NumbersBand.tsx
Services.tsx
ClientLogos.tsx
Statement.tsx
ManifestoTeaser.tsx
CTASection.tsx
insights/
InsightsContent.tsx Client component, receives posts as props
InsightArticle.tsx  Client component, receives post as props
manifesto/
ManifestoContent.tsx Client component with full ES/EN copy
lib/
lang-context.tsx      Auto-detect browser lang, localStorage persist
theme-context.tsx     OS preference + manual toggle, localStorage persist
blog.ts               Reads content/blog/*.md via gray-matter + marked
content/blog/           Markdown articles with frontmatter
public/
shared/deki-logo.svg  NOT used in components. Logo is inline SVG.
logos/                Client SVG logos (pending)
og-image.jpg          Social sharing image (pending)
## Critical rules — always follow these

### CSS
- ALL styles go in app/globals.css. Zero inline styles in components.
- Never add style={{}} props to JSX elements.
- Never add <style></style> tags inside components.
- Class naming convention: dk-[component]-[element]
- Tailwind only for responsive grid utilities: grid grid-cols-1 md:grid-cols-3 gap-px
- No duplicate rules across sections. 
- Typography for p, h2, h3 etc. uses base tokens only: .dk-body, .dk-body-sm, .dk-display-*, etc.
- Never redefine paragraph or heading styles per-component.

### Architecture
- Pages in app/ are server components. They have metadata exports.
- Client components use 'use client' and live in components/.
- Never put useLang() or useTheme() in page.tsx files.
- Pattern: page.tsx (server, metadata) → imports ClientComponent (client, hooks)

### Language
- All copy is bilingual ES/EN using the t(es, en) helper from useLang()
- ES is default. Browser language auto-detects on mount.
- PT hook exists in lang-context.tsx, commented out, activate when ready.
- tutear throughout all ES copy (tú not usted)
- No em dashes (—) in copy. Use commas, colons or periods instead.

### Fonts
- Single font: Plus Jakarta Sans via next/font/google
- CSS variables: --font-display and --font-sans both point to Plus Jakarta Sans
- No other fonts. No Google Fonts CDN links.

### Logo
- Nav and Footer use inline SVG paths, not next/image
- Nav logo: fill="currentColor", color controlled via CSS
- Footer logo: fill="white" hardcoded (always on dark background)

### Content
- Articles live in content/blog/ as .md files
- Frontmatter fields: title, titleEn, date, excerpt, excerptEn, tags
- Public URL is /insights/[slug] not /blog/[slug]
- lib/blog.ts reads from content/blog/ (folder name ≠ URL)

### Dark mode
- CSS custom properties in globals.css under [data-theme="dark"]
- ThemeProvider in lib/theme-context.tsx sets data-theme on html element
- OS preference detected on mount, user override persisted in localStorage
- key: sdk-theme

### Language persistence
- User override persisted in localStorage
- key: sdk-lang

## Design tokens (globals.css :root)
--dk-dark:    #1D1C33   primary text, nav bg
--dk-amber:   #F8BB15   accent, never changes in dark mode
--dk-surface: #F7F6F2   page background
--dk-mid:     #6B6A7E   secondary text
--dk-white:   #FFFFFF   card backgrounds
--dk-deep:    #141324   footer background
--dk-border:  rgba(29,28,51,0.12)

## Brand voice
- tutear (tú) in all Spanish copy
- No em dashes in copy
- No "instructional design" as primary positioning — use "experiencias de aprendizaje" or "diseño de experiencias eLearning"
- Key proof point: 92% completion rate at Copa Airlines
- Positioning: science/data-backed, AI-accelerated, human-centered

## Current sprint status
- Sprints 1-5 complete. Zero inline styles. All styles in globals.css.
- Sprint 6 next: globals.css audit and dead code removal

## Commands
```bash
npm run dev       # local dev
npm run build     # production build
npm run lint      # eslint
git push          # triggers Vercel auto-deploy
```

## Environment variables
- RESEND_API_KEY  — email sending via /api/contact