import { getPost, getAllPosts, getRelatedPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { InsightArticle } from '@/components/insights/InsightArticle'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
  ): Promise<Metadata> {
    const { slug } = await params
    const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.es.title} — Studio Deki`,
    description: post.es.excerpt,
    openGraph: {
      title: post.es.title,
      description: post.es.excerpt,
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const relatedPosts = getRelatedPosts(slug, post.es.category)
  return <InsightArticle post={post} relatedPosts={relatedPosts} />
}
