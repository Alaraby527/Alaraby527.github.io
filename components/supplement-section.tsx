"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, PlayCircle, Github, Zap, ChevronDown } from "lucide-react"
import Link from "next/link"
import { projects, type ProjectType } from "@/lib/portfolio-projects"
import { methodologies } from "@/lib/methodologies"
import { getProjectImage } from "@/components/project-cover"

// 补充项目类型标签
const typeMeta: Record<ProjectType, { label: string; cls: string }> = {
  internship: { label: "实习项目", cls: "bg-[#2F81F7] text-white" },
  personal: { label: "个人项目", cls: "bg-[#FF6B7A] text-white" },
  competition: { label: "比赛项目", cls: "bg-[#FFC224] text-black" },
  rebuild: { label: "真实实习重做", cls: "bg-[#6366F1] text-white" },
  group: { label: "小组作业", cls: "bg-black text-white" },
}

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


// 方法论沉淀：只呈现判断框架；已做成 Skill 的用锚点指向下一段
export function MethodologySection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 text-center">
          <h2 className="mb-1.5 text-xl font-bold md:text-2xl">
            方法论<span className="hl-block inline-block bg-[#2F81F7] px-3 py-0.5 text-white">沉淀</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xs text-gray-600">
            每个方法都是一套可复用的判断框架。标“已做成 Skill”的，在下一段可以看到它被固化成工具后真实跑出的成品。
          </p>
        </div>

        {methodologyGroups.map((group) => {
          const groupItems = group.slugs
            .map((slug) => methodologies.find((m) => m.slug === slug))
            .filter((m): m is (typeof methodologies)[number] => Boolean(m))
          return (
            <div key={group.title} className="mb-6 last:mb-0">
              <div className="mb-3 flex items-baseline gap-4 border-b-4 border-black pb-2">
                <h3 className="text-base font-bold text-[#0B0B0B] md:text-lg">{group.title}</h3>
                <p className="text-[11px] text-gray-500">{group.description}</p>
              </div>
              <div className="space-y-2">
                {groupItems.map((methodology) => (
                  <MethodItem key={methodology.slug} methodology={methodology} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function MethodItem({ methodology }: { methodology: (typeof methodologies)[number] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-xl border-2 border-black bg-white transition-shadow duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 px-3 py-2.5 text-left"
      >
        <span className="inline-block shrink-0 rounded-md border-2 border-black bg-[#FAF5F0] px-2 py-0.5 text-[10px] font-bold text-black">
          {methodology.index}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-sm font-bold text-[#0B0B0B]">{methodology.title}</span>
            {methodology.hasSkill && (
              <span className="inline-flex items-center gap-1 rounded-full border border-black bg-[#4ECDC4] px-1.5 py-px text-[10px] font-bold text-black">
                <Zap className="h-2.5 w-2.5" />
                已做成 Skill
              </span>
            )}
          </span>
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t-2 border-dashed border-gray-300 px-3 py-2.5">
          <p className="mb-2 text-xs leading-relaxed text-gray-700">{methodology.summary}</p>
          <Link
            href={`/methodologies/${methodology.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B0B0B] transition-all hover:gap-2.5"
          >
            查看完整框架 <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </div>
  )
}

// “好玩的玩具”：不算完整 AI 产品，但想放进来的创意/原型
const toys = [
  {
    title: "职得辩 · 求职辩论网页产品",
    description: "“你的私事，值得联合国讨论。”把求职选择搬上环形议事桌：6 位平等代表为你辩论、三轮议事帮你锚定心意。",
    tag: "方案与创意",
    href: "/portfolio/ai-job",
    image: "/images/zdb.png",
  },
]

function ProjectSupplementCard({ project }: { project: (typeof projects)[number] }) {
  const meta = typeMeta[project.projectType]
  const cover = getProjectImage(project.slug)
  return (
    <div className="group flex h-full flex-col rounded-xl border-4 border-black bg-[#FAF5F0] p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {cover && (
        <div className="relative mb-2.5 aspect-video w-full overflow-hidden rounded-lg border-2 border-black bg-white">
          <Image src={cover} alt={project.title} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" sizes="(max-width:640px) 100vw, 33vw" />
        </div>
      )}
      <span className={`mb-2 inline-flex w-fit items-center rounded-full border-2 border-black px-2 py-0.5 text-[10px] font-bold ${meta.cls}`}>
        {meta.label}
      </span>
      <h3 className="mb-1 text-[13px] font-bold text-[#0B0B0B] md:text-sm">{project.title}</h3>
      <p className="mb-2 line-clamp-2 flex-1 text-xs leading-relaxed text-gray-600">{project.summary}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border-2 border-black bg-[#FFC224] px-3 py-1.5 text-xs font-bold text-black transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <PlayCircle className="h-4 w-4" />
            在线体验
          </a>
        )}
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border-2 border-black bg-black px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-gray-800"
          >
            <Github className="h-4 w-4" />
            GitHub 仓库
          </a>
        )}
      </div>
    </div>
  )
}

function ToyCard({ toy }: { toy: (typeof toys)[number] }) {
  return (
    <Link
      href={toy.href}
      className="group flex h-full flex-col rounded-xl border-4 border-black bg-[#FAF5F0] p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      {toy.image && (
        <div className="relative mb-2.5 aspect-video w-full overflow-hidden rounded-lg border-2 border-black bg-white">
          <Image src={toy.image} alt={toy.title} fill className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]" sizes="(max-width:640px) 100vw, 33vw" />
        </div>
      )}
      <span className="mb-2 inline-flex w-fit items-center rounded-full border-2 border-black bg-white px-2 py-0.5 text-[10px] font-bold text-black">
        {toy.tag}
      </span>
      <h3 className="mb-1 text-[13px] font-bold text-[#0B0B0B] md:text-sm">{toy.title}</h3>
      <p className="mb-2 line-clamp-2 flex-1 text-xs leading-relaxed text-gray-600">{toy.description}</p>
      <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-[#0B0B0B] transition-all group-hover:gap-3">
        看看这个 <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  )
}

// 补充项目区块：较弱的 demo + 好玩的创意/原型
export function SupplementProjectsSection() {
  const supplementary = projects.filter((p) => p.tier === "supplementary")
  return (
    <section className="container mx-auto px-4 py-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 text-center">
          <h2 className="mb-1.5 text-xl font-bold md:text-2xl">
            补充<span className="hl-block inline-block bg-[#FF6B7A] px-3 py-0.5 text-white">项目</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xs text-gray-600">一些轻量 demo、创意方案和交互原型，体量不大，但能看到我平时怎么玩、怎么想。</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {supplementary.map((project) => (
            <ProjectSupplementCard key={project.slug} project={project} />
          ))}
          {toys.map((toy) => (
            <ToyCard key={toy.href} toy={toy} />
          ))}
        </div>
      </div>
    </section>
  )
}
