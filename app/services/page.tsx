'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

const services = [
  {
    num: '01',
    es: {
      title: 'Cursos eLearning a medida',
      body: 'Desarrollamos contenido interactivo alineado con su marca, sus procesos y su audiencia. Cada módulo pasa por análisis instruccional, diseño visual y pruebas de usabilidad antes de la entrega. Estándar SCORM 1.2 / xAPI. Compatible con cualquier LMS.',
      bullets: [
        'Guión y diseño instruccional',
        'Locución profesional en español neutro o colombiano',
        'Animación, video e infografías',
        'Evaluaciones y trazabilidad de aprendizaje',
        'Entrega en SCORM 1.2 o xAPI',
      ],
    },
    en: {
      title: 'Custom eLearning courses',
      body: 'We develop interactive content aligned with your brand, processes, and audience. Every module goes through instructional analysis, visual design, and usability testing before delivery. SCORM 1.2 / xAPI standard. Compatible with any LMS.',
      bullets: [
        'Script and instructional design',
        'Professional voiceover in Spanish or English',
        'Animation, video, and infographics',
        'Assessments and learning tracking',
        'Delivery in SCORM 1.2 or xAPI',
      ],
    },
  },
  {
    num: '02',
    es: {
      title: 'Capacitación en cumplimiento normativo',
      body: 'Convertimos normas complejas en formación clara, verificable y lista para auditoría. Trabajamos con equipos de RRHH, Legal y Cumplimiento para garantizar precisión técnica y retención real. Especialidad en SGSST, LAFT, PTEP y reformas laborales.',
      bullets: [
        'Análisis de la norma y brechas de conocimiento',
        'Módulos por rol: supervisores, empleados, directivos',
        'Registro de evidencias para auditoría',
        'Actualizaciones cuando cambia la norma',
        'Disponible en español e inglés',
      ],
    },
    en: {
      title: 'Compliance training',
      body: 'We turn complex regulations into clear, verifiable, audit-ready training. We work with HR, Legal, and Compliance teams to ensure technical accuracy and real retention. Specializing in Colombian labor reform, SGSST, and AML/LAFT.',
      bullets: [
        'Regulatory analysis and knowledge gap mapping',
        'Role-specific modules: supervisors, employees, executives',
        'Audit-ready evidence records',
        'Updates when regulations change',
        'Available in Spanish and English',
      ],
    },
  },
  {
    num: '03',
    es: {
      title: 'Plataformas digitales de formación (LMS)',
      body: 'Implementamos y configuramos su academia corporativa. Desde la instalación hasta la adopción por parte del equipo. Trabajamos con Moodle, TalentLMS, LearnDash y otras plataformas. Si ya tiene un LMS, lo optimizamos.',
      bullets: [
        'Selección e implementación de LMS',
        'Migración de contenido existente',
        'Configuración de usuarios, grupos y currículos',
        'Capacitación a administradores',
        'Soporte mensual disponible',
      ],
    },
    en: {
      title: 'Learning management platforms (LMS)',
      body: 'We implement and configure your corporate academy from installation to team adoption. We work with Moodle, TalentLMS, LearnDash, and others. If you already have an LMS, we optimize it.',
      bullets: [
        'LMS selection and implementation',
        'Existing content migration',
        'User, group, and curriculum configuration',
        'Admin training',
        'Monthly support available',
      ],
    },
  },
]

export default function ServicesPage() {
  const { t } = useLang()

  return (
    <div style={{ background: 'var(--dk-surface)' }}>

      {/* Hero */}
      <section style={{ padding: '8rem 3rem 5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '2rem' }}>
          {t('Lo que construimos', 'What we build')}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: '700px',
          }}
        >
          {t(
            <>
              Formación que su organización
              <br />
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                puede demostrar.
              </em>
            </>,
            <>
              Training your organization
              <br />
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                can prove.
              </em>
            </>
          )}
        </h1>
      </section>

      {/* Services list */}
      <section style={{ padding: '0 3rem 8rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {services.map((s) => {
            const content = t(s.es, s.en) as typeof s.es
            return (
              <div
                key={s.num}
                style={{
                  background: 'var(--dk-white)',
                  padding: '3rem',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr 1fr',
                  gap: '3rem',
                  alignItems: 'start',
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 400,
                    color: 'rgba(29,28,51,0.1)',
                    lineHeight: 1,
                    paddingTop: '0.25rem',
                  }}
                >
                  {s.num}
                </div>

                {/* Title + body */}
                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--dk-dark)',
                      marginBottom: '1rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {content.title}
                  </h2>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--dk-mid)',
                      lineHeight: 1.8,
                    }}
                  >
                    {content.body}
                  </p>
                </div>

                {/* Bullets */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {content.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--dk-dark)',
                        lineHeight: 1.5,
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'flex-start',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--dk-amber)',
                          flexShrink: 0,
                          marginTop: '0.45rem',
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dk-dark)', padding: '6rem 3rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 400,
              color: 'var(--dk-white)',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}
          >
            {t('¿Por dónde empezamos?', 'Where do we start?')}
          </h2>
          <p
            style={{
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '2.5rem',
              lineHeight: 1.75,
            }}
          >
            {t(
              'Cuéntenos el reto. Le diremos qué servicio tiene más sentido para su organización.',
              "Tell us the challenge. We'll tell you which service makes the most sense for your organization."
            )}
          </p>
          <Link href="/contact" className="btn-amber">
            {t('Iniciar conversación', 'Start a conversation')}
          </Link>
        </div>
      </section>

    </div>
  )
}
