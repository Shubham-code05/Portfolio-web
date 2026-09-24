import { TECH_STACK } from '../../data/techStack'

function TechList({ hidden = false }) {
  return (
    // Each copy carries its own trailing gap (pr-3) so the -50% loop lands seamlessly
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-3 pr-3">
      {TECH_STACK.map(({ name, icon: Icon }) => (
        <li
          key={name}
          className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium whitespace-nowrap text-foreground/80 transition-colors duration-200 hover:border-accent/30 hover:text-foreground"
        >
          <Icon size={16} strokeWidth={2} className="text-accent" aria-hidden="true" />
          {name}
        </li>
      ))}
    </ul>
  )
}

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      aria-label="Technology stack"
      className="border-y border-border bg-surface py-8 sm:py-10"
    >
      <p className="mb-5 text-center text-[11px] font-semibold tracking-[0.2em] text-muted uppercase">
        Technologies I work with
      </p>

      {/* Edge fade keeps items from hard-cutting at the viewport sides.
          With reduced motion the loop stops and the strip becomes manually scrollable. */}
      <div className="group overflow-hidden motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <TechList />
          <TechList hidden />
        </div>
      </div>
    </section>
  )
}
