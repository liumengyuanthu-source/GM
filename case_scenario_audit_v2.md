# General Mills 三旅程案例-场景关系 Audit v2

日期：2026-06-25

## 处理原则

- Customer Journey：只保留真实消费者触点、品牌/渠道体验、消费决策与复购相关案例。
- Employee Journey：只保留员工赋能、知识协作、一线助手、决策支持、AI 治理/培训相关案例。
- Business Operation Journey：只保留数据底座、洞察预测、产品创新、供应链、营销增长、治理规模化等运营能力案例。
- 删除跨 journey 的粗放匹配，避免一个消费者案例因为带有 “AI / personalization / demand forecast” 就被放入员工或业务阶段。

## 阶段数量对照

| Journey | Stage | 阶段 | 原案例数 | 新案例数 | 精选 | 更多参考 | 场景数 |
|---|---:|---|---:|---:|---:|---:|---:|
| customer | J1 | 需求被触发 | 8 | 6 | 6 | 0 | 6 |
| customer | J2 | 探索与发现 | 14 | 7 | 6 | 1 | 2 |
| customer | J3 | 考虑与比较 | 9 | 6 | 6 | 0 | 4 |
| customer | J4 | 购买与收货 | 14 | 6 | 6 | 0 | 6 |
| customer | J5 | 享用与体验 | 8 | 6 | 6 | 0 | 6 |
| customer | J6 | 分享与反馈 | 5 | 5 | 5 | 0 | 3 |
| customer | J7 | 复购与推荐 | 12 | 7 | 6 | 1 | 5 |
| employee | E1 | 入职与赋能 | 3 | 3 | 3 | 0 | 1 |
| employee | E2 | 探索与学习 | 14 | 5 | 5 | 0 | 1 |
| employee | E3 | 日常协作 | 14 | 5 | 5 | 0 | 1 |
| employee | E4 | 决策与执行 | 21 | 7 | 6 | 1 | 1 |
| employee | E5 | 成长与留任 | 6 | 4 | 4 | 0 | 1 |
| business | B1 | 数据底座 | 25 | 4 | 4 | 0 | 1 |
| business | B2 | 洞察与预测 | 26 | 7 | 6 | 1 | 1 |
| business | B3 | 产品创新 | 15 | 9 | 6 | 3 | 1 |
| business | B4 | 供应链运营 | 21 | 12 | 6 | 6 | 1 |
| business | B5 | 营销与增长 | 28 | 12 | 6 | 6 | 1 |
| business | B6 | 治理与规模化 | 7 | 7 | 6 | 1 | 1 |

## 被移除的主要不精确关系

