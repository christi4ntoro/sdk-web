'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'

export function Footer() {
  const { t } = useLang()

  return (
    <footer
      style={{
        background: 'var(--dk-deep)',
        padding: '2.5rem 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <Image
        src="/shared/deki-logo.svg"
        alt="Studio Deki"
        width={130}
        height={28}
        style={{ height: '22px', width: 'auto', opacity: 0.3, filter: 'invert(1)' }}
      />

      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        {[
          { href: '/services' as const, es: 'Servicios', en: 'Services' },
          { href: '/about' as const, es: 'Nosotros', en: 'About' },
          { href: '/contact' as const, es: 'Contacto', en: 'Contact' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            {t(item.es, item.en)}
          </Link>
        ))}
      </div>

      <div
        style={{
          fontSize: '0.72rem',
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.04em',
        }}
      >
        studiodeki.co · info@studiodeki.co
      </div>
    </footer>
  )
}
