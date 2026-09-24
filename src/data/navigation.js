export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Profile', href: '#profile' },
]

// Section ids tracked for active-link highlighting (stable reference for hooks)
export const SECTION_IDS = NAV_LINKS.map(({ href }) => href.slice(1))
