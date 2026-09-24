import {
  Atom,
  Binary,
  BookOpen,
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
  Hammer,
  Hexagon,
  Layers,
  Leaf,
  Lightbulb,
  ListChecks,
  Mail,
  MonitorSmartphone,
  Route,
  Server,
  Sparkles,
  SquareTerminal,
  Triangle,
  Webhook,
  Workflow,
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
/* Links & resume (single source of truth)                             */
/* ------------------------------------------------------------------ */

export const EMAIL = 'ishubham5999@gmail.com'
export const EMAIL_HREF = `mailto:${EMAIL}`
export const GITHUB_URL = 'https://github.com/Shubham-code05'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/shubham-prajapati-a986b3251/'

// Served from public/image/resume.png — use the root-relative public path, never an import
export const RESUME = {
  url: '/image/resume.png',
  downloadName: 'Shubham-Prajapati-Resume.png',
}

/* ------------------------------------------------------------------ */
/* Home hero                                                           */
/* ------------------------------------------------------------------ */

export const HERO = {
  eyebrow: 'MERN & AI Engineer',
  tagline: 'I build products, automate workflows, and solve real problems.',
  keywords: ['JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'AI Agents', 'Automation'],
  description: 'Currently building AI-powered applications and automation workflows.',
  // "All Links" CTA — the Profile page lists GitHub, LinkedIn, email and the resume
  allLinksPath: '/profile',
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
    subtitle: 'Where to find me online, plus my resume.',
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
}

// Content for the /about page (the Home intro above stays separate)
export const ABOUT_PAGE = {
  badge: 'About me',
  title: 'Building Digital Products with Code & AI.',
  subtitle:
    'I’m Shubham Prajapati, a Computer Science & Engineering graduate focused on building modern full-stack applications and exploring practical AI-powered solutions.',
  location: 'Lucknow, Uttar Pradesh, India',
  // Standalone "About" statement — kept short; details live in the sections below it
  about:
    'I’m a developer who enjoys turning ideas into useful software. I like working across the web stack, building reliable backend systems, and exploring AI-driven solutions and automation. For me, the best way to learn is to build, experiment, and solve problems that have real-world value.',
  whatIDo: [
    {
      title: 'Full-Stack Development',
      icon: Layers,
      description:
        'Building responsive frontend experiences and scalable backend systems using modern JavaScript technologies.',
    },
    {
      title: 'AI-Powered Development',
      icon: BrainCircuit,
      description: 'Exploring LLM-powered applications, AI-assisted coding, and practical AI integrations.',
    },
    {
      title: 'Backend & APIs',
      icon: Webhook,
      description:
        'Designing REST APIs, authentication systems, database-driven applications, and backend workflows.',
    },
    {
      title: 'Automation',
      icon: Workflow,
      description:
        'Building AI-assisted workflows and automation solutions that reduce repetitive development tasks.',
    },
  ],
  exploring: [
    'MERN Stack',
    'AI Applications',
    'AI Agents',
    'AI Automation',
    'LLM Integration',
    'REST APIs',
    'Backend Systems',
    'Database Systems',
    'Cloud Deployment',
    'DSA & Problem Solving',
  ],
  toolkit: [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'GitHub',
    'Vercel',
    'Render',
  ],
  education: {
    period: '2022 — 2026',
    region: 'Lucknow, Uttar Pradesh',
    cgpa: '7.87',
  },
  currentFocus: {
    title: 'Currently Building & Learning',
    text: 'Currently focused on strengthening full-stack engineering, Python and Data Structures & Algorithms, while building deeper expertise in AI-assisted development, AI agents, automation workflows, and LLM-powered applications.',
    areas: ['Full-Stack Engineering', 'Python', 'DSA', 'AI Agents', 'Automation Workflows', 'LLM Applications'],
  },
  approach: [
    { title: 'Build', icon: Hammer, text: 'Turn ideas into working products.' },
    { title: 'Learn', icon: BookOpen, text: 'Keep improving through projects and problem solving.' },
    { title: 'Solve', icon: Lightbulb, text: 'Focus on practical, maintainable solutions.' },
  ],
  cta: {
    title: 'Let’s build something meaningful.',
    subtitle: 'Have an idea, opportunity, or project in mind? Let’s connect.',
  },
}

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

// Each skill appears in exactly one category; the card's "N skills" count is derived from the array
export const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    icon: CodeXml,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman'],
  },
  {
    title: 'AI & Automation',
    icon: BrainCircuit,
    skills: ['AI Agents', 'LLM Applications', 'AI Automation', 'Automation Workflows'],
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
export const ALL_PROJECTS_URL = `${GITHUB_URL}?tab=repositories`

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

// Timeline entries, newest first. Add another role by copying the template below.
// Optional fields (description, tech) are simply not rendered when omitted.
export const EXPERIENCE = [
  {
    role: 'Full Stack Developer Intern',
    company: 'UpToSkills',
    type: 'Internship',
    period: '13 April 2026 – 13 July 2026',
    responsibilities: [
      'Contributed to full-stack web development tasks',
      'Worked on application development and implementation',
      'Collaborated on assigned development tasks',
      'Applied web development concepts in practical projects',
    ],
  },
  {
    role: 'MERN Full Stack Developer Intern',
    company: 'Hanumant Technology Pvt. Ltd.',
    type: 'Internship',
    period: 'February 2025 – March 2026',
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

// http(s) links open in a new tab with rel="noopener noreferrer" (see ActionLink); mailto opens the mail client
export const CONTACT_LINKS = [
  { label: 'Email', value: EMAIL, href: EMAIL_HREF, icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/shubham-prajapati-a986b3251', href: LINKEDIN_URL, icon: LinkedinIcon },
  { label: 'GitHub', value: 'github.com/Shubham-code05', href: GITHUB_URL, icon: GithubIcon },
]
