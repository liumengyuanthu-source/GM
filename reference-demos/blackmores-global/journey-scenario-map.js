/**
 * Journey Map 场景 → Tile 映射数据
 * 基于 journey-map.html 的 SCENARIOS 数组
 * 每个场景映射到一个 tile ID（或 null 表示无 demo）
 * 注意：原始数据中有重复 ID（不同 stage），这里用 "stage_id" 作为唯一键
 */

const SCENARIO_TILE_MAP = {
  // === AWARENESS (10) ===
  "awareness_ad-district": null,
  "awareness_auto-reach": null,
  "awareness_content-interaction": null,
  "awareness_multimodal-materials": "aigc",
  "awareness_ad-roi": null,
  "awareness_voc-social": "matrix",
  "awareness_geo-opt": null,
  "awareness_data-tagging": null,
  "awareness_live-commerce": null,
  "awareness_marketing-canvas": null,
  
  // === INTEREST (5) ===
  "interest_virtual-fitting": "tryon",
  "interest_vr-store": null,
  "interest_ad-extract": "aigc",
  "interest_persona-target": null,
  "interest_personalized-ad": "advisor",
  
  // === CONSIDERATION (17) ===
  "consideration_shopping-guide": "advisor",
  "consideration_localized-points": null,
  "consideration_sales-roleplay": null,
  "consideration_instore-matching": null,
  "consideration_product-design": null,
  "consideration_product-comparison": "advisor",
  "consideration_sales-forecast": null,
  "consideration_followup-report": "chat",
  "consideration_cross-store-discount": "commerce",
  "consideration_dynamic-pricing": "commerce",
  "consideration_voice-assistant": "voice",
  "consideration_ai-sales-summary": null,
  "consideration_instore-script": null,
  "consideration_inventory-query": null,
  "consideration_tiered-bulk": null,
  "consideration_store-layout": null,
  "consideration_scheduling": null,
  
  // === PURCHASE (6) ===
  "purchase_order-verify": "commerce",
  "purchase_procurement-collab": null,
  "purchase_eorder-points": "loyalty",
  "purchase_fulfillment-risk": null,
  "purchase_dynamic-inventory": null,
  "purchase_supply-forecast": null,
  
  // === ORDER (6) — 与 Purchase 有重复 ID，但 stage 不同，这里用 stage 后缀区分 ===
  "order_order-verify": "commerce",
  "order_procurement-collab": null,
  "order_eorder-points": "loyalty",
  "order_fulfillment-risk": null,
  "order_dynamic-inventory": null,
  "order_supply-forecast": null,
  
  // === PAYMENT (7) ===
  "payment_fraud-prevention": "risk",
  "payment_rfid-checkout": null,
  "payment_offer-verify": "commerce",
  "payment_crossborder-pay": null,
  "payment_installment": null,
  "payment_unmanned-store": null,
  "payment_loss-compliance": null,
  
  // === DELIVERY (7) ===
  "delivery_bulk-route": null,
  "delivery_self-pickup": "china",
  "delivery_robot-delivery": null,
  "delivery_delivery-tracking": "china",
  "delivery_crossborder-logistics": null,
  "delivery_3d-inspection": null,
  "delivery_workday snack-env": null,
  
  // === USAGE (6) ===
  "usage_service-diagnosis": "health",
  "usage_multi-cs": "chat",
  "usage_remote-support": "chat",
  "usage_multilang-aftersales": "chat",
  "usage_instore-fault": "health",
  "usage_store-inspection": null,
  
  // === FEEDBACK (9) ===
  "feedback_dealer-eval": "voc",
  "feedback_sentiment-feedback": "voc",
  "feedback_closed-loop": null,
  "feedback_funnel-opt": null,
  "feedback_usage-insights": "voc",
  "feedback_feedback-crosssell": null,
  "feedback_nba": null,
  "feedback_auto-analysis": null,
  "feedback_realtime-ops": null,
  
  // === REPURCHASE (7) ===
  "repurchase_crosssell-repurchase": "loyalty",
  "repurchase_loyalty-coupon": "loyalty",
  "repurchase_points-boost": "loyalty",
  "repurchase_customer-workshop": null,
  "repurchase_repurchase-reminder": "loyalty",
  "repurchase_dealer-rebate": null,
  "repurchase_stock-priority": null,
  
  // === LOYALTY (3) ===
  "loyalty_member-referral": "loyalty",
  "loyalty_dealer-wom": null,
  "loyalty_ugc-incentive": "matrix"
};

