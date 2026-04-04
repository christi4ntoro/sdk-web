import { getPost, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { InsightArticle } from '@/components/insights/InsightArticle'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Studio Deki`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()
  return <InsightArticle post={post} />
}