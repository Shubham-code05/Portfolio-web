import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Shubham Prajapati'
const DEFAULT_TITLE = 'Shubham Prajapati | Software Engineer'

/**
 * Sets the document title and the canonical URL for the current route.
 * Pass a page name (e.g. 'About' → "About | Shubham Prajapati"), or nothing for the home title.
 */
export default function usePageMeta(pageTitle) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : DEFAULT_TITLE

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${window.location.origin}${pathname}`
  }, [pageTitle, pathname])
}
