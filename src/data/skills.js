import { BrainCircuit, CodeXml, Database, MonitorSmartphone, Server, Wrench } from 'lucide-react'

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
