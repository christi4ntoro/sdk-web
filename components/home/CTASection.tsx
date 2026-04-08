'use client'

import { useState } from 'react'
import { useLang } from '@/lib/lang-context'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export function CTASection() {
  const { t, lang } = useLang()
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ email: '', topic: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
        body: JSON.stringify({ formType: 'cta', ...form, lang }),
      })
      if (res.ok) {
        setState('success')
        setForm({ email: '', topic: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <section className="dk-cta-section">
      <div className="dk-cta-container">
        {state === 'success' ? (
          <div className="dk-cta-success">
            <p className="dk-cta-success-heading">
              {t('shared.form_success_heading')}
            </p>
            <p className="dk-cta-success-body">
              {t('shared.form_success_body')}
            </p>
          </div>
        ) : (
          <>
            <h2 className="dk-cta-heading">
              {t('shared.challenge_heading_pre')}
              <br />
              <em>{t('shared.challenge_heading_em')}</em>
            </h2>

            <p className="dk-cta-body">
              {t('cta_section.body')}
            </p>

            <form onSubmit={handleSubmit} className="dk-cta-form">
              <div className="dk-cta-field">
                <label htmlFor="cta-topic" className="dk-cta-field-label">
                  {t('cta_section.topic_label')}
                </label>
                <select
                  id="cta-topic"
                  name="topic"
                  required
                  value={form.topic}
                  onChange={handleChange}
                  className="dk-input dk-input-select"
                >
                  <option value="" disabled>
                    {t('cta_section.topic_placeholder')}
                  </option>
                  <option value="Curso nuevo">{t('cta_section.topic_new_course')}</option>
                  <option value="Migración de contenido">{t('cta_section.topic_migration')}</option>
                  <option value="Consultoría">{t('cta_section.topic_consulting')}</option>
                  <option value="Otro">{t('cta_section.topic_other')}</option>
                </select>
              </div>

              <div className="dk-cta-field">
                <label htmlFor="cta-email" className="dk-cta-field-label">
                  {t('shared.form_email_label')}
                </label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="dk-input"
                  placeholder={t('shared.form_email_placeholder')}
                />
              </div>

              {state === 'error' && (
                <p className="dk-cta-error">
                  {t('cta_section.error')}
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'sending'}
                className={`btn-accent dk-cta-submit${state === 'sending' ? ' dk-cta-submit--loading' : ''}`}
              >
                {state === 'sending' ? t('shared.form_sending') : t('shared.cta_find_solution')}
              </button>

              <p className="dk-cta-disclaimer">
                {t('shared.form_disclaimer')}
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  )
}
