"use client";

import { useState } from "react";
import { ArrowLeft, Download, Mail, Phone, Calendar, GraduationCap, Award, Briefcase, FolderOpen, Users, Star, Zap, Target, Brain, User } from "lucide-react";
import Image from "next/image";

const tagColors = {
  ai: "bg-pink-100 text-pink-700",
  product: "bg-blue-100 text-blue-700",
  data: "bg-green-100 text-green-700",
  efficiency: "bg-yellow-100 text-yellow-700",
  leadership: "bg-purple-100 text-purple-700",
};

const sectionStyle = "border-[4px] border-black rounded-[32px] p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]";

const navItems = [
  { id: "info", label: "个人信息", icon: User },
  { id: "education", label: "教育背景", icon: GraduationCap },
  { id: "awards", label: "荣誉奖项", icon: Award },
  { id: "skills", label: "专业技能", icon: Target },
  { id: "experience", label: "实习经历", icon: Briefcase },
  { id: "projects", label: "项目经历", icon: FolderOpen },
  { id: "campus", label: "校园实践", icon: Users },
];

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState("info");

  return (
    <div className="min-h-screen bg-[#FAF5F0]">
      <nav className="bg-white border-b-[4px] border-black sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            返回首页
          </button>
          <h1 className="text-xl font-bold">简历</h1>
          
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white border-[4px] border-black rounded-[32px] p-4 sticky top-24">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-[#FF6B7A] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                          : "bg-[#FAF5F0] text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="animate-fade-in">
              {activeSection === "info" && (
                <section className={sectionStyle}>
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Image src="/images/avatar.jpg" alt="杨惠雯" className="w-full h-full object-cover" width={128} height={128} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">杨惠雯</h1>
                    <div className="inline-block bg-[#FF6B7A] text-white px-6 py-2 rounded-full font-semibold text-lg">
                      求职意向：AI 产品经理
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">18785177418</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Alarabyyang@163.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">2005.05.27</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">上海理工大学</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <span className="text-gray-500 text-sm">学历</span>
                      <p className="font-bold">本科（在读）</p>
                    </div>
                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <span className="text-gray-500 text-sm">专业</span>
                      <p className="font-bold">储能科学与工程</p>
                    </div>
                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <span className="text-gray-500 text-sm">预计毕业时间</span>
                      <p className="font-bold">2027.06</p>
                    </div>
                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <span className="text-gray-500 text-sm">语言能力</span>
                      <p className="font-bold">大学英语四级</p>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === "education" && (
                <section className={sectionStyle}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-[#FF6B7A]" />
                    教育背景
                  </h2>
                  <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg">上海理工大学 | 储能科学与工程 本科</h3>
                        <span className="text-gray-500">2023.08 - 2027.06</span>
                      </div>
                      <span className="text-sm text-gray-500">预计毕业时间：2027.06</span>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        <strong>核心专业课：</strong>工程流体力学、工程热力学、传热学、电化学原理、物理化学
                      </p>
                      <p className="text-gray-700">
                        <strong>工具课程：</strong>机械测绘及 <strong>Auto CAD</strong>（成绩 96 分），具备工程绘图与标准化设计基础
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>工程思维</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>标准化设计</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>逻辑分析</span>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === "awards" && (
                <section className={sectionStyle}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-[#FF6B7A]" />
                    荣誉奖项
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700"><strong>第一届语文报杯一等奖</strong> — 语言表达能力</span>
                    </li>
                    <li className="flex items-center gap-3 bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700"><strong>林德工程体验营最佳团队协作奖</strong> — 团队协作</span>
                    </li>
                    <li className="flex items-center gap-3 bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700"><strong>抖音黑客松苏州姑苏站三等奖</strong> — AI产品实战</span>
                    </li>
                  </ul>
                </section>
              )}

              {activeSection === "skills" && (
                <section className={sectionStyle}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#FF6B7A]" />
                    专业技能
                  </h2>

                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-pink-500" />
                      AI 产品核心能力
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <p className="text-gray-700 mb-2">
                          <strong>AI 应用落地：</strong>熟练使用 <strong>Coze</strong>、<strong>Dify</strong> 等 AI 工作流编排平台，可独立完成大模型工作流、智能体搭建；掌握 <strong>OCR</strong> 光学字符识别应用、大模型兜底逻辑设计、异常问题排查，具备 AI 产品 <strong>MVP 从 0 到 1</strong> 落地经验。
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>AI工作流</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>智能体搭建</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>OCR识别</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>MVP落地</span>
                        </div>
                      </div>
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <p className="text-gray-700 mb-2">
                          <strong>提示词工程：</strong>精通结构化提示词设计、版本迭代与效果调优，沉淀多场景提示词模板，理解大模型能力边界、<strong>Token</strong> 限制等实际落地问题。
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>提示词工程</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>大模型边界</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>效果调优</span>
                        </div>
                      </div>
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <p className="text-gray-700 mb-2">
                          <strong>规则与 SOP 设计：</strong>擅长从业务痛点提炼标准化流程、判定规则，可完成业务标准、操作规范、质量判准体系搭建，适配 AI 产品规则化运营需求。
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>SOP设计</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>标准化流程</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>规则化运营</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                      产品通用能力
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <p className="text-gray-700 mb-2">
                          <strong>产品设计：</strong>掌握用户调研、需求拆解、<strong>PRD</strong> 撰写、产品架构设计；具备墨刀、<strong>Figma</strong> 原型工具使用基础，可输出产品文档、使用说明、操作教程。
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>PRD撰写</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>产品设计</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>原型设计</span>
                        </div>
                      </div>
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <p className="text-gray-700 mb-2">
                          <strong>项目迭代：</strong>理解<strong>敏捷迭代</strong>思路，擅长基于数据、用户反馈进行功能优化、策略调整；熟练使用 <strong>Git</strong> 进行版本管理，规避迭代过程中的功能错乱问题。
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>敏捷迭代</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>Git版本管理</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>数据驱动</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-500" />
                      数据与工具能力
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <p className="text-gray-700 mb-2">
                          <strong>数据分析：</strong>熟练运用 <strong>Python</strong>（Pandas/Numpy）、<strong>SQL</strong>、Matlab、Labview，可完成数据采集、清洗、可视化、特征分析，具备时序数据、<strong>特征工程</strong>基础认知。
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>Python</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>SQL</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>特征工程</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>时序数据</span>
                        </div>
                      </div>
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <p className="text-gray-700 mb-2">
                          <strong>辅助工具：</strong>精通 Office 全系列、<strong>CAD</strong>、<strong>SolidWorks</strong>；掌握视频剪辑、图文创作、多平台内容运营技巧。
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>CAD/SolidWorks</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>Office精通</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>内容运营</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      综合软实力
                    </h3>
                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <p className="text-gray-700">
                        具备<strong>团队管理</strong>、活动策划、<strong>跨部门沟通</strong>、任务优先级排序能力，擅长<strong>复盘总结</strong>，能快速适配高强度、快迭代的职场环境。
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.leadership}`}>团队管理</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>跨部门沟通</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>复盘总结</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === "experience" && (
                <section className={sectionStyle}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-[#FF6B7A]" />
                    实习经历
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg">唯享科技 | 测试实习生</h3>
                          <span className="text-gray-500">2026.05 - 2026.06</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">业务背景：承接内部系统运维与 AI 智能识别类工作流搭建任务，多来源并行任务多、系统上手难度高。</p>
                      <ul className="space-y-3 mb-4">
                        <li className="text-gray-700">
                          <strong>AI 工作流搭建：</strong>基于 <strong>Coze</strong> 平台完成 MSDS 职业病危害因素智能识别工作流设计，搭建内容识别 - 筛选校验 - 异常兜底链路逻辑，针对乱码、识别偏差等问题设计拦截规则，短期内完成功能上线并达标业务准确率要求。
                        </li>
                        <li className="text-gray-700">
                          <strong>产品文档与用户运维：</strong>梳理系统操作流程，编写标准化使用说明文档、录制示范视频，降低用户使用门槛，系统问题响应与闭环率 <strong>100%</strong>。
                        </li>
                        <li className="text-gray-700">
                          <strong>流程与任务管理：</strong>面对多线程杂乱任务，主动对接需求方明确任务优先级与交付周期，建立任务排序机制，保障所有工作按期落地。
                        </li>
                        <li className="text-gray-700">
                          <strong>问题排查能力：</strong>深入研究 AI 插件、大模型调用逻辑，掌握识别故障、筛选机制异常等问题的定位与解决方法，沉淀 AI 工作流调试方法论。
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>Coze工作流</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>AI识别</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>产品文档</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>任务管理</span>
                      </div>
                    </div>

                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg">物智进化 | 数据采集 & 标注实习生</h3>
                          <span className="text-gray-500">2026.03 - 2026.04</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">业务背景：负责 AI 训练数据标注工作，原有标注规则模糊、操作效率低，团队整体产出不达标。</p>
                      <ul className="space-y-3 mb-4">
                        <li className="text-gray-700">
                          <strong>标准体系搭建：</strong>主动对接业务方，统一视频标注参考系、动作判定逻辑，输出完整标注 <strong>SOP</strong> 与分级判准规则（优/良/差三级标准），规则被全团队复用，统一团队标注口径。
                        </li>
                        <li className="text-gray-700">
                          <strong>流程优化提效：</strong>发现鼠标操作低效问题，优化操作交互方式，改用快捷键完成标注，个人日标注量从 1200 条提升至 1800 条以上，产能提升 <strong>50%</strong>，产出与准确率位列团队 <strong>Top1</strong>。
                        </li>
                        <li className="text-gray-700">
                          <strong>AI 底层认知沉淀：</strong>深度理解数据标注与 AI 模型训练的关联关系，梳理计算机视觉类 AI 的技术边界、成本限制，建立从数据源到模型效果的全链路认知。
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>AI训练数据</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>SOP搭建</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>效率提升50%</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>计算机视觉</span>
                      </div>
                    </div>

                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg">物智进化 | 机械装配实习生</h3>
                          <span className="text-gray-500">2025.12 - 2026.01</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">业务背景：大批量舵机组装、调参工作，单人作业模式效率低下。</p>
                      <ul className="space-y-3 mb-4">
                        <li className="text-gray-700">
                          <strong>工序流程重构：</strong>拆解全流程作业节点，设计流水线分工模式，将单人全流程作业拆分为专项岗位协作，产能从 5 分钟 1 个提升至 5 分钟 10 个，效率大幅提升，实现编号 <strong>零差错</strong>。
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>流程重构</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>效率提升10倍</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>质量管控</span>
                      </div>
                    </div>

                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg">上海自动化仪表有限公司 | 采购实习生</h3>
                          <span className="text-gray-500">2025.12</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">业务背景：年末合同归档、供应商比价工作量暴增，纯人工操作效率低，易出现遗漏、重复等问题。</p>
                      <ul className="space-y-3 mb-4">
                        <li className="text-gray-700">
                          <strong>AI 工具落地提效：</strong>针对人工制作比价表效率低的痛点，设计提示词调用大模型自动生成表格并完成信息核验，单份表格制作耗时由 1 小时缩短至 20 分钟，效率提升 <strong>67%</strong>，审核零差错。
                        </li>
                        <li className="text-gray-700">
                          <strong>业务 SOP 优化：</strong>面对海量合同归档易混乱的问题，两次迭代流程方案，设计「状态标识 + 区间分类 + Excel 台账联动」归档规则，彻底解决合同遗漏、重复、排序低效问题，单日处理百余份合同 <strong>零失误</strong>。
                        </li>
                        <li className="text-gray-700">
                          <strong>AI 落地复盘：</strong>结合实际业务场景，总结大模型信息识别准确率、数据安全等落地痛点，迭代并沉淀多套办公场景提示词，明确 AI 工具的适用边界。
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>AI提效</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>提示词设计</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>效率提升67%</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>SOP优化</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === "projects" && (
                <section className={sectionStyle}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FolderOpen className="w-6 h-6 text-[#FF6B7A]" />
                    项目/创业经历
                  </h2>

                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-pink-500" />
                      核心 AI 产品项目
                    </h3>

                    <div className="space-y-6">
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-bold text-lg">智能发票查重与合规审查系统 | 产品负责人</h4>
                            <span className="text-gray-500">项目时间：2026.05</span>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">项目背景：企业财务报销依赖人工核对发票，查重、验真效率低，重复报销、假票风险高，月末单据积压严重。</p>
                        <ul className="space-y-3 mb-4">
                          <li className="text-gray-700">
                            <strong>需求与规划：</strong>调研财务岗位核心痛点，制定三阶段<strong>敏捷迭代</strong>规划（单张核验→批量提效→企业系统打通），明确各版本功能目标与业务价值。
                          </li>
                          <li className="text-gray-700">
                            <strong>AI 工作流设计：</strong>基于 <strong>Dify</strong> 平台搭建全链路工作流，包含文件上传、数量判断、<strong>OCR</strong> 文字识别、JSON 结构化提取、发票查重、结果输出六大核心节点。
                          </li>
                          <li className="text-gray-700">
                            <strong>规则与提示词设计：</strong>针对增值税发票、火车票、航空客票等多类票据，定制专业化提示词与字段提取规则；针对火车票等特殊场景设计税额计算公式，统一全品类票据输出格式。
                          </li>
                          <li className="text-gray-700">
                            <strong>风险防控与长期规划：</strong>梳理 OCR 识别误差、历史台账孤岛等核心风险，设计人工二次核验、手动修正、台账导入等应对方案；规划 <strong>RAG</strong> 知识库对接、企业 OA 系统打通等中长期迭代方向。
                          </li>
                        </ul>
                        <p className="text-gray-600 font-medium">项目成效：单张发票审核耗时由人工 2-3 分钟降至 <strong>10 秒内</strong>，重复发票拦截准确率 <strong>≥99%</strong>。</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>Dify工作流</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>OCR识别</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>RAG知识库</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>产品负责人</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>效率提升12倍</span>
                        </div>
                      </div>

                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-bold text-lg">一站式求职助手网页搭建（AI 产品 Demo）| 独立产品负责人</h4>
                            <span className="text-gray-500">项目时间：2026.04 - 至今</span>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">项目背景：结合自身求职痛点，依托 AI 技术打造覆盖职业规划、简历优化、面试辅导的一站式求职工具。</p>
                        <ul className="space-y-3 mb-4">
                          <li className="text-gray-700">
                            <strong>用户调研：</strong>结合自身体验、问卷调研、网络舆情分析，全面梳理用户痛点，完成用户画像定位与需求梳理。
                          </li>
                          <li className="text-gray-700">
                            <strong>产品设计：</strong>借助 AI 工具完成 <strong>PRD</strong> 撰写、产品架构、开发方案设计，完成功能优先级排序与交互逻辑规划。
                          </li>
                          <li className="text-gray-700">
                            <strong>MVP 落地与迭代：</strong>采用 <strong>Vibe Coding</strong> 模式结合 AI 完成网页开发，使用 <strong>Git</strong> 做版本管控，分步搭建功能模块，解决 AI 理解偏差、功能乱改、Token 不足等落地问题。
                          </li>
                          <li className="text-gray-700">
                            <strong>项目复盘：</strong>总结 Demo 落地问题，明确需求验证、功能取舍、商业化落地的核心要点，沉淀 AI 产品从 0 到 1 的标准化落地方法论。
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>Vibe Coding</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>PRD撰写</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>独立产品负责人</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>MVP落地</span>
                        </div>
                      </div>

                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-bold text-lg">AI 个人动态简历网站搭建 | 独立搭建者</h4>
                            <span className="text-gray-500">项目时间：2026.02</span>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">项目背景：传统静态简历需反复修改适配不同岗位，维护成本高，计划打造线上动态简历网站。</p>
                        <ul className="space-y-3 mb-4">
                          <li className="text-gray-700">
                            <strong>零代码 AI 建站：</strong>依托模板 + AI 工具组合，制定轻量化落地方案，全程通过自然语言提示词完成页面修改、功能调试，<strong>8 小时</strong>完成网站搭建、部署上线。
                          </li>
                          <li className="text-gray-700">
                            <strong>提示词与版本优化：</strong>针对 AI 篡改功能、理解偏差问题，优化结构化提示词，搭配 <strong>Git</strong> 版本回溯机制，保障迭代可控。
                          </li>
                          <li className="text-gray-700">
                            <strong>落地收获：</strong>深入掌握 Vibe Coding 实操逻辑、提示词迭代技巧，该网站助力获得 <strong>腾讯</strong> 等多家企业面试邀约。
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>Vibe Coding</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>提示词工程</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>快速落地</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>8小时完成</span>
                        </div>
                      </div>

                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-bold text-lg">第四届世界科学智能大赛（电力市场交易赛道・储能电站收益优化）| 参赛选手</h4>
                            <span className="text-gray-500">项目时间：2026.04</span>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">项目背景：基于电力市场真实数据，通过电价预测 + 充放电策略优化，实现储能电站收益最大化，属于时序数据 + AI 策略类项目。</p>
                        <ul className="space-y-3 mb-4">
                          <li className="text-gray-700">
                            <strong>基线拆解：</strong>部署运行官方 Baseline 代码，从特征工程、模型选型、业务策略三个维度，定位原有方案六大缺陷。
                          </li>
                          <li className="text-gray-700">
                            <strong>方案迭代优化：</strong>提出四大优化方向：补充历史电价滞后特征、接入气象原始数据、优化特征筛选逻辑、设计稳健型充放电策略，降低预测误差带来的业务风险。
                          </li>
                          <li className="text-gray-700">
                            <strong>方法论沉淀：</strong>形成「问题定位 - 特征优化 - 模型调优 - 策略兜底 - 数据验证」的 <strong>AI 算法类产品迭代流程</strong>。
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.ai}`}>AI算法</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>特征工程</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>时序数据</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>策略优化</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-500" />
                      数据分析 & 运营类项目
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <h4 className="font-bold mb-2">春节档电影票房数据分析项目 | 独立分析员</h4>
                        <p className="text-gray-700 text-sm mb-2">独立完成票房数据采集、清洗、可视化分析，运用 <strong>Python</strong>、词云工具挖掘票房影响因素与行业规律，搭建完整数据分析框架，强化数据洞察与结论输出能力。</p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>Python</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>数据可视化</span>
                        </div>
                      </div>
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <h4 className="font-bold mb-2">《三国谋定天下》手游抖音/小红书推广项目 | 全流程运营</h4>
                        <p className="text-gray-700 text-sm mb-2">负责短视频内容创作、发布、数据复盘，累计产出 <strong>60+</strong> 条视频，单条最高播放 <strong>1w+</strong>；基于播放、互动数据优化内容与发布策略，提升品牌曝光，锻炼用户思维与数据复盘能力。</p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>内容运营</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>数据复盘</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>用户增长</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                      创业 & 综合类项目
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <h4 className="font-bold mb-2">无畏契约游戏陪玩工作室 | 创始人</h4>
                        <p className="text-gray-700 text-sm mb-2">组建 <strong>4 人团队</strong>，完成人员招聘、标准化培训、服务流程搭建、小红书引流全流程运营；制定定价规则与运营标准，私域转化 <strong>100+</strong>，日均接单 <strong>5 单</strong>，具备商业落地、团队管理与流程搭建能力。</p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.leadership}`}>团队管理</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>商业落地</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>流程搭建</span>
                        </div>
                      </div>
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <h4 className="font-bold mb-2">杨梅冰汤圆摆摊创业 | 联合创始人</h4>
                        <p className="text-gray-700 text-sm mb-2">完成市场调研、选址、定价、运营全流程落地，根据运营数据优化产品与定价，实现正向盈利，树立成本思维与快速迭代意识。</p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>商业思维</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>快速迭代</span>
                        </div>
                      </div>
                      <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                        <h4 className="font-bold mb-2">安全阀 / 二级减速带机构设计项目 | 独立负责人</h4>
                        <p className="text-gray-700 text-sm mb-2">自主学习 <strong>CAD</strong>、<strong>SolidWorks</strong> 完成机械结构设计、图纸绘制与技术说明书撰写，强化自学能力、标准化文档输出与工程逻辑思维。</p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.data}`}>CAD/SolidWorks</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>工程思维</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === "campus" && (
                <section className={sectionStyle}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#FF6B7A]" />
                    校园 & 社会实践经历
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">学院辩论队 | 副队长</h4>
                        <span className="text-gray-500 text-sm">2025.11 - 至今</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">负责招新、新人培训、赛事统筹与赛后复盘，制定标准化培训体系与复盘机制；带队参与各类赛事，锻炼<strong>逻辑拆解</strong>、临场应变、<strong>团队管理</strong>与问题总结能力。</p>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.leadership}`}>团队管理</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>逻辑拆解</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>复盘机制</span>
                      </div>
                    </div>
                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">小百合工作室（学院官方社媒）| 内容创作与运营成员</h4>
                        <span className="text-gray-500 text-sm">2025.11 - 至今</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">负责音视频内容策划、剪辑、选题优化，深度理解平台用户偏好与内容生态，完成需求落地与体验优化，适配 AI 产品内容生态、<strong>用户体验</strong>相关工作。</p>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>用户体验</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>内容运营</span>
                      </div>
                    </div>
                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">跆拳道社 | 核心干事</h4>
                        <span className="text-gray-500 text-sm">2024.09 - 2025.11</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">统筹社团招新、宣传运营、团建活动，制定落地执行方案，保障活动零失误，提升活动策划、现场协调与宣传推广能力。</p>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>活动策划</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>执行落地</span>
                      </div>
                    </div>
                    <div className="bg-[#FAF5F0] border-3 border-black rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">各类赛事 & 大会志愿者 / 领队</h4>
                        <span className="text-gray-500 text-sm">2025.11 / 2026.01 / 2026.02</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">先后担任 Keep 领跑节领队、科学合伙人大会嘉宾接待、上海杯辩论赛现场执行，负责人员调度、设备调试、现场秩序维护，具备优秀的沟通协调、<strong>应急处理</strong>与精细化流程把控能力。</p>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.product}`}>沟通协调</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors.efficiency}`}>应急处理</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}