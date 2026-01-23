# Is This Everything? 

**Revealing questions, one at a time.**

Is This Everything?  is a mobile-first Progressive Web App (PWA) that generates intentional question decks for couples.  
No gotchas. No games. You’re gathering data, not arguing.

---

## What this is

Is This Everything?  is designed to support **slow, high-signal conversations** between partners.

Instead of novelty prompts or conflict-driven questions, the app focuses on surfacing how each person:
- Thinks about partnership
- Regulates emotionally
- Communicates under stress
- Understands contribution, boundaries, and shared reality

The app is intentionally paced. It encourages asking **one question per conversation**, allowing silence, and resisting the urge to explain or defend.

---

## Key features

- Mobile-first UI optimized for phones
- Installable PWA (offline-capable)
- Randomly generated question decks
- Adjustable deck size (5, 8, or 12 cards)
- Tone selection (Gentle, Neutral, Direct, or Mixed)
- Topic exclusions (e.g., avoid money)
- One-question-at-a-time card flow
- Save and revisit meaningful questions
- Fully local storage (no backend, no accounts)

---

## Tech stack

- **Vite** – build tool and dev server
- **React + TypeScript** – UI and application logic
- **Tailwind CSS** – mobile-first styling
- **vite-plugin-pwa** – PWA support and service worker
- **IndexedDB (via idb-keyval)** – local persistence
- **Sharp** – icon generation from SVG source

---

## Project structure

```
src/
  app/            # App shell and routing
  data/           # Question dataset
  domain/         # Types and deck-generation logic
  pages/          # Home, Deck, and Saved views
  storage/        # IndexedDB helpers
  ui/             # Reusable UI components
public/
  favicon.svg
  pwa-192.png
  pwa-512.png
scripts/
  generate-icons.mjs
```

---

## Getting started

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
npm install
```

### Run in development
```bash
npm run dev
```

---

## Build and preview (PWA mode)

To test installability and service worker behavior, use a production build:

```bash
npm run build
npm run preview
```

By default, the app will be available at:

```
http://localhost:4173
```

---

## Installing the app

### Desktop (Chrome)
- Open the preview URL
- Look for the install icon in the address bar or Chrome menu
- Select **Install Is This Everything?**

### iOS (Safari)
- Open the app
- Tap **Share**
- Select **Add to Home Screen**

Note: Full PWA behavior on iOS requires HTTPS. Local IP testing may appear as a web clip.

---

## PWA icons

Icons are generated from a single SVG source.

### Generate icons
```bash
node scripts/generate-icons.mjs
```

This produces:
- `public/pwa-192.png`
- `public/pwa-512.png`

These are referenced by the web manifest for installability.

---

## Data model (simplified)

Each question includes metadata used for intelligent deck generation:

- Category (intent, accountability, communication, etc.)
- Tone (gentle, neutral, direct)
- Intensity (1–3)
- Tags (used for filtering and exclusions)
- Optional notes explaining what the question diagnoses

Deck generation enforces:
- At most one anchor question per deck
- Balanced category distribution
- Non-repetitive sequencing
- Safe swaps within the same category and intensity

---

## Design philosophy

This app is not a therapy tool and not a game.

It is a **conversation instrument**.

The UI, copy, and interaction model are designed to:
- Reduce defensiveness
- Encourage reflection over reaction
- Avoid escalation
- Support shared reality instead of persuasion

---

## Privacy

- No accounts
- No analytics
- No network calls
- All data stays on the user’s device

---

## Future enhancements (optional)

- Daily single-question mode
- Timed “one question only” lock
- Deck sharing via QR code (local session)
- HTTPS deployment for full mobile PWA support
- Optional exports (printable decks)

---

## Status

Functional and installable.  
Designed for intentional use, not rapid consumption.

---

**Ask one question.  
Don’t explain why.  
Let silence do the work.**
