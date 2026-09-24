import {
  Atom,
  Binary,
  Bot,
  Braces,
  BrainCircuit,
  CloudUpload,
  CodeXml,
  Database,
  FolderGit2,
  Gift,
  GitBranch,
  Globe,
  GraduationCap,
  Hexagon,
  Layers,
  Leaf,
  ListChecks,
  Mail,
  MonitorSmartphone,
  Route,
  Server,
  Sparkles,
  SquareTerminal,
  Triangle,
  Webhook,
  Wrench,
} from 'lucide-react'
import GithubIcon from '../components/ui/icons/GithubIcon'
import LinkedinIcon from '../components/ui/icons/LinkedinIcon'

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: 'Shubham Prajapati',
  role: 'Software Engineer',
  // Profile photo served from public/image/photo.png (used by the navbar and the Home hero)
  photo: '/image/photo.png',
  // Footer avatar — null shows initials. Set to `photo` above to use the image there too.
  avatar: null,
  isAvailable: true,
  statusLabel: 'Available for work',
}

/* ------------------------------------------------------------------ */
/* Home hero                                                           */
/* ------------------------------------------------------------------ */

export const HERO = {
  badge: 'Available for opportunities',
  greeting: "Hi, I'm",
  subtitle: ['Software Engineer', 'MERN Stack Developer', 'AI Enthusiast'],
  intro:
    'B.Tech Computer Science & Engineering graduate with hands-on experience building scalable web applications, REST APIs, authentication systems, and AI-powered solutions.',
  stats: [
    { value: '1+', label: 'Year Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '7.87', label: 'B.Tech CGPA' },
  ],
  // Order of the social icons in the hero (labels match CONTACT_LINKS)
  socials: ['GitHub', 'LinkedIn', 'Email'],
}

/* ------------------------------------------------------------------ */
/* Navigation & pages                                                  */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Education', to: '/education' },
  { label: 'Profile', to: '/profile' },
]

// The contact CTA lives on the Home page; '/#contact' scrolls to it from any page
export const CONTACT_PATH = '/#contact'

export const FOOTER_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Education', to: '/education' },
  { label: 'Contact', to: CONTACT_PATH },
]

export const CORE_AREAS = ['Web Development', 'MERN Stack', 'AI & Automation', 'DSA']

// Per-page document title and header copy
export const PAGES = {
  about: {
    title: 'About',
    badge: 'About Shubham',
    heading: 'Building, learning and solving with modern technology.',
  },
  skills: {
    title: 'Skills',
    badge: 'Skills',
    heading: 'Tools & Technologies I Work With',
  },
  services: {
    title: 'Services',
    badge: 'What I Build',
    heading: 'Solutions I Can Build',
  },
  projects: {
    title: 'Projects',
    badge: 'Selected Works',
    heading: 'Featured Engineering Projects',
    subtitle: 'Practical applications built with modern web technologies and AI.',
  },
  experience: {
    title: 'Experience',
    badge: 'Career Journey',
    heading: 'Professional Experience',
  },
  education: {
    title: 'Education',
    badge: 'Education',
    heading: 'Academic Background',
  },
  profile: {
    title: 'Profile',
    badge: 'Profile',
    heading: 'Profile',
    subtitle: 'Profile content coming soon.',
  },
}

/* ------------------------------------------------------------------ */
/* Tech stack (marquee)                                                */
/* ------------------------------------------------------------------ */

// Lucide has no brand logos, so each tech uses a representative icon
export const TECH_STACK = [
  { name: 'React.js', icon: Atom },
  { name: 'Node.js', icon: Hexagon },
  { name: 'Express.js', icon: Route },
  { name: 'MongoDB', icon: Leaf },
  { name: 'JavaScript', icon: Braces },
  { name: 'Python', icon: SquareTerminal },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: FolderGit2 },
  { name: 'Vercel', icon: Triangle },
  { name: 'Render', icon: CloudUpload },
  { name: 'AI / Automation', icon: Sparkles },
]

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT = {
  paragraphs: [
    "I'm a Computer Science & Engineering graduate with hands-on experience in MERN stack development. I enjoy building practical web applications, working with APIs and databases, and exploring AI-powered tools and automation.",
    'My current focus is improving my problem-solving skills, building production-ready applications and exploring how AI can be integrated into modern software workflows.',
  ],
  highlights: [
    { label: 'CSE Graduate', icon: GraduationCap },
    { label: 'MERN Stack', icon: CodeXml },
    { label: 'AI & Automation', icon: Sparkles },
  ],
  focus: [
    { label: 'Full-Stack Web Development', icon: Layers },
    { label: 'AI & Automation', icon: Sparkles },
    { label: 'REST API Development', icon: Webhook },
    { label: 'Database Management', icon: Database },
    { label: 'Data Structures & Algorithms', icon: Binary },
  ],
  // Placeholder until a destination is provided
  readMoreUrl: '#',
}

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Programming',
    icon: CodeXml,
    skills: ['JavaScript', 'Python'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Vercel', 'Render'],
  },
  {
    title: 'AI & Automation',
    icon: BrainCircuit,
    skills: ['AI Tools', 'AI Agents', 'Automation Workflows', 'LLM-based Applications'],
  },
]

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const SERVICES = [
  {
    title: 'Web Development',
    icon: Globe,
    description:
      'Responsive and modern web applications with clean interfaces and strong user experiences.',
    features: ['Responsive UI', 'React applications', 'Modern JavaScript', 'Performance-focused development'],
  },
  {
    title: 'MERN Stack Applications',
    icon: Layers,
    description: 'Full-stack applications using React, Node.js, Express and MongoDB.',
    features: ['REST APIs', 'Authentication', 'CRUD applications', 'Database integration'],
  },
  {
    title: 'AI & Automation',
    icon: Bot,
    description: 'AI-powered applications, chatbots and workflow automation solutions.',
    features: ['AI integrations', 'Chatbots', 'AI agents', 'Workflow automation'],
  },
]

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

