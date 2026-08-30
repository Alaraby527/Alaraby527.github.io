"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const tags = [
  { text: "单人 15 城漂流选手", color: "bg-[#FF6B7A]" },
  { text: "创业双连败结业生", color: "bg-[#2F81F7]" },
  { text: "杂学半吊子收藏家", color: "bg-[#FFD700]" },
  { text: "吉他入门永久会员", color: "bg-[#4ECDC4]" },
  { text: "辩台线下预备役", color: "bg-[#95E1D3]" },
  { text: "平权理想打工人", color: "bg-[#F38181]" },
  { text: "改变世界进度 0.1%", color: "bg-[#AA96DA]" },
  { text: "蓝发限定皮肤", color: "bg-[#FCBAD3]" },
]

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredTag, setHoveredTag] = useState<number | null>(null)

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex items-start">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            我是 <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block hl-block">Alaraby</span>，一名来自{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block hl-block">贵州贵阳</span> 的小镇做题家<span className="bg-[#FFD700] text-white px-3 py-1 inline-block hl-block">（失败版）</span>
          </h1>
        </div>

        <div className="flex justify-center md:justify-end">
          <div
            className={`relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer ${
              isHovered ? "scale-105 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="/images/hero-portrait.png"
              alt="数字人形象"
              className={`w-full h-full object-contain transition-transform duration-300 ${
                isHovered ? "scale-110" : ""
              }`}
            />
          </div>
        </div>

        <div className="md:col-span-2 overflow-hidden">
          <div className="relative overflow-hidden bg-[#FAF5F0] py-8">
            <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
              {[...tags, ...tags, ...tags, ...tags].map((tag, index) => (
                <button
                  key={index}
                  className="text-[#F8B5C6] px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-300 transform hover:scale-110 hover:bg-[#F8B5C6] hover:text-white cursor-pointer"
                >
                  {tag.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-7 pt-4">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]" asChild>
              <Link href="/contact">
                <Mail className="w-5 h-5" />
                联系我
              </Link>
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              asChild
            >
              <Link href="/portfolio">
                <FolderOpen className="w-5 h-5" />
                查看作品集
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
