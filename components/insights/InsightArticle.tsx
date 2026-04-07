'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'
import type { Post } from '@/lib/blog'

export function InsightArticle({ post }: { post: Post }) {
  const { lang, t } = useLang()

  const title = lang === 'en' && post.titleEn ? post.titleEn : post.title

  return (
    <div className="dk-insight-page">
      <article className="dk-insight-article">
        <Link href="/insights" className="dk-insight-back">
          ← {t('insights.label')}
        </Link>

        <div className="dk-insight-meta">
          <span className="dk-insight-date">{post.date}</span>
          {post.tags && post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="dk-insight-tag">{tag}</span>
          ))}
        </div>

        <h1 className="dk-insight-title">{title}</h1>

        <div
          className="insight-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="dk-insight-footer">
          <p className="dk-insight-footer-lead">
            {t('insights.article_footer_lead')}
          </p>
          <Link href="/contact" className="btn-primary">
            {t('shared.cta_primary')}
          </Link>
        </div>
      </article>
    </div>
  )
}
