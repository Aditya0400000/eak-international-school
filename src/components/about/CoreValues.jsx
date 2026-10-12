import { Award, HeartHandshake, ShieldCheck, Sprout, UserCheck, Users } from 'lucide-react'
import Card from '../common/Card'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const values = [
  {
    icon: Sprout,
    title: 'Curiosity',
    text: 'We ask questions, explore ideas and stay open to learning something new every day.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    text: 'We do the right thing, even when it is difficult or when no one is watching.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassion',
    text: 'We treat everyone with kindness, patience and genuine care.',
  },
  {
    icon: Award,
    title: 'Excellence',
    text: 'We give our best effort and celebrate steady improvement over perfection.',
  },
  {
    icon: Users,
    title: 'Respect',
    text: 'We value different backgrounds, ideas and talents across our community.',
  },
  {
    icon: UserCheck,
    title: 'Responsibility',
    text: 'We own our words and actions, and look after our school and our planet.',
  },
]

export default function CoreValues() {
  return (
    <Section id="values" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Core Values"
          title="Six values that shape our school culture"
          description="These values are not posters on a wall. They show up in our classrooms, corridors and daily conversations."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <Card key={title} interactive className="group flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-royal/5 text-royal transition-colors duration-200 group-hover:bg-royal group-hover:text-gold">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="h-1 w-8 rounded-full bg-gold/50 transition-all duration-300 group-hover:w-12"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-royal">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
