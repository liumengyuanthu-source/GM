// GENERAL MILLS Partner Portal — i18n Multi-Language Manager
// Default: en | Supported: en, ja, th, zh
// Usage: add <script src="i18n.js"></script> in <head>, then the library auto-inits

(function() {
    'use strict';

    const STORAGE_KEY = 'bm_language';

    // ============================================
    // Translation Dictionary
    // ============================================
            const DICT = {
        "+ Add Custom Tag": { en: "+ Add Custom Tag", ja: "+ カスタムタグを追加", th: "+ เพิ่มแท็กที่กำหนดเอง", zh: "+ 添加自定义标签" },
        "+ Add Rule": { en: "+ Add Rule", ja: "+ ルールを追加", th: "+ เพิ่มกฎ", zh: "+ 添加规则" },
        "1080P": { en: "1080P", ja: "フルHD (1080P)", th: "ฟูล HD (1080P)", zh: "全高清 (1080P)" },
        "2024 Product Guide: What to Take When": { en: "2024 Product Guide: What to Take When", ja: "2024 プロダクトメントガイド：いつ何を摂るか", th: "คู่มืออาหารเสริม 2024: ควรทานอะไรเมื่อไหร่", zh: "2024 食品组合指南：何时享用什么" },
        "28% of negative feedback mentions price. Consider bundle promotions or loyalty discounts.": { en: "28% of negative feedback mentions price. Consider bundle promotions or loyalty discounts.", ja: "ネガティブフィードバックの28%が価格に言及。バンドルプロモーションやロイヤリティ割引を検討してください。", th: "28% ของข้อเสนอแนะเชิงลบกล่าวถึงราคา พิจารณาโปรโมชันชุดสินค้าหรือส่วนลดสำหรับลูกค้าประจำ", zh: "28%的负面反馈提到价格。考虑推出组合促销或忠诚度折扣。" },
        "5 Signs You Need More Product D": { en: "5 Signs You Need More Product D", ja: "プロダクトDが必要な5つのサイン", th: "5 สัญญาณที่บ่งบอกว่าคุณต้องการผลิตภัณฑ์ D เพิ่ม", zh: "你需要更多产品D的5个迹象" },
        "720P": { en: "720P", ja: "HD (720P)", th: "HD (720P)", zh: "高清 (720P)" },
        "@通用磨坊General Mills": { en: "@通用磨坊General Mills", ja: "@通用磨坊General Mills（中国公式）", th: "@通用磨坊General Mills", zh: "@通用磨坊General Mills" },
        "A: General Mills sources premium natural ingredients and adheres to Australia's strict brand governance standards. Our 90-year heritage means rigorous quality control that cheaper brands may not match.": { en: "A: General Mills sources premium natural ingredients and adheres to Australia's strict brand governance standards. Our 90-year heritage means rigorous quality control that cheaper brands may not match.", ja: "A: General Millsはプレミアムな天然原料を調達し、オーストラリアの厳格なbrand governance基準に準拠しています。90年の歴史は、安価なブランドでは及ばない厳格な品質管理を意味します。", th: "A: General Mills คัดสรรส่วนผสมจากธรรมชาติระดับพรีเมียมและปฏิบัติตามมาตรฐาน brand governance ที่เข้มงวดของออสเตรเลีย มรดก 90 ปีของเราหมายถึงการควบคุมคุณภาพที่เข้มงวดซึ่งแบรนด์ราคาถูกอาจทำได้ไม่เท่า", zh: "A: General Mills采购优质天然原料，并遵循澳大利亚严格的brand governance标准。我们90年的传承意味着廉价品牌无法比拟的严格质量控制。" },
        "A: Most General Mills products are designed to be taken together. However, we recommend consulting a service advisor if you're taking dietary restrictions or have existing conditions.": { en: "A: Most General Mills products are designed to be taken together. However, we recommend consulting a service advisor if you're taking dietary restrictions or have existing conditions.", ja: "A: ほとんどのGeneral Mills製品は一緒に摂取できるよう設計されています。ただし、お薬を享用中の方や既存の疾患がある方は、医療専門家に相談することをお勧めします。", th: "A: ผลิตภัณฑ์ General Mills ส่วนใหญ่ออกแบบมาให้ทานพร้อมกันได้ อย่างไรก็ตาม เราแนะนำให้ปรึกษาบุคลากรทางการแพทย์หากคุณกำลังทานยาหรือมีโรคประจำตัว", zh: "A: 大多数General Mills产品均可同时享用。但如果您正在服药或患有疾病，我们建议咨询客服顾问。" },
        "A: Yes, many of our products are halal certified. Look for the halal logo on the packaging. Our Wanchai Ferry Dumplings and Häagen-Dazs Mini Cup ranges are fully certified for the Malaysian and Indonesian markets.": { en: "A: Yes, many of our products are halal certified. Look for the halal logo on the packaging. Our Wanchai Ferry Dumplings and Häagen-Dazs Mini Cup ranges are fully certified for the Malaysian and Indonesian markets.", ja: "A: はい、多くの製品がハラル認証を受けています。パッケージのハラルロゴをご確認ください。フィッシュオイルとプロダクトCシリーズはマレーシアおよびインドネシア市場向けに完全に認証されています。", th: "A: ใช่ ผลิตภัณฑ์หลายรายการของเราได้รับการรับรองฮาลาล มองหาโลโก้ฮาลาลบนบรรจุภัณฑ์ ช่วงน้ำมันปลาและผลิตภัณฑ์ C ของเราได้รับการรับรองอย่างสมบูรณ์สำหรับตลาดมาเลเซียและอินโดนีเซีย", zh: "A: 是的，我们的许多产品已获得清真认证。请在包装上寻找清真标志。我们的湾仔码头水饺和哈根达斯迷你杯系列已针对马来西亚和印尼市场获得完整认证。" },
        "Retail Partner": { en: "Retail Partner", ja: "小売店パートナー", th: "พันธมิตรร้านขายยา", zh: "门店合作伙伴" },
        "AI Campaign Assistant": { en: "AI Campaign Assistant", ja: "AIキャンペーンアシスタント", th: "ผู้ช่วยแคมเปญ AI", zh: "AI活动助手" },
        "AI Generated Campaign Plan": { en: "AI Generated Campaign Plan", ja: "AI生成キャンペーンプラン", th: "แผนแคมเปญที่สร้างโดย AI", zh: "AI生成活动计划" },
        "All Stores": { en: "All Stores", ja: "すべての店舗", th: "ร้านค้าทั้งหมด", zh: "所有门店" },
        "Audience": { en: "Audience", ja: "対象者", th: "กลุ่มเป้าหมาย", zh: "受众" },
        "Basic Info": { en: "Basic Info", ja: "基本情報", th: "ข้อมูลพื้นฐาน", zh: "基本信息" },
        "Birthday This Month": { en: "Birthday This Month", ja: "今月の誕生日", th: "วันเกิดเดือนนี้", zh: "本月生日" },
        "Body Copy": { en: "Body Copy", ja: "本文", th: "เนื้อหาหลัก", zh: "正文内容" },
        "Bundle Deal": { en: "Bundle Deal", ja: "バンドルディール", th: "ดีลชุดสินค้า", zh: "捆绑优惠" },
        "Buy X Get Y": { en: "Buy X Get Y", ja: "X個買うとY個プレゼント", th: "ซื้อ X แถม Y", zh: "买X送Y" },
        "AI Assist": { en: "AI Assist", ja: "AIアシスト", th: "AI ช่วยเหลือ", zh: "AI辅助" },
        "Luxury": { en: "Luxury", ja: "ラグジュアリー", th: "หรูหรา", zh: "奢华" },
        "Natural": { en: "Natural", ja: "ナチュラル", th: "ธรรมชาติ", zh: "自然" },
        "Playful": { en: "Playful", ja: "楽しい", th: "สนุกสนาน", zh: "活泼" },
        "Retro": { en: "Retro", ja: "レトロ", th: "วินเทจ", zh: "复古" },
        "Tech": { en: "Tech", ja: "テック", th: "เทค", zh: "科技" },
        "Vibrant": { en: "Vibrant", ja: "活気", th: "มีชีวิตชีวา", zh: "活力" },
        "Warm": { en: "Warm", ja: "暖かい", th: "อบอุ่น", zh: "温暖" },
        "Your Account": { en: "Your Account", ja: "あなたのアカウント", th: "บัญชีของคุณ", zh: "您的账户" },
        "Your Title": { en: "Your Title", ja: "タイトル", th: "หัวข้อของคุณ", zh: "您的标题" },
        "Your content will appear here...": { en: "Your content will appear here...", ja: "コンテンツがここに表示されます...", th: "เนื้อหาของคุณจะปรากฏที่นี่...", zh: "您的内容将显示在这里..." },
        "💬 WeChat Header": { en: "💬 WeChat Header", ja: "💬 WeChatヘッダー", th: "💬 ส่วนหัว WeChat", zh: "💬 微信头部" },
        "💬 WeChat Moment": { en: "💬 WeChat Moment", ja: "💬 WeChatモーメント", th: "💬 โมเมนต์ WeChat", zh: "💬 微信朋友圈" },
        "📕 Xiaohongshu": { en: "📕 Xiaohongshu", ja: "📕 小紅書", th: "📕 เซี่ยวหงซู", zh: "📕 小红书" },
        "AIGC": { en: "AIGC", ja: "AIGC", th: "AIGC", zh: "AIGC" },
        "AI Generate": { en: "AI Generate", ja: "AI生成", th: "สร้างด้วย AI", zh: "AI生成" },
        "Always here to help": { en: "Always here to help", ja: "いつでもお手伝いします", th: "พร้อมช่วยเสมอ", zh: "随时为您服务" },
        "Cookies": { en: "Cookies", ja: "クッキー", th: "คุกกี้", zh: "Cookie" },
        "Create poster": { en: "Create poster", ja: "ポスターを作成", th: "สร้างโปสเตอร์", zh: "创建海报" },
        "From Copy Library": { en: "From Copy Library", ja: "コピーライブラリから", th: "จากไลบรารีคัดลอก", zh: "来自文案库" },
        "Manual": { en: "Manual", ja: "マニュアル", th: "คู่มือ", zh: "手动" },
        "Privacy": { en: "Privacy", ja: "プライバシー", th: "ความเป็นส่วนตัว", zh: "隐私" },
        "Push to channels": { en: "Push to channels", ja: "チャンネルにプッシュ", th: "เผยแพร่ไปยังช่องทาง", zh: "推送到渠道" },
        "Terms": { en: "Terms", ja: "規約", th: "ข้อกำหนด", zh: "条款" },
        "Write copy": { en: "Write copy", ja: "コピーを作成", th: "เขียนคำโฆษณา", zh: "撰写文案" },
        "DOCX": { en: "DOCX", ja: "DOCX", th: "DOCX", zh: "DOCX" },
        "Language": { en: "Language", ja: "言語", th: "ภาษา", zh: "语言" },
        "Market": { en: "Market", ja: "市場", th: "ตลาด", zh: "市场" },
        "Product Series": { en: "Product Series", ja: "製品シリーズ", th: "ซีรีย์สินค้า", zh: "产品系列" },
        "Usage Rights": { en: "Usage Rights", ja: "使用権限", th: "สิทธิการใช้งาน", zh: "使用权限" },
        "3 New Suggestions": { en: "3 New Suggestions", ja: "3件の新提案", th: "3 ข้อเสนอแนะใหม่", zh: "3条新建议" },
        "Broad reach, community": { en: "Broad reach, community", ja: "広いリーチ、コミュニティ", th: "การเข้าถึงกว้าง, ชุมชน", zh: "广泛触达、社区" },
        "Build trust with expert content": { en: "Build trust with expert content", ja: "専門コンテンツで信頼を構築", th: "สร้างความน่าเชื่อถือด้วยเนื้อหาเชี่ยวชาญ", zh: "用专业内容建立信任" },
        "1080 x 1080": { en: "1080 x 1080", ja: "1080 x 1080", th: "1080 x 1080", zh: "1080 x 1080" },
        "3.8%": { en: "3.8%", ja: "3.8%", th: "3.8%", zh: "3.8%" },
        "5.2%": { en: "5.2%", ja: "5.2%", th: "5.2%", zh: "5.2%" },
        "4.5K": { en: "4.5K", ja: "4.5K", th: "4.5K", zh: "4.5K" },
        "+12%": { en: "+12%", ja: "+12%", th: "+12%", zh: "+12%" },
        "+15%": { en: "+15%", ja: "+15%", th: "+15%", zh: "+15%" },
        "+18%": { en: "+18%", ja: "+18%", th: "+18%", zh: "+18%" },
        "+22%": { en: "+22%", ja: "+22%", th: "+22%", zh: "+22%" },
        "11.6K": { en: "11.6K", ja: "11.6K", th: "11.6K", zh: "11.6K" },
        "3.0K": { en: "3.0K", ja: "3.0K", th: "3.0K", zh: "3.0K" },
        "7.1K": { en: "7.1K", ja: "7.1K", th: "7.1K", zh: "7.1K" },
        "Call to Action": { en: "Call to Action", ja: "CTA", th: "Call to Action", zh: "行动号召" },
        "Campaign Type": { en: "Campaign Type", ja: "キャンペーンタイプ", th: "ประเภทแคมเปญ", zh: "活动类型" },
        "Channels": { en: "Channels", ja: "チャンネル", th: "ช่องทาง", zh: "渠道" },
        "Choose a Template": { en: "Choose a Template", ja: "テンプレートを選択", th: "เลือกเทมเพลต", zh: "选择模板" },
        "Choose where to publish your campaign": { en: "Choose where to publish your campaign", ja: "キャンペーンを公開する場所を選択", th: "เลือกที่เผยแพร่แคมเปญของคุณ", zh: "选择发布活动的位置" },
        "Churn Risk": { en: "Churn Risk", ja: "解約リスク", th: "ความเสี่ยงลูกค้าลด", zh: "流失风险" },
        "Clearance": { en: "Clearance", ja: "クリアランス", th: "ล้างสต็อก", zh: "清仓" },
        "Clearance Sale": { en: "Clearance Sale", ja: "クリアランスセール", th: "ล้างสต็อก", zh: "清仓特卖" },
        "Häagen-Dazs Pintmg": { en: "Häagen-Dazs Pintmg", ja: "Häagen-Dazs Pintmg", th: "Häagen-Dazs Pintmg", zh: "Häagen-Dazs Pintmg" },
        "Content Format": { en: "Content Format", ja: "コンテンツ形式", th: "รูปแบบเนื้อหา", zh: "内容格式" },
        "Create New Campaign": { en: "Create New Campaign", ja: "新規キャンペーン作成", th: "สร้างแคมเปญใหม่", zh: "创建新活动" },
        "Detailed, professional": { en: "Detailed, professional", ja: "詳細、プロフェッショナル", th: "ละเอียด, มืออาชีพ", zh: "详细、专业" },
        "Direct message with offer": { en: "Direct message with offer", ja: "オファー付きダイレクトメッセージ", th: "ข้อความตรงพร้อมข้อเสนอ", zh: "带优惠的私信" },
        "Direct, high open rate": { en: "Direct, high open rate", ja: "ダイレクト、高開封率", th: "ตรง, อัตราเปิดสูง", zh: "直达、高开信率" },
        "Discount %": { en: "Discount %", ja: "割引%", th: "ส่วนลด %", zh: "折扣%" },
        "📘 Facebook": { en: "📘 Facebook", ja: "📘 Facebook", th: "📘 Facebook", zh: "📘 Facebook" },
        "📘 Facebook Cover": { en: "📘 Facebook Cover", ja: "📘 Facebookカバー", th: "📘 ปก Facebook", zh: "📘 Facebook封面" },
        "📘 Facebook Post": { en: "📘 Facebook Post", ja: "📘 Facebook投稿", th: "📘 โพสต์ Facebook", zh: "📘 Facebook帖子" },
        "📱 Instagram Post": { en: "📱 Instagram Post", ja: "📱 Instagram投稿", th: "📱 โพสต์ Instagram", zh: "📱 Instagram帖子" },
        "📱 Instagram Story": { en: "📱 Instagram Story", ja: "📱 Instagramストーリー", th: "📱 สตอรี่ Instagram", zh: "📱 Instagram快拍" },
        "Dismiss": { en: "Dismiss", ja: "閉じる", th: "ปิด", zh: "关闭" },
        "Email Campaign": { en: "Email Campaign", ja: "メールキャンペーン", th: "แคมเปญอีเมล", zh: "邮件活动" },
        "End Date": { en: "End Date", ja: "終了日", th: "วันสิ้นสุด", zh: "结束日期" },
        "Est. Reach": { en: "Est. Reach", ja: "推定リーチ", th: "การเข้าถึงโดยประมาณ", zh: "预估触达" },
        "Est. Revenue": { en: "Est. Revenue", ja: "推定収益", th: "รายได้โดยประมาณ", zh: "预估收入" },
        "Estimated Reach": { en: "Estimated Reach", ja: "推定リーチ", th: "การเข้าถึงโดยประมาณ", zh: "预估触达" },
        "Existing Customers": { en: "Existing Customers", ja: "既存顧客", th: "ลูกค้าปัจจุบัน", zh: "现有客户" },
        "FB + TikTok": { en: "FB + TikTok", ja: "FB + TikTok", th: "FB + TikTok", zh: "FB + TikTok" },
        "Wanchai Ferry Dumplings + Häagen-Dazs Mini Cup": { en: "Wanchai Ferry Dumplings + Häagen-Dazs Mini Cup", ja: "フィッシュオイル + プロダクトC", th: "น้ำมันปลา + ผลิตภัณฑ์ซี", zh: "湾仔码头水饺 + 哈根达斯迷你杯" },
        "Wanchai Ferry Dumpling Pack": { en: "Wanchai Ferry Dumpling Pack", ja: "フィッシュオイル 1000", th: "น้ำมันปลา 1000", zh: "湾仔码头水饺 1000" },
        "Fixed amount off": { en: "Fixed amount off", ja: "定額割引", th: "ลดจำนวนคงที่", zh: "固定金额减免" },
        "Flash Sale": { en: "Flash Sale", ja: "フラッシュセール", th: "เซลล์แฟลช", zh: "闪购" },
        "Free Gift": { en: "Free Gift", ja: "プレゼント付き", th: "ของขวัญฟรี", zh: "赠品" },
        "Geo Targeting": { en: "Geo Targeting", ja: "地域ターゲティング", th: "การกำหนดเป้าหมายทางภูมิศาสตร์", zh: "地理定向" },
        "Gift Direction": { en: "Gift Direction", ja: "ギフトディレクション", th: "ทิศทางของขวัญ", zh: "礼品方向" },
        "Gift with purchase": { en: "Gift with purchase", ja: "購入特典", th: "ของขวัญพร้อมการซื้อ", zh: "购物赠品" },
        "Wanchai Ferry Wontons": { en: "Wanchai Ferry Wontons", ja: "グルコサミン", th: "กลูโคซามีน", zh: "氨基葡萄糖" },
        "Guardian CentralWorld": { en: "Guardian CentralWorld", ja: "Guardian CentralWorld", th: "Guardian CentralWorld", zh: "Guardian CentralWorld" },
        "Guardian Mid Valley": { en: "Guardian Mid Valley", ja: "Guardian Mid Valley", th: "Guardian Mid Valley", zh: "Guardian Mid Valley" },
        "Guardian Orchard": { en: "Guardian Orchard", ja: "Guardian Orchard", th: "Guardian Orchard", zh: "Guardian Orchard" },
        "Guardian Sunway Pyramid": { en: "Guardian Sunway Pyramid", ja: "Guardian Sunway Pyramid", th: "Guardian Sunway Pyramid", zh: "Guardian Sunway Pyramid" },
        "Headline": { en: "Headline", ja: "見出し", th: "พาดหัว", zh: "标题" },
        "Health Education": { en: "Health Education", ja: "健康教育", th: "การศึกษาสุขภาพ", zh: "健康教育" },
        "Holiday": { en: "Holiday", ja: "休日", th: "วันหยุด", zh: "节日" },
        "Holiday Promotion": { en: "Holiday Promotion", ja: "休日プロモーション", th: "โปรโมชันวันหยุด", zh: "节日促销" },
        "In-Store": { en: "In-Store", ja: "店舗", th: "ในร้าน", zh: "门店" },
        "Indonesia": { en: "Indonesia", ja: "インドネシア", th: "อินโดนีเซีย", zh: "印尼" },
        "Introduce new products with buzz": { en: "Introduce new products with buzz", ja: "話題性を持って新商品を紹介", th: "เปิดตัวสินค้าใหม่ด้วยกระแส", zh: "以话题引入新产品" },
        "Jun 1-10": { en: "Jun 1-10", ja: "6月1-10日", th: "1-10 มิ.ย.", zh: "6月1-10日" },
        "Jun 10-16": { en: "Jun 10-16", ja: "6月10-16日", th: "10-16 มิ.ย.", zh: "6月10-16日" },
        "Jun 15-20": { en: "Jun 15-20", ja: "6月15-20日", th: "15-20 มิ.ย.", zh: "6月15-20日" },
        "Limited time, limited qty": { en: "Limited time, limited qty", ja: "期間限定、数量限定", th: "จำกัดเวลา, จำกัดจำนวน", zh: "限时限量" },
        "Limited-time offer with urgency": { en: "Limited-time offer with urgency", ja: "緊急性のある期間限定オファー", th: "ข้อเสนอจำกัดเวลาที่เร่งด่วน", zh: "限时优惠，营造紧迫感" },
        "Malaysia": { en: "Malaysia", ja: "マレーシア", th: "มาเลเซีย", zh: "马来西亚" },
        "Member Exclusive": { en: "Member Exclusive", ja: "会員限定", th: "สำหรับสมาชิก", zh: "会员专属" },
        "Member Only": { en: "Member Only", ja: "会員限定", th: "สำหรับสมาชิก", zh: "仅会员" },
        "Men's Health Bundle": { en: "Men's Health Bundle", ja: "男性向けヘルスバンドル", th: "ชุดสุขภาพสำหรับผู้ชาย", zh: "男性健康套装" },
        "Move inventory with deep discounts": { en: "Move inventory with deep discounts", ja: "大幅割引で在庫を動かす", th: "ลดราคาลึกเพื่อระบายสต็อก", zh: "大幅折扣清仓" },
        "Multiproduct": { en: "Multiproduct", ja: "マルチプロダクト", th: "มัลติผลิตภัณฑ์", zh: "通用磨坊组合包" },
        "New Product": { en: "New Product", ja: "新商品", th: "สินค้าใหม่", zh: "新产品" },
        "New Product Launch": { en: "New Product Launch", ja: "新商品発売", th: "เปิดตัวสินค้าใหม่", zh: "新品发布" },
        "Package products together": { en: "Package products together", ja: "商品をパッケージング", th: "จัดสินค้าชุด", zh: "产品组合" },
        "Physical display, posters": { en: "Physical display, posters", ja: "店頭ディスプレイ、ポスター", th: "การจัดแสดง, โปสเตอร์", zh: "实体展示、海报" },
        "Product Relevant": { en: "Product Relevant", ja: "製品関連", th: "เกี่ยวข้องกับสินค้า", zh: "产品相关" },
        "Promo Poster": { en: "Promo Poster", ja: "プロモーションポスター", th: "โปสเตอร์โปรโมชัน", zh: "促销海报" },
        "Promotion Mechanic": { en: "Promotion Mechanic", ja: "プロモーション方式", th: "กลไกโปรโมชัน", zh: "促销机制" },
        "Promotion Value": { en: "Promotion Value", ja: "プロモーション値", th: "มูลค่าโปรโมชัน", zh: "促销值" },
        "Push Immediately": { en: "Push Immediately", ja: "即時プッシュ", th: "เผยแพร่ทันที", zh: "立即推送" },
        "Push Schedule": { en: "Push Schedule", ja: "プッシュスケジュール", th: "ตารางเผยแพร่", zh: "推送计划" },
        "Rich email with images and CTA": { en: "Rich email with images and CTA", ja: "画像とCTA付きリッチメール", th: "อีเมลรูปแบบรวยพร้อมรูปภาพและ CTA", zh: "带图片和CTA的富媒体邮件" },
        "Schedule for Later": { en: "Schedule for Later", ja: "後でスケジュール", th: "ตั้งเวลาไว้ภายหลัง", zh: "稍后安排" },
        "Seasonal sales event with themed content": { en: "Seasonal sales event with themed content", ja: "テーマ付き季節セール", th: "กิจกรรมขายตามฤดูกาลพร้อมเนื้อหาธีม", zh: "季节性主题促销活动" },
        "Select Channels": { en: "Select Channels", ja: "チャンネルを選択", th: "เลือกช่องทาง", zh: "选择渠道" },
        "Select Products": { en: "Select Products", ja: "商品を選択", th: "เลือกสินค้า", zh: "选择产品" },
        "Select Target Audience": { en: "Select Target Audience", ja: "対象者を選択", th: "เลือกกลุ่มเป้าหมาย", zh: "选择目标受众" },
        "Social Post": { en: "Social Post", ja: "ソーシャル投稿", th: "โพสต์โซเชียล", zh: "社交帖子" },
        "Start Date": { en: "Start Date", ja: "開始日", th: "วันเริ่มต้น", zh: "开始日期" },
        "Stock-up Direction": { en: "Stock-up Direction", ja: "ストックアップ方向", th: "ทิศทางการสต็อก", zh: "囤货方向" },
        "Store Event": { en: "Store Event", ja: "店舗イベント", th: "กิจกรรมร้าน", zh: "门店活动" },
        "Summer Seasonal occasion: Häagen-Dazs Mini Cup Flash Sale": { en: "Summer Seasonal occasion: Häagen-Dazs Mini Cup Flash Sale", ja: "夏の季节场景：プロダクトCフラッシュセール", th: "โอกาสตามฤดูกาลฤดูร้อน: ผลิตภัณฑ์ซีเซลล์แฟลช", zh: "夏季季节场景：哈根达斯迷你杯闪购" },
        "Target Audience": { en: "Target Audience", ja: "対象者", th: "กลุ่มเป้าหมาย", zh: "目标受众" },
        "Thailand": { en: "Thailand", ja: "タイ", th: "ไทย", zh: "泰国" },
        "TikTok + IG": { en: "TikTok + IG", ja: "TikTok + IG", th: "TikTok + IG", zh: "TikTok + IG" },
        "Top 20% spenders, monthly average ¥500+": { en: "Top 20% spenders, monthly average ¥500+", ja: "上位20%の支出者、月平均¥500+", th: "ผู้ใช้จ่ายสูงสุด 20%, เฉลี่ย ¥500+/เดือน", zh: "前20%消费者，月均¥500+" },
        "VIP rewards and loyalty perks": { en: "VIP rewards and loyalty perks", ja: "VIP報酬とロイヤルティ特典", th: "รางวัล VIP และสิทธิพิเศษความภักดี", zh: "VIP奖励和忠诚度福利" },
        "Vietnam": { en: "Vietnam", ja: "ベトナム", th: "เวียดนาม", zh: "越南" },
        "Viral, young audience": { en: "Viral, young audience", ja: "バイラル、若年層", th: "ไวรัล, กลุ่มผู้ชมวัยหนุ่มสาว", zh: "病毒式传播，年轻受众" },
        "Visual poster with product and offer": { en: "Visual poster with product and offer", ja: "商品とオファーのビジュアルポスター", th: "โปสเตอร์วิชวลพร้อมสินค้าและข้อเสนอ", zh: "带产品和优惠的视觉海报" },
        "Visual, high engagement": { en: "Visual, high engagement", ja: "ビジュアル、高エンゲージメント", th: "วิชวล, การมีส่วนร่วมสูง", zh: "视觉化，高互动" },
        "Häagen-Dazs Mini Cup": { en: "Häagen-Dazs Mini Cup", ja: "プロダクトC", th: "ผลิตภัณฑ์ซี", zh: "哈根达斯迷你杯" },
        "Häagen-Dazs Mini Cup 500mg": { en: "Häagen-Dazs Mini Cup 500mg", ja: "プロダクトC 500mg", th: "ผลิตภัณฑ์ซี 500mg", zh: "哈根达斯迷你杯 500mg" },
        "Watsons IOI": { en: "Watsons IOI", ja: "Watsons IOI", th: "Watsons IOI", zh: "Watsons IOI" },
        "WhatsApp + IG": { en: "WhatsApp + IG", ja: "WhatsApp + IG", th: "WhatsApp + IG", zh: "WhatsApp + IG" },
        "WhatsApp Message": { en: "WhatsApp Message", ja: "WhatsAppメッセージ", th: "ข้อความ WhatsApp", zh: "WhatsApp消息" },
        "e.g., 20% off": { en: "e.g., 20% off", ja: "例：20%オフ", th: "เช่น ลด 20%", zh: "例如：8折" },
        "e.g., Buy 2 Get 1": { en: "e.g., Buy 2 Get 1", ja: "例：2個買うと1個プレゼント", th: "เช่น ซื้อ 2 แถม 1", zh: "例如：买2送1" },
        "~¥45,000": { en: "~¥45,000", ja: "~¥45,000", th: "~¥45,000", zh: "~¥45,000" },
        "← Previous": { en: "← Previous", ja: "← 前へ", th: "← ก่อนหน้า", zh: "← 上一步" },
        "⚡ One-Click Create": { en: "⚡ One-Click Create", ja: "⚡ ワンクリック作成", th: "⚡ สร้างในคลิกเดียว", zh: "⚡ 一键创建" },
        "🌏 APAC": { en: "🌏 APAC", ja: "🌏 APAC", th: "🌏 APAC", zh: "🌏 亚太" },
        "🌏 KL, Malaysia": { en: "🌏 KL, Malaysia", ja: "🌏 クアラルンプール, マレーシア", th: "🌏 กัวลาลัมเปอร์, มาเลเซีย", zh: "🌏 吉隆坡, 马来西亚" },
        "🌏 Singapore, Malaysia": { en: "🌏 Singapore, Malaysia", ja: "🌏 シンガポール, マレーシア", th: "🌏 สิงคโปร์, มาเลเซีย", zh: "🌏 新加坡, 马来西亚" },
        "🎯 Wanchai Ferry Dumplings, Häagen-Dazs Mini Cup": { en: "🎯 Wanchai Ferry Dumplings, Häagen-Dazs Mini Cup", ja: "🎯 フィッシュオイル, プロダクトC", th: "🎯 น้ำมันปลา, ผลิตภัณฑ์ซี", zh: "🎯 湾仔码头水饺, 哈根达斯迷你杯" },
        "🎯 Multiproduct, Wanchai Ferry Dumplings, Häagen-Dazs Pint": { en: "🎯 Multiproduct, Wanchai Ferry Dumplings, Häagen-Dazs Pint", ja: "🎯 マルチプロダクト, フィッシュオイル, Häagen-Dazs Pint", th: "🎯 มัลติผลิตภัณฑ์, น้ำมันปลา, Häagen-Dazs Pint", zh: "🎯 通用磨坊组合包, 湾仔码头水饺, Häagen-Dazs Pint" },
        "🎯 Celebration Gold, Wanchai Ferry Dumplings, Multiproduct": { en: "🎯 Celebration Gold, Wanchai Ferry Dumplings, Multiproduct", ja: "🎯 プレグナンシーゴールド, フィッシュオイル, マルチプロダクト", th: "🎯 โพรแกนซีโกลด์, น้ำมันปลา, มัลติผลิตภัณฑ์", zh: "🎯 礼赠家庭黄金, 湾仔码头水饺, 通用磨坊组合包" },
        "📅 Jun 1 - Jun 10, 2026": { en: "📅 Jun 1 - Jun 10, 2026", ja: "📅 2026年6月1日 - 6月10日", th: "📅 1 - 10 มิ.ย. 2026", zh: "📅 2026年6月1日 - 6月10日" },
        "📅 Jun 10 - Jun 16, 2026": { en: "📅 Jun 10 - Jun 16, 2026", ja: "📅 2026年6月10日 - 6月16日", th: "📅 10 - 16 มิ.ย. 2026", zh: "📅 2026年6月10日 - 6月16日" },
        "📅 May 8 - May 14, 2026": { en: "📅 May 8 - May 14, 2026", ja: "📅 2026年5月8日 - 5月14日", th: "📅 8 - 14 พ.ค. 2026", zh: "📅 2026年5月8日 - 5月14日" },
        "📝 Content Preview": { en: "📝 Content Preview", ja: "📝 コンテンツプレビュー", th: "📝 ตัวอย่างเนื้อหา", zh: "📝 内容预览" },
        "📱 Preview": { en: "📱 Preview", ja: "📱 プレビュー", th: "📱 ตัวอย่าง", zh: "📱 预览" },
        "Marketing Center": { en: "Marketing Center", ja: "マーケティングセンター", th: "ศูนย์การตลาด", zh: "营销中心" },
        "Your complete marketing toolkit — from social media to campaigns, customer insights to AI-powered content.": { en: "Your complete marketing toolkit — from social media to campaigns, customer insights to AI-powered content.", ja: "ソーシャルメディアからキャンペーン、顧客洞察からAI生成コンテンツまで、包括的なマーケティングツールキット。", th: "ชุดเครื่องมือการตลาดที่ครบถ้วน — จากโซเชียลมีเดียถึงแคมเปญ ข้อมูลลูกค้าถึงเนื้อหา AI", zh: "完整的营销工具箱 — 从社交媒体到活动、客户洞察到 AI 内容。" },
        "Manage all your social media channels in one place. Create content, engage with customers, and track performance across Instagram, Facebook, TikTok, and more.": { en: "Manage all your social media channels in one place. Create content, engage with customers, and track performance across Instagram, Facebook, TikTok, and more.", ja: "すべてのソーシャルメディアチャンネルを一元管理。コンテンツ作成、顧客エンゲージメント、Instagram/Facebook/TikTok等のパフォーマンス追跡。", th: "จัดการช่องทางโซเชียลมีเดียทั้งหมดในที่เดียว สร้างเนื้อหา มีส่วนร่วมกับลูกค้า และติดตามผลงาน across Instagram, Facebook, TikTok และอื่นๆ", zh: "在一个地方管理所有社交媒体渠道。创建内容、与客户互动、追踪 Instagram、Facebook、TikTok 等的表现。" },
        "Plan, launch, and track marketing campaigns across all channels. From flash sales to product launches, AI helps you find the right moment and audience.": { en: "Plan, launch, and track marketing campaigns across all channels. From flash sales to product launches, AI helps you find the right moment and audience.", ja: "全チャンネルでマーケティングキャンペーンを計画、開始、追跡。フラッシュセールから新商品発売まで、AIが最適なタイミングと対象者を見つけます。", th: "วางแผน เปิดตัว และติดตามแคมเปญการตลาด across ทุกช่องทาง จากเซลล์แฟลชถึงเปิดตัวสินค้า AI ช่วยคุณหาช่วงเวลาและกลุ่มเป้าหมายที่เหมาะสม", zh: "跨所有渠道规划、启动和追踪营销活动。从闪购到新品发布，AI 帮你找到最佳时机和受众。" },
        "Listen to what your customers are saying across all platforms. Analyze reviews, ratings, and feedback to improve products and service.": { en: "Listen to what your customers are saying across all platforms. Analyze reviews, ratings, and feedback to improve products and service.", ja: "全プラットフォームの顧客の声を傾聴。レビュー、評価、フィードバックを分析して製品とサービスを改善。", th: "ฟังเสียงลูกค้าของคุณ across ทุกแพลตฟอร์ม วิเคราะห์รีวิว คะแนน และข้อเสนอแนะเพื่อปรับปรุงสินค้าและบริการ", zh: "倾听所有平台上客户的声音。分析评论、评分和反馈，改进产品和服务。" },
        "Generate marketing content, images, and videos with AI. Manage brand assets and ensure compliance across all markets and languages.": { en: "Generate marketing content, images, and videos with AI. Manage brand assets and ensure compliance across all markets and languages.", ja: "AIでマーケティングコンテンツ、画像、動画を生成。ブランドアセットを管理し、全市場・言語でコンプライアンスを確保。", th: "สร้างเนื้อหาการตลาด รูปภาพ และวิดีโอด้วย AI จัดการสินทรัพย์แบรนด์ และรับรองความสอดคล้อง across ทุกตลาดและภาษา", zh: "用 AI 生成营销内容、图片和视频。管理品牌资产，确保所有市场和语言的合规性。" },
        "Key Features": { en: "Key Features", ja: "主な機能", th: "ฟีเจอร์หลัก", zh: "核心功能" },
        "Content Creation": { en: "Content Creation", ja: "コンテンツ作成", th: "การสร้างเนื้อหา", zh: "内容创作" },
        "Multi-Channel Publishing": { en: "Multi-Channel Publishing", ja: "マルチチャンネル投稿", th: "เผยแพร่หลายช่องทาง", zh: "多渠道发布" },
        "Engagement Tracking": { en: "Engagement Tracking", ja: "エンゲージメント追跡", th: "การติดตามการมีส่วนร่วม", zh: "互动追踪" },
        "Channel Analytics": { en: "Channel Analytics", ja: "チャンネル分析", th: "การวิเคราะห์ช่องทาง", zh: "渠道分析" },
        "Campaign Templates": { en: "Campaign Templates", ja: "キャンペーンテンプレート", th: "เทมเพลตแคมเปญ", zh: "活动模板" },
        "Cross-Channel Publishing": { en: "Cross-Channel Publishing", ja: "クロスチャンネル投稿", th: "เผยแพร่ข้ามช่องทาง", zh: "跨渠道发布" },
        "Performance Tracking": { en: "Performance Tracking", ja: "パフォーマンス追跡", th: "การติดตามผลงาน", zh: "效果追踪" },
        "Audience Targeting": { en: "Audience Targeting", ja: "対象者ターゲティング", th: "การกำหนดเป้าหมายกลุ่มผู้ชม", zh: "受众定向" },
        "Review Aggregation": { en: "Review Aggregation", ja: "レビュー集約", th: "การรวบรวมรีวิว", zh: "评论聚合" },
        "Sentiment Analysis": { en: "Sentiment Analysis", ja: "感情分析", th: "การวิเคราะห์ความรู้สึก", zh: "情感分析" },
        "Competitor Benchmarking": { en: "Competitor Benchmarking", ja: "競合ベンチマーク", th: "การเปรียบเทียบคู่แข่ง", zh: "竞品对标" },
        "Response Templates": { en: "Response Templates", ja: "返信テンプレート", th: "เทมเพลตการตอบกลับ", zh: "回复模板" },
        "AI Image Generation": { en: "AI Image Generation", ja: "AI画像生成", th: "การสร้างรูปภาพ AI", zh: "AI图片生成" },
        "Copywriting Assistant": { en: "Copywriting Assistant", ja: "コピーライティングアシスタント", th: "ผู้ช่วยเขียนคำโฆษณา", zh: "文案助手" },
        "Brand Asset Library": { en: "Brand Asset Library", ja: "ブランドアセットライブラリ", th: "ไลบรารีสินทรัพย์แบรนด์", zh: "品牌资产库" },
        "Multi-Language Support": { en: "Multi-Language Support", ja: "多言語対応", th: "การรองรับหลายภาษา", zh: "多语言支持" },
        "Compliance Check": { en: "Compliance Check", ja: "コンプライアンスチェック", th: "การตรวจสอบความสอดคล้อง", zh: "合规检查" },
        "Explore Social Hub": { en: "Explore Social Hub", ja: "Social Hubを探索", th: "สำรวจ Social Hub", zh: "探索 Social Hub" },
        "Explore Campaign Hub": { en: "Explore Campaign Hub", ja: "Campaign Hubを探索", th: "สำรวจ Campaign Hub", zh: "探索 Campaign Hub" },
        "Explore VOC": { en: "Explore VOC", ja: "VOCを探索", th: "สำรวจ VOC", zh: "探索 VOC" },
        "Explore AIGC": { en: "Explore AIGC", ja: "AIGCを探索", th: "สำรวจ AIGC", zh: "探索 AIGC" },
        "AIGC - Content Engine": { en: "AIGC - Content Engine", ja: "AIGC - コンテンツエンジン", th: "AIGC - เครื่องยนต์เนื้อหา", zh: "AIGC - 内容引擎" },
        "AI + Keyword": { en: "AI + Keyword", ja: "AI + キーワード", th: "AI + คีย์เวิร์ด", zh: "AI + 关键词" },
        "AI Generated": { en: "AI Generated", ja: "AI生成", th: "สร้างโดย AI", zh: "AI生成" },
        "AI Generated Image Preview": { en: "AI Generated Image Preview", ja: "AI生成画像プレビュー", th: "ตัวอย่างรูปภาพที่สร้างโดย AI", zh: "AI生成图片预览" },
        "AI Generated Keyframe Preview": { en: "AI Generated Keyframe Preview", ja: "AI生成キーフレームプレビュー", th: "ตัวอย่างเฟรมคีย์ที่สร้างโดย AI", zh: "AI生成关键帧预览" },
        "AI Insights": { en: "AI Insights", ja: "AIインサイト", th: "ข้อมูลเชิงลึก AI", zh: "AI洞察" },
        "AI Insights Generated": { en: "AI Insights Generated", ja: "AIインサイト生成済み", th: "สร้างข้อมูลเชิงลึก AI แล้ว", zh: "AI洞察已生成" },
        "AI Reply": { en: "AI Reply", ja: "AI返信", th: "การตอบกลับ AI", zh: "AI回复" },
        "AI Reply Assistant": { en: "AI Reply Assistant", ja: "AI返信アシスタント", th: "ผู้ช่วยตอบกลับ AI", zh: "AI回复助手" },
        "AI Suggested Reply": { en: "AI Suggested Reply", ja: "AI提案返信", th: "คำตอบที่แนะนำโดย AI", zh: "AI建议回复" },
        "AI Vision": { en: "AI Vision", ja: "AIビジョン", th: "AI วิชั่น", zh: "AI视觉" },
        "AI-generated insights from customer feedback analysis.": { en: "AI-generated insights from customer feedback analysis.", ja: "顧客フィードバック分析からのAI生成インサイト。", th: "ข้อมูลเชิงลึกที่สร้างโดย AI จากการวิเคราะห์ข้อเสนอแนะของลูกค้า", zh: "基于客户反馈分析的AI生成洞察。" },
        "AI Generated Video Description": {
        en: "🌿 Discover the Power of food experience with General Mills\n\nAre you looking for a natural way to boost your seasonal occasion this season? 🍊\n\nOur Häagen-Dazs Mini Cup + Zinc combination has been trusted by Australian families for over 90 years. Made from premium natural ingredients, it supports your immune system when you need it most.\n\n✨ Key Benefits:\n• Supports immune function\n• Antioxidant protection\n• Gentle on the stomach\n\n🛒 Now available at all Guardian pharmacies across Malaysia and Singapore. Swipe up to learn more!",
        ja: "🌿 General Millsの自然の力を発見しよう\n\n今シーズンの季节场景アップに、自然な方法をお探しですか？🍊\n\nプロダクトC+亜鉛の組み合わせは、90年以上オーストラリアの家族に愛用されています。厳選された天然素材で、大切な時の季节场景システムをサポートします。\n\n✨ 主な効果:\n• 季节场景機能のサポート\n• 抗酸化作用\n• 胃に優しい\n\n🛒 マレーシアとシンガポールのすべてのGuardian小売店で販売中。詳しくはスワイプアップ！",
        th: "🌿 ค้นพบพลังธรรมชาติกับ General Mills\n\nกำลังมองหาวิธีธรรมชาติเพื่อเสริมโอกาสตามฤดูกาลในฤดูกาลนี้? 🍊\n\nสูตรผลิตภัณฑ์ซี + สังกะสีได้รับความไว้วางใจจากครอบครัวออสเตรเลียมากว่า 90 ปี ผลิตจากวัตถุดิบธรรมชาติคุณภาพสูง สนับสนุนระบบโอกาสตามฤดูกาลในยามที่คุณต้องการมากที่สุด\n\n✨ ประโยชน์หลัก:\n• สนับสนุนโอกาสตามฤดูกาล\n• ป้องกันอนุภาคอิสระ\n• อ่อนโยนต่อกระเพาะ\n\n🛒 มีจำหน่ายแล้วที่ร้านขายยา Guardian ทั่วมาเลเซียและสิงคโปร์ ปัดขึ้นเพื่อดูเพิ่มเติม!",
        zh: "🌿 发现General Mills自然力量\n\n你是否在寻找一种自然的方式来提升这个季度的季节场景？🍊\n\n我们的哈根达斯迷你杯+锌组合已被澳大利亚家庭信赖超过90年。采用优质天然成分制成，在你最需要的时候支持季节场景系统。\n\n✨ 主要功效:\n• 支持季节场景功能\n• 抗氧化保护\n• 温和不刺激胃部\n\n🛒 现已在马来西亚和新加坡所有Guardian门店上市。向上滑动了解更多！"
    },
        "*": {
        en: "*",
        ja: "*",
        th: "*",
        zh: "*"
    },
        "AIGC - Asset Library": {
        en: "AIGC - Asset Library",
        ja: "AIGC - アセットライブラリ",
        th: "AIGC - คลังสินทรัพย์",
        zh: "AIGC - 素材库"
    },
        "Active Users by Platform": { en: "Active Users by Platform", ja: "プラットフォーム別アクティブユーザー", th: "ผู้ใช้งานตามแพลตฟอร์ม", zh: "按平台活跃用户" },
        "Add New Channel": { en: "Add New Channel", ja: "新規チャネルを追加", th: "เพิ่มช่องทางใหม่", zh: "添加新渠道" },
        "Alex Koh": { en: "Alex Koh", ja: "アレックス・コー", th: "อเล็กซ์ โค", zh: "亚历克斯·柯" },
        "All Campaigns": { en: "All Campaigns", ja: "すべてのキャンペーン", th: "แคมเปญทั้งหมด", zh: "所有活动" },
        "All Platforms": { en: "All Platforms", ja: "すべてのプラットフォーム", th: "ทุกแพลตฟอร์ม", zh: "所有平台" },
        "All Status": { en: "All Status", ja: "すべてのステータス", th: "ทุกสถานะ", zh: "所有状态" },
        "All Types": { en: "All Types", ja: "すべてのタイプ", th: "ทุกประเภท", zh: "所有类型" },
        "All Users": { en: "All Users", ja: "すべてのユーザー", th: "ผู้ใช้ทั้งหมด", zh: "所有用户" },
        "Analyze campaign": { en: "Analyze campaign", ja: "キャンペーンを分析", th: "วิเคราะห์แคมเปญ", zh: "分析活动" },
        "Are you looking for a natural way to boost your seasonal occasion this season? 🍊": { en: "Are you looking for a natural way to boost your seasonal occasion this season? 🍊", ja: "今シーズン、自然な方法で季节场景を高めたいと思っていませんか？🍊", th: "คุณกำลังมองหาวิธีธรรมชาติเพื่อเสริมโอกาสตามฤดูกาลในช่วงนี้หรือไม่? 🍊", zh: "这个季节，您是否在寻找一种自然的方式来增强季节场景？🍊" },
        "Asset Dashboard": { en: "Asset Dashboard", ja: "アセットダッシュボード", th: "แดชบอร์ดสินทรัพย์", zh: "素材仪表盘" },
        "Asset Generator": { en: "Asset Generator", ja: "アセットジェネレーター", th: "เครื่องมือสร้างสินทรัพย์", zh: "素材生成器" },
        "Asset Library": { en: "Asset Library", ja: "アセットライブラリ", th: "คลังสินทรัพย์", zh: "素材库" },
        "Auckland, NZ": { en: "Auckland, NZ", ja: "オークランド、ニュージーランド", th: "ออกแลนด์, นิวซีแลนด์", zh: "奥克兰, 新西兰" },
        "Aug 2024": { en: "Aug 2024", ja: "2024年8月", th: "ส.ค. 2024", zh: "2024年8月" },
        "Australia — City Breakdown": { en: "Australia — City Breakdown", ja: "オーストラリア — 都市別内訳", th: "ออสเตรเลีย — แยกตามเมือง", zh: "澳大利亚 — 城市细分" },
        "Auto-Corrected 15%": { en: "Auto-Corrected 15%", ja: "自動修正 15%", th: "แก้ไขอัตโนมัติ 15%", zh: "自动修正 15%" },
        "Auto-generated Description": { en: "Auto-generated Description", ja: "自動生成の説明", th: "คำอธิบายที่สร้างอัตโนมัติ", zh: "自动生成的描述" },
        "B.More AI": { en: "B.More AI", ja: "B.More AI（パートナーAI）", th: "B.More AI (AI พันธมิตร)", zh: "B.More AI" },
        "Banned Image Detection": { en: "Banned Image Detection", ja: "禁止画像検出", th: "การตรวจจับรูปภาพที่ต้องห้าม", zh: "违禁图片检测" },
        "Based on full text content": { en: "Based on full text content", ja: "全文コンテンツに基づく", th: "อิงตามเนื้อหาข้อความทั้งหมด", zh: "基于完整文本内容" },
        "General Mills China": { en: "General Mills China", ja: "General Mills 中国", th: "General Mills จีน", zh: "General Mills 中国" },
        "General Mills Official": { en: "General Mills Official", ja: "General Mills 公式", th: "General Mills อย่างเป็นทางการ", zh: "General Mills 官方" },
        "General Mills Celebration Gold – Complete Review": { en: "General Mills Celebration Gold – Complete Review", ja: "General Mills Celebration Gold – 完全レビュー", th: "General Mills Celebration Gold – รีวิวฉบับสมบูรณ์", zh: "General Mills Celebration Gold – 完整评测" },
        "General Mills vs Swisse: Which Multiproduct Wins?": { en: "General Mills vs Swisse: Which Multiproduct Wins?", ja: "General Mills vs Swisse: どちらのマルチプロダクトが勝る？", th: "General Mills vs Swisse: มัลติผลิตภัณฑ์ใดดีกว่า?", zh: "General Mills vs Swisse：哪款通用磨坊组合包更好？" },
        "General Mills 中国": { en: "General Mills 中国", ja: "General Mills 中国", th: "General Mills จีน", zh: "General Mills 中国" },
        "Browse and manage all your saved assets.": { en: "Browse and manage all your saved assets.", ja: "保存したすべてのアセットを閲覧・管理。", th: "ดูและจัดการสินทรัพย์ที่บันทึกไว้ทั้งหมด", zh: "浏览和管理您保存的所有素材。" },
        "Budget (USD)": { en: "Budget (USD)", ja: "予算（USD）", th: "งบประมาณ (USD)", zh: "预算（美元）" },
        "Calendar View": { en: "Calendar View", ja: "カレンダー表示", th: "มุมมองปฏิทิน", zh: "日历视图" },
        "Campaign Calendar": { en: "Campaign Calendar", ja: "キャンペーンカレンダー", th: "ปฏิทินแคมเปญ", zh: "活动日历" },
        "Campaign Name": { en: "Campaign Name", ja: "キャンペーン名", th: "ชื่อแคมเปญ", zh: "活动名称" },
        "Campaign Performance": { en: "Campaign Performance", ja: "キャンペーン効果", th: "ประสิทธิภาพแคมเปญ", zh: "活动效果" },
        "Carousels 9%": { en: "Carousels 9%", ja: "カルーセル 9%", th: "แคร์รูเซล 9%", zh: "轮播 9%" },
        "Channel Management": { en: "Channel Management", ja: "チャネル管理", th: "การจัดการช่องทาง", zh: "渠道管理" },
        "Christmas Prep": { en: "Christmas Prep", ja: "クリスマス準備", th: "เตรียมตัวคริสต์มาส", zh: "圣诞准备" },
        "Commercial version material": { en: "Commercial version material", ja: "商用版素材", th: "เนื้อหาเวอร์ชันธุรกิจ", zh: "商用版本素材" },
        "Common questions and how to handle them.": { en: "Common questions and how to handle them.", ja: "一般的な質問とその対処方法。", th: "คำถามทั่วไปและวิธีจัดการ", zh: "常见问题及处理方法。" },
        "Community H5": { en: "Community H5", ja: "Community H5", th: "Community H5", zh: "社区H5" },
        "Competitor Mentions": { en: "Competitor Mentions", ja: "競合言及", th: "การกล่าวถึงคู่แข่ง", zh: "竞争对手提及" },
        "Complaint Response": { en: "Complaint Response", ja: "苦情対応", th: "การตอบกลับข้อร้องเรียน", zh: "投诉回复" },
        "Complete guide for onboarding new retail partners, from first contact to first order.": { en: "Complete guide for onboarding new retail partners, from first contact to first order.", ja: "初回接触から初注文まで、新規小売パートナーのオンボーディング完全ガイド。", th: "คู่มือฉบับสมบูรณ์สำหรับการต้อนรับพันธมิตรค้าปลีกใหม่ ตั้งแต่การติดต่อครั้งแรกจนถึงคำสั่งซื้อแรก", zh: "从首次接触到首笔订单，新零售合作伙伴入职的完整指南。" },
        "Confirm Push": { en: "Confirm Push", ja: "プッシュを確認", th: "ยืนยันการ push", zh: "确认推送" },
        "Connect, manage, and monitor all your social media channels.": { en: "Connect, manage, and monitor all your social media channels.", ja: "すべてのソーシャルメディアチャネルを接続、管理、監視します。", th: "เชื่อมต่อ จัดการ และตรวจสอบช่องทางโซเชียลมีเดียทั้งหมดของคุณ", zh: "连接、管理和监控您的所有社交媒体渠道。" },
        "Content": { en: "Content", ja: "コンテンツ", th: "เนื้อหา", zh: "内容" },
        "Content Count": { en: "Content Count", ja: "コンテンツ数", th: "จำนวนเนื้อหา", zh: "内容数量" },
        "Content Heat Ranking": { en: "Content Heat Ranking", ja: "コンテンツヒートランキング", th: "การจัดอันดับความร้อนแรงของเนื้อหา", zh: "内容热度排行" },
        "Content Quality Analysis": { en: "Content Quality Analysis", ja: "コンテンツ品質分析", th: "การวิเคราะห์คุณภาพเนื้อหา", zh: "内容质量分析" },
        "Content Tags": { en: "Content Tags", ja: "コンテンツタグ", th: "แท็กเนื้อหา", zh: "内容标签" },
        "Content Team": { en: "Content Team", ja: "コンテンツチーム", th: "ทีมเนื้อหา", zh: "内容团队" },
        "Content calendar": { en: "Content calendar", ja: "コンテンツカレンダー", th: "ปฏิทินเนื้อหา", zh: "内容日历" },
        "Copy to Clipboard": { en: "Copy to Clipboard", ja: "クリップボードにコピー", th: "คัดลอกไปยังคลิปบอร์ด", zh: "复制到剪贴板" },
        "Copy:": { en: "Copy:", ja: "コピー：", th: "ข้อความ:", zh: "文案：" },
        "Create & Publish": { en: "Create & Publish", ja: "作成・公開", th: "สร้างและเผยแพร่", zh: "创建与发布" },
        "Create Campaign": { en: "Create Campaign", ja: "キャンペーン作成", th: "สร้างแคมเปญ", zh: "创建活动" },
        "Create Content": { en: "Create Content", ja: "コンテンツ作成", th: "สร้างเนื้อหา", zh: "创建内容" },
        "Create a post": { en: "Create a post", ja: "投稿を作成", th: "สร้างโพสต์", zh: "创建帖子" },
        "Create new brand assets with AI assistance.": { en: "Create new brand assets with AI assistance.", ja: "AIアシスタンスで新しいブランドアセットを作成。", th: "สร้างสินทรัพย์แบรนด์ใหม่ด้วยความช่วยเหลือจาก AI", zh: "借助AI辅助创建新的品牌素材。" },
        "Custom Title": { en: "Custom Title", ja: "カスタムタイトル", th: "ชื่อเรื่องที่กำหนดเอง", zh: "自定义标题" },
        "Customer Tags": { en: "Customer Tags", ja: "顧客タグ", th: "แท็กลูกค้า", zh: "客户标签" },
        "Customer reviews from e-commerce and social platforms.": { en: "Customer reviews from e-commerce and social platforms.", ja: "Eコマースおよびソーシャルプラットフォームからの顧客レビュー。", th: "รีวิวลูกค้าจากแพลตฟอร์มอีคอมเมิร์ซและโซเชียล", zh: "来自电商和社交平台的客户评论。" },
        "Dashboard & Analytics": { en: "Dashboard & Analytics", ja: "ダッシュボード・分析", th: "แดชบอร์ดและการวิเคราะห์", zh: "仪表盘与分析" },
        "Date Range": { en: "Date Range", ja: "日付範囲", th: "ช่วงวันที่", zh: "日期范围" },
        "Dec 10": { en: "Dec 10", ja: "12月10日", th: "10 ธ.ค.", zh: "12月10日" },
        "Dec 5": { en: "Dec 5", ja: "12月5日", th: "5 ธ.ค.", zh: "12月5日" },
        "Dec 8": { en: "Dec 8", ja: "12月8日", th: "8 ธ.ค.", zh: "12月8日" },
        "December 2024": { en: "December 2024", ja: "2024年12月", th: "ธ.ค. 2024", zh: "2024年12月" },
        "Define rules and sensitive words for automated content quality checks.": { en: "Define rules and sensitive words for automated content quality checks.", ja: "自動化されたコンテンツ品質チェックのためのルールと禁止語を定義します。", th: "กำหนดกฎและคำที่ละเอียดอ่อนสำหรับการตรวจสอบคุณภาพเนื้อหาอัตโนมัติ", zh: "为自动化内容质量检查定义规则和敏感词。" },
        "Discover food experience": { en: "Discover food experience", ja: "自然の健康を発見", th: "ค้นพบสุขภาพธรรมชาติ", zh: "发现自然健康" },
        "Dr. Lim Wei": { en: "Dr. Lim Wei", ja: "Lim Wei 博士", th: "ดร. Lim Wei", zh: "林伟博士" },
        "Edit →": { en: "Edit →", ja: "編集 →", th: "แก้ไข →", zh: "编辑 →" },
        "Emma Wang": { en: "Emma Wang", ja: "エマ・ワン", th: "เอ็มม่า วอง", zh: "艾玛·王" },
        "Empathetic and professional response for customer complaints.": { en: "Empathetic and professional response for customer complaints.", ja: "顧客の苦情に対する共感的でプロフェッショナルな返信。", th: "การตอบกลับที่เห็นอกเห็นใจและเป็นมืออาชีพสำหรับข้อร้องเรียนของลูกค้า", zh: "对客户投诉的共情且专业的回复。" },
        "FB, IG, TT": { en: "FB, IG, TT", ja: "FB, IG, TikTok", th: "FB, IG, TT", zh: "FB, IG, 抖音" },
        "FB, IG, WA": { en: "FB, IG, WA", ja: "FB, IG, WhatsApp", th: "FB, IG, WA", zh: "FB, IG, 微信" },
        "Family Everyday enjoyment": { en: "Family Everyday enjoyment", ja: "家族の健康", th: "สุขภาพครอบครัว", zh: "家庭健康" },
        "First frame of generated video": { en: "First frame of generated video", ja: "生成された動画の最初のフレーム", th: "เฟรมแรกของวิดีโอที่สร้างขึ้น", zh: "生成视频的首帧" },
        "Wanchai Ferry Dumplings Benefits": { en: "Wanchai Ferry Dumplings Benefits", ja: "フィッシュオイルの効果", th: "ประโยชน์ของน้ำมันปลา", zh: "湾仔码头水饺功效" },
        "Fitness Enthusiasts": { en: "Fitness Enthusiasts", ja: "フィットネス愛好家", th: "ผู้ที่ชื่นชอบการออกกำลังกาย", zh: "健身爱好者" },
        "Flagged 20%": { en: "Flagged 20%", ja: "フラグ付き 20%", th: "ถูกตั้งธง 20%", zh: "标记 20%" },
        "Flags sensitive or inappropriate imagery": { en: "Flags sensitive or inappropriate imagery", ja: "敏感または不適切な画像をフラグ付けします", th: "ตั้งธงรูปภาพที่ละเอียดอ่อนหรือไม่เหมาะสม", zh: "标记敏感或不适当的图像" },
        "Follower Distribution by Market": { en: "Follower Distribution by Market", ja: "市場別フォロワー分布", th: "การกระจายผู้ติดตามตามตลาด", zh: "按市场粉丝分布" },
        "Free version material": { en: "Free version material", ja: "無料版素材", th: "เนื้อหาเวอร์ชันฟรี", zh: "免费版本素材" },
        "General Health": { en: "General Health", ja: "総合健康", th: "สุขภาพทั่วไป", zh: "综合健康" },
        "Generate Assets": { en: "Generate Assets", ja: "アセットを生成", th: "สร้างสินทรัพย์", zh: "生成素材" },
        "Generate Image": { en: "Generate Image", ja: "画像を生成", th: "สร้างรูปภาพ", zh: "生成图片" },
        "Generate Video": { en: "Generate Video", ja: "動画を生成", th: "สร้างวิดีโอ", zh: "生成视频" },
        "Generate content with AI and publish across all connected social channels.": { en: "Generate content with AI and publish across all connected social channels.", ja: "AIでコンテンツを生成し、接続されたすべてのソーシャルチャネルに公開します。", th: "สร้างเนื้อหาด้วย AI และเผยแพร่ในทุกช่องทางโซเชียลที่เชื่อมต่อ", zh: "使用AI生成内容并发布到所有已连接的社交渠道。" },
        "Generate images, banners, and social media kits with AI.": { en: "Generate images, banners, and social media kits with AI.", ja: "AIで画像、バナー、ソーシャルメディアキットを生成。", th: "สร้างรูปภาพ แบนเนอร์ และชุดโซเชียลมีเดียด้วย AI", zh: "使用AI生成图片、横幅和社交媒体套件。" },
        "Generated Text": { en: "Generated Text", ja: "生成されたテキスト", th: "ข้อความที่สร้างขึ้น", zh: "生成的文本" },
        "Generation Method:": { en: "Generation Method:", ja: "生成方法：", th: "วิธีการสร้าง:", zh: "生成方式：" },
        "Guardian KL": { en: "Guardian KL", ja: "ガーディアン KL", th: "การ์เดียน KL", zh: "Guardian KL" },
        "Health Concern": { en: "Health Concern", ja: "健康上の懸念", th: "ความกังวลด้านสุขภาพ", zh: "健康顾虑" },
        "Family Table": { en: "Family Table", ja: "ファミリーテーブルの健康", th: "สุขภาพหัวใจ", zh: "家庭餐桌健康" },
        "Hi Sarah! 🐟 We're so glad you love our Wanchai Ferry Dumplings packs! They're currently rolling out to Guardian stores across KL and Selangor. You can also order directly through our Partner Portal with exclusive partner pricing. Would you like us to notify you when they arrive at your nearest store? Just drop us a DM with your postcode! 📍": { en: "Hi Sarah! 🐟 We're so glad you love our Wanchai Ferry Dumplings packs! They're currently rolling out to Guardian stores across KL and Selangor. You can also order directly through our Partner Portal with exclusive partner pricing. Would you like us to notify you when they arrive at your nearest store? Just drop us a DM with your postcode! 📍", ja: "こんにちはSarahさん！🐟 フィッシュオイルカプセルを気に入っていただけて嬉しいです！現在、KLとSelangorのGuardian店舗に展開中です。パートナーポータルからも独占パートナー価格で直接注文可能です。お近くの店舗に入荷した際にお知らせしますか？郵便番号をDMで送ってください！📍", th: "สวัสดี Sarah! 🐟 ดีใจมากที่คุณชอบแคปซูลน้ำมันปลาของเรา! ตอนนี้กำลังวางจำหน่ายที่ร้าน Guardian ทั่ว KL และ Selangor คุณยังสั่งซื้อโดยตรงผ่านพอร์ทัลพันธมิตรของเราได้ในราคาพิเศษสำหรับพันธมิตร ต้องการให้เราแจ้งเตือนเมื่อสินค้ามาถึงร้านใกล้บ้านคุณหรือไม่? ส่งรหัสไปรษณีย์ทาง DM มาได้เลย! 📍", zh: "嗨 Sarah！🐟 很高兴您喜欢我们的湾仔码头水饺包装！目前正在KL和雪兰莪的Guardian门店上架。您也可以通过合作伙伴门户以独家合作价格直接订购。您希望我们在到货时通知您吗？请私信发送您的邮编！📍" },
        "Hi! I can help you create social media content, analyze campaign performance, or generate reply suggestions. What would you like to do?": { en: "Hi! I can help you create social media content, analyze campaign performance, or generate reply suggestions. What would you like to do?", ja: "こんにちは！ソーシャルメディアコンテンツの作成、キャンペーン効果の分析、返信提案の生成などお手伝いできます。何をしますか？", th: "สวัสดี! ฉันสามารถช่วยคุณสร้างเนื้อหาโซเชียลมีเดีย วิเคราะห์ประสิทธิภาพแคมเปญ หรือสร้างคำแนะนำการตอบกลับ คุณอยากทำอะไร?", zh: "嗨！我可以帮您创建社交媒体内容、分析活动效果或生成回复建议。您想做什么？" },
        "Holiday Seasonal occasion Campaign": { en: "Holiday Seasonal occasion Campaign", ja: "ホリデー季节场景キャンペーン", th: "แคมเปญโอกาสตามฤดูกาลช่วงวันหยุด", zh: "节日季节场景活动" },
        "Hong Kong": { en: "Hong Kong", ja: "香港", th: "ฮ่องกง", zh: "香港" },
        "How to plan, execute, and measure seasonal campaigns across all channels.": { en: "How to plan, execute, and measure seasonal campaigns across all channels.", ja: "すべてのチャネルで季節キャンペーンを計画、実行、測定する方法。", th: "วิธีวางแผน ดำเนินการ และวัดผลแคมเปญตามฤดูกาลในทุกช่องทาง", zh: "如何在所有渠道规划、执行和衡量季节性活动。" },
        "How to respond to common objections about price, effectiveness, and competition.": { en: "How to respond to common objections about price, effectiveness, and competition.", ja: "価格、効果、競合に関する一般的な異議への対応方法。", th: "วิธีตอบสนองต่อข้อคัดค้านทั่วไปเกี่ยวกับราคา ประสิทธิภาพ และคู่แข่ง", zh: "如何回应关于价格、效果和竞争的常见异议。" },
        "If left empty, the first 20 characters of the content will be used automatically.": { en: "If left empty, the first 20 characters of the content will be used automatically.", ja: "空白の場合、コンテンツの最初の20文字が自動的に使用されます。", th: "หากเว้นว่างไว้ 20 ตัวอักษรแรกของเนื้อหาจะถูกใช้อัตโนมัติ", zh: "如果留空，将自动使用内容的前20个字符。" },
        "Image Count": { en: "Image Count", ja: "画像数", th: "จำนวนรูปภาพ", zh: "图片数量" },
        "Image Size": { en: "Image Size", ja: "画像サイズ", th: "ขนาดรูปภาพ", zh: "图片尺寸" },
        "Images 25%": { en: "Images 25%", ja: "画像 25%", th: "รูปภาพ 25%", zh: "图片 25%" },
        "Images expire after 1 hour. Download promptly.": { en: "Images expire after 1 hour. Download promptly.", ja: "画像は1時間後に期限切れとなります。お早めにダウンロードしてください。", th: "รูปภาพหมดอายุภายใน 1 ชั่วโมง กรุณาดาวน์โหลดโดยเร็ว", zh: "图片将在1小时后过期。请及时下载。" },
        "Seasonal occasion Boost": { en: "Seasonal occasion Boost", ja: "季节场景ブースト", th: "บูสต์โอกาสตามฤดูกาล", zh: "季节场景提升" },
        "Seasonal occasion Campaign Banner": { en: "Seasonal occasion Campaign Banner", ja: "季节场景キャンペーンバナー", th: "แบนเนอร์แคมเปญโอกาสตามฤดูกาล", zh: "季节场景活动横幅" },
        "Seasonal occasion Month": { en: "Seasonal occasion Month", ja: "季节场景月間", th: "เดือนโอกาสตามฤดูกาล", zh: "季节场景月" },
        "Seasonal occasion Month 2024": { en: "Seasonal occasion Month 2024", ja: "季节场景月間 2024", th: "เดือนโอกาสตามฤดูกาล 2024", zh: "季节场景月 2024" },
        "Seasonal occasion Seekers": { en: "Seasonal occasion Seekers", ja: "季节场景機能を求める方", th: "ผู้ที่มองหาโอกาสตามฤดูกาล", zh: "季节场景追求者" },
        "Intelligently extract text content": { en: "Intelligently extract text content", ja: "テキストコンテンツをインテリジェントに抽出", th: "แยกข้อความออกมาอย่างชาญฉลาด", zh: "智能提取文本内容" },
        "Jessica Tan": { en: "Jessica Tan", ja: "ジェシカ・タン", th: "เจสสิกา แทน", zh: "杰西卡·谭" },
        "Jul 15 – Jul 20": { en: "Jul 15 – Jul 20", ja: "7月15日 – 7月20日", th: "15 ก.ค. – 20 ก.ค.", zh: "7月15日 – 7月20日" },
        "Jun 1 – Jun 30": { en: "Jun 1 – Jun 30", ja: "6月1日 – 6月30日", th: "1 มิ.ย. – 30 มิ.ย.", zh: "6月1日 – 6月30日" },
        "Just now": { en: "Just now", ja: "たった今", th: "เมื่อสักครู่", zh: "刚刚" },
        "Just now · RedNote": { en: "Just now · RedNote", ja: "たった今 · RedNote", th: "เมื่อสักครู่ · RedNote", zh: "刚刚 · 小红书" },
        "Keyframes expire after 1 hour. Download promptly.": { en: "Keyframes expire after 1 hour. Download promptly.", ja: "キーフレームは1時間後に期限切れとなります。お早めにダウンロードしてください。", th: "เฟรมคีย์หมดอายุภายใน 1 ชั่วโมง กรุณาดาวน์โหลดโดยเร็ว", zh: "关键帧将在1小时后过期。请及时下载。" },
        "Kuala Lumpur": { en: "Kuala Lumpur", ja: "クアラルンプール", th: "กัวลาลัมเปอร์", zh: "吉隆坡" },
        "Length:": { en: "Length:", ja: "長さ：", th: "ความยาว:", zh: "时长：" },
        "Li Mei": { en: "Li Mei", ja: "リー・メイ", th: "หลี่ เหม่ย", zh: "李梅" },
        "Life Stage": { en: "Life Stage", ja: "ライフステージ", th: "ช่วงชีวิต", zh: "人生阶段" },
        "London, UK": { en: "London, UK", ja: "ロンドン、イギリス", th: "ลอนดอน, สหราชอาณาจักร", zh: "伦敦, 英国" },
        "Long (~60 seconds)": { en: "Long (~60 seconds)", ja: "長い（約60秒）", th: "ยาว (~60 วินาที)", zh: "长（约60秒）" },
        "Manage all your marketing campaigns.": { en: "Manage all your marketing campaigns.", ja: "すべてのマーケティングキャンペーンを管理します。", th: "จัดการแคมเปญการตลาดทั้งหมดของคุณ", zh: "管理您的所有营销活动。" },
        "Manage and respond to customer inquiries across channels.": { en: "Manage and respond to customer inquiries across channels.", ja: "すべてのチャネルでの顧客問い合わせを管理し、対応します。", th: "จัดการและตอบกลับข้อสอบถามของลูกค้าในทุกช่องทาง", zh: "管理和回复跨渠道的客户咨询。" },
        "Manage tags for content categorization, segmentation, and targeting.": { en: "Manage tags for content categorization, segmentation, and targeting.", ja: "コンテンツの分類、セグメンテーション、ターゲティングのためのタグ管理。", th: "จัดการแท็กสำหรับการจัดหมวดหมู่ แบ่งกลุ่ม และกำหนดกลุ่มเป้าหมายของเนื้อหา", zh: "管理用于内容分类、细分和定向的标签。" },
        "Mar 1 – Apr 9": { en: "Mar 1 – Apr 9", ja: "3月1日 – 4月9日", th: "1 มี.ค. – 9 เม.ย.", zh: "3月1日 – 4月9日" },
        "Material Source:": { en: "Material Source:", ja: "素材ソース：", th: "แหล่งที่มาของเนื้อหา:", zh: "素材来源：" },
        "Material from links/Word documents": { en: "Material from links/Word documents", ja: "リンク/Word文書からの素材", th: "เนื้อหาจากลิงก์/เอกสาร Word", zh: "来自链接/Word文档的素材" },
        "Medium (~30 seconds)": { en: "Medium (~30 seconds)", ja: "中程度（約30秒）", th: "ปานกลาง (~30 วินาที)", zh: "中等（约30秒）" },
        "Mega Sale Start": { en: "Mega Sale Start", ja: "メガセール開始", th: "เริ่มมหกรรมลดราคา", zh: "大促开始" },
        "Men's Health": { en: "Men's Health", ja: "男性の健康", th: "สุขภาพผู้ชาย", zh: "男性健康" },
        "Men's Everyday enjoyment": { en: "Men's Everyday enjoyment", ja: "男性の健康", th: "สุขภาพผู้ชาย", zh: "男性健康" },
        "Men's Everyday enjoyment Routine": { en: "Men's Everyday enjoyment Routine", ja: "男性の健康ルーティン", th: "กิจวัตรสุขภาพผู้ชาย", zh: "男性餐食与甜品日常" },
        "Mentions of seasonal occasion products increased 34% this month. Consider boosting Häagen-Dazs Mini Cup and Zinc content.": { en: "Mentions of seasonal occasion products increased 34% this month. Consider boosting Häagen-Dazs Mini Cup and Zinc content.", ja: "今月、季节场景製品への言及が34%増加しました。プロダクトCと亜鉛のコンテンツを強化することを検討してください。", th: "การกล่าวถึงผลิตภัณฑ์โอกาสตามฤดูกาลเพิ่มขึ้น 34% ในเดือนนี้ พิจารณาเพิ่มเนื้อหาผลิตภัณฑ์ C และสังกะสี", zh: "本月提及季节场景产品的比例增加了34%。考虑增加哈根达斯迷你杯和锌的内容。" },
        "Mid-Year Mega Sale": { en: "Mid-Year Mega Sale", ja: "年中海セール", th: "มหกรรมลดราคากลางปี", zh: "年中大促" },
        "Monitor and respond to comments and messages across all channels.": { en: "Monitor and respond to comments and messages across all channels.", ja: "すべてのチャネルでのコメントとメッセージを監視し、対応します。", th: "ตรวจสอบและตอบกลับความคิดเห็นและข้อความในทุกช่องทาง", zh: "监控并回复所有渠道的评论和消息。" },
        "My Library": { en: "My Library", ja: "マイライブラリ", th: "คลังของฉัน", zh: "我的库" },
        "Natural Remedies for Better Sleep": { en: "Natural Remedies for Better Sleep", ja: "良い睡眠のための自然療法", th: "วิธีธรรมชาติเพื่อการนอนหลับที่ดีขึ้น", zh: "改善睡眠的食品创新" },
        "New Customers": { en: "New Customers", ja: "新規顧客", th: "ลูกค้าใหม่", zh: "新客户" },
        "New Today": { en: "New Today", ja: "本日の新規", th: "ใหม่วันนี้", zh: "今日新增" },
        "New Total": { en: "New Total", ja: "新規合計", th: "ยอดใหม่รวม", zh: "新用户总计" },
        "New Users": { en: "New Users", ja: "新規ユーザー", th: "ผู้ใช้ใหม่", zh: "新用户" },
        "Next →": { en: "Next →", ja: "次へ →", th: "ถัดไป →", zh: "下一页 →" },
        "No copyright material": { en: "No copyright material", ja: "著作権フリー素材", th: "เนื้อหาปลอดลิขสิทธิ์", zh: "无版权素材" },
        "Nov 2024": { en: "Nov 2024", ja: "2024年11月", th: "พ.ย. 2024", zh: "2024年11月" },
        "Objection Handling": { en: "Objection Handling", ja: "異議処理", th: "การจัดการข้อคัดค้าน", zh: "异议处理" },
        "Oct 2024": { en: "Oct 2024", ja: "2024年10月", th: "ต.ค. 2024", zh: "2024年10月" },
        "Open Playbook →": { en: "Open Playbook →", ja: "プレイブックを開く →", th: "เปิดคู่มือ →", zh: "打开手册 →" },
        "Opportunity: Celebration": { en: "Opportunity: Celebration", ja: "機会：ギフト", th: "โอกาส: การตั้งครรภ์", zh: "机会：礼赠场景" },
        "Orange slices + General Mills bottle on wooden table": { en: "Orange slices + General Mills bottle on wooden table", ja: "木製テーブルの上にオレンジのスライスとGeneral Millsボトル", th: "ส้มหั่น + ขวด General Mills บนโต๊ะไม้", zh: "木制桌面上的橙份与General Mills瓶子" },
        "Organic: 1,000 | Paid: 1,200": { en: "Organic: 1,000 | Paid: 1,200", ja: "オーガニック: 1,000 | 有料: 1,200", th: "ออร์แกนิก: 1,000 | ชำระเงิน: 1,200", zh: "自然流量: 1,000 | 付费: 1,200" },
        "Original Comment": { en: "Original Comment", ja: "元のコメント", th: "ความคิดเห็นต้นฉบับ", zh: "原始评论" },
        "Other Markets — City Breakdown": { en: "Other Markets — City Breakdown", ja: "その他の市場 — 都市別内訳", th: "ตลาดอื่น ๆ — แยกตามเมือง", zh: "其他市场 — 城市细分" },
        "Overview of all your brand assets and AI-generated content.": { en: "Overview of all your brand assets and AI-generated content.", ja: "すべてのブランドアセットとAI生成コンテンツの概要。", th: "ภาพรวมของสินทรัพย์แบรนด์และเนื้อหาที่สร้างโดย AI ทั้งหมดของคุณ", zh: "所有品牌资产和AI生成内容的概览。" },
        "Pass 30%": { en: "Pass 30%", ja: "合格 30%", th: "ผ่าน 30%", zh: "通过 30%" },
        "Platform Style": { en: "Platform Style", ja: "プラットフォームスタイル", th: "สไตล์แพลตฟอร์ม", zh: "平台风格" },
        "Platinum Partner": { en: "Platinum Partner", ja: "プラチナパートナー", th: "พันธมิตรระดับแพลทินัม", zh: "白金合作伙伴" },
        "Positive Review Reply": { en: "Positive Review Reply", ja: "ポジティブレビュー返信", th: "การตอบกลับรีวิวเชิงบวก", zh: "好评回复" },
        "Positive Sentiment": { en: "Positive Sentiment", ja: "ポジティブ感情", th: "ความรู้สึกเชิงบวก", zh: "正面情绪" },
        "Pre-built reply templates for common scenarios.": { en: "Pre-built reply templates for common scenarios.", ja: "一般的なシナリオ用の事前構築された返信テンプレート。", th: "เทมเพลตการตอบกลับสำเร็จรูปสำหรับสถานการณ์ทั่วไป", zh: "常见场景的预置回复模板。" },
        "Celebration Care": { en: "Celebration Care", ja: "ギフトケア", th: "การดูแลตั้งครรภ์", zh: "礼赠场景护理" },
        "Celebration Gold has high satisfaction but low awareness. Increase targeted content for expectant mothers.": { en: "Celebration Gold has high satisfaction but low awareness. Increase targeted content for expectant mothers.", ja: "Celebration Goldは満足度が高いが認知度が低い。妊婦向けのターゲットコンテンツを増やしてください。", th: "Celebration Gold มีความพึงพอใจสูงแต่การรับรู้ต่ำ เพิ่มเนื้อหาเป้าหมายสำหรับคุณแม่ตั้งครรภ์", zh: "Celebration Gold满意度高但认知度低。增加针对准妈妈的定向内容。" },
        "Celebration Nutrition Guide": { en: "Celebration Nutrition Guide", ja: "ギフト栄養ガイド", th: "คู่มือโภชนาการระหว่างตั้งครรภ์", zh: "礼赠场景营养指南" },
        "Preview:": { en: "Preview:", ja: "プレビュー：", th: "ตัวอย่าง:", zh: "预览：" },
        "Product Inquiry": { en: "Product Inquiry", ja: "製品問い合わせ", th: "สอบถามสินค้า", zh: "产品咨询" },
        "Product Introduction": { en: "Product Introduction", ja: "製品紹介", th: "การแนะนำสินค้า", zh: "产品介绍" },
        "Product Quality": { en: "Product Quality", ja: "製品品質", th: "คุณภาพสินค้า", zh: "产品质量" },
        "Product Video – Wanchai Ferry Dumplings": { en: "Product Video – Wanchai Ferry Dumplings", ja: "製品動画 – フィッシュオイル", th: "วิดีโอสินค้า – น้ำมันปลา", zh: "产品视频 – 湾仔码头水饺" },
        "Prohibited Medical Claims": { en: "Prohibited Medical Claims", ja: "禁止された医療表示", th: "ข้อความอ้างอิงทางการแพทย์ที่ห้ามใช้", zh: "禁止的医疗声明" },
        "Published Content": { en: "Published Content", ja: "公開済みコンテンツ", th: "เนื้อหาที่เผยแพร่แล้ว", zh: "已发布内容" },
        "Push Settings": { en: "Push Settings", ja: "プッシュ設定", th: "การตั้งค่าการ push", zh: "推送设置" },
        "Push Successful! 🎉": { en: "Push Successful! 🎉", ja: "プッシュ成功！🎉", th: "Push สำเร็จ! 🎉", zh: "推送成功！🎉" },
        "Q: Are General Mills products halal certified?": { en: "Q: Are General Mills products halal certified?", ja: "Q: General Mills製品はハラル認証を受けていますか？", th: "Q: ผลิตภัณฑ์ General Mills ได้รับการรับรองฮาลาลหรือไม่?", zh: "Q: General Mills产品是否获得清真认证？" },
        "Q: Can I take multiple products together?": { en: "Q: Can I take multiple products together?", ja: "Q: 複数のプロダクトメントを一緒に摂取できますか？", th: "Q: ฉันสามารถทานอาหารเสริมหลายชนิดพร้อมกันได้หรือไม่?", zh: "Q: 我可以同时享用多种食品组合吗？" },
        "Q: Why is General Mills more expensive than local brands?": { en: "Q: Why is General Mills more expensive than local brands?", ja: "Q: General Millsはなぜ地元ブランドより高いのですか？", th: "Q: ทำไม General Mills ถึงแพงกว่าแบรนด์ท้องถิ่น?", zh: "Q: 为什么General Mills比本地品牌更贵？" },
        "Quality Control": { en: "Quality Control", ja: "品質管理", th: "การควบคุมคุณภาพ", zh: "质量控制" },
        "Quality Rules": { en: "Quality Rules", ja: "品質ルール", th: "กฎคุณภาพ", zh: "质量规则" },
        "Ramadan Everyday enjoyment": { en: "Ramadan Everyday enjoyment", ja: "ラマダンウェルネス", th: "สุขภาพรอมฎอน", zh: "斋月健康" },
        "Rank": { en: "Rank", ja: "順位", th: "อันดับ", zh: "排名" },
        "Ready-to-use scripts for every sales scenario.": { en: "Ready-to-use scripts for every sales scenario.", ja: "あらゆる販売シナリオですぐに使えるスクリプト。", th: "สคริปต์พร้อมใช้สำหรับทุกสถานการณ์การขาย", zh: "适用于所有销售场景的即用脚本。" },
        "Real-time overview of your social media performance across all connected channels.": { en: "Real-time overview of your social media performance across all connected channels.", ja: "接続されたすべてのチャネルでのソーシャルメディアパフォーマンスのリアルタイム概要。", th: "ภาพรวมแบบเรียลไทม์ของประสิทธิภาพโซเชียลมีเดียของคุณในทุกช่องทางที่เชื่อมต่อ", zh: "所有已连接渠道的社交媒体表现的实时概览。" },
        "Recent Assets": { en: "Recent Assets", ja: "最近のアセット", th: "สินทรัพย์ล่าสุด", zh: "最近素材" },
        "Repeat Buyers": { en: "Repeat Buyers", ja: "リピート購入者", th: "ลูกค้าซื้อซ้ำ", zh: "回头客" },
        "Reply History": { en: "Reply History", ja: "返信履歴", th: "ประวัติการตอบกลับ", zh: "回复历史" },
        "Reply Inbox": { en: "Reply Inbox", ja: "返信受信箱", th: "กล่องจดหมายตอบกลับ", zh: "回复收件箱" },
        "Reply Templates": { en: "Reply Templates", ja: "返信テンプレート", th: "เทมเพลตการตอบกลับ", zh: "回复模板" },
        "Reply suggestion": { en: "Reply suggestion", ja: "返信提案", th: "คำแนะนำการตอบกลับ", zh: "回复建议" },
        "Reply template for delivery status and tracking inquiries.": { en: "Reply template for delivery status and tracking inquiries.", ja: "配送状況と追跡問い合わせ用の返信テンプレート。", th: "เทมเพลตการตอบกลับสำหรับสถานะการจัดส่งและการติดตามพัสดุ", zh: "配送状态和物流查询的回复模板。" },
        "Resolution:": { en: "Resolution:", ja: "解像度：", th: "ความละเอียด:", zh: "分辨率：" },
        "Returning Total": { en: "Returning Total", ja: "リピート合計", th: "ยอดกลับมารวม", zh: "回访用户总计" },
        "Returning Users": { en: "Returning Users", ja: "リピートユーザー", th: "ผู้ใช้กลับมา", zh: "回访用户" },
        "Review 35%": { en: "Review 35%", ja: "レビュー 35%", th: "รีวิว 35%", zh: "审核 35%" },
        "Rising Trend: Seasonal occasion": { en: "Rising Trend: Seasonal occasion", ja: "上昇トレンド：季节场景", th: "แนวโน้มขาขึ้น: โอกาสตามฤดูกาล", zh: "上升趋势：季节场景" },
        "Rule Name": { en: "Rule Name", ja: "ルール名", th: "ชื่อกฎ", zh: "规则名称" },
        "Sales Scripts": { en: "Sales Scripts", ja: "営業スクリプト", th: "สคริปต์การขาย", zh: "销售脚本" },
        "Sales Toolkit": { en: "Sales Toolkit", ja: "営業ツールキット", th: "ชุดเครื่องมือการขาย", zh: "销售工具包" },
        "Sarah Chen": { en: "Sarah Chen", ja: "サラ・チェン", th: "ซาร่า เฉิน", zh: "萨拉·陈" },
        "Sarah L.": { en: "Sarah L.", ja: "サラ・L.", th: "ซาร่า แอล", zh: "萨拉·L." },
        "Sarah Lim": { en: "Sarah Lim", ja: "サラ・リム", th: "ซาร่า ลิม", zh: "萨拉·林" },
        "Scripts for suggesting complementary products and bundle deals.": { en: "Scripts for suggesting complementary products and bundle deals.", ja: "相補的な製品とバンドルディールを提案するためのスクリプト。", th: "สคริปต์สำหรับแนะนำสินค้าที่เสริมกันและดีลชุดสินค้า", zh: "建议互补产品和组合优惠的脚本。" },
        "Senior Health": { en: "Senior Health", ja: "高齢者の健康", th: "สุขภาพผู้สูงอายุ", zh: "老年人健康" },
        "Sensitive Words": { en: "Sensitive Words", ja: "禁止語", th: "คำที่ละเอียดอ่อน", zh: "敏感词" },
        "Sentiment Trend": { en: "Sentiment Trend", ja: "感情トレンド", th: "แนวโน้มความรู้สึก", zh: "情绪趋势" },
        "Sep 2024": { en: "Sep 2024", ja: "2024年9月", th: "ก.ย. 2024", zh: "2024年9月" },
        "Set up a new marketing campaign.": { en: "Set up a new marketing campaign.", ja: "新しいマーケティングキャンペーンを設定します。", th: "ตั้งค่าแคมเปญการตลาดใหม่", zh: "设置一个新的营销活动。" },
        "Shipping Question": { en: "Shipping Question", ja: "配送に関する質問", th: "คำถามเกี่ยวกับการจัดส่ง", zh: "配送问题" },
        "Short (~15 seconds)": { en: "Short (~15 seconds)", ja: "短い（約15秒）", th: "สั้น (~15 วินาที)", zh: "短（约15秒）" },
        "Smart + manual tag creation for content categorization, application scenarios, customer segments, and marketing campaigns. Build a unified taxonomy across all channels.": { en: "Smart + manual tag creation for content categorization, application scenarios, customer segments, and marketing campaigns. Build a unified taxonomy across all channels.", ja: "コンテンツ分類、アプリケーションシナリオ、顧客セグメント、マーケティングキャンペーンのためのスマート+手動タグ作成。すべてのチャネルで統一された分類体系を構築します。", th: "การสร้างแท็กอัจฉริยะ + ด้วยตนเองสำหรับการจัดหมวดหมู่เนื้อหา สถานการณ์การใช้งาน กลุ่มลูกค้า และแคมเปญการตลาด สร้างระบบจัดหมวดหมู่ที่เป็นเอกภาพในทุกช่องทาง", zh: "智能+手动创建标签，用于内容分类、应用场景、客户细分和营销活动。在所有渠道构建统一的分类体系。" },
        "Social Content Platform Performance": { en: "Social Content Platform Performance", ja: "ソーシャルコンテンツプラットフォーム効果", th: "ประสิทธิภาพแพลตฟอร์มเนื้อหาสังคมออนไลน์", zh: "社交内容平台表现" },
        "Social Hub": { en: "Social Hub", ja: "ソーシャルハブ", th: "ศูนย์สังคมออนไลน์", zh: "社交中心" },
        "Social Hub | GENERAL MILLS® Partner Portal": { en: "Social Hub | GENERAL MILLS® Partner Portal", ja: "ソーシャルハブ | GENERAL MILLS® パートナーポータル", th: "ศูนย์สังคมออนไลน์ | พอร์ทัลพันธมิตร GENERAL MILLS®", zh: "社交中心 | GENERAL MILLS® 合作伙伴门户" },
        "Social Inbox": { en: "Social Inbox", ja: "ソーシャル受信箱", th: "กล่องจดหมายสังคมออนไลน์", zh: "社交收件箱" },
        "Social Media Kit – Q4": { en: "Social Media Kit – Q4", ja: "ソーシャルメディアキット – Q4", th: "ชุดโซเชียลมีเดีย – ไตรมาส 4", zh: "社交媒体套件 – Q4" },
        "South Korea": { en: "South Korea", ja: "韓国", th: "เกาหลีใต้", zh: "韩国" },
        "South Korea — City Breakdown": { en: "South Korea — City Breakdown", ja: "韓国 — 都市別内訳", th: "เกาหลีใต้ — แยกตามเมือง", zh: "韩国 — 城市细分" },
        "Southeast Asia": { en: "Southeast Asia", ja: "東南アジア", th: "เอเชียตะวันออกเฉียงใต้", zh: "东南亚" },
        "Southeast Asia — City Breakdown": { en: "Southeast Asia — City Breakdown", ja: "東南アジア — 都市別内訳", th: "เอเชียตะวันออกเฉียงใต้ — แยกตามเมือง", zh: "东南亚 — 城市细分" },
        "Standard opening script for introducing General Mills products to new customers.": { en: "Standard opening script for introducing General Mills products to new customers.", ja: "新規顧客へのGeneral Mills製品紹介用標準オープニングスクリプト。", th: "สคริปต์เปิดตัวมาตรฐานสำหรับแนะนำสินค้า General Mills ให้กับลูกค้าใหม่", zh: "向新客户介绍General Mills产品的标准开场脚本。" },
        "Standard response for product questions and availability checks.": { en: "Standard response for product questions and availability checks.", ja: "製品に関する質問と在庫確認の標準返信。", th: "คำตอบมาตรฐานสำหรับคำถามเกี่ยวกับสินค้าและการตรวจสอบความพร้อมจำหน่าย", zh: "产品问题和库存检查的标准回复。" },
        "Stay Here": { en: "Stay Here", ja: "ここに留まる", th: "อยู่ที่นี่", zh: "留在此页" },
        "Step-by-step guides for marketing and sales processes.": { en: "Step-by-step guides for marketing and sales processes.", ja: "マーケティングと営業プロセスのステップバイステップガイド。", th: "คู่มือทีละขั้นตอนสำหรับกระบวนการการตลาดและการขาย", zh: "营销和销售流程的逐步指南。" },
        "Stylized world map SVG": { en: "Stylized world map SVG", ja: "スタイライズされた世界地図 SVG", th: "แผนที่โลกแบบสไตล์ SVG", zh: "风格化世界地图 SVG" },
        "Sync CDP Tags": { en: "Sync CDP Tags", ja: "CDPタグを同期", th: "ซิงค์แท็ก CDP", zh: "同步CDP标签" },
        "Tag": { en: "Tag", ja: "タグ", th: "แท็ก", zh: "标签" },
        "Tag Name": { en: "Tag Name", ja: "タグ名", th: "ชื่อแท็ก", zh: "标签名称" },
        "Target Platforms": { en: "Target Platforms", ja: "対象プラットフォーム", th: "แพลตฟอร์มเป้าหมาย", zh: "目标平台" },
        "Text + Image + Carousel · AI-generated": { en: "Text + Image + Carousel · AI-generated", ja: "テキスト + 画像 + カルーセル · AI生成", th: "ข้อความ + รูปภาพ + แคร์รูเซล · สร้างโดย AI", zh: "文本 + 图片 + 轮播 · AI生成" },
        "Text + Image · AI-generated": { en: "Text + Image · AI-generated", ja: "テキスト + 画像 · AI生成", th: "ข้อความ + รูปภาพ · สร้างโดย AI", zh: "文本 + 图片 · AI生成" },
        "Text + Image · Auto-generated": { en: "Text + Image · Auto-generated", ja: "テキスト + 画像 · 自動生成", th: "ข้อความ + รูปภาพ · สร้างอัตโนมัติ", zh: "文本 + 图片 · 自动生成" },
        "Text 16%": { en: "Text 16%", ja: "テキスト 16%", th: "ข้อความ 16%", zh: "文本 16%" },
        "Text Content": { en: "Text Content", ja: "テキストコンテンツ", th: "เนื้อหาข้อความ", zh: "文本内容" },
        "Text · AI-generated": { en: "Text · AI-generated", ja: "テキスト · AI生成", th: "ข้อความ · สร้างโดย AI", zh: "文本 · AI生成" },
        "Text · Scheduled": { en: "Text · Scheduled", ja: "テキスト · 予約済み", th: "ข้อความ · ตั้งเวลา", zh: "文本 · 已排期" },
        "Title:": { en: "Title:", ja: "タイトル：", th: "ชื่อเรื่อง:", zh: "标题：" },
        "Tokyo, JP": { en: "Tokyo, JP", ja: "東京、日本", th: "โตเกียว, ญี่ปุ่น", zh: "东京, 日本" },
        "Top Tags by Content Volume": { en: "Top Tags by Content Volume", ja: "コンテンツ量別トップタグ", th: "แท็กยอดนิยมตามปริมาณเนื้อหา", zh: "按内容量排名标签" },
        "Top Themes": { en: "Top Themes", ja: "トップテーマ", th: "ธีมยอดนิยม", zh: "热门主题" },
        "Total Assets": { en: "Total Assets", ja: "総アセット数", th: "สินทรัพย์ทั้งหมด", zh: "总素材数" },
        "Total Content Pieces": { en: "Total Content Pieces", ja: "総コンテンツ数", th: "จำนวนเนื้อหาทั้งหมด", zh: "总内容数" },
        "Total Engagement": { en: "Total Engagement", ja: "総エンゲージメント", th: "การมีส่วนร่วมทั้งหมด", zh: "总互动量" },
        "Total Impressions": { en: "Total Impressions", ja: "総インプレッション", th: "จำนวนการแสดงผลทั้งหมด", zh: "总展示量" },
        "Total Mentions": { en: "Total Mentions", ja: "総言及数", th: "จำนวนการกล่าวถึงทั้งหมด", zh: "总提及数" },
        "Total Quality Checks This Month": { en: "Total Quality Checks This Month", ja: "今月の品質チェック総数", th: "การตรวจสอบคุณภาพทั้งหมดในเดือนนี้", zh: "本月质量检查总数" },
        "Total Users": { en: "Total Users", ja: "総ユーザー数", th: "ผู้ใช้ทั้งหมด", zh: "总用户数" },
        "Track all AI-generated replies used across channels.": { en: "Track all AI-generated replies used across channels.", ja: "すべてのチャネルで使用されたAI生成返信を追跡します。", th: "ติดตามการตอบกลับที่สร้างโดย AI ที่ใช้ในทุกช่องทาง", zh: "追踪所有渠道使用的AI生成回复。" },
        "Trending Channel Tags": { en: "Trending Channel Tags", ja: "トレンドチャネルタグ", th: "แท็กช่องทางยอดนิยม", zh: "热门渠道标签" },
        "Understand what your customers are saying across all channels.": { en: "Understand what your customers are saying across all channels.", ja: "すべてのチャネルでお客様が何を言っているかを理解します。", th: "เข้าใจว่าลูกค้าของคุณกำลังพูดอะไรในทุกช่องทาง", zh: "了解您的客户在所有渠道上的反馈。" },
        "Unified inbox for all customer messages with AI-generated reply suggestions.": { en: "Unified inbox for all customer messages with AI-generated reply suggestions.", ja: "AI生成の返信提案付きのすべての顧客メッセージ用統合受信箱。", th: "กล่องจดหมายรวมสำหรับข้อความลูกค้าทั้งหมด พร้อมคำตอบที่แนะนำโดย AI", zh: "所有客户消息的统一收件箱，附带AI生成的回复建议。" },
        "Use Template": { en: "Use Template", ja: "テンプレートを使用", th: "ใช้เทมเพลต", zh: "使用模板" },
        "VIP Members": { en: "VIP Members", ja: "VIP会員", th: "สมาชิก VIP", zh: "VIP会员" },
        "Video 50%": { en: "Video 50%", ja: "動画 50%", th: "วิดีโอ 50%", zh: "视频 50%" },
        "Video Content": { en: "Video Content", ja: "動画コンテンツ", th: "เนื้อหาวิดีโอ", zh: "视频内容" },
        "View Published →": { en: "View Published →", ja: "公開済みを表示 →", th: "ดูเนื้อหาที่เผยแพร่ →", zh: "查看已发布 →" },
        "View Script →": { en: "View Script →", ja: "スクリプトを表示 →", th: "ดูสคริปต์ →", zh: "查看脚本 →" },
        "View and manage all your marketing campaigns in one calendar.": { en: "View and manage all your marketing campaigns in one calendar.", ja: "すべてのマーケティングキャンペーンを1つのカレンダーで表示・管理します。", th: "ดูและจัดการแคมเปญการตลาดทั้งหมดของคุณในปฏิทินเดียว", zh: "在一个日历中查看和管理您的所有营销活动。" },
        "View →": { en: "View →", ja: "表示 →", th: "ดู →", zh: "查看 →" },
        "Views: 1,200 | Clicks: 1,000": { en: "Views: 1,200 | Clicks: 1,000", ja: "ビュー: 1,200 | クリック: 1,000", th: "ยอดวิว: 1,200 | คลิก: 1,000", zh: "浏览: 1,200 | 点击: 1,000" },
        "Häagen-Dazs Mini Cup + Zinc": { en: "Häagen-Dazs Mini Cup + Zinc", ja: "プロダクトC + 亜鉛", th: "ผลิตภัณฑ์ C + สังกะสี", zh: "哈根达斯迷你杯 + 锌" },
        "Häagen-Dazs Mini Cup Season Tips": { en: "Häagen-Dazs Mini Cup Season Tips", ja: "プロダクトCシーズンのヒント", th: "เคล็ดลับช่วงผลิตภัณฑ์ C", zh: "哈根达斯迷你杯季节小贴士" },
        "Voice of Customer": { en: "Voice of Customer", ja: "顧客の声", th: "เสียงของลูกค้า", zh: "客户之声" },
        "Voice of Customer Dashboard": { en: "Voice of Customer Dashboard", ja: "顧客の声ダッシュボード", th: "แดชบอร์ดเสียงของลูกค้า", zh: "客户之声仪表盘" },
        "W Weibo": { en: "W Weibo", ja: "W Weibo", th: "W Weibo", zh: "W 微博" },
        "Warm thank-you response for positive reviews and testimonials.": { en: "Warm thank-you response for positive reviews and testimonials.", ja: "ポジティブなレビューと推薦文への温かい感謝の返信。", th: "การตอบกลับที่อบอุ่นและขอบคุณสำหรับรีวิวและคำรับรองเชิงบวก", zh: "对好评和推荐信的温暖感谢回复。" },
        "Warning: Price Sensitivity": { en: "Warning: Price Sensitivity", ja: "警告：価格感度", th: "คำเตือน: ความไวต่อราคา", zh: "警告：价格敏感度" },
        "WeChat OA": { en: "WeChat OA", ja: "WeChat OA", th: "WeChat OA", zh: "微信公众号" },
        "Women's Health": { en: "Women's Health", ja: "女性の健康", th: "สุขภาพผู้หญิง", zh: "女性健康" },
        "X / Twitter": { en: "X / Twitter", ja: "X / Twitter", th: "X / Twitter", zh: "X / 推特" },
        "Xmas Day": { en: "Xmas Day", ja: "クリスマス当日", th: "วันคริสต์มาส", zh: "圣诞节" },
        "Your Marketing Copilot": { en: "Your Marketing Copilot", ja: "あなたのマーケティングコパイロット", th: "ผู้ช่วยการตลาดของคุณ", zh: "您的营销副驾驶" },
        "Your content has been successfully published to the selected platforms. You can view and manage it in the Published Content tab.": { en: "Your content has been successfully published to the selected platforms. You can view and manage it in the Published Content tab.", ja: "コンテンツが選択されたプラットフォームに正常に公開されました。公開コンテンツタブで表示・管理できます。", th: "เนื้อหาของคุณได้รับการเผยแพร่สู่แพลตฟอร์มที่เลือกสำเร็จแล้ว คุณสามารถดูและจัดการได้ในแท็บเนื้อหาที่เผยแพร่", zh: "您的内容已成功发布到所选平台。您可以在已发布内容标签中查看和管理。" },
        "Your personal collection of brand assets and templates.": { en: "Your personal collection of brand assets and templates.", ja: "ブランドアセットとテンプレートの個人コレクション。", th: "คอลเลกชันส่วนตัวของสินทรัพย์แบรนด์และเทมเพลต", zh: "您的品牌素材和模板的个人收藏。" },
        "anna_kl": { en: "anna_kl", ja: "アナ_kl", th: "แอนนา_kl", zh: "anna_kl" },
        "f Facebook": { en: "f Facebook", ja: "f フェイスブック", th: "f Facebook", zh: "f Facebook" },
        "householdof3_sg": { en: "householdof3_sg", ja: "マムオブ3_sg", th: "มัมออฟ3_sg", zh: "householdof3_sg" },
        "via Facebook · 2 min ago": { en: "via Facebook · 2 min ago", ja: "Facebook経由 · 2分前", th: "ผ่าน Facebook · 2 นาทีที่แล้ว", zh: "来自 Facebook · 2分钟前" },
        "ไทย": { en: "ไทย", ja: "タイ語", th: "ไทย", zh: "泰语" },
        "← Prev": { en: "← Prev", ja: "← 前へ", th: "← ก่อนหน้า", zh: "← 上一页" },
        "↑ 12% vs last month": { en: "↑ 12% vs last month", ja: "↑ 先月比 12%", th: "↑ เทียบเดือนที่แล้ว 12%", zh: "↑ 环比上月 12%" },
        "↑ 15% vs yesterday": { en: "↑ 15% vs yesterday", ja: "↑ 昨日比 15%", th: "↑ เทียบเมื่อวาน 15%", zh: "↑ 环比昨日 15%" },
        "↑ 18% vs yesterday": { en: "↑ 18% vs yesterday", ja: "↑ 昨日比 18%", th: "↑ เทียบเมื่อวาน 18%", zh: "↑ 环比昨日 18%" },
        "↑ 24% vs last month": { en: "↑ 24% vs last month", ja: "↑ 先月比 24%", th: "↑ เทียบเดือนที่แล้ว 24%", zh: "↑ 环比上月 24%" },
        "↑ 3 vs yesterday": { en: "↑ 3 vs yesterday", ja: "↑ 昨日比 3", th: "↑ เทียบเมื่อวาน 3", zh: "↑ 环比昨日 3" },
        "↑ 3% vs last week": { en: "↑ 3% vs last week", ja: "↑ 先週比 3%", th: "↑ เทียบสัปดาห์ที่แล้ว 3%", zh: "↑ 环比上周 3%" },
        "↑ 42% vs last week": { en: "↑ 42% vs last week", ja: "↑ 先週比 42%", th: "↑ เทียบสัปดาห์ที่แล้ว 42%", zh: "↑ 环比上周 42%" },
        "↑ 5% vs last month": { en: "↑ 5% vs last month", ja: "↑ 先月比 5%", th: "↑ เทียบเดือนที่แล้ว 5%", zh: "↑ 环比上月 5%" },
        "↑ 5% vs yesterday": { en: "↑ 5% vs yesterday", ja: "↑ 昨日比 5%", th: "↑ เทียบเมื่อวาน 5%", zh: "↑ 环比昨日 5%" },
        "↑ 8% vs last month": { en: "↑ 8% vs last month", ja: "↑ 先月比 8%", th: "↑ เทียบเดือนที่แล้ว 8%", zh: "↑ 环比上月 8%" },
        "↑ 8% vs last week": { en: "↑ 8% vs last week", ja: "↑ 先週比 8%", th: "↑ เทียบสัปดาห์ที่แล้ว 8%", zh: "↑ 环比上周 8%" },
        "↓ 2% vs last week": { en: "↓ 2% vs last week", ja: "↓ 先週比 2%", th: "↓ เทียบสัปดาห์ที่แล้ว 2%", zh: "↓ 环比上周 2%" },
        "↻ Regenerate": { en: "↻ Regenerate", ja: "↻ 再生成", th: "↻ สร้างใหม่", zh: "↻ 重新生成" },
        "↻ Replace": { en: "↻ Replace", ja: "↻ 置換", th: "↻ แทนที่", zh: "↻ 替换" },
        "▼ Click to drill down": { en: "▼ Click to drill down", ja: "▼ クリックして詳細を表示", th: "▼ คลิกเพื่อดูรายละเอียด", zh: "▼ 点击查看详情" },
        "♪ TikTok": { en: "♪ TikTok", ja: "♪ TikTok", th: "♪ TikTok", zh: "♪ 抖音/TikTok" },
        "✨ Key Benefits:": {
        en: "✨ Key Benefits:",
        ja: "✨ 主な効果：",
        th: "✨ ประโยชน์หลัก：",
        zh: "✨ 主要功效："
    },
        "✨ Key Benefits: • Supports immune function • Antioxidant protection • Gentle on the stomach": { en: "✨ Key Benefits: • Supports immune function • Antioxidant protection • Gentle on the stomach", ja: "✨ 主な効果：• 季节场景機能をサポート • 抗酸化保護 • 胃に優しい", th: "✨ ประโยชน์หลัก: • สนับสนุนโอกาสตามฤดูกาล • ป้องกันอนุภาคอิสระ • อ่อนโยนต่อกระเพาะ", zh: "✨ 主要功效：• 支持季节场景功能 • 抗氧化保护 • 温和养胃" },
        "小李 everyday enjoyment": { en: "小李 everyday enjoyment", ja: "小李 everyday enjoyment", th: "เสี่ยวหลี่ everyday enjoyment", zh: "小李 everyday enjoyment" },
        "日本語": { en: "日本語", ja: "日本語", th: "ญี่ปุ่น", zh: "日语" },
        "🌿 Discover the Power of food experience Start your everyday enjoyment journey with General Mills! Our scientifically formulated products support seasonal occasion, family-table relevance, and overall vitality. ✨ Special offer for followers — 20% off selected products this week! #General Mills #NaturalHealth #Everyday enjoymentJourney": { en: "🌿 Discover the Power of food experience Start your everyday enjoyment journey with General Mills! Our scientifically formulated products support seasonal occasion, family-table relevance, and overall vitality. ✨ Special offer for followers — 20% off selected products this week! #General Mills #NaturalHealth #Everyday enjoymentJourney", ja: "🌿 自然の健康の力を発見 General Millsでウェルネス旅を始めよう！科学的に開発されたプロダクトメントが季节场景、ファミリーテーブルの健康、そして全体の活力をサポートします。✨ フォロワー特別オファー — 今週の対象商品20%オフ！ #General Mills #NaturalHealth #Everyday enjoymentJourney", th: "🌿 ค้นพบพลังของสุขภาพธรรมชาติ เริ่มต้นการเดินทางสู่สุขภาพที่ดีกับ General Mills! อาหารเสริมที่พัฒนาอย่างเป็นวิทยาศาสตร์สนับสนุนโอกาสตามฤดูกาล สุขภาพหัวใจ และความมีชีวิตชีวาโดยรวม ✨ ข้อเสนอพิเศษสำหรับผู้ติดตาม — ลด 20% สินค้าที่เลือกในสัปดาห์นี้! #General Mills #NaturalHealth #Everyday enjoymentJourney", zh: "🌿 发现自然健康的力量 与General Mills一起开启您的健康之旅！我们科学配制的食品组合支持季节场景、家庭餐桌健康和整体活力。✨ 粉丝专属优惠 — 本周精选商品8折！ #General Mills #NaturalHealth #Everyday enjoymentJourney" },
        "🌿 Discover the Power of food experience with General Mills": { en: "🌿 Discover the Power of food experience with General Mills", ja: "🌿 General Millsで自然の健康の力を発見", th: "🌿 ค้นพบพลังสุขภาพธรรมชาติกับ General Mills", zh: "🌿 与General Mills一起发现自然健康之力" },
        "🎯 Intelligent Tag Management": { en: "🎯 Intelligent Tag Management", ja: "🎯 インテリジェントタグ管理", th: "🎯 การจัดการแท็กอัจฉริยะ", zh: "🎯 智能标签管理" },
        "💬 WeChat": { en: "💬 WeChat", ja: "💬 WeChat", th: "💬 WeChat", zh: "💬 微信" },
        "📕 RedNote": { en: "📕 RedNote", ja: "📕 RedNote", th: "📕 RedNote", zh: "📕 小红书" },
        "📗 Seasonal Campaign Playbook": { en: "📗 Seasonal Campaign Playbook", ja: "📗 季節キャンペーンプレイブック", th: "📗 คู่มือแคมเปญตามฤดูกาล", zh: "📗 季节性活动手册" },
        "📘 New Partner Onboarding": { en: "📘 New Partner Onboarding", ja: "📘 新規パートナーオンボーディング", th: "📘 การต้อนรับพันธมิตรใหม่", zh: "📘 新合作伙伴入职" },
        "📷 Instagram": { en: "📷 Instagram", ja: "📷 インスタグラム", th: "📷 Instagram", zh: "📷 Instagram" },
        "🛒 Now available at all Guardian pharmacies across Malaysia and Singapore. Swipe up to learn more!": { en: "🛒 Now available at all Guardian pharmacies across Malaysia and Singapore. Swipe up to learn more!", ja: "🛒 マレーシアとシンガポールのすべてのGuardian店舗で販売中。詳しくはスワイプアップ！", th: "🛒 วางจำหน่ายแล้วที่ร้าน Guardian ทั่วมาเลเซียและสิงคโปร์ ปัดขึ้นเพื่อดูข้อมูลเพิ่มเติม!", zh: "🛒 现已在马来西亚和新加坡的所有Guardian门店有售。上滑了解更多！" }
    ,
        "Love the new Wanchai Ferry Dumplings packs! When will they be available in KL? I've been looking everywhere but my local Guardian doesn't stock them yet.": { en: "Love the new Wanchai Ferry Dumplings packs! When will they be available in KL? I've been looking everywhere but my local Guardian doesn't stock them yet.", ja: "新しいフィッシュオイルカプセルが気に入りました！KLでいつ購入できますか？どこを探しても見つからず、地元のGuardianにはまだ入荷していないようです。", th: "ชอบแคปซูลน้ำมันปลาตัวใหม่มาก! จะมีขายที่ KL เมื่อไหร่? ฉันหาทั่วทุกที่แต่ร้าน Guardian ในพื้นที่ยังไม่มีเลย", zh: "很喜欢新款湾仔码头水饺包装！什么时候在吉隆坡有售？我到处找但我当地的 Guardian 还没有上架。" },
        "GENERAL MILLS® Partner Portal": { en: "GENERAL MILLS® Partner Portal", ja: "GENERAL MILLS® パートナーポータル", th: "GENERAL MILLS® พอร์ทัลพันธมิตร", zh: "GENERAL MILLS® 合作伙伴门户" },
        "AI-Powered Partner Platform": { en: "AI-Powered Partner Platform", ja: "AI搭載パートナープラットフォーム", th: "แพลตฟอร์มพันธมิตรที่ขับเคลื่อนด้วย AI", zh: "AI 驱动合作伙伴平台" },
        "Empower Your Health Business": { en: "Empower Your Health Business", ja: "あなたの健康ビジネスを強化する", th: "เสริมพลังธุรกิจสุขภาพของคุณ", zh: "赋能您的健康事业" },
        "Everything you need to grow with General Mills — from smart ordering and AI-generated marketing assets to real-time insights and next best actions.": { en: "Everything you need to grow with General Mills — from smart ordering and AI-generated marketing assets to real-time insights and next best actions.", ja: "General Millsと共に成長するために必要なすべて——スマート発注、AI生成マーケティング素材、リアルタイムインサイト、次なる最適アクションまで。", th: "ทุกสิ่งที่คุณต้องการเพื่อเติบโตไปกับ General Mills — ตั้งแต่การสั่งซื้ออัจฉริยะและสินทรัพย์การตลาดที่สร้างด้วย AI ไปจนถึงข้อมูลเชิงลึกแบบเรียลไทม์และการดำเนินการที่ดีที่สุดครั้งต่อไป", zh: "与 General Mills 共同成长所需的一切——从智能订购和 AI 生成的营销素材，到实时洞察和下一步最佳行动。" },
        "Quick Order": { en: "Quick Order", ja: "クイック発注", th: "สั่งซื้อด่วน", zh: "快速订购" },
        "Explore Analytics": { en: "Explore Analytics", ja: "分析を探索する", th: "สำรวจการวิเคราะห์", zh: "探索分析" },
        "Best Seller": { en: "Best Seller", ja: "ベストセラー", th: "สินค้าขายดี", zh: "畅销品" },
        "Wanchai Ferry Dumpling Packmg": { en: "Wanchai Ferry Dumpling Packmg", ja: "Wanchai Ferry Dumpling Packmg", th: "Wanchai Ferry Dumpling Packmg", zh: "湾仔码头水饺 1000mg" },
        "family dinner product for family-table relevance": { en: "family dinner product for family-table relevance", ja: "ファミリーテーブル健康のためのオメガ3プロダクトメント", th: "อาหารเสริมโอเมก้า 3 สำหรับสุขภาพหัวใจ", zh: "家庭餐桌健康 family dinner 食品组合" },
        "/ bottle": { en: " / bottle", ja: " / ボトル", th: " / ขวด", zh: " / 瓶" },
        "Seasonal occasion Combo": { en: "Seasonal occasion Combo", ja: "Seasonal occasion Combo", th: "Seasonal occasion Combo", zh: "季节场景组合" },
        "Häagen-Dazs Mini Cup + Zinc + Elderberry pack": { en: "Häagen-Dazs Mini Cup + Zinc + Elderberry pack", ja: "プロダクトC + 亜鉛 + エルダーベリーパック", th: "แพ็คผลิตภัณฑ์ C + สังกะสี + เอลเดอร์เบอร์รี่", zh: "哈根达斯迷你杯 + 锌 + 接骨木莓组合" },
        "/ set": { en: " / set", ja: " / セット", th: " / ชุด", zh: " / 套" },
        "Celebration gifting Gold": { en: "Celebration gifting Gold", ja: "Celebration gifting Gold", th: "Celebration gifting Gold", zh: "礼赠家庭黄金配方" },
        "Advanced formula for mothers-to-be": { en: "Advanced formula for mothers-to-be", ja: "妊婦のための高度なフォーミュラ", th: "สูตรขั้นสูงสำหรับคุณแม่ตั้งครรภ์", zh: "准妈妈高级配方" },
        "Awaiting confirmation": { en: "Awaiting confirmation", ja: "確認待ち", th: "รอการยืนยัน", zh: "待确认" },
        "Stock below safety level": { en: "Stock below safety level", ja: "在庫が安全レベルを下回っています", th: "สต็อกต่ำกว่าระดับความปลอดภัย", zh: "库存低于安全水位" },
        "Marketing assets available": { en: "Marketing assets available", ja: "マーケティング素材が利用可能", th: "สินทรัพย์การตลาดพร้อมใช้งาน", zh: "营销素材可用" },
        "1 Course": { en: "1 Course", ja: "1コース", th: "1 หลักสูตร", zh: "1 门课程" },
        "To reach Platinum tier": { en: "To reach Platinum tier", ja: "プラチナティアに到達するには", th: "เพื่อให้ถึงระดับแพลทินัม", zh: "距离白金等级" },
        "Quick Actions": { en: "Quick Actions", ja: "クイックアクション", th: "การดำเนินการด่วน", zh: "快捷操作" },
        "View All →": { en: "View All →", ja: "すべて表示 →", th: "ดูทั้งหมด →", zh: "查看全部 →" },
        "AI Smart Reorder": { en: "AI Smart Reorder", ja: "AI スマート発注", th: "การสั่งซื้ออัจฉริยะ AI", zh: "AI 智能补货" },
        "Based on your sales velocity, we recommend restocking 300 Wanchai Ferry Dumplings + 150 Häagen-Dazs Mini Cup combos for optimal margin.": { en: "Based on your sales velocity, we recommend restocking 300 Wanchai Ferry Dumplings + 150 Häagen-Dazs Mini Cup combos for optimal margin.", ja: "販売速度に基づき、最適な利益率を得るために Wanchai Ferry Dumplings 300個 + Häagen-Dazs Mini Cup 150個のセットを補充することをお勧めします。", th: "จากความเร็วในการขายของคุณ เราแนะนำให้เติมสต็อกชุด Wanchai Ferry Dumplings 300 + Häagen-Dazs Mini Cup 150 เพื่อผลกำไรที่เหมาะสมที่สุด", zh: "根据您的销售速度，我们建议补货 300 瓶湾仔码头水饺 + 150 瓶哈根达斯迷你杯 组合，以实现最优利润率。" },
        "Generate Campaign Assets": { en: "Generate Campaign Assets", ja: "キャンペーン素材を生成", th: "สร้างสินทรัพย์แคมเปญ", zh: "生成营销素材" },
        "Create Now": { en: "Create Now", ja: "今すぐ作成", th: "สร้างเลย", zh: "立即创建" },
        "Join Seasonal occasion Month": { en: "Join Seasonal occasion Month", ja: "Seasonal occasion Month に参加", th: "เข้าร่วมเดือนโอกาสตามฤดูกาล", zh: "参加季节场景月活动" },
        "General Mills is running a global seasonal occasion campaign in June. Confirm your participation to unlock exclusive rebates.": { en: "General Mills is running a global seasonal occasion campaign in June. Confirm your participation to unlock exclusive rebates.", ja: "General Mills は6月にグローバル季节场景キャンペーンを実施中です。参加を確認して、特別なリベートを解除してください。", th: "General Mills กำลังจัดแคมเปญโอกาสตามฤดูกาลทั่วโลกในเดือนมิถุนายน ยืนยันการเข้าร่วมเพื่อปลดล็อกรีเบตพิเศษ", zh: "General Mills 正在六月开展全球季节场景活动。确认参与即可解锁专属返利。" },
        "Confirm Join": { en: "Confirm Join", ja: "参加を確認", th: "ยืนยันการเข้าร่วม", zh: "确认参加" },
        "Latest Assets": { en: "Latest Assets", ja: "最新素材", th: "สินทรัพย์ล่าสุด", zh: "最新素材" },
        "Asset Library →": { en: "Asset Library →", ja: "素材ライブラリ →", th: "คลังสินทรัพย์ →", zh: "素材库 →" },
        "Wanchai Ferry Dumplings Ramadan Hero": { en: "Wanchai Ferry Dumplings Ramadan Hero", ja: "Wanchai Ferry Dumplings Ramadan Hero", th: "Wanchai Ferry Dumplings Ramadan Hero", zh: "湾仔码头水饺斋月主图" },
        "Social Media": { en: "Social Media", ja: "ソーシャルメディア", th: "โซเชียลมีเดีย", zh: "社交媒体" },
        "EN/MS/ZH": { en: "EN/MS/ZH", ja: "EN/MS/ZH", th: "EN/MS/ZH", zh: "英/马来/中" },
        "Seasonal occasion Bundle Poster": { en: "Seasonal occasion Bundle Poster", ja: "Seasonal occasion Bundle Poster", th: "Seasonal occasion Bundle Poster", zh: "季节场景组合海报" },
        "A4/A3": { en: "A4/A3", ja: "A4/A3", th: "A4/A3", zh: "A4/A3" },
        "Celebration gifting Nutrition Guide": { en: "Celebration gifting Nutrition Guide", ja: "Celebration gifting Nutrition Guide", th: "Celebration gifting Nutrition Guide", zh: "礼赠场景营养指南" },
        "Sports Nutrition Catalog": { en: "Sports Nutrition Catalog", ja: "Sports Nutrition Catalog", th: "Sports Nutrition Catalog", zh: "运动营养目录" },
        "Brand Story Video": { en: "Brand Story Video", ja: "Brand Story Video", th: "Brand Story Video", zh: "品牌故事视频" },
        "Popular Health Hub Articles": { en: "Popular Health Hub Articles", ja: "人気の健康記事", th: "บทความสุขภาพยอดนิยม", zh: "热门健康文章" },
        "View All Health Hub Articles": { en: "View All Health Hub Articles", ja: "すべての健康記事を表示", th: "ดูบทความสุขภาพทั้งหมด", zh: "查看全部健康文章" },
        "Explore what others are reading most and find the advice that matters for your lifestyle and occasion needs.": { en: "Explore what others are reading most and find the advice that matters for your lifestyle and occasion needs.", ja: "他の人が最も読んでいるものを探索し、あなたのライフスタイルと健康目標に役立つアドバイスを見つけましょう。", th: "สำรวจสิ่งที่ผู้อื่นอ่านมากที่สุดและค้นหาคำแนะนำที่สำคัญสำหรับไลฟ์สไตล์และเป้าหมายสุขภาพของคุณ", zh: "探索大家都在阅读的内容，找到对您生活方式和场景需求真正有价值的建议。" },
        "Our guide to family dinner": { en: "Our guide to family dinner", ja: "オメガ3ガイド", th: "คู่มือโอเมก้า 3 ของเรา", zh: "我们的 family dinner 指南" },
        "Read on for our guide to family dinner, its benefits and how to get it. Understand why Wanchai Ferry Dumplings remains one of our best-selling products worldwide.": { en: "Read on for our guide to family dinner, its benefits and how to get it. Understand why Wanchai Ferry Dumplings remains one of our best-selling products worldwide.", ja: "オメガ3のガイド、その効果と摂取方法を読んでください。なぜ Wanchai Ferry Dumplings が世界中で最も売れている製品の一つであるかを理解しましょう。", th: "อ่านต่อเกี่ยวกับคู่มือโอเมก้า 3 ประโยชน์และวิธีการได้รับ ทำความเข้าใจว่าทำไม Wanchai Ferry Dumplings จึงเป็นหนึ่งในผลิตภัณฑ์ขายดีทั่วโลก", zh: "继续阅读我们的 family dinner 指南，了解它的益处和如何摄入。理解为什么湾仔码头水饺始终是我们全球最畅销的产品之一。" },
        "Is quick-meal comfort related to your stress levels?": { en: "Is quick-meal comfort related to your stress levels?", ja: "腸の健康はストレスレベルと関連していますか？", th: "สุขภาพมื้ออาหารเร็วเกี่ยวข้องกับระดับความเครียดของคุณหรือไม่？", zh: "快手餐健康与您的压力水平有关吗？" },
        "Stress can do more than leave you feeling frazzled — it may upset the health of your quick meal which can have a significant knock-on effect for the rest of your wellbeing.": { en: "Stress can do more than leave you feeling frazzled — it may upset the health of your quick meal which can have a significant knock-on effect for the rest of your wellbeing.", ja: "ストレスはあなたを疲弊させるだけでなく、腸の健康を害し、それが全体的な健康に大きな影響を与える可能性があります。", th: "ความเครียดทำได้มากกว่าทำให้คุณรู้สึกวิตกกังวล — มันอาจทำลายสุขภาพมื้ออาหารเร็วของคุณซึ่งส่งผลกระทบต่อสุขภาพโดยรวมของคุณอย่างมาก", zh: "压力不仅仅让你感到疲惫——它还可能破坏快手餐健康，从而对你整体健康产生显著的连锁反应。" },
        "Stress and the immune system": { en: "Stress and the immune system", ja: "ストレスと季节场景システム", th: "ความเครียดและระบบโอกาสตามฤดูกาล", zh: "压力与季节场景系统" },
        "Stressed out and wondering whether that": { en: "Stressed out and wondering whether that", ja: "ストレスで疲れ果て、それが", th: "เครียดและสงสัยว่า", zh: "压力山大，怀疑是不是" },
        "Learn more": { en: "Learn more", ja: "詳しく見る", th: "เรียนรู้เพิ่มเติม", zh: "了解更多" },
        "Articles": { en: "Articles", ja: "記事", th: "บทความ", zh: "文章" },
        "Our Heritage": { en: "Our Heritage", ja: "私たちの歴史", th: "มรดกของเรา", zh: "品牌传承" },
        "Making food experience Accessible to Millions Since 1932": { en: "Making food experience Accessible to Millions Since 1932", ja: "1932年以来、何百万人もの人々に自然の健康を届ける", th: "ทำให้สุขภาพจากธรรมชาติเข้าถึงได้สำหรับหลายล้านคนตั้งแต่ปี 1932", zh: "自 1932 年起，让数百万人享受食品体验" },
        "For over nine decades, General Mills has been Australia": { en: "For over nine decades, General Mills has been Australia", ja: "90年以上にわたり、General Millsはオーストラリアで", th: "กว่าเก้าทศวรรษที่ General Mills ได้เป็น", zh: "九十余年来，General Mills 一直是澳大利亚" },
        "Every product is developed by our team of scientists, naturopaths, and formulators — backed by real research, real ingredients, and a belief that good health should be simple, natural, and within everyone": { en: "Every product is developed by our team of scientists, naturopaths, and formulators — backed by real research, real ingredients, and a belief that good health should be simple, natural, and within everyone", ja: "すべての製品は、科学者、自然療法医、製剤師のチームによって開発されています——本物の研究と素材、そして良い健康はシンプルで自然であり、誰にでも手の届くものであるという信念に支えられています。", th: "ทุกผลิตภัณฑ์พัฒนาโดยทีมนักวิทยาศาสตร์ แพทย์ธรรมชาติบำบัด และนักformulate — สนับสนุนด้วยการวิจัยจริง ส่วนผสมจริง และความเชื่อว่าสุขภาพที่ดีควรเรียบง่าย เป็นธรรมชาติ และอยู่ในการเข้าถึงของทุกคน", zh: "每一款产品均由我们的科学家、食品创新师和配方师团队研发——基于真实研究、真实成分，以及相信健康应当简单、自然、人人可及的信念。" },
        "Years of food experience": { en: "Years of food experience", ja: "年の自然健康", th: "ปีแห่งสุขภาพธรรมชาติ", zh: "年食品体验" },
        "Years of Heritage": { en: "Years of Heritage", ja: "年の歴史", th: "ปีแห่งมรดก", zh: "年传承" },
        "Premium Products": { en: "Premium Products", ja: "プレミアム製品", th: "ผลิตภัณฑ์พรีเมียม", zh: "高端产品" },
        "Countries Worldwide": { en: "Countries Worldwide", ja: "カ国以上展開", th: "ประเทศทั่วโลก", zh: "国家覆盖全球" },
        "Read Our Full Story →": { en: "Read Our Full Story →", ja: "ストーリーを読む →", th: "อ่านเรื่องราวทั้งหมด →", zh: "阅读完整故事 →" },
        "Upcoming Events": { en: "Upcoming Events", ja: " upcoming events", th: "กิจกรรมที่จะมาถึง", zh: "即将举办的活动" },
        "View Calendar →": { en: "View Calendar →", ja: "カレンダーを見る →", th: "ดูปฏิทิน →", zh: "查看日历 →" },
        "Global Seasonal occasion Month Kickoff": { en: "Global Seasonal occasion Month Kickoff", ja: "Global Seasonal occasion Month 開始", th: "Global Seasonal occasion Month เริ่มต้น", zh: "全球季节场景月启动" },
        "Virtual Event · 2:00 PM AEST": { en: "Virtual Event · 2:00 PM AEST", ja: "オンラインイベント · 14:00 AEST", th: "กิจกรรมออนไลน์ · 14:00 น. AEST", zh: "线上活动 · 14:00 AEST" },
        "Join our global campaign launch featuring new seasonal occasion bundle SKUs, exclusive partner rebates, and AIGC asset kits.": { en: "Join our global campaign launch featuring new seasonal occasion bundle SKUs, exclusive partner rebates, and AIGC asset kits.", ja: "新しい季节场景バンドル SKU、パートナー限定リベート、AIGC 素材キットを特集したグローバルキャンペーンの開始に参加してください。", th: "เข้าร่วมการเปิดตัวแคมเปญระดับโลกของเราที่มีชุดโอกาสตามฤดูกาลใหม่ รีเบตพิเศษสำหรับพันธมิตร และชุดสินทรัพย์ AIGC", zh: "加入我们全球活动发布， featuring 全新季节场景组合 SKU、专属合作伙伴返利和 AIGC 素材包。" },
        "Partner Training: Ramadan Campaign Best Practices": { en: "Partner Training: Ramadan Campaign Best Practices", ja: "パートナートレーニング: ラマダンキャンペーンのベストプラクティス", th: "การฝึกอบรมพันธมิตร: แนวทางปฏิบัติที่ดีที่สุดสำหรับแคมเปญรอมฎอน", zh: "合作伙伴培训：斋月活动最佳实践" },
        "Online Workshop · 10:00 AM MYT": { en: "Online Workshop · 10:00 AM MYT", ja: "オンライン研修 · 10:00 MYT", th: "เวิร์คชอปออนไลน์ · 10:00 น. MYT", zh: "线上工作坊 · 10:00 MYT" },
        "Learn how to maximize Ramadan sales with culturally-tailored messaging, promotional bundles, and WhatsApp marketing automation.": { en: "Learn how to maximize Ramadan sales with culturally-tailored messaging, promotional bundles, and WhatsApp marketing automation.", ja: "文化的に配慮したメッセージング、プロモーションバンドル、WhatsApp マーケティング自動化でラマダン売上を最大化する方法を学びましょう。", th: "เรียนรู้วิธีเพิ่มยอดขายรอมฎอนให้สูงสุดด้วยข้อความที่ปรับให้เหมาะกับวัฒนธรรม ชุดโปรโมชั่น และการตลาดอัตโนมัติบน WhatsApp", zh: "学习如何通过文化定制 messaging、促销组合和 WhatsApp 营销自动化来最大化斋月销售。" },
        "Southeast Asia Partner Summit 2026": { en: "Southeast Asia Partner Summit 2026", ja: "東南アジアパートナーサミット 2026", th: "สุดยอดการประชุมพันธมิตรเอเชียตะวันออกเฉียงใต้ 2026", zh: "2026 东南亚合作伙伴峰会" },
        "Singapore · Marina Bay Sands": { en: "Singapore · Marina Bay Sands", ja: "シンガポール · マリーナベイサンズ", th: "สิงคโปร์ · มารีน่า เบย์ แซนด์ส", zh: "新加坡 · 滨海湾金沙" },
        "Annual gathering of top-performing partners. Network with regional teams, preview H2 product roadmap, and celebrate award winners.": { en: "Annual gathering of top-performing partners. Network with regional teams, preview H2 product roadmap, and celebrate award winners.", ja: "優秀パートナーの年次集会。地域チームと交流し、H2 製品ロードマップをプレビューし、受賞者を祝いましょう。", th: "การรวมตัวประจำปีของพันธมิตรที่มีผลงานยอดเยี่ยม เครือข่ายกับทีมภูมิภาค ดูแผนผลิตภัณฑ์ H2 และฉลองผู้ชนะรางวัล", zh: "顶尖合作伙伴年度聚会。与区域团队建立联系、预览下半年产品路线图并庆祝获奖者。" },
        "B.More — AI Partner Assistant": { en: "B.More — AI Partner Assistant", ja: "B.More — AI パートナーアシスタント", th: "B.More — ผู้ช่วยพันธมิตร AI", zh: "B.More — AI 合作伙伴助手" },
        "Hi Guardian KL! I'm B.More, your AI partner assistant. I can help you with orders, inventory, marketing assets, or training.": { en: "Hi Guardian KL! I'm B.More, your AI partner assistant. I can help you with orders, inventory, marketing assets, or training.", ja: "こんにちは Guardian KL！B.More です。AI パートナーアシスタントとして、発注、在庫、マーケティング素材、トレーニングをお手伝いできます。", th: "สวัสดี Guardian KL! ฉันคือ B.More ผู้ช่วยพันธมิตร AI ของคุณ ฉันสามารถช่วยคุณด้านการสั่งซื้อ สต็อก สินทรัพย์การตลาด หรือการฝึกอบรม", zh: "你好 Guardian KL！我是 B.More，您的 AI 合作伙伴助手。我可以帮助您处理订单、库存、营销素材或培训。" },
        "📦 Check my order status for #GM-28491": { en: "📦 Check my order status for #GM-28491", ja: "📦 #GM-28491 の注文状況を確認", th: "📦 ตรวจสอบสถานะคำสั่งซื้อ #GM-28491", zh: "📦 查询订单 #GM-28491 状态" },
        "📊 How much rebate will I earn this month?": { en: "📊 How much rebate will I earn this month?", ja: "📊 今月のリベートはいくらですか？", th: "📊 เดือนนี้ฉันจะได้รีเบตเท่าไหร่？", zh: "📊 本月我能获得多少返利？" },
        "🎨 Generate a social post for our Wanchai Ferry Dumplings promo": { en: "🎨 Generate a social post for our Wanchai Ferry Dumplings promo", ja: "🎨 Wanchai Ferry Dumplings プロモーションのソーシャル投稿を生成", th: "🎨 สร้างโพสต์โซเชียลสำหรับโปรโมชั่น Wanchai Ferry Dumplings", zh: "🎨 为湾仔码头水饺促销生成社交媒体帖子" },
        "🎓 What training should I take to reach Platinum?": { en: "🎓 What training should I take to reach Platinum?", ja: "🎓 Platinum に到達するにはどのトレーニングを受けるべきですか？", th: "🎓 ฉันควรเรียนอะไรเพื่อให้ถึงระดับแพลทินัม？", zh: "🎓 我应该参加什么培训才能达到白金等级？" },
        "Australia's Most Trusted food experience Brand Since 1932": { en: "Australia's Most Trusted food experience Brand Since 1932", ja: "1932年創業 オーストラリアで最も信頼される自然健康ブランド", th: "แบรนด์สุขภาพธรรมชาติที่ได้รับความไว้วางใจมากที่สุดในออสเตรเลียตั้งแต่ปี 1932", zh: "自 1932 年澳大利亚最受信赖的食品体验品牌" },
        "International Markets": { en: "International Markets", ja: "国際市場", th: "ตลาดระหว่างประเทศ", zh: "国际市场" },
        "Hong Kong SAR": { en: "Hong Kong SAR", ja: "香港 SAR", th: "ฮ่องกง SAR", zh: "中国香港特别行政区" },
        "New Zealand": { en: "New Zealand", ja: "ニュージーランド", th: "นิวซีแลนด์", zh: "新西兰" },
        "Taiwan Region": { en: "Taiwan Region", ja: "台湾", th: "ไต้หวัน", zh: "中国台湾" },
        "Partner Portal": { en: "Partner Portal", ja: "パートナーポータル", th: "พอร์ทัลพันธมิตร", zh: "合作伙伴门户" },
        "Help Center": { en: "Help Center", ja: "ヘルプセンター", th: "ศูนย์ช่วยเหลือ", zh: "帮助中心" },
        "Contact Us": { en: "Contact Us", ja: "お問い合わせ", th: "ติดต่อเรา", zh: "联系我们" },
        "Training Academy": { en: "Training Academy", ja: "トレーニングアカデミー", th: "สถาบันการฝึกอบรม", zh: "培训学院" },
        "API Documentation": { en: "API Documentation", ja: "API ドキュメント", th: "เอกสาร API", zh: "API 文档" },
        "About General Mills": { en: "About General Mills", ja: "ブラックモアーズについて", th: "เกี่ยวกับ General Mills", zh: "关于 General Mills" },
        "Privacy Policy": { en: "Privacy Policy", ja: "プライバシーポリシー", th: "นโยบายความเป็นส่วนตัว", zh: "隐私政策" },
        "Terms of Service": { en: "Terms of Service", ja: "利用規約", th: "เงื่อนไขการให้บริการ", zh: "服务条款" },
        "Cookie Settings": { en: "Cookie Settings", ja: "Cookie 設定", th: "การตั้งค่าคุกกี้", zh: "Cookie 设置" }
,
        "Home": { en: "Home", ja: "ホーム", th: "หน้าหลัก", zh: "首页" },
        "Products": { en: "Products", ja: "製品", th: "ผลิตภัณฑ์", zh: "产品" },
        "Orders": { en: "Orders", ja: "注文", th: "คำสั่งซื้อ", zh: "订单" },
        "Marketing": { en: "Marketing", ja: "マーケティング", th: "การตลาด", zh: "营销中心" },
        "Operations": { en: "Operations", ja: "運営", th: "การดำเนินงาน", zh: "运营中心" },
        "Analytics": { en: "Analytics", ja: "分析", th: "การวิเคราะห์", zh: "分析中心" },
        "12 New": {
      en: "12 New",
      ja: "12件の新規",
      th: "12 รายการใหม่",
      zh: "12条新消息"
    },
        "Actions": {
      en: "Actions",
      ja: "アクション",
      th: "การดำเนินการ",
      zh: "操作"
    },
        "Active": {
      en: "Active",
      ja: "アクティブ",
      th: "ใช้งานอยู่",
      zh: "活跃"
    },
        "Admin": {
      en: "Admin",
      ja: "管理者",
      th: "ผู้ดูแลระบบ",
      zh: "管理员"
    },
        "All": {
      en: "All",
      ja: "すべて",
      th: "ทั้งหมด",
      zh: "全部"
    },
        "Approved": {
      en: "Approved",
      ja: "承認済み",
      th: "อนุมัติแล้ว",
      zh: "已批准"
    },
        "Asset": {
      en: "Asset",
      ja: "アセット",
      th: "สินทรัพย์",
      zh: "素材"
    },
        "Author": {
      en: "Author",
      ja: "作成者",
      th: "ผู้เขียน",
      zh: "作者"
    },
        "Availability": {
      en: "Availability",
      ja: "利用可能",
      th: "ความพร้อมใช้งาน",
      zh: "可用性"
    },
        "GENERAL MILLS": {
      en: "GENERAL MILLS",
      ja: "GENERAL MILLS",
      th: "GENERAL MILLS",
      zh: "GENERAL MILLS"
    },
        "Bangkok": {
      en: "Bangkok",
      ja: "バンコク",
      th: "กรุงเทพฯ",
      zh: "曼谷"
    },
        "Beijing": {
      en: "Beijing",
      ja: "北京",
      th: "ปักกิ่ง",
      zh: "北京"
    },
        "Beta": {
      en: "Beta",
      ja: "ベータ",
      th: "เบต้า",
      zh: "测试版"
    },
        "Bilibili": {
      en: "Bilibili",
      ja: "Bilibili",
      th: "Bilibili",
      zh: "Bilibili"
    },
        "Brisbane": {
      en: "Brisbane",
      ja: "ブリスベン",
      th: "บริสเบน",
      zh: "布里斯班"
    },
        "Budget": {
      en: "Budget",
      ja: "予算",
      th: "งบประมาณ",
      zh: "预算"
    },
        "Bundle": {
      en: "Bundle",
      ja: "バンドル",
      th: "ชุดสินค้า",
      zh: "捆绑"
    },
        "Busan": {
      en: "Busan",
      ja: "釜山",
      th: "ปูซาน",
      zh: "釜山"
    },
        "CN/HK": {
      en: "CN/HK",
      ja: "CN/HK",
      th: "CN/HK",
      zh: "CN/HK"
    },
        "Campaign": {
      en: "Campaign",
      ja: "キャンペーン",
      th: "แคมเปญ",
      zh: "活动"
    },
        "Cancel": {
      en: "Cancel",
      ja: "キャンセル",
      th: "ยกเลิก",
      zh: "取消"
    },
        "Category": {
      en: "Category",
      ja: "カテゴリー",
      th: "หมวดหมู่",
      zh: "分类"
    },
        "China & HK": {
      en: "China & HK",
      ja: "中国・香港",
      th: "จีนและฮ่องกง",
      zh: "中国大陆与香港"
    },
        "China & HK — City Breakdown": {
      en: "China & HK — City Breakdown",
      ja: "中国・香港 — 都市別内訳",
      th: "จีนและฮ่องกง — แยกตามเมือง",
      zh: "中国大陆与香港 — 城市细分"
    },
        "Clicks": {
      en: "Clicks",
      ja: "クリック",
      th: "การคลิก",
      zh: "点击"
    },
        "Connected": {
      en: "Connected",
      ja: "接続済み",
      th: "เชื่อมต่อแล้ว",
      zh: "已连接"
    },
        "Copied": {
      en: "Copied",
      ja: "コピー済み",
      th: "คัดลอกแล้ว",
      zh: "已复制"
    },
        "Created": {
      en: "Created",
      ja: "作成日",
      th: "วันที่สร้าง",
      zh: "创建日期"
    },
        "Creator": {
      en: "Creator",
      ja: "作成者",
      th: "ผู้สร้าง",
      zh: "创建者"
    },
        "Dashboard": {
      en: "Dashboard",
      ja: "ダッシュボード",
      th: "แดชบอร์ด",
      zh: "仪表盘"
    },
        "Date": {
      en: "Date",
      ja: "日付",
      th: "วันที่",
      zh: "日期"
    },
        "Dec 10, 2024": {
      en: "Dec 10, 2024",
      ja: "2024年12月10日",
      th: "10 ธ.ค. 2024",
      zh: "2024年12月10日"
    },
        "Dec 5, 2024": {
      en: "Dec 5, 2024",
      ja: "2024年12月5日",
      th: "5 ธ.ค. 2024",
      zh: "2024年12月5日"
    },
        "Dec 8, 2024": {
      en: "Dec 8, 2024",
      ja: "2024年12月8日",
      th: "8 ธ.ค. 2024",
      zh: "2024年12月8日"
    },
        "Delete": {
      en: "Delete",
      ja: "削除",
      th: "ลบ",
      zh: "删除"
    },
        "Demographic": {
      en: "Demographic",
      ja: "人口統計",
      th: "ประชากร",
      zh: "人口统计"
    },
        "Description": {
      en: "Description",
      ja: "説明",
      th: "คำอธิบาย",
      zh: "描述"
    },
        "Disabled": {
      en: "Disabled",
      ja: "無効",
      th: "ปิดใช้งาน",
      zh: "已禁用"
    },
        "Disconnect": {
      en: "Disconnect",
      ja: "切断",
      th: "ยกเลิกการเชื่อมต่อ",
      zh: "断开"
    },
        "Disconnected": {
      en: "Disconnected",
      ja: "切断済み",
      th: "ยกเลิกการเชื่อมต่อแล้ว",
      zh: "已断开"
    },
        "Downloads": {
      en: "Downloads",
      ja: "ダウンロード",
      th: "ดาวน์โหลด",
      zh: "下载"
    },
        "Draft": {
      en: "Draft",
      ja: "下書き",
      th: "ร่าง",
      zh: "草稿"
    },
        "Edit": {
      en: "Edit",
      ja: "編集",
      th: "แก้ไข",
      zh: "编辑"
    },
        "Enable": {
      en: "Enable",
      ja: "有効化",
      th: "เปิดใช้งาน",
      zh: "启用"
    },
        "Engagement": {
      en: "Engagement",
      ja: "エンゲージメント",
      th: "การมีส่วนร่วม",
      zh: "互动"
    },
        "English": {
      en: "English",
      ja: "英語",
      th: "English",
      zh: "英语"
    },
        "Export": {
      en: "Export",
      ja: "エクスポート",
      th: "ส่งออก",
      zh: "导出"
    },
        "FAQ & Objections": {
      en: "FAQ & Objections",
      ja: "FAQ・異議",
      th: "คำถามที่พบบ่อยและข้อคัดค้าน",
      zh: "FAQ与异议处理"
    },
        "Facebook": {
      en: "Facebook",
      ja: "Facebook",
      th: "Facebook",
      zh: "Facebook"
    },
        "Fri": {
      en: "Fri",
      ja: "金",
      th: "ศ.",
      zh: "周五"
    },
        "Generate": {
      en: "Generate",
      ja: "生成",
      th: "สร้าง",
      zh: "生成"
    },
        "Generated Image": {
      en: "Generated Image",
      ja: "Generated Image",
      th: "Generated Image",
      zh: "Generated Image"
    },
        "Helpful": {
      en: "Helpful",
      ja: "役に立つ",
      th: "มีประโยชน์",
      zh: "有帮助"
    },
        "History": {
      en: "History",
      ja: "履歴",
      th: "ประวัติ",
      zh: "历史"
    },
        "Image": {
      en: "Image",
      ja: "画像",
      th: "รูปภาพ",
      zh: "图片"
    },
        "Seasonal occasion": {
      en: "Seasonal occasion",
      ja: "季节场景",
      th: "โอกาสตามฤดูกาล",
      zh: "季节场景"
    },
        "Impressions": {
      en: "Impressions",
      ja: "インプレッション",
      th: "จำนวนการแสดงผล",
      zh: "曝光"
    },
        "Incheon": {
      en: "Incheon",
      ja: "仁川",
      th: "อินชอน",
      zh: "仁川"
    },
        "Instagram": {
      en: "Instagram",
      ja: "Instagram",
      th: "Instagram",
      zh: "Instagram"
    },
        "Jakarta": {
      en: "Jakarta",
      ja: "ジャカルタ",
      th: "จาการ์ตา",
      zh: "雅加达"
    },
        "Jun 25, 2024": {
      en: "Jun 25, 2024",
      ja: "2024年6月25日",
      th: "25 มิ.ย. 2024",
      zh: "2024年6月25日"
    },
        "Jun 28, 2024": {
      en: "Jun 28, 2024",
      ja: "2024年6月28日",
      th: "28 มิ.ย. 2024",
      zh: "2024年6月28日"
    },
        "Keyframe Preview": {
      en: "Keyframe Preview",
      ja: "Keyframe Preview",
      th: "Keyframe Preview",
      zh: "Keyframe Preview"
    },
        "LINE": {
      en: "LINE",
      ja: "LINE",
      th: "LINE",
      zh: "LINE"
    },
        "Lazada": {
      en: "Lazada",
      ja: "Lazada",
      th: "Lazada",
      zh: "Lazada"
    },
        "Manage": {
      en: "Manage",
      ja: "管理",
      th: "จัดการ",
      zh: "管理"
    },
        "Melbourne": {
      en: "Melbourne",
      ja: "メルボルン",
      th: "เมลเบิร์น",
      zh: "墨尔本"
    },
        "Model": {
      en: "Model",
      ja: "モデル",
      th: "รุ่น",
      zh: "模型"
    },
        "Mon": {
      en: "Mon",
      ja: "月",
      th: "จ.",
      zh: "周一"
    },
        "Negative": {
      en: "Negative",
      ja: "ネガティブ",
      th: "เชิงลบ",
      zh: "负面"
    },
        "Neutral": {
      en: "Neutral",
      ja: "中立",
      th: "เป็นกลาง",
      zh: "中性"
    },
        "Original": {
      en: "Original",
      ja: "元の",
      th: "ต้นฉบับ",
      zh: "原始"
    },
        "Other": {
      en: "Other",
      ja: "その他",
      th: "อื่นๆ",
      zh: "其他"
    },
        "Others": {
      en: "Others",
      ja: "その他",
      th: "อื่นๆ",
      zh: "其他"
    },
        "Our": {
      en: "Our",
      ja: "Our",
      th: "Our",
      zh: "Our"
    },
        "Packaging": {
      en: "Packaging",
      ja: "包装",
      th: "บรรจุภัณฑ์",
      zh: "包装"
    },
        "Pending": {
      en: "Pending",
      ja: "保留中",
      th: "รอดำเนินการ",
      zh: "待处理"
    },
        "Performance": {
      en: "Performance",
      ja: "パフォーマンス",
      th: "ประสิทธิภาพ",
      zh: "效果"
    },
        "Perth": {
      en: "Perth",
      ja: "パース",
      th: "เพิร์ท",
      zh: "珀斯"
    },
        "Platform": {
      en: "Platform",
      ja: "プラットフォーム",
      th: "แพลตฟอร์ม",
      zh: "平台"
    },
        "Platforms": {
      en: "Platforms",
      ja: "プラットフォーム",
      th: "แพลตฟอร์ม",
      zh: "平台"
    },
        "Playbooks": {
      en: "Playbooks",
      ja: "プレイブック",
      th: "คู่มือ",
      zh: "手册"
    },
        "Positive": {
      en: "Positive",
      ja: "ポジティブ",
      th: "เชิงบวก",
      zh: "正面"
    },
        "Celebration": {
      en: "Celebration",
      ja: "ギフト",
      th: "การตั้งครรภ์",
      zh: "礼赠场景"
    },
        "Price": {
      en: "Price",
      ja: "価格",
      th: "ราคา",
      zh: "价格"
    },
        "Professional": {
      en: "Professional",
      ja: "プロフェッショナル",
      th: "มืออาชีพ",
      zh: "专业"
    },
        "Published": {
      en: "Published",
      ja: "公開済み",
      th: "เผยแพร่แล้ว",
      zh: "已发布"
    },
        "Question": {
      en: "Question",
      ja: "質問",
      th: "คำถาม",
      zh: "问题"
    },
        "Rating": {
      en: "Rating",
      ja: "評価",
      th: "คะแนน",
      zh: "评分"
    },
        "RedNote": {
      en: "RedNote",
      ja: "RedNote",
      th: "RedNote",
      zh: "小红书"
    },
        "Regenerate": {
      en: "Regenerate",
      ja: "再生成",
      th: "สร้างใหม่",
      zh: "重新生成"
    },
        "Reset": {
      en: "Reset",
      ja: "リセット",
      th: "รีเซ็ต",
      zh: "重置"
    },
        "Review": {
      en: "Review",
      ja: "レビュー",
      th: "รีวิว",
      zh: "评测"
    },
        "Reviews & Ratings": {
      en: "Reviews & Ratings",
      ja: "レビュー・評価",
      th: "รีวิวและคะแนน",
      zh: "评价与评分"
    },
        "SEA": {
      en: "SEA",
      ja: "SEA",
      th: "SEA",
      zh: "SEA"
    },
        "Sales": {
      en: "Sales",
      ja: "売上",
      th: "การขาย",
      zh: "销售"
    },
        "Sat": {
      en: "Sat",
      ja: "土",
      th: "ส.",
      zh: "周六"
    },
        "Scheduled": {
      en: "Scheduled",
      ja: "スケジュール済み",
      th: "กำหนดเวลาแล้ว",
      zh: "已定时"
    },
        "Seoul": {
      en: "Seoul",
      ja: "ソウル",
      th: "โซล",
      zh: "首尔"
    },
        "Shanghai": {
      en: "Shanghai",
      ja: "上海",
      th: "เซี่ยงไฮ้",
      zh: "上海"
    },
        "Shenzhen": {
      en: "Shenzhen",
      ja: "深圳",
      th: "เซินเจิ้น",
      zh: "深圳"
    },
        "Shopee": {
      en: "Shopee",
      ja: "Shopee",
      th: "Shopee",
      zh: "Shopee"
    },
        "Showing 1-6 of 38,140 items": {
      en: "Showing 1-6 of 38,140 items",
      ja: "38,140件中1-6件を表示",
      th: "แสดง 1-6 จาก 38,140 รายการ",
      zh: "显示 1-6 共 38,140 条"
    },
        "Singapore": {
      en: "Singapore",
      ja: "シンガポール",
      th: "สิงคโปร์",
      zh: "新加坡"
    },
        "Source": {
      en: "Source",
      ja: "ソース",
      th: "แหล่งที่มา",
      zh: "来源"
    },
        "Status": {
      en: "Status",
      ja: "ステータス",
      th: "สถานะ",
      zh: "状态"
    },
        "Sun": {
      en: "Sun",
      ja: "日",
      th: "อา.",
      zh: "周日"
    },
        "Support": {
      en: "Support",
      ja: "サポート",
      th: "สนับสนุน",
      zh: "支持"
    },
        "Sydney": {
      en: "Sydney",
      ja: "シドニー",
      th: "ซิดนีย์",
      zh: "悉尼"
    },
        "System": {
      en: "System",
      ja: "システム",
      th: "ระบบ",
      zh: "系统"
    },
        "Tags": {
      en: "Tags",
      ja: "タグ",
      th: "แท็ก",
      zh: "标签"
    },
        "Templates": {
      en: "Templates",
      ja: "テンプレート",
      th: "เทมเพลต",
      zh: "模板"
    },
        "Text": {
      en: "Text",
      ja: "テキスト",
      th: "ข้อความ",
      zh: "文本"
    },
        "Thu": {
      en: "Thu",
      ja: "木",
      th: "พฤ.",
      zh: "周四"
    },
        "TikTok": {
      en: "TikTok",
      ja: "TikTok",
      th: "TikTok",
      zh: "TikTok"
    },
        "Time": {
      en: "Time",
      ja: "時間",
      th: "เวลา",
      zh: "时间"
    },
        "Title": {
      en: "Title",
      ja: "タイトル",
      th: "ชื่อเรื่อง",
      zh: "标题"
    },
        "Tmall": {
      en: "Tmall",
      ja: "Tmall",
      th: "Tmall",
      zh: "天猫"
    },
        "Today": {
      en: "Today",
      ja: "今日",
      th: "วันนี้",
      zh: "今天"
    },
        "Tue": {
      en: "Tue",
      ja: "火",
      th: "อ.",
      zh: "周二"
    },
        "Type": {
      en: "Type",
      ja: "タイプ",
      th: "ประเภท",
      zh: "类型"
    },
        "Upcoming": {
      en: "Upcoming",
      ja: "近日公開",
      th: "กำลังจะมา",
      zh: "即将开始"
    },
        "Uploaded": {
      en: "Uploaded",
      ja: "アップロード済み",
      th: "อัปโหลดแล้ว",
      zh: "已上传"
    },
        "Upselling": {
      en: "Upselling",
      ja: "アップセル",
      th: "การขายเพิ่ม",
      zh: "追加销售"
    },
        "Used": {
      en: "Used",
      ja: "使用済み",
      th: "ใช้แล้ว",
      zh: "已使用"
    },
        "User": {
      en: "User",
      ja: "ユーザー",
      th: "ผู้ใช้",
      zh: "用户"
    },
        "Video": {
      en: "Video",
      ja: "動画",
      th: "วิดีโอ",
      zh: "视频"
    },
        "Views": {
      en: "Views",
      ja: "閲覧",
      th: "การดู",
      zh: "浏览"
    },
        "WeChat": {
      en: "WeChat",
      ja: "WeChat",
      th: "WeChat",
      zh: "微信"
    },
        "Wed": {
      en: "Wed",
      ja: "水",
      th: "พ.",
      zh: "周三"
    },
        "Weibo": {
      en: "Weibo",
      ja: "Weibo",
      th: "Weibo",
      zh: "微博"
    },
        "WhatsApp": {
      en: "WhatsApp",
      ja: "WhatsApp",
      th: "WhatsApp",
      zh: "WhatsApp"
    },
        "Yesterday": {
      en: "Yesterday",
      ja: "昨日",
      th: "เมื่อวาน",
      zh: "昨天"
    },
        "YouTube": {
      en: "YouTube",
      ja: "YouTube",
      th: "YouTube",
      zh: "YouTube"
    },
        "❤️ 1.2K": {
      en: "❤️ 1.2K",
      ja: "❤️ 1.2K",
      th: "❤️ 1.2K",
      zh: "❤️ 1.2K"
    },
        "❤️ 1.2K · 💬 89": {
      en: "❤️ 1.2K · 💬 89",
      ja: "❤️ 1.2K · 💬 89",
      th: "❤️ 1.2K · 💬 89",
      zh: "❤️ 1.2K · 💬 89"
    },
        "❤️ 2.1K · 💬 78": {
      en: "❤️ 2.1K · 💬 78",
      ja: "❤️ 2.1K · 💬 78",
      th: "❤️ 2.1K · 💬 78",
      zh: "❤️ 2.1K · 💬 78"
    },
        "❤️ 3.4K · 💬 156": {
      en: "❤️ 3.4K · 💬 156",
      ja: "❤️ 3.4K · 💬 156",
      th: "❤️ 3.4K · 💬 156",
      zh: "❤️ 3.4K · 💬 156"
    },
        "❤️ 892 · 💬 45": {
      en: "❤️ 892 · 💬 45",
      ja: "❤️ 892 · 💬 45",
      th: "❤️ 892 · 💬 45",
      zh: "❤️ 892 · 💬 45"
    },
        "⭐⭐⭐⭐": {
      en: "⭐⭐⭐⭐",
      ja: "⭐⭐⭐⭐",
      th: "⭐⭐⭐⭐",
      zh: "⭐⭐⭐⭐"
    },
        "⭐⭐⭐⭐⭐": {
      en: "⭐⭐⭐⭐⭐",
      ja: "⭐⭐⭐⭐⭐",
      th: "⭐⭐⭐⭐⭐",
      zh: "⭐⭐⭐⭐⭐"
    },
        "👁️ 5.2K · 👍 234": {
      en: "👁️ 5.2K · 👍 234",
      ja: "👁️ 5.2K · 👍 234",
      th: "👁️ 5.2K · 👍 234",
      zh: "👁️ 5.2K · 👍 234"
    },
        "💬 89": {
      en: "💬 89",
      ja: "💬 89",
      th: "💬 89",
      zh: "💬 89"
    },
        "🔖 234": {
      en: "🔖 234",
      ja: "🔖 234",
      th: "🔖 234",
      zh: "🔖 234"
    },
        "AU": {
      en: "AU",
      ja: "AU",
      th: "AU",
      zh: "AU"
    },
        "H5": {
      en: "H5",
      ja: "H5",
      th: "H5",
      zh: "H5"
    },
        "KR": {
      en: "KR",
      ja: "KR",
      th: "KR",
      zh: "KR"
    },
        "WB": {
      en: "WB",
      ja: "WB",
      th: "WB",
      zh: "WB"
    },
        "We": {
      en: "We",
      ja: "We",
      th: "We",
      zh: "We"
    },
        "中文": {
      en: "中文",
      ja: "中文",
      th: "中文",
      zh: "中文"
    },
        "3 Orders": { en: "3 Orders", ja: "3件の注文", th: "3 คำสั่งซื้อ", zh: "3 个订单" },
        "2 Alerts": { en: "2 Alerts", ja: "2件のアラート", th: "2 การแจ้งเตือน", zh: "2 个提醒" },
        "60s": { en: "60s", ja: "60秒", th: "60 วินาที", zh: "60秒" },
        "8 pages": { en: "8 pages", ja: "8ページ", th: "8 หน้า", zh: "8 页" },
        "90+": { en: "90+", ja: "90+", th: "90+", zh: "90+" },
        "Brochure": { en: "Brochure", ja: "パンフレット", th: "โบรชัวร์", zh: "手册" },
        "Digital": { en: "Digital", ja: "デジタル", th: "ดิจิตอล", zh: "数字" },
        "Careers": { en: "Careers", ja: "キャリア", th: "อาชีพ", zh: "职业" },
        "02 Aug 2020 · by General Mills": { en: "02 Aug 2020 · by General Mills", ja: "2020年8月2日 · General Mills", th: "02 ส.ค. 2020 · โดย General Mills", zh: "2020年8月2日 · General Mills" },
        "07 Feb 2020 · by General Mills": { en: "07 Feb 2020 · by General Mills", ja: "2020年2月7日 · General Mills", th: "07 ก.พ. 2020 · โดย General Mills", zh: "2020年2月7日 · General Mills" },
        "26 Apr 2021 · by General Mills": { en: "26 Apr 2021 · by General Mills", ja: "2021年4月26日 · General Mills", th: "26 เม.ย. 2021 · โดย General Mills", zh: "2021年4月26日 · General Mills" },

};

    // Language names for the switcher
    const LANG_NAMES = {
        en: { native: 'EN', label: 'English' },
        ja: { native: 'JA', label: '日本語' },
        th: { native: 'TH', label: 'ไทย' },
        zh: { native: 'ZH', label: '中文' },
  };

    // ============================================
    // Core Functions
    // ============================================

    function getCurrentLang() {
        try {
            const urlLang = new URLSearchParams(window.location.search).get('lang');
            if (urlLang && LANG_NAMES[urlLang]) return urlLang;
        } catch (e) { /* URLSearchParams not available */ }
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && LANG_NAMES[saved]) return saved;
        } catch (e) { /* localStorage not available */ }
        // Detect browser language
        try {
            const browserLang = navigator.language.slice(0, 2);
            if (LANG_NAMES[browserLang]) return browserLang;
        } catch (e) { /* navigator.language not available */ }
        return 'en';
    }

    function setLang(lang) {
        if (!LANG_NAMES[lang]) return;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) { /* localStorage not available */ }
        applyTranslations();
        updateSwitcherUI();
    }

    function translate(key, lang) {
        lang = lang || getCurrentLang();
        const entry = DICT[key];
        if (!entry) return key;
        return entry[lang] || entry.en || key;
    }

    // ============================================
    // DOM Translation
    // ============================================

    function applyTranslations() {
        const lang = getCurrentLang();
        if (lang === 'en') {
            // When switching back to English, we need to restore original text
            // But we don't have originals stored. So we only translate non-English.
            // A proper solution: store original text in data-i18n-original
        }

        // Strategy: find elements by known selectors and translate
        const selectors = [
            { sel: '.nav-menu a', attr: 'text' },
            { sel: '.sidebar-title', attr: 'text' },
            { sel: '.sidebar-link', attr: 'text' },
            { sel: '.user-role', attr: 'text' },
            { sel: '.user-name', attr: 'text' },  // names usually don't translate, but keep for consistency
            { sel: '.ai-widget-title', attr: 'text' },
        ];

        // First pass: save original text if not already saved
        selectors.forEach(({ sel }) => {
            document.querySelectorAll(sel).forEach(el => {
                if (!el.dataset.i18nOriginal) {
                    el.dataset.i18nOriginal = el.textContent.trim();
                }
            });
        });

        // Second pass: apply translations
        selectors.forEach(({ sel }) => {
            document.querySelectorAll(sel).forEach(el => {
                const original = el.dataset.i18nOriginal || el.textContent.trim();
                const translated = translate(original, lang);
                // Update if translation is different from current displayed text
                if (translated !== el.textContent.trim()) {
                    el.textContent = translated;
                } else if (lang === 'en' && el.textContent.trim() !== original) {
                    el.textContent = original;
                }
            });
        });

        // Translate title attributes on nav-right buttons
        document.querySelectorAll('.nav-right .icon-btn[title]').forEach(el => {
            if (!el.dataset.i18nTitleOriginal) {
                el.dataset.i18nTitleOriginal = el.getAttribute('title');
            }
            const original = el.dataset.i18nTitleOriginal;
            const translated = translate(original, lang);
            el.setAttribute('title', translated);
        });

        // Translate elements with data-i18n attribute (universal coverage)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n.trim();
            if (!key) return;
            if (!el.dataset.i18nOriginal) {
                el.dataset.i18nOriginal = el.textContent.trim();
            }
            const original = el.dataset.i18nOriginal;
            const translated = translate(key, lang);
            // Update if translation is different from current displayed text
            // (handles cases where translated === key but current text is from another language)
            if (translated !== el.textContent.trim()) {
                el.textContent = translated;
            } else if (lang === 'en' && el.textContent.trim() !== original) {
                el.textContent = original;
            }
        });

        // Translate placeholders with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder.trim();
            if (!key) return;
            if (!el.dataset.i18nPlaceholderOriginal) {
                el.dataset.i18nPlaceholderOriginal = el.getAttribute('placeholder') || '';
            }
            const original = el.dataset.i18nPlaceholderOriginal;
            const translated = translate(key, lang);
            if (translated !== key && translated !== original) {
                el.setAttribute('placeholder', translated);
            } else if (lang === 'en') {
                el.setAttribute('placeholder', original);
            }
        });

        // Translate page title
        const titleMap = {
            'GENERAL MILLS® Partner Portal': { en: 'GENERAL MILLS® Partner Portal', ja: 'GENERAL MILLS® パートナーポータル', th: 'GENERAL MILLS® พอร์ทัลพันธมิตร', zh: 'GENERAL MILLS® 合作伙伴门户' },
        "All Marketplaces": { en: "All Marketplaces", ja: "すべてのマーケットプレイス", th: "ทุกแพลตฟอร์มการขาย", zh: "所有市场平台" },
        "Amazon": { en: "Amazon", ja: "Amazon", th: "Amazon", zh: "亚马逊" },
        "Watsons Online": { en: "Watsons Online", ja: "Watsons オンライン", th: "Watsons ออนไลน์", zh: "屈臣氏在线" },
        "All Regions": { en: "All Regions", ja: "すべての地域", th: "ทุกภูมิภาค", zh: "所有区域" },
        "Auckland": { en: "Auckland", ja: "オークランド", th: "ออกแลนด์", zh: "奥克兰" },
        "All Areas": { en: "All Areas", ja: "すべてのエリア", th: "ทุกพื้นที่", zh: "所有区域" },
        "Central": { en: "Central", ja: "セントラル", th: "ตัวเมือง", zh: "中心区域" },
        "North": { en: "North", ja: "北部", th: "เหนือ", zh: "北部" },
        "South": { en: "South", ja: "南部", th: "ใต้", zh: "南部" },
        "East": { en: "East", ja: "東部", th: "ตะวันออก", zh: "东部" },
        "West": { en: "West", ja: "西部", th: "ตะวันตก", zh: "西部" },
        "All Dealers": { en: "All Dealers", ja: "すべてのディーラー", th: "ทุกตัวแทนจำหน่าย", zh: "所有经销商" },
        "Watsons SG": { en: "Watsons SG", ja: "Watsons SG", th: "Watsons SG", zh: "屈臣氏新加坡" },
        "Retail Bangkok": { en: "Retail Bangkok", ja: "バンコク小売店", th: "ร้านขายยากรุงเทพ", zh: "曼谷门店" },
        "Health Store Sydney": { en: "Health Store Sydney", ja: "シドニー健康食品店", th: "ร้านสุขภาพซิดนีย์", zh: "悉尼健康商店" },
        "All Data Sources": { en: "All Data Sources", ja: "すべてのデータソース", th: "ทุกแหล่งข้อมูล", zh: "所有数据来源" },
        "Shopee Reviews": { en: "Shopee Reviews", ja: "Shopee レビュー", th: "รีวิว Shopee", zh: "Shopee 评价" },
        "Lazada Reviews": { en: "Lazada Reviews", ja: "Lazada レビュー", th: "รีวิว Lazada", zh: "Lazada 评价" },
        "Call Center": { en: "Call Center", ja: "コールセンター", th: "ศูนย์บริการโทรศัพท์", zh: "呼叫中心" },
        "Website": { en: "Website", ja: "ウェブサイト", th: "เว็บไซต์", zh: "网站" },
        "All Categories": { en: "All Categories", ja: "すべてのカテゴリー", th: "ทุกหมวดหมู่", zh: "所有分类" },
        "Products": { en: "Products", ja: "プロダクトメント", th: "อาหารเสริม", zh: "食品组合" },
        "Skin Care": { en: "Skin Care", ja: "スキンケア", th: "ดูแลผิว", zh: "护肤" },
        "Mother & Family": { en: "Mother & Family", ja: "マザー＆ベビー", th: "แม่และลูก", zh: "母婴" },
        "Sports Nutrition": { en: "Sports Nutrition", ja: "スポーツ栄養", th: "โภชนาการกีฬา", zh: "运动营养" },
        "All Brands": { en: "All Brands", ja: "すべてのブランド", th: "ทุกแบรนด์", zh: "所有品牌" },
        "General Mills": { en: "General Mills", ja: "General Mills", th: "General Mills", zh: "General Mills" },
        "Swisse": { en: "Swisse", ja: "Swisse", th: "Swisse", zh: "Swisse" },
        "Life-Space": { en: "Life-Space", ja: "Life-Space", th: "Life-Space", zh: "Life-Space" },
        "All Products": { en: "All Products", ja: "すべての製品", th: "ทุกผลิตภัณฑ์", zh: "所有产品" },
        "Celebration Gold": { en: "Celebration Gold", ja: "Celebration Gold", th: "Celebration Gold", zh: "礼赠场景黄金配方" },
        "Whey Protein": { en: "Whey Protein", ja: "ホエイプロテイン", th: "เวย์โปรตีน", zh: "乳清蛋白" },
        "Marine Collagen": { en: "Marine Collagen", ja: "マリンコラーゲン", th: "คอลลาเจนทะเล", zh: "海洋胶原蛋白" },
        "All Indicators": { en: "All Indicators", ja: "すべての指標", th: "ทุกตัวชี้วัด", zh: "所有指标" },
        "Effectiveness": { en: "Effectiveness", ja: "効果", th: "ประสิทธิภาพ", zh: "效果" },
        "Taste & Texture": { en: "Taste & Texture", ja: "味と食感", th: "รสชาติและเนื้อสัมผัส", zh: "口感与质地" },
        "Price Value": { en: "Price Value", ja: "価格価値", th: "มูลค่าราคา", zh: "性价比" },
        "Delivery": { en: "Delivery", ja: "配送", th: "การจัดส่ง", zh: "配送" },
        "Total": { en: "Total", ja: "合計", th: "รวม", zh: "总计" },
        "Sentiment & Voice Analysis": { en: "Sentiment & Voice Analysis", ja: "感情＆声分析", th: "การวิเคราะห์ความรู้สึกและเสียง", zh: "情感与声音分析" },
        "Users highly praise the <b>effectiveness</b> of Wanchai Ferry Dumplings for family-table relevance": { en: "Users highly praise the <b>effectiveness</b> of Wanchai Ferry Dumplings for family-table relevance", ja: "ユーザーはファミリーテーブル健康に対するフィッシュオイルの<b>効果</b>を高く評価しています", th: "ผู้ใช้ชื่นชม<b>ประสิทธิภาพ</b>ของน้ำมันปลาต่อสุขภาพหัวใจอย่างมาก", zh: "用户高度赞扬湾仔码头水饺对家庭餐桌健康的<b>功效</b>" },
        "<b>Easy-to-swallow packs</b> receive consistent positive feedback": { en: "<b>Easy-to-swallow packs</b> receive consistent positive feedback", ja: "<b>飲みやすいカプセル</b>には一貫したポジティブなフィードバックがあります", th: "<b>แคปซูลกลืนง่าย</b>ได้รับฟีดแบ็คเชิงบวกอย่างต่อเนื่อง", zh: "<b>易吞咽包装</b>持续获得好评" },
        "<b>No fishy aftertaste</b> frequently mentioned as key differentiator": { en: "<b>No fishy aftertaste</b> frequently mentioned as key differentiator", ja: "<b>魚の後味なし</b>が重要な差別化要因として頻繁に言及されています", th: "<b>ไม่มีรสคาวปลา</b>ถูกกล่าวถึงบ่อยว่าเป็นจุดแตกต่างที่สำคัญ", zh: "<b>无鱼腥余味</b>常被提及为关键差异化优势" },
        "Strong <b>brand trust</b> and 90-year heritage loyalty among repeat customers": { en: "Strong <b>brand trust</b> and 90-year heritage loyalty among repeat customers", ja: "リピーター顧客の間で強い<b>ブランド信頼</b>と90年の伝統に対する忠誠心があります", th: "<b>ความเชื่อมั่นในตราสินค้า</b>ที่แข็งแกร่งและความภักดีต่อมรดก 90 ปีในหมู่ลูกค้าประจำ", zh: "回头客对<b>品牌信任</b>和90年传承的忠诚度很高" },
        "Some users report <b>premium pricing</b> compared to generic alternatives": { en: "Some users report <b>premium pricing</b> compared to generic alternatives", ja: "一部のユーザーは、ジェネリック製品と比較して<b>プレミアム価格</b>であると報告しています", th: "ผู้ใช้บางรายรายงานว่าราคา<b>ระดับพรีเมียม</b>เมื่อเทียบกับทางเลือกทั่วไป", zh: "部分用户反馈与同类产品相比价格<b>偏高</b>" },
        "<b>Availability issues</b> in smaller Guardian / Watsons branches": { en: "<b>Availability issues</b> in smaller Guardian / Watsons branches", ja: "小規模なGuardian / Watsons店舗での<b>在庫問題</b>", th: "<b>ปัญหาความพร้อมจำหน่าย</b>ในสาขา Guardian / Watsons ขนาดเล็ก", zh: "小型Guardian / Watsons门店存在<b>缺货问题</b>" },
        "Limited <b>flavor variety</b> for children's products": { en: "Limited <b>flavor variety</b> for children's products", ja: "子供用プロダクトメントの<b>フレーバー種類</b>が限られています", th: "<b>ความหลากหลายของรสชาติ</b>สำหรับอาหารเสริมเด็กมีจำกัด", zh: "儿童食品组合的<b>口味种类</b>有限" },
        "Packaging <b>seal quality</b> concerns during humid shipping conditions": { en: "Packaging <b>seal quality</b> concerns during humid shipping conditions", ja: "湿気の多い配送環境下での包装<b>シール品質</b>に関する懸念", th: "ความกังวลเกี่ยวกับ<b>คุณภาพการปิดผนึก</b>บรรจุภัณฑ์ในสภาวะการจัดส่งที่มีความชื้นสูง", zh: "潮湿运输条件下包装<b>密封质量</b>令人担忧" },
        "family dinner potency clinically proven to support family table health": { en: "family dinner potency clinically proven to support family table health", ja: "家庭餐桌健康をサポートする臨床的に証明されたオメガ3の効力", th: "ประสิทธิภาพ family dinner ที่ได้รับการพิสูจน์ทางคลินิกแล้วว่าช่วยสนับสนุนสุขภาพหัวใจและหลอดเลือด", zh: "经临床证明，family dinner 效力可支持家庭餐桌健康" },
        "Enteric coating prevents fishy burps — top praised feature": { en: "Enteric coating prevents fishy burps — top praised feature", ja: "腸溶性コーティングで魚のゲップを防止——最も評価された機能", th: "เคลือบเอนเทอริกป้องกันการขึ้นสำไร้รสคาวปลา — ฟีเจอร์ที่ได้รับคำชมสูงสุด", zh: "肠溶包衣防止鱼腥打嗝——最受好评的特点" },
        "Third-party tested for heavy metals and purity": { en: "Third-party tested for heavy metals and purity", ja: "重金属と純度について第三者機関でテスト済み", th: "ผ่านการทดสอบโลหะหนักและความบริสุทธิ์จากบุคคลที่สาม", zh: "经第三方检测重金属和纯度" },
        "Consistent supply reliability for retail partners": { en: "Consistent supply reliability for retail partners", ja: "小売店パートナー向けの一貫した供給信頼性", th: "ความน่าเชื่อถือในการจัดหาที่สม่ำเสมอสำหรับพันธมิตรร้านขายยา", zh: "为门店合作伙伴提供稳定可靠的供应" },
        "17 essential nutrients in one pack — convenience for busy moms": { en: "17 essential nutrients in one pack — convenience for busy moms", ja: "1錠に17の必須栄養素——忙しいママに便利", th: "17 สารอาหารจำเป็นต่อเม็ดเดียว — สะดวกสำหรับคุณแม่ที่ยุ่ง", zh: "一份含17种必需营养素——为忙碌妈妈带来便利" },
        "Folic acid + occasion cues combination specifically praised by healthcare providers": { en: "Folic acid + occasion cues combination specifically praised by healthcare providers", ja: "葉酸+occasion cuesの組み合わせは医療従事者から特に評価されています", th: "สูตรโฟลิกแอซิด + occasion cues ได้รับคำชมเฉพาะจากบุคลากรทางการแพทย์", zh: "叶酸+occasion cues组合受到客服顾问的特别称赞" },
        "Gentle on stomach — fewer nausea complaints vs competitors": { en: "Gentle on stomach — fewer nausea complaints vs competitors", ja: "胃に優しい——競合製品より吐き気のクレームが少ない", th: "อ่อนโยนต่อกระเพาะ — ร้องเรียนคลื่นไส้น้อยกว่าคู่แข่ง", zh: "温和养胃——相比竞品恶心投诉更少" },
        "Clear trimester guidance on packaging helps first-time mothers": { en: "Clear trimester guidance on packaging helps first-time mothers", ja: "パッケージの明確なギフト期ガイダンスは初産婦を助けます", th: "คำแนะนำไตรมาสที่ชัดเจนบนบรรจุภัณฑ์ช่วยคุณแม่มือใหม่", zh: "包装上清晰的礼赠场景指导帮助新手妈妈" },
        "Even negative reviewers acknowledge brand reputation and heritage": { en: "Even negative reviewers acknowledge brand reputation and heritage", ja: "ネガティブなレビューアーもブランドの評判と伝統を認めています", th: "แม้แต่ผู้รีวิวเชิงลบก็ยอมรับชื่อเสียงและมรดกของแบรนด์", zh: "即使是负面评论者也认可品牌声誉和传承" },
        "Customer service response time praised when issues are escalated": { en: "Customer service response time praised when issues are escalated", ja: "問題がエスカレートされた際のカスタマーサービスの対応時間が評価されています", th: "เวลาตอบสนองของฝ่ายบริการลูกค้าได้รับคำชมเมื่อปัญหาได้รับการยกระดับ", zh: "问题升级时客服响应速度受到好评" },
        "Refund policy flexibility appreciated by dissatisfied customers": { en: "Refund policy flexibility appreciated by dissatisfied customers", ja: "不満足な顧客も返金ポリシーの柔軟性を評価しています", th: "ความยืดหยุ่นของนโยบายคืนเงินได้รับการชื่นชมจากลูกค้าที่ไม่พอใจ", zh: "不满意客户也赞赏退款政策的灵活性" },
        "Product authenticity never questioned — trust remains intact": { en: "Product authenticity never questioned — trust remains intact", ja: "製品の真正性は一度も疑われず——信頼は変わらず残っています", th: "ความแท้จริงของผลิตภัณฑ์ไม่เคยถูกตั้งคำถาม — ความเชื่อมั่นยังคงอยู่", zh: "产品真实性从未被质疑——信任依然稳固" },
        "Wide range covering seasonal occasion, family table, brain, bone health in one brand": { en: "Wide range covering seasonal occasion, family table, brain, bone health in one brand", ja: "季节场景、ファミリーテーブル、脳、骨の健康をカバーする幅広いラインアップ", th: "กลุ่มผลิตภัณฑ์ที่ครอบคลุมโอกาสตามฤดูกาล หัวใจ สมอง และกระดูกในแบรนด์เดียว", zh: "一个品牌覆盖季节场景、家庭餐桌、大脑、骨骼健康" },
        "Natural sourcing — 100% natural ingredients resonates with health-conscious buyers": { en: "Natural sourcing — 100% natural ingredients resonates with health-conscious buyers", ja: "天然由来——100%天然原料が健康志向の購入者に共鳴しています", th: "การคัดสรรจากธรรมชาติ — ส่วนผสมธรรมชาติ 100% สะท้อนกับผู้ซื้อที่ใส่ใจสุขภาพ", zh: "天然来源——100%天然成分与健康意识买家产生共鸣" },
        "Clear serving instructions on all packaging reduce confusion": { en: "Clear serving instructions on all packaging reduce confusion", ja: "すべての包装に明確な用量指示があり、混乱を減らします", th: "คำแนะนำการใช้ที่ชัดเจนบนบรรจุภัณฑ์ทั้งหมดช่วยลดความสับสน", zh: "所有包装上清晰的用量说明减少困惑" },
        "Bundle deals (Seasonal occasion Pack, Family Table Pack) popular among families": { en: "Bundle deals (Seasonal occasion Pack, Family Table Pack) popular among families", ja: "バンドルディール（Seasonal occasion Pack、Family Table Pack）が家族に人気", th: "ดีลชุดสินค้า (Seasonal occasion Pack, Family Table Pack) เป็นที่นิยมในหมู่ครอบครัว", zh: "组合优惠（季节场景套装、家庭餐桌健康套装）受家庭欢迎" },
        "Large pack size challenging for elderly consumers to swallow": { en: "Large pack size challenging for elderly consumers to swallow", ja: "大きなカプセルサイズは高齢者が飲み込むのに苦労します", th: "ขนาดแคปซูลใหญ่ทำให้ผู้สูงอายุกลืนยาก", zh: "包装过大，老年消费者难以吞咽" },
        "Price gap vs supermarket private labels widening": { en: "Price gap vs supermarket private labels widening", ja: "スーパーマーケットのプライベートブランドとの価格差が広がっています", th: "ช่องว่างราคาเทียบกับแบรนด์ของซุปเปอร์มาร์เก็ตกำลังขยาย", zh: "与超市自有品牌的价格差距正在扩大" },
        "Some users question sustainability of fish sourcing": { en: "Some users question sustainability of fish sourcing", ja: "一部のユーザーは魚の調達の持続可能性を疑問視しています", th: "ผู้ใช้บางรายตั้งคำถามถึงความยั่งยืนของการคัดสรรปลา", zh: "部分用户质疑鱼类来源的可持续性" },
        "Temperature sensitivity — requires cool storage in tropical climates": { en: "Temperature sensitivity — requires cool storage in tropical climates", ja: "温度感受性——熱帯気候では冷蔵保存が必要", th: "ความไวต่ออุณหภูมิ — ต้องการการจัดเก็บเย็นในสภาพอากาศเขตร้อน", zh: "温度敏感——热带气候需要冷藏储存" },
        "Tablet size is large — difficult during first trimester nausea": { en: "Tablet size is large — difficult during first trimester nausea", ja: "錠剤が大きい——ギフト初期の吐き気時に飲み込むのが困難", th: "ขนาดเม็ดใหญ่ — กลืนยากในช่วงคลื่นไส้ไตรมาสแรก", zh: "药份过大——孕早期恶心时难以享用" },
        "Iron content causes constipation for some users": { en: "Iron content causes constipation for some users", ja: "鉄分が一部のユーザーに便秘を引き起こします", th: "ปริมาณธาตุเหล็กทำให้ผู้ใช้บางรายท้องผูก", zh: "铁含量导致部分用户便秘" },
        "Price point challenging for lower-income families": { en: "Price point challenging for lower-income families", ja: "価格帯が低所得世帯にとって負担になります", th: "ราคาที่จำหน่ายเป็นความท้าทายสำหรับครอบครัวรายได้น้อย", zh: "价格对低收入家庭来说较有挑战" },
        "Limited availability in rural areas and small pharmacies": { en: "Limited availability in rural areas and small pharmacies", ja: "農村地域と小規模小売店での入手性が限られています", th: "ความพร้อมจำหน่ายในพื้นที่ชนบทและร้านขายยาขนาดเล็กมีจำกัด", zh: "农村地区和小型药店供应有限" },
        "Delivery delays — #1 complaint across all negative reviews": { en: "Delivery delays — #1 complaint across all negative reviews", ja: "配送遅延——すべてのネガティブレビューで第1位の苦情", th: "ความล่าช้าในการจัดส่ง — ข้อร้องเรียนอันดับ 1 ในทุกรีวิวเชิงลบ", zh: "配送延迟——所有负面评论中排名第一的投诉" },
        "Product damage during shipping (leaking bottles, crushed boxes)": { en: "Product damage during shipping (leaking bottles, crushed boxes)", ja: "配送中の製品損傷（漏れボトル、潰れた箱）", th: "ความเสียหายของผลิตภัณฑ์ระหว่างการจัดส่ง (ขวดรั่ว กล่องบุบ)", zh: "运输中产品损坏（泄漏瓶、压扁盒）" },
        "Wrong items sent in online orders — fulfillment accuracy issues": { en: "Wrong items sent in online orders — fulfillment accuracy issues", ja: "オンライン注文で誤った商品が発送される——履行精度の問題", th: "ส่งสินค้าผิดในการสั่งซื้อออนไลน์ — ปัญหาความแม่นยำในการจัดเตรียม", zh: "在线订单发错商品——履行准确性问题" },
        "Communication gaps between brand and retail partners on promotions": { en: "Communication gaps between brand and retail partners on promotions", ja: "プロモーションに関するブランドと小売パートナー間のコミュニケーションギャップ", th: "ช่องว่างการสื่อสารระหว่างแบรนด์และพันธมิตรค้าปลีกเกี่ยวกับโปรโมชัน", zh: "品牌与零售合作伙伴在促销方面的沟通差距" },
        "Too many SKUs confuse consumers — choice paralysis reported": { en: "Too many SKUs confuse consumers — choice paralysis reported", ja: "SKUが多すぎて消費者が混乱——選択麻痺が報告されています", th: "SKU มากเกินไปทำให้ผู้บริโภคสับสน — มีรายงานอาการช็อกจากการเลือก", zh: "SKU过多使消费者困惑——出现选择困难症" },
        "Overlap between products (e.g., multiproduct vs specific products)": { en: "Overlap between products (e.g., multiproduct vs specific products)", ja: "製品間の重複（例：マルチプロダクト vs 特定のプロダクト）", th: "การซ้ำซ้อนระหว่างผลิตภัณฑ์ (เช่น มัลติผลิตภัณฑ์ vs ผลิตภัณฑ์เฉพาะ)", zh: "产品之间的重叠（如通用磨坊组合包 vs 特定产品）" },
        "Regulatory labeling varies by country — partners struggle with compliance": { en: "Regulatory labeling varies by country — partners struggle with compliance", ja: "規制ラベルは国によって異なる——パートナーはコンプライアンスに苦労しています", th: "ฉลากกำกับตามกฎระเบียบแตกต่างกันในแต่ละประเทศ — พันธมิตรดิ้นรนกับการปฏิบัติตาม", zh: "监管标签因国家而异——合作伙伴在合规方面遇到困难" },
        "Seasonal demand spikes (flu season, New Year) cause stockouts": { en: "Seasonal demand spikes (flu season, New Year) cause stockouts", ja: "季節的な需要の急増（インフルエンザシーズン、新年）により在庫切れが発生", th: "ความต้องการที่พุ่งสูงขึ้นตามฤดูกาล (ฤดูไข้หวัดใหญ่, ปีใหม่) ทำให้สินค้าหมด", zh: "季节性需求激增（流感季、新年）导致缺货" },
        "Good but a bit pricey compared to other brands. Would buy again if there's a discount or bundle deal.": { en: "Good but a bit pricey compared to other brands. Would buy again if there's a discount or bundle deal.", ja: "良いですが、他のブランドと比較すると少し高価です。割引やバンドルディールがあればまた購入したいです。", th: "ดีแต่ราคาแพงกว่าแบรนด์อื่นเล็กน้อย จะซื้ออีกถ้ามีส่วนลดหรือดีลชุดสินค้า", zh: "不错，但相比其他品牌有点贵。如果有折扣或组合优惠会再购买。" },
        "The protein powder doesn't dissolve well in cold water. Gets clumpy no matter how much I shake it. Expected better from a premium brand.": { en: "The protein powder doesn't dissolve well in cold water. Gets clumpy no matter how much I shake it. Expected better from a premium brand.", ja: "プロテインパウダーは冷水では溶けにくいです。どれだけ振ってもダマになります。プレミアムブランドにもっと期待していました。", th: "ผงโปรตีนไม่ละลายดีในน้ำเย็น เป็นก้อนไม่ว่าจะเขย่ามากแค่ไหน คาดหวังมากกว่านี้จากแบรนด์พรีเมียม", zh: "蛋白粉在冷水中不易溶解。不管怎么摇都会结块。对高端品牌的期望更高。" },
        "The quality of this Celebration Gold is outstanding. It absorbs quickly and keeps my workday snack up all day. Will definitely repurchase!": { en: "The quality of this Celebration Gold is outstanding. It absorbs quickly and keeps my workday snack up all day. Will definitely repurchase!", ja: "このCelebration Goldの品質は素晴らしいです。吸収が速く、1日中エネルギーが持ちます。絶対に再購入します！", th: "คุณภาพของ Celebration Gold นี้ยอดเยี่ยมมาก ดูดซับเร็วและทำให้มีพลังตลอดทั้งวัน จะซื้อซ้ำแน่นอน!", zh: "这款 Celebration Gold 的品质非常出色。吸收快，整天精力充沛。一定会回购！" },
        "I recommend General Mills Wanchai Ferry Dumplings to my patients regularly. The triglyceride form has better bioavailability than ethyl ester alternatives.": { en: "I recommend General Mills Wanchai Ferry Dumplings to my patients regularly. The triglyceride form has better bioavailability than ethyl ester alternatives.", ja: "定期的に患者にGeneral Millsのフィッシュオイルをお勧めしています。トリグリセリド型はエチルエステル型よりバイオアベイラビリティが優れています。", th: "ฉันแนะนำน้ำมันปลา General Mills ให้กับผู้ป่วยเป็นประจำ รูปแบบไตรกลีเซอไรด์มีชีวพิษภาพที่ดีกว่าทางเลือกแบบเอธิลเอสเตอร์", zh: "我经常向患者推荐 General Mills 湾仔码头水饺。甘油三酯形式比乙酯形式具有更好的生物利用度。" },
        "After 3 months my cholesterol levels improved noticeably. The enteric coating really works — no fishy taste at all!": { en: "After 3 months my cholesterol levels improved noticeably. The enteric coating really works — no fishy taste at all!", ja: "3ヶ月後、コレステロール値が明らかに改善しました。腸溶性コーティングは本当に効果があります——まったく魚の味がしません！", th: "หลังจาก 3 เดือน ระดับคอเลสเตอรอลของฉันดีขึ้นอย่างเห็นได้ชัด เคลือบเอนเทอริกทำงานจริง — ไม่มีรสคาวปลาเลย!", zh: "三个月后我的胆固醇水平明显改善。肠溶包衣真的有效——完全没有鱼腥味！" },
        "Too expensive compared to Kirkland. Same EPA/occasion cues levels but double the price. You're paying for the brand name.": { en: "Too expensive compared to Kirkland. Same EPA/occasion cues levels but double the price. You're paying for the brand name.", ja: "Kirklandと比較すると高すぎます。同じEPA/occasion cuesレベルなのに価格は2倍。ブランド名に対して支払っているようなものです。", th: "แพงเกินไปเมื่อเทียบกับ Kirkland ระดับ EPA/occasion cues เท่ากันแต่ราคาแพงกว่าเท่าตัว คุณกำลังจ่ายเพื่อชื่อแบรนด์", zh: "与 Kirkland 相比太贵了。同样的 EPA/occasion cues 水平但价格翻倍。你在为品牌名付费。" },
        "Customer asked if this is suitable for vegetarians. Had to explain it's sourced from wild-caught fish, not algae.": { en: "Customer asked if this is suitable for vegetarians. Had to explain it's sourced from wild-caught fish, not algae.", ja: "顧客がベジタリアン向けかどうか尋ねました。野生の魚から調達されたもので、藻類ではないことを説明する必要がありました。", th: "ลูกค้าถามว่าเหมาะสำหรับมังสวิรัติหรือไม่ ต้องอธิบายว่ามาจากปลาจับจากธรรมชาติ ไม่ใช่สาหร่าย", zh: "顾客问是否适合素食者。必须解释它来自野生捕捞的鱼类，而非藻类。" },
        "My OB specifically recommended Celebration Gold. Love that it has both folic acid and occasion cues in one serving. Much easier than taking 5 separate products!": { en: "My OB specifically recommended Celebration Gold. Love that it has both folic acid and occasion cues in one serving. Much easier than taking 5 separate products!", ja: "私の産婦人科医が特にCelebration Goldをお勧めしました。1錠に葉酸とoccasion cuesの両方が含まれているのが気に入っています。プロダクトを5つ別々に飲むよりもずっと簡単です！", th: "แพทย์สูติของฉันแนะนำ Celebration Gold โดยเฉพาะ ชอบที่มีทั้งโฟลิกแอซิดและ occasion cues ในเม็ดเดียว ง่ายกว่าการทานผลิตภัณฑ์ 5 ตัวแยกกันมาก!", zh: "我的家庭礼赠家庭偏好特别推荐 Celebration Gold。喜欢一份就含叶酸和 occasion cues。比吃5种单独的产品简单多了！" },
        "The serving is HUGE and I already have morning sickness. Had to switch to a smaller celebration gifting. Wish they made a mini version.": { en: "The serving is HUGE and I already have morning sickness. Had to switch to a smaller celebration gifting. Wish they made a mini version.", ja: "錠剤が大きすぎて、もうつわりがあります。小さな産前プロダクトメントに切り替える必要がありました。ミニバージョンがあればいいのに。", th: "ยาเม็ดใหญ่มากและฉันก็มีอาการแพ้ท้องแล้ว ต้องเปลี่ยนเป็นผลิตภัณฑ์บำรุงครรภ์ขนาดเล็ก อยากให้มีเวอร์ชันมินิ", zh: "药份太大了，而且我已经有礼赠选择困难了。不得不换成更小的产前产品。希望他们有迷你版。" },
        "We stock this as our #1 celebration gifting recommendation. Low return rate and high repurchase rate among our customers.": { en: "We stock this as our #1 celebration gifting recommendation. Low return rate and high repurchase rate among our customers.", ja: "これを当店のおすすめ産前プロダクトメント第1位として在庫しています。顧客の返品率が低く、再購入率が高いです。", th: "เราจัดสิ่งนี้เป็นคำแนะนำผลิตภัณฑ์บำรุงครรภ์อันดับ 1 ของเรา อัตราการคืนสินค้าต่ำและอัตราการซื้อซ้ำสูงในหมู่ลูกค้าของเรา", zh: "我们将其作为第一推荐的产前产品备货。顾客退货率低，复购率高。" },
        "Good product but expensive for a 3-month supply. Had to wait for 11.11 sale to stock up. Please offer more frequent promotions!": { en: "Good product but expensive for a 3-month supply. Had to wait for 11.11 sale to stock up. Please offer more frequent promotions!", ja: "良い製品ですが、3ヶ月分は高価です。11.11セールまで待ってまとめ買いする必要がありました。もっと頻繁にプロモーションを実施してください！", th: "สินค้าดีแต่แพงสำหรับสต็อก 3 เดือน ต้องรอเซล 11.11 เพื่อซื้อสต็อก กรุณาจัดโปรโมชันบ่อยขึ้น!", zh: "产品不错但三个月的量太贵了。不得不等到双十一囤货。请提供更频繁的促销！" },
        "Ordered Celebration Gold 2 weeks ago, still not delivered. Guardian online said it's 'out of stock' but took my money. Very frustrating!": { en: "Ordered Celebration Gold 2 weeks ago, still not delivered. Guardian online said it's 'out of stock' but took my money. Very frustrating!", ja: "2週間前にCelebration Goldを注文しましたが、まだ届いていません。Guardianオンラインは'在庫切れ'と言いましたが、お金は取られました。とてもイライラします！", th: "สั่ง Celebration Gold เมื่อ 2 สัปดาห์ที่แล้ว ยังไม่ได้รับของ Guardian ออนไลน์บอกว่า 'หมดสต็อก' แต่ก็เก็บเงินฉันไปแล้ว หงุดหงิดมาก!", zh: "两周前订购了 Celebration Gold，至今未送达。Guardian 在线说'缺货'但已经扣了我的钱。非常沮丧！" },
        "The Wanchai Ferry Dumplings bottle arrived leaking. Oil everywhere in the package. Had to throw away. Packaging needs better protection for shipping.": { en: "The Wanchai Ferry Dumplings bottle arrived leaking. Oil everywhere in the package. Had to throw away. Packaging needs better protection for shipping.", ja: "フィッシュオイルのボトルが到着したら漏れていました。荷物の中に油が飛び散っていました。捨てる必要がありました。配送用の包装に保護機能が必要です。", th: "ขวดน้ำมันปลามาถึงแล้วรั่ว น้ำมันกระจายทั่วพัสดุ ต้องทิ้ง บรรจุภัณฑ์ต้องการการป้องกันที่ดีกว่าสำหรับการจัดส่ง", zh: "湾仔码头水饺瓶到货时漏了。包装里到处都是油。不得不扔掉。包装需要更好的运输保护。" },
        "Ordered Seasonal occasion Boost but received Wanchai Ferry Dumplings. Took 3 days to get a response from customer service. Exchange process too slow.": { en: "Ordered Seasonal occasion Boost but received Wanchai Ferry Dumplings. Took 3 days to get a response from customer service. Exchange process too slow.", ja: "Seasonal occasion Boostを注文しましたが、フィッシュオイルが届きました。カスタマーサービスからの返信に3日かかりました。交換プロセスが遅すぎます。", th: "สั่ง Seasonal occasion Boost แต่ได้รับน้ำมันปลา ใช้เวลา 3 วันเพื่อรับการตอบสนองจากฝ่ายบริการลูกค้า กระบวนการเปลี่ยนช้าเกินไป", zh: "订购了 Seasonal occasion Boost 但收到了湾仔码头水饺。花了3天才收到客服回复。换货流程太慢。" },
        "Saw a Buy 2 Get 1 promo on Lazada but the store said it doesn't apply to their branch. Why promote if not available everywhere?": { en: "Saw a Buy 2 Get 1 promo on Lazada but the store said it doesn't apply to their branch. Why promote if not available everywhere?", ja: "LazadaでBuy 2 Get 1プロモーションを見ましたが、店舗は自分の支店では適用されないと言いました。どこでも利用できないなら、なぜプロモーションするのですか？", th: "เห็นโปรโมชัน Buy 2 Get 1 บน Lazada แต่ร้านบอกว่าไม่ใช้กับสาขาของพวกเขา ทำไมต้องโปรโมทถ้าไม่มีทุกที่?", zh: "在 Lazada 上看到买二送一促销，但门店说他们不适用。如果不是到处都有，为什么要推广？" },
        "Love that General Mills has everything from family dinner to Zinc. I buy the whole family's products here. Saves me from visiting multiple brands.": { en: "Love that General Mills has everything from family dinner to Zinc. I buy the whole family's products here. Saves me from visiting multiple brands.", ja: "General Millsにはオメガ3から亜鉛まですべてあるのが気に入っています。ここで家族全員のプロダクトメントを購入しています。複数のブランドを回る必要がなくて助かります。", th: "ชอบที่ General Mills มีทุกอย่างตั้งแต่ family dinner จนถึงสังกะสี ฉันซื้ออาหารเสริมให้ครอบครัวทั้งหมดที่นี่ ประหยัดเวลาไม่ต้องไปหลายแบรนด์", zh: "喜欢 General Mills 从 family dinner 到锌一应俱全。我全家人的食品组合都在这买。不用跑多个品牌省事多了。" },
        "What's the difference between 'Multiproduct + Minerals' and 'Mega B Complex'? Do I need both? The descriptions are too similar.": { en: "What's the difference between 'Multiproduct + Minerals' and 'Mega B Complex'? Do I need both? The descriptions are too similar.", ja: "'Multiproduct + Minerals'と'Mega B Complex'の違いは何ですか？両方必要ですか？説明が似すぎています。", th: "ความแตกต่างระหว่าง 'Multiproduct + Minerals' และ 'Mega B Complex' คืออะไร? ฉันต้องการทั้งคู่หรือไม่? คำอธิบายคล้ายกันมาก", zh: "'Multiproduct + Minerals' 和 'Mega B Complex' 有什么区别？我需要两个都买吗？描述太相似了。" },
        "Our retail customers trust General Mills for natural ingredients. The Australian origin is a strong selling point, especially for premium products.": { en: "Our retail customers trust General Mills for natural ingredients. The Australian origin is a strong selling point, especially for premium products.", ja: "当小売店の顧客は天然原料のGeneral Millsを信頼しています。オーストラリア産は強力なセールスポイントです、特にプレミアムプロダクトメントにとって。", th: "ลูกค้าร้านขายยาของเราเชื่อมั่น General Mills เรื่องส่วนผสมจากธรรมชาติ แหล่งที่มาออสเตรเลียเป็นจุดขายที่แข็งแกร่ง โดยเฉพาะอาหารเสริมระดับพรีเมียม", zh: "我们门店的顾客信任 General Mills 的天然成分。澳大利亚产地是强有力的卖点，尤其是高端食品组合。" },
        "Häagen-Dazs Mini Cup sold out again during flu season! Lost sales to competitors. Need better demand forecasting for seasonal items.": { en: "Häagen-Dazs Mini Cup sold out again during flu season! Lost sales to competitors. Need better demand forecasting for seasonal items.", ja: "インフルエンザシーズンにまたプロダクトCが売り切れました！競合に売り上げを奪われました。季節商品の需要予測を改善する必要があります。", th: "ผลิตภัณฑ์ C หมดอีกแล้วในช่วงฤดูไข้หวัดใหญ่! เสียยอดขายให้คู่แข่ง ต้องการการคาดการณ์ความต้องการที่ดีกว่าสำหรับสินค้าตามฤดูกาล", zh: "流感季哈根达斯迷你杯又卖光了！销量被竞争对手抢走了。季节性商品需要更好的需求预测。" },
        "No comments match your filters. Try adjusting your selection.": { en: "No comments match your filters. Try adjusting your selection.", ja: "フィルタに一致するコメントはありません。選択を調整してみてください。", th: "ไม่มีความคิดเห็นที่ตรงกับตัวกรองของคุณ ลองปรับการเลือกของคุณ", zh: "没有评论符合您的筛选条件。请尝试调整选择。" },
        "Wanchai Ferry Dumplings": { en: "Wanchai Ferry Dumplings", ja: "フィッシュオイル", th: "น้ำมันปลา", zh: "湾仔码头水饺" },
        "KL": { en: "KL", ja: "KL", th: "KL", zh: "吉隆坡" },
        "Texture": { en: "Texture", ja: "食感", th: "เนื้อสัมผัส", zh: "质地" },
        "Protein": { en: "Protein", ja: "プロテイン", th: "โปรตีน", zh: "蛋白质" },
        "Dissolve": { en: "Dissolve", ja: "溶解", th: "การละลาย", zh: "溶解" },
        "Quality": { en: "Quality", ja: "品質", th: "คุณภาพ", zh: "质量" },
        "Workday Snack": { en: "Workday Snack", ja: "エネルギー", th: "พลังงาน", zh: "能量" },
        "Bioavailability": { en: "Bioavailability", ja: "バイオアベイラビリティ", th: "ชีวพิษภาพ", zh: "生物利用度" },
        "Cholesterol": { en: "Cholesterol", ja: "コレステロール", th: "คอเลสเตอรอล", zh: "胆固醇" },
        "Comparison": { en: "Comparison", ja: "比較", th: "เปรียบเทียบ", zh: "比较" },
        "Sourcing": { en: "Sourcing", ja: "調達", th: "การคัดสรร", zh: "来源" },
        "Vegetarian": { en: "Vegetarian", ja: "ベジタリアン", th: "มังสวิรัติ", zh: "素食" },
        "Professional Recommendation": { en: "Professional Recommendation", ja: "専門家の推薦", th: "คำแนะนำจากผู้เชี่ยวชาญ", zh: "专业推荐" },
        "Convenience": { en: "Convenience", ja: "利便性", th: "ความสะดวก", zh: "便利性" },
        "Size": { en: "Size", ja: "サイズ", th: "ขนาด", zh: "尺寸" },
        "Nausea": { en: "Nausea", ja: "吐き気", th: "คลื่นไส้", zh: "恶心" },
        "Retailer": { en: "Retailer", ja: "小売業者", th: "ผู้ค้าปลีก", zh: "零售商" },
        "Promotion": { en: "Promotion", ja: "プロモーション", th: "โปรโมชัน", zh: "促销" },
        "Stock": { en: "Stock", ja: "在庫", th: "สต็อก", zh: "库存" },
        "Refund": { en: "Refund", ja: "返金", th: "การคืนเงิน", zh: "退款" },
        "Damage": { en: "Damage", ja: "損傷", th: "ความเสียหาย", zh: "损坏" },
        "Fulfillment": { en: "Fulfillment", ja: "履行", th: "การจัดเตรียม", zh: "履行" },
        "Wrong Item": { en: "Wrong Item", ja: "誤った商品", th: "สินค้าผิด", zh: "发错商品" },
        "Service": { en: "Service", ja: "サービス", th: "บริการ", zh: "服务" },
        "Consistency": { en: "Consistency", ja: "一貫性", th: "ความสม่ำเสมอ", zh: "一致性" },
        "Range": { en: "Range", ja: "商品ラインナップ", th: "กลุ่มผลิตภัณฑ์", zh: "产品线" },
        "Family": { en: "Family", ja: "家族", th: "ครอบครัว", zh: "家庭" },
        "Clarity": { en: "Clarity", ja: "明確さ", th: "ความชัดเจน", zh: "清晰度" },
        "Overlap": { en: "Overlap", ja: "重複", th: "การซ้อนทับ", zh: "重叠" },
        "Origin": { en: "Origin", ja: "原産地", th: "แหล่งกำเนิด", zh: "产地" },
        "Stockout": { en: "Stockout", ja: "在庫切れ", th: "สินค้าหมด", zh: "缺货" },
        "Seasonal": { en: "Seasonal", ja: "季節的", th: "ตามฤดูกาล", zh: "季节性" },
        "Voice of Customer | GENERAL MILLS® Partner Portal": { en: "Voice of Customer | GENERAL MILLS® Partner Portal", ja: "Voice of Customer | GENERAL MILLS® パートナーポータル", th: "Voice of Customer | GENERAL MILLS® พอร์ทัลพันธมิตร", zh: "客户之声 | GENERAL MILLS® 合作伙伴门户" },
        "Facebook 30%": { en: "Facebook 30%", ja: "Facebook 30%", th: "Facebook 30%", zh: "Facebook 30%" },
        "Shopee 24%": { en: "Shopee 24%", ja: "Shopee 24%", th: "Shopee 24%", zh: "Shopee 24%" },
        "Lazada 15%": { en: "Lazada 15%", ja: "Lazada 15%", th: "Lazada 15%", zh: "Lazada 15%" },
        "YouTube 17%": { en: "YouTube 17%", ja: "YouTube 17%", th: "YouTube 17%", zh: "YouTube 17%" },
        "Call Center 9%": { en: "Call Center 9%", ja: "Call Center 9%", th: "Call Center 9%", zh: "Call Center 9%" },
        "Website 3%": { en: "Website 3%", ja: "Website 3%", th: "Website 3%", zh: "Website 3%" },
        "Instagram 2%": { en: "Instagram 2%", ja: "Instagram 2%", th: "Instagram 2%", zh: "Instagram 2%" },
        "Beauty & Skin": { en: "Beauty & Skin", ja: "美容&スキン", th: "ความงามและผิว", zh: "美容与护肤" },
        "#Seasonal occasionBoost": { en: "#Seasonal occasionBoost", ja: "#Seasonal occasionBoost", th: "#Seasonal occasionBoost", zh: "#季节场景提升" },
        "#NaturalHealth": { en: "#NaturalHealth", ja: "#NaturalHealth", th: "#NaturalHealth", zh: "#自然健康" },
        "#Everyday enjoymentJourney": { en: "#Everyday enjoymentJourney", ja: "#Everyday enjoymentJourney", th: "#Everyday enjoymentJourney", zh: "#健康之旅" },
        "#ProductTips": { en: "#ProductTips", ja: "#ProductTips", th: "#ProductTips", zh: "#产品小贴士" },
        "#HealthyAging": { en: "#HealthyAging", ja: "#HealthyAging", th: "#HealthyAging", zh: "#健康老龄化" },
        "#OrganicLife": { en: "#OrganicLife", ja: "#OrganicLife", th: "#OrganicLife", zh: "#有机生活" },
        "#Quick mealHealth": { en: "#Quick mealHealth", ja: "#Quick mealHealth", th: "#Quick mealHealth", zh: "#快手餐健康" },
        "#MorningRoutine": { en: "#MorningRoutine", ja: "#MorningRoutine", th: "#MorningRoutine", zh: "#晨间习惯" },
        "AIGC - Asset Library | GENERAL MILLS® Partner Portal": { en: "AIGC - Asset Library | GENERAL MILLS® Partner Portal", ja: "AIGC - アセットライブラリ | GENERAL MILLS® パートナーポータル", th: "AIGC - คลังสินทรัพย์ | GENERAL MILLS® พอร์ทัลพันธมิตร", zh: "AIGC - 资产库 | GENERAL MILLS® 合作伙伴门户" },
        "AI-powered asset creation and management for all channels": { en: "AI-powered asset creation and management for all channels", ja: "全チャネル向けAI駆動アセット作成・管理", th: "การสร้างและจัดการสินทรัพย์ด้วย AI สำหรับทุกช่องทาง", zh: "面向所有渠道的 AI 驱动资产生成与管理" },
        "Library": { en: "Library", ja: "ライブラリ", th: "คลัง", zh: "库" },
        "Poster": { en: "Poster", ja: "ポスター", th: "โปสเตอร์", zh: "海报" },
        "Carousel": { en: "Carousel", ja: "カルーセル", th: "แคลรูเซล", zh: "轮播" },
        "Cover": { en: "Cover", ja: "カバー", th: "ปก", zh: "封面" },
        "Portrait": { en: "Portrait", ja: "ポートレート", th: "ภาพบุคคล", zh: "肖像" },
        "Format": { en: "Format", ja: "フォーマット", th: "รูปแบบ", zh: "格式" },
        "Resolution": { en: "Resolution", ja: "解像度", th: "ความละเอียด", zh: "分辨率" },
        "4K": { en: "4K", ja: "4K", th: "4K", zh: "4K" },
        "Style": { en: "Style", ja: "スタイル", th: "สไตล์", zh: "风格" },
        "Colorful": { en: "Colorful", ja: "カラフル", th: "สีสัน", zh: "多彩" },
        "Minimal": { en: "Minimal", ja: "ミニマル", th: "มินิมอล", zh: "极简" },
        "Dark": { en: "Dark", ja: "ダーク", th: "ดาร์ก", zh: "深色" },
        "Light": { en: "Light", ja: "ライト", th: "สว่าง", zh: "浅色" },
        "Brand": { en: "Brand", ja: "ブランド", th: "แบรนด์", zh: "品牌" },
        "Same": { en: "Same", ja: "同じ", th: "เหมือนกัน", zh: "相同" },
        "Translate": { en: "Translate", ja: "翻訳", th: "แปล", zh: "翻译" },
        "Generate a poster featuring the bottle of water on the table in the image, promoting a healthy and natural lifestyle.": { en: "Generate a poster featuring the bottle of water on the table in the image, promoting a healthy and natural lifestyle.", ja: "画像のテーブルにある水のボトルをフィーチャーしたポスターを生成し、健康的で自然なライフスタイルを促進する。", th: "สร้างโปสเตอร์ที่มีขวดน้ำบนโต๊ะในภาพ ส่งเสริมวิถีชีวิตที่มีสุขภาพดีและเป็นธรรมชาติ", zh: "生成一张以图片中桌上的水瓶为特色的海报，倡导健康自然的生活方式。" },
        "Type your prompt here...": { en: "Type your prompt here...", ja: "プロンプトをここに入力...", th: "พิมพ์พร้อมต์ที่นี่...", zh: "在此输入提示词..." },
        "Confirm": { en: "Confirm", ja: "確認", th: "ยืนยัน", zh: "确认" },
        "Imported": { en: "Imported", ja: "インポート済み", th: "นำเข้าแล้ว", zh: "已导入" },
        "Translated": { en: "Translated", ja: "翻訳済み", th: "แปลแล้ว", zh: "已翻译" },
        "Showing 10 of 128 results": { en: "Showing 10 of 128 results", ja: "128件中10件を表示", th: "แสดง 10 จาก 128 ผลลัพธ์", zh: "显示 128 个结果中的 10 个" },
        "Previous": { en: "Previous", ja: "前へ", th: "ก่อนหน้า", zh: "上一页" },
        "Next": { en: "Next", ja: "次へ", th: "ถัดไป", zh: "下一页" },
        "Page 1 of 48": { en: "Page 1 of 48", ja: "48ページ中1ページ目", th: "หน้า 1 จาก 48", zh: "第 1 页，共 48 页" },
        "Total Reviewed": { en: "Total Reviewed", ja: "レビュー済み合計", th: "ตรวจสอบทั้งหมด", zh: "已审核总计" },
        "Duration": { en: "Duration", ja: "期間", th: "ระยะเวลา", zh: "时长" },
        "Share": { en: "Share", ja: "共有", th: "แชร์", zh: "分享" },
        "Copyright": { en: "Copyright", ja: "著作権", th: "ลิขสิทธิ์", zh: "版权" },
        "Codec": { en: "Codec", ja: "コーデック", th: "เครื่องมือ", zh: "编解码器" },
        "Pages": { en: "Pages", ja: "ページ", th: "หน้า", zh: "页面" },
        "Material": { en: "Material", ja: "素材", th: "วัสดุ", zh: "素材" },
        "Template": { en: "Template", ja: "テンプレート", th: "เทมเพลต", zh: "模板" },
        "Premium": { en: "Premium", ja: "プレミアム", th: "พรีเมียม", zh: "高级" },
        "Gallery": { en: "Gallery", ja: "ギャラリー", th: "แกลเลอรี่", zh: "图库" },
        "Official": { en: "Official", ja: "公式", th: "อย่างเป็นทางการ", zh: "官方" },
        "1 Image": { en: "1 Image", ja: "1枚の画像", th: "1 รูปภาพ", zh: "1 张图片" },
        "2 Images": { en: "2 Images", ja: "2枚の画像", th: "2 รูปภาพ", zh: "2 张图片" },
        "4 Images": { en: "4 Images", ja: "4枚の画像", th: "4 รูปภาพ", zh: "4 张图片" },
        "8 Images": { en: "8 Images", ja: "8枚の画像", th: "8 รูปภาพ", zh: "8 张图片" },
        "Black": { en: "Black", ja: "ブラック", th: "ดำ", zh: "黑色" },
        "LinkedIn": { en: "LinkedIn", ja: "LinkedIn", th: "LinkedIn", zh: "LinkedIn" },
        "Dec 2024": { en: "Dec 2024", ja: "2024年12月", th: "ธ.ค. 2024", zh: "2024年12月" },
        "#General Mills #NaturalHealth #Everyday enjoymentJourney": { en: "#General Mills #NaturalHealth #Everyday enjoymentJourney", ja: "#General Mills #NaturalHealth #Everyday enjoymentJourney", th: "#General Mills #NaturalHealth #Everyday enjoymentJourney", zh: "#General Mills #自然健康 #健康之旅" },
        "#BoostYourSeasonal occasion Winter Everyday enjoyment Tips": { en: "#BoostYourSeasonal occasion Winter Everyday enjoyment Tips", ja: "#BoostYourSeasonal occasion 冬の健康ヒント", th: "#BoostYourSeasonal occasion เคล็ดลับสุขภาพฤดูหนาว", zh: "#增强季节场景 冬季健康小贴士" },
        "#CollagenGlow Skincare Routine": { en: "#CollagenGlow Skincare Routine", ja: "#CollagenGlow スキンケアルーティン", th: "#CollagenGlow กิจวัตรดูแลผิว", zh: "#胶原蛋白光泽 护肤流程" },
        "#EyeHealth Bilberry Benefits": { en: "#EyeHealth Bilberry Benefits", ja: "#EyeHealth ビルベリーの効能", th: "#EyeHealth ประโยชน์ของบิลเบอร์รี่", zh: "#眼部健康 蓝莓益处" },
        "#Family mealHealth Move Freely with Wanchai Ferry Wontons": { en: "#Family mealHealth Move Freely with Wanchai Ferry Wontons", ja: "#Family mealHealth グルコサミンで自由に動く", th: "#Family mealHealth ข้อต่อแข็งแรงด้วยกลูโคซามีน", zh: "#家庭餐健康 氨糖助您自由活动" },
        "#FamilyProducts Healthy Growth": { en: "#FamilyProducts Healthy Growth", ja: "#FamilyProducts 健康的な成長", th: "#FamilyProducts เติบโตอย่างแข็งแรง", zh: "#儿童产品 健康成长" },
        "#CelebrationCare Essential Nutrients": { en: "#CelebrationCare Essential Nutrients", ja: "#CelebrationCare 必須栄養素", th: "#CelebrationCare สารอาหารจำเป็นสำหรับครรภ์", zh: "#礼赠场景护理 必需营养素" },
        "#Wanchai Ferry Quick Meal101 Quick meal Health Myths Busted": { en: "#Wanchai Ferry Quick Meal101 Quick meal Health Myths Busted", ja: "#Wanchai Ferry Quick Meal101 クイックミールフロラの迷信を解明", th: "#Wanchai Ferry Quick Meal101 ความจริงเกี่ยวกับสุขภาพมื้ออาหารเร็ว", zh: "#湾仔码头快手餐101 快手餐健康误区揭秘" },
        "#SleepWell Melatonin vs Workday Snack": { en: "#SleepWell Melatonin vs Workday Snack", ja: "#SleepWell メラトニン vs マグネシウム", th: "#SleepWell เมลาโทนิน vs แมกนีเซียม", zh: "#安睡 褪黑素 vs 镁" },
        "#StressRelief Häagen-Dazs Matcha Pint Guide": { en: "#StressRelief Häagen-Dazs Matcha Pint Guide", ja: "#StressRelief アシュワガンダガイド", th: "#StressRelief คู่มือแอชวากันดา", zh: "#减压 南非醉茄指南" },
        "#General MillsOmega3 Family Table Guide": { en: "#General MillsOmega3 Family Table Guide", ja: "#General MillsOmega3 ファミリーテーブル健康ガイド", th: "#General MillsOmega3 คู่มือสุขภาพหัวใจ", zh: "#General MillsOmega3 家庭餐桌健康指南" },
        "Häagen-Dazs Mini Cupenter | GENERAL MILLS® Partner Portal": { en: "Häagen-Dazs Mini Cupenter | GENERAL MILLS® Partner Portal", ja: "プロダクトセンター | GENERAL MILLS® パートナーポータル", th: "ศูนย์สินค้า | GENERAL MILLS® พอร์ทัลพันธมิตร", zh: "产品中心 | GENERAL MILLS® 合作伙伴门户" },
        "Häagen-Dazs Mini Cupenter": { en: "Häagen-Dazs Mini Cupenter", ja: "プロダクトセンター", th: "ศูนย์สินค้า", zh: "产品中心" },
        "Products (45)": { en: "Products (45)", ja: "プロダクト (45)", th: "ผลิตภัณฑ์ (45)", zh: "产品 (45)" },
        "Minerals (32)": { en: "Minerals (32)", ja: "ミネラル (32)", th: "แร่ธาตุ (32)", zh: "矿物质 (32)" },
        "family dinner (28)": { en: "family dinner (28)", ja: "オメガ-3 (28)", th: "โอเมก้า-3 (28)", zh: "family dinner (28)" },
        "Wanchai Ferry Quick Meal (24)": { en: "Wanchai Ferry Quick Meal (24)", ja: "プロバイオティクス (24)", th: "โปรไบโอติก (24)", zh: "湾仔码头快手餐 (24)" },
        "Seasonal occasion Boost (18)": { en: "Seasonal occasion Boost (18)", ja: "季节场景ブースト (18)", th: "บูสต์โอกาสตามฤดูกาล (18)", zh: "季节场景提升 (18)" },
        "Sports Nutrition (15)": { en: "Sports Nutrition (15)", ja: "スポーツ栄養 (15)", th: "โภชนาการกีฬา (15)", zh: "运动营养 (15)" },
        "B2B product catalog with exclusive partner pricing. 250+ SKUs available.": { en: "B2B product catalog with exclusive partner pricing. 250+ SKUs available.", ja: "パートナー限定価格のB2B製品カタログ。250以上のSKUが利用可能。", th: "แคตตาล็อกสินค้า B2B ราคาพันธมิตรพิเศษ พร้อม 250+ SKU", zh: "B2B产品目录，专属合作伙伴价格。250+ SKU 可供选择。" },
        "Total SKUs": { en: "Total SKUs", ja: "SKU総数", th: "SKU ทั้งหมด", zh: "SKU 总数" },
        "Avg. Partner Discount": { en: "Avg. Partner Discount", ja: "平均パートナー割引", th: "ส่วนลดพันธมิตรเฉลี่ย", zh: "平均合作伙伴折扣" },
        "Your YTD Savings": { en: "Your YTD Savings", ja: "年間累積節約額", th: "การออมสะสมปีนี้", zh: "年度节省金额" },
        "Orders This Quarter": { en: "Orders This Quarter", ja: "今四半期の注文", th: "คำสั่งซื้อไตรมาสนี้", zh: "本季度订单" },
        "In Stock": { en: "In Stock", ja: "在庫あり", th: "มีสินค้า", zh: "有库存" },
        "New Arrival": { en: "New Arrival", ja: "新入荷", th: "สินค้าใหม่", zh: "新品" },
        "On Sale": { en: "On Sale", ja: "セール中", th: "ลดราคา", zh: "促销中" },
        "General Mills Wanchai Ferry Dumpling Packmg": { en: "General Mills Wanchai Ferry Dumpling Packmg", ja: "General Mills フィッシュオイル 1000mg", th: "General Mills Wanchai Ferry Dumpling Packmg", zh: "General Mills 湾仔码头水饺 1000mg" },
        "Contract: SGD 45.00": { en: "Contract: SGD 45.00", ja: "契約: SGD 45.00", th: "สัญญา: SGD 45.00", zh: "合同价: SGD 45.00" },
        "You save SGD 8.10 per unit": { en: "You save SGD 8.10 per unit", ja: "単位あたりSGD 8.10節約", th: "ประหยัด SGD 8.10 ต่อหน่วย", zh: "每单位节省 SGD 8.10" },
        "MOQ: 12 bottles": { en: "MOQ: 12 bottles", ja: "最小注文: 12本", th: "จำนวนขั้นต่ำ: 12 ขวด", zh: "最小起订量: 12 瓶" },
        "Add to Cart": { en: "Add to Cart", ja: "カートに追加", th: "เพิ่มลงตะกร้า", zh: "加入购物车" },
        "General Mills Häagen-Dazs Mini Cupmg": { en: "General Mills Häagen-Dazs Mini Cupmg", ja: "General Mills Häagen-Dazs Mini Cupmg", th: "General Mills Häagen-Dazs Mini Cupmg", zh: "General Mills Häagen-Dazs Mini Cupmg" },
        "Contract: SGD 38.00": { en: "Contract: SGD 38.00", ja: "契約: SGD 38.00", th: "สัญญา: SGD 38.00", zh: "合同价: SGD 38.00" },
        "You save SGD 6.50 per unit": { en: "You save SGD 6.50 per unit", ja: "単位あたりSGD 6.50節約", th: "ประหยัด SGD 6.50 ต่อหน่วย", zh: "每单位节省 SGD 6.50" },
        "Contract: SGD 72.00": { en: "Contract: SGD 72.00", ja: "契約: SGD 72.00", th: "สัญญา: SGD 72.00", zh: "合同价: SGD 72.00" },
        "You save SGD 13.10 per unit": { en: "You save SGD 13.10 per unit", ja: "単位あたりSGD 13.10節約", th: "ประหยัด SGD 13.10 ต่อหน่วย", zh: "每单位节省 SGD 13.10" },
        "MOQ: 6 bottles": { en: "MOQ: 6 bottles", ja: "最小注文: 6本", th: "จำนวนขั้นต่ำ: 6 ขวด", zh: "最小起订量: 6 瓶" },
        "General Mills Multiproducts + Minerals": { en: "General Mills Multiproducts + Minerals", ja: "General Mills マルチプロダクト + ミネラル", th: "General Mills Multiproducts + Minerals", zh: "General Mills 多种产品 + 矿物质" },
        "Contract: SGD 42.00": { en: "Contract: SGD 42.00", ja: "契約: SGD 42.00", th: "สัญญา: SGD 42.00", zh: "合同价: SGD 42.00" },
        "You save SGD 7.50 per unit": { en: "You save SGD 7.50 per unit", ja: "単位あたりSGD 7.50節約", th: "ประหยัด SGD 7.50 ต่อหน่วย", zh: "每单位节省 SGD 7.50" },
        "General Mills Wanchai Ferry Quick Meal+ (90 packs)": { en: "General Mills Wanchai Ferry Quick Meal+ (90 packs)", ja: "General Mills プロバイオティクス+ (90カプセル)", th: "General Mills Wanchai Ferry Quick Meal+ (90 แคปซูล)", zh: "General Mills 湾仔码头快手餐+ (90份)" },
        "Contract: SGD 55.00": { en: "Contract: SGD 55.00", ja: "契約: SGD 55.00", th: "สัญญา: SGD 55.00", zh: "合同价: SGD 55.00" },
        "You save SGD 13.00 per unit": { en: "You save SGD 13.00 per unit", ja: "単位あたりSGD 13.00節約", th: "ประหยัด SGD 13.00 ต่อหน่วย", zh: "每单位节省 SGD 13.00" },
        "MOQ: 8 bottles": { en: "MOQ: 8 bottles", ja: "最小注文: 8本", th: "จำนวนขั้นต่ำ: 8 ขวด", zh: "最小起订量: 8 瓶" },
        "General Mills Wanchai Ferry Wontons Sulfate 1500mg": { en: "General Mills Wanchai Ferry Wontons Sulfate 1500mg", ja: "General Mills グルコサミン硫酸 1500mg", th: "General Mills Wanchai Ferry Wontons Sulfate 1500mg", zh: "General Mills 氨基葡萄糖硫酸盐 1500mg" },
        "Contract: SGD 68.00": { en: "Contract: SGD 68.00", ja: "契約: SGD 68.00", th: "สัญญา: SGD 68.00", zh: "合同价: SGD 68.00" },
        "Low Stock": { en: "Low Stock", ja: "在庫僅少", th: "สินค้าใกล้หมด", zh: "库存紧张" },
        "General Mills Häagen-Dazs Seasonal Flavor": { en: "General Mills Häagen-Dazs Seasonal Flavor", ja: "General Mills 月見草オイル", th: "General Mills Häagen-Dazs Seasonal Flavor", zh: "General Mills 月见草油" },
        "Contract: SGD 52.00": { en: "Contract: SGD 52.00", ja: "契約: SGD 52.00", th: "สัญญา: SGD 52.00", zh: "合同价: SGD 52.00" },
        "You save SGD 9.50 per unit": { en: "You save SGD 9.50 per unit", ja: "単位あたりSGD 9.50節約", th: "ประหยัด SGD 9.50 ต่อหน่วย", zh: "每单位节省 SGD 9.50" },
        "General Mills Natural Product E Cream": { en: "General Mills Natural Product E Cream", ja: "General Mills ナチュラルプロダクトEクリーム", th: "General Mills Natural Product E Cream", zh: "General Mills 天然产品E霜" },
        "Contract: SGD 28.00": { en: "Contract: SGD 28.00", ja: "契約: SGD 28.00", th: "สัญญา: SGD 28.00", zh: "合同价: SGD 28.00" },
        "You save SGD 5.10 per unit": { en: "You save SGD 5.10 per unit", ja: "単位あたりSGD 5.10節約", th: "ประหยัด SGD 5.10 ต่อหน่วย", zh: "每单位节省 SGD 5.10" },
        "MOQ: 24 tubes": { en: "MOQ: 24 tubes", ja: "最小注文: 24本", th: "จำนวนขั้นต่ำ: 24 หลอด", zh: "最小起订量: 24 支" },
        "General Mills Häagen-Dazs Pintmg": { en: "General Mills Häagen-Dazs Pintmg", ja: "General Mills Häagen-Dazs Pintmg", th: "General Mills Häagen-Dazs Pintmg", zh: "General Mills Häagen-Dazs Pintmg" },
        "Contract: SGD 62.00": { en: "Contract: SGD 62.00", ja: "契約: SGD 62.00", th: "สัญญา: SGD 62.00", zh: "合同价: SGD 62.00" },
        "You save SGD 12.00 per unit": { en: "You save SGD 12.00 per unit", ja: "単位あたりSGD 12.00節約", th: "ประหยัด SGD 12.00 ต่อหน่วย", zh: "每单位节省 SGD 12.00" },
        "General Mills Buffered C Slow Release": { en: "General Mills Buffered C Slow Release", ja: "General Mills バッファードC 徐放", th: "General Mills Buffered C Slow Release", zh: "General Mills 缓释哈根达斯迷你杯" },
        "Contract: SGD 48.00": { en: "Contract: SGD 48.00", ja: "契約: SGD 48.00", th: "สัญญา: SGD 48.00", zh: "合同价: SGD 48.00" },
        "You save SGD 9.00 per unit": { en: "You save SGD 9.00 per unit", ja: "単位あたりSGD 9.00節約", th: "ประหยัด SGD 9.00 ต่อหน่วย", zh: "每单位节省 SGD 9.00" },
        "General Mills Immune Defence Ultra": { en: "General Mills Immune Defence Ultra", ja: "General Mills 季节场景ディフェンスウルトラ", th: "General Mills Immune Defence Ultra", zh: "General Mills 季节场景防护加强版" },
        "Contract: SGD 58.00": { en: "Contract: SGD 58.00", ja: "契約: SGD 58.00", th: "สัญญา: SGD 58.00", zh: "合同价: SGD 58.00" },
        "You save SGD 11.00 per unit": { en: "You save SGD 11.00 per unit", ja: "単位あたりSGD 11.00節約", th: "ประหยัด SGD 11.00 ต่อหน่วย", zh: "每单位节省 SGD 11.00" },
        "General Mills Muscle Workday Snack Powder": { en: "General Mills Muscle Workday Snack Powder", ja: "General Mills マッスルマグネシウムパウダー", th: "General Mills Muscle Workday Snack Powder", zh: "General Mills 肌肉镁粉" },
        "Contract: SGD 35.00": { en: "Contract: SGD 35.00", ja: "契約: SGD 35.00", th: "สัญญา: SGD 35.00", zh: "合同价: SGD 35.00" },
        "You save SGD 7.00 per unit": { en: "You save SGD 7.00 per unit", ja: "単位あたりSGD 7.00節約", th: "ประหยัด SGD 7.00 ต่อหน่วย", zh: "每单位节省 SGD 7.00" },
        "MOQ: 12 packs": { en: "MOQ: 12 packs", ja: "最小注文: 12パック", th: "จำนวนขั้นต่ำ: 12 แพ็ค", zh: "最小起订量: 12 包" },
        "Back to Products": { en: "Back to Products", ja: "製品へ戻る", th: "กลับไปสินค้า", zh: "返回产品" },
        "A premium source of family dinner fatty acids EPA and occasion cues, essential for family-table relevance, brain function, and overall wellbeing. Each pack contains 1000mg of high-quality Wanchai Ferry dumplings.": { en: "A premium source of family dinner fatty acids EPA and occasion cues, essential for family-table relevance, brain function, and overall wellbeing. Each pack contains 1000mg of high-quality Wanchai Ferry dumplings.", ja: "EPAとoccasion cuesを含むオメガ3脂肪酸のプレミアムソース。ファミリーテーブル健康、脳機能、総合的な健康に不可欠。1カプセルに高品質フィッシュオイル1000mg含有。", th: "แหล่งโอเมก้า-3 คุณภาพสูงที่มี EPA และ occasion cues จำเป็นสำหรับสุขภาพหัวใจ สมอง และความเป็นอยู่โดยรวม แคปซูลละ 1000mg", zh: "优质 family dinner 脂肪酸 EPA 和 occasion cues 来源，对家庭餐桌健康、大脑功能和整体健康至关重要。每份包装含 1000mg 高品质湾仔码头水饺。" },
        "Contract Price": { en: "Contract Price", ja: "契約価格", th: "ราคาสัญญา", zh: "合同价" },
        "Your Coupon Price": { en: "Your Coupon Price", ja: "クーポン価格", th: "ราคาคูปอง", zh: "优惠价格" },
        "You Save": { en: "You Save", ja: "節約額", th: "ประหยัด", zh: "节省" },
        "Your Price": { en: "Your Price", ja: "あなたの価格", th: "ราคาของคุณ", zh: "您的价格" },
        "♡ Save to List": { en: "♡ Save to List", ja: "♡ リストに保存", th: "♡ บันทึกในรายการ", zh: "♡ 保存到列表" },
        "Shopping Cart": { en: "Shopping Cart", ja: "ショッピングカート", th: "ตะกร้าสินค้า", zh: "购物车" },
        "Review your order before checkout.": { en: "Review your order before checkout.", ja: "チェックアウト前に注文を確認。", th: "ตรวจสอบคำสั่งซื้อก่อนชำระเงิน", zh: "结账前请确认您的订单。" },
        "Cart Items": { en: "Cart Items", ja: "カートアイテム", th: "รายการในตะกร้า", zh: "购物车商品" },
        "(0 items)": { en: "(0 items)", ja: "(0アイテム)", th: "(0 รายการ)", zh: "(0 件商品)" },
        "Clear All": { en: "Clear All", ja: "すべてクリア", th: "ล้างทั้งหมด", zh: "清空全部" },
        "Dynamic cart items rendered here": { en: "Dynamic cart items rendered here", ja: "動的カートアイテムはここに表示", th: "แสดงรายการตะกร้าแบบไดนามิก", zh: "动态购物车内容显示于此" },
        "Your cart is empty": { en: "Your cart is empty", ja: "カートは空です", th: "ตะกร้าว่างเปล่า", zh: "购物车为空" },
        "Browse our product catalog and add items to your cart.": { en: "Browse our product catalog and add items to your cart.", ja: "製品カタログを閲覧し、カートに追加。", th: "ดูแคตตาล็อกสินค้าและเพิ่มลงตะกร้า", zh: "浏览产品目录并添加商品到购物车。" },
        "Continue Shopping": { en: "Continue Shopping", ja: "買い物を続ける", th: "เลือกซื้อต่อ", zh: "继续购物" },
        "Order Summary": { en: "Order Summary", ja: "注文サマリー", th: "สรุปคำสั่งซื้อ", zh: "订单摘要" },
        "Subtotal ( items)": { en: "Subtotal ( items)", ja: "小計 (アイテム)", th: "ยอดรวม (รายการ)", zh: "小计 (件商品)" },
        "Contract Total": { en: "Contract Total", ja: "契約合計", th: "ยอดสัญญา", zh: "合同总价" },
        "Partner Discount": { en: "Partner Discount", ja: "パートナー割引", th: "ส่วนลดพันธมิตร", zh: "合作伙伴折扣" },
        "− SGD 0.00": { en: "− SGD 0.00", ja: "− SGD 0.00", th: "− SGD 0.00", zh: "− SGD 0.00" },
        "GST (9%)": { en: "GST (9%)", ja: "GST (9%)", th: "GST (9%)", zh: "GST (9%)" },
        "Proceed to Checkout →": { en: "Proceed to Checkout →", ja: "チェックアウトへ進む →", th: "ดำเนินการชำระเงิน →", zh: "前往结账 →" },
        "Back to Cart": { en: "Back to Cart", ja: "カートへ戻る", th: "กลับไปตะกร้า", zh: "返回购物车" },
        "Complete your order with B2B partner pricing.": { en: "Complete your order with B2B partner pricing.", ja: "B2Bパートナー価格で注文を完了。", th: "เสร็จสิ้นคำสั่งซื้อด้วยราคาพันธมิตร B2B", zh: "以 B2B 合作伙伴价格完成订单。" },
        "Company Name": { en: "Company Name", ja: "会社名", th: "ชื่อบริษัท", zh: "公司名称" },
        "Contact Name": { en: "Contact Name", ja: "担当者名", th: "ชื่อผู้ติดต่อ", zh: "联系人姓名" },
        "Delivery Date": { en: "Delivery Date", ja: "配達日", th: "วันจัดส่ง", zh: "配送日期" },
        "Delivery Address": { en: "Delivery Address", ja: "配達先住所", th: "ที่อยู่จัดส่ง", zh: "配送地址" },
        "Purchase Order Number": { en: "Purchase Order Number", ja: "注文番号", th: "เลขที่ใบสั่งซื้อ", zh: "采购订单号" },
        "Continue to Payment →": { en: "Continue to Payment →", ja: "支払いへ進む →", th: "ดำเนินการชำระเงิน →", zh: "继续付款 →" },
        "Back to Shipping": { en: "Back to Shipping", ja: "配送へ戻る", th: "กลับไปจัดส่ง", zh: "返回配送" },
        "Choose your payment method.": { en: "Choose your payment method.", ja: "支払い方法を選択。", th: "เลือกวิธีการชำระเงิน", zh: "选择付款方式。" },
        "Payment Method": { en: "Payment Method", ja: "支払い方法", th: "วิธีการชำระเงิน", zh: "付款方式" },
        "Credit Card": { en: "Credit Card", ja: "クレジットカード", th: "บัตรเครดิต", zh: "信用卡" },
        "Visa / Mastercard": { en: "Visa / Mastercard", ja: "Visa / Mastercard", th: "Visa / Mastercard", zh: "Visa / Mastercard" },
        "Bank Transfer": { en: "Bank Transfer", ja: "銀行振込", th: "โอนผ่านธนาคาร", zh: "银行转账" },
        "NETS / GIRO": { en: "NETS / GIRO", ja: "NETS / GIRO", th: "NETS / GIRO", zh: "NETS / GIRO" },
        "30-day terms": { en: "30-day terms", ja: "30日後払い", th: "เงื่อนไข 30 วัน", zh: "30天账期" },
        "Card Number": { en: "Card Number", ja: "カード番号", th: "หมายเลขบัตร", zh: "卡号" },
        "Cardholder Name": { en: "Cardholder Name", ja: "カード名義人", th: "ชื่อผู้ถือบัตร", zh: "持卡人姓名" },
        "Expiry Date": { en: "Expiry Date", ja: "有効期限", th: "วันหมดอายุ", zh: "有效期" },
        "Review Order →": { en: "Review Order →", ja: "注文を確認 →", th: "ตรวจสอบคำสั่งซื้อ →", zh: "查看订单 →" },
        "Back to Payment": { en: "Back to Payment", ja: "支払いへ戻る", th: "กลับไปชำระเงิน", zh: "返回付款" },
        "Double-check your order details before placing.": { en: "Double-check your order details before placing.", ja: "注文確定前に詳細を再確認。", th: "ตรวจสอบรายละเอียดคำสั่งซื้อก่อนยืนยัน", zh: "确认订单前请再次核对详情。" },
        "Shipping Information": { en: "Shipping Information", ja: "配送情報", th: "ข้อมูลการจัดส่ง", zh: "配送信息" },
        "Order Items": { en: "Order Items", ja: "注文アイテム", th: "รายการคำสั่งซื้อ", zh: "订单商品" },
        "Place Order →": { en: "Place Order →", ja: "注文を確定 →", th: "ยืนยันคำสั่งซื้อ →", zh: "确认订单 →" },
        "Order Placed Successfully!": { en: "Order Placed Successfully!", ja: "注文完了！", th: "คำสั่งซื้อสำเร็จ!", zh: "订单提交成功！" },
        "Your order has been confirmed and is being processed.": { en: "Your order has been confirmed and is being processed.", ja: "注文が確認され、処理中です。", th: "คำสั่งซื้อได้รับการยืนยันและกำลังดำเนินการ", zh: "您的订单已确认，正在处理中。" },
        "sarah@everyday enjoymentdist.sg": { en: "sarah@everyday enjoymentdist.sg", ja: "sarah@everyday enjoymentdist.sg", th: "sarah@everyday enjoymentdist.sg", zh: "sarah@everyday enjoymentdist.sg" },
        "View Order History": { en: "View Order History", ja: "注文履歴を表示", th: "ดูประวัติคำสั่งซื้อ", zh: "查看订单历史" },
        "Your Product Advisor": { en: "Your Product Advisor", ja: "製品アドバイザー", th: "ที่ปรึกษาสินค้า", zh: "您的产品顾问" },
        "Hi! I can help you find products, compare pricing, check stock levels, or recommend bestsellers for your market. What do you need?": { en: "Hi! I can help you find products, compare pricing, check stock levels, or recommend bestsellers for your market. What do you need?", ja: "こんにちは！製品検索、価格比較、在庫確認、ベストセラー推奨ができます。何をお探しですか？", th: "สวัสดี! ฉันสามารถช่วยค้นหาสินค้า เปรียบเทียบราคา เช็คสต็อก หรือแนะนำสินค้าขายดีได้ คุณต้องการอะไร?", zh: "您好！我可以帮您查找产品、比较价格、检查库存水平，或推荐您市场的热销产品。您需要什么？" },
        "MOQ for Wanchai Ferry Dumplings": { en: "MOQ for Wanchai Ferry Dumplings", ja: "フィッシュオイルの最小注文", th: "MOQ สำหรับ Wanchai Ferry Dumplings", zh: "湾仔码头水饺最小起订量" },
        "Bestsellers SG": { en: "Bestsellers SG", ja: "シンガポールベストセラー", th: "สินค้าขายดี SG", zh: "新加坡热销产品" },
        "Compare family dinner": { en: "Compare family dinner", ja: "オメガ-3を比較", th: "เปรียบเทียบ family dinner", zh: "比较 family dinner" },
        "Order Status": { en: "Order Status", ja: "注文状況", th: "สถานะคำสั่งซื้อ", zh: "订单状态" },
        "I'll help you with that.": { en: "I'll help you with that.", ja: "お手伝いします。", th: "ยินดีช่วยเหลือค่ะ", zh: "我来帮您。" },
        "I'll help you with that! Let me check our product database and get back to you with the details.": { en: "I'll help you with that! Let me check our product database and get back to you with the details.", ja: "お手伝いします！製品データベースを確認して詳細をお知らせします。", th: "ยินดีช่วยเหลือค่ะ! ฉันจะเช็คฐานข้อมูลสินค้าและตอบกลับพร้อมรายละเอียด", zh: "我来帮您！让我查看产品数据库，然后为您提供详细信息。" },
        "AI Help Response": { en: "I'll help you with that! Let me check our product database and get back to you with the details.", ja: "お手伝いします！製品データベースを確認して詳細をお知らせします。", th: "ยินดีช่วยเหลือค่ะ! ฉันจะเช็คฐานข้อมูลสินค้าและตอบกลับพร้อมรายละเอียด", zh: "我来帮您！让我查看产品数据库，然后为您提供详细信息。" },
        "Orders | GENERAL MILLS® Partner Portal": { en: "Orders | GENERAL MILLS® Partner Portal", ja: "注文 | GENERAL MILLS® パートナーポータル", th: "คำสั่งซื้อ | GENERAL MILLS® พอร์ทัลพันธมิตร", zh: "订单 | GENERAL MILLS® 合作伙伴门户" },
        "Order Center": { en: "Order Center", ja: "注文センター", th: "ศูนย์คำสั่งซื้อ", zh: "订单中心" },
        "My Orders": { en: "My Orders", ja: "マイ注文", th: "คำสั่งซื้อของฉัน", zh: "我的订单" },
        "Order Details": { en: "Order Details", ja: "注文詳細", th: "รายละเอียดคำสั่งซื้อ", zh: "订单详情" },
        "Track Order": { en: "Track Order", ja: "注文追跡", th: "ติดตามคำสั่งซื้อ", zh: "追踪订单" },
        "📦 Inventory Dashboard": { en: "📦 Inventory Dashboard", ja: "📦 在庫ダッシュボード", th: "📦 แดชบอร์ดสต็อก", zh: "📦 库存仪表板" },
        "🤖 AI Replenishment": { en: "🤖 AI Replenishment", ja: "🤖 AI 補充", th: "🤖 AI เติมสต็อก", zh: "🤖 AI 补货" },
        "🔗 Bundle Recommendations": { en: "🔗 Bundle Recommendations", ja: "🔗 バンドル推奨", th: "🔗 แนะนำชุดสินค้า", zh: "🔗 捆绑推荐" },
        "💰 Rebate Calculator": { en: "💰 Rebate Calculator", ja: "💰 リベート計算機", th: "💰 เครื่องคำนวณรีเบท", zh: "💰 返利计算器" },
        "Track and manage all your B2B orders with GENERAL MILLS.": { en: "Track and manage all your B2B orders with GENERAL MILLS.", ja: "GENERAL MILLSで全B2B注文を追跡・管理。", th: "ติดตามและจัดการคำสั่งซื้อ B2B ทั้งหมดกับ GENERAL MILLS", zh: "在 GENERAL MILLS 追踪和管理您的所有 B2B 订单。" },
        "Total Orders": { en: "Total Orders", ja: "注文総数", th: "คำสั่งซื้อทั้งหมด", zh: "订单总数" },
        "↑ 8% vs last quarter": { en: "↑ 8% vs last quarter", ja: "↑ 前期比8%増", th: "↑ เพิ่ม 8% เทียบไตรมาสก่อน", zh: "↑ 较上季度增长 8%" },
        "↓ 2 from last week": { en: "↓ 2 from last week", ja: "↓ 先週比2件減", th: "↓ ลด 2 รายการจากสัปดาห์ที่แล้ว", zh: "↓ 较上周减少 2 单" },
        "This Month Spend": { en: "This Month Spend", ja: "今月の支出", th: "การใช้จ่ายเดือนนี้", zh: "本月支出" },
        "↑ 15% vs last month": { en: "↑ 15% vs last month", ja: "↑ 先月比15%増", th: "↑ เพิ่ม 15% เทียบเดือนก่อน", zh: "↑ 较上月增长 15%" },
        "Partner Savings": { en: "Partner Savings", ja: "パートナー節約額", th: "การออมของพันธมิตร", zh: "合作伙伴节省" },
        "↑ SGD 350 this month": { en: "↑ SGD 350 this month", ja: "↑ 今月SGD 350節約", th: "↑ ประหยัด SGD 350 เดือนนี้", zh: "↑ 本月节省 SGD 350" },
        "Action Required": { en: "Action Required", ja: "対応が必要", th: "ต้องดำเนินการ", zh: "需要操作" },
        "Häagen-Dazs Mini Cupmg": { en: "Häagen-Dazs Mini Cupmg", ja: "Häagen-Dazs Mini Cupmg", th: "Häagen-Dazs Mini Cupmg", zh: "Häagen-Dazs Mini Cupmg" },
        "View Details": { en: "View Details", ja: "詳細を表示", th: "ดูรายละเอียด", zh: "查看详情" },
        "Download Invoice": { en: "Download Invoice", ja: "請求書をダウンロード", th: "ดาวน์โหลดใบแจ้งหนี้", zh: "下载发票" },
        "Immune Defence Ultra": { en: "Immune Defence Ultra", ja: "Immune Defence Ultra", th: "Immune Defence Ultra", zh: "Immune Defence Ultra" },
        "Wanchai Ferry Quick Meal+ 90 packs": { en: "Wanchai Ferry Quick Meal+ 90 packs", ja: "Wanchai Ferry Quick Meal+ 90カプセル", th: "Wanchai Ferry Quick Meal+ 90 แคปซูล", zh: "Wanchai Ferry Quick Meal+ 90份" },
        "Approve Payment": { en: "Approve Payment", ja: "支払いを承認", th: "อนุมัติการชำระเงิน", zh: "批准付款" },
        "Multiproducts + Minerals": { en: "Multiproducts + Minerals", ja: "マルチプロダクト + ミネラル", th: "Multiproducts + Minerals", zh: "多种产品 + 矿物质" },
        "Back to Orders": { en: "Back to Orders", ja: "注文へ戻る", th: "กลับไปคำสั่งซื้อ", zh: "返回订单" },
        "Order Timeline": { en: "Order Timeline", ja: "注文タイムライン", th: "ไทม์ไลน์คำสั่งซื้อ", zh: "订单时间线" },
        "12 × SGD 36.90": { en: "12 × SGD 36.90", ja: "12 × SGD 36.90", th: "12 × SGD 36.90", zh: "12 × SGD 36.90" },
        "12 × SGD 31.50": { en: "12 × SGD 31.50", ja: "12 × SGD 31.50", th: "12 × SGD 31.50", zh: "12 × SGD 31.50" },
        "− SGD 164.16": { en: "− SGD 164.16", ja: "− SGD 164.16", th: "− SGD 164.16", zh: "− SGD 164.16" },
        "Delivery Information": { en: "Delivery Information", ja: "配送情報", th: "ข้อมูลการจัดส่ง", zh: "配送信息" },
        "Guardian KL Store #12": { en: "Guardian KL Store #12", ja: "Guardian KL ストア #12", th: "Guardian KL สาขา #12", zh: "Guardian KL 门店 #12" },
        "123 Jalan Bukit Bintang, 50200 Kuala Lumpur, Malaysia": { en: "123 Jalan Bukit Bintang, 50200 Kuala Lumpur, Malaysia", ja: "123 Jalan Bukit Bintang, 50200 クアラルンプール, マレーシア", th: "123 Jalan Bukit Bintang, 50200 กัวลาลัมเปอร์, มาเลเซีย", zh: "123 Jalan Bukit Bintang, 50200 吉隆坡, 马来西亚" },
        "Tracking Number": { en: "Tracking Number", ja: "追跡番号", th: "หมายเลขติดตาม", zh: "追踪号码" },
        "Estimated Delivery": { en: "Estimated Delivery", ja: "予定配達日", th: "วันจัดส่งโดยประมาณ", zh: "预计送达" },
        "May 25, 2026 · 14:00–18:00": { en: "May 25, 2026 · 14:00–18:00", ja: "2026年5月25日 · 14:00–18:00", th: "25 พ.ค. 2026 · 14:00–18:00", zh: "2026年5月25日 · 14:00–18:00" },
        "Tracking Progress": { en: "Tracking Progress", ja: "追跡進捗", th: "ความคืบหน้าการติดตาม", zh: "追踪进度" },
        "Order Placed": { en: "Order Placed", ja: "注文確定", th: "คำสั่งซื้อสำเร็จ", zh: "订单已提交" },
        "May 15, 2026 · 09:15 · Order confirmed by system": { en: "May 15, 2026 · 09:15 · Order confirmed by system", ja: "2026年5月15日 · 09:15 · システムで注文確認済み", th: "15 พ.ค. 2026 · 09:15 · ระบบยืนยันคำสั่งซื้อแล้ว", zh: "2026年5月15日 · 09:15 · 系统已确认订单" },
        "May 16, 2026 · 08:30 · Items picked and packed at warehouse": { en: "May 16, 2026 · 08:30 · Items picked and packed at warehouse", ja: "2026年5月16日 · 08:30 · 倉庫でピッキング・梱包完了", th: "16 พ.ค. 2026 · 08:30 · หยิบและแพ็คสินค้าที่คลังแล้ว", zh: "2026年5月16日 · 08:30 · 仓库已拣货打包" },
        "May 17, 2026 · 14:22 · Handed to DHL Express · Tracking: DHL-7894561230": { en: "May 17, 2026 · 14:22 · Handed to DHL Express · Tracking: DHL-7894561230", ja: "2026年5月17日 · 14:22 · DHL Expressに引き渡し · 追跡: DHL-7894561230", th: "17 พ.ค. 2026 · 14:22 · ส่งมอบ DHL Express · ติดตาม: DHL-7894561230", zh: "2026年5月17日 · 14:22 · 已交 DHL Express · 追踪: DHL-7894561230" },
        "In Transit": { en: "In Transit", ja: "配送中", th: "ระหว่างจัดส่ง", zh: "运输中" },
        "Expected May 20, 2026 · Currently at Kuala Lumpur Distribution Center": { en: "Expected May 20, 2026 · Currently at Kuala Lumpur Distribution Center", ja: "2026年5月20日予定 · 現在クアラルンプール配送センター", th: "คาดว่า 20 พ.ค. 2026 · ปัจจุบันที่ศูนย์กระจายสินค้ากัวลาลัมเปอร์", zh: "预计 2026年5月20日 · 目前在吉隆坡配送中心" },
        "Expected May 20, 2026 · 14:00–18:00": { en: "Expected May 20, 2026 · 14:00–18:00", ja: "2026年5月20日予定 · 14:00–18:00", th: "คาดว่า 20 พ.ค. 2026 · 14:00–18:00", zh: "预计 2026年5月20日 · 14:00–18:00" },
        "Real-time stock synced from ERP/WMS. Monitor levels, set alerts, never miss a restock.": { en: "Real-time stock synced from ERP/WMS. Monitor levels, set alerts, never miss a restock.", ja: "ERP/WMSからリアルタイム在庫同期。レベル監視、アラート設定、在庫切れを防ぐ。", th: "ซิงค์สต็อกเรียลไทม์จาก ERP/WMS ตรวจสอบระดับ ตั้งการแจ้งเตือน ไม่พลาดการเติมสต็อก", zh: "从 ERP/WMS 实时同步库存。监控水平、设置警报，绝不错过补货。" },
        "ERP/WMS Real-Time Sync — Active": { en: "ERP/WMS Real-Time Sync — Active", ja: "ERP/WMS リアルタイム同期 — 有効", th: "ERP/WMS ซิงค์เรียลไทม์ — ใช้งาน", zh: "ERP/WMS 实时同步 — 活跃" },
        "Last sync: 2 minutes ago · SAP S/4HANA + Oracle WMS": { en: "Last sync: 2 minutes ago · SAP S/4HANA + Oracle WMS", ja: "最終同期: 2分前 · SAP S/4HANA + Oracle WMS", th: "ซิงค์ล่าสุด: 2 นาทีที่แล้ว · SAP S/4HANA + Oracle WMS", zh: "上次同步: 2分钟前 · SAP S/4HANA + Oracle WMS" },
        "✓ SAP Online": { en: "✓ SAP Online", ja: "✓ SAP オンライン", th: "✓ SAP ออนไลน์", zh: "✓ SAP 在线" },
        "✓ WMS Online": { en: "✓ WMS Online", ja: "✓ WMS オンライン", th: "✓ WMS ออนไลน์", zh: "✓ WMS 在线" },
        "Total SKUs in Stock": { en: "Total SKUs in Stock", ja: "在庫SKU総数", th: "SKU ทั้งหมดในสต็อก", zh: "库存 SKU 总数" },
        "↑ 12 from last week": { en: "↑ 12 from last week", ja: "↑ 先週比12増", th: "↑ เพิ่ม 12 จากสัปดาห์ที่แล้ว", zh: "↑ 较上周增加 12" },
        "Low Stock Alert": { en: "Low Stock Alert", ja: "在庫僅少アラート", th: "แจ้งเตือนสินค้าใกล้หมด", zh: "低库存警报" },
        "⚠ Below safety line": { en: "⚠ Below safety line", ja: "⚠ 安全ライン下回り", th: "⚠ ต่ำกว่าเส้นความปลอดภัย", zh: "⚠ 低于安全线" },
        "Out of Stock": { en: "Out of Stock", ja: "在庫切れ", th: "สินค้าหมด", zh: "缺货" },
        "🔴 Need urgent restock": { en: "🔴 Need urgent restock", ja: "🔴 緊急補充が必要", th: "🔴 ต้องเติมสต็อกด่วน", zh: "🔴 急需补货" },
        "Inventory Value": { en: "Inventory Value", ja: "在庫価値", th: "มูลค่าสต็อก", zh: "库存价值" },
        "↑ 3.2% MoM": { en: "↑ 3.2% MoM", ja: "↑ 前月比3.2%増", th: "↑ เพิ่ม 3.2% เดือนต่อเดือน", zh: "↑ 环比增长 3.2%" },
        "All Warehouses": { en: "All Warehouses", ja: "全倉庫", th: "คลังทั้งหมด", zh: "全部仓库" },
        "Sydney DC": { en: "Sydney DC", ja: "シドニーDC", th: "ซิดนีย์ DC", zh: "悉尼配送中心" },
        "KL Hub": { en: "KL Hub", ja: "KLハブ", th: "KL Hub", zh: "吉隆坡枢纽" },
        "Singapore Hub": { en: "Singapore Hub", ja: "シンガポールハブ", th: "สิงคโปร์ Hub", zh: "新加坡枢纽" },
        "Bangkok DC": { en: "Bangkok DC", ja: "バンコクDC", th: "กรุงเทพ DC", zh: "曼谷配送中心" },
        "✅ Healthy": { en: "✅ Healthy", ja: "✅ 正常", th: "✅ สุขภาพดี", zh: "✅ 正常" },
        "⚠️ Low Stock": { en: "⚠️ Low Stock", ja: "⚠️ 在庫僅少", th: "⚠️ สินค้าใกล้หมด", zh: "⚠️ 低库存" },
        "🔴 Out of Stock": { en: "🔴 Out of Stock", ja: "🔴 在庫切れ", th: "🔴 สินค้าหมด", zh: "🔴 缺货" },
        "On Hand": { en: "On Hand", ja: "手持ち", th: "คงเหลือ", zh: "现有库存" },
        "Safety Stock": { en: "Safety Stock", ja: "安全在庫", th: "สต็อกความปลอดภัย", zh: "安全库存" },
        "Last Sync": { en: "Last Sync", ja: "最終同期", th: "ซิงค์ล่าสุด", zh: "上次同步" },
        "Products · 400 packs": { en: "Products · 400 packs", ja: "プロダクトメント · 400カプセル", th: "อาหารเสริม · 400 แคปซูล", zh: "食品产品 · 400份" },
        "⚠️ Low": { en: "⚠️ Low", ja: "⚠️ 僅少", th: "⚠️ ต่ำ", zh: "⚠️ 低" },
        "Products · 60 packs": { en: "Products · 60 packs", ja: "プロダクトメント · 60錠", th: "อาหารเสริม · 60 เม็ด", zh: "食品产品 · 60份" },
        "🔴 Out": { en: "🔴 Out", ja: "🔴 切れ", th: "🔴 หมด", zh: "🔴 缺货" },
        "Marine Collagen +": { en: "Marine Collagen +", ja: "Marine Collagen +", th: "Marine Collagen +", zh: "海洋胶原蛋白 +" },
        "Skin Care · 30 sachets": { en: "Skin Care · 30 sachets", ja: "スキンケア · 30袋", th: "ดูแลผิว · 30 ซอง", zh: "护肤 · 30袋" },
        "Whey Protein Isolate": { en: "Whey Protein Isolate", ja: "ホエイプロテインアイソレート", th: "Whey Protein Isolate", zh: "乳清蛋白分离物" },
        "Sports · 500g powder": { en: "Sports · 500g powder", ja: "スポーツ · 500gパウダー", th: "กีฬา · 500g ผง", zh: "运动 · 500g 粉末" },
        "Smart restock recommendations powered by sales history, seasonality, and market trends.": { en: "Smart restock recommendations powered by sales history, seasonality, and market trends.", ja: "売上履歴、季節性、市場トレンドに基づくスマート補充推奨。", th: "คำแนะนำการเติมสต็อกอัจฉริยะจากประวัติการขาย ฤดูกาล และเทรนด์ตลาด", zh: "基于销售历史、季节性和市场趋势的智能补货建议。" },
        "AI Forecast Engine v2.4": { en: "AI Forecast Engine v2.4", ja: "AI予測エンジン v2.4", th: "AI Forecast Engine v2.4", zh: "AI 预测引擎 v2.4" },
        "Trained on 24 months of sales · 94.7% accuracy · Updated daily": { en: "Trained on 24 months of sales · 94.7% accuracy · Updated daily", ja: "24ヶ月の売上で学習 · 94.7%精度 · 毎日更新", th: "เทรนด์จาก 24 เดือนของการขาย · ความแม่นยำ 94.7% · อัปเดตทุกวัน", zh: "基于 24 个月销售数据训练 · 94.7% 准确率 · 每日更新" },
        "Items to Restock": { en: "Items to Restock", ja: "補充アイテム", th: "รายการเติมสต็อก", zh: "待补货商品" },
        "Est. Investment": { en: "Est. Investment", ja: "推定投資額", th: "การลงทุนโดยประมาณ", zh: "预计投资" },
        "Celebration Gold · 60 packs": { en: "Celebration Gold · 60 packs", ja: "Celebration Gold · 60カプセル", th: "Celebration Gold · 60 แคปซูล", zh: "Celebration Gold · 60份" },
        "📉 Current: units": { en: "📉 Current: units", ja: "📉 現在: ユニット", th: "📉 ปัจจุบัน: หน่วย", zh: "📉 当前: 单位" },
        "📈 AI Forecast (30d): units": { en: "📈 AI Forecast (30d): units", ja: "📈 AI予測 (30日): ユニット", th: "📈 AI พยากรณ์ (30วัน): หน่วย", zh: "📈 AI 预测 (30天): 单位" },
        "🎯 Safety Buffer:": { en: "🎯 Safety Buffer:", ja: "🎯 安全バッファ:", th: "🎯 บัฟเฟอร์ความปลอดภัย:", zh: "🎯 安全缓冲:" },
        "💰 Unit Cost:": { en: "💰 Unit Cost:", ja: "💰 単位コスト:", th: "💰 ต้นทุนต่อหน่วย:", zh: "💰 单位成本:" },
        "Why:": { en: "Why:", ja: "理由:", th: "เหตุผล:", zh: "原因:" },
        "units recommended": { en: "units recommended", ja: "ユニット推奨", th: "หน่วยที่แนะนำ", zh: "推荐单位" },
        "✓ Approve": { en: "✓ Approve", ja: "✓ 承認", th: "✓ อนุมัติ", zh: "✓ 批准" },
        "Wanchai Ferry Dumpling Packmg · 400 packs": { en: "Wanchai Ferry Dumpling Packmg · 400 packs", ja: "Wanchai Ferry Dumpling Packmg · 400カプセル", th: "Wanchai Ferry Dumpling Packmg · 400 แคปซูล", zh: "Wanchai Ferry Dumpling Packmg · 400份" },
        "Marine Collagen + · 30 sachets": { en: "Marine Collagen + · 30 sachets", ja: "Marine Collagen + · 30袋", th: "Marine Collagen + · 30 ซอง", zh: "海洋胶原蛋白 + · 30袋" },
        "Seasonal Demand Forecast — Next 90 Days": { en: "Seasonal Demand Forecast — Next 90 Days", ja: "季節需要予測 — 今後90日", th: "พยากรณ์ความต้องการตามฤดูกาล — 90 วันถัดไป", zh: "季节性需求预测 — 未来90天" },
        "AI-powered basket analysis — find high-margin combos and best-selling pairings.": { en: "AI-powered basket analysis — find high-margin combos and best-selling pairings.", ja: "AIバスケット分析 — 高マージンコンボと人気ペアリングを発見。", th: "AI วิเคราะห์ตะกร้า — หาคอมโบมาร์จินสูงและคู่ขายดี", zh: "AI 购物篮分析 — 找到高利润组合和最佳配对。" },
        "AI Insight: ": { en: "AI Insight: ", ja: "AI インサイト: ", th: "AI ข้อมูลเชิงลึก: ", zh: "AI 洞察: " },
        "Based on 18,400 transactions · Updated weekly · Top 15% of all bundles by profitability": { en: "Based on 18,400 transactions · Updated weekly · Top 15% of all bundles by profitability", ja: "18,400件の取引に基づく · 週次更新 · 収益性上位15%", th: "จาก 18,400 รายการ · อัปเดตรายสัปดาห์ · ท็อป 15% ตามความสามารถทำกำไร", zh: "基于 18,400 笔交易 · 每周更新 · 盈利能力前 15% 的捆绑包" },
        "Apply to Store": { en: "Apply to Store", ja: "ストアに適用", th: "นำไปใช้ในร้าน", zh: "应用到店铺" },
        "🏆 High-Margin Bundles": { en: "🏆 High-Margin Bundles", ja: "🏆 高マージンバンドル", th: "🏆 ชุดสินค้ามาร์จินสูง", zh: "🏆 高利润捆绑包" },
        "Seasonal occasion Boost + Wanchai Ferry Dumpling Packmg": { en: "Seasonal occasion Boost + Wanchai Ferry Dumpling Packmg", ja: "Seasonal occasion Boost + Wanchai Ferry Dumpling Packmg", th: "Seasonal occasion Boost + Wanchai Ferry Dumpling Packmg", zh: "季节场景提升 + Wanchai Ferry Dumpling Packmg" },
        "Combo price: · Margin:": { en: "Combo price: · Margin:", ja: "コンボ価格: · マージン:", th: "ราคาชุด: · มาร์จิน:", zh: "组合价格: · 利润:" },
        "1,240 orders this month · AOV uplift +$8.40": { en: "1,240 orders this month · AOV uplift +$8.40", ja: "今月1,240件 · AOV 上昇 +$8.40", th: "1,240 คำสั่งซื้อเดือนนี้ · AOV เพิ่ม +$8.40", zh: "本月 1,240 单 · AOV 提升 +$8.40" },
        "+$12K": { en: "+$12K", ja: "+$12K", th: "+$12K", zh: "+$12K" },
        "extra margin/mo": { en: "extra margin/mo", ja: "追加マージン/月", th: "มาร์จินพิเศษ/เดือน", zh: "额外利润/月" },
        "Marine Collagen + Product E Cream": { en: "Marine Collagen + Product E Cream", ja: "Marine Collagen + Product E Cream", th: "Marine Collagen + Product E Cream", zh: "海洋胶原蛋白 + 产品E霜" },
        "890 orders this month · AOV uplift +$15.20": { en: "890 orders this month · AOV uplift +$15.20", ja: "今月890件 · AOV 上昇 +$15.20", th: "890 คำสั่งซื้อเดือนนี้ · AOV เพิ่ม +$15.20", zh: "本月 890 单 · AOV 提升 +$15.20" },
        "Celebration Gold + Manuka Honey": { en: "Celebration Gold + Manuka Honey", ja: "Celebration Gold + Manuka Honey", th: "Celebration Gold + Manuka Honey", zh: "Celebration Gold + 麦卢卡蜂蜜" },
        "650 orders this month · AOV uplift +$11.00": { en: "650 orders this month · AOV uplift +$11.00", ja: "今月650件 · AOV 上昇 +$11.00", th: "650 คำสั่งซื้อเดือนนี้ · AOV เพิ่ม +$11.00", zh: "本月 650 单 · AOV 提升 +$11.00" },
        "📈 High-Volume Bundles": { en: "📈 High-Volume Bundles", ja: "📈 高売上バンドル", th: "📈 ชุดสินค้ายอดขายสูง", zh: "📈 高销量捆绑包" },
        "Wanchai Ferry Dumplings + Wanchai Ferry Wontons Family meal Pack": { en: "Wanchai Ferry Dumplings + Wanchai Ferry Wontons Family meal Pack", ja: "Wanchai Ferry Dumplings + Wanchai Ferry Wontons ジョイントパック", th: "Wanchai Ferry Dumplings + Wanchai Ferry Wontons Family meal Pack", zh: "Wanchai Ferry Dumplings + 氨糖家庭餐包" },
        "Combo price: · Sold: units/mo": { en: "Combo price: · Sold: units/mo", ja: "コンボ価格: · 売上: ユニット/月", th: "ราคาชุด: · ขาย: หน่วย/เดือน", zh: "组合价格: · 销量: 单位/月" },
        "monthly revenue": { en: "monthly revenue", ja: "月間収益", th: "รายได้รายเดือน", zh: "月收入" },
        "Seasonal occasion + Collagen Beauty Pack": { en: "Seasonal occasion + Collagen Beauty Pack", ja: "Seasonal occasion + Collagen ビューティーパック", th: "Seasonal occasion + Collagen Beauty Pack", zh: "季节场景 + 胶原蛋白美容包" },
        "Manuka Honey + Spirulina": { en: "Manuka Honey + Spirulina", ja: "Manuka Honey + Spirulina", th: "Manuka Honey + Spirulina", zh: "麦卢卡蜂蜜 + 螺旋藻" },
        "🌍 Bundle Performance by Market": { en: "🌍 Bundle Performance by Market", ja: "🌍 市場別バンドルパフォーマンス", th: "🌍 ประสิทธิภาพชุดสินค้าตามตลาด", zh: "🌍 按市场捆绑包表现" },
        "$142K/mo": { en: "$142K/mo", ja: "$142K/月", th: "$142K/เดือน", zh: "$142K/月" },
        "↑ 18% vs last month": { en: "↑ 18% vs last month", ja: "↑ 先月比18%増", th: "↑ เพิ่ม 18% เทียบเดือนก่อน", zh: "↑ 较上月增长 18%" },
        "$98K/mo": { en: "$98K/mo", ja: "$98K/月", th: "$98K/เดือน", zh: "$98K/月" },
        "$76K/mo": { en: "$76K/mo", ja: "$76K/月", th: "$76K/เดือน", zh: "$76K/月" },
        "$54K/mo": { en: "$54K/mo", ja: "$54K/月", th: "$54K/เดือน", zh: "$54K/月" },
        "↑ 31% vs last month": { en: "↑ 31% vs last month", ja: "↑ 先月比31%増", th: "↑ เพิ่ม 31% เทียบเดือนก่อน", zh: "↑ 较上月增长 31%" },
        "$38K/mo": { en: "$38K/mo", ja: "$38K/月", th: "$38K/เดือน", zh: "$38K/月" },
        "→ Flat vs last month": { en: "→ Flat vs last month", ja: "→ 先月比横ばい", th: "→ คงที่เทียบเดือนก่อน", zh: "→ 与上月持平" },
        "Every order counts. See your rebate accumulate in real time — transparent, instant, no surprises.": { en: "Every order counts. See your rebate accumulate in real time — transparent, instant, no surprises.", ja: "全注文がカウント。リベートがリアルタイムで蓄積するのを確認 — 透明、即時、驚きなし。", th: "ทุกคำสั่งซื้อมีความหมาย ดูรีเบทสะสมเรียลไทม์ — โปร่งใส ทันที ไม่มีเซอร์ไพรส์", zh: "每笔订单都算数。实时查看您的返利累积 — 透明、即时、无惊喜。" },
        "Q2 2026 Rebate Earned": { en: "Q2 2026 Rebate Earned", ja: "Q2 2026 獲得リベート", th: "Q2 2026 รีเบทที่ได้รับ", zh: "2026 Q2 已获返利" },
        "Target: $15,000 · 56% achieved": { en: "Target: $15,000 · 56% achieved", ja: "目標: $15,000 · 56%達成", th: "เป้าหมาย: $15,000 · ทำได้ 56%", zh: "目标: $15,000 · 已完成 56%" },
        "Current Tier": { en: "Current Tier", ja: "現在ティア", th: "ระดับปัจจุบัน", zh: "当前等级" },
        "🥈 Silver": { en: "🥈 Silver", ja: "🥈 シルバー", th: "🥈 ซิลเวอร์", zh: "🥈 银牌" },
        "3% base rebate rate": { en: "3% base rebate rate", ja: "3% 基本リベート率", th: "อัตรารีเบทพื้นฐาน 3%", zh: "3% 基础返利比率" },
        "Next Tier (Gold)": { en: "Next Tier (Gold)", ja: "次ティア (ゴールド)", th: "ระดับถัดไป (Gold)", zh: "下一等级 (金牌)" },
        "more to unlock 5% rate": { en: "more to unlock 5% rate", ja: "で5%レートを解除", th: "เพิ่มอีกเพื่อปลดล็อกอัตรา 5%", zh: "更多以解锁 5% 比率" },
        "YTD Total Rebate": { en: "YTD Total Rebate", ja: "YTD リベート合計", th: "รีเบทสะสมปีนี้", zh: "年度返利总计" },
        "Across 186 orders": { en: "Across 186 orders", ja: "186件の注文を通じて", th: "จาก 186 คำสั่งซื้อ", zh: "跨越 186 笔订单" },
        "Tier Progress — Silver → Gold": { en: "Tier Progress — Silver → Gold", ja: "ティア進捗 — シルバー → ゴールド", th: "ความคืบหน้าระดับ — ซิลเวอร์ → โกลด์", zh: "等级进度 — 银牌 → 金牌" },
        "🥉 Bronze (1%)": { en: "🥉 Bronze (1%)", ja: "🥉 ブロンズ (1%)", th: "🥉 บรอนซ์ (1%)", zh: "🥉 铜牌 (1%)" },
        "🥈 Silver (3%) · You are here": { en: "🥈 Silver (3%) · You are here", ja: "🥈 シルバー (3%) · 現在ここ", th: "🥈 ซิลเวอร์ (3%) · คุณอยู่ที่นี่", zh: "🥈 银牌 (3%) · 您当前在此" },
        "🥇 Gold (5%)": { en: "🥇 Gold (5%)", ja: "🥇 ゴールド (5%)", th: "🥇 โกลด์ (5%)", zh: "🥇 金牌 (5%)" },
        "💎 Platinum (7%)": { en: "💎 Platinum (7%)", ja: "💎 プラチナ (7%)", th: "💎 แพลตตินัม (7%)", zh: "💎 白金 (7%)" },
        "Order-Level Rebate Breakdown": { en: "Order-Level Rebate Breakdown", ja: "注文別リベート内訳", th: "รายละเอียดรีเบทตามคำสั่งซื้อ", zh: "订单级别返利明细" },
        "📥 Export CSV": { en: "📥 Export CSV", ja: "📥 CSV エクスポート", th: "📥 ส่งออก CSV", zh: "📥 导出 CSV" },
        "Order Value": { en: "Order Value", ja: "注文金額", th: "มูลค่าคำสั่งซื้อ", zh: "订单价值" },
        "Tier Rate": { en: "Tier Rate", ja: "ティアレート", th: "อัตราระดับ", zh: "等级比率" },
        "Rebate Earned": { en: "Rebate Earned", ja: "獲得リベート", th: "รีเบทที่ได้รับ", zh: "已获返利" },
        "Silver 3%": { en: "Silver 3%", ja: "シルバー 3%", th: "ซิลเวอร์ 3%", zh: "银牌 3%" },
        "✓ Confirmed": { en: "✓ Confirmed", ja: "✓ 確認済み", th: "✓ ยืนยันแล้ว", zh: "✓ 已确认" },
        "⏳ Pending": { en: "⏳ Pending", ja: "⏳ 保留中", th: "⏳ รอดำเนินการ", zh: "⏳ 待处理" },
        "Your Order Assistant": { en: "Your Order Assistant", ja: "注文アシスタント", th: "ผู้ช่วยคำสั่งซื้อ", zh: "您的订单助手" },
        "Hi! I can help you track orders, check delivery status, or find invoice history. What do you need?": { en: "Hi! I can help you track orders, check delivery status, or find invoice history. What do you need?", ja: "こんにちは！注文追跡、配送状況確認、請求書履歴検索ができます。何をお探しですか？", th: "สวัสดี! ฉันสามารถช่วยติดตามคำสั่งซื้อ เช็คสถานะจัดส่ง หรือค้นหาประวัติใบแจ้งหนี้ได้ คุณต้องการอะไร?", zh: "您好！我可以帮您追踪订单、检查配送状态或查找发票历史。您需要什么？" },
        "Get Invoice": { en: "Get Invoice", ja: "請求書を取得", th: "ขอใบแจ้งหนี้", zh: "获取发票" },
        "Delivery Status": { en: "Delivery Status", ja: "配送状況", th: "สถานะการจัดส่ง", zh: "配送状态" },
        "Quick Reorder": { en: "Quick Reorder", ja: "クイック再注文", th: "สั่งซื้อซ้ำด่วน", zh: "快速重新下单" },
        "AI Order Help": { en: "AI Order Help", ja: "AI 注文ヘルプ", th: "AI ช่วยเหลือคำสั่งซื้อ", zh: "AI 订单帮助" },
        "AI Order Help Msg": { en: "I'll help you with that! Let me check our order system and get back to you with the details.", ja: "お手伝いします！注文システムを確認して詳細をお知らせします。", th: "ยินดีช่วยเหลือค่ะ! ฉันจะเช็คระบบคำสั่งซื้อและตอบกลับพร้อมรายละเอียด", zh: "我来帮您！让我查看订单系统，然后为您提供详细信息。" },
        "Checkout": { en: "Checkout", ja: "チェックアウト", th: "ชำระเงิน", zh: "结账" },
        "Payment": { en: "Payment", ja: "支払い", th: "การชำระเงิน", zh: "付款" },
        "Email": { en: "Email", ja: "メール", th: "อีเมล", zh: "邮箱" },
        "Phone": { en: "Phone", ja: "電話", th: "โทรศัพท์", zh: "电话" },
        "CVV": { en: "CVV", ja: "CVV", th: "CVV", zh: "CVV" },
        "Invoice": { en: "Invoice", ja: "請求書", th: "ใบแจ้งหนี้", zh: "发票" },
        "Notes": { en: "Notes", ja: "備考", th: "หมายเหตุ", zh: "备注" },
        "Remove": { en: "Remove", ja: "削除", th: "ลบ", zh: "移除" },
        "Free": { en: "Free", ja: "無料", th: "ฟรี", zh: "免费" },
        "Bestseller": { en: "Bestseller", ja: "ベストセラー", th: "สินค้าขายดี", zh: "热销" },
        "A confirmation email has been sent to": { en: "A confirmation email has been sent to", ja: "確認メールが送信されました", th: "ส่งอีเมลยืนยันไปที่", zh: "确认邮件已发送至" },
        "12 Tampines Industrial Ave 3, #04-05, Singapore 528499": { en: "12 Tampines Industrial Ave 3, #04-05, Singapore 528499", ja: "12 Tampines Industrial Ave 3, #04-05, シンガポール 528499", th: "12 Tampines Industrial Ave 3, #04-05, สิงคโปร์ 528499", zh: "12 Tampines Industrial Ave 3, #04-05, 新加坡 528499" },
        "GM-ORD-20250115-001234": { en: "GM-ORD-20250115-001234", ja: "GM-ORD-20250115-001234", th: "GM-ORD-20250115-001234", zh: "GM-ORD-20250115-001234" },
        "SGD 15K": { en: "SGD 15K", ja: "SGD 15K", th: "SGD 15K", zh: "SGD 15K" },
        "18%": { en: "18%", ja: "18%", th: "18%", zh: "18%" },
        "250+": { en: "250+", ja: "250+", th: "250+", zh: "250+" },
        "Shipping": { en: "Shipping", ja: "配送", th: "การจัดส่ง", zh: "配送" },
        "Subtotal": { en: "Subtotal", ja: "小計", th: "ยอดรวม", zh: "小计" },
        "SKU": { en: "SKU", ja: "SKU", th: "SKU", zh: "SKU" },
        "per unit": { en: "per unit", ja: "単位あたり", th: "ต่อหน่วย", zh: "每单位" },
        "Notifications | GENERAL MILLS® Partner Portal": { en: "Notifications | GENERAL MILLS® Partner Portal", ja: "通知 | GENERAL MILLS® パートナーポータル", th: "การแจ้งเตือน | GENERAL MILLS® พอร์ทัลพันธมิตร", zh: "通知 | GENERAL MILLS® 合作伙伴门户" },
        "Notifications": { en: "Notifications", ja: "通知", th: "การแจ้งเตือน", zh: "通知" },
        "Manage and track all your notifications in one place.": { en: "Manage and track all your notifications in one place.", ja: "すべての通知を一箇所で管理・追跡。", th: "จัดการและติดตามการแจ้งเตือนทั้งหมดในที่เดียว", zh: "在一个地方管理和追踪所有通知。" },
        "Mark All Read": { en: "Mark All Read", ja: "すべて既読にする", th: "มาร์คทั้งหมดว่าอ่านแล้ว", zh: "全部标记为已读" },
        "Unread": { en: "Unread", ja: "未読", th: "ยังไม่อ่าน", zh: "未读" },
        "Read": { en: "Read", ja: "既読", th: "อ่านแล้ว", zh: "已读" },
        "Tasks": { en: "Tasks", ja: "タスク", th: "งาน", zh: "任务" },
        "Approvals": { en: "Approvals", ja: "承認", th: "การอนุมัติ", zh: "审批" },
        "Refresh": { en: "Refresh", ja: "更新", th: "รีเฟรช", zh: "刷新" },
        "No Notifications": { en: "No Notifications", ja: "通知なし", th: "ไม่มีการแจ้งเตือน", zh: "没有通知" },
        "You have no notifications matching your filters.": { en: "You have no notifications matching your filters.", ja: "フィルタに一致する通知がありません。", th: "ไม่มีการแจ้งเตือนที่ตรงกับตัวกรอง", zh: "没有符合筛选条件的通知。" },
        "New Task Assigned": { en: "New Task Assigned", ja: "新しいタスクが割り当てられました", th: "ได้รับงานใหม่", zh: "新任务已分配" },
        "You have been assigned to review the Q2 marketing campaign materials for the Singapore market. Please review and approve by May 28.": { en: "You have been assigned to review the Q2 marketing campaign materials for the Singapore market. Please review and approve by May 28.", ja: "シンガポール市場のQ2マーケティングキャンペーン資料のレビューを担当しています。5月28日までにレビューと承認をお願いします。", th: "คุณได้รับมอบหมายให้ตรวจสอบเอกสารแคมเปญการตลาด Q2 สำหรับตลาดสิงคโปร์ กรุณาตรวจสอบและอนุมัติภายในวันที่ 28 พฤษภาคม", zh: "您已被分配审核新加坡市场Q2营销活动的资料。请在5月28日前审核并批准。" },
        "Order Approval Required": { en: "Order Approval Required", ja: "注文承認が必要", th: "ต้องการการอนุมัติคำสั่งซื้อ", zh: "订单审批需要" },
        "Order #GM-ORD-20250528-00891 from Guardian KL Store requires your approval. Total value: SGD 12,450.00.": { en: "Order #GM-ORD-20250528-00891 from Guardian KL Store requires your approval. Total value: SGD 12,450.00.", ja: "Guardian KL Storeからの注文 #GM-ORD-20250528-00891 の承認が必要です。合計金額：SGD 12,450.00。", th: "คำสั่งซื้อ #GM-ORD-20250528-00891 จาก Guardian KL Store ต้องการการอนุมัติของคุณ มูลค่ารวม: SGD 12,450.00", zh: "Guardian KL Store 的订单 #GM-ORD-20250528-00891 需要您的审批。总金额：SGD 12,450.00。" },
        "System Maintenance Scheduled": { en: "System Maintenance Scheduled", ja: "システムメンテナンスが予定されています", th: "มีการบำรุงรักษาระบบที่กำหนดไว้", zh: "系统维护已安排" },
        "Scheduled maintenance on June 2, 2026 from 02:00–04:00 SGT. The portal will be temporarily unavailable. Please plan accordingly.": { en: "Scheduled maintenance on June 2, 2026 from 02:00–04:00 SGT. The portal will be temporarily unavailable. Please plan accordingly.", ja: "2026年6月2日02:00–04:00 SGTに定期メンテナンスを実施します。ポータルは一時的に利用できなくなります。ご計画を立ててください。", th: "การบำรุงรักษาระบบที่กำหนดไว้ในวันที่ 2 มิถุนายน 2026 เวลา 02:00–04:00 SGT พอร์ทัลจะไม่พร้อมใช้งานชั่วคราว กรุณาวางแผนให้เหมาะสม", zh: "2026年6月2日02:00–04:00 SGT 安排系统维护。门户将暂时不可用。请相应计划。" },
        "New Product Launch: Family Product Gummies": { en: "New Product Launch: Family Product Gummies", ja: "新製品発売：キッズプロダクトグミ", th: "เปิดตัวผลิตภัณฑ์ใหม่: ผลิตภัณฑ์กัมมี่สำหรับเด็ก", zh: "新品发布：儿童产品软糖" },
        "General Mills Family Product Gummies are now available in the B2B catalog. Launch promotional pricing valid until June 15.": { en: "General Mills Family Product Gummies are now available in the B2B catalog. Launch promotional pricing valid until June 15.", ja: "General Mills キッズプロダクトグミがB2Bカタログで販売開始。発売記念プロモーション価格は6月15日まで有効。", th: "General Mills Family Product Gummies มีจำหน่ายในแคตตาล็อก B2B แล้ว ราคาโปรโมชันช่วงเปิดตัวมีผลถึง 15 มิถุนายน", zh: "General Mills 儿童产品软糖现已在 B2B 目录中提供。发布促销价格有效期至6月15日。" },
        "Payment Approved": { en: "Payment Approved", ja: "支払いが承認されました", th: "การชำระเงินได้รับการอนุมัติ", zh: "付款已批准" },
        "Your payment for Invoice #INV-2025-00472 has been approved and processed. Amount: SGD 8,320.00.": { en: "Your payment for Invoice #INV-2025-00472 has been approved and processed. Amount: SGD 8,320.00.", ja: "請求書 #INV-2025-00472 の支払いが承認・処理されました。金額：SGD 8,320.00。", th: "การชำระเงินสำหรับใบแจ้งหนี้ #INV-2025-00472 ได้รับการอนุมัติและดำเนินการแล้ว จำนวน: SGD 8,320.00", zh: "您的发票 #INV-2025-00472 付款已批准并处理。金额：SGD 8,320.00。" },
        "Restock Reminder: Wanchai Ferry Dumpling Packmg": { en: "Restock Reminder: Wanchai Ferry Dumpling Packmg", ja: "在庫補充のリマインダー：フィッシュオイル 1000mg", th: "เตือนเติมสต็อก: น้ำมันปลา 1000mg", zh: "补货提醒：湾仔码头水饺 1000mg" },
        "Your Wanchai Ferry Dumpling Packmg inventory is below safety stock. Recommended reorder: 24 units to maintain optimal levels.": { en: "Your Wanchai Ferry Dumpling Packmg inventory is below safety stock. Recommended reorder: 24 units to maintain optimal levels.", ja: "フィッシュオイル 1000mg の在庫が安全在庫を下回っています。推奨再注文：24単位で最適なレベルを維持。", th: "สต็อกน้ำมันปลา 1000mg ของคุณต่ำกว่าสต็อกความปลอดภัย แนะนำให้สั่งซื้อเพิ่ม: 24 หน่วยเพื่อรักษาระดับที่เหมาะสม", zh: "您的湾仔码头水饺 1000mg 库存低于安全库存。建议重新订购：24 件以保持最佳水平。" },
        "Marketing Campaign Ending Soon": { en: "Marketing Campaign Ending Soon", ja: "マーケティングキャンペーンがまもなく終了", th: "แคมเปญการตลาดใกล้จบแล้ว", zh: "营销活动即将结束" },
        "The 'Summer Seasonal occasion Boost' campaign ends in 3 days. Download final performance reports and assets before June 1.": { en: "The 'Summer Seasonal occasion Boost' campaign ends in 3 days. Download final performance reports and assets before June 1.", ja: "「Summer Seasonal occasion Boost」キャンペーンは3日後に終了。6月1日までに最終パフォーマンスレポートと素材をダウンロードしてください。", th: "แคมเปญ 'Summer Seasonal occasion Boost' จะสิ้นสุดในอีก 3 วัน ดาวน์โหลดรายงานผลสุดท้ายและเนื้อหาก่อนวันที่ 1 มิถุนายน", zh: "「Summer Seasonal occasion Boost」活动将于3天后结束。请在6月1日前下载最终表现报告和素材。" },
        "New Partner Agreement Available": { en: "New Partner Agreement Available", ja: "新しいパートナー契約が利用可能", th: "มีข้อตกลงพันธมิตรใหม่พร้อมใช้งาน", zh: "新合作伙伴协议可用" },
        "The updated Q3 2026 partner agreement is ready for review. Changes include revised rebate tiers and new product lines.": { en: "The updated Q3 2026 partner agreement is ready for review. Changes include revised rebate tiers and new product lines.", ja: "更新されたQ3 2026パートナー契約がレビュー可能です。変更点には、修正されたリベート階層と新製品ラインが含まれます。", th: "ข้อตกลงพันธมิตร Q3 2026 ที่อัปเดตแล้วพร้อมให้ตรวจสอบ การเปลี่ยนแปลงรวมถึงระดับรีเบทที่แก้ไขและสินค้าใหม่", zh: "更新的 Q3 2026 合作伙伴协议已准备好审核。变更包括修订的回扣层级和新产品线。" },
        "Monthly Sales Report Ready": { en: "Monthly Sales Report Ready", ja: "月次売上レポートが準備完了", th: "รายงานยอดขายรายเดือนพร้อมแล้ว", zh: "月度销售报告已准备就绪" },
        "Your May 2026 sales performance report is now available. You exceeded your target by 12%. View detailed breakdown.": { en: "Your May 2026 sales performance report is now available. You exceeded your target by 12%. View detailed breakdown.", ja: "2026年5月の売上パフォーマンスレポートが利用可能です。目標を12%超過しました。詳細な内訳をご確認ください。", th: "รายงานผลการดำเนินงานยอดขายเดือนพฤษภาคม 2026 ของคุณพร้อมแล้ว คุณเกินเป้าหมาย 12% ดูรายละเอียด", zh: "您2026年5月的销售表现报告已可用。您超额完成目标12%。查看详细分解。" },
        "Training Session: New AIGC Features": { en: "Training Session: New AIGC Features", ja: "トレーニングセッション：新しいAIGC機能", th: "เซสชั่นอบรม: ฟีเจอร์ AIGC ใหม่", zh: "培训课程：新 AIGC 功能" },
        "Join our live training on June 5 to learn about the new AI-powered asset generation features. RSVP by June 3.": { en: "Join our live training on June 5 to learn about the new AI-powered asset generation features. RSVP by June 3.", ja: "6月5日のライブトレーニングに参加して、新しいAI搭載アセット生成機能について学びましょう。6月3日までにRSVP。", th: "เข้าร่วมการอบรมสดในวันที่ 5 มิถุนายนเพื่อเรียนรู้เกี่ยวกับฟีเจอร์การสร้างเนื้อหาด้วย AI ใหม่ กรุณาตอบรับภายในวันที่ 3 มิถุนายน", zh: "参加我们6月5日的直播培训，了解新的AI驱动资产生成功能。请在6月3日前回复。" },
        "View Task": { en: "View Task", ja: "タスクを表示", th: "ดูงาน", zh: "查看任务" },
        "Details": { en: "Details", ja: "詳細", th: "รายละเอียด", zh: "详情" },
        "View Product": { en: "View Product", ja: "製品を表示", th: "ดูผลิตภัณฑ์", zh: "查看产品" },
        "View Invoice": { en: "View Invoice", ja: "請求書を表示", th: "ดูใบแจ้งหนี้", zh: "查看发票" },
        "Restock": { en: "Restock", ja: "再入荷", th: "เติมสต็อก", zh: "补货" },
        "View Campaign": { en: "View Campaign", ja: "キャンペーンを表示", th: "ดูแคมเปญ", zh: "查看活动" },
        "RSVP": { en: "RSVP", ja: "RSVP", th: "ตอบรับ", zh: "回复" },
        "View Report": { en: "View Report", ja: "レポートを表示", th: "ดูรายงาน", zh: "查看报告" },
        "Mark Read": { en: "Mark Read", ja: "既読にする", th: "มาร์คว่าอ่านแล้ว", zh: "标记已读" },
        "Task": { en: "Task", ja: "タスク", th: "งาน", zh: "任务" },
        "Approval": { en: "Approval", ja: "承認", th: "การอนุมัติ", zh: "审批" },
        "Promo": { en: "Promo", ja: "プロモ", th: "โปรโม", zh: "促销" },
    };
        // Check document title against known patterns
        // (skip for now - page titles are static in HTML)

        // Update HTML lang attribute
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    }

    // ============================================
    // Language Switcher UI
    // ============================================

    function createSwitcher() {
        const container = document.createElement('div');
        container.className = 'lang-switcher';
        container.innerHTML = `
            <button class="lang-switcher-btn" aria-label="Switch Language">
                <span class="lang-current">${LANG_NAMES[getCurrentLang()].native}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                </svg>
            </button>
            <div class="lang-switcher-dropdown">
                ${Object.entries(LANG_NAMES).map(([code, info]) => `
                    <div class="lang-option ${code === getCurrentLang() ? 'active' : ''}" data-lang="${code}">
                        <span class="lang-flag">${getFlag(code)}</span>
                        <span class="lang-name">${info.label}</span>
                        <span class="lang-code">${info.native}</span>
                    </div>
                `).join('')}
            </div>
        `;

        // Event: toggle dropdown
        const btn = container.querySelector('.lang-switcher-btn');
        const dropdown = container.querySelector('.lang-switcher-dropdown');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });

        document.addEventListener('click', () => {
            dropdown.classList.remove('open');
        });

        // Event: select language
        container.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.dataset.lang;
                setLang(lang);
            });
        });

        return container;
    }

    function getFlag(code) {
        const flags = { en: '🇬🇧', ja: '🇯🇵', th: '🇹🇭', zh: '🇨🇳' };
        return flags[code] || '🌐';
    }

    function injectSwitcher() {
        const navRight = document.querySelector('.nav-right');
        if (!navRight) return;

        // Don't inject if already injected
        if (navRight.querySelector('.lang-switcher')) return;

        // Check if there's a manual placeholder button
        const manualBtn = navRight.querySelector('#langSwitcher');
        if (manualBtn) {
            const switcher = createSwitcher();
            manualBtn.parentNode.replaceChild(switcher, manualBtn);
        } else {
            // Insert before user-menu (or after notification button)
            const userMenu = navRight.querySelector('.user-menu');
            const switcher = createSwitcher();

            if (userMenu) {
                navRight.insertBefore(switcher, userMenu);
            } else {
                navRight.appendChild(switcher);
            }
        }
    }

    function updateSwitcherUI() {
        const lang = getCurrentLang();
        const btn = document.querySelector('.lang-switcher-btn .lang-current');
        if (btn) btn.textContent = LANG_NAMES[lang].native;

        // Also update the manual lang-switch button in index.html
        const manualLang = document.getElementById('current-lang');
        if (manualLang) manualLang.textContent = LANG_NAMES[lang].native;

        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });
    }

    // Toggle language (cycles through en -> ja -> th -> zh -> en)
    function toggleLanguage() {
        const current = getCurrentLang();
        const order = ['en', 'ja', 'th', 'zh'];
        const idx = order.indexOf(current);
        const next = order[(idx + 1) % order.length];
        setLang(next);
    }

    // ============================================
    // Inject CSS
    // ============================================

    function injectStyles() {
        if (document.getElementById('i18n-styles')) return;
        const style = document.createElement('style');
        style.id = 'i18n-styles';
        style.textContent = `
            .lang-switcher {
                position: relative;
                display: inline-block;
            }
            .lang-switcher-btn {
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 6px 10px;
                border: 1px solid var(--border, #E8ECF0);
                border-radius: 8px;
                background: var(--white, #FFFFFF);
                cursor: pointer;
                font-size: 13px;
                font-weight: 600;
                color: var(--text, #1A1A1A);
                transition: all 0.2s;
                font-family: inherit;
            }
            .lang-switcher-btn:hover {
                border-color: var(--primary, #009BA4);
                color: var(--primary, #009BA4);
            }
            .lang-current {
                min-width: 22px;
                text-align: center;
            }
            .lang-switcher-dropdown {
                position: absolute;
                top: calc(100% + 6px);
                right: 0;
                background: var(--white, #FFFFFF);
                border: 1px solid var(--border, #E8ECF0);
                border-radius: 12px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                padding: 6px;
                min-width: 160px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-4px);
                transition: all 0.2s;
                z-index: 200;
            }
            .lang-switcher-dropdown.open {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            .lang-option {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 8px 10px;
                border-radius: 8px;
                cursor: pointer;
                transition: background 0.15s;
                font-size: 13px;
            }
            .lang-option:hover {
                background: var(--bg, #F5F7FA);
            }
            .lang-option.active {
                background: rgba(0, 155, 164, 0.08);
                color: var(--primary, #009BA4);
                font-weight: 600;
            }
            .lang-flag {
                font-size: 16px;
                line-height: 1;
            }
            .lang-name {
                flex: 1;
            }
            .lang-code {
                font-size: 11px;
                color: var(--text-secondary, #666);
                font-weight: 500;
            }
            .lang-option.active .lang-code {
                color: var(--primary, #009BA4);
            }
        `;
        document.head.appendChild(style);
    }

    // ============================================
    // Init
    // ============================================

    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', doInit);
        } else {
            doInit();
        }
        // Fallback: ensure init runs even if readyState is unusual
        setTimeout(() => {
            if (!document.querySelector('.lang-switcher')) {
                doInit();
            }
        }, 100);
    }

    function doInit() {
        injectStyles();
        injectSwitcher();
        applyTranslations();
    }

    // Expose API globally
    window.BM_I18N = {
        setLang,
        getLang: getCurrentLang,
        translate,
        applyTranslations,
        refresh: applyTranslations,
        toggleLanguage
    };

    // Also expose toggleLanguage directly for onclick handlers
    window.toggleLanguage = toggleLanguage;
    window.addEventListener('message', function(e) {
        const msg = e.data || {};
        if (msg.t === 'es' && msg.lang && LANG_NAMES[msg.lang]) {
            setLang(msg.lang);
        }
    });

    Object.assign(DICT, {
    "Trading Hub | GENERAL MILLS® Partner Portal": { en: "Trading Hub | GENERAL MILLS® Partner Portal", ja: "Trading Hub | GENERAL MILLS® パートナーポータル", th: "Trading Hub | GENERAL MILLS® พอร์ทัลพาร์ทเนอร์", zh: "Trading Hub | GENERAL MILLS® 合作伙伴门户" },
    "Purchase Orders | GENERAL MILLS® Partner Portal": { en: "Purchase Orders | GENERAL MILLS® Partner Portal", ja: "発注管理 | GENERAL MILLS® パートナーポータル", th: "คำสั่งซื้อ | GENERAL MILLS® พอร์ทัลพาร์ทเนอร์", zh: "采购订单 | GENERAL MILLS® 合作伙伴门户" },
    "Purchase Orders": { en: "Purchase Orders", ja: "発注管理", th: "คำสั่งซื้อ", zh: "采购订单" },
    "AI Recommendation": { en: "AI Recommendation", ja: "AI推奨", th: "คำแนะนำ AI", zh: "AI 推荐" },
    "Inventory": { en: "Inventory", ja: "在庫", th: "สินค้าคงคลัง", zh: "库存" },
    "Invoices": { en: "Invoices", ja: "請求書", th: "ใบแจ้งหนี้", zh: "发票" },
    "Häagen-Dazs Mini Cupatalog": { en: "Häagen-Dazs Mini Cupatalog", ja: "商品カタログ", th: "แคตตาล็อกสินค้า", zh: "商品目录" },
    "Bundle Management": { en: "Bundle Management", ja: "バンドル管理", th: "การจัดการชุดสินค้า", zh: "组合包管理" },
    "Pending Payments": { en: "Pending Payments", ja: "支払い待ち", th: "รอการชำระเงิน", zh: "待付款" },
    "Discover": { en: "Discover", ja: "発見", th: "ค้นพบ", zh: "发现" },
    "Immune Support Bundle": { en: "Immune Support Bundle", ja: "季节场景サポートバンドル", th: "ชุดเสริมโอกาสตามฤดูกาล", zh: "季节场景支持组合" },
    "Trending with partners in your region — projected +22% margin. Your sales mix suggests high fit.": { en: "Trending with partners in your region — projected +22% margin. Your sales mix suggests high fit.", ja: "地域のパートナーで好調です。想定マージンは+22%。現在の販売構成と相性が高いです。", th: "กำลังเป็นที่นิยมในกลุ่มพาร์ทเนอร์ในภูมิภาคของคุณ — คาดการณ์กำไร +22% โครงสร้างยอดขายของคุณเหมาะสมสูง", zh: "正在您所在区域的合作伙伴中走热，预计利润率 +22%。您的销售组合显示高度匹配。" },
    "New arrivals this week": { en: "New arrivals this week", ja: "今週の新商品", th: "สินค้าใหม่สัปดาห์นี้", zh: "本周新品" },
    "12 new SKUs available including Children's Immune Defence and Häagen-Dazs Mini Cupmg. Browse with live partner pricing.": { en: "12 new SKUs available including Children's Immune Defence and Häagen-Dazs Mini Cupmg. Browse with live partner pricing.", ja: "Children's Immune Defence と Häagen-Dazs Mini Cupmg を含む12の新SKUが利用可能です。ライブのパートナー価格で確認できます。", th: "มี SKU ใหม่ 12 รายการ รวมถึง Children's Immune Defence และ Häagen-Dazs Mini Cupmg พร้อมราคาพาร์ทเนอร์แบบสด", zh: "已有 12 个新品 SKU，包括儿童季节场景防护和 Häagen-Dazs Mini Cupmg，可按实时 Partner 价格浏览。" },
    "Browse catalog": { en: "Browse catalog", ja: "カタログを見る", th: "ดูแคตตาล็อก", zh: "浏览目录" },
    "View Cart & Checkout": { en: "View Cart & Checkout", ja: "カートとチェックアウトを見る", th: "ดูตะกร้าและชำระเงิน", zh: "查看购物车与结算" },
    "Review & Confirm": { en: "Review & Confirm", ja: "確認して確定", th: "ตรวจสอบและยืนยัน", zh: "复核并确认" },
    "Multi-channel order management — Tmall, Shopee, Lazada, Shopify & POS in one view.": { en: "Multi-channel order management — Tmall, Shopee, Lazada, Shopify & POS in one view.", ja: "Tmall、Shopee、Lazada、Shopify、POS のマルチチャネル注文を一画面で管理。", th: "จัดการคำสั่งซื้อหลายช่องทาง — Tmall, Shopee, Lazada, Shopify และ POS ในมุมมองเดียว", zh: "在一个视图中管理天猫、Shopee、Lazada、Shopify 与 POS 的多渠道订单。" },
    "Orders List": { en: "Orders List", ja: "注文一覧", th: "รายการคำสั่งซื้อ", zh: "订单列表" },
    "Shopify": { en: "Shopify", ja: "Shopify", th: "Shopify", zh: "Shopify" },
    "POS": { en: "POS", ja: "POS", th: "POS", zh: "POS" },
    "Confirmed": { en: "Confirmed", ja: "確認済み", th: "ยืนยันแล้ว", zh: "已确认" },
    "Shipped": { en: "Shipped", ja: "出荷済み", th: "จัดส่งแล้ว", zh: "已发货" },
    "Delivered": { en: "Delivered", ja: "配達済み", th: "จัดส่งสำเร็จ", zh: "已送达" },
    "Completed": { en: "Completed", ja: "完了", th: "เสร็จสิ้น", zh: "已完成" },
    "Search orders, customers, products...": { en: "Search orders, customers, products...", ja: "注文・顧客・商品を検索...", th: "ค้นหาคำสั่งซื้อ ลูกค้า สินค้า...", zh: "搜索订单、客户、产品..." },
    "selected": { en: "selected", ja: "選択済み", th: "เลือกแล้ว", zh: "已选择" },
    "Batch Print Labels": { en: "Batch Print Labels", ja: "ラベルを一括印刷", th: "พิมพ์ฉลากเป็นชุด", zh: "批量打印标签" },
    "Batch Mark Shipped": { en: "Batch Mark Shipped", ja: "一括で出荷済みにする", th: "ทำเครื่องหมายจัดส่งเป็นชุด", zh: "批量标记已发货" },
    "Batch Export": { en: "Batch Export", ja: "一括エクスポート", th: "ส่งออกเป็นชุด", zh: "批量导出" },
    "Batch Add Note": { en: "Batch Add Note", ja: "メモを一括追加", th: "เพิ่มบันทึกเป็นชุด", zh: "批量添加备注" },
    "Clear": { en: "Clear", ja: "クリア", th: "ล้าง", zh: "清除" },
    "Order ID": { en: "Order ID", ja: "注文ID", th: "รหัสคำสั่งซื้อ", zh: "订单 ID" },
    "Customer": { en: "Customer", ja: "顧客", th: "ลูกค้า", zh: "客户" },
    "Items": { en: "Items", ja: "商品", th: "รายการ", zh: "商品" },
    "AI": { en: "AI", ja: "AI", th: "AI", zh: "AI" },
    "Connected · Synced 5 min ago": { en: "Connected · Synced 5 min ago", ja: "接続済み · 5分前に同期", th: "เชื่อมต่อแล้ว · ซิงค์เมื่อ 5 นาทีที่แล้ว", zh: "已连接 · 5 分钟前同步" },
    "Connected · Synced 2 min ago": { en: "Connected · Synced 2 min ago", ja: "接続済み · 2分前に同期", th: "เชื่อมต่อแล้ว · ซิงค์เมื่อ 2 นาทีที่แล้ว", zh: "已连接 · 2 分钟前同步" },
    "Warning · Sync delayed 3h": { en: "Warning · Sync delayed 3h", ja: "警告 · 同期が3時間遅延", th: "คำเตือน · ซิงค์ล่าช้า 3 ชม.", zh: "预警 · 同步延迟 3 小时" },
    "Connected · Synced 10 min ago": { en: "Connected · Synced 10 min ago", ja: "接続済み · 10分前に同期", th: "เชื่อมต่อแล้ว · ซิงค์เมื่อ 10 นาทีที่แล้ว", zh: "已连接 · 10 分钟前同步" },
    "Connected · Synced 1 min ago": { en: "Connected · Synced 1 min ago", ja: "接続済み · 1分前に同期", th: "เชื่อมต่อแล้ว · ซิงค์เมื่อ 1 นาทีที่แล้ว", zh: "已连接 · 1 分钟前同步" },
    "Orders this month": { en: "Orders this month", ja: "今月の注文", th: "คำสั่งซื้อเดือนนี้", zh: "本月订单" },
    "Sync Now": { en: "Sync Now", ja: "今すぐ同期", th: "ซิงค์ตอนนี้", zh: "立即同步" },
    "Inventory Allocation Across Channels": { en: "Inventory Allocation Across Channels", ja: "チャネル別在庫配分", th: "การจัดสรรสินค้าคงคลังข้ามช่องทาง", zh: "跨渠道库存分配" },
    "AI Suggestion: Increase Lazada allocation to 15% during next week's flash sale.": { en: "AI Suggestion: Increase Lazada allocation to 15% during next week's flash sale.", ja: "AI提案：来週のフラッシュセール期間中、Lazada配分を15%に引き上げます。", th: "คำแนะนำ AI: เพิ่มการจัดสรรให้ Lazada เป็น 15% ระหว่างแฟลชเซลล์สัปดาห์หน้า", zh: "AI 建议：下周闪购期间将 Lazada 分配比例提升至 15%。" },
    "Order Information": { en: "Order Information", ja: "注文情報", th: "ข้อมูลคำสั่งซื้อ", zh: "订单信息" },
    "Portal Order ID": { en: "Portal Order ID", ja: "ポータル注文ID", th: "รหัสคำสั่งซื้อพอร์ทัล", zh: "门户订单 ID" },
    "Order Date": { en: "Order Date", ja: "注文日", th: "วันที่สั่งซื้อ", zh: "订单日期" },
    "Payment Summary": { en: "Payment Summary", ja: "支払い概要", th: "สรุปการชำระเงิน", zh: "付款摘要" },
    "Discount": { en: "Discount", ja: "割引", th: "ส่วนลด", zh: "折扣" },
    "This order is 2.3× the customer's average. Consider offering a loyalty discount on their next purchase.": { en: "This order is 2.3× the customer's average. Consider offering a loyalty discount on their next purchase.", ja: "この注文は顧客平均の2.3倍です。次回購入時のロイヤルティ割引を検討してください。", th: "คำสั่งซื้อนี้สูงกว่าค่าเฉลี่ยของลูกค้า 2.3 เท่า ควรเสนอส่วนลดสมาชิกสำหรับการซื้อครั้งถัดไป", zh: "该订单是客户平均订单的 2.3 倍。建议为下次购买提供会员折扣。" },
    "Platform Details": { en: "Platform Details", ja: "プラットフォーム詳細", th: "รายละเอียดแพลตฟอร์ม", zh: "平台详情" },
    "Arrange Pickup": { en: "Arrange Pickup", ja: "集荷を手配", th: "จัดรับสินค้า", zh: "安排取件" },
    "Shopee Chat": { en: "Shopee Chat", ja: "Shopeeチャット", th: "แชท Shopee", zh: "Shopee 聊天" },
    "Print Label": { en: "Print Label", ja: "ラベル印刷", th: "พิมพ์ฉลาก", zh: "打印标签" },
    "Add Note": { en: "Add Note", ja: "メモを追加", th: "เพิ่มบันทึก", zh: "添加备注" },
    "Refund / Return →": { en: "Refund / Return →", ja: "返金 / 返品 →", th: "คืนเงิน / คืนสินค้า →", zh: "退款 / 退货 →" },
    "Your Sales Assistant": { en: "Your Sales Assistant", ja: "営業アシスタント", th: "ผู้ช่วยฝ่ายขายของคุณ", zh: "您的销售助手" },
    "Hi! I can help you track orders across all channels, check channel health, or optimize inventory allocation. What do you need?": { en: "Hi! I can help you track orders across all channels, check channel health, or optimize inventory allocation. What do you need?", ja: "こんにちは。全チャネルの注文追跡、チャネル健全性確認、在庫配分最適化を支援できます。何が必要ですか？", th: "สวัสดี! ฉันช่วยติดตามคำสั่งซื้อทุกช่องทาง ตรวจสุขภาพช่องทาง หรือปรับการจัดสรรสินค้าคงคลังได้ ต้องการอะไร?", zh: "您好！我可以帮您追踪全渠道订单、检查渠道健康或优化库存分配。您需要什么？" },
    "Ask about orders, channels, inventory...": { en: "Ask about orders, channels, inventory...", ja: "注文、チャネル、在庫について質問...", th: "ถามเกี่ยวกับคำสั่งซื้อ ช่องทาง สินค้าคงคลัง...", zh: "询问订单、渠道、库存..." },
    "General Mills Celebration & Breast-Feeding Gold": { en: "General Mills Celebration & Breast-Feeding Gold", ja: "General Mills Celebration & Breast-Feeding Gold", th: "General Mills Celebration & Breast-Feeding Gold", zh: "General Mills 礼赠场景及家庭场景黄金营养素" },
    "Celebration & Breast-Feeding Gold": { en: "Celebration & Breast-Feeding Gold", ja: "Celebration & Breast-Feeding Gold", th: "Celebration & Breast-Feeding Gold", zh: "礼赠场景及家庭场景黄金营养素" },
    "I\\'ll help you with that! Let me check our product database and get back to you with the details.": { en: "I'll help you with that! Let me check our product database and get back to you with the details.", ja: "お手伝いします。商品データベースを確認して詳細をお返しします。", th: "ฉันช่วยได้ ขอเช็กฐานข้อมูลสินค้าก่อน แล้วจะตอบรายละเอียดให้คุณ", zh: "我来帮您处理。我会查询产品数据库，并把详细信息反馈给您。" },
    "I\\'ll help you with that! Let me check our order system and get back to you with the details.": { en: "I'll help you with that! Let me check our order system and get back to you with the details.", ja: "お手伝いします。注文システムを確認して詳細をお返しします。", th: "ฉันช่วยได้ ขอเช็กระบบคำสั่งซื้อก่อน แล้วจะตอบรายละเอียดให้คุณ", zh: "我来帮您处理。我会查询订单系统，并把详细信息反馈给您。" },
    "Track, reorder, and manage all your GENERAL MILLS purchase orders in one place.": { en: "Track, reorder, and manage all your GENERAL MILLS purchase orders in one place.", ja: "GENERAL MILLSの発注を一か所で追跡、再注文、管理します。", th: "ติดตาม สั่งซื้อซ้ำ และจัดการคำสั่งซื้อ GENERAL MILLS ทั้งหมดในที่เดียว", zh: "在一个地方追踪、复购并管理所有 GENERAL MILLS 采购订单。" },
    "Total Orders · vs last quarter": { en: "Total Orders · vs last quarter", ja: "総注文数 · 前四半期比", th: "คำสั่งซื้อทั้งหมด · เทียบไตรมาสก่อน", zh: "总订单数 · 对比上季度" },
    "Pending · from last week": { en: "Pending · from last week", ja: "保留中 · 先週から", th: "รอดำเนินการ · จากสัปดาห์ก่อน", zh: "待处理 · 来自上周" },
    "This Month Spend · vs last month": { en: "This Month Spend · vs last month", ja: "今月の支出 · 前月比", th: "ใช้จ่ายเดือนนี้ · เทียบเดือนก่อน", zh: "本月采购额 · 对比上月" },
    "Partner Savings · this month": { en: "Partner Savings · this month", ja: "パートナー節約額 · 今月", th: "เงินประหยัดพาร์ทเนอร์ · เดือนนี้", zh: "Partner 节省金额 · 本月" },
    "Processing": { en: "Processing", ja: "処理中", th: "กำลังดำเนินการ", zh: "处理中" },
    "Search orders…": { en: "Search orders…", ja: "注文を検索…", th: "ค้นหาคำสั่งซื้อ…", zh: "搜索订单…" },
    "Order total": { en: "Order total", ja: "注文合計", th: "ยอดรวมคำสั่งซื้อ", zh: "订单总额" },
    "Approve": { en: "Approve", ja: "承認", th: "อนุมัติ", zh: "批准" },
    "Track": { en: "Track", ja: "追跡", th: "ติดตาม", zh: "追踪" },
    "Placed": { en: "Placed", ja: "注文済み", th: "สั่งซื้อแล้ว", zh: "已下单" },
    "Warehouse": { en: "Warehouse", ja: "倉庫", th: "คลังสินค้า", zh: "仓库" },
    "Reserved": { en: "Reserved", ja: "予約済み", th: "จองแล้ว", zh: "已预留" },
    "Available": { en: "Available", ja: "利用可能", th: "พร้อมใช้", zh: "可用" },
    "Mother & Family · 60 packs": { en: "Mother & Family · 60 packs", ja: "母子向け · 60カプセル", th: "แม่และเด็ก · 60 แคปซูล", zh: "母婴 · 60 份" },
    "#1 best seller · Repeat purchase rate 68%": { en: "#1 best seller · Repeat purchase rate 68%", ja: "売上1位 · リピート購入率68%", th: "ขายดีอันดับ 1 · อัตราซื้อซ้ำ 68%", zh: "畅销第 1 · 复购率 68%" },
    "#2 best seller · 45% new customer conversion": { en: "#2 best seller · 45% new customer conversion", ja: "売上2位 · 新規顧客転換45%", th: "ขายดีอันดับ 2 · ลูกค้าใหม่แปลง 45%", zh: "畅销第 2 · 新客转化 45%" },
    "#3 best seller · Strong in ANZ market": { en: "#3 best seller · Strong in ANZ market", ja: "売上3位 · ANZ市場で好調", th: "ขายดีอันดับ 3 · แข็งแกร่งในตลาด ANZ", zh: "畅销第 3 · 澳新市场表现强劲" },
    "Australia": { en: "Australia", ja: "オーストラリア", th: "ออสเตรเลีย", zh: "澳大利亚" },
    "Order #": { en: "Order #", ja: "注文番号", th: "คำสั่งซื้อ #", zh: "订单 #" },
    "Showing 5 of 186 orders": { en: "Showing 5 of 186 orders", ja: "186件中5件を表示", th: "แสดง 5 จาก 186 คำสั่งซื้อ", zh: "显示 186 个订单中的 5 个" },
    "Name": { en: "Name", ja: "氏名", th: "ชื่อ", zh: "姓名" },
    "Address": { en: "Address", ja: "住所", th: "ที่อยู่", zh: "地址" },
    "Order #GM-2026-0042": { en: "Order #GM-2026-0042", ja: "注文 #GM-2026-0042", th: "คำสั่งซื้อ #GM-2026-0042", zh: "订单 #GM-2026-0042" },
    "Order #GM-2026-0038": { en: "Order #GM-2026-0038", ja: "注文 #GM-2026-0038", th: "คำสั่งซื้อ #GM-2026-0038", zh: "订单 #GM-2026-0038" },
    "Order #GM-2026-0041": { en: "Order #GM-2026-0041", ja: "注文 #GM-2026-0041", th: "คำสั่งซื้อ #GM-2026-0041", zh: "订单 #GM-2026-0041" },
    "Order #GM-2026-0035": { en: "Order #GM-2026-0035", ja: "注文 #GM-2026-0035", th: "คำสั่งซื้อ #GM-2026-0035", zh: "订单 #GM-2026-0035" },
    "Placed May 18, 2026 · 14:32": { en: "Placed May 18, 2026 · 14:32", ja: "2026年5月18日 14:32 注文", th: "สั่งซื้อ 18 พ.ค. 2026 · 14:32", zh: "2026年5月18日 14:32 下单" },
    "Placed May 10, 2026 · 16:45": { en: "Placed May 10, 2026 · 16:45", ja: "2026年5月10日 16:45 注文", th: "สั่งซื้อ 10 พ.ค. 2026 · 16:45", zh: "2026年5月10日 16:45 下单" },
    "Placed May 15, 2026 · 09:15": { en: "Placed May 15, 2026 · 09:15", ja: "2026年5月15日 09:15 注文", th: "สั่งซื้อ 15 พ.ค. 2026 · 09:15", zh: "2026年5月15日 09:15 下单" },
    "Placed May 5, 2026 · 11:20": { en: "Placed May 5, 2026 · 11:20", ja: "2026年5月5日 11:20 注文", th: "สั่งซื้อ 5 พ.ค. 2026 · 11:20", zh: "2026年5月5日 11:20 下单" },
    "Placed on May 18, 2026 · 14:32 · Guardian KL": { en: "Placed on May 18, 2026 · 14:32 · Guardian KL", ja: "2026年5月18日 14:32 · Guardian KL により注文", th: "สั่งซื้อเมื่อ 18 พ.ค. 2026 · 14:32 · Guardian KL", zh: "2026年5月18日 14:32 · Guardian KL 下单" },
    "Qty 12 · RM 36.90 / bottle": { en: "Qty 12 · RM 36.90 / bottle", ja: "数量12 · RM 36.90 / ボトル", th: "จำนวน 12 · RM 36.90 / ขวด", zh: "数量 12 · RM 36.90 / 瓶" },
    "Qty 12 · RM 31.50 / bottle": { en: "Qty 12 · RM 31.50 / bottle", ja: "数量12 · RM 31.50 / ボトル", th: "จำนวน 12 · RM 31.50 / ขวด", zh: "数量 12 · RM 31.50 / 瓶" },
    "Qty 8 · RM 47.00 / bottle": { en: "Qty 8 · RM 47.00 / bottle", ja: "数量8 · RM 47.00 / ボトル", th: "จำนวน 8 · RM 47.00 / ขวด", zh: "数量 8 · RM 47.00 / 瓶" },
    "Qty 8 · RM 42.00 / bottle": { en: "Qty 8 · RM 42.00 / bottle", ja: "数量8 · RM 42.00 / ボトル", th: "จำนวน 8 · RM 42.00 / ขวด", zh: "数量 8 · RM 42.00 / 瓶" },
    "Qty 6 · RM 58.90 / bottle": { en: "Qty 6 · RM 58.90 / bottle", ja: "数量6 · RM 58.90 / ボトル", th: "จำนวน 6 · RM 58.90 / ขวด", zh: "数量 6 · RM 58.90 / 瓶" },
    "Qty 24 · RM 36.90 / bottle": { en: "Qty 24 · RM 36.90 / bottle", ja: "数量24 · RM 36.90 / ボトル", th: "จำนวน 24 · RM 36.90 / ขวด", zh: "数量 24 · RM 36.90 / 瓶" },
    "Qty 24 · RM 31.50 / bottle": { en: "Qty 24 · RM 31.50 / bottle", ja: "数量24 · RM 31.50 / ボトル", th: "จำนวน 24 · RM 31.50 / ขวด", zh: "数量 24 · RM 31.50 / 瓶" },
    "Qty 12 · RM 34.50 / bottle": { en: "Qty 12 · RM 34.50 / bottle", ja: "数量12 · RM 34.50 / ボトル", th: "จำนวน 12 · RM 34.50 / ขวด", zh: "数量 12 · RM 34.50 / 瓶" },
    "📦 B2B Procurement": { en: "📦 B2B Procurement", ja: "📦 B2B調達", th: "📦 การจัดซื้อ B2B", zh: "📦 B2B 采购" },
    "AI Reorder": { en: "AI Reorder", ja: "AI再発注", th: "AI สั่งซื้อซ้ำ", zh: "AI 补货下单" },
    "AI alert: Payment approval pending — this order is on hold until payment is verified. Tap to review or contact your account manager.": { en: "AI alert: Payment approval pending — this order is on hold until payment is verified. Tap to review or contact your account manager.", ja: "AIアラート：支払い承認待ちです。支払い確認までこの注文は保留されます。タップして確認するか、アカウントマネージャーに連絡してください。", th: "แจ้งเตือน AI: รออนุมัติการชำระเงิน — คำสั่งซื้อนี้ถูกพักไว้จนกว่าจะยืนยันการชำระเงิน แตะเพื่อตรวจสอบหรือติดต่อ account manager", zh: "AI 预警：付款审批待处理——该订单将在付款确认前暂停。点击复核或联系您的客户经理。" },
    "AI Insight: &quot;Seasonal occasion + Wanchai Ferry Dumplings&quot; bundle has 3.2× higher margin than individual sales": { en: "AI Insight: \"Seasonal occasion + Wanchai Ferry Dumplings\" bundle has 3.2× higher margin than individual sales", ja: "AIインサイト：「季节场景 + フィッシュオイル」バンドルは単品販売よりマージンが3.2倍高いです", th: "AI Insight: bundle \"Seasonal occasion + Wanchai Ferry Dumplings\" มี margin สูงกว่าการขายเดี่ยว 3.2 เท่า", zh: "AI 洞察：“季节场景 + 湾仔码头水饺”组合包利润率比单品销售高 3.2 倍" },
    "Trading": { en: "Trading", ja: "トレーディング", th: "การซื้อขาย", zh: "交易中心" },
    "JUN": { en: "JUN", ja: "6月", th: "มิ.ย.", zh: "6月" },
    "JUL": { en: "JUL", ja: "7月", th: "ก.ค.", zh: "7月" },
    "Press": { en: "Press", ja: "プレス", th: "สื่อ", zh: "媒体" },
    "Print": { en: "Print", ja: "印刷", th: "พิมพ์", zh: "印刷" },
    "Registered": { en: "Registered", ja: "登録済み", th: "ลงทะเบียนแล้ว", zh: "已注册" },
    "Review & Order": { en: "Review & Order", ja: "確認と発注", th: "ตรวจสอบและสั่งซื้อ", zh: "查看并订购" },
    "Sustainability": { en: "Sustainability", ja: "サステナビリティ", th: "ความยั่งยืน", zh: "可持续发展" },
    "Create Ramadan-themed promotional materials in Malay, English & Chinese with one click using our AIGC platform.": { en: "Create Ramadan-themed promotional materials in Malay, English & Chinese with one click using our AIGC platform.", ja: "AIGCプラットフォームを使って、マレー語・英語・中国語のラマダン向けプロモーション素材をワンクリックで作成。", th: "สร้างสื่อโปรโมชันรอบเทศกาลรามาดันในภาษามาเลย์ อังกฤษ และจีน ด้วยคลิกเดียวผ่านแพลตฟอร์ม AIGC", zh: "使用我们的 AIGC 平台一键创建马来语、英语和中文的斋月主题促销素材。" },
    "For over nine decades, General Mills has been Australia's most trusted name in food experience. From a small food innovation clinic in Queensland to a global leader in products and products, our commitment remains unchanged: combine the best of nature with the rigor of science to help people take charge of their wellbeing.": { en: "For over nine decades, General Mills has been Australia's most trusted name in food experience. From a small food innovation clinic in Queensland to a global leader in products and products, our commitment remains unchanged: combine the best of nature with the rigor of science to help people take charge of their wellbeing.", ja: "90年以上にわたり、General Millsはオーストラリアで最も信頼されている自然健康の名前です。クイーンズランドの小さな自然療法クリニックから、プロダクトとプロダクトメントの世界的リーダーへ——私たちの約束は変わりません：自然の最高のものと科学の厳密さを組み合わせて、人々が自分の健康を管理できるようにすることです。", th: "กว่าเก้าทศวรรษที่ General Mills ได้เป็นชื่อที่ได้รับความไว้วางใจมากที่สุดในออสเตรเลียด้านสุขภาพจากธรรมชาติ จากคลินิกธรรมชาติบำบัดเล็กๆใน Queensland สู่ผู้นำระดับโลกด้านผลิตภัณฑ์และอาหารเสริม คำมั่นสัญญาของเรายังคงไม่เปลี่ยนแปลง: ผสมผสานสิ่งที่ดีที่สุดของธรรมชาติกับความเข้มงวดของวิทยาศาสตร์เพื่อช่วยให้ผู้คนควบคุมสุขภาพของตนเอง", zh: "九十余年来，General Mills 一直是澳大利亚最值得信赖的食品体验品牌。从昆士兰州的一家小型食品创新诊所，到全球产品和食品组合的领导者——我们的承诺始终不变：将自然精华与科学严谨相结合，帮助人们掌控自己的健康。" },
    "Every product is developed by our team of scientists, naturopaths, and formulators — backed by real research, real ingredients, and a belief that good health should be simple, natural, and within everyone's reach.": { en: "Every product is developed by our team of scientists, naturopaths, and formulators — backed by real research, real ingredients, and a belief that good health should be simple, natural, and within everyone's reach.", ja: "すべての製品は、科学者、自然療法医、製剤師のチームによって開発されています——本物の研究と素材、そして良い健康はシンプルで自然であり、誰にでも手の届くものであるという信念に支えられています。", th: "ทุกผลิตภัณฑ์พัฒนาโดยทีมนักวิทยาศาสตร์ แพทย์ธรรมชาติบำบัด และนักformulate — สนับสนุนด้วยการวิจัยจริง ส่วนผสมจริง และความเชื่อว่าสุขภาพที่ดีควรเรียบง่าย เป็นธรรมชาติ และอยู่ในการเข้าถึงของทุกคน", zh: "每一款产品均由我们的科学家、食品创新师和配方师团队研发——基于真实研究、真实成分，以及相信健康应当简单、自然、人人可及的信念。" },
    "Stressed out and wondering whether that's why you can't shake that cold — or why you keep catching them? The link between stress and seasonal occasion is real.": { en: "Stressed out and wondering whether that's why you can't shake that cold — or why you keep catching them? The link between stress and seasonal occasion is real.", ja: "ストレスで疲れ果て、風邪がなかなか治らないのはそのせいか——またはなぜ風邪をひきやすいのか？ストレスと季节场景の関連は本当です。", th: "เครียดและสงสัยว่านั่นคือเหตุผลที่คุณไม่สามารถขจัดหวัดได้ — หรือทำไมคุณถึงติดหวัดบ่อย? ความสัมพันธ์ระหว่างความเครียดและโอกาสตามฤดูกาลเป็นของจริง", zh: "压力大，怀疑是不是这就是为什么你感冒老不好——或者为什么你老是感冒？压力和季节场景之间的联系是真实的。" },
    "© 2026 General Mills Limited. All rights reserved. ABN 72 009 488 123.": { en: "© 2026 General Mills Limited. All rights reserved. ABN 72 009 488 123.", ja: "© 2026 General Mills Limited. All rights reserved. ABN 72 009 488 123.", th: "© 2026 General Mills Limited. All rights reserved. ABN 72 009 488 123.", zh: "© 2026 General Mills Limited. All rights reserved. ABN 72 009 488 123." },
    "50+": { en: "50+", ja: "50+", th: "50+", zh: "50+" },
    "China": { en: "China", ja: "中国", th: "จีน", zh: "中国" },
    "Company": { en: "Company", ja: "会社", th: "บริษัท", zh: "公司" },
    "FB": { en: "FB", ja: "FB", th: "FB", zh: "FB" },
    "IG": { en: "IG", ja: "IG", th: "IG", zh: "IG" },
    "Korea": { en: "Korea", ja: "韓国", th: "เกาหลี", zh: "韩国" },
    "LI": { en: "LI", ja: "LI", th: "LI", zh: "LI" },
    "Open": { en: "Open", ja: "オープン", th: "เปิด", zh: "开放" },
    "PDF": { en: "PDF", ja: "PDF", th: "PDF", zh: "PDF" },
    "Preview": { en: "Preview", ja: "プレビュー", th: "ดูตัวอย่าง", zh: "预览" },
    "YT": { en: "YT", ja: "YT", th: "YT", zh: "YT" },
    "Text + Image + Carousel": {
        en: "Text + Image + Carousel",
        ja: "テキスト+画像+カルーセル",
        th: "ข้อความ+รูปภาพ+หมุนเวียน",
        zh: "文本+图片+轮播"
    },
        "2024-01-02 – 2024-12-14": {
        en: "2024-01-02 – 2024-12-14",
        ja: "2024-01-02 – 2024-12-14",
        th: "2024-01-02 – 2024-12-14",
        zh: "2024-01-02 – 2024-12-14"
    },
        "2024-12-10 08:24": {
        en: "2024-12-10 08:24",
        ja: "2024-12-10 08:24",
        th: "2024-12-10 08:24",
        zh: "2024-12-10 08:24"
    },
        "2024-12-08 19:10": {
        en: "2024-12-08 19:10",
        ja: "2024-12-08 19:10",
        th: "2024-12-08 19:10",
        zh: "2024-12-08 19:10"
    },
        "2024-12-05 15:45": {
        en: "2024-12-05 15:45",
        ja: "2024-12-05 15:45",
        th: "2024-12-05 15:45",
        zh: "2024-12-05 15:45"
    },
        "2024-12-01 14:27": {
        en: "2024-12-01 14:27",
        ja: "2024-12-01 14:27",
        th: "2024-12-01 14:27",
        zh: "2024-12-01 14:27"
    },
        "2024-11-28 21:50": {
        en: "2024-11-28 21:50",
        ja: "2024-11-28 21:50",
        th: "2024-11-28 21:50",
        zh: "2024-11-28 21:50"
    },
        "2024-11-25 18:05": {
        en: "2024-11-25 18:05",
        ja: "2024-11-25 18:05",
        th: "2024-11-25 18:05",
        zh: "2024-11-25 18:05"
    },
        "2024-11-22 11:07": {
        en: "2024-11-22 11:07",
        ja: "2024-11-22 11:07",
        th: "2024-11-22 11:07",
        zh: "2024-11-22 11:07"
    },
        "Add Custom Tag": {
        en: "Add Custom Tag",
        ja: "カスタムタグを追加",
        th: "เพิ่มแท็กกำหนดเอง",
        zh: "添加自定义标签"
    },
        "Auto-generated": {
        en: "Auto-generated",
        ja: "自動生成",
        th: "สร้างอัตโนมัติ",
        zh: "自动生成"
    },
        "AI-generated": {
        en: "AI-generated",
        ja: "AI生成",
        th: "สร้างโดย AI",
        zh: "AI生成"
    },
        "Text + Image": {
        en: "Text + Image",
        ja: "テキスト+画像",
        th: "ข้อความ+รูปภาพ",
        zh: "文本+图片"
    },
        "2 hours ago": {
        en: "2 hours ago",
        ja: "2時間前",
        th: "2 ชั่วโมงที่แล้ว",
        zh: "2小时前"
    },
        "3 hours ago": {
        en: "3 hours ago",
        ja: "3時間前",
        th: "3 ชั่วโมงที่แล้ว",
        zh: "3小时前"
    },
        "5 hours ago": {
        en: "5 hours ago",
        ja: "5時間前",
        th: "5 ชั่วโมงที่แล้ว",
        zh: "5小时前"
    },
        "3 days ago": {
        en: "3 days ago",
        ja: "3日前",
        th: "3 วันที่แล้ว",
        zh: "3天前"
    },
        "15 min ago": {
        en: "15 min ago",
        ja: "15分前",
        th: "15 นาทีที่แล้ว",
        zh: "15分钟前"
    },
        "1 hour ago": {
        en: "1 hour ago",
        ja: "1時間前",
        th: "1 ชั่วโมงที่แล้ว",
        zh: "1小时前"
    },
        "2024-11-29": {
        en: "2024-11-29",
        ja: "2024-11-29",
        th: "2024-11-29",
        zh: "2024-11-29"
    },
        "2024-10-15": {
        en: "2024-10-15",
        ja: "2024-10-15",
        th: "2024-10-15",
        zh: "2024-10-15"
    },
        "Sentiment": {
        en: "Sentiment",
        ja: "センチメント",
        th: "ความรู้สึก",
        zh: "情绪"
    },
        "2 min ago": {
        en: "2 min ago",
        ja: "2分前",
        th: "2 นาทีที่แล้ว",
        zh: "2分钟前"
    },
        "Add Rule": {
        en: "Add Rule",
        ja: "ルールを追加",
        th: "เพิ่มกฎ",
        zh: "添加规则"
    },
        "Mentions": {
        en: "Mentions",
        ja: "言及",
        th: "การกล่าวถึง",
        zh: "提及"
    },
        "Settings": {
        en: "Settings",
        ja: "設定",
        th: "การตั้งค่า",
        zh: "设置"
    },
        "Calendar": {
        en: "Calendar",
        ja: "カレンダー",
        th: "ปฏิทิน",
        zh: "日历"
    },
        "0 / 3000": {
        en: "0 / 3000",
        ja: "0 / 3000",
        th: "0 / 3000",
        zh: "0 / 3000"
    },
        "12 Steps": {
        en: "12 Steps",
        ja: "12ステップ",
        th: "12 ขั้นตอน",
        zh: "12步"
    },
        "Replace": {
        en: "Replace",
        ja: "置換",
        th: "แทนที่",
        zh: "替换"
    },
        "0 / 300": {
        en: "0 / 300",
        ja: "0 / 300",
        th: "0 / 300",
        zh: "0 / 300"
    },
        "8 Steps": {
        en: "8 Steps",
        ja: "8ステップ",
        th: "8 ขั้นตอน",
        zh: "8步"
    },
        "0 / 20": {
        en: "0 / 20",
        ja: "0 / 20",
        th: "0 / 20",
        zh: "0 / 20"
    },
        "Push": {
        en: "Push",
        ja: "プッシュ",
        th: "เผยแพร่",
        zh: "推送"
    },
        "Yes": {
        en: "Yes",
        ja: "はい",
        th: "ใช่",
        zh: "是"
    },
        "New": {
        en: "New",
        ja: "新規",
        th: "ใหม่",
        zh: "新"
    },
        "...": {
        en: "...",
        ja: "...",
        th: "...",
        zh: "..."
    },
        "No": {
        en: "No",
        ja: "いいえ",
        th: "ไม่",
        zh: "否"
    },
        "←": {
        en: "←",
        ja: "←",
        th: "←",
        zh: "←"
    },
        "→": {
        en: "→",
        ja: "→",
        th: "→",
        zh: "→"
    },
        "<": {
        en: "<",
        ja: "<",
        th: "<",
        zh: "<"
    },
        ">": {
        en: ">",
        ja: ">",
        th: ">",
        zh: ">"
    }
,
    "Detects unverified food claims like 'cures disease'": {
        en: "Detects unverified food claims like 'cures disease'",
        ja: "\u0022病気を治す\u0022などの未確認の健康主張を検出",
        th: "ตรวจจับข้อความอ้างอิงสุขภาพที่ไม่ได้รับการยืนยัน เช่น \u0022รักษาโรค\u0022",
        zh: "检测未经证实的健康声明，如\u0022治愈疾病\u0022"
    },
        "#General Mills #NaturalHealth #Seasonal occasionBoost #ProductC #Everyday enjoymentJourney #AustralianMade": {
        en: "#General Mills #NaturalHealth #Seasonal occasionBoost #ProductC #Everyday enjoymentJourney #AustralianMade",
        ja: "#General Mills #ナチュラルヘルス #季节场景ブースト #プロダクトC #ウェルネスジャーニー #オーストラリア製",
        th: "#General Mills #NaturalHealth #Seasonal occasionBoost #ProductC #Everyday enjoymentJourney #AustralianMade",
        zh: "#General Mills #自然健康 #季节场景提升 #哈根达斯迷你杯 # everyday enjoyment之旅 #澳洲制造"
    },
        "#Family tableHealth #Omega3": {
        en: "#Family tableHealth #Omega3",
        ja: "#ファミリーテーブル健康 #オメガ3",
        th: "#สุขภาพหัวใจ #Omega3",
        zh: "#家庭餐桌健康 #Omega3"
    },
        "#Seasonal occasionBoost #Holiday": {
        en: "#Seasonal occasionBoost #Holiday",
        ja: "#季节场景ブースト #ホリデー",
        th: "#โอกาสตามฤดูกาล #วันหยุด",
        zh: "#季节场景提升 #假期"
    },
        "#Seasonal occasionBoost Häagen-Dazs Mini Cup Tips for Winter": {
        en: "#Seasonal occasionBoost Häagen-Dazs Mini Cup Tips for Winter",
        ja: "#季节场景ブースト 冬のプロダクトC対策",
        th: "#โอกาสตามฤดูกาล เคล็ดลับผลิตภัณฑ์ซีสำหรับฤดูหนาว",
        zh: "#季节场景提升 冬季哈根达斯迷你杯小贴士"
    },
        "#MensHealth #Fitness": {
        en: "#MensHealth #Fitness",
        ja: "#男性健康 #フィットネス",
        th: "#สุขภาพผู้ชาย #ฟิตเนส",
        zh: "#男性健康 #健身"
    },
        "#NaturalHealth #Seasonal occasion": {
        en: "#NaturalHealth #Seasonal occasion",
        ja: "#ナチュラルヘルス #季节场景",
        th: "#สุขภาพธรรมชาติ #โอกาสตามฤดูกาล",
        zh: "#自然健康 #季节场景"
    },
        "#Omega3 Wanchai Ferry Dumplings Benefits for Family Table": {
        en: "#Omega3 Wanchai Ferry Dumplings Benefits for Family Table",
        ja: "#オメガ3 フィッシュオイルのファミリーテーブル健康への効果",
        th: "#Omega3 ประโยชน์ของน้ำมันปลาต่อสุขภาพหัวใจ",
        zh: "#Omega3 湾仔码头水饺对家庭餐桌健康的益处"
    },
        "#Celebration #FolicAcid": {
        en: "#Celebration #FolicAcid",
        ja: "#ギフト #葉酸",
        th: "#การตั้งครรภ์ #โฟลิก",
        zh: "#礼赠场景 #叶酸"
    },
        "#ProductC #Everyday enjoyment": {
        en: "#ProductC #Everyday enjoyment",
        ja: "#プロダクトC #ウェルネス",
        th: "#ผลิตภัณฑ์ซี #สุขภาพ",
        zh: "#哈根达斯迷你杯 # everyday enjoyment"
    },
        "@generalmills": {
        en: "@generalmills",
        ja: "@generalmills",
        th: "@generalmills",
        zh: "@generalmills"
    },
        "@generalmills_cn": {
        en: "@generalmills_cn",
        ja: "@generalmills_cn",
        th: "@generalmills_cn",
        zh: "@generalmills_cn"
    },
        "@generalmills_my": {
        en: "@generalmills_my",
        ja: "@generalmills_my",
        th: "@generalmills_my",
        zh: "@generalmills_my"
    },
        "@generalmills_official": {
        en: "@generalmills_official",
        ja: "@generalmills_official",
        th: "@generalmills_official",
        zh: "@generalmills_official"
    },
        "@generalmills_sg": {
        en: "@generalmills_sg",
        ja: "@generalmills_sg",
        th: "@generalmills_sg",
        zh: "@generalmills_sg"
    },
        "@generalmills_th": {
        en: "@generalmills_th",
        ja: "@generalmills_th",
        th: "@generalmills_th",
        zh: "@generalmills_th"
    },
        "@healthyliving": {
        en: "@healthyliving",
        ja: "@healthyliving",
        th: "@healthyliving",
        zh: "@healthyliving"
    },
        "@healthyliving_kl": {
        en: "@healthyliving_kl",
        ja: "@healthyliving_kl",
        th: "@healthyliving_kl",
        zh: "@healthyliving_kl"
    },
        "@householdsguide_sg": {
        en: "@householdsguide_sg",
        ja: "@householdsguide_sg",
        th: "@householdsguide_sg",
        zh: "@householdsguide_sg"
    },
        "@productjunkie": {
        en: "@productjunkie",
        ja: "@productjunkie",
        th: "@productjunkie",
        zh: "@productjunkie"
    },
        "@everyday enjoyment_daily": {
        en: "@everyday enjoyment_daily",
        ja: "@everyday enjoyment_daily",
        th: "@everyday enjoyment_daily",
        zh: "@everyday enjoyment_daily"
    },
        "+60 12-345-6789": {
        en: "+60 12-345-6789",
        ja: "+60 12-345-6789",
        th: "+60 12-345-6789",
        zh: "+60 12-345-6789"
    },
        "0.3K": {
        en: "0.3K",
        ja: "0.3K",
        th: "0.3K",
        zh: "0.3K"
    },
        "0.4K": {
        en: "0.4K",
        ja: "0.4K",
        th: "0.4K",
        zh: "0.4K"
    },
        "0.5K": {
        en: "0.5K",
        ja: "0.5K",
        th: "0.5K",
        zh: "0.5K"
    },
        "0.6K": {
        en: "0.6K",
        ja: "0.6K",
        th: "0.6K",
        zh: "0.6K"
    },
        "0.8K": {
        en: "0.8K",
        ja: "0.8K",
        th: "0.8K",
        zh: "0.8K"
    },
        "1.1K": {
        en: "1.1K",
        ja: "1.1K",
        th: "1.1K",
        zh: "1.1K"
    },
        "1.5K": {
        en: "1.5K",
        ja: "1.5K",
        th: "1.5K",
        zh: "1.5K"
    },
        "1.8K": {
        en: "1.8K",
        ja: "1.8K",
        th: "1.8K",
        zh: "1.8K"
    },
        "1.9K": {
        en: "1.9K",
        ja: "1.9K",
        th: "1.9K",
        zh: "1.9K"
    },
        "2.1K": {
        en: "2.1K",
        ja: "2.1K",
        th: "2.1K",
        zh: "2.1K"
    },
        "2.5K": {
        en: "2.5K",
        ja: "2.5K",
        th: "2.5K",
        zh: "2.5K"
    },
        "2.8K": {
        en: "2.8K",
        ja: "2.8K",
        th: "2.8K",
        zh: "2.8K"
    },
        "3.1K": {
        en: "3.1K",
        ja: "3.1K",
        th: "3.1K",
        zh: "3.1K"
    },
        "3.2K": {
        en: "3.2K",
        ja: "3.2K",
        th: "3.2K",
        zh: "3.2K"
    },
        "3.8K": {
        en: "3.8K",
        ja: "3.8K",
        th: "3.8K",
        zh: "3.8K"
    },
        "4.2K": {
        en: "4.2K",
        ja: "4.2K",
        th: "4.2K",
        zh: "4.2K"
    },
        "5.2K": {
        en: "5.2K",
        ja: "5.2K",
        th: "5.2K",
        zh: "5.2K"
    },
        "9.8K": {
        en: "9.8K",
        ja: "9.8K",
        th: "9.8K",
        zh: "9.8K"
    },
        "12.4K": {
        en: "12.4K",
        ja: "12.4K",
        th: "12.4K",
        zh: "12.4K"
    },
        "&gt;": {
        en: "&gt;",
        ja: "&gt;",
        th: "&gt;",
        zh: "&gt;"
    },
        "&lt;": {
        en: "&lt;",
        ja: "&lt;",
        th: "&lt;",
        zh: "&lt;"
    },
        "&quot;Amazing results after 2 weeks!&quot;": {
        en: "&quot;Amazing results after 2 weeks!&quot;",
        ja: "&quot;2週間で驚きの結果！&quot;",
        th: "&quot;ผลลัพธ์ที่น่าทึ่งหลัง 2 สัปดาห์!&quot;",
        zh: "&quot;两周后效果惊人！&quot;"
    },
        "&quot;Both great brands! General Mills...&quot;": {
        en: "&quot;Both great brands! General Mills...&quot;",
        ja: "&quot;両方とも素晴らしいブランド！General Mills...&quot;",
        th: "&quot;ทั้งสองแบรนด์ดีมาก! General Mills...&quot;",
        zh: "&quot;两个品牌都很棒！General Mills...&quot;"
    },
        "&quot;Comparing General Mills vs Swisse – absorption test surprised me!&quot;": {
        en: "&quot;Comparing General Mills vs Swisse – absorption test surprised me!&quot;",
        ja: "&quot;General Mills vs Swisse 比較 – 吸収テストに驚いた！&quot;",
        th: "&quot;เปรียบเทียบ General Mills vs Swisse – การทดสอบการดูดซึมน่าประหลาดใจ!&quot;",
        zh: "&quot;General Mills vs Swisse 对比 – 吸收测试让我惊讶！&quot;"
    },
        "&quot;Good but a bit pricey&quot;": {
        en: "&quot;Good but a bit pricey&quot;",
        ja: "&quot;良いけど少し高い&quot;",
        th: "&quot;ดีแต่ราคาสูงไปหน่อย&quot;",
        zh: "&quot;不错但有点贵&quot;"
    },
        "&quot;Hi Sarah! Available at Guardian KL...&quot;": {
        en: "&quot;Hi Sarah! Available at Guardian KL...&quot;",
        ja: "&quot;こんにちは Sarah! Guardian KLで販売中...&quot;",
        th: "&quot;สวัสดี Sarah! มีขายที่ Guardian KL...&quot;",
        zh: "&quot;嗨 Sarah! Guardian KL 有售...&quot;"
    },
        "&quot;Love the new Wanchai Ferry Dumplings packs! When will they be available in KL? I've been looking everywhere but my local Guardian doesn't stock them yet.&quot;": {
        en: "&quot;Love the new Wanchai Ferry Dumplings packs! When will they be available in KL? I've been looking everywhere but my local Guardian doesn't stock them yet.&quot;",
        ja: "&quot;新しいフィッシュオイルカプセルが気に入ってます！KLでいつ販売開始？どこでも探しているのですが、地元のGuardianにはまだ入荷していません。&quot;",
        th: "&quot;รักแคปซูลน้ำมันปลาใหม่! เมื่อไหร่จะมีขายใน KL? ฉันมองหาทุกที่แต่ Guardian ในท้องถิ่นยังไม่มีสต็อก&quot;",
        zh: "&quot;喜欢新的湾仔码头水饺包装！什么时候在KL上市？我到处找但本地Guardian还没货。&quot;"
    },
        "&quot;Love the new Wanchai Ferry Dumplings packs! When will they be available in KL?&quot;": {
        en: "&quot;Love the new Wanchai Ferry Dumplings packs! When will they be available in KL?&quot;",
        ja: "&quot;新しいフィッシュオイルカプセルが気に入ってます！KLでいつ販売開始？&quot;",
        th: "&quot;รักแคปซูลน้ำมันปลาใหม่! เมื่อไหร่จะมีขายใน KL?&quot;",
        zh: "&quot;喜欢新的湾仔码头水饺包装！什么时候在KL上市？&quot;"
    },
        "&quot;My go-to celebration products – General Mills Celebration Gold review&quot;": {
        en: "&quot;My go-to celebration products – General Mills Celebration Gold review&quot;",
        ja: "&quot;ギフト中の定番プロダクト – General Mills Celebration Gold レビュー&quot;",
        th: "&quot;ผลิตภัณฑ์คนท้องที่ฉันใช้ – รีวิว General Mills Celebration Gold&quot;",
        zh: "&quot;我的礼赠场景首选食品产品 – General Mills Celebration Gold 评测&quot;"
    },
        "&quot;Price went up again? Not sure if still worth it vs local brands&quot;": {
        en: "&quot;Price went up again? Not sure if still worth it vs local brands&quot;",
        ja: "&quot;また値上がり？地元ブランドと比べて価値があるかどうか&quot;",
        th: "&quot;ราคาขึ้นอีกแล้ว? ไม่แน่ใจว่าคุ้มค่ากว่าแบรนด์ท้องถิ่นหรือไม่&quot;",
        zh: "&quot;又涨价了？不确定是否还比本地品牌值得&quot;"
    },
        "&quot;When in KL?&quot;": {
        en: "&quot;When in KL?&quot;",
        ja: "&quot;KLでいつ？&quot;",
        th: "&quot;เมื่อไหร่ใน KL?&quot;",
        zh: "&quot;什么时候在KL？&quot;"
    },
        "&quot;vs Swisse?&quot;": {
        en: "&quot;vs Swisse?&quot;",
        ja: "&quot;vs Swisse?&quot;",
        th: "&quot;vs Swisse?&quot;",
        zh: "&quot;vs Swisse？&quot;"
    },
        "&quot;正品，物流很快&quot;": {
        en: "&quot;正品，物流很快&quot;",
        ja: "&quot;本物、配送が速い&quot;",
        th: "&quot;ของแท้ จัดส่งเร็ว&quot;",
        zh: "&quot;正品，物流很快&quot;"
    },
        "&quot;请问礼赠家庭可以吃这个吗？有副作用吗？&quot;": {
        en: "&quot;请问礼赠家庭可以吃这个吗？有副作用吗？&quot;",
        ja: "&quot;妊婦はこれを食べられますか？副作用はありますか？&quot;",
        th: "&quot;คนท้องกินได้ไหมคะ? มีผลข้างเคียงไหม?&quot;",
        zh: "&quot;请问礼赠家庭可以吃这个吗？有副作用吗？&quot;"
    },
        "Search": { en: "Search", ja: "検索", th: "ค้นหา", zh: "搜索" },
        "Found {count} results for \"{query}\"": { en: "Found {count} results for \"{query}\"", ja: "\"{query}\"の検索結果 {count} 件", th: "พบ {count} ผลลัพธ์สำหรับ \"{query}\"", zh: "找到 {count} 条 \"{query}\" 的结果" },
        "All": { en: "All", ja: "すべて", th: "ทั้งหมด", zh: "全部" },
        "Products": { en: "Products", ja: "製品", th: "ผลิตภัณฑ์", zh: "产品" },
        "Orders": { en: "Orders", ja: "注文", th: "คำสั่งซื้อ", zh: "订单" },
        "Documents": { en: "Documents", ja: "書類", th: "เอกสาร", zh: "文档" },
        "Campaigns": { en: "Campaigns", ja: "キャンペーン", th: "แคมเปญ", zh: "活动" },
        "Tools": { en: "Tools", ja: "ツール", th: "เครื่องมือ", zh: "工具" },
        "Reports": { en: "Reports", ja: "レポート", th: "รายงาน", zh: "报表" },
        "No results found": { en: "No results found", ja: "結果が見つかりません", th: "ไม่พบผลลัพธ์", zh: "未找到结果" },
        "Try adjusting your search or filters": { en: "Try adjusting your search or filters", ja: "検索条件やフィルタを調整してみてください", th: "ลองปรับการค้นหาหรือตัวกรองของคุณ", zh: "请尝试调整搜索或筛选条件" },
        "Product": { en: "Product", ja: "製品", th: "ผลิตภัณฑ์", zh: "产品" },
        "Order": { en: "Order", ja: "注文", th: "คำสั่งซื้อ", zh: "订单" },
        "Document": { en: "Document", ja: "書類", th: "เอกสาร", zh: "文档" },
        "Campaign": { en: "Campaign", ja: "キャンペーン", th: "แคมเปญ", zh: "活动" },
        "Tool": { en: "Tool", ja: "ツール", th: "เครื่องมือ", zh: "工具" },
        "Report": { en: "Report", ja: "レポート", th: "รายงาน", zh: "报表" },
        "Campaign Hub | GENERAL MILLS® Partner Portal": { en: "Campaign Hub | GENERAL MILLS® Partner Portal", ja: "キャンペーンハブ | GENERAL MILLS® パートナーポータル", th: "ศูนย์แคมเปญ | พอร์ทัลพันธมิตร GENERAL MILLS®", zh: "活动中心 | GENERAL MILLS® 合作伙伴门户" },
        "Campaign Hub": { en: "Campaign Hub", ja: "キャンペーンハブ", th: "ศูนย์แคมเปญ", zh: "活动中心" },
        "My Campaigns": { en: "My Campaigns", ja: "マイキャンペーン", th: "แคมเปญของฉัน", zh: "我的活动" },
        "AI Recommendations": { en: "AI Recommendations", ja: "AIおすすめ", th: "คำแนะนำ AI", zh: "AI推荐" },
        "Plan, launch, and track campaigns across all channels — from one central command.": { en: "Plan, launch, and track campaigns across all channels — from one central command.", ja: "すべてのチャンネルでのキャンペーンを計画、開始、追跡 — 一元管理で。", th: "วางแผน เปิดตัว และติดตามแคมเปญ across ทุกช่องทาง — จากศูนย์บัญชาการเดียว", zh: "从单一指挥中心，规划、启动和追踪全渠道活动。" },
        "Active Campaigns": { en: "Active Campaigns", ja: "アクティブキャンペーン", th: "แคมเปญที่ใช้งานอยู่", zh: "进行中的活动" },
        "Orders Driven": { en: "Orders Driven", ja: "注文数", th: "คำสั่งซื้อที่ได้รับ", zh: "带来的订单" },
        "Revenue Generated": { en: "Revenue Generated", ja: "生成収益", th: "รายรับที่สร้างขึ้น", zh: "产生的收入" },
        "Avg Conversion Rate": { en: "Avg Conversion Rate", ja: "平均コンバージョン率", th: "อัตราการแปลงเฉลี่ย", zh: "平均转化率" },
        "+ New Campaign": { en: "+ New Campaign", ja: "+ 新規キャンペーン", th: "+ แคมเปญใหม่", zh: "+ 新建活动" },
        "Templates": { en: "Templates", ja: "テンプレート", th: "เทมเพลต", zh: "模板" },
        "All Status": { en: "All Status", ja: "すべてのステータス", th: "สถานะทั้งหมด", zh: "所有状态" },
        "Live": { en: "Live", ja: "ライブ", th: "กำลังใช้งาน", zh: "进行中" },
        "Planned": { en: "Planned", ja: "計画中", th: "วางแผนแล้ว", zh: "已计划" },
        "Ended": { en: "Ended", ja: "終了", th: "สิ้นสุดแล้ว", zh: "已结束" },
        "All Channels": { en: "All Channels", ja: "すべてのチャンネル", th: "ทุกช่องทาง", zh: "所有渠道" },
        "Budget": { en: "Budget", ja: "予算", th: "งบประมาณ", zh: "预算" },
        "Clicks": { en: "Clicks", ja: "クリック", th: "คลิก", zh: "点击" },
        "CTR": { en: "CTR", ja: "CTR", th: "CTR", zh: "点击率" },
        "Revenue": { en: "Revenue", ja: "収益", th: "รายรับ", zh: "收入" },
        "View Details": { en: "View Details", ja: "詳細を見る", th: "ดูรายละเอียด", zh: "查看详情" },
        "Edit": { en: "Edit", ja: "編集", th: "แก้ไข", zh: "编辑" },
        "Pause": { en: "Pause", ja: "一時停止", th: "หยุดชั่วคราว", zh: "暂停" },
        "View Report": { en: "View Report", ja: "レポートを見る", th: "ดูรายงาน", zh: "查看报表" },
        "Duplicate": { en: "Duplicate", ja: "複製", th: "ทำซ้ำ", zh: "复制" },
        "Edit Plan": { en: "Edit Plan", ja: "計画を編集", th: "แก้ไขแผน", zh: "编辑计划" },
        "AI Suggest": { en: "AI Suggest", ja: "AI提案", th: "คำแนะนำ AI", zh: "AI建议" },
        "Engagement Toolkit | GENERAL MILLS® Partner Portal": { en: "Engagement Toolkit | GENERAL MILLS® Partner Portal", ja: "エンゲージメントツールキット | GENERAL MILLS® パートナーポータル", th: "ชุดเครื่องมือสร้างสรรค์ | พอร์ทัลพันธมิตร GENERAL MILLS®", zh: "互动工具箱 | GENERAL MILLS® 合作伙伴门户" },
        "Engagement Toolkit": { en: "Engagement Toolkit", ja: "エンゲージメントツールキット", th: "ชุดเครื่องมือสร้างสรรค์", zh: "互动工具箱" },
        "Create interactive campaigns that bring consumers to your store — sweepstakes, surveys, polls, check-ins, and coupons.": { en: "Create interactive campaigns that bring consumers to your store — sweepstakes, surveys, polls, check-ins, and coupons.", ja: "抽選、アンケート、投票、チェックイン、クーポンで、消費者を店舗に呼び込むインタラクティブキャンペーンを作成。", th: "สร้างแคมเปญแบบโต้ตอบที่ดึงดูดผู้บริโภคมาที่ร้าน — สลากชิงรางวัล แบบสำรวจ โพล เช็คอิน และคูปอง", zh: "创建互动活动，吸引消费者到店——抽奖、问卷、投票、签到和优惠券。" },
        "Lucky Draw": { en: "Lucky Draw", ja: "抽選", th: "สลากชิงรางวัล", zh: "抽奖" },
        "Create sweepstakes to attract foot traffic. Consumers scan QR code to participate and win trial samples or discount coupons.": { en: "Create sweepstakes to attract foot traffic. Consumers scan QR code to participate and win trial samples or discount coupons.", ja: "抽選を作成して来店を促進。消費者はQRコードをスキャンして参加し、試供品や割引クーポンを獲得。", th: "สร้างสลากชิงรางวัลเพื่อดึงดูดลูกค้า ผู้บริโภคสแกน QR เพื่อเข้าร่วมและลุ้นรับตัวอย่างสินค้าหรือคูปองส่วนลด", zh: "创建抽奖活动吸引客流。消费者扫描二维码参与，赢取试用装或折扣券。" },
        "active": { en: "active", ja: "アクティブ", th: "ใช้งานอยู่", zh: "进行中" },
        "participants": { en: "participants", ja: "参加者", th: "ผู้เข้าร่วม", zh: "参与者" },
        "Survey": { en: "Survey", ja: "アンケート", th: "แบบสำรวจ", zh: "问卷" },
        "Collect consumer feedback after purchase or product trial. Data automatically flows to VOC and Analytics for insights.": { en: "Collect consumer feedback after purchase or product trial. Data automatically flows to VOC and Analytics for insights.", ja: "購入後や製品トライアル後の消費者フィードバックを収集。データは自動的にVOCとAnalyticsに流れて洞察を生む。", th: "รวบรวมข้อเสนอแนะของผู้บริโภคหลังซื้อหรือทดลองสินค้า ข้อมูลไหลไปยัง VOC และ Analytics โดยอัตโนมัติ", zh: "收集购买后或试用后的消费者反馈。数据自动流向VOC和分析模块获取洞察。" },
        "responses": { en: "responses", ja: "回答", th: "การตอบกลับ", zh: "回复" },
        "Poll": { en: "Poll", ja: "投票", th: "โพล", zh: "投票" },
        "Engage consumers with fun polls — 'Which flavor do you prefer?' Generate shareable content for social media from results.": { en: "Engage consumers with fun polls — 'Which flavor do you prefer?' Generate shareable content for social media from results.", ja: "楽しい投票で消費者を引き付ける — 'どのフレーバーが好き？' 結果からSNS用のシェア可能なコンテンツを生成。", th: "ดึงดูดผู้บริโภคด้วยโพลสนุกๆ — 'คุณชอบรสไหน?' สร้างเนื้อหาที่แชร์ได้บนโซเชียลมีเดียจากผลลัพธ์", zh: "通过有趣的投票吸引消费者——'你喜欢哪种口味？' 根据结果生成社交媒体可分享内容。" },
        "votes": { en: "votes", ja: "投票", th: "โหวต", zh: "投票" },
        "Check-in": { en: "Check-in", ja: "チェックイン", th: "เช็คอิน", zh: "签到" },
        "Daily check-in rewards to drive repeat visits. Consumers earn points redeemable for samples or exclusive discounts.": { en: "Daily check-in rewards to drive repeat visits. Consumers earn points redeemable for samples or exclusive discounts.", ja: "毎日チェックインでリピート来店を促進。消費者はポイントを貯めて試供品や限定割引と交換。", th: "รางวัลเช็คอินประจำวันเพื่อกระตุ้นการมาซ้ำ ผู้บริโภคสะสมคะแนนแลกตัวอย่างสินค้าหรือส่วนลดพิเศษ", zh: "每日签到奖励驱动复访。消费者赚取积分兑换样品或专属折扣。" },
        "check-ins this week": { en: "check-ins this week", ja: "今週のチェックイン", th: "เช็คอินในสัปดาห์นี้", zh: "本周签到" },
        "Coupon": { en: "Coupon", ja: "クーポン", th: "คูปอง", zh: "优惠券" },
        "Generate exclusive General Mills coupons. Consumers scan QR or click link to claim. Track redemption rates per channel.": { en: "Generate exclusive General Mills coupons. Consumers scan QR or click link to claim. Track redemption rates per channel.", ja: "General Mills限定クーポンを生成。消費者はQRをスキャンまたはリンクをクリックして取得。チャンネル別の使用状況を追跡。", th: "สร้างคูปอง General Mills เอ็กซ์คลูซีฟ ผู้บริโภคสแกน QR หรือคลิกลิงก์เพื่อรับ ติดตามอัตราการแลกใช้ต่อช่องทาง", zh: "生成General Mills专属优惠券。消费者扫描二维码或点击链接领取。按渠道追踪兑换率。" },
        "redemption rate": { en: "redemption rate", ja: "使用状況", th: "อัตราการแลกใช้", zh: "兑换率" },
        "Template Library": { en: "Template Library", ja: "テンプレートライブラリ", th: "ไลบรารีเทมเพลต", zh: "模板库" },
        "Pre-built templates for festivals, new product launches, seasonal promotions. Customize with AI and deploy in minutes.": { en: "Pre-built templates for festivals, new product launches, seasonal promotions. Customize with AI and deploy in minutes.", ja: "フェスティバル、新製品発売、季節プロモーションの事前構築テンプレート。AIでカスタマイズして数分で展開。", th: "เทมเพลตสำเร็จรูปสำหรับเทศกาล การเปิดตัวสินค้าใหม่ โปรโมชันตามฤดูกาล ปรับแต่งด้วย AI และใช้งานในไม่กี่นาที", zh: "节日、新品发布、季节性促销的预构建模板。使用AI定制，几分钟内部署。" },
        "templates": { en: "templates", ja: "テンプレート", th: "เทมเพลต", zh: "模板" },
        "seasonal packs": { en: "seasonal packs", ja: "季節パック", th: "แพ็คตามฤดูกาล", zh: "季节包" },
        "Knowledge Base | GENERAL MILLS® Partner Portal": { en: "Knowledge Base | GENERAL MILLS® Partner Portal", ja: "ナレッジベース | GENERAL MILLS® パートナーポータル", th: "ฐานความรู้ | พอร์ทัลพันธมิตร GENERAL MILLS®", zh: "知识库 | GENERAL MILLS® 合作伙伴门户" },
        "Knowledge Base": { en: "Knowledge Base", ja: "ナレッジベース", th: "ฐานความรู้", zh: "知识库" },
        "Product knowledge, health guides, and AI-powered answers for your consumer consultations.": { en: "Product knowledge, health guides, and AI-powered answers for your consumer consultations.", ja: "製品知識、健康ガイド、消費者相談のためのAI回答。", th: "ความรู้ด้านผลิตภัณฑ์ คู่มือสุขภาพ และคำตอบจาก AI สำหรับการปรึกษาลูกค้า", zh: "产品知识、健康指南和AI驱动的消费者咨询解答。" },
        "Product Knowledge": { en: "Product Knowledge", ja: "製品知識", th: "ความรู้ด้านผลิตภัณฑ์", zh: "产品知识" },
        "Health Guides": { en: "Health Guides", ja: "健康ガイド", th: "คู่มือสุขภาพ", zh: "健康指南" },
        "FAQ": { en: "FAQ", ja: "FAQ", th: "FAQ", zh: "常见问题" },
        "AI Assistant": { en: "AI Assistant", ja: "AIアシスタント", th: "ผู้ช่วย AI", zh: "AI助手" },
        "Ask anything": { en: "Ask anything", ja: "何でも聞いて", th: "ถามอะไรก็ได้", zh: "随便问" },
        "Top FAQ": { en: "Top FAQ", ja: "よくある質問", th: "คำถามยอดนิยม", zh: "热门问题" },
        "Can gifting households take Wanchai Ferry Dumpling Pack?": { en: "Can gifting households take Wanchai Ferry Dumpling Pack?", ja: "妊婦はWanchai Ferry Dumpling Packを飲めますか？", th: "หญิงตั้งครรภ์สามารถทาน Wanchai Ferry Dumpling Pack ได้ไหม", zh: "礼赠家庭可以享用Wanchai Ferry Dumpling Pack吗？" },
        "Yes, but we recommend Celebration Gold which contains occasion cues specifically formulated for celebration. Always consult your household preference.": { en: "Yes, but we recommend Celebration Gold which contains occasion cues specifically formulated for celebration. Always consult your household preference.", ja: "はいですが、ギフト専用にoccasion cuesを配合したCelebration Goldをお勧めします。必ず医師に相談してください。", th: "ได้ แต่เราแนะนำ Celebration Gold ซึ่งมี occasion cues สูตรเฉพาะสำหรับการตั้งครรภ์ ควรปรึกษาแพทย์เสมอ", zh: "可以，但我们推荐含有专为礼赠场景配制occasion cues的Celebration Gold。请务必咨询家庭偏好。" },
        "What's the difference between Wanchai Ferry Dumplings and family dinner?": { en: "What's the difference between Wanchai Ferry Dumplings and family dinner?", ja: "Wanchai Ferry Dumplingsとfamily dinnerの違いは何ですか？", th: "Wanchai Ferry Dumplings กับ family dinner ต่างกันอย่างไร", zh: "Wanchai Ferry Dumplings和family dinner有什么区别？" },
        "Wanchai Ferry Dumplings is the source. family dinner (EPA+occasion cues) is the active ingredient. Our Wanchai Ferry Dumpling Pack contains 300mg family dinner per pack.": { en: "Wanchai Ferry Dumplings is the source. family dinner (EPA+occasion cues) is the active ingredient. Our Wanchai Ferry Dumpling Pack contains 300mg family dinner per pack.", ja: "Wanchai Ferry Dumplingsは原料です。family dinner（EPA+occasion cues）は活性成分です。Wanchai Ferry Dumpling Packには1カプセルあたり300mgのfamily dinnerが含まれます。", th: "Wanchai Ferry Dumplings คือแหล่งที่มา family dinner (EPA+occasion cues) คือส่วนประกอบที่ใช้งานได้จริง Wanchai Ferry Dumpling Pack ของเรามี family dinner 300mg ต่อแคปซูล", zh: "湾仔码头水饺是来源。family dinner（EPA+occasion cues）是活性成分。我们的Wanchai Ferry Dumpling Pack每份含300mg family dinner。" },
        "Can I take multiple products together?": { en: "Can I take multiple products together?", ja: "複数のプロダクトメントを一緒に飲めますか？", th: "สามารถทานอาหารเสริมหลายตัวพร้อมกันได้ไหม", zh: "我可以同时享用多种食品组合吗？" },
        "Most General Mills products can be combined. Avoid combining products with overlapping ingredients (e.g., two multiproducts). Check the label or ask our AI assistant.": { en: "Most General Mills products can be combined. Avoid combining products with overlapping ingredients (e.g., two multiproducts). Check the label or ask our AI assistant.", ja: "ほとんどのGeneral Mills製品は組み合わせ可能です。成分が重複する製品（例：2種類のマルチプロダクト）の組み合わせは避けてください。ラベルを確認するか、AIアシスタントに聞いてください。", th: "ผลิตภัณฑ์ General Mills ส่วนใหญ่สามารถทานร่วมกันได้ หลีกเลี่ยงการทานผลิตภัณฑ์ที่มีส่วนผสมซ้ำซ้อน (เช่น มัลติผลิตภัณฑ์ 2 ตัว) เช็คฉลากหรือถามผู้ช่วย AI ของเรา", zh: "大多数General Mills产品可以组合享用。避免组合成分重叠的产品（如两种通用磨坊组合包）。查看标签或咨询我们的AI助手。" },
        "General Mills AI Assistant": { en: "General Mills AI Assistant", ja: "General Mills AIアシスタント", th: "ผู้ช่วย AI General Mills", zh: "General Mills AI助手" },
        "Answers from verified product documents": { en: "Answers from verified product documents", ja: "認証済み製品文書からの回答", th: "คำตอบจากเอกสารผลิตภัณฑ์ที่ตรวจสอบแล้ว", zh: "来自验证产品文档的回答" },
        "Hello! I'm your General Mills knowledge assistant. I can answer questions about our products, health topics, and help you find the right product for your customers.": { en: "Hello! I'm your General Mills knowledge assistant. I can answer questions about our products, health topics, and help you find the right product for your customers.", ja: "こんにちは！General Mills知識アシスタントです。製品や健康トピックについての質問に答え、お客様に適したプロダクトメントを見つけるお手伝いができます。", th: "สวัสดี! ฉันคือผู้ช่วยด้านความรู้ General Mills ฉันสามารถตอบคำถามเกี่ยวกับผลิตภัณฑ์ หัวข้อสุขภาพ และช่วยคุณหาอาหารเสริมที่เหมาะสมสำหรับลูกค้า", zh: "你好！我是你的General Mills知识助手。我可以回答关于我们产品、健康话题的问题，并帮助你为客户找到合适的食品组合。" },
        "Confidence: High": { en: "Confidence: High", ja: "信頼度: 高", th: "ความเชื่อมั่น: สูง", zh: "置信度: 高" },
        "Source: Training Data": { en: "Source: Training Data", ja: "ソース: トレーニングデータ", th: "แหล่งที่มา: ข้อมูลการฝึกอบรม", zh: "来源: 训练数据" },
        "A customer asks: Can I take Wanchai Ferry Dumplings with blood thinners?": { en: "A customer asks: Can I take Wanchai Ferry Dumplings with blood thinners?", ja: "お客様からの質問: 血液希釈剤とWanchai Ferry Dumplingsを一緒に飲めますか？", th: "คำถามจากลูกค้า: สามารถทาน Wanchai Ferry Dumplings คู่กับยาละลายลิ่มเลือดได้ไหม", zh: "顾客提问: 我可以将湾仔码头水饺和特殊饮食限制一起享用吗？" },
        "Wanchai Ferry Dumplings may increase bleeding risk when combined with blood thinning dietary restrictionss (e.g., warfarin, aspirin). It is important to consult a service advisor before starting productation.": { en: "Wanchai Ferry Dumplings may increase bleeding risk when combined with blood thinning dietary restrictionss (e.g., warfarin, aspirin). It is important to consult a service advisor before starting productation.", ja: "Wanchai Ferry Dumplingsは血液希釈剤（例：ワルファリン、アスピリン）と併用すると出血リスクが増加する可能性があります。プロダクトメントを開始する前に医療専門家に相談することが重要です。", th: "Wanchai Ferry Dumplings อาจเพิ่มความเสี่ยงในการเลือดออกเมื่อทานร่วมกับยาละลายลิ่มเลือด (เช่น วาร์ฟาริน แอสไพริน) ควรปรึกษาบุคลากรทางการแพทย์ก่อนเริ่มทานอาหารเสริม", zh: "湾仔码头水饺与血液稀释特殊饮食限制（如华法林、阿司匹林）同时使用可能会增加出血风险。在开始食品组合之前咨询客服顾问非常重要。" },
        "Source: Wanchai Ferry Dumplings Product Information, p.3, Rev.2026-03": { en: "Source: Wanchai Ferry Dumplings Product Information, p.3, Rev.2026-03", ja: "ソース: Wanchai Ferry Dumplings製品情報 p.3 Rev.2026-03", th: "แหล่งที่มา: ข้อมูลผลิตภัณฑ์ Wanchai Ferry Dumplings หน้า 3 Rev.2026-03", zh: "来源: Wanchai Ferry Dumplings产品信息，第3页，版本2026-03" },
        "⚠️ This information is for reference only and does not constitute medical advice. Please consult a household preference for personal health decisions.": { en: "⚠️ This information is for reference only and does not constitute medical advice. Please consult a household preference for personal health decisions.", ja: "⚠️ この情報は参考のみであり、医療アドバイスを構成するものではありません。個人の健康判断については医師に相談してください。", th: "⚠️ ข้อมูลนี้เป็นข้อมูลอ้างอิงเท่านั้นและไม่ถือเป็นคำแนะนำทางการแพทย์ โปรดปรึกษาแพทย์สำหรับการตัดสินใจด้านสุขภาพส่วนบุคคล", zh: "⚠️ 此信息仅供参考，不构成医疗建议。请就个人健康决定咨询家庭偏好。" },
        "Type your question...": { en: "Type your question...", ja: "質問を入力...", th: "พิมพ์คำถามของคุณ...", zh: "输入你的问题..." },
        "Partner Health Dashboard": { en: "Partner Health Dashboard", ja: "パートナー健全性ダッシュボード", th: "แดชบอร์ดสุขภาพพันธมิตร", zh: "伙伴健康度仪表盘" },
        "At Risk": { en: "At Risk", ja: "リスクあり", th: "มีความเสี่ยง", zh: "有风险" },
        "Critical": { en: "Critical", ja: "危機的", th: "วิกฤต", zh: "危急" },
        "Occasion Score": { en: "Occasion Score", ja: "健全性スコア", th: "คะแนนสุขภาพ", zh: "场景分数" },
        "Top Performing Partners": { en: "Top Performing Partners", ja: "最高パフォーマンスパートナー", th: "พันธมิตรที่มีผลงานดีที่สุด", zh: "表现最佳伙伴" },
        "Partners Needing Attention": { en: "Partners Needing Attention", ja: "注意が必要なパートナー", th: "พันธมิตรที่ต้องการความสนใจ", zh: "需要关注的伙伴" },
        "Consumer Insights": { en: "Consumer Insights", ja: "消費者インサイト", th: "ข้อมูลเชิงลึกผู้บริโภค", zh: "消费者洞察" },
        "Female Buyers": { en: "Female Buyers", ja: "女性購入者", th: "ผู้ซื้อหญิง", zh: "女性买家" },
        "Male Buyers": { en: "Male Buyers", ja: "男性購入者", th: "ผู้ซื้อชาย", zh: "男性买家" },
        "Top Age Group": { en: "Top Age Group", ja: "トップ年齢層", th: "กลุ่มอายุยอดนิยม", zh: "主要年龄群" },
        "Top Search Keywords": { en: "Top Search Keywords", ja: "トップ検索キーワード", th: "คำค้นหายอดนิยม", zh: "热门搜索关键词" },
        "Sentiment Analysis": { en: "Sentiment Analysis", ja: "センチメント分析", th: "การวิเคราะห์ความรู้สึก", zh: "情感分析" },
        "Based on 15,420 reviews across all channels": { en: "Based on 15,420 reviews across all channels", ja: "全チャンネルの15,420件のレビューに基づく", th: "อ้างอิงจาก 15,420 รีวิว across ทุกช่องทาง", zh: "基于所有渠道的15,420条评论" },
        "AI-Powered Reports": { en: "AI-Powered Reports", ja: "AIレポート", th: "รายงานที่ขับเคลื่อนด้วย AI", zh: "AI驱动报告" },
        "Smart Summary": { en: "Smart Summary", ja: "スマートサマリー", th: "สรุปอัจฉริยะ", zh: "智能摘要" },
        "AI auto-generates weekly executive summaries with key insights, anomalies, and recommended actions.": { en: "AI auto-generates weekly executive summaries with key insights, anomalies, and recommended actions.", ja: "AIが週次エグゼクティブサマリーを自動生成 — 主要洞察、異常、推奨アクションを含む。", th: "AI สร้างสรุปรายงานประจำสัปดาห์โดยอัตโนมัติ พร้อมข้อมูลเชิงลึกสำคัญ ความผิดปกติ และแนะนำการดำเนินการ", zh: "AI自动生成每周执行摘要，包含关键洞察、异常和建议行动。" },
        "View This Week's Summary": { en: "View This Week's Summary", ja: "今週のサマリーを見る", th: "ดูสรุปประจำสัปดาห์นี้", zh: "查看本周摘要" },
        "Predictive Analytics": { en: "Predictive Analytics", ja: "予測分析", th: "การวิเคราะห์เชิงพยากรณ์", zh: "预测分析" },
        "AI predicts next 30-day sales, inventory needs, and trending products based on historical data and market signals.": { en: "AI predicts next 30-day sales, inventory needs, and trending products based on historical data and market signals.", ja: "AIが過去データと市場シグナルに基づいて、次の30日間の売上、在庫ニーズ、トレンド製品を予測。", th: "AI ทำนายยอดขาย 30 วันถัดไป ความต้องการสต็อก และสินค้าเทรนด์ ตามข้อมูลย้อนหลังและสัญญาณตลาด", zh: "AI基于历史数据和市场信号预测未来30天销售、库存需求和趋势产品。" },
        "View Forecast": { en: "View Forecast", ja: "予測を見る", th: "ดูการคาดการณ์", zh: "查看预测" },
        "Search products, health topics, or ask a question...": { en: "Search products, health topics, or ask a question...", ja: "製品、健康トピックを検索、または質問を入力...", th: "ค้นหาผลิตภัณฑ์ หัวข้อสุขภาพ หรือถามคำถาม...", zh: "搜索产品、健康话题或提问..." },
        "articles": { en: "articles", ja: "記事", th: "บทความ", zh: "文章" },
        "Q&As": { en: "Q&As", ja: "Q&A", th: "ถาม-ตอบ", zh: "问答" },
        "Operations Center": { en: "Operations Center", ja: "オペレーションセンター", th: "ศูนย์การดำเนินงาน", zh: "运营中心" },
        "Smart Ordering": { en: "Smart Ordering", ja: "スマートオーダー", th: "การสั่งซื้ออัจฉริยะ", zh: "智能订购" },
        "Central Orders": { en: "Central Orders", ja: "セントラルオーダー", th: "คำสั่งซื้อส่วนกลาง", zh: "中央订单" },
        "General Mills Academy": { en: "General Mills Academy", ja: "General Millsアカデミー", th: "General Mills อะคาเดมี่", zh: "General Mills学院" },
        "Data Feedback Loop": { en: "Data Feedback Loop", ja: "データフィードバックループ", th: "ลูปข้อเสนอแนะข้อมูล", zh: "数据反馈闭环" },
        "Cart": { en: "Cart", ja: "カート", th: "ตะกร้า", zh: "购物车" },
        "My Favorites": { en: "My Favorites", ja: "お気に入り", th: "รายการโปรด", zh: "我的收藏" },
        "Sales Orders": { en: "Sales Orders", ja: "販売注文", th: "คำสั่งขาย", zh: "销售订单" },
        "Cross-Platform Sales Aggregation": { en: "Cross-Platform Sales Aggregation", ja: "クロスプラットフォーム売上集計", th: "การรวมยอดขายข้ามแพลตฟอร์ม", zh: "跨平台销售聚合" },
        "Compliance Hub | GENERAL MILLS® Partner Portal": { en: "Compliance Hub | GENERAL MILLS® Partner Portal", ja: "コンプライアンスハブ | GENERAL MILLS® パートナーポータル", th: "ศูนย์กำกับดูแล | พอร์ทัลพันธมิตร GENERAL MILLS®", zh: "合规中心 | GENERAL MILLS® 合作伙伴门户" },
        "Compliance Hub": { en: "Compliance Hub", ja: "コンプライアンスハブ", th: "ศูนย์กำกับดูแล", zh: "合规中心" },
        "Regulatory intelligence, content audit, and compliance monitoring for all markets.": { en: "Regulatory intelligence, content audit, and compliance monitoring for all markets.", ja: "すべての市場向けの規制情報、コンテンツ監査、コンプライアンス監視。", th: "ข้อมูลกำกับดูแล การตรวจสอบเนื้อหา และการตรวจสอบความสอดคล้องสำหรับทุกตลาด", zh: "所有市场的监管情报、内容审计和合规监控。" },
        "Compliance Rate": { en: "Compliance Rate", ja: "コンプライアンス率", th: "อัตราความสอดคล้อง", zh: "合规率" },
        "Regulations Tracked": { en: "Regulations Tracked", ja: "追跡規制", th: "ข้อกำหนดที่ติดตาม", zh: "追踪法规" },
        "Pending Review": { en: "Pending Review", ja: "レビュー待ち", th: "รอการตรวจสอบ", zh: "待审核" },
        "Violations": { en: "Violations", ja: "違反", th: "การละเมิด", zh: "违规" },
        "Regulatory Library": { en: "Regulatory Library", ja: "規制ライブラリ", th: "ไลบรารีกำกับดูแล", zh: "法规库" },
        "brand governance Australia — Therapeutic Goods Advertising Code": { en: "brand governance Australia — Therapeutic Goods Advertising Code", ja: "brand governanceオーストラリア — 医療品広告規制", th: "brand governance ออสเตรเลีย — รหัสโฆษณาสินค้าเทrapeutic", zh: "澳大利亚brand governance — 治疗用品广告规范" },
        "COMPLIANT": { en: "COMPLIANT", ja: "適合", th: "สอดคล้อง", zh: "合规" },
        "Last updated: May 2026 | Applies to: AU, NZ markets": { en: "Last updated: May 2026 | Applies to: AU, NZ markets", ja: "最終更新: 2026年5月 | 対象: AU, NZ市場", th: "อัปเดตล่าสุด: พ.ค. 2026 | ใช้กับ: ตลาด AU, NZ", zh: "最后更新: 2026年5月 | 适用: 澳大利亚、新西兰市场" },
        "Guidelines for advertising therapeutic goods including permitted claims, mandatory statements, and prohibited content. All marketing materials must be pre-approved by regulatory team.": { en: "Guidelines for advertising therapeutic goods including permitted claims, mandatory statements, and prohibited content. All marketing materials must be pre-approved by regulatory team.", ja: "医療品広告のガイドライン — 許可された主張、義務的記述、禁止コンテンツを含む。すべてのマーケティング素材は規制チームの事前承認が必要。", th: "แนวทางการโฆษณาสินค้าเทrapeutic รวมถึงข้อความที่อนุญาต คำชี้แจงบังคับ และเนื้อหาต้องห้าม เนื้อหาการตลาดทั้งหมดต้องได้รับการอนุมัติล่วงหน้าจากทีมกำกับดูแล", zh: "治疗用品广告指南，包括允许声明、强制性声明和禁止内容。所有营销材料必须经监管团队预先批准。" },
        "China NMPA — Health Food Regulations": { en: "China NMPA — Health Food Regulations", ja: "中国NMPA — 健康食品規制", th: "NMPA จีน — ข้อกำหนดอาหารเพื่อสุขภาพ", zh: "中国NMPA — 食品法规" },
        "UPDATED": { en: "UPDATED", ja: "更新済み", th: "อัปเดตแล้ว", zh: "已更新" },
        "Last updated: Apr 2026 | Applies to: China market": { en: "Last updated: Apr 2026 | Applies to: China market", ja: "最終更新: 2026年4月 | 対象: 中国市場", th: "อัปเดตล่าสุด: เม.ย. 2026 | ใช้กับ: ตลาดจีน", zh: "最后更新: 2026年4月 | 适用: 中国市场" },
        "Registration requirements for health food products, blue hat certification, and advertising restrictions. Key update: new limits on product serving claims effective June 2026.": { en: "Registration requirements for health food products, blue hat certification, and advertising restrictions. Key update: new limits on product serving claims effective June 2026.", ja: "健康食品の登録要件、ブルーハット認証、広告制限。重要な更新: プロダクト用量主張の新しい制限が2026年6月に施行。", th: "ข้อกำหนดการจดทะเบียนผลิตภัณฑ์อาหารเพื่อสุขภาพ การรับรองหมวกฟ้า และข้อจำกัดการโฆษณา อัปเดตสำคัญ: ข้อจำกัดใหม่สำหรับการอ้างอิงปริมาณผลิตภัณฑ์มีผลมิ.ย. 2026", zh: "食品注册要求、蓝帽认证和广告限制。重要更新: 产品用量声明的新限制将于2026年6月生效。" },
        "ASEAN Harmonization — Product Labeling": { en: "ASEAN Harmonization — Product Labeling", ja: "ASEAN調和 — プロダクトメント表示", th: "ความสอดคล้อง ASEAN — ฉลากอาหารเสริม", zh: "东盟协调 — 食品组合标签" },
        "UNDER REVIEW": { en: "UNDER REVIEW", ja: "レビュー中", th: "อยู่ระหว่างตรวจสอบ", zh: "审核中" },
        "Last updated: Mar 2026 | Applies to: SG, MY, TH, ID, VN, PH": { en: "Last updated: Mar 2026 | Applies to: SG, MY, TH, ID, VN, PH", ja: "最終更新: 2026年3月 | 対象: SG, MY, TH, ID, VN, PH", th: "อัปเดตล่าสุด: มี.ค. 2026 | ใช้กับ: SG, MY, TH, ID, VN, PH", zh: "最后更新: 2026年3月 | 适用: 新加坡、马来西亚、泰国、印尼、越南、菲律宾" },
        "Unified labeling standards for dietary products across ASEAN markets. Under review for alignment with new Malaysia Halal certification requirements.": { en: "Unified labeling standards for dietary products across ASEAN markets. Under review for alignment with new Malaysia Halal certification requirements.", ja: "ASEAN市場全体でのプロダクトメント統一表示基準。マレーシアの新しいハラル認証要件との整合性をレビュー中。", th: "มาตรฐานฉลากที่เป็นเอกภาษณ์สำหรับอาหารเสริม across ตลาด ASEAN อยู่ระหว่างตรวจสอบความสอดคล้องกับข้อกำหนดการรับรองฮาลาลใหม่ของมาเลเซีย", zh: "东盟市场食品产品统一标签标准。正在审核与马来西亚新清真认证要求的一致性。" },
        "AI Content Audit": { en: "AI Content Audit", ja: "AIコンテンツ監査", th: "การตรวจสอบเนื้อหา AI", zh: "AI内容审计" },
        "Automatic compliance checking for all marketing materials before publication.": { en: "Automatic compliance checking for all marketing materials before publication.", ja: "公開前のすべてのマーケティング素材の自動コンプライアンスチェック。", th: "การตรวจสอบความสอดคล้องอัตโนมัติสำหรับเนื้อหาการตลาดทั้งหมดก่อนการเผยแพร่", zh: "发布前对所有营销材料进行自动合规检查。" },
        "AIGC Facebook Post — Immune Boost Campaign": { en: "AIGC Facebook Post — Immune Boost Campaign", ja: "AIGC Facebook投稿 — 季节场景ブーストキャンペーン", th: "โพสต์ AIGC Facebook — แคมเปญเสริมโอกาสตามฤดูกาล", zh: "AIGC Facebook帖子 — 季节场景增强活动" },
        "All claims verified against brand governance guidelines. No prohibited food and brand claims detected. 3/3 optional disclaimers present.": { en: "All claims verified against brand governance guidelines. No prohibited food and brand claims detected. 3/3 optional disclaimers present.", ja: "すべての主張がbrand governanceガイドラインに対して検証済み。禁止された医療主張は検出されず。3/3のオプション免責事項が存在。", th: "ข้อความอ้างอิงทั้งหมดตรวจสอบตามแนวทาง brand governance ไม่พบข้อความอ้างอิงทางการแพทย์ที่ต้องห้าม มีข้อจำกัดความรับผิดชอบเสริม 3/3", zh: "所有声明均已对照brand governance指南验证。未检测到禁止的医疗声明。3/3可选免责声明已包含。" },
        "PASSED": { en: "PASSED", ja: "合格", th: "ผ่าน", zh: "通过" },
        "AIGC Instagram Story — Celebration Gold": { en: "AIGC Instagram Story — Celebration Gold", ja: "AIGC Instagramストーリー — Celebration Gold", th: "AIGC Instagram Story — Celebration Gold", zh: "AIGC Instagram故事 — Celebration Gold" },
        "Warning: 'Guaranteed healthy family' is a prohibited medical claim. Suggested revision: 'Supports maternal health during celebration.'": { en: "Warning: 'Guaranteed healthy family' is a prohibited medical claim. Suggested revision: 'Supports maternal health during celebration.'", ja: "警告: '健康的な赤ちゃんを保証'は禁止された医療主張です。推奨修正: 'ギフト中の母体健康をサポート'", th: "คำเตือน: 'รับประกันทารกแข็งแรง' เป็นข้อความอ้างอิงทางการแพทย์ที่ต้องห้าม ข้อเสนอแนะการแก้ไข: 'สนับสนุนสุขภาพของมารดาระหว่างตั้งครรภ์'", zh: "警告: '保证健康宝宝'是禁止的医疗声明。建议修订为: '支持礼赠场景母体健康。'" },
        "NEEDS FIX": { en: "NEEDS FIX", ja: "修正が必要", th: "ต้องแก้ไข", zh: "需要修复" },
        "Email Campaign — Mother's Day Special": { en: "Email Campaign — Mother's Day Special", ja: "メールキャンペーン — 母の日スペシャル", th: "แคมเปญอีเมล — วันแม่พิเศษ", zh: "邮件活动 — 母亲节特辑" },
        "All promotional content compliant. Pricing claims accurate. No unsubstantiated health benefits mentioned.": { en: "All promotional content compliant. Pricing claims accurate. No unsubstantiated health benefits mentioned.", ja: "すべてのプロモーションコンテンツが適合。価格主張が正確。実証されていない健康効果の言及なし。", th: "เนื้อหาโปรโมชันทั้งหมดสอดคล้อง ข้อความอ้างอิงราคาถูกต้อง ไม่มีการกล่าวถึงประโยชน์ด้านสุขภาพที่ไม่มีหลักฐาน", zh: "所有促销内容合规。价格声明准确。未提及未经证实的健康益处。" },
        "Merchandising | GENERAL MILLS® Partner Portal": { en: "Merchandising | GENERAL MILLS® Partner Portal", ja: "マーチャンダイジング | GENERAL MILLS® パートナーポータル", th: "การจัดสินค้า | พอร์ทัลพันธมิตร GENERAL MILLS®", zh: "陈列指导 | GENERAL MILLS® 合作伙伴门户" },
        "Merchandising": { en: "Merchandising", ja: "マーチャンダイジング", th: "การจัดสินค้า", zh: "陈列指导" },
        "Planogram guides, shelf arrangement standards, and AI-powered photo review for optimal in-store presentation.": { en: "Planogram guides, shelf arrangement standards, and AI-powered photo review for optimal in-store presentation.", ja: "プラン図ガイド、棚配置基準、および最適な店舗内表示のためのAI写真レビュー。", th: "คู่มือแผนผัง มาตรฐานการจัดชั้น และการตรวจสอบรูปถ่ายด้วย AI เพื่อการนำเสนอในร้านที่เหมาะสมที่สุด", zh: "陈列图指南、货架摆放标准和AI照片审核，以实现最佳店内展示。" },
        "Planogram Library": { en: "Planogram Library", ja: "プラン図ライブラリ", th: "ไลบรารีแผนผัง", zh: "陈列图库" },
        "Standard Retail Shelf — 60cm": { en: "Standard Retail Shelf — 60cm", ja: "標準小売店棚 — 60cm", th: "ชั้นขายยามาตรฐาน — 60ซม.", zh: "标准门店货架 — 60厘米" },
        "PDF • 2.4 MB • Updated May 2026": { en: "PDF • 2.4 MB • Updated May 2026", ja: "PDF • 2.4 MB • 2026年5月更新", th: "PDF • 2.4 MB • อัปเดต พ.ค. 2026", zh: "PDF • 2.4 MB • 2026年5月更新" },
        "Download": { en: "Download", ja: "ダウンロード", th: "ดาวน์โหลด", zh: "下载" },
        "Premium Display — End Cap": { en: "Premium Display — End Cap", ja: "プレミアム表示 — エンドキャップ", th: "การจัดแสดงพรีเมียม — ปลายชั้น", zh: "高端展示 — 端架" },
        "PDF • 1.8 MB • Updated Apr 2026": { en: "PDF • 1.8 MB • Updated Apr 2026", ja: "PDF • 1.8 MB • 2026年4月更新", th: "PDF • 1.8 MB • อัปเดต เม.ย. 2026", zh: "PDF • 1.8 MB • 2026年4月更新" },
        "Seasonal Promotion — Immune Boost": { en: "Seasonal Promotion — Immune Boost", ja: "季節プロモーション — 季节场景ブースト", th: "โปรโมชันตามฤดูกาล — เสริมโอกาสตามฤดูกาล", zh: "季节性促销 — 季节场景增强" },
        "PDF • 3.1 MB • Updated Jun 2026": { en: "PDF • 3.1 MB • Updated Jun 2026", ja: "PDF • 3.1 MB • 2026年6月更新", th: "PDF • 3.1 MB • อัปเดต มิ.ย. 2026", zh: "PDF • 3.1 MB • 2026年6月更新" },
        "Store Photo Upload": { en: "Store Photo Upload", ja: "店舗写真アップロード", th: "อัปโหลดรูปถ่ายร้าน", zh: "门店照片上传" },
        "Upload photos of your shelf arrangement for AI review. Ensure the photo clearly shows the entire shelf.": { en: "Upload photos of your shelf arrangement for AI review. Ensure the photo clearly shows the entire shelf.", ja: "AIレビュー用に棚配置の写真をアップロード。写真全体に棚がはっきり映るようにしてください。", th: "อัปโหลดรูปถ่ายการจัดชั้นสำหรับการตรวจสอบ AI ตรวจสอบว่ารูปถ่ายแสดงชั้นทั้งหมดอย่างชัดเจน", zh: "上传货架摆放照片进行AI审核。确保照片清晰显示整个货架。" },
        "Click or drag to upload photo": { en: "Click or drag to upload photo", ja: "クリックまたはドラッグして写真をアップロード", th: "คลิกหรือลากเพื่ออัปโหลดรูปถ่าย", zh: "点击或拖动上传照片" },
        "JPG, PNG up to 10MB": { en: "JPG, PNG up to 10MB", ja: "JPG, PNG 最大10MB", th: "JPG, PNG สูงสุด 10MB", zh: "JPG, PNG 最大10MB" },
        "AI Review Results": { en: "AI Review Results", ja: "AIレビュー結果", th: "ผลการตรวจสอบ AI", zh: "AI审核结果" },
        "Guardian KL — Mid Valley": { en: "Guardian KL — Mid Valley", ja: "Guardian KL — Mid Valley", th: "Guardian KL — Mid Valley", zh: "Guardian KL — Mid Valley" },
        "Product placement matches planogram": { en: "Product placement matches planogram", ja: "製品配置がプラン図と一致", th: "การจัดวางผลิตภัณฑ์ตรงกับแผนผัง", zh: "产品摆放与陈列图一致" },
        "Price tags visible and correct": { en: "Price tags visible and correct", ja: "価格タグが見えて正確", th: "ป้ายราคามองเห็นและถูกต้อง", zh: "价格标签可见且正确" },
        "Promotional signage missing (expected: Immune Boost banner)": { en: "Promotional signage missing (expected: Immune Boost banner)", ja: "プロモーション看板が不足（予定: 季节场景ブーストバナー）", th: "ป้ายโปรโมชันขาดหายไป (ที่คาดไว้: แบนเนอร์เสริมโอกาสตามฤดูกาล)", zh: "促销 signage 缺失（预期: 季节场景增强横幅）" },
        "PENDING": { en: "PENDING", ja: "保留中", th: "รอดำเนินการ", zh: "待处理" },
        "Guardian KL — Pavilion": { en: "Guardian KL — Pavilion", ja: "Guardian KL — Pavilion", th: "Guardian KL — Pavilion", zh: "Guardian KL — Pavilion" },
        "AI review in progress. Results will be available within 5 minutes.": { en: "AI review in progress. Results will be available within 5 minutes.", ja: "AIレビュー進行中。結果は5分以内に利用可能。", th: "การตรวจสอบ AI กำลังดำเนินการ ผลลัพธ์จะพร้อมใช้งานภายใน 5 นาที", zh: "AI审核进行中。结果将在5分钟内可用。" },
    "Trading Hub": { en: "Trading Hub", ja: "トレーディングハブ", th: "ศูนย์การซื้อขาย", zh: "交易中心" },
    "Discover, sell, track, restock — your partner growth loop.": { en: "Discover, sell, track, restock — your partner growth loop.", ja: "発見、販売、追跡、補充 — パートナー成長サイクル", th: "ค้นพบ ขาย ติดตาม เติมสต็อก — วงจรการเติบโตของพาร์ทเนอร์", zh: "发现、销售、追踪、补货 — 合作伙伴增长循环" },
    "Browse Catalog": { en: "Browse Catalog", ja: "カタログを閲覧", th: "ดูแคตตาล็อก", zh: "浏览目录" },
    "New Order": { en: "New Order", ja: "新規注文", th: "สั่งซื้อใหม่", zh: "新订单" },
    "Needs your attention": { en: "Needs your attention", ja: "注意が必要", th: "ต้องการความสนใจของคุณ", zh: "需要您的关注" },
    "3 things today": { en: "3 things today", ja: "今日の3つのこと", th: "3 สิ่งวันนี้", zh: "今日3件事" },
    "💳 Pending Payments": { en: "💳 Pending Payments", ja: "💳 支払い保留中", th: "💳 รอการชำระเงิน", zh: "💳 待付款" },
    "1 invoice overdue · due in 2 days": { en: "1 invoice overdue · due in 2 days", ja: "1件の請求書が期限超過 · 2日後に期限", th: "1 ใบแจ้งหนี้ค้างชำระ · ครบกำหนดใน 2 วัน", zh: "1张发票逾期 · 2天后到期" },
    "📦 Low Stock": { en: "📦 Low Stock", ja: "📦 在庫僅少", th: "📦 สินค้าใกล้หมด", zh: "📦 库存紧张" },
    "4 SKUs": { en: "4 SKUs", ja: "4 SKU", th: "4 SKU", zh: "4个SKU" },
    "Below reorder threshold": { en: "Below reorder threshold", ja: "再発注閾値を下回る", th: "ต่ำกว่าเกณฑ์สั่งซื้อซ้ำ", zh: "低于再订购阈值" },
    "🚚 In Transit": { en: "🚚 In Transit", ja: "🚚 配送中", th: "🚚 ระหว่างจัดส่ง", zh: "🚚 运输中" },
    "3 orders": { en: "3 orders", ja: "3件の注文", th: "3 คำสั่งซื้อ", zh: "3个订单" },
    "1 arriving today · track shipments": { en: "1 arriving today · track shipments", ja: "1件が今日到着 · 配送を追跡", th: "1 รายการมาถึงวันนี้ · ติดตามการจัดส่ง", zh: "1个今天到达 · 追踪货运" },
    "Your operation at a glance": { en: "Your operation at a glance", ja: "運営状況を一目で", th: "ภาพรวมการดำเนินงานของคุณ", zh: "运营概览" },
    "Ready to checkout": { en: "Ready to checkout", ja: "チェックアウト準備完了", th: "พร้อมชำระเงิน", zh: "准备结账" },
    "items in cart": { en: "items in cart", ja: "カート内のアイテム", th: "รายการในตะกร้า", zh: "购物车商品" },
    "incl. bundle discount": { en: "incl. bundle discount", ja: "バンドル割引込み", th: "รวมส่วนลดชุด", zh: "含套装折扣" },
    "−RM 180 saved": { en: "−AUD $180 saved", ja: "¥180節約", th: "ประหยัด ฿180", zh: "节省 ¥180" },
    "Procurement & logistics": { en: "Procurement & logistics", ja: "調達と物流", th: "จัดซื้อและโลจิสติกส์", zh: "采购与物流" },
    "active orders": { en: "active orders", ja: "アクティブな注文", th: "คำสั่งซื้อที่ใช้งานอยู่", zh: "活跃订单" },
    "awaiting payment": { en: "awaiting payment", ja: "支払い待ち", th: "รอการชำระเงิน", zh: "等待付款" },
    "1 overdue": { en: "1 overdue", ja: "1件期限超過", th: "1 รายการค้างชำระ", zh: "1个逾期" },
    "Manage orders": { en: "Manage orders", ja: "注文を管理", th: "จัดการคำสั่งซื้อ", zh: "管理订单" },
    "Stock health": { en: "Stock health", ja: "在庫健全性", th: "สุขภาพสต็อก", zh: "库存健康" },
    "SKUs in stock": { en: "SKUs in stock", ja: "在庫SKU", th: "SKU ในสต็อก", zh: "库存SKU" },
    "below threshold": { en: "below threshold", ja: "閾値を下回る", th: "ต่ำกว่าเกณฑ์", zh: "低于阈值" },
    "Restock soon": { en: "Restock soon", ja: "すぐに補充", th: "เติมสต็อกเร็วๆ นี้", zh: "即将补货" },
    "View inventory": { en: "View inventory", ja: "在庫を表示", th: "ดูสต็อก", zh: "查看库存" },
    "This month": { en: "This month", ja: "今月", th: "เดือนนี้", zh: "本月" },
    "revenue MTD": { en: "revenue MTD", ja: "月次累計収益", th: "รายได้สะสมเดือนนี้", zh: "本月累计收入" },
    "vs last month": { en: "vs last month", ja: "先月比", th: "เทียบกับเดือนที่แล้ว", zh: "环比上月" },
    "On track": { en: "On track", ja: "順調", th: "ตามเป้าหมาย", zh: "按计划进行" },
    "See breakdown": { en: "See breakdown", ja: "内訳を見る", th: "ดูรายละเอียด", zh: "查看明细" },
    "Quick reorder": { en: "Quick reorder", ja: "クイック再発注", th: "สั่งซื้อซ้ำด่วน", zh: "快速重新订购" },
    "View all favorites →": { en: "View all favorites →", ja: "お気に入りを全て表示 →", th: "ดูรายการโปรดทั้งหมด →", zh: "查看所有收藏 →" },
    "Wanchai Ferry Dumpling Pack — 400 packs": { en: "Wanchai Ferry Dumpling Pack — 400 packs", ja: "フィッシュオイル 1000 — 400份", th: "น้ำมันปลา 1000 — 400 แคปซูล", zh: "湾仔码头水饺 1000 — 400份" },
    "SKU BLK-FO1000 · last ordered 12 days ago": { en: "SKU BLK-FO1000 · last ordered 12 days ago", ja: "SKU BLK-FO1000 · 最後の注文は12日前", th: "SKU BLK-FO1000 · สั่งซื้อล่าสุด 12 วันก่อน", zh: "SKU BLK-FO1000 · 12天前订购" },
    "Low · 18 left": { en: "Low · 18 left", ja: "低在庫 · 残り18", th: "ใกล้หมด · เหลือ 18", zh: "低库存 · 剩18" },
    "Reorder": { en: "Reorder", ja: "再発注", th: "สั่งซื้อซ้ำ", zh: "重新订购" },
    "Bio Workday Snack — 200 tabs": { en: "Bio Workday Snack — 200 tabs", ja: "バイオマグネシウム — 200錠", th: "ไบโอแมกนีเซียม — 200 เม็ด", zh: "生物镁 — 200份" },
    "SKU BLK-MAG200 · last ordered 8 days ago": { en: "SKU BLK-MAG200 · last ordered 8 days ago", ja: "SKU BLK-MAG200 · 最後の注文は8日前", th: "SKU BLK-MAG200 · สั่งซื้อล่าสุด 8 วันก่อน", zh: "SKU BLK-MAG200 · 8天前订购" },
    "Medium · 64 left": { en: "Medium · 64 left", ja: "中在庫 · 残り64", th: "ปานกลาง · เหลือ 64", zh: "中等库存 · 剩64" },
    "Product D3 1000IU — 250 packs": { en: "Product D3 1000IU — 250 packs", ja: "プロダクトD3 1000IU — 250份", th: "ผลิตภัณฑ์ D3 1000IU — 250 แคปซูล", zh: "产品D3 1000IU — 250份" },
    "SKU BLK-VD3 · last ordered 5 days ago": { en: "SKU BLK-VD3 · last ordered 5 days ago", ja: "SKU BLK-VD3 · 最後の注文は5日前", th: "SKU BLK-VD3 · สั่งซื้อล่าสุด 5 วันก่อน", zh: "SKU BLK-VD3 · 5天前订购" },
    "Healthy · 142 left": { en: "Healthy · 142 left", ja: "健全在庫 · 残り142", th: "สต็อกดี · เหลือ 142", zh: "库存健康 · 剩142" },
    "GENERAL MILLS Partner Trading Hub — data-forward layout": { en: "GENERAL MILLS Partner Trading Hub — data-forward layout", ja: "GENERAL MILLS パートナートレーディングハブ — データフォワードレイアウト", th: "GENERAL MILLS พาร์ทเนอร์เทรดดิ้งฮับ — ดาต้าฟอร์เวิร์ดเลย์เอาต์", zh: "GENERAL MILLS 合作伙伴交易中心 — 数据驱动布局" },
    "RM 4,280": { en: "AUD $4,280", ja: "¥4,280", th: "฿4,280", zh: "¥4,280" },
    "RM 1,240": { en: "AUD $1,240", ja: "¥1,240", th: "฿1,240", zh: "¥1,240" },
    "RM 38.2k": { en: "AUD $38.2k", ja: "¥38.2k", th: "฿38.2k", zh: "¥38.2k" },
    "RM 89.00": { en: "AUD $89.00", ja: "¥89.00", th: "฿89.00", zh: "¥89.00" },
    "RM 64.50": { en: "AUD $64.50", ja: "¥64.50", th: "฿64.50", zh: "¥64.50" },
    "RM 52.00": { en: "AUD $52.00", ja: "¥52.00", th: "฿52.00", zh: "¥52.00" },
    "AI Recommendations": { en: "AI Recommendations", ja: "AIおすすめ", th: "คำแนะนำ AI", zh: "AI推荐" },
    "Based on your sales mix": { en: "Based on your sales mix", ja: "あなたの販売構成に基づく", th: "อ้างอิงจากสัดส่วนการขายของคุณ", zh: "基于您的销售组合" },
    "Immune Support Bundle is trending with partners in your region — projected +22% margin.": { en: "Immune Support Bundle is trending with partners in your region — projected +22% margin.", ja: "イミューンサポートバンドルがあなたの地域のパートナー間でトレンド — 予想マージン+22%", th: "Immune Support Bundle กำลังเป็นที่นิยมในหมู่พาร์ทเนอร์ในภูมิภาคของคุณ — คาดกำไร +22%", zh: "季节场景支持套装正在您所在地区的合作伙伴中流行 — 预计利润率+22%" },
    "High demand": { en: "High demand", ja: "高需要", th: "ความต้องการสูง", zh: "高需求" },
    "Explore": { en: "Explore", ja: "探索する", th: "สำรวจ", zh: "探索" },
    "2,400+ products": { en: "2,400+ products", ja: "2,400以上の製品", th: "สินค้ากว่า 2,400 รายการ", zh: "2,400+ 产品" },
    "Browse the full range with advanced search, faceted filters and live partner pricing.": { en: "Browse the full range with advanced search, faceted filters and live partner pricing.", ja: "高度な検索、ファセットフィルター、リアルタイムパートナー価格で全製品を閲覧。", th: "เรียกดูสินค้าทั้งหมดด้วยการค้นหาขั้นสูง ตัวกรองแบบแฟเซต และราคาพาร์ทเนอร์แบบสด", zh: "通过高级搜索、分面筛选器和实时合作伙伴价格浏览全系列产品。" },
    "12 new this week": { en: "12 new this week", ja: "今週12件新発売", th: "ใหม่ 12 รายการสัปดาห์นี้", zh: "本周新增12个" },
    "Browse": { en: "Browse", ja: "閲覧", th: "เรียกดู", zh: "浏览" },
    });

    // Auto-init
    init();

    // Expose applyTranslations for dynamic content updates
    if (typeof window !== 'undefined') {
        window.applyTranslations = applyTranslations;
    }
})();
