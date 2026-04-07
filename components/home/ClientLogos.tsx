'use client'

import { useLang } from '@/lib/lang-context'

// When SVG logos are ready:
// Replace chip divs with <Image src={`/logos/${slug}.svg`} alt={name}
// width={120} height={40} className="dk-client-logo" />
// Add .dk-client-logo to globals: filter grayscale(1) opacity 0.35,
// hover: filter none opacity 1

const clients = [
  'Copa Airlines', 'Avianca', 'Honda', 'DHL',
  'Grupo Energía Bogotá', 'Wingo', 'DANE', 'Cámara de Comercio',
  'Konrad Adenauer', 'Morgan & Morgan', 'Harinera del Valle', 'Tribunal Electoral',
]

export function ClientLogos() {
  const { t } = useLang()

  return (
    <section className="dk-clients-section">
      <div className="dk-clients-inner">
        <div className="section-label dk-clients-label">
          {t(
            'Han confiado en nosotros las organizaciones que tratan la formación como una inversión, no como un gasto.',
            'Trusted by organizations that treat training as an investment, not a cost.'
          )}
        </div>
        <div className="dk-clients-grid">
          {clients.map((name) => (
            <div key={name} className="dk-client-chip">{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}