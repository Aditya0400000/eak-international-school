import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from 'lucide-react'
import Button from '../common/Button'
import Card from '../common/Card'
import Container from '../common/Container'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'

const eligibility = [
  'Age as per grade: 6+ years for Grade 1 as on 31 March of the admission year.',
  'A completed previous grade with a recognised school report card.',
  'For Grades 9 to 12, subject readiness and a short grade-appropriate assessment.',
  'Open to all students — we welcome diverse backgrounds, talents and abilities.',
]

const documents = [
  'Four recent passport-size photographs of the student.',
  'A copy of the student\u2019s birth certificate.',
  'Report card or progress report from the previous school.',
  'Transfer Certificate (TC) from the previous school.',
  'Address proof and a government-issued ID of a parent or guardian.',
  'Updated medical and immunisation record, where applicable.',
]

export default function EligibilityDocs() {
  return (
    <Section id="eligibility" tone="light">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Eligibility & Documents"
          title="What you need before you apply"
          description="A quick checklist to help you prepare. All requirements shown here are fictional sample information."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-royal/5 text-royal">
                <ShieldCheck size={22} aria-hidden="true" />
              </span>
              <h3 className="font-heading text-xl font-semibold text-royal">Eligibility Criteria</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-royal/5 text-royal">
                <FileText size={22} aria-hidden="true" />
              </span>
              <h3 className="font-heading text-xl font-semibold text-royal">Required Documents</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {documents.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#apply" variant="primary" size="lg">
            Apply Now
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </Section>
  )
}
