'use client'

import { useLang } from '@/lib/lang-context'

export function Statement() {
  const { t } = useLang()

  return (
    <section
      style={{ 
        padding: '8rem 3rem', 
        maxWidth: '1100px', 
        margin: '0 auto' 
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center"
    >
      {/* Left */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}
        >
          {t(
            <>
              Diseño instruccional
              <br />
              experto.{' '}
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                Producción
                <br />
                potenciada por IA.
              </em>
            </>,
            <>
              Expert instructional
              <br />
              design.{' '}
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                AI-powered
                <br />
                production.
              </em>
            </>
          )}
        </h2>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--dk-mid)',
            lineHeight: 1.85,
            fontWeight: 400,
          }}
        >
          {t(
            'No fabricamos plantillas. Analizamos su contexto, entendemos su audiencia y construimos contenido que cambia comportamientos. La IA acelera nuestra producción. La experiencia define la calidad.',
            "We don't manufacture templates. We analyze your context, understand your audience, and build content that changes behavior. AI accelerates our production. Experience defines the quality."
          )}
        </p>
      </div>

      {/* Right — quote card */}
      <div
        style={{
          background: 'var(--dk-dark)',
          padding: '3rem',
          position: 'relative',
        }}
      >
        {/* Amber accent square */}
        <div
          style={{
            position: 'absolute',
            top: '-1.25rem',
            left: '1.25rem',
            width: '2.5rem',
            height: '2.5rem',
            background: 'var(--dk-amber)',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: 'var(--dk-white)',
            lineHeight: 1.65,
            marginBottom: '2rem',
          }}
        >
          {t(
            '"Construimos lo que su organización necesita aprender — no lo que es fácil de producir."',
            '"We build what your organization needs to learn — not what\'s easy to produce."'
          )}
        </p>
        <div
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          Studio Deki
        </div>
      </div>
    </section>
  )
}
