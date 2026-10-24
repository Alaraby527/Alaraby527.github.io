"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"

type Workstream = { heading: string; points: string[] }
type Experience = {
  title: string
  summary: string
  icon: string
  metrics: { value: string; label: string }[]
  background?: string
  myRole?: string
  workstreams?: Workstream[]
  takeaway?: string
  links?: { url: string; label: string }[]
}

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const experiences: Experience[] = [
    {
      title: "京东零售 · AI 产品实习生",
      summary: "负责 AI 导购 Agent 的迭代优化，对匹配准确率与咨询转化结果负责。",
      icon: "/images/agency.png",
      metrics: [
        { value: "+15pct", label: "商品信息匹配准确率" },
        { value: "约+7pct", label: "AI 咨询下单转化率" },
        { value: "千万级", label: "单月新增增量 GMV" },
        { value: "-15pct", label: "人工客服转接率" },
      ],
    },
    {
      title: "百应科技 · AI 产品实习生",
      summary: "负责外呼对话 Agent 的多语种测试、提示词迭代与评测集设计，给概率性的输出建立一套可判定、可回归的验收标准，并沉淀成 SOP 和 Skill。",
      icon: "/images/company.png",
      metrics: [
        { value: "87.9%→90.9%", label: "提示词评测通过率" },
        { value: "33 个", label: "评测子用例（P0/P1/P2）" },
        { value: "46%→60%", label: "印尼语对话通过率" },
        { value: "3 篇", label: "方法论文档 / Skill" },
      ],
      takeaway:
        "最大的收获是学会给概率性输出建“确定性的验收”：用例要写成评测者能直接判对错的具体行为、尽量二元判定，回归才稳定；出问题先分清是提示词还是平台配置，才不会一直在错的地方使劲。",
    },
    {
      title: "火花工坊 · AI 产品实习生",
      summary: "在 AI 创作者社区冷启动中做用户调研、平台重设计，并把重复运营动作做成 4 个可运行的 AI 子项目。",
      icon: "/images/company.png",
      metrics: [
        { value: "2h→3min", label: "单次周复盘耗时" },
        { value: "5/15→15/15", label: "课件 RAG 匹配率" },
        { value: "70%→95%", label: "工作台触达完成率" },
        { value: "4 个", label: "落地子项目" },
      ],
      takeaway:
        "这段实习做的事很杂，但每件都走完了“发现问题→定义方案→落地工具→用数据验证”的闭环。最大的收获是先验证假设再动手，以及为不同场景选合适的技术——固定流程用 Workflow、不确定的问答才用 Agent、结构化 SOP 干脆不用大模型。",
      links: [
        { url: "/portfolio/huohua-ai-ops-platform", label: "子项目：AI 运营平台" },
        { url: "/portfolio/intern-daily-workstation", label: "子项目：实习生工作台" },
        { url: "/portfolio/huohua-rag-qa-bot", label: "子项目：RAG 问答机器人" },
      ],
    },
    {
      title: "唯享科技 · AI 工作流实习生",
      summary: "围绕 MSDS 职业危害识别独立搭智能工作流，设计识别—校验—人工兜底逻辑；离职后用代码重做一版。",
      icon: "/images/busines.png",
      metrics: [
        { value: "8/12→11/12", label: "黄金集准确率" },
        { value: "3 层", label: "识别-校验-兜底" },
        { value: "100%", label: "判定可溯源" },
      ],
      takeaway:
        "这是我的第一段 AI 相关实习。当时更多是把流程跑通，手上的评测 case 也很少，很多边界情况没考虑到。后来的实习让我意识到，一个真正能用的项目必须有兜底、还要靠大量评测去验证稳定性，于是我回头用代码把它重做了一遍，补上识别校验、人工兜底和能回溯到页码的证据链。",
      links: [
        { url: "/portfolio/msds-hazard-identification-workflow", label: "子项目：MSDS 职业危害识别 Agent（代码重做版）" },
      ],
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-white mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              来看看我的 <span className="bg-[#6366F1] text-white px-3 py-1 inline-block hl-block">实习经历</span>
            </h2>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index} className="bg-white border-4 border-black rounded-3xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 md:p-6 flex items-start gap-4 md:gap-6 cursor-pointer"
                  >
                    <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white text-sm md:text-base font-bold flex items-center justify-center">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-xl font-bold text-[#0B0B0B] mb-1 leading-snug">{exp.title}</h3>
                      <p className="text-[#393939] text-sm md:text-base leading-relaxed">{exp.summary}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hidden sm:block">
                        <Image
                          src={exp.icon || "/placeholder.svg"}
                          alt={exp.title}
                          width={48}
                          height={48}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                        />
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 md:pb-8">
                      <div className="border-t-2 border-dashed border-gray-300 pt-6 space-y-6">
                        {/* 关键数据 */}
                        <div
                          className={`grid grid-cols-2 gap-3 ${
                            exp.metrics.length >= 4 ? "md:grid-cols-4" : exp.metrics.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
                          }`}
                        >
                          {exp.metrics.map((metric) => (
                            <div key={metric.label} className="bg-[#FAF5F0] border-2 border-black rounded-xl p-3 text-center">
                              <p className="text-base md:text-lg font-bold text-[#0B0B0B]">{metric.value}</p>
                              <p className="text-xs text-gray-600 mt-0.5">{metric.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* 背景与角色 */}
                        {(exp.background || exp.myRole) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          {exp.background && (
                          <div>
                            <p className="text-xs font-bold text-gray-400 mb-2 tracking-wider">业务背景</p>
                            <p className="h-full rounded-2xl border-2 border-black bg-white p-4 md:p-5 leading-relaxed text-gray-800 text-sm md:text-base">
                              {exp.background}
                            </p>
                          </div>
                          )}
                          {exp.myRole && (
                          <div>
                            <p className="text-xs font-bold text-gray-400 mb-2 tracking-wider">我的角色</p>
                            <p className="h-full rounded-2xl border-2 border-black bg-[#FAF5F0] p-4 md:p-5 leading-relaxed text-gray-800 text-sm md:text-base">
                              {exp.myRole}
                            </p>
                          </div>
                          )}
                        </div>
                        )}

                        {/* 分线关键工作 */}
                        {exp.workstreams && exp.workstreams.length > 0 && (
                        <div>
                          <p className="text-xs font-bold text-gray-400 mb-3 tracking-wider">关键工作</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {exp.workstreams.map((ws, wi) => (
                              <div key={wi} className="rounded-2xl border-2 border-black p-4 md:p-5">
                                <div className="flex items-center gap-2 mb-3">
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                                    {wi + 1}
                                  </span>
                                  <h4 className="text-sm md:text-base font-bold text-[#0B0B0B]">{ws.heading}</h4>
                                </div>
                                <div className="space-y-2.5">
                                  {ws.points.map((point, pi) => (
                                    <div key={pi} className="flex items-start gap-2">
                                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]"></span>
                                      <p className="text-xs md:text-sm leading-relaxed text-gray-700">{point}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        )}

                        {/* 收获 */}
                        {exp.takeaway && (
                        <div className="rounded-2xl bg-black p-5 md:p-6">
                          <p className="text-xs font-bold text-white/50 mb-2 tracking-wider">这段实习带给我的</p>
                          <p className="text-sm md:text-base leading-relaxed text-white/90">{exp.takeaway}</p>
                        </div>
                        )}

                        {/* 相关子项目 */}
                        {exp.links && exp.links.length > 0 && (
                          <div>
                            <p className="text-xs font-bold text-gray-400 mb-3 tracking-wider">相关项目（点开看完整案例）</p>
                            <div className="flex flex-wrap gap-2.5">
                              {exp.links.map((item) => (
                                <Link
                                  key={item.url}
                                  href={item.url}
                                  className="inline-flex items-center gap-2 bg-[#FFC224] text-black border-2 border-black px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                                >
                                  <ArrowRight className="w-4 h-4" />
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
