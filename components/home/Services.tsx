'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

const numbers = [
  { value: '92%',  statKey: 'numbers.stat1' },
  { value: '+32K', statKey: 'numbers.stat2' },
  { value: '+150', statKey: 'numbers.stat3' },
]

const services = [
  { num: '01', titleKey: 'services_home.s1_title', descKey: 'services_home.s1_desc' },
  { num: '02', titleKey: 'services_home.s2_title', descKey: 'services_home.s2_desc' },
  { num: '03', titleKey: 'services_home.s3_title', descKey: 'services_home.s3_desc' },
]

export function Services() {
  const { t } = useLang()

  return (
    <section id="services" className="dk-services-section">
      <div className="section-label dk-services-label">
        {t('services_home.label')}
      </div>

      <div className="dk-services-grid">
        <div className="dk-numbers-col">
          <div className="dk-numbers-cell dk-numbers-cell-highlight">
            <div className="dk-numbers-value">{numbers[0].value}</div>
            <div className="dk-numbers-label">{t(numbers[0].statKey)}</div>
          </div>
          <div className="dk-numbers-row">
            {numbers.slice(1).map((n) => (
              <div key={n.value} className="dk-numbers-cell-plain">
                <div className="dk-numbers-value-sm">{n.value}</div>
                <div className="dk-numbers-label-plain">{t(n.statKey)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="dk-service-list">
          {services.map((s) => (
            <div key={s.num} className="dk-service-item">
              <span className="dk-service-item-title">{t(s.titleKey)}.</span>{' '}
              <span className="dk-service-item-desc">{t(s.descKey)}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className='dk-services-cta'>
        <Link href="/services" className="btn-ghost">
          {t('services_home.cta')}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
