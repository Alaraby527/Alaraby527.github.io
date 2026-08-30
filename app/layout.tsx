import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = { title: { template: "%s | 杨惠雯", default: "杨惠雯｜AI 产品经理作品集" }, description: "2026 届 AI 产品经理秋招作品集：企业知识助手、AI 面试陪练、内容增长 Copilot，以及可复用的 AI 产品方法论", generator: "v0.app" }
export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
