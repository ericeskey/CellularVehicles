# Editorial Signal
**The design system for Dark Horse Works.**

Editorial Signal is the visual and verbal operating system behind Dark Horse Works, the firm creating the **Demand Discovery** category. It is built for enterprise innovation and strategy leaders making expensive bets under uncertainty — an audience that distrusts consulting theater and rewards clarity, restraint, and proof.

This system is editorial, restrained, and premium. Whitespace and typography do the work. Decoration is forbidden. Every visual choice should reduce noise and amplify signal.

---

## Sources

This system was built from the following inputs. The user may reattach or grant access to any of these.

- `uploads/Reference 1.png` — Homepage hero reference. Heavy grotesque display, warm off-white background (`#F2F0EB`), a fine top rule in black, editorial sub-paragraph in mid-grey, and a thin black-bordered "business card" marker in the bottom-right corner. Establishes the *hero* voice.
- `uploads/Reference 2.png` — Section-break reference. Eyebrow label in caps-tracked grotesque ("THE MOMENT"), soft-humanist display headline, deliberate sentence-per-line rhythm, and a left-rule pull-quote. Establishes the *editorial / narrative* voice.
- Verbal reference: [wearemotto.com](https://wearemotto.com) — restrained, editorial, confident. *Variation on this system, not a clone.*

No codebase or Figma was attached. All interface components in this system are **invented to the spec above** — the hero, the section-break, and Motto's vocabulary of restraint. If a real site/app codebase exists, reattach it and this system will absorb it.

---

## Core principles

1. **Restraint over decoration.** Whitespace, typography, and rhythm do the heavy lifting. No gradients. No drop shadows. No rounded corners. No stock photography.
2. **Editorial, not corporate.** The system borrows from serious print journalism — strong display type, confident hierarchy, generous margins, sharp rules.
3. **Signal over noise.** Visual contrast is reserved for moments that matter: a decision threshold, a proof point, a reveal. Everything else recedes.
4. **Sharp edges.** Border radius is `0px` everywhere. Nothing softens the edge. Decisions are sharp; the design is too.
5. **Premium without pretense.** Executive feel, but human. No expertise theater, no capability laundry lists.

---

## What it rejects

- Rounded corners, soft shadows, gradients
- Stock-heavy consulting imagery
- Cute agency aesthetics
- Capability grids, service tiles, "Solutions" labels
- Methodology explained before commercial relevance
- Emoji, decorative icons, illustrative SVGs

---

## Content fundamentals

**Voice: the calm expert who refuses to oversell.** Short, declarative sentences. First person *we* is rare and reserved; prefer naming the thing directly. Speak to the reader as *you*. Diagnose the problem before selling the cure.

**Register and tone.**
- Short sentences. One idea per line.
- Active voice. Plain English.
- No jargon, no consulting filler, no "synergies," no "unlock."
- No exclamation marks, ever.
- No emoji. No decorative unicode.
- No all-caps on paragraphs; ALL CAPS is reserved for **eyebrows**, wordmarks, and display moments.

**Casing rules.**
- Headlines: sentence case *or* ALL CAPS — both are valid; pick by context. Hero moments lean ALL CAPS (Reference 1). Narrative section headers lean sentence case (Reference 2).
- Eyebrows / kickers: ALL CAPS, tracked `+0.12em`.
- UI labels, buttons, captions: sentence case. Never Title Case.
- Category names ("Demand Discovery") are capitalized as a proper noun on first use, then lowercased when generic.

**Punctuation.**
- **Avoid the em dash.** It is the single loudest machine tell in modern copy. Use a period, a colon, or a comma, or rebuild the sentence. Reserve the em dash for a rare genuine interruption nothing else carries, and expect to defend it. (The references use em dashes freely; this standard supersedes them.)
- Use curly quotes: `"love it"` not `"love it"`.
- Lists are sparing. Prefer sentences.
- Everything in copy runs through **The Tell** before it ships. See `THE-TELL.md`.

**The Tell: keep the machine out.**
Our differentiation is human judgment, and judgment is visible only in the details a model would have smoothed away. Before any copy or design ships, run it as a separate editing pass against the tells in `THE-TELL.md`: em-dash seams, reframe-by-negation ("not just X, it's Y"), the reflexive rule of three, buzzword fog (delve, leverage, unlock, seamless, robust), flat rhythm, and the template skeleton. One real tell sends the work back. Any tell may be broken on purpose by someone who can say why; the crime is the default, not the deliberate exception.

**What to lead with.**
- Category + outcome first. Method second.
- Relief and clarity, not expertise.
- Real copy only — no lorem, no placeholder, no filler.

**Voice examples (lifted from references).**

> CUSTOMERS LOVE IT. REVENUE SAYS OTHERWISE.

> You're burning runway in a market full of interest. The demand isn't real. Demand Discovery reveals what customers will actually pay for, so you stop chasing mirages and win as the dark horse.

> THE MOMENT
> This is where most founders get stuck:
> You've done the interviews.
> Customers say they "love it."
> The team feels momentum.
> **But revenue doesn't move.**

> You're not failing.
> You're chasing false demand: signals that feel good but don't convert.

Note the rhythm: one short line, one short line, one short line, then a **bold** turn. Then a rule-marked stanza delivering the reframe.

---

## Visual foundations

### Palette
A near-monochrome palette. Two neutrals, one accent, one signal.

- **Paper** `#F2F0EB` — the base canvas. Warm off-white. Never pure `#FFFFFF`. Gives the page a printed, tactile quality.
- **Ink** `#0A0A0A` — near-black for primary type, rules, and the signal moments.
- **Ash** `#6B6862` — mid-grey for secondary prose. The voice of the narrator.
- **Fog** `#C8C4BB` — low-contrast rules, dividers, disabled states.
- **Bone** `#E6E3DC` — a slightly darker shade of paper for section bands and card fills.
- **Signal** `#D64A1F` — a single, restrained editorial red. Used only on moments that matter: a proof threshold, a reveal, a decision marker. Never decorative. If you're using it more than once per screen, you're using it wrong.

Dark mode inverts to `Ink → Paper`, `Paper → #0A0A0A`, Signal stays `#E65A2F` (slightly brighter for contrast). See `colors_and_type.css`.

### Type
Three families. No more.

- **Display & UI (grotesque):** **Inter** — loaded 400 / 500 / 700 / 900. The workhorse. Reference 1's hero is Inter Black at tight tracking (`-0.03em`). UI uses Inter 400/500.
- **Editorial accent (serif):** **Instrument Serif** — for pull-quotes, editorial headlines, and single-word moments where a serif deepens the editorial register. Used sparingly.
- **Mono (eyebrows, metadata, code):** **JetBrains Mono** — for ALL-CAPS eyebrows, coordinates, metadata, and technical labels. 400 only.

> **Font substitution flag.** No custom brand font files were provided. Inter, Instrument Serif, and JetBrains Mono are the **nearest Google Fonts matches** to the two references. If you have a licensed grotesque (e.g. Neue Haas Grotesk, Söhne, GT America) or editorial serif (e.g. GT Super, Tiempos), drop the TTFs into `fonts/` and update `colors_and_type.css`. **Ask the designer before shipping public brand work.**

### Type scale
A 1.25 modular scale anchored at 16px body. Purposely few sizes.

```
display-xl   72px / 0.95 / -0.035em   Inter 900
display-l    56px / 1.00 / -0.03em    Inter 900
display-m    40px / 1.05 / -0.025em   Inter 700
h1           32px / 1.15 / -0.02em    Inter 700
h2           24px / 1.25 / -0.015em   Inter 500
h3           18px / 1.35 / -0.01em    Inter 500
body-l       18px / 1.55                Inter 400
body         16px / 1.6                 Inter 400
body-s       14px / 1.55                Inter 400
eyebrow      12px / 1.0  / +0.14em    JetBrains Mono 400 UPPER
caption      12px / 1.4                 Inter 400
```

### Spacing
Based on an 8px grid. Purposely limited.

`4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192`

Prefer `64 / 96 / 128` for vertical section rhythm. Use `24 / 32` inside cards.

### Layout
- **Max content width:** 1280px (72rem). Inside, text measures cap at **68ch**.
- **Side margins:** `clamp(24px, 5vw, 80px)`.
- **Columns:** 12-col grid, but designs usually *refuse* to fill it. A hero is typically cols 1–9 with cols 10–12 intentionally empty.
- **Vertical rhythm:** hero screens get `min-height: 82vh` so the first fold has space to breathe. Never cram.

### Backgrounds and imagery
- **No gradients. No background photography. No decorative illustration.**
- Background is always `Paper` (`#F2F0EB`) or `Bone` (`#E6E3DC`) for section bands.
- A fine `Ink` rule at the top of the page (`3px`) acts as an editorial masthead — see Reference 1.
- If imagery is ever introduced (e.g. a portrait in an "About" section): black-and-white, matte grain, no saturation, no duotone filter. Single image per page, max.

### Corners, borders, and rules
- **Border radius: `0` everywhere.** No exceptions.
- **Hairlines:** `1px solid #0A0A0A` for foreground rules; `1px solid #C8C4BB` for backgrounded dividers.
- **Top masthead rule:** `3px solid #0A0A0A`, flush to the top of the viewport.
- **Left-rule pull-quotes:** `3px solid #0A0A0A` on the left edge, `24px` of inside padding.
- **Card borders:** `1px solid #0A0A0A`. Card fill is `Paper` or `Bone`. No shadow.

### Shadows and elevation
- **None.** There is no elevation system. Depth is expressed by hierarchy, rule weight, and whitespace — not by shadow.
- The only "floating" element pattern in the system is the **Marker Card** (see Reference 1, bottom-right): a `Paper`-filled, `1px Ink`-bordered card pinned to a corner. It is sharp; it does not lift.

### Iconography
- **Emoji: never.**
- **Decorative icons: never.** No icon-on-every-card feature grids.
- **Functional icons only**, at the smallest scale that still reads (16–20px), `1.5px` stroke, `Ink` color. Examples: chevron, arrow, external-link, theme-toggle (sun/moon).
- Icon system: **Lucide** (CDN) — closest public-domain match to the hairline grotesque stroke weight implied by the references. If a branded icon set exists, replace. See `ICONOGRAPHY.md`.

### Motion
- **Ease:** `cubic-bezier(0.2, 0.8, 0.2, 1)` — a confident, restrained curve. No bouncing. No overshoot.
- **Durations:** `150ms` for micro-interactions (hover, toggle), `300ms` for state changes, `600ms` max for section entrances.
- **Page loads:** a single fade-in-and-rise (`opacity 0→1`, `translateY 8px→0`). Once. Never stagger ten elements.
- **Scroll:** no parallax. No scroll-jacking. No reveal-on-scroll cascades.

### Hover, focus, press
- **Text link hover:** underline appears (`text-decoration-thickness: 2px`, `text-underline-offset: 4px`). No color change.
- **Button hover (primary, `Ink`):** background shifts to `#1A1A1A`. No scale, no shadow.
- **Button hover (ghost):** background fades to `rgba(10,10,10,0.04)`.
- **Press:** `translateY(1px)` for tactile feedback. No scale.
- **Focus:** `2px solid Ink` outline, `2px` offset. Visible. Never hidden.
- **Disabled:** `opacity: 0.35`. No greying.

### Transparency and blur
- **Blur is not in the system.** No `backdrop-filter`. No frosted glass.
- Transparency is used only for hover overlays (`rgba(10,10,10,0.04)`) and disabled states (`opacity: 0.35`).
- Sticky navs are opaque `Paper` with a `1px` bottom rule.

### Cards
A card is a `1px solid Ink` rectangle, `Paper` or `Bone` filled, `24–32px` internal padding. No shadow. No rounding. No hover lift.

### Density
Low density. If in doubt, add whitespace, not content.

---

## Index of this design system

### Root
- `README.md` — this file. Start here.
- `SKILL.md` — makes this system invocable as an Agent Skill.
- `colors_and_type.css` — all design tokens. The single source of truth.
- `ICONOGRAPHY.md` — iconography rules and substitutions.
- `THE-TELL.md` — the anti-AI-tell standard for copy and design. Run before anything ships.

### Folders
- `fonts/` — web font files. *(Currently empty — we load via Google Fonts CDN. Drop licensed brand fonts here to override.)*
- `assets/` — logos, marks, background images. The visual hard goods.
- `preview/` — Design System tab cards. One HTML per concept.
- `ui_kits/site/` — the Dark Horse Works marketing site UI kit. React components + an interactive `index.html` demonstrating a real view of the site.
- `slides/` — sample slides using this system: title, section divider, big-quote, comparison, proof, closing.

### Using this system
1. Link `colors_and_type.css` in your HTML `<head>`.
2. Use the CSS variables — never raw hex values, never raw px.
3. Write copy against the Content Fundamentals section above, not against your instinct.
4. When in doubt: take something away.

---

## Caveats

- **No real codebase, Figma, or slide deck was attached.** Everything in this system was invented against two reference screenshots and the Motto verbal reference. If a real site/app codebase exists, reattach it and the UI kit should be redrawn from it.
- **Fonts are Google Fonts substitutions.** Inter, Instrument Serif, and JetBrains Mono are the closest public-domain matches to the references. If licensed brand fonts exist (e.g. Söhne, GT America, GT Super, Tiempos), drop them into `/fonts` and update `colors_and_type.css`.
- **Iconography is Lucide** — substituted because no branded icon set was provided.
- **Palette** (especially Signal red `#D64A1F`) is inferred from editorial conventions and the overall restraint, not from any brand asset. Please confirm or provide the correct hex.