// Links are placeholders ('#') until real URLs are provided.
// `image` can be set to an imported screenshot to replace the icon placeholder.
export const PROJECTS = [
  {
    title: 'KMCLU University AI Chatbot',
    category: 'AI / MERN',
    description:
      'An AI-powered university information chatbot designed to provide users with quick and conversational access to university-related information.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI / LLM'],
    icon: Bot,
    image: null,
    featured: true,
    links: { details: '#', github: '#', live: '#' },
  },
  {
    title: 'MERN Task Manager',
    category: 'MERN Stack',
    description:
      'A full-stack task management application with authentication, CRUD operations and secure API-based communication.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    icon: ListChecks,
    image: null,
    links: { details: '#', github: '#', live: '#' },
  },
  {
    title: 'VEZIVO — Customised Gifting Platform',
    category: 'E-Commerce / MERN',
    description:
      'A modern customised gifting platform concept for personalised products such as photo mugs, frames and customised gifts.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    icon: Gift,
    image: null,
    links: { details: '#', github: '#', live: '#' },
  },
]

// External archive (e.g. GitHub repositories) shown on the Projects page
export const ALL_PROJECTS_URL = '#'

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

// Timeline entries, newest first. Add another role by copying the template below.
export const EXPERIENCE = [
  {
    role: 'MERN Full Stack Developer Intern',
    company: 'Hanumant Technology Pvt. Ltd.',
    type: 'Internship',
    period: 'February 2025 – July 2025',
    description:
      'Worked on MERN stack development and contributed to web application development using React, Node.js, Express.js and MongoDB.',
    responsibilities: [
      'Developed responsive web application components',
      'Worked with REST APIs',
      'Worked with MongoDB',
      'Debugged and improved application features',
      'Used Git/GitHub for development workflow',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub'],
  },

  // --- Template for additional experience (uncomment and fill in) ---
  // {
  //   role: '',
  //   company: '',
  //   type: '',            // e.g. 'Full-time', 'Internship', 'Freelance'
  //   period: '',          // e.g. 'August 2025 – Present'
  //   description: '',
  //   responsibilities: [],
  //   tech: [],
  // },
]

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

// Add further qualifications to this array; each renders as its own card.
export const EDUCATION = [
  {
    degree: 'B.Tech',
    field: 'Computer Science & Engineering',
    university: 'Khwaja Moinuddin Chishti Language University',
    location: 'Lucknow',
    status: 'Completed',
    year: '2026',
    // Optional — set e.g. 'CGPA: 8.2 / 10' to show it; left null so nothing is displayed
    grade: null,
    focus: [
      { label: 'Software Development', icon: CodeXml },
      { label: 'Programming', icon: Braces },
      { label: 'Databases', icon: Database },
      { label: 'Data Structures', icon: Binary },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

// Placeholders ('#') until real details are provided. When updating:
//   email  → EMAIL_HREF: 'mailto:you@example.com', and the Email row's value: 'you@example.com'
//   resume → put the PDF in /public and set RESUME_URL: '/resume.pdf'
export const EMAIL_HREF = '#'
export const RESUME_URL = '#'

export const CONTACT_LINKS = [
  { label: 'Email', value: 'Coming soon', href: EMAIL_HREF, icon: Mail },
  { label: 'LinkedIn', value: 'Coming soon', href: '#', icon: LinkedinIcon },
  { label: 'GitHub', value: 'Coming soon', href: '#', icon: GithubIcon },
]
