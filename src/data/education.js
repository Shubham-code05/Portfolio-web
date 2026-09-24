import { Binary, Braces, CodeXml, Database } from 'lucide-react'

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
