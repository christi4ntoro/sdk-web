import type { Metadata } from 'next'
import ServicesContent from '@/components/services/ServicesContent'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Cursos eLearning interactivos, formación en cumplimiento normativo y estrategia LMS. Todo diseñado con datos y producido con IA para que tu equipo realmente aprenda.',
  openGraph: {
    title: 'Servicios — Studio Deki',
    description: 'Cursos eLearning interactivos, formación en cumplimiento normativo y estrategia LMS para organizaciones que quieren formación que funciona.',
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}
