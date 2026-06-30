# General Mills · 市场定位与运营中心规划

> 单一信息来源（Single Source of Truth）。banner 卡片、各 demo 文案、对客叙事都从这份文档取。
> 起草：2026-06-27　来源：`BRAND_MANIFEST.md`、`BUILD_PLAN.md`、`line-flywheel.html`、`MD/项目规划总纲.md`
> 状态标记：✅ 已落地（有 demo）｜🟡 部分/嵌在其它 demo 里｜⏳ 规划未建　｜（推导）= 本文新归纳、待确认

---

## 0. 这份文档要回答什么

按一条逻辑链走：**品牌调性 → 每个市场的现状与特点 → 已经做了什么 / 还没做什么 → 推导出一个合理的"统一运营中心 + 多市场"方案**。
不是凭空设计，而是从"General Mills 是谁、各市场长什么样"一步步推出来。

---

## 1. 品牌调性（Brand Tone）

- **品牌**：General Mills —— 澳洲自然健康/食品产品牌。logo 用 Georgia 衬线 + ®，主色 teal `#009BA4`，强调色 pink `#E91E63`（仅促销/高亮）。
- **可信背书**：brand governance 认证、brand-approved。这是它对全球市场最硬的资产。
- **语气**：专业、克制、循证。强调"支持 / 有助于"，**不做疗效宣称**。
- **三条内容铁律（尤其中国侧）**：
  1. 不提竞品（不点名 Swisse / 汤臣倍健）。
  2. 不做医疗宣称（只"支持/改善"，不"治疗/治愈"）。
  3. 无 UGC —— 只用 PGC（官方 / 专家内容）。
- **视觉调性**：圆角 14–16px，克制阴影，留白充足，少渐变少动画。
- **受众提醒**：演示对象是**澳洲总部**，他们不熟悉中国微信/小程序、东南亚 WhatsApp、日本 LINE——这些渠道生态要**讲清楚、可读化**。

> 一句话定位：**"直营抓数据 + 赋能抓本地关系"的 CX 战略**——Partner Portal 是手段，终端消费者体验与统一数据资产是目的。

---

## 2. 整体战略框架

两层 + 一个中台：

| 层 | 目的 | 构成 |
|---|---|---|
| **直营层** | 抓第一方数据 | 中国微信小程序 + 澳洲 Web/App + 全球统一 CDP/会员 |
| **赋能层** | 抓本地关系 | 中国微信 + 日本及部分东南亚 LINE + 部分东南亚 WhatsApp + 门店 QR；Partner 经营，核心行为数据回流总部 |
| **统一 AI 后端（中台）** | 一套大脑服务全渠道 | 意图识别 / 用户画像 / 知识检索 / 多语言 |

**飞轮主线**：微信 + LINE + WhatsApp 三类聊天触点汇成一个客户飞轮，行为数据回流统一 CDP，AI 中台再反哺各市场的内容与推荐。
**市场优先级**：**ANZ（主场）≥ 中国 ≈ 东南亚 > 日本**。默认语言英语，语言集 EN / 中 / ไทย / 日。

---

## 2.5 渠道全景：每个市场都是"两面"（重要修正）

> 之前的叙事偏重**消费者侧**（聊天/小程序/App 的 D2C 触点），漏掉了**渠道侧**。
> 实际每个市场都是"消费者 + 渠道"两面，go-to-market 要看完整的四类渠道。

**四类渠道（每个市场都按这四象限看）：**

| 类型 | 说明 | 对应已有 demo |
|---|---|---|
| **① 自营 DTC** | 自有 Web/App、微信小程序、LINE/WhatsApp 对话电商——抓第一方数据 | commerce-front-end、wechat-miniprogram、line-flywheel |
| **② 平台电商 Marketplace** | 天猫/京东/抖音、Shopee/Lazada、乐天/Amazon 等第三方平台 | （🟡 目前 demo 覆盖弱，是空白） |
| **③ 线下零售 · 药店** | 门店连锁、商超、drugstore——嵌官方内容 + 门店履约/培训 | store-lifecycle、digital-store、merchandising、partner-training、geo |
| **④ 分销 · B2B** | 经销商/批发、跨境分销、Partner Portal 下单对账 | trading-hub、channel-ops |

**关键洞察**：
- 消费者侧（①）抓数据，渠道侧（②③④）抓规模与铺货；两者的数据都要回流到同一个 CDP。
- **平台电商（②）是当前最大的内容/demo 空白**——尤其中国的天猫/京东、东南亚的 Shopee。
- 线下药店既是②③的履约点，也是 PGC 官方内容的展示位（嵌入式）。

