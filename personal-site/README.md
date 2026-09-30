# Shaoxiao · Next.js 个人网站

采用 Next.js App Router、React 和 TypeScript，保留「用 AI，构建增长。」主题与既有个人内容。

## 开发与构建

要求 Node.js 22 LTS 或更新的受支持版本。

```sh
npm ci
npm run dev
npm run build
npm run typecheck
```

开发预览：http://127.0.0.1:4173 。生产构建输出位于 `out/`。

## 结构与维护

- `src/app/page.tsx` 组合首页章节；`layout.tsx` 管理全站元信息。
- `src/content/social.ts` 集中维护社交平台信息。
- `src/components/` 分别维护导航、首页、洞察、构建、经历、理念、社交连接和页脚。
- 展示章节默认使用服务端组件；滚动导航与互动眼睛图标使用客户端组件，并负责清理事件监听；眼睛动效包含自然张望、呼吸、平滑跟随、眨眼及靠近反馈，支持减少动画偏好；触屏设备不跟随指针，离开视口或页面隐藏时暂停。
- `src/app/globals.css` 管理视觉与响应式样式。
- `public/` 存放主视觉与站点图标；字体仍通过外部服务加载。

## 部署

当前使用 Next.js 静态导出，可将 `out/` 发布到 Sites 或其他静态托管平台。

在 Vercel 新建项目时，Root Directory 选择 `personal-site`，使用本目录的 `package.json` 构建。当前静态配置不需要数据库或服务器运行环境。

需要登录、实时内容、API 或 Server Actions 时，应改成支持 Next.js 服务端的部署方式，并移除 `output: "export"`；静态导出不提供这些运行时能力。

仓库根目录的已有应用分别维护，不属于本项目构建范围。

## 中英文版本

中文首页 `/`，英文首页 `/en/`，均在构建时生成；每个版本有独立文档语言、标题、描述与语言替代链接。页头的 EN / 中文入口保留当前章节锚点，翻译集中在 `src/content/i18n.ts`，共用页面组件。外部文章和视频链接仍指向原发布内容。
