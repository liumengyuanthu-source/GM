# Blackmores Catalog Restructure Tracker

Status: catalog grouping implemented; scenario placeholder cards added
Last updated: 2026-06-29

## Purpose

This document tracks the planned restructuring of the Blackmores catalog into six business-oriented groups. It is based on:

- `MARKET_POSITIONING.md`
- `index.html` current catalog
- `Docs/Strategy/AI Application Scenario Map - Retail Industry.pdf`

The goal is to make the catalog feel like a retail industry scenario library, while preserving the Blackmores-specific story: channel enablement first, data/content/compliance capture second, and long-term DTC consumer relationship building third.

Current catalog status:

- Existing live / previously defined cards shown: 31
- New scenario-map placeholder cards remaining: 31
- Total catalog cards shown: 62
- Placeholder cards are shown as Concept cards until a detail page is created.

## Proposed Catalog Groups

| Group | Role in Blackmores Story |
|---|---|
| AI Strategy & Transformation | NTT DATA consulting entry point, AI roadmap, scenario prioritization, transformation governance |
| Consumer Growth | Insight -> content -> campaign -> AI discovery -> social operations -> social conversion -> media attribution |
| Platform Commerce | Marketplace, direct commerce and agentic e-commerce operations across Tmall, JD, Shopee, Lazada, Amazon, WeChat and other digital channels |
| Retail & Channel Operations | Pharmacy, retail chain, distributor, field sales, shelf execution, sell-through and replenishment |
| Membership & Health Engagement | Loyalty, health companion experiences, repurchase, member benefits and long-term consumer relationship |
| Trust, Compliance & Data Foundation | Consent, claims, regulatory review, VOC, knowledge graph, data governance and enterprise foundation |

## Scenario Coverage Table

| Group | Current Covered Scenarios | Scenario Map Gaps / Suggested Additions | Priority | Status |
|---|---|---|---|---|
| AI Strategy & Transformation | AI Transformation Navigator; Digital Transformation; AI-Optimized Design Thinking; Retail AI Scenario Portfolio | Business Case Prioritization; AI Agent Adoption Blueprint | High | Implemented in catalog grouping; AI Strategy Map, Solution Cards, AI Value Roadmap and AI Operating Model removed from display |
| Consumer Growth | Consumer Insight & VOC; Content Engine; Campaign Management & Growth Studio; AI Discovery & GEO; Social Hub; AI Live & Social Commerce; Media Delivery, Attribution & ROI | No new top-level cards for now; Consumer Insight & VOC now links to the Blackmores VOC demo; merged Growth Studio, AI Discovery, personalized content, dynamic creative and ad delivery into the seven-card growth flow | High | Consolidated in catalog grouping; AI Discovery & GEO rebuilt as a four-tab Blackmores workbench; AI-Powered Ad Delivery and retail media tiles now route into Media Delivery, Attribution & ROI |
| Platform Commerce | Partner Trading Hub; Partner B2B Ordering & Checkout; Partner Procurement, Replenishment & Invoices; Marketplace Order & Channel Operations; Agentic E-Commerce; Marketplace Operations Cockpit; Marketplace Promotion, Bundle & Launch Control; Cross-border Commerce Tracking | Continue improving page depth and visual polish as needed | Highest | Consolidated Favorites into Partner B2B Ordering & Checkout; merged Bundle Management into Marketplace Promotion, Bundle & Launch Control; merged Platform Sell-out & Inventory Dashboard and Cross-Platform Product Content Governance into Marketplace Operations Cockpit; removed WeChat Mini-Program from Platform Commerce because it belongs under consumer/private-domain scenarios; archived standalone Order Management; converted copied partner portal pages to Studio shell with portal header/sidebar hidden and intro/internal navigation added; created detailed pages for Marketplace Operations Cockpit, Marketplace Promotion / Bundle / Launch Control, and Cross-Border Commerce Tracking |
| Retail & Channel Operations | Trading Hub · Procurement & Replenishment; Store Execution · Planogram; Digital Store · Smart Sensing; Store Lifecycle Management; Partner Staff Training AI; WeCom · Private-Traffic Console | Distributor Sell-through Intelligence; Pharmacy Shelf Inspection; Stockout Prediction; Field Sales Visit Assistant; Channel Activity Planning & Approval; Dealer / Pharmacy Replenishment Recommendation; Localized Selling-point Extraction | High | Implemented in catalog grouping |
| Membership & Health Engagement | Loyalty & Membership; Health Companion; Health Score + Monthly Wrapped; Health Twin; Conversational Service; Data-Driven Customer Operation | Repurchase Trigger Engine; Next-Best-Action Recommendation; Member Benefit Recommendation; Personalized After-sales Care; Referral / Member Campaign; Cross-sell Recommendation; Health Journey Orchestration | High | Implemented in catalog grouping |
| Trust, Compliance & Data Foundation | Consent Bridge · Channel → Brand; Compliance Hub · AI Review; VOC & Data Insights; Knowledge Graph; Enterprise Foundation | Claim Compliance Governance; Cross-market Content Review; Customer Consent & Identity Resolution; Feedback Sentiment Analysis; Issue Closed-loop Tracking; Data Governance Agent; Risk Early Warning; Product / Regulation Knowledge Base | Highest | Implemented in catalog grouping; high-priority addition gap |

### Detail Page Updates

