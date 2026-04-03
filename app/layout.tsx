import type { Metadata } from 'next'
import { Instrument_Serif, Syne } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/lib/lang-context'
import { ThemeProvider } from '@/lib/theme-context'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Studio Deki — Learning experiences that work',
  description:
    'Expert instructional design and AI-powered eLearning production. SCORM, xAPI, LMS. Corporate training for organizations that take learning seriously.',
  metadataBase: new URL('https://studiodeki.co'),
  openGraph: {
    title: 'Studio Deki',
    description: 'Learning experiences that work.',
    url: 'https://studiodeki.co',
    siteName: 'Studio Deki',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Deki',
    description: 'Learning experiences that work.',
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
    <html lang="es" className={`${instrumentSerif.variable} ${syne.variable}`}>
      <body>
      <ThemeProvider>
        <LangProvider>
          <Nav />
            <main>{children}</main>
          <Footer />
        </LangProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}