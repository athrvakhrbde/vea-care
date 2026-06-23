# VEA Care

Minimal, premium redesign of [veacare.com](https://veacare.com/) — proactive lower-limb wellness.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- Custom design system with CSS tokens

## Design System

Tokens live in `src/design-system/tokens.css`. Components in `src/design-system/`:

| Component | Purpose |
|-----------|---------|
| `Button` | Primary, secondary, ghost, outline, inverse variants |
| `Heading` | Display + h1–h4 + label typography |
| `Text` | Body copy with size/tone variants |
| `Container` | Max-width layout wrapper |
| `Section` | Page sections with variant backgrounds |
| `Badge` | Product tags and labels |
| `Input` | Form fields |
| `Divider` | Horizontal/vertical rules |

### Color Palette

- **Ink** `#0a0a0a` — primary text, dark sections
- **Stone** `#f7f5f1` — warm off-white backgrounds
- **Sage** `#5c6b5e` — accent, links, highlights
- **Warm** `#b8956f` — ratings, sale badges

### Typography

- **Inter** — unified sans-serif for all UI, headings, and body (Swiss modernist grotesque)

## Getting Started

Requires Node.js ≥ 20.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/shop` | Product listing |
| `/shop/[slug]` | Product detail |
| `/why-vea` | Brand philosophy |
| `/about` | About VEA |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post |
| `/contact` | Contact + FAQ |

## Build

```bash
npm run build
npm start
```
