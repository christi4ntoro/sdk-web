'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

export function Hero() {
  const { t } = useLang()

  return (
    <section
      style={{
        padding: '8rem 3rem 6rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Label */}
      <div className="section-label" style={{ marginBottom: '2rem' }}>
        {t(
          'eLearning corporativo · Colombia & Latinoamérica',
          'Corporate eLearning · Colombia & Latin America'
        )}
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.2rem, 6vw, 5.5rem)',
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          color: 'var(--dk-dark)',
          maxWidth: '820px',
          marginBottom: '2rem',
        }}
      >
        {t(
          <>
            Experiencias de<br />
            aprendizaje{' '}
            <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
              que
              <br />
              funcionan.
            </em>
          </>,
          <>
            Learning experiences
            <br />
            <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
              that actually
              <br />
              work.
            </em>
          </>
        )}
      </h1>

      {/* Sub */}
      <p
        style={{
          fontSize: '1.05rem',
          fontWeight: 400,
          color: 'var(--dk-mid)',
          maxWidth: '480px',
          lineHeight: 1.75,
          marginBottom: '3rem',
        }}
      >
        {t(
          'Diseño instruccional experto, producción potenciada por IA y contenido que su equipo retiene. Para organizaciones que toman en serio la formación.',
          'Expert instructional design, AI-powered production, and content your team actually retains. For organizations that take learning seriously.'
        )}
      </p>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <Link href="/contact" className="btn-primary">
          {t('Hablemos de su proyecto', "Let's talk about your project")}
        </Link>
        <Link href="/services" className="btn-ghost">
          {t('Ver servicios', 'Explore services')}
        </Link>
      </div>
    </section>
  )
}
