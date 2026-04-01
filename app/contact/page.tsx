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
    service: '',
    message: '',
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
        setForm({ name: '', company: '', email: '', service: '', message: '' })
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

  const services = t(
    [
      'Curso eLearning a medida',
      'Cumplimiento normativo (Compliance)',
      'Plataforma LMS',
      'Consultoría instruccional',
      'Otro',
    ],
    [
      'Custom eLearning course',
      'Compliance training',
      'LMS platform',
      'Instructional consulting',
      'Other',
    ]
  ) as string[]

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
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.75rem',
          }}
        >
          <span
            style={{
              width: '2rem',
              height: '1px',
              background: 'var(--dk-amber)',
              display: 'block',
            }}
          />
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
              ¿Listo para construir{' '}
              <em style={{ color: 'var(--dk-amber)', fontStyle: 'italic' }}>
                algo que funcione?
              </em>
            </>,
            <>
              Ready to build{' '}
              <em style={{ color: 'var(--dk-amber)', fontStyle: 'italic' }}>
                something that works?
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
            'Cuéntenos sobre su proyecto. Respondemos en menos de 24 horas.',
            'Tell us about your project. We respond within 24 hours.'
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
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--dk-amber)',
                marginBottom: '0.75rem',
              }}
            >
              {t('Mensaje enviado.', 'Message sent.')}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
              {t('Le respondemos pronto.', "We'll be in touch shortly.")}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Row: name + company */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={fieldLabel}>{t('Nombre', 'Name')}</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ana Martínez"
                  style={fieldInput}
                  onFocus={(e) =>
                    ((e.target as HTMLElement).style.borderColor = 'var(--dk-amber)')
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLElement).style.borderColor =
                      'rgba(255,255,255,0.1)')
                  }
                />
              </div>
              <div>
                <label style={fieldLabel}>{t('Empresa', 'Company')}</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Empresa S.A.S."
                  style={fieldInput}
                  onFocus={(e) =>
                    ((e.target as HTMLElement).style.borderColor = 'var(--dk-amber)')
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLElement).style.borderColor =
                      'rgba(255,255,255,0.1)')
                  }
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
                onFocus={(e) =>
                  ((e.target as HTMLElement).style.borderColor = 'var(--dk-amber)')
                }
                onBlur={(e) =>
                  ((e.target as HTMLElement).style.borderColor =
                    'rgba(255,255,255,0.1)')
                }
              />
            </div>

            {/* Service */}
            <div>
              <label style={fieldLabel}>
                {t('¿En qué podemos ayudarle?', 'How can we help?')}
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                style={{ ...fieldInput, cursor: 'pointer' }}
                onFocus={(e) =>
                  ((e.target as HTMLElement).style.borderColor = 'var(--dk-amber)')
                }
                onBlur={(e) =>
                  ((e.target as HTMLElement).style.borderColor =
                    'rgba(255,255,255,0.1)')
                }
              >
                <option value="" disabled>
                  {t('Seleccionar...', 'Select...')}
                </option>
                {services.map((s) => (
                  <option key={s} value={s} style={{ background: 'var(--dk-dark)' }}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label style={fieldLabel}>
                {t('Cuéntenos más', 'Tell us more')}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                style={{ ...fieldInput, resize: 'vertical', minHeight: '130px' }}
                onFocus={(e) =>
                  ((e.target as HTMLElement).style.borderColor = 'var(--dk-amber)')
                }
                onBlur={(e) =>
                  ((e.target as HTMLElement).style.borderColor =
                    'rgba(255,255,255,0.1)')
                }
              />
            </div>

            {/* Error */}
            {state === 'error' && (
              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#ff6b6b',
                  letterSpacing: '0.03em',
                }}
              >
                {t(
                  'Algo salió mal. Intente de nuevo o escríbanos a info@studiodeki.co',
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
                alignSelf: 'flex-start',
                opacity: state === 'sending' ? 0.6 : 1,
                cursor: state === 'sending' ? 'not-allowed' : 'pointer',
                marginTop: '0.5rem',
              }}
            >
              {state === 'sending'
                ? t('Enviando...', 'Sending...')
                : t('Enviar mensaje', 'Send message')}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
