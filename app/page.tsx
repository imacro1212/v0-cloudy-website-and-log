import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BackgroundPattern } from "@/components/background-pattern"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <BackgroundPattern />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
