'use client'

import { useLang } from '@/lib/lang-context'

const services = [
  {
    num: '01',
    es: {
      title: 'Cursos que tu equipo realmente termina',
      desc: 'SCORM / xAPI. Narrativa que engancha, estructura definida por datos. Listo para cualquier LMS corporativo.',
    },
    en: {
      title: 'Courses your team actually completes',
      desc: 'SCORM / xAPI. Narrative that hooks, structure defined by data. Ready for any corporate LMS.',
    },
  },
  {
    num: '02',
    es: {
      title: 'Cumplimiento que funciona más allá de la auditoría',
      desc: 'Contenido técnico y regulatorio convertido en formación que tu equipo comprende, aplica y recuerda.',
    },
    en: {
      title: 'Compliance that works beyond the audit',
      desc: 'Technical and regulatory content turned into training your team understands, applies and remembers.',
    },
  },
  {
    num: '03',
    es: {
      title: 'Estrategia para sacar el máximo a tu plataforma',
      desc: 'No necesitas otra plataforma. Necesitas saber cómo hacer que la que tienes trabaje para tu gente. Diseñamos la estrategia, los flujos y la experiencia.',
    },
    en: {
      title: 'Strategy to maximize your learning platform',
      desc: "You don't need another platform. You need to know how to make the one you have work for your people. We design the strategy, the flows and the experience.",
    },
  },
]

export function Services() {
  const { t } = useLang()

  return (
    <section
      id="services"
      style={{
        padding: '7rem 3rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div className="section-label" style={{ marginBottom: '3.5rem' }}>
        {t('Lo que construimos juntos', 'What we build together')}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
        {services.map((s) => (
          <ServiceCard key={s.num} service={s} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const { t } = useLang()
  const content = t(service.es, service.en) as { title: string; desc: string }

  return (
    <div
      style={{
        background: 'var(--dk-white)',
        padding: '2.5rem',
        borderTop: '3px solid transparent',
        transition: 'border-color 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderTopColor = 'var(--dk-amber)')
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderTopColor = 'transparent')
      }
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.8rem',
          fontWeight: 400,
          color: 'rgba(29,28,51,0.08)',
          marginBottom: '1.5rem',
          lineHeight: 1,
        }}
      >
        {service.num}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--dk-dark)',
          marginBottom: '0.85rem',
          lineHeight: 1.35,
        }}
      >
        {content.title}
      </h3>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--dk-mid)',
          lineHeight: 1.8,
          fontWeight: 400,
        }}
      >
        {content.desc}
      </p>
    </div>
  )
}