import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/portfolio-projects"

// 每个项目的卡片配色与插画(展示层映射,数据本体在 lib/portfolio-projects.ts)
const cardStyles: Record<string, { bgColor: string; illustration: string }> = {
  "jd-ai-shopping-guide-agent": { bgColor: "#E1251B", illustration: "/images/studio-workspace.svg" },
  "tv-shopping-copilot": { bgColor: "#2F81F7", illustration: "/images/venture-workspace.svg" },
  "huohuahub-ai-creator-platform": { bgColor: "#FF6B7A", illustration: "/images/studio-workspace.svg" },
  "msds-hazard-identification-workflow": { bgColor: "#10B981", illustration: "/images/venture-workspace.svg" },
  "lucky-growth-agent": { bgColor: "#6366F1", illustration: "/images/studio-workspace.svg" },
}

export function PortfolioSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            来看看我的 <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block hl-block">作品集</span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project) => {
            const style = cardStyles[project.slug] ?? { bgColor: "#FF6B7A", illustration: "/images/studio-workspace.svg" }
            return (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group grid md:grid-cols-2 bg-white border-4 border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 bg-[#FFC224] border-2 border-black rounded-full px-4 py-1 text-xs font-bold text-black">
                      PROJECT {project.index}
                    </span>
                    <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      {project.tags[0]}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-[28px] font-bold mb-2 leading-tight md:leading-[40px] text-[#0B0B0B]">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mb-4 font-medium">{project.subtitle}</p>

                  <p className="text-base text-[#393939] mb-6 leading-relaxed md:leading-[30px] font-medium line-clamp-4">
                    {project.summary}
                  </p>

                  <div className="mb-8">
                    <span className="inline-flex items-baseline gap-2 border-2 border-black rounded-xl px-4 py-2 bg-[#FAF5F0]">
                      <span className="text-lg md:text-xl font-bold text-[#0B0B0B]">{project.keyMetric.value}</span>
                      <span className="text-xs md:text-sm text-gray-600">{project.keyMetric.label}</span>
                    </span>
                  </div>

                  <span className="flex items-center gap-2 font-semibold text-[#0B0B0B] group-hover:gap-3 transition-all text-sm md:text-base">
                    查看案例详情
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                <div className={`${style.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px]`}>
                  <Image
                    src={style.illustration}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
