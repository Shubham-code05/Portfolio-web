import Container from './ui/Container'
import SectionHeader from './ui/SectionHeader'

/** Top band of every inner page; renders the page's single <h1>. */
export default function PageHeader({ badge, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(21,128,61,0.10)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      />
      <Container className="relative py-14 sm:py-20">
        <SectionHeader level={1} badge={badge} title={title} subtitle={subtitle} />
      </Container>
    </section>
  )
}
