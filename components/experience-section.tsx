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
  background: string
  myRole: string
  workstreams: Workstream[]
  takeaway: string
  links?: { url: string; label: string }[]
}

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const experiences: Experience[] = [
    {
      title: "京东零售 · AI 产品实习生",
      summary: "面向黑电/3C 品类负责 AI 导购 Agent 的迭代，跑通 Bad Case 归因、分层 RAG 知识库、分场景提示词、评测看板与 AB 验证的完整闭环。",
      icon: "/images/agency.png",
      metrics: [
        { value: "78%→93%", label: "商品信息匹配准确率" },
        { value: "30.2%→37.5%", label: "AI 咨询下单转化率" },
        { value: "约 1200 万", label: "单月新增增量 GMV" },
        { value: "38%→23%", label: "人工客服转接率" },
      ],
      background:
        "黑电/3C 家电参数复杂、客单价高、决策链路长，用户在商品页和客服之间反复比价还是拿不定主意。导购 Agent 基于 JoyAI+MCP，由一个 Master 总控 Agent 调度需求澄清、商品检索、履约交易、售后客服四个子 Agent 和一系列 Skill 工具；上线初期商品信息匹配准确率只有 78%，近四成咨询最终仍要转人工。",
      myRole:
        "负责这个导购 Agent 的迭代优化，独立承担 Bad Case 归因、分层 RAG 知识库重构、分场景提示词设计、评测看板搭建与 AB 验证，对匹配准确率和咨询转化结果负责。",
      workstreams: [
        {
          heading: "用 Bad Case 分类定位问题",
          points: [
            "把问题归成五类：意图与槽位、RAG 检索（最高发）、模型幻觉、Skill 工具调用、交互与业务规则；每周一次 Bad Case 复盘、每两周同步一次效果评测",
            "顺着 MCP 会话日志逐层排查典型案例：AI 推荐了已停产机型还编出不存在的补贴，最终定位到槽位置信度不足、知识库缺停产标签、Prompt 没约束来源三处问题",
          ],
        },
        {
          heading: "重做分层知识库与提示词",
          points: [
            "知识库按更新频率分四层——商品基础参数、营销活动、履约服务、场景化知识，分别配不同切片与召回权重；补齐五类标签、参数类按维度结构化切片、重叠窗口 10%→15%、TopK 3→5、相似度阈值 0.7→0.65、过期活动自动下架，匹配准确率 78%→93%，参数类 Bad Case 降 62%",
            "设计需求澄清、商品推荐、参数对比、优惠计算、售后咨询、兜底转人工 6 套分场景 Prompt，价格一律走实时价格 Skill、禁止模型自己估算",
          ],
        },
        {
          heading: "搭评测闭环，用 AB 验证结果",
          points: [
            "搭全维度指标看板和 Bad Case 闭环，准确率、Bad Case 率、转接率、满意度一起看，参数幻觉率从 12% 压到 5% 以下，用户满意度 4.01→4.62",
            "优化版与旧版 50:50 做两周 AB：对照组只随大盘涨 1.3pct，实验组转化 30.2%→37.5%、净提升约 6pct；按净增转化 × 月均约 5.5 万次 AI 咨询 × 约 3600 元客单、24 小时归因口径，单月新增增量 GMV 约 1200 万，人工转接率 38%→23%",
          ],
        },
      ],
      takeaway:
        "这段实习让我理解 AI 产品的迭代单位是 Bad Case——准确率不是换模型换来的，是一条条归因、一层层补知识库、一版版 AB 跑出来的；业务结果也得用对照组扣掉大盘涨幅，才算得到 AI 头上。",
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
      background:
        "业务侧的外呼对话 Agent 一边要压缩提示词，一边得保证对话策略、合规话术和挂机逻辑不退化，还要同时支持印尼语。",
      myRole:
        "负责它的多语种对话测试、提示词迭代和评测集设计，核心是给每次改动建立明确、可复跑的验收标准。",
      workstreams: [
        {
          heading: "多语种回归测试与归因",
          points: [
            "中文语料全量回归、逐条判通过/不通过并登记问题，归纳出该走合规话术却直接推进、非本人场景仍核身、未礼貌挂断等典型类型",
            "印尼语两轮验收锁定到“二次质疑后未挂断”这一语义偏差，推动修复后通过率 46%→60%；同时和团队对齐判定口径：以关键动作与交互轮次为准、礼貌挂断统一为 2 次、答不了的问题引导到 APP/官方渠道",
          ],
        },
        {
          heading: "提示词重构与评测集设计",
          points: [
            "把强流程的多轮提示词重构成能接住用户跳序提问的单 Prompt，按目标/策略/执行/约束四层组织，主提示词压缩到 3000 字内",
            "评测集从 21 个用例迭代到 33 个子用例（P0 19 / P1 13 / P2 1），把模糊打分改成通过/不通过二元判定，通过率从 87.9% 提到 90.9%，并把剩余失败归到平台挂机配置、而不是提示词本身",
          ],
        },
        {
          heading: "把方法沉淀成可复用资产",
          points: [
            "沉淀提示词撰写 SOP、外呼全流程思维导图和日报 Skill，并用 Codex 做半自动填表插件减少重复落表",
            "固定改 Prompt 前先备份、重要版本在文档侧留档的规范，避免平台单点误删后无法恢复",
          ],
        },
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
      background:
        "一个 AI 创作者社区正处在冷启动期：Skill 商店被埋在二级页面、80% 用户不知道它存在，头部创作者两周后就不再上传，运营者每周还要花 2 小时手动汇总 7 张表写画像、凭感觉写话术。",
      myRole:
        "作为核心成员，负责用户调研、平台重设计，以及一整套 AI 运营工具的从 0 落地。",
      workstreams: [
        {
          heading: "用调研推翻初始假设",
          points: [
            "24 份问卷 + 访谈：67% 反馈系统课程“太笼统”、点击率不到 5%，直接推翻“发课程=提供价值”的方向，转向场景化即用方案",
            "直接问需求的邀约回复率 66%，泛泛“学习搭子”只有 3%，用数据校准运营动作",
          ],
        },
        {
          heading: "平台重设计与成长体系",
          points: [
            "输出 12 项体验问题与重设计方案：6 大导航、Skill 库提到首页、4 个核心页面重构",
            "设计学习者/创作者/导师三类身份 × 五级成长体系与 Mentor SOP",
          ],
        },
        {
          heading: "把重复运营交给 AI（4 个子项目）",
          points: [
            "AI 运营平台：周画像/话术/主控 Workflow 串联，周复盘 2h→3min",
            "课件 RAG 机器人：528 张课件 OCR 接入公众号，匹配率 5/15→15/15",
            "实习生工作台：飞书低代码验证后用 React+NestJS 重写，触达完成率 70%→95%",
            "AI 日报：8 节点工作流 + 微信 Bot，每天零干预自动出报",
          ],
        },
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
      summary: "围绕 MSDS 职业危害识别在 Coze 上独立搭智能工作流，设计识别—校验—人工兜底逻辑；离职后用代码重做一版。",
      icon: "/images/busines.png",
      metrics: [
        { value: "8/12→11/12", label: "黄金集准确率" },
        { value: "3 层", label: "识别-校验-兜底" },
        { value: "100%", label: "判定可溯源" },
      ],
      background:
        "职业卫生审核要从 MSDS（化学品安全说明书）里识别职业病危害因素，文件既有文本 PDF 也有扫描件，识别错了关系到危害判定，既不能漏、也不能编。",
      myRole:
        "先在公司用 Coze 搭出第一版识别工作流并对接上线，实习结束后又用 Python 独立重做，补上本地 OCR 和证据链。",
      workstreams: [
        {
          heading: "搭建识别工作流",
          points: [
            "独立在 Coze 上完成智能识别工作流，设计“识别—校验—人工兜底”三层逻辑",
            "明确物质名称、CAS 编号、含量三类核心提取字段，对照高毒物品目录理清判定边界",
          ],
        },
        {
          heading: "对接业务、保障上线",
          points: [
            "输出产品文档、跟进问题闭环，在多任务并行下管理优先级",
            "高毒目录命中强制人工复核；知识表未命中时标记“未命中”而不是直接判“无危害”",
          ],
        },
        {
          heading: "离职后用代码重做",
          points: [
            "用 Python 重写：PDF 文本抽取 + 本地中文 OCR + 页图证据链，每条判定可回溯到页码",
            "用 3 份真实 MSDS 人工标注做黄金集，准确率从 8/12 提到 11/12",
          ],
        },
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          <div>
                            <p className="text-xs font-bold text-gray-400 mb-2 tracking-wider">业务背景</p>
                            <p className="h-full rounded-2xl border-2 border-black bg-white p-4 md:p-5 leading-relaxed text-gray-800 text-sm md:text-base">
                              {exp.background}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-400 mb-2 tracking-wider">我的角色</p>
                            <p className="h-full rounded-2xl border-2 border-black bg-[#FAF5F0] p-4 md:p-5 leading-relaxed text-gray-800 text-sm md:text-base">
                              {exp.myRole}
                            </p>
                          </div>
                        </div>

                        {/* 分线关键工作 */}
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

                        {/* 收获 */}
                        <div className="rounded-2xl bg-black p-5 md:p-6">
                          <p className="text-xs font-bold text-white/50 mb-2 tracking-wider">这段实习带给我的</p>
                          <p className="text-sm md:text-base leading-relaxed text-white/90">{exp.takeaway}</p>
                        </div>

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
