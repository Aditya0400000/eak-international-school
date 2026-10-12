import Button from '../components/common/Button'
import Container from '../components/common/Container'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist or has been moved.',
  })

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">404</p>
      <h1 className="text-4xl font-semibold text-royal">Page not found</h1>
      <p className="max-w-md text-ink-soft">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button to="/">Back to Home</Button>
    </Container>
  )
}
