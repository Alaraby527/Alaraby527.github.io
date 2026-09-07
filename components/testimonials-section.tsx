"use client"

import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "瓜皮",
      relation: "八年好友",
      avatar: "/images/guapi.png",
      headerColor: "#FAF5F0",
      bubbleColor: "#FF6B7A",
      questions: [
        { q: "对我的第一印象：", a: "死装姐大家都在聊天你在学习" },
        { q: "现阶段对我的印象：", a: "成长道路上遇到分岔路口时容易自我怀疑，但是却又很大的毅力推动自己走。细腻敏感聪明可爱但是胆小" },
        { q: "你认为我有什么优点：", a: "可以看到重点，可以为自己所爱之事付出行动。聪明冷静又客观" },
        { q: "你认为我有什么缺点：", a: "焦虑患者" },
        { q: "你的性别是：", a: "女" },
      ]
    },
    {
      name: "gogo",
      relation: "12年老友",
      avatar: "/images/gogo.png",
      headerColor: "#E0F2FE",
      bubbleColor: "#2563EB",
      questions: [
        { q: "对我的第一印象：", a: "好可爱的一小孩 想当妈粉！" },
        { q: "现阶段对我的印象：", a: "忧郁的青年 向往自由和爱 在勇敢和顾虑中徘徊 但是依旧没有变 依旧保留了最初的底色" },
        { q: "你认为我有什么优点：", a: "很有个性 行动力强 真诚 有神秘感 很有内涵嗯对就是这样 感觉你有的时候说的话很老派又富有深意哈哈哈哈哈哈哈 念旧 可能有的人觉得念旧不好 但是在我看来是个优点 念旧可以让那些在时光里逐渐模糊的记忆和身影一次又一次清晰起来 让它们换了一种方式陪着你前行" },
        { q: "你认为我有什么缺点：", a: "感觉你蛮内耗的 太在意其他人的感受了 挺累的这样 试试只以自己为中心吧 听起来有点自私 但自己的人生就应该围着自己转 当我开始在意自己的时候 我才真的开始学会认识自己 理解自己 爱自己 这一辈子陪着自己的只有自己 不要因为太多外界的因素影响自己" },
        { q: "你的性别是：", a: "女" },
      ]
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            他人如何评价<span className="bg-[#2F81F7] text-white px-3 py-1 inline-block hl-block">我</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto pb-8">
            为了避免过度谦卑/自大，他人的评价或许能让你看到"客观"的我
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="border-b-4 border-black px-6 py-4 flex items-center gap-4" style={{ backgroundColor: item.headerColor }}>
                <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">{item.name}</div>
                  <div className="text-gray-600 text-sm">{item.relation}</div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {item.questions.map((q, qIndex) => (
                  <div key={qIndex} className="flex flex-col gap-2">
                    <div className="flex justify-start">
                      <div className="bg-[#E5E7EB] border-2 border-black rounded-xl rounded-tl-sm px-4 py-2 max-w-[90%]">
                        <p className="text-gray-800 font-medium">{q.q}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="text-white border-2 border-black rounded-xl rounded-tr-sm px-4 py-2 max-w-[90%]" style={{ backgroundColor: item.bubbleColor }}>
                        <p className="leading-relaxed">{q.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
