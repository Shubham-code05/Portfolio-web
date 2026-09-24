import { useCallback, useEffect, useLayoutEffect, useMemo, useState, useSyncExternalStore } from 'react'
import { THEME_STORAGE_KEY, THEMES, ThemeContext } from './ThemeContext'

const DARK_QUERY = '(prefers-color-scheme: dark)'
// Browser UI colour (mobile address bar) — matches --color-page for each theme
const META_THEME_COLOR = { light: '#ffffff', dark: '#0a0d0c' }

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    return THEMES.includes(stored) ? stored : 'system'
  } catch {
    return 'system' // storage blocked (private mode, disabled cookies)
  }
}

// OS preference as an external store, so "system" re-renders when the OS theme flips
function subscribeToSystemTheme(onChange) {
  const media = window.matchMedia(DARK_QUERY)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}
const getSystemPrefersDark = () => window.matchMedia(DARK_QUERY).matches

function applyTheme(resolved) {
  const root = document.documentElement
  if (root.dataset.theme !== resolved) {
    // Suppress colour transitions for the switch itself, then restore them after paint
    root.setAttribute('data-theme-switching', '')
    root.dataset.theme = resolved
    requestAnimationFrame(() => requestAnimationFrame(() => root.removeAttribute('data-theme-switching')))
  }
  root.style.colorScheme = resolved
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_THEME_COLOR[resolved])
}

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readStoredTheme)
  const systemPrefersDark = useSyncExternalStore(subscribeToSystemTheme, getSystemPrefersDark, () => false)
  const resolvedTheme = theme === 'system' ? (systemPrefersDark ? 'dark' : 'light') : theme

  // Layout effect: apply before the browser paints to avoid a flash of the wrong theme
  useLayoutEffect(() => {
    applyTheme(resolvedTheme)
  }, [resolvedTheme])

  // Keep multiple open tabs in sync
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === THEME_STORAGE_KEY) setThemeState(THEMES.includes(event.newValue) ? event.newValue : 'system')
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const setTheme = useCallback((next) => {
    if (!THEMES.includes(next)) return
    setThemeState(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Storage unavailable — the choice still applies for this visit
    }
  }, [])

  const value = useMemo(() => ({ theme, resolvedTheme, setTheme }), [theme, resolvedTheme, setTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
