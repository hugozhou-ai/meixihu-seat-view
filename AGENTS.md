# Theatre Seat View 项目规则

本文件适用于仓库内所有代码，供 Codex 等 coding agent 执行。

## 项目公共 Skill

- 搜集剧场图纸/座位资料、新增剧场室内模型或校准逐座视角时，使用 [theatre-reconstruction](.agents/skills/theatre-reconstruction/SKILL.md)。该 skill 随仓库共享，不用于普通界面改版。

## 统一图标库

- 所有界面图标统一使用 **Lucide**，当前依赖为锁定版本的 `lucide-static`。不得混用其他图标库。
- 禁止用 emoji、Unicode 特殊符号、单个字母模拟操作图标；禁止手写或复制自定义 SVG path 作为界面图标。
- 范围包括按钮、工具栏、提示、外链、下载、展开/收起、品牌图标和 favicon。状态变化前后的图标也必须来自 Lucide。
- 图标名称集中登记在 `src/icons.js` 与 `scripts/generate-icons.mjs` 的 `ICON_NAMES`；新增图标先更新此清单并执行 `node scripts/generate-icons.mjs`。
- Taro 界面统一使用 `src/components/ui.jsx` 的 `<LucideIcon>` 组件（底层调用 `src/icons.js` 导出的 `iconDataUri()`，数据由构建脚本从锁定的 `lucide-static` 自动生成至 `src/generated-icons.js`），兼容微信小程序 `weapp` 与 `h5` 双端，不依赖外部 CDN。
- 使用统一的 24×24 viewBox、2px 描边；装饰图标设置 `aria-hidden="true"`；纯图标按钮保留有意义的中文 `aria-label`，动态按钮同步更新无障碍状态。
- 座位图、舞台轮廓、状态数据点、加载动画和 Three.js 模型属于业务可视化，并非界面图标；按业务数据绘制，不能替换成图库图标。
- 不直接编辑生成的 `src/generated-icons.js`、`dist/` 或 `dist-h5/` 文件；修改源文件后运行构建。

## 开发与验证

- 使用当前分支开发，禁止创建或使用 worktree。
- 排查问题必须找到根因后修复，不添加掩盖问题的补丁或兜底。缺少证据时添加调试日志或请求更多上下文。
- 同一问题的调试日志使用相同前缀，内容通过 `JSON.stringify` 输出，始终打印，不增加日志开关。
- 重构后检查并删除无用旧代码。
- 未经用户同意，不使用用户浏览器或内置浏览器进行验证；默认由用户验证。已有授权按其明确范围执行。
- 提交遵循 Conventional Commits；用户要求提交时，只提交当前会话的改动；合并 PR 禁止 squash。
- 基础检查：`npm run build`，再运行 `npm test`。图标修改同时确认图标资源、动态状态、无障碍标签和移动端布局正常。

## Taro 微信小程序与多端规范

- 项目采用 **Taro 4 + React** 架构，支持编译为微信小程序（`npm run build:weapp` 输出至 `dist/`，配合 `project.config.json` 在微信开发者工具打开）与 H5 端（`npm run build:h5` 输出至 `dist-h5/`）。
- 页面与交互控件统一使用 `@tarojs/components`（`View`、`Text`、`Image`、`Picker`、`Slider`、`Switch`、`Canvas`）及 `src/components/ui.jsx` 封装的跨端组件（`LucideIcon`、`SegmentedTabs`、`PickerSelect`、`ModalDialog`）。
- 三维视口在微信小程序端使用 `<Canvas type="webgl" id="theatre-webgl">` 配合 `Taro.createSelectorQuery()` 获取原生 WebGL 节点接入 Three.js；二维选座图在微信小程序端使用 `<Canvas type="2d">` 绘制与触控拾取。
- 核心剧场建模与座位拓扑数据模块（`src/venues.js`、`src/layout.js`、`src/poly-layout.js`、`src/theatre.js`、`src/poly-theatre.js`、`src/theatre-common.js`、`src/traced-seating.js`、`src/stage-actors.js`、`src/stage-view.js`）保持纯三维/数学逻辑，不直接耦合浏览器 DOM，确保在微信小程序、H5 与 Node.js 测试环境中一致运行。
