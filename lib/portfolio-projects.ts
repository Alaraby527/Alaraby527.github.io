// 数据来源:GitHub Alaraby527 各仓库 README + 深色版已清洗文案(本文件由 gen-projects-v2.js 生成)
// 原则:作品集只放 GitHub 上真实存在的项目;无仓库的京东只留在首页实习经历,北辰青年撤下。
// 单一数据源:portfolio-section 渲染 core/other,supplement-section 渲染 supplementary;详情见 app/portfolio/[id]/page.tsx

export type DetailCard = {
  title: string
  tag: string
  intro?: string
  content?: string
  paragraphs?: string[]
  table?: { headers: string[]; rows: string[][] }
  mermaid?: string
  image?: string
  link?: { url: string; label: string }
}

export type ProjectType = "internship" | "personal" | "competition" | "rebuild" | "group"
export type ProjectTier = "hero" | "core" | "other" | "supplementary"

export type Project = {
  slug: string
  index: string
  title: string
  subtitle: string
  role: string
  projectType: ProjectType
  tier: ProjectTier
  summary: string
  result: string
  tags: string[]
  keyMetric: { value: string; label: string }
  metrics: { value: string; label: string }[]
  challenge: string
  research: string[]
  solution: string[]
  aiStrategy: string[]
  reflection: string
  detailCards?: DetailCard[]
  sourceUrl?: string
  demoUrl?: string
}

