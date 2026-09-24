import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, FileText, Link2 } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import ActionLink from '../ui/ActionLink'
import { CONTACT_LINKS, HERO, PROFILE, RESUME } from '../../data/portfolioData'

const SOCIAL_LINKS = HERO.socials.map((label) => CONTACT_LINKS.find((link) => link.label === label)).filter(Boolean)

const ICON_LINK_CLASS =
  'flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-on-accent'

const BUTTON_BASE =
  'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 md:px-4 lg:px-6'
const BUTTON_PRIMARY = `${BUTTON_BASE} bg-accent text-on-accent shadow-md shadow-accent/20 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25`
const BUTTON_SECONDARY = `${BUTTON_BASE} border border-border bg-background text-foreground shadow-sm hover:border-accent/30 hover:text-accent hover:shadow-md`

function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[15rem] animate-photo-in sm:max-w-[17rem] md:max-w-[15.5rem] lg:max-w-[21rem] xl:max-w-[23rem] motion-reduce:animate-none">
      {/* Soft green glow + dashed orbit ring — subtle depth behind the photo */}
      <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -inset-4 rounded-full border border-dashed border-accent/25 sm:-inset-5" />

      <div className="relative rounded-full bg-gradient-to-br from-accent/25 via-accent-soft to-background p-1.5 shadow-[0_24px_60px_-24px_rgba(15,21,18,0.28)]">
        <img
          src={PROFILE.photo}
          alt={PROFILE.name}
          width={492}
          height={488}
          fetchPriority="high"
          decoding="async"
          className="aspect-square w-full rounded-[50%] border-4 border-background bg-surface object-cover"
        />
      </div>
    </div>
  )
}

function Stats() {
  return (
    <dl className="mx-auto grid max-w-md grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-background shadow-[0_1px_2px_rgba(15,21,18,0.04)] md:mx-0">
      {HERO.stats.map(({ value, label }) => (
        // dt precedes dd for valid markup; flex-col-reverse shows the value on top
        <div key={label} className="flex flex-col-reverse items-center justify-end px-2 py-4 sm:px-4 md:items-start md:px-5">
          <dt className="mt-1 text-center text-[11px] leading-tight font-medium text-muted sm:text-xs md:text-left">
            {label}
          </dt>
          <dd className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background decoration: faint dot grid fading out from the photo side */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(21,128,61,0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_75%_45%,black,transparent_60%)]"
      />

      <Container className="relative grid min-h-[calc(100svh-4rem)] content-center gap-x-10 gap-y-12 py-14 sm:py-16 md:grid-cols-[1.45fr_1fr] md:gap-y-10 lg:grid-cols-[1.15fr_1fr] lg:gap-x-16">
        {/* Content — mobile: first, centered · md+: left column */}
        <div className="text-center md:col-start-1 md:row-start-1 md:text-left">
          {/* 1 — Small uppercase title */}
          <Reveal>
            <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-accent uppercase sm:text-sm">
              <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
              {HERO.eyebrow}
              {/* Mirrored line balances the centered mobile layout */}
              <span aria-hidden="true" className="h-px w-8 bg-accent/60 md:hidden" />
            </p>
          </Reveal>

          {/* 2 — Name */}
          <Reveal delay={80}>
            <h1 className="mt-5 text-5xl leading-[1.02] font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {PROFILE.name}
              <span className="text-accent">.</span>
            </h1>
          </Reveal>

          {/* 3 — Tagline */}
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-xl leading-snug font-medium text-balance text-foreground/85 sm:text-2xl md:mx-0">
              {HERO.tagline}
            </p>
          </Reveal>

          {/* 4 — Keywords (a list so screen readers announce items separately; "|" is decorative) */}
          <Reveal delay={240}>
            <ul
              aria-label="Core technologies"
              className="mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 font-mono text-[13px] text-muted sm:text-sm md:justify-start"
            >
              {HERO.keywords.map((keyword, index) => (
                <li key={keyword} className="inline-flex items-center gap-x-2.5 whitespace-nowrap">
                  {keyword}
                  {index < HERO.keywords.length - 1 && (
                    <span aria-hidden="true" className="text-accent/60">
                      |
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* 5 — Current work */}
          <Reveal delay={300}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:mx-0">
              {HERO.description}
            </p>
          </Reveal>

          {/* 6 — Social icons */}
          <Reveal as="ul" delay={360} className="mt-7 flex items-center justify-center gap-2 md:justify-start">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <ActionLink href={href} aria-label={label} className={ICON_LINK_CLASS}>
                  <Icon size={17} aria-hidden="true" />
                </ActionLink>
              </li>
            ))}
          </Reveal>

          {/* 7 — CTAs. Mobile: primary full width, the other two side by side */}
          <Reveal
            delay={420}
            className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center md:justify-start md:gap-2.5 lg:gap-3"
          >
            <Link to="/projects" className={`${BUTTON_PRIMARY} col-span-2`}>
              View Projects
              <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a href={RESUME.url} target="_blank" rel="noopener noreferrer" className={BUTTON_SECONDARY}>
              <FileText size={16} aria-hidden="true" />
              Resume
            </a>
            <Link to={HERO.allLinksPath} className={BUTTON_SECONDARY}>
              <Link2 size={16} aria-hidden="true" />
              All Links
              <ArrowUpRight
                size={14}
                aria-hidden="true"
                className="text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent md:max-lg:hidden"
              />
            </Link>
          </Reveal>
        </div>

        {/* Photo — mobile: after the content · md+: right column, spanning content + stats rows */}
        <div className="md:col-start-2 md:row-span-2 md:row-start-1 md:self-center">
          <ProfilePhoto />
        </div>

        {/* Quick stats — mobile: last · md+: under the content */}
        <Reveal delay={480} className="md:col-start-1 md:row-start-2">
          <Stats />
        </Reveal>
      </Container>
    </section>
  )
}
