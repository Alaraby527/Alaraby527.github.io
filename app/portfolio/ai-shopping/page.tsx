"use client"

import { useState, useRef, useEffect } from "react"
import {
  X,
  ShoppingCart,
  Sparkles,
  Plus,
  Mic,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RefreshCw,
  Camera,
  ChevronRight,
} from "lucide-react"

type Screen = "home" | "chat"

interface Product {
  id: number
  brand: string
  model: string
  originalPrice: string
  price: string
  tag: string
  tagColor: string
  bgGradient: string
}

const homeQuickCards = [
  {
    id: 1,
    type: "promo",
    icon: "%",
    text: "智能找优惠，低价买好物",
    action: "省钱Go",
    bgFrom: "from-red-400",
    bgTo: "to-purple-500",
  },
  {
    id: 2,
    type: "normal",
    emoji: "📹",
    text: "出门拍视频，哪款充电宝小巧又耐用？",
  },
  {
    id: 3,
    type: "normal",
    emoji: "🧋",
    text: "想喝点清爽的果茶，现在有什么优惠？",
  },
  {
    id: 4,
    type: "highlight",
    emoji: "🍵",
    text: "还是我常喝的茉莉奶绿，再来一杯",
    action: "省时Go",
  },
  {
    id: 5,
    type: "normal",
    emoji: "🍮",
    text: "常买的那款豆乳布丁，现在划算吗？",
  },
]

const products: Product[] = [
  {
    id: 1,
    brand: "Canon 佳能",
    model: "EOS R50",
    originalPrice: "分期免息",
    price: "4199",
    tag: "2026东京",
    tagColor: "bg-red-500",
    bgGradient: "from-gray-800 to-gray-900",
  },
  {
    id: 2,
    brand: "Nikon 尼康",
    model: "Z30",
    originalPrice: "分期免息",
    price: "3837",
    tag: "2026东京",
    tagColor: "bg-red-500",
    bgGradient: "from-gray-700 to-gray-900",
  },
  {
    id: 3,
    brand: "FUJIFILM 富士",
    model: "X-S20",
    originalPrice: "分期免息",
    price: "6799",
    tag: "2026东京",
    tagColor: "bg-red-500",
    bgGradient: "from-amber-900 to-gray-900",
  },
  {
    id: 4,
    brand: "Panasonic 松下",
    model: "ZS99",
    originalPrice: "京东物流",
    price: "2998",
    tag: "新品上市",
    tagColor: "bg-green-500",
    bgGradient: "from-blue-800 to-gray-900",
  },
  {
    id: 5,
    brand: "Nikon 尼康",
    model: "COOLPIX P1100",
    originalPrice: "包邮",
    price: "6499",
    tag: "全国联保",
    tagColor: "bg-blue-500",
    bgGradient: "from-gray-600 to-gray-900",
  },
  {
    id: 6,
    brand: "Nikon 尼康",
    model: "COOLPIX P950",
    originalPrice: "领券满1999减...",
    price: "2279",
    tag: "7天无理由退换",
    tagColor: "bg-orange-500",
    bgGradient: "from-gray-700 to-gray-900",
  },
]

const suggestedQuestions = [
  "📷 看看入门微相机",
  "📷 户外运动相机有哪些",
  "📷 复古拍立得相机推荐",
]

export default function AiShoppingGuidePage() {
  const [screen, setScreen] = useState<Screen>("home")
  const [inputValue, setInputValue] = useState("")
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-[#f5f5f7] flex flex-col relative shadow-2xl">
        {screen === "home" ? (
          <HomeScreen onStartChat={() => setScreen("chat")} />
        ) : (
          <ChatScreen
            inputValue={inputValue}
            setInputValue={setInputValue}
            onBack={() => setScreen("home")}
          />
        )}
      </div>
    </div>
  )
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-transparent">
      <span className="font-bold">17:20</span>
      <div className="flex items-center gap-1">
        <div className="flex gap-0.5">
          <div className="w-1 h-3 bg-black rounded-sm" />
          <div className="w-1 h-4 bg-black rounded-sm" />
          <div className="w-1 h-3 bg-black rounded-sm" />
          <div className="w-1 h-5 bg-black rounded-sm" />
        </div>
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M12 3C7.95 3 4.21 4.34 1.22 6.61L0 7.83 12 21l12-13.17-1.22-1.22C20.79 4.34 17.05 3 13 3h-1zm0 2c3.87 0 7.35 1.29 10 3.47L12 17.53 2 8.47C4.65 6.29 8.13 5 12 5z" />
        </svg>
        <div className="relative w-6 h-3 border border-black rounded-sm">
          <div className="absolute inset-0.5 bg-black rounded-sm" style={{ width: "85%" }} />
          <div className="absolute -right-1 top-0.5 w-0.5 h-1.5 bg-black" />
        </div>
      </div>
    </div>
  )
}

