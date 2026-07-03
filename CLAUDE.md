# Whale Hunt — Demand Discovery demo

**The demo is one file: `The Convergence Engine.html`.** Single canvas. Principles to hold: continuity, one substrate, honest data, signal used once. Apply the Drawbackwards / Ward Andrews POV — subtract to the essential, dissolve complexity, keep each beat focal. Use the Ladder (functional → meaningful) as a hidden judgment lens, not on-screen language.

Beat order: intro (demand-discovery starting point) → four competing reads (focal walk) → the turn (assumptions → evidence) → meet Martin → examine the interview (substrate → 7 readings → re-sort by job) → the reckoning (recap → judged).

## Open tasks / do not forget
- **Meet-Martin audio clip.** The beat currently plays `media/session/replay.mp3` with a JS clip-window (CLIP_START=255s, CLIP_END=303s — Martin's "guy for everything" self-intro). This relies on seeking into the full interview, which the dev server does NOT reliably honor — playback often starts at 0 (the preamble) instead of 255s. **Fix:** the user will produce a pre-trimmed standalone clip of just Martin's self-introduction. When it exists, point `#martinAudio` src at it and simplify the player (remove the CLIP_START/CLIP_END seek logic; play from 0, use the file's own duration).
