'use client'

import { useLang } from '@/lib/lang-context'

const numbers = [
  { value: '+32K', es: 'Usuarios capacitados', en: 'Learners trained', highlight: true },
  { value: '+150', es: 'Cursos desarrollados', en: 'Courses developed', highlight: false },
  { value: '+45', es: 'Casos de éxito documentados', en: 'Documented success cases', highlight: false },
]

export function NumbersBand() {
  const { t } = useLang()

  return (
    <section style={{ background: 'var(--dk-dark)', padding: '0' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}
      >
        {numbers.map((n) => (
          <div
            key={n.value}
            style={{
              padding: '3rem 3.5rem',
              background: n.highlight ? 'var(--dk-amber)' : '#242340',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.5rem',
                fontWeight: 400,
                lineHeight: 1,
                color: n.highlight ? 'var(--dk-dark)' : 'var(--dk-white)',
                marginBottom: '0.6rem',
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
                  ? 'rgba(29,28,51,0.5)'
                  : 'rgba(255,255,255,0.45)',
              }}
            >
              {t(n.es, n.en)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
