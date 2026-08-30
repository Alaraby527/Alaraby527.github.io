import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      title: "杨梅冰汤圆摆摊（创业）",
      description: "第一次创业：摆摊卖杨梅冰汤圆。第一天一碗都没卖出去，但 3 天后实现回本。",
      icon: "/images/agency.png",
    },
    {
      title: "视频剪辑 · 新媒体运营 · B站游戏推广（实习）",
      description: "从视频剪辑入门，到新媒体运营，再到全流程负责《三国谋定天下》手游的游戏推广：内容制作、发布与复盘，累计发布视频 60+。",
      icon: "/images/company.png",
    },
    {
      title: "接单做 PPT（副业）",
      description: "课余接单制作 PPT。",
      icon: "/images/busines.png",
    },
    {
      title: "闲鱼开店（创业）",
      description: "在闲鱼上开了一间小店，跑通从选品、上架、客服到发货的完整流程。",
      icon: "/images/startup.png",
    },
    {
      title: "游戏陪玩店 创始人（创业）",
      description: "0 成本启动「无畏契约」游戏陪玩店：3 天完成筹备，搭建 4 人团队，完成招聘培训与小红书引流，5 天私域 100+，实现日均 5 单的运营规模。",
      icon: "/images/agency.png",
    },
    {
      title: "上海自动化仪表 采购实习生（实习）",
      description: "负责采购合同全流程处理与供应商比价，借助 AI 将比价制作效率提升 3 倍。",
      icon: "/images/company.png",
    },
    {
      title: "物智进化 机械装配实习生（实习）",
      description: "参与舵机组装调参，提出流水线作业方案，生产效率提升 10 倍且编号零出错。",
      icon: "/images/busines.png",
    },
    {
      title: "物智进化 数据采集&标注实习生（实习）",
      description: "制定标准化 SOP 与三级判准，日产出 1800+ 位列实习生第一，产能提升 50%。",
      icon: "/images/startup.png",
    },
    {
      title: "唯享科技 测试实习生（实习）",
      description:
        "独立完成Coze平台智能识别工作流搭建，设计识别-校验-兜底的完整逻辑，输出产品文档、跟进问题闭环、管理多任务优先级，还原企业内AI产品经理对接业务、落地功能、保障上线的真实工作内容。",
      icon: "/images/agency.png",
    },
    {
      title: "理想 产品专家实习生（实习 · 门店运营）",
      description:
        "拿到理想的产品专家实习 offer，入职后发现实际做的是门店运营。上两天班后选择离开——但正是这段经历，让我确认了自己真正想要的方向。",
      icon: "/images/company.png",
    },
    {
      title: "提示词实习生（实习）",
      description: "专职与 Prompt 打交道：结构化编写、版本管理、离线评测与灰度回滚，让模型输出稳定、可控、可迭代。",
      icon: "/images/busines.png",
    },
    {
      title: "京东零售 AI 导购 Agent（实习）",
      description:
        "面向黑电/3C 品类负责 AI 导购 Agent 迭代优化：重构 RAG 六层分层知识库，设计 6 套 Prompt 模板与评测机制，搭建全维度指标看板与 Bad Case 闭环治理体系。",
      icon: "/images/startup.png",
    },
    {
      title: "火花工坊 AI 运营（实习）",
      description:
        "负责用户调研与平台重设计、作者成长体系与 Mentor SOP 设计，在 Dify 上落地 4 个应用与主控 Workflow，周复盘从 2 小时压缩到 3 分钟。",
      icon: "/images/agency.png",
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
              经过多次尝试，我终于找到自己的dream job，我要当产品经理！这条路从摆摊一路走到 AI 产品，每一步都算数。
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl p-5 md:p-6 flex items-start gap-4 md:gap-6">
                <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white text-sm md:text-base font-bold flex items-center justify-center border-2 border-black">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-xl font-bold text-[#0B0B0B] mb-1 leading-snug">{exp.title}</h3>
                  <p className="text-[#393939] text-sm md:text-base leading-relaxed">{exp.description}</p>
                </div>
                <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 hidden sm:block">
                  <Image
                    src={exp.icon || "/placeholder.svg"}
                    alt={exp.title}
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
