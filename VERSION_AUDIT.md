# Three Journey Navigator fixed3_3 images v1

## Source

- Interaction reference: `journey_fixed3_3.html`
- Output entry: `index.html`
- Asset source: `gm_github_publish/assets`
- Persona asset source: `gm_github_publish/persona_matrix`

## What Changed

- Uses the `journey_fixed3_3.html` interaction structure.
- Keeps the journey map, zoom-focus drill-down, stage detail panel, benchmark case layer, NTT DATA capability layer, and persona workbench.
- Adds the full image asset folder required by the interaction.
- Adds the full persona matrix data and image folder required by the persona workbench.
- Latest update: applies the newest `index.html` ribbon stability fixes, including deferred redraw after image load, scroll throttling, gradient coordinate correction, and more reliable initial journey-line reveal.

## Image Audit

- Stage main images: 18 references checked.
- Case card / case detail images: 44 references checked.
- Scenario / persona context images: 21 references checked.
- Persona matrix image references: 75 references checked.
- Missing image references: 0.

## GitHub Readiness Check

- No single file exceeds 100MB.
- No case-only duplicate path conflict found.
- Output folder size is about 120MB.
- Do not add the generated zip file to GitHub if this folder is later compressed for sharing.

## 2026-06-29 Case Catalog Restructure

- Added `case-catalog.html` as the full-page case and demo catalog.
- Kept the existing journey, accordion, persona, and scenario interactions in `index.html`.
- Changed benchmark case and NTT DATA capability clicks to open the catalog detail view instead of using the side drawer.
- Added a top navigation and hero entry for `案例与 Demo 库 / Case & Demo Catalog`.
- Added three content layers:
  - Industry & business cases.
  - NTT DATA capabilities and reusable demo assets.
  - Reusable retail/channel modules adapted from the Blackmores catalog.
- Copied Blackmores reference demo pages into `reference-demos/blackmores-global/`.
- Marked Blackmores-derived demos as reusable reference demos, not General Mills delivery cases.
- Demo files that are referenced in NTT data but not present in the Blackmores package are shown as pending connection instead of broken links.
- Stage-level catalog links support `?stage=` filtering.
- Audit checks completed:
  - Inline script syntax passed for `index.html`, `Three_Journey_Navigator.html`, `customerjourney/index.html`, and `case-catalog.html`.
  - No `.DS_Store`, `__MACOSX`, `._*`, `.fuse_hidden*`, or nested zip files found under `reference-demos`.
  - No file over 90MB found.
  - No `Jacky`, `五人`, `5 人`, `mother`, or deprecated NTT capability title copy found in the publish HTML files.

## 2026-06-29 Blackmores v2 Catalog Completion

- Learned and synced `blackmores-global-v2.zip`.
- Updated `reference-demos/blackmores-global/` with v2 files while excluding `.DS_Store`, `__MACOSX`, `._*`, `.fuse_hidden*`, nested zip files, and `_archive`.
- Rebuilt `case-catalog.html` from the v2 `CATALOG_ITEMS` in `blackmores-global/index.html`.
- Catalog now includes:
  - 44 GM / industry cases.
  - 8 NTT DATA capability records.
  - 75 Blackmores v2 catalog entries.
  - 46 Blackmores v2 entries with openable reference demo pages.
  - 29 Blackmores v2 concept backlog entries marked as concept / prototype needed.
- New v2 live demo coverage includes `channel-levers.html` and the updated v2 versions of VOC, Social Hub, AIGC, Platform Commerce, Retail & Channel Operations, Membership & Health Engagement, and Trust / Compliance / Data Foundation pages.
- Concept backlog entries are not presented as delivered demos; they are clearly marked as scenarios needing GM-specific owner, data, business rules, proof metrics, and prototype scope.
- Audit checks completed:
  - Inline script syntax passed for `index.html`, `Three_Journey_Navigator.html`, `customerjourney/index.html`, and `case-catalog.html`.
  - All 46 Blackmores v2 demo file references resolve under `reference-demos/blackmores-global/`.
  - No `.DS_Store`, `__MACOSX`, `._*`, `.fuse_hidden*`, or nested zip files found under `reference-demos`.
  - No file over 90MB found.
  - No `Jacky`, `五人`, `5 人`, `mother`, or deprecated NTT capability title copy found in the publish HTML files.
