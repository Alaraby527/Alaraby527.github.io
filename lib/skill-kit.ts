// 没有单独写方法论卡片、直接固化成可执行 Skill 的工具（求职线）
// 前 4 个属于 AI PM SkillKit（ai-pm-skills），最后一个是独立深版简历 SOP 仓库

const KIT = "https://github.com/Alaraby527/ai-pm-skills/tree/main/skills"

export type StandaloneSkill = {
  slug: string
  title: string
  category: string
  summary: string
  effect: string
  outputs: string[]
  repoUrl: string
  standalone?: boolean
  // job=求职发展；tool=AI 工程化 / 职场提效
  group?: "job" | "tool"
}

export const standaloneSkills: StandaloneSkill[] = [
  {
    slug: "resume-jd-align",
    title: "简历-JD 对齐",
    category: "SkillKit · 求职发展",
    summary: "把目标 JD 当需求文档、把简历当产品方案：三步挖词，按岗位精准改写经历并排出投递梯队。",
    effect: "给一份 JD 和简历，产出关键词匹配分析、改写后的项目描述、自我评价和三梯队投递表",
    outputs: ["JD 三类关键词", "简历结构体检", "万能项目描述公式", "三梯队投递策略"],
    repoUrl: `${KIT}/resume-jd-align`,
  },
  {
    slug: "interview-prep",
    title: "面试备战",
    category: "SkillKit · 求职发展",
    summary: "把项目素材标准化，搭好项目深挖、行业认知、行为面试、费米估算四大题型的答题框架。",
    effect: "给目标岗位，产出项目标准化素材包、四大题型答题框架和分轮次备战清单",
    outputs: ["5 维度素材法", "四大题型框架", "AI PM 专项考点", "分轮次清单"],
    repoUrl: `${KIT}/interview-prep`,
  },
  {
    slug: "interview-retro",
    title: "面试复盘",
    category: "SkillKit · 求职发展",
    summary: "用漏斗思维诊断求职转化率：还原面试、分层定位、溯源根治，把“挂了”变成可执行的改进项。",
    effect: "复盘一场面试，产出求职漏斗诊断、短板分类（知识/表达/匹配度）和下一次的具体行动项",
    outputs: ["求职漏斗诊断", "短板三分类", "改进优先级", "下次行动项"],
    repoUrl: `${KIT}/interview-retro`,
  },
  {
    slug: "script-polish",
    title: "逐字稿打磨",
    category: "SkillKit · 求职发展",
    summary: "诊断面试逐字稿里的逻辑跳跃、数据缺失、AI 味和口头禅，逐句打磨成有数据、有洞察的回答。",
    effect: "给一段面试逐字稿，产出问题诊断和 1/3/5 分钟多个时长的打磨版本",
    outputs: ["6 类表达诊断", "四段式重构", "多时长版本", "口语化打磨"],
    repoUrl: `${KIT}/script-polish`,
  },
  {
    slug: "ai-pm-resume-writing",
    title: "AI PM 简历写作 SOP",
    category: "独立 Skill 仓库",
    summary: "比 SkillKit 版更深的简历 SOP：JD 三步挖词、五级匹配诊断、STAR/XYZ 量化、三个投递方向多版本定制，内置 5 条红线和 29 项成稿自检。",
    effect: "读完即可独立产出 AI 应用/Agent、AI 增长、AI 策略三个方向的成稿简历，且不虚构任何数据",
    outputs: ["JD-证据映射表", "五级匹配诊断", "STAR/XYZ 量化", "三方向多版本", "5 红线 + 29 项自检"],
    repoUrl: "https://github.com/Alaraby527/ai-pm-resume-writing",
    standalone: true,
    group: "job",
  },
  {
    slug: "ai-product-portfolio-review",
    title: "AI PM 作品集审核",
    category: "SkillKit · 求职发展",
    summary: "用评审视角审 AI 产品作品集：先证据后结论，区分概念/Demo/试点/生产四种成熟度，按六维度找硬伤并排修复优先级。",
    effect: "给一份作品集或项目页，产出证据分级、成熟度判定、P0/P1/P2 问题清单和最小高影响修复动作",
    outputs: ["证据四级分级", "成熟度判定", "六维审核", "P0/P1/P2 修复单"],
    repoUrl: `${KIT}/ai-product-portfolio-review`,
    group: "job",
  },
  {
    slug: "prompt-writing",
    title: "提示词写作",
    category: "SkillKit · AI 工程化",
    summary: "把模糊需求或业务策略转成可直接运行的提示词：先澄清任务/输入/输出/红线/好坏标准，再套单轮五要素或 Agent 四层骨架。",
    effect: "给一个任务和真实输入样例，产出角色-任务-流程-约束-输出格式齐全、带 Few-shot 和自检的可运行提示词",
    outputs: ["单轮五要素骨架", "Agent 四层架构", "Few-shot 设计", "调试与评测"],
    repoUrl: `${KIT}/prompt-writing`,
    group: "tool",
  },
  {
    slug: "dialogue-strategy-designer",
    title: "对话策略设计器",
    category: "SkillKit · AI 工程化",
    summary: "把业务调研结果转成可执行的对话战略地图：先判营销/服务场景选模型，再设计阶段蓝图、话术、异议处理和情绪分支。",
    effect: "给业务目标、人群和已核验事实，产出场景模型选择、阶段化策略蓝图、分状态话术和拒绝/情绪分支",
    outputs: ["场景与模型判定", "阶段策略蓝图", "分支话术", "验收观察点"],
    repoUrl: `${KIT}/dialogue-strategy-designer`,
    group: "tool",
  },
  {
    slug: "skill-creator",
    title: "Skill 创建器",
    category: "SkillKit · AI 工程化",
    summary: "把一套工作流封装成可调用、可执行、可验证、可发布的 Skill，质量标准在需求澄清阶段就前置成硬约束，而不是写完再补。",
    effect: "描述一个想固化的工作流，先产出创建前质量合同，再产出带触发边界、输入、流程、异常兜底和发布门槛的 SKILL.md",
    outputs: ["创建前质量合同", "触发与路由", "工作流约束", "发布门槛"],
    repoUrl: `${KIT}/skill-creator`,
    group: "tool",
  },
  {
    slug: "daily-report",
    title: "日报助手",
    category: "SkillKit · 职场提效",
    summary: "把零散的工作记录、聊天摘录和口述整理成可直接发送的中文工作日报，按结果和价值归类，不写成流水账，也不补造数字。",
    effect: "给一天的零散记录，产出今日完成、效果提升、问题处理、卡点支持和明日计划结构完整的日报",
    outputs: ["事实提取", "按结果归类", "标准日报结构", "输出前自检"],
    repoUrl: `${KIT}/daily-report`,
    group: "tool",
  },
]
