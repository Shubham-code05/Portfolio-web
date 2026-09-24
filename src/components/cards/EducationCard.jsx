import { Award, CalendarCheck, GraduationCap, Landmark, MapPin } from 'lucide-react'

export default function EducationCard({ education }) {
  const { degree, field, university, location, status, year, grade, focus } = education

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-[0_1px_2px_rgba(15,21,18,0.04)] transition-[translate,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_40px_-16px_rgba(15,21,18,0.14)] md:flex-row">
      {/* Year panel */}
      <div className="relative flex items-center gap-5 overflow-hidden border-b border-border bg-surface p-5 sm:p-8 md:w-64 md:shrink-0 md:flex-col md:items-start md:justify-between md:border-r md:border-b-0">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(22,163,74,0.12)_1px,transparent_1px)] [background-size:16px_16px]"
        />
        <span className="relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-md shadow-accent/25 transition-transform duration-300 group-hover:-rotate-6">
          <GraduationCap size={28} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div className="relative">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">{status}</p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{year}</p>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 p-5 sm:p-8">
        <span className="inline-flex rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
          {degree}
        </span>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-balance sm:text-2xl">
          {degree} — {field}
        </h3>

        <div className="mt-4 space-y-2 text-sm text-foreground/80 sm:text-[15px]">
          <p className="flex items-start gap-2.5">
            <Landmark size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            {university}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted">
            <p className="inline-flex items-center gap-2.5">
              <MapPin size={16} className="shrink-0 text-accent" aria-hidden="true" />
              {location}
            </p>
            <p className="inline-flex items-center gap-2.5">
              <CalendarCheck size={16} className="shrink-0 text-accent" aria-hidden="true" />
              {status} {year}
            </p>
            {grade && (
              <p className="inline-flex items-center gap-2.5">
                <Award size={16} className="shrink-0 text-accent" aria-hidden="true" />
                {grade}
              </p>
            )}
          </div>
        </div>

        {focus?.length > 0 && (
          <div className="mt-6 border-t border-border pt-6">
            <h4 className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
              Relevant Focus
            </h4>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {focus.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors duration-200 hover:border-accent/25 hover:bg-accent-soft hover:text-accent"
                >
                  <Icon size={17} className="shrink-0 text-accent" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}