| Scenario | Update | Status |
|---|---|---|
| Knowledge Graph | Expanded from a thin product graph into a Blackmores AI Knowledge Hub demo: product truth graph, claim governance, marketplace/channel use cases, and a reference architecture walkthrough adapted from the Honda Knowledge Graph reference. | Updated |
| AI Transformation Navigator | Rebuilt using the full Honda navigator information architecture, adapted for Blackmores: new AI reality, four transformation shifts, AI-readable foundation, full responsible-AI governance playbook, framework tables, requirements alignment, outcomes, NTT DATA value proposition, AI journey support and three-horizon roadmap. | Updated |
| Retail AI Scenario Portfolio | Added a portfolio entry page with the original Retail Industry scenario-map PDF embedded in a browser PDF viewer, plus Blackmores six-domain mapping and execution backlog. | Updated |
| Campaign Management & Growth Studio | Integrated the Growth Studio flow into Campaign Management: Create Campaign now follows Theme -> Channels -> Content -> Review -> Audience -> Launch; Toolkit now includes AI Campaign Builder and Dynamic Creative Optimizer; Honda / automotive leftovers removed from the page. | Updated |
| Consumer Insight & VOC | Repositioned the VOC page as a Consumer Growth insight engine: all-channel Blackmores listening, AI insight summary, competitive edge, next best action, growth opportunities, voice root-cause drilldown and insight-to-action tasks. The Consumer Growth catalog card now opens this demo. | Updated |
| Social Hub | Expanded the Blackmores social operations demo with richer multi-market sample data: account matrix, social inbox, compliant AI replies, social listening topics, negative-theme routing, campaign recommendations and one-click campaign kits. | Updated |
| Content Engine | Upgraded from the old AIGC page into a full six-tab content workbench: Briefs, Strategy, Generate, Assets, Governance and Performance. It consolidates Hyper-Personalized Content Engine, AIGC Asset Studio, Dynamic Creative & Ad Optimization, content governance and cross-market review into one complete flow without removing the existing asset generation, library and community functions. | Updated |

## Suggested First Wave Additions

These are the strongest candidates if we decide to add new catalog cards instead of only regrouping existing cards.

| Candidate Scenario | Suggested Group | Why It Matters | Status |
|---|---|---|---|
| Marketplace Operations Cockpit | Platform Commerce | Makes Blackmores platform commerce operations explicit across marketplaces and digital channels, including sell-out, inventory risk, PDP content health, and claim consistency | Detailed page created and linked; absorbs Platform Sell-out & Inventory Dashboard and Cross-Platform Product Content Governance |
| Marketplace Promotion, Bundle & Launch Control | Platform Commerce | Covers platform event packages, promotion and bundle mechanics, price and stock checks, claim/content readiness, platform rules, and launch sign-off | Detailed page created and linked; reuses / extends Bundle Management and merges Platform Promotion & Offer Verification plus Marketplace Event Approval & Launch Control |
| Cross-Border Commerce Tracking | Platform Commerce | Tracks CBEC order status, parcel milestones, customs documents, tariff / HS code checks and exception handling | Detailed page created and linked |

### Platform Commerce Multilingual Status

- `portal-trading/trading-hub.html`, `product-center.html`, `purchase-order.html`, and `sale-order.html` use the shared `i18n.js`; missing business UI keys were added for the Platform Commerce flow.
- `marketplace-operations-cockpit.html`, `marketplace-promotion-launch.html`, and `cross-border-commerce-tracking.html` use `platform-commerce-i18n.js` for local four-language page translation and iframe language sync.
- `agentic-commerce.html` already had a data-driven multilingual model; iframe `postMessage` language / brand / market sync was extended so it follows catalog language switching.
- Remaining untranslated scan hits are intentional operational data such as SKU codes, order IDs, tracking IDs, currency values, dates and product codes.
| Distributor Sell-through Intelligence | Retail & Channel Operations | Connects distributor, pharmacy and retail sell-through data to replenishment and field actions | Concept card added |
| Repurchase Trigger Engine | Membership & Health Engagement | Converts health journey and product-cycle data into repeat purchase and member actions | Concept card added |
| Claim Compliance Governance | Trust, Compliance & Data Foundation | Makes compliant supplement claims and localized content approval a clear AI scenario | Concept card added |
| Issue Closed-loop Tracking | Trust, Compliance & Data Foundation | Turns customer feedback, complaints, service cases and channel issues into traceable actions | Concept card added |

## Lower-Priority Or Not Suitable For Blackmores

These scenario-map items are retail-relevant but should not be prioritized for Blackmores unless the story changes.

| Scenario Type | Reason |
|---|---|
| AI Virtual Fitting / VR Shopping | More relevant to fashion, apparel and visual product trial |
| RFID Self-checkout | More relevant to owned stores and physical checkout operations |
| Unmanned Retail Store | Not central to Blackmores' channel model |
| Robot Last-mile Delivery | Logistics-heavy and not a core Blackmores differentiator |
| In-store Fault Diagnosis | More relevant to electronics, appliances or automotive |
| Energy Consumption / Intelligent Scheduling | Useful retail ops topic, but low relevance to current Blackmores positioning |
| Multi-currency Payment / Tariff Reminder | Only relevant if we choose a cross-border commerce sub-story |

## Working Rules

- Do not add cards only to increase the count.
- Prefer Blackmores-specific scenarios that strengthen the channel-to-consumer relationship story.
- Reuse current catalog cards where possible by regrouping and renaming before creating new pages.
- Treat Platform Commerce and Trust / Compliance / Data Foundation as the two highest-priority gaps.
- Discuss each group before implementation.