function HomeScreen({ onStartChat }: { onStartChat: () => void }) {
  return (
    <>
      <StatusBar />

      {/* Top Navigation */}
      <div className="flex items-center justify-between px-4 py-3">
        <button className="p-1">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="flex items-center gap-1">
          <span className="text-base text-gray-600">陪伴</span>
          <span className="text-base font-bold border-b-2 border-red-500 pb-0.5">爱购</span>
        </div>
        <button className="relative p-1">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
            99+
          </span>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Mascot & Tagline */}
        <div className="flex flex-col items-center py-6">
          <div className="relative w-20 h-20 mb-4">
            <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center text-4xl">
              🐶
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center text-xs">
              ✨
            </div>
          </div>
          <h1 className="text-xl font-bold text-gray-900">省钱时~更省心</h1>
        </div>

        {/* Quick Cards */}
        <div className="space-y-3">
          {homeQuickCards.map((card) => (
            <div
              key={card.id}
              onClick={onStartChat}
              className={`rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.02] ${
                card.type === "promo"
                  ? `bg-gradient-to-r ${card.bgFrom} ${card.bgTo} text-white`
                  : card.type === "highlight"
                  ? "bg-white border-2 border-purple-400"
                  : "bg-white border border-gray-100"
              }`}
            >
              {card.type === "promo" ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl font-bold">
                      %
                    </div>
                    <span className="text-base font-medium">{card.text}</span>
                  </div>
                  <button className="bg-white/20 border border-white/40 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
                    {card.action}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : card.type === "highlight" ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.emoji}</span>
                    <span className="text-base text-gray-800 font-medium">{card.text}</span>
                  </div>
                  <button className="bg-purple-100 text-purple-600 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
                    {card.action}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.emoji}</span>
                    <span className="text-base text-gray-800 font-medium">{card.text}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </>
  )
}

function BottomNav() {
  const navItems = [
    { label: "省钱", path: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
    { label: "AI任务", path: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" },
    { label: "赚京豆", path: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" },
    { label: "AI试穿", path: "M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" },
  ]

  return (
    <nav className="sticky bottom-0 bg-white border-t border-gray-100 py-2">
      <div className="flex items-center justify-around">
        {navItems.map((item, index) => (
          <button key={index} className="flex flex-col items-center gap-1 py-1 px-3">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={item.path} />
            </svg>
            <span className="text-xs text-gray-500">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

interface ChatMessage {
  id: number
  type: "user" | "ai" | "system"
  content: string
  section?: "intro" | "products" | "suggestions"
  categoryTitle?: string
  categoryDesc?: string
  showPlus?: boolean
  showActions?: boolean
  suggestions?: string[]
}

function ChatScreen({
  inputValue,
  setInputValue,
  onBack,
}: {
  inputValue: string
  setInputValue: (v: string) => void
  onBack: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const initialMessages: ChatMessage[] = [
    {
      id: 1,
      type: "user",
      content: "推荐相机",
    },
    {
      id: 2,
      type: "ai",
      content: "搞定！快来看看吧",
      showPlus: true,
    },
    {
      id: 3,
      type: "ai",
      content:
        "买相机主要看你的使用场景和拍摄需求。我为你整理了目前比较受欢迎的几个选购方向，你可以看看哪种更符合你的心意：",
    },
    {
      id: 4,
      type: "ai",
      content: "",
      section: "products",
      categoryTitle: "入门微相机",
      categoryDesc:
        "适合日常拍照、旅游记录以及拍摄Vlog，画质好且便携，是新手入门的首选。",
    },
    {
      id: 5,
      type: "ai",
      content: "",
      section: "products",
      categoryTitle: "大变焦相机",
      categoryDesc:
        "具备高倍光学变焦，适合旅游时拍摄远处的风景或特写。",
    },
    {
      id: 6,
      type: "ai",
      content:
        '你可以根据自己喜欢的类型点击"查看更多"浏览更多商品。如果有特定的预算范围，或者主要想用来拍人像、拍视频，也可以告诉我，我来为你做更准的推荐！',
      showActions: true,
      suggestions: [
        "📷 看看入门微相机",
        "📷 户外运动相机有哪些",
        "📷 复古拍立得相机推荐",
      ],
    },
  ]

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <StatusBar />
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={onBack} className="p-1">
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1">
              <span className="text-base font-bold border-b-2 border-red-500 pb-0.5">对话</span>
            </button>
            <button>
              <span className="text-base text-gray-500">商品</span>
            </button>
          </div>
          <button className="relative p-1">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              99+
            </span>
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 pb-2">内容由AI生成，仅供参考</p>
      </div>

      {/* Chat Messages */}
      <main ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-4 bg-[#f5f5f7]">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </main>

      {/* Bottom Area */}
      <div className="bg-white">
        <BottomNav />

        {/* Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-100">
          <div className="flex-1">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="帮我推荐..."
              className="w-full bg-gray-100 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20"
            />
          </div>
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Mic className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </>
  )
}

function MessageBubble({ message }: { message: ChatMessage }) {
  if (message.type === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[70%] bg-gray-200 rounded-2xl rounded-tr-sm px-4 py-2.5">
          <p className="text-sm text-gray-800">{message.content}</p>
        </div>
      </div>
    )
  }

  if (message.type === "ai") {
    if (message.section === "products") {
      const productSlice =
        message.categoryTitle === "入门微相机"
          ? products.slice(0, 3)
          : products.slice(3, 6)

      return (
        <div className="space-y-3">
          {/* Category Header */}
          <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-gray-900">
                {message.categoryTitle}
              </h3>
              <button className="flex items-center gap-1 text-sm text-gray-500">
                查看更多 <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600">{message.categoryDesc}</p>

            {/* Product Cards */}
            <div className="flex gap-3 mt-3 overflow-x-auto pb-2 -mx-1 px-1">
              {productSlice.map((product) => (
                <ProductCardMini key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="flex gap-2">
        <div className="flex-1">
          {message.showPlus ? (
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 inline-flex items-center gap-2 shadow-sm">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-gray-800 font-medium">
                {message.content}
              </span>
              <button className="ml-2 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                <Plus className="w-3 h-3 text-gray-500" />
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                {message.content}
              </p>
            </div>
          )}

          {/* Suggestion Buttons */}
          {message.suggestions && (
            <div className="flex flex-wrap gap-2 mt-3">
              {message.suggestions.map((s, i) => (
                <button
                  key={i}
                  className="bg-white border border-gray-200 rounded-full px-3 py-2 text-sm text-gray-700 hover:border-red-300 transition-colors shadow-sm"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          {message.showActions && (
            <div className="flex items-center gap-1 mt-2">
              <button className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-100">
                <ThumbsUp className="w-4 h-4 text-gray-500" />
              </button>
              <button className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-100">
                <ThumbsDown className="w-4 h-4 text-gray-500" />
              </button>
              <button className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-100">
                <Copy className="w-4 h-4 text-gray-500" />
              </button>
              <button className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-100">
                <RefreshCw className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}

function ProductCardMini({ product }: { product: Product }) {
  return (
    <div className="flex-shrink-0 w-[160px] bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
      {/* Product Image Placeholder */}
      <div
        className={`relative w-full h-[100px] bg-gradient-to-br ${product.bgGradient} flex items-center justify-center`}
      >
        <Camera className="w-10 h-10 text-gray-300" />
        <span
          className={`absolute top-2 left-2 ${product.tagColor} text-white text-[10px] px-1.5 py-0.5 rounded font-medium`}
        >
          {product.tag}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-2">
        <div className="text-[10px] text-gray-400 mb-0.5">
          {product.brand}
        </div>
        <div className="text-xs font-medium text-gray-800 truncate mb-1">
          {product.model}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-red-500 text-sm font-bold">
              ¥{product.price}
            </span>
            <span className="text-[9px] text-gray-400 ml-1">
              {product.originalPrice}
            </span>
          </div>
          <button className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <Plus className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
