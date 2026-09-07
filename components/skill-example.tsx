import { ExternalLink, FileText } from "lucide-react"

// 每个 Skill“跑一次”真正交付的成品文档（不是会产出什么的说明）
// 内容取自各 Skill 仓库 references/examples、实跑产出 outputs/ 与真实求职跑批案例，按成品结构节选
export type ArtifactTable = { head: string[]; rows: string[][] }
export type ArtifactSection = {
  h?: string
  p?: string
  bullets?: string[]
  table?: ArtifactTable
  quote?: string
}
export type SkillArtifact = {
  doc: string
  scene: string
  tag: string
  sections: ArtifactSection[]
  fullUrl?: string
  fullLabel?: string
}

export const skillArtifacts: Record<string, SkillArtifact> = {
  "ai-requirements-analysis": {
    doc: "《AI 智能客服需求文档（PRD）》",
    scene: "输入只有一句“我们想做个 AI 智能客服降本提效”",
    tag: "Skill 示例库成品",
    sections: [
      {
        h: "一、需求目标（被量化）",
        table: {
          head: ["维度", "目标", "衡量方式"],
          rows: [
            ["业务", "70% 常见问题 AI 自动解答，人工成本降 30%", "财务/排班对比"],
            ["用户", "平均响应 5 分钟 → 30 秒内", "系统日志"],
            ["验收", "解答准确率 ≥85%，满意度 ≥4.2/5", "每日抽 100 条评测"],
          ],
        },
      },
      {
        h: "二、AI 参与边界（人机分工表）",
        table: {
          head: ["环节", "AI", "人"],
          rows: [
            ["意图识别 / FAQ", "自动分类、知识库直答", "处理识别错误"],
            ["售后退款操作", "引导流程，简单情况自动办", "复杂/特殊情况介入"],
            ["投诉与情绪问题", "安抚后转人工", "人工跟进"],
          ],
        },
        p: "兜底：置信度 <60% 直接转人工；连续 2 次不满意转人工；用户说“人工”立即转接。",
      },
      {
        h: "三、MVP 范围与迭代路线",
        bullets: [
          "V1.0 必做：Top50 FAQ + 订单查询 + 转人工；先不做 RAG 长文档、多轮、多语言",
          "2 周开发 + 2 周灰度，先验证 Top50 问题准确率 ≥80%",
          "V1.1 接 RAG 知识库 → V2.0 Agent 自主操作，问题覆盖率 30%→70%+",
        ],
      },
    ],
  },
  "competitive-research": {
    doc: "《火花工坊 HuohuaHub 竞品分析报告》",
    scene: "输入“火花工坊做创作者社区运营平台，三层竞品选谁、差异化往哪切”",
    tag: "真实项目产出",
    fullUrl: "/reports/huohua-competitive-analysis.html",
    fullLabel: "查看完整报告",
    sections: [
      {
        h: "一、三层竞品清单（先分清对手和老师）",
        table: {
          head: ["分类", "产品", "定位内核"],
          rows: [
            ["直接竞品", "Coze / Dify / LiblibAI", "造工具的平台：Bot 开发、LLM 应用、创作社区"],
            ["间接竞品", "知识星球 / 小报童 / 生财有术", "付费私域社群，真正抢用户和预算"],
            ["潜在标杆", "Notion AI / Discord / 得到", "借鉴 AI 嵌入、Bot 生态、成长体系"],
          ],
        },
      },
      {
        h: "二、六维 UX 评分（S/A/B/C，己方自评）",
        table: {
          head: ["维度", "Coze", "Dify", "Liblib", "火花"],
          rows: [
            ["上手门槛", "S", "A", "A", "B+"],
            ["功能完整度", "A", "A", "S", "B"],
            ["生态与分发", "S", "A", "S", "B-"],
            ["综合", "A-", "A-", "A", "B+"],
          ],
        },
      },
      {
        h: "三、关键洞察与破局（带优先级）",
        bullets: [
          "核心判断：直接竞品与己方用户重叠很低，它们服务“造工具的人”；真正对手是私域社群——Coze/Dify 当技术底座，不当对手",
          "差异化空位：带出处 RAG 三家都没做深（528 张课件 OCR、15/15 通过）；运营自动化是唯一 S 级优势（周复盘 2h→3min、工作台 30min→5min）",
          "战略象限：当前在“高自动化×低生态”，目标是向右上无人占据的“高自动化×高生态”移动",
          "P0：3 个工作流做成可 Fork 模板、RAG 扩到全平台、成长体系显性化、核心能力 Bot 化",
        ],
      },
    ],
  },
  "user-interview": {
    doc: "《AI 写作助手用户访谈提纲与洞察报告》",
    scene: "输入“验证 AI 辅助深度写作的需求成不成立，约了 8 位用户”",
    tag: "Skill 示例库成品",
    sections: [
      {
        h: "一、半结构化提纲（场景深挖段）",
        bullets: [
          "最近一次用 AI 写是什么时候、什么内容？先做了什么？结果直接用还是改很多？",
          "什么情况用 AI、什么情况自己写？写之前给它什么信息？",
          "有没有 AI 写的完全不能用的时候？提三个改进建议会提什么？",
        ],
      },
      {
        h: "二、三级编码后的核心洞察",
        p: "洞察 1：用户要的是“提速”而非“替代”——8/8 表示一定要改，其中 6 人改动幅度 >50%。",
        quote: "“只拿它搭个框架，内容基本都要重写，但搭框架这步确实省时间。”—— U03 内容运营",
      },
      {
        p: "洞察 2：真痛点是“不知道怎么让 AI 写对”（6/8，75%），机会不在更强模型，在降门槛：模板、引导式提问、自动优化 Prompt。",
      },
    ],
  },
  "product-experience-report": {
    doc: "《Keep 产品体验报告（用户体验五要素）》",
    scene: "输入“按五要素拆 Keep，看哪些设计能直接借鉴”",
    tag: "Skill 示例库成品",
    sections: [
      {
        h: "战略层 → 范围层",
        bullets: [
          "定位“在家健身”，不与健身房正面竞争；核心用户是没时间/没钱去健身房的都市白领",
          "课程训练是绝对核心，不做社交 IM、早期不碰硬件；商城是合理的商业化延伸",
        ],
      },
      {
        h: "结构层 → 框架层",
        bullets: [
          "底部 5 Tab，正中凸起“开始训练”，3 步内开课，降低启动成本",
          "需求明确走搜索、需求模糊走推荐；问题：“推荐”与“发现课程”重叠、顶部 Tab 过多",
        ],
      },
      {
        h: "表现层与结论",
        p: "用低饱和柔和配色替代健身品类常见的高饱和大红，弱化“燃脂焦虑”，传递“轻松健身”，是聪明的品牌差异化。",
        bullets: ["最值得学：战略清晰 / 核心突出 / 品牌差异化", "综合评分 8.5/10"],
      },
    ],
  },
  "data-analysis": {
    doc: "《次日留存下跌 7pp 根因分析报告》",
    scene: "输入“7/15 起次日留存从 45% 跌到 38%，帮我找原因”",
    tag: "Skill 示例库成品",
    sections: [
      {
        h: "第一步：先排除数据问题",
        bullets: ["埋点口径没变、DAU 没跌反而略升；次日/3 日/7 日全跌 → 锁定为新用户质量问题"],
      },
      {
        h: "第二步：渠道分层定位",
        table: {
          head: ["渠道", "前留存", "后留存", "变化", "新增占比"],
          rows: [
            ["应用商店", "48%", "47%", "-1pp", "30%"],
            ["投放渠道 A", "42%", "28%", "-14pp", "25%"],
            ["投放 B", "40%", "38%", "-2pp", "15%"],
          ],
        },
        p: "渠道 A 留存 -14pp、占新增 25%，且新增量反涨 1.5 倍，足以解释大盘下跌。",
      },
      {
        h: "第三步：行为对比 + 根因 + 行动",
        table: {
          head: ["行为指标", "渠道 A 新用户", "其他渠道"],
          rows: [
            ["首次使用时长", "2.3 分钟", "8.5 分钟"],
            ["核心功能使用率", "12%", "45%"],
            ["注册完成率", "65%", "88%"],
          ],
        },
        bullets: [
          "根因：渠道 A 换素材夸大宣传 + 定向放宽（不排除刷量）；25%×14pp≈3.5pp，与大盘跌幅吻合",
          "P0 收紧渠道 A 并查刷量走赔付；P1 建渠道质量监控看板与告警阈值",
        ],
      },
    ],
  },
  "usability-testing": {
    doc: "《“长文写作”功能可用性测试报告》",
    scene: "输入“上线前找 6 个用户做一轮可用性测试”",
    tag: "Skill 示例库成品",
    sections: [
      {
        h: "一、任务完成率",
        table: {
          head: ["任务", "完成率", "未完成"],
          rows: [
            ["写短文 / 生成大纲", "100%", "0"],
            ["基于大纲写长文", "67%", "2"],
            ["调整大纲结构", "17%", "5"],
          ],
        },
      },
      {
        h: "二、按严重程度分级的核心问题",
        bullets: [
          "P01“生成”语义歧义，4/6 以为是续写 → 改名“重新生成”+ 加醒目“继续写”",
          "P02 大纲可拖拽编辑但 6/6 完全没发现（缺可感知线索）→ 加拖拽手柄 + 首用引导",
          "P03 参考资料引用满意度仅 2.4/5 → 强化 RAG、引用溯源、可调权重",
        ],
      },
      { h: "三、结论", p: "SUS 62 分（低于平均），输出 P0/P1/P2 改进优先级，P0 上线前必须修复。" },
    ],
  },
  "survey-questionnaire": {
    doc: "《AI 写作助手用户满意度调研问卷》",
    scene: "输入“想验证满意度和付费意愿，问卷该怎么设计”",
    tag: "Skill 示例库成品",
    sections: [
      {
        h: "一、完整问卷结构（13 题 / 5–7 分钟）",
        bullets: [
          "甄别题 + 行为题：使用时长、频率、写作场景（多选限 3）、高频功能排序",
          "态度题：总体满意度 1–5、六维矩阵量表、NPS 0–10",
          "意愿题：付费意愿、流失预警单选；开放题不超过 3 个",
        ],
      },
      {
        h: "二、两道关键题（直接产出改进优先级）",
        bullets: [
          "重要性-满意度矩阵：对长文写作/多轮上下文/引用资料等，分别打重要分与满意分",
          "流失预警：以下哪个因素最可能让你放弃（收费/替代品/功能不够/体验差/隐私）",
        ],
      },
      { h: "三、配套分析", p: "行为→态度→意愿→开放，从易到难；按使用频率做交叉分层，定位差异最大的人群。" },
    ],
  },
  "skill-quality-checker": {
    doc: "《AI PM SkillKit 专业审计报告》",
    scene: "输入“审计 ai-pm-skills 仓库里 8 个 Skill 能不能用”",
    tag: "真实实跑产出",
    sections: [
      {
        h: "一、8 维评分总表（节选）",
        table: {
          head: ["Skill", "工作流", "方法论还原", "职责单一", "总分"],
          rows: [
            ["产品体验报告", "4", "4", "5", "3.88"],
            ["竞品调研", "4", "3", "5", "3.75"],
            ["用户访谈", "4", "3", "5", "3.63"],
            ["求职兵法(旧)", "3", "3", "1", "2.38"],
          ],
        },
      },
      {
        h: "二、按严重程度排序的问题",
        bullets: [
          "P0 异常兜底普遍缺失，只有一句“信息不全先补全”",
          "P0 旧求职 Skill 一个干三件事，违反单一职责 → 拆成 4 个独立 Skill",
          "P0 需求分析的四问法/3D 指标与原始方法论不一致，需对齐",
        ],
      },
      { h: "三、改进路线图", p: "P0（1–2 周）修正方法论硬伤、拆分 Skill、补质量红线；P1（2–4 周）新建 Prompt/RAG/Agent/评测四个 AI 专项 Skill 并补异常兜底。" },
    ],
  },
  // —— 求职线：直接做成 Skill，无独立方法论文章 ——
  "resume-jd-align": {
    doc: "《三方向 JD-证据映射表 + 投递策略》",
    scene: "输入“30 条 JD + 一份经历基座，做岗位精准对齐”（真实跑批）",
    tag: "真实跑批案例",
    sections: [
      {
        h: "一、JD 关键词 → 证据 → 放置模块（方向一节选）",
        table: {
          head: ["JD 高频词", "候选人证据", "缺口处理"],
          rows: [
            ["客户开发/主动开拓", "外联部独立对接 1 家、合作 2 家，拿下 3+ 赞助", "商务拓客桥接"],
            ["询盘回复/促成交易", "直播后台实时答疑、促成下单", "平台不同，能力迁移"],
            ["英语 CET-4/6", "CET-4 + 专业英语/国贸结算实训", "CET-6 缺口不虚构"],
          ],
        },
      },
      {
        h: "二、每个方向一条叙事主线",
        bullets: [
          "B2B：客户对接与商务开拓前置 → 沟通抗压 → 电商后台与数据工具",
          "跨境运营：电商后台实操 → SPSS 数据硬证据 → 客服与订单执行",
          "跟单：流程执行与多线协同 → 数据台账细致度 → 多方协调与责任心",
        ],
      },
      { h: "三、铁律", p: "一词一证据；无直接证据用可迁移能力桥接；缺口明确标注、绝不虚构；项目按与 JD 匹配度而非时间排序。" },
    ],
  },
  "interview-prep": {
    doc: "《AI PM 面试备战素材包》",
    scene: "输入“下周面 AI 产品实习，帮我系统备战”",
    tag: "产出样例",
    sections: [
      {
        h: "一、项目标准化素材（每个核心项目）",
        bullets: ["3 分钟 / 15 分钟两版讲述稿，数据张口就来", "14 道深挖题预演：为什么做、怎么权衡、数据怎么算、失败了怎么办"],
      },
      {
        h: "二、四大题型答题框架",
        bullets: ["项目深挖（STAR+R）、行业认知、行为面试、费米估算，各配答题骨架"],
      },
      {
        h: "三、分轮次清单",
        bullets: [
          "一面 Leader：项目细节与数据；二面负责人：3 个行业洞察 + 3 年规划",
          "终面 HR：离职/薪资依据、协作案例；另备 1 分钟自我介绍",
        ],
      },
    ],
  },
  "interview-retro": {
    doc: "《面试复盘与求职漏斗诊断表》",
    scene: "输入“刚面完一场，把过程记下来帮我诊断”",
    tag: "产出样例",
    sections: [
      {
        h: "一、面试还原",
        table: {
          head: ["面试官问题", "我的回答摘要", "对方反应", "自评"],
          rows: [
            ["讲一个你最有挑战的项目", "（逐字记录）", "追问数据来源", "一般"],
            ["如果准确率不达标怎么办", "（逐字记录）", "点头", "好"],
          ],
        },
      },
      {
        h: "二、漏斗诊断（对照行业均值定位卡点）",
        bullets: ["投递→面试约 20%、一面通过 35–40%、二面 30–35%、终面 70–80%，逐层标是否达标"],
      },
      {
        h: "三、三类短板分开归因 + 行动",
        bullets: ["显性（不会的知识点）/ 隐性（没深度没数据）/ 表达（说不清），各自给改进方法", "产出 P0/P1 改进清单与“下次面试前必做”"],
      },
    ],
  },
  "script-polish": {
    doc: "《项目逐字稿打磨：前 / 后对照 + 三时长版本》",
    scene: "输入“这是我 MSDS 项目的介绍逐字稿，改到能直接说出口”",
    tag: "以 MSDS 项目为例",
    sections: [
      {
        h: "打磨前（问题标注）",
        p: "“我负责了一个 MSDS 识别的项目，用了大模型，效果还不错，提升了很多效率。”——缺数据、缺决策过程、“效果不错”是空话。",
      },
      {
        h: "打磨后 · 电梯版（约 30 秒）",
        p: "“我做的是化学品 MSDS 危害识别工作流。人工看一份说明书要十几分钟还容易漏，我把它拆成抽取—比对—复核三段，低置信度结果一律转人工。上线后识别准确率从 72% 提到 92%，单份处理从十几分钟降到秒级。”",
      },
      {
        h: "方法：四段式配比 + 多时长",
        bullets: [
          "结论 10% · 数据 30% · 逻辑推导 40% · 复盘升华 20%",
          "同一份稿出电梯版(100–200 字)/标准版(500–700)/深挖版(1000–1500)，按结构/数据/逻辑/表达/复盘五维打分",
        ],
      },
    ],
  },
  "ai-pm-resume-writing": {
    doc: "《三方向成稿简历 + 红线自检记录》",
    scene: "输入“经历基座 + 30 条 JD + 指定模板，严格别动版式”（真实跑批）",
    tag: "真实跑批案例",
    sections: [
      {
        h: "一、一次产出三个方向的成稿",
        bullets: ["B2B 外贸业务员版 / 跨境电商运营助理版 / 外贸跟单助理版，各配独立叙事主线", "全部 bullet 按 STAR/XYZ 重写，每段实习补齐“工作概述→核心工作→工作结果”"],
      },
      {
        h: "二、成稿红线自检（逐项打勾）",
        bullets: [
          "匹配：每条都能回答“与目标岗位的关系”，弱相关经历按方向删减",
          "量化：结果均有数字或外部评价，无“效果显著/获得好评”",
          "数据铁律：真实数字原样保留，其余统一标【占位】由本人替换，不虚构",
          "版式铁律：严格沿用用户模板，只改文字、不动版式，一页 A4",
        ],
      },
    ],
  },
  "ai-product-portfolio-review": {
    doc: "《作品集项目审查报告（招聘筛选 Agent）》",
    scene: "输入一个想当主项目的“招聘岗位筛选 Agent”，判断它够不够格、缺什么",
    tag: "Skill 示例库成品",
    sections: [
      {
        h: "一、审查结论",
        bullets: [
          "项目内容：基本达标，但暂不能证明业务价值",
          "版式：基本达标；保留为主项目候选，先补问题证据、评测与失败案例",
        ],
      },
      {
        h: "二、已有证据 / 待补证据",
        table: {
          head: ["已有", "待补"],
          rows: [
            ["跑通简历输入→岗位匹配主流程", "目标用户是 HR、猎头还是求职者不清楚"],
            ["标了知识库与模型调用位置", "没有测试集、基线、准确率/召回率"],
            ["展示了一次成功样例", "没有误筛、漏筛、编造经历等失败案例"],
          ],
        },
      },
      {
        h: "三、最小修复动作（按优先级）",
        bullets: [
          "P0：建 20–50 条人工标注的简历—岗位测试集，加关键词规则基线",
          "P0：展示一个误筛案例，写清如何用结构化抽取 + 人工确认处理",
          "P1：“效率提升 60%”在有完整口径前改为“效率指标待验证”",
        ],
      },
    ],
  },
  "prompt-writing": {
    doc: "《可直接运行的提示词（五要素实填）》",
    scene: "输入一句模糊的“帮我把客服对话分个类”，产出可运行提示词",
    tag: "Skill 骨架实填",
    sections: [
      {
        h: "骨架 A · 单轮五要素（实填要点）",
        bullets: [
          "角色：客服会话标注员；只做意图分类，不回答用户问题，越界统一回“超出处理范围”",
          "任务：读一段客服对话，输出一个主意图 + 置信度，主目标只有一个",
          "输入：一段含噪声的对话文本（口语、错别字、多轮混杂）",
          "约束：只能从给定 8 类意图里选；资料不足输出“无法判断”，不得自行新增类别",
          "输出格式：JSON {intent, confidence, reason}，并给 1 条正常 / 1 条异常 Few-shot",
        ],
      },
      {
        h: "骨架 B · 复杂 Agent 四层（何时用）",
        bullets: [
          "目标层：唯一主目标 + 次要目标的主次关系",
          "策略层：只写策略意图（先理解再给方案），不写理论名词和逐字稿",
          "执行层：技能模块 + 每个触发信号都要有“策略→表达→禁止→出口”闭环",
          "约束层：宪法原则优先级最高，冲突时写明谁优先",
        ],
      },
    ],
  },
  "dialogue-strategy-designer": {
    doc: "《B2B 续费回访对话策略蓝图 + 话术》",
    scene: "现有企业客户合同到期，做一次先服务、再按信号转续费的回访",
    tag: "Skill 示例库成品",
    sections: [
      {
        h: "一、场景与模型选择",
        bullets: [
          "主场景是服务（到期提醒），主模型选 LEARN：先倾听、问清体验和顾虑",
          "仅当用户主动问升级/扩容才切 FAB 讲价值；不选 AIDA，避免把回访变硬推",
        ],
      },
      {
        h: "二、最小策略蓝图",
        table: {
          head: ["阶段", "目标", "退出/分支"],
          rows: [
            ["连接说明", "说明身份、到期背景、时长", "没时间→给可取消的回访选项"],
            ["倾听体验", "一个开放问题后复述确认", "投诉/愤怒→转服务，不谈升级"],
            ["明确下一步", "只提供真实选项并预约", "明确不需要→尊重结束并记录"],
          ],
        },
      },
      {
        h: "三、分支话术（节选）",
        quote: "用户说“得问领导”→“理解，最终决策要内部确认。我可以先整理已核验的方案信息和待确认事项，您希望我发给您，还是约个您和领导都方便的时间？”",
      },
      {
        h: "四、验收观察",
        bullets: ["不把“到期”写成优惠或稀缺承诺", "“别再联系”直接结束，不继续挽回"],
      },
    ],
  },
  "skill-creator": {
    doc: "《Skill 创建前质量合同》",
    scene: "动手写 SKILL.md 前，必须先把这份合同答完，答不上就先追问",
    tag: "Skill 固定产出",
    sections: [
      {
        h: "一、职责与触发",
        bullets: [
          "一句话说清这个 Skill 负责什么、不负责什么；职责无法收敛就拆分",
          "列清“应触发 / 不应触发”，并指明相邻需求该路由给哪个 Skill",
        ],
      },
      {
        h: "二、输入与产出",
        bullets: [
          "最小必需输入有哪些、缺了怎么一次性追问；可选输入和合理默认是什么",
          "产出物的结构、字段、格式与一个标准输出样例",
        ],
      },
      {
        h: "三、异常兜底与发布门槛",
        bullets: [
          "输入为空 / 冲突 / 越界 / 外部失败时分别怎么处理，不留没指令的空白分支",
          "发布前过一遍：可被触发、可稳定执行、结果可验证，质量在设计阶段就前置",
        ],
      },
    ],
  },
  "daily-report": {
    doc: "《工作日报（以火花工坊实习为例）》",
    scene: "把一天零散的工作记录，整理成可直接发送的日报",
    tag: "产出样例",
    sections: [
      {
        h: "一、今日完成",
        bullets: [
          "迭代周画像 Workflow：为 9 段式画像补齐痛点对应的访谈原话字段",
          "联调主控 Workflow 的 HTTP + Code 节点，解决换行符破坏 JSON 的 400 报错",
        ],
      },
      {
        h: "二、效果与提升",
        bullets: ["单次周复盘耗时由约 2 小时压缩到 3 分钟", "20 题黄金集回归，话术通过率稳定在 90%"],
      },
      {
        h: "三、问题及处理 / 明日计划",
        table: {
          head: ["问题", "处理"],
          rows: [
            ["HTTP body 换行导致 JSON 解析失败", "前置 Code 节点用 json.dumps 预序列化，已修复"],
          ],
        },
        bullets: ["明日：补 3 条分风格话术的边界用例，回归黄金集"],
      },
    ],
  },
}

