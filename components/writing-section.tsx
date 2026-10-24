import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { essays } from "@/lib/essays"

// 文章 = 文字类：月光（独立整页）+ 随笔 / 一辩稿（详情在 /blog/[slug]）
const articles = [
  {
    id: "suibi",
    title: "月光",
    category: "随笔",
    date: "2023.09",
    description: "月光下的少年穿着球衣，我在霓虹里骑行。",
    href: "/portfolio/suibi",
    bgColor: "#E0E7FF",
  },
  ...essays.map((essay) => ({
    id: essay.slug,
    title: essay.title,
    category: essay.slug === "life-experience-debate" ? "一辩稿" : "随笔",
    date: essay.date,
    description: essay.description,
    href: `/blog/${essay.slug}`,
    bgColor: essay.bgColor,
  })),
]

export function WritingSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 text-center">
          <h2 className="mb-1.5 text-xl font-bold md:text-2xl">
            写的<span className="hl-block inline-block bg-[#10B981] px-3 py-0.5 text-white">文章</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xs text-gray-600">不要失去表达</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group flex flex-col overflow-hidden rounded-xl border-4 border-black bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className={`relative h-10 ${article.bgColor}`}>
                <span className="absolute left-3 top-2 inline-block rounded-full bg-black px-2.5 py-0.5 text-[10px] font-semibold text-white">
                  {article.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-3">
                <p className="mb-1 text-[10px] text-gray-500">{article.date}</p>
                <h3 className="mb-1 text-sm font-bold text-[#0B0B0B] group-hover:underline">{article.title}</h3>
                <p className="line-clamp-2 flex-1 text-xs leading-relaxed text-gray-600">{article.description}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#0B0B0B] transition-all group-hover:gap-3">
                  阅读全文 <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
