import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function ExperienceSection() {
  const experiences = [
    {
      period: "2026.06",
      title: "智能发票查重与合规审查系统（项目）",
      description:
        "完整覆盖需求调研、迭代规划、AI工作流架构设计、提示词规则制定、风险评估与长期roadmap规划全流程，落地Dify平台+OCR识别的真实业务场景，有明确的效率提升数据，是典型的AI产品从0到1落地实践。",
      icon: "/images/agency.png",
    },
    {
      period: "2026.04-至今",
      title: "一站式求职助手网页搭建（项目）",
      description:
        "完整贯穿AI产品生命周期：包含用户研究、需求拆解、PRD撰写、产品架构设计、MVP落地、版本管控、项目复盘全链路，直面AI开发的真实痛点并给出解决方案，匹配AI产品经理'用AI落地产品、把控迭代节奏'的核心要求。",
      icon: "/images/company.png",
    },
    {
      period: "2026.05-2026.06",
      title: "唯享科技 测试实习生（实习）",
      description:
        "独立完成Coze平台智能识别工作流搭建，设计识别-校验-兜底的完整逻辑，输出产品文档、跟进问题闭环、管理多任务优先级，还原企业内AI产品经理对接业务、落地功能、保障上线的真实工作内容。",
      icon: "/images/busines.png",
    },
    {
      period: "2025.03-2025.04",
      title: "物智进化 数据采集&标注实习生（实习）",
      description:
        "搭建SOP规则、优化流程提效，深入理解'数据标注→模型训练→效果输出'的AI全链路逻辑，建立对AI技术边界、成本、数据价值的认知，是AI产品经理区别于普通产品经理的核心底层能力。",
      icon: "/images/startup.png",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              来看看我的 <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">过往经历</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              经过多次职场尝试，我终于找到自己的dream job，我要当产品经理！
            </p>
            <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]" asChild>
              <Link href="/resume">
                <FileText className="w-5 h-5" />
                查看完整简历
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.title}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
