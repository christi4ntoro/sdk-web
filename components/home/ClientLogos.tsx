'use client'

import { useLang } from '@/lib/lang-context'

// When SVG logos are ready, replace each entry with:
// { name: 'Copa Airlines', slug: 'copa-airlines' }
// Then swap the chip div for:
// <Image src={`/logos/${slug}.svg`} alt={name} width={120} height={40}
//   style={{ filter: 'grayscale(1)', opacity: 0.35, transition: 'filter 0.2s, opacity 0.2s' }}
//   onMouseEnter remove filter + set opacity 1
//   onMouseLeave restore filter + opacity 0.35
// />

const clients = [
  'Copa Airlines',
  'Avianca',
  'Honda',
  'DHL',
  'Grupo Energía Bogotá',
  'Wingo',
  'DANE',
  'Cámara de Comercio',
  'Konrad Adenauer',
  'Morgan & Morgan',
  'Harinera del Valle',
  'Tribunal Electoral',
]

export function ClientLogos() {
  const { t } = useLang()

  return (
    <section style={{ background: 'var(--dk-white)', padding: '5rem 3rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '2.75rem' }}>
          {t(
            'Han confiado en nosotros las organizaciones que tratan la formación como una inversión, no como un gasto.',
            'Trusted by organizations that treat training as an investment, not a cost.'
          )}
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem 0.85rem',
            alignItems: 'center',
          }}
        >
          {clients.map((name) => (
            <div
              key={name}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: 'rgba(29,28,51,0.28)',
                textTransform: 'uppercase',
                padding: '0.5rem 1rem',
                border: '1px solid var(--dk-border)',
                borderRadius: '2px',
                transition: 'color 0.2s, border-color 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'var(--dk-dark)'
                el.style.borderColor = 'rgba(29,28,51,0.25)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'rgba(29,28,51,0.28)'
                el.style.borderColor = 'var(--dk-border)'
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}