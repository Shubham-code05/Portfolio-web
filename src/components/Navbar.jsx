import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Avatar from './ui/Avatar'
import ThemeToggle from './ThemeToggle'
import { EMAIL_HREF, NAV_LINKS, PROFILE } from '../data/portfolioData'

// Must match Tailwind's `xl` breakpoint, where the desktop nav appears
const DESKTOP_QUERY = '(min-width: 80rem)'

function StatusIndicator() {
  if (!PROFILE.isAvailable) return null

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-accent" />
      </span>
      {PROFILE.statusLabel}
    </span>
  )
}

// Opens the visitor's mail client. Display (inline-flex/hidden) is set by the caller so responsive visibility classes never conflict
function ContactButton({ onClick, className = '' }) {
  return (
    <a
      href={EMAIL_HREF}
      onClick={onClick}
      className={`group items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent shadow-sm shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md hover:shadow-accent/25 ${className}`}
    >
      Contact Me
      <ArrowUpRight
        size={16}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  )
}

const desktopLinkClass = ({ isActive }) =>
  `rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
    isActive ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-surface hover:text-foreground'
  }`

const mobileLinkClass = ({ isActive }) =>
  `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
    isActive ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-surface hover:text-foreground'
  }`

export default function Navbar() {
  const location = useLocation()
  // The menu is "open" only for the location it was opened on, so any navigation
  // (link tap, back/forward) closes it without an extra effect.
  const [openAt, setOpenAt] = useState(null)
  const isOpen = openAt === location.key
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape or when the viewport grows to desktop size
  useEffect(() => {
    if (!isOpen) return

    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onKeyDown = (event) => event.key === 'Escape' && setOpenAt(null)
    const onBreakpoint = (event) => event.matches && setOpenAt(null)

    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [isOpen])

  const closeMenu = () => setOpenAt(null)
  const toggleMenu = () => setOpenAt(isOpen ? null : location.key)
  const isElevated = isScrolled || isOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 animate-nav-in border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:animate-none ${
          isElevated
            ? 'border-border bg-background/90 shadow-[0_1px_12px_rgba(15,21,18,0.05)]'
            : 'border-transparent bg-background/70'
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" onClick={closeMenu} className="group flex min-w-0 items-center gap-3">
            <Avatar
              src={PROFILE.photo}
              name={PROFILE.name}
              priority
              className="size-9 transition-transform duration-200 group-hover:scale-105"
            />
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-sm font-semibold tracking-tight">{PROFILE.name}</span>
              <span className="text-[10px] font-medium whitespace-nowrap tracking-[0.16em] text-muted uppercase">
                {PROFILE.role}
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <NavLink to={to} end={to === '/'} className={desktopLinkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="hidden xl:block">
              <StatusIndicator />
            </div>
            <ContactButton className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-200 hover:bg-surface xl:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown — animates height via grid rows; `inert` keeps hidden links out of tab order */}
        <div
          id="mobile-menu"
          inert={!isOpen}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out xl:hidden ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 pt-2 pb-5 sm:px-6 lg:px-8">
              <ul className="grid gap-1 sm:grid-cols-2">
                {NAV_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink to={to} end={to === '/'} onClick={closeMenu} className={mobileLinkClass}>
                      {({ isActive }) => (
                        <>
                          {label}
                          {isActive && <span className="size-1.5 rounded-full bg-accent" />}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                <StatusIndicator />
                <ContactButton onClick={closeMenu} className="inline-flex sm:hidden" />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Backdrop — tap outside the menu to close it */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-panel/10 backdrop-blur-[2px] transition-opacity duration-300 xl:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
    </>
  )
}
