'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

export function ManifestoTeaser() {
  const { t } = useLang()

  return (
    <section className="dk-manifesto-teaser">
      <div className="dk-manifesto-teaser-inner">
        <div className="section-label dk-manifesto-teaser-label">
          {t('Manifiesto', 'Manifesto')}
        </div>
        <p className="dk-manifesto-teaser-text">
          {t(
            <>
              Somos un estudio de estrategia, diseño
              y tecnología aplicada al aprendizaje.
              <br /><br />
              <span className="dk-text-mid">
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
              <span className="dk-text-mid">
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