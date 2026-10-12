import { ArrowRight, CalendarDays } from 'lucide-react'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import SmartImage from '../common/SmartImage'
import classroomImage from '../../assets/images/classroom.svg'

const featured = {
  category: 'Campus News',
  date: '02 October 2026',
  title: 'New Innovation & Robotics Lab opens for all grades',
  excerpt:
    'Our freshly built maker space is now open, complete with 3D printers, sensor kits and a coding corner where students can build and test their own ideas after school.',
}

const notices = [
  { date: '28 Sep 2026', title: 'Half-yearly examination schedule released' },
  { date: '20 Sep 2026', title: 'Parent-teacher meeting for Grades 6 to 8' },
  { date: '12 Sep 2026', title: 'Inter-house debate competition results' },
  { date: '05 Sep 2026', title: 'Revised school bus routes and timings' },
]

export default function NewsNotices() {
  return (
    <Section id="news" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Latest News &amp; Notices"
          title="What is happening on campus"
          description="Stories, updates and important notices for students and families."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <article className="group overflow-hidden rounded-card border border-royal/10 shadow-soft">
            <div className="overflow-hidden">
              <SmartImage
                src={classroomImage}
                alt="Students learning in a bright smart classroom with an interactive board"
                width={1200}
                height={800}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-3 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  {featured.category}
                </span>
                <span className="text-xs text-ink-soft">{featured.date}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-royal sm:text-2xl">{featured.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{featured.excerpt}</p>
            </div>
          </article>

          <div className="flex flex-col">
            <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-royal">
              <CalendarDays size={18} className="text-gold-deep" aria-hidden="true" />
              Notices
            </h3>

            <ul className="mt-4 flex flex-col divide-y divide-royal/10">
              {notices.map((notice) => (
                <li key={notice.title}>
                  <div className="flex items-start gap-4 py-4 transition-colors duration-200 hover:text-royal">
                    <span className="mt-1 w-24 shrink-0 text-xs font-semibold uppercase tracking-wider text-gold-deep">
                      {notice.date}
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft">{notice.title}</span>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#events"
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-royal transition-colors duration-200 hover:text-gold-deep"
            >
              See upcoming events
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
