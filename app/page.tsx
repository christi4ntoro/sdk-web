import fs from 'fs'
import path from 'path'
import { getAllPosts } from '@/lib/blog'
import { Hero } from '@/components/home/Hero'
import { CourseCovers } from '@/components/home/CourseCovers'
import { NumbersBand } from '@/components/home/NumbersBand'
import { Services } from '@/components/home/Services'
import { ClientLogos } from '@/components/home/ClientLogos'
import { Statement } from '@/components/home/Statement'
import { ManifestoTeaser } from '@/components/home/ManifestoTeaser'
import { LatestInsights } from '@/components/home/LatestInsights'
import { CTASection } from '@/components/home/CTASection'

function getCoverImages(): string[] {
  try {
    const dir = path.join(process.cwd(), 'public', 'home', 'projects')
    return fs.readdirSync(dir).filter((f) => f.endsWith('.jpg'))
  } catch {
    return []
  }
}

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3)
  const coverImages = getCoverImages()
  return (
    <>
      <Hero />
      <CourseCovers images={coverImages} />
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
