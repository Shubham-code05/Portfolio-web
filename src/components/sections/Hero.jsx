import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import ActionLink from '../ui/ActionLink'
import { CONTACT_LINKS, CONTACT_PATH, HERO, PROFILE, RESUME_URL } from '../../data/portfolioData'

const SOCIAL_LINKS = HERO.socials.map((label) => CONTACT_LINKS.find((link) => link.label === label)).filter(Boolean)

const SOCIAL_LABELS = {
  GitHub: 'GitHub profile',
  LinkedIn: 'LinkedIn profile',
  Email: 'Send an email',
}

function AvailabilityBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3.5 py-1.5 text-xs font-semibold text-accent">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-accent" />
      </span>
      {HERO.badge}
    </span>
  )
}

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
          <Reveal>
            <AvailabilityBadge />
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 tracking-tight">
              <span className="block text-2xl font-medium text-muted sm:text-3xl">{HERO.greeting}</span>{' '}
              <span className="mt-1 block text-4xl leading-[1.05] font-bold text-foreground sm:text-5xl lg:text-6xl">
                {PROFILE.name}
                <span className="text-accent">.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            {/* Separator trails each role (except the last) so a wrapped line never starts with "|" */}
            <p className="mt-5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-base font-semibold text-foreground/85 sm:text-lg md:justify-start">
              {HERO.subtitle.map((role, index) => (
                <span key={role} className="inline-flex items-center gap-x-2.5 whitespace-nowrap">
                  {role}
                  {index < HERO.subtitle.length - 1 && (
                    <span aria-hidden="true" className="text-accent/50">
                      |
                    </span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:mx-0">
              {HERO.intro}
            </p>
          </Reveal>

          <Reveal delay={320} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 whitespace-nowrap md:px-5 lg:px-6 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
            >
              View My Projects
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <ActionLink
              href={RESUME_URL}
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 whitespace-nowrap md:px-5 lg:px-6 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent hover:shadow-md"
            >
              Download Resume
              <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </ActionLink>
          </Reveal>

          <Reveal delay={400} className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Link
              to={CONTACT_PATH}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Let&apos;s connect
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <span aria-hidden="true" className="h-5 w-px bg-border" />

            <ul className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <ActionLink
                    href={href}
                    aria-label={SOCIAL_LABELS[label] ?? label}
                    className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
                  >
                    <Icon size={17} aria-hidden="true" />
                  </ActionLink>
                </li>
              ))}
            </ul>
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
