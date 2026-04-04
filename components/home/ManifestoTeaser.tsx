'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

export function ManifestoTeaser() {
  const { t } = useLang()

  return (
    <section
      style={{
        padding: '8rem 3rem',
        background: 'var(--dk-surface)',
      }}
    >
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div className="section-label" style={{ marginBottom: '3rem', justifyContent: 'center' }}>
          {t('Manifiesto', 'Manifesto')}
        </div>

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
            fontWeight: 400,
            lineHeight: 1.55,
            color: 'var(--dk-dark)',
            marginBottom: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          {t(
            <>
              Somos un estudio de estrategia, diseño
              y tecnología aplicada al aprendizaje.
              <br /><br />
              <span style={{ color: 'var(--dk-mid)' }}>
                El dato es nuestro punto de partida.
                El diseño es nuestra forma de pensar.
                La tecnología es lo que nos permite escalar.
                Los resultados son nuestra única métrica.
              </span>
            </>,
            <>
              We are a strategy, design and technology
              studio applied to learning.
              <br /><br />
              <span style={{ color: 'var(--dk-mid)' }}>
                Data is our starting point.
                Design is how we think.
                Technology is what lets us scale.
                Results are our only metric.
              </span>
            </>
          )}
        </p>

        <Link href="/manifesto" className="btn-ghost">
          {t('Leer nuestro manifiesto', 'Read our manifesto')}
        </Link>
      </div>
    </section>
  )
}