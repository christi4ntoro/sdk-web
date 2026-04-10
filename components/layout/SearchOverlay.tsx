'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLang } from '@/lib/lang-context'
import type { PostMeta } from '@/lib/blog'

interface Props {
  posts: PostMeta[]
  onClose: () => void
}

export function SearchOverlay({ posts, onClose }: Props) {
  const { lang, t } = useLang()
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const activeLang = lang === 'en' ? 'en' : 'es'

  // Auto-focus on open
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Reset keyboard selection when query changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const q = query.trim().toLowerCase()
  const isSuggestions = q.length < 2

  const results = isSuggestions
    ? posts.slice(0, 3)
    : posts
        .filter((post) => {
          const primary = post[activeLang]
          const other = activeLang === 'en' ? post.es : post.en
          const haystack = [
            primary.title,
            primary.excerpt,
            primary.category,
            ...primary.tags,
            other.title,
            other.excerpt,
          ]
            .join(' ')
            .toLowerCase()
          return haystack.includes(q)
        })
        .slice(0, 5)

  const navigate = (index: number) => {
    const post = results[index]
    if (!post) return
    router.push(`/insights/${post.slug}`)
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      navigate(selectedIndex)
    }
  }

  const showEmpty = !isSuggestions && results.length === 0

  return (
    <div
      className="dk-search-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t('search.open')}
      onClick={onClose}
    >
      <div className="dk-search-box" onClick={(e) => e.stopPropagation()}>
        <div className="dk-search-input-wrap">
          <svg
            className="dk-search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            className="dk-search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('search.placeholder')}
            autoComplete="off"
            spellCheck={false}
          />
          <button
            className="dk-search-close-btn"
            onClick={onClose}
            aria-label={t('search.close')}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {showEmpty ? (
          <p className="dk-search-empty">{t('search.no_results')}</p>
        ) : (
          <div className="dk-search-results" role="listbox">
            {isSuggestions && (
              <p className="dk-search-suggestions-label">
                {t('search.suggestions_label')}
              </p>
            )}
            {results.map((post, i) => {
              const langData = post[activeLang]
              const title = langData.title || post.es.title
              const excerpt = langData.excerpt || post.es.excerpt
              const category = langData.category || post.es.category
              return (
                <button
                  key={post.slug}
                  className={`dk-search-result${selectedIndex === i ? ' dk-search-result--active' : ''}`}
                  role="option"
                  aria-selected={selectedIndex === i}
                  onClick={() => navigate(i)}
                  onMouseEnter={() => setSelectedIndex(i)}
                >
                  {category && (
                    <span className="dk-search-result-tag">{category}</span>
                  )}
                  <span className="dk-search-result-title">{title}</span>
                  {excerpt && (
                    <span className="dk-search-result-excerpt">{excerpt}</span>
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
