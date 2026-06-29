# Codex Prompt — Implement Blackmores Experience Studio Landing Screen

Build a responsive first screen for `Blackmores Experience Studio` using the files in this package.

## Objective

Create an executive briefing portal landing screen that communicates:

**One Brand. Five Market Realities. One Scalable Operating Model.**

The design must show that NTT DATA understands Blackmores' global-local challenge and can design an operating model that supports local market realities while remaining scalable globally.

## Required sections

### 1. Header
- Left: `BLACKMORES | EXPERIENCE STUDIO`
- Right navigation: `Journey`, `Capability Catalog`, `Case Library`, `About NTT DATA`, `EN`
- Clean, light, premium, consulting-style.

### 2. Hero
- Eyebrow: `GLOBAL CONSISTENCY. LOCAL RELEVANCE.`
- Headline:
  `One Brand.`
  `Five Market Realities.`
  `One Scalable Operating Model.`
- Supporting line:
  `Helping Blackmores deliver locally relevant experiences through one scalable operating model.`
- Right side should show the simple three-part logic:
  - One Brand — Global consistency in strategy and standards.
  - Five Market Realities — Different ecosystems. Different consumers. Different journeys.
  - One Scalable Operating Model — Unified by data. Governed by trust. Powered by AI.

### 3. Regional Experience Landscape
- Section label: `REGIONAL EXPERIENCE LANDSCAPE`
- Section headline: `Every market has its own ecosystem. We design for what matters locally.`
- Show five market cards in one row on desktop:
  1. Australia & New Zealand
  2. China
  3. Japan
  4. Southeast Asia
  5. Future Markets

## Market card content

### Australia & New Zealand
Positioning: `Retail-led Health Ecosystem`
Evidence:
- Pharmacy as primary channel
- Retail & loyalty growth
- Health & wellness focus
Tags: `Retail`, `Pharmacy`, `Loyalty`
Visual: pharmacy / health retail. Avoid scenic travel imagery.

### China
Positioning: `WeChat-native Customer Journey`
Evidence:
- Service Account & CRM
- Mini Program & Commerce
- WeCom & Community
Tags: `WeChat`, `Mini Program`, `CRM`
Visual: unmistakable WeChat green interface. No red ecommerce style.

### Japan
Positioning: `LINE-driven Daily Care`
Evidence:
- LINE Official Account
- Points & Loyalty Program
- Care & Content Engagement
Tags: `LINE OA`, `Points`, `Care`
Visual: LINE-style green chat / care experience.

### Southeast Asia
Positioning: `LINE + WhatsApp Ecosystem`
Evidence:
- LINE engagement
- WhatsApp conversations
- Partner & retail network
Tags: `LINE`, `WhatsApp`, `Partners`
Visual: must show both LINE and WhatsApp, with partner ecosystem implication.

### Future Markets
Positioning: `Composable by Design`
Evidence:
- India
- Middle East
- Europe and more
Tags: `Onboard`, `Localize`, `Scale`
Visual: blueprint / node network. Must feel expandable, not disabled.
Footer: `Built to onboard any future market with speed and consistency.`

## Style rules

- Minimal, premium, executive briefing style.
- Background: warm off-white, subtle teal gradients.
- Avoid dashboard heaviness.
- Avoid generic slogan-only design.
- Keep first screen concise but evidence-based.
- Use market colors as recognition cues:
  - ANZ: Blackmores teal / pharmacy blue
  - China: WeChat green `#07C160`
  - Japan: LINE green `#06C755`
  - SEA: LINE green + WhatsApp green `#25D366`
  - Future: blueprint blue

## Assets

Use `/assets/reference/landing-reference.png` for layout reference.
Use `/src/content.json` as content source.
Use `/src/design-tokens.css` and `/src/styles.css` as starter styling.
Use SVGs in `/assets/svg/` where useful.

## Deliverable

Implement as clean semantic HTML/CSS or React components. The cards should be data-driven from the market array in `content.json`.
