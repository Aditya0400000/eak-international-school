import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import Container from '../common/Container'
import SmartImage from '../common/SmartImage'
import campusImage from '../../assets/images/campus.svg'

const chapters = [
  { label: 'Our Story', href: '#story' },
  { label: 'Vision & Mission', href: '#vision' },
  { label: 'Core Values', href: '#values' },
  { label: 'Campus', href: '#campus' },
]

const quickFacts = [
  { value: '2001', label: 'Founded' },
  { value: '8 acres', label: 'Green campus' },
  { value: 'Grades 1–12', label: 'Co-educational' },
]

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-royal text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[14px] border-gold/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-white/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]"
      />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="flex flex-col gap-6">
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
                About
              </li>
            </ol>
          </nav>

          <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <ShieldCheck size={14} className="shrink-0" aria-hidden="true" />
            <span className="min-w-0">About EAK International School</span>
          </span>

          <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Our story, our values, and the people behind it
            <span className="mt-3 block text-xl font-normal text-gold sm:text-2xl">
              Two decades of curiosity, care and quiet confidence.
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/80">
            EAK International School began as a small idea — that learning should feel personal. Today our
            fictional campus is home to a warm community of learners, teachers and families.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button to="/admissions" variant="gold" size="lg">
              Apply Now
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#campus" variant="outlineLight" size="lg">
              Explore Our Campus
            </Button>
          </div>

          <ul className="flex flex-wrap gap-2">
            {chapters.map((chapter) => (
              <li key={chapter.href}>
                <a
                  href={chapter.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-medium text-white/80 transition-colors duration-200 hover:border-gold hover:text-gold"
                >
                  <Sparkles size={12} aria-hidden="true" />
                  {chapter.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-full w-full rounded-card border-2 border-gold/50"
          />
          <div className="relative overflow-hidden rounded-card border-4 border-white/10 shadow-soft">
            <SmartImage
              src={campusImage}
              alt="Illustration of the EAK International School main academic block and lawns"
              width={1600}
              height={1000}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -top-5 right-6 rounded-card bg-white px-5 py-3 text-ink shadow-soft">
            <span className="font-heading text-sm font-semibold text-royal">Est. 2001</span>
            <span className="ml-2 text-xs text-ink-soft">CBSE Affiliated</span>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="flex items-baseline gap-3">
              <span className="font-heading text-2xl font-semibold text-gold">{fact.value}</span>
              <span className="text-sm text-white/70">{fact.label}</span>
            </div>
          ))}
        </Container>
      </div>
    </section>
  )
}
