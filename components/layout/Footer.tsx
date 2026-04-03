'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { ComponentProps } from 'react'
import { useLang, type Lang } from '@/lib/lang-context'

type LinkHref = ComponentProps<typeof Link>['href']

const navLinks = [
  { href: '/services',  es: 'Servicios',    en: 'Services'  },
  { href: '/insights',  es: 'Perspectivas', en: 'Insights'  },
  { href: '/manifesto', es: 'Manifiesto',   en: 'Manifesto' },
  { href: '/contact',   es: 'Contacto',     en: 'Contact'   },
] as const

// Extracted outside JSX to avoid template literal / angle-bracket parser conflict
const chevronSvg = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E\")"

export function Footer() {
  const { lang, setLang, t } = useLang()

  return (
    <footer
      style={{
        background: 'var(--dk-deep)',
        padding: '4rem 3rem 2.5rem',
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}
      >
        {/* Logo + subscription seed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Image
            src="/shared/deki-logo.svg"
            alt="Studio Deki"
            width={130}
            height={28}
            style={{ height: '22px', width: 'auto', opacity: 0.35, filter: 'invert(1)' }}
          />
          <p
            style={{
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.7,
              maxWidth: '280px',
            }}
          >
            {t(
              'Buscas un socio de aprendizaje para todo el año. Pregúntanos por nuestros programas de acompañamiento continuo.',
              'Looking for a learning partner year-round. Ask us about our continuous partnership programs.'
            )}
          </p>
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href as LinkHref}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: 'rgba(255,255,255,0.35)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.35)'
              }}
            >
              {t(item.es, item.en)}
            </Link>
          ))}
        </nav>

        {/* Contact + language select */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a
            href="mailto:info@studiodeki.co"
            style={{
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.35)'
            }}
          >
            info@studiodeki.co
          </a>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            aria-label={t('Idioma', 'Language')}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '3px',
              padding: '0.4rem 0.75rem',
              paddingRight: '2rem',
              cursor: 'pointer',
              outline: 'none',
              appearance: 'none',
              WebkitAppearance: 'none',
              backgroundImage: chevronSvg,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.6rem center',
            }}
          >
            <option value="es">ES — Español</option>
            <option value="en">EN — English</option>
            {/* PT: <option value="pt">PT — Português</option> */}
          </select>
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.04em' }}>
          studiodeki.co
        </span>
        <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.04em' }}>
          © 2026 Studio Deki
        </span>
      </div>
    </footer>
  )
}