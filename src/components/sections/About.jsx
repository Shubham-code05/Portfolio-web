import { ArrowRight, Target } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import ActionLink from '../ui/ActionLink'
import Reveal from '../ui/Reveal'
import { ABOUT } from '../../data/about'

function FocusCard() {
  return (
    <aside className="relative overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-[0_1px_2px_rgba(15,21,18,0.04)] sm:p-8">
      {/* Soft corner glow for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-white shadow-sm shadow-accent/30">
          <Target size={20} aria-hidden="true" />
        </span>
        <h3 className="text-lg font-semibold tracking-tight">Current Technical Focus</h3>
      </div>

      <ol className="relative mt-6 space-y-2">
        {ABOUT.focus.map(({ label, icon: Icon }, index) => (
          <li
            key={label}
            className="group flex items-center gap-4 rounded-2xl border border-transparent bg-background px-4 py-3 transition-all duration-200 hover:translate-x-1 hover:border-accent/20 hover:shadow-sm"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
              <Icon size={18} aria-hidden="true" />
            </span>
            <span className="flex-1 text-sm font-medium sm:text-[15px]">{label}</span>
            <span aria-hidden="true" className="text-xs font-semibold tabular-nums text-muted/60">
              {String(index + 1).padStart(2, '0')}
            </span>
          </li>
        ))}
      </ol>

      <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
        <ActionLink
          href={ABOUT.readMoreUrl}
          className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md hover:shadow-accent/25"
        >
          Read More
          <ArrowRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </ActionLink>
        <a
          href="#skills"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent"
        >
          View Skills
        </a>
      </div>
    </aside>
  )
}

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <SectionHeader badge={ABOUT.badge} title={ABOUT.title} />

          <Reveal delay={100} className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal as="ul" delay={200} className="mt-8 flex flex-wrap gap-2">
            {ABOUT.highlights.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors duration-200 hover:border-accent/30 hover:text-accent"
              >
                <Icon size={15} className="text-accent" aria-hidden="true" />
                {label}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal delay={150}>
          <FocusCard />
        </Reveal>
      </div>
    </Section>
  )
}
