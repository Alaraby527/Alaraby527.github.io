import { ArrowLeft, Calendar, Tag, Users, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, getProject } from "@/lib/portfolio-projects";
import type { DetailCard } from "@/lib/portfolio-projects";
import { legacyProjects, getLegacyProject } from "@/lib/legacy-projects";

export async function generateStaticParams() {
  return [
    ...projects.map((project) => ({ id: project.slug })),
    ...legacyProjects.map((project) => ({ id: project.id })),
  ];
}

// 展示层配色/插画映射(与作品集列表页保持一致)
const cardStyles: Record<string, { bgColor: string; illustration: string }> = {
  "tv-shopping-copilot": { bgColor: "#2F81F7", illustration: "/images/venture-workspace.svg" },
  "huohua-worktable": { bgColor: "#FFC224", illustration: "/uploads/huohua-worktable-preview.png" },
  "msds-hazard-identification-workflow": { bgColor: "#10B981", illustration: "/images/venture-workspace.svg" },
  "lucky-growth-agent": { bgColor: "#6366F1", illustration: "/images/studio-workspace.svg" },
};

// 现有可交互 Demo 的站内入口(内容本体不变,只是把原有页面接进新作品集)
const demoLinks: Record<string, { url: string; label: string }> = {};

function SectionHeading({ index, title, color }: { index?: string; title: string; color: string }) {
  return (
    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
      {index && <span className="font-mono text-sm text-gray-400">{index}</span>}
      <span className="w-1 h-6" style={{ backgroundColor: color }}></span>
      {title}
    </h2>
  );
}