/**
 * 11 个 Stage 定义（替换原有的 5 个 Phase）
 */
const STAGES = [
  {id:"awareness", phase:"pre", n:"01", name:{en:"Awareness",zh:"认知",ja:"認知",th:"การรับรู้"}, desc:{en:"Reach the right audience at the right moment",zh:"在正确的时刻触达正确的人群",ja:"適切なタイミングで適切な層へ",th:"เข้าถึงกลุ่มเป้าหมายในเวลาที่เหมาะสม"}},
  {id:"interest", phase:"pre", n:"02", name:{en:"Interest",zh:"兴趣",ja:"興味",th:"ความสนใจ"}, desc:{en:"Turn attention into engaged exploration",zh:"将关注转化为深度互动探索",ja:"関心を能動的な探索へ",th:"เปลี่ยนความสนใจเป็นการสำรวจ"}},
  {id:"consideration", phase:"pre", n:"03", name:{en:"Consideration",zh:"考虑",ja:"検討",th:"การพิจารณา"}, desc:{en:"Guide shoppers toward the right product",zh:"引导用户找到合适的产品",ja:"最適な商品へ導く",th:"นำลูกค้าไปสู่สินค้าที่เหมาะสม"}},
  {id:"purchase", phase:"on", n:"04", name:{en:"Purchase Decision",zh:"购买决策",ja:"購入の意思決定",th:"การตัดสินใจซื้อ"}, desc:{en:"Remove friction and tip the decision",zh:"消除摩擦，推动决策达成",ja:"摩擦を取り除き決断を後押し",th:"ลดอุปสรรคและช่วยตัดสินใจ"}},
  {id:"order", phase:"on", n:"05", name:{en:"Order Confirmation",zh:"订单确认",ja:"注文確定",th:"ยืนยันคำสั่งซื้อ"}, desc:{en:"Get every order right, first time",zh:"让每一笔订单一次就准确无误",ja:"すべての注文を一度で正確に",th:"ทำให้ทุกคำสั่งซื้อถูกต้องในครั้งเดียว"}},
  {id:"payment", phase:"on", n:"06", name:{en:"Payment & Transaction",zh:"支付与交易",ja:"決済・取引",th:"การชำระเงินและธุรกรรม"}, desc:{en:"Make paying fast, safe and rewarding",zh:"让支付快速、安全且更划算",ja:"決済を速く・安全に・お得に",th:"ชำระเงินรวดเร็ว ปลอดภัย และคุ้มค่า"}},
  {id:"delivery", phase:"on", n:"07", name:{en:"Delivery & Receipt",zh:"配送与签收",ja:"配送・受取",th:"การจัดส่งและรับสินค้า"}, desc:{en:"Deliver on the promise, end to end",zh:"端到端兑现交付承诺",ja:"約束をエンドツーエンドで実現",th:"ส่งมอบตามสัญญาแบบครบวงจร"}},
  {id:"usage", phase:"after", n:"08", name:{en:"Usage & Support",zh:"使用与支持",ja:"利用・サポート",th:"การใช้งานและสนับสนุน"}, desc:{en:"Be there whenever a question arises",zh:"在任何疑问出现时随时响应",ja:"疑問が生じたらいつでも対応",th:"พร้อมช่วยเหลือทุกเมื่อที่มีคำถาม"}},
  {id:"feedback", phase:"after", n:"09", name:{en:"Feedback & Follow-up",zh:"反馈与跟进",ja:"フィードバック・フォロー",th:"ฟีดแบ็กและติดตามผล"}, desc:{en:"Listen, learn and close the loop",zh:"倾听、学习并闭环跟进",ja:"傾聴し学びループを閉じる",th:"รับฟัง เรียนรู้ และปิดวงจร"}},
  {id:"repurchase", phase:"after", n:"10", name:{en:"Repurchase",zh:"复购",ja:"再購入",th:"การซื้อซ้ำ"}, desc:{en:"Bring customers back, again and again",zh:"让客户一次又一次回头",ja:"顧客を何度も呼び戻す",th:"ดึงลูกค้ากลับมาซื้อซ้ำ"}},
  {id:"loyalty", phase:"after", n:"11", name:{en:"Loyalty & Advocacy",zh:"忠诚与推荐",ja:"ロイヤルティ・推奨",th:"ความภักดีและการบอกต่อ"}, desc:{en:"Reward loyalty, fuel word-of-mouth",zh:"奖励忠诚，驱动口碑传播",ja:"ロイヤルティを称え口コミを生む",th:"ตอบแทนความภักดี สร้างการบอกต่อ"}}
];

