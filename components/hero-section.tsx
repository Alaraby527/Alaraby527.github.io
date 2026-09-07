"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, FolderOpen, TrendingUp, Gauge, Target, Coins } from "lucide-react"
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

// 首屏核心数据：全部来自项目/实习真实结果
const heroMetrics = [
  { icon: Gauge, value: "72%→92%", label: "多智能体评测准确率", hover: "hover:-translate-y-1.5", accent: "#6366F1" },
  { icon: TrendingUp, value: "2h→3min", label: "运营周复盘提效", hover: "hover:rotate-[-1.5deg]", accent: "#2F81F7" },
  { icon: Target, value: "70%→95%", label: "实习生触达完成率", hover: "hover:scale-[1.05]", accent: "#10B981" },
  { icon: Coins, value: "1200万+", label: "实习期间累计 GMV", hover: "hover:translate-x-1", accent: "#FF6B7A" },
]

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 md:pl-14 lg:pl-24">
        <div className="flex flex-col items-start">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-[#FFC224] px-4 py-1.5 text-sm font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            AI 产品经理 · 2027 届
          </span>
          <h1 className="animate-fade-in text-[40px] leading-[1.25] md:text-[64px] md:leading-[1.2] font-bold">
            我是 <span className="hl-block bg-[#FF6B7A] text-white px-2 md:px-3 py-0.5 md:py-1 whitespace-nowrap">Alaraby</span>，<br />
            一名来自 <span className="hl-block bg-[#2F81F7] text-white px-2 md:px-3 py-0.5 md:py-1 mr-1 whitespace-nowrap">贵州贵阳</span><br />
            的小镇做题家 <span className="hl-block bg-[#FFD700] text-white px-2 md:px-3 py-0.5 md:py-1 whitespace-nowrap">（失败版）</span>
          </h1>
        </div>

        <div className="flex justify-center md:justify-start md:pl-8">
          <div
            className="relative w-full max-w-sm aspect-square"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 数字人直接呈现，不套方框 */}
            <img
              src="/images/hero-portrait.webp"
              alt="数字人形象"
              className={`h-full w-full animate-float object-contain drop-shadow-[10px_10px_0px_rgba(0,0,0,0.08)] transition-transform duration-500 ${
                isHovered ? "scale-105" : ""
              }`}
            />
          </div>
        </div>

        {/* 首屏核心数据条：四张卡，悬停动效各不相同 */}
        <div className="md:col-span-2 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {heroMetrics.map((m) => (
            <div
              key={m.label}
              className={`rounded-2xl border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${m.hover}`}
            >
              <m.icon className="mb-2 h-5 w-5" style={{ color: m.accent }} />
              <p className="text-xl font-bold text-[#0B0B0B] md:text-2xl">{m.value}</p>
              <p className="mt-0.5 text-xs text-gray-500">{m.label}</p>
            </div>
          ))}
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
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] transition-transform duration-300 hover:-translate-y-1" asChild>
              <Link href="/contact">
                <Mail className="w-5 h-5" />
                联系我
              </Link>
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] transition-transform duration-300 hover:rotate-[-1deg]"
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
