import type { Metadata } from 'next'
import { ManifestoContent } from '@/components/manifesto/ManifestoContent'
import esLocale from '@/locales/es.json'

// PT-BR: add 'pt' when ready. For now defaults to ES.
// Future: read locale from URL params (e.g. /es/manifesto, /en/manifesto).
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: esLocale.manifesto.meta_title,
    description: esLocale.manifesto.meta_desc,
    alternates: {
      languages: {
        es: '/manifesto',
        en: '/manifesto',
      },
    },
    openGraph: {
      title: esLocale.manifesto.meta_title,
      description: esLocale.manifesto.meta_og_desc,
    },
  }
}

export default function ManifestoPage() {
  return <ManifestoContent />
}
