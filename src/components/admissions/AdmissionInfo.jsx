import { Bus, Clock, Mail, MapPin, Phone, Users } from 'lucide-react'
import Card from '../common/Card'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const items = [
  {
    icon: Users,
    title: 'Class size & ratio',
    text: 'Comfortable class sizes with a supportive 1:16 teacher-to-student ratio.',
  },
  {
    icon: Clock,
    title: 'School hours',
    text: 'Monday to Friday, 8:00 AM to 3:30 PM. The office stays open till 4:30 PM.',
  },
  {
    icon: Bus,
    title: 'Transport',
    text: 'GPS-tracked buses across major routes, with trained drivers and attendants.',
  },
  {
    icon: Phone,
    title: 'Admissions helpline',
    text: '+91 98765 43210 (Monday to Friday, 9:00 AM – 4:00 PM).',
  },
  {
    icon: Mail,
    title: 'Email us',
    text: 'admissions@eakinternational.edu — we reply within one working day.',
  },
  {
    icon: MapPin,
    title: 'Campus address',
    text: '123 Knowledge Avenue, Springfield. Campus tours run on all weekdays.',
  },
]

export default function AdmissionInfo() {
  return (
    <Section id="info" tone="light">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Admission Information"
          title="Everything you need at a glance"
          description="School details and contact points to help you plan. All details shown are fictional."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <Card key={title} interactive className="group flex flex-col gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-royal/5 text-royal transition-colors duration-200 group-hover:bg-royal group-hover:text-gold">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-royal">{title}</h3>
              <p className="break-words text-sm leading-relaxed text-ink-soft">{text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
