import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutTeaser, ContactCta } from "@/components/home-overview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <HeroSection />
      <AboutTeaser />
      <ContactCta />
      <Footer />
    </main>
  )
}
