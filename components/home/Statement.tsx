'use client'

import { useLang } from '@/lib/lang-context'

export function Statement() {
  const { t } = useLang()

  return (
    <section className="dk-statement-section grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

      {/* Left */}
      <div>
        <h2 className="dk-statement-h2">
          {t(
            <>
              No fabricamos contenido.<br />
              <em className="dk-em">Diseñamos lo que tu equipo es capaz de hacer después.</em>
            </>,
            <>
              We don't manufacture content.<br />
              <em className="dk-em">We design what your team can do afterwards.</em>
            </>
          )}
        </h2>
        <p className="dk-statement-body">
          {t(
            'La mayoría del eLearning corporativo falla por la misma razón: fue diseñado para existir, no para funcionar. Nosotros empezamos por los datos. Qué necesita tu equipo, cómo aprende, qué contexto tiene. Eso define la estructura. El storytelling hace que se complete. Y la IA nos permite producir con una precisión y velocidad que antes era imposible.',
            "Most corporate eLearning fails for the same reason: it was designed to exist, not to work. We start with data. What your team needs, how they learn, what context they have. That defines the structure. Storytelling makes it stick. And AI lets us produce with a precision and speed that wasn't possible before."
          )}
        </p>
      </div>

      {/* Quote card */}
      <div className="dk-quote-card">
        <div className="dk-quote-accent" />
        <p className="dk-quote-text">
          {t(
            '"Hemos visto lo que pasa cuando la formación se diseña para cumplir informes. Nosotros la diseñamos para el momento en que alguien aplica lo que aprendió, y lo hace bien."',
            '"We\'ve seen what happens when training is built to fill reports. We build it for the moment someone applies what they learned, and gets it right."'
          )}
        </p>
        <div className="dk-quote-author">Studio Deki</div>
      </div>
    </section>
  )
}