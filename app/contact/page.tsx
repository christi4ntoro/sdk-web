import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Cuéntanos el reto de formación de tu organización. Analizamos tu caso y te proponemos la solución más adecuada para tu equipo y tu presupuesto.',
  openGraph: {
    title: 'Contacto — Studio Deki',
    description: 'Cuéntanos el reto de formación de tu organización. Analizamos tu caso y te proponemos la solución más adecuada.',
  },
}

export default function ContactPage() {
  return <ContactForm />
}
