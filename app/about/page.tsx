'use client'

import { useLang } from '@/lib/lang-context'

export default function AboutPage() {
  const { t } = useLang()

  return (
    <div style={{ background: 'var(--dk-surface)' }}>

      {/* Hero */}
      <section style={{ padding: '8rem 3rem 5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '2rem' }}>
          {t('Quiénes somos', 'Who we are')}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: '720px',
          }}
        >
          {t(
            <>
              Un estudio pequeño.
              <br />
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                Criterio grande.
              </em>
            </>,
            <>
              A small studio.
              <br />
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                High standards.
              </em>
            </>
          )}
        </h1>
      </section>

      {/* Body */}
      <section
        style={{
          padding: '0 3rem 8rem',
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: 'var(--dk-dark)',
              marginBottom: '2rem',
            }}
          >
            {t(
              'Studio Deki nació en 2016 como una apuesta por hacer el eLearning corporativo con la misma seriedad con la que se diseñan productos digitales. No plantillas. No volumen sin criterio. Contenido que las personas recuerdan.',
              'Studio Deki was founded in 2016 with a bet: that corporate eLearning could be made with the same rigor as product design. No templates. No volume without judgment. Content people actually remember.'
            )}
          </p>
          <p
            style={{
              fontSize: '0.9rem',
              lineHeight: 1.85,
              color: 'var(--dk-mid)',
            }}
          >
            {t(
              'Hoy operamos desde Lisboa y Barranquilla, combinando diseño instruccional experto con producción potenciada por IA. Somos dos personas. Trabajamos como un estudio, no como una fábrica.',
              'Today we operate from Lisbon and Barranquilla, combining expert instructional design with AI-powered production. We are two people. We work like a studio, not a factory.'
            )}
          </p>
        </div>

        {/* Team */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {[
            {
              initials: 'CT',
              es: { name: 'Christian Toro', role: 'Estrategia, producción & marca · Lisboa' },
              en: { name: 'Christian Toro', role: 'Strategy, production & brand · Lisbon' },
            },
            {
              initials: 'JD',
              es: { name: 'Juan David', role: 'Diseño instruccional & relaciones · Barranquilla' },
              en: { name: 'Juan David', role: 'Instructional design & client relations · Barranquilla' },
            },
          ].map((p) => {
            const person = t(p.es, p.en) as { name: string; role: string }
            return (
              <div
                key={p.initials}
                style={{
                  background: 'var(--dk-white)',
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--dk-dark)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    color: 'var(--dk-amber)',
                    flexShrink: 0,
                  }}
                >
                  {p.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: 'var(--dk-dark)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {person.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--dk-mid)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {person.role}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
