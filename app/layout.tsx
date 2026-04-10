import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LangProvider } from '@/lib/lang-context'
import { ThemeProvider } from '@/lib/theme-context'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/layout/CookieConsent'
import { getAllPosts } from '@/lib/blog'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const BASE_URL = 'https://studiodeki.co'

// JSON-LD structured data
// ProfessionalService tells Google exactly what kind of business this is.
// WebSite enables the sitelinks search box in search results.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#organization`,
      name: 'Studio Deki',
      url: BASE_URL,
      logo: `${BASE_URL}/shared/deki-logo.svg`,
      email: 'info@studiodeki.co',
      description:
        'Estudio de estrategia, diseño y tecnología aplicada al aprendizaje corporativo. Diseño de experiencias elearning basado en datos, producción eLearning potenciada por IA y experiencias de formación que los equipos realmente completan.',
      slogan: 'Formación que cambia lo que tu equipo hace. No solo lo que sabe.',
      knowsAbout: [
        'eLearning corporativo',
        'Producción eLearning',
        'Formación corporativa',
        'Cursos SCORM',
        'xAPI',
        'Cumplimiento normativo',
        'Capacitación empresarial',
        'LMS',
        'Experiencias de aprendizaje',
        'Formación basada en datos',
        'Diseño instruccional',
        'eLearning a medida',
      ],
      areaServed: [
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'Country', name: 'Panama' },
        { '@type': 'Country', name: 'Mexico' },
        { '@type': 'Country', name: 'Peru' },
        { '@type': 'Country', name: 'Brazil' },
        { '@type': 'Country', name: 'Portugal' },
        { '@type': 'AdministrativeArea', name: 'Latin America' },
        { '@type': 'AdministrativeArea', name: 'Europe' },
      ],
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Studio Deki',
      publisher: { '@id': `${BASE_URL}/#organization` },
      inLanguage: ['es', 'en'],
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // Title template: page titles append "— Studio Deki" automatically
  title: {
    default: 'Studio Deki — Formación corporativa que funciona',
    template: '%s — Studio Deki',
  },

  description:
    'Estudio de diseño de experiencias eLearning y producción potenciada por IA. Cursos SCORM, xAPI, cumplimiento normativo y formación corporativa que tu equipo realmente completa. Colombia, Latinoamérica y Europa.',

  // Canonical and alternates for multilingual SEO
  alternates: {
    canonical: BASE_URL,
    languages: {
      'es': BASE_URL,
      'en': `${BASE_URL}/en`,
    },
  },

  // Open Graph — social sharing
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Studio Deki',
    title: 'Studio Deki — Formación corporativa que funciona',
    description:
      'Diseño de experiencias elearning basado en datos, producción eLearning con IA y experiencias de aprendizaje que los equipos realmente completan. 92% de tasa de finalización en Copa Airlines.',
    locale: 'es_CO',
    alternateLocale: ['en_US', 'es_ES'],
    // Drop a 1200x630px image at /public/og-image.jpg to activate
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Deki — Formación corporativa que funciona',
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Deki — Formación corporativa que funciona',
    description:
      'Diseño de experiencias elearning basado en datos, producción eLearning con IA y experiencias de aprendizaje que los equipos realmente completan. 92% de tasa de finalización en Copa Airlines.',
    images: ['/og-image.jpg'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification placeholders
  // Add your codes when you verify in Google Search Console / Bing
  verification: {
    google: '',
    // bing: '',
  },

  // App / PWA basics
  applicationName: 'Studio Deki',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Studio Deki', url: BASE_URL }],
  creator: 'Studio Deki',
  publisher: 'Studio Deki',

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const posts = getAllPosts()

  return (
    <html lang="es" className={plusJakarta.variable} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Theme init — blocks paint to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('sdk-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
        {/* Structured data — JSON-LD */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <ThemeProvider>
          <LangProvider>
            <Nav posts={posts} />
            <main id="main-content">{children}</main>
            <Footer />
            <CookieConsent />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}