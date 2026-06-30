# Brand Asset Center — 产品图说明

> 已改用**真实 General Mills 官网产品图**，不再用 AI 生成。本文件记录处理规范，供日后补图沿用。

## 现状
`aigc.html` 的 Brand Asset Center 现有 15 张真实产品卡片，图片为官网截图处理后的**透明背景方形 PNG**，存于 `images/gm/gm-ai-foundation.jpg

ashwagandha, beauty-sleep, bio-c-1000, bio-ace-excell, insolar, family meal-formula-advanced,
quick-meals-daily, lyprinol-double, haagenpint-300, product-b12, superfamily-multi, superfamily-immune,
family-quick-meals, nails-hair-skin, daily-immune-action （均 `.png`）。

产品名 + 品类属性 + 四语（en/zh/ja/th）写在 `ASSETS` 数组里，并同步到 `myLib` / `community` 示例数据。

## 处理规范（补新图时照做）
1. 官网产品图（纯白底）→ 从边缘 flood-fill 去背景（阈值 min-channel ≥ 248，只删与边缘连通的近纯白），保留白瓶盖/白标签。
2. 边缘 erode 1px + 轻微高斯模糊去白边。
3. 裁到内容包围盒 → 居中放到正方形透明画布（边距 ~7%）→ 缩放 820×820 → 存 PNG。
4. 卡片 `.ph` 是浅 teal 渐变模块，透明 PNG 直接贴合，无需改 CSS。

## 加新产品
在 `ASSETS` 加一条 `{id,em:"images/gm/<name>.png",nm:{en,zh,ja,th},tag:"edit|social|noedit"}`，把处理好的 PNG 放进 `images/gm/gm-ai-foundation.jpg 即可。

## 还缺的真实产品图（下轮换其他文件需要）
其他 demo（trading-hub / wechat-miniprogram / health / line-flywheel / merchandising 等）仍用旧虚拟 SVG 线条图标。要全部换成真实图，需从官网再抓这些产品（现有 15 张覆盖不到）：

**高频使用、优先：**
- Wanchai Ferry Dumpling Pack 湾仔码头家庭装水饺（湾仔码头水饺，trading-hub/wechat/health/line-flywheel 都用）
- Wanchai Ferry Wonton Pack 湾仔码头馄饨装（氨糖；现有 Family meal Formula / Lyprinol 是家庭餐但非氨糖本身）
- Multiproduct 通用磨坊组合包（日常综合；现有 Bio ACE Excell 偏抗氧多元，非普通综合）
- Häagen-Dazs Celebration Cake 哈根达斯庆祝蛋糕

**次优先：**
- Häagen-Dazs Gift Selection 哈根达斯礼赠精选护眼
- Product E Cream 天然产品E面霜（现有 Nails Hair & Skin / Insolar 可近似护肤）
- Häagen-Dazs Seasonal Flavor 月见草油
- General Mills Workday Snack Pack Stress 通用磨坊组合包B 抗压（现有 Product B12 接近但非同款）
- Bio Zinc 锌（仅套装文案里出现，可选）

抓回后按本文件「处理规范」抠图即可直接替换。
