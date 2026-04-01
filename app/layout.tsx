import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/lib/lang-context'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Studio Deki — Experiencias de aprendizaje que funcionan',
  description:
    'Diseño instruccional experto y producción eLearning potenciada por IA. SCORM, xAPI, LMS. Colombia y Latinoamérica.',
  metadataBase: new URL('https://studiodeki.co'),
  openGraph: {
    title: 'Studio Deki',
    description: 'Experiencias de aprendizaje que funcionan.',
    url: 'https://studiodeki.co',
    siteName: 'Studio Deki',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Deki',
    description: 'Experiencias de aprendizaje que funcionan.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
