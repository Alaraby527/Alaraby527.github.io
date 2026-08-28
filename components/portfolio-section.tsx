import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function PortfolioSection() {
  const categories = [
    {
      id: "ai",
      title: "AI相关",
      color: "#FF6B7A",
      projects: [
        {
          id: "ai-shopping",
          title: "京东 AI 导购追问逻辑原型",
          description: "以相机选购为案例，展示AI导购的多轮追问交互逻辑",
          tag: "AI导购",
          logo: "",
          bgColor: "bg-[#E1251B]",
          illustration: "/images/studio-workspace.svg",
        },
        {
          id: "ai-invoice",
          title: "智能发票查重与合规审查系统",
          description: "完整覆盖需求调研、迭代规划、AI工作流架构设计、提示词规则制定、风险评估与长期roadmap规划全流程，落地Dify平台+OCR识别的真实业务场景。",
          tag: "AI产品",
          logo: "/images/studio-logo.svg",
          bgColor: "bg-[#FF6B7A]",
          illustration: "/images/studio-workspace.svg",
        },
        {
          id: "ai-job",
          title: "职得辩",
          description: "你的私事，值得联合国讨论",
          tag: "AI产品",
          logo: "",
          bgColor: "bg-[#2563EB]",
          illustration: "/images/zdb.png",
        },
      ],
    },
    {
      id: "article",
      title: "文章",
      color: "#10B981",
      projects: [
        {
          id: "suibi",
          title: "月光",
          description: "月光下的少年穿着球衣，我在霓虹里骑行",
          tag: "随笔",
          logo: "",
          bgColor: "bg-[#E0E7FF]",
          illustration: "/images/suibi.png",
        },
        {
          id: "article-2",
          title: "数据标注与AI训练的底层逻辑",
          description: "深入理解AI产品的底层逻辑，从数据标注到模型训练再到效果输出的完整链路，建立对AI技术边界、成本、数据价值的认知。",
          tag: "技术洞察",
          logo: "/images/venture-logo.svg",
          bgColor: "bg-[#8B5CF6]",
          illustration: "/images/venture-workspace.svg",
        },
      ],
    },
    {
      id: "major",
      title: "专业相关",
      color: "#F59E0B",
      projects: [
        {
          id: "major-1",
          title: "储能科学与工程课程项目",
          description: "基于储能科学与工程专业知识，完成的课程设计项目。涉及电池性能测试、储能系统建模、能量管理策略优化等内容。",
          tag: "学术项目",
          logo: "/images/studio-logo.svg",
          bgColor: "bg-[#F59E0B]",
          illustration: "/images/studio-workspace.svg",
        },
        {
          id: "major-2",
          title: "新能源技术调研报告",
          description: "调研新能源技术发展现状与趋势，分析储能技术在新能源领域的应用前景，撰写专业调研报告。",
          tag: "学术研究",
          logo: "/images/venture-logo.svg",
          bgColor: "bg-[#EC4899]",
          illustration: "/images/venture-workspace.svg",
        },
      ],
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            来看看我的 <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">作品集</span>
          </h2>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></span>
              <h3 className="text-2xl md:text-3xl font-bold">{category.title}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="p-6 flex flex-col justify-center bg-white">
                    {project.logo && (
                      <div className="flex items-center gap-3 mb-4">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          width={120}
                          height={32}
                          className="h-6 w-auto"
                        />
                      </div>
                    )}

                    <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 w-fit">
                      {project.tag}
                    </span>

                    <h4 className="text-xl font-bold mb-3 leading-tight text-[#0B0B0B]">
                      {project.title}
                    </h4>

                    <p className="text-base text-[#393939] mb-6 leading-relaxed font-medium">
                      {project.description}
                    </p>

                    <Link
                      href={`/portfolio/${project.id}`}
                      className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm"
                    >
                      查看案例详情
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className={`${project.bgColor} relative overflow-hidden min-h-[200px] md:min-h-[250px]`}>
                    <Image
                      src={project.illustration || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
