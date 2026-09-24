import { Briefcase, Building2, CalendarDays, CircleCheck } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import { EXPERIENCE } from '../../data/experience'

function TypeBadge({ type }) {
  if (!type) return null

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
      <Briefcase size={13} aria-hidden="true" />
      {type}
    </span>
  )
}

function Period({ period, className = '' }) {
  return (
    <p className={`inline-flex items-center gap-2 text-sm font-medium text-muted ${className}`}>
      <CalendarDays size={15} className="text-accent" aria-hidden="true" />
      {period}
    </p>
  )
}

function TimelineItem({ item, isLast }) {
  const { role, company, type, period, description, responsibilities, tech } = item

  return (
    // Mobile: rail on the left. md+: meta column | rail | card.
    <li className="relative pb-10 pl-10 last:pb-0 md:grid md:grid-cols-[11rem_1fr] md:gap-x-14 md:pl-0">
      {/* Rail — fades out after the final entry */}
      <span
        aria-hidden="true"
        className={`absolute top-3 bottom-0 left-[11px] w-px md:left-[calc(11rem+1.75rem)] ${
          isLast ? 'bg-gradient-to-b from-accent/50 to-transparent' : 'bg-gradient-to-b from-accent/50 to-border'
        }`}
      />
      {/* Node */}
      <span
        aria-hidden="true"
        className="absolute top-1 left-0 flex size-6 items-center justify-center rounded-full border-2 border-accent bg-background shadow-[0_0_0_4px_var(--color-accent-soft)] md:left-[calc(11rem+1.75rem-12px)]"
      >
        <span className="size-2 rounded-full bg-accent" />
      </span>

      {/* Desktop meta column */}
      <div className="hidden pt-0.5 md:block md:text-right">
        <Period period={period} className="md:justify-end" />
        <div className="mt-3">
          <TypeBadge type={type} />
        </div>
      </div>

      <article className="group rounded-3xl border border-border bg-background p-6 shadow-[0_1px_2px_rgba(15,21,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_40px_-16px_rgba(15,21,18,0.14)] sm:p-8">
        {/* Mobile meta row */}
        <div className="mb-4 flex flex-wrap items-center gap-3 md:hidden">
          <TypeBadge type={type} />
          <Period period={period} />
        </div>

        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{role}</h3>
        <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 sm:text-base">
          <Building2 size={16} className="text-accent" aria-hidden="true" />
          {company}
        </p>

        {description && (
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">{description}</p>
        )}

        {responsibilities?.length > 0 && (
          <div className="mt-6 border-t border-border pt-6">
            <h4 className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
              Responsibilities
            </h4>
            <ul className="mt-4 grid gap-3 lg:grid-cols-2 lg:gap-x-8">
              {responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-3 text-sm text-foreground/80">
                  <CircleCheck size={17} className="mt-px shrink-0 text-accent" aria-hidden="true" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        )}

        {tech?.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground/75"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </article>
    </li>
  )
}

export default function Experience() {
  return (
    <Section id="experience" className="border-y border-border bg-surface">
      <SectionHeader badge="Career Journey" title="Professional Experience" />

      <ol className="mt-10 sm:mt-12">
        {EXPERIENCE.map((item, index) => (
          <TimelineItem
            key={`${item.company}-${item.period}`}
            item={item}
            isLast={index === EXPERIENCE.length - 1}
          />
        ))}
      </ol>
    </Section>
  )
}
