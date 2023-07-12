'use client'

import { createContext } from 'react'

type LangValue = null | string
const startValue: LangValue = 'else' // navigator.language
export const LangContext = createContext<LangValue>(startValue)

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <LangContext.Provider value='ru'>{children}</LangContext.Provider>
}
