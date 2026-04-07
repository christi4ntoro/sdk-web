'use client'

import Link from 'next/link'
import { useLang } from '@/lib/lang-context'

type Block =
  | { type: 'opening' | 'body' | 'anchor' | 'highlight' | 'leader'; text: string }
  | { type: 'closing'; lines: string[] }

const esBlocks: Block[] = [
  {
    type: 'opening',
    text: 'Empezamos con una idea simple.',
  },
  {
    type: 'body',
    text: 'Que cualquier tema, por complejo que sea, puede ser entendido por cualquier persona, si alguien se toma el tiempo de diseñarlo bien. No llegamos al aprendizaje corporativo por accidente. Llegamos porque vimos lo que pasa cuando la formación se hace sin ese principio. Presentaciones que nadie completa. Contenido que existe para el informe, no para la persona que lo recibe.',
  },
  {
    type: 'body',
    text: 'Diseñamos experiencias para las personas que se sientan frente a la pantalla y necesitan salir sabiendo hacer algo que antes no sabían hacer. Lo hacemos con interacción, con cómics, con infografías, con simulaciones, con narrativas que enganchan desde el primer segundo. La forma cambia. El principio no.',
  },
  {
    type: 'anchor',
    text: 'Somos un estudio de estrategia, diseño y tecnología aplicada al aprendizaje.',
  },
  {
    type: 'body',
    text: 'Los datos nos dicen qué necesita tu equipo. Diseñamos esos datos en algo humano. La tecnología nos permite hacerlo a escala. La creatividad es nuestra alma. Escuchamos, analizamos y comprendemos a las personas antes de proponer cualquier solución. Porque una buena solución solo es posible cuando entiendes de verdad el problema.',
  },
  {
    type: 'highlight',
    text: 'No fabricamos contenido. Construimos el momento en que alguien entiende algo que antes no entendía. Y lo aplica. Y cambia lo que hace.',
  },
  {
    type: 'body',
    text: 'Trabajamos con organizaciones que creen que su gente merece formación bien hecha. No plantillas. No atajos. No contenido diseñado para existir.',
  },
  {
    type: 'body',
    text: 'Trabajamos donde está el mejor talento y donde nuestros clientes nos necesitan.',
  },
  {
    type: 'leader',
    text: 'Si estás leyendo esto, probablemente ya sabes que tu gente no es un número en un reporte de capacitación. Este estudio existe para los líderes que piensan igual.',
  },
  {
    type: 'closing',
    lines: ['Esto es lo que construimos.', 'Esto es lo que somos.'],
  },
]

const enBlocks: Block[] = [
  {
    type: 'opening',
    text: 'We started with a simple idea.',
  },
  {
    type: 'body',
    text: "That any topic, no matter how complex, can be understood by anyone, if someone takes the time to design it well. We didn't arrive at corporate learning by accident. We arrived because we saw what happens when training is built without that principle. Presentations nobody completes. Content that exists for the report, not for the person receiving it.",
  },
  {
    type: 'body',
    text: "We design experiences for the people sitting in front of a screen who need to leave knowing how to do something they couldn't do before. We've done it with interaction, with comics, with infographics, with simulations, with narratives that hook from the first second. The form changes. The principle doesn't.",
  },
  {
    type: 'anchor',
    text: 'We are a strategy, design and technology studio applied to learning.',
  },
  {
    type: 'body',
    text: "Data tells us what your team needs. We design that data into something human. Technology lets us do it at scale. Creativity is our soul. We listen, analyze and understand people before proposing any solution. Because a good solution is only possible when you truly understand the problem.",
  },
  {
    type: 'highlight',
    text: "We don't manufacture content. We build the moment when someone understands something they didn't before. And applies it. And changes what they do.",
  },
  {
    type: 'body',
    text: 'We work with organizations that believe their people deserve training done right. No templates. No shortcuts. No content designed just to exist.',
  },
  {
    type: 'body',
    text: 'We work where the best talent is and where our clients need us.',
  },
  {
    type: 'leader',
    text: "If you're reading this, you probably already know your people are not a number in a training report. This studio exists for the leaders who think the same.",
  },
  {
    type: 'closing',
    lines: ['This is what we build.', 'This is who we are.'],
  },
]

function renderBlock(block: Block, i: number) {
  if (block.type === 'opening') {
    return <p key={i} className="dk-manifesto-opening">{block.text}</p>
  }

  if (block.type === 'anchor') {
    return <p key={i} className="dk-manifesto-anchor">{block.text}</p>
  }

  if (block.type === 'highlight') {
    return <p key={i} className="dk-manifesto-highlight">{block.text}</p>
  }

  if (block.type === 'leader') {
    return <p key={i} className="dk-manifesto-leader">{block.text}</p>
  }

  if (block.type === 'closing') {
    return (
      <div key={i} className="dk-manifesto-closing">
        {block.lines.map((line, j) => (
          <p key={j} className="dk-manifesto-closing-line">{line}</p>
        ))}
      </div>
    )
  }

  return <p key={i} className="dk-manifesto-body">{block.text}</p>
}

export function ManifestoContent() {
  const { lang, t } = useLang()
  const blocks = lang === 'es' ? esBlocks : enBlocks

  return (
    <article className="dk-manifesto-article">
      <div className="section-label dk-manifesto-label">
        {t('Manifiesto', 'Manifesto')}
      </div>

      {blocks.map((block, i) => renderBlock(block, i))}

      <div className="dk-manifesto-cta">
        <Link href="/contact" className="btn-primary">
          {t('Trabaja con nosotros', 'Work with us')}
        </Link>
      </div>
    </article>
  )
}
