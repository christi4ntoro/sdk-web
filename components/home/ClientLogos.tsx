'use client'

import { useLang } from '@/lib/lang-context'

const clients = [
  'Copa Airlines',
  'Honda',
  'DHL',
  'DANE',
  'Cámara de Comercio',
  'Grupo Energía Bogotá',
  'Konrad Adenauer',
  'Tribunal Electoral',
  'Wingo',
  'Avianca',
  'Morgan & Morgan',
  'Harinera del Valle',
]

export function ClientLogos() {
  const { t } = useLang()

  return (
    <section style={{ background: 'var(--dk-white)', padding: '5rem 3rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '2.5rem' }}>
          {t('Han confiado en nosotros', 'Trusted by')}
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem 1rem',
            alignItems: 'center',
          }}
        >
          {clients.map((name) => (
            <div
              key={name}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                color: 'rgba(29,28,51,0.32)',
                textTransform: 'uppercase',
                padding: '0.5rem 1rem',
                border: '1px solid var(--dk-border)',
                borderRadius: '2px',
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'var(--dk-dark)'
                el.style.borderColor = 'rgba(29,28,51,0.25)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'rgba(29,28,51,0.32)'
                el.style.borderColor = 'var(--dk-border)'
              }}
            >
              {name}
            </div>
          ))}
        </div>
        {/* When SVG logos are ready, replace chips with:
            <Image src={`/logos/${slug}.svg`} alt={name} width={120} height={40}
              style={{ filter: 'grayscale(1) opacity(0.35)', transition: 'filter 0.2s' }}
              onMouseEnter/Leave to remove filter
            />
        */}
      </div>
    </section>
  )
}
