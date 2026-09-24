import PageHeader from '../components/PageHeader'
import Section from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import ServiceCard from '../components/cards/ServiceCard'
import usePageMeta from '../hooks/usePageMeta'
import { PAGES, SERVICES } from '../data/portfolioData'

export default function Services() {
  const page = PAGES.services
  usePageMeta(page.title)

  return (
    <>
      <PageHeader badge={page.badge} title={page.heading} />

      <Section>
        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 100}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
