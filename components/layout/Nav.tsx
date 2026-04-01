'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang, type Lang } from '@/lib/lang-context'

export function Nav() {
  const { lang, setLang, t } = useLang()

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--dk-surface)',
        borderBottom: '1px solid var(--dk-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 3rem',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image
          src="/shared/deki-logo.svg"
          alt="Studio Deki"
          width={160}
          height={34}
          priority
          style={{ height: '28px', width: 'auto' }}
        />
      </Link>

      {/* Links */}
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          listStyle: 'none',
        }}
      >
        {[
          { href: '/services', es: 'Servicios', en: 'Services' },
          { href: '/about', es: 'Nosotros', en: 'About' },
          { href: '/blog', es: 'Blog', en: 'Blog' },
          { href: '/contact', es: 'Contacto', en: 'Contact' },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: 'var(--dk-mid)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--dk-dark)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--dk-mid)')
              }
            >
              {t(item.es, item.en)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Language toggle */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          background: 'var(--dk-dark)',
          borderRadius: '100px',
          padding: '0.25rem',
        }}
      >
        {(['es', 'en'] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              padding: '0.3rem 0.8rem',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              background: lang === l ? 'var(--dk-amber)' : 'transparent',
              color: lang === l ? 'var(--dk-dark)' : 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
            }}
          >
            {l}
          </button>
        ))}
      </div>
    </nav>
  )
}


