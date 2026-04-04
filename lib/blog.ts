import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const INSIGHTS_DIR = path.join(process.cwd(), 'content/insights')

export interface PostMeta {
  slug: string
  title: string
  titleEn?: string
  date: string
  excerpt?: string
  excerptEn?: string
  tags?: string[]
}

export interface Post extends PostMeta {
  /** Raw markdown body (after frontmatter) */
  content: string
  /** Server-rendered HTML for `dangerouslySetInnerHTML` */
  contentHtml: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return []
  const files = fs.readdirSync(INSIGHTS_DIR).filter((f) => f.endsWith('.md'))

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(INSIGHTS_DIR, file), 'utf8')
      const { data } = matter(raw)
      return { slug, ...data } as PostMeta
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(INSIGHTS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const parsed = marked.parse(content, { async: false })
  const contentHtml = typeof parsed === 'string' ? parsed : ''
  return { slug, content, contentHtml, ...data } as Post
}
