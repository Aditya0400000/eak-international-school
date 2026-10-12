import { CalendarDays } from 'lucide-react'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const dates = [
  {
    date: '1 Nov 2026',
    title: 'Applications open',
    text: 'Online enquiry and application forms go live for the 2027 session.',
  },
  {
    date: '31 Jan 2027',
    title: 'Application deadline',
    text: 'Last day to submit the completed application and supporting documents.',
  },
  {
    date: '10–20 Feb 2027',
    title: 'Interaction & assessment',
    text: 'Scheduled sessions for shortlisted families, as per the chosen grade.',
  },
  {
    date: '1 Mar 2027',
    title: 'Selection results',
    text: 'Admission decisions are shared with families by email and phone.',
  },
  {
    date: '15 Mar 2027',
    title: 'Fee payment & enrollment',
    text: 'Confirm the seat by completing the enrollment formalities.',
  },
  {
    date: '5 Apr 2027',
    title: 'Session begins',
    text: 'Welcome to the new academic session at EAK International School.',
  },
]

export default function ImportantDates() {
  return (
    <Section id="dates" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Important Dates"
          title="A sample admissions calendar"
          description="The timeline below is entirely fictional and shown only to demonstrate how an admission season is planned."
        />

        <span className="mt-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-center text-xs font-medium text-gold-deep">
          <CalendarDays size={14} className="shrink-0" aria-hidden="true" />
          <span className="min-w-0">Sample dates · for demonstration only</span>
        </span>

        <ol className="mt-10">
          {dates.map((item, index) => (
            <li key={item.title} className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-6">
              <div className="flex flex-col items-center">
                <span
                  className="mt-5 h-3 w-3 shrink-0 rounded-full bg-gold ring-4 ring-gold/20"
                  aria-hidden="true"
                />
                {index < dates.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-royal/10" aria-hidden="true" />
                )}
              </div>
              <div className="pb-6">
                <div className="rounded-card border border-royal/10 bg-surface p-5 shadow-soft transition-colors duration-200 hover:border-gold/50 sm:p-6">
                  <span className="font-heading text-sm font-semibold text-gold-deep">{item.date}</span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-royal">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
