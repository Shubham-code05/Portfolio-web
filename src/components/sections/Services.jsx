import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import ServiceCard from '../cards/ServiceCard'
import { SERVICES } from '../../data/services'

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader badge="What I Build" title="Solutions I Can Build" />

      <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3 lg:gap-6">
        {SERVICES.map((service, index) => (
          <Reveal key={service.title} delay={index * 100}>
            <ServiceCard service={service} index={index} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
