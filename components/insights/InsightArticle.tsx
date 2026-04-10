'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import type { Post, PostMeta } from '@/lib/blog'

interface Heading {
  id: string
  text: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function processBodyHtml(html: string): { processedHtml: string; headings: Heading[] } {
  const headings: Heading[] = []
  const processedHtml = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (_, attrs, inner) => {
      const text = inner.replace(/<[^>]+>/g, '').trim()
      const id = slugify(text)
      headings.push({ id, text })
      return `<h2${attrs} id="${id}">${inner}</h2>`
    }
  )
  return { processedHtml, headings }
}

function ReadingProgressBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      barRef.current?.style.setProperty('--progress', `${pct}%`)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return <div ref={barRef} className="dk-article-progress-bar" aria-hidden="true" />
}

interface InsightArticleProps {
  post: Post
  relatedPosts: PostMeta[]
}

export function InsightArticle({ post, relatedPosts }: InsightArticleProps) {
  const { lang, t } = useLang()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [tocVisible, setTocVisible] = useState(true)
  const endSentinelRef = useRef<HTMLDivElement>(null)

  const activeLang = lang === 'en' ? 'en' : lang === 'pt' ? 'pt' : 'es'
  const langData = post[activeLang]
  const title = langData.title || post.es.title
  const tags = langData.tags.length > 0 ? langData.tags : post.es.tags
  const keyTakeaways = langData.keyTakeaways.filter(Boolean)
  const hasKeyTakeaways = keyTakeaways.length > 0
  const featuredImageAlt = langData.featuredImageAlt || post.es.featuredImageAlt || title

  const bodyAvailable =
    activeLang === 'es' ? post.bodyES :
    activeLang === 'en' ? post.bodyEN :
    post.bodyPT

  const rawContentHtml =
    activeLang === 'en' && post.bodyEN ? post.contentHtmlEN :
    activeLang === 'pt' && post.bodyPT ? post.contentHtmlPT :
    post.contentHtmlES

  const { processedHtml, headings } = useMemo(
    () => processBodyHtml(rawContentHtml),
    [rawContentHtml]
  )

  // Scroll spy: highlight active TOC heading
  useEffect(() => {
    if (headings.length === 0) return
    // Track intersection state per heading so we can always resolve
    // the first currently-visible heading in document order.
    const visibilityMap = new Map<string, boolean>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.isIntersecting)
        })
        // First visible heading in DOM order = the one the reader is under.
        // If none are visible (gap between sections), don't update so the
        // last active heading stays highlighted.
        const first = headings.find(({ id }) => visibilityMap.get(id))
        if (first) setActiveId(first.id)
      },
      // Observe the top 40 % of the viewport — wide enough to catch headings
      // even on fast scroll, without activating headings the user hasn't reached.
      { rootMargin: '0px 0px -60% 0px' }
    )
    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  // Hide TOC when user scrolls past body
  useEffect(() => {
    const sentinel = endSentinelRef.current
    if (!sentinel) return
    const observer = new IntersectionObserver(([entry]) => {
      setTocVisible(!entry.isIntersecting)
    })
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="dk-insight-page">
      <ReadingProgressBar />

      <div className="dk-article-outer">

        {/* Breadcrumbs */}
        <nav className="dk-article-breadcrumbs" aria-label="breadcrumb">
          <Link href="/" className="dk-article-breadcrumb-link">
            {t('article.breadcrumb_home')}
          </Link>
          <span className="dk-article-breadcrumb-sep" aria-hidden="true">/</span>
          <Link href="/insights" className="dk-article-breadcrumb-link">
            {t('article.breadcrumb_insights')}
          </Link>
          <span className="dk-article-breadcrumb-sep" aria-hidden="true">/</span>
          <span className="dk-article-breadcrumb-current">{title}</span>
        </nav>

        {/* Header: meta + title */}
        <div className="dk-insight-meta">
          <span className="dk-insight-date">{post.date}</span>
          {post.readingTime && (
            <span className="dk-insight-date">
              {post.readingTime} {t('article.min_read')}
            </span>
          )}
          <span className="dk-insight-date">
            {t('article.by')} {post.author}
          </span>
        </div>
        <h1 className="dk-insight-title">{title}</h1>

        {/* Featured image */}
        <div className="dk-article-featured">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={featuredImageAlt}
              width={1200}
              height={630}
              className="dk-article-featured-img"
              priority
            />
          ) : (
            <div className="dk-article-featured-placeholder" aria-hidden="true" />
          )}
        </div>

        {/* Key Takeaways */}
        {hasKeyTakeaways && (
          <div className="dk-article-takeaways">
            <p className="dk-article-takeaways-title">{t('article.key_takeaways')}</p>
            <ul className="dk-article-takeaways-list">
              {keyTakeaways.map((point, i) => (
                <li key={i} className="dk-article-takeaways-item">{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Body + TOC layout */}
        <div className="dk-article-layout">
          <div className="dk-article-main">
            {!bodyAvailable && activeLang !== 'es' && (
              <p className="dk-insight-lang-note">
                {t('insights.only_in_spanish')}
              </p>
            )}

            <div
              className="insight-body"
              dangerouslySetInnerHTML={{ __html: processedHtml }}
            />

            {/* Sentinel: TOC hides when this enters viewport */}
            <div ref={endSentinelRef} aria-hidden="true" />

            {/* Tags */}
            {tags.length > 0 && (
              <div className="dk-article-tags">
                {tags.map((tag) => (
                  <span key={tag} className="dk-insight-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>

          {/* TOC sidebar */}
          {headings.length > 0 && (
            <aside
              className={`dk-article-toc-sidebar${tocVisible ? '' : ' dk-article-toc-sidebar--hidden'}`}
              aria-label={t('article.toc_label')}
            >
              <p className="dk-article-toc-title">{t('article.toc_label')}</p>
              <nav>
                {headings.map(({ id, text }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`dk-article-toc-link${activeId === id ? ' dk-article-toc-link--active' : ''}`}
                  >
                    {text}
                  </a>
                ))}
              </nav>
            </aside>
          )}
        </div>

        {/* Final CTA */}
        <div className="dk-article-cta">
          <p className="dk-article-cta-heading">{t('article.cta_heading')}</p>
          <p className="dk-article-cta-body">{t('article.cta_body')}</p>
          <Link href="/contact" className="btn-primary">
            {t('shared.cta_primary')}
          </Link>
        </div>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <div className="dk-article-related">
            <p className="dk-article-related-title">{t('article.related')}</p>
            <div className="dk-article-related-grid">
              {relatedPosts.map((p) => {
                const pLang = p[activeLang]
                const pTitle = pLang.title || p.es.title
                const pExcerpt = pLang.excerpt || p.es.excerpt
                const pCategory = pLang.category || p.es.category
                return (
                  <Link
                    key={p.slug}
                    href={`/insights/${p.slug}`}
                    className="dk-article-related-card"
                  >
                    {pCategory && (
                      <span className="dk-insight-tag">{pCategory}</span>
                    )}
                    <h3 className="dk-article-related-card-title">{pTitle}</h3>
                    {pExcerpt && (
                      <p className="dk-article-related-card-excerpt">{pExcerpt}</p>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
