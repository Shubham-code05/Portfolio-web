import Container from './Container'

export default function Section({ id, title, className = '', children }) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>
        {title && (
          <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {title}
          </h2>
        )}
        {children}
      </Container>
    </section>
  )
}
