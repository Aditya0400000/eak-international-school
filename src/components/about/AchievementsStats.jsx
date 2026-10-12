import { Award, Medal, Sparkles, Trophy } from 'lucide-react'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const stats = [
  { value: '99.2%', label: 'Average board score, 2026' },
  { value: '96%', label: 'First-choice university offers' },
  { value: '42', label: 'Clubs & societies' },
  { value: '1:16', label: 'Teacher–student ratio' },
]

const honors = [
  {
    icon: Trophy,
    title: 'Inter-School Debate Cup',
    text: 'Our senior team lifted the regional debate trophy at the 2026 finals.',
  },
  {
    icon: Medal,
    title: 'National Robotics Challenge',
    text: 'A student-built rover placed in the national top ten at the robotics challenge.',
  },
  {
    icon: Award,
    title: 'Green Campus Award',
    text: 'Recognised for our student-run garden and campus recycling programme.',
  },
]

export default function AchievementsStats() {
  return (
    <Section id="achievements" tone="royal">
      <Container>
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Achievements & Numbers"
          title="A few milestones worth celebrating"
          description="Every figure and award below is fictional and included only to demonstrate this page."
          className="mx-auto"
        />

        <span className="mx-auto mt-6 flex max-w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-center text-xs font-medium text-gold">
          <Sparkles size={14} className="shrink-0" aria-hidden="true" />
          <span className="min-w-0">Illustrative statistics</span>
        </span>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-royal p-8 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-3xl font-semibold text-gold sm:text-4xl">{stat.value}</dd>
              <dd className="mt-2 text-sm text-white/70">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {honors.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-card border border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:border-gold/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-gold">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/75">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
