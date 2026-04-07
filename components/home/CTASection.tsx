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
                <label htmlFor="challenge" className="dk-cta-field-label">
                  {t('shared.form_challenge_label')}
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows={4}
                  className="dk-input dk-input-textarea"
                  placeholder={t('shared.form_challenge_placeholder')}
                />
              </div>

              <div className="dk-cta-field">
                <label htmlFor="size" className="dk-cta-field-label">
                  {t('shared.form_size_label')}
                </label>
                <select
                  id="size"
                  name="size"
                  required
                  className="dk-input dk-input-select"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t('shared.form_size_placeholder')}
                  </option>
                  <option value="less-100">{t('shared.form_size_lt100')}</option>
                  <option value="100-500">100 – 500</option>
                  <option value="500-2000">500 – 2.000</option>
                  <option value="more-2000">{t('shared.form_size_2000plus')}</option>
                </select>
              </div>

              <div className="dk-cta-field">
                <label htmlFor="email" className="dk-cta-field-label">
                  {t('shared.form_email_label')}
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
                {loading ? t('shared.form_sending') : t('shared.cta_find_solution')}
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