> 平台名称见下方各市场 §渠道全景。**实际在营情况已联网核实，见 §2.6**（§3 里的 🔲 是核实前的行业推断，以 §2.6 为准）。

---

## 2.6 渠道现状调研（联网核实 · 2026-06）

> ✅ = 找到官方/明确证据　🟡 = 第三方/经销商　❓ = 未找到明确证据（疑似规划或平行进口）

### 总览：5 条关键发现

1. **General Mills 的真实渠道现状是"平台电商主导"**（天猫国际、京东国际、Lazada、Shopee、Amazon、乐天）+ 澳新的药店零售——**不是** demo 里强调的聊天/小程序 D2C。
2. 我们之前当作中国核心的"**官方微信小程序商城**"**未找到明确证据**。中国真正在营的是**天猫国际 + 京东国际的跨境（CBEC）旗舰店**；微信主要用于防伪扫码/内容，不是 DTC 商城主阵地。
3. **日本**基本是**经销商 / 平行进口 + 第三方平台**（Amazon JP / 乐天 / Yahoo），没看到强官方 DTC；"日本 LINE 官方"更像规划而非现状。
4. **东南亚**的 **Lazada / Shopee 官方店是实打实的现状**（SG / MY / TH / PH 都有），还有本地官网（.com.sg / .co.th）。
5. 印证你的判断：**平台电商②才是现状主力，而 demo 恰恰最缺这块。**

### 中国 🇨🇳（通用磨坊 / General Mills，现 Kirin 麒麟控股旗下）
| 渠道 | 现状 |
|---|---|
| 平台电商 | ✅ 天猫国际海外旗舰店（generalmillsglobal / aunew.tmall.hk）；✅ 京东国际海外自营旗舰店（mall.jd.hk/shop/zygeneralmills）；🟡 苏宁等第三方 |
| 自营 DTC | ✅ 中文官网 generalmills.com.cn；❓ 官方微信小程序商城（未证实——微信主要做防伪/内容）|
| 模式 | 跨境 CBEC 为主（保税仓）；2014 起上海子公司运营；曾靠代购爆发，后转直营平台 |

### 澳新 ANZ 🇦🇺
| 渠道 | 现状 |
|---|---|
| 自营 DTC | ✅ 官网 generalmills.com.au |
| 平台电商 | ✅ Amazon AU |
| 线下零售·药店 | ✅ retail store Warehouse、Priceline、Woolworths、Coles、Amcal+、Terry White Chemmart |

### 日本 🇯🇵
| 渠道 | 现状 |
|---|---|
| 平台电商 | 🟡 Amazon.co.jp / 乐天 / Yahoo 购物（多为经销商如 JT&A、美妆代理，非官方旗舰）|
| 自营 / LINE | ❓ 未见强官方 DTC 或官方 LINE 商城 |

### 东南亚 SEA 🌏
| 市场 | 现状 |
|---|---|
| 新加坡 | ✅ 官网 generalmills.com.sg；✅ Lazada SG 官方店；✅ Shopee SG 官方店 |
| 马来西亚 | ✅ Lazada MY 官方店；✅ Shopee MY 官方店 |
| 泰国 | ✅ 官网 generalmills.co.th（General Mills Club 会员）；✅ Lazada TH 官方店；✅ Shopee TH 官方店 |
| 菲律宾 | ✅ Lazada PH 官方店 |
| LINE / WhatsApp | ❓ 官方聊天商城未证实（属规划/赋能设想）|

### 对方案的影响
- **demo 与现状有偏差**：现有展示把"微信小程序 / LINE / WhatsApp 的对话式 D2C"当主角，但 General Mills 的现实主力是**平台电商旗舰店**。对客叙事要么承认这是"目标态/赋能设想"，要么补上平台电商现状。
- **最该补的 demo**：天猫国际 / 京东国际旗舰店运营、Lazada / Shopee 官方店运营（含数据回流 CDP）。
- **微信小程序**：可定位为"私域/会员/内容 + 防伪"，而不是宣称它是中国销售主阵地。

> 来源（联网核实）：天猫国际 General Mills 海外旗舰店、京东国际通用磨坊自营旗舰店、generalmills.com.cn、generalmills.com.au/stockists、retail store Warehouse、Priceline、Amazon.co.jp、Rakuten、Lazada（SG/MY/TH/PH）、Shopee（SG/MY/TH）、generalmills.com.sg、generalmills.co.th、NutraIngredients（中国 CBEC 业绩报道）。

---

