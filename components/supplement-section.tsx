import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { legacyProjects } from "@/lib/legacy-projects"
import { methodologies } from "@/lib/methodologies"

// 补充项目卡片的展示层配色(职得辩跳独立整页案例)
const legacyLinks: Record<string, string> = {
  "ai-invoice": "/portfolio/ai-invoice",
  "major-1": "/portfolio/major-1",
  "major-2": "/portfolio/major-2",
  "article-2": "/blog",
}

// 方法论卡片配色循环(波普亮色系)
const palette = ["#FF6B7A", "#2F81F7", "#FFD700", "#4ECDC4", "#AA96DA", "#F38181", "#FFC224", "#95E1D3"]

export function SupplementSection() {
  return (
    <section className="container mx-auto px-4 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            补充<span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block hl-block">项目</span>
          </h2>
          <p className="text-gray-600">一些更早期的完整项目与学术实践,它们记录了我一路走来的痕迹。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {legacyProjects.filter((project) => project.id !== "article-2").map((project) => (
            <Link
              key={project.id}
              href={legacyLinks[project.id] ?? `/portfolio/${project.id}`}
              className="group bg-white border-4 border-black rounded-3xl p-6 md:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  {project.tag}
                </span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-[#0B0B0B]">{project.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">{project.description}</p>
              <span className="flex items-center gap-2 font-semibold text-[#0B0B0B] group-hover:gap-3 transition-all text-sm">
                查看详情
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
          <Link
            href="/portfolio/ai-job"
            className="group bg-white border-4 border-black rounded-3xl p-6 md:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all md:col-span-2"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full">AI产品</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-[#0B0B0B]">职得辩 - 求职辩论网页产品全案</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              你的私事,值得联合国讨论。完整的人岗匹配、简历诊断与成长路径产品设计全案。
            </p>
            <span className="flex items-center gap-2 font-semibold text-[#0B0B0B] group-hover:gap-3 transition-all text-sm">
              查看完整全案
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            方法论<span className="bg-[#2F81F7] text-white px-3 py-1 inline-block hl-block">沉淀</span>
          </h2>
          <p className="text-gray-600">把踩过的坑整理成可复用的判断框架,让下一次决策更快、更稳。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodologies.map((methodology, index) => (
            <Link
              key={methodology.slug}
              href={`/methodologies/${methodology.slug}`}
              className="group bg-white border-4 border-black rounded-3xl p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="inline-block text-black text-xs font-bold px-3 py-1 rounded-full border-2 border-black"
                  style={{ backgroundColor: palette[index % palette.length] }}
                >
                  {methodology.index}
                </span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-[#0B0B0B]">{methodology.title}</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">{methodology.englishTitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">{methodology.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-semibold text-[#0B0B0B] group-hover:gap-3 transition-all text-sm">
                查看完整框架
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
