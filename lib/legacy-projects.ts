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
  },
  {
    id: "major-1",
    category: "专业相关",
    title: "储能科学与工程课程项目",
    description: "基于储能科学与工程专业知识，完成的课程设计项目。涉及电池性能测试、储能系统建模、能量管理策略优化等内容。",
    tag: "学术项目",
    bgColor: "#F59E0B",
    image: "/images/studio-workspace.svg",
    date: "2025.12",
    team: "小组项目",
    highlights: [
      "电池性能测试",
      "储能系统建模",
      "能量管理策略",
      "数据分析与报告",
    ],
    outcome: "获得课程最高分，被评为优秀项目",
  },
  {
    id: "major-2",
    category: "专业相关",
    title: "新能源技术调研报告",
    description: "调研新能源技术发展现状与趋势，分析储能技术在新能源领域的应用前景，撰写专业调研报告。",
    tag: "学术研究",
    bgColor: "#EC4899",
    image: "/images/venture-workspace.svg",
    date: "2025.09",
    team: "个人研究",
    highlights: [
      "文献调研",
      "技术分析",
      "市场预测",
      "报告撰写",
    ],
    outcome: "发表于校学术期刊",
  },
  {
    id: "article-2",
    category: "文章",
    title: "数据标注与AI训练的底层逻辑",
    description: "深入理解AI产品的底层逻辑，从数据标注到模型训练再到效果输出的完整链路，建立对AI技术边界、成本、数据价值的认知。",
    tag: "技术洞察",
    bgColor: "#8B5CF6",
    image: "/images/venture-workspace.svg",
    date: "2026.03",
    team: "个人创作",
    highlights: [
      "数据标注流程",
      "模型训练原理",
      "效果评估方法",
      "技术边界认知",
    ],
    outcome: "阅读量5000+，获行业专家认可",
  },
]

export const getLegacyProject = (id: string) => legacyProjects.find((item) => item.id === id)
