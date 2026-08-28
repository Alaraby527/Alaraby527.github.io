import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SuibiPage() {
  return (
    <div className="min-h-screen bg-[#FAF5F0]">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回首页</span>
          </Link>

          <div className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/suibi.png"
                alt="国庆随笔"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <span className="inline-block bg-white/90 text-black text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    随笔 · 2023年9月
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    月光
                  </h1>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="space-y-6 text-gray-700 leading-loose text-base md:text-lg">
                <h2 className="text-xl font-bold text-[#0B0B0B]">操场的月光还和那年一样，我们大概，再也不会见了</h2>
                <p>
                  不久就是国庆，前两天一直试图回忆起去年 10.1 的情景，却实在没什么印象。我不算一个喜欢记录的人，但兴致来了也会随手拍两张或者剪个视频。我时不时喜欢翻自己以前的朋友圈，每一条都能清晰记得当时的心境。我总是不厌其烦的慨叹时间，追忆往昔。从朋友圈到相册再到 qq 空间，拼凑起早就模糊的记忆碎片。像光穿透满是灰尘的阁楼，似泪滴落水面泛起的涟漪……
                </p>

                <p>
                  总是偏爱毕业季的经历，似乎每次都在疫情中度过。如果要形容，那大概是白色的，是覆盖住口鼻令人窒息的布，是拼死跑回宿舍只为多写一道的题，是晚自习后路灯下的影，还有，毕业后再也见不到的你。
                </p>

                <p>
                  我想我需要静一静，清理思绪，丝线交织在一起。我想我很冷静，记得所有行旅……
                </p>

                <p className="text-center text-lg md:text-xl font-medium text-[#0B0B0B] mt-8">
                  回去吧，可惜已是曾经。<br />
                  回来吧，我在未来等你。<br />
                  月光下的少年穿着球衣，<br />
                  我在霓虹里骑行……
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#FF6B7A] flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div>
                      <div className="font-bold text-[#0B0B0B]">Alaraby</div>
                      <div className="text-gray-500 text-sm">作者</div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">
                    2023年9月
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
