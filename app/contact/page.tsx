'use client'

import { useState } from 'react'
import { useLang } from '@/lib/lang-context'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage() {
  const { t } = useLang()
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    size: '',
    challenge: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState('success')
        setForm({ name: '', company: '', email: '', size: '', challenge: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <div className="dk-contact-page">
      <div className="dk-contact-container">
        <div className={`section-label dk-contact-label`}>
          {t('Hablemos', "Let's talk")}
        </div>

        <h1 className="dk-contact-heading">
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
        </h1>

        <p className="dk-contact-lead">
          {t(
            'Cuéntanos qué necesita tu equipo. Lo analizamos y te proponemos un camino.',
            "Tell us what your team needs. We'll analyze it and propose a path forward."
          )}
        </p>

        {state === 'success' ? (
          <div className="dk-contact-success">
            <p className="dk-contact-success-heading">
              {t('Recibido.', 'Got it.')}
            </p>
            <p className="dk-contact-success-body">
              {t(
                'Vamos a revisar tu reto y te escribimos pronto.',
                "We'll review your challenge and be in touch soon."
              )}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="dk-contact-form">
            <div className="dk-contact-row">
              <div>
                <label className="dk-field-label">{t('Tu nombre', 'Your name')}</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ana Martínez"
                  className="dk-input"
                />
              </div>
              <div>
                <label className="dk-field-label">{t('Tu empresa', 'Your company')}</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Empresa S.A.S."
                  className="dk-input"
                />
              </div>
            </div>

            <div>
              <label className="dk-field-label">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ana@empresa.com"
                className="dk-input"
              />
            </div>

            <div>
              <label className="dk-field-label">
                {t('¿Cuántas personas necesitan capacitarse?', 'How many people need training?')}
              </label>
              <select
                name="size"
                value={form.size}
                onChange={handleChange}
                className="dk-input dk-input-select"
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

            <div>
              <label className="dk-field-label">
                {t('¿Qué necesita aprender tu equipo?', 'What does your team need to learn?')}
              </label>
              <textarea
                name="challenge"
                value={form.challenge}
                onChange={handleChange}
                required
                rows={5}
                className="dk-input dk-input-textarea"
                placeholder={t(
                  'Describe el reto de formación...',
                  'Describe your training challenge...'
                )}
              />
            </div>

            {state === 'error' && (
              <p className="dk-contact-error">
                {t(
                  'Algo salió mal. Intenta de nuevo o escríbenos a info@studiodeki.co',
                  'Something went wrong. Try again or email us at info@studiodeki.co'
                )}
              </p>
            )}

            <button
              type="submit"
              disabled={state === 'sending'}
              className={`btn-amber dk-contact-submit${state === 'sending' ? ' dk-contact-submit--sending' : ''}`}
            >
              {state === 'sending'
                ? t('Enviando...', 'Sending...')
                : t('Quiero una solución', 'Find my solution')}
            </button>

            <p className="dk-contact-disclaimer">
              {t(
                'Tu información es solo para nosotros. Nada de spam, nada de listas. Solo la conversación que necesitas.',
                'Your information stays with us. No spam, no lists. Just the conversation you need.'
              )}
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
