import { ArrowLeft, CheckSquare, ExternalLink } from "lucide-react";
import Link from "next/link";
import { methodologies, getMethodology } from "@/lib/methodologies";

export async function generateStaticParams() {
  return methodologies.map((methodology) => ({ slug: methodology.slug }));
}

// 方法论卡片配色循环(与作品集补充板块一致)
const palette = ["#FF6B7A", "#2F81F7", "#FFD700", "#4ECDC4", "#AA96DA", "#F38181", "#FFC224", "#95E1D3"];

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
      <span className="w-1 h-6 bg-black"></span>
      {title}
    </h2>
  );
}

export default async function MethodologyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const methodology = getMethodology(slug);

  if (!methodology) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">框架不存在</h1>
          <Link href="/portfolio" className="text-blue-600 hover:underline">
            返回作品集
          </Link>
        </div>
      </div>
    );
  }

  const color = palette[methodologies.findIndex((item) => item.slug === methodology.slug) % palette.length];

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/portfolio" className="flex items-center gap-2 hover:gap-3 transition-all">
            <ArrowLeft className="w-5 h-5" />
            返回作品集
          </Link>
          <h1 className="text-xl font-bold">{methodology.index}</h1>
          <div className="w-24"></div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="border-4 border-black rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10" style={{ backgroundColor: color }}>
          <span className="inline-block bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border-2 border-black">
            {methodology.index} · {methodology.englishTitle}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#0B0B0B] mb-3">{methodology.title}</h1>
          {methodology.tagline && <p className="text-lg md:text-xl font-medium text-[#0B0B0B]/80">{methodology.tagline}</p>}
        </div>

        <div className="bg-white border-4 border-black rounded-3xl p-6 md:p-10">
          <div className="mb-10">
            <SectionHeading title="这套框架解决什么" />
            <p className="text-gray-700 text-lg leading-relaxed">{methodology.summary}</p>
          </div>

          <div className="mb-10">
            <SectionHeading title="适用场景" />
            <p className="text-gray-700 text-lg leading-relaxed bg-[#FAF5F0] border-2 border-black rounded-xl p-5">
              {methodology.suitableFor}
            </p>
          </div>

          <div className="mb-10">
            <SectionHeading title="执行步骤" />
            <div className="space-y-4">
              {methodology.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-[#FAF5F0] border-2 border-black rounded-xl p-5">
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-black text-black text-base font-bold flex items-center justify-center bg-white"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-[#0B0B0B]">{step.title}</h3>
                      <span className="bg-[#FFC224] border-2 border-black text-black text-xs font-semibold px-3 py-0.5 rounded-full">
                        产出:{step.output}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <SectionHeading title="自检清单" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {methodology.checklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#FAF5F0] border-2 border-black rounded-xl p-4">
                  <CheckSquare className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color }} />
                  <p className="text-gray-800 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#FFC224]"></span>
              实践案例
            </h2>
            <p className="text-white/90 leading-relaxed">{methodology.example}</p>
          </div>

          {(methodology.sourceUrl || methodology.skillUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {methodology.sourceUrl && (
                <a
                  href={methodology.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  查看原文 / 源码仓库
                </a>
              )}
              {methodology.skillUrl && (
                <a
                  href={methodology.skillUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FFC224] text-black border-2 border-black px-5 py-2.5 rounded-xl font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  真实产出:这个 Skill 的仓库
                </a>
              )}
            </div>
          )}
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
