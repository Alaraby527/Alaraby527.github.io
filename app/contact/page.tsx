import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle, Github, Linkedin, Instagram } from "lucide-react"

export default function ContactPage() {
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

        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              联系<span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">我</span>
            </h1>
          </section>

          <section className="bg-white border-[4px] border-black rounded-[32px] p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-[#FAF5F0] border-3 border-black rounded-xl hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-12 h-12 bg-[#FF6B7A] rounded-lg flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">邮箱</h3>
                <a href="mailto:Alarabyyang@163.com" className="text-gray-600 hover:text-[#FF6B7A] transition-colors">
                  Alarabyyang@163.com
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-[#FAF5F0] border-3 border-black rounded-xl hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-12 h-12 bg-[#2F81F7] rounded-lg flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">电话</h3>
                <a href="tel:18785177418" className="text-gray-600 hover:text-[#2F81F7] transition-colors">
                  18785177418
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-[#FAF5F0] border-3 border-black rounded-xl hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">所在地</h3>
                <span className="text-gray-600">上海·上海理工大学</span>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-[#FAF5F0] border-3 border-black rounded-xl hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-12 h-12 bg-[#4ECDC4] rounded-lg flex items-center justify-center mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">微信</h3>
                <span className="text-gray-600">Y1819664996</span>
              </div>
            </div>
          </section>

          <section className="text-center mt-12">
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
