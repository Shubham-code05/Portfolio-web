import PageHeader from '../components/PageHeader'
import usePageMeta from '../hooks/usePageMeta'
import { PAGES } from '../data/portfolioData'

// Placeholder page — content to be defined in a later step
export default function Profile() {
  const page = PAGES.profile
  usePageMeta(page.title)

  return <PageHeader badge={page.badge} title={page.heading} subtitle={page.subtitle} />
}
