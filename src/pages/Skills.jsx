import PageHeader from '../components/PageHeader'
import Section from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import SkillCard from '../components/cards/SkillCard'
import usePageMeta from '../hooks/usePageMeta'
import { PAGES, SKILL_CATEGORIES } from '../data/portfolioData'

export default function Skills() {
  const page = PAGES.skills
  usePageMeta(page.title)

  return (
    <>
      <PageHeader badge={page.badge} title={page.heading} />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            // Stagger within each row of three
            <Reveal key={category.title} delay={(index % 3) * 100}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
