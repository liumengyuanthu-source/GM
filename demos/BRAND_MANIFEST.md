# BRAND MANIFEST — Blackmores · ANZ / 中国 / 东南亚 / 日本

> 第二个客户。原始结构参考旧客户模板，按 `_kit/开发规范.md` 改皮。
> Blackmores History 里的功能规划尽量拿来用（但不直接复用其文件结构）。

## 0. 基本
- **客户 slug**：blackmores-global
- **品牌显示名**：Blackmores（logo 用 Georgia 衬线 + ® ；mark "B"）
- **市场**：ANZ（主场，澳新）≥ 中国 ≈ 东南亚（TH/SG/MY）> 日本
- **主语言（默认）**：en　**语言集**：en / 中 / ไทย / 日（复用四语框架）
- **一句话定位**：CX 战略——"直营抓数据 + 赋能抓本地关系"。直营层=中国微信小程序 + 澳洲 web/app + 全球统一 CDP/会员；赋能层=中国微信 + 日本及部分东南亚 LINE + 部分东南亚 WhatsApp + 门店 QR。Partner Portal 是手段，终端消费者体验是目的。
- **受众提醒**：演示对象是**澳洲客户**，他们不熟悉中国微信/小程序、东南亚 WhatsApp、日本 LINE——这些渠道生态与"在对话/小程序内完成发现→购买→服务"的玩法需要**讲清楚、可读化**。

## 1. 调色板
| 变量 | 色值 |
|---|---|
| --brand | #009BA4 (teal) |
| --brand-d | #007A82 |
| --soft | #e0f2f3 |
| --accent | #E91E63 (pink，促销/高亮) |
| --neg | #c0563f（保留） |
| --warn | #b5731a（保留） |
| --ink | #1A1A1A |
- 字体：标题 Georgia 衬线（含 ®）；正文系统无衬线。卡片圆角 14–16px，克制阴影 `0 2px 8px rgba(0,0,0,.04)`，留白充足，少渐变少动画。

## 2. 产品组合（保健品，需真实产品图/线条图）
真实 Blackmores SKU（中文名见中国小程序）：
- 无腥味深海鱼油 Odourless Fish Oil 1000mg
- 孕妇黄金营养素 Pregnancy & Breastfeeding Gold
- 维骨力关节灵 Glucosamine 1500mg
- 益生菌每日健康 Probiotics Daily Health
- 月见草油 Evening Primrose Oil
- 叶黄素护眼片 Lutein Eye Health
- 复合维生素B Vitamin B Complex
- 维生素C 1000mg / 维生素E
- 睡眠支持 Sleep Support（缬草+镁）
- 天然维生素E面霜 Vitamin E Cream
**功效分类**：免疫力 / 睡眠 / 肠道 / 孕期 / 皮肤 / 关节 / 脑力 / 心血管 / 护眼。
**人群分类**：儿童 / 青少年 / 成人 / 孕妇 / 银发族。
认证背书：**TGA、Australian-made**。线条图风格沿用 `_kit` §6（viewBox56/stroke=teal/width3），画瓶子+胶囊类。

## 3. 市场与渠道（多市场，重点：讲清各渠道生态给澳洲看）
| 市场 | 渠道生态 | 模式 |
|---|---|---|
| 中国 | 微信：**小程序(核心)** + 公众号 + 视频号(直播电商) + **企业微信 WeCom** + 微信支付 + 卡包 + 微信客服 | 直营旗舰 |
| 东南亚 TH/SG/MY | **WhatsApp** 对话电商（Catalog/卡片/支付链接/Webview/AI 坐席辅助） | Partner 经营 |
| 日本 | **LINE**（Mini App + OA + LINE Pay/Points） | 混合 |
| 澳洲 ANZ | Web 优先、App 其次；零售伙伴(Chemist Warehouse/Priceline)嵌官方内容 | 直营主场（英文） |
- 统一 AI 后端（意图/画像/知识检索/多语言）服务所有渠道。

## 4. 案例 / 背书
- docs/ 有 NTT DATA 中国零售分享、AI 场景地图、China AI-Native Era、Salomon 数字门店、**Blackmores×NTTD 会议纪要 pptx**、Agentic Commerce(Genscript) 视频。
- 禁忌（中国侧内容铁律）：**不提竞品**(Swisse/汤臣倍健)、**不做医疗宣称**（只"支持/改善"，不"治疗/治愈"）、**无 UGC**（仅 PGC 官方/专家内容）。

## 5. 语气 / 文案
- 专业、克制、循证；强调 TGA/澳洲原产可信背书；CX 战略叙事（直营+赋能、数据资产）。

## 6. demo 取舍（基于旧客户模板，逐个改皮）
- **旗舰新建**：中国微信小程序（5 tab：首页/商城/AI 健康助手/健康/我的，含 agentic 买手、健康分身、4 级会员）+ **WeCom 后台**（私域 SCRM/店员辅助/内容下发/QR 归因/业绩看板）—— Blackmores History 有 5 页消费者 demo 与 CHINA_MINIPROGRAM_PLAN 可参考功能，但按 studio 单文件风格重建。line-flywheel 统一承载多市场聊天生态飞轮：中国微信、日本和部分东南亚 LINE、另一部分东南亚 WhatsApp。
- 沿用改皮：aigc/social-hub/growth/geo/attribution-roi/agentic-commerce/conversational/loyalty/voc/health/knowledge-graph/navigator/ai-strategy-map/enterprise-foundation/trading-hub/channel-ops/partner-training/store-lifecycle/merchandising/digital-store/compliance-hub/commerce-front-end/cards。
- line-flywheel 已统一讲清 WeChat、LINE、WhatsApp 三类触点；后续可按需拆出更深的单市场 demo。
- 待新建（Blackmores History 标 ⏳）：WhatsApp Hub、Staff Management、Training & Certification、Health Twin 完整版。

## 6b. 健康测评 + Bundle（已接入）
- **健康测评（naturopath 风格，贴 Blackmores）**：选健康目标（免疫/精力压力/睡眠/关节骨骼/心血管/肠道/孕期/健康老龄/皮肤/护眼）→ 5–8 题 → 个性化方案（核心产品 + 匹配 bundle + 内容 + 每日打卡/服用计划），用"支持/有助于"措辞、不作疗效宣称。已接 wechat-miniprogram（首页+健康分身 onboarding）、health.html。
- **Bundle（跨品类组合，洞察：跨品类比单品类好卖 ~42%）**：Family Immunity Bundle 全家免疫组合（复合维+维C+益生菌+儿童维, ~A$89/-15%）· Heart Health Essentials（鱼油+CoQ10, A$55）· Joint & Heart Care Pack（维骨力+鱼油+CoQ10, A$95）· Pregnancy & Baby（孕妇黄金素+益生菌, A$58）· Healthy Ageing（复合维+维骨力+CoQ10+叶黄素, A$120/-18%）· Sleep & Stress（睡眠支持+复合维B, A$42）· Wellness Starter（复合维+维C+鱼油, A$65）。已接 wechat-miniprogram（商城+AI 荐 bundle）、agentic-commerce、commerce-front-end、trading-hub（B2B BDL-xxx SKU）。
- 新增线条图：`coq10.svg`、`kids-multi.svg`（flat + line/）。

## 7. 注意事项
- 品牌/地区选择器同 danone 已移除（固定 Blackmores；底层 state.brand 键位可仍叫 "danone" 但配色=Blackmores teal，显示名=Blackmores）。
- 默认语言 en；市场重点 ANZ。
- 渠道讲解要"可读化"（澳洲受众不熟微信/WhatsApp/LINE）。
