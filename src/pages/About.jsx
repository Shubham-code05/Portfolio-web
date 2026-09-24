import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  CalendarDays,
  CircleCheck,
  Download,
  GraduationCap,
  MapPin,
} from 'lucide-react'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import ActionLink from '../components/ui/ActionLink'
import usePageMeta from '../hooks/usePageMeta'
import {
  ABOUT_PAGE,
  CONTACT_LINKS,
  EDUCATION,
  EXPERIENCE,
  PAGES,
  RESUME,
} from '../data/portfolioData'

/* ------------------------------------------------------------------ */
/* Shared styles                                                       */
/* ------------------------------------------------------------------ */

const CARD = 'rounded-3xl border border-border bg-background shadow-[0_1px_2px_rgba(15,21,18,0.04)]'
const CARD_HOVER =
  'transition-[translate,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_40px_-16px_rgba(15,21,18,0.14)]'
const EYEBROW = 'text-[11px] font-semibold tracking-[0.2em] text-accent uppercase'

function BlockHeader({ eyebrow, title, className = '' }) {
  return (
    <Reveal className={className}>
      <p className={EYEBROW}>{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-balance sm:text-3xl">{title}</h2>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/* 1 — Intro                                                           */
/* ------------------------------------------------------------------ */

function Intro() {
  const [before, after] = ABOUT_PAGE.title.split('Code & AI')

  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      {/* Subtle decoration: masked dot grid + two soft orbs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(21,128,61,0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_80%_20%,black,transparent_65%)]"
      />
      <div aria-hidden="true" className="absolute -top-40 -right-32 size-[30rem] rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-48 -left-40 size-[26rem] rounded-full bg-accent/5 blur-3xl" />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-background px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-accent uppercase shadow-sm">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {ABOUT_PAGE.badge}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {before}
            <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">Code &amp; AI</span>
            {after}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{ABOUT_PAGE.subtitle}</p>
        </Reveal>

        <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/75">
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-accent" aria-hidden="true" />
            {ABOUT_PAGE.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <GraduationCap size={16} className="text-accent" aria-hidden="true" />
            B.Tech CSE · Class of 2026
          </span>
        </Reveal>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 2 — About (standalone statement)                                    */
/* ------------------------------------------------------------------ */

// Deliberately minimal: details live in the sections below, so nothing is repeated here
function AboutStatement() {
  return (
    <section aria-labelledby="about-heading" className="py-4 sm:py-8">
      <Reveal>
        <h2 id="about-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          About
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-6 max-w-[62ch] text-lg leading-[1.75] text-foreground/80 sm:text-xl sm:leading-[1.7]">
          {ABOUT_PAGE.about}
        </p>
      </Reveal>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 4 — What I do                                                       */
/* ------------------------------------------------------------------ */

function WhatIDo() {
  return (
    <section>
      <BlockHeader eyebrow="Expertise" title="What I Do" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {ABOUT_PAGE.whatIDo.map(({ title, icon: Icon, description }, index) => (
          <Reveal key={title} delay={index * 80}>
            <article className={`${CARD} ${CARD_HOVER} group relative flex h-full flex-col overflow-hidden p-6`}>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-on-accent">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span aria-hidden="true" className="text-sm font-semibold tabular-nums text-muted/50 transition-colors duration-300 group-hover:text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 5 — Areas I'm exploring (+ toolkit)                                 */
/* ------------------------------------------------------------------ */

function ChipGroup({ items, variant }) {
  const styles =
    variant === 'accent'
      ? 'border-accent/15 bg-accent-soft/70 text-foreground hover:border-accent/35 hover:text-accent'
      : 'border-border bg-surface text-foreground/80 hover:border-accent/30 hover:text-accent'

  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-[color,border-color,translate] duration-200 hover:-translate-y-0.5 ${styles}`}
        >
          {variant === 'accent' && <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />}
          {item}
        </li>
      ))}
    </ul>
  )
}

function Interests() {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.25fr_1fr] lg:gap-6">
      <Reveal className={`${CARD} p-6 sm:p-8`}>
        <p className={EYEBROW}>Interests</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Areas I&apos;m Exploring</h2>
        <ChipGroup items={ABOUT_PAGE.exploring} variant="accent" />
      </Reveal>
      <Reveal delay={100} className={`${CARD} p-6 sm:p-8`}>
        <p className={EYEBROW}>Toolkit</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Technologies I Use</h2>
        <ChipGroup items={ABOUT_PAGE.toolkit} />
      </Reveal>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 6 & 7 — Education + experience timelines                            */
/* ------------------------------------------------------------------ */

function TimelineItem({ children, isLast = true }) {
  return (
    <li className="relative pb-2 pl-9">
      <span
        aria-hidden="true"
        className={`absolute top-3 bottom-0 left-[11px] w-px bg-gradient-to-b from-accent/50 ${isLast ? 'to-transparent' : 'to-border'}`}
      />
      <span
        aria-hidden="true"
        className="absolute top-1 left-0 flex size-6 items-center justify-center rounded-full border-2 border-accent bg-background shadow-[0_0_0_4px_var(--color-accent-soft)]"
      >
        <span className="size-2 rounded-full bg-accent" />
      </span>
      {children}
    </li>
  )
}

function PeriodPill({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-foreground/75">
      <CalendarDays size={13} className="text-accent" aria-hidden="true" />
      {children}
    </span>
  )
}

function Background() {
  const education = EDUCATION[0]

  return (
    <section className="grid gap-4 lg:grid-cols-2 lg:gap-6">
      <Reveal className={`${CARD} p-6 sm:p-8`}>
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-on-accent shadow-sm shadow-accent/30">
            <GraduationCap size={19} aria-hidden="true" />
          </span>
          <div>
            <p className={EYEBROW}>Education</p>
            <h2 className="text-xl font-bold tracking-tight">Academic Background</h2>
          </div>
        </div>

        <ol className="mt-8">
          <TimelineItem>
            <PeriodPill>{ABOUT_PAGE.education.period}</PeriodPill>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">
              {education.degree} — {education.field}
            </h3>
            <p className="mt-1.5 text-sm font-medium text-foreground/80">{education.university}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={14} className="text-accent" aria-hidden="true" />
              {ABOUT_PAGE.education.region}
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 rounded-xl border border-accent/15 bg-accent-soft px-3 py-2 text-sm font-semibold text-accent">
                <Award size={16} aria-hidden="true" />
                CGPA: {ABOUT_PAGE.education.cgpa}
              </span>
            </div>
          </TimelineItem>
        </ol>
      </Reveal>

      <Reveal delay={100} className={`${CARD} p-6 sm:p-8`}>
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-on-accent shadow-sm shadow-accent/30">
            <Briefcase size={18} aria-hidden="true" />
          </span>
          <div>
            <p className={EYEBROW}>Experience</p>
            <h2 className="text-xl font-bold tracking-tight">Professional Experience</h2>
          </div>
        </div>

        {/* Entries come straight from the verified Experience data */}
        <ol className="mt-8 space-y-6">
          {EXPERIENCE.map((item, index) => (
            <TimelineItem key={`${item.company}-${item.period}`} isLast={index === EXPERIENCE.length - 1}>
              <PeriodPill>{item.period}</PeriodPill>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.role}</h3>
              <p className="mt-1.5 text-sm font-medium text-foreground/80">{item.company}</p>
              <ul className="mt-4 space-y-2">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-2.5 text-sm text-muted">
                    <CircleCheck size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 8 — Current focus                                                   */
/* ------------------------------------------------------------------ */

function CurrentFocus() {
  const { title, text, areas } = ABOUT_PAGE.currentFocus

  return (
    <Reveal className={`${CARD} relative overflow-hidden bg-surface`}>
      {/* Faint engineering-grid pattern fading in from the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(21,128,61,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(21,128,61,0.07)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_left,black,transparent_75%)]"
      />
      <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12 lg:p-12">
        <div>
          <p className={EYEBROW}>Now</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-[17px]">{text}</p>
        </div>

        <ul className="grid gap-2 sm:grid-cols-2" aria-label="Current focus areas">
          {areas.map((area) => (
            <li
              key={area}
              className="flex items-center gap-3 rounded-2xl border border-border bg-background/90 px-4 py-3 text-sm font-medium backdrop-blur-sm"
            >
              <span className="relative flex size-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {area}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/* 9 — Personal approach                                               */
/* ------------------------------------------------------------------ */

function Approach() {
  return (
    <section>
      <BlockHeader eyebrow="Approach" title="How I Work" />
      <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:gap-6">
        {ABOUT_PAGE.approach.map(({ title, icon: Icon, text }, index) => (
          <Reveal key={title} delay={index * 80} className={`${CARD} ${CARD_HOVER} group p-6`}>
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-on-accent">
                <Icon size={17} aria-hidden="true" />
              </span>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase">{title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 10 & 11 — CTA + social links                                        */
/* ------------------------------------------------------------------ */

const SOCIAL_ORDER = ['GitHub', 'LinkedIn', 'Email']

function CallToAction() {
  const socials = SOCIAL_ORDER.map((label) => CONTACT_LINKS.find((link) => link.label === label)).filter(Boolean)

  return (
    <Reveal className="relative isolate overflow-hidden rounded-3xl bg-panel px-6 py-12 text-center sm:px-10 sm:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div aria-hidden="true" className="absolute -top-40 left-1/2 -z-10 size-[28rem] -translate-x-1/2 rounded-full bg-accent-bright/20 blur-3xl" />

      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
        {ABOUT_PAGE.cta.title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base text-white/65 sm:text-lg">{ABOUT_PAGE.cta.subtitle}</p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          to="/projects"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-lg shadow-accent/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
        >
          View My Projects
          <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        <a
          href={RESUME.url}
          download={RESUME.downloadName}
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
        >
          Download Resume
          <Download size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5" />
        </a>
      </div>

      <div className="mx-auto mt-10 max-w-md border-t border-white/10 pt-8">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase">Find me online</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <ActionLink
                href={href}
                aria-label={label}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-bright/40 hover:bg-white/[0.08] hover:text-white"
              >
                <Icon size={16} aria-hidden="true" className="text-accent-bright" />
                {label}
                <ArrowUpRight size={14} aria-hidden="true" className="text-white/40 transition-colors group-hover:text-accent-bright" />
              </ActionLink>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function About() {
  usePageMeta(PAGES.about.title)

  return (
    <>
      <Intro />
      <Container className="space-y-16 py-12 sm:space-y-20 sm:py-16 lg:space-y-24 lg:py-20">
        <AboutStatement />
        <WhatIDo />
        <Interests />
        <Background />
        <CurrentFocus />
        <Approach />
        <CallToAction />
      </Container>
    </>
  )
}
