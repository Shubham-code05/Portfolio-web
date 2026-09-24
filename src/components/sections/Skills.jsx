import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import SkillCard from '../cards/SkillCard'
import { SKILL_CATEGORIES } from '../../data/skills'

export default function Skills() {
  return (
    <Section id="skills" className="border-y border-border bg-surface">
      <SectionHeader badge="Skills" title="Tools & Technologies I Work With" />

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {SKILL_CATEGORIES.map((category, index) => (
          // Stagger within each row of three
          <Reveal key={category.title} delay={(index % 3) * 100}>
            <SkillCard category={category} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