/**
 * 3 大 Phase 定义（用于阶段分组和筛选）
 */
const PHASES = {
  pre: {key:"pre", label:{en:"Pre-Sales",zh:"售前",ja:"販売前",th:"ก่อนการขาย"}, name:{en:"Spark the demand",zh:"激发需求",ja:"需要を喚起",th:"จุดประกายความต้องการ"}, accent:"#0a9499", soft:"#e0f0f0"},
  on: {key:"on", label:{en:"On-Sales",zh:"售中",ja:"販売中",th:"ระหว่างการขาย"}, name:{en:"Smooth the path to buy",zh:"顺滑购买路径",ja:"購入までを円滑に",th:"ทำให้เส้นทางซื้อราบรื่น"}, accent:"#e07a45", soft:"#fcefe0"},
  after: {key:"after", label:{en:"After-Sales",zh:"售后",ja:"販売後",th:"หลังการขาย"}, name:{en:"Turn buyers into fans",zh:"把买家变成粉丝",ja:"購入者をファンに",th:"เปลี่ยนผู้ซื้อเป็นแฟน"}, accent:"#7c5cfc", soft:"#f0ebfc"}
};

/**
 * Audience 标签配置
 */
const AUDIENCE = {
  online: {label:{en:"Online",zh:"线上",ja:"オンライン",th:"ออนไลน์"}, color:"#0a9499", soft:"#e0f0f0"},
  offline: {label:{en:"In-store",zh:"门店",ja:"店舗",th:"หน้าร้าน"}, color:"#e07a45", soft:"#fcefe0"},
  distributor: {label:{en:"Distributor",zh:"渠道商",ja:"販売店",th:"ตัวแทนจำหน่าย"}, color:"#7c5cfc", soft:"#f0ebfc"}
};

/**
 * 统计
 */
const STATS = {
  totalScenarios: 83,      // 原始场景总数（含重复 ID）
  uniqueScenarios: 77,     // 去重后唯一场景数
  withDemo: 31,            // 有对应 tile demo 的场景数
  withoutDemo: 46,         // 无对应 tile demo 的场景数
  directDemo: 19,          // 可直接点击跳转的（有 live demo html）
  partialDemo: 12,         // 部分覆盖的（tile 可扩展解释）
  missing: 46              // 完全缺失的
};

/**
 * 缺失场景清单（46 个）
 */
