import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { ContactCta } from "@/components/home-overview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <FeaturedProjects />
      <ContactCta />
      <Footer />
    </main>
  )
}
