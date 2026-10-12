import AboutSchool from '../components/home/AboutSchool'
import Academics from '../components/home/Academics'
import Achievements from '../components/home/Achievements'
import AdmissionsCTA from '../components/home/AdmissionsCTA'
import Facilities from '../components/home/Facilities'
import Hero from '../components/home/Hero'
import NewsNotices from '../components/home/NewsNotices'
import PrincipalMessage from '../components/home/PrincipalMessage'
import Testimonials from '../components/home/Testimonials'
import UpcomingEvents from '../components/home/UpcomingEvents'
import WhyChooseUs from '../components/home/WhyChooseUs'
import usePageMeta from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'Home',
    description:
      'EAK International School is a creative, premium learning community in Springfield. Explore our academics, facilities, campus life and admissions.',
  })

  return (
    <>
      <Hero />
      <WhyChooseUs />
      <AboutSchool />
      <Academics />
      <Facilities />
      <Achievements />
      <PrincipalMessage />
      <NewsNotices />
      <UpcomingEvents />
      <Testimonials />
      <AdmissionsCTA />
    </>
  )
}
