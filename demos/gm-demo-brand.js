(function(){
  const replacements = [
    [/General Millss/g,'General Mills'],
    [/generalmillss/g,'generalmills'],
    [/General Mills/g,'General Mills'],
    [/MyGeneral Mills/g,'GM Connect'],
    [/MyGeneral Millss/g,'GM Connect'],
    [/Occasion Companion/g,'Occasion Companion'],
    [/Occasion Score/g,'Occasion Score'],
    [/Taste Wrapped/g,'Taste Wrapped'],
    [/Weekly Active Occasion Members/g,'Weekly Active Occasion Members'],
    [/health routine/g,'meal and dessert routine'],
    [/health habit/g,'meal and dessert habit'],
    [/AI occasion advisor/gi,'AI occasion advisor'],
    [/occasion advisor/gi,'occasion advisor'],
    [/occasion need/gi,'occasion need'],
    [/health profile/gi,'occasion profile'],
    [/occasion coupon/gi,'occasion coupon'],
    [/health support coupon/gi,'occasion coupon'],
    [/health support/gi,'occasion support'],
    [/health education/gi,'product and occasion education'],
    [/food retail/gi,'food retail'],
    [/Food Experience Ecosystem/gi,'Food Experience Ecosystem'],
    [/Health & everyday enjoyment/gi,'Occasion & everyday enjoyment'],
    [/General Health/gi,'General Mills Portfolio'],
    [/Family meal Health/gi,'Family Meal'],
    [/healthy aging/gi,'lifecycle membership'],
    [/occasion companion/g,'occasion companion'],
    [/health members/g,'occasion members'],
    [/product brand/g,'food portfolio brand'],
    [/product retail/g,'food retail'],
    [/products/g,'products'],
    [/product/g,'product'],
    [/products/g,'products'],
    [/product/g,'product'],
    [/Product/g,'Product'],
    [/immune support/gi,'seasonal occasion support'],
    [/immunity/gi,'seasonal occasion'],
    [new RegExp('Health'+' Score','gi'),'Occasion Score'],
    [new RegExp('Health'+' Companion','gi'),'Occasion Companion'],
    [/wellness/gi,'everyday enjoyment'],
    [/brand governance-listed/gi,'brand-approved'],
    [/brand governance-backed/gi,'brand-trust'],
    [/medical claims/gi,'food and brand claims'],
    [/restricted claim claim/gi,'unapproved food claim'],
    [/Celebration & Gifting Gold/g,'Häagen-Dazs Celebration Cake'],
    [/Celebration/g,'Celebration'],
    [/Gifting/g,'Gifting'],
    [/mum[s]?/gi,'households'],
    [/baby/gi,'family'],
    [/pregnant or gifting/gi,'planning a gift or family meal'],
    [/I'm pregnant — are these products safe to take\\?/gi,'I am planning a family gathering — which products fit?'],
    [/Consult your household preference before use\\./gi,'Confirm preferences and allergen needs before purchase.'],
    [/household preference/gi,'household preference'],
    [/serving/gi,'serving'],
    [/retail store/gi,'retail store'],
    [/retail store/gi,'retail store'],
    [/Wanchai Ferry Dumplings 1000/g,'Wanchai Ferry Dumpling Pack'],
    [/Odourless Wanchai Ferry Dumplings/g,'Wanchai Ferry Dumpling Pack'],
    [/Wanchai Ferry Dumplings/g,'Wanchai Ferry Dumplings'],
    [/Häagen-Dazs Mini Cup 1000/g,'Häagen-Dazs Mini Cup'],
    [/Häagen-Dazs Mini Cup/g,'Häagen-Dazs Mini Cup'],
    [/Daily Immune Action/g,'Wanchai Ferry Family Dinner Kit'],
    [/Häagen-Dazs Pint 150/g,'Häagen-Dazs Pint'],
    [/Häagen-Dazs Pint/g,'Häagen-Dazs Pint'],
    [/Wanchai Ferry Wontons 1500/g,'Wanchai Ferry Wonton Pack'],
    [/Wanchai Ferry Wontons/g,'Wanchai Ferry Wontons'],
    [/Wanchai Ferry Quick Meals\\+ Daily Health/g,'Wanchai Ferry Quick Meal'],
    [/Wanchai Ferry Quick Meals Daily/g,'Wanchai Ferry Quick Meal'],
    [/Wanchai Ferry Quick Meals/g,'Wanchai Ferry Quick Meal'],
    [/Multiproduct Daily/g,'General Mills Variety Pack'],
    [/Multiproduct/g,'General Mills Variety Pack'],
    [/Family Meal Packproduct/g,'Family Meal Pack'],
    [/Family Meal Pack/g,'Family Meal Pack'],
    [/SuperFamily Meal Pack/g,'Family Meal Pack'],
    [/Häagen-Dazs Gift Selection Vision/g,'Häagen-Dazs Gift Selection'],
    [/Häagen-Dazs Gift Selection/g,'Häagen-Dazs Gift Selection'],
    [/Sleep Support/g,'Häagen-Dazs Evening Dessert'],
    [/Ashwagandha/g,'Häagen-Dazs Matcha Pint'],
    [/Beauty Sleep/g,'Häagen-Dazs Evening Treat']
  ];
  const zhReplacements = [
    [/场景导购/g,'场景导购'],
    [/场景导购/g,'场景导购'],
    [/场景需求/g,'场景需求'],
    [/场景偏好/g,'场景偏好'],
    [/健康券/g,'场景优惠券'],
    [/食品组合/g,'食品组合'],
    [/食品组合/g,'食品组合'],
    [/健康スコア/g,'场景分数'],
    [/健康サポート/g,'场景支持'],
    [/健康アドバイザー/g,'场景导购'],
    [/健康の悩み/g,'场景需求'],
    [/复购提醒/g,'复购提醒'],
    [/复购记录/g,'复购记录'],
    [/购买前请确认家庭偏好与过敏原/g,'购买前请确认家庭偏好与过敏原'],
    [/请确认家庭偏好与过敏原/g,'请确认家庭偏好与过敏原'],
    [/家庭偏好/g,'家庭偏好'],
    [/门店/g,'门店'],
    [/门店/g,'门店'],
    [/小売店/g,'小売店'],
    [/小売店/g,'小売店'],
    [/食品产品/g,'食品产品'],
    [/家庭水饺补货/g,'家庭水饺补货'],
    [/家庭水饺/g,'家庭水饺'],
    [/湾仔码头水饺/g,'湾仔码头水饺'],
    [/湾仔码头家庭装水饺/g,'湾仔码头家庭装水饺'],
    [/湾仔码头家庭装水饺/g,'湾仔码头家庭装水饺'],
    [/湾仔码头快手餐/g,'湾仔码头快手餐'],
    [/哈根达斯礼赠精选/g,'哈根达斯礼赠精选'],
    [/工作日能量点心/g,'工作日能量点心'],
    [/哈根达斯礼盒/g,'哈根达斯礼盒'],
    [/礼赠与家庭场景/g,'礼赠与家庭场景'],
    [/礼赠场景\/家庭场景/g,'礼赠/家庭场景'],
    [/礼赠或家庭聚餐/g,'礼赠或家庭聚餐'],
    [/礼赠场景/g,'礼赠场景'],
    [/家庭场景/g,'家庭场景'],
    [/成分表/g,'产品信息'],
    [/健康年龄/g,'会员生命周期'],
    [/眼睛健康/g,'礼赠偏好'],
    [/睡眠与压力/g,'夜间犒赏'],
    [/日常营养/g,'日常餐食'],
    [/营养基础/g,'餐食基础'],
    [/营养补给/g,'餐食补给']
  ];
  function applyText(s){
    let out=String(s||'');
    for(const [from,to] of replacements) out=out.replace(from,to);
    for(const [from,to] of zhReplacements) out=out.replace(from,to);
    return out;
  }
  function walk(node){
    if(node.nodeType===Node.TEXT_NODE){
      const next=applyText(node.nodeValue);
      if(next!==node.nodeValue) node.nodeValue=next;
      return;
    }
    if(node.nodeType!==Node.ELEMENT_NODE) return;
    if(['SCRIPT','STYLE','TEXTAREA','INPUT'].includes(node.tagName)) return;
    for(const child of Array.from(node.childNodes)) walk(child);
  }
  function adaptImages(){
    const map=[
      ['bio-c','images/gm/haagen-self-treat.jpg'],
      ['daily-immune','images/gm/wanchai-family-dinner.jpg'],
      ['bio-ace','images/gm/gm-ai-foundation.jpg'],
      ['quick-meals','images/gm/wanchai-quick-meal.jpg'],
      ['dumplingpack','images/gm/wanchai-family-dinner.jpg'],
      ['wontonpack','images/gm/wanchai-reunion.jpg'],
      ['multiproduct','images/gm/gm-ai-foundation.jpg'],
      ['haagen-mini','images/gm/haagen-self-treat.jpg'],
      ['product-b','images/gm/gm-ai-foundation.jpg'],
      ['celebration','images/gm/haagen-gifting.jpg'],
      ['kids','images/gm/wanchai-family-dinner.jpg'],
      ['haagenpint','images/gm/haagen-family-dessert.jpg'],
      ['giftselection','images/gm/haagen-gifting.jpg'],
      ['sleep','images/gm/haagen-family-dessert.jpg'],
      ['ashwagandha','images/gm/haagen-self-treat.jpg'],
      ['beauty','images/gm/haagen-family-dessert.jpg'],
      ['retail store','images/gm/freezer-ops.jpg'],
      ['retail store','images/gm/freezer-ops.jpg'],
      ['generalmillss-logo','images/gm/gm-ai-foundation.jpg']
    ];
    document.querySelectorAll('img').forEach(img=>{
      const src=img.getAttribute('src')||'';
      if(!/generalmillss/i.test(src)) return;
      const hit=map.find(([k])=>src.toLowerCase().includes(k));
      img.setAttribute('src', hit ? hit[1] : 'images/gm/gm-ai-foundation.jpg');
      img.setAttribute('alt','General Mills scenario asset');
    });
  }
  function run(){
    document.title=applyText(document.title).replace(/Experience Studio/g,'AI Scenario Studio');
    walk(document.body);
    adaptImages();
    document.documentElement.classList.add('gm-demo-adapted');
  }
  let queued=false;
  function schedule(){
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{ queued=false; run(); });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run);
  else run();
  document.addEventListener('DOMContentLoaded',()=>{
    new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true,characterData:true});
  });
})();
