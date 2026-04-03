
import Header from '@/components/landing/Header'
import HeroSection from '@/components/landing/HeroSection'
import TrustBar from '@/components/landing/TrustBar'
import ProblemSection from '@/components/landing/ProblemSection'
import TransformationSection from '@/components/landing/TransformationSection'
import ForWhomSection from '@/components/landing/ForWhomSection'
import VideoSection from '@/components/landing/VideoSection'
import ProgramDetailsSection from '@/components/landing/ProgramDetailsSection'
import TestimonialsSection from '@/components/landing/TestimonialsSection'
import AboutSection from '@/components/landing/AboutSection'
import FaqSection from '@/components/landing/FaqSection'
import UrgencySection from '@/components/landing/UrgencySection'
import DisclaimerSection from '@/components/landing/DisclaimerSection'
import Footer from '@/components/landing/Footer'
import StickyWhatsApp from '@/components/landing/StickyWhatsApp'
import StickyBottomBar from '@/components/landing/StickyBottomBar'
import PricingSection from '@/components/landing/PricingSection'
import CertificatesSection from '@/components/landing/CertificatesSection'
import YoutubeCardsSection from '@/components/landing/YoutubeCardsSection'

export default function Home() {
  return (
    <main className="w-full">

      <Header />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <TransformationSection />
      <ForWhomSection />
      <ProgramDetailsSection />
      <PricingSection />
      <VideoSection />
      <YoutubeCardsSection />
      <AboutSection />
      <CertificatesSection />
      <TestimonialsSection />
      <FaqSection />
      <UrgencySection />
      <DisclaimerSection />
      <Footer />
      <StickyWhatsApp />
      <StickyBottomBar />
    </main>
  )
}
