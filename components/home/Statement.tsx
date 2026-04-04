'use client'

import { useLang } from '@/lib/lang-context'

export function Statement() {
  const { t } = useLang()

  return (
    <section
      style={{
        padding: '8rem 3rem',
        maxWidth: '1100px',
        margin: '0 auto',
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
            marginBottom: '1.75rem',
            color: 'var(--dk-dark)',
          }}
        >
          {t(
            <>
              No fabricamos contenido.
              <br />
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                Diseñamos lo que tu equipo
                es capaz de hacer después.
              </em>
            </>,
            <>
              We don't manufacture content.
              <br />
              <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
                We design what your team
                can do afterwards.
              </em>
            </>
          )}
        </h2>
        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--dk-mid)',
            lineHeight: 1.9,
            fontWeight: 400,
          }}
        >
          {t(
            'La mayoría del eLearning corporativo falla por la misma razón: fue diseñado para existir, no para funcionar. Nosotros empezamos por los datos. Qué necesita tu equipo, cómo aprende, qué contexto tiene. Eso define la estructura. El storytelling hace que se complete. Y la IA nos permite producir con una precisión y velocidad que antes era imposible.',
            "Most corporate eLearning fails for the same reason: it was designed to exist, not to work. We start with data. What your team needs, how they learn, what context they have. That defines the structure. Storytelling makes it stick. And AI lets us produce with a precision and speed that wasn't possible before."
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
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}
        >
          {t(
            '"Hemos visto lo que pasa cuando la formación se diseña para cumplir informes. Nosotros la diseñamos para el momento en que alguien aplica lo que aprendió, y lo hace bien."',
            '"We\'ve seen what happens when training is built to fill reports. We build it for the moment someone applies what they learned, and gets it right."'
          )}
        </p>
        <div
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          Studio Deki
        </div>
      </div>
    </section>
  )
}