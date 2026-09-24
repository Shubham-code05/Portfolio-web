import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import EducationCard from '../cards/EducationCard'
import { EDUCATION } from '../../data/education'

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader badge="Education" title="Academic Background" />

      <div className="mt-10 space-y-6 sm:mt-12">
        {EDUCATION.map((education) => (
          <EducationCard key={`${education.degree}-${education.year}`} education={education} />
        ))}
      </div>
    </Section>
  )
}
