import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
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
      <ExperienceSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
