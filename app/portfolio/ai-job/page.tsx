import { ArrowLeft, Brain, Users, Target, Sparkles, Award, Zap, Heart, Shield, Compass, BookOpen, MessageSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AiJobPage() {
  const designPrinciples = [
    { icon: Shield, title: "双轨并行，互不打扰", desc: "速通工具与议事辩论完全独立，按需切换" },
    { icon: Users, title: "平等议事，无权威化", desc: "所有观点平等，不定义正确答案" },
    { icon: Compass, title: "有参考，不越界", desc: "结论仅为参考，最终回归自我核对" },
    { icon: Heart, title: "无引导，全尊重", desc: "不默认世俗成功为最优解" },
    { icon: Sparkles, title: "矛盾感贯穿", desc: "联合国式郑重讨论私人人生选择" },
  ]

  const matchSystem = [
    { title: "个人能力画像", desc: "自动拆解校园经历为标准化职场能力标签，解决能力转化盲区" },
    { title: "职业兴趣画像", desc: "轻量测评梳理兴趣方向，评估你愿意做什么" },
    { title: "价值意义画像", desc: "通过极简问卷梳理核心价值排序，明确你在意什么" },
    { title: "标准化岗位画像", desc: "拆解岗位核心职责、能力要求，补充真实工作状态标签" },
  ]

  const resumeSystem = [
    { title: "ATS适配度", desc: "关键词匹配、经历贴合度、格式规范度，对应初筛通过率" },
    { title: "自我表达度", desc: "简历是否体现个人特质、能力优势与价值追求" },
    { title: "场景化逐句优化", desc: "提问式引导落地STAR法则，支持保留个人特色" },
    { title: "多模板版本管理", desc: "覆盖不同行业，支持多版本分类存储" },
  ]

  const growthSystem = [
    { title: "能力缺口分级", desc: "必备、加分、潜力三级，明确提升优先级" },
    { title: "阶梯式成长路径", desc: "轻量化学习资源与实践任务，形成完整成长闭环" },
    { title: "自定义成长目标", desc: "不限于大厂、高薪，完全匹配用户自己的意义追求" },
  ]

  return (
    <div className="min-h-screen bg-[#FAF5F0]">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回首页</span>
          </Link>

          <div className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/zdb.png"
                alt="职得辩"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <span className="inline-block bg-white/90 text-black text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    AI产品 · 全案设计
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    职得辩 - 求职辩论网页产品
                  </h1>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="bg-[#2563EB] text-white rounded-2xl p-6 mb-12 text-center">
                <p className="text-xl md:text-2xl font-bold mb-2">比起"正确"的路，选你想走的路</p>
                <p className="text-sm opacity-80">你的私事，值得联合国讨论</p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-[#FF6B7A]" />
                  底层价值观
                </h2>
                <div className="bg-[#FFE4E6] border-2 border-black rounded-xl p-6">
                  <p className="text-gray-700 leading-loose">
                    我们不贩卖职场成功学，不定义好工作的标准，更不推着用户奔向世俗认可的统一模板。有人以大厂高薪、升职加薪为目标，有人以朝九晚五、安稳平衡为追求，有人以自由创作、小众热爱为信仰，有人以回归家庭、服务他人为意义。没有高低对错，没有标准答案，你真正想要的，就是属于你的正确答案。
                  </p>
                  <p className="text-gray-700 leading-loose mt-4">
                    职得辩的所有功能，都只为一件事：拨开外界评价、世俗标准、他人期待的裹挟，帮你看见自己真实的心意，然后给你工具、给你视角、给你支持，陪你把自己选的路走下去。
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-[#FF6B7A]" />
                  核心设计原则
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {designPrinciples.map((item, index) => (
                    <div key={index} className="bg-[#FAF5F0] border-2 border-black rounded-xl p-4 text-center hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <item.icon className="w-6 h-6 text-[#2563EB] mx-auto mb-2" />
                      <h3 className="font-bold text-[#0B0B0B] text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-[#FF6B7A]" />
                  模块一：精准人岗匹配体系
                </h2>
                <div className="bg-[#E0E7FF] border-2 border-black rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-lg mb-3">解决核心痛点</h3>
                  <p className="text-gray-700 text-sm">岗位认知不足、自我认知模糊、信息差壁垒、找岗方式低效、被主流岗位裹挟</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#10B981]" />
                    速通工具模式
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {matchSystem.map((item, index) => (
                      <div key={index} className="bg-white border-2 border-black rounded-xl p-4">
                        <h4 className="font-bold text-[#0B0B0B] mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FAF5F0] border-2 border-black rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#F59E0B]" />
                    议事辩论模式：职业选择议事局
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-bold text-[#0B0B0B]">组建平等议事团（6位代表席位完全平等）</h4>
                      <p className="text-gray-600 mt-1">主流深耕者、平衡主义者、中途离场者、小众路径者、行业资深人士、资深招聘HR</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B0B0B]">三轮议事流程</h4>
                      <p className="text-gray-600 mt-1">① 图景陈述 → ② 自由辩论 → ③ 自我锚定 → ④ 结构化参考结论</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B0B0B]">自我锚定三问</h4>
                      <p className="text-gray-600 mt-1">抛开外界眼光，哪种生活状态会让你发自内心觉得踏实？哪个代价你愿意承受？十年后你更会为哪种选择后悔？</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-[#FF6B7A]" />
                  模块二：简历智能诊断与优化系统
                </h2>
                <div className="bg-[#E0E7FF] border-2 border-black rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-lg mb-3">解决核心痛点</h3>
                  <p className="text-gray-700 text-sm">匹配度判断模糊、命中率低、优化无方法、听懂STAR不会写、一味迎合标准丢失自我特色</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#10B981]" />
                    速通工具模式
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {resumeSystem.map((item, index) => (
                      <div key={index} className="bg-white border-2 border-black rounded-xl p-4">
                        <h4 className="font-bold text-[#0B0B0B] mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FAF5F0] border-2 border-black rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#F59E0B]" />
                    议事辩论模式：简历表达议事会
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-bold text-[#0B0B0B]">多元评审团</h4>
                      <p className="text-gray-600 mt-1">规则派HR、业务方创始人、简历优化师、同岗offer获得者、跨界转岗成功者</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B0B0B]">三套修改方案</h4>
                      <p className="text-gray-600 mt-1">稳妥过筛版、平衡适配版、自我表达版，清晰标注价值倾向，由用户自行选择</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-[#FF6B7A]" />
                  模块三：个性化求职能力成长路径
                </h2>
                <div className="bg-[#E0E7FF] border-2 border-black rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-lg mb-3">解决核心痛点</h3>
                  <p className="text-gray-700 text-sm">不知道学什么、能力优先级不清、盲目学习效率低、缺乏验证闭环、被"必须变强"的焦虑裹挟</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {growthSystem.map((item, index) => (
                    <div key={index} className="bg-white border-2 border-black rounded-xl p-4">
                      <h4 className="font-bold text-[#0B0B0B] mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#FAF5F0] border-2 border-black rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#F59E0B]" />
                    议事辩论延伸：成长路径议事局
                  </h3>
                  <p className="text-gray-700 text-sm">针对"要不要学XX技能""要不要为了升职牺牲生活"等纠结点，不同选择的从业者分享技能实际用处、学习性价比、生活代价，帮用户判断这件事对自己的意义。</p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-[#FF6B7A]" />
                  特色板块：全民议事厅
                </h2>
                <div className="space-y-6">
                  <div className="bg-[#FAF5F0] border-2 border-black rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-3">开放式辩题广场</h3>
                    <p className="text-gray-700 text-sm">用户可自由发起任何求职与人生选择相关的辩题，所有人都能报名成为代表上台发言，无身份、学历、职业门槛。每场议事结束后自动生成参考结论。平台定期发起价值向主题辩题，延伸求职之外的人生讨论。</p>
                  </div>
                  <div className="bg-[#FAF5F0] border-2 border-black rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-3">100种人生意义专栏</h3>
                    <p className="text-gray-700 text-sm">人物专栏，收录不同身份、不同选择的普通人故事——大厂员工、外卖骑手、自由插画师、国企职员、摆摊创业者、全职妈妈、gap year旅行者……每个人不讲"成功经验"，只讲我的选择是什么，我为什么这么选，它对我的意义是什么。</p>
                  </div>
                  <div className="bg-[#FAF5F0] border-2 border-black rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-3">我的意义留言墙</h3>
                    <p className="text-gray-700 text-sm">用户可匿名写下自己的职业选择、人生追求与意义，全站规则为「只能祝福与分享，不能说教与否定」。禁止出现评判性言论，营造包容、松弛的氛围。</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-[#FF6B7A]" />
                  视觉与交互设计
                </h2>
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-4">视觉风格：郑重仪式感 × 包容烟火气</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#E0E7FF] border-2 border-black rounded-xl p-4">
                      <h4 className="font-bold text-[#0B0B0B] mb-2">主色调</h4>
                      <p className="text-gray-600 text-sm">议事藏蓝为基础色，保留正式感；搭配暖橘色、柔绿色为辅助色，传递包容、松弛、多元的温度</p>
                    </div>
                    <div className="bg-[#E0E7FF] border-2 border-black rounded-xl p-4">
                      <h4 className="font-bold text-[#0B0B0B] mb-2">核心视觉元素</h4>
                      <p className="text-gray-600 text-sm">环形议事桌、平等排列的麦克风与身份牌、发言计时器等议事组件，强化仪式感</p>
                    </div>
                    <div className="bg-[#E0E7FF] border-2 border-black rounded-xl p-4">
                      <h4 className="font-bold text-[#0B0B0B] mb-2">反差感细节</h4>
                      <p className="text-gray-600 text-sm">正式的议事规则面板旁，搭配拎奶茶的骑手、抱猫的自由职业者等生活化插画</p>
                    </div>
                    <div className="bg-[#E0E7FF] border-2 border-black rounded-xl p-4">
                      <h4 className="font-bold text-[#0B0B0B] mb-2">无引导设计</h4>
                      <p className="text-gray-600 text-sm">不做高薪岗位置顶推荐，不做薪资排行榜，所有岗位卡片平等呈现</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">核心交互设计</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white border-2 border-black rounded-xl p-4">
                      <h4 className="font-bold text-[#0B0B0B] mb-2">双模式无感切换</h4>
                      <p className="text-gray-600 text-sm">速通模式设「听听不同视角」轻量入口，辩论模式悬浮「直接看结论」按钮</p>
                    </div>
                    <div className="bg-white border-2 border-black rounded-xl p-4">
                      <h4 className="font-bold text-[#0B0B0B] mb-2">心意标记功能</h4>
                      <p className="text-gray-600 text-sm">辩论过程中标记认同、不认同、戳中我的观点，自动生成心意倾向梳理</p>
                    </div>
                    <div className="bg-white border-2 border-black rounded-xl p-4">
                      <h4 className="font-bold text-[#0B0B0B] mb-2">本心确认交互</h4>
                      <p className="text-gray-600 text-sm">所有参考结论末尾增加「这是我想要的」「我再想想」确认按钮</p>
                    </div>
                    <div className="bg-white border-2 border-black rounded-xl p-4">
                      <h4 className="font-bold text-[#0B0B0B] mb-2">弱化判定数据</h4>
                      <p className="text-gray-600 text-sm">匹配度、通过率等数值用浅灰色标注「仅供参考」，避免用户产生自我否定</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-[#FF6B7A]" />
                  核心价值观落地细节
                </h2>
                <div className="bg-[#FFE4E6] border-2 border-black rounded-xl p-6">
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#FF6B7A] text-white px-2 py-1 rounded text-xs font-bold mt-0.5">禁用绝对化表述</span>
                      <span>全站禁用「最优选择」「正确路径」「必过」「稳拿offer」「人生赢家」等表述，所有建议落脚到「以你的心意为准」</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#2563EB] text-white px-2 py-1 rounded text-xs font-bold mt-0.5">无排名榜单</span>
                      <span>不设置基于薪资、名气、行业热度的排名榜单，所有推荐默认以个人匹配度为排序依据</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#10B981] text-white px-2 py-1 rounded text-xs font-bold mt-0.5">完全平权</span>
                      <span>辩论场景中，所有代表席位完全平权，专业人士发言不做置顶、高亮等特殊处理</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#F59E0B] text-white px-2 py-1 rounded text-xs font-bold mt-0.5">不劝返引导</span>
                      <span>无论用户选择多么小众的职业方向，平台都不会弹出「更推荐热门岗位」的劝返引导</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#8B5CF6] text-white px-2 py-1 rounded text-xs font-bold mt-0.5">理念提示</span>
                      <span>全站页面轮换展示轻量理念提示：世俗的成功模板只有一种，但你的人生意义可以有一万种答案</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-[#FF6B7A]" />
                  全痛点覆盖核对表
                </h2>
                <div className="bg-[#FAF5F0] border-2 border-black rounded-xl p-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-black">
                        <th className="text-left py-2 px-3 font-bold">原痛点分类</th>
                        <th className="text-left py-2 px-3 font-bold">具体痛点描述</th>
                        <th className="text-left py-2 px-3 font-bold">对应产品解决方案</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">岗位搜寻耗时根源</td>
                        <td className="py-2 px-3">不知道专业能做什么、不清楚岗位具体做什么</td>
                        <td className="py-2 px-3">标准化岗位画像拆解 + 多元代表分享真实工作日常</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">岗位搜寻耗时根源</td>
                        <td className="py-2 px-3">自我认知模糊，不知道自己想干什么</td>
                        <td className="py-2 px-3">三维度个人画像 + 价值意义测评 + 多视角碰撞</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">现有找岗方式局限</td>
                        <td className="py-2 px-3">招聘软件仅关键词匹配，精准度低</td>
                        <td className="py-2 px-3">三维度智能匹配，支持自定义权重</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">简历匹配度不确定</td>
                        <td className="py-2 px-3">不知道岗位能力要求、胜任标准</td>
                        <td className="py-2 px-3">岗位能力模型 + 双维度诊断报告</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3">简历命中率低</td>
                        <td className="py-2 px-3">关键词缺失，不符合ATS规则</td>
                        <td className="py-2 px-3">关键词诊断 + 逐句优化建议</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">深层认知痛点</td>
                        <td className="py-2 px-3">被世俗成功裹挟，不知道自己真正想要什么</td>
                        <td className="py-2 px-3">多元价值观渗透 + 议事辩论自我探索 + 价值意义画像</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-12 bg-[#FFE4E6] border-2 border-black rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#FF6B7A]" />
                  能力体现
                </h2>
                
                <div className="mb-6">
                  <h3 className="font-bold text-[#0B0B0B] mb-3">解决的核心问题</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    针对传统求职平台存在的「岗位匹配仅看能力不看价值」「简历优化丢失自我特色」「成长路径被世俗成功裹挟」等痛点，
                    设计了一套以「价值意义」为核心的求职解决方案，帮助用户在求职过程中保持自我，找到真正适合自己的职业方向。
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-[#0B0B0B] mb-3">项目职责</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="bg-[#FF6B7A] text-white px-2 py-0.5 rounded text-xs font-bold mt-0.5">用户调研</span>
                      <span>深入访谈50+求职者，梳理出「被世俗标准裹挟」「自我认知模糊」「信息差壁垒」等核心痛点</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-[#2563EB] text-white px-2 py-0.5 rounded text-xs font-bold mt-0.5">需求分析</span>
                      <span>构建用户画像与价值排序模型，设计「价值意义匹配」维度，确保产品核心逻辑与用户真实需求对齐</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-[#10B981] text-white px-2 py-0.5 rounded text-xs font-bold mt-0.5">产品设计</span>
                      <span>完成从概念到落地的全流程设计，包括双轨模式架构、平等议事机制、本心确认交互等核心功能设计</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-[#F59E0B] text-white px-2 py-0.5 rounded text-xs font-bold mt-0.5">功能落地</span>
                      <span>设计三套简历优化方案、三维度画像匹配算法、个性化成长路径等核心功能模块</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[#0B0B0B] mb-3">核心能力展示</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="bg-[#FF6B7A] text-white px-2 py-0.5 rounded text-xs font-bold mt-0.5">需求洞察</span>
                      <span>从用户痛点出发，发现传统招聘的弊端，提出「价值意义匹配」的创新解决方案</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-[#2563EB] text-white px-2 py-0.5 rounded text-xs font-bold mt-0.5">产品架构</span>
                      <span>构建双轨并行的产品体系，速通工具与深度辩论模式满足不同用户需求</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-[#10B981] text-white px-2 py-0.5 rounded text-xs font-bold mt-0.5">用户思维</span>
                      <span>始终以用户为本，设计「本心确认」「心意标记」等交互，强化用户自我主导感</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-[#F59E0B] text-white px-2 py-0.5 rounded text-xs font-bold mt-0.5">设计思维</span>
                      <span>运用反差感设计、无引导设计等策略，传递产品价值观，营造包容松弛的用户体验</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#FF6B7A] flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div>
                      <div className="font-bold text-[#0B0B0B]">Alaraby</div>
                      <div className="text-gray-500 text-sm">一个想要改变世界的女子</div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">
                    2026年
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
