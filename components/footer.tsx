import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/newsletter-icon.png"
                  alt="订阅"
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>

              <div className="w-full flex-1 bg-white border-4 border-black rounded-3xl py-4 px-4 md:py-6 md:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-black">订阅我的资讯邮件</h3>
                </div>

                <div className="relative w-full md:w-auto md:min-w-[400px] lg:min-w-[480px]">
                  <Input
                    type="email"
                    placeholder="请输入你的邮箱地址"
                    className="border-4 border-black rounded-xl px-4 md:px-6 h-14 md:h-16 pr-32 md:pr-44 text-base md:text-lg placeholder:text-gray-500"
                  />
                  <Button className="absolute right-2 top-2 bottom-2 bg-black text-white hover:bg-black/90 rounded-[10px] px-6 md:px-10 text-sm md:text-base font-semibold whitespace-nowrap h-auto">
                    订阅
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/phototwo.png"
                    alt="Alaraby"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">Alaraby</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                一个超爱瞎折腾，妄想改变世界的中国女人
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">页面</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    首页
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="hover:text-white transition-colors">
                    作品集
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    关于我
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    博客
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">更多</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/about-me" className="hover:text-white transition-colors">
                    深入了解我
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    联系我
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">联系我们</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:Alarabyyang@163.com" className="hover:text-white transition-colors">
                    Alarabyyang@163.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:18785177418" className="hover:text-white transition-colors">
                    18785177418
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>由Alaraby二创-由V0驱动</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
