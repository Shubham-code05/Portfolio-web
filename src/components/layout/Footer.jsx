import Container from '../ui/Container'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="text-center text-sm text-muted">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </Container>
    </footer>
  )
}
