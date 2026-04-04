'use client'

import { useState } from 'react'
import { useLang } from '@/lib/lang-context'

export function CTASection() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = {
      challenge: (form.elements.namedItem('challenge') as HTMLTextAreaElement).value,
      size: (form.elements.namedItem('size') as HTMLSelectElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
    }

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
    } catch {
      // silent fail for now, form stays open
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      style={{
        background: 'var(--dk-dark)',
        padding: '7rem 3rem',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
        }}
      >
        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--dk-white)',
                lineHeight: 1.3,
                marginBottom: '1.25rem',
              }}
            >
              {t('Recibido.', 'Got it.')}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
              {t(
                'Vamos a revisar tu reto y te escribimos pronto.',
                "We'll review your challenge and be in touch soon."
              )}
            </p>
          </div>
        ) : (
          <>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 400,
                color: 'var(--dk-white)',
                lineHeight: 1.2,
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
              }}
            >
              {t(
                <>
                  ¿Cuál es el reto de aprendizaje
                  <br />
                  <em style={{ color: 'var(--dk-amber)', fontStyle: 'italic' }}>
                    de tu organización?
                  </em>
                </>,
                <>
                  What is your organization's
                  <br />
                  <em style={{ color: 'var(--dk-amber)', fontStyle: 'italic' }}>
                    learning challenge?
                  </em>
                </>
              )}
            </h2>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '2.75rem',
                lineHeight: 1.75,
              }}
            >
              {t(
                'Cuéntanos qué necesita tu equipo. Lo analizamos y te proponemos un camino.',
                "Tell us what your team needs. We'll analyze it and propose a path forward."
              )}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label
                  htmlFor="challenge"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                  }}
                >
                  {t('¿Qué necesita aprender tu equipo?', 'What does your team need to learn?')}
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows={4}
                  className="dk-input"
                  style={{ resize: 'vertical' }}
                  placeholder={t(
                    'Describe el reto de formación...',
                    'Describe your training challenge...'
                  )}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label
                  htmlFor="size"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                  }}
                >
                  {t('¿Cuántas personas necesitan capacitarse?', 'How many people need training?')}
                </label>
                <select
                  id="size"
                  name="size"
                  required
                  className="dk-input"
                  style={{ cursor: 'pointer' }}
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t('Selecciona un rango', 'Select a range')}
                  </option>
                  <option value="less-100">{t('Menos de 100', 'Fewer than 100')}</option>
                  <option value="100-500">100 – 500</option>
                  <option value="500-2000">500 – 2.000</option>
                  <option value="more-2000">{t('Más de 2.000', 'More than 2,000')}</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label
                  htmlFor="email"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                  }}
                >
                  {t('Tu correo', 'Your email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="dk-input"
                  placeholder="nombre@empresa.com"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-amber"
                style={{ marginTop: '0.75rem', width: '100%', opacity: loading ? 0.6 : 1 }}
              >
                {loading
                  ? t('Enviando...', 'Sending...')
                  : t('Quiero una solución', 'Find my solution')}
              </button>

              <p
                style={{
                  fontSize: '0.7rem',
                  color: 'rgba(255,255,255,0.22)',
                  textAlign: 'center',
                  lineHeight: 1.6,
                  marginTop: '0.25rem',
                }}
              >
                {t(
                  'Tu información es solo para nosotros. Nada de spam, nada de listas. Solo la conversación que necesitas.',
                  'Your information stays with us. No spam, no lists. Just the conversation you need.'
                )}
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  )
}