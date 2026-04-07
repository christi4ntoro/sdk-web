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
    <div className="dk-services-page">
      <section className="dk-services-hero">
        <div className="section-label dk-services-hero-label">
          {t('Lo que construimos juntos', 'What we build together')}
        </div>
        <h1 className="dk-services-heading">
          {t(
            <>
              Construimos lo que tu organización
              <br />
              <em>necesita aprender.</em>
            </>,
            <>
              We build what your organization
              <br />
              <em>needs to learn.</em>
            </>
          )}
        </h1>
        <p className="dk-body dk-services-lead">
          {t(
            'Tres áreas. Un solo criterio: que funcione de verdad.',
            'Three areas. One single standard: it has to actually work.'
          )}
        </p>
      </section>

      <section className="dk-services-list-section">
        <div className="dk-services-list">
          {services.map((s) => {
            const content = t(s.es, s.en) as typeof s.es
            return (
              <div key={s.num} className="dk-service-row">
                <div className="dk-service-number">{s.num}</div>
                <div className="dk-service-inner">
                  <div>
                    <h2 className="dk-service-title">{content.title}</h2>
                    <p className="dk-body dk-service-desc">{content.body}</p>
                  </div>
                  <ul className="dk-service-bullets">
                    {content.bullets.map((b) => (
                      <li key={b} className="dk-service-li">
                        <span className="dk-service-bullet" />
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

      <section className="dk-services-cta">
        <div className="dk-services-cta-inner">
          <h2 className="dk-services-cta-heading">
            {t(
              <>
                ¿Cuál es el reto de aprendizaje
                <br />
                <em>de tu organización?</em>
              </>,
              <>
                What is your organization's
                <br />
                <em>learning challenge?</em>
              </>
            )}
          </h2>
          <p className="dk-services-cta-lead">
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
    </div>
  )
}
