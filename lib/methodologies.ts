// 数据来源:D:/ai/ai/data/store.json(最新版方法论沉淀,经后台 CMS 维护)
// 本文件由脚本生成;展示样式见 app/methodologies/[slug]/page.tsx 与 components/supplement-section.tsx

export type Methodology = {
  slug: string
  index: string
  title: string
  englishTitle: string
  skillUrl?: string
  tagline?: string
  summary: string
  suitableFor: string
  steps: { title: string; description: string; output: string }[]
  checklist: string[]
  example: string
  sourceUrl?: string
}

export const methodologies: Methodology[] = [
  {
    "slug": "ai-requirements-analysis",
    "index": "M01",
    "title": "AI 需求分析",
    "englishTitle": "From Fuzzy Need to Standard PRD",
    "summary": "把模糊的 AI 产品想法转化为清晰、可执行的需求文档，覆盖 AI 需求四问澄清法、三维可行性评估（技术/成本/合规）、三种 AI 参与模式设计与 MVP 方案规划",
    "suitableFor": "AI 产品立项、需求澄清、可行性评估、PRD 撰写、MVP 设计",
    "steps": [
      {
        "title": "需求澄清",
        "description": "用 AI 需求四问法把模糊想法变清晰：用户是谁、什么场景触发、当前怎么解决、AI 能不能解决",
        "output": "需求定义"
      },
      {
        "title": "可行性三维评估",
        "description": "从技术可行性、成本可行性、合规可行性三个维度评估需求能否落地",
        "output": "可行性评估矩阵"
      },
      {
        "title": "AI 参与模式与方案设计",
        "description": "在 Copilot 辅助、Agent 自主、插件工具三种模式中选择，设计上下文、Prompt、工具调用与兜底方案",
        "output": "AI 产品方案 + MVP 规划"
      },
      {
        "title": "输出需求文档",
        "description": "按模板输出完整 AI 产品需求文档，含需求背景、功能方案、三维验收指标与风险应对",
        "output": "标准化 PRD"
      }
    ],
    "checklist": [
      "用户是谁、什么场景触发、当前怎么解决？",
      "模型能力是否支撑，需要什么技术栈？",
      "开发/运行/维护成本投入产出比如何？",
      "数据隐私、内容安全、行业合规有无风险？"
    ],
    "example": "在京东 AI 导购 Agent 立项中，用需求四问法明确任务（对话式导购）、用户（黑电/3C 品类消费者）、价值（降低参数理解与对比决策成本）、边界（不虚构参数、不超出自营范围）；三维可行性评估发现多轮意图识别准确率与立项目标存在约 4% 差距，通过口径对齐、100 条错误对话归因、分批落地三步折中解决，不轻易降标",
    "sourceUrl": "https://github.com/Alaraby527/AI-",
    "tagline": "把「我想做个AI」变成能动手的需求"
  },
  {
    "slug": "competitive-research",
    "index": "M02",
    "title": "竞品调研",
    "englishTitle": "6-Step Systematic Research",
    "summary": "系统性调研竞品、摸清赛道竞争格局的方法论，覆盖三层竞品分类、2C 产品实测与 2B 产品深研双路径，以及技术壁垒与差异化分析",
    "suitableFor": "产品立项参考、功能对标、技术壁垒分析、面试竞品准备、赛道扫描",
    "steps": [
      {
        "title": "明确调研目标与范围",
        "description": "确认调研目的（立项参考/功能对标/面试准备），划定直接、间接、潜在竞品范围",
        "output": "调研目标与范围"
      },
      {
        "title": "锁定竞品清单",
        "description": "按三层分类法筛选竞品：直接竞品、间接竞品、潜在竞品/标杆，输出 3-8 个含入选理由",
        "output": "竞品初选清单"
      },
      {
        "title": "基础信息收集与功能对比",
        "description": "收集产品定位、核心功能、AI 能力、定价与规模，输出竞品对比矩阵",
        "output": "竞品对比矩阵"
      },
      {
        "title": "深度测评",
        "description": "2C 产品走 5 步实测法（注册→功能→边界→横向对比→能力评分），2B 产品走官网/价格/集成/方案/技术栈调研",
        "output": "双路径测评结果"
      },
      {
        "title": "技术壁垒与差异化分析",
        "description": "回答三个核心问题：哪些能力有真门槛、各竞品差异化在哪、如果我们做的破局切入点在哪",
        "output": "壁垒与破局分析"
      },
      {
        "title": "输出调研报告",
        "description": "按模板输出结构化报告，含竞品全景图、深度分析、横向对比矩阵与优先级建议",
        "output": "结构化调研报告"
      }
    ],
    "checklist": [
      "调研目标是否对应一个具体决策？",
      "是否覆盖了直接、间接、潜在三层竞品？",
      "2C 产品是否做了实测，2B 产品是否做了深研？",
      "是否分析了技术壁垒和破局机会？"
    ],
    "example": "在京东 AI 导购立项中完成三层竞品调研：以淘宝问问、抖音电商 AI 为直接竞品，京东通用 AI 导购为基线，传统搜索+筛选器为间接竞品，用 5 步实测法对比追问逻辑、知识库展示、工具调用能力差异，输出竞品对比矩阵与 3 条 P0 差异化建议",
    "sourceUrl": "https://github.com/Alaraby527/AI-/blob/main/竞品分析完整框架模板.md",
    "tagline": "拆别人的产品，找自己的机会"
  },
  {
    "slug": "user-interview",
    "index": "M03",
    "title": "用户访谈",
    "englishTitle": "6-Step Interview + 5Why + Coding",
    "summary": "从访谈提纲设计到洞察结论输出的完整用户访谈方法论，覆盖半结构化访谈、5Why 追问法、出声思维与三级编码分析法",
    "suitableFor": "用户研究、需求挖掘、产品验证、痛点分析",
    "steps": [
      {
        "title": "明确调研目标与研究假设",
        "description": "明确访谈要回答的核心问题（3-5 个），列出可证伪的假设，区分探索性 vs 验证性访谈",
        "output": "调研目标与假设"
      },
      {
        "title": "确定目标用户与招募标准",
        "description": "制定用户画像维度、纳入/排除标准与样本量（探索性 5-8 人可发现 80% 问题）",
        "output": "招募标准与话术"
      },
      {
        "title": "设计访谈提纲",
        "description": "按开场破冰→用户背景→使用场景深挖→痛点与需求挖掘→方案验证→结尾结构设计半结构化提纲",
        "output": "访谈提纲"
      },
      {
        "title": "执行访谈",
        "description": "用 5Why 追问法挖深层动机，出声思维法让用户边操作边说，避免引导性问题，访谈者说话不超过 30%",
        "output": "访谈记录与关键引语"
      },
      {
        "title": "访谈记录整理与编码",
        "description": "逐字稿整理后做三级编码：开放式编码贴标签→主轴编码归类主题→选择性编码提炼核心洞察",
        "output": "三级编码表"
      },
      {
        "title": "输出洞察结论",
        "description": "输出含用户画像、核心发现（配数据+引语）、痛点地图、需求优先级与行动建议的结论报告",
        "output": "洞察结论报告"
      }
    ],
    "checklist": [
      "是否明确了可证伪的假设？",
      "样本量是否足够（探索性至少 5-8 人）？",
      "追问是否用了 5Why 挖到深层动机？",
      "编码是否区分了开放、主轴、选择性三级？"
    ],
    "example": "在 MSDS 识别项目中访谈 B 端审核人员，用 5Why 追问发现“识别准”只是表层需求，真实痛点是“判定结果能否被审计追溯”，据此保留了人工复核入口，低置信度结果不直接出判定",
    "sourceUrl": "https://github.com/Alaraby527/AI-",
    "tagline": "别猜用户怎么想，去问"
  },
  {
    "slug": "product-experience-report",
    "index": "M04",
    "title": "产品体验报告",
    "englishTitle": "Five-Element Layered Analysis",
    "summary": "基于用户体验五要素模型，从战略层到表现层五层逐层拆解，系统性分析一款产品的设计思路和体验优劣",
    "suitableFor": "产品拆解、竞品体验对标、面试产品分析、产品复盘",
    "steps": [
      {
        "title": "战略层——为什么做",
        "description": "分析市场定位、目标用户、商业目标与用户需求，回答产品解决什么人的什么问题",
        "output": "战略层分析结论"
      },
      {
        "title": "范围层——做什么功能",
        "description": "梳理功能全景图，区分核心与次要功能，标注 AI 能力边界，评估功能与战略的匹配度",
        "output": "功能清单与分类"
      },
      {
        "title": "结构层——功能怎么组织",
        "description": "分析功能模块划分、信息架构、用户流程图，以及 AI 参与模式（Copilot/Agent/插件）",
        "output": "模块结构图与流程图"
      },
      {
        "title": "框架层——页面怎么排版",
        "description": "分析页面布局逻辑、导航设计、交互方式与首屏设计目的",
        "output": "页面框架分析"
      },
      {
        "title": "表现层——长什么样",
        "description": "分析视觉风格、配色方案、品牌元素与视觉细节处理",
        "output": "视觉设计总结"
      }
    ],
    "checklist": [
      "战略层是否回答了“为谁解决什么问题”？",
      "功能范围是否与战略对齐，AI 边界是否清晰？",
      "信息架构是否匹配用户心智模型？",
      "视觉与交互是否一致且可学习？"
    ],
    "example": "在京东 AI 导购竞品调研中用五要素拆解淘宝问问与抖音电商 AI：战略层定位对话式购物助手，范围层核心是多轮追问+商品卡片推荐，结构层对话流中穿插商品链接，框架层首屏直接引导提问，表现层弱化广告感；对比发现两者在参数解释深度和自营履约引导上的差异",
    "sourceUrl": "https://github.com/Alaraby527/AI-/blob/main/产品结构分析-用户体验五要素笔记.md",
    "tagline": "五层拆解一款产品好不好用"
  },
  {
    "slug": "data-analysis",
    "index": "M05",
    "title": "数据分析",
    "englishTitle": "Event × Funnel × Cohort",
    "summary": "产品数据分析方法论与三大模型组合工作流：事件监控发现异常→漏斗看转化流失→分层拆解定位根因，覆盖 RFM 用户价值分层与指标体系搭建",
    "suitableFor": "指标异动排查、用户分层、增长归因、数据看板搭建、A/B 测试分析",
    "steps": [
      {
        "title": "明确分析目标与问题定义",
        "description": "明确要回答的业务问题，判断问题类型（监控型/诊断型/决策型），确定时间范围与颗粒度",
        "output": "分析目标定义"
      },
      {
        "title": "事件分析——看大盘",
        "description": "看核心指标趋势与同比环比，识别异常波动范围、变化幅度与拐点定位",
        "output": "大盘趋势与异常点"
      },
      {
        "title": "漏斗分析——看转化",
        "description": "确定核心用户路径，拆分关键节点，计算各层转化率，找到流失最大的环节",
        "output": "转化漏斗与流失点"
      },
      {
        "title": "分层拆解——定位根因",
        "description": "按渠道/地域/行为/RFM 等维度下钻，找到变化最大的细分维度定位根因",
        "output": "根因定位报告"
      },
      {
        "title": "输出分析报告",
        "description": "按模板输出含核心结论、详细分析、原因验证、行动建议与后续跟进指标的报告",
        "output": "数据分析报告"
      }
    ],
    "checklist": [
      "分析目标是否对应一个业务决策问题？",
      "事件分析是否定位了异常拐点？",
      "漏斗是否覆盖用户真实路径而非假设路径？",
      "分层拆解是否找到了变化最大的细分维度？"
    ],
    "example": "在京东 AI 导购项目中拆解京东 3C 售前真实日志，整理“推荐学生用的相机”“便宜点的相机”等残缺 Query，分析 AI 直接推荐导致的性能错配、预期不符、场景不匹配等风险，为追问话术设计提供依据；另在专项票房分析中用 Pandas/SQL 从排片、上座率、口碑多维度交叉归因",
    "sourceUrl": "https://github.com/Alaraby527/AI-",
    "tagline": "用数据定位问题，不靠感觉"
  },
  {
    "slug": "usability-testing",
    "index": "M06",
    "title": "可用性测试",
    "englishTitle": "Think-Aloud + Heuristic Eval",
    "summary": "产品可用性测试全流程方法论，覆盖出声思维法、任务测试设计、问题严重程度四级分级、Nielsen 十大启发式评估与三大衡量指标（有效性/效率/满意度）",
    "suitableFor": "新功能上线前验证、体验优化、竞品体验对比、无数据冷启动场景",
    "steps": [
      {
        "title": "确定测试目标与范围",
        "description": "明确测试目标（发现问题/对比版本/评估水平），选择测试方法（形成性 vs 总结性、任务 vs 探索性）",
        "output": "测试计划"
      },
      {
        "title": "设计测试任务",
        "description": "基于真实场景设计 5-8 个递进任务，避免引导性描述，每个任务含场景、目标与成功标准",
        "output": "任务清单"
      },
      {
        "title": "招募测试用户",
        "description": "按 Nielsen 5 人法则招募 5-8 人，制定纳入/排除标准与用户激励方案",
        "output": "招募标准与激励"
      },
      {
        "title": "执行测试",
        "description": "用出声思维法让用户边操作边说，测试者不指导不解释不纠错，记录卡顿点、错误操作与用户原话",
        "output": "测试记录"
      },
      {
        "title": "整理与分析",
        "description": "收集问题并按四级分级（致命/严重/一般/轻微），统计频次，可选做 Nielsen 启发式评估分类",
        "output": "问题清单（分级）"
      },
      {
        "title": "输出测试报告",
        "description": "按模板输出含测试概况、核心发现、问题清单（按严重程度排序）与改进建议的报告",
        "output": "可用性测试报告"
      }
    ],
    "checklist": [
      "任务是否基于真实场景而非测功能？",
      "是否用了出声思维法记录用户真实想法？",
      "问题是否按四级严重程度分级？",
      "结论是否对应具体改进项？"
    ],
    "example": "在京东 AI 导购 demo 测试中用出声思维法让用户走查 4 条残缺 Query 的追问流程，发现用户在“澄清偏好”环节犹豫最久（平均停顿 8 秒），按严重程度分级为 1 级，据此将追问从 4 个问题精简为 2 个必问+1 个选问",
    "sourceUrl": "https://github.com/Alaraby527/AI-",
    "tagline": "看人用，比自己想有用"
  },
  {
    "slug": "survey-questionnaire",
    "index": "M07",
    "title": "调研问卷设计",
    "englishTitle": "Question Design + Sampling",
    "tagline": "问对问题，才能得到真答案",
    "summary": "问卷不是「想到什么问什么」，而是用问题验证假设。从火花工坊 24 份问卷的实战中沉淀：先定义要验证什么，再设计题目，最后才是发放。",
    "suitableFor": "需要定量验证用户痛点/需求优先级/满意度，但不知道问卷怎么设计才科学",
    "steps": [
      {
        "title": "定义验证目标",
        "description": "列出 3-5 个可证伪的假设，问卷只服务于这些假设，不搭车问无关问题",
        "output": "假设清单"
      },
      {
        "title": "设计题目结构",
        "description": "筛选题→行为题→态度题→开放题，敏感问题放后面，选项互斥且完备",
        "output": "问卷初稿"
      },
      {
        "title": "小范围试填",
        "description": "找 3-5 人试填，观察卡顿和歧义，每题检查「用户会不会理解成别的意思」",
        "output": "试填反馈记录"
      },
      {
        "title": "发放与回收",
        "description": "按目标人群选渠道，样本量至少 30 份才有统计意义，注意过滤无效问卷",
        "output": "有效样本"
      },
      {
        "title": "交叉分析",
        "description": "按人群维度交叉分析，不只看整体比例，找差异最大的细分群体",
        "output": "分析结论"
      }
    ],
    "checklist": [
      "每个问题都对应一个假设",
      "选项互斥且包含「其他」",
      "没有引导性表述",
      "试填过至少 3 人",
      "开放题不超过 3 个"
    ],
    "example": "火花工坊项目用问卷验证「用户需要系统课程」这个假设，结果 67% 用户反馈课程「不落地」，直接推翻了团队的运营方向。",
    "hasSkill": false
  },
  {
    "slug": "skill-quality-checker",
    "index": "M08",
    "title": "Skill 质量检测",
    "englishTitle": "8-Dimension Skill Audit",
    "tagline": "8个维度审计Skill能不能用",
    "summary": "从触发准确率、回答质量、工具调用、异常处理等 8 个维度审计 AI Skill 是否达到可上线标准，避免「能跑但不好用」。",
    "suitableFor": "AI Skill/Agent 上线前的质量把关，或对已有 Skill 做系统性体检",
    "steps": [
      {
        "title": "明确 Skill 定位",
        "description": "先定义这个 Skill 解决什么问题、目标用户是谁、成功标准是什么",
        "output": "Skill 定位卡"
      },
      {
        "title": "8 维度走查",
        "description": "触发/理解/回答/工具/上下文/异常/安全/体验，每个维度用测试用例验证",
        "output": "走查评分表"
      },
      {
        "title": "构建测试用例集",
        "description": "典型问题+边界问题+恶意输入各占三分之一，覆盖高频和长尾",
        "output": "测试用例集"
      },
      {
        "title": "问题分级与修复",
        "description": "按致命/严重/一般/轻微分级，致命问题必须修复才能上线",
        "output": "修复清单"
      },
      {
        "title": "回归验证",
        "description": "修复后用同一用例集回归，确保不「改 A 坏 B」",
        "output": "回归报告"
      }
    ],
    "checklist": [
      "触发准确率≥90%",
      "回答有来源标注",
      "工具调用失败有兜底",
      "边界问题会拒答",
      "无安全合规风险"
    ],
    "example": "在火花工坊 Skill 商店审核中，用 8 维度走查发现 30% 的 Skill 存在「触发但不回答」的致命问题，阻止了低质量 Skill 上线。",
    "hasSkill": true,
    "skillUrl": "https://github.com/Alaraby527/ai-pm-skills"
  },
  {
    "slug": "prompt-engineering",
    "index": "M09",
    "title": "Prompt 工程",
    "englishTitle": "Versioned Prompt System",
    "tagline": "让大模型稳定输出的系统方法",
    "summary": "Prompt 不是写几句提示词，而是版本管理、离线评测、灰度放量和回滚的系统工程。从京东 6 套 Agent Prompt 的实战中沉淀。",
    "suitableFor": "需要让大模型在业务场景中稳定、可控、可迭代地输出",
    "steps": [
      {
        "title": "定义输出标准",
        "description": "先写清楚「好的输出长什么样」，包括格式、约束、禁止项，再写 Prompt",
        "output": "输出标准文档"
      },
      {
        "title": "结构化 Prompt",
        "description": "按角色/任务/上下文/约束/示例/输出格式六段式组织，而非一段话堆给模型",
        "output": "Prompt 初稿"
      },
      {
        "title": "版本管理",
        "description": "每次修改记录版本号、修改原因和评测结果，像管理代码一样管理 Prompt",
        "output": "Prompt 版本表"
      },
      {
        "title": "离线评测",
        "description": "用黄金问题集跑 A/B 对比，量化准确率、完整性、拒答率，不靠感觉判断好坏",
        "output": "评测对比报告"
      },
      {
        "title": "灰度与回滚",
        "description": "小流量验证→逐步放量，准备 10 分钟回滚机制，线上指标异常立即回退",
        "output": "灰度方案"
      }
    ],
    "checklist": [
      "有版本号和修改记录",
      "有离线评测集",
      "有明确的禁止项",
      "有兜底/拒答逻辑",
      "有回滚方案"
    ],
    "example": "京东项目 6 套 Prompt 各有独立版本号和评测子集，一次 Prompt 优化导致优惠计算 Bad Case 上升，10 分钟内回滚到上一版本。",
    "hasSkill": false
  },
  {
    "slug": "rag-knowledge-base",
    "index": "M10",
    "title": "RAG 知识库搭建",
    "englishTitle": "Layered KB + Hybrid Retrieval",
    "tagline": "让AI回答有依据、不编造",
    "summary": "RAG 的核心不是接个向量数据库，而是切片策略、标签体系、更新 SOP 和来源溯源。从京东六层知识库和微信 RAG 两个项目中沉淀。",
    "suitableFor": "需要让 AI 基于私有/领域知识准确回答，且不能编造",
    "steps": [
      {
        "title": "知识分层",
        "description": "按更新频次和内容类型分层（如参数/商品/促销/履约），不同层用不同切片和更新策略",
        "output": "知识库分层方案"
      },
      {
        "title": "切片策略",
        "description": "结构化内容按字段切，语义内容按主题切，固定内容按问答对切，设置重叠窗口避免断句",
        "output": "切片规则"
      },
      {
        "title": "混合检索",
        "description": "BM25 关键词+向量语义混合检索，设置 TopK 和相似度阈值，低分时拒答而非硬答",
        "output": "检索配置"
      },
      {
        "title": "来源标注",
        "description": "强制要求模型引用来源段落，用户可溯源，无来源时拒答",
        "output": "引用格式规范"
      },
      {
        "title": "更新 SOP",
        "description": "定义谁更新、多久更新、怎么验证更新后效果，配套跨部门 SLA",
        "output": "更新 SOP"
      }
    ],
    "checklist": [
      "知识分层且更新频次明确",
      "切片策略适配内容类型",
      "混合检索+阈值过滤",
      "回答强制带来源",
      "有更新 SOP 和评测回归"
    ],
    "example": "京东项目六层知识库+混合检索把匹配准确率从 78% 拉到 93%；微信 RAG 项目通过修复切片和索引污染把检索通过率从 5/15 提到 15/15。",
    "hasSkill": false
  },
  {
    "slug": "agent-design",
    "index": "M11",
    "title": "Agent 设计",
    "englishTitle": "Capability Boundary + HITL",
    "tagline": "AI能做什么、不能做什么、出错怎么办",
    "summary": "Agent 设计的核心是定义能力边界和出错兜底：AI 能做什么、不能做什么、什么时候必须让人介入。",
    "suitableFor": "设计多步推理、工具调用、多角色协作的 AI Agent",
    "steps": [
      {
        "title": "三维可行性评估",
        "description": "从技术可行性、业务可行性、数据可行性评估哪些环节适合 Agent 自主完成",
        "output": "能力边界定义"
      },
      {
        "title": "参与模式划分",
        "description": "低风险自动执行、中风险建议+用户确认、高风险必须人机协作，按风险等级分级",
        "output": "参与模式矩阵"
      },
      {
        "title": "工具链设计",
        "description": "定义 Agent 可调用的工具、调用顺序、失败重试和超时策略，全链路可追溯",
        "output": "工具调用规范"
      },
      {
        "title": "兜底设计",
        "description": "未命中拒答、工具失败转人工、多轮断裂时主动确认，每个失败路径都有出口",
        "output": "兜底方案"
      },
      {
        "title": "可观测性",
        "description": "记录每步决策、工具调用和结果，Bad Case 可回放可归因",
        "output": "日志与看板"
      }
    ],
    "checklist": [
      "能力边界有明确清单",
      "高风险操作有人工确认",
      "工具失败有兜底",
      "未命中会拒答",
      "全链路日志可追溯"
    ],
    "example": "京东导购 Agent 按风险分三级：参数查询自动执行，推荐建议需确认，以旧换新/退换货必须转人工。",
    "hasSkill": false
  },
  {
    "slug": "ai-evaluation",
    "index": "M12",
    "title": "AI 评测体系",
    "englishTitle": "Golden Set + Regression",
    "tagline": "用黄金问题集量化AI能力",
    "summary": "没有评测集的 AI 产品就是在裸奔。用黄金问题集量化能力边界，每次迭代回归验证，避免「改 A 坏 B」。",
    "suitableFor": "任何需要量化 AI 输出质量、跟踪迭代效果、防止退化的场景",
    "steps": [
      {
        "title": "定义评测维度",
        "description": "正确性、完整性、可溯源性、安全性、时效性，按业务优先级确定权重",
        "output": "评分维度表"
      },
      {
        "title": "构建黄金问题集",
        "description": "从真实日志采集典型题+边界题+对抗题，覆盖高频和长尾，持续扩充",
        "output": "黄金问题集"
      },
      {
        "title": "标注标准答案",
        "description": "每题标注正确答案、可接受变体和拒答条件，多人标注取一致",
        "output": "标注数据"
      },
      {
        "title": "回归评测",
        "description": "每次 Prompt/模型/知识库改动后跑同一问题集，对比版本间差异",
        "output": "回归报告"
      },
      {
        "title": "困难样本回流",
        "description": "线上 Bad Case 定期回流评测集，扩大覆盖和难度",
        "output": "回流记录"
      }
    ],
    "checklist": [
      "评测集覆盖典型+边界+对抗",
      "有明确评分标准",
      "每次改动必跑回归",
      "Bad Case 定期回流",
      "线上线下口径对齐"
    ],
    "example": "京东项目 200 条评测集覆盖 6 类场景，每次 Prompt 改动跑回归；微信 RAG 15 题评测集三类各 5 题，通过率 15/15。",
    "hasSkill": false
  },
  {
    "slug": "context-engineering",
    "index": "M13",
    "title": "上下文工程",
    "englishTitle": "Slot-based Context Management",
    "tagline": "多轮对话不丢关键信息",
    "summary": "多轮对话最大的敌人是「忘事」。用槽位管理关键信息，控制上下文窗口，让 Agent 在第 10 轮还记得用户第 1 轮说的预算。",
    "suitableFor": "多轮对话、复杂任务拆解、长链路 Agent 的上下文管理",
    "steps": [
      {
        "title": "识别关键槽位",
        "description": "列出对话中必须记住的关键信息（预算、品类、偏好等），定义槽位结构",
        "output": "槽位定义表"
      },
      {
        "title": "槽位填充策略",
        "description": "每轮对话后提取/更新槽位，缺失槽位在合适时机主动追问",
        "output": "槽位填充逻辑"
      },
      {
        "title": "上下文窗口管理",
        "description": "系统提示+槽位+最近 N 轮+检索结果，按优先级压缩，超出窗口时摘要旧轮次",
        "output": "上下文预算方案"
      },
      {
        "title": "断裂检测",
        "description": "检测用户切换话题或槽位冲突，主动确认而非默默覆盖",
        "output": "断裂检测规则"
      },
      {
        "title": "注入与验证",
        "description": "每轮把槽位信息注入 Prompt，验证模型是否正确使用了槽位数据",
        "output": "注入模板"
      }
    ],
    "checklist": [
      "关键信息槽位化",
      "槽位缺失会追问",
      "上下文有预算控制",
      "话题切换会确认",
      "槽位注入有验证"
    ],
    "example": "京东导购 Agent 第 4 轮经常忘记用户预算，根因是上下文溢出。把预算/品类/偏好槽位化后每轮注入，多轮断裂 Bad Case 下降 70%。",
    "hasSkill": false
  },
  {
    "slug": "intent-recognition",
    "index": "M14",
    "title": "意图识别设计",
    "englishTitle": "Intent Taxonomy + Fallback",
    "tagline": "听懂用户到底想干什么",
    "summary": "意图识别不是分类器的事，产品经理要定义意图体系、兜底逻辑和误判代价。用户说「给孩子上网课用的」时，系统该知道这是在说品类。",
    "suitableFor": "对话式 AI 的意图分类、路由设计、口语化表达处理",
    "steps": [
      {
        "title": "定义意图体系",
        "description": "从真实日志中聚类用户意图，区分主意图/子意图/边界意图，定义每个意图的处理策略",
        "output": "意图分类体系"
      },
      {
        "title": "设计追问逻辑",
        "description": "意图不明确时不是猜，而是设计最短追问路径澄清，最多追问 N 轮",
        "output": "追问话术树"
      },
      {
        "title": "口语化表达处理",
        "description": "收集口语化/省略/隐含表达，建立同义映射和场景推断规则",
        "output": "口语化表达库"
      },
      {
        "title": "兜底与转人工",
        "description": "低置信度不硬答，按意图风险等级选择追问/推荐/转人工",
        "output": "兜底策略"
      },
      {
        "title": "误判归因",
        "description": "定期分析误判 Case，区分意图定义问题/训练数据问题/模型能力问题",
        "output": "误判归因报告"
      }
    ],
    "checklist": [
      "意图体系来自真实日志",
      "低置信度有兜底",
      "追问有轮次上限",
      "口语化表达有覆盖",
      "误判有归因闭环"
    ],
    "example": "京东项目中「给孩子上网课用的」这类场景化表达意图误判率 12%，通过建立场景→品类映射规则降低到 4%。",
    "hasSkill": false
  }
]

export const getMethodology = (slug: string) => methodologies.find((item) => item.slug === slug)
