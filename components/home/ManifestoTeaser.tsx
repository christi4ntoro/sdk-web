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
        </Link>
      </div>
    </section>
  )
}
