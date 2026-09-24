import { Bot, Gift, ListChecks } from 'lucide-react'

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

export const ALL_PROJECTS_URL = '#'
