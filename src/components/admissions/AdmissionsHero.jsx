import { ArrowRight, CalendarDays, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import Container from '../common/Container'

const facts = [
  { icon: CalendarDays, value: '2027', label: 'Session intake' },
  { icon: GraduationCap, value: 'Grades 1–12', label: 'Now accepting' },
  { icon: ShieldCheck, value: 'Demo only', label: 'No data stored' },
]

export default function AdmissionsHero() {
  return (
    <section className="relative overflow-hidden bg-royal text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[14px] border-gold/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]"
      />

      <Container className="relative flex flex-col items-center gap-6 py-16 text-center sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="text-xs text-white/70">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="transition-colors duration-200 hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/40">
              /
            </li>
            <li className="text-gold" aria-current="page">
              Admissions
            </li>
          </ol>
        </nav>

        <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          <Sparkles size={14} className="shrink-0" aria-hidden="true" />
          <span className="min-w-0">Admissions 2027 · Now Open</span>
        </span>

        <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Join the EAK family
          <span className="mt-3 block text-xl font-normal text-gold sm:text-2xl">
            A warm welcome, a simple process, and a place to belong.
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-white/80">
          Applications for the 2027 session are open for Grades 1 to 12. Follow our five-step process, prepare
          your documents, and our admissions team will guide you at every stage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#apply" variant="gold" size="lg">
            Apply Now
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href="#process" variant="outlineLight" size="lg">
            See the 5-Step Process
          </Button>
        </div>

        <dl className="mt-6 grid w-full max-w-2xl grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
          {facts.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon size={20} className="text-gold" aria-hidden="true" />
              <dt className="sr-only">{label}</dt>
              <dd className="font-heading text-lg font-semibold text-white">{value}</dd>
              <dd className="text-xs text-white/70">{label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
