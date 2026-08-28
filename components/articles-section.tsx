import Image from "next/image"

export function ArticlesSection() {
  const videos = [
    {
      title: "库乐队翻奏《路小雨》",
      description: "最美的不是下雨天，而是与你躲过雨的屋檐。",
      tag: "音乐",
      link: "https://v.douyin.com/GWqP3Tj-G8Q/",
      thumbnail: "/images/140e2fd537ba4dc891406bdd2de3e69f.jpg",
    },
    {
      title: "夜深忽梦少年事 梦啼妆泪红阑干",
      description: "终其一生发现自己只是一个平凡人，该不该后悔？这个课题需要一生去寻找答案。",
      tag: "生活",
      link: "https://v.douyin.com/znUpZTj7Mck/",
      thumbnail: "/images/fm.jpg",
    },
    {
      title: "纯手工翻奏《晴天》",
      description: "2021年纯自学翻奏——纯音乐",
      tag: "音乐",
      link: "https://weixin.qq.com/sph/A5hqmklfZ4",
      thumbnail: "/images/yyy.jpg",
    },
    {
      title: "独自旅行第12站——大连",
      description: "我找到自己的另一种意义，祝你看一万次海",
      tag: "旅行",
      link: "https://v.douyin.com/rNQpmcVUhWU/",
      thumbnail: "/images/fj.jpg",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">视频专栏</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              <div className="relative min-h-[200px] md:min-h-[280px]">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center border-4 border-black shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <span className="absolute top-4 left-4 inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                  {video.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0B0B0B]">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {video.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
