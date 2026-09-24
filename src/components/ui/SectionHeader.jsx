import Reveal from './Reveal'

/** `level` sets the heading element: 1 for a page's main heading, 2 (default) for sections. */
export default function SectionHeader({ badge, title, subtitle, level = 2, className = '' }) {
  const Heading = `h${level}`

  return (
    <Reveal className={`max-w-2xl ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          {badge}
        </span>
      )}
      <Heading
        className={`mt-4 font-bold tracking-tight text-balance ${
          level === 1 ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
        }`}
      >
        {title}
      </Heading>
      {subtitle && <p className="mt-3 text-base text-muted sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}