function NumberedList({ items, color }: { items: string[]; color: string }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3 bg-[#FAF5F0] border-2 border-black rounded-xl p-4">
          <span
            className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-black text-white text-sm font-bold flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            {index + 1}
          </span>
          <p className="text-gray-800 leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  );
}

function DataTable({ table }: { table: { headers: string[]; rows: string[][] } }) {
  return (
    <div className="overflow-x-auto rounded-xl border-2 border-black">
      <table className="w-full text-sm bg-white border-collapse">
        <thead>
          <tr>
            {table.headers.map((header, index) => (
              <th key={index} className="bg-black text-white px-3 py-2 text-left font-semibold whitespace-nowrap">
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
    <div className="bg-white border-4 border-black rounded-3xl p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="inline-block text-white text-xs font-semibold px-4 py-1.5 rounded-full border-2 border-black" style={{ backgroundColor: color }}>
          {card.tag}
        </span>
        <h3 className="text-lg md:text-xl font-bold text-[#0B0B0B]">{card.title}</h3>
      </div>

      {card.intro && <p className="text-gray-600 mb-4 leading-relaxed">{card.intro}</p>}
      {card.content && <p className="text-gray-700 leading-relaxed mb-2">{card.content}</p>}
      {card.paragraphs && (
        <div className="space-y-2 mb-2">
          {card.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
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
        <div className="my-4 border-2 border-black rounded-xl bg-[#F9F9F9] p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mermaidUrl} alt={`${card.title} 流程图`} loading="lazy" className="w-full" />
        </div>
      )}
      {card.image && (
        <div className="my-4 border-2 border-black rounded-xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={card.image} alt={`${card.title} 配图`} loading="lazy" className="w-full" />
        </div>
      )}
      {card.link && (
        <a
          href={card.link.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-2 bg-black text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          {card.link.label}
        </a>
      )}
    </div>
  );
}

export default async function PortfolioDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  const legacy = getLegacyProject(id);

  if (!project && !legacy) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">项目不存在</h1>
          <Link href="/portfolio" className="text-blue-600 hover:underline">
            返回作品集
          </Link>
        </div>
      </div>
    );
  }

  if (legacy) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/portfolio" className="flex items-center gap-2 hover:gap-3 transition-all">
              <ArrowLeft className="w-5 h-5" />
              返回作品集
            </Link>
            <h1 className="text-xl font-bold">{legacy.category}</h1>
            <div className="w-24"></div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="relative h-[300px] md:h-[500px]" style={{ backgroundColor: legacy.bgColor }}>
              <Image src={legacy.image} alt={legacy.title} fill className="object-cover opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                <span className="inline-block bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
                  {legacy.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{legacy.title}</h1>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-[#FAF5F0] px-4 py-2 rounded-xl border-2 border-black">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">{legacy.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF5F0] px-4 py-2 rounded-xl border-2 border-black">
                  <Users className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">{legacy.team}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF5F0] px-4 py-2 rounded-xl border-2 border-black">
                  <Tag className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">{legacy.tag}</span>
                </div>
              </div>

              <div className="mb-8">
                <SectionHeading title="项目概述" color={legacy.bgColor} />
                <p className="text-gray-700 text-lg leading-relaxed">{legacy.description}</p>
              </div>

              <div className="mb-8">
                <SectionHeading title="核心亮点" color={legacy.bgColor} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {legacy.highlights.map((highlight, index) => (
                    <div key={index} className="bg-[#FAF5F0] border-2 border-black rounded-xl p-4">
                      <span className="text-gray-400 text-sm">#{index + 1}</span>
                      <p className="font-medium text-gray-800 mt-1">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF5F0] border-2 border-black rounded-xl p-6">
                <SectionHeading title="成果与影响" color={legacy.bgColor} />
                <p className="text-gray-700 text-lg">{legacy.outcome}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回作品集
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  const style = cardStyles[project.slug] ?? { bgColor: "#FF6B7A", illustration: "/images/studio-workspace.svg" };
  const demoLink = demoLinks[project.slug];

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/portfolio" className="flex items-center gap-2 hover:gap-3 transition-all">
            <ArrowLeft className="w-5 h-5" />
            返回作品集
          </Link>
          <h1 className="text-xl font-bold">PROJECT {project.index}</h1>
          <div className="w-24"></div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="relative h-[300px] md:h-[500px]" style={{ backgroundColor: style.bgColor }}>
            <Image src={style.illustration} alt={project.title} fill className="object-cover opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <span className="inline-block bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
                {project.tags[0]}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
              <p className="text-white/90 mt-2">{project.subtitle}</p>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-[#FAF5F0] px-4 py-2 rounded-xl border-2 border-black">
                <Calendar className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">{project.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FAF5F0] px-4 py-2 rounded-xl border-2 border-black">
                <Users className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">{project.role}</span>
              </div>
            </div>

            {project.status && (
              <div className="mb-6 inline-flex bg-[#E0F2FE] border-2 border-black rounded-xl px-4 py-2 font-semibold text-[#0B0B0B]">
                项目状态：{project.status}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
              <div className="bg-[#FFC224] border-2 border-black rounded-xl p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xl md:text-2xl font-bold text-[#0B0B0B]">{project.keyMetric.value}</p>
                <p className="text-xs text-gray-700 mt-1">{project.keyMetric.label}</p>
              </div>
              {project.metrics.map((metric) => (
                <div key={metric.label} className="bg-[#FAF5F0] border-2 border-black rounded-xl p-4 text-center">
                  <p className="text-lg md:text-xl font-bold text-[#0B0B0B]">{metric.value}</p>
                  <p className="text-xs text-gray-600 mt-1">{metric.label}</p>
                </div>
              ))}
            </div>

            {(demoLink || project.sourceUrl) && (
              <div className="flex flex-wrap gap-3 mb-10">
                {demoLink && (
                  <Link
                    href={demoLink.url}
                    className="inline-flex items-center gap-2 bg-[#FFC224] text-black border-2 border-black px-5 py-2.5 rounded-xl font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {demoLink.label}
                  </Link>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {project.sourceUrl.includes("github.com") ? "查看项目源码" : "在线体验 Demo"}
                  </a>
                )}
              </div>
            )}

            <div className="mb-10">
              <SectionHeading title="项目概述" color={style.bgColor} />
              <p className="text-gray-700 text-lg leading-relaxed">{project.summary}</p>
            </div>

            <div className="mb-10">
              <SectionHeading index="01" title="业务背景:真实痛点" color={style.bgColor} />
              <p className="text-gray-700 text-lg leading-relaxed bg-[#FAF5F0] border-2 border-black rounded-xl p-5">
                {project.challenge}
              </p>
            </div>

            {project.research.length > 0 && (
              <div className="mb-10">
                <SectionHeading index="02" title="问题证据与用户场景" color={style.bgColor} />
                <NumberedList items={project.research} color={style.bgColor} />
              </div>
            )}

            {project.solution.length > 0 && (
              <div className="mb-10">
                <SectionHeading index="03" title="技术选择与人机方案" color={style.bgColor} />
                <NumberedList items={project.solution} color={style.bgColor} />
              </div>
            )}

            {project.aiStrategy.length > 0 && (
              <div className="mb-10">
                <SectionHeading index="04" title="AI 专项设计" color={style.bgColor} />
                <NumberedList items={project.aiStrategy} color={style.bgColor} />
              </div>
            )}

            {project.detailCards && project.detailCards.length > 0 && (
              <div className="mb-10">
                <SectionHeading index="05" title="流程闭环与工作流" color={style.bgColor} />
                <div className="space-y-6">
                  {project.detailCards.map((card, index) => (
                    <DetailCardView key={index} card={card} color={style.bgColor} />
                  ))}
                </div>
              </div>
            )}

            <div className="mb-10">
              <SectionHeading index="06" title="量化复盘" color={style.bgColor} />
              <p className="text-gray-700 text-lg leading-relaxed bg-[#FAF5F0] border-2 border-black rounded-xl p-5">
                {project.result}
              </p>
            </div>

            <div className="bg-black text-white rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#FFC224]"></span>
                复盘与反思
              </h2>
              <p className="text-white/90 leading-relaxed">{project.reflection}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回作品集
          </Link>
        </div>
      </div>
    </div>
  );
}
