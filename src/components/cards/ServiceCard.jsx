import { CircleCheck } from 'lucide-react'

export default function ServiceCard({ service, index }) {
  const { title, icon: Icon, description, features } = service

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background p-7 shadow-[0_1px_2px_rgba(15,21,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_40px_-16px_rgba(15,21,18,0.14)] sm:p-8">
      {/* Accent bar that sweeps in along the top edge on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <div className="flex items-start justify-between">
        <span className="flex size-14 items-center justify-center rounded-2xl border border-accent/15 bg-accent-soft text-accent transition-all duration-300 group-hover:-rotate-6 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/25">
          <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold tabular-nums text-muted/50 transition-colors duration-300 group-hover:text-accent">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">{description}</p>

      <ul className="mt-6 space-y-3 border-t border-border pt-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
            <CircleCheck size={17} className="shrink-0 text-accent" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  )
}
