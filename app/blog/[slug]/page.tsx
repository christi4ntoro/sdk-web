import { getPost, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <div style={{ background: 'var(--dk-surface)', minHeight: '100vh' }}>
      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '7rem 2rem 8rem' }}>
        <Link
          href="/blog"
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
          }}
        >
          ← Blog
        </Link>

        <div
          style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--dk-mid)',
            marginBottom: '1rem',
          }}
        >
          {post.date}
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '3rem',
            borderBottom: '1px solid var(--dk-border)',
            paddingBottom: '2.5rem',
          }}
        >
          {post.title}
        </h1>

        <div
          className="prose"
          style={{
            fontSize: '1rem',
            lineHeight: 1.85,
            color: 'var(--dk-dark)',
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
