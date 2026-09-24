import { ArrowRight, ExternalLink } from 'lucide-react'
import ActionLink from '../ui/ActionLink'
import GithubIcon from '../ui/icons/GithubIcon'

function ProjectMedia({ project, index, featured }) {
  const { icon: Icon, image, title, category } = project

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden bg-surface ${
        featured ? 'md:aspect-[21/9] lg:aspect-auto lg:w-1/2' : ''
      }`}
    >
      {image ? (
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <>
          {/* Dot grid + soft green glow as a tasteful stand-in for a screenshot */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle,rgba(22,163,74,0.14)_1px,transparent_1px)] [background-size:18px_18px]"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 size-56 -translate-1/2 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-20 items-center justify-center rounded-3xl border border-border bg-background text-accent shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <Icon size={36} strokeWidth={1.75} aria-hidden="true" />
            </span>
          </div>
        </>
      )}

      {/* Soft green wash that rises on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <span className="absolute top-4 left-4 rounded-full border border-border bg-background/90 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
        {category}
      </span>
      <span aria-hidden="true" className="absolute top-4 right-4 text-xs font-semibold tracking-widest text-muted/70">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  )
}

/**
 * `headingLevel` matches the surrounding outline (2 under a page <h1>, 3 under a section <h2>).
 * `featured` defaults to the project's own flag; pass false to force the compact layout (e.g. previews).
 */
export default function ProjectCard({ project, index, headingLevel = 2, featured = project.featured ?? false }) {
  const { title, description, tech, links } = project
  const Heading = `h${headingLevel}`

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-[0_1px_2px_rgba(15,21,18,0.04)] transition-[translate,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_40px_-16px_rgba(15,21,18,0.14)] ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <ProjectMedia project={project} index={index} featured={featured} />

      <div className={`flex flex-1 flex-col p-5 sm:p-8 ${featured ? 'lg:justify-center lg:p-10' : ''}`}>
        <Heading className={`font-semibold tracking-tight text-balance ${featured ? 'text-xl sm:text-2xl' : 'text-xl'}`}>
          {title}
        </Heading>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground/75 transition-colors duration-200 hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* mt-auto pins actions to the card bottom so they align across grid rows */}
        <div className="mt-auto pt-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
            <ActionLink
              href={links.details}
              className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              View Project
              <ArrowRight size={16} className="transition-transform duration-200 group-hover/link:translate-x-1" />
            </ActionLink>

            <div className="flex items-center gap-2">
              <ActionLink
                href={links.github}
                aria-label={`${title} source code on GitHub`}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:text-foreground"
              >
                <GithubIcon size={16} />
              </ActionLink>
              <ActionLink
                href={links.live}
                className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3.5 py-2 text-xs font-semibold text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-on-accent"
              >
                Live Demo
                <ExternalLink size={14} />
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
