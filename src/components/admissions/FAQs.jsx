import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const faqs = [
  {
    question: 'When do admissions open for the 2027 session?',
    answer:
      'Applications open on 1 November 2026 and close on 31 January 2027. These dates are fictional and only for this demonstration.',
  },
  {
    question: 'Which grades can my child apply for?',
    answer:
      'We accept applications for Grades 1 to 12. Seats are offered based on availability for the grade you choose.',
  },
  {
    question: 'Is there an entrance test?',
    answer:
      'For younger grades we hold a friendly interaction. For Grades 6 and above, students take a short, grade-appropriate assessment.',
  },
  {
    question: 'What documents do I need to submit?',
    answer:
      'You will need a birth certificate, previous school report card, Transfer Certificate (TC), photographs, an address proof and a parent ID. See the Required Documents section above for the full list.',
  },
  {
    question: 'Do you provide school transport?',
    answer:
      'Yes. GPS-tracked buses with trained drivers and attendants cover all major routes around Springfield.',
  },
  {
    question: 'Are scholarships or sibling concessions available?',
    answer:
      'We offer a limited number of merit and need-based concessions, plus a sibling discount. Please ask our admissions team for details.',
  },
  {
    question: 'Can I visit the campus before applying?',
    answer:
      'Absolutely. Campus tours run on all weekdays. Share your preferred date in the enquiry form below and we will schedule a visit.',
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="faqs" tone="white">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQs"
            title="Questions parents often ask"
            description="A few answers to help you feel confident before you apply. Tap a question to read more."
          />
        </div>

        <div className="divide-y divide-royal/10 border-y border-royal/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const buttonId = `faq-button-${index}`
            const panelId = `faq-panel-${index}`

            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-heading text-base font-semibold text-royal sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-royal transition-all duration-300 ${
                        isOpen ? 'rotate-180 bg-gold/20' : 'bg-royal/5'
                      }`}
                    >
                      <ChevronDown size={18} aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-10 text-sm leading-relaxed text-ink-soft">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
