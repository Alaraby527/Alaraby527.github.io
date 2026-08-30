import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      title: "物智进化 数据采集&标注实习生（实习）",
      description:
        "搭建SOP规则、优化流程提效，深入理解'数据标注→模型训练→效果输出'的AI全链路逻辑，建立对AI技术边界、成本、数据价值的认知，是AI产品经理区别于普通产品经理的核心底层能力。",
      icon: "/images/startup.png",
    },
    {
      title: "京东零售 AI 导购 Agent（实习）",
      description:
        "面向京东零售黑电/3C 品类负责 AI 导购 Agent 迭代优化：重构 RAG 六层分层知识库，设计 6 套 Agent 提示词模板与版本评测机制，搭建全维度指标看板与 Bad Case 闭环治理体系。",
      icon: "/images/agency.png",
    },
    {
      title: "唯享科技 测试实习生（实习）",
      description:
        "独立完成Coze平台智能识别工作流搭建，设计识别-校验-兜底的完整逻辑，输出产品文档、跟进问题闭环、管理多任务优先级，还原企业内AI产品经理对接业务、落地功能、保障上线的真实工作内容。",
      icon: "/images/busines.png",
    },
    {
      title: "火花工坊 AI 运营（实习）",
      description:
        "在 AI 创作者社区冷启动中负责用户调研与平台重设计、作者成长体系与 Mentor SOP 设计，并在 Dify 上落地 4 个应用与主控 Workflow，把周复盘从 2 小时压缩到 3 分钟。",
      icon: "/images/company.png",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              来看看我的 <span className="bg-[#6366F1] text-white px-3 py-1 inline-block hl-block">过往经历</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              经过多次职场尝试，我终于找到自己的dream job，我要当产品经理！
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]">
                <div className="flex items-center justify-end mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
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
