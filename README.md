# 爪爪泡泡

基于 Next.js App Router、React、TypeScript 和普通 CSS 的宠物洗护展示网站。

## 本地开发

要求 Node.js 20.9+，推荐 Node.js 24 LTS。使用 npm 管理依赖：

```sh
npm ci
npm run dev
```

访问 http://localhost:3000。

## 验证与生产运行

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

生产部署需要支持 Node.js 的运行环境，安装依赖并构建后运行 `npm start`。可通过 `npm start -- --port 3001` 指定端口。此项目未配置静态导出。

旧版 `dist/` 和 `site.tar.gz` 保留用于对照，不是新版构建产物。现有 `.openai/hosting.json` 指向旧版静态 `dist/`，不能直接运行新版 Node.js 服务；本次迁移未发布网站或修改远程托管。

## 页面与交互

`app/` 包含根布局、首页和全局样式；`components/` 包含静态内容、预约、轮播和地址复制组件；`public/assets/` 包含门店地图。

预约计划仅以 `{ pet, service, date }` 格式写入浏览器 localStorage 的 `pawpaw-plan` 键，不发送给门店。日期下限使用访问者的本地日期。轮播支持按钮、方向键、滑动与暂停，尊重减少动态效果设置。

保留原页面外部图片、Google Fonts、图片来源及展示示例说明。外部资源需要联网加载，图片仍使用原生 img 以保留原有加载和裁剪行为。

## 迁移验证记录

已通过 TypeScript 检查、ESLint、生产构建和生产服务浏览器回归：全部预约入口、日期校验、本地保存成功及失败、弹窗关闭、轮播按钮/方向键/滑动/暂停/自动切换、悬停/焦点/页面隐藏/减少动态效果、复制地址成功及失败。未发现 hydration 错误；1440px 与 390px 下主要区块布局尺寸与旧版差异小于 1px，首页与地图资源返回正常。

依赖审计发现 ESLint 开发依赖链中的 `braces` 存在高危告警，其当前最新版本尚无修复；未通过降级 Next.js 工具链规避该报告。生产依赖审计无漏洞。
