'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

export function Hero() {
  const { t } = useLang()

  return (
    <section className="dk-hero">
      {/*<div className="section-label dk-hero-label">
        {t('hero.label')}
      </div>*/}

      <h1 className="dk-hero-h1">
        <strong>{t('hero.h1_pre1')}<br />
        {t('hero.h1_pre2')}</strong><br />
        <span className="dk-em">{t('hero.h1_span')}</span>
      </h1>

      <p className="dk-body dk-hero-sub">
        {t('hero.sub1')}<br />{t('hero.sub2')}
      </p>

      <div className="dk-hero-ctas">
        <Link href="/contact" className="btn-primary">
          {t('shared.cta_primary')}
        </Link>
        <Link href="/services" className="btn-ghost">
          {t('hero.cta_secondary')}
        </Link>
      </div>
    </section>
  )
}
