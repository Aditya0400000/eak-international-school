import AdmissionForm from '../components/admissions/AdmissionForm'
import AdmissionInfo from '../components/admissions/AdmissionInfo'
import AdmissionProcess from '../components/admissions/AdmissionProcess'
import AdmissionsHero from '../components/admissions/AdmissionsHero'
import EligibilityDocs from '../components/admissions/EligibilityDocs'
import FAQs from '../components/admissions/FAQs'
import ImportantDates from '../components/admissions/ImportantDates'
import usePageMeta from '../hooks/usePageMeta'

export default function Admissions() {
  usePageMeta({
    title: 'Admissions 2027',
    description:
      'Admissions for the 2027 session are open for Grades 1 to 12. See the five-step process, eligibility, required documents, important dates and apply online.',
  })

  return (
    <>
      <AdmissionsHero />
      <AdmissionProcess />
      <EligibilityDocs />
      <ImportantDates />
      <AdmissionInfo />
      <FAQs />
      <AdmissionForm />
    </>
  )
}
