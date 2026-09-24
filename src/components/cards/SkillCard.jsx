export default function SkillCard({ category }) {
  const { title, icon: Icon, skills } = category

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-border bg-background p-5 shadow-[0_1px_2px_rgba(15,21,18,0.04)] transition-[translate,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_40px_-16px_rgba(15,21,18,0.14)] sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-md group-hover:shadow-accent/25">
            <Icon size={20} aria-hidden="true" />
          </span>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        </div>
        <span className="shrink-0 text-xs font-medium whitespace-nowrap text-muted">
          {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
        </span>
      </div>

      <div aria-hidden="true" className="my-5 h-px bg-border" />

      <ul className="flex flex-wrap gap-2" aria-label={`${title} skills`}>
        {skills.map((skill) => (
          <li
            key={skill}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground/80 transition-[translate,color,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
          >
            <span className="size-1.5 rounded-full bg-accent/70" aria-hidden="true" />
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
