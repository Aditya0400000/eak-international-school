import { Clock, MapPin } from 'lucide-react'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const events = [
  {
    day: '18',
    month: 'Nov',
    year: '2026',
    title: 'Annual Science & Innovation Fair',
    description: 'Students present working models, experiments and inventions across the campus science block.',
    time: '9:00 AM – 2:00 PM',
    place: 'Main Campus, Science Block',
  },
  {
    day: '05',
    month: 'Dec',
    year: '2026',
    title: 'Inter-House Sports Meet',
    description: 'A full day of athletics, football and relay finals with parents cheering from the stands.',
    time: '8:00 AM – 4:00 PM',
    place: 'EAK Sports Ground',
  },
  {
    day: '22',
    month: 'Jan',
    year: '2027',
    title: 'Parent–Teacher Conclave',
    description: 'One-to-one conversations with subject teachers, plus a workshop on study habits at home.',
    time: '10:00 AM – 1:00 PM',
    place: 'Senior Wing Auditorium',
  },
  {
    day: '14',
    month: 'Feb',
    year: '2027',
    title: 'Winter Arts Festival',
    description: 'Music, dance, drama and an art exhibition curated entirely by our students.',
    time: '5:00 PM – 8:00 PM',
    place: 'Open-Air Amphitheatre',
  },
]

export default function UpcomingEvents() {
  return (
    <Section id="events" tone="light">
      <Container>
        <SectionHeading
          eyebrow="Upcoming Events"
          title="Dates to look forward to"
          description="Mark your calendar for these fictional events from our school year."
        />

        <ul className="mt-12 flex flex-col">
          {events.map((event) => (
            <li
              key={event.title}
              className="group grid gap-6 border-t border-royal/10 py-7 transition-colors duration-200 hover:bg-white/70 sm:grid-cols-[6.5rem_1fr] sm:gap-10 sm:px-4"
            >
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-card bg-royal text-white transition-colors duration-200 group-hover:bg-royal-dark">
                <span className="font-heading text-2xl font-semibold leading-none text-gold">{event.day}</span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wider">{event.month}</span>
                <span className="text-[10px] text-white/75">{event.year}</span>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-royal sm:text-xl">{event.title}</h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-soft">{event.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-soft">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-gold-deep" aria-hidden="true" />
                    {event.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-gold-deep" aria-hidden="true" />
                    {event.place}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
