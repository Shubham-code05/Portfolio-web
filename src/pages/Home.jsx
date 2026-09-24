import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/sections/Hero'
import TechStack from '../components/sections/TechStack'
import Contact from '../components/sections/Contact'
import Section from '../components/ui/Section'
import SectionHeader from '../components/ui/SectionHeader'
import Reveal from '../components/ui/Reveal'
import ProjectCard from '../components/cards/ProjectCard'
import usePageMeta from '../hooks/usePageMeta'
import { ABOUT, PAGES, PROJECTS } from '../data/portfolioData'

const PREVIEW_PROJECT_COUNT = 2

function MoreLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent hover:shadow-md"
    >
      {children}
      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  )
}

export default function Home() {
  usePageMeta()

  return (
    <>
      <Hero />

      {/* Short introduction — full story lives on /about */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-16">
          <SectionHeader badge={PAGES.about.badge} title={PAGES.about.heading} />
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{ABOUT.paragraphs[0]}</p>
            <div className="mt-6">
              <MoreLink to="/about">More about me</MoreLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Skills preview — full breakdown lives on /skills */}
      <TechStack action={<MoreLink to="/skills">Explore all skills</MoreLink>} />

      {/* Featured projects preview — full list lives on /projects */}
      <Section>
        <SectionHeader badge={PAGES.projects.badge} title={PAGES.projects.heading} subtitle={PAGES.projects.subtitle} />

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:gap-8">
          {PROJECTS.slice(0, PREVIEW_PROJECT_COUNT).map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <ProjectCard project={project} index={index} headingLevel={3} featured={false} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center sm:mt-12">
          <MoreLink to="/projects">View All Projects</MoreLink>
        </Reveal>
      </Section>

      <Contact />
    </>
  )
}
