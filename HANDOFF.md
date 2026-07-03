# Handoff — ARMI_IDI (Catherine) Seven Lenses site

## What this project is
The "Seven Lenses" site, repurposed from the original interview (**R01 Martin**, MiSeq sequencing) to a new interview: **IDI01 Catherine**, Operations & Scientific Director at a hospital cell-therapy facility. Subject: the operational burden a treatment site absorbs when sponsors ship cell-therapy products that don't fit hospital reality (multi-bag doses, 30-min post-thaw expiries, an 18-vial / 4-hour OR case, missed FedEx cutoffs, sponsors mistaking regulation for hospital obstruction).

**The finding all seven lenses converge on:** *"The burden the site absorbs is authored upstream"* — container count, stability window, protocol, and device are all fixed before the product ever ships.

**Anchor:** `index.html`. The Convergence Engine pages (`The Convergence Engine*.html`, `Demo Storyboard.html`, `Handoff.html`) are a separate Martin-based demo, governed by `CLAUDE.md`, and are intentionally left as-is — out of scope for the Seven Lenses conversion.

## Status — COMPLETE, all in Catherine's voice (verified)
Every live page renders Catherine content, no console errors, correct data-driven counts.

- `index.html` — hero, finding, subject/dossier, 7 lens cards, ladder bands, closing. **Film band plays the real narrated film** (`media/documentary/eighteen-vials.mp3`), inline player shares resume position with the film page.
- `concepts/the-documentary.html` (**The Film**) — narrated documentary "Eighteen Vials and a Four-Hour Clock" (host = Michael narration; tape = Catherine). 10 chapters. Audio `media/documentary/eighteen-vials.mp3`.
- `concepts/the-session.html` — 15 moments, 3 peaks, keystone NE-003, her transcript (Daniel = interviewer / sp S, Catherine = participant / sp M). Audio `uploads/IDI01_audio.mp3` (full interview, 1926s).
- `concepts/the-constellation.html` (Explore Map+Field) + `-read` + `-listen` — 3 narratives. **Read + Listen have working audio** (`media/constellation/ns-001..003.mp3`), shared resume/duration cache (keys `constellation_*_v3`).
- `concepts/the-shift.html` (Ranked) + `-graded` (Graded) — 9 transformations, 3 frames.
- `concepts/the-ledger.html` (Explore) + `-read` (article) + `-listen` — 6 skills. **Listen has working audio** — 3-episode series (`media/ledger/01..03.mp3`), keys `ledger_*_v2`. (The Read article has no per-episode player by design.)
- `concepts/the-keystone.html` — 6 cruxes, keystone = crux_001 upstream lock-in.
- `concepts/the-opportunity.html` — 24 outcomes, matrix (importance × satisfaction, served diagonal bottom-left→top-right), 6 job maps.
- `concepts/the-casefile.html` — 8 concerns (CONC001–008), 52-atom registry, 6 cruxes, 6 evidence gates, 6 decision briefs. All concern→cause→atom→quote lookups resolve.

## Architecture (data-driven)
Each lens page reads global JS data files and renders. Shared spine `data.js`: `RESEARCH.meta / events (15 NE) / peaks (3 NP) / narratives (3 NS) / transformations (9 tx) / skills (6 sk) / stages (5)`.
Catherine data files: `catherine-data.js` (Convergence-Engine atoms), `crux-data.js` (atoms dict keyed `IDI01.OA###` + 6 cruxes), `casefile-atoms.js` (52-atom registry, array `[loc,conf,obs,quote]`), `casefile-data.js` (`window.CASE`, 8 concerns), `casefile-bridge.js` (crux short-names, evidence gaps, decision spine), `odi-data.js` (24 outcomes, 6 jobs), `shift-scales.js` (3 frames), `shift-shifts-15.js` (9 shifts × 7 rungs), `session-replay.js` (transcript + eventAt + audioDur), `constellation-content.js` (3 stories, each with `audio`), `ledger-content.js` (article + 3 episodes, each with `audio`), `documentary-content.js` (film script blocks).
Source data: WHALE_HUNT pipeline `.md` files in `uploads/` (prefixed `1.x`/`2.x` = Catherine). The `uploads/TS-999_replay_transcript.md` and non-prefixed dupes are leftover Martin source — never rendered.

## Conventions & gotchas
- **Audio players tolerate missing duration headers.** Some mp3s report `NaN` duration / `[0,NaN]` seekable; guards fall back to a known duration (`SR.audioDur`, `durOf()`, `knownDur`) so seeking, scrub, and chapter math still work. The Session/Documentary players and both Listen players carry this.
- **`load()` metadata handler is guarded** (`if (loaded !== i) return;`) so clicking a second track before the first's metadata arrives can't write the wrong duration to the previous row.
- **Audio caches are versioned** (`_v2`/`_v3` suffixes on the localStorage keys). Bump the version whenever the mp3s behind the same paths change, or stale durations/positions stick.
- **fade-in must stay visible in export/screenshots:** base `.fadein{opacity:1}`; in `@media (prefers-reduced-motion:no-preference)` animate a keyframe that only moves `transform` (never opacity), or html-to-image capture goes blank.
- **shrink guard:** `run_script` `saveFile` refuses writes shrinking a file >50%; write to a `.tmp` then `copy_files` move over the original.
- **atom id format** is `IDI01.OA###` everywhere (dict keys, cruxes, concerns) so lookups resolve.
- **House style now avoids em dashes** (design-system THE-TELL) — colons/commas/parentheses instead. Keep new copy consistent.
- **Screenshot after edits:** always `show_html` (reload) before capturing.
- Verify each page with `ready_for_verification`.

## Housekeeping done
- Deleted the superseded lens snapshots `concepts/the-*-v1.html` (6) and parked Martin explorations `The Demo.html`, `The Listening.html`, `The Reading Room.html`, `reading-room.js`, `Category sentence - candidates.html`, `index - essential.html`, `index - sharpened.html`.
- Preserved the Convergence Engine demo ecosystem (`The Convergence Engine*.html`, `Demo Storyboard.html`, `Handoff.html`, `The Reorganization*.html`, `The Lens Field.html`, ideation `.jsx`/reveal files) per `CLAUDE.md`. Note: `Handoff.html`'s file inventory now references a few deleted parked files.
