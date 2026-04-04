'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'
import type { PostMeta } from '@/lib/blog'

export function InsightsContent({ posts }: { posts: PostMeta[] }) {
  const { lang, t } = useLang()

  return (
    <div style={{ background: 'var(--dk-surface)', minHeight: '100vh' }}>
      <section style={{ padding: '8rem 3rem 5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '2rem' }}>
          {t('Perspectivas', 'Insights')}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 5vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            color: 'var(--dk-dark)',
          }}
        >
          {t(
            <>
              Lo que sabemos,
              <br />
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                compartido sin filtro.
              </em>
            </>,
            <>
              What we know,
              <br />
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                shared without filter.
              </em>
            </>
          )}
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--dk-mid)',
            lineHeight: 1.8,
            maxWidth: '480px',
            marginBottom: '5rem',
          }}
        >
          {t(
            'Artículos sobre aprendizaje, diseño y tecnología aplicada a organizaciones.',
            'Articles on learning, design and technology applied to organizations.'
          )}
        </p>

        {posts.length === 0 ? (
          <p style={{ color: 'var(--dk-mid)', fontSize: '0.9rem' }}>
            {t('Próximamente.', 'Coming soon.')}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
            {posts.map((post) => {
              const title = lang === 'en' && post.titleEn ? post.titleEn : post.title
              const excerpt = lang === 'en' && post.excerptEn ? post.excerptEn : post.excerpt

              return (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="blog-card-link"
                  style={{
                    background: 'var(--dk-white)',
                    padding: '2rem 2rem 1.75rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--dk-mid)',
                    }}
                  >
                    {post.date}
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                      fontWeight: 400,
                      lineHeight: 1.3,
                      color: 'var(--dk-dark)',
                      flex: 1,
                    }}
                  >
                    {title}
                  </h2>
                  {excerpt && (
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--dk-mid)',
                        lineHeight: 1.7,
                      }}
                    >
                      {excerpt}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
                      {post.tags.slice(0, 2).map((tag) => (
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
                  )}
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      color: 'var(--dk-amber)',
                      marginTop: '0.5rem',
                    }}
                  >
                    {t('Leer', 'Read')} →
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}