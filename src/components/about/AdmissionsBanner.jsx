import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../common/Button'
import Container from '../common/Container'

const steps = ['Enquire online', 'Book a campus visit', 'Submit your form']

export default function AdmissionsBanner() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-royal text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border-[14px] border-gold/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-white/5"
      />

      <Container className="relative flex flex-col items-center gap-8 py-16 text-center sm:py-20">
        <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          <Sparkles size={14} className="shrink-0" aria-hidden="true" />
          <span className="min-w-0">Admissions 2027 · Now Open</span>
        </span>

        <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Take the next step into the EAK family
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-white/80">
          We would love to show you around. Start your application online or book a campus visit, and our
          admissions team will guide you from enquiry all the way to enrolment.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/admissions" variant="gold" size="lg">
            Apply Now
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href="#campus" variant="outlineLight" size="lg">
            Book a Campus Visit
          </Button>
        </div>

        <ol className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/75">
          {steps.map((step, index) => (
            <li key={step} className="inline-flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/20 font-heading text-xs font-semibold text-gold">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
