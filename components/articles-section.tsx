import Image from "next/image"

export function ArticlesSection({ title = "视频专栏", subtitle }: { title?: string; subtitle?: string }) {
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
    <section className="container mx-auto px-4 py-8 md:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-5 text-center">
          <h2 className="mb-1.5 text-xl md:text-2xl font-bold">{title}</h2>
          {subtitle && <p className="mx-auto max-w-2xl text-xs text-gray-600">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white border-[3px] border-black rounded-lg overflow-hidden hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                  <div className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center border-2 border-black group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <span className="absolute top-2 left-2 inline-block bg-black text-white text-[9px] font-semibold px-1.5 py-0.5 rounded-md z-10">
                  {video.tag}
                </span>
              </div>
              <div className="p-2.5">
                <h3 className="text-xs md:text-[13px] font-bold mb-0.5 leading-snug text-[#0B0B0B] line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-[10.5px] line-clamp-2 leading-relaxed">
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
