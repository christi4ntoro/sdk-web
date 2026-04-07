'use client'

import { useLang } from '@/lib/lang-context'

const numbers = [
  { value: '92%',  es: 'Tasa de finalización',     en: 'Completion rate',      sub: 'Copa Airlines', highlight: true  },
  { value: '+32K', es: 'Profesionales capacitados', en: 'Professionals trained', sub: null,            highlight: false },
  { value: '+150', es: 'Cursos entregados',          en: 'Courses delivered',    sub: null,            highlight: false },
]

export function NumbersBand() {
  const { t } = useLang()

  return (
    <section className="dk-numbers-section">
      <div className="dk-numbers-grid grid grid-cols-1 md:grid-cols-3 gap-px">
        {numbers.map((n) => (
          <div
            key={n.value}
            className={`dk-numbers-cell ${n.highlight ? 'dk-numbers-cell-highlight' : 'dk-numbers-cell-dark'}`}
          >
            <div className={`dk-numbers-value ${n.highlight ? 'dk-numbers-value-highlight' : 'dk-numbers-value-dark'}`}>
              {n.value}
            </div>
            <div className={`dk-numbers-label ${n.highlight ? 'dk-numbers-label-highlight' : 'dk-numbers-label-dark'}`}>
              {t(n.es, n.en)}
              {n.sub && (
                <span className={`dk-numbers-sub ${n.highlight ? 'dk-numbers-sub-highlight' : 'dk-numbers-sub-dark'}`}>
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