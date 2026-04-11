'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

export function ManifestoTeaser() {
  const { t } = useLang()

  return (
    <section className="dk-manifesto-teaser">
      <div className="dk-manifesto-teaser-inner">
        <div className="section-label dk-manifesto-teaser-label">
          {t('manifesto_teaser.label')}
        </div>
        <p className="dk-manifesto-teaser-text">
          {t('manifesto_teaser.p1')}
          <br /><br />
          <span className="dk-text-mid">
            {t('manifesto_teaser.p2')}
          </span>
        </p>
        <Link href="/manifesto" className="btn-ghost">
          {t('manifesto_teaser.cta')}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
