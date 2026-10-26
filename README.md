# Theatre Seat View · 剧场座位视角

面向不同剧场的三维重建与逐座观演视角项目。版本 0.3.0，已收录梅溪湖大剧院和深圳保利剧院的主剧场。

以公开平剖面、观众厅照片和座位图制作可编辑三维模型。前端使用 Three.js，所有运行依赖随包提供，无需 CDN、API Key 或后端。

源码仓库：[hugozhou-ai/theatre-seat-view](https://github.com/hugozhou-ai/theatre-seat-view)（公开）。
GitHub Pages：[在线体验](https://hugozhou-ai.github.io/theatre-seat-view/)。部署状态见 [GitHub Actions](https://github.com/hugozhou-ai/theatre-seat-view/actions/workflows/pages.yml)。

本地开发目录：`/Users/vector/Documents/CODES/WORK_SPACE_B/theatre-seat-view`。

## 已收录剧场

| 剧场 | 位置数 | 直接打开 |
| --- | ---: | --- |
| 梅溪湖大剧院主剧场 | 1,811 | [进入模型](https://hugozhou-ai.github.io/theatre-seat-view/?theatre=meixihu) |
| 深圳保利剧院主剧场 | 1,551 | [进入模型](https://hugozhou-ai.github.io/theatre-seat-view/?theatre=shenzhen-poly) |

左侧“选择剧场”可切换模型，并同时更新座位图、资料对照、来源说明和导出文件。切馆会重新加载页面与相应模型，避免上一剧场的相机和坐标状态混用。

## 使用

```sh
npm ci
npm run build
npm test
npm run dev
```

推荐 Node.js 22。打开 http://127.0.0.1:4173 。也可将 `dist/` 直接部署到支持静态文件的站点根目录或子目录；不要用 file:// 双击 HTML。

## 项目与部署

`.github/workflows/pages.yml` 在推送到 `main` 或手动触发时，依次安装锁定依赖、构建、运行测试、上传 `dist/` 并部署 GitHub Pages。仓库 Settings → Pages 的构建来源为 GitHub Actions，已启用 HTTPS。

所有网页入口与参考图片使用相对地址，支持 `/theatre-seat-view/` 项目路径及 `?seat=...` 定位。`tests/deployment.test.mjs` 检查入口资源、传递模块依赖和对照图路径，防止资源错误请求到 github.io 域名根目录。

`artifacts/` 保存 GLB、座位坐标和验收截图；`acceptance/` 保存测试记录。这两个目录不作为 Pages 发布内容。公开参考图位于 `public/reference/`，随网页提供实景对照。

`.openai/hosting.json` 保留原 Sites 站点标识，GitHub Actions 不使用它。原 Sites 页面与 GitHub Pages 分别部署，推送 GitHub 不会自动更新原 Sites 页面。

- 深圳包厢可在区域中选择左侧/右侧包厢，再选择包厢号与座位。
- 点击座位图，或选择楼层、区域、排、座后入座。总览模式下也可点击可见三维座椅。
- 座位视角默认采用 75° 垂直视场角及 1 倍镜头倍率，拖动转头；相机始终固定在该座位的坐姿眼点。滚轮不改变座位视野，总览模式仍可滚轮缩放。
- 点击“自然视角”或在三维画面中按 Home，可恢复默认视野并面向舞台。
- 设置中可调坐姿眼高（0.95–1.40 m）、垂直视场角（35–85°），显示或隐藏乐池活动座椅和舞台比例人物。
- 地址参数 `?seat=2F-M-08-15` 可定位同一个重建位置。
- “模型依据与精度”中可导出 GLB 模型和座位坐标 JSON。GLB 可导入 Blender 等支持 glTF 2.0 的软件。
- 手机上可收起选座面板以扩大三维画面。

## 数据与精度

### 深圳保利剧院

| 区域 | 位置数 | 来源 |
| --- | ---: | --- |
| 一层固定池座 | 853 | 21 排，来源图逐排标注 |
| 乐池活动位置 | 98 | 4 排：22、23、26、27 |
| 二层楼座与包厢 | 396 | 普通楼座 360、包厢 36 |
| 三层楼座与包厢 | 204 | 普通楼座 184、包厢 20 |
| 合计 | 1,551 | 含 56 个包厢位置 |

依据深圳保利剧院演出资讯 2020 年发布的三张分层座位图逐排重建数量，按图示分块和弧线排列位置。**这不是自动识别得到的逐座实测坐标。** 中间与侧区的座椅中心沿重建曲线插值，包厢位置与全部三维尺寸仍为估算。`topology=published-2020-row-counts`；`mapPosition` 为图示排布的重建坐标，不能作为原图逐座描点记录。

内景独立重建为红色座椅、金色楼座前缘、灰色声学墙面、侧包厢和分块木质顶棚。台口采用 16 m × 10 m 的建模参数，当前未取得足以校准的竣工平剖面或现场高程；台口、排距、楼座标高、栏板和舞台深度均待核实。仅建模观众可见的舞台，不包含完整后台系统。

### 梅溪湖大剧院

以下为梅溪湖模型数据；各剧场的资料、图片和导出文件分别命名。

| 区域 | 位置数 | 依据 |
| --- | ---: | --- |
| 一层固定池座 | 1,066 | 公开座位图逐排描点 |
| 二层楼座 | 318 | 公开座位图逐排描点 |
| 三层楼座 | 297 | 公开座位图逐排描点 |
| 乐池活动位置 | 130 | 按容量估算，行列未核实 |
| 合计 | 1,811 | 均有独立坐标和可选标识 |

1,681 个固定位置保留原图坐标 `mapPosition`。原图是展开式平面座位图，因此从图像坐标转为真实三维位置仍须几何推断。**逐座描点不意味着真实三维位置已经测量核准。**

`seatId`、区域、排号和座号均为本模型的重建编号，不能直接对应票务系统。所有位置 `ticketIdentityVerified=false`。乐池是否开放及真实排布取决于演出配置。

模型单位为米，Y 轴向上，原点为台口地面中心，观众厅位于 +Z。默认坐姿眼高 1.16 m、垂直视场角 75°。“自然视角”是便于观演的显示预设，并非实测人眼校准；屏幕尺寸和观看距离也影响感知比例。排距、每排高差、楼座曲率、栏板和台口尺寸均含估算；人物仅为比例参考。视角反映模型几何，空场中不包含前排观众身体、演出布景和临时设备的遮挡。**目前适用于交互原型、空间展示和后续校准，不应作为实际购票视线或建筑测量的保证。**

达到实测选座精度仍需：竣工平剖面/CAD 或激光扫描、各排高程与栏板尺寸、官方票面座号表，以及跨楼层和侧区的现场对照照片。当前验收只确认软件功能及几何内部一致性，没有验证与实物的尺寸误差。

## 编辑入口

- `src/venues.js`：剧场注册、独立模型构建入口、参考资料、默认座位与精度说明。
- `src/poly-layout.js`：深圳逐排数量、包厢分区和估算坐标。
- `src/poly-theatre.js`：深圳独立室内建筑与材质。
- `src/theatre-common.js`：共用座椅实例化、原始矩阵显隐恢复和静态几何合并。
- `src/layout.js`：梅溪湖尺度、楼层高差、楼座映射、座位位置、眼点。
- `src/traced-seating.js`：从原座位图描出的每排座位块。
- `scripts/trace-reference.py`：生成原图描点数据，运行需 Python 和 Pillow。
- `src/theatre.js`：梅溪湖木饰面、顶棚、栏板、楼层支撑和座椅几何。
- `src/app.js`：选座、相机、触屏、导出与诊断。
- `tests/layout.test.mjs`：数据、眼点、座椅间距和原图拓扑检查。

运行时座椅使用实例化绘制，建筑几何按材料合并。GLB 导出为共享几何的普通网格，便于编辑；每个座椅部件带 `seatId`。导出反映当时的活动座椅及人物显示设置。

## 公开参考与署名

- [深圳保利剧院演出资讯：2020 年分层座位图与内景](https://www.sohu.com/a/396239249_703600)
- [保利剧院公司：深圳剧院名录](https://www.polytheatre.com/newsCer/514)
- [ZHA / ArchDaily 项目资料、平剖面与内景](https://www.archdaily.com/929645/changsha-meixihu-international-culture-and-art-centre-zaha-hadid-design)
- [湖南湘江集团 2017 年全厅座位排列](https://www.sohu.com/a/152800195_760112)
- [湘江新区 2018 年一层座位资料](https://www.sohu.com/a/231444430_395453)

深圳资料由深圳保利剧院演出资讯公开发表，相关摄影及座位图权利归原作者与发布方。梅溪湖参考摄影 © Virgile Simon Bertrand / Zaha Hadid Architects；建筑设计 Zaha Hadid Architects。参考图片及图纸权利归原作者和发布方所有，本包保留来源供研究对照，未授予其独立商业再分发许可。生成几何为据此制作的近似重建，并非官方 BIM 或竣工模型。

梅溪湖早期验收见 `验收报告.md`；深圳本次记录见 `深圳保利验收报告.md` 与 `acceptance/shenzhen-poly.json`。诊断接口统一为 `window.__THEATRE_VIEW__`，其中 `getState()` 返回当前 `theatreId`。

## Agent 规则与图标

开发规则见仓库根目录 `AGENTS.md`。所有界面图标统一使用锁定版本的 Lucide（`lucide-static`），名称集中在 `src/icons.js`。构建时按需生成本地 SVG sprite、favicon 和下拉箭头，保留 `dist/vendor/LUCIDE-LICENSE.txt`。静态图标使用 `data-icon` 占位符，动态状态调用 `icon()`；禁止通过 emoji、Unicode 符号或自绘 SVG 模拟界面图标。
