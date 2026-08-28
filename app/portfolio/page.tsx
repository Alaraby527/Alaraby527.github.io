import { Navigation } from "@/components/navigation"
import { PortfolioSection } from "@/components/portfolio-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "作品集 - Paperfolio",
  description: "浏览我的设计作品与项目案例",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <div className="pt-8">
        <PortfolioSection />
      </div>
      <Footer />
    </main>
  )
}
