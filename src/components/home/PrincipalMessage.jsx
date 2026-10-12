import { Quote } from 'lucide-react'
import Container from '../common/Container'
import Section from '../common/Section'
import SmartImage from '../common/SmartImage'
import principalImage from '../../assets/images/principal.svg'

export default function PrincipalMessage() {
  return (
    <Section id="principal" tone="light">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div aria-hidden="true" className="absolute -right-4 -top-4 h-full w-full rounded-card border-2 border-gold/50" />
          <div className="relative overflow-hidden rounded-card border border-royal/10 shadow-soft">
            <SmartImage
              src={principalImage}
              alt="Illustrated portrait of Dr. Meera Alva, Principal of EAK International School"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            Principal&apos;s Message
          </span>

          <blockquote className="mt-5">
            <Quote size={40} className="text-gold" aria-hidden="true" />
            <p className="mt-4 font-heading text-xl leading-relaxed text-royal sm:text-2xl">
              At EAK, we believe every child carries a spark. Our task is simple and serious: to protect that spark,
              feed it with good teaching and kind guidance, and let it grow into quiet confidence.
            </p>

            <footer className="mt-8 border-t border-royal/10 pt-5">
              <p className="font-heading text-lg font-semibold text-royal">Dr. Meera Alva</p>
              <p className="text-sm text-ink-soft">Principal, EAK International School</p>
            </footer>
          </blockquote>
        </div>
      </Container>
    </Section>
  )
}
