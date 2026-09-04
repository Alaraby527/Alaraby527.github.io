# 杨惠雯｜AI 产品经理作品集

这是 [Alaraby527](https://github.com/Alaraby527) 的 AI 产品经理作品集源码，展示复杂业务中的 AI 工作流、Agent 可靠性、人机协作和评测迭代。

## 在线入口

- 作品集主页：<https://alaraby527.github.io/>
- TV Copilot 静态演示：<https://alaraby527.github.io/tv-buying-copilot/>
- 个人 GitHub：<https://github.com/Alaraby527>

## 项目分层

| 状态 | 案例 | 关键证据 |
|------|------|----------|
| 实际使用 | 火花工坊 AI 运营平台 | 工作台服务 12 名实习生；AI 运营平台全员使用；AI 日报每日推送至各私域；公众号 RAG 已接入 |
| 实习后独立重做 | 电视选购 Copilot | 25 条模拟评测，72%（18/25）→92%（23/25） |
| 独立原型 | MSDS 职业病危害因素识别 | 黄金集 8/12→11/12，保留人工复核 |
| 模拟评测 | Lucky Growth Agent | 基于模拟数据完成策略设计、三轮迭代与评测 |

## 项目说明

项目页会标注每个项目的使用状态、数据来源和评测规模，读者可以按对应 README 查看完整过程与结果。

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
