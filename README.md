# Studio Deki — studiodeki.co

Next.js 15 · TypeScript · Tailwind · Resend · Vercel

---

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + CSS custom properties
- **Fonts**: Instrument Serif (display) + Syne (sans) via Google Fonts
- **i18n**: Custom context — ES/EN toggle, no external library
- **Email**: Resend (contact form)
- **Deploy**: Vercel
- **Blog**: MDX files in `/content/blog/`

---

## Local dev

```bash
# 1. Install
npm install

# 2. Environment
cp .env.local.example .env.local
# Add your Resend API key

# 3. Run
npm run dev
# → http://localhost:3000
```

---

## Folder structure

```
app/
  page.tsx              Homepage
  about/page.tsx        About
  blog/
    page.tsx            Blog index
    [slug]/page.tsx     Blog post
  contact/page.tsx      Contact form
  api/contact/route.ts  Resend API route
  layout.tsx            Root layout + metadata
  globals.css           Design tokens + utilities

components/
  layout/
    Nav.tsx             Sticky nav + language toggle
    Footer.tsx
  home/
    Hero.tsx
    NumbersBand.tsx     +32K / +150 / +45
    Services.tsx
    ClientLogos.tsx     Drop SVGs into /public/logos/
    Statement.tsx
    CTASection.tsx

content/blog/           .md files — add posts here
lib/
  lang-context.tsx      ES/EN context + useLang hook
  blog.ts               Blog file reader
public/
  logos/                Client SVG logos (greyscale on hover)
  shared/               Shared assets
```

---

## Deploy to Vercel

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "init"
gh repo create studiodeki --private --push

# 2. Connect in Vercel dashboard
# → Import repo → Framework: Next.js → Deploy

# 3. Add environment variable in Vercel
# RESEND_API_KEY = your key

# 4. Add custom domain
# studiodeki.co → DNS settings per Vercel instructions
```

---

## Adding a blog post

Create `/content/blog/your-slug.md`:

```markdown
---
title: "Título del post"
titleEn: "Post title in English"
date: "2026-04-01"
excerpt: "Resumen corto en español."
excerptEn: "Short summary in English."
tags: ["tag1", "tag2"]
---

Content in Markdown here.
```

---

## Adding client logos

1. Drop SVG into `/public/logos/client-name.svg`
2. In `ClientLogos.tsx`, replace chips with `<Image>` tags (template comment included)

---

## Design tokens

All in `globals.css` as CSS custom properties:

```css
--dk-dark:    #1D1C33   /* primary brand navy */
--dk-amber:   #F8BB15   /* accent — CTAs only */
--dk-surface: #F7F6F2   /* warm off-white background */
--dk-mid:     #6B6A7E   /* secondary text */
--dk-deep:    #141324   /* footer */
```

Fonts: `var(--font-display)` = Instrument Serif · `var(--font-sans)` = Syne
