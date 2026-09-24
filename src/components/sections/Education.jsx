import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import EducationCard from '../cards/EducationCard'
import { EDUCATION } from '../../data/education'

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader badge="Education" title="Academic Background" />

      <div className="mt-10 space-y-6 sm:mt-12">
        {EDUCATION.map((education) => (
          <Reveal key={`${education.degree}-${education.year}`}>
            <EducationCard education={education} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
