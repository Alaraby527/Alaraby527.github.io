import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { essays, getEssay } from "@/lib/essays";

export async function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const essay = getEssay(slug);

  if (!essay) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">文章不存在</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
            返回博客
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 hover:gap-3 transition-all">
            <ArrowLeft className="w-5 h-5" />
            返回博客
          </Link>
          <span className="text-sm text-gray-500">{essay.date}</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="border-4 border-black rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10" style={{ backgroundColor: essay.bgColor }}>
          <h1 className="text-3xl md:text-5xl font-bold text-[#0B0B0B]">{essay.title}</h1>
          <p className="mt-4 text-gray-600">{essay.description}</p>
        </div>

        <article className="space-y-12">
          {essay.blocks.map((block, blockIndex) => (
            <div key={blockIndex}>
              {block.date && (
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full">{block.date}</span>
                  {block.heading && <span className="text-lg font-bold text-[#0B0B0B]">{block.heading}</span>}
                </div>
              )}
              {!block.date && block.heading && (
                <h2 className="text-2xl font-bold mb-5 text-[#0B0B0B]">{block.heading}</h2>
              )}
              <div className="space-y-4 border-l-4 border-[#FAF5F0] pl-6">
                {block.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-[#393939] text-lg leading-[32px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </article>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回博客
          </Link>
        </div>
      </div>
    </div>
  );
}
