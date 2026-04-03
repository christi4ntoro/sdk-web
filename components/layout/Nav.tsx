'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { ComponentProps } from 'react'
import { useLang } from '@/lib/lang-context'

type LinkHref = ComponentProps<typeof Link>['href']

const navLinks = [
  { href: '/services', es: 'Servicios', en: 'Services' },
  { href: '/insights', es: 'Perspectivas', en: 'Insights' },
  { href: '/manifesto', es: 'Manifiesto', en: 'Manifesto' },
] as const

export function Nav() {
  const { t } = useLang()

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
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href as LinkHref}
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
                ((e.currentTarget as HTMLElement).style.color = 'var(--dk-dark)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--dk-mid)')
              }
            >
              {t(item.es, item.en)}
            </Link>
          </li>
        ))}

        {/* CTA */}
        <li>
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: 'var(--dk-surface)',
              background: 'var(--dk-dark)',
              padding: '0.45rem 1.1rem',
              borderRadius: '3px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = '0.8')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = '1')
            }
          >
            {t('Hablemos', 'Start here')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}