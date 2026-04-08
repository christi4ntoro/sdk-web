import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { InsightsContent } from '@/components/insights/InsightsContent'

export const metadata: Metadata = {
  title: 'Perspectivas',
  description: 'Artículos sobre diseño de experiencias eLearning, tecnología educativa, cumplimiento normativo y estrategia de aprendizaje corporativo.',
  openGraph: {
    title: 'Perspectivas — Studio Deki',
    description: 'Ideas y análisis sobre eLearning corporativo, diseño instruccional, IA aplicada al aprendizaje y estrategia de formación.',
  },
}

export default function InsightsPage() {
  const posts = getAllPosts()
  return <InsightsContent posts={posts} />
}