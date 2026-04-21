import { getAllPosts } from '@/lib/blog'
import { Hero } from '@/components/home/Hero'
import { ProjectsCovers } from '@/components/home/ProjectsCovers'
import { NumbersBand } from '@/components/home/NumbersBand'
import { Services } from '@/components/home/Services'
import { ClientLogos } from '@/components/home/ClientLogos'
import { Statement } from '@/components/home/Statement'
import { ManifestoTeaser } from '@/components/home/ManifestoTeaser'
import { LatestInsights } from '@/components/home/LatestInsights'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3)
  return (
    <>
      <Hero />
      <ProjectsCovers />
      <ClientLogos />
      <NumbersBand />
      <Services />
      <Statement />
      <ManifestoTeaser />
      <LatestInsights posts={latestPosts} />
      <CTASection />
    </>
  )
}
