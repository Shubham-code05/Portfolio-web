import { useEffect, useRef, useState } from 'react'

// One IntersectionObserver shared by every caller, instead of one per animated element
const callbacks = new WeakMap()
let sharedObserver = null

function getObserver() {
  sharedObserver ??= new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) callbacks.get(entry.target)?.()
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
  )
  return sharedObserver
}

/** Returns [ref, isInView]; flips to true once the element enters the viewport, then stops observing. */
export default function useInView() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = getObserver()
    const stop = () => {
      observer.unobserve(element)
      callbacks.delete(element)
    }

    callbacks.set(element, () => {
      setIsInView(true)
      stop()
    })
    observer.observe(element)
    return stop
  }, [])

  return [ref, isInView]
}
