import { Navigation } from "@/components/navigation"
import { PortfolioSection } from "@/components/portfolio-section"
import { SupplementSection } from "@/components/supplement-section"
import { ContactCta } from "@/components/home-overview"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "作品集",
  description: "浏览 AI 产品经理项目案例与评测迭代",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <div className="pt-8">
        <PortfolioSection />
      </div>
      <SupplementSection />
      <ContactCta />
      <Footer />
    </main>
  )
}
