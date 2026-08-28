export type Project = {
  slug: string
  index: string
  title: string
  subtitle: string
  role: string
  duration: string
  summary: string
  result: string
  tags: string[]
  metrics: { value: string; label: string }[]
  challenge: string
  research: string[]
  solution: string[]
  aiStrategy: string[]
  reflection: string
  sourceUrl?: string
}

export type Methodology = {
  slug: string
  index: string
  title: string
  englishTitle: string
  summary: string
  suitableFor: string
  steps: { title: string; description: string; output: string }[]
  checklist: string[]
  example: string
  sourceUrl?: string
}

export const profile = {
  name: "杨惠雯",
  title: "AI 产品经理候选人",
  graduation: "2027 届",
  school: "上海理工大学 储能科学与工程",
  cities: "base 上海（可接受异地）",
  email: "Alarabyyang@163.com",
  phone: "18785177418",
  github: "https://github.com/Alaraby527",
  githubName: "Alaraby527",
  wechat: "Y1819664996",
  statement: [
    "一个从储能专业「跑偏」到产品路上的人",
    "大学前三年我一直在找自己到底想干什么 —— 写过小说、创过业、做过新媒体、接过 PPT 的活，甚至发过传单，实习方向也是五花八门，每一样都试过，但总觉得差点意思",
    "转折点是今年年初，我跟着一个视频用 Trae 做出了第一个个人网站，那种「想法居然真的能变成东西」的感觉让我很震惊。后来我索性脱产用扣子尝试搭一个求职平台 —— 因为我自己的求职路太坎坷了，我想做个产品帮到和我一样的人",
    "两周后我收到了腾讯的面邀，那场面试把我打醒了：我高估了 AI，也低估了做一个真正好用的产品有多难。这段经历让我对 AI 有了更清醒的认识 —— 我见识过它的强大，也清楚它的边界在哪里",
    "但也正是这次「碰壁」，让我更确定自己想要什么：我喜欢那种「我的产品真的帮到了人」的成就感",
    "我很幸运，第一次参加黑客松就拿到三等奖，还入选了抖音创变者计划社长。我想，我并不是因为产品经理这个岗位热门而追逐，而是因为当我真的能把想法落地，并真的有用时，这件事本身就让我兴奋",
  ],
}

