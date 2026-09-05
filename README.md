# 杨惠雯｜AI 产品经理作品集

这是 [Alaraby527](https://github.com/Alaraby527) 的 AI 产品经理作品集源码，展示复杂业务中的 AI 工作流、Agent 可靠性、人机协作和评测迭代。

## 在线入口

- 作品集主页：<https://alaraby527.github.io/>
- TV Copilot 静态演示：<https://alaraby527.github.io/tv-buying-copilot/>
- 个人 GitHub：<https://github.com/Alaraby527>

## 项目分层

作品集按项目成熟度和用途分为三层。HuohuaHub 单独作为一个平台建设案例展示，其下的工作台、RAG 和 AI 日报是同一平台中的业务模块，不再作为互不相关的项目理解。

### 核心案例

- [电视选购 Copilot](https://github.com/Alaraby527/tv-buying-copilot)：Multi-Agent、RAG、MCP、Memory 和评测闭环
- [HuohuaHub｜AI 创作者平台](https://github.com/Alaraby527/huohuahub-ai-creator-platform)：独立平台 **huohuahub.com**；我是平台主要搭建者之一，负责 AI 产品方向，并参与平台重设计、成长体系、AI 运营、实习生协作、公众号 RAG 和 AI 日报等模块落地
- [MSDS 职业危害识别](https://github.com/Alaraby527/msds-hazard-agent)：OCR、知识库匹配、证据链和人工复核
- [Lucky Growth Agent](https://github.com/Alaraby527/lucky-growth-agent)：用户画像、增长策略 Agent 和多轮评测
- [发票风险审核 Agent](https://github.com/Alaraby527/invoice-risk-review-agent)：二维码/OCR、规则审核和风险兜底

### HuohuaHub 平台模块证据

- [实习生每日工作台（脱敏演示）](https://github.com/Alaraby527/intern-daily-workstation)：HuohuaHub 的平台子模块，覆盖任务、打卡、附件和 Mentor 验收；用于展示平台建设中的一个具体模块，不是独立业务项目
- HuohuaHub 的其他模块：AI 运营平台、公众号 RAG 问答、AI 日报工作流和私域分发，统一收录在 [HuohuaHub 平台案例](https://github.com/Alaraby527/huohuahub-ai-creator-platform) 中

### 其他产品原型

- [AI PM Coach](https://github.com/Alaraby527/ai-pm-coach)：简历/JD 分析、能力差距和模拟面试
- [AI 产品经理学习助手](https://github.com/Alaraby527/aipm-learning-assistant)：知识地图、学习计划、题库和自测

### 方法论与工具

- [AI PM SkillKit](https://github.com/Alaraby527/ai-pm-skills)：17 个 Skill 与项目闭环 Workflow
- [AI PM 方法论笔记](https://github.com/Alaraby527/ai-pm-methodology-notes)：研究、需求、评测和知识库方法
- [AI PM 简历写作 Skill](https://github.com/Alaraby527/ai-pm-resume-writing)：JD 解析、经历挖掘和简历诊断

## 项目说明

项目页会标注每个项目的使用状态、数据来源和评测规模。HuohuaHub 项目页描述平台整体及其模块关系，相关独立仓库只作为具体模块的脱敏实现或证据材料。

## 本地运行

```bash
pnpm install --frozen-lockfile
pnpm dev
```

生产构建：

```bash
pnpm run lint
pnpm run build
```

## 目录

- `app/`：Next.js 页面与项目详情路由
- `components/`：作品集页面组件
- `lib/portfolio-projects.ts`：项目案例数据源
- `public/`：图片与静态资源
- `.github/workflows/deploy.yml`：GitHub Pages 部署流程
