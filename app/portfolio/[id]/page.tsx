import { ArrowLeft, Calendar, Tag, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return [
    { id: "ai-invoice" },
    { id: "ai-job" },
    { id: "article-1" },
    { id: "article-2" },
    { id: "major-1" },
    { id: "major-2" },
  ];
}

const projects = {
  "ai-invoice": {
    id: "ai-invoice",
    category: "AI相关",
    title: "智能发票查重与合规审查系统",
    description: "完整覆盖需求调研、迭代规划、AI工作流架构设计、提示词规则制定、风险评估与长期roadmap规划全流程，落地Dify平台+OCR识别的真实业务场景，有明确的效率提升数据，是典型的AI产品从0到1落地实践。",
    tag: "AI产品",
    bgColor: "#FF6B7A",
    image: "/images/studio-workspace.svg",
    date: "2026.06",
    team: "个人项目",
    highlights: [
      "需求调研与用户访谈",
      "AI工作流架构设计",
      "提示词规则制定",
      "Dify平台落地",
      "OCR识别集成",
      "风险评估与roadmap规划"
    ],
    outcome: "效率提升300%，准确率达到99.2%"
  },
  "ai-job": {
    id: "ai-job",
    category: "AI相关",
    title: "一站式求职助手网页搭建",
    description: "完整贯穿AI产品生命周期：包含用户研究、需求拆解、PRD撰写、产品架构设计、MVP落地、版本管控、项目复盘全链路，直面AI开发的真实痛点并给出解决方案，匹配AI产品经理'用AI落地产品、把控迭代节奏'的核心要求。",
    tag: "AI产品",
    bgColor: "#2563EB",
    image: "/images/venture-workspace.svg",
    date: "2026.04-至今",
    team: "个人项目",
    highlights: [
      "用户研究与需求拆解",
      "PRD撰写",
      "产品架构设计",
      "MVP落地",
      "版本管控",
      "项目复盘"
    ],
    outcome: "帮助500+用户优化求职流程"
  },
  "article-1": {
    id: "article-1",
    category: "文章",
    title: "AI产品经理入门指南",
    description: "从0到1了解AI产品经理的核心能力模型、工作流程和必备技能。深入分析AI产品与传统产品的区别，以及如何在AI浪潮中找到自己的定位。",
    tag: "产品思考",
    bgColor: "#10B981",
    image: "/images/studio-workspace.svg",
    date: "2026.05",
    team: "个人创作",
    highlights: [
      "AI产品经理能力模型",
      "工作流程解析",
      "技能树搭建",
      "职业发展路径"
    ],
    outcome: "阅读量10000+，收藏500+"
  },
  "article-2": {
    id: "article-2",
    category: "文章",
    title: "数据标注与AI训练的底层逻辑",
    description: "深入理解AI产品的底层逻辑，从数据标注到模型训练再到效果输出的完整链路，建立对AI技术边界、成本、数据价值的认知。",
    tag: "技术洞察",
    bgColor: "#8B5CF6",
    image: "/images/venture-workspace.svg",
    date: "2026.03",
    team: "个人创作",
    highlights: [
      "数据标注流程",
      "模型训练原理",
      "效果评估方法",
      "技术边界认知"
    ],
    outcome: "阅读量5000+，获行业专家认可"
  },
  "major-1": {
    id: "major-1",
    category: "专业相关",
    title: "储能科学与工程课程项目",
    description: "基于储能科学与工程专业知识，完成的课程设计项目。涉及电池性能测试、储能系统建模、能量管理策略优化等内容。",
    tag: "学术项目",
    bgColor: "#F59E0B",
    image: "/images/studio-workspace.svg",
    date: "2025.12",
    team: "小组项目",
    highlights: [
      "电池性能测试",
      "储能系统建模",
      "能量管理策略",
      "数据分析与报告"
    ],
    outcome: "获得课程最高分，被评为优秀项目"
  },
  "major-2": {
    id: "major-2",
    category: "专业相关",
    title: "新能源技术调研报告",
    description: "调研新能源技术发展现状与趋势，分析储能技术在新能源领域的应用前景，撰写专业调研报告。",
    tag: "学术研究",
    bgColor: "#EC4899",
    image: "/images/venture-workspace.svg",
    date: "2025.09",
    team: "个人研究",
    highlights: [
      "文献调研",
      "技术分析",
      "市场预测",
      "报告撰写"
    ],
    outcome: "发表于校学术期刊"
  },
};

export default function PortfolioDetail({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">项目不存在</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:gap-3 transition-all">
            <ArrowLeft className="w-5 h-5" />
            返回首页
          </Link>
          <h1 className="text-xl font-bold">作品集详情</h1>
          <div className="w-24"></div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="relative h-[300px] md:h-[500px]" style={{ backgroundColor: project.bgColor }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <span className="inline-block bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-[#FAF5F0] px-4 py-2 rounded-xl border-2 border-black">
                <Calendar className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">{project.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FAF5F0] px-4 py-2 rounded-xl border-2 border-black">
                <Users className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">{project.team}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FAF5F0] px-4 py-2 rounded-xl border-2 border-black">
                <Tag className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">{project.tag}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-6" style={{ backgroundColor: project.bgColor }}></span>
                项目概述
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-6" style={{ backgroundColor: project.bgColor }}></span>
                核心亮点
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="bg-[#FAF5F0] border-2 border-black rounded-xl p-4">
                    <span className="text-gray-400 text-sm">#{index + 1}</span>
                    <p className="font-medium text-gray-800 mt-1">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF5F0] border-2 border-black rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="w-1 h-6" style={{ backgroundColor: project.bgColor }}></span>
                成果与影响
              </h2>
              <p className="text-gray-700 text-lg">{project.outcome}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回作品集
          </Link>
        </div>
      </div>
    </div>
  );
}
