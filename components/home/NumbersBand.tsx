'use client'

import { useLang } from '@/lib/lang-context'

const numbers = [
  {
    value: '92%',
    es: 'Tasa de finalización',
    en: 'Completion rate',
    sub: 'Copa Airlines',
    highlight: true,
  },
  {
    value: '+32K',
    es: 'Profesionales capacitados',
    en: 'Professionals trained',
    sub: null,
    highlight: false,
  },
  {
    value: '+150',
    es: 'Cursos entregados',
    en: 'Courses delivered',
    sub: null,
    highlight: false,
  },
]

export function NumbersBand() {
  const { t } = useLang()

  return (
    <section style={{ background: 'var(--dk-dark)', padding: '0' }}>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px"
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >
        {numbers.map((n) => (
          <div
            key={n.value}
            style={{
              padding: '3.5rem 3.5rem',
              background: n.highlight ? 'var(--dk-amber)' : '#242340',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 5.5vw, 6rem)',
                fontWeight: 400,
                lineHeight: 1,
                color: n.highlight ? 'var(--dk-dark)' : 'var(--dk-white)',
                marginBottom: '0.75rem',
              }}
            >
              {n.value}
            </div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: n.highlight
                  ? 'rgba(29,28,51,0.55)'
                  : 'rgba(255,255,255,0.45)',
                lineHeight: 1.5,
              }}
            >
              {t(n.es, n.en)}
              {n.sub && (
                <span
                  style={{
                    display: 'block',
                    marginTop: '0.25rem',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: n.highlight
                      ? 'rgba(29,28,51,0.38)'
                      : 'rgba(255,255,255,0.28)',
                  }}
                >
                  {n.sub}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}