'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

export function Hero() {
  const { t } = useLang()

  return (
    <section
      style={{
        padding: '9rem 3rem 7rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div className="section-label" style={{ marginBottom: '2.5rem' }}>
        {t(
          'Formación corporativa · Experiencias que transforman equipos',
          'Corporate training · Experiences that transform teams'
        )}
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.2rem, 6vw, 5.8rem)',
          fontWeight: 400,
          lineHeight: 1.06,
          letterSpacing: '-0.02em',
          color: 'var(--dk-dark)',
          maxWidth: '860px',
          marginBottom: '2.25rem',
        }}
      >
        {t(
          <>
            Formación que cambia
            <br />
            lo que tu equipo{' '}
            <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
              hace.
              <br />
              No solo lo que sabe.
            </em>
          </>,
          <>
            Training that changes
            <br />
            what your team{' '}
            <em style={{ color: 'var(--dk-mid)', fontStyle: 'italic' }}>
              does.
              <br />
              Not just what they know.
            </em>
          </>
        )}
      </h1>

      <p
        style={{
          fontSize: '1.05rem',
          fontWeight: 400,
          color: 'var(--dk-mid)',
          maxWidth: '500px',
          lineHeight: 1.8,
          marginBottom: '3.25rem',
        }}
      >
        {t(
          'Producción potenciada por IA, decisiones basadas en datos y contenido que tu organización realmente completa.',
          'AI-powered production, data-driven decisions and content your organization actually completes.'
        )}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.75rem',
          flexWrap: 'wrap',
        }}
      >
        <Link href="/contact" className="btn-primary">
          {t('Cuéntanos tu reto', 'Tell us your challenge')}
        </Link>
        <Link href="/services" className="btn-ghost">
          {t('Ver servicios', 'Explore services')}
        </Link>
      </div>
    </section>
  )
}