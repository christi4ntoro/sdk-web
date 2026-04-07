'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'
import type { PostMeta } from '@/lib/blog'

export function InsightsContent({ posts }: { posts: PostMeta[] }) {
  const { lang, t } = useLang()

  return (
    <div className="dk-insights-page">
      <section className="dk-insights-section">
        <div className="section-label dk-insights-label">
          {t('insights.label')}
        </div>
        <h1 className="dk-insights-heading">
          {t('insights.h1_pre')}
          <br />
          <em>{t('insights.h1_em')}</em>
        </h1>
        <p className="dk-body dk-insights-lead">
          {t('insights.lead')}
        </p>

        {posts.length === 0 ? (
          <p className="dk-insights-empty">
            {t('insights.empty')}
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
                  className="blog-card-link dk-blog-card"
                >
                  <div className="dk-blog-card-date">{post.date}</div>
                  <h2 className="dk-blog-card-title">{title}</h2>
                  {excerpt && (
                    <p className="dk-blog-card-excerpt">{excerpt}</p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="dk-blog-card-tags">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="dk-insight-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                  <div className="dk-blog-card-read">
                    {t('insights.read')} →
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
