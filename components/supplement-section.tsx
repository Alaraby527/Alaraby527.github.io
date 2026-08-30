import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { legacyProjects } from "@/lib/legacy-projects"
import { methodologies } from "@/lib/methodologies"

// 方法论三分类
const methodologyGroups = [
  {
    title: "发现与定义",
    description: "把模糊的问题变成清晰的判断",
    slugs: ["ai-requirements-analysis", "competitive-research", "user-interview", "survey-questionnaire"],
  },
  {
    title: "设计与验证",
    description: "用体验和数据检验方案是否真的成立",
    slugs: ["product-experience-report", "data-analysis", "usability-testing"],
  },
  {
    title: "AI 工程化",
    description: "让 AI 在真实业务里稳定、可控、可迭代",
    slugs: [
      "skill-quality-checker",
      "prompt-engineering",
      "rag-knowledge-base",
      "agent-design",
      "ai-evaluation",
      "context-engineering",
      "intent-recognition",
    ],
  },
]

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
          <p className="text-gray-600">一些更早期的完整项目,记录了我一路走来的痕迹。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {legacyProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
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
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            方法论<span className="bg-[#2F81F7] text-white px-3 py-1 inline-block hl-block">沉淀</span>
          </h2>
          <p className="text-gray-600">把踩过的坑整理成可复用的判断框架,让下一次决策更快、更稳。</p>
        </div>

        {methodologyGroups.map((group) => {
          const groupItems = group.slugs
            .map((slug) => methodologies.find((m) => m.slug === slug))
            .filter((m): m is (typeof methodologies)[number] => Boolean(m))
          return (
            <div key={group.title} className="mb-14">
              <div className="flex items-baseline gap-4 mb-6 border-b-4 border-black pb-3">
                <h3 className="text-2xl font-bold text-[#0B0B0B]">{group.title}</h3>
                <p className="text-gray-500 text-sm">{group.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupItems.map((methodology) => {
                  const colorIndex = methodologies.findIndex((m) => m.slug === methodology.slug)
                  return (
                    <Link
                      key={methodology.slug}
                      href={`/methodologies/${methodology.slug}`}
                      className="group bg-white border-4 border-black rounded-3xl p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="inline-block text-black text-xs font-bold px-3 py-1 rounded-full border-2 border-black"
                          style={{ backgroundColor: palette[colorIndex % palette.length] }}
                        >
                          {methodology.index}
                        </span>
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <h4 className="text-lg font-bold mb-1 text-[#0B0B0B]">
                        {methodology.title}
                        {methodology.skillUrl && (
                          <span className="ml-2 inline-block bg-[#4ECDC4] text-black text-[10px] font-bold px-2 py-0.5 rounded-full border border-black align-middle">
                            Skill 已上线
                          </span>
                        )}
                      </h4>
                      <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">{methodology.englishTitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">{methodology.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-2 font-semibold text-[#0B0B0B] group-hover:gap-3 transition-all text-sm">
                        查看完整框架
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
