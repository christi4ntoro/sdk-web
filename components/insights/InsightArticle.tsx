'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'
import type { Post } from '@/lib/blog'

export function InsightArticle({ post }: { post: Post }) {
  const { lang, t } = useLang()

  const title = lang === 'en' && post.titleEn ? post.titleEn : post.title
  const backLabel = t('Perspectivas', 'Insights')

  return (
    <div style={{ background: 'var(--dk-surface)', minHeight: '100vh' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '7rem 2rem 8rem' }}>

        {/* Back link */}
        <Link
          href="/insights"
          style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--dk-mid)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '3rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = 'var(--dk-dark)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = 'var(--dk-mid)')
          }
        >
          ← {backLabel}
        </Link>

        {/* Meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--dk-mid)',
            }}
          >
            {post.date}
          </span>
          {post.tags && post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--dk-mid)',
                padding: '0.2rem 0.5rem',
                border: '1px solid var(--dk-border)',
                borderRadius: '2px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: 'var(--dk-dark)',
            marginBottom: '3rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--dk-border)',
          }}
        >
          {title}
        </h1>

        {/* Content */}
        <div
          className="insight-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: '5rem',
            paddingTop: '3rem',
            borderTop: '1px solid var(--dk-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--dk-mid)',
              lineHeight: 1.7,
            }}
          >
            {t(
              '¿Quieres hablar sobre cómo esto aplica a tu organización?',
              'Want to talk about how this applies to your organization?'
            )}
          </p>
          <Link href="/contact" className="btn-primary">
            {t('Cuéntanos tu reto', 'Tell us your challenge')}
          </Link>
        </div>
      </article>

      {/* Prose styles for MDX content */}
      <style>{`
        .insight-body {
          font-size: 1rem;
          line-height: 1.9;
          color: var(--dk-dark);
        }
        .insight-body h2 {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--dk-dark);
          margin: 3rem 0 1rem;
        }
        .insight-body h3 {
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          color: var(--dk-dark);
          margin: 2rem 0 0.75rem;
        }
        .insight-body p {
          margin-bottom: 1.5rem;
          color: var(--dk-mid);
        }
        .insight-body strong {
          color: var(--dk-dark);
          font-weight: 700;
        }
        .insight-body ul,
        .insight-body ol {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .insight-body li {
          font-size: 0.95rem;
          color: var(--dk-mid);
          line-height: 1.75;
        }
        .insight-body a {
          color: var(--dk-dark);
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s;
        }
        .insight-body a:hover {
          color: var(--dk-amber);
        }
        .insight-body hr {
          border: none;
          border-top: 1px solid var(--dk-border);
          margin: 3rem 0;
        }
        .insight-body blockquote {
          border-left: 2px solid var(--dk-amber);
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--dk-dark);
          line-height: 1.6;
        }
        .insight-body em {
          font-style: italic;
        }
      `}</style>
    </div>
  )
}