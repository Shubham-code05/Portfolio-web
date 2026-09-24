import { createContext, useContext } from 'react'

export const THEMES = ['light', 'dark', 'system']
export const THEME_STORAGE_KEY = 'theme'

export const ThemeContext = createContext(null)

/** { theme: 'light'|'dark'|'system', resolvedTheme: 'light'|'dark', setTheme } */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside <ThemeProvider>')
  return context
}
