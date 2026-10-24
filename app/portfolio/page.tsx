import { Navigation } from "@/components/navigation"
import { PortfolioCoreSection, PortfolioOtherSection } from "@/components/portfolio-section"
import { MethodologySection, SupplementProjectsSection } from "@/components/supplement-section"
import { SkillSection } from "@/components/skill-section"
import { WritingSection } from "@/components/writing-section"
import { ArticlesSection } from "@/components/articles-section"
import { ContactCta } from "@/components/home-overview"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "作品集",
  description: "杨惠雯（Alaraby）的 AI 产品经理作品集：多智能体、RAG、风险审核 Agent、可复用方法论与 Skill，以及文章和视频专栏",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      {/* 1. 项目（核心大卡 + 更多中卡，有主次） */}
      <PortfolioCoreSection />
      <PortfolioOtherSection />
      {/* 2. 方法论：判断框架 */}
      <MethodologySection />
      {/* 3. Skill：方法论固化成的工具 + 真实成品 */}
      <SkillSection />
      {/* 4. 补充项目：轻量 demo 与好玩的创意/原型 */}
      <SupplementProjectsSection />
      {/* 5. 文章：随笔与一辩稿 */}
      <WritingSection />
      {/* 6. 博客：视频专栏 */}
      <ArticlesSection title="博客 · 视频专栏" subtitle="用视频记录音乐、旅行和生活里的一些瞬间。" />
      <ContactCta />
      <Footer />
    </main>
  )
}
