'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

const services = [
  {
    num: '01',
    titleKey: 'services_page.s1_title',
    bodyKey:  'services_page.s1_body',
    bulletKeys: [
      'services_page.s1_b1',
      'services_page.s1_b2',
      'services_page.s1_b3',
      'services_page.s1_b4',
      'services_page.s1_b5',
    ],
  },
  {
    num: '02',
    titleKey: 'services_page.s2_title',
    bodyKey:  'services_page.s2_body',
    bulletKeys: [
      'services_page.s2_b1',
      'services_page.s2_b2',
      'services_page.s2_b3',
      'services_page.s2_b4',
      'services_page.s2_b5',
    ],
  },
  {
    num: '03',
    titleKey: 'services_page.s3_title',
    bodyKey:  'services_page.s3_body',
    bulletKeys: [
      'services_page.s3_b1',
      'services_page.s3_b2',
      'services_page.s3_b3',
      'services_page.s3_b4',
      'services_page.s3_b5',
    ],
  },
]

export default function ServicesContent() {
  const { t } = useLang()

  return (
    <div className="dk-services-page">
      <section className="dk-services-hero">
        <div className="section-label dk-services-hero-label">
          {t('services_page.label')}
        </div>
        <h1 className="dk-services-heading">
          {t('services_page.heading_pre')}
          <br />
          <em>{t('services_page.heading_em')}</em>
        </h1>
        <p className="dk-body dk-services-lead">
          {t('services_page.lead')}
        </p>
      </section>

      <section className="dk-services-list-section">
        <div className="dk-services-list">
          {services.map((s) => (
            <div key={s.num} className="dk-service-row">
              <div className="dk-service-number">{s.num}</div>
              <div className="dk-service-inner">
                <div>
                  <h2 className="dk-service-title">{t(s.titleKey)}</h2>
                  <p className="dk-body dk-service-desc">{t(s.bodyKey)}</p>
                </div>
                <ul className="dk-service-bullets">
                  {s.bulletKeys.map((k) => (
                    <li key={k} className="dk-service-li">
                      <span className="dk-service-bullet" />
                      {t(k)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dk-services-cta">
        <div className="dk-services-cta-inner">
          <h2 className="dk-services-cta-heading">
            {t('shared.challenge_heading_pre')}
            <br />
            <em>{t('shared.challenge_heading_em')}</em>
          </h2>
          <p className="dk-services-cta-lead">
            {t('services_page.cta_lead')}
          </p>
          <Link href="/contact" className="btn-amber">
            {t('shared.cta_find_solution')}
          </Link>
        </div>
      </section>
    </div>
  )
}
