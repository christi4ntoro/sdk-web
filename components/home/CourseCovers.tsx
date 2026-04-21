'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface Props {
  images: string[]
}

const MULTIPLIERS = [0.04, 0.07, 0.02, 0.05, 0.09]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function CourseCovers({ images }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const rafRef = useRef<number | null>(null)
  const [offsets, setOffsets] = useState<number[]>([0, 0, 0, 0, 0])
  const [columnImages, setColumnImages] = useState<string[][]>([])
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const mobile = window.innerWidth < 1024
    setIsMobile(mobile)
    const shuffled = shuffle(images)
    const cols = mobile ? 3 : 5
    const sliced = shuffled.slice(0, cols * 3)
    const built: string[][] = []
    for (let c = 0; c < cols; c++) {
      built.push(sliced.slice(c * 3, c * 3 + 3))
    }
    setColumnImages(built)
  }, [images])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const calculate = () => {
      if (!sectionRef.current) return
      // rect.top is 0 when section top aligns with viewport top — that is the natural zero point.
      // All columns are aligned there; parallax activates as the section scrolls past.
      const delta = sectionRef.current.getBoundingClientRect().top
      setOffsets(MULTIPLIERS.map((m) => delta * m))
    }

    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(calculate)
    }

    calculate()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (images.length === 0 || columnImages.length === 0) return null

  const cols = isMobile ? 3 : 5

  return (
    <section ref={sectionRef} className="dk-covers-section">
      <div className="dk-covers-grid">
        {Array.from({ length: cols }).map((_, colIndex) => {
          const imgs = columnImages[colIndex] ?? []
          return (
            <div
              key={colIndex}
              className={`dk-covers-col${colIndex >= 3 ? ' dk-covers-col--desktop-only' : ''}`}
              style={{ transform: `translateY(${offsets[colIndex]}px)` }}
            >
              {imgs.map((filename, imgIndex) => (
                <div key={imgIndex} className="dk-covers-item">
                  <Image
                    src={`/home/projects/${filename}`}
                    alt=""
                    width={800}
                    height={600}
                    className="dk-covers-img"
                    sizes="(max-width: 1023px) 33vw, 20vw"
                  />
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}
