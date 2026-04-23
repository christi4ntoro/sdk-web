'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import type { PostMeta } from '@/lib/blog'

function readMoreKey(category: string): string {
  switch (category) {
    case 'Caso de estudio': case 'Case Study': case 'Caso de estudo':
      return 'article_card.read_more_case_study'
    case 'Diseño de aprendizaje': case 'Learning Design': case 'Design de aprendizagem':
      return 'article_card.read_more_learning'
    case 'Tecnología': case 'Technology': case 'Tecnologia':
      return 'article_card.read_more_technology'
    case 'Estrategia': case 'Strategy': case 'Estratégia':
      return 'article_card.read_more_strategy'
    case 'Compliance':
      return 'article_card.read_more_compliance'
    default:
      return 'article_card.read_more_default'
  }
}

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
          {t('latest_insights.heading_pre')} <em>{t('latest_insights.heading_em')}</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 dk-insights-grid">
          {posts.map((post) => {
            const langData = post[activeLang]
            const title = langData.title || post.es.title
            const category = langData.category || post.es.category
            const imageAlt = langData.featuredImageAlt || post.es.featuredImageAlt || title

            return (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="dk-latest-card"
              >
                {post.featuredImage && (
                  <div className="dk-latest-card-image">
                    <Image
                      src={post.featuredImage}
                      alt={imageAlt}
                      width={600}
                      height={338}
                      className="dk-latest-card-img"
                    />
                  </div>
                )}

                {category && (
                  <div className="dk-latest-card-meta">
                    <span className="dk-blog-card-category">{category}</span>
                  </div>
                )}

                <h3 className="dk-latest-card-title">{title}</h3>

                <span className="dk-latest-card-read">
                  {t(readMoreKey(category))}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </Link>
            )
          })}
        </div>

        <div className="dk-latest-cta">
          <Link href="/insights" className="btn-ghost">
            {t('latest_insights.view_all')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
