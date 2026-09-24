import PageHeader from '../components/PageHeader'
import Section from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import EducationCard from '../components/cards/EducationCard'
import usePageMeta from '../hooks/usePageMeta'
import { EDUCATION, PAGES } from '../data/portfolioData'

export default function Education() {
  const page = PAGES.education
  usePageMeta(page.title)

  return (
    <>
      <PageHeader badge={page.badge} title={page.heading} />

      <Section>
        <div className="space-y-6">
          {EDUCATION.map((education) => (
            <Reveal key={`${education.degree}-${education.year}`}>
              <EducationCard education={education} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
