import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Section from '../components/ui/Section'
import ActionLink from '../components/ui/ActionLink'
import Reveal from '../components/ui/Reveal'
import ProjectCard from '../components/cards/ProjectCard'
import usePageMeta from '../hooks/usePageMeta'
import { ALL_PROJECTS_URL, PAGES, PROJECTS } from '../data/portfolioData'

export default function Projects() {
  const page = PAGES.projects
  usePageMeta(page.title)

  return (
    <>
      <PageHeader badge={page.badge} title={page.heading} subtitle={page.subtitle} />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 100}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center sm:mt-12">
          <ActionLink
            href={ALL_PROJECTS_URL}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent hover:shadow-md"
          >
            View All Projects
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </ActionLink>
        </Reveal>
      </Section>
    </>
  )
}
