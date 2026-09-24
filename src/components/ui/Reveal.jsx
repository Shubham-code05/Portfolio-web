import useInView from '../../hooks/useInView'

/** Fades and lifts its children into place when scrolled into view. Skipped under reduced motion. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const [ref, isInView] = useInView()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none ${
        isInView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
