export default function SectionHeader({ badge, title, subtitle, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          {badge}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-muted sm:text-lg">{subtitle}</p>}
    </div>
  )
}
