import { useEffect } from 'react'

/**
 * Prevents the page behind an overlay from scrolling while `active` is true.
 * `scrollbar-gutter: stable` keeps the scrollbar's space reserved, so the layout doesn't shift.
 */
export default function useLockBodyScroll(active) {
  useEffect(() => {
    if (!active) return

    const root = document.documentElement
    const previous = { overflow: root.style.overflow, scrollbarGutter: root.style.scrollbarGutter }
    root.style.scrollbarGutter = 'stable'
    root.style.overflow = 'hidden'

    return () => {
      root.style.overflow = previous.overflow
      root.style.scrollbarGutter = previous.scrollbarGutter
    }
  }, [active])
}
