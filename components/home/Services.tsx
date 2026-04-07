'use client'

import { useLang } from '@/lib/lang-context'

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
        {services.map((s) => (
          <div key={s.num} className="dk-service-card">
            <div className="dk-service-num">{s.num}</div>
            <h3 className="dk-service-card-title">{t(s.titleKey)}</h3>
            <p className="dk-body dk-service-card-desc">{t(s.descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
