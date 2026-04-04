import type { Metadata } from 'next'
import { ManifestoContent } from '@/components/manifesto/ManifestoContent'

export const metadata: Metadata = {
  title: 'Manifiesto — Studio Deki',
  description:
    'Empezamos con una idea simple. Que cualquier tema, por complejo que sea, puede ser entendido por cualquier persona, si alguien se toma el tiempo de diseñarlo bien.',
  openGraph: {
    title: 'Manifiesto — Studio Deki',
    description: 'Empezamos con una idea simple.',
  },
}

export default function ManifestoPage() {
  return <ManifestoContent />
}