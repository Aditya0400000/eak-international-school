import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '../common/Button'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import SmartImage from '../common/SmartImage'
import courtyardImage from '../../assets/images/courtyard.svg'

const facts = [
  'Founded in 2001 with a mission of joyful, rigorous learning',
  'Co-educational, from Grade 1 to Grade 12',
  '1:18 teacher-to-student ratio across all grades',
  'Dedicated counsellors and learning-support specialists',
]

export default function AboutSchool() {
  return (
    <Section id="about-school" tone="light">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full rounded-card border-2 border-gold/50"
          />
          <div className="relative overflow-hidden rounded-card border border-royal/10 shadow-soft">
            <SmartImage
              src={courtyardImage}
              alt="Students walking through the EAK International School courtyard between academic wings"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-card bg-royal px-5 py-4 text-white shadow-soft">
            <p className="font-heading text-2xl font-semibold text-gold">98%</p>
            <p className="mt-0.5 text-xs text-white/70">Parent satisfaction</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About Our School"
            title="A place where learning feels like belonging"
            description="For over two decades, EAK International School has been a second home for curious minds. Our classrooms are lively, our corridors are friendly, and our community celebrates effort as much as achievement."
          />

          <ul className="mt-6 flex flex-col gap-3">
            {facts.map((fact) => (
              <li key={fact} className="flex items-start gap-3 text-sm text-ink-soft">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>

          <Button to="/about" variant="primary" className="mt-8">
            Read More
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </Section>
  )
}
