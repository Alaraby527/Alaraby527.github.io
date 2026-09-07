import { ArrowLeft, Tag, Users, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects, getProject, type ProjectType } from "@/lib/portfolio-projects";
import type { DetailCard } from "@/lib/portfolio-projects";
import { ProjectCover, getProjectColor } from "@/components/project-cover";

// 已下线但可能仍被旧书签/历史标签访问的地址：列入参数以走下方“项目不存在”兜底，
// 避免 output: export 下动态路由对未列出参数直接抛 500
const legacySlugs = ["ai-shopping", "jd-ai-shopping-guide-agent"];

export async function generateStaticParams() {
  // 仅主项目生成详情页;补充项目为外链,不在此列
  return [
    ...projects.filter((p) => p.tier !== "supplementary").map((project) => ({ id: project.slug })),
    ...legacySlugs.map((id) => ({ id })),
  ];
}

const typeMeta: Record<ProjectType, { label: string; cls: string }> = {
  internship: { label: "实习项目", cls: "bg-[#2F81F7] text-white" },
  personal: { label: "个人项目", cls: "bg-[#FF6B7A] text-white" },
  competition: { label: "比赛项目", cls: "bg-[#FFC224] text-black" },
  rebuild: { label: "真实实习重做", cls: "bg-[#6366F1] text-white" },
  group: { label: "小组作业", cls: "bg-black text-white" },
};

// 锚点目录
const anchors = [
  { id: "overview", label: "概览" },
  { id: "background", label: "背景与问题" },
  { id: "solution", label: "人机方案" },
  { id: "ai", label: "AI 专项" },
  { id: "workflow", label: "流程闭环" },
  { id: "result", label: "量化结果" },
  { id: "reflection", label: "复盘" },
];

function SectionHeading({ index, title, color }: { index?: string; title: string; color: string }) {
  return (
    <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
      {index && <span className="font-mono text-sm text-gray-400">{index}</span>}
      <span className="h-6 w-1" style={{ backgroundColor: color }}></span>
      {title}
    </h2>
  );
}

// 轻量列表：一个容器 + 发丝分隔行，不再每条都套粗边卡片
function NumberedList({ items, color }: { items: string[]; color: string }) {
  return (
    <div className="divide-y-2 divide-black/10 overflow-hidden rounded-2xl border-2 border-black/15 bg-white">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3 p-4">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-black text-sm font-bold text-white"
            style={{ backgroundColor: color }}
          >
            {index + 1}
          </span>
          <p className="leading-relaxed text-gray-800">{item}</p>
        </div>
      ))}
    </div>
  );
}

