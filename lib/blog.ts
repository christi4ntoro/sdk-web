import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const INSIGHTS_DIR = path.join(process.cwd(), 'content/blog')

export interface LangBlock {
  title: string
  excerpt: string
  category: string
  tags: string[]
  featuredImageAlt: string
  keyTakeaways: [string, string, string]
}

export interface PostMeta {
  slug: string
  date: string
  author: string
  featuredImage: string
  readingTime: string
  bodyES: boolean
  bodyEN: boolean
  bodyPT: boolean
  es: LangBlock
  en: LangBlock
  pt: LangBlock
}

export interface Post extends PostMeta {
  contentHtmlES: string
  contentHtmlEN: string
  contentHtmlPT: string
}

function emptyLangBlock(): LangBlock {
  return {
    title: '',
    excerpt: '',
    category: '',
    tags: [],
    featuredImageAlt: '',
    keyTakeaways: ['', '', ''],
  }
}

function mergeLangBlock(data: Partial<LangBlock> | undefined): LangBlock {
  return { ...emptyLangBlock(), ...(data ?? {}) }
}

function parseBodyBlocks(content: string): { es: string; en: string; pt: string } {
  const result = { es: '', en: '', pt: '' }
  const pattern = /:::(\w+)([\s\S]*?):::/g
  let match
  while ((match = pattern.exec(content)) !== null) {
    const lang = match[1]
    if (lang === 'es' || lang === 'en' || lang === 'pt') {
      result[lang] = match[2].trim()
    }
  }
  return result
}

function renderHtml(markdown: string): string {
  const parsed = marked.parse(markdown, { async: false })
  return typeof parsed === 'string' ? parsed : ''
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return []
  const files = fs.readdirSync(INSIGHTS_DIR).filter((f) => f.endsWith('.md'))

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(INSIGHTS_DIR, file), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        date: data.date ?? '',
        author: data.author ?? 'Studio Deki',
        featuredImage: data.featuredImage ?? '',
        readingTime: data.readingTime ?? '',
        bodyES: data.bodyES ?? false,
        bodyEN: data.bodyEN ?? false,
        bodyPT: data.bodyPT ?? false,
        es: mergeLangBlock(data.es),
        en: mergeLangBlock(data.en),
        pt: mergeLangBlock(data.pt),
      } as PostMeta
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getRelatedPosts(slug: string, category: string, limit = 2): PostMeta[] {
  const all = getAllPosts().filter((p) => p.slug !== slug)
  const byCategory = all.filter(
    (p) => p.es.category === category || p.en.category === category
  )
  if (byCategory.length >= limit) return byCategory.slice(0, limit)
  const remaining = all.filter((p) => !byCategory.includes(p))
  return [...byCategory, ...remaining].slice(0, limit)
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(INSIGHTS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const bodies = parseBodyBlocks(content)
  return {
    slug,
    date: data.date ?? '',
    author: data.author ?? 'Studio Deki',
    featuredImage: data.featuredImage ?? '',
    readingTime: data.readingTime ?? '',
    bodyES: data.bodyES ?? false,
    bodyEN: data.bodyEN ?? false,
    bodyPT: data.bodyPT ?? false,
    es: mergeLangBlock(data.es),
    en: mergeLangBlock(data.en),
    pt: mergeLangBlock(data.pt),
    contentHtmlES: renderHtml(bodies.es),
    contentHtmlEN: renderHtml(bodies.en),
    contentHtmlPT: renderHtml(bodies.pt),
  }
}
