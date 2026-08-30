import Link from "next/link"
import { ArrowLeft, BookOpen, Tv, Heart, Briefcase, Star } from "lucide-react"

const timelineData = [
  { id: 1, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2005年5月", title: "我出生了", description: "2005年5月，杨惠雯在贵州出生，开启了人生的新篇章。", side: "left" },
  { id: 2, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2012年6月", title: "开启兴趣班之旅", description: "开始上各种兴趣班，包括跆拳道、书法、钢琴、中国舞、声乐等，培养了多方面的兴趣爱好。", side: "right" },
  { id: 2.5, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2015年6月", title: "我有我的使命", description: "一次偶然，随意输入密码竟打开了共享单车的锁，相信自己非同一般。", side: "left" },
  { id: 3, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2022年5月", title: "获得语文报杯一等奖", description: "获得第一届语文报杯时代新人说一等奖，展现了出色的语言表达能力。", side: "right" },
  { id: 4, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2023年6月", title: "高考", description: "经历人生重要的转折点——高考，为未来的大学生活打下基础。", side: "left" },
  { id: 5, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2023年6月", title: "第一次创业：杨梅冰汤圆", description: "第一次创业尝试，摆摊卖杨梅冰汤圆，第一天一碗都没卖出去，但3天后实现回本。", side: "left" },
  { id: 6, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2023年8月", title: "来到上海读大学", description: "离开家乡贵州，来到上海理工大学就读储能科学与工程专业，开启大学生活。", side: "left" },
  { id: 7, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2023年9月", title: "骑行到陆家嘴", description: "与室友从杨浦骑行到陆家嘴，差点没赶上门禁，体验了上海的城市风光。", side: "right" },
  { id: 8, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2023年10月", title: "第一次打辩论", description: "参加校辩论队面试，第一次体验辩论的魅力，虽然一面挂了但埋下了热爱的种子。", side: "right" },
  { id: 9, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2023年11月", title: "跆拳道锦标赛第五名", description: "第一次参加上海市跆拳道锦标赛，凭借扎实的功底拿到第五名的好成绩。", side: "right" },
  { id: 10, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2024年9月", title: "安全阀作业设计", description: "自主学习CAD工具，独立完成安全阀零件图、装配图的标准化绘制，展现了专业能力。", side: "right" },
  { id: 11, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2024年9月", title: "跆拳道社核心干事", description: "担任校跆拳道社核心干事，负责社团招新、公众号运营与团建组织，顺利完成年度招新目标。", side: "right" },
  { id: 12, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2024年11月", title: "自学SolidWorks", description: "自学SolidWorks软件并获得岗位任职证书，提升了工程设计能力。", side: "right" },
  { id: 13, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2024年12月", title: "第一份简历诞生", description: "完成人生第一份简历，正式开启求职之路。", side: "left" },
  { id: 14, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2025年1月", title: "手游推广项目", description: "全流程负责《三国谋定天下》手游抖音/小红书的内容制作、发布与复盘，累计发布视频60+。", side: "left" },
  { id: 15, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2025年6月", title: "二级减速带机构设计", description: "用SolidWorks和CAD完成结构设计，输出规范工程图纸与项目说明书，专业能力进一步提升。", side: "right" },
  { id: 16, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2025年7月", title: "知乎盐言图文创作", description: "作为核心创作者输出多篇符合平台调性的图文，提升内容选题与用户洞察能力。", side: "right" },
  { id: 17, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2025年8月", title: "第二次创业：陪玩工作室", description: "作为创始人搭建4人团队，完成招聘培训与小红书引流，实现日均5单的运营规模。", side: "left" },
  { id: 18, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2025年9月", title: "独自旅行15+城市", description: "开启独自旅行，已经走过15+城市，拓宽了视野和人生阅历。", side: "right" },
  { id: 19, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2025年11月", title: "加入校官媒", description: "加入学校官媒小百合工作室内容运营，负责学院官方社媒的音视频剪辑与选题策划。", side: "right" },
  { id: 20, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2025年11月", title: "第一次当志愿者", description: "担任Keep领跑节志愿活动校领队，负责人员调度与现场协调，保障活动顺利开展。", side: "right" },
  { id: 21, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2025年11月", title: "辩论队副队长", description: "担任学院辩论队副队长，统筹队伍招新、新人培训与赛事带队，建立赛后复盘机制。", side: "right" },
  { id: 22, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2025年11月", title: "开启求职准备", description: "参加精智训练营，感受到竞争压力，开始认真准备求职，思考未来发展方向。", side: "left" },
  { id: 25, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年1月", title: "线下看新国辩", description: "第一次线下看新国辩，见到喜欢很久的辩手詹青云，实现了追星梦想。", side: "right" },
  { id: 26, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年1月", title: "科学合伙人大会志愿", description: "在科学合伙人大会嘉宾接待组负责嘉宾接待、引导与展位讲解，保障大会接待环节顺畅落地。", side: "right" },
  { id: 27, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2026年2月", title: "搭建AI个人网站", description: "第一次接触vibe cording，零基础借助AI工具，8h内完成个人网站搭建与上线。", side: "left" },
  { id: 28, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年2月", title: "上海杯辩论赛志愿", description: "大年初三为爱（辩论）回到上海，担任上海杯华语辩论赛后勤部志愿者，负责赛事设备调试与直播。", side: "right" },
  { id: 31, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2026年4月", title: "世界科学智能大赛", description: "参与电力市场交易赛道，从特征工程、模型、策略多维度优化储能电站收益。", side: "left" },
  { id: 32, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2026年4月", title: "求职助手网页搭建", description: "独立完成产品调研、PRD撰写与网页搭建，打造求职全流程辅助工具。", side: "left" },
  { id: 33, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年5月", title: "线上辩论集训营", description: "参加线上辩论集训营，第一次打网辩，新国辩冠军当教练，一辩稿被夸赞为'天降英才'。", side: "right" },
  { id: 33.5, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年5月", title: "加入海鸥计划", description: "加入海鸥计划，开启与商汤的缘分。", side: "right" },
  { id: 35, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年5月", title: "黑客松大赛三等奖", description: "第一次参加黑客松，在抖音AI+创变者计划苏州姑苏站与团队一起获得三等奖。", side: "right" },
  { id: 35.5, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年6月", title: "参观商汤科技大厦", description: "参观商汤科技大厦，对AI有进一步见识，更加明确AI求职方向。", side: "right" },
  { id: 36.5, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年6月", title: "与商汤科技COO骆静老师1对1深度谈话", description: "与商汤科技COO骆静老师进行1对1深度谈话，收获颇深，对职业发展有了更深的思考。", side: "right" },
  { id: 37, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2026年6月", title: "成为抖音AI创变者计划社长", description: "成功成为抖音AI创变者计划社长，带领团队推动AI创新项目落地。", side: "left" },
  { id: 37.5, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年6月", title: "参加芜湖大学生人才引进计划", description: "初次来到芜湖，参加芜湖大学生人才引进计划，了解当地人才政策与发展机遇。", side: "right" },
  { id: 39.5, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年7月", title: "参加观猹AI产品经理训练营", description: "参加观猹AI产品经理训练营并担任作业批改助教，提升产品知识与教学能力。", side: "right" }
]

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="container mx-auto px-4 py-8">
        <nav className="relative flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-12">
          <Link href="/" className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0" aria-label="首页">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 text-[18px] font-bold hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              返回首页
            </Link>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto space-y-16">
          <section className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              深入<span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block hl-block">了解我</span>
            </h1>
          </section>

          <section className="bg-white border-[4px] border-black rounded-[32px] p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px]"></div>
              <h2 className="text-2xl md:text-3xl font-bold">ID卡片</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b-2 border-gray-200">
                  <span className="text-gray-500 font-medium">姓名</span>
                  <span className="font-bold text-lg">杨惠雯</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b-2 border-gray-200">
                  <span className="text-gray-500 font-medium">出生年月</span>
                  <span className="font-bold text-lg">2005年5月</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b-2 border-gray-200">
                  <span className="text-gray-500 font-medium">大学</span>
                  <span className="font-bold text-lg">上海理工大学</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-500 font-medium">专业</span>
                  <span className="font-bold text-lg">储能科学与工程</span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-48 h-48 md:w-64 md:h-64 border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <img 
                    src="/images/myphoto.png" 
                    alt="个人照片" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border-[4px] border-black rounded-[32px] p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px]"></div>
              <h2 className="text-2xl md:text-3xl font-bold">近日生活</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-12 h-12 bg-[#FF6B7A] rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">最近在读</h3>
                <p className="text-gray-600 text-sm leading-relaxed">《趁着年轻，我偏要勉强》</p>
              </div>
              <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-12 h-12 bg-[#2F81F7] rounded-lg flex items-center justify-center mb-4">
                  <Tv className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">最近狂刷</h3>
                <p className="text-gray-600 text-sm leading-relaxed">《新国辩》</p>
              </div>
              <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">最近感兴趣</h3>
                <p className="text-gray-600 text-sm leading-relaxed">vibe cording</p>
              </div>
            </div>
          </section>

          <section className="bg-white border-[4px] border-black rounded-[32px] p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 bg-[#FFD700] border-2 border-black rounded-[5px]"></div>
              <h2 className="text-2xl md:text-3xl font-bold">地球Online 开放世界进度</h2>
            </div>
            <div className="relative h-[500px] overflow-y-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#0B0B0B] rounded-full"></div>
                <div className="space-y-12 py-4">
                  {timelineData.map((item, index) => (
                    <div 
                      key={item.id} 
                      className={`relative flex items-center ${item.side === 'left' ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className={`w-1/2 ${item.side === 'left' ? 'pr-8 md:pr-12 text-right' : 'pl-8 md:pl-12'}`}>
                        <div className={`inline-block ${item.side === 'left' ? 'ml-auto' : 'mr-auto'} transform transition-all duration-300 hover:scale-105`}>
                          <span className={`inline-block ${item.typeColor} text-white text-xs font-semibold px-3 py-1 rounded-full mb-2`}>
                            {item.type}
                          </span>
                          <div className={`bg-[#FAF5F0] border-3 border-black rounded-xl p-4 ${item.side === 'left' ? 'ml-auto' : 'mr-auto'} hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300`}>
                            <span className="text-gray-500 text-sm">{item.date}</span>
                            <h3 className="font-bold text-lg mt-1 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FFD700] border-4 border-black rounded-full z-10"></div>
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 font-semibold transition-colors">
              <ArrowLeft className="w-5 h-5" />
              返回首页
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
