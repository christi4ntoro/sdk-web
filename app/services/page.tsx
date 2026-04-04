'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

const services = [
  {
    num: '01',
    es: {
      title: 'Cursos que tu equipo realmente termina',
      body: 'Desarrollamos contenido interactivo alineado con tu marca, tus procesos y tu audiencia. Cada módulo pasa por análisis de datos, diseño de experiencia y pruebas antes de la entrega. Estándar SCORM 1.2 / xAPI. Compatible con cualquier LMS.',
      bullets: [
        'Análisis de necesidades y diseño instruccional',
        'Narrativa y storytelling que engancha',
        'Animación, video e infografías',
        'Evaluaciones y trazabilidad de aprendizaje',
        'Entrega en SCORM 1.2 o xAPI',
      ],
    },
    en: {
      title: 'Courses your team actually completes',
      body: 'We develop interactive content aligned with your brand, processes, and audience. Every module goes through data analysis, experience design, and testing before delivery. SCORM 1.2 / xAPI standard. Compatible with any LMS.',
      bullets: [
        'Needs analysis and instructional design',
        'Narrative and storytelling that hooks',
        'Animation, video, and infographics',
        'Assessments and learning tracking',
        'Delivery in SCORM 1.2 or xAPI',
      ],
    },
  },
  {
    num: '02',
    es: {
      title: 'Cumplimiento que funciona más allá de la auditoría',
      body: 'Convertimos normas complejas en formación que tu equipo comprende, aplica y recuerda. Trabajamos con equipos de RRHH, Legal y Cumplimiento para garantizar precisión técnica y retención real. Especialidad en SGSST, LAFT, PTEP y reformas laborales.',
      bullets: [
        'Análisis de la norma y brechas de conocimiento',
        'Módulos por rol: supervisores, empleados, directivos',
        'Registro de evidencias para auditoría',
        'Actualizaciones cuando cambia la norma',
        'Disponible en español e inglés',
      ],
    },
    en: {
      title: 'Compliance that works beyond the audit',
      body: 'We turn complex regulations into training your team understands, applies and remembers. We work with HR, Legal, and Compliance teams to ensure technical accuracy and real retention. Specializing in Colombian labor reform, SGSST, and AML/LAFT.',
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
      title: 'Estrategia para sacar el máximo a tu plataforma',
      body: 'No necesitas otra plataforma. Necesitas saber cómo hacer que la que tienes trabaje para tu gente. Analizamos tu contexto, diseñamos la estrategia de difusión, los flujos de aprendizaje y la experiencia del usuario dentro de tu LMS.',
      bullets: [
        'Diagnóstico de tu plataforma actual',
        'Estrategia de difusión y adopción',
        'Diseño de flujos y currículos',
        'Experiencia de usuario para el aprendiz',
        'Capacitación a administradores',
      ],
    },
    en: {
      title: 'Strategy to maximize your learning platform',
      body: "You don't need another platform. You need to know how to make the one you have work for your people. We analyze your context, design the diffusion strategy, learning flows and user experience inside your LMS.",
      bullets: [
        'Diagnosis of your current platform',
        'Diffusion and adoption strategy',
        'Flow and curriculum design',
        'Learner user experience',
        'Admin training',
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
          {t('Lo que construimos juntos', 'What we build together')}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: '700px',
            color: 'var(--dk-dark)',
          }}
        >
          {t(
            <>
              Construimos lo que tu organización
              <br />
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                necesita aprender.
              </em>
            </>,
            <>
              We build what your organization
              <br />
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                needs to learn.
              </em>
            </>
          )}
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--dk-mid)',
            lineHeight: 1.8,
            maxWidth: '480px',
            marginTop: '1.75rem',
          }}
        >
          {t(
            'Tres áreas. Un solo criterio: que funcione de verdad.',
            'Three areas. One single standard: it has to actually work.'
          )}
        </p>
      </section>

      {/* Services list */}
      <section style={{ padding: '0 3rem 8rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {services.map((s) => {
            const content = t(s.es, s.en) as typeof s.es
            return (
              <div
                key={s.num}
                className="service-row"
                style={{
                  background: 'var(--dk-white)',
                  padding: '3rem',
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 400,
                    color: 'rgba(29,28,51,0.08)',
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                  }}
                >
                  {s.num}
                </div>

                <div className="service-inner">
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
                        lineHeight: 1.85,
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
            {t(
              <>
                ¿Cuál es el reto de aprendizaje
                <br />
                <em style={{ color: 'var(--dk-amber)', fontStyle: 'italic' }}>
                  de tu organización?
                </em>
              </>,
              <>
                What is your organization's
                <br />
                <em style={{ color: 'var(--dk-amber)', fontStyle: 'italic' }}>
                  learning challenge?
                </em>
              </>
            )}
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
              'Cuéntanos el reto. Te decimos qué tiene más sentido para tu organización.',
              "Tell us the challenge. We'll tell you what makes the most sense for your organization."
            )}
          </p>
          <Link href="/contact" className="btn-amber">
            {t('Quiero una solución', 'Find my solution')}
          </Link>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        .service-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .service-inner {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .service-row {
            padding: 2rem !important;
          }
        }
      `}</style>
    </div>
  )
}