import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import Container from './ui/Container'
import Avatar from './ui/Avatar'
import ActionLink from './ui/ActionLink'
import { CONTACT_LINKS, CORE_AREAS, FOOTER_LINKS, PROFILE } from '../data/portfolioData'

function FooterHeading({ children }) {
  return (
    <h2 className="text-[11px] font-semibold tracking-[0.18em] text-foreground uppercase">{children}</h2>
  )
}

function scrollToTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr] lg:gap-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="group inline-flex items-center gap-3">
              <Avatar
                src={PROFILE.avatar}
                name={PROFILE.name}
                decorative
                className="size-10 transition-transform duration-200 group-hover:scale-105"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-semibold tracking-tight">{PROFILE.name}</span>
                <span className="text-[11px] font-medium tracking-[0.16em] text-accent uppercase">Portfolio</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Building modern web experiences with code, AI and automation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav aria-label="Footer">
              <FooterHeading>Navigation</FooterHeading>
              <ul className="mt-5 space-y-3">
                {FOOTER_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="group inline-flex items-center text-sm text-muted transition-colors duration-200 hover:text-accent"
                    >
                      <span
                        aria-hidden="true"
                        className="h-px w-0 bg-accent transition-all duration-200 group-hover:mr-2 group-hover:w-3"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <FooterHeading>Core Areas</FooterHeading>
              <ul className="mt-5 space-y-3">
                {CORE_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2.5 text-sm text-muted">
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <FooterHeading>Contact</FooterHeading>
              <ul className="mt-5 space-y-3">
                {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <ActionLink
                      href={href}
                      className="group inline-flex items-center gap-3 text-sm text-muted transition-colors duration-200 hover:text-foreground"
                    >
                      <span className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground/70 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      {label}
                    </ActionLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-center text-sm text-muted">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground/80 transition-all duration-200 hover:border-accent/30 hover:text-accent"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </Container>
    </footer>
  )
}
