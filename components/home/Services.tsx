'use client'

import { useLang } from '@/lib/lang-context'

const services = [
  {
    num: '01',
    es: { title: 'Cursos eLearning a medida', desc: 'SCORM / xAPI. Interactivo. Alineado con su marca. Listo para cualquier LMS.' },
    en: { title: 'Custom eLearning courses', desc: 'SCORM / xAPI. Interactive. Brand-aligned. Deployable on any LMS.' },
  },
  {
    num: '02',
    es: { title: 'Capacitación en cumplimiento normativo', desc: 'Contenido técnico y legal convertido en formación clara, verificable y lista para auditoría.' },
    en: { title: 'Compliance training', desc: 'Technical and legal content turned into clear, verifiable, audit-ready training.' },
  },
  {
    num: '03',
    es: { title: 'Plataformas digitales de formación', desc: 'Implementación, configuración y acompañamiento de su LMS corporativo.' },
    en: { title: 'Learning management platforms', desc: 'LMS setup, configuration, and ongoing support for your corporate academy.' },
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
        {t('Lo que construimos', 'What we build')}
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px"
      >
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
          fontSize: '2.5rem',
          fontWeight: 400,
          color: 'rgba(29,28,51,0.1)',
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
          marginBottom: '0.75rem',
          lineHeight: 1.3,
        }}
      >
        {content.title}
      </h3>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--dk-mid)',
          lineHeight: 1.75,
          fontWeight: 400,
        }}
      >
        {content.desc}
      </p>
    </div>
  )
}
