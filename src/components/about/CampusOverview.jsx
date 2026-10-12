import { CheckCircle2, MapPin } from 'lucide-react'
import Button from '../common/Button'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import SmartImage from '../common/SmartImage'
import campusImage from '../../assets/images/campus.svg'
import classroomImage from '../../assets/images/classroom.svg'
import courtyardImage from '../../assets/images/courtyard.svg'

const gallery = [
  {
    src: campusImage,
    caption: 'Main academic block',
    alt: 'Illustration of the EAK International School main academic block surrounded by lawns',
    wide: true,
  },
  {
    src: courtyardImage,
    caption: 'Central courtyard',
    alt: 'Illustration of the central courtyard connecting the academic wings',
    wide: false,
  },
  {
    src: classroomImage,
    caption: 'Smart classrooms',
    alt: 'Illustration of a smart classroom with an interactive board',
    wide: false,
  },
]

const highlights = [
  'Smart classrooms with interactive boards',
  'Physics, Chemistry and Biology laboratories',
  'A library with 12,000+ books and digital references',
  'Playgrounds, indoor courts and a running track',
]

export default function CampusOverview() {
  return (
    <Section id="campus" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Campus Overview"
          title="A calm, green campus built for discovery"
          description="Our fictional campus mixes open lawns with specialist learning spaces, so students have room to think, play and grow."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <figure
              key={item.caption}
              className={`group relative overflow-hidden rounded-card border border-royal/10 shadow-soft ${
                item.wide ? 'sm:col-span-2' : ''
              }`}
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                width={1200}
                height={800}
                className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-royal-dark/70 px-5 py-3 text-sm font-medium text-white">
                <MapPin size={16} className="text-gold" aria-hidden="true" />
                {item.caption}
              </figcaption>
            </figure>
          ))}

          <div className="flex flex-col gap-4 rounded-card border border-royal/10 bg-surface p-6 sm:col-span-2 lg:col-span-2">
            <h3 className="font-heading text-lg font-semibold text-royal">On-campus at a glance</h3>
            <ul className="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button to="/admissions" variant="outline" className="mt-auto w-fit">
              Plan a Visit
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
