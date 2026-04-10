'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import type { PostMeta } from '@/lib/blog'

export function LatestInsights({ posts }: { posts: PostMeta[] }) {
  const { lang, t } = useLang()

  const activeLang = lang === 'en' ? 'en' : lang === 'pt' ? 'pt' : 'es'

  return (
    <section className="dk-latest-section">
      <div className="dk-latest-inner">
        <div className="section-label dk-latest-label">
          {t('latest_insights.label')}
        </div>
        <h2 className="dk-latest-heading">
          {t('latest_insights.heading_pre')}
          <br />
          <em>{t('latest_insights.heading_em')}</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
          {posts.map((post) => {
            const langData = post[activeLang]
            const title = langData.title || post.es.title
            const excerpt = langData.excerpt || post.es.excerpt
            const category = langData.category || post.es.category
            const imageAlt = langData.featuredImageAlt || post.es.featuredImageAlt || title

            return (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="dk-latest-card"
              >
                <div className="dk-latest-card-image">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={imageAlt}
                      width={600}
                      height={338}
                      className="dk-latest-card-img"
                    />
                  ) : (
                    <div className="dk-latest-card-placeholder" aria-hidden="true" />
                  )}
                </div>

                {category && (
                  <span className="dk-insight-tag">{category}</span>
                )}

                <h3 className="dk-latest-card-title">{title}</h3>

                {excerpt && (
                  <p className="dk-latest-card-excerpt">{excerpt}</p>
                )}

                <span className="dk-latest-card-read">
                  {t('latest_insights.read')}
                </span>
              </Link>
            )
          })}
        </div>

        <div className="dk-latest-cta">
          <Link href="/insights" className="btn-ghost">
            {t('latest_insights.view_all')}
          </Link>
        </div>
      </div>
    </section>
  )
}
