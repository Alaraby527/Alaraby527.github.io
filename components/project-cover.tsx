import Image from "next/image"
import type { ReactNode } from "react"
import type { Project } from "@/lib/portfolio-projects"

// 统一的项目封面：默认用品牌化几何封面，避免不相关的通用线稿；有真实截图的才用截图
const coverMap: Record<string, { color: string; image?: string }> = {
  "huohua-ai-ops-platform": { color: "#2F81F7" },
  "intern-daily-workstation": { color: "#FFC224", image: "/uploads/huohua-worktable-preview.png" },
  "msds-hazard-identification-workflow": { color: "#10B981", image: "/uploads/covers/msds-hazard-identification-workflow.png" },
  "tv-buying-copilot": { color: "#6366F1", image: "/uploads/covers/tv-buying-copilot.png" },
  "huohua-rag-qa-bot": { color: "#0EA5A4" },
  "lucky-growth-agent": { color: "#EAB308", image: "/uploads/covers/lucky-growth-agent.png" },
  "invoice-risk-review-agent": { color: "#FF6B7A" },
  "ai-pm-coach": { color: "#F472B6", image: "/uploads/covers/ai-pm-coach.png" },
  "qiuzhao-workbench": { color: "#8B5CF6", image: "/uploads/covers/qiuzhao-workbench.png" },
  "aipm-learning-assistant": { color: "#38BDF8", image: "/uploads/covers/aipm-learning-assistant.png" },
  "wealth-freedom-planner": { color: "#FF6B7A", image: "/uploads/covers/wealth-freedom-planner.png" },
}

export function getProjectColor(slug: string) {
  return (coverMap[slug] ?? { color: "#FF6B7A" }).color
}

export function getProjectImage(slug: string) {
  return (coverMap[slug] ?? {}).image
}

export function ProjectCover({ project, className = "", children }: { project: Project; className?: string; children?: ReactNode }) {
  const cover = coverMap[project.slug] ?? { color: "#FF6B7A" }

  if (cover.image) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: cover.color }}>
        <Image src={cover.image} alt={project.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        {children}
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: cover.color }}>
      {/* 细网格纹理 */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* 几何硬阴影点缀 */}
      <div className="absolute left-5 top-5 h-9 w-9 rotate-12 rounded-md border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
      <div className="absolute left-[52px] top-11 h-5 w-5 -rotate-6 rounded-sm bg-black" />
      {/* 大号序号水印 */}
      <span className="pointer-events-none absolute -bottom-7 right-3 select-none text-[110px] font-black leading-none text-white/25">
        {project.index}
      </span>
      {children}
    </div>
  )
}
