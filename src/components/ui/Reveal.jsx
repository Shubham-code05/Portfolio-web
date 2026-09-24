import useInView from '../../hooks/useInView'

/**
 * Fades and lifts its children into place when scrolled into view (once).
 * Only opacity/translate animate, so it stays on the compositor. Skipped under reduced motion.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const [ref, isInView] = useInView()

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        isInView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