export const projects: Project[] = [
  {
    slug: "jd-ai-shopping-guide-agent",
    index: "01",
    title: "京东 AI 导购 Agent",
    subtitle: "让导购从搜索走向对话式决策",
    role: "AI 产品实习生 · 立项与方案设计",
    duration: "2026.07—2026.08",
    summary: "面向京东零售黑电品类，设计 AI 导购 Agent，将传统搜索式购物转化为对话式决策体验，完成用户痛点分析、竞品调研与分步落地方案",
    result: "产出完整立项书与分步落地方案，明确 Agent 能力边界与用户控制点设计",
    tags: ["Agent", "导购", "C 端", "方案设计"],
    metrics: [{ value: "12 周", label: "系统化实习课程" }, { value: "5 节", label: "产品方法课交付" }, { value: "3 份", label: "立项书与作业产出" }],
    challenge: "黑电品类参数复杂、决策链路长，用户在搜索式购物中难以快速定位匹配需求的产品导购 Agent 要在“推荐准”与“可信任”之间找到平衡，同时避免过度介入用户决策",
    research: ["拆解京东零售黑电品类用户购物路径，定位参数理解与对比决策两类痛点", "完成直接/间接/潜在三层竞品调研，对比对话式导购与搜索式导购体验差异", "结合自身 27 届求职定位，锚定 C 端 AI 效率工具赛道进行人岗匹配分析"],
    solution: ["以“理解需求—澄清偏好—生成推荐—解释依据—反馈修正”构建对话式导购闭环", "在高不确定节点设计用户控制点（预览、确认、撤回），保留用户决策权", "按能力匹配与信任成本分步落地，先切入参数查询等低风险场景验证价值"],
    aiStrategy: ["用 AI 需求四问法澄清任务、用户、价值与边界，判断导购场景的 AI 化必要性", "以三维可行性评估（技术、业务、数据）确定 Agent 能力边界与参与模式", "区分自动执行、建议辅助与人机协作三种模式，匹配不同决策风险节点"],
    reflection: "课程点评指出我从“信息整理者”走向“产品设计者”的关键，在于补齐方案设计与策略落地能力导购 Agent 的核心不是替用户做决定，而是在正确节点提供正确粒度的辅助，让用户知道自己为什么选",
  },
  {
    slug: "msds-hazard-identification-workflow",
    index: "02",
    title: "MSDS 职业病危害因素智能识别",
    subtitle: "让文档审查从人工走向自动化",
    role: "测试实习生 · 工作流验证",
    duration: "2026.05—2026.06",
    summary: "面向 B 端用户，参与 MSDS 文件智能识别工作流测试，自动提取成分信息并匹配职业病危害因素知识库，降低人工审核成本",
    result: "完成工作流功能测试与验证，覆盖物质名称、CAS 编号、含量提取与知识库匹配链路",
    tags: ["工作流", "知识库", "B 端", "测试验证"],
    metrics: [{ value: "3 类", label: "提取字段覆盖" }, { value: "1 套", label: "知识库匹配规则" }, { value: "2 周", label: "测试验证周期" }],
    challenge: "MSDS 文件格式多样、字段位置不固定，物质识别与知识库匹配的准确性直接关系到职业病危害判定结果系统既要降低人工审核成本，又不能在关键判定上出错",
    research: ["梳理 B 端用户审核流程，明确物质名称、CAS 编号、含量三类核心提取字段", "对照《高毒物品目录》与内部化学物质知识库，理清判定逻辑与边界", "从测试视角识别工作流在格式多样文件上的识别盲区"],
    solution: ["工作流自动提取成分/组成信息中的物质名称、CAS 编号与含量", "匹配内部化学物质知识库，判定是否为职业病危害因素及是否列入高毒目录", "对低置信度识别结果保留人工复核入口，避免关键判定误报"],
    aiStrategy: ["以工作流串联提取—匹配—判定三段，降低单点模型误差传导", "用知识库结构化匹配替代纯生成式判定，保证结果可溯源", "通过测试样本回流困难案例，持续优化识别准确率"],
    reflection: "从测试视角看 AI 工作流，最深的体会是“可溯源”比“看起来准”更重要B 端合规场景里，错误代价高，AI 应该先保证不犯错，再谈提效",
  },
  {
    slug: "ai-dynamic-portfolio",
    index: "03",
    title: "AI 数字化动态简历",
    subtitle: "用 AI 工具从零搭建的作品集网站",
    role: "个人项目 · 全栈设计与落地",
    duration: "2026.07",
    summary: "运用 AI 工具完成网站搭建、图片生成与代码修改，搭建可动态展示项目经历与方法论沉淀的数字化作品集，整合飞书文档与 GitHub 知识库",
    result: "完成网站落地与部署，打通飞书个人经历文档与 GitHub 方法论仓库的内容集成",
    tags: ["AI 工具", "个人项目", "全栈", "内容运营"],
    metrics: [{ value: "1 套", label: "AI 工具链协作" }, { value: "15+ 篇", label: "方法论沉淀" }, { value: "8 个", label: "PM Skill 工具" }],
    challenge: "非计算机科班背景（储能科学与工程），需要在没有前端开发经验的前提下，独立完成一个设计感与功能兼顾的作品集网站，并把分散在飞书和 GitHub 的内容整合进来",
    research: ["梳理个人实习经历、课程作业与方法论沉淀，规划网站信息架构", "调研 AI 辅助建站工具链，确定图片生成、代码修改与部署的工作流", "对标优秀作品集网站，确定视觉风格与交互体验目标"],
    solution: ["用 AI 工具辅助生成页面代码与视觉素材，降低非技术背景的实现门槛", "以飞书文档作为个人经历与项目内容的单一数据源，GitHub 承载方法论沉淀", "设计玻璃拟态视觉与动效，让作品集本身成为 AI 工具落地能力的展示"],
    aiStrategy: ["用 AI 图片生成能力产出站点视觉资源，保证设计一致性", "用 AI 代码修改能力迭代页面结构，非技术背景也能完成全栈搭建", "把 AI 工具链协作过程本身沉淀为可复用的“AI 落地”案例"],
    reflection: "这个项目让我验证了一件事：AI 工具正在抹平“想法”与“落地”之间的技术鸿沟产品经理不需要会写每一行代码，但必须知道如何用 AI 把想法变成可运行的产品",
  },
  {
    slug: "box-office-data-analysis",
    index: "04",
    title: "专项票房数据分析",
    subtitle: "用数据讲清楚一部电影的票房故事",
    role: "数据分析 · 独立完成",
    duration: "2025.10—2025.12",
    summary: "运用 Python（Pandas/Numpy）、Matlab 与 SQL 完成专项票房数据收集、处理、可视化与分析，从排片、上座率、口碑等维度拆解票房表现",
    result: "产出完整票房数据分析报告，覆盖数据采集、清洗、可视化与归因全链路",
    tags: ["Python", "数据可视化", "SQL", "归因分析"],
    metrics: [{ value: "5+", label: "分析维度" }, { value: "3 类", label: "数据源整合" }, { value: "1 份", label: "完整分析报告" }],
    challenge: "票房数据分散在不同来源、口径不一，且票房表现受排片、档期、口碑、竞品等多因素叠加影响，单一指标难以解释真实表现",
    research: ["整合多源票房数据，统一字段口径与时间维度", "拆解排片占比、上座率、场均人次等核心指标", "结合口碑评分与社交媒体热度做交叉归因"],
    solution: ["用 Pandas 完成数据清洗与特征构建，SQL 完成多维查询", "用可视化呈现票房曲线、排片结构与口碑相关性", "从数据中提炼影响票房的关键变量与可解释结论"],
    aiStrategy: ["用数据分层与漏斗思路定位票房流失环节", "以 RFM 思路对影片受众做分层，辅助归因", "把分析过程沉淀为可复用的数据看板模板"],
    reflection: "数据分析的价值不在图表好看，而在能不能回答一个业务决策问题这次练习让我学会先定义问题，再选指标，最后才谈可视化",
  },
  {
    slug: "douyin-hackathon-ai-innovation",
    index: "05",
    title: "抖音黑客松 AI 创新",
    subtitle: "48 小时把一个 AI 想法跑通",
    role: "团队参赛 · 方案设计与落地",
    duration: "2026.06",
    summary: "参加抖音黑客松苏州姑苏站，在限时高压环境下完成 AI 创新方案设计与 demo 落地，获三等奖",
    result: "获抖音黑客松苏州姑苏站三等奖",
    tags: ["黑客松", "AI 创新", "团队协作", "限时落地"],
    metrics: [{ value: "48h", label: "限时开发" }, { value: "三等奖", label: "姑苏站成绩" }, { value: "1 个", label: "可运行 demo" }],
    challenge: "黑客松时间紧、资源少，既要在短时间内把模糊创意收敛成可落地方案，又要协调团队分工在截止前跑通 demo",
    research: ["快速调研赛道方向与评委关注点，锁定 AI 创新切入点", "盘点团队技能（设计、开发、运营），匹配最可能跑通的方案", "评估方案在 48 小时内的可行性边界"],
    solution: ["把方案拆成 MVP 必做与加分项，优先保证核心链路跑通", "用 AI 工具加速原型搭建与素材产出，压缩实现时间", "明确分工与里程碑节点，确保各模块按时合流"],
    aiStrategy: ["用 AI 工具链快速生成原型与演示素材", "在方案中设计 AI 参与的核心交互，而非只做包装", "以可演示的真实体验替代 PPT 讲故事"],
    reflection: "黑客松教会我“完成比完美重要”在资源受限时，产品经理的价值是判断哪些必须做、哪些可以砍，让团队有限的精力砸在最能打动评委的点上",
  },
  {
    slug: "ai-workflow-agent-building",
    index: "06",
    title: "AI 工作流与智能体搭建",
    subtitle: "从 Dify 到多场景 demo 的实操沉淀",
    role: "个人实践 · 工具落地",
    duration: "2026.03—2026.06",
    summary: "基于 Dify Chatflow 与 Workflow 搭建多个 AI 工作流与智能体 demo，覆盖客服、知识问答、内容生成等场景，沉淀可复用的搭建指南",
    result: "完成多个可运行 demo，沉淀 Dify Chatflow/Workflow 搭建指南与实操笔记",
    tags: ["Dify", "工作流", "智能体", "实操沉淀"],
    metrics: [{ value: "5+", label: "demo 场景" }, { value: "2 套", label: "搭建指南" }, { value: "多平台", label: "工具链覆盖" }],
    challenge: "AI 工作流工具链门槛低但“能跑”和“好用”差距大，如何在多场景下把 Chatflow/Workflow 用对、用准，并沉淀成可复用的方法论",
    research: ["梳理 Dify Chatflow 与 Workflow 的能力边界与适用场景", "对比纯 Prompt、工作流、智能体三种模式在不同任务上的表现", "收集真实使用中的失败案例，定位常见坑点"],
    solution: ["按场景选择 Chatflow（对话型）或 Workflow（流程型），而非一刀切", "在关键节点加入条件分支与人工确认，提升鲁棒性", "把搭建步骤、提示词与踩坑记录整理成可复用指南"],
    aiStrategy: ["用工作流编排替代单次大模型调用，降低不可控性", "结构化提示词按 5 要素框架（角色/任务/上下文/约束/输出）组织", "把每个 demo 的 Prompt 与流程沉淀为可复用资产"],
    reflection: "工具会用只是起点，真正的壁垒在于知道每个节点该用什么方法、出问题怎么调把实操沉淀成指南，是为了让下一次搭建更快、更稳",
    sourceUrl: "https://github.com/Alaraby527/AI-",
  },
  {
    slug: "content-operation-growth",
    index: "07",
    title: "内容运营与增长实践",
    subtitle: "从内容生产到多平台分发的增长闭环",
    role: "内容运营 · 独立执行",
    duration: "2025.06—2026.04",
    summary: "精通视频剪辑、文案编写与图文创作，熟悉抖音/小红书平台运营逻辑，完成内容优化、数据分析与多平台发布，跑通内容增长闭环",
    result: "建立多平台内容发布与数据复盘流程，沉淀内容优化与增长方法论",
    tags: ["内容运营", "抖音", "小红书", "增长"],
    metrics: [{ value: "2 个", label: "主力平台" }, { value: "多轮", label: "数据复盘迭代" }, { value: "1 套", label: "发布复盘流程" }],
    challenge: "多平台内容调性差异大，单纯搬运效果差；且内容生产容易陷入“有产出无增长”，难以从数据中找到改进方向",
    research: ["对比抖音与小红书的推荐逻辑、内容形态与用户预期差异", "统计历史内容数据，定位高互动内容的共性特征", "梳理从选题、生产、发布到复盘的完整链路瓶颈"],
    solution: ["按平台调性差异化生产，而非一稿多发", "用数据复盘定位标题、封面、节奏等可优化变量", "建立“发布—看数据—改下一轮”的快速迭代节奏"],
    aiStrategy: ["用 AI 辅助选题与文案初稿，保留人工判断与定稿", "用 AI 工具加速视频剪辑与图文素材产出", "把数据复盘接回内容生产入口，形成增长飞轮"],
    reflection: "内容运营和 AI 产品增长底层逻辑是一样的：不要沉迷产出量，要看每次产出是否让下一次更好把复盘接回生产，工具才从效率插件变成增长系统",
  },
]

