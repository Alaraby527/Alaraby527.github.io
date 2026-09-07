import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/portfolio-projects"

// 首页代表项目：挑评测/迭代/人机兜底最完整的 4 个，整齐等大
const featuredSlugs = [
  "msds-hazard-identification-workflow",
  "tv-buying-copilot",
  "lucky-growth-agent",
  "invoice-risk-review-agent",
]

// 悬停动效各不相同，但尺寸完全一致
const hoverFx = ["hover:-translate-y-1.5", "hover:rotate-[-1deg]", "hover:translate-y-1", "hover:rotate-[1deg]"]
const accent = ["#10B981", "#6366F1", "#EAB308", "#FF6B7A"]

export function FeaturedProjects() {
  const items = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p))

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3 md:gap-4">
          <span className="inline-block shrink-0 rounded-full border-2 border-black bg-[#0B0B0B] px-4 py-1 text-sm font-bold text-white">
            代表项目
          </span>
          <h2 className="text-2xl font-bold text-[#0B0B0B] md:text-3xl">先看这几个</h2>
          <span className="mb-1 h-[3px] flex-1 bg-black"></span>
          <Link href="/portfolio" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold md:inline-flex">
            全部作品集 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className={`group flex flex-col rounded-3xl border-4 border-black bg-white p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${hoverFx[i % hoverFx.length]}`}
            >
              <span className="mb-3 h-1.5 w-12 rounded-full" style={{ backgroundColor: accent[i % accent.length] }} />
              <h3 className="mb-2 text-base font-bold leading-snug text-[#0B0B0B]">{p.title}</h3>
              <p className="mb-4 line-clamp-2 flex-1 text-xs leading-relaxed text-gray-500">{p.subtitle}</p>
              <div className="mt-auto flex items-end justify-between">
                <span className="inline-flex items-baseline gap-1.5 rounded-lg border-2 border-black bg-[#FAF5F0] px-2.5 py-1">
                  <span className="text-sm font-bold text-[#0B0B0B]">{p.keyMetric.value}</span>
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2">
                  详情 <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
