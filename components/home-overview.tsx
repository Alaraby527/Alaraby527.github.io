"use client"

import { useState } from "react"
import { Mail, Phone, MessageCircle, Github, Copy, Check } from "lucide-react"

// 联系我:首页收尾,联系方式直达
const contacts = [
  { icon: Mail, label: "邮箱", value: "Alarabyyang@163.com", href: "mailto:Alarabyyang@163.com" },
  { icon: Phone, label: "电话", value: "18785177418", href: "tel:18785177418" },
  { icon: MessageCircle, label: "微信", value: "Y1819664996", href: undefined },
  { icon: Github, label: "GitHub", value: "Alaraby527", href: "https://github.com/Alaraby527" },
]

export function ContactCta() {
  const [copied, setCopied] = useState(false)
  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText("Y1819664996")
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }
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
              const cls =
                "w-full bg-[#1c1c1c] border-2 border-white/20 rounded-2xl p-5 text-center hover:border-[#FFC224] hover:-translate-y-1 transition-all cursor-pointer"
              const inner = (
                <>
                  {copied && contact.label === "微信" ? (
                    <Check className="w-5 h-5 mb-2 text-[#4ECDC4]" />
                  ) : (
                    <contact.icon className="w-5 h-5 mb-2" />
                  )}
                  <p className="text-white/50 text-xs mb-1">
                    {copied && contact.label === "微信" ? "已复制微信号" : contact.label}
                  </p>
                  <p className="font-semibold text-sm md:text-base flex items-center justify-center gap-1">
                    {contact.value}
                    {contact.label === "微信" && <Copy className="w-3 h-3 text-white/40" />}
                  </p>
                </>
              )
              return contact.label === "微信" ? (
                <button key={contact.label} onClick={copyWechat} className={cls} title="点击复制微信号">
                  {inner}
                </button>
              ) : (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={cls}
                >
                  {inner}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
