// Catalog data for the new grid view
const CATALOG_TAGS = {
  en: {
    all: 'All',
    partner: 'Partner 经营',
    consumer: '消费者触达',
    ai: 'AI 能力',
    data: '数据洞察',
    strategy: '战略咨询',
    ops: '运营支持'
  },
  zh: {
    all: '全部',
    partner: 'Partner 经营',
    consumer: '消费者触达',
    ai: 'AI 能力',
    data: '数据洞察',
    strategy: '战略咨询',
    ops: '运营支持'
  },
  ja: {
    all: 'すべて',
    partner: 'パートナー',
    consumer: '消費者接点',
    ai: 'AI',
    data: 'データ',
    strategy: '戦略',
    ops: '運営'
  },
  th: {
    all: 'ทั้งหมด',
    partner: 'พาร์ทเนอร์',
    consumer: 'ผู้บริโภค',
    ai: 'AI',
    data: 'ข้อมูล',
    strategy: 'กลยุทธ์',
    ops: 'การดำเนินงาน'
  }
};

const CATALOG_ITEMS = [
  {
    key: 'trading-hub',
    file: 'commerce-front-end.html',
    tags: ['ai','partner'],
    icon: 'T',
    title: {
      en: 'Trading Hub',
      zh: '交易与补货闭环',
      ja: '取引ハブ',
      th: 'Trading Hub'
    },
    desc: {
      en: 'A unified workspace for purchasing, inventory, orders and replenishment — the system pushes the next action to the partner.',
      zh: '把进货、库存、订单和补货建议集中在一个工作台，让系统主动把下一步动作送到 Partner 面前。',
      ja: '発注・在庫・注文・補充を一画面に集約し、システムが次のアクションを提示します。',
      th: 'รวมการสั่งซื้อ สต็อก คำสั่งซื้อ และการเติมในมุมมองเดียว'
    },
    scenes: {
      en: ['Partner replenishment', 'Regional channel health', 'Stock management'],
      zh: ['Partner 补货', '区域渠道健康度', '库存管理'],
      ja: ['パートナー補充', '地域チャネル健全性', '在庫管理'],
      th: ['การเติมของพาร์ทเนอร์', 'สุขภาพช่องทางภูมิภาค', 'การจัดการสต็อก']
    }
  },
  {
    key: 'conversational',
    file: 'conversational.html',
    tags: ['ai','partner','consumer'],
    icon: 'C',
    title: {
      en: 'Conversational Service',
      zh: '对话内服务与成交',
      ja: '対話型サービス',
      th: 'บริการสนทนา'
    },
    desc: {
      en: 'AI auto-generates scripts, sends product cards, confirms orders inside WeChat/LINE/WhatsApp — from 10 steps to 1.',
      zh: 'AI 自动生成话术、发送产品卡、确认订单，从 10 步到 1 步。',
      ja: 'AIが台本を自動生成、商品カードを送信、注文を確認 — 10ステップから1へ。',
      th: 'AI สร้างสคริปต์ ส่งการ์ดสินค้า ยืนยันคำสั่งซื้อ — จาก 10 สู่ 1'
    },
    scenes: {
      en: ['Store sales via chat', 'Support team scripts', 'Reduce response time'],
      zh: ['门店销售聊天成交', '客服统一话术', '降低响应时间'],
      ja: ['チャットでの店舗販売', 'サポート統一台本', '応答時間短縮'],
      th: ['ขายร้านผ่านแชต', 'สคริปต์สนับสนุน', 'ลดเวลาตอบกลับ']
    }
  },
  {
    key: 'voice-shop',
    file: 'agentic-commerce.html',
    tags: ['ai','partner','consumer'],
    icon: 'A',
    title: {
      en: 'Agentic Commerce',
      zh: 'Agentic 商务',
      ja: 'エージェント型コマース',
      th: 'Agentic Commerce'
    },
    desc: {
      en: 'Voice-powered ordering from discovery to checkout — hands-free commerce for busy consumers and partners.',
      zh: '语音驱动从发现到结账的全流程，为忙碌的消费者和 Partner 提供免手操作。',
      ja: '音声で発見から決済まで — ハンズフリー商取引。',
      th: 'สั่งซื้อด้วยเสียงจากค้นพบถึงชำระเงิน'
    },
    scenes: {
      en: ['Hands-free ordering', 'In-store voice kiosk', 'Partner quick order'],
      zh: ['免手操作下单', '门店语音终端', 'Partner 快速下单'],
      ja: ['ハンズフリー注文', '店内音声キオスク', 'パートナー迅速注文'],
      th: ['สั่งซื้อไม่ใช้มือ', 'ตู้เสียงในร้าน', 'สั่งซื้อด่วนพาร์ทเนอร์']
    }
  },
  {
    key: 'social-hub',
    file: 'social-hub.html',
    tags: ['ai','partner','consumer'],
    icon: 'S',
    title: {
      en: 'Social Hub',
      zh: '社媒发布与互动',
      ja: 'ソーシャルハブ',
      th: 'ศูนย์สังคม'
    },
    desc: {
      en: 'Multi-platform content publishing, comment management, AI auto-reply and scheduling for brand social presence.',
      zh: '多平台内容发布、评论管理、AI 自动回复与排期，打造品牌社媒阵地。',
      ja: 'マルチプラットフォーム投稿、コメント管理、AI自動返信・予約投稿。',
      th: 'เผยแพร่เนื้อหาหลายแพลตฟอร์ม จัดการความคิดเห็น AI ตอบอัตโนมัติ'
    },
    scenes: {
      en: ['Brand social presence', 'Comment management', 'Content scheduling'],
      zh: ['品牌社媒阵地', '评论管理', '内容排期'],
      ja: ['ブランドSNS拠点', 'コメント管理', 'コンテンツ予約'],
      th: ['การมีอยู่ทางสังคมของแบรนด์', 'จัดการความคิดเห็น', 'จัดตารางเนื้อหา']
    }
  },
  {
    key: 'aigc',
    file: 'aigc.html',
    tags: ['ai', 'partner', 'consumer'],
    icon: 'A',
    title: {
      en: 'AIGC Studio',
      zh: '品牌素材 AI 创作',
      ja: 'AIGC スタジオ',
      th: 'AIGC Studio'
    },
    desc: {
      en: 'Image-to-image, image-to-video, auto multi-platform format adaptation with brand lock and real-time compliance.',
      zh: '图生图、图生视频、多平台格式自动适配，品牌锁定 + 实时合规。',
      ja: '画像→画像・動画、マルチプラットフォーム自動適応、ブランドロック・リアルタイムコンプライアンス。',
      th: 'ภาพ→ภาพ วิดีโอ ปรับรูปแบบอัตโนมัติ ล็อกแบรนด์ ตรวจสอบแบบเรียลไทม์'
    },
    scenes: {
      en: ['Brand asset creation', 'Multi-platform adaptation', 'Compliance check'],
      zh: ['品牌素材创作', '多平台适配', '合规审查'],
      ja: ['ブランドアセット作成', 'マルチプラットフォーム適応', 'コンプライアンス確認'],
      th: ['สร้างสินทรัพย์แบรนด์', 'ปรับรูปแบบหลายแพลตฟอร์ม', 'ตรวจสอบการปฏิบัติตาม']
    }
  },
  {
    key: 'ai-advisor',
    file: 'agentic-commerce.html',
    tags: ['ai', 'partner', 'consumer'],
    icon: 'I',
    title: {
      en: 'Agentic Commerce',
      zh: 'AI 智能顾问',
      ja: 'AI アドバイザー',
      th: 'Agentic Commerce'
    },
    desc: {
      en: 'Product recommendation, occasion advisor, intelligent Q&A — AI that understands your customers and partners.',
      zh: '产品推荐、场景导购、智能问答 — AI 理解你的消费者和 Partner。',
      ja: '商品推奨、健康アドバイザー、インテリジェントQ&A — AIが顧客とパートナーを理解。',
      th: 'แนะนำสินค้า ที่ปรึกษาสุขภาพ AI ถามตอบอัจฉริยะ'
    },
    scenes: {
      en: ['Product recommendation', 'occasion advisor', 'Smart Q&A'],
      zh: ['产品推荐', '场景导购', '智能问答'],
      ja: ['商品推奨', '健康アドバイザー', 'スマートQ&A'],
      th: ['แนะนำสินค้า', 'ที่ปรึกษาสุขภาพ', 'ถามตอบอัจฉริยะ']
    }
  },
  {
    key: 'miniprogram',
    file: 'wechat-miniprogram.html',
    tags: ['ai','consumer'],
    icon: 'M',
    title: {
      en: 'China Mini-Program',
      zh: '微信小程序',
      ja: '中国ミニプログラム',
      th: 'Mini-Program จีน'
    },
    desc: {
      en: 'D2C entry without installation — loyalty points, health tracking, one-click repurchase and group-buy.',
      zh: 'D2C 免安装入口，会员积分、健康追踪、一键复购与拼团。',
      ja: 'D2Cノーインストール入口、ポイント・健康追跡・ワンクリック再購入。',
      th: 'D2C ไม่ต้องติดตั้ง แต้มสมาชิก ติดตามสุขภาพ ซื้อซ้ำคลิกเดียว'
    },
    scenes: {
      en: ['D2C entry', 'Loyalty program', 'Group buying'],
      zh: ['D2C 入口', '会员计划', '拼团'],
      ja: ['D2C入口', 'ロイヤルティプログラム', '共同購入'],
      th: ['D2C', 'โปรแกรมสมาชิก', 'ซื้อกลุ่ม']
    }
  },
  {
    key: 'loyalty',
    file: 'loyalty.html',
    tags: ['consumer'],
    icon: 'L',
    title: {
      en: 'Loyalty & Membership',
      zh: '会员忠诚度',
      ja: 'ロイヤルティ',
      th: 'ความภักดี'
    },
    desc: {
      en: 'Points, tiers, badges, community — drive repurchase and advocacy through gamified loyalty.',
      zh: '积分、等级、勋章、社区 — 通过游戏化会员驱动复购与口碑。',
      ja: 'ポイント・ランク・バッジ・コミュニティ — ゲーミフィケーションで再購入と推奨を促進。',
      th: 'แต้ม ระดับ เหรียญ ชุมชน — ขับเคลื่อนการซื้อซ้ำด้วยเกมมิฟิเคชัน'
    },
    scenes: {
      en: ['Points system', 'Tier upgrades', 'Community engagement'],
      zh: ['积分体系', '等级升级', '社区互动'],
      ja: ['ポイント制度', 'ランクアップ', 'コミュニティエンゲージメント'],
      th: ['ระบบแต้ม', 'อัปเกรดระดับ', 'การมีส่วนร่วมชุมชน']
    }
  },
  {
    key: 'health',
    file: 'health.html',
    tags: ['ai','consumer'],
    icon: 'H',
    title: {
      en: 'Occasion Twin',
      zh: '场景分身',
      ja: 'Occasion Twin',
      th: 'Occasion Twin'
    },
    desc: {
      en: 'Personal health avatar, tracking, recommendations — turn health data into loyalty and sales.',
      zh: '个人健康 avatar、追踪、建议 — 把健康数据转化为忠诚度和销售。',
      ja: 'パーソナル健康アバター、追跡、推奨 — 健康データをロイヤルティと売上へ。',
      th: 'อวตารสุขภาพส่วนตัว ติดตาม แนะนำ — เปลี่ยนข้อมูลสุขภาพเป็นความภักดีและยอดขาย'
    },
    scenes: {
      en: ['Health tracking', 'Personal recommendations', 'Loyalty integration'],
      zh: ['健康追踪', '个性化建议', '会员整合'],
      ja: ['健康追跡', 'パーソナル推奨', 'ロイヤルティ統合'],
      th: ['ติดตามสุขภาพ', 'แนะนำส่วนบุคคล', 'ผสานความภักดี']
    }
  },
  {
    key: 'voc',
    file: 'voc.html',
    tags: ['ai','data','partner'],
    icon: 'D',
    title: {
      en: 'VOC & Data Insights',
      zh: '数据洞察与下一步',
      ja: 'VOC・データ洞察',
      th: 'VOC และข้อมูลเชิงลึก'
    },
    desc: {
      en: 'Listen to all consumer voices, AI judges pros/cons, competitive radar, Next Best Action — data becomes tasks.',
      zh: '全源倾听消费者声音，AI 判定优缺点、竞争雷达、Next Best Action — 数据变成任务。',
      ja: '全ソースからの声を収集、AIが長短所を判定、競争レーダー、次のベストアクション。',
      th: 'ฟังเสียงผู้บริโภคทุกแหล่ง AI ตัดสินข้อดีข้อเสีย เรดาร์แข่งขัน Next Best Action'
    },
    scenes: {
      en: ['Consumer insights', 'Competitive analysis', 'Next Best Action'],
      zh: ['消费者洞察', '竞争分析', '下一步行动'],
      ja: ['消費者インサイト', '競争分析', '次のベストアクション'],
      th: ['ข้อมูลเชิงลึกผู้บริโภค', 'วิเคราะห์การแข่งขัน', 'การดำเนินการถัดไป']
    }
  },
  {
    key: 'ai-strategy',
    file: 'ai-strategy-map.html',
    tags: ['ai','strategy'],
    icon: 'G',
    title: {
      en: 'AI Strategy Map',
      zh: 'AI 战略地图',
      ja: 'AI 戦略マップ',
      th: 'แผนที่กลยุทธ์ AI'
    },
    desc: {
      en: 'Identify AI opportunities across the full retail journey — from awareness to advocacy. Strategic blueprint for transformation.',
      zh: '识别零售全链路 AI 机会点 — 从认知到推荐，转型战略蓝图。',
      ja: '認知から推奨まで、小売全链路のAI機会を特定 — 変革の戦略ブループリント。',
      th: 'ระบุโอกาส AI ทั้งเส้นทางการค้าปลีก — จากการรับรู้ถึงการบอกต่อ แผนที่กลยุทธ์การเปลี่ยนแปลง'
    },
    scenes: {
      en: ['AI opportunity mapping', 'Strategic planning', 'Digital transformation'],
      zh: ['AI 机会识别', '战略规划', '数字化转型'],
      ja: ['AI機会マッピング', '戦略計画', 'デジタル変革'],
      th: ['การระบุโอกาส AI', 'วางแผนกลยุทธ์', 'การเปลี่ยนผ่านดิจิทัล']
    }
  },
  {
    key: 'solution-cards',
    file: 'cards.html',
    tags: ['ai', 'ops'],
    icon: 'R',
    title: {
      en: 'Solution Cards',
      zh: '门店培训卡片',
      ja: 'ソリューションカード',
      th: 'การ์ดโซลูชัน'
    },
    desc: {
      en: 'AI role-play training, compliance knowledge base, progress tracking — from on-site mistakes to online simulation.',
      zh: 'AI 角色扮演训练、合规知识库、进度追踪 — 从现场犯错到上线模拟。',
      ja: 'AIロールプレイ研修、コンプライアンス知識ベース、進捗追跡 — 現場の失敗からオンラインシミュレーションへ。',
      th: 'AI ฝึกบทบาท ฐานความรู้การปฏิบัติตาม ติดตามความคืบหน้า — จากความผิดพลาดในที่ทำงานสู่การจำลองออนไลน์'
    },
    scenes: {
      en: ['Store training', 'Compliance updates', 'New staff onboarding'],
      zh: ['门店培训', '合规更新', '新员工入职'],
      ja: ['店舗研修', 'コンプライアンス更新', '新入社員オンボーディング'],
      th: ['การฝึกอบรมร้าน', 'อัปเดตการปฏิบัติตาม', 'การต้อนรับพนักงานใหม่']
    }
  },
  {
    key: 'growth',
    file: 'growth.html',
    tags: ['ai', 'ops'],
    icon: 'G',
    title: {
      en: 'Growth Studio',
      zh: '增长营销',
      ja: 'グローススタジオ',
      th: 'สตูดิโอการเติบโต'
    },
    desc: {
      en: 'AI-powered campaign creation, content generation, performance optimization — growth marketing at scale.',
      zh: 'AI 驱动 Campaign 创建、内容生成、效果优化 — 规模化增长营销。',
      ja: 'AI駆動キャンペーン作成、コンテンツ生成、パフォーマンス最適化 — スケールのグロースマーケティング。',
      th: 'AI สร้างแคมเปญ สร้างเนื้อหา ปรับแต่งประสิทธิภาพ — การตลาดการเติบโตแบบมีขนาด'
    },
    scenes: {
      en: ['Campaign creation', 'Content generation', 'Performance optimization'],
      zh: ['Campaign 创建', '内容生成', '效果优化'],
      ja: ['キャンペーン作成', 'コンテンツ生成', 'パフォーマンス最適化'],
      th: ['สร้างแคมเปญ', 'สร้างเนื้อหา', 'ปรับแต่งประสิทธิภาพ']
    }
  },
  {
    key: 'channel-ops',
    file: 'channel-ops.html',
    tags: ['ai', 'ops'],
    icon: 'O',
    title: {
      en: 'Channel Operations',
      zh: '渠道运营',
      ja: 'チャネルオペレーション',
      th: 'การดำเนินงานช่องทาง'
    },
    desc: {
      en: 'End-to-end digital coverage from distributor to store — ERP, BPM, supply chain, cloud integration.',
      zh: '从经销商到门店全链路数字化覆盖 — ERP、BPM、供应链、云集成。',
      ja: '販売店から店舗までのエンドツーエンドデジタル化 — ERP、BPM、サプライチェーン、クラウド統合。',
      th: 'การครอบคลุมดิจิทัลแบบครบวงจรจากตัวแทนจำหน่ายถึงร้านค้า — ERP BPM ซัพพลายเชน คลาวด์'
    },
    scenes: {
      en: ['Distributor management', 'Store operations', 'Supply chain integration'],
      zh: ['经销商管理', '门店运营', '供应链整合'],
      ja: ['販売店管理', '店舗運営', 'サプライチェーン統合'],
      th: ['การจัดการตัวแทนจำหน่าย', 'การดำเนินงานร้านค้า', 'การผสานซัพพลายเชน']
    }
  },
  {
    key: 'enterprise',
    file: 'enterprise-foundation.html',
    tags: ['ai', 'ops'],
    icon: 'E',
    title: {
      en: 'Enterprise Foundation',
      zh: '企业数字化底座',
      ja: 'エンタープライズ基盤',
      th: 'รากฐานองค์กร'
    },
    desc: {
      en: 'Digital foundation for enterprise — ERP, BPM, HRIS, finance, ITSM, QMS, cloud, BPO.',
      zh: '企业数字化底座 — ERP、BPM、HRIS、财务、ITSM、QMS、云、BPO。',
      ja: 'エンタープライズのデジタル基盤 — ERP、BPM、HRIS、財務、ITSM、QMS、クラウド、BPO。',
      th: 'รากฐานดิจิทัลสำหรับองค์กร — ERP BPM HRIS การเงิน ITSM QMS คลาวด์ BPO'
    },
    scenes: {
      en: ['ERP integration', 'Process automation', 'Cloud infrastructure'],
      zh: ['ERP 集成', '流程自动化', '云基础设施'],
      ja: ['ERP統合', 'プロセス自動化', 'クラウドインフラ'],
      th: ['การผสาน ERP', 'การ自动化กระบวนการ', 'โครงสร้างพื้นฐานคลาวด์']
    }
  }
];
