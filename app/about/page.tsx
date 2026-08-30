import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { AboutMeContent } from "@/components/about-me-content"
import { ServicesSection } from "@/components/services-section"
import { ContactCta } from "@/components/home-overview"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "关于 - Paperfolio",
  description: "了解我的经历、技能与过往项目经验",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <AboutSection />
      <AboutMeContent />
      <ServicesSection />
      <ContactCta />
      <Footer />
    </main>
  )
}
