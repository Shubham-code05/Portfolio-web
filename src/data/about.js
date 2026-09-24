import { Binary, CodeXml, Database, GraduationCap, Layers, Sparkles, Webhook } from 'lucide-react'

export const ABOUT = {
  badge: 'About Shubham',
  title: 'Building, learning and solving with modern technology.',
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