## 2.7 战略分期（关键）：短期"渠道赋能" → 长期"直营"

> 现实补充：这些市场的平台电商（天猫/京东/Lazada/Shopee 等）目前**基本都是渠道 / 经销商在运营，不是 General Mills 自己做**。

**含义**：当下 General Mills 对终端消费者**几乎没有直接触点和第一方数据**——卖货、客服、会员大多握在渠道手里。所以"直营抓数据"是**长期目标，不是现状**；现状是**赋能层在跑**。

| 阶段 | 重心 | General Mills 做什么 | 运营中心的角色 |
|---|---|---|---|
| **短期：渠道赋能** | 让渠道把生意做得更好，同时把数据/内容/合规握在总部 | 给天猫/京东/Lazada/Shopee 的运营方提供：统一品牌内容与 PGC、AI 素材、合规口径、培训认证、销售/库存/sell-through 看板、归因 | 中台 = 赋能引擎（内容供给 + 数据回流 + 合规治理），服务"渠道运营方" |
| **长期：直营** | 自建与消费者的直接关系和第一方数据 | 官方 DTC（会员商城/小程序/官网）、CDP、私域、忠诚度，逐步把关系从渠道收回品牌 | 中台 = DTC 引擎，直接驱动消费者旅程 |

**对叙事/方案的影响**：
1. 对客主线应是 **"先赋能渠道、沉淀数据与内容，再走向直营"**，而不是上来就讲 D2C 小程序。
2. 现有偏 D2C 的 demo（微信小程序、对话电商）= **长期目标态的样板**；短期真正要补的是**渠道赋能类**：平台店运营支持、Partner Portal、内容/AI 素材下发、培训认证、sell-through 数据看板。
3. 好消息：渠道赋能要的能力 studio 里已有不少——`aigc`(素材)、`social-hub`、`partner-training`、`trading-hub`、`channel-ops`、`attribution-roi`、`compliance-hub`、`voc`——可重新打包成"**渠道赋能中心**"。

---

## 3. 四个市场：定位 · 现状 · 特点 · 已做/未做

### 3.1 澳新 ANZ —— 主场（Home Market）

- **定位**：Retail-led Food Experience Ecosystem（零售主导的健康生态）。
- **渠道现状**：Web 优先、App 其次；零售伙伴（retail store Warehouse / Priceline）嵌入官方内容；全球 CDP / 会员的数据底座在这里。
- **市场特点**：总部熟悉的打法——成熟电商 + 会员 + 门店零售；第一方数据最完整；brand governance / 澳洲原产是原生信任。
- **最大特别**：这是"基准市场"，熟悉的东西做精（电商、会员、健康测评）。
- **渠道全景（四象限）**：
  - ① 自营 DTC：General Mills.com.au 官网 + App
  - ② 平台电商：Amazon AU 🔲、retail store Warehouse 线上 🔲、Catch 🔲
  - ③ 线下零售·药店：retail store Warehouse、Priceline、Woolworths/Coles 商超 🔲、独立门店
  - ④ 分销·B2B：门店批发、`trading-hub` B2B 下单对账
- **已做 ✅**：`commerce-front-end.html`、`loyalty.html`(4 级会员)、`health.html`(健康测评 + Occasion Twin)、`agentic-commerce.html`、`trading-hub.html`(B2B)。
- **未做 ⏳**：Occasion Twin 完整版；平台电商②（Amazon/CW 线上）几乎没单独展示。

### 3.2 中国 —— 直营旗舰（最强 D2C 数据资产）

- **定位**：WeChat-native Customer Journey（微信原生客户旅程）。
- **渠道现状**：微信小程序（核心）+ 公众号 + 视频号（直播电商）+ 企业微信 WeCom + 微信支付 + 卡包 + 微信客服。
- **市场特点**：整个"发现→购买→服务→复购"闭环都在微信超级 App 内完成；行为数据最丰富、最闭环。对澳洲受众是"教育型"展示（他们没概念），但震撼感最强。
- **最大特别**：直营阵地 + 私域（WeCom SCRM、店员辅助、QR 归因）。
- **渠道全景（四象限）**：
  - ① 自营 DTC：微信小程序（核心）+ 视频号直播 + 企业微信私域
  - ② 平台电商：天猫/天猫国际(CBEC) 🔲、京东/京东国际 🔲、抖音电商 🔲、小红书 种草+电商 🔲、拼多多 🔲
  - ③ 线下零售·药店：连锁门店 🔲、CBEC 保税仓履约、（历史）代购 daigou 🔲
  - ④ 分销·B2B：跨境分销、经销商
