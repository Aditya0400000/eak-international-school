import { Quote } from 'lucide-react'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const testimonials = [
  {
    quote:
      'The teachers truly know my daughter. She has grown more confident, curious and kind since joining EAK, and that means everything to us.',
    name: 'Anita Deshpande',
    role: 'Parent, Grade 7',
    initials: 'AD',
  },
  {
    quote:
      'The science labs and robotics club gave me a real head start. I still use the problem-solving habits I picked up here every day.',
    name: 'Rohan Iyer',
    role: 'Alumnus, Batch of 2022',
    initials: 'RI',
  },
  {
    quote:
      'There is space here to try new things. I discovered debating and football, and made friends who cheer for each other.',
    name: 'Sara Khan',
    role: 'Student, Grade 11',
    initials: 'SK',
  },
]

export default function Testimonials() {
  return (
    <Section id="testimonials" tone="white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title="Voices from our community"
          description="A few fictional words from the families, alumni and students who make EAK what it is."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-0">
          {testimonials.map((item, index) => (
            <figure
              key={item.name}
              className={`flex flex-col gap-5 md:px-8 ${
                index > 0 ? 'md:border-l md:border-royal/10' : ''
              }`}
            >
              <Quote size={28} className="text-gold" aria-hidden="true" />
              <blockquote className="text-sm leading-relaxed text-ink-soft">{item.quote}</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-royal/10 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-royal font-heading text-sm font-semibold text-gold">
                  {item.initials}
                </span>
                <span>
                  <span className="block font-heading text-sm font-semibold text-royal">{item.name}</span>
                  <span className="block text-xs text-ink-soft">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}
