'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'
import type { Post } from '@/lib/blog'

export function InsightArticle({ post }: { post: Post }) {
  const { lang, t } = useLang()

  const title = lang === 'en' && post.titleEn ? post.titleEn : post.title
  const backLabel = t('Perspectivas', 'Insights')

  return (
    <div className="dk-insight-page">
      <article className="dk-insight-article">
        <Link href="/insights" className="dk-insight-back">
          ← {backLabel}
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
    </div>
  )
}
