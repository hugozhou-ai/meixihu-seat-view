# Theatre Seat View · 剧场座位视角（Taro 微信小程序 & H5）

面向不同剧场的三维重建与逐座观演视角项目。版本 0.4.0，已重构为 **Taro 4 + React + Three.js** 架构，原生支持编译为**微信小程序**（`weapp`）与 **H5 网页端**（`h5`），收录梅溪湖大剧院和深圳保利剧院的主剧场。

以公开平剖面、观众厅照片和座位图制作可编辑三维模型。所有运行依赖与 Lucide 图标随包构建提供，无需外部 CDN、API Key 或后端。

## 已收录剧场

| 剧场 | 位置数 | 说明 |
| --- | ---: | --- |
| 梅溪湖大剧院主剧场 | 1,811 | 固定池座 1,066、乐池 130、二层 318、三层 297 |
| 深圳保利剧院主剧场 | 1,551 | 固定池座 853、乐池 98、二层 396、三层 204（含 56 包厢位） |

选座面板顶部“选择剧场”可即时切换剧场模型，并同步更新座位图、实景对照、来源说明和导出文件。

## 快速开始与构建

```sh
npm install
npm run build        # 同时构建微信小程序 (dist/) 与 H5 预览端 (dist-h5/)
npm run build:weapp  # 仅构建微信小程序端 -> dist/
npm run build:h5     # 仅构建 H5 网页端 -> dist-h5/
npm test             # 运行拓扑、几何、视角与构建产物测试
npm run dev          # 启动本地 H5 预览服务 (默认 http://127.0.0.1:4173)
```

### 微信小程序使用方式

1. 执行 `npm run build:weapp` 生成 `dist/` 微信小程序包。
2. 打开**微信开发者工具**，导入仓库根目录（已内置 `project.config.json`，`miniprogramRoot` 指向 `dist/`）。
3. 小程序端三维视口通过原生 `<Canvas type="webgl" id="theatre-webgl">` 接入 Three.js，二维选座图通过 `<Canvas type="2d">` 渲染与触控点选，弹窗、分段标签、下拉选择器（`Picker`）、滑块（`Slider`）和开关（`Switch`）均为 Taro 小程序原生组件。

## 功能概览

- 深圳包厢可在区域中选择左包厢/右包厢，再选择包厢号与座位。
- 点击选座图，或选择楼层、区域、排、座后入座；剧场总览模式下也可点击/轻触可见三维座椅入座。
- 支持**观众视角**与**舞台视角**（站在舞台典型站位面向观众席，站姿眼高 1.65 m）。
- 座位视角默认采用 75° 垂直视场角，单指拖动转头；相机固定在该座位的坐姿眼点。总览模式支持单指旋转、双指捏合/滚轮缩放。
- 点击右侧“自然视角”按钮可恢复默认视野并面向舞台/观众。
- 视角设置中可调坐姿眼高（95–140 cm）、垂直视场角（35–85°），显示或隐藏乐池活动座椅和舞台比例人物。
- “模型依据与精度”中可导出 GLB 模型和座位坐标 JSON（小程序端写入本地沙盒并调起文件分享，H5 端直接触发下载）。
- 手机/小程序端可收起选座面板以扩大三维画面。

## 目录与模块说明

- `project.config.json`：微信开发者工具项目配置（`miniprogramRoot: "dist/"`）。
- `config/index.js`：Taro 4 Webpack5 多端构建配置（微信小程序输出 `dist/`，H5 输出 `dist-h5/`）。
- `src/app.config.js` / `src/app.js` / `src/app.css`：Taro 小程序与 H5 全局入口及米白/深绿主题样式。
- `src/pages/index/index.jsx`：主页面，包含 WebGL 三维视口适配、相机过渡、触控/鼠标手势、选座面板、弹窗与 `__THEATRE_VIEW__` 诊断接口。
- `src/components/ui.jsx`：基于 `@tarojs/components` 封装的跨端 UI 组件（`LucideIcon`、`SegmentedTabs`、`PickerSelect`、`ModalDialog`）。
- `src/components/SeatMapCanvas.jsx`：二维选座图组件（小程序端使用 `<Canvas type="2d">`，H5 端使用交互式矢量图）。
- `src/icons.js` / `scripts/generate-icons.mjs`：从锁定版本 `lucide-static` 自动提取 SVG 图标并生成跨端 Data URI 与图标清单。
- `src/venues.js`：剧场注册、独立模型构建入口、参考资料、默认座位与精度说明。
- `src/layout.js` / `src/theatre.js` / `src/traced-seating.js`：梅溪湖大剧院座位拓扑与室内三维建模（采用跨端 `THREE.DataTexture` 程序化木纹）。
- `src/poly-layout.js` / `src/poly-theatre.js`：深圳保利剧院座位拓扑与室内三维建模。
- `src/theatre-common.js` / `src/stage-actors.js` / `src/stage-view.js`：共用座椅实例化、几何合并、舞台比例人物与舞台站位计算。
- `tests/*.test.mjs`：座位拓扑、眼点几何、舞台人物与 Taro 双端构建产物验证。
