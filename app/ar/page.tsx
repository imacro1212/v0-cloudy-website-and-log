import { NavigationAr } from "@/components/navigation-ar"
import { HeroSectionAr } from "@/components/hero-section-ar"
import { ServicesSectionAr } from "@/components/services-section-ar"
import { PricingSectionAr } from "@/components/pricing-section-ar"
import { AboutSectionAr } from "@/components/about-section-ar"
import { ContactSectionAr } from "@/components/contact-section-ar"
import { FooterAr } from "@/components/footer-ar"
import { BackgroundPattern } from "@/components/background-pattern"

export default function ArabicHomePage() {
  return (
    <div className="min-h-screen">
      <BackgroundPattern />
      <NavigationAr />
      <main>
        <HeroSectionAr />
        <ServicesSectionAr />
        <PricingSectionAr />
        <AboutSectionAr />
        <ContactSectionAr />
      </main>
      <FooterAr />
    </div>
  )
}
