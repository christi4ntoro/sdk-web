'use client'

import { useLang } from '@/lib/lang-context'

export function Statement() {
  const { t } = useLang()

  return (
    <section className="dk-statement-section grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

      {/* Left */}
      <div>
        <h2 className="dk-statement-h2">
          {t('statement.h2_pre')}<br />
          <em className="dk-em">{t('statement.h2_em')}</em>
        </h2>
        <p className="dk-body dk-statement-body">
          {t('statement.body')}
        </p>
      </div>

      {/* Quote card */}
      <div className="dk-quote-card">
        <div className="dk-quote-accent" />
        <p className="dk-quote-text">
          {t('statement.quote')}
        </p>
        <div className="dk-quote-author">{t('statement.quote_author')}</div>
      </div>
    </section>
  )
}
