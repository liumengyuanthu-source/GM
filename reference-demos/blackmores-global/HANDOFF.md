# Blackmores Experience Studio — Handoff

> Last updated: 2026-06-28. This doc lets a fresh session (or person) pick up the project without re-deriving context.

## What this is

An interactive demo "studio" for **Blackmores** (retail / health-supplement client), living at
`clients/blackmores-global/`. The hub page is `index.html`; it links to ~40 capability/strategy demo pages,
each opened in an in-page iframe **viewer**. Much of it was adapted from a separate **Auto Experience Studio**
(Honda India) at `/Users/meganwang/Desktop/Auto Experience Studio/DEMO`.

Positioning thesis (source of truth: **MARKET_POSITIONING.md**): most Blackmores markets run through
**channels today** (marketplaces / pharmacies / distributors), so the strategy is
**short-term channel enablement → long-term direct consumer (DTC)**. Platform e-commerce is
partner/channel-operated, not Blackmores-direct.

## Brand / design tokens (used across pages)

- Teal `--brand:#009BA4`, dark `--brand-d:#007A82`, soft `--soft/--brand-soft:#e0f2f3`, pink accent `--accent:#E91E63`.
- Ink `--ink:#1b1d1a`, muted `--muted:#6d716a`, line `--line:#e8e6df`, canvas/card `#ffffff`.
- Per-market accents: ANZ `#0F9DA6`, CN `#E0567A`, JP `#3FA876`, SEA `#6C68C8`.
- Fonts: `--display` = Georgia serif; `--body` = system sans.
- Logo: `images/blackmores-logo.png` (transparent, ~45px in header).

## Compliance rules (apply to ALL content, every language)

- **No medical/health claims** — use "supports / supportive" language only.
- **PGC only** (professionally-generated content); no UGC.
- **No competitor mentions** in China contexts (Swisse / 汤臣倍健 etc.); competitors only appear in
  generic comparison demos where appropriate.
- **TGA / Australian-made** is the trust anchor.

## Internationalisation (i18n) — IMPORTANT, two patterns coexist

Languages: **en / zh / ja / th**. The studio passes language to each demo two ways and demos must honour both:
1. URL param on open: `openViewer()` sets iframe `src = file?brand=…&market=…&lang=<lang>`.
2. Live sync: parent posts `window.postMessage({t:'es', brand, lang, market}, '*')` (`syncViewer()` in index.html).

Pages should: read `?lang=` on load, add a `message` listener for `{t:'es',lang}`, and re-render/re-apply text.

### Pattern A — static pages: `data-i18n` attributes (canonical reference: `market-cn.html`)
- Every translatable element has `data-i18n="key"`; English stays inline as the default.
- A `<script>` holds `I18N={zh:{…},ja:{…},th:{…}}` (en = inline). `apply()` caches the English in
  `data-en`, swaps `innerHTML` per key, toggles the `.langsw` pill (EN/中文/日本語/ไทย), and is wired to
  URL param + postMessage + click. There's also an embed-hide IIFE that hides the page's own `<header>`
  when iframed.
- **Copy this harness verbatim** when adding i18n to a new static page; only the dictionary differs.

### Pattern B — interactive/JS-rendered pages: dictionary + `T()` helper
- Content built by JS uses a per-language dict and a `T(key)`/`U()` lookup; the active view **re-renders**
  on language change. (See cross-entity-bridge, health-score, voc, growth, data-driven.)

### Homepage i18n
- `index.html` text uses `data-home="key"`; dictionary is **`index.i18n.js`** → `HOME_I18N`.
- `HOME_I18N.en` and `HOME_I18N.zh` are full objects. `HOME_I18N.ja` and `.th` are
  `Object.assign({}, HOME_I18N.en, { …overrides })`, so **any key missing from a ja/th override falls back
  to English**. When adding homepage keys, add to **en + zh** (required) and add ja/th overrides for full coverage.

## Recent work completed (this + prior sessions)

- **Homepage** redesigns: full-width teal hero with market feature cards (big + 3 small + "more markets"),
  flat one-click market/language settings capsule, white header/page, "Markets" nav dropdown.
