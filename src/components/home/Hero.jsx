import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react'
import Button from '../common/Button'
import Container from '../common/Container'
import SmartImage from '../common/SmartImage'
import campusImage from '../../assets/images/campus.svg'

const stats = [
  { value: '25+', label: 'Years of learning' },
  { value: '1,800', label: 'Happy students' },
  { value: '120+', label: 'Expert faculty' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-royal text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[14px] border-gold/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-white/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]"
      />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <ShieldCheck size={14} className="shrink-0" aria-hidden="true" />
            <span className="min-w-0">Est. 2001 · CBSE Affiliated</span>
          </span>

          <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            EAK International School
            <span className="mt-3 block text-2xl font-normal text-gold sm:text-3xl">
              Where curiosity becomes character.
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/80">
            A creative, premium learning community in the heart of Springfield. We blend strong academics with
            the arts, sports and service, so every child grows confident, kind and ready for the world.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button to="/admissions" variant="gold" size="lg">
              Apply Now
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#about-school" variant="outlineLight" size="lg">
              Explore Our School
            </Button>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-white/15 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-2xl font-semibold text-gold sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs text-white/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-card border-4 border-white/10 shadow-soft">
            <SmartImage
              src={campusImage}
              alt="Illustration of the EAK International School campus with a central academic block and green lawns"
              loading="eager"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 hidden items-center gap-2 rounded-card bg-white px-5 py-4 text-ink shadow-soft sm:flex">
            <BookOpen size={18} className="text-gold-deep" aria-hidden="true" />
            <span className="font-heading text-sm font-semibold text-royal">40+ Clubs &amp; Activities</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
