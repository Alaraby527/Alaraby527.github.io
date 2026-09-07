"use client"

import { ArrowRight, Github, Zap } from "lucide-react"
import { methodologies } from "@/lib/methodologies"
import { standaloneSkills } from "@/lib/skill-kit"
import { SkillArtifactPanel } from "@/components/skill-example"

// 方法论里已做成 Skill 的 8 个（按方法论编号顺序）
const methodologySkillSlugs = [
  "ai-requirements-analysis",
  "competitive-research",
  "user-interview",
  "product-experience-report",
  "data-analysis",
  "usability-testing",
  "survey-questionnaire",
  "skill-quality-checker",
]

function SectionLabel({ index, title, desc }: { index: string; title: string; desc: string }) {
  return (
    <div className="mb-3 flex items-baseline gap-4 border-b-4 border-black pb-2">
      <span className="text-[11px] font-black tracking-widest text-gray-400">{index}</span>
      <h3 className="text-base font-bold text-[#0B0B0B] md:text-lg">{title}</h3>
      <p className="hidden text-xs text-gray-500 md:inline">{desc}</p>
    </div>
  )
}

// 方法论 Skill 卡：标题 + 一句话作用 + 真实成品（默认展开）+ 源码入口
function MethodologySkillCard({ slug }: { slug: string }) {
  const m = methodologies.find((x) => x.slug === slug)
  if (!m) return null
  return (
    <div className="flex flex-col rounded-xl border-[3px] border-black bg-[#FAF5F0] p-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1 rounded-full border-2 border-black bg-[#4ECDC4] px-2 py-0.5 text-[9.5px] font-bold text-black">
          <Zap className="h-2.5 w-2.5" /> 方法论已固化为 Skill
        </span>
        <span className="font-mono text-[10px] font-bold text-gray-400">{m.index}</span>
      </div>
      <h4 className="mb-1 text-[13px] font-bold text-[#0B0B0B] md:text-sm">{m.title}</h4>
      <p className="mb-1.5 line-clamp-2 text-[11px] leading-relaxed text-gray-600">{m.tagline ?? m.summary}</p>
      <SkillArtifactPanel slug={slug} />
      <a
        href={m.skillUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-1.5 inline-flex items-center gap-2 text-[11px] font-semibold text-[#0B0B0B] transition-all hover:gap-3"
      >
        <Github className="h-3 w-3" /> 查看 Skill 源码 <ArrowRight className="h-3 w-3" />
      </a>
    </div>
  )
}

// 求职线 Skill 卡
function StandaloneSkillCard({ skill }: { skill: (typeof standaloneSkills)[number] }) {
  return (
    <div className="flex flex-col rounded-xl border-[3px] border-black bg-[#FAF5F0] p-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="inline-block rounded-full border-2 border-black bg-[#FFC224] px-2 py-0.5 text-[9.5px] font-bold text-black">
          {skill.category}
        </span>
      </div>
      <h4 className="mb-1 text-[13px] font-bold text-[#0B0B0B] md:text-sm">{skill.title}</h4>
      <p className="mb-1.5 line-clamp-2 text-[11px] leading-relaxed text-gray-600">{skill.summary}</p>
      <div className="mb-1.5 flex flex-wrap gap-1">
        {skill.outputs.map((o) => (
          <span key={o} className="rounded-full border border-black/30 bg-white px-1.5 py-px text-[9.5px] text-gray-700">
            {o}
          </span>
        ))}
      </div>
      <SkillArtifactPanel slug={skill.slug} />
      <a
        href={skill.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-1.5 inline-flex items-center gap-2 text-[11px] font-semibold text-[#0B0B0B] transition-all hover:gap-3"
      >
        <Github className="h-3 w-3" /> 查看 Skill 源码 <ArrowRight className="h-3 w-3" />
      </a>
    </div>
  )
}

export function SkillSection() {
  return (
    <section id="skills" className="container mx-auto px-4 py-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 text-center">
          <h2 className="mb-1.5 text-xl font-bold md:text-2xl">
            把方法<span className="hl-block inline-block bg-[#4ECDC4] px-3 py-0.5 text-black">做成 Skill</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">
            方法论为什么只能存在文档里，而不是一个可以直接拿来就用的小工具？
          </p>
        </div>

        <SectionLabel index="A" title="产品方法论 Skill" desc="需求、调研、分析、验证——8 个核心方法都已工具化" />
        <div className="mb-5 grid grid-cols-1 gap-2.5 lg:grid-cols-2">
          {methodologySkillSlugs.map((slug) => (
            <MethodologySkillCard key={slug} slug={slug} />
          ))}
        </div>

        <SectionLabel index="B" title="求职线 Skill" desc="简历、面试、作品集、逐字稿——把求职也产品化" />
        <div className="mb-5 grid grid-cols-1 gap-2.5 lg:grid-cols-2">
          {standaloneSkills.filter((s) => (s.group ?? "job") === "job").map((skill) => (
            <StandaloneSkillCard key={skill.slug} skill={skill} />
          ))}
        </div>

        <SectionLabel index="C" title="AI 工程化与职场提效 Skill" desc="提示词、对话策略、Skill 封装、日报——把日常工作流也工具化" />
        <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-2">
          {standaloneSkills.filter((s) => s.group === "tool").map((skill) => (
            <StandaloneSkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

