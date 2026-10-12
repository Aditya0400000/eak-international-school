import { Bus, Cpu, FlaskConical, Library, MonitorPlay, Trophy } from 'lucide-react'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const facilities = [
  {
    icon: MonitorPlay,
    title: 'Smart Classrooms',
    text: 'Interactive boards and digital lessons that make concepts vivid and easy to grasp.',
  },
  {
    icon: FlaskConical,
    title: 'Science Laboratories',
    text: 'Well-equipped Physics, Chemistry and Biology labs for safe, hands-on experiments.',
  },
  {
    icon: Library,
    title: 'Library & Resource Centre',
    text: 'A calm reading space with 12,000+ books, journals and digital references.',
  },
  {
    icon: Trophy,
    title: 'Sports & Athletics',
    text: 'Playgrounds, indoor courts and coaching for football, cricket, basketball and athletics.',
  },
  {
    icon: Bus,
    title: 'Safe Transportation',
    text: 'GPS-tracked buses with trained drivers and attendants across every major route.',
  },
  {
    icon: Cpu,
    title: 'Technology & Innovation',
    text: 'Coding, robotics and a maker space where students turn ideas into working models.',
  },
]

export default function Facilities() {
  return (
    <Section id="facilities" tone="white">
      <Container>
        <SectionHeading
          eyebrow="School Facilities"
          title="Spaces that support how children actually learn"
          description="From laboratories to lawns, every corner of our campus is designed to be safe, inspiring and ready for discovery."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-royal/10 bg-royal/10 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 bg-white p-8 transition-colors duration-200 hover:bg-surface"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-royal/5 text-royal transition-colors duration-200 group-hover:bg-royal group-hover:text-gold">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-royal">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
