import { ArrowRight } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import ActionLink from '../ui/ActionLink'
import ProjectCard from '../cards/ProjectCard'
import { ALL_PROJECTS_URL, PROJECTS } from '../../data/projects'

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        badge="Selected Works"
        title="Featured Engineering Projects"
        subtitle="Practical applications built with modern web technologies and AI."
      />

      <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-10 flex justify-center sm:mt-12">
        <ActionLink
          href={ALL_PROJECTS_URL}
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent hover:shadow-md"
        >
          View All Projects
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </ActionLink>
      </div>
    </Section>
  )
}
