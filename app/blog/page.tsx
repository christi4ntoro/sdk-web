import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div style={{ background: 'var(--dk-surface)', minHeight: '100vh' }}>
      <section style={{ padding: '8rem 3rem 5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '2rem' }}>
          Blog
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 5vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '4rem',
          }}
        >
          Ideas sobre aprendizaje,
          <br />
          <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
            diseño y organizaciones.
          </em>
        </h1>

        {posts.length === 0 ? (
          <p style={{ color: 'var(--dk-mid)', fontSize: '0.9rem' }}>
            Próximamente.
          </p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2px',
            }}
          >
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  background: 'var(--dk-white)',
                  padding: '2rem 2rem 1.75rem',
                  textDecoration: 'none',
                  display: 'block',
                  borderTop: '3px solid transparent',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderTopColor =
                    'var(--dk-amber)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderTopColor =
                    'transparent')
                }
              >
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--dk-mid)',
                    marginBottom: '0.75rem',
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
                    marginBottom: '0.75rem',
                  }}
                >
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--dk-mid)',
                      lineHeight: 1.7,
                    }}
                  >
                    {post.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
