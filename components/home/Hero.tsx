'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

export function Hero() {
  const { t } = useLang()

  return (
    <section className="dk-hero">
      <div className="section-label dk-hero-label">
        {t(
          'Formación corporativa · Experiencias que transforman equipos',
          'Corporate training · Experiences that transform teams'
        )}
      </div>

      <h1 className="dk-hero-h1">
        {t(
          <>
            Formación que cambia<br />
            lo que tu equipo{' '}
            <em className="dk-em">hace.<br />No solo lo que sabe.</em>
          </>,
          <>
            Training that changes<br />
            what your team{' '}
            <em className="dk-em">does.<br />Not just what they know.</em>
          </>
        )}
      </h1>

      <p className="dk-body dk-hero-sub">
        {t(
          'Decisiones basadas en datos, producción potenciada por IA y contenido que tu organización realmente finaliza.',
          'Data-driven decisions, AI-powered production, and content your organization actually completes.'
        )}
      </p>

      <div className="dk-hero-ctas">
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