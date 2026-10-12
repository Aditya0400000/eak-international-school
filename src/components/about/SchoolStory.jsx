import { CheckCircle2 } from 'lucide-react'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import SmartImage from '../common/SmartImage'
import courtyardImage from '../../assets/images/courtyard.svg'

const beliefs = [
  'Founded in 2001 with just 84 students and a handful of teachers',
  'Co-educational, from Grade 1 to Grade 12',
  'A calm, green 8-acre campus on Knowledge Avenue',
  'Counsellors and learning-support specialists in every wing',
]

const milestones = [
  {
    year: '2001',
    title: 'The first bell',
    text: 'EAK opens its doors in a rented building with a single primary section.',
  },
  {
    year: '2006',
    title: 'Growing roots',
    text: 'The first Grade 12 cohort graduates and dedicated science labs open.',
  },
  {
    year: '2012',
    title: 'A campus of our own',
    text: 'The school moves to its green 8-acre campus on Knowledge Avenue.',
  },
  {
    year: '2018',
    title: 'Beyond the classroom',
    text: 'Music, robotics and sports academies join the timetable.',
  },
  {
    year: '2023',
    title: 'Going digital',
    text: 'Smart classrooms, a digital library and coding labs go live.',
  },
  {
    year: '2026',
    title: 'Still curious',
    text: 'More than forty clubs, projects and service drives keep learning lively.',
  },
]

export default function SchoolStory() {
  return (
    <Section id="story" tone="white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="From a single classroom to a thriving community"
              description="What started as a small school with a big idea has grown into a lively learning community. The buildings changed and the subjects expanded, but the founding spirit stayed the same: know every child, and teach them well."
            />

            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              EAK International School was founded in 2001 by a group of teachers who believed a good school is
              measured by how well it knows its students. That idea shaped everything — small classes, kind
              mentors and a timetable that makes room for the arts, sport and service alongside strong academics.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {beliefs.map((belief) => (
                <li key={belief} className="flex items-start gap-3 text-sm text-ink-soft">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
                  <span>{belief}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-full w-full rounded-card border-2 border-gold/50"
            />
            <div className="relative overflow-hidden rounded-card border border-royal/10 shadow-soft">
              <SmartImage
                src={courtyardImage}
                alt="Illustration of the EAK International School courtyard between the academic wings"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-card bg-royal px-5 py-4 text-white shadow-soft">
              <p className="font-heading text-2xl font-semibold text-gold">25 yrs</p>
              <p className="mt-0.5 text-xs text-white/70">of fictional history</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-heading text-xl font-semibold text-royal sm:text-2xl">Milestones along the way</h3>
          <p className="mt-2 text-sm text-ink-soft">
            A few made-up moments from our timeline, shared just for this frontend project.
          </p>

          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((milestone) => (
              <li
                key={milestone.year}
                className="group relative rounded-card border border-royal/10 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-gold/60"
              >
                <span className="font-heading text-3xl font-semibold text-gold">{milestone.year}</span>
                <h4 className="mt-3 font-heading text-lg font-semibold text-royal">{milestone.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{milestone.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