export const projects: Project[] =  [

  {
    "slug": "huohua-ai-ops-platform",
    "title": "AI 运营平台｜周画像→话术自动写回飞书",
    "subtitle": "把每周 2 小时的手动复盘压缩到 3 分钟",
    "role": "AI 产品实习生 @ 火花工坊",
    "projectType": "internship",
    "tier": "core",
    "summary": "运营者每周要从 7 张飞书表手动汇总数据、翻访谈写画像、凭感觉写话术，一次要 2 小时以上。我在 Dify 上把这条链路拆成周画像生成器、话术生成器和 8 节点主控 Workflow：自动拉取投放数据和访谈，生成每个痛点都附原话的 9 段式群体画像，再由画像驱动产出 3 条不同风格话术，强制 JSON 输出后自动写回飞书文案库，周复盘从 2 小时压缩到 3 分钟。",
    "result": "Dify 落地 4 个应用 + 1 个知识库（含一条每天自动产出的 AI 日报流水线），主控 Workflow 8 节点串联“数据→画像→话术→写回飞书”全链路；周复盘 2 小时→3 分钟，话术自动写回飞书文案库。",
    "tags": [
      "Dify",
      "Workflow",
      "自动化运营",
      "JSON 结构化输出",
      "飞书集成",
      "评测"
    ],
    "keyMetric": {
      "value": "2h→3min",
      "label": "单次周复盘耗时"
    },
    "metrics": [
      {
        "value": "4 个",
        "label": "Dify 应用与工作流"
      },
      {
        "value": "8 节点",
        "label": "主控 Workflow"
      },
      {
        "value": "7 张",
        "label": "飞书源表自动汇总"
      },
      {
        "value": "3 条",
        "label": "分风格话术/次"
      }
    ],
    "challenge": "运营者每周被困在重复劳动里：7 张飞书表手动汇总、翻访谈写画像要 2 小时以上；邀约话术全凭个人手感、经验无法复用；写完还要再手动录回飞书文案库。",
    "research": [
      "直接问需求的邀约回复率 66%，泛泛“学习搭子”互动率只有 3%——话术好坏差异明确，值得模板化、结构化",
      "画像要能指导动作，每个痛点必须能回溯到访谈原话，否则运营不敢直接用",
      "话术要自动写回飞书的不同字段，自由文本无法可靠解析，输出必须结构化"
    ],
    "solution": [
      "周画像生成器（Workflow）：投放数据+访谈 → 9 段式群体画像，每个痛点附访谈原话作证据",
      "话术生成器（Workflow）：画像驱动生成正式/亲切/活泼 3 条话术，强制 JSON 输出固定字段",
      "主控 Workflow：8 个节点用 HTTP 串联画像→话术，Code 节点解析后自动写回飞书文案库"
    ],
    "aiStrategy": [
      "选 Workflow 而不是自主 Agent：输入（飞书数据+访谈）和输出（画像+话术）格式固定、步骤可预设，Workflow 更可靠、可复现、可审计",
      "话术强制 JSON 死锁输出：要自动写回飞书不同字段，自由文本解析必然出错",
      "HTTP 节点 body 里的换行符会破坏 JSON（返回 400），在前面加 Code 节点用 json.dumps 预序列化解决"
    ],
    "reflection": "这条链路的难点不在拖节点，而在定义清楚“一份能用的画像长什么样”——每个痛点都要附原话、话术要分风格且能稳定落库。把“凭手感”的经验变成结构化、可复用、能自动执行的流程，才是提效真正的来源。",
    "detailCards": [
      {
        "tag": "核心成果",
        "title": "三个 Dify 应用串成一条自动化闭环",
        "intro": "把“汇总数据→翻访谈→写画像→写话术→录文案库”的手动流程，重构成一键运行的工作流。",
        "table": {
          "headers": [
            "应用",
            "类型",
            "做什么",
            "关键设计"
          ],
          "rows": [
            [
              "周画像生成器",
              "Workflow",
              "投放数据+访谈 → 9 段式群体画像",
              "每个痛点附访谈原话作证据"
            ],
            [
              "话术生成器",
              "Workflow",
              "画像驱动生成 3 条不同风格话术",
              "JSON 输出，解析后自动写回飞书"
            ],
            [
              "主控 Workflow",
              "Workflow",
              "8 节点 HTTP 串联画像→话术全链路",
              "Code 节点 json.dumps 解决转义"
            ]
          ]
        },
        "paragraphs": [
          "效果：周复盘从 2 小时压缩到 3 分钟，7 张飞书表的数据和访谈自动汇总，话术按固定格式写回飞书文案库。"
        ]
      },
      {
        "tag": "产品思考",
        "title": "为什么用 Workflow，而不是自主 Agent",
        "intro": "不是所有 AI 自动化都要做成会自己规划的 Agent，这个场景输入输出都固定。",
        "table": {
          "headers": [
            "判断维度",
            "本场景特征",
            "选型"
          ],
          "rows": [
            [
              "输入",
              "飞书数据+访谈，结构固定",
              "无需模型动态理解"
            ],
            [
              "步骤",
              "汇总→画像→话术→写回，可预设",
              "Workflow 编排"
            ],
            [
              "输出",
              "9 段画像 + 固定字段话术",
              "JSON 死锁，可解析落库"
            ],
            [
              "可靠性",
              "每周重复跑、要可审计",
              "流程确定，结果可复现"
            ]
          ]
        }
      },
      {
        "tag": "踩坑记录",
        "title": "HTTP 节点返回 400：换行符毁掉了 JSON",
        "paragraphs": [
          "主控 Workflow 串联话术生成器时频繁返回 400。对比手动成功的请求和 Dify 模板替换后的请求，发现 body 中的 JSON 一旦含换行符，模板替换就会破坏结构。",
          "解法：在 HTTP 节点前加一个 Code 节点，用 Python json.dumps() 预序列化 body，400 错误彻底消失、全链路稳定。"
        ]
      },
      {
        "tag": "同一平台 · 另一条流水线",
        "title": "AI 日报工作流：每天零干预产出一份带编辑漫画的行业日报",
        "intro": "复用同一套 Dify + Bot 能力做的内容自动化：8 节点定时搜集 AI 新闻，“AI 主编”按影响力/稀缺性/趋势/传播四个维度打分筛选，“漫画导演”把要点转成统一英文 prompt、调用通义千问生成《经济学人》风单张通栏漫画，Python 微信 Bot 用 Playwright 渲染成三栏报纸，每天早上自动推送到微信。",
        "table": {
          "headers": [
            "迭代",
            "问题",
            "改法"
          ],
          "rows": [
            [
              "V1 四宫格",
              "四张图信息分散、看不懂图之间的关系，画风也不统一",
              "V2 改单张横向通栏漫画，新增“漫画导演”节点统一画风，一个画面讲一个故事"
            ]
          ]
        }
      }
    ],
    "sourceUrl": "https://github.com/Alaraby527/huohuahub-ai-creator-platform",
    "index": "01"
  },
  {
    "slug": "intern-daily-workstation",
    "title": "实习生工作台｜从飞书低代码到 React+NestJS 全栈",
    "subtitle": "每日落表从 30 分钟 5 步，压到 5 分钟 3 步",
    "role": "AI 产品实习生 @ 火花工坊",
    "projectType": "internship",
    "tier": "core",
    "summary": "当 Mentor 带 12 名实习生、跨 5 条业务线时，每天“看文档→找任务→做→登记→汇报”的落表要花 30 分钟，触达完成率只有 70%。我先用飞书 Base App 把流程砍成“打开→做→勾”三步验证可行，再用 React+NestJS 重写成全栈系统：自动识别飞书身份、按业务线渲染当日 SOP、打卡经飞书开放平台 API 自动写入多维表格，Mentor 在后台逐条验收，日均落表降到 5 分钟、触达完成率升到 95%。",
    "result": "全栈工作台 1 个（React18+TypeScript+NestJS10+SQLite+飞书 API），操作 5 步→3 步，日均落表 30min→5min，触达完成率 70%→95%，覆盖 12 人 × 5 条业务线，打卡自动同步飞书多维表格。",
    "tags": [
      "React",
      "TypeScript",
      "NestJS",
      "飞书开放平台",
      "SOP",
      "全栈"
    ],
    "keyMetric": {
      "value": "70%→95%",
      "label": "触达完成率"
    },
    "metrics": [
      {
        "value": "5步→3步",
        "label": "操作步骤"
      },
      {
        "value": "30min→5min",
        "label": "日均落表"
      },
      {
        "value": "12人×5线",
        "label": "覆盖规模"
      },
      {
        "value": "6 大",
        "label": "任务模块"
      }
    ],
    "challenge": "12 名实习生分布在 5 条业务线，任务靠群消息口头下发、打卡散落在表格和群里，Mentor 要跨 3-4 个地方核对；完成状态看不见、数据回填全靠手，问题往往到周会才暴露。",
    "research": [
      "拆解每日动作：五步里有三步是在“搬运信息”，真正干活的时间被登记吃掉",
      "每条线有 4-6 个每日任务和多个子表，新人第一周反复问“这个填哪张表”",
      "Mentor 无法实时看到谁卡在哪，缺口暴露滞后"
    ],
    "solution": [
      "先用飞书 Base App 搭 6 大模块任务面板（触达/社群/供给线/情报/数据看板/我的）快速验证流程",
      "再用 React18+TS+Vite 前端、NestJS10 后端、SQLite+Drizzle 本地缓存重写，飞书 API 自动写入多维表格",
      "名单/业务线/任务/表映射全部配置化，新增业务线只改数据文件、不改组件代码"
    ],
    "aiStrategy": [
      "这个场景刻意不用大模型：任务是预定义 SOP、打卡是结构化字段、同步目标确定，表单+工作流+API 比对话更高效，也没有幻觉风险",
      "本地优先 + 异步同步：先写本地 SQLite 再同步飞书，API 抖动也不会丢提交，失败可重试",
      "飞书身份自动识别失败时降级为手动下拉选择，而不是自动猜测身份"
    ],
    "reflection": "工具的价值不在复杂，在真的被每天用起来。先用低代码跑通、再用代码重写，让我分清“验证流程”和“工程化”是两件事——前者证明值得做，后者才谈稳定性和扩展性。",
    "detailCards": [
      {
        "tag": "工具落地",
        "title": "从 5 步到 3 步：低代码验证 → 全栈重写",
        "intro": "先用飞书 Base App 跑通，再用 React+NestJS 工程化，两版都对着同一条 SOP 闭环。",
        "table": {
          "headers": [
            "",
            "改版前",
            "飞书低代码版",
            "全栈重写版"
          ],
          "rows": [
            [
              "操作步骤",
              "看文档→找任务→做→登记→汇报",
              "打开→做→勾",
              "识别身份→做→勾→自动同步"
            ],
            [
              "日均耗时",
              "30 分钟填表",
              "5 分钟",
              "5 分钟（含自动回填）"
            ],
            [
              "触达完成率",
              "70%",
              "95%",
              "95%"
            ],
            [
              "数据同步",
              "手动填 3-4 张表",
              "手动跳转",
              "API 自动写入多维表格"
            ]
          ]
        },
        "image": "/uploads/huohua-worktable-preview.png"
      },
      {
        "tag": "技术方案",
        "title": "React + NestJS + 飞书 API 的全栈架构",
        "table": {
          "headers": [
            "层",
            "选型",
            "理由"
          ],
          "rows": [
            [
              "前端",
              "React 18 + TypeScript + Vite",
              "任务卡片/表单等重复 UI 组件化，启动快"
            ],
            [
              "后端",
              "NestJS 10 + TypeScript",
              "模块化，与前端共享类型"
            ],
            [
              "数据库",
              "SQLite + Drizzle ORM",
              "零运维，本地缓存进度与打卡，飞书失败不丢数据"
            ],
            [
              "外部集成",
              "飞书开放平台 API",
              "多维表格写入、电子表格读取、Bot 身份认证"
            ]
          ]
        }
      },
      {
        "tag": "产品决策",
        "title": "这个场景为什么坚持不用大模型",
        "paragraphs": [
          "核心场景是结构化任务的执行追踪与数据回填：SOP 预定义、打卡是结构化字段、同步目标是确定的多维表格。",
          "任务勾选和数量填写用表单比对话更高效、更不易错；数据同步要求字段精确匹配，LLM 生成反而引入幻觉；实习生每天重复使用，表单的肌肉记忆优于对话。确定性高的场景就用确定性方案，把 AI 留给真正要理解非结构化信息的环节。"
        ]
      },
      {
        "tag": "踩坑记录",
        "title": "上线后全员同步失败：一个字符的凭证差异",
        "paragraphs": [
          "管理员本地使用正常，实习生提交却全部“同步失败”。查后端日志飞书返回 app secret invalid，对比发现录入的 App Secret 有一个字符差异——管理员“能用”只是因为数据存进了本地 SQLite，其实从没同步成功。",
          "修复后补上凭证录入即校验（录入后立即调一次 token 接口）和同步成功率监控，避免“本地保存成功”带来的错误安全感。"
        ]
      }
    ],
    "sourceUrl": "https://github.com/Alaraby527/intern-daily-workstation",
    "index": "02"
  },
  {
    "slug": "msds-hazard-identification-workflow",
    "index": "03",
    "title": "MSDS 职业危害识别 Agent",
    "subtitle": "CAS 校验 + 本地 OCR 降级 + 人工复核，Demo→V1→V2 8/12→11/12",
    "role": "基于真实实习项目重做 · 独立设计与开发",
    "projectType": "rebuild",
    "tier": "core",
    "summary": "面向职业卫生人员的 AI 辅助识别工作流：从 MSDS 成分章节提取 CAS 号、含量和页码证据，匹配职业病危害因素知识表，不确定项交回人工复核。PDF 文本抽取 + 本地 OCR 降级，CAS 校验位验证保证准确性，高毒目录命中必须人工复核。Demo→V1→V2 完整迭代（8/12→11/12），剩余 1 例 OCR 误识别为已知局限。",
    "result": "V1 PDF 文本抽取 8/12 → V2 引入本地中文 OCR + 页图证据链 11/12（92%）；CAS 校验位验证不依赖大模型；三条安全规则（字段缺失降置信度、高毒必复核、未命中≠无危害）；每条判定保留原始 CAS、规范 CAS、页码与处理动作。",
    "tags": [
      "Python",
      "OCR",
      "Document-AI",
      "Safety-Critical",
      "CAS 校验",
      "评测体系"
    ],
    "keyMetric": {
      "value": "11/12",
      "label": "真实黄金集准确率"
    },
    "metrics": [
      {
        "value": "8/12→11/12",
        "label": "V1→V2 黄金集"
      },
      {
        "value": "3 份",
        "label": "真实 MSDS 人工标注"
      },
      {
        "value": "5 步",
        "label": "证据链工作流"
      },
      {
        "value": "100%",
        "label": "判定可溯源"
      }
    ],
    "challenge": "MSDS 文件格式多样（文本型 PDF + 扫描件），扫描件无文本层、字体编码异常、CAS 与含量粘连。物质识别准确性直接关系职业病危害判定——既要降低人工成本，又不能在关键判定上出错或伪造字段。",
    "research": [
      "EHS 实习中整理 50 份 MSDS 花了两天：12 份扫描件只能手动输入 CAS 号，3 小时输错 2 个",
      "“半乱码”文件最坑人：文字层乱码但 CAS 号恰好可显示，以为能复制其实是乱码",
      "带教工程师的核心规则：“知识表不是全集，没找到可能是知识表没收录，不代表这个物质没有危害”"
    ],
    "solution": [
      "V1：PDF 文本抽取 + CAS 校验位验证（模 10），覆盖文本型 PDF，8/12",
      "V2：增加本地 Tesseract 中文 OCR + 页图截图，每条结果附页码证据，11/12",
      "三级输出：自动通过 / 人工确认 / 必须复核，高毒目录命中强制人工复核"
    ],
    "aiStrategy": [
      "知识库结构化匹配替代纯生成式判定，保证每条结果可溯源到页码和原始文本",
      "OCR 字段缺失、字体编码异常时降置信度并标记，不强行填充",
      "CAS 校验位算法让我们在不依赖大模型的情况下验证 CAS 号是否正确——比任何 OCR 模型都更可靠",
      "V2 剩余 1 例 Sn→Sm 误识别：Sn 和 Sm 在扫描件中字形相近，Tesseract 会认错，后续需换更强 OCR 引擎或对金属元素 CAS 增加人工复核"
    ],
    "reflection": "B 端合规场景，假阳性比漏检更危险。Sn 被识别成 Sm 说明 OCR 对相近字形有局限，这种边界必须在产品流程里兜住——高毒必复核、不确定就转人工，而不是指望模型 100% 准确。",
    "detailCards": [
      {
        "title": "V1→V2：从 8/12 到 11/12 的迭代",
        "tag": "核心成果",
        "intro": "V1 用 PDF 文本抽取，扫描件成分章节直接丢失；V2 引入本地 OCR + 页图证据，准确率从 67% 拉到 92%。",
        "table": {
          "headers": [
            "维度",
            "V1：PDF 文本抽取",
            "V2：+ 本地 OCR + 证据链"
          ],
          "rows": [
            [
              "文本型 PDF",
              "CAS + 含量正常提取",
              "正常提取，附页码"
            ],
            [
              "扫描件 PDF",
              "成分章节文本丢失",
              "本地中文 OCR 识别，附页图截图"
            ],
            [
              "证据链",
              "仅输出结果，无来源",
              "每条结果附原始 CAS、规范 CAS、页码"
            ],
            [
              "黄金集",
              "8/12（67%）",
              "11/12（92%）"
            ],
            [
              "失败样本",
              "4 例扫描件丢失",
              "1 例 OCR 误识别（Sn→Sm）"
            ]
          ]
        }
      },
      {
        "title": "三条安全规则：AI 辅助判定，不替代专业判断",
        "tag": "产品设计",
        "intro": "职业病危害判定错误代价高，产品设计的核心不是“全自动”，而是“知道什么时候该停下来”。",
        "table": {
          "headers": [
            "规则",
            "怎么做",
            "为什么"
          ],
          "rows": [
            [
              "字段缺失降置信度",
              "OCR 缺失、编码异常时降置信度并标记",
              "CAS 错误会导致错误的危害判定，比漏检更危险"
            ],
            [
              "高毒必复核",
              "命中《高毒物品目录》强制人工复核",
              "高毒物质的漏判后果不可逆"
            ],
            [
              "未命中 ≠ 无危害",
              "CAS 未命中知识表时输出“当前知识表未命中”",
              "知识表覆盖有限，未命中只代表不在表中"
            ]
          ]
        }
      },
      {
        "title": "已知局限：Sn 被 OCR 识别成 Sm",
        "tag": "产品思考",
        "intro": "V2 剩余 1 例失败，来自扫描件 OCR 的字形混淆。",
        "paragraphs": [
          "扫描件中锡（Sn）的化学式被 Tesseract OCR 误识别为钐（Sm），导致 CAS 匹配到错误物质。Sn 和 Sm 在低分辨率扫描件中字形相近，Tesseract 确实会认错。",
          "评测样本来自 3 份真实 MSDS 的 12 条人工标注，样本量有限。这个 case 指向两个后续方向：换更强的 OCR 引擎，或对金属元素 CAS 增加人工复核环节。"
        ]
      }
    ],
    "demoUrl": "https://msds-hazard-agent.streamlit.app/",
    "sourceUrl": "https://github.com/Alaraby527/msds-hazard-agent"
  },
  {
    "slug": "tv-buying-copilot",
    "title": "电视选购 Copilot｜纯 Python 自研 Multi-Agent",
    "subtitle": "零依赖从零实现，评测 72%→92%、幻觉归零",
    "role": "个人项目 · 独立设计与开发",
    "projectType": "personal",
    "tier": "core",
    "summary": "不依赖 Dify 等低代码平台，用 Python 标准库从零实现一个电视导购 Multi-Agent：Master Router 做 6 类确定性意图路由，5 个 Skill Worker 分别负责商品/优惠/履约/售后/澄清，Replanner 做硬约束复核，Compliance 独立节点跑 5 条合规红线，还内置零依赖 MCP 工具服务。自研 token-overlap RAG 和需求解析器（处理中文数字、3k 缩写、2米5 口语、否定句）。25 条模拟评测用例驱动一轮迭代，通过率 72%→92%，编造知识库外型号的幻觉从 4 次降到 0。",
    "result": "约 2000 行零依赖 Python，clone 即跑；Master+5 Worker+Replanner+Compliance 四层加 MCP 工具服务；25 条模拟用例通过率 72%→92%，库外型号幻觉 4→0，售后高风险 100% 转人工；提供在线静态演示。",
    "tags": [
      "Python",
      "Multi-Agent",
      "MCP",
      "自研 RAG",
      "零依赖",
      "评测驱动"
    ],
    "keyMetric": {
      "value": "72%→92%",
      "label": "25 条模拟用例通过率"
    },
    "metrics": [
      {
        "value": "5+1",
        "label": "Worker + 合规 Agent"
      },
      {
        "value": "4 个",
        "label": "RAG 知识库"
      },
      {
        "value": "5 个",
        "label": "MCP 工具"
      },
      {
        "value": "0",
        "label": "第三方依赖"
      }
    ],
    "challenge": "电视是高客单、低频次、参数复杂的决策，用户要在商品页、评测、客服之间反复横跳；现成客服只会单轮应答，单轮聊天机器人又容易编造不存在的型号，缺一个能理解需求、调用多个知识库、算优惠、不确定就拒答的系统。",
    "research": [
      "访谈 4 位近期购机者：大家要的是“懂行的朋友直接推荐”，最怕的不是买贵而是买错",
      "对比电商客服、评测文章、单轮机器人、比价插件，确认必须做多 Agent + 知识库 + 约束复核",
      "复盘低代码搭的导购架构，决定用纯代码重写一遍，把 Agent 怎么跑讲到每一行"
    ],
    "solution": [
      "Master Router 用规则做 6 类意图分类（0 成本、无分类幻觉），分发给 5 个 Skill Worker",
      "自研 token-overlap RAG（中文二元 gram + 拉丁词元）与 NeedParser（中文数字/3k/2米5/否定句/4K8K 排除）",
      "Replanner 输出前复核预算/刷新率/库存，无候选时拒绝编造；Compliance 独立节点跑 5 条红线、修正循环最多 2 次",
      "内置 MCP 工具服务，把检索/优惠/履约/售后以标准协议暴露给任意外部客户端"
    ],
    "aiStrategy": [
      "确定性优先：意图分类、商品筛选、约束检查全部规则实现，LLM 只做表达层润色，失败可降级模板",
      "合规独立成节点（temperature=0），而不是写进 System Prompt，避免被长上下文稀释",
      "售后、退货、情绪激动强制转人工，Agent 不做自主处理",
      "纯 Python 标准库自研、零第三方依赖，可离线运行，没有额外服务端和按 token 计费的调用成本"
    ],
    "reflection": "拖节点和从零写是两种体感。自己写 RAG 才知道中文分词、token overlap、分辨率误匹配这些坑；跑评测才发现“3k 预算”会被正则漏掉、“E8K”会被当成 8000 元。这个项目最大的价值，是把 Agent 原理从概念变成了能逐行讲清的实现。",
    "detailCards": [
      {
        "tag": "架构设计",
        "title": "Master-Worker + Replanner + Compliance 四层",
        "table": {
          "headers": [
            "层",
            "职责"
          ],
          "rows": [
            [
              "Master Router",
              "规则做 6 类意图确定性路由，不靠 LLM 分类"
            ],
            [
              "5 个 Skill Worker",
              "商品/优惠/履约/售后/澄清，各自加载所需知识库子集"
            ],
            [
              "Replanner",
              "输出前硬约束复核预算/刷新率/库存/越权，无候选即拒"
            ],
            [
              "Compliance",
              "独立 Reflection 节点跑 5 条红线，修正循环 ≤2 次"
            ],
            [
              "MCP 工具服务",
              "检索/优惠/履约/售后 5 个工具，标准协议对外暴露"
            ]
          ]
        }
      },
      {
        "tag": "技术方案",
        "title": "自研 RAG + 需求解析器，啃中文口语化表达",
        "content": "RAG 用中文二元 gram + 拉丁词元做 token overlap 评分、返回 Top-3，零第三方依赖；NeedParser 支持中文数字“三千”、缩写“3k/4k”（排除 4K/8K 分辨率误匹配）、口语“2米5”、否定句“不玩游戏只追剧”，每种边界都有对应评测用例。"
      },
      {
        "tag": "评测迭代",
        "title": "25 条评测驱动：72%→92%，幻觉 4→0",
        "table": {
          "headers": [
            "指标",
            "V1.0",
            "V1.1"
          ],
          "rows": [
            [
              "通过率（≥4 分）",
              "72%（18/25）",
              "92%（23/25）"
            ],
            [
              "编造库外型号",
              "4 次",
              "0 次"
            ],
            [
              "售后未转人工",
              "1 次",
              "0 次"
            ]
          ]
        },
        "paragraphs": [
          "主要修复：约束 RAG 只返回知识库内商品、对比时不引用库外型号、“我要退货”强制转人工、“那下单吧”改为引导到电商平台而非生成下单步骤。",
          "数据边界：知识库为 4 款 75 寸电视的静态样例，25 条为模拟评测用例，上述指标来自这组样例回归，不代表线上效果。"
        ]
      },
      {
        "tag": "产品思考",
        "title": "双保险从机制上防幻觉",
        "content": "Replanner 在输出前二次检查，违规候选直接移除、无候选时拒绝编造并给出放宽建议；Compliance 用独立低温度节点跑“不编造参数/不做绝对承诺/不贬低竞品/价格有依据/高风险转人工”5 条红线，不通过自动修正、仍失败则降级安全模板。"
      }
    ],
    "sourceUrl": "https://github.com/Alaraby527/tv-buying-copilot",
    "demoUrl": "https://alaraby527.github.io/tv-buying-copilot/",
    "index": "04"
  },
  {
    "slug": "huohua-rag-qa-bot",
    "title": "课件 RAG 问答机器人｜匹配率 5/15→15/15",
    "subtitle": "从 Dify 验证到微信公众号落地，528 张课件可问答",
    "role": "AI 产品实习生 @ 火花工坊",
    "projectType": "internship",
    "tier": "other",
    "summary": "40 天课程的 528 张课件都是图片，重复答疑占社群问题的 60%。我先在 Dify 用 Chatflow 搭 RAG 问答助手验证（16 篇文档、20 题黄金集 90% 通过），再把 528 张课件 OCR 化、用纯 Python 接入微信公众号。初版 15 题只命中 5 题，第一反应是换大模型但收效甚微；写脚本逐条分析失败 case，定位到是分块问题——长句 AND 匹配过严、口语和课件书面语对不上，改语义分块加同义词映射后做到 15/15。",
    "result": "两阶段落地：Dify 验证 16 篇文档 / 20 题 90%，公众号落地 528 张课件 OCR / 15 题 100%；检索匹配率 5/15→15/15；每条回答带出处，超纲拒答转人工。",
    "tags": [
      "RAG",
      "分块策略",
      "微信公众号",
      "OCR",
      "评测",
      "拒答边界"
    ],
    "keyMetric": {
      "value": "5/15→15/15",
      "label": "检索匹配率"
    },
    "metrics": [
      {
        "value": "528 张",
        "label": "课件 OCR"
      },
      {
        "value": "90%→100%",
        "label": "两阶段评测"
      },
      {
        "value": "TopK=3",
        "label": "检索条数"
      },
      {
        "value": "0.5",
        "label": "相似度阈值"
      }
    ],
    "challenge": "528 张课件都是图片格式、搜不到，同一个问题被反复问，占到社群答疑量的 60%。",
    "research": [
      "先在 Dify 用 16 篇运营文档验证问答可行，20 题黄金集 90% 通过",
      "扩到 528 张课件后初版只命中 5/15，换更大的模型提升有限",
      "逐条分析失败 case：长句被 AND 匹配过严，“3k”“2米5”这类口语和课件书面语对不上"
    ],
    "solution": [
      "课件全部 OCR 化，按语义段落而非固定长度分块，并增加同义词映射",
      "RAG TopK=3、相似度阈值 0.5，带出处回答；超纲问题拒答而不是编造，转人工",
      "阶段二脱离 Dify，用纯 Python + 微信公众号 API 落地"
    ],
    "aiStrategy": [
      "匹配率差不一定要换模型——先写脚本定位失败类型，这次瓶颈在分块和召回，不在模型能力",
      "选 RAG 不选 Fine-tuning：课件每周新增、要引用原话、运营要知道“AI 为什么这么答”",
      "用户问题不可预测、要判断是否超纲，这才是需要 Agent 检索与拒答决策的场景；和固定流程用 Workflow 是两种选择"
    ],
    "reflection": "5/15 到 15/15 最有价值的结论是别急着换模型。把失败 case 一条条拆开，才发现瓶颈在分块策略。定义清楚什么叫“答对”——有出处、不编造、口语也能召回——比堆模型参数有用得多。",
    "detailCards": [
      {
        "tag": "两阶段落地",
        "title": "Dify 验证 → 微信公众号落地",
        "table": {
          "headers": [
            "维度",
            "阶段一（Dify 验证）",
            "阶段二（公众号落地）"
          ],
          "rows": [
            [
              "知识库",
              "16 篇运营文档",
              "528 张课件 OCR"
            ],
            [
              "接入方式",
              "Dify Chatflow 内嵌",
              "微信公众号 API（纯 Python）"
            ],
            [
              "用户",
              "运营者内部",
              "学员（外部用户）"
            ],
            [
              "评测集",
              "20 题运营场景",
              "15 题课件场景"
            ],
            [
              "通过率",
              "90%（18/20）",
              "100%（15/15）"
            ],
            [
              "匹配率",
              "—",
              "5/15 → 15/15（优化分块）"
            ]
          ]
        }
      },
      {
        "tag": "问题定位",
        "title": "只改了分块，匹配率就提上来了",
        "paragraphs": [
          "根因：长句被 AND 匹配过严，口语化表达（“3k”“2米5”）和课件书面语对不上，导致大量问题检索不到。",
          "解法：按语义段落而非固定长度切分，增加同义词映射；检索匹配率从 5/15 提到 15/15。"
        ]
      }
    ],
    "sourceUrl": "https://github.com/Alaraby527/huohuahub-ai-creator-platform",
    "index": "05"
  },
  {
    "slug": "lucky-growth-agent",
    "index": "06",
    "title": "Lucky Growth Agent｜瑞幸用户增长 Agent",
    "subtitle": "意图驱动的全链路用户增长 Agent，V1→V2→V3 三轮迭代",
    "role": "比赛/个人项目 · 2026 AI 先锋未来人才大赛",
    "projectType": "competition",
    "tier": "other",
    "summary": "意图驱动的全链路用户增长 Agent，基于 Dify 平台构建。融合时间/天气/位置/行为/社交五维信号感知六大消费意图，“生命周期×意图”24 格策略矩阵自主决策产品/优惠/渠道/文案。V1→V2→V3 三轮迭代：意图识别 68%→89%，文案审核通过率 62%→91%，人工审核率 85%→15%，每轮 200 条模拟用例下幻觉从 24 条降到 3 条。",
    "result": "五维信号感知 + 六类意图分类 + 24 格策略矩阵 + 置信度三级分流；V1→V3 意图识别 68%→89%，文案审核通过率 62%→91%，人工审核率 85%→15%；每轮 200 条模拟用例，幻觉从 24 条降到 3 条。",
    "tags": [
      "Agent",
      "User-Growth",
      "Prompt-Engineering",
      "三轮迭代",
      "Dify",
      "置信度分流"
    ],
    "keyMetric": {
      "value": "68%→89%",
      "label": "意图识别准确率（V1→V3）"
    },
    "metrics": [
      {
        "value": "68%→89%",
        "label": "意图识别准确率"
      },
      {
        "value": "85%→15%",
        "label": "人工审核率"
      },
      {
        "value": "62%→91%",
        "label": "文案审核通过率"
      },
      {
        "value": "24→3 条",
        "label": "幻觉（每轮 200 条模拟用例）"
      }
    ],
    "challenge": "连锁咖啡品牌的用户运营依赖“基于历史行为的静态个性化”——买过什么推什么，但同一用户在通勤、犯困、加班时意图完全不同。运营人员每天花 2-3 小时手动配置活动，实时场景无法覆盖，优惠力度容易出错。",
    "research": [
      "访谈 3 位用户运营从业者：每天 2-3 小时花在搭活动上，“下雨天想推热饮，等配置好雨都停了”",
      "“买过什么推什么”的尴尬：买了一杯生椰拿铁，接下来一周每天都收到同款优惠券",
      "最担心风险：“AI 自动发券？万一给所有用户发了 0 元券怎么办？必须有人工审核”"
    ],
    "solution": [
      "四层架构：感知层（五维信号）→决策层（意图识别+生命周期+策略矩阵）→执行层（产品/优惠/渠道/文案）→反思层（效果记录+失败归因）",
      "24 格“生命周期×意图”策略矩阵，含优惠力度硬约束（新用户最高 1.8 折，成熟用户最高 8.5 折）",
      "置信度三级分流：≥80% 自主执行，50-80% 生成候选供审核，<50% 转人工"
    ],
    "aiStrategy": [
      "意图识别用 LLM 分类，但生命周期判断用纯规则——不需要 LLM 的环节就不用",
      "6 条禁止项：不直接执行支付、不编造产品信息、不编造用户数据、不承诺超权限优惠、保护隐私、遵守广告法",
      "文案进化：V1“亲~加班辛苦啦”→V3“周五深夜还在忙？这杯摩卡陪你搞定最后一个 PPT。立减 5 元，30 分钟到”",
      "高置信度自主执行，中置信度候选审核，低置信度转人工——人工审核率从 85% 降到 15%"
    ],
    "reflection": "Dify 只是编排工具，核心逻辑都在意图分类体系、策略矩阵和置信度分流机制里。换成 LangGraph 或纯 Python，核心逻辑一行都不用改。V1 提示词 800 字、温度 0.7，什么都想让模型干，结果意图混淆、优惠乱配、文案油腻；V3 写到 5000 字、温度 0.3，规则写死、边界划清、加了反思层，反而好了。模型不需要更聪明，需要的是你把规则讲清楚。",
    "detailCards": [
      {
        "tag": "核心成果",
        "title": "V1→V2→V3 三轮迭代数据",
        "intro": "意图识别从 68% 到 89%，每轮改了什么、效果如何全部量化记录；用例为模拟数据，每轮 200 条。",
        "table": {
          "headers": [
            "指标",
            "V1",
            "V2",
            "V3",
            "提升"
          ],
          "rows": [
            [
              "意图识别准确率",
              "68%",
              "81%",
              "89%",
              "+21pp"
            ],
            [
              "文案审核通过率",
              "62%",
              "78%",
              "91%",
              "+29pp"
            ],
            [
              "人工审核率",
              "85%",
              "45%",
              "15%",
              "-70pp"
            ],
            [
              "幻觉条数（每轮 200 条模拟用例）",
              "24 条",
              "10 条",
              "3 条",
              "−21 条"
            ]
          ]
        }
      },
      {
        "tag": "AI 专项",
        "title": "24 格策略矩阵 + 置信度三级分流",
        "intro": "六类意图（提神刚需/社交分享/放松享受/尝鲜探索/性价比/习惯复购）× 四阶段生命周期（新用户/成长/成熟/流失风险），每格定义产品/优惠/渠道/文案风格。",
        "table": {
          "headers": [
            "置信度",
            "动作",
            "人工参与"
          ],
          "rows": [
            [
              "≥80%",
              "自主执行",
              "无"
            ],
            [
              "50-80%",
              "生成候选供审核",
              "运营人员确认"
            ],
            [
              "<50%",
              "不推荐，转人工",
              "运营人员处理"
            ]
          ]
        }
      },
      {
        "tag": "失败案例",
        "title": "文案进化：从油腻到场景化",
        "intro": "V1 文案油腻、无具体产品、无行动号召；V3 场景化、有温度、行动明确。",
        "table": {
          "headers": [
            "版本",
            "周五加班场景文案",
            "问题"
          ],
          "rows": [
            [
              "V1",
              "亲~加班辛苦啦，快来杯咖啡暖暖身子哦~",
              "油腻、无具体产品、无行动号召"
            ],
            [
              "V2",
              "根据您的偏好，推荐拿铁大杯，会员价16.1元，立即下单。",
              "机械、无场景感"
            ],
            [
              "V3",
              "周五深夜还在忙？这杯摩卡陪你搞定最后一个PPT。立减5元，30分钟到。",
              "场景化、有温度、行动明确"
            ]
          ]
        }
      }
    ],
    "sourceUrl": "https://github.com/Alaraby527/lucky-growth-agent",
    "demoUrl": "https://dcniaqwtmoca.aiforce.cloud/app/app_17cmejmhjq2"
  },
  {
    "slug": "invoice-risk-review-agent",
    "index": "07",
    "title": "企业报销票据风险审核 Agent",
    "subtitle": "可评测、可追溯、有人机兜底的高风险财务工作流",
    "role": "个人项目 · 独立设计与开发",
    "projectType": "personal",
    "tier": "other",
    "summary": "面向企业财务审核场景，设计“二维码优先→OCR 降级→视觉模型基线”三路线字段提取架构，用确定性规则检查批次内重复、历史重复和近似异常。未接入税务验真前自动放行率固定 0%，所有结论附规则和证据交人工复核。V1 仅 OCR 日期准确率 40%，V2 改为二维码优先策略后票号/日期/金额全部 100%，处理时间从 8 秒/张降到 2 秒/张。",
    "result": "三路线降级提取（二维码/OCR/视觉模型），5 张真实票据票号/日期/金额准确率 V1 40%~80%→V2 100%；36 条合成数据规则回归 36/36 通过；处理时间 8s→2s/张；自动放行率 0%，所有风险结论人工复核。",
    "tags": [
      "Python",
      "Workflow",
      "Human-in-the-Loop",
      "OCR",
      "高风险场景",
      "规则引擎"
    ],
    "keyMetric": {
      "value": "0%",
      "label": "自动放行率（全部人工复核）"
    },
    "metrics": [
      {
        "value": "100%",
        "label": "V2 字段准确率（票号/日期/金额）"
      },
      {
        "value": "36/36",
        "label": "规则回归通过"
      },
      {
        "value": "8s→2s",
        "label": "单张处理时间"
      },
      {
        "value": "3 路线",
        "label": "降级提取策略"
      }
    ],
    "challenge": "企业报销中票据重复报销高频：同一张发票跨批次重复提交、PDF 与图片混报、近似票据钻空子。OCR 准确率不稳定（日期字段仅 40%），大模型直接判断又存在幻觉和不可解释的问题。",
    "research": [
      "访谈 3 位有报销审核经验的同学：每季度查出 2-3 张重复票，50 张票光核对票号就要 40 分钟",
      "OCR 工具不好用：日期经常认错，反而要花更多时间核对",
      "最担心误判：“系统说重复就直接打回？不行，万一系统认错了票号，员工会投诉”"
    ],
    "solution": [
      "三路线降级：首选二维码结构化提取（100%准确），降级 Tesseract OCR，人工触发视觉模型基线",
      "确定性规则查重：R10 文件哈希相同→拒绝，R11 同批票号相同→拒绝，R20 历史台账相同→拒绝，R30 同销售方+金额+日期相近→人工复核",
      "采用固定 Workflow + 模型局部决策 + 确定性规则 + Human in the Loop，不使用多 Agent 动态编排——报销审核步骤固定、要求可复现可审计"
    ],
    "aiStrategy": [
      "核心不是“让大模型自动审批”，而是设计一条有证据、能回归、失败关闭、有人接管的高风险工作流",
      "二维码是结构化数据，准确率远高于 OCR——不是 OCR 不行，而是应该优先使用更可靠的数据源",
      "未接入税务平台验真前，真实风险决策自动放行率固定为 0%，所有结论附规则和证据交人工复核",
      "二维码审计中发现人工黄金集本身也有标注错误，修正前标签已备份——可追溯不仅审票据，也审评测集本身"
    ],
    "reflection": "和 RAG 那个项目一样的教训：效果不好别急着换模型，先看看数据源对不对。二维码在这个场景里就是比 OCR 准、比 OCR 便宜、比 OCR 快——找到它比调任何模型参数都管用。",
    "detailCards": [
      {
        "tag": "核心成果",
        "title": "V1→V2：不是换更强的 OCR，而是换更可靠的数据源",
        "intro": "V1 用 Tesseract OCR 提取所有字段，日期准确率只有 40%。第一反应是换更强的 OCR 模型，但发现发票上本身就有二维码——二维码包含完整结构化数据，为什么不直接读？",
        "table": {
          "headers": [
            "指标",
            "V1（仅 OCR）",
            "V2（二维码优先）",
            "提升"
          ],
          "rows": [
            [
              "票号准确率",
              "80%（4/5）",
              "100%（5/5）",
              "+20pp"
            ],
            [
              "日期准确率",
              "40%（2/5）",
              "100%（5/5）",
              "+60pp"
            ],
            [
              "金额准确率",
              "100%（5/5）",
              "100%（5/5）",
              "—"
            ],
            [
              "平均处理时间",
              "~8秒/张",
              "~2秒/张",
              "-75%"
            ]
          ]
        }
      },
      {
        "tag": "工作流",
        "title": "三路线降级 + 五条风险规则",
        "intro": "每一步职责单一、独立校验，避免单点错误传导到最终判定。",
        "table": {
          "headers": [
            "规则",
            "含义",
            "动作"
          ],
          "rows": [
            [
              "R10",
              "同一批次文件哈希相同",
              "拒绝"
            ],
            [
              "R11",
              "同一批次发票号码相同",
              "拒绝"
            ],
            [
              "R20",
              "与历史台账发票号码相同",
              "拒绝"
            ],
            [
              "R30",
              "销售方+金额相同且日期相差≤3天但号码不同",
              "标记疑似，人工复核"
            ],
            [
              "R00/R01",
              "日期/金额/票号异常或缺失",
              "人工复核"
            ]
          ]
        }
      },
      {
        "tag": "产品思考",
        "title": "为什么自动放行率固定 0%",
        "paragraphs": [
          "由于未接入税务平台验真，系统无法确认发票的真实性。在这种前提下，让 AI 自动放行任何一张票据都是不负责任的。所有结论——无论是“通过”“拒绝”还是“疑似”——都附带规则编号和证据，交给财务人员做最终决定。这不是技术做不到自动审批，而是产品经理在风险和效率之间做的权衡：先保证不出错，再谈提效。"
        ]
      },
      {
        "tag": "失败案例",
        "title": "Tesseract 日期只有 2/5",
        "paragraphs": [
          "Tesseract 日期提取只有 2/5，日期字体小、有的是斜体，0 和 8、2 和 A 经常认错。V2 改用二维码优先策略直接绕过了这个问题。另外，二维码审计过程中发现原人工黄金集有两条票号漏标，修正前标签已备份——可追溯的评测集能审出标注本身的错误。"
        ]
      }
    ],
    "sourceUrl": "https://github.com/Alaraby527/invoice-risk-review-agent"
  },
  {
    "slug": "ai-pm-coach",
    "index": "08",
    "title": "AI PM Coach｜AI 产品经理求职教练",
    "subtitle": "JD 差距分析 + 7 天行动计划 + 模拟面试四维评分",
    "role": "个人 MVP · 独立设计与开发",
    "projectType": "personal",
    "tier": "supplementary",
    "summary": "投简历前，先让一个 AI 面试官帮你挑刺：粘贴简历和目标 JD，逐条输出能力差距、排出 7 天冲刺计划，还能现场模拟面试、按四个维度打分。找不到证据的差距一律标“简历未体现”，只说真话、不灌鸡汤。",
    "result": "Node.js 原生服务零第三方依赖，前端单文件无框架；支持多模型切换（DeepSeek/通义/Kimi/智谱）；Vercel 一键部署。",
    "tags": [
      "JavaScript",
      "Node.js",
      "LLM",
      "JSON-Schema",
      "MVP"
    ],
    "keyMetric": {
      "value": "0",
      "label": "编造经历（硬约束）"
    },
    "metrics": [
      {
        "value": "4 维",
        "label": "模拟面试评分"
      },
      {
        "value": "7 天",
        "label": "行动计划"
      },
      {
        "value": "0",
        "label": "第三方依赖（后端）"
      }
    ],
    "challenge": "通用求职建议很难落到具体 JD（“多了解 Agent”不如“你的简历缺 RAG 评测经验”），求职者也缺少可重复练习的反馈闭环。",
    "research": [
      "自己和身边同学准备 AI PM 秋招的真实经历：通用建议不落地、模拟面试只能找朋友"
    ],
    "solution": [
      "差距分析必须标注简历原文证据，无证据标记“简历未体现”而非“不具备”",
      "模拟面试基于差距点出题，四维评分（内容相关性/逻辑结构/产品思维/表达清晰度）",
      "API Key 只在页面内存中，不写入 localStorage 或日志"
    ],
    "aiStrategy": [
      "V1 模型编造了简历中不存在的项目经历——提示词增加硬约束 + JSON 输出每条差距必须含 evidence 字段",
      "求职场景下编造经历比能力不足更危险：按 AI 编造的内容去面试会被一问就穿",
      "当前不展示未经验证的效果数字——MVP 先验证核心建议是否有用"
    ],
    "reflection": "不限制模型说什么，它就会挑你爱听的说。强制每条结论都从简历里找证据之后，输出才真正能用——“简历未体现”比“不具备”诚实得多。",
    "detailCards": [],
    "sourceUrl": "https://github.com/Alaraby527/ai-pm-coach",
    "demoUrl": "https://ai-pm-coach-omega.vercel.app/"
  },
  {
    "slug": "qiuzhao-workbench",
    "title": "秋招工作台",
    "subtitle": "岗位追踪 · 每日待办 · 面试复盘 · 习惯打卡（PWA）",
    "role": "个人项目 · 独立设计与开发",
    "projectType": "personal",
    "tier": "supplementary",
    "summary": "一个能装进手机桌面的秋招指挥中心：岗位投递看板、每日待办、面试复盘、习惯打卡四合一，投到哪、面到哪、下一步干嘛一眼看清，支持离线使用，再也不怕信息散成一团。",
    "result": "NestJS + React + PostgreSQL 全栈工作台（25+ 张表）：投递看板、44 项求职准备度检测、BOSS 直聘转化漏斗、面试复盘与每日节律，同时保留 PWA 可安装、可离线。",
    "tags": [
      "NestJS+React",
      "PostgreSQL",
      "全栈",
      "PWA",
      "求职效率"
    ],
    "keyMetric": {
      "value": "PWA",
      "label": "可离线/可安装"
    },
    "metrics": [],
    "challenge": "秋招信息散落在表格、文档、聊天记录里，投递到哪、面到哪、下一步做什么经常断片。",
    "research": [],
    "solution": [
      "岗位投递看板 + 每日待办 + 面试复盘 + 习惯打卡四个模块串成一条求职流水线",
      "全栈实现（NestJS+React+PostgreSQL，25+ 张表）支撑漏斗统计与匹配度评分，另含 44 项准备度清单和 BOSS 直聘打招呼→约面漏斗",
      "PWA 本地存储、离线可用，可添加到手机桌面像原生 App 一样用"
    ],
    "aiStrategy": [],
    "reflection": "工具不追求复杂，能在求职高压期每天被稳定打开、把动作接住，就是价值。",
    "sourceUrl": "https://github.com/Alaraby527/qiuzhao-workbench",
    "demoUrl": "https://dcniaqwtmoca.aiforce.cloud/app/app_17bp5kx9szq",
    "index": "09"
  },
  {
    "slug": "aipm-learning-assistant",
    "title": "AI PM 系统学习平台",
    "subtitle": "12 周计划 + 面试题库 + 能力自测 + 197 篇知识地图",
    "role": "个人项目 · 独立设计与开发",
    "projectType": "personal",
    "tier": "supplementary",
    "summary": "一张 AI 产品经理自学地图：12 周学习路线 + 面试题库 + 能力自测 + 197 篇知识图谱，把又多又散的 Agent、RAG、评测、Prompt 排成一条能跟着走、还能出题考自己的路径。",
    "result": "React+TypeScript 纯前端学习平台，含 12 周计划、题库、自测与 197 篇知识地图。",
    "tags": [
      "React",
      "TypeScript",
      "知识体系",
      "学习产品"
    ],
    "keyMetric": {
      "value": "197 篇",
      "label": "知识地图"
    },
    "metrics": [],
    "challenge": "AI PM 要学的东西又多又散，Agent、RAG、评测、Prompt 工程混在一起，不知道先学什么、学到什么程度。",
    "research": [],
    "solution": [
      "用 12 周计划排出学习路径，配面试题库和能力自测检查掌握度",
      "197 篇知识地图把概念串成可检索的体系，React+TypeScript 纯前端实现"
    ],
    "aiStrategy": [],
    "reflection": "做这个平台也是给自己梳理知识结构的过程——能讲清楚、能出题考自己，才算真的学会。",
    "sourceUrl": "https://github.com/Alaraby527/aipm-learning-assistant",
    "demoUrl": "https://dcniaqwtmoca.aiforce.cloud/app/app_17c9upcbfne",
    "index": "10"
  },
  {
    "slug": "wealth-freedom-planner",
    "index": "11",
    "title": "财富自由路径规划器",
    "subtitle": "像素风 + 蒸汽波的个人财富教练 · 五阶段路径 · 飞书云同步",
    "role": "个人项目 · 独立设计与开发",
    "projectType": "personal",
    "tier": "supplementary",
    "summary": "35 岁存到 300 万，具体要怎么一步步做到？把这条路径做成了一个像素风财富教练：21→35 岁五阶段路线图，每阶段的目标额、行动清单、避坑点全部列清；8 张飞书多维表格云端同步收支与资产，6 张 ECharts 图表实时盯进度，手机电脑都能看。",
    "result": "原生 HTML/CSS/JS 前端 + Node/Express 后端代理飞书多维表格，8 张数据表云端同步、6 张 ECharts 可视化，覆盖阶段指南到财务追踪的 7 个视图。",
    "tags": [
      "Node.js",
      "Express",
      "飞书多维表格",
      "ECharts",
      "原生 JS",
      "像素风"
    ],
    "keyMetric": {
      "value": "5 阶段",
      "label": "21→35 岁路径"
    },
    "metrics": [
      {
        "value": "8 张",
        "label": "飞书数据表"
      },
      {
        "value": "6 张",
        "label": "ECharts 图表"
      },
      {
        "value": "7 个",
        "label": "功能视图"
      }
    ],
    "challenge": "理财计划大多停在口号：不知道自己现在在哪个阶段、这个阶段具体该做什么，收支和资产数据还散在不同 App 和表格里。",
    "research": [],
    "solution": [
      "把 21→35 岁拆成准备期、职场积累、双收入起步、资产爆发、财富自由五阶段，每阶段配行动步骤、避坑指南和里程碑检查",
      "用飞书多维表格当轻量云端数据库（8 张表），Node/Express 代理 token 与请求并做 API Key 鉴权，手机电脑实时同步",
      "原生 JS 单页多视图 + ECharts 6 张图，像素/蒸汽波视觉，前端零框架依赖"
    ],
    "aiStrategy": [],
    "reflection": "这个项目让我完整走了一遍“个人工具产品化”：从信息架构、数据模型到后端代理和可视化；也第一次用飞书多维表格当轻量后端，验证了它做个人产品的效率。",
    "detailCards": [],
    "demoUrl": "https://wealth-freedom-planner.vercel.app",
    "sourceUrl": "https://github.com/Alaraby527/wealth-freedom-planner"
  }

]

export function getProject(slug: string) { return projects.find((p) => p.slug === slug) }
