import { ArrowRight, Mail, Phone, MessageCircle, MapPin } from "lucide-react"
import Link from "next/link"

// 关于我速览:一段介绍 + 数字 + 三个入口(完整内容在 /about 与 /about-me,此处不重复)
const stats = [
  { value: "5", label: "个 AI 项目实践" },
  { value: "14", label: "条方法论沉淀" },
  { value: "15+", label: "城独自旅行" },
  { value: "37", label: "条人生进度" },
]

export function AboutTeaser() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            关于<span className="bg-[#2F81F7] text-white px-3 py-1 inline-block hl-block">我</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            你好！我叫杨惠雯，出生于2005年5月，一个来自贵州大山的女孩。我的前半辈子活成了老师眼里的"尖子生"，最后却因高考失利沦为求职链底层双非选手。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#FAF5F0] border-2 border-black rounded-2xl p-5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-2xl md:text-3xl font-bold text-[#0B0B0B]">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
          >
            关于我
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/about-me"
            className="inline-flex items-center justify-center gap-2 bg-white text-black border-2 border-black px-8 py-4 rounded-xl font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            深入了解我
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// 联系我:首页收尾,联系方式直达
const contacts = [
  { icon: Mail, label: "邮箱", value: "Alarabyyang@163.com", href: "mailto:Alarabyyang@163.com" },
  { icon: Phone, label: "电话", value: "18785177418", href: "tel:18785177418" },
  { icon: MessageCircle, label: "微信", value: "Y1819664996", href: undefined },
  { icon: MapPin, label: "所在地", value: "上海 · 上海理工大学", href: undefined },
]

export function ContactCta() {
  return (
    <section className="container mx-auto px-4 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black text-white rounded-[32px] border-4 border-black p-8 md:p-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              联系<span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block hl-block">我</span>
            </h2>
            <p className="text-white/70">总有一天我会创造出改变世界的产品！期待与你聊聊。</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {contacts.map((contact) => {
              const inner = (
                <>
                  <contact.icon className="w-5 h-5 mb-2" />
                  <p className="text-white/50 text-xs mb-1">{contact.label}</p>
                  <p className="font-semibold text-sm md:text-base">{contact.value}</p>
                </>
              )
              return contact.href ? (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="bg-[#1c1c1c] border-2 border-white/20 rounded-2xl p-5 text-center hover:border-[#FFC224] transition-colors"
                >
                  {inner}
                </a>
              ) : (
                <div key={contact.label} className="bg-[#1c1c1c] border-2 border-white/20 rounded-2xl p-5 text-center">
                  {inner}
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-xl font-semibold hover:bg-[#FFC224] transition-colors"
            >
              <Mail className="w-5 h-5" />
              联系我
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
