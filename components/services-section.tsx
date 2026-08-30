import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "能文",
      description: "书法、写作（全国一等奖、语文130+选手）",
      image: "/images/jz.jpg",
    },
    {
      title: "能武",
      description: "跆拳道（参与两次市赛前10名）、武术、中国舞（八级）、urban（练习时长5天）",
      image: "/images/tqd.jpg",
    },
    {
      title: "音乐",
      description: "钢琴、吉他、尤克里里、陶笛、古筝、流行",
      image: "/images/yy.jpg",
    },
    {
      title: "规划鬼才",
      description: "累计时长一个月，独自走过15+城市，成功走遍所有意愿景点，费用总包1.5w-",
      image: "/images/jh.jpg",
    },
    {
      title: "财富自由遗珠",
      description: "摆摊创业3天回本7天营收破千，后学生放假遂倒闭；期末周倒卖资料3天营收破千；0成本启动游戏陪玩店，3天完成筹备，5天私域100+",
      image: "/images/chuangye.jpg",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              我会的<span className="bg-[#FF4A60] text-white px-3 py-1 inline-block hl-block">十八般武艺</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              鄙人不才，虽然不精，但什么都会点。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px] h-[280px] relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[18px] leading-[30px] font-medium text-[#393939]">{service.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="联系我"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">联系我</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                这个人有才华了！我要跟她交朋友！
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]" asChild>
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  联系我
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
