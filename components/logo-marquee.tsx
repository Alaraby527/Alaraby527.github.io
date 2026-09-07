export function LogoMarquee() {
  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index} className="text-white text-2xl font-bold">
              淡铺招广
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
