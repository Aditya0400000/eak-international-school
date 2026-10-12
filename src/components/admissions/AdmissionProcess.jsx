import { BookOpen, CheckCircle2, GraduationCap, Mail, Users } from 'lucide-react'
import Card from '../common/Card'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const steps = [
  {
    icon: Mail,
    number: '01',
    title: 'Enquiry',
    text: 'Reach out through the enquiry form below or call our admissions office to register your interest.',
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'Application',
    text: 'Complete the application form and submit the required documents for your child\u2019s grade.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Interaction / Assessment',
    text: 'A friendly interaction with the child and parents, along with a grade-appropriate assessment.',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Selection',
    text: 'We review every application carefully and share the admission decision with your family.',
  },
  {
    icon: GraduationCap,
    number: '05',
    title: 'Enrollment',
    text: 'Confirm your seat by completing the formalities, and welcome to the EAK family.',
  },
]

export default function AdmissionProcess() {
  return (
    <Section id="process" tone="white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How to Apply"
          title="A five-step admission process"
          description="Simple, transparent and supported at every stage, from your first question to your first day."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, number, title, text }) => (
            <Card key={title} interactive className="group flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal text-gold transition-colors duration-200 group-hover:bg-gold group-hover:text-royal-dark">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="font-heading text-3xl font-semibold text-royal/15 transition-colors duration-200 group-hover:text-gold/60">
                  {number}
                </span>
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
