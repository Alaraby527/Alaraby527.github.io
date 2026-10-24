// 补充项目:原版作品集中保留下来的早期项目(详情数据沿用原 [id] 页面数据,未改动文案)
// 职得辩为独立整页案例(/portfolio/ai-job),月光随笔为独立页面(/portfolio/suibi),不在此列

export type LegacyProject = {
  id: string
  category: string
  title: string
  description: string
  tag: string
  bgColor: string
  image: string
  date: string
  team: string
  highlights: string[]
  outcome: string
}

export const legacyProjects: LegacyProject[] = [
  {
    id: "ai-invoice",
    category: "AI相关",
    title: "智能发票查重与合规审查系统",
    description: "完整覆盖需求调研、迭代规划、AI工作流架构设计、提示词规则制定、风险评估与长期roadmap规划全流程，落地Dify平台+OCR识别的真实业务场景，有明确的效率提升数据，是典型的AI产品从0到1落地实践。",
    tag: "AI产品",
    bgColor: "#FF6B7A",
    image: "/images/studio-workspace.svg",
    date: "2026.06",
    team: "个人项目",
    highlights: [
      "需求调研与用户访谈",
      "AI工作流架构设计",
      "提示词规则制定",
      "Dify平台落地",
      "OCR识别集成",
      "风险评估与roadmap规划",
    ],
    outcome: "效率提升300%，准确率达到99.2%",
  }
]

export const getLegacyProject = (id: string) => legacyProjects.find((item) => item.id === id)
