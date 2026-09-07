import { Navigation } from "@/components/navigation"
import { ArticlesSection } from "@/components/articles-section"
import { ContactCta } from "@/components/home-overview"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "博客 · 视频专栏",
  description: "用视频记录音乐、旅行和生活里的一些瞬间",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <ArticlesSection title="博客 · 视频专栏" subtitle="用视频记录音乐、旅行和生活里的一些瞬间。" />
      <ContactCta />
      <Footer />
    </main>
  )
}
