# Theatre Seat View 项目规则

本文件适用于仓库内所有代码，供 Codex 等 coding agent 执行。

## 项目公共 Skill

- 搜集剧场图纸/座位资料、新增剧场室内模型或校准逐座视角时，使用 [theatre-reconstruction](.agents/skills/theatre-reconstruction/SKILL.md)。该 skill 随仓库共享，不用于普通界面改版。

## 统一图标库

- 所有界面图标统一使用 **Lucide**，当前依赖为锁定版本的 `lucide-static`。不得混用其他图标库。
- 禁止用 emoji、Unicode 特殊符号、单个字母模拟操作图标；禁止手写或复制自定义 SVG path 作为界面图标。
- 范围包括按钮、工具栏、提示、外链、下载、展开/收起、品牌图标和 favicon。状态变化前后的图标也必须来自 Lucide。
- 图标名称集中登记在 `src/icons.js` 的 `ICON_NAMES`；新增图标先更新此清单。
- 静态 HTML 使用 `<i data-icon="图标名"></i>`。构建脚本从锁定的 npm 包生成按需 SVG sprite，并将占位符编译为图标。
- 动态界面使用 `src/icons.js` 导出的 `icon()`，禁止重新实现 SVG 图标渲染逻辑或用 `textContent` 写入符号。图标资源随 `dist/` 本地发布，不依赖外部 CDN。
- 使用统一的 24×24 viewBox、2px 描边和 `currentColor`；常规图标 16px，工具栏图标 20px，尺寸调整集中在样式表中。
- 装饰图标必须设置 `aria-hidden="true"`、`focusable="false"`；纯图标按钮必须保留有意义的中文 `aria-label`，动态按钮同步更新无障碍状态。
- 座位图、舞台轮廓、状态数据点、加载动画和 Three.js 模型属于业务可视化，并非界面图标；按业务数据绘制，不能替换成图库图标。
- 不直接编辑生成的 `dist/icons.svg`、`dist/favicon.svg` 或其他 `dist/` 文件；修改源文件后运行构建。

## 开发与验证

- 使用当前分支开发，禁止创建或使用 worktree。
- 排查问题必须找到根因后修复，不添加掩盖问题的补丁或兜底。缺少证据时添加调试日志或请求更多上下文。
- 同一问题的调试日志使用相同前缀，内容通过 `JSON.stringify` 输出，始终打印，不增加日志开关。
- 重构后检查并删除无用旧代码。
- 未经用户同意，不使用用户浏览器或内置浏览器进行验证；默认由用户验证。已有授权按其明确范围执行。
- 提交遵循 Conventional Commits；用户要求提交时，只提交当前会话的改动；合并 PR 禁止 squash。
- 基础检查：`npm run build`，再运行 `npm test`。图标修改同时确认图标资源、动态状态、无障碍标签和移动端布局正常。

## 统一组件库

- 界面控件统一采用锁定版本的 **Web Awesome**（`@awesome.me/webawesome`），使用免费开源组件，按需打包并本地发布。不得引入第二套 UI 组件库或运行时 CDN。
- 下拉选择使用 `wa-select` / `wa-option`；弹窗使用 `wa-dialog`；滑块使用 `wa-slider`；开关使用 `wa-switch`；动作按钮使用 `wa-button`；互斥分段选择使用 `wa-radio-group` / `wa-radio appearance="button"`；提示使用 `wa-tooltip`。
- 页面业务代码不得继续使用原生 `select`、`input[type=range]`、`input[type=checkbox]`、`dialog` 和动作 `button` 来实现已有组件库控件。库内部的原生实现不受此限制。座位图和三维画布保留业务绘制。
- 组件注册、中文语言包和图标库配置集中在 `src/components.js`。新增组件先在这里按需引入，不加载整套自动注册器。
- 所有组件内部图标同样必须来自 Lucide。新增内部图标先更新 `src/components.js` 的显式映射和 `src/icons.js` 的清单；禁止恢复 Font Awesome 默认图标。SVG sprite 图标必须保留 24×24 的 viewBox 与尺寸。
- 主题统一在 `public/style.css` 用 `--wa-*` 设计变量和官方公开的 CSS parts 设置。优先使用当前公开 part（如按钮的 `button`），不修改库内部 Shadow DOM 或生成文件。
- 下拉数据联动使用业务数据传递区域和排号，不依赖组件异步渲染过程中读取尚未刷新的选项。程序赋值与用户 `change` / `input` 事件需区分。
- 弹窗通过 `open` 控制，焦点管理、Esc、遮罩关闭交给组件库。禁止再保留原生 `showModal()` / `close()` 或手写遮罩坐标判断逻辑。
- 纯图标按钮除外层中文 `aria-label` 外，须通过默认 slot 中的 `.sr-only.button-label` 提供内部按钮的可访问名称；动态更新使用 `iconButtonContent()`，并同步文字与状态。互斥选择使用库自带键盘导航，不用普通按钮模拟 tab。
- 改动组件后执行构建和测试；有相应浏览器授权时，检查下拉菜单不被面板裁切、区域/排/座联动、键盘操作、弹窗焦点恢复、滑块和开关、手机端布局，以及 GitHub Pages 子路径资源。不保留失效的原生控件 CSS 和事件处理代码。