- **已做 ✅（旗舰）**：`wechat-miniprogram.html`(5-tab：首页/商城/AI 场景导购/健康/我的，含 agentic 买手、场景分身、4 级会员)、`wecom-console.html`(私域后台)。
- **未做 ⏳**：平台电商②（天猫/京东/抖音）是最大空白——中国实际很重的渠道，但目前 demo 只讲了微信直营这一面。
- **内容约束**：严守三条铁律（无竞品/无疗效/仅 PGC）。

### 3.3 日本 —— LINE 关系层

- **定位**：LINE-driven Daily Care（LINE 驱动的日常护理）。
- **渠道现状**：LINE Official Account + rich menu + LINE Mini App + LINE Pay/Points + 优惠券。
- **市场特点**：LINE 在当地占绝对优势，尤其健康零售、门店后续服务；主打高频、习惯化、无需新 App 的轻触达。
- **最大特别**：关系/赋能为主，混合模式；优先级最低。
- **渠道全景（四象限）**：
  - ① 自营 DTC：LINE Mini App + 官方 web 🔲
  - ② 平台电商：乐天 Rakuten 🔲、Amazon JP 🔲、Yahoo! Shopping 🔲
  - ③ 线下零售·药店：ドラッグストア drugstore 连锁（マツキヨ/ウエルシア 等 🔲）
  - ④ 分销·B2B：本地代理商 🔲
- **已做 🟡**：`line-flywheel.html` 里承载日本 LINE 触点。
- **未做 ⏳**：独立日本 LINE 3-tab Mini App 轻量 demo（Phase 3，可选）；平台电商②（乐天/Amazon）未展示。

### 3.4 东南亚 SEA（TH / SG / MY）—— 多市场，LINE + WhatsApp

- **定位**：LINE + WhatsApp Ecosystem（聊天电商生态）。
- **渠道现状**：泰国等用 LINE；其它市场用 WhatsApp Business（Catalog + 产品卡 + 支付链接 + Webview + AI 坐席辅助）；规划里也提过 Shopee 等平台。
- **市场特点**：移动优先、Partner 经营、上手轻、对话式商务（staff-assisted）；总部仍能拿到数据。
- **最大特别**：一个区域里两套聊天生态并存（LINE 与 WhatsApp 分市场）。
- **渠道全景（四象限）**：
  - ① 自营 DTC：WhatsApp / LINE 对话电商（Catalog + 支付链接）
  - ② 平台电商：Shopee 🔲、Lazada 🔲、TikTok Shop 🔲（区域内权重很高）
  - ③ 线下零售·药店：Watsons 🔲、Guardian 🔲、Boots(泰国) 🔲、本地门店
  - ④ 分销·B2B：本地分销商、Partner 经营
- **已做 🟡**：`line-flywheel.html` 承载 WhatsApp / LINE 触点。
- **未做 ⏳**：独立 WhatsApp Hub demo；平台电商②（Shopee/Lazada/TikTok Shop）未展示——区域内是主力渠道，空白明显。

---

## 4. 横向盘点：已做 vs 未做

### 已做的 demo（按用途）

- **直营/消费者**：commerce-front-end、loyalty、health、agentic-commerce、conversational、wechat-miniprogram、wecom-console。
- **中台/旗舰**：aigc(素材生态)、social-hub、voc(客户之声)、knowledge-graph、attribution-roi。
- **多市场聊天飞轮**：line-flywheel（微信 + LINE + WhatsApp 统一讲清）。
- **运营/合规/培训**：compliance-hub、merchandising、partner-training、store-lifecycle、digital-store、channel-ops、cards。
- **战略/咨询**：ai-strategy-map、ai-transformation-navigator、enterprise-foundation、geo、growth。

### 还没做（⏳ 待新建）

- **平台电商 Marketplace（最大空白）**：天猫/京东/抖音、Shopee/Lazada/TikTok Shop、乐天/Amazon——目前几乎没有展示，但在中国和东南亚是主力渠道。
- WhatsApp Hub（东南亚独立深挖）
- Staff Management（店员管理）
- Training & Certification（培训认证完整版）
- Occasion Twin 完整版
- 日本 LINE 独立 Mini App demo（可选）

### 渠道侧 vs 消费者侧（一眼看全）

| 渠道类型 | 覆盖度 | 说明 |
|---|---|---|
| ① 自营 DTC | ✅ 强 | 微信小程序、Web/App、对话电商都有 |
| ② 平台电商 | 🟡 弱（空白） | 第三方平台几乎没单独 demo —— **优先补** |
| ③ 线下零售·药店 | 🟡 中 | store-lifecycle/digital-store/merchandising/培训有，但没按市场串起来 |
| ④ 分销·B2B | ✅ 中 | trading-hub/channel-ops 有 |

