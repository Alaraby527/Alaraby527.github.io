import { BookOpen, Tv, Heart, Briefcase, Star } from "lucide-react"

const timelineData = [
  { id: 1, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2005年5月", title: "我出生了", description: "2005年5月，杨惠雯在贵州出生，开启了人生的新篇章。", side: "left" },
  { id: 2, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2015年6月", title: "我有我的使命", description: "一次偶然，随意输入密码竟打开了共享单车的锁，相信自己非同一般。", side: "left" },
  { id: 3, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2022年5月", title: "获得语文报杯一等奖", description: "获得第一届语文报杯时代新人说一等奖，展现了出色的语言表达能力。", side: "right" },
  { id: 4, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2023年6月", title: "高考", description: "经历人生重要的转折点——高考，为未来的大学生活打下基础。", side: "left" },
  { id: 5, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2023年6月", title: "第一次创业：杨梅冰汤圆", description: "第一次创业尝试，摆摊卖杨梅冰汤圆，第一天一碗都没卖出去，但3天后实现回本。", side: "left" },
  { id: 6, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2023年8月", title: "来到上海读大学", description: "离开家乡贵州，来到上海理工大学就读储能科学与工程专业，开启大学生活。", side: "left" },
  { id: 7, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2023年10月", title: "第一次打辩论", description: "参加校辩论队面试，第一次体验辩论的魅力，虽然一面挂了但埋下了热爱的种子。", side: "right" },
  { id: 8, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2023年11月", title: "跆拳道锦标赛第五名", description: "第一次参加上海市跆拳道锦标赛，凭借扎实的功底拿到第五名的好成绩。", side: "right" },
  { id: 9, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "大学期间", title: "闲鱼开店", description: "在闲鱼上开了一间小店，跑通从选品、上架、客服到发货的完整流程。", side: "right" },
  { id: 10, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2025年8月", title: "第二次创业：陪玩工作室", description: "作为创始人搭建4人团队，完成招聘培训与小红书引流，实现日均5单的运营规模。", side: "left" },
  { id: 11, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2025年9月", title: "独自旅行15+城市", description: "海潮起潮落万年，而我只是碰巧路过。", side: "right" },
  { id: 12, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2025年11月", title: "辩论队副队长", description: "担任学院辩论队副队长，统筹队伍招新、新人培训与赛事带队，建立赛后复盘机制。", side: "right" },
  { id: 13, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2025年11月", title: "开启求职准备", description: "参加精智训练营，感受到竞争压力，开始认真准备求职，思考未来发展方向。", side: "left" },
  { id: 14, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年1月", title: "线下看新国辩", description: "第一次线下看新国辩，见到喜欢很久的辩手詹青云，实现了追星梦想。", side: "right" },
  { id: 15, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2026年2月", title: "搭建AI个人网站", description: "第一次接触vibe cording，零基础借助AI工具，8h内完成个人网站搭建与上线。", side: "left" },
  { id: 16, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年2月", title: "上海杯辩论赛志愿", description: "大年初三为爱（辩论）回到上海，担任上海杯华语辩论赛后勤部志愿者，负责赛事设备调试与直播。", side: "right" },
  { id: 17, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年5月", title: "黑客松大赛三等奖", description: "第一次参加黑客松，在抖音AI+创变者计划苏州姑苏站与团队一起获得三等奖。", side: "right" },
  { id: 18, type: "支线任务", typeColor: "bg-[#2F81F7]", date: "2026年5月", title: "线上辩论集训营", description: "参加线上辩论集训营，第一次打网辩，新国辩冠军当教练，一辩稿被夸赞为“天降英才”。", side: "right" },
  { id: 19, type: "主线任务", typeColor: "bg-[#FF6B7A]", date: "2026年6月", title: "成为抖音AI创变者计划社长", description: "未来有一天，我也会正式加入字节吗？", side: "left" }
]

// 原独立页面 /about-me 的内容,现合并进关于页(十八般武艺之前)
export function AboutMeContent() {
  return (
    <section className="container mx-auto px-4 pb-16 md:pb-24">
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

                </div>
    </section>
  )
}
