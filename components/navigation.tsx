"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我", href: "/about" },
  { label: "作品集", href: "/portfolio" },
  { label: "博客", href: "/blog" },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="relative flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <Link
          href="/"
          className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0"
          aria-label="首页"
        >
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </Link>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[18px] font-bold leading-[20px] transition-opacity hover:opacity-70 ${
                  active ? "underline underline-offset-4 decoration-2" : ""
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setOpen((v) => !v)}
            aria-label="切换菜单"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0" asChild>
            <Link href="/contact">
              <Mail className="w-10 h-10" strokeWidth={2.5} />
            </Link>
          </Button>
        </div>

        {open && (
          <div className="absolute top-full left-0 right-0 mt-3 md:hidden bg-white border-4 border-black rounded-xl p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-[18px] font-bold leading-[20px] ${active ? "underline underline-offset-4 decoration-2" : ""}`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