---

## 5. 推导：统一运营中心（One Global AI + Customer Platform）

把上面的事实串起来，自然推出一个"中心 + 四市场"的结构——这也正是首页 banner 想表达的（中间 B = 运营中心，四张卡 = 市场）。

**为什么需要一个中心？**
1. 四个市场渠道完全不同（平台电商、微信、LINE、WhatsApp、药店），但 General Mills 要的是**一个数据视图 + 一套可信内容 + 一致的合规**。
2. 各市场单独做，数据散落、内容重复生产、合规口径不一。
3. 所以把"共性"抽到中台，"个性"留在市场。

> **中心当前的"客户"是谁？** 按 §2.7，短期主要服务**渠道运营方**（赋能引擎）：给平台店/经销/药店供内容、AI 素材、合规、培训，并把 sell-through 数据收回来；长期才转向直接服务**终端消费者**（DTC 引擎）。同一个中心，两个阶段。

**运营中心的四块能力**（对应 banner 顶部四个图标）：

| 能力 | 解决什么 | 已对应 demo |
|---|---|---|
| **AI & Analytics** | 统一意图/画像/归因，跨市场看一个消费者 | voc、attribution-roi、knowledge-graph |
| **Customer Data Platform (CDP)** | 三类聊天触点的数据回流到一个 CDP | line-flywheel + 全球会员 |
| **Content & Personalization** | 一次生产、多市场多语言分发，合规可控 | aigc、social-hub |
| **Governance & Security** | 多市场合规（尤其中国三铁律）、数据治理 | compliance-hub |

**数据飞轮（中心 ↔ 市场，含渠道两面）**：
- 消费者侧触点（微信/LINE/WhatsApp/Web）→ 第一方行为数据。
- 渠道侧触点（平台电商 sell-out、线下药店 sell-through、分销 B2B 订单）→ 渠道与铺货数据。
- 两类都回流同一个 CDP → AI 中台分析 → 反哺各市场各渠道的内容/推荐/会员/补货 → 再产生数据。

> 之前只画了消费者侧的飞轮；完整版必须把**平台电商 + 线下零售 + 分销**的数据也纳进来，否则 CDP 看到的只是一部分消费者。运营中心的价值正是把"四类渠道 × 四个市场"的数据合到一个视图。

---

## 6. 由此得出的方案与下一步（待确认）

**叙事重排（据 §2.7 分期）**：主线改成 **"短期赋能渠道、沉淀数据与内容 → 长期走向直营"**。运营中心当前的"客户"主要是**渠道运营方**，终端消费者是长期目标。

1. **对客主线**：一个运营中心，短期赋能各市场的渠道（平台店/经销/药店），长期支撑品牌直营。banner 已有"中心 + 市场"，建议再叠一层"渠道赋能 vs 直营"的时间轴。
2. **市场卡片副标题**：用本文 §3 的"定位 + 最大特别"；可加一行"主力渠道（现状）"，明确目前是渠道在跑。
3. **短期（赋能）优先做**——把已有能力打包成"渠道赋能中心"：
   - 平台电商运营赋能 demo（天猫/京东、Shopee/Lazada 旗舰店的内容/AI 素材下发 + sell-through 看板 + 归因）。
   - Partner Portal / 经销赋能（trading-hub + channel-ops 串起来）。
   - 培训认证、合规口径下发（partner-training + compliance-hub）。
4. **长期（直营）样板**：现有 D2C demo（微信小程序、对话电商、会员、CDP）定位为"目标态样板"，讲清如何从赋能逐步收回直接关系。
5. **保持的约束**：中国三条内容铁律、brand governance/澳洲原产背书、专业克制语气。

---

## 待你确认/补充

- **渠道（🔲 待核实）**：各市场 §渠道全景里点名的平台（天猫/京东/Shopee/乐天/retail store Warehouse 等），哪些 General Mills 实际在营、哪些要删/补？
- 平台电商②是否确实是当前最该补的方向？要不要先做一个"平台电商运营"demo（比如天猫/Shopee 旗舰店运营 + 数据回流）？
- 新西兰是否要从 ANZ 里单独拎出，还是合并叙述？
- 东南亚是否点名具体国家（TH/SG/MY），还是统称 SEA？
- 日本优先级是否维持最低？
- "运营中心"四块能力的命名是否沿用 banner 的 AI & Analytics / CDP / Content & Personalization / Governance & Security？
