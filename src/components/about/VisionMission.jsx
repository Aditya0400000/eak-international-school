import { CheckCircle2, Compass, ShieldCheck } from 'lucide-react'
import Card from '../common/Card'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const pillars = [
  {
    icon: Compass,
    eyebrow: 'Our Vision',
    title: 'Learning that outlasts the classroom',
    text: 'To be a school where curiosity becomes a habit, where every child feels seen, and where learning prepares students not just for exams but for life.',
    points: [
      'Confident, kind and curious graduates',
      'A culture of asking good questions',
      'Growth measured in character as well as marks',
    ],
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Our Mission',
    title: 'Every child known, challenged and cared for',
    text: 'To teach with warmth and rigour, to protect each child\u2019s wellbeing, and to offer every learner the chances and support they need to thrive.',
    points: [
      'Small classes and personal mentoring',
      'A balance of academics, arts, sport and service',
      'A safe, inclusive and joyful campus',
    ],
  },
]

export default function VisionMission() {
  return (
    <Section id="vision" tone="light">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Vision & Mission"
          title="What we work towards, every single day"
          description="Two simple commitments guide our decisions, our classrooms and our community."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {pillars.map(({ icon: Icon, eyebrow, title, text, points }) => (
            <Card key={eyebrow} interactive className="group flex flex-col gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal text-gold transition-colors duration-200 group-hover:bg-gold group-hover:text-royal-dark">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">{eyebrow}</span>
              <h3 className="font-heading text-xl font-semibold text-royal">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
              <ul className="mt-2 flex flex-col gap-2 border-t border-royal/10 pt-4">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink-soft">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
