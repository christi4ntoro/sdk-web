import { getAllPosts } from '@/lib/blog'
import { InsightsContent } from '@/components/insights/InsightsContent'

export default function InsightsPage() {
  const posts = getAllPosts()
  return <InsightsContent posts={posts} />
}