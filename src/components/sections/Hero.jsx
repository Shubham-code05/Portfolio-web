import Container from '../ui/Container'
import Reveal from '../ui/Reveal'

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-svh items-center pt-16">
      <Container>
        {/* The page's single <h1> — keep it on the name when the Hero UI is built */}
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Shubham Prajapati<span className="text-accent">.</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-4 text-muted">Software Engineer — Hero UI coming next.</p>
        </Reveal>
      </Container>
    </section>
  )
}
