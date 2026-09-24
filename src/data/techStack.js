import {
  Atom,
  Braces,
  CloudUpload,
  Database,
  FolderGit2,
  GitBranch,
  Hexagon,
  Leaf,
  Route,
  Sparkles,
  SquareTerminal,
  Triangle,
} from 'lucide-react'

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
