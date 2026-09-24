import { ArrowUpRight, Download, FileText } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Section from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import ActionLink from '../components/ui/ActionLink'
import usePageMeta from '../hooks/usePageMeta'
import { CONTACT_LINKS, PAGES, RESUME } from '../data/portfolioData'

const CARD_CLASS =
  'rounded-3xl border border-border bg-background shadow-[0_1px_2px_rgba(15,21,18,0.04)] transition-[translate,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_40px_-16px_rgba(15,21,18,0.14)]'

function LinkCard({ label, value, href, icon: Icon }) {
  return (
    <ActionLink href={href} className={`group flex h-full items-center gap-4 p-5 sm:p-6 ${CARD_CLASS}`}>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-on-accent">
        <Icon size={20} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">{label}</span>
        <span className="mt-0.5 block truncate text-sm font-medium text-foreground sm:text-[15px]">{value}</span>
      </span>
      <ArrowUpRight
        size={18}
        aria-hidden="true"
        className="shrink-0 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
      />
    </ActionLink>
  )
}

export default function Profile() {
  const page = PAGES.profile
  usePageMeta(page.title)

  return (
    <>
      <PageHeader badge={page.badge} title={page.heading} subtitle={page.subtitle} />

      <Section>
        <Reveal as="h2" className="text-xl font-semibold tracking-tight">
          Find me online
        </Reveal>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {CONTACT_LINKS.map((link, index) => (
            // min-w-0 lets the grid item shrink so long URLs truncate instead of overflowing on phones
            <Reveal as="li" key={link.label} delay={index * 100} className="min-w-0">
              <LinkCard {...link} />
            </Reveal>
          ))}
        </ul>

        <Reveal
          className={`mt-10 flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 ${CARD_CLASS}`}
        >
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-on-accent shadow-sm shadow-accent/30">
              <FileText size={20} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Resume</h2>
              <p className="text-sm text-muted">View it in your browser or download a copy.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={RESUME.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent shadow-sm shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md hover:shadow-accent/25"
            >
              View Resume
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href={RESUME.url}
              download={RESUME.downloadName}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent"
            >
              Download Resume
              <Download size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
