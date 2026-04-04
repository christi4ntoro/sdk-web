import { Hero } from '@/components/home/Hero'
import { NumbersBand } from '@/components/home/NumbersBand'
import { Services } from '@/components/home/Services'
import { ClientLogos } from '@/components/home/ClientLogos'
import { Statement } from '@/components/home/Statement'
import { ManifestoTeaser } from '@/components/home/ManifestoTeaser'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <NumbersBand />
      <Services />
      <ClientLogos />
      <Statement />
      <ManifestoTeaser />
      <CTASection />
    </>
  )
}
