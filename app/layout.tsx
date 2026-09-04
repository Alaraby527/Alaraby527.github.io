import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = { title: { template: "%s | 杨惠雯", default: "杨惠雯｜AI 产品经理作品集" }, description: "杨惠雯的 AI 产品经理作品集：复杂业务中的 AI 工作流、Agent 可靠性、人机协作与评测迭代。" }
export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
