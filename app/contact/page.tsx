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

  const fieldLabel: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.68rem',
    fontWeight: 700,
    letterSpacing: '0.11em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.38)',
    marginBottom: '0.4rem',
    display: 'block',
  }

  const fieldInput: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    background: 'rgba(255,255,255,0.055)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--dk-white)',
    padding: '0.85rem 1rem',
    borderRadius: '3px',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
  }

  const focusAmber = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    (e.target as HTMLElement).style.borderColor = 'var(--dk-amber)'
  }
  const blurAmber = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
  }

  return (
    <div style={{ background: 'var(--dk-dark)', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '8rem 2rem 7rem',
        }}
      >
        {/* Label */}
        <div className="section-label" style={{ marginBottom: '1.75rem', color: 'rgba(255,255,255,0.3)' }}>
          {t('Hablemos', "Let's talk")}
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
            fontWeight: 400,
            color: 'var(--dk-white)',
            lineHeight: 1.15,
            marginBottom: '1rem',
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
        </h1>

        <p
          style={{
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.42)',
            lineHeight: 1.75,
            marginBottom: '3.5rem',
          }}
        >
          {t(
            'Cuéntanos qué necesita tu equipo. Lo analizamos y te proponemos un camino.',
            "Tell us what your team needs. We'll analyze it and propose a path forward."
          )}
        </p>

        {/* Success state */}
        {state === 'success' ? (
          <div
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(248,187,21,0.3)',
              borderRadius: '3px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontStyle: 'italic',
                color: 'var(--dk-amber)',
                marginBottom: '0.75rem',
              }}
            >
              {t('Recibido.', 'Got it.')}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
              {t(
                'Vamos a revisar tu reto y te escribimos pronto.',
                "We'll review your challenge and be in touch soon."
              )}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Name + company — stacks on mobile */}
            <div className="contact-row">
              <div>
                <label style={fieldLabel}>{t('Tu nombre', 'Your name')}</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ana Martínez"
                  style={fieldInput}
                  onFocus={focusAmber}
                  onBlur={blurAmber}
                />
              </div>
              <div>
                <label style={fieldLabel}>{t('Tu empresa', 'Your company')}</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Empresa S.A.S."
                  style={fieldInput}
                  onFocus={focusAmber}
                  onBlur={blurAmber}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={fieldLabel}>Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ana@empresa.com"
                style={fieldInput}
                onFocus={focusAmber}
                onBlur={blurAmber}
              />
            </div>

            {/* Team size */}
            <div>
              <label style={fieldLabel}>
                {t('¿Cuántas personas necesitan capacitarse?', 'How many people need training?')}
              </label>
              <select
                name="size"
                value={form.size}
                onChange={handleChange}
                style={{ ...fieldInput, cursor: 'pointer' }}
                onFocus={focusAmber}
                onBlur={blurAmber}
              >
                <option value="" disabled>
                  {t('Selecciona un rango', 'Select a range')}
                </option>
                <option value="less-100" style={{ background: '#1D1C33' }}>
                  {t('Menos de 100', 'Fewer than 100')}
                </option>
                <option value="100-500" style={{ background: '#1D1C33' }}>100 – 500</option>
                <option value="500-2000" style={{ background: '#1D1C33' }}>500 – 2.000</option>
                <option value="more-2000" style={{ background: '#1D1C33' }}>
                  {t('Más de 2.000', 'More than 2,000')}
                </option>
              </select>
            </div>

            {/* Challenge */}
            <div>
              <label style={fieldLabel}>
                {t('¿Qué necesita aprender tu equipo?', 'What does your team need to learn?')}
              </label>
              <textarea
                name="challenge"
                value={form.challenge}
                onChange={handleChange}
                required
                rows={5}
                style={{ ...fieldInput, resize: 'vertical', minHeight: '130px' }}
                placeholder={t(
                  'Describe el reto de formación...',
                  'Describe your training challenge...'
                )}
                onFocus={focusAmber}
                onBlur={blurAmber}
              />
            </div>

            {/* Error */}
            {state === 'error' && (
              <p style={{ fontSize: '0.8rem', color: '#ff6b6b', letterSpacing: '0.03em' }}>
                {t(
                  'Algo salió mal. Intenta de nuevo o escríbenos a info@studiodeki.co',
                  'Something went wrong. Try again or email us at info@studiodeki.co'
                )}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={state === 'sending'}
              className="btn-amber"
              style={{
                marginTop: '0.5rem',
                width: '100%',
                opacity: state === 'sending' ? 0.6 : 1,
                cursor: state === 'sending' ? 'not-allowed' : 'pointer',
              }}
            >
              {state === 'sending'
                ? t('Enviando...', 'Sending...')
                : t('Quiero una solución', 'Find my solution')}
            </button>

            <p
              style={{
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.22)',
                textAlign: 'center',
                lineHeight: 1.6,
              }}
            >
              {t(
                'Tu información es solo para nosotros. Nada de spam, nada de listas. Solo la conversación que necesitas.',
                'Your information stays with us. No spam, no lists. Just the conversation you need.'
              )}
            </p>
          </form>
        )}
      </div>

      {/* Responsive */}
      <style>{`
        .contact-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 600px) {
          .contact-row {
            grid-template-columns: 1fr;
          }
        }
        .section-label::before {
          background: var(--dk-amber);
        }
      `}</style>
    </div>
  )
}