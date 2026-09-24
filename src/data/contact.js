import { Mail } from 'lucide-react'
import GithubIcon from '../components/ui/icons/GithubIcon'
import LinkedinIcon from '../components/ui/icons/LinkedinIcon'

// Placeholders ('#') until real details are provided. When updating:
//   email  → href: 'mailto:you@example.com', value: 'you@example.com'
//   resume → put the PDF in /public and set '/resume.pdf'
export const EMAIL_HREF = '#'
export const RESUME_URL = '#'

export const CONTACT_LINKS = [
  { label: 'Email', value: 'Coming soon', href: EMAIL_HREF, icon: Mail },
  { label: 'LinkedIn', value: 'Coming soon', href: '#', icon: LinkedinIcon },
  { label: 'GitHub', value: 'Coming soon', href: '#', icon: GithubIcon },
]
