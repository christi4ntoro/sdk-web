'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { useLang, type Lang } from '@/lib/lang-context'
import { useTheme } from '@/lib/theme-context'

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
  const { theme, toggleTheme } = useTheme()

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
          <svg
            height="22"
            viewBox="0 0 841 318"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Studio Deki"
            style={{ width: 'auto', opacity: 0.35 }}
          >
            <path d="M399.816 164.594V144.611C399.816 135.572 396.699 127.906 390.477 121.672C384.232 115.455 376.588 112.317 367.527 112.317C358.455 112.317 350.738 115.455 344.371 121.672C337.999 127.906 334.816 135.572 334.816 144.611V164.594C334.816 168.006 336.644 169.683 340.327 169.683H394.305C397.971 169.683 399.816 168.006 399.816 164.594ZM436.771 248.311C436.771 267.289 430.044 283.561 416.599 297.161C403.149 310.767 386.782 317.567 367.527 317.567C348.26 317.567 331.838 310.839 318.227 297.378C304.633 283.922 297.838 267.561 297.838 248.311V144.611C297.838 125.361 304.633 108.989 318.227 95.5444C331.838 82.0999 348.26 75.3555 367.527 75.3555C386.782 75.3555 403.149 82.0999 416.599 95.5444C430.044 108.989 436.771 125.361 436.771 144.611V201.561C436.771 204.956 434.938 206.661 431.26 206.661H340.327C336.644 206.661 334.816 208.361 334.816 211.756V248.311C334.816 257.367 337.999 265.017 344.371 271.256C350.738 277.489 358.455 280.595 367.527 280.595C376.588 280.595 384.232 277.417 390.477 271.028C396.699 264.672 399.816 257.078 399.816 248.311V236.828C399.816 233.15 401.521 231.306 404.916 231.306H431.26C434.938 231.306 436.771 233.15 436.771 236.828V248.311Z" />
            <path d="M840.566 309.495C840.566 312.89 838.866 314.595 835.471 314.595H809.127C805.716 314.595 804.022 312.89 804.022 309.495V80.4504C804.022 77.056 805.716 75.356 809.127 75.356H835.471C838.866 75.356 840.566 77.056 840.566 80.4504V309.495ZM840.566 32.0226C840.566 35.7004 838.866 37.5559 835.471 37.5559H809.127C805.716 37.5559 804.022 35.7004 804.022 32.0226V5.66704C804.022 2.00037 805.716 0.150391 809.127 0.150391H835.471C838.866 0.150391 840.566 2.00037 840.566 5.66704V32.0226Z" />
            <path d="M215.716 228.422C215.716 238 212.271 246.222 205.388 253.106C198.494 259.989 190.271 263.434 180.705 263.434H86.1656C76.5822 263.434 68.3545 259.989 61.4656 253.106C54.5712 246.222 51.1378 238 51.1378 228.422V227.017C51.1378 217.211 54.5712 208.867 61.4656 201.978C68.3545 195.106 76.5822 191.65 86.1656 191.65H211.51C214.321 191.65 215.716 193.045 215.716 195.856V228.422ZM301.421 0.00555251C301.277 0.00555251 301.127 0 300.988 0V0.02221C277.538 0.22221 257.538 8.66667 240.921 25.3889C224.127 42.3056 215.716 62.5667 215.716 86.139V140.522H86.1656C62.3489 140.522 42.0879 148.945 25.4101 165.733C8.71009 182.55 0.243425 202.845 0.00453635 226.661V228.078C-0.223242 251.878 8.12687 272.245 25.0436 289.161C41.9825 306.095 62.3489 314.556 86.1656 314.556H180.705C204.51 314.556 224.816 306.15 241.632 289.339C258.438 272.545 266.844 252.239 266.844 228.422V86.139C266.844 76.5668 270.232 68.3445 277.005 61.4389C283.66 54.6723 291.794 51.2278 301.421 51.1278V0.00555251Z" />
            <path d="M686.488 58.6556C696.677 49.3667 708.566 44.7278 722.472 44.7278H773.472V0H671.36C657.549 0 645.655 4.33889 635.877 13.1222C626.005 21.9056 621.049 32.4223 621.049 44.7278V92.6778C621.049 106.006 616.027 117.328 605.933 126.6C595.866 136 583.86 140.628 570.06 140.628C556.133 140.628 544.244 135.2 534.066 124.189C524.149 113.439 519.11 101.045 518.966 86.8834V86.1389C518.966 62.5723 510.56 42.3056 493.749 25.3889C477.16 8.66667 457.127 0.222219 433.705 0.00555251C433.571 0.00555251 433.405 0.00555251 433.271 0.00555251V51.1334C442.871 51.2278 451.016 54.6723 457.688 61.4389C464.46 68.3445 467.838 76.5667 467.838 86.1389V314.561H518.955V238.884C518.955 225.05 523.988 213.239 534.066 203.361C544.244 193.45 556.133 188.6 570.06 188.6H671.36C685.672 188.6 697.788 193.45 707.655 203.361C717.538 213.239 722.472 225.05 722.472 238.884V314.561H773.472V188.6C773.472 174.167 768.538 162.55 758.772 153.783C748.888 144.972 736.888 140.628 722.872 140.628C708.772 140.628 696.677 136 686.488 126.6C676.399 117.328 671.36 106.006 671.36 92.6778C671.36 79.3612 676.399 68.0445 686.488 58.6556Z" />
            <path d="M613.721 233.022C604.355 233.022 596.299 236.389 589.588 243.095C582.871 249.817 579.505 257.861 579.505 267.245C579.505 276.606 582.871 284.656 589.588 291.361C596.299 298.106 604.355 301.456 613.721 301.456C623.105 301.456 631.144 298.106 637.86 291.361C644.588 284.656 647.944 276.606 647.944 267.245C647.944 257.861 644.588 249.817 637.86 243.095C631.144 236.389 623.105 233.022 613.721 233.022Z" />
          </svg>
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

          <button
            onClick={toggleTheme}
            aria-label={t('Cambiar tema', 'Toggle theme')}
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '3px',
              padding: '0.4rem 0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.5)',
              transition: 'color 0.2s, border-color 0.2s',
              width: '100%',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.color = 'rgba(255,255,255,0.9)'
              el.style.borderColor = 'rgba(255,255,255,0.3)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.color = 'rgba(255,255,255,0.5)'
              el.style.borderColor = 'rgba(255,255,255,0.12)'
            }}
          >
            {theme === 'light' ? (
              // Moon icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              // Sun icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

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