- customer J1 需求被触发：移除 2 个：ADD-WF-001 三全食品AI供应链与全渠道定制转型；ADD-WF-003 瑞幸咖啡私域流量运营：1800万用户，31%订单占比
- customer J2 探索与发现：移除 7 个：HD-J4-004 哈根达斯中国渠道转型：从门店主导转向零售/手持冰淇淋 +；WF-J1-019 WF AI 晚餐计划器 / 20 分钟晚餐触发（迁移自 ；ADD-HD-004 联合利华'Desire at Scale'AI营销——D；ADD-HD-005 可口可乐AI个性化营销与Y3000未来口味产品；HD-J5-016 Starbucks Deep Brew 个性化 + Gr；WF-J7-024 瑞幸/茶饮节日限定 + 会员复购飞轮（迁移至 WF 节令；HD-J7-026 山姆/会员店场景营销 + 种草-试吃-下单-复购飞轮（迁
- customer J3 考虑与比较：移除 3 个：HD-J2-005 瑞幸数据驱动新品测试机制：一周生死线 + 超级 CDP ；HD-J2-007 Sephora AI 皮肤诊断 + 个性化推荐 + 导购；GM-J3-029 Walmart 'super agents' Spark
- customer J4 购买与收货：移除 8 个：WF-J7-009 安井食品'产地研'区域新品 + 全渠道 BC 兼顾 + ；WF-J1-019 WF AI 晚餐计划器 / 20 分钟晚餐触发（迁移自 ；ADD-HD-002 蒙牛冰淇淋'产品+渠道'双轮驱动战略；ADD-WF-001 三全食品AI供应链与全渠道定制转型；ADD-WF-004 沃尔玛AI需求预测与库存优化系统；GM-J3-013 Unilever AI 数字孪生 + 销售预测 + 货架；HD-J3-021 ChatGPT/AI 美妆顾问（Estée Lauder；GM-J3-029 Walmart 'super agents' Spark
- customer J5 享用与体验：移除 2 个：HD-J4-004 哈根达斯中国渠道转型：从门店主导转向零售/手持冰淇淋 +；ADD-WF-001 三全食品AI供应链与全渠道定制转型
- customer J7 复购与推荐：移除 5 个：HD-J4-004 哈根达斯中国渠道转型：从门店主导转向零售/手持冰淇淋 +；ADD-HD-002 蒙牛冰淇淋'产品+渠道'双轮驱动战略；GMX-J2-NESTLE-OUTSET 雀巢×Outset AI消费者洞察平台加速产品创新；WF-J4-010 山姆中国'宽SPU窄SKU'精选 + Ellipse A；HD-J5-016 Starbucks Deep Brew 个性化 + Gr
- employee E1 入职与赋能：移除 1 个：HD-J2-007 Sephora AI 皮肤诊断 + 个性化推荐 + 导购
- employee E2 探索与学习：移除 14 个：GM-J8-003 General Mills 生成式 AI 驱动 alwa；HD-J4-004 哈根达斯中国渠道转型：从门店主导转向零售/手持冰淇淋 +；WF-J4-008 湾仔码头'一日四时'多场景年轻化 + 微波锁水饺子产品创；GMX-J2-NESTLE-OUTSET 雀巢×Outset AI消费者洞察平台加速产品创新；ADD-HD-004 联合利华'Desire at Scale'AI营销——D；GM-J8-012 Nestlé 数字孪生内容平台 + Tastewise ；GM-J6-020 社媒倾听驱动口味趋势发现（Nestlé/Tastewis；GM-J1-011 中国即时零售格局与'铺货上翻'：美团/淘宝/京东/抖音四；HD-J3-017 哈根达斯竞争环境：质价比时代与本土 Gelato/平价品；WF-J3-018 湾仔码头 AI 营养/成分解释 + 家庭定制餐食场景（迁；WF-J7-024 瑞幸/茶饮节日限定 + 会员复购飞轮（迁移至 WF 节令；HD-J7-026 山姆/会员店场景营销 + 种草-试吃-下单-复购飞轮（迁；WF-J8-027 速冻冷链 AI 优化与区块链溯源（行业技术趋势 → WF；HD-J6-030 瑞幸社媒舆情(NSR)监测：把负面反馈转化为产品/服务优
- employee E3 日常协作：移除 9 个：HD-J2-006 L'Oréal Beauty Genius / Noli；GM-J8-032 Jatomy/General Mills 营销内容生成 ；ADD-HD-005 可口可乐AI个性化营销与Y3000未来口味产品；ADD-GM-004 百事可乐×Siemens×NVIDIA数字孪生供应链；GM-J8-012 Nestlé 数字孪生内容平台 + Tastewise ；ADD-GM-006 可口可乐AI治理与CFO主导转型模式；WF-J3-018 湾仔码头 AI 营养/成分解释 + 家庭定制餐食场景（迁；HD-J3-021 ChatGPT/AI 美妆顾问（Estée Lauder；GM-J8-022 CPG 企业 AI 治理与 LLMOps：从点状 PoC
- employee E4 决策与执行：移除 14 个：HD-J4-004 哈根达斯中国渠道转型：从门店主导转向零售/手持冰淇淋 +；WF-J7-009 安井食品'产地研'区域新品 + 全渠道 BC 兼顾 + ；WF-J1-019 WF AI 晚餐计划器 / 20 分钟晚餐触发（迁移自 ；GM-J8-025 PepsiCo PepGenX + AWS：自研生成式 ；WF-J4-031 盒马'1店+N仓'前置仓 + 生鲜基因（即时零售履约迁移；ADD-HD-002 蒙牛冰淇淋'产品+渠道'双轮驱动战略；ADD-HD-004 联合利华'Desire at Scale'AI营销——D；ADD-WF-001 三全食品AI供应链与全渠道定制转型；GM-J3-013 Unilever AI 数字孪生 + 销售预测 + 货架；HD-J5-016 Starbucks Deep Brew 个性化 + Gr；WF-J4-SYNEAR-MEITUAN 思念食品×美团优选等电商平台供应链优化；GM-J1-011 中国即时零售格局与'铺货上翻'：美团/淘宝/京东/抖音四；WF-J7-024 瑞幸/茶饮节日限定 + 会员复购飞轮（迁移至 WF 节令；GM-J3-029 Walmart 'super agents' Spark
- employee E5 成长与留任：移除 2 个：ADD-HD-004 联合利华'Desire at Scale'AI营销——D；ADD-GM-003 可口可乐'Fuel Light 360'AI营销投资决策
- business B1 数据底座：移除 21 个：GM-J8-002 General Mills 内部生成式 AI 助手 Mi；GM-J8-003 General Mills 生成式 AI 驱动 alwa；WF-J7-009 安井食品'产地研'区域新品 + 全渠道 BC 兼顾 + ；GM-J8-032 Jatomy/General Mills 营销内容生成 ；GMX-J2-NESTLE-OUTSET 雀巢×Outset AI消费者洞察平台加速产品创新；ADD-WF-001 三全食品AI供应链与全渠道定制转型；ADD-WF-004 沃尔玛AI需求预测与库存优化系统；ADD-WF-005 联合利华×沃尔玛墨西哥'Sky'CPFR协同计划；ADD-GM-003 可口可乐'Fuel Light 360'AI营销投资决策；ADD-GM-004 百事可乐×Siemens×NVIDIA数字孪生供应链；WF-J4-010 山姆中国'宽SPU窄SKU'精选 + Ellipse A；GM-J8-012 Nestlé 数字孪生内容平台 + Tastewise ；GM-J3-013 Unilever AI 数字孪生 + 销售预测 + 货架；GM-J6-020 社媒倾听驱动口味趋势发现（Nestlé/Tastewis；ADD-GM-005 联合利华AI工厂安全与效能提升；ADD-GM-006 可口可乐AI治理与CFO主导转型模式；WF-J4-SYNEAR-MEITUAN 思念食品×美团优选等电商平台供应链优化；GM-J8-014 Coca-Cola AI 创意规模化 + 零售门店需求预；GM-J8-022 CPG 企业 AI 治理与 LLMOps：从点状 PoC；WF-J8-027 速冻冷链 AI 优化与区块链溯源（行业技术趋势 → WF；GM-J3-029 Walmart 'super agents' Spark
- business B2 洞察与预测：移除 19 个：GM-J8-001 General Mills 以 Vertex AI + ；HD-J4-004 哈根达斯中国渠道转型：从门店主导转向零售/手持冰淇淋 +；WF-J7-009 安井食品'产地研'区域新品 + 全渠道 BC 兼顾 + ；WF-J1-019 WF AI 晚餐计划器 / 20 分钟晚餐触发（迁移自 ；GM-J8-025 PepsiCo PepGenX + AWS：自研生成式 ；WF-J4-031 盒马'1店+N仓'前置仓 + 生鲜基因（即时零售履约迁移；ADD-HD-002 蒙牛冰淇淋'产品+渠道'双轮驱动战略；ADD-WF-001 三全食品AI供应链与全渠道定制转型；ADD-WF-005 联合利华×沃尔玛墨西哥'Sky'CPFR协同计划；ADD-GM-003 可口可乐'Fuel Light 360'AI营销投资决策；HD-J5-016 Starbucks Deep Brew 个性化 + Gr；WF-J4-SYNEAR-MEITUAN 思念食品×美团优选等电商平台供应链优化；GM-J1-011 中国即时零售格局与'铺货上翻'：美团/淘宝/京东/抖音四；GM-J8-014 Coca-Cola AI 创意规模化 + 零售门店需求预；WF-J3-018 湾仔码头 AI 营养/成分解释 + 家庭定制餐食场景（迁；WF-J7-024 瑞幸/茶饮节日限定 + 会员复购飞轮（迁移至 WF 节令；WF-J8-027 速冻冷链 AI 优化与区块链溯源（行业技术趋势 → WF；GM-J3-029 Walmart 'super agents' Spark；HD-J6-030 瑞幸社媒舆情(NSR)监测：把负面反馈转化为产品/服务优
- business B3 产品创新：移除 6 个：GM-J8-025 PepsiCo PepGenX + AWS：自研生成式 ；ADD-WF-001 三全食品AI供应链与全渠道定制转型；ADD-GM-004 百事可乐×Siemens×NVIDIA数字孪生供应链；HD-J5-016 Starbucks Deep Brew 个性化 + Gr；GM-J6-020 社媒倾听驱动口味趋势发现（Nestlé/Tastewis；GM-J8-022 CPG 企业 AI 治理与 LLMOps：从点状 PoC
- business B4 供应链运营：移除 9 个：GM-J8-001 General Mills 以 Vertex AI + ；HD-J2-005 瑞幸数据驱动新品测试机制：一周生死线 + 超级 CDP ；WF-J1-019 WF AI 晚餐计划器 / 20 分钟晚餐触发（迁移自 ；GM-J8-025 PepsiCo PepGenX + AWS：自研生成式 ；GM-J8-032 Jatomy/General Mills 营销内容生成 ；GM-J3-013 Unilever AI 数字孪生 + 销售预测 + 货架；GM-J1-011 中国即时零售格局与'铺货上翻'：美团/淘宝/京东/抖音四；HD-J3-021 ChatGPT/AI 美妆顾问（Estée Lauder；GM-J3-029 Walmart 'super agents' Spark
- business B5 营销与增长：移除 17 个：GM-J8-001 General Mills 以 Vertex AI + ；WF-J4-008 湾仔码头'一日四时'多场景年轻化 + 微波锁水饺子产品创；WF-J7-009 安井食品'产地研'区域新品 + 全渠道 BC 兼顾 + ；WF-J1-019 WF AI 晚餐计划器 / 20 分钟晚餐触发（迁移自 ；GM-J8-025 PepsiCo PepGenX + AWS：自研生成式 ；WF-J4-031 盒马'1店+N仓'前置仓 + 生鲜基因（即时零售履约迁移；ADD-HD-002 蒙牛冰淇淋'产品+渠道'双轮驱动战略；ADD-WF-001 三全食品AI供应链与全渠道定制转型；WF-J4-010 山姆中国'宽SPU窄SKU'精选 + Ellipse A；GM-J8-012 Nestlé 数字孪生内容平台 + Tastewise ；GM-J3-013 Unilever AI 数字孪生 + 销售预测 + 货架；ADD-GM-006 可口可乐AI治理与CFO主导转型模式；HD-J3-017 哈根达斯竞争环境：质价比时代与本土 Gelato/平价品；HD-J3-021 ChatGPT/AI 美妆顾问（Estée Lauder；HD-J4-023 哈根达斯×阿里云：核心业务系统上云统一底座（中国本土数字；WF-J7-024 瑞幸/茶饮节日限定 + 会员复购飞轮（迁移至 WF 节令；GM-J8-028 L'Oréal × IBM 自研配方基础模型 + One
- business B6 治理与规模化：移除 1 个：ADD-HD-004 联合利华'Desire at Scale'AI营销——D

## 术语与场景清理

- `W-S3` 从 `Child-friendly breakfast / after-school meal` 改为 `Family-friendly breakfast / after-school meal`。
- `WF-J3-018` 标题改为家庭定制餐食/营养成分解释，避免把场景限定为 child。

## 输出

- HTML：`three_journey_navigator_claude_0625_images_v2_audited/Three_Journey_Navigator.html`
- Standalone HTML：`Three_Journey_Navigator_Claude_0625_with_Jimeng_Images_v2_audited_standalone.html`