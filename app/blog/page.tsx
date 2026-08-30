import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ArticlesSection } from "@/components/articles-section"
import { ContactCta } from "@/components/home-overview"
import { Footer } from "@/components/footer"
import { essays } from "@/lib/essays"

export const metadata = {
  title: "博客 - Paperfolio",
  description: "阅读我的随笔、那些没用但好玩的玩具,与视频专栏",
}

// 文章写作:月光(独立整页) + 两篇随笔(详情在 /blog/[slug])
const articles = [
  {
    id: "suibi",
    title: "月光",
    category: "随笔",
    date: "2023年9月",
    description: "月光下的少年穿着球衣，我在霓虹里骑行",
    href: "/portfolio/suibi",
    bgColor: "#E0E7FF",
  },
  ...essays.map((essay) => ({
    id: essay.slug,
    title: essay.title,
    category: "随笔",
    date: essay.date,
    description: essay.description,
    href: `/blog/${essay.slug}`,
    bgColor: essay.bgColor,
  })),
]

// 那些没用但好玩的玩具:方案、创意和一些好玩的尝试
const toys = [
  {
    title: "职得辩 - 求职辩论网页产品",
    description:
      "「你的私事,值得联合国讨论。」一个把求职选择搬上环形议事桌的方案创意:6 位平等代表为你辩论、三轮议事流程帮你锚定心意。不算 AI 产品,但这是我最喜欢的创意。",
    tag: "方案与创意",
    href: "/portfolio/ai-job",
  },
  {
    title: "京东 AI 导购交互原型",
    description:
      "以相机选购为案例,高保真模拟 AI 导购的多轮追问交互逻辑——从「推荐相机」到「入门微单还是大变焦」,点到最后真的会想下单。",
    tag: "交互原型",
    href: "/portfolio/ai-shopping",
  },
]

function WritingSection() {
  return (
    <section className="container mx-auto px-4 pt-16 md:pt-24 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            写点的<span className="bg-[#10B981] text-white px-3 py-1 inline-block hl-block">东西</span>
          </h2>
          <p className="text-gray-600">随笔和碎碎念,记录思考的碎片。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col"
            >
              <div className={`${article.bgColor} h-32 relative`}>
                <span className="absolute top-4 left-4 inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  {article.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-500 text-xs mb-2">{article.date}</p>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-[#0B0B0B] group-hover:underline">{article.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">{article.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-[#0B0B0B] group-hover:gap-3 transition-all text-sm">
                  阅读全文
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ToysSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            那些没用但<span className="bg-[#FFC224] text-black px-3 py-1 inline-block hl-block">好玩的玩具</span>
          </h2>
          <p className="text-gray-600">不为了什么,就是觉得好玩。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {toys.map((toy) => (
            <Link
              key={toy.title}
              href={toy.href}
              className="group bg-[#FAF5F0] border-4 border-black rounded-3xl p-6 md:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  {toy.tag}
                </span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-[#0B0B0B]">{toy.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{toy.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <WritingSection />
      <ToysSection />
      <div className="pt-8">
        <ArticlesSection />
      </div>
      <ContactCta />
      <Footer />
    </main>
  )
}
