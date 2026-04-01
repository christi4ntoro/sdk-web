'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'es' | 'en'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: <T = any>(es: T, en: T) => T
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  setLang: () => {},
  t: (es) => es,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  function t<T>(es: T, en: T): T {
    return lang === 'es' ? es : en
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
