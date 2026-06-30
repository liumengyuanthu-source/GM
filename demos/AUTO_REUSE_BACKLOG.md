# Auto Studio → General Mills · 复用改造 Backlog（跟踪清单）

> 来源：`Auto Experience Studio/DEMO`（Honda India）。目标：把可复用的能力搬到 `clients/generalmills-global/` 并改皮+改内容。
> 状态：☐ 待做 ｜ ◐ 进行中 ｜ ☑ 完成。新文件暂存于 `_from-auto/`，改完移到正式目录并接入导航/目录。
> 起草：2026-06-27

---

## 0. 每个文件的"改造清单"（统一标准，逐个套用）

- ☐ 改皮：Honda 红 → General Mills teal `#009BA4`（+ pink `#E91E63`）；字体 Georgia 标题；圆角/阴影按 BRAND_MANIFEST。
- ☐ 换 logo：`images/gm/gm-ai-foundation.jpg Honda→General Mills。
- ☐ 改内容：汽车语境 → 品牌/零售 + 渠道语境（对齐 `MARKET_POSITIONING.md`：渠道+消费者、短期赋能/长期直营）。
- ☐ 删/换汽车专属机制：试驾/EMI/配车/2W-4W 升级 → 零售等价（bundle、药店执行、跨品类/跨市场升级、跨渠道同意桥）。
- ☐ 合规：中国三铁律（无竞品/无疗效/仅 PGC）、brand governance/澳洲原产。
- ☐ 接入：顶部导航 / Catalog / Journey 对应位置；header 用「← Back to studio + 衬线标题」样式。
- ☐ 校验：HTML 解析、链接可用、四语 fallback。

---

## 1. 优先级队列（按这个顺序逐个改）

1. ☑ **cross-entity-bridge**（新）— 合规数据桥 → 已改成「渠道→品牌 同意数据桥」，英文版，teal 改皮，已进正式目录
2. ◐ **channel-ops**（port）— 已 port Auto 版覆盖 BM 壳 + 脚本改皮（teal、Honda→General Mills、dealer→partner/渠道、vehicle→product、test drive→consultation）。⚠️ 343KB，深层仍有零星汽车残留（RTO、座椅材质、workshop、allocation），深度文案待清
3. ☑ **ai-transformation-navigator**（enhance）— 已**原创增强重写**（Auto 21 标题 / 旧 BM 8 → 新版 26）：新现实 → 4 范式转变 → AI 就绪底座 → **8 大负责任 AI 治理组件**（隐私同意/无疗效/数据最小化RBAC/准确安全/人审/可审计/分市场规则/公平）→ 5 阶段交付 → 成效。teal、零汽车残留
4. ☑ **myhonda-ownership-companion**（新）→ **原创重写**为 `health-companion.html`：「从交易触点 → 每日场景陪伴」参与度增长提案；North star = Weekly Active Occasion Members；四镜头分析 + 诊断 + 每日习惯环（check-in→Occasion Score→Monthly Wrapped）+ 长期第一方；teal + 「Back to studio」头部；无汽车内容残留
5. ☑ **qw2-ride-score**（新）→ **原创重设计**为 `health-score.html`：手机端交互 demo「Occasion Score 场景分 + Monthly Wrapped」。Today（每日打卡食品组合→评分环+streak）/ Reports（周·月Wrapped·年里程碑）/ Community（按坚持度匿名排行）。可交互（勾选→评分变化、Log today→streak+1、分享 toast）。teal 改皮、合规守则、零汽车残留
6. ◐ **growth**（port）— 已改皮（teal/Honda→General Mills/₹→A$）；深层 car/2W/4W 残留待清
7. ☑ **social-hub**（enhance）→ 保留 BM 零售版 + **补 Honda 多出的「Insights / 社媒聆听」tab**（Top content 热度、评论 Word cloud、Sentiment 72/19/9、负面主题 Complaints）；数据换成品牌语境（湾仔码头水饺/季节场景/礼赠家庭/睡眠，配送/包装/价格负面），标签 inline 四语，合规守则（仅支持性聆听、无疗效）
8. ✋ **line-flywheel**（port）→ **保留 BM 现有零售版**（已是 General Mills 微信/LINE/WhatsApp 飞轮）
9. ◐ **digital-store**（port）— 已改皮；深层零星残留待清
10. ✋ **agentic-commerce**（port）→ **保留 BM 现有零售版**（125KB 已实质零售）
11. ◐ **order-management**（新）— 已改皮进正式目录；2W 等残留待清
12. ◐ **campaign-management**（新）— 已改皮；残留待清
13. ◐ **data-driven-customer-experience**（新）— 已改皮（偏叙事，残留较多，待清/可改真重写）
14. ◐ **discovery**（新）— 已改皮（Honda/2W 残留较多，待清）
15. ☑ **digital-transformation**（新）→ **原创重写**：BX/CX/UX/EX 四层 + CX vs BX + 数字赋能(赋能→直营) + 方法论(Discover→Map→Prioritise→Pilot→Scale) + 数字/实体双域 + 季节场景购物者用例。teal、零汽车残留
16. ☑ **ai-optimized-design-thinking**（新）→ **原创重写**：设计思维五阶段 + 各阶段 AI 加速 + 工具(研究/内容/原型) + 工作流 + before/after 交付。teal、零汽车残留

---

## 2. A 组 · 新增能力（General Mills 没有，已 copy 到 `_from-auto/`）

| 状态 | 文件 | 改成（零售方向） |
|---|---|---|
| ☑ | cross-entity-bridge.html | ✅ 已改：「渠道（marketplace/药店/分销，握数据）→ 品牌 General Mills 第一方 CDP/会员」的同意数据桥；7 步交互（服务→就绪度→同意→RBAC 数据墙→新会员→直营激活→结算）；PIPL/隐私法；英文 + teal |
| ☐ | order-management.html | 多渠道订单管理 OMS（marketplace + DTC + 分销） |
| ☐ | campaign-management.html | 活动/大促/会员活动编排，合规内容下发 |
| ☐ | data-driven-customer-experience.html | 数据驱动客户运营（CDP 驱动 CX） |
| ☐ | discovery.html | AI 发现/搜索 → AI 场景导购发现层 |
| ☐ | digital-transformation.html | 数字化转型战略页（渠道+消费者叙事） |
| ☐ | ai-optimized-design-thinking.html | AI 优化设计思维方法论（通用，轻改） |
| ☐ | myhonda-ownership-companion.html | 车主陪伴 App → 场景陪伴 App / Occasion Twin（MAU 增长） |
| ☐ | qw2-ride-score.html | Ride Score + Wrapped → 场景分 + 年度报告 |

---

## 3. B 组 · 重名但 Auto 更丰富 → port Auto 版再改零售

| 状态 | 文件 | Auto vs BM | 说明 |
|---|---|---|---|
| ☐ | channel-ops.html | 343KB vs 16KB（+1957%） | BM 基本是壳，Auto 完整 → 渠道运营（药店/平台店/分销） |
| ☐ | ai-transformation-navigator.html | 109 vs 50KB（+119%） | 战略导航，Auto 翻倍 |
| ☐ | growth.html | 102 vs 20KB（+405%） | 增长营销 |
| ☐ | digital-store.html | 110 vs 37KB（+190%） | 数字门店 → 药店/零售数字化 |
| ☐ | line-flywheel.html | 71 vs 30KB（+136%） | 多市场聊天飞轮 |
| ☐ | social-hub.html | 96 vs 65KB（+47%） | 社媒中台（无 UGC） |
| ☐ | agentic-commerce.html | 169 vs 125KB（+34%） | agentic 买手 |

---

## 4. C 组 · 保留 General Mills 版（不 port）

- **BM 更全**：health（+45%，已深做）、partner-training（Auto 是空壳）、trading-hub、commerce-front-end
- **两边差不多、BM 已适配零售**：aigc、attribution-roi、compliance-hub、conversational、geo、knowledge-graph、loyalty、merchandising、store-lifecycle、voc

> 如需逐个 diff 内容（而非只看大小）再决定，可单独标记。

---

## 5. D 组 · 暂缓 / 可选（C 档框架，价值确认后再定）

- club / community（会员俱乐部/社区，注意无 UGC）
- dealer-elearning（→ 药店店员学院，比 partner-training 深）
- delivery / transparent-order（履约 + 订单透明）
- leads-management / lead-sources（偏 B2B 渠道线索）
- *-levers（convert/csi/dealer/deliver/service：增长杠杆框架，内容全改）
- qw1/qw4/qw5/qw6（registration/save-money/doc-wallet/whatsapp-loop：可做成健康 App 功能）

---

## 6. E 组 · 汽车专属，不搬

connected-car、configurator、honda-finance-calculator、test-drive / testdrive-levers、workshop、sdv/*、qw3（parking）、qw7（explore-cars）

---

## 进度记录

- 2026-06-27：完成对比与清单；9 个 A 组新文件已 copy 到 `_from-auto/`；待从 #1 cross-entity-bridge 开始逐个改。
- 2026-06-27（续）：16 队列全部处理完。原创 5（cross-entity-bridge / health-companion / health-score / digital-transformation / ai-optimized-design-thinking）；功能型改皮 port 7（channel-ops / growth / digital-store / order-management / campaign-management / data-driven-customer-experience / discovery，均 ◐ 深层残留待清）；保留 BM 4（navigator / social-hub / line-flywheel / agentic-commerce）。
- 2026-06-27（续）：**已接进 Catalog 目录** —— 9 个新页面加进 `CATALOG_ITEMS` + 对应 `DOMAINS.members`（mkt / ecom / crm / data），可在 studio 目录中发现并经 viewer 打开；3 个新战略页加了 embed-hide。growth/channel-ops/digital-store 复用现有 key，文件覆盖后目录自动指向新版。
- **剩余打磨**：①7 个 ◐ 的深层汽车残留清理（2W/4W/car）；②可选给保留-BM 的几个做结构性 port。
