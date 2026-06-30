# General Mills · 渠道赋能中心（Channel Enablement Center）规划

> 短期主打方案（对应 `MARKET_POSITIONING.md` §2.7：短期渠道赋能 → 长期直营）。
> 起草：2026-06-27　状态：规划草案，待确认后再建/改 demo。

---

## 1. 为什么是这个（一句话）

General Mills 在中国/东南亚/日本的平台电商目前**都是渠道 / 经销商在运营**，品牌对终端消费者几乎没有直接触点。
所以短期最现实、最有说服力的方案，不是"自己做 D2C"，而是**做一个赋能中心，让总部把内容、合规、培训、AI 工具、数据看板供给渠道运营方，同时把销售/库存/客户数据收回总部**——一边帮渠道把货卖好，一边为长期直营沉淀数据资产。

**一句话定位**：*A single hub that arms every channel partner with brand content, AI tools, compliance and training — while pulling their sell-through and customer data back to HQ.*

---

## 2. 服务对象（角色）

| 角色 | 是谁 | 在中心里要什么 |
|---|---|---|
| **总部 HQ（品牌方）** | General Mills 全球/区域市场团队 | 统一内容与合规、各市场各渠道的数据视图、归因 |
| **平台店运营方** | 跑天猫/京东/Lazada/Shopee 的代运营/经销 | 现成的品牌素材包、AI 生成本地化内容、上新/大促支持、培训 |
| **经销 / 分销商** | B2B 批发、跨境分销 | Partner Portal 下单对账、价格/库存、合规口径 |
| **线下药店** | 门店连锁、drugstore | 嵌入式 PGC 官方内容、店员培训认证、门店物料 |

---

## 3. 模块组成（复用现有 demo，重新打包）

把已有能力按"赋能渠道"的视角重组成 6 块：

| # | 赋能模块 | 复用 demo | 给渠道的价值 |
|---|---|---|---|
| **E1** | **内容 + AI 素材下发** | `aigc`、`social-hub` | 统一 PGC + 多市场多语言素材包；AI 一键生成平台店/社媒本地化内容，省渠道制作成本，保品牌一致与合规 |
| **E2** | **Partner Portal · 经销赋能** | `trading-hub`、`channel-ops` | B2B 下单/对账、价格库存、渠道运营工具，订单与铺货数据回流 |
| **E3** | **培训认证 + 合规口径** | `partner-training`、`compliance-hub` | 店员/运营培训与认证；中国三铁律（无竞品/无疗效/仅 PGC）和 brand governance 话术统一下发 |
| **E4** | **Sell-through 数据看板 + 归因** | `attribution-roi` | 把平台电商 sell-out、药店 sell-through、分销订单汇成一个看板；活动归因 |
| **E5** | **客户之声（渠道侧聚合）** | `voc` | 从各渠道聚合评价/反馈，回流产品与内容洞察 |
| **E6** | **统一知识 / AI 后端** | `knowledge-graph` | 一套产品/成分/合规知识库，喂给 E1 内容生成与 AI 客服 |

> 这 6 块对应运营中心四能力：E1=Content & Personalization；E4=AI & Analytics；E2/E4=CDP（数据回流）；E3=Governance & Security。

---

## 4. 数据回流（赋能的"换取条件"）

赋能不是单向给工具，而是**用工具换数据**：

```
渠道用 E1 内容 / E2 下单 / E3 培训 / E5 反馈
        │（产生行为与销售数据）
        ▼
   E4 Sell-through 看板 + 归因  ──►  统一 CDP / 知识库（E6）
        │
        ▼
   反哺：更准的内容(E1)、补货建议、活动优化、长期直营的第一方数据基础
```

短期收的是**渠道与铺货数据**（sell-through、库存、活动效果、评价）；这批数据正是将来做直营 CDP 的底座。

---

## 5. 页面 / 信息架构建议

一个入口页（如 `channel-enablement-center.html`）+ 下钻到 6 个模块：

1. **顶部**：定位标题 + "短期赋能 → 长期直营"时间轴（与 banner 一致）。
2. **角色切换**：HQ / 平台店运营 / 经销 / 药店——不同角色看到不同的赋能套件。
3. **6 模块卡片**（E1–E6）：每张卡 = 痛点 → 我们给什么 → 数据回流什么 → 关联现有 demo 链接。
4. **市场切换**：中国 / 东南亚 / 日本 / 澳新——展示同一套赋能在不同渠道生态下的落地（天猫旗舰店 vs Shopee 官方店 vs 药店）。
5. **数据回流示意**：一张 E4 看板缩略 + "数据如何变成长期直营资产"。

---

## 6. 落地优先级（建议）

| 阶段 | 做什么 | 说明 |
|---|---|---|
| **P0** | 写 `channel-enablement-center.html` 入口页（角色 + 6 模块 + 市场切换 + 时间轴） | 把现有 demo 串成"赋能中心"叙事，先不重做 demo |
| **P1** | E1 内容/AI 素材下发 + E4 sell-through 看板做深 | 这两块最能打动"渠道在运营"的现实 |
| **P2** | 平台电商运营样板：天猫国际 / Shopee 官方店"运营赋能"小 demo（内容下发 + 数据回流） | 补 §2.6 指出的最大空白 |
| **P3** | 与长期直营衔接：展示数据如何沉淀进 CDP、再启动 DTC（微信会员/官网会员） | 串起短期→长期的故事 |

---

## 7. 与现有资产的关系（不浪费）

- **不推翻**现有 D2C demo（微信小程序、对话电商、会员）——它们定位为**长期直营目标态样板**。
- **新增的只是叙事层**：用"赋能中心"把 aigc / social-hub / trading-hub / channel-ops / partner-training / compliance-hub / attribution-roi / voc / knowledge-graph 重新打包给"渠道运营方"看。
- banner 已加"Now · Channel enablement → Long-term · Direct"时间轴和各市场"Live channels"，与本规划同源。

---

## 待你确认

1. 入口页是否就叫 `channel-enablement-center.html`？放进顶部导航还是目录里？
2. 角色切换是否要（HQ / 平台店 / 经销 / 药店）？还是先只做 HQ 视角？
3. P2 的平台电商运营样板，先做中国（天猫/京东）还是东南亚（Shopee/Lazada）？
4. 6 个赋能模块（E1–E6）的取舍：先做哪几块？