- **Operating Model** section (in `index.html`, class `bd-arch`) **restyled** to a 3-layer diagram:
  colored left blocks (L1 teal / L2 sage / L3 gold), white cards with circular accent icons + uppercase
  eyebrow + serif title, a check-circle flow strip under Layer 01, and **Layer 03 expanded to 5 cards**
  (Data Platform, Content Hub, Technology Services, Security & Privacy, AI & Analytics → "Data & Technology
  Foundation"). New keys added to all 4 langs in `index.i18n.js`.
- **Market strategy pages** built + wired into nav: `market-cn/anz/jp/sea.html` (per-market landscape,
  status, channel reality, channel→consumer POV).
- **Catalog** ported to Honda's cleaner look (Explore-by-capability header, Grid/List toggle, JUMP TO,
  `.ccard` clean cards). Added "Strategy & AI Transformation" domain.
- **Reused from Auto studio**: originals re-authored (cross-entity-bridge, health-companion, health-score,
  digital-transformation, ai-optimized-design-thinking) + functional ports re-skinned
  (channel-ops, growth, digital-store, order-management, campaign-management,
  data-driven-customer-experience, discovery). Enhanced: ai-transformation-navigator, social-hub (Insights tab),
  **voc (Potential Leads tab)**. See **AUTO_REUSE_BACKLOG.md** for the full per-file tracker.
- **Full translation pass** (en/zh/ja/th) added to the 11 previously English-only pages:
  market-cn/anz/jp/sea, cross-entity-bridge, health-companion, health-score, digital-transformation,
  ai-optimized-design-thinking, ai-transformation-navigator, data-driven (zh added to its existing switcher).
- **Honda auto-residue cleaned to 0** (en/ja/th) in the 6 ports: data-driven, growth, digital-store,
  discovery, order-management, campaign-management — remapped to real Blackmores products/competitors.
- **growth.html**: Chinese (zh) added to its `T={en,ja,th}` dict + `LANGS` + studio sync (68 keys).

## Known gaps / pending (pick up here)

1. **channel-ops.html — still English-only (deliberately skipped).** 351KB back-office ops console,
   ~1,500 hardcoded strings (≈1,100 text nodes + ≈416 JS strings), no i18n scaffolding. User chose to skip.
   Recommended next step if revisited: a **light pass** (tabs, section titles, checklist titles, buttons,
   key labels) to all 4 langs first; deep detail later.
2. **growth.html inline data blocks** — `THEMES`, `KPI`, `CHANS` (and a `RIDE` helper) use inline
   `{en,ja,th}` per-string objects (no zh). They gracefully fall back to English under zh via
   `L=o=>(o[state.lang]||o.en)`. Add zh to these objects if full Chinese coverage on growth is wanted.
3. **ja/th content quality on some ports** — residue is gone, but Japanese/Thai on a couple of ports were
   originally Honda translations; they read fine but could be reviewed for retail naturalness.
4. **No automated visual screenshots in the sandbox** — there's no headless browser available via bash.
   Visual checks of `index.html` (e.g. Operating Model) need the live app or Claude-in-Chrome.

## Conventions for future edits

- **Validate every change**: HTML via `python3 -c "from html.parser import HTMLParser as H; H().feed(open('FILE').read())"`;
  JS via extracting the largest `<script>` and running `node --check`. For i18n dicts, parse the actual
  object (node), don't trust regex, and confirm zh key-set == en key-set (and nested array lengths).
- **Path mapping**: file tools use `/Users/meganwang/Desktop/Retail_Experience_Studio/…`; bash uses
  `/sessions/<id>/mnt/Retail_Experience_Studio/…` for the same files. Cannot `rm` inside the mounted folder
  (Operation not permitted) — overwrite instead; staged backups live in `_from-auto/`.
- For **narrative/strategy** pages, original rewrites beat mechanical re-skins; for **functional console**
  demos, scripted re-skin + residue cleanup works.

## Key files

- `index.html` — studio hub (hero, Operating Model `bd-arch`, catalog, journeys).
- `index.i18n.js` — homepage `HOME_I18N` (en/zh full; ja/th = en + overrides).
- `MARKET_POSITIONING.md` — positioning source of truth (tone, per-market status, channel reality).
- `CHANNEL_ENABLEMENT_CENTER_PLAN.md` — unified ops center plan.
- `AUTO_REUSE_BACKLOG.md` — per-file reuse/port tracker (☐/◐/☑/✋ statuses).
- `market-cn.html` — **canonical i18n harness reference** for static pages.
