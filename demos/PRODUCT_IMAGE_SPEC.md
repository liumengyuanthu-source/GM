# Brand Asset Center — 产品图说明

> 已改用**真实 Blackmores 官网产品图**，不再用 AI 生成。本文件记录处理规范，供日后补图沿用。

## 现状
`aigc.html` 的 Brand Asset Center 现有 15 张真实产品卡片，图片为官网截图处理后的**透明背景方形 PNG**，存于 `images/blackmores/`：

ashwagandha, beauty-sleep, bio-c-1000, bio-ace-excell, insolar, joint-formula-advanced,
probiotics-daily, lyprinol-double, coq10-300, vitamin-b12, superkids-multi, superkids-immune,
kids-probiotics, nails-hair-skin, daily-immune-action （均 `.png`）。

产品名 + 品类属性 + 四语（en/zh/ja/th）写在 `ASSETS` 数组里，并同步到 `myLib` / `community` 示例数据。

## 处理规范（补新图时照做）
1. 官网产品图（纯白底）→ 从边缘 flood-fill 去背景（阈值 min-channel ≥ 248，只删与边缘连通的近纯白），保留白瓶盖/白标签。
2. 边缘 erode 1px + 轻微高斯模糊去白边。
3. 裁到内容包围盒 → 居中放到正方形透明画布（边距 ~7%）→ 缩放 820×820 → 存 PNG。
4. 卡片 `.ph` 是浅 teal 渐变瓦片，透明 PNG 直接贴合，无需改 CSS。

## 加新产品
在 `ASSETS` 加一条 `{id,em:"images/blackmores/<name>.png",nm:{en,zh,ja,th},tag:"edit|social|noedit"}`，把处理好的 PNG 放进 `images/blackmores/` 即可。

## 还缺的真实产品图（下轮换其他文件需要）
其他 demo（trading-hub / wechat-miniprogram / health / line-flywheel / merchandising 等）仍用旧虚拟 SVG 线条图标。要全部换成真实图，需从官网再抓这些产品（现有 15 张覆盖不到）：

**高频使用、优先：**
- Odourless Fish Oil 无腥味深海鱼油（鱼油，trading-hub/wechat/health/line-flywheel 都用）
- Glucosamine 1500 维骨力关节灵（氨糖；现有 Joint Formula / Lyprinol 是关节但非氨糖本身）
- Multivitamin 复合维生素（日常综合；现有 Bio ACE Excell 偏抗氧多元，非普通综合）
- Pregnancy & Breastfeeding Gold 孕妇黄金营养素

**次优先：**
- Lutein Vision 叶黄素护眼
- Vitamin E Cream 天然维生素E面霜（现有 Nails Hair & Skin / Insolar 可近似护肤）
- Evening Primrose 月见草油
- Executive B Stress 复合维生素B 抗压（现有 Vitamin B12 接近但非同款）
- Bio Zinc 锌（仅套装文案里出现，可选）

抓回后按本文件「处理规范」抠图即可直接替换。
