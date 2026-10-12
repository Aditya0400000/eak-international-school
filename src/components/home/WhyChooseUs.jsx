import { ArrowRight, Cpu, HeartHandshake, ShieldCheck, UserCheck, Users } from 'lucide-react'
import Button from '../common/Button'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const strengths = [
  {
    icon: Users,
    title: 'Experienced, caring faculty',
    text: 'Mentors who know each learner by name and guide them with warmth and high expectations.',
  },
  {
    icon: HeartHandshake,
    title: 'Academics balanced with activities',
    text: 'A calm, well-rounded timetable where studies, music, sport and service all find space.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe, inclusive campus',
    text: 'A secure, CCTV-monitored campus with counsellors and a zero-tolerance anti-bullying policy.',
  },
  {
    icon: UserCheck,
    title: 'Personal attention, small classes',
    text: 'Comfortable class sizes so every child is seen, heard and supported individually.',
  },
  {
    icon: Cpu,
    title: 'Future-ready technology',
    text: 'Smart classrooms, coding labs and digital tools that prepare students for tomorrow.',
  },
]

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" tone="white">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="An education designed around every child"
            description="We keep the big picture and the small details in balance. Families choose EAK for a warm culture, strong teaching and opportunities that help children discover what they love."
          />
          <div className="mt-8">
            <Button to="/about" variant="outline">
              Discover Our Story
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </div>

        <ul className="divide-y divide-royal/10">
          {strengths.map(({ icon: Icon, title, text }) => (
            <li key={title} className="group flex gap-5 py-6 first:pt-0 last:pb-0">
              <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-royal/5 text-royal transition-colors duration-200 group-hover:bg-gold group-hover:text-royal-dark">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-royal">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
