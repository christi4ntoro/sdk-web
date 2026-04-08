'use client'

import { useState } from 'react'
import { useLang } from '@/lib/lang-context'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
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
        <div className="section-label dk-contact-label">
          {t('contact.label')}
        </div>

        <h1 className="dk-contact-heading">
          {t('shared.challenge_heading_pre')}
          <br />
          <em>{t('shared.challenge_heading_em')}</em>
        </h1>

        <p className="dk-contact-lead">
          {t('shared.form_lead')}
        </p>

        {state === 'success' ? (
          <div className="dk-contact-success">
            <p className="dk-contact-success-heading">
              {t('shared.form_success_heading')}
            </p>
            <p className="dk-contact-success-body">
              {t('shared.form_success_body')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="dk-contact-form">
            <div className="dk-contact-row">
              <div>
                <label htmlFor="name" className="dk-field-label">{t('contact.field_name')}</label>
                <input
                  id="name"
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('contact.field_name_placeholder')}
                  className="dk-input"
                />
              </div>
              <div>
                <label htmlFor="company" className="dk-field-label">{t('contact.field_company')}</label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder={t('contact.field_company_placeholder')}
                  className="dk-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="dk-field-label">{t('shared.form_email_label')}</label>
              <input
                id="email"
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t('shared.form_email_placeholder')}
                className="dk-input"
              />
            </div>

            <div>
              <label htmlFor="size" className="dk-field-label">
                {t('shared.form_size_label')}
              </label>
              <select
                id="size"
                name="size"
                value={form.size}
                onChange={handleChange}
                className="dk-input dk-input-select"
              >
                <option value="" disabled>
                  {t('shared.form_size_placeholder')}
                </option>
                <option value="less-100">{t('shared.form_size_lt100')}</option>
                <option value="100-500">{t('shared.form_size_100_500')}</option>
                <option value="500-2000">{t('shared.form_size_500_2000')}</option>
                <option value="more-2000">{t('shared.form_size_2000plus')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="challenge" className="dk-field-label">
                {t('shared.form_challenge_label')}
              </label>
              <textarea
                id="challenge"
                name="challenge"
                value={form.challenge}
                onChange={handleChange}
                required
                rows={5}
                className="dk-input dk-input-textarea"
                placeholder={t('shared.form_challenge_placeholder')}
              />
            </div>

            {state === 'error' && (
              <p className="dk-contact-error">
                {t('contact.error')}
              </p>
            )}

            <button
              type="submit"
              disabled={state === 'sending'}
              className={`btn-amber dk-contact-submit${state === 'sending' ? ' dk-contact-submit--sending' : ''}`}
            >
              {state === 'sending'
                ? t('shared.form_sending')
                : t('shared.cta_find_solution')}
            </button>

            <p className="dk-contact-disclaimer">
              {t('shared.form_disclaimer')}
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
