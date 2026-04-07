'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

type Block =
  | { type: 'opening' | 'body' | 'anchor' | 'highlight' | 'leader'; textKey: string }
  | { type: 'closing'; lineKeys: string[] }

const blocks: Block[] = [
  { type: 'opening',   textKey: 'manifesto.block_opening'  },
  { type: 'body',      textKey: 'manifesto.block_body1'    },
  { type: 'body',      textKey: 'manifesto.block_body2'    },
  { type: 'anchor',    textKey: 'manifesto.block_anchor'   },
  { type: 'body',      textKey: 'manifesto.block_body3'    },
  { type: 'highlight', textKey: 'manifesto.block_highlight'},
  { type: 'body',      textKey: 'manifesto.block_body4'    },
  { type: 'body',      textKey: 'manifesto.block_body5'    },
  { type: 'leader',    textKey: 'manifesto.block_leader'   },
  { type: 'closing',   lineKeys: ['manifesto.block_closing1', 'manifesto.block_closing2'] },
]

export function ManifestoContent() {
  const { t } = useLang()

  return (
    <article className="dk-manifesto-article">
      <div className="section-label dk-manifesto-label">
        {t('manifesto.label')}
      </div>

      {blocks.map((block, i) => {
        if (block.type === 'opening') {
          return <p key={i} className="dk-manifesto-opening">{t(block.textKey)}</p>
        }
        if (block.type === 'anchor') {
          return <p key={i} className="dk-manifesto-anchor">{t(block.textKey)}</p>
        }
        if (block.type === 'highlight') {
          return <p key={i} className="dk-manifesto-highlight">{t(block.textKey)}</p>
        }
        if (block.type === 'leader') {
          return <p key={i} className="dk-manifesto-leader">{t(block.textKey)}</p>
        }
        if (block.type === 'closing') {
          return (
            <div key={i} className="dk-manifesto-closing">
              {block.lineKeys.map((k, j) => (
                <p key={j} className="dk-manifesto-closing-line">{t(k)}</p>
              ))}
            </div>
          )
        }
        return <p key={i} className="dk-body dk-manifesto-body">{t(block.textKey)}</p>
      })}

      <div className="dk-manifesto-cta">
        <Link href="/contact" className="btn-primary">
          {t('manifesto.cta')}
        </Link>
      </div>
    </article>
  )
}
