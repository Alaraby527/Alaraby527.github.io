import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "博客 - Paperfolio",
  description: "阅读我的随笔、技术文章与视频专栏",
}

// 文章写作:原作品集「文章」组的随笔与技术文章(月光为独立整页,数据标注走旧详情数据)
const articles = [
  {
    id: "suibi",
    title: "月光",
    category: "随笔",
    date: "2023年9月",
    description: "月光下的少年穿着球衣，我在霓虹里骑行",
    bgColor: "#E0E7FF",
    illustration: "/images/suibi.png",
    href: "/portfolio/suibi",
  },
  {
    id: "article-2",
    title: "数据标注与AI训练的底层逻辑",
    category: "技术洞察",
    date: "2026.03",
    description: "深入理解AI产品的底层逻辑，从数据标注到模型训练再到效果输出的完整链路，建立对AI技术边界、成本、数据价值的认知。",
    bgColor: "#8B5CF6",
    illustration: "/images/venture-workspace.svg",
    href: "/portfolio/article-2",
  },
]

function WritingSection() {
  return (
    <section className="container mx-auto px-4 pt-16 md:pt-24 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            写点的<span className="bg-[#10B981] text-white px-3 py-1 inline-block">东西</span>
          </h2>
          <p className="text-gray-600">随笔和技术文章,记录思考的碎片。</p>
        </div>

        <div className="space-y-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group grid md:grid-cols-2 bg-white border-4 border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>
                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {article.title}
                </h3>
                <p className="text-base text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {article.description}
                </p>
                <span className="flex items-center gap-2 font-semibold text-[#0B0B0B] group-hover:gap-3 transition-all text-sm md:text-base">
                  阅读全文
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className={`${article.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[400px]`}>
                <Image
                  src={article.illustration}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
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
      <div className="pt-8">
        <ArticlesSection />
      </div>
      <Footer />
    </main>
  )
}
