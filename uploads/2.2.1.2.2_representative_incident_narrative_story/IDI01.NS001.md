---
run_id: RUN_FIRST_LIVE_IDI01_XHIGH_FOUNDATION
corpus_id: WHALE_HUNT
transcript_id: IDI01
stage_id: 2.2.1.2.2
stage_name: representative_incident_narrative_story
branch_id: IDI01.NS001
prompt_version: "1.0.0"
schema_version: "1.0.0"
model: gpt-5.5
model_profile: strongest_reasoning
input_artifacts:
  - /Users/ericeskey/Documents/Codex/runs/RUN_FIRST_LIVE_IDI01_XHIGH_FOUNDATION/outputs/IDI01/2.2.1.2.1_narrative_structure_discovery.md
created_at: 2026-07-01T17:38:26-07:00
---

```yaml
representative_incident_stories:
  - id: "IDI01.RIS001"
    local_id: "RIS001"
    transcript_id: "IDI01"
    corpus_id: "WHALE_HUNT"
    run_id: "RUN_FIRST_LIVE_IDI01_XHIGH_FOUNDATION"
    selected_narrative_id: "IDI01.NS001"
    title: "Eighteen Vials and a Four-Hour Clock."
    story_markdown: |-
      # Eighteen Vials and a Four-Hour Clock

      The fit Catherine wants is concrete: a "single bag or vial" that can be thawed and given.

      The format she has to account for can look like "18 individual vials." The dose splits into separate containers. Each added container adds post-thaw work before administration can happen. With some presentations, "it can take three hours." The product still has to be used "within four hours."

      The reversal is quiet but severe. The container choice is made before the hospital work begins; the time burden appears after thaw. Catherine's question goes back to the fill step: "Why didn't they do that when they filled the bag?"

      By administration, the site is no longer solving a simple handling preference. It is trying to fit repeated thaw-and-prep work inside a clock that nearly closes while the work is being done. For Catherine, in a large hospital, the boundary is already visible: "Impossible. Impossible in a large hospital."

      ## What Changed

      **Before:** Post-thaw handling looked like a place where a product could be made simpler to give.

      **After:** Container count, thaw work, and expiration windows became constraints that could make delivery infeasible.

      **Now the reader notices:** A therapy can fail operationally at the point where its product presentation meets the hospital clock.
    representative_incident_summary: "An 18-vial product format collides with post-thaw handling time and a four-hour use window, carrying the broader truth that product presentation can determine delivery feasibility."
    fidelity_note: "The story uses only the stated container count, timing window, handling burden, and large-hospital constraint, without adding dialogue, motives, setting details, outcomes, statistics, or recommendations."
    source_refs:
      - transcript_id: "IDI01"
        location: "md:line:0035"
        evidence_quote: "single bag or vial"
      - transcript_id: "IDI01"
        location: "md:line:0036"
        evidence_quote: "it can take three hours"
      - transcript_id: "IDI01"
        location: "md:line:0052"
        evidence_quote: "Impossible. Impossible in a large hospital."
      - transcript_id: "IDI01"
        location: "md:line:0055"
        evidence_quote: "Why didn't they do that when they filled the bag?"
      - transcript_id: "IDI01"
        location: "md:line:0061"
        evidence_quote: "18 individual vials"
      - transcript_id: "IDI01"
        location: "md:line:0067"
        evidence_quote: "within four hours"
    derived_from:
      - "IDI01.NS001"
    confidence: "Low"
    notes: null

verification:
  schema_valid: true
  id_format_valid: true
  required_fields_complete: true
  source_refs_present: true
  derived_from_refs_valid: true
  downstream_ready: true
  transcript_id_prefix_applied: true
  selected_narrative_matched: true
  no_research_process_mentions: true
  no_invented_details_review_complete: true
  warnings: []
```
