import AboutHero from '../components/about/AboutHero'
import AchievementsStats from '../components/about/AchievementsStats'
import AdmissionsBanner from '../components/about/AdmissionsBanner'
import CampusOverview from '../components/about/CampusOverview'
import CoreValues from '../components/about/CoreValues'
import SchoolStory from '../components/about/SchoolStory'
import VisionMission from '../components/about/VisionMission'
import PrincipalMessage from '../components/home/PrincipalMessage'
import usePageMeta from '../hooks/usePageMeta'

export default function About() {
  usePageMeta({
    title: 'About Us',
    description:
      'Discover the story of EAK International School since 2001 — our vision, mission, core values, achievements and green campus.',
  })

  return (
    <>
      <AboutHero />
      <SchoolStory />
      <VisionMission />
      <CoreValues />
      <PrincipalMessage />
      <AchievementsStats />
      <CampusOverview />
      <AdmissionsBanner />
    </>
  )
}
