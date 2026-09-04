import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { AboutMeContent } from "@/components/about-me-content"
import { ServicesSection } from "@/components/services-section"
import { ContactCta } from "@/components/home-overview"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "关于我",
  description: "了解杨惠雯的 AI 产品经理经历、技能与项目方法",
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
