# General Mills AI Scenario Studio — First Screen Export

This package contains a Codex-ready implementation spec and starter HTML/CSS for the approved first-screen direction.

## Core message

**One Brand. Five Market Realities. One Scalable Operating Model.**

The first screen should immediately show the five market realities and avoid generic slogans. The market cards are the evidence that NTT DATA understands General Mills' global-local challenge.

## File map

```text
generalmills_landing_export/
├── README.md
├── CODEX_IMPLEMENTATION_PROMPT.md
├── assets/
│   ├── reference/landing-reference.png
│   ├── crops/
│   │   ├── header-nav.png
│   │   ├── hero-title-area.png
│   │   ├── hero-framework-area.png
│   │   ├── regional-landscape-area.png
│   │   ├── card-anz.png
│   │   ├── card-china.png
│   │   ├── card-japan.png
│   │   ├── card-sea.png
│   │   └── card-future.png
│   └── svg/
│       ├── market-wechat.svg
│       ├── market-line-whatsapp.svg
│       └── future-network.svg
└── src/
    ├── index.html
    ├── styles.css
    ├── design-tokens.css
    └── content.json
```

## Important design notes

- Keep the homepage concise, but not empty.
- Five market cards must appear in the first visual field.
- Market cards should emphasize ecosystem differences, not geography.
- China must feel clearly WeChat green.
- SEA must show LINE + WhatsApp, not WhatsApp only.
- Future Markets should feel expandable, not disabled/empty.
- NTT DATA should be present but not overly dominant on the first screen.
- The next scroll section should introduce “How NTT DATA makes it work.”

## Market card hierarchy

Each card uses the same content hierarchy:

1. Market name
2. One ecosystem positioning sentence
3. Three evidence points
4. Three tags
5. CTA arrow

Do not add long paragraphs inside the cards.