function ArtifactTableView({ table }: { table: ArtifactTable }) {
  return (
    <div className="overflow-x-auto rounded-md border-2 border-black/70">
      <table className="w-full border-collapse text-[10.5px] leading-snug">
        <thead>
          <tr>
            {table.head.map((h, i) => (
              <th key={i} className="border-b-2 border-r-2 border-black/70 bg-[#FAF5F0] px-1.5 py-0.5 text-left font-bold last:border-r-0">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className="align-top">
              {row.map((cell, ci) => (
                <td key={ci} className="border-b border-r-2 border-black/20 border-r-black/15 px-1.5 py-0.5 last:border-r-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// 成品文档面板：默认直接可见（内部滚动），不需要再点一次
export function SkillArtifactPanel({ slug }: { slug: string }) {
  const art = skillArtifacts[slug]
  if (!art) return null
  return (
    <div className="overflow-hidden rounded-lg border-2 border-black bg-white">
      <div className="flex flex-wrap items-center gap-1.5 border-b-2 border-black bg-[#0B0B0B] px-2 py-0.5">
        <FileText className="h-2.5 w-2.5 shrink-0 text-[#4ECDC4]" />
        <span className="text-[10px] font-bold tracking-wide text-white">{art.doc}</span>
        <span className="ml-auto rounded-full border border-white/40 px-1.5 py-px text-[9px] font-semibold text-white/80">{art.tag}</span>
      </div>
      <div className="max-h-[132px] overflow-y-auto p-2">
        <p className="mb-1.5 rounded-md bg-[#FAF5F0] px-2 py-0.5 text-[10px] leading-relaxed text-gray-600">
          <span className="font-bold text-black">场景：</span>
          {art.scene}
        </p>
        <div className="space-y-1.5">
          {art.sections.map((s, i) => (
            <div key={i}>
              {s.h && <p className="mb-0.5 text-[11px] font-bold text-teal-900">{s.h}</p>}
              {s.p && <p className="mb-1 text-[11px] leading-relaxed text-gray-800">{s.p}</p>}
              {s.table && <div className="mb-1"><ArtifactTableView table={s.table} /></div>}
              {s.bullets && (
                <div className="space-y-0.5">
                  {s.bullets.map((b, bi) => (
                    <div key={bi} className="flex gap-1.5 text-[11px] leading-relaxed text-gray-800">
                      <span className="shrink-0 text-teal-600">▸</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}
              {s.quote && (
                <blockquote className="my-1 rounded-r-md border-l-4 border-[#4ECDC4] bg-[#4ECDC4]/10 px-2 py-1 text-[10.5px] italic leading-relaxed text-gray-700">
                  {s.quote}
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
      {art.fullUrl && (
        <a
          href={art.fullUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 border-t-2 border-black bg-[#FAF5F0] px-2 py-1 text-[10px] font-bold text-teal-800 transition-colors hover:bg-[#4ECDC4]/20"
        >
          <ExternalLink className="h-2.5 w-2.5" /> {art.fullLabel ?? "查看完整成品"} <span className="ml-auto">↗</span>
        </a>
      )}
    </div>
  )
}
