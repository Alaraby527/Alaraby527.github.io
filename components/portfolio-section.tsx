import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { projects, type Project, type ProjectType } from "@/lib/portfolio-projects"
import { ProjectCover } from "@/components/project-cover"

// 项目类型标签（实习/个人/比赛/真实实习重做/小组作业）
const typeMeta: Record<ProjectType, { label: string; cls: string }> = {
  internship: { label: "实习项目", cls: "bg-[#2F81F7] text-white" },
  personal: { label: "个人项目", cls: "bg-[#FF6B7A] text-white" },
  competition: { label: "比赛项目", cls: "bg-[#FFC224] text-black" },
  rebuild: { label: "真实实习重做", cls: "bg-[#6366F1] text-white" },
  group: { label: "小组作业", cls: "bg-black text-white" },
}

function TypeBadge({ type }: { type: ProjectType }) {
  const meta = typeMeta[type]
  return (
    <span className={`inline-flex items-center rounded-full border-2 border-black px-3 py-0.5 text-xs font-bold ${meta.cls}`}>
      {meta.label}
    </span>
  )
}

export function TierHeading({ badge, title, desc, color }: { badge: string; title?: string; desc?: string; color: string }) {
  return (
    <div className="mb-3 mt-6 flex items-center gap-3 md:gap-4 first:mt-0">
      <span
        className="inline-block shrink-0 rounded-full border-2 border-black px-3 py-0.5 text-[11px] font-bold text-white md:text-xs"
        style={{ backgroundColor: color }}
      >
        {badge}
      </span>
      {title && <h3 className="text-base font-bold text-[#0B0B0B] md:text-lg">{title}</h3>}
      {desc && <span className="hidden text-xs text-gray-500 md:inline">{desc}</span>}
      <span className="mb-1 h-[3px] flex-1 bg-black"></span>
    </div>
  )
}

// 核心：中等竖卡，两列
function CoreCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border-4 border-black bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      <ProjectCover project={project} className="h-28 transition-transform duration-500 ease-out group-hover:scale-[1.03] md:h-32" />
      <div className="flex flex-1 flex-col p-3 md:p-4">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border-2 border-black bg-[#FAF5F0] px-2 py-0.5 text-[10px] font-bold text-black">
            PROJECT {project.index}
          </span>
          <TypeBadge type={project.projectType} />
        </div>
        <h4 className="mb-1 text-sm font-bold leading-snug text-[#0B0B0B] md:text-base">{project.title}</h4>
        <p className="mb-1.5 text-[11px] font-medium text-gray-500 md:text-xs">{project.subtitle}</p>
        <p className="mb-2 line-clamp-2 text-xs leading-relaxed text-[#393939]">{project.summary}</p>
        <div className="mt-auto flex items-end justify-between gap-3">
          <span className="inline-flex items-baseline gap-1.5 rounded-lg border-2 border-black bg-[#FAF5F0] px-2.5 py-0.5">
            <span className="text-[13px] font-bold text-[#0B0B0B] md:text-sm">{project.keyMetric.value}</span>
            <span className="text-[10px] text-gray-600">{project.keyMetric.label}</span>
          </span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-[#0B0B0B] transition-all group-hover:gap-2.5">
            详情 <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

// 更多：紧凑横卡，两列，比核心小一号
function OtherCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex flex-row overflow-hidden rounded-2xl border-4 border-black bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
    >
      <ProjectCover project={project} className="w-16 shrink-0 transition-transform duration-500 ease-out group-hover:scale-105 sm:w-20 md:w-24" />
      <div className="min-w-0 flex-1 p-2.5 md:p-3">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <TypeBadge type={project.projectType} />
          <span className="text-[10px] font-bold text-gray-400">PROJECT {project.index}</span>
        </div>
        <h4 className="mb-1 text-[13px] font-bold leading-snug text-[#0B0B0B] md:text-sm">{project.title}</h4>
        <p className="mb-1.5 line-clamp-2 text-[11px] leading-relaxed text-gray-600">{project.summary}</p>
        <span className="inline-flex items-baseline gap-1.5">
          <span className="text-[13px] font-bold text-[#0B0B0B]">{project.keyMetric.value}</span>
          <span className="hidden text-[10px] text-gray-500 sm:inline">{project.keyMetric.label}</span>
        </span>
      </div>
    </Link>
  )
}

function PageHeader() {
  return (
    <div className="mb-5 text-center">
      <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
        来看看我的 <br />
        <span className="hl-block inline-block bg-[#FFC224] px-3 py-0.5 text-black">作品集</span>
      </h2>
    </div>
  )
}

// 核心项目区块（含页面大标题）
export function PortfolioCoreSection() {
  const core = projects.filter((p) => p.tier === "core")
  return (
    <section className="container mx-auto px-4 pt-8 md:pt-10">
      <div className="mx-auto max-w-7xl">
        <PageHeader />
        <TierHeading badge="核心项目" color="#2F81F7" />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {core.map((project) => (
            <CoreCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

// 更多项目区块
export function PortfolioOtherSection() {
  const other = projects.filter((p) => p.tier === "other")
  return (
    <section className="container mx-auto px-4 py-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <TierHeading badge="更多项目" color="#FF6B7A" desc="同一套方法在更多真实场景里的实践" />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-3">
          {other.map((project) => (
            <OtherCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