const MISSING_SCENARIOS = [
  // Awareness
  {id:"ad-district", stage:"awareness", aud:"offline", name:"商圈动态广告投放"},
  {id:"auto-reach", stage:"awareness", aud:"distributor", name:"智能营销活动自动触达"},
  {id:"content-interaction", stage:"awareness", aud:"online", name:"智能内容互动（短视频/直播）"},
  {id:"ad-roi", stage:"awareness", aud:"online", name:"AI广告投放与超个性化营销"},
  {id:"geo-opt", stage:"awareness", aud:"online", name:"推荐与搜索GEO优化"},
  {id:"data-tagging", stage:"awareness", aud:"online", name:"数据标签驱动的超个性化内容"},
  {id:"live-commerce", stage:"awareness", aud:"online", name:"直播与社交电商AI"},
  {id:"marketing-canvas", stage:"awareness", aud:"online", name:"智能营销画布自动化运营"},
  // Interest
  {id:"vr-store", stage:"interest", aud:"online", name:"VR沉浸式购物体验"},
  {id:"persona-target", stage:"interest", aud:"online", name:"精准客群画像"},
  // Consideration
  {id:"localized-points", stage:"consideration", aud:"distributor", name:"产品本地化卖点提炼"},
  {id:"sales-roleplay", stage:"consideration", aud:"distributor", name:"AI销售情景演练与培训"},
  {id:"instore-matching", stage:"consideration", aud:"offline", name:"门店智能搭配推荐"},
  {id:"product-design", stage:"consideration", aud:"distributor", name:"AI产品设计辅助"},
  {id:"sales-forecast", stage:"consideration", aud:"distributor", name:"AI销售需求预测"},
  {id:"ai-sales-summary", stage:"consideration", aud:"online", name:"AI摘要与销售策略优化"},
  {id:"instore-script", stage:"consideration", aud:"offline", name:"门店实时话术推荐"},
  {id:"inventory-query", stage:"consideration", aud:"offline", name:"实时库存查询与调拨"},
  {id:"tiered-bulk", stage:"consideration", aud:"distributor", name:"批量采购阶梯计价"},
  {id:"store-layout", stage:"consideration", aud:"offline", name:"门店布局优化与陈列推荐"},
  {id:"scheduling", stage:"consideration", aud:"offline", name:"智能排班调度"},
  // Purchase / Order
  {id:"procurement-collab", stage:"purchase", aud:"distributor", name:"智能采购订单协同"},
  {id:"fulfillment-risk", stage:"purchase", aud:"distributor", name:"订单履约风险预警"},
  {id:"dynamic-inventory", stage:"purchase", aud:"distributor", name:"动态库存管理"},
  {id:"supply-forecast", stage:"purchase", aud:"distributor", name:"AI供应链预测"},
  // Payment
  {id:"rfid-checkout", stage:"payment", aud:"offline", name:"RFID无接触自助结账"},
  {id:"crossborder-pay", stage:"payment", aud:"online", name:"跨境交易安全与多币种支付"},
  {id:"installment", stage:"payment", aud:"distributor", name:"采购资金分期方案推荐"},
  {id:"unmanned-store", stage:"payment", aud:"offline", name:"AI无人零售门店全流程运营"},
  {id:"loss-compliance", stage:"payment", aud:"offline", name:"动态防损与合规运营监控"},
  // Delivery
  {id:"bulk-route", stage:"delivery", aud:"distributor", name:"批量配送路线优化"},
  {id:"robot-delivery", stage:"delivery", aud:"online", name:"末端机器人配送"},
  {id:"crossborder-logistics", stage:"delivery", aud:"online", name:"跨境物流跟踪与关税提醒"},
  {id:"3d-inspection", stage:"delivery", aud:"offline", name:"AI 3D验收检测"},
  {id:"workday snack-env", stage:"delivery", aud:"offline", name:"能耗与供应链环境管理"},
  // Usage
  {id:"store-inspection", stage:"usage", aud:"offline", name:"门店智能巡检与整改跟踪"},
  // Feedback
  {id:"closed-loop", stage:"feedback", aud:"offline", name:"门店售后问题闭环跟踪"},
  {id:"funnel-opt", stage:"feedback", aud:"online", name:"售后漏斗优化"},
  {id:"feedback-crosssell", stage:"feedback", aud:"online", name:"反馈分析与交叉销售"},
  {id:"nba", stage:"feedback", aud:"online", name:"下一步最佳行动推荐"},
  {id:"auto-analysis", stage:"feedback", aud:"distributor", name:"自动化分析与决策"},
  {id:"realtime-ops", stage:"feedback", aud:"distributor", name:"运营数据实时分析"},
  // Repurchase
  {id:"customer-workshop", stage:"repurchase", aud:"offline", name:"门店老客户体验工坊"},
  {id:"dealer-rebate", stage:"repurchase", aud:"distributor", name:"经销商复购阶梯返利"},
  {id:"stock-priority", stage:"repurchase", aud:"distributor", name:"忠诚客户专属库存优先"},
  // Loyalty
  {id:"dealer-wom", stage:"loyalty", aud:"distributor", name:"经销商激励与口碑传播支持"}
];

