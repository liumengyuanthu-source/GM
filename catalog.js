/* ============================================================
   GM Capability & Benchmark Catalog
   Restructured case + NTT layer (replaces side-drawer popups).
   Reuses globals from index.html: DATA, CASES, NTT, SCENARIOS,
   brandColor, tierLabel, matLabel, localText, localList, localName,
   caseTitle, isCn(), LANG.
   ============================================================ */
(function(){
  "use strict";

  // ---- NTT primary demo mapping (live, embeddable prototypes) ----
  const NTT_DEMO = {
    "NTT-01":"ai-transformation-navigator.html",
    "NTT-02":"aigc.html",
    "NTT-03":"agentic-commerce.html",
    "NTT-04":"digital-store.html",
    "NTT-05":"voc.html",
    "NTT-06":"enterprise-foundation.html",
    "NTT-07":"attribution-roi.html",
    "NTT-08":"partner-training.html"
  };
  // demo file -> friendly label
  const DEMO_LABEL = {
    "ai-transformation-navigator.html":{cn:"AI 转型路线图导航器",en:"AI Transformation Navigator"},
    "ai-strategy-map.html":{cn:"AI 战略地图",en:"AI Strategy Map"},
    "aigc.html":{cn:"AIGC 内容生产工作台",en:"AIGC Content Studio"},
    "agentic-commerce.html":{cn:"Agentic Commerce 导购原型",en:"Agentic Commerce Advisor"},
    "commerce-front-end.html":{cn:"电商前端体验原型",en:"Commerce Front-end"},
    "conversational.html":{cn:"对话式助手原型",en:"Conversational Assistant"},
    "digital-store.html":{cn:"数字化门店运营原型",en:"Digital Store Ops"},
    "merchandising.html":{cn:"陈列 / 冷柜执行原型",en:"Merchandising & Freezer"},
    "store-lifecycle.html":{cn:"门店生命周期管理",en:"Store Lifecycle"},
    "voc.html":{cn:"VOC 消费者洞察引擎",en:"VOC Insight Engine"},
    "knowledge-graph.html":{cn:"知识图谱与语义检索",en:"Knowledge Graph"},
    "enterprise-foundation.html":{cn:"企业 AI Foundation 蓝图",en:"Enterprise AI Foundation"},
    "cards.html":{cn:"能力卡片 / 组件库",en:"Capability Cards"},
    "attribution-roi.html":{cn:"营销归因与 ROI 驾驶舱",en:"Attribution & ROI Cockpit"},
    "growth.html":{cn:"增长实验与活动优化",en:"Growth & Campaign Optimizer"},
    "social-hub.html":{cn:"社媒内容与反馈 Hub",en:"Social Content Hub"},
    "compliance-hub.html":{cn:"合规审核与审批留痕",en:"Compliance Hub"},
    "partner-training.html":{cn:"渠道伙伴培训助手",en:"Partner Training Assistant"}
  };

  // ---- Brand model (the three GM brand tabs) ----
  const BRANDS = [
    {key:"General Mills", cn:"通用磨坊", en:"General Mills", short_cn:"通用", short_en:"General", desc_cn:"集团级 AI 底座、企业能力与可衡量用例", desc_en:"Enterprise AI foundation, capabilities & measurable use cases"},
    {key:"Häagen-Dazs", cn:"哈根达斯", en:"Häagen-Dazs", short_cn:"哈根达斯", short_en:"Häagen-Dazs", desc_cn:"高端冰淇淋渠道转型、礼赠与自我犒赏场景", desc_en:"Premium ice-cream channel shift, gifting & self-treat occasions"},
    {key:"Wanchai Ferry", cn:"湾仔码头", en:"Wanchai Ferry", short_cn:"湾仔码头", short_en:"Wanchai Ferry", desc_cn:"速冻品类年轻化、家庭餐与供应链场景", desc_en:"Frozen-category renewal, family-meal & supply-chain occasions"}
  ];

  // ---- Three top-level catalog categories ("3大类") ----
  const CATS = [
    {key:"benchmark", cn:"标杆案例", en:"Benchmark Cases", lead_cn:"用真实公开案例证明每个旅程阶段的 AI 价值。", lead_en:"Real public benchmarks proving AI value at each journey stage."},
    {key:"capability", cn:"NTT 能力 · 可体验 Demo", en:"NTT Capabilities · Live Demo", lead_cn:"NTT DATA 可复用能力，点开即可体验交互原型。", lead_en:"Reusable NTT DATA capabilities — open the live interactive prototype."},
    {key:"roadmap", cn:"落地路线", en:"Delivery Roadmap", lead_cn:"按 Quick Win / Scale-up / Strategic Bet 组织落地节奏。", lead_en:"Organised by Quick Win, Scale-up and Strategic Bet."}
  ];

  // ---- maturity / roadmap chips ----
  const ROADMAP_BUCKET = {
    quick_win:{cn:"Quick Win",en:"Quick Win",c:"#2FA36B"},
    scale_up:{cn:"Scale-up",en:"Scale-up",c:"#C77F1A"},
    strategic_bet:{cn:"Strategic Bet",en:"Strategic Bet",c:"#7A2FE0"},
    reference_only:{cn:"参考",en:"Reference",c:"#6B6477"}
  };
  // type filter chips
  const TYPE_LABEL = {
    enterprise_ai:{cn:"企业 AI",en:"Enterprise AI"},
    industry:{cn:"同行业",en:"Industry"},
    adjacent_industry:{cn:"邻近行业",en:"Adjacent"},
    cross_industry:{cn:"跨行业",en:"Cross-industry"},
    retail_platform:{cn:"零售平台",en:"Retail platform"}
  };

  // ---- state ----
  const BM2 = window.GM_BM2_CATALOG || [];
  const S = { brand:"General Mills", cat:"benchmark", typeFilter:"all", bmFilter:"all", bucketFilter:"all", search:"", view:"grid" };

  function cn(){ return (typeof isCn==="function") ? isCn() : (window.LANG!=="en"); }
  function L(o,k){ return cn()? (o[k+"_cn"]||o[k]||o[k+"_en"]||"") : (o[k+"_en"]||o[k]||o[k+"_cn"]||""); }
  function bColor(b){ return (window.brandColor&&window.brandColor[b])||"#0A66B4"; }
  function bName(b){ return (typeof localName==="function")? localName(b) : b; }
  function cTitle(c){ return (typeof caseTitle==="function")? caseTitle(c) : (cn()? c.title : (c.title_en||c.title)); }
  function cText(c,k){ return (typeof localText==="function")? localText(c,k) : (cn()? (c[k]||"") : (c[k+"_en"]||c[k]||"")); }
  function cList(c,k){ return (typeof localList==="function")? localList(c,k) : (cn()? (c[k]||[]) : (c[k+"_en"]||c[k]||[])); }
  function esc(s){ return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function escJs(s){ return String(s||"").replace(/\\/g,"\\\\").replace(/'/g,"\\'"); }

  // cases for a brand
  function casesForBrand(b){
    return Object.values(CASES).filter(c=>c.brand===b);
  }
  // NTT capabilities for a brand (General Mills gets the foundational/global ones with empty brands)
  function nttForBrand(b){
    return Object.values(NTT).filter(n=>{
      const br=n.brands||[];
      if(b==="General Mills") return br.length===0 || br.includes("General Mills");
      return br.includes(b);
    });
  }
  function bmForBrand(b){
    return BM2.filter(x=>{
      const br=x.brands||[];
      if(b==="General Mills") return true;
      return br.includes(b) || br.includes("General Mills");
    });
  }
  function bmTitle(x){ return cn()? (x.title_cn||x.title_en||x.key) : (x.title_en||x.title_cn||x.key); }
  function bmText(x,k){ return cn()? (x[k+"_cn"]||x[k+"_en"]||"") : (x[k+"_en"]||x[k+"_cn"]||""); }
  function bmSummary(x){
    const s=cn()? (x.summary_cn||x.gm_fit_cn||"") : (x.summary_en||x.gm_fit_en||x.summary_cn||"");
    if(s) return s;
    const scenes=cn()? (x.scenes_cn||[]) : (x.scenes_en||x.scenes_cn||[]);
    return (scenes||[]).join(" · ");
  }

  // stage label by code (looks across all journeys)
  function stageLabel(code){
    if(!window.DATA) return code;
    for(const jk in DATA){
      const st=(DATA[jk].stages||[]).find(s=>s.code===code);
      if(st) return code+" · "+(cn()?st.cn:st.en);
    }
    return code;
  }

  /* ============ RENDER: catalog shell ============ */
  function renderCatalog(){
    const host=document.getElementById('catalogBody');
    if(!host) return;
    const brand=BRANDS.find(b=>b.key===S.brand);
    const bc=bColor(S.brand);

    // brand tabs
    const brandTabs = BRANDS.map(b=>{
      const on=b.key===S.brand;
      const c=bColor(b.key);
      return `<button class="cat-brandtab${on?' on':''}" style="${on?`--bc:${c}`:''}" onclick="GMCatalog.setBrand('${b.key}')">
        <span class="cbt-dot" style="background:${c}"></span>
        <span class="cbt-name">${cn()?b.short_cn:b.short_en}</span>
        <span class="cbt-n">${casesForBrand(b.key).length}</span>
      </button>`;
    }).join('');

    // category tabs
    const catTabs = CATS.map(ct=>{
      const on=ct.key===S.cat;
      let n=0;
      if(ct.key==='benchmark') n=casesForBrand(S.brand).length;
      else if(ct.key==='capability') n=nttForBrand(S.brand).length + bmForBrand(S.brand).length;
      else n=casesForBrand(S.brand).length;
      return `<button class="cat-tab${on?' on':''}" onclick="GMCatalog.setCat('${ct.key}')">
        ${cn()?ct.cn:ct.en}<span class="ct-n">${n}</span></button>`;
    }).join('');

    const cat=CATS.find(c=>c.key===S.cat);
    let panel='';
    if(S.cat==='benchmark') panel=renderBenchmark();
    else if(S.cat==='capability') panel=renderCapability();
    else panel=renderRoadmap();

    host.innerHTML=`
      <div class="cat-hero" style="--bc:${bc}">
        <div class="cat-hero-eye">${cn()?'案例与能力目录':'CAPABILITY & BENCHMARK CATALOG'}</div>
        <div class="cat-brandbar">${brandTabs}</div>
        <p class="cat-brand-desc">${cn()?brand.desc_cn:brand.desc_en}</p>
      </div>
      <div class="cat-tabs">${catTabs}</div>
      <div class="cat-leadrow"><p>${cn()?cat.lead_cn:cat.lead_en}</p>
        <input class="cat-search" type="search" placeholder="${cn()?'搜索品牌 / 场景 / 能力 / Demo…':'Search brand, scenario, capability, demo…'}" value="${S.search}" oninput="GMCatalog.setSearch(this.value)">
      </div>
      <div class="cat-panel">${panel}</div>`;
  }

  /* ============ CATEGORY 1: Benchmark cases ============ */
  function renderBenchmark(){
    let list=casesForBrand(S.brand);
    // type filter chips
    const types=['all',...new Set(list.map(c=>c.type).filter(Boolean))];
    const chips=types.map(t=>{
      const on=t===S.typeFilter;
      const lab= t==='all'?(cn()?'全部':'All'):((TYPE_LABEL[t]&&(cn()?TYPE_LABEL[t].cn:TYPE_LABEL[t].en))||t);
      return `<button class="cat-chip${on?' on':''}" onclick="GMCatalog.setType('${t}')">${lab}</button>`;
    }).join('');
    if(S.typeFilter!=='all') list=list.filter(c=>c.type===S.typeFilter);
    if(S.search){const q=S.search.toLowerCase();list=list.filter(c=>((cTitle(c)+' '+cText(c,'scenario_name')+' '+cText(c,'ai_capability')+' '+bName(c.company||'')).toLowerCase().includes(q)));}
    // sort hero first
    const order={hero:0,support:1,background:2};
    list.sort((a,b)=>(order[a.tier]??3)-(order[b.tier]??3));
    const cards=list.map(caseCardHtml).join('');
    return `<div class="cat-filterbar">${chips}</div>
      ${cards?`<div class="cat-grid">${cards}</div>`:`<div class="cat-empty">${cn()?'没有匹配的案例。':'No matching cases.'}</div>`}`;
  }
  function caseCardHtml(c){
    const bc=bColor(c.brand);
    const img=c.img?`assets/${c.img}.jpg`:'';
    const tl=window.tierLabel&&window.tierLabel[c.tier];
    const tlab=tl?(cn()?tl.cn:tl.en):'';
    const rb=ROADMAP_BUCKET[c.roadmap_bucket];
    const comp=bName(c.company||'');
    const stages=(c.stages||[]).slice(0,3).map(s=>`<span class="cc-stg">${s}</span>`).join('');
    const typeLab=(TYPE_LABEL[c.type]&&(cn()?TYPE_LABEL[c.type].cn:TYPE_LABEL[c.type].en))||'';
    return `<button class="cat-card cc-case" onclick="GMCatalog.openCase('${c.id}')">
      <div class="cc-img">${img?`<img src="${img}" loading="lazy" alt="" onerror="this.style.display='none';this.parentElement.classList.add('noimg')">`:''}
        <span class="cc-co">${comp}</span>
        ${tlab?`<span class="cc-tier">${tlab}</span>`:''}</div>
      <div class="cc-body">
        <div class="cc-meta">
          ${typeLab?`<span class="cc-type">${typeLab}</span>`:''}
          ${rb?`<span class="cc-rb" style="--rc:${rb.c}">${cn()?rb.cn:rb.en}</span>`:''}
        </div>
        <div class="cc-scn">${cText(c,'scenario_name')||''}</div>
        <h4>${cTitle(c)}</h4>
        <p class="cc-take">${cText(c,'takeaway')||''}</p>
        <div class="cc-foot"><div class="cc-stgs">${stages}</div><span class="cc-go">${cn()?'详情':'Open'} →</span></div>
      </div></button>`;
  }

  /* ============ CATEGORY 2: NTT capabilities + Blackmores v2 live demos ============ */
  function renderCapability(){
    const q=(S.search||'').toLowerCase();
    const domains=[...new Map(BM2.map(x=>[x.domain_id,{id:x.domain_id,cn:x.domain_cn,en:x.domain_en}])).values()];
    const filters=[
      {k:'all',cn:'全部',en:'All'},
      {k:'ntt',cn:'NTT 能力',en:'NTT capabilities'},
      {k:'live',cn:'可打开 Demo',en:'Live demos'},
      {k:'concept',cn:'Concept backlog',en:'Concept backlog'},
      ...domains.map(d=>({k:'domain:'+d.id,cn:d.cn,en:d.en}))
    ];
    const chips=filters.map(f=>`<button class="cat-chip${S.bmFilter===f.k?' on':''}" onclick="GMCatalog.setBmFilter('${f.k}')">${cn()?f.cn:f.en}</button>`).join('');

    let nttList=nttForBrand(S.brand);
    if(q) nttList=nttList.filter(n=>((L(n,'title')+' '+L(n,'summary')+' '+(n.capabilities||[]).join(' ')).toLowerCase().includes(q)));
    const showNtt=S.bmFilter==='all'||S.bmFilter==='ntt';
    const nttCards=showNtt?nttList.map(nttCardHtml).join(''):'';

    let bmList=bmForBrand(S.brand);
    if(S.bmFilter==='live') bmList=bmList.filter(x=>x.has_demo);
    else if(S.bmFilter==='concept') bmList=bmList.filter(x=>!x.has_demo);
    else if(S.bmFilter.startsWith('domain:')) bmList=bmList.filter(x=>x.domain_id===S.bmFilter.slice(7));
    else if(S.bmFilter==='ntt') bmList=[];
    if(q) bmList=bmList.filter(x=>((bmTitle(x)+' '+bmSummary(x)+' '+bmText(x,'gm_fit')+' '+(x.clients||[]).join(' ')+' '+(x.tags||[]).join(' ')+' '+bmText(x,'domain_desc')).toLowerCase().includes(q)));
    const liveCount=bmForBrand(S.brand).filter(x=>x.has_demo).length;
    const conceptCount=bmForBrand(S.brand).filter(x=>!x.has_demo).length;
    const bmCards=bmList.map(bmCardHtml).join('');
    return `<div class="cat-caphead">
        <div class="cat-capnote">${cn()?'这里合并 NTT DATA 可复用能力、可现场打开的 demo，以及 Blackmores v2 中可迁移到 GM 的参考模块。Demo 仅用于初次讨论中说明能力如何工作；后续需要替换为 GM 数据、规则和业务流程。':'This layer combines reusable NTT DATA capabilities, live demos, and Blackmores v2 reference modules that can be adapted to GM. Demos are discussion prototypes only; GM data, rules and workflows need to be connected next.'}</div>
      </div>
      <div class="cat-filterbar">${chips}</div>
      ${showNtt?`<div class="cat-subhead"><span>NTT DATA</span><b>${nttList.length}</b></div>${nttCards?`<div class="cat-grid cat-grid-cap">${nttCards}</div>`:`<div class="cat-empty">${cn()?'没有匹配的 NTT 能力。':'No matching NTT capabilities.'}</div>`}`:''}
      ${S.bmFilter!=='ntt'?`<div class="cat-subhead bm"><span>${cn()?'Blackmores v2 参考模块':'Blackmores v2 reference modules'}</span><b>${bmList.length}</b><em>${cn()?`可打开 ${liveCount} · 待补样机 ${conceptCount}`:`Live ${liveCount} · Concept ${conceptCount}`}</em></div>${bmCards?`<div class="cat-grid cat-grid-cap">${bmCards}</div>`:`<div class="cat-empty">${cn()?'没有匹配的参考模块。':'No matching reference modules.'}</div>`}`:''}`;
  }
  function nttCardHtml(n){
    const isDemo=n.proof_status==='Demo Asset';
    const demoFile=NTT_DEMO[n.id];
    const dl=DEMO_LABEL[demoFile];
    const caps=(n.capabilities||[]).slice(0,4).map(x=>`<span class="nc-cap">${x}</span>`).join('');
    const stages=(n.stages||[]).filter(s=>s!=='J8').map(s=>`<span class="cc-stg">${s}</span>`).join('');
    return `<div class="cat-card cc-ntt">
      <div class="nc-top"><span class="nc-badge">NTT DATA</span>
        <span class="nc-proof ${isDemo?'demo':'ref'}">${isDemo?(cn()?'可复用 Demo':'Demo Asset'):(cn()?'参考能力':'Reference')}</span></div>
      <h4>${L(n,'title')}</h4>
      <p class="nc-sum">${L(n,'summary')}</p>
      <div class="nc-caps">${caps}</div>
      <div class="nc-foot">
        ${demoFile?`<button class="nc-demo" onclick="GMCatalog.openDemo('${demoFile}','${escJs(dl?(cn()?dl.cn:dl.en):L(n,'title'))}')">▶ ${cn()?'体验 Demo':'Live demo'}</button>`:''}
        <button class="nc-more" onclick="GMCatalog.openNtt('${n.id}')">${cn()?'能力详情':'Details'} →</button>
      </div></div>`;
  }
  function bmCardHtml(x){
    const scenes=cn()? (x.scenes_cn||[]) : (x.scenes_en||x.scenes_cn||[]);
    const stageTags=(x.stages||[]).slice(0,3).map(s=>`<span class="cc-stg">${s}</span>`).join('');
    const clients=(x.clients||[]).slice(0,3).join(' · ');
    return `<div class="cat-card cc-ntt cc-bm ${x.has_demo?'':'is-concept'}">
      <div class="nc-top"><span class="nc-badge bm">${x.has_demo?'LIVE DEMO':'CONCEPT'}</span>
        <span class="nc-proof ${x.has_demo?'demo':'ref'}">${x.has_demo?(cn()?'可打开':'Openable'):(cn()?'待补样机':'Prototype needed')}</span></div>
      <h4>${esc(bmTitle(x))}</h4>
      <p class="nc-sum">${esc(bmSummary(x))}</p>
      <div class="bm-mini">${esc(cn()?x.domain_cn:x.domain_en)}${clients?` · ${esc(clients)}`:''}</div>
      ${scenes&&scenes.length?`<div class="nc-caps">${scenes.slice(0,3).map(s=>`<span class="nc-cap">${esc(s)}</span>`).join('')}</div>`:''}
      <div class="nc-foot">
        ${x.has_demo?`<button class="nc-demo" onclick="GMCatalog.openDemo('${x.file}','${escJs(bmTitle(x))}')">▶ ${cn()?'体验 Demo':'Live demo'}</button>`:''}
        <button class="nc-more" onclick="GMCatalog.openBm('${x.id}')">${cn()?'详情':'Details'} →</button>
      </div>
      ${stageTags?`<div class="bm-stages">${stageTags}</div>`:''}
    </div>`;
  }

  /* ============ CATEGORY 3: Roadmap ============ */
  function renderRoadmap(){
    let list=casesForBrand(S.brand);
    if(S.search){const q=S.search.toLowerCase();list=list.filter(c=>((cTitle(c)+' '+cText(c,'scenario_name')).toLowerCase().includes(q)));}
    const buckets=['quick_win','scale_up','strategic_bet'];
    const cols=buckets.map(bk=>{
      const rb=ROADMAP_BUCKET[bk];
      const items=list.filter(c=>c.roadmap_bucket===bk);
      const rows=items.map(c=>{
        const comp=bName(c.company||c.brand);
        return `<button class="rm-row" onclick="GMCatalog.openCase('${c.id}')">
          <span class="rm-dot" style="background:${rb.c}"></span>
          <span class="rm-txt"><b>${cText(c,'scenario_name')||cTitle(c)}</b><i>${comp}</i></span>
          <span class="rm-arrow">→</span></button>`;
      }).join('');
      return `<div class="rm-col">
        <div class="rm-colhead" style="--rc:${rb.c}"><span class="rm-cn">${cn()?rb.cn:rb.en}</span><span class="rm-count">${items.length}</span></div>
        <div class="rm-desc">${bk==='quick_win'?(cn()?'0–6 个月，可快速体验与验证':'0–6 months, fast to pilot'):bk==='scale_up'?(cn()?'6–18 个月，需数据与流程支撑':'6–18 months, needs data & process'):(cn()?'18 个月以上，战略型底座投入':'18+ months, strategic foundation')}</div>
        <div class="rm-list">${rows||`<div class="rm-empty">—</div>`}</div>
      </div>`;
    }).join('');
    const refs=list.filter(c=>c.roadmap_bucket==='reference_only');
    const refRow=refs.length?`<div class="rm-refband"><span class="rm-reflab">${cn()?'参考素材':'Reference only'}</span>${refs.map(c=>`<button class="rm-refchip" onclick="GMCatalog.openCase('${c.id}')">${cText(c,'scenario_name')||cTitle(c)}</button>`).join('')}</div>`:'';
    return `<div class="rm-cols">${cols}</div>${refRow}`;
  }

  /* ============ DETAIL PAGES (full page, not drawer) ============ */
  function showDetail(html){
    const d=document.getElementById('catalogDetail');
    d.innerHTML=`<button class="cd-back" onclick="GMCatalog.closeDetail()">← ${cn()?'返回目录':'Back to catalog'}</button>${html}`;
    document.getElementById('catalogOverlay').classList.add('detail-open');
    d.scrollTop=0;
  }
  function closeDetail(){
    document.getElementById('catalogOverlay').classList.remove('detail-open');
  }

  function openCase(cid){
    const c=CASES[cid]; if(!c) return;
    const cl=document.getElementById('caseLayer'); if(cl) cl.classList.remove('open');
    const bc=bColor(c.brand);
    const img=c.img?`assets/${c.img}.jpg`:'';
    const comp=bName(c.company||'');
    const tier=window.tierLabel&&window.tierLabel[c.tier]?(cn()?window.tierLabel[c.tier].cn:window.tierLabel[c.tier].en):'';
    const mat=window.matLabel&&window.matLabel[c.maturity]?(cn()?window.matLabel[c.maturity].cn:window.matLabel[c.maturity].en):c.maturity;
    const rb=ROADMAP_BUCKET[c.roadmap_bucket];
    const row=(lc,le,v)=>v?`<div class="cd-row"><div class="cd-k">${cn()?lc:le}</div><div class="cd-v">${v}</div></div>`:'';
    const chips=(arr,cl)=>(arr||[]).map(t=>`<span class="${cl}">${t}</span>`).join('');
    const stages=(c.stages||[]).map(s=>`<span class="cd-stg">${stageLabel(s)}</span>`).join('');
    const src=(c.sources||[]).slice(0,5).map((u,k)=>`<a href="${u}" target="_blank" rel="noopener">${cn()?'来源':'Source'} ${k+1} ↗</a>`).join('');
    // related demo suggestion based on ai_types overlap with NTT - simple: suggest by brand
    showDetail(`
      <div class="cd-hero" style="--bc:${bc}">
        <div class="cd-brandline"><span class="cd-bdot" style="background:${bc}"></span>${bName(c.brand)}${comp&&comp!==bName(c.brand)?` · ${comp}`:''}</div>
        <div class="cd-tags">
          ${tier?`<span class="cd-tag" style="border-color:${bc};color:${bc}">${tier}</span>`:''}
          ${mat?`<span class="cd-tag">${mat}</span>`:''}
          ${rb?`<span class="cd-tag" style="border-color:${rb.c};color:${rb.c}">${cn()?rb.cn:rb.en}</span>`:''}
          ${c.geo?`<span class="cd-tag soft">${c.geo}</span>`:''}
          ${c.year?`<span class="cd-tag soft">${c.year}</span>`:''}
        </div>
        <h2>${cTitle(c)}</h2>
        ${cText(c,'scenario_name')?`<div class="cd-scn">${cText(c,'scenario_name')}</div>`:''}
      </div>
      ${img?`<div class="cd-img"><img src="${img}" alt="" onerror="this.parentElement.style.display='none'"></div>`:''}
      <div class="cd-grid">
        ${row('触发','Trigger',cText(c,'trigger'))}
        ${row('需求','Need',cText(c,'need'))}
        ${row('痛点','Pain point',cText(c,'pain'))}
        ${row('解决方案','Solution',cText(c,'solution'))}
        ${row('AI 能力','AI capability',cText(c,'ai_capability'))}
        ${row('架构','Architecture',cText(c,'arch'))}
      </div>
      ${cList(c,'value').length?`<div class="cd-band"><div class="cd-bl">${cn()?'业务价值':'Business value'}</div><div class="cd-bc">${chips(cList(c,'value').slice(0,8),'cd-pill')}</div></div>`:''}
      ${(c.ai_types||[]).length?`<div class="cd-band"><div class="cd-bl">${cn()?'AI 类型':'AI types'}</div><div class="cd-bc">${chips(c.ai_types,'cd-pill')}</div></div>`:''}
      ${(c.touchpoints||[]).length?`<div class="cd-band"><div class="cd-bl">${cn()?'触点':'Touchpoints'}</div><div class="cd-bc">${chips(c.touchpoints,'cd-pill soft')}</div></div>`:''}
      ${cText(c,'result')?`<div class="cd-result" style="--bc:${bc}"><div class="cd-rl">${cn()?'结果 / 证据':'Result / evidence'}</div><div class="cd-rv">${cText(c,'result')}</div></div>`:''}
      <div class="cd-grid">
        ${row('对通用磨坊的意义','Relevance to General Mills',cText(c,'relevance'))}
        ${row('可迁移结论','Transferable takeaway',cText(c,'takeaway'))}
      </div>
      ${stages?`<div class="cd-band"><div class="cd-bl">${cn()?'所属阶段':'Journey stages'}</div><div class="cd-bc">${stages}</div></div>`:''}
      ${src?`<div class="cd-src">${src}</div>`:''}`);
  }

  function openBm(id){
    const x=BM2.find(v=>v.id===id); if(!x) return;
    const scenes=cn()? (x.scenes_cn||[]) : (x.scenes_en||x.scenes_cn||[]);
    const row=(lc,le,v)=>v?`<div class="cd-row"><div class="cd-k">${cn()?lc:le}</div><div class="cd-v">${v}</div></div>`:'';
    const chips=(arr,cl)=>(arr||[]).map(t=>`<span class="${cl}">${esc(t)}</span>`).join('');
    const stages=(x.stages||[]).map(s=>`<span class="cd-stg">${stageLabel(s)}</span>`).join('');
    const demoTitle=escJs(bmTitle(x));
    showDetail(`
      <div class="cd-hero" style="--bc:#43A5AD">
        <div class="cd-brandline"><span class="cd-bdot" style="background:#43A5AD"></span>Blackmores v2 · ${esc(cn()?x.domain_cn:x.domain_en)}</div>
        <div class="cd-tags">
          <span class="cd-tag" style="border-color:#43A5AD;color:#27818a">${x.has_demo?(cn()?'可打开 Demo':'Live demo'):(cn()?'Concept backlog':'Concept backlog')}</span>
          ${(x.brands||[]).map(b=>`<span class="cd-tag soft">${esc(bName(b))}</span>`).join('')}
          ${(x.clients||[]).slice(0,4).map(c=>`<span class="cd-tag soft">${esc(c)}</span>`).join('')}
        </div>
        <h2>${esc(bmTitle(x))}</h2>
        ${bmSummary(x)?`<div class="cd-scn">${esc(bmSummary(x))}</div>`:''}
      </div>
      ${x.has_demo?`<div class="cd-demorow bm-demo-row"><div class="cd-demoinfo"><b>${cn()?'可现场打开的参考 demo':'Openable reference demo'}</b><span>${esc(x.file)}</span></div><button class="cd-demobtn" onclick="GMCatalog.openDemo('${x.file}','${demoTitle}')">▶ ${cn()?'体验':'Open'}</button></div>`:`<div class="cd-nttbanner ref">${cn()?'这是待补样机的 concept backlog：当前用于讨论场景价值、数据需求和优先级，下一步可按 GM 业务规则制作 demo。':'This is a concept backlog item: use it to discuss scenario value, data needs and priority, then build a GM-specific demo next.'}</div>`}
      <div class="cd-grid">
        ${row('适配 GM 的方向','GM adaptation fit',esc(bmText(x,'gm_fit')))}
        ${row('需要替换 / 接入的数据','Data to connect',esc(bmText(x,'data')))}
        ${row('参考来源客户 / 行业','Reference clients / industries',esc((x.clients||[]).join(' · ')))}
        ${row('所属模块','Reference domain',esc(bmText(x,'domain_desc')))}
      </div>
      ${scenes&&scenes.length?`<div class="cd-band"><div class="cd-bl">${cn()?'场景要点':'Scenario points'}</div><div class="cd-bc">${chips(scenes,'cd-pill')}</div></div>`:''}
      ${(x.tags||[]).length?`<div class="cd-band"><div class="cd-bl">${cn()?'标签':'Tags'}</div><div class="cd-bc">${chips(x.tags,'cd-pill soft')}</div></div>`:''}
      ${stages?`<div class="cd-band"><div class="cd-bl">${cn()?'可映射阶段':'Mapped stages'}</div><div class="cd-bc">${stages}</div></div>`:''}`);
  }

  function openNtt(nid){
    const n=NTT[nid]; if(!n) return;
    const cl=document.getElementById('caseLayer'); if(cl) cl.classList.remove('open');
    const isDemo=n.proof_status==='Demo Asset';
    const row=(lc,le,v)=>v?`<div class="cd-row"><div class="cd-k">${cn()?lc:le}</div><div class="cd-v">${v}</div></div>`:'';
    const caps=(n.capabilities||[]).map(x=>`<span class="cd-pill">${x}</span>`).join('');
    const demoAssets=(n.demo_assets&&n.demo_assets.length?n.demo_assets:(n.demos||[]).map(f=>({file:f,label_cn:f,label_en:f,means_cn:'',means_en:''})));
    const demos=demoAssets.map(d=>{
      const dl=DEMO_LABEL[d.file];
      return `<div class="cd-demorow">
        <div class="cd-demoinfo"><b>${dl?(cn()?dl.cn:dl.en):L(d,'label')}</b><span>${L(d,'means')}</span></div>
        <button class="cd-demobtn" onclick="GMCatalog.openDemo('${d.file}','${escJs(dl?(cn()?dl.cn:dl.en):L(d,'label'))}')">▶ ${cn()?'体验':'Open'}</button>
      </div>`;}).join('');
    const stages=(n.stages||[]).filter(s=>s!=='J8').map(s=>`<span class="cd-stg">${stageLabel(s)}</span>`).join('');
    showDetail(`
      <div class="cd-hero" style="--bc:#7A2FE0">
        <div class="cd-brandline"><span class="cd-bdot" style="background:#7A2FE0"></span>NTT DATA · ${n.type}</div>
        <div class="cd-tags">
          <span class="cd-tag" style="border-color:#7A2FE0;color:#7A2FE0">${isDemo?(cn()?'可复用 Demo':'Demo Asset'):(cn()?'参考能力':'Reference')}</span>
          ${(n.brands||[]).length?`<span class="cd-tag soft">${(n.brands||[]).map(bName).join(' · ')}</span>`:''}
        </div>
        <h2>${L(n,'title')}</h2>
      </div>
      <div class="cd-nttbanner ${isDemo?'demo':'ref'}">${L(n,'demo_meaning')||(cn()?'NTT DATA 可复用能力，需结合客户场景定制。':'Reusable NTT DATA capability, customised per client.')}</div>
      ${demos?`<div class="cd-band"><div class="cd-bl">${cn()?'可体验 Demo':'Live demos'}</div><div class="cd-bc cd-bc-block">${demos}</div></div>`:''}
      <div class="cd-grid">
        ${row('概述','Summary',L(n,'summary'))}
        ${row('落地价值','Relevance',L(n,'relevance'))}
        ${row('如何适配','Adaptation',L(n,'adaptation'))}
        ${row('需要对接的数据','Data to connect',L(n,'data_to_connect'))}
        ${row('还需补齐内容','Content to complete',L(n,'content_to_complete'))}
        ${row('建议下一步','Recommended next step',L(n,'next_step'))}
      </div>
      ${caps?`<div class="cd-band"><div class="cd-bl">${cn()?'能力模块':'Capabilities'}</div><div class="cd-bc">${caps}</div></div>`:''}
      ${stages?`<div class="cd-band"><div class="cd-bl">${cn()?'适用阶段':'Stages'}</div><div class="cd-bc">${stages}</div></div>`:''}`);
  }

  /* ============ DEMO VIEWER (iframe, full screen) ============ */
  function openDemo(file,title){
    let v=document.getElementById('demoViewer');
    if(!v){
      v=document.createElement('div');v.id='demoViewer';v.className='demo-viewer';
      v.innerHTML=`<div class="dv-bar"><button class="dv-back" onclick="GMCatalog.closeDemo()">← ${cn()?'关闭':'Close'}</button>
        <span class="dv-title" id="dvTitle"></span><span style="flex:1"></span>
        <a class="dv-new" id="dvNew" target="_blank" rel="noopener" title="${cn()?'新标签打开':'Open in new tab'}">↗</a></div>
        <iframe id="dvFrame" title="demo"></iframe>`;
      document.body.appendChild(v);
    }
    const url='demos/'+file+'?brand='+encodeURIComponent(S.brand)+'&lang='+(cn()?'zh':'en');
    document.getElementById('dvTitle').textContent=title||file;
    document.getElementById('dvNew').href=url;
    document.getElementById('dvFrame').src=url;
    v.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeDemo(){
    const v=document.getElementById('demoViewer');
    if(v){v.classList.remove('open');document.getElementById('dvFrame').src='about:blank';}
    document.body.style.overflow=document.getElementById('catalogOverlay').classList.contains('open')?'hidden':'';
  }

  /* ============ open / close the whole catalog ============ */
  function open(brand,cat){
    if(brand) S.brand=brand;
    if(cat) S.cat=cat;
    S.typeFilter='all';S.bmFilter='all';S.bucketFilter='all';S.search='';
    document.getElementById('catalogOverlay').classList.add('open');
    document.getElementById('catalogOverlay').classList.remove('detail-open');
    document.body.style.overflow='hidden';
    renderCatalog();
  }
  function close(){
    document.getElementById('catalogOverlay').classList.remove('open','detail-open');
    document.body.style.overflow='';
  }

  // setters
  function setBrand(b){S.brand=b;S.typeFilter='all';S.bmFilter='all';S.search='';renderCatalog();}
  function setCat(c){S.cat=c;S.typeFilter='all';S.bmFilter='all';S.search='';renderCatalog();}
  function setType(t){S.typeFilter=t;renderCatalog();}
  function setBmFilter(t){S.bmFilter=t;renderCatalog();}
  function setSearch(v){S.search=v;
    // re-render only panel to keep input focus
    const cat=S.cat;let panel='';
    if(cat==='benchmark')panel=renderBenchmark();else if(cat==='capability')panel=renderCapability();else panel=renderRoadmap();
    const p=document.querySelector('#catalogBody .cat-panel');if(p)p.innerHTML=panel;
  }

  // re-render on language toggle (index.html calls render(); we hook via window)
  function refresh(){ if(document.getElementById('catalogOverlay').classList.contains('open')) renderCatalog(); }

  /* ===== Stage-level block injected into the journey drill-down =====
     Replaces the old confusing 3-row stack + NTT grid + side-drawer.
     Shows compact case + capability previews that route to the new
     full-page catalog detail, plus a "view all" entry. ===== */
  function stageBlock(stage, journeyKey){
    const caseIds=[...new Set([...(stage.featured||[]),...(stage.cases||[]),...(stage.background||[])])].filter(id=>CASES[id]);
    const nttIds=[...new Set(stage.ntt||[])].filter(id=>NTT[id]);
    const bcount={};caseIds.forEach(id=>{const b=CASES[id].brand;bcount[b]=(bcount[b]||0)+1;});
    let topBrand=BRANDS[0].key,mx=-1;for(const b in bcount){if(bcount[b]>mx){mx=bcount[b];topBrand=b;}}

    const caseCards=caseIds.slice(0,3).map(id=>{
      const c=CASES[id];const bc=bColor(c.brand);const img=c.img?`assets/${c.img}.jpg`:'';
      const tl=window.tierLabel&&window.tierLabel[c.tier];const tlab=tl?(cn()?tl.cn:tl.en):'';
      const rb=ROADMAP_BUCKET[c.roadmap_bucket];
      return `<button class="sb-case" onclick="GMCatalog.openCaseFromStage('${id}')">
        <div class="sb-case-img">${img?`<img src="${img}" loading="lazy" alt="" onerror="this.style.display='none';this.parentElement.classList.add('noimg')">`:''}
          <span class="sb-co" style="--bc:${bc}">${bName(c.company||c.brand)}</span></div>
        <div class="sb-case-b">
          <div class="sb-case-meta">${tlab?`<span class="sb-tier">${tlab}</span>`:''}${rb?`<span class="sb-rb" style="--rc:${rb.c}">${cn()?rb.cn:rb.en}</span>`:''}</div>
          <h5>${cTitle(c)}</h5>
          <p>${cText(c,'takeaway')||cText(c,'scenario_name')||''}</p>
        </div></button>`;
    }).join('');

    const nttCards=nttIds.slice(0,3).map(id=>{
      const n=NTT[id];const isDemo=n.proof_status==='Demo Asset';const demoFile=NTT_DEMO[id];
      const dl=DEMO_LABEL[demoFile];
      return `<div class="sb-ntt">
        <div class="sb-ntt-top"><span class="sb-ntt-badge">NTT DATA</span>
          <span class="sb-ntt-proof ${isDemo?'demo':'ref'}">${isDemo?(cn()?'可复用 Demo':'Demo'):(cn()?'参考':'Ref')}</span></div>
        <h5>${L(n,'title')}</h5>
        <p>${L(n,'summary')}</p>
        <div class="sb-ntt-foot">
          ${demoFile?`<button class="sb-ntt-demo" onclick="GMCatalog.openDemo('${demoFile}','${escJs(dl?(cn()?dl.cn:dl.en):L(n,'title'))}')">▶ ${cn()?'体验 Demo':'Demo'}</button>`:''}
          <button class="sb-ntt-more" onclick="GMCatalog.openNttFromStage('${id}')">${cn()?'详情':'Details'} →</button>
        </div></div>`;
    }).join('');

    return `
      <div class="sb-wrap">
        <div class="sb-sec">
          <div class="sb-head"><div><span class="sb-eye">${cn()?'标杆案例 · 证据':'BENCHMARK CASES · PROOF'}</span>
            <span class="sb-cnt">${caseIds.length}</span></div>
            <button class="sb-all" onclick="GMCatalog.open('${topBrand}','benchmark')">${cn()?'在目录中查看全部':'View all in catalog'} →</button></div>
          ${caseCards?`<div class="sb-casegrid">${caseCards}</div>`:`<div class="sb-empty">${cn()?'本阶段案例可在后续补齐。':'Cases for this stage can be added later.'}</div>`}
        </div>
        ${nttCards?`<div class="sb-sec">
          <div class="sb-head"><div><span class="sb-eye">${cn()?'NTT 能力 · 可体验 Demo':'NTT CAPABILITIES · LIVE DEMO'}</span>
            <span class="sb-cnt">${nttIds.length}</span></div>
            <button class="sb-all" onclick="GMCatalog.open('${topBrand}','capability')">${cn()?'查看全部能力':'All capabilities'} →</button></div>
          <div class="sb-nttgrid">${nttCards}</div>
        </div>`:''}
      </div>`;
  }
  function openCaseFromStage(cid){ document.getElementById('catalogOverlay').classList.add('open'); openCase(cid); }
  function openNttFromStage(nid){ document.getElementById('catalogOverlay').classList.add('open'); openNtt(nid); }

  window.GMCatalog={open,close,setBrand,setCat,setType,setBmFilter,setSearch,openCase,openNtt,openBm,openDemo,closeDemo,closeDetail,refresh,
    stageBlock,openCaseFromStage,openNttFromStage,
    // helper for stage-level entry: open catalog filtered to the brand most relevant to a stage
    openForStage:function(journeyKey){
      const map={customer:'Häagen-Dazs',employee:'General Mills',business:'General Mills'};
      open(map[journeyKey]||'General Mills','benchmark');
    }
  };

  // ESC handling
  document.addEventListener('keydown',e=>{
    if(e.key!=='Escape')return;
    const dv=document.getElementById('demoViewer');
    if(dv&&dv.classList.contains('open')){closeDemo();return;}
    const ov=document.getElementById('catalogOverlay');
    if(ov&&ov.classList.contains('detail-open')){closeDetail();return;}
    if(ov&&ov.classList.contains('open')){close();return;}
  });
})();