function DataTable({ table }: { table: { headers: string[]; rows: string[][] } }) {
  return (
    <div className="overflow-x-auto rounded-xl border-2 border-black">
      <table className="w-full border-collapse bg-white text-sm">
        <thead>
          <tr>
            {table.headers.map((header, index) => (
              <th key={index} className="whitespace-nowrap bg-black px-3 py-2 text-left font-semibold text-white">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 1 ? "bg-[#FAF5F0]" : ""}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border-t-2 border-black px-3 py-2 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DetailCardView({ card, color }: { card: DetailCard; color: string }) {
  const mermaidUrl = card.mermaid
    ? `https://mermaid.ink/img/${Buffer.from(card.mermaid, "utf8").toString("base64url")}?type=png&bgColor=F9F9F9`
    : null;
  return (
    <div className="rounded-3xl border-4 border-black bg-white p-6 md:p-8">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="inline-block rounded-full border-2 border-black px-4 py-1.5 text-xs font-semibold text-white" style={{ backgroundColor: color }}>
          {card.tag}
        </span>
        <h3 className="text-lg font-bold text-[#0B0B0B] md:text-xl">{card.title}</h3>
      </div>

      {card.intro && <p className="mb-4 leading-relaxed text-gray-600">{card.intro}</p>}
      {card.content && <p className="mb-2 leading-relaxed text-gray-700">{card.content}</p>}
      {card.paragraphs && (
        <div className="mb-2 space-y-2">
          {card.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      )}
      {card.table && (
        <div className="my-4">
          <DataTable table={card.table} />
        </div>
      )}
      {mermaidUrl && (
        <div className="my-4 rounded-xl border-2 border-black bg-[#F9F9F9] p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mermaidUrl} alt={`${card.title} 流程图`} loading="lazy" className="w-full" />
        </div>
      )}
      {card.image && (
        <div className="my-4 overflow-hidden rounded-xl border-2 border-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={card.image} alt={`${card.title} 配图`} loading="lazy" className="w-full" />
        </div>
      )}
      {card.link && (
        <a
          href={card.link.url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 font-semibold text-white transition-colors hover:bg-gray-900"
        >
          <ExternalLink className="h-4 w-4" />
          {card.link.label}
        </a>
      )}
    </div>
  );
}

export default async function PortfolioDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);

  if (!project || project.tier === "supplementary") {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold">项目不存在</h1>
          <Link href="/portfolio" className="text-blue-600 hover:underline">
            返回作品集
          </Link>
        </div>
      </div>
    );
  }

  const color = getProjectColor(project.slug);
  const typeMetaItem = typeMeta[project.projectType];

  return (
    <div className="min-h-screen scroll-smooth bg-white">
      <nav className="sticky top-0 z-50 border-b-4 border-black bg-white px-4 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/portfolio" className="flex shrink-0 items-center gap-2 transition-all hover:gap-3">
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden sm:inline">返回作品集</span>
          </Link>
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {anchors.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="shrink-0 rounded-full border-2 border-black px-3 py-1 text-xs font-semibold text-[#0B0B0B] transition-colors hover:bg-black hover:text-white"
              >
                {a.label}
              </a>
            ))}
          </div>
          <h1 className="hidden shrink-0 text-xl font-bold md:block">PROJECT {project.index}</h1>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="overflow-hidden rounded-3xl border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <ProjectCover project={project} className="relative h-[260px] md:h-[440px]" >
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <span className={`mb-3 inline-block rounded-full border-2 border-black px-4 py-1.5 text-xs font-bold ${typeMetaItem.cls}`}>
                {typeMetaItem.label}
              </span>
              <h1 className="text-3xl font-bold text-white md:text-4xl">{project.title}</h1>
              <p className="mt-2 text-white/90">{project.subtitle}</p>
            </div>
          </ProjectCover>

          <div className="p-6 md:p-10">
            <div className="mb-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-xl border-2 border-black bg-[#FAF5F0] px-4 py-2">
                <Users className="h-4 w-4 text-gray-600" />
                <span className="text-gray-700">{project.role}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border-2 border-black bg-[#FAF5F0] px-4 py-2">
                <Tag className="h-4 w-4 text-gray-600" />
                <span className="text-gray-700">{typeMetaItem.label}</span>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-white">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-5">
              <div className="rounded-xl border-2 border-black bg-[#FFC224] p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xl font-bold text-[#0B0B0B] md:text-2xl">{project.keyMetric.value}</p>
                <p className="mt-1 text-xs text-gray-700">{project.keyMetric.label}</p>
              </div>
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border-2 border-black bg-[#FAF5F0] p-4 text-center">
                  <p className="text-lg font-bold text-[#0B0B0B] md:text-xl">{metric.value}</p>
                  <p className="mt-1 text-xs text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>

            {(project.demoUrl || project.sourceUrl) && (
              <div className="mb-10 flex flex-wrap gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-[#FFC224] px-5 py-2.5 font-semibold transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    在线体验
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 font-semibold text-white transition-colors hover:bg-gray-900"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {project.sourceUrl.includes("github.com") ? "GitHub 仓库" : "相关链接"}
                  </a>
                )}
              </div>
            )}

            {/* 结论先行 */}
            <div id="overview" className="mb-10 scroll-mt-28">
              <SectionHeading title="一句话概览（结论先行）" color={color} />
              <p className="border-l-[6px] bg-[#FAF5F0] p-5 text-lg leading-relaxed text-gray-700" style={{ borderColor: color }}>
                {project.summary}
              </p>
            </div>

            {/* 01 背景与问题：业务痛点 + 证据/场景合并，减少重复 */}
            <div id="background" className="mb-10 scroll-mt-28">
              <SectionHeading index="01" title="背景与问题" color={color} />
              <p className="mb-4 rounded-xl border-2 border-black/15 bg-white p-5 leading-relaxed text-gray-700">
                {project.challenge}
              </p>
              {project.research.length > 0 && (
                <>
                  <p className="mb-2 text-sm font-bold text-gray-500">证据与用户场景</p>
                  <NumberedList items={project.research} color={color} />
                </>
              )}
            </div>

            {project.solution.length > 0 && (
              <div id="solution" className="mb-10 scroll-mt-28">
                <SectionHeading index="02" title="技术选择与人机方案" color={color} />
                <NumberedList items={project.solution} color={color} />
              </div>
            )}

            {project.aiStrategy.length > 0 && (
              <div id="ai" className="mb-10 scroll-mt-28">
                <SectionHeading index="03" title="AI 专项设计" color={color} />
                <NumberedList items={project.aiStrategy} color={color} />
              </div>
            )}

            {project.detailCards && project.detailCards.length > 0 && (
              <div id="workflow" className="mb-10 scroll-mt-28">
                <SectionHeading index="04" title="流程闭环与工作流" color={color} />
                <div className="space-y-6">
                  {project.detailCards.map((card, index) => (
                    <DetailCardView key={index} card={card} color={color} />
                  ))}
                </div>
              </div>
            )}

            <div id="result" className="mb-10 scroll-mt-28">
              <SectionHeading index="05" title="量化结果" color={color} />
              <p className="border-l-[6px] bg-[#FAF5F0] p-5 text-lg leading-relaxed text-gray-700" style={{ borderColor: color }}>
                {project.result}
              </p>
            </div>

            <div id="reflection" className="scroll-mt-28 rounded-2xl bg-black p-6 text-white md:p-8">
              <h2 className="mb-3 flex items-center gap-2 text-2xl font-bold">
                <span className="h-6 w-1 bg-[#FFC224]"></span>
                复盘与反思
              </h2>
              <p className="leading-relaxed text-white/90">{project.reflection}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            返回作品集
          </Link>
        </div>
      </div>
    </div>
  );
}
