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

export function InsightsContent({ posts }: { posts: PostMeta[] }) {
  const { lang, t } = useLang()
  const activeLang = lang === 'en' ? 'en' : lang === 'pt' ? 'pt' : 'es'
  const heroPost = posts[0]
  const remainingPosts = posts.slice(1)

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
          <>
            <Link href={`/insights/${heroPost.slug}`} className="dk-insight-hero-card">
              <div className="dk-insight-hero-card-image">
                {heroPost.featuredImage ? (
                  <Image
                    src={heroPost.featuredImage}
                    alt={heroPost[activeLang].featuredImageAlt || heroPost[activeLang].title || heroPost.es.title}
                    width={1100}
                    height={618}
                    className="dk-insight-hero-card-img"
                  />
                ) : (
                  <div className="dk-insight-hero-card-placeholder" />
                )}
              </div>
              <div className="dk-insight-hero-card-body">
                <h2 className="dk-display-md">
                  {heroPost[activeLang].title || heroPost.es.title}
                </h2>
                <div className="dk-blog-card-read">
                  {t(readMoreKey(heroPost[activeLang].category || heroPost.es.category))}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </Link>

            {remainingPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 dk-insights-grid">
                {remainingPosts.map((post) => {
                  const langData = post[activeLang]
                  const title = langData.title || post.es.title
                  const excerpt = langData.excerpt || post.es.excerpt
                  const category = langData.category || post.es.category

                  return (
                    <Link
                      key={post.slug}
                      href={`/insights/${post.slug}`}
                      className="blog-card-link dk-blog-card"
                    >
                      {post.featuredImage && (
                        <div className="dk-blog-card-image">
                          <Image
                            src={post.featuredImage}
                            alt={langData.featuredImageAlt || title}
                            width={600}
                            height={340}
                            className="dk-blog-card-img"
                          />
                        </div>
                      )}
                      <h2 className="dk-blog-card-title">{title}</h2>
                      <div className="dk-blog-card-meta">
                        {category && (
                          <span className="dk-blog-card-category">{category}</span>
                        )}
                        {post.readingTime && (
                          <span className="dk-blog-card-read-time">{post.readingTime} {t('article_card.read_time')}</span>
                        )}
                      </div>
                      {excerpt && (
                        <p className="dk-blog-card-excerpt">
                          {excerpt.length > 120 ? excerpt.slice(0, 120).trimEnd() + '…' : excerpt}
                        </p>
                      )}
                      <div className="dk-blog-card-read">
                        {t(readMoreKey(category))}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  )
}
