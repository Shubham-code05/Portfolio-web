import { useCallback, useState } from 'react'
import { ArrowUpRight, Download, FileText, Send } from 'lucide-react'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import ActionLink from '../ui/ActionLink'
import ContactModal from '../ContactModal'
import { CONTACT_LINKS, RESUME } from '../../data/portfolioData'

function ContactRow({ label, value, href, icon: Icon }) {
  return (
    <ActionLink
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-bright/40 hover:bg-white/[0.08]"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-bright/15 text-accent-bright transition-colors duration-200 group-hover:bg-accent group-hover:text-on-accent">
        <Icon size={19} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-semibold tracking-[0.18em] text-white/50 uppercase">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-medium text-white sm:text-[15px]">{value}</span>
      </span>
      <ArrowUpRight
        size={18}
        className="shrink-0 text-white/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-bright"
        aria-hidden="true"
      />
    </ActionLink>
  )
}

export default function Contact() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const closeContact = useCallback(() => setIsContactOpen(false), [])

  return (
    <Section id="contact">
      <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-panel px-6 py-12 sm:rounded-[2.5rem] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        {/* Background texture: dot grid + green glows */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]"
        />
        <div aria-hidden="true" className="absolute -top-32 -left-24 -z-10 size-96 rounded-full bg-accent-bright/25 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-24 -bottom-40 -z-10 size-96 rounded-full bg-accent-bright/10 blur-3xl" />

        {/* min-w-0 on both columns lets long URLs truncate instead of widening the panel */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="min-w-0">
            <Reveal delay={150}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-bright/30 bg-accent-bright/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-accent-bright uppercase">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-bright opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent-bright" />
                </span>
                Let&apos;s Connect
              </span>
            </Reveal>

            <Reveal delay={250}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
                Let&apos;s build something <span className="text-accent-bright">meaningful.</span>
              </h2>
            </Reveal>

            <Reveal delay={350}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                I&apos;m open to software development opportunities, collaborations and interesting technology
                projects.
              </p>
            </Reveal>

            <Reveal delay={450} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                aria-haspopup="dialog"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-lg shadow-accent/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-accent/35"
              >
                Get In Touch
                <Send
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <div className="flex gap-3">
                <a
                  href={RESUME.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 sm:flex-none"
                >
                  View Resume
                  <FileText size={16} aria-hidden="true" />
                </a>
                <a
                  href={RESUME.url}
                  download={RESUME.downloadName}
                  aria-label="Download Resume"
                  title="Download Resume"
                  className="group inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  <Download size={17} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          <ul className="min-w-0 space-y-3">
            {CONTACT_LINKS.map((link, index) => (
              <Reveal as="li" key={link.label} delay={400 + index * 100}>
                <ContactRow {...link} />
              </Reveal>
            ))}
          </ul>
        </div>
      </Reveal>
      <ContactModal open={isContactOpen} onClose={closeContact} />
    </Section>
  )
}
