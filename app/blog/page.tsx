import { Navigation } from "@/components/navigation"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "博客 - Paperfolio",
  description: "阅读我分享的设计文章、教程与行业资讯",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <div className="pt-8">
        <ArticlesSection />
      </div>
      <Footer />
    </main>
  )
}
