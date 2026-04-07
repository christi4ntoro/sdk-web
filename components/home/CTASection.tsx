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
    <section className="dk-cta-section">
      <div className="dk-cta-container">
        {submitted ? (
          <div className="dk-cta-success">
            <p className="dk-cta-success-heading">
              {t('Recibido.', 'Got it.')}
            </p>
            <p className="dk-cta-success-body">
              {t(
                'Vamos a revisar tu reto y te escribimos pronto.',
                "We'll review your challenge and be in touch soon."
              )}
            </p>
          </div>
        ) : (
          <>
            <h2 className="dk-cta-heading">
              {t(
                <>
                  ¿Cuál es el reto de aprendizaje
                  <br />
                  <em>de tu organización?</em>
                </>,
                <>
                  What is your organization's
                  <br />
                  <em>learning challenge?</em>
                </>
              )}
            </h2>

            <p className="dk-cta-body">
              {t(
                'Cuéntanos qué necesita tu equipo. Lo analizamos y te proponemos un camino.',
                "Tell us what your team needs. We'll analyze it and propose a path forward."
              )}
            </p>

            <form onSubmit={handleSubmit} className="dk-cta-form">
              <div className="dk-cta-field">
                <label htmlFor="challenge" className="dk-cta-field-label">
                  {t('¿Qué necesita aprender tu equipo?', 'What does your team need to learn?')}
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows={4}
                  className="dk-input dk-input-textarea"
                  placeholder={t(
                    'Describe el reto de formación...',
                    'Describe your training challenge...'
                  )}
                />
              </div>

              <div className="dk-cta-field">
                <label htmlFor="size" className="dk-cta-field-label">
                  {t('¿Cuántas personas necesitan capacitarse?', 'How many people need training?')}
                </label>
                <select
                  id="size"
                  name="size"
                  required
                  className="dk-input dk-input-select"
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

              <div className="dk-cta-field">
                <label htmlFor="email" className="dk-cta-field-label">
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
                className={`btn-amber dk-cta-submit${loading ? ' dk-cta-submit--loading' : ''}`}
              >
                {loading
                  ? t('Enviando...', 'Sending...')
                  : t('Quiero una solución', 'Find my solution')}
              </button>

              <p className="dk-cta-disclaimer">
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
