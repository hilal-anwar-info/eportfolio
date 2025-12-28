import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { DigitalRain } from "@/components/digital-rain"
import { BinaryRainBackground } from "@/components/earth-satellite-bg"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background layers - binary rain with satellite */}
      <BinaryRainBackground />
      <DigitalRain />
      
      {/* Foreground content */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
