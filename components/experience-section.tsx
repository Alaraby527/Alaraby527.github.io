"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"

type Experience = {
  title: string
  summary: string
  icon: string
  // 核心实习:可展开,带指标与证据要点;次要实习:仅一行略写
  metrics?: { value: string; label: string }[]
  details?: string[]
  link?: { url: string; label: string }
  minor?: boolean
}

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const experiences: Experience[] = [
    {
      title: "京东零售 AI 导购 Agent（实习）",
      summary: "面向黑电/3C 品类负责 AI 导购 Agent 迭代优化，从知识库到评测体系的全链路治理。",
      icon: "/images/agency.png",
      metrics: [
        { value: "78%→93%", label: "商品信息匹配准确率" },
        { value: "30.2%→37.5%", label: "AI 咨询下单转化率" },
        { value: "1200 万", label: "单月新增增量 GMV" },
        { value: "38%→23%", label: "人工客服转接率" },
      ],
      details: [
        "旁听 3 位客服 + 分析 12 万条日志定位核心痛点，20 个 Bad Case 归因拆解",
        "重构 RAG 六层分层知识库，设计 6 套 Agent 提示词模板（Master 总控+5 个专项 Agent）",
        "MCP 实时调用商品/价格/库存工具，价格禁止估算、强制走实时 API",
        "搭建全维度指标看板与 Bad Case 闭环治理，灰度四步走（1%→50%→全量）放量",
      ],
    },
    {
      title: "火花工坊 AI 运营（实习）",
      link: { url: "/portfolio/huohua-worktable", label: "衍生作品:火花工坊实习生工作台" },
      summary: "在 AI 创作者社区冷启动中负责用户调研、平台重设计与 AI 运营系统落地。",
      icon: "/images/company.png",
      metrics: [
        { value: "2h→3min", label: "周复盘耗时" },
        { value: "90%", label: "黄金集评测通过率" },
        { value: "4 个", label: "Dify 应用落地" },
        { value: "15/15", label: "课件机器人评测" },
      ],
      details: [
        "24 份问卷+访谈推翻「发课程=提供价值」假设，输出 12 项体验问题与平台重设计方案",
        "设计三类身份×五级成长体系与 Mentor SOP，飞书 Base App 把执行从五步压缩到三步",
        "528 张课件 OCR 化，搭建微信公众号 RAG 问答机器人（15 题评测全通过）",
        "Dify 落地 4 应用+1 知识库，主控 Workflow 8 节点串联「数据→周画像→话术→写回飞书」",
      ],
    },
    {
      title: "唯享科技 测试实习生（实习）",
      link: { url: "/portfolio/msds-hazard-identification-workflow", label: "衍生作品:MSDS 智能识别 Agent" },
      summary: "独立完成 Coze 平台智能识别工作流搭建，设计识别-校验-兜底的完整逻辑。",
      icon: "/images/busines.png",
      metrics: [
        { value: "100%", label: "响应闭环率" },
        { value: "3 层", label: "识别-校验-兜底逻辑" },
      ],
      details: [
        "独立完成 Coze 平台智能识别工作流搭建，设计识别-校验-兜底的完整逻辑",
        "输出产品文档、跟进问题闭环、管理多任务优先级",
        "MSDS 智能识别工作流测试验证，还原企业内 AI 产品经理对接业务、落地功能、保障上线的真实工作内容",
      ],
    },
    {
      title: "物智进化 数据采集&标注实习生（实习）",
      summary: "制定标准化 SOP 与判准，深入理解「数据标注→模型训练→效果输出」的 AI 全链路逻辑。",
      icon: "/images/startup.png",
      metrics: [
        { value: "1200→1800+", label: "日产出" },
        { value: "50%", label: "产能提升" },
        { value: "Top 1", label: "实习生排名" },
      ],
      details: [
        "制定标准化 SOP 与三级判准，日产出 1200→1800+，产能提升 50%，位列实习生第一",
        "深入理解「数据标注→模型训练→效果输出」的 AI 全链路逻辑",
        "建立对 AI 技术边界、成本、数据价值的认知，是 AI 产品经理区别于普通产品经理的核心底层能力",
      ],
    },
    {
      title: "视频剪辑 · 新媒体运营 · B站游戏推广（实习）",
      summary: "从视频剪辑入门，到新媒体运营，再到全流程负责一款手游的游戏推广。",
      icon: "/images/busines.png",
      minor: true,
    },
    {
      title: "提示词实习生（实习）",
      summary: "专职与 Prompt 打交道：结构化编写、版本管理、离线评测与灰度回滚。",
      icon: "/images/company.png",
      minor: true,
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-white mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              来看看我的 <span className="bg-[#6366F1] text-white px-3 py-1 inline-block hl-block">过往经历</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              只讲和产品经理相关的:前四段是核心实习,展开看数据与证据;其余一笔带过。
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const expandable = Boolean(exp.details?.length)
              const isOpen = openIndex === index
              return (
                <div key={index} className="bg-white border-4 border-black rounded-3xl overflow-hidden">
                  <button
                    onClick={() => expandable && setOpenIndex(isOpen ? null : index)}
                    className={`w-full text-left p-5 md:p-6 flex items-start gap-4 md:gap-6 ${expandable ? "cursor-pointer" : "cursor-default opacity-70"}`}
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
                      {expandable && (
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      )}
                    </div>
                  </button>
                  {isOpen && exp.metrics && (
                    <div className="px-5 md:px-6 -mt-1 mb-5 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {exp.metrics.map((metric) => (
                        <div key={metric.label} className="bg-[#FAF5F0] border-2 border-black rounded-xl p-3 text-center">
                          <p className="text-base md:text-lg font-bold text-[#0B0B0B]">{metric.value}</p>
                          <p className="text-xs text-gray-600 mt-0.5">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {isOpen && exp.details && (
                    <div className="px-5 md:px-6 pb-6 md:pb-8">
                      <div className="border-t-2 border-dashed border-gray-300 pt-5 space-y-3">
                        {exp.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3">
                            <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-black"></span>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{detail}</p>
                          </div>
                        ))}
                      </div>
                      {exp.link && (
                        <Link
                          href={exp.link.url}
                          className="mt-4 inline-flex items-center gap-2 bg-[#FFC224] text-black border-2 border-black px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                          <ArrowRight className="w-4 h-4" />
                          {exp.link.label}
                        </Link>
                      )}
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
