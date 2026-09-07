import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { AboutMeContent } from "@/components/about-me-content"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactCta } from "@/components/home-overview"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "关于我",
  description: "了解杨惠雯（Alaraby）的经历、AI 产品方向的实践与个人侧写",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <AboutSection />
      <AboutMeContent />
      <TestimonialsSection />
      <ServicesSection />
      <ContactCta />
      <Footer />
    </main>
  )
}
