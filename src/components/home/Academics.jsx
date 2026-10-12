import { Compass, FlaskConical, GraduationCap, Sprout } from 'lucide-react'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const stages = [
  {
    icon: Sprout,
    grades: 'Grades 1 – 5',
    title: 'Primary School',
    text: 'Foundations built through story-telling, hands-on discovery and strong reading and numeracy habits.',
  },
  {
    icon: Compass,
    grades: 'Grades 6 – 8',
    title: 'Middle School',
    text: 'Wider subjects, projects and clubs that stretch curiosity and build confident, independent learners.',
  },
  {
    icon: FlaskConical,
    grades: 'Grades 9 – 10',
    title: 'Secondary School',
    text: 'Focused board preparation with labs, mentoring and skill electives that prepare students for choice.',
  },
  {
    icon: GraduationCap,
    grades: 'Grades 11 – 12',
    title: 'Senior Secondary',
    text: 'Science, Commerce and Humanities streams with career counselling and university guidance.',
  },
]

export default function Academics() {
  return (
    <Section id="academics" tone="white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Academic Excellence"
          title="A clear path from first steps to big dreams"
          description="Four carefully designed stages, one connected journey. Each stage builds on the last so students move forward with confidence."
          className="mx-auto"
        />

        <div className="mt-14">
          {stages.map(({ icon: Icon, grades, title, text }, index) => (
            <div
              key={title}
              className="grid gap-6 border-t border-royal/10 py-8 transition-colors duration-200 hover:bg-surface/60 sm:grid-cols-[8rem_1fr] sm:gap-10 sm:px-4"
            >
              <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal text-gold">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">{grades}</span>
              </div>

              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-royal sm:text-2xl">{title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{text}</p>
                </div>
                <span aria-hidden="true" className="font-heading text-5xl font-semibold text-royal/10 sm:text-6xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
