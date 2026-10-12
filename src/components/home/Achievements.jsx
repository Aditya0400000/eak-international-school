import { Award, Medal, Trophy } from 'lucide-react'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const stats = [
  { value: '100%', label: 'Board pass rate, 2026' },
  { value: '18', label: 'Olympiad toppers' },
  { value: '2', label: 'National sports medals' },
  { value: '35', label: 'University offers' },
]

const highlights = [
  {
    icon: Trophy,
    title: 'State Athletics Champions',
    text: 'Our senior relay team won gold at the 2026 Inter-School State Athletics Meet.',
  },
  {
    icon: Medal,
    title: 'National Science Olympiad',
    text: 'Three students placed in the national top 50 in the Junior Science Olympiad.',
  },
  {
    icon: Award,
    title: 'Young Innovators Award',
    text: 'The robotics club earned a special mention at the Regional Young Innovators Challenge.',
  },
]

export default function Achievements() {
  return (
    <Section id="achievements" tone="royal">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="Achievements"
            title="Celebrating effort, not just trophies"
            description="We are proud of every milestone our students reach. These are a few recent, fictional highlights from our academic and sporting calendar."
          />

          <ul className="mt-10 flex flex-col gap-6">
            {highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 border-t border-white/15 pt-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card bg-white/10 lg:self-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 bg-royal p-8">
              <span className="font-heading text-4xl font-semibold text-gold sm:text-5xl">{stat.value}</span>
              <span className="text-sm text-white/75">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
