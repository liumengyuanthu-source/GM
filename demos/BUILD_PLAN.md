# Blackmores Global · Experience Studio — 构建方案（待你确认）

> 起草：2026-06-22　基于 Blackmores History 规划研究 + 现有 studio 结构
> 结构：参考旧客户模板，文件名保持一致，按 `_kit/开发规范.md` 改皮。

---

## 一、定位（来自规划研究）

**这是一个 CX 战略，不是 portal 项目。** 主线：
- **直营层（抓数据）**：中国微信小程序 + 澳洲 Web/App + 全球统一 CDP/会员。
- **赋能层（抓本地关系）**：中国微信 + 日本及部分东南亚 LINE + 部分东南亚 WhatsApp + 门店 QR；Partner 经营，核心行为数据回流总部。
- 一套**统一 AI 后端**（意图/画像/知识检索/多语言）服务全渠道。
- **受众=澳洲客户**：不熟微信/小程序、WhatsApp、LINE → 这些渠道生态和"在对话/小程序内闭环"的玩法要**讲清楚、可读化**。

市场重点：**ANZ（主场）≥ 中国 ≈ 东南亚 > 日本**。默认语言 **英语**，语言集 EN / 中 / ไทย / 日。

---

## 二、模块映射（Blackmores 规划 → 现有 studio demo）

| Blackmores 规划模块 | 落到 studio | 处理 |
|---|---|---|
| **中国微信小程序**（5-tab 消费者）| 独立 `wechat-miniprogram.html` | **旗舰重建**（Phase 2） |
| **WeCom 企业微信后台**（私域/店员） | 新文件（如 `wecom-console.html`） | **全新建**（Phase 2，零先例） |
| Partner Portal · Trading | `trading-hub.html` | 改皮 |
| Marketing：AIGC / Social / Campaign | `aigc.html` / `social-hub.html` / `growth.html` | 改皮 |
| VOC / 客户之声 | `voc.html` | 改皮 |
| AI 健康买手 / Agentic / 对话 | `agentic-commerce.html` / `conversational.html` | 改皮（突出 agentic 买手） |
| 会员（4 级） | `loyalty.html` | 改皮 |
| 健康管理 + Health Twin 健康分身 | `health.html` | 改皮 + 扩展分身 |
| Operations：合规 / 棚割 / 培训认证 | `compliance-hub.html` / `merchandising.html` / `partner-training.html` / `cards.html` | 改皮 |
| Analytics / 归因 | `attribution-roi.html`（+ 现有 voc/数据） | 改皮 |
| 数据·AI·知识 / 战略 | `knowledge-graph.html` / `ai-transformation-navigator.html` / `ai-strategy-map.html` / `enterprise-foundation.html` | 改皮 |
| 渠道运营 | `channel-ops.html` | 改皮 |
| 电商前端 / 门店 | `commerce-front-end.html` / `digital-store.html` / `store-lifecycle.html` / `geo.html` | 改皮 |
| **多市场聊天生态飞轮**（微信 + LINE + WhatsApp） | `line-flywheel.html` | **已统一重建** |
| **日本 LINE**（3-tab Mini App） | 新建轻量 demo | Phase 3（可选） |

> Blackmores History 标 ⏳ 未建：WhatsApp Hub、Staff Management、Training & Certification、Health Twin 完整版。

---

## 三、分阶段计划

- **Phase 0 ✅ 已完成**：fork → `clients/blackmores-global/`；写 `BRAND_MANIFEST.md`；基础机械改皮（全局 teal 调色板 + 默认英语 + 品牌名 Blackmores）。studio 已能以 Blackmores 身份打开。
- **Phase 1（基础内容改皮）**：
  1. 画保健品线条图（鱼油/维骨力/益生菌/复合维/维C/孕妇黄金素/月见草/叶黄素/睡眠/维E面霜）→ `images/blackmores/`。
  2. 各 demo 产品/文案改皮：旧模板食品/单一 LINE 语境 → Blackmores 保健品 + 多市场 + CX 战略叙事（逐 demo，subagents）。
  3. studio shell 内容：hero/lead 定位、市场（日本→多市场 ANZ/中国/东南亚/日本）、目录与旅程文案。
- **Phase 2（旗舰）**：中国微信小程序（5-tab：首页/商城/AI 健康买手/健康/我的，含 agentic 买手、健康分身、4 级会员、视频号直播、PGC 内容、AR 成分）+ **WeCom 后台**（私域 SCRM、客户管理、内容下发给店员、店员辅助下单、小程序 QR 归因、业绩看板）。给澳洲受众做渠道可读化标注。
- **Phase 3（渠道补全）**：按需拆 WeChat / LINE / WhatsApp 单市场深挖 demo、Health Twin 完整版、WhatsApp Hub / Staff Mgmt / Training。

---

## 四、已拍板的决定（2026-06-22）

1. **accent 强调色** = teal #009BA4 + **pink #E91E63**（Blackmores 规范原色）。
2. **中国微信小程序** = **独立 `wechat-miniprogram.html`**；`line-flywheel.html` = 多市场聊天生态飞轮（中国微信、日本和部分东南亚 LINE、另一部分东南亚 WhatsApp）。
3. **WeCom 后台** = **独立文件 `wecom-console.html`**，与小程序互相引用。
4. **Phase 1 改皮颗粒度** = **先改核心几个**（trading / loyalty / health / agentic / aigc / social / compliance + studio shell），其余 demo 随后补。

## 五、执行顺序（据上）
1. 保健品线条图 → `images/blackmores/`。
2. studio shell 内容改皮（市场/hero/定位/目录/旅程）。
3. 核心 demo 改皮（trading/loyalty/health/agentic/aigc/social/compliance）。
4. Phase 2：`wechat-miniprogram.html`（5-tab）+ `wecom-console.html`，并接进旅程/目录。
5. 其余 demo 补改皮；Phase 3 渠道深挖 demo（按需拆 WeChat / LINE / WhatsApp 单市场细节，及 Health Twin）。
