'use client'

import { useState, useEffect, useRef } from 'react'
import { GoogleAnalytics, sendGAEvent } from '@next/third-parties/google'
import { useLang } from '@/lib/lang-context'

const CONSENT_KEY = 'sdk-cookie-consent'
const GA_ID = 'G-SJWEWT5M2Q'

type Consent = 'accepted' | 'rejected' | null

function GALangTracker() {
  const { lang } = useLang()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    sendGAEvent('event', 'language_change', { language: lang })
  }, [lang])

  return null
}

export function CookieConsent() {
  const { t } = useLang()
  const [consent, setConsent] = useState<Consent>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as Consent
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored)
    } else {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setConsent('accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setConsent('rejected')
    setVisible(false)
  }

  return (
    <>
      {consent === 'accepted' && (
        <>
          <GoogleAnalytics gaId={GA_ID} />
          <GALangTracker />
        </>
      )}
      {visible && (
        <div className="dk-cookie-banner" role="dialog" aria-label="Cookie consent">
          <p className="dk-cookie-message">{t('cookies.message')}</p>
          <div className="dk-cookie-actions">
            <button className="dk-cookie-btn-reject" onClick={reject}>
              {t('cookies.reject')}
            </button>
            <button className="dk-cookie-btn-accept" onClick={accept}>
              {t('cookies.accept')}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
