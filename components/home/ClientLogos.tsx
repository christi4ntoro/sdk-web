'use client'

import { useLang } from '@/lib/lang-context'

const clients: { name: string; slug: string }[] = [
  { name: 'Copa Airlines',         slug: 'copa-airlines' },
  { name: 'Avianca',               slug: 'avianca' },
  { name: 'Honda',                 slug: 'honda' },
  { name: 'DHL',                   slug: 'dhl' },
  { name: 'Grupo Energía Bogotá',  slug: 'grupo-energia-bogota' },
  { name: 'Wingo',                 slug: 'wingo' },
  { name: 'DANE',                  slug: 'dane' },
  { name: 'Cámara de Comercio',    slug: 'camara-comercio' },
  { name: 'Konrad Adenauer',       slug: 'konrad-adenauer-stiftung' },
  { name: 'Morgan & Morgan',       slug: 'morgan-and-morgan' },
  { name: 'Harinera del Valle',    slug: 'harinera-del-valle' },
  { name: 'Tribunal Electoral',    slug: 'tribunal-electoral-panama' },
  { name: 'DNP',                   slug: 'dnp' },
]

export function ClientLogos() {
  const { t } = useLang()

  return (
    <section className="dk-clients-section">
      <div className="dk-clients-inner">
        <div className="section-label">
          {t('clients.label')}
        </div>
      </div>

      <div className="dk-marquee-wrapper" aria-label={t('clients.label')}>
        <div className="dk-marquee-track">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.slug}-${i}`}
              className="dk-marquee-logo"
              data-logo={client.slug}
              role="img"
              aria-label={client.name}
            />
          ))}
        </div>
      </div>      
    </section>
  )

}