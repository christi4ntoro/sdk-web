'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

export function CTASection() {
  const { t } = useLang()

  return (
    <section
      style={{
        background: 'var(--dk-dark)',
        padding: '7rem 3rem',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
            fontWeight: 400,
            color: 'var(--dk-white)',
            lineHeight: 1.2,
            marginBottom: '1.25rem',
          }}
        >
          {t(
            <>
              ¿Listo para construir
              <br />
              <em style={{ color: 'var(--dk-amber)', fontStyle: 'italic' }}>
                algo que funcione?
              </em>
            </>,
            <>
              Ready to build
              <br />
              <em style={{ color: 'var(--dk-amber)', fontStyle: 'italic' }}>
                something that works?
              </em>
            </>
          )}
        </h2>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '2.5rem',
            lineHeight: 1.75,
          }}
        >
          {t(
            'Cuéntenos sobre su proyecto. Respondemos en menos de 24 horas.',
            'Tell us about your project. We respond within 24 hours.'
          )}
        </p>
        <Link href="/contact" className="btn-amber">
          {t('Iniciar conversación', 'Start a conversation')}
        </Link>
      </div>
    </section>
  )
}