export const methodologies: Methodology[] = [
  {
    slug: "ai-requirements-analysis",
    index: "M1",
    title: "AI 需求分析",
    englishTitle: "From Fuzzy Need to Standard PRD",
    summary: "把模糊的 AI 产品想法转化为清晰、可执行的需求文档，覆盖 AI 需求四问澄清法、三维可行性评估（技术/成本/合规）、三种 AI 参与模式设计与 MVP 方案规划",
    suitableFor: "AI 产品立项、需求澄清、可行性评估、PRD 撰写、MVP 设计",
    steps: [
      { title: "需求澄清", description: "用 AI 需求四问法把模糊想法变清晰：用户是谁、什么场景触发、当前怎么解决、AI 能不能解决", output: "需求定义" },
      { title: "可行性三维评估", description: "从技术可行性、成本可行性、合规可行性三个维度评估需求能否落地", output: "可行性评估矩阵" },
      { title: "AI 参与模式与方案设计", description: "在 Copilot 辅助、Agent 自主、插件工具三种模式中选择，设计上下文、Prompt、工具调用与兜底方案", output: "AI 产品方案 + MVP 规划" },
      { title: "输出需求文档", description: "按模板输出完整 AI 产品需求文档，含需求背景、功能方案、三维验收指标与风险应对", output: "标准化 PRD" },
    ],
    checklist: ["用户是谁、什么场景触发、当前怎么解决？", "模型能力是否支撑，需要什么技术栈？", "开发/运行/维护成本投入产出比如何？", "数据隐私、内容安全、行业合规有无风险？"],
    example: "在京东 AI 导购 Agent 立项中，用需求四问法区分参数查询与购买决策两类任务，对参数查询采用 Copilot 辅助模式、低风险决策采用 Agent 自主模式",
    sourceUrl: "https://github.com/Alaraby527/AI-",
  },
  {
    slug: "competitive-research",
    index: "M2",
    title: "竞品调研",
    englishTitle: "6-Step Systematic Research",
    summary: "系统性调研竞品、摸清赛道竞争格局的方法论，覆盖三层竞品分类、2C 产品实测与 2B 产品深研双路径，以及技术壁垒与差异化分析",
    suitableFor: "产品立项参考、功能对标、技术壁垒分析、面试竞品准备、赛道扫描",
    steps: [
      { title: "明确调研目标与范围", description: "确认调研目的（立项参考/功能对标/面试准备），划定直接、间接、潜在竞品范围", output: "调研目标与范围" },
      { title: "锁定竞品清单", description: "按三层分类法筛选竞品：直接竞品、间接竞品、潜在竞品/标杆，输出 3-8 个含入选理由", output: "竞品初选清单" },
      { title: "基础信息收集与功能对比", description: "收集产品定位、核心功能、AI 能力、定价与规模，输出竞品对比矩阵", output: "竞品对比矩阵" },
      { title: "深度测评", description: "2C 产品走 5 步实测法（注册→功能→边界→横向对比→能力评分），2B 产品走官网/价格/集成/方案/技术栈调研", output: "双路径测评结果" },
      { title: "技术壁垒与差异化分析", description: "回答三个核心问题：哪些能力有真门槛、各竞品差异化在哪、如果我们做的破局切入点在哪", output: "壁垒与破局分析" },
      { title: "输出调研报告", description: "按模板输出结构化报告，含竞品全景图、深度分析、横向对比矩阵与优先级建议", output: "结构化调研报告" },
    ],
    checklist: ["调研目标是否对应一个具体决策？", "是否覆盖了直接、间接、潜在三层竞品？", "2C 产品是否做了实测，2B 产品是否做了深研？", "是否分析了技术壁垒和破局机会？"],
    example: "在京东导购项目中对标对话式与搜索式导购竞品，用三层分类锁定直接竞品（AI 导购 Agent）与间接竞品（搜索+筛选器），发现对话式在参数理解上有体验优势",
    sourceUrl: "https://github.com/Alaraby527/AI-/blob/main/竞品分析完整框架模板.md",
  },
  {
    slug: "user-interview",
    index: "M3",
    title: "用户访谈",
    englishTitle: "6-Step Interview + 5Why + Coding",
    summary: "从访谈提纲设计到洞察结论输出的完整用户访谈方法论，覆盖半结构化访谈、5Why 追问法、出声思维与三级编码分析法",
    suitableFor: "用户研究、需求挖掘、产品验证、痛点分析",
    steps: [
      { title: "明确调研目标与研究假设", description: "明确访谈要回答的核心问题（3-5 个），列出可证伪的假设，区分探索性 vs 验证性访谈", output: "调研目标与假设" },
      { title: "确定目标用户与招募标准", description: "制定用户画像维度、纳入/排除标准与样本量（探索性 5-8 人可发现 80% 问题）", output: "招募标准与话术" },
      { title: "设计访谈提纲", description: "按开场破冰→用户背景→使用场景深挖→痛点与需求挖掘→方案验证→结尾结构设计半结构化提纲", output: "访谈提纲" },
      { title: "执行访谈", description: "用 5Why 追问法挖深层动机，出声思维法让用户边操作边说，避免引导性问题，访谈者说话不超过 30%", output: "访谈记录与关键引语" },
      { title: "访谈记录整理与编码", description: "逐字稿整理后做三级编码：开放式编码贴标签→主轴编码归类主题→选择性编码提炼核心洞察", output: "三级编码表" },
      { title: "输出洞察结论", description: "输出含用户画像、核心发现（配数据+引语）、痛点地图、需求优先级与行动建议的结论报告", output: "洞察结论报告" },
    ],
    checklist: ["是否明确了可证伪的假设？", "样本量是否足够（探索性至少 5-8 人）？", "追问是否用了 5Why 挖到深层动机？", "编码是否区分了开放、主轴、选择性三级？"],
    example: "在 MSDS 识别项目中访谈 B 端审核人员，用 5Why 追问发现“识别准”只是表层，真实痛点是“判定结果能否被审计追溯”，据此保留了人工复核入口",
    sourceUrl: "https://github.com/Alaraby527/AI-",
  },
  {
    slug: "product-experience-report",
    index: "M4",
    title: "产品体验报告",
    englishTitle: "Five-Element Layered Analysis",
    summary: "基于用户体验五要素模型，从战略层到表现层五层逐层拆解，系统性分析一款产品的设计思路和体验优劣",
    suitableFor: "产品拆解、竞品体验对标、面试产品分析、产品复盘",
    steps: [
      { title: "战略层——为什么做", description: "分析市场定位、目标用户、商业目标与用户需求，回答产品解决什么人的什么问题", output: "战略层分析结论" },
      { title: "范围层——做什么功能", description: "梳理功能全景图，区分核心与次要功能，标注 AI 能力边界，评估功能与战略的匹配度", output: "功能清单与分类" },
      { title: "结构层——功能怎么组织", description: "分析功能模块划分、信息架构、用户流程图，以及 AI 参与模式（Copilot/Agent/插件）", output: "模块结构图与流程图" },
      { title: "框架层——页面怎么排版", description: "分析页面布局逻辑、导航设计、交互方式与首屏设计目的", output: "页面框架分析" },
      { title: "表现层——长什么样", description: "分析视觉风格、配色方案、品牌元素与视觉细节处理", output: "视觉设计总结" },
    ],
    checklist: ["战略层是否回答了“为谁解决什么问题”？", "功能范围是否与战略对齐，AI 边界是否清晰？", "信息架构是否匹配用户心智模型？", "视觉与交互是否一致且可学习？"],
    example: "在京东导购竞品调研中，用五要素逐层拆解对话式与搜索式导购，发现两者在战略层一致，差异集中在结构层的决策路径与 AI 参与模式设计",
    sourceUrl: "https://github.com/Alaraby527/AI-/blob/main/产品结构分析-用户体验五要素笔记.md",
  },
  {
    slug: "data-analysis",
    index: "M5",
    title: "数据分析",
    englishTitle: "Event × Funnel × Cohort",
    summary: "产品数据分析方法论与三大模型组合工作流：事件监控发现异常→漏斗看转化流失→分层拆解定位根因，覆盖 RFM 用户价值分层与指标体系搭建",
    suitableFor: "指标异动排查、用户分层、增长归因、数据看板搭建、A/B 测试分析",
    steps: [
      { title: "明确分析目标与问题定义", description: "明确要回答的业务问题，判断问题类型（监控型/诊断型/决策型），确定时间范围与颗粒度", output: "分析目标定义" },
      { title: "事件分析——看大盘", description: "看核心指标趋势与同比环比，识别异常波动范围、变化幅度与拐点定位", output: "大盘趋势与异常点" },
      { title: "漏斗分析——看转化", description: "确定核心用户路径，拆分关键节点，计算各层转化率，找到流失最大的环节", output: "转化漏斗与流失点" },
      { title: "分层拆解——定位根因", description: "按渠道/地域/行为/RFM 等维度下钻，找到变化最大的细分维度定位根因", output: "根因定位报告" },
      { title: "输出分析报告", description: "按模板输出含核心结论、详细分析、原因验证、行动建议与后续跟进指标的报告", output: "数据分析报告" },
    ],
    checklist: ["分析目标是否对应一个业务决策问题？", "事件分析是否定位了异常拐点？", "漏斗是否覆盖用户真实路径而非假设路径？", "分层拆解是否找到了变化最大的细分维度？"],
    example: "在票房分析项目中用三大模型组合：事件分析定位上座率异常→漏斗拆解“排片—上座—复购”链路→分层拆解定位流失在复购环节，据此建议加大口碑运营投入",
    sourceUrl: "https://github.com/Alaraby527/AI-",
  },
  {
    slug: "usability-testing",
    index: "M6",
    title: "可用性测试",
    englishTitle: "Think-Aloud + Heuristic Eval",
    summary: "产品可用性测试全流程方法论，覆盖出声思维法、任务测试设计、问题严重程度四级分级、Nielsen 十大启发式评估与三大衡量指标（有效性/效率/满意度）",
    suitableFor: "新功能上线前验证、体验优化、竞品体验对比、无数据冷启动场景",
    steps: [
      { title: "确定测试目标与范围", description: "明确测试目标（发现问题/对比版本/评估水平），选择测试方法（形成性 vs 总结性、任务 vs 探索性）", output: "测试计划" },
      { title: "设计测试任务", description: "基于真实场景设计 5-8 个递进任务，避免引导性描述，每个任务含场景、目标与成功标准", output: "任务清单" },
      { title: "招募测试用户", description: "按 Nielsen 5 人法则招募 5-8 人，制定纳入/排除标准与用户激励方案", output: "招募标准与激励" },
      { title: "执行测试", description: "用出声思维法让用户边操作边说，测试者不指导不解释不纠错，记录卡顿点、错误操作与用户原话", output: "测试记录" },
      { title: "整理与分析", description: "收集问题并按四级分级（致命/严重/一般/轻微），统计频次，可选做 Nielsen 启发式评估分类", output: "问题清单（分级）" },
      { title: "输出测试报告", description: "按模板输出含测试概况、核心发现、问题清单（按严重程度排序）与改进建议的报告", output: "可用性测试报告" },
    ],
    checklist: ["任务是否基于真实场景而非测功能？", "是否用了出声思维法记录用户真实想法？", "问题是否按四级严重程度分级？", "结论是否对应具体改进项？"],
    example: "在 AI 导购 demo 中用出声思维法发现用户在“澄清偏好”环节犹豫最久，按严重程度分级为 1 级（严重），据此简化了提问数量与顺序",
    sourceUrl: "https://github.com/Alaraby527/AI-",
  },
  {
    slug: "ai-agent-evaluation",
    index: "M7",
    title: "AI Agent 评测集构建",
    englishTitle: "Golden Set + Multi-Dim Scoring",
    summary: "用黄金问题集与多维度评分构建 Agent 评测体系，让 Agent 能力可量化、可对比、可迭代",
    suitableFor: "Agent 产品上线、能力基线评估、版本回归测试",
    steps: [
      { title: "问题采集", description: "从真实用户提问与边界场景中采集黄金问题集，覆盖典型与长尾", output: "黄金问题集" },
      { title: "维度设计", description: "按正确性、完整性、可溯源性、安全性等维度定义评分标准", output: "评分维度表" },
      { title: "回归评测", description: "每次迭代用同一问题集回归评测，避免改 A 坏 B", output: "回归评测报告" },
      { title: "困难回流", description: "把失败样本回流到评测集，持续扩大覆盖与难度", output: "困难样本库" },
    ],
    checklist: ["评测集是否覆盖了典型与边界场景？", "评分维度是否可被多人独立判断一致？", "是否有回归机制防止能力回退？", "失败样本是否回流形成飞轮？"],
    example: "在 MSDS 工作流测试中，把识别失败的文件格式回流为评测样本，后续每次模型更新都回归验证，避免老格式识别回退",
    sourceUrl: "https://github.com/Alaraby527/AI-/blob/main/AI%20Agent%E8%AF%84%E6%B5%8B%E9%9B%86%E6%9E%84%E5%BB%BA%E6%96%B9%E6%B3%95%E8%AE%BA.md",
  },
  {
    slug: "knowledge-base-building",
    index: "M8",
    title: "知识库搭建方法论",
    englishTitle: "Recall + Content Governance",
    summary: "从召回测试规范到话术体系与素材整理，系统搭建可被 AI 调用的知识库，让答案有依据、可溯源",
    suitableFor: "RAG 知识库、客服话术库、企业内部问答",
    steps: [
      { title: "素材整理", description: "按主题与任务归集原始素材，建立统一结构化标签与版本", output: "素材目录与标签" },
      { title: "话术体系", description: "把碎片素材提炼为分层话术（事实/流程/经验），保证一致性", output: "分层话术库" },
      { title: "召回测试", description: "用黄金问题集测试召回准确率与排序质量，定位知识缺口", output: "召回测试报告" },
      { title: "缺口补齐", description: "根据召回失败定位知识缺口，定向补齐并更新评测集", output: "知识缺口看板" },
    ],
    checklist: ["素材是否按任务而非按来源组织？", "话术是否分层且口径统一？", "召回测试是否覆盖高频与困难问题？", "知识缺口是否有闭环补齐机制？"],
    example: "在 MSDS 项目中把化学物质知识库按危害判定、高毒目录、防护建议三层分层组织，召回测试发现高毒目录覆盖不全，定向补齐后匹配率明显提升",
    sourceUrl: "https://github.com/Alaraby527/AI-/blob/main/知识库搭建方法论-召回测试规范.md",
  },
]

export const getProject = (slug: string) => projects.find((item) => item.slug === slug)
export const getMethodology = (slug: string) => methodologies.find((item) => item.slug === slug)