/**
 * 有 Demo 的场景清单（31 个）
 */
const COVERED_SCENARIOS = [
  // Awareness
  {id:"multimodal-materials", stage:"awareness", tile:"aigc", name:"多模态AI营销素材生成"},
  {id:"voc-social", stage:"awareness", tile:"matrix", name:"全渠道社媒VOC分析"},
  // Interest
  {id:"virtual-fitting", stage:"interest", tile:"tryon", name:"AI虚拟试穿体验"},
  {id:"ad-extract", stage:"interest", tile:"aigc", name:"广告卖点提取"},
  {id:"personalized-ad", stage:"interest", tile:"advisor", name:"个性化推荐广告"},
  // Consideration
  {id:"shopping-guide", stage:"consideration", tile:"advisor", name:"实时导购与需求识别"},
  {id:"product-comparison", stage:"consideration", tile:"advisor", name:"多维度产品对比"},
  {id:"followup-report", stage:"consideration", tile:"chat", name:"AI跟进推荐报告"},
  {id:"cross-store-discount", stage:"consideration", tile:"commerce", name:"跨店支付优惠智能推荐"},
  {id:"dynamic-pricing", stage:"consideration", tile:"commerce", name:"动态智能定价与策略优化"},
  {id:"voice-assistant", stage:"consideration", tile:"voice", name:"语音交互购物助手"},
  // Purchase
  {id:"order-verify", stage:"purchase", tile:"commerce", name:"多维度订单智能核验"},
  {id:"eorder-points", stage:"purchase", tile:"loyalty", name:"电子订单与会员积分同步"},
  // Order
  {id:"order-verify", stage:"order", tile:"commerce", name:"多维度订单智能核验"},
  {id:"eorder-points", stage:"order", tile:"loyalty", name:"电子订单与会员积分同步"},
  // Payment
  {id:"fraud-prevention", stage:"payment", tile:"risk", name:"交易欺诈风险预测与防控"},
  {id:"offer-verify", stage:"payment", tile:"commerce", name:"多优惠叠加智能核算"},
  // Delivery
  {id:"self-pickup", stage:"delivery", tile:"china", name:"门店自助核销与取货"},
  {id:"delivery-tracking", stage:"delivery", tile:"china", name:"实时配送跟踪"},
  // Usage
  {id:"service-diagnosis", stage:"usage", tile:"health", name:"门店AI服务诊断平台"},
  {id:"multi-cs", stage:"usage", tile:"chat", name:"多场景智能客服"},
  {id:"remote-support", stage:"usage", tile:"chat", name:"投诉与产品问题远程AI支持"},
  {id:"multilang-aftersales", stage:"usage", tile:"chat", name:"多语言售后咨询与维护指导"},
  {id:"instore-fault", stage:"usage", tile:"health", name:"门店使用支持与故障快诊"},
  // Feedback
  {id:"dealer-eval", stage:"feedback", tile:"voc", name:"经销商售后服务质量评估"},
  {id:"sentiment-feedback", stage:"feedback", tile:"voc", name:"用户反馈情感分析"},
  {id:"usage-insights", stage:"feedback", tile:"voc", name:"使用体验洞察与优化系统"},
  // Repurchase
  {id:"crosssell-repurchase", stage:"repurchase", tile:"loyalty", name:"复购触发交叉销售"},
  {id:"loyalty-coupon", stage:"repurchase", tile:"loyalty", name:"忠诚优惠券自动发放"},
  {id:"points-boost", stage:"repurchase", tile:"loyalty", name:"灵活积分加成与兑换"},
  {id:"repurchase-reminder", stage:"repurchase", tile:"loyalty", name:"复购周期提醒与专属优惠"},
  // Loyalty
  {id:"member-referral", stage:"loyalty", tile:"loyalty", name:"会员专属活动与好友推荐"},
  {id:"ugc-incentive", stage:"loyalty", tile:"matrix", name:"UGC激励与二次传播"}
];
