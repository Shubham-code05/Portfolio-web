import Container from '../ui/Container'

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-svh items-center pt-16">
      <Container>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Hero <span className="text-accent">Section</span>
        </h1>
        <p className="mt-4 text-muted">Placeholder — UI coming next.</p>
      </Container>
    </section>
  )
}
