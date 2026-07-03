---
run_id: RUN_FIRST_LIVE_IDI01_XHIGH_FOUNDATION
corpus_id: WHALE_HUNT
transcript_id: IDI01
stage_id: 2.2.1.1
stage_name: narrative_documentary_podcast_script
branch_id: IDI01.NPK003
prompt_version: "1.0.0"
schema_version: "1.0.0"
model: gpt-5.5
model_profile: strongest_reasoning
input_artifacts:
  - /Users/ericeskey/Documents/Codex/runs/RUN_FIRST_LIVE_IDI01_XHIGH_FOUNDATION/outputs/IDI01/1.0_observation_atoms.md
  - /Users/ericeskey/Documents/Codex/runs/RUN_FIRST_LIVE_IDI01_XHIGH_FOUNDATION/outputs/IDI01/2.0_narrative_events.md
  - /Users/ericeskey/Documents/Codex/runs/RUN_FIRST_LIVE_IDI01_XHIGH_FOUNDATION/outputs/IDI01/2.2.1.0_narrative_peak_detection.md
created_at: 2026-07-01T17:35:20-07:00
---

```yaml
podcast_episode_scripts:
  - id: "IDI01.EP001"
    local_id: "EP001"
    transcript_id: "IDI01"
    corpus_id: "WHALE_HUNT"
    run_id: "RUN_FIRST_LIVE_IDI01_XHIGH_FOUNDATION"
    selected_peak_id: "IDI01.NPK003"
    episode_title: "Build It Into the Workflow"
    cold_open: "A new tool sounds promising. But Catherine says adoption cannot begin at the hospital door. It has to be in the filing, in the validation, and in the hands of the people who use it every day."
    script_markdown: |-
      HOST:
      Catherine has spent this conversation naming the places where cell therapy workflows break down: the thaw, the clock, the handoff, the hospital realities that sponsors may not see.

      But near the end, the story turns.

      The question is no longer only: what is broken?

      It becomes: what would make something new actually work?

      CATHERINE:
      put that into their IND

      HOST:
      That is the first gate.

      If an automated prep system, or any new device, shows up late, Catherine says the sponsor may not be able to use it. Not because the idea is bad. Because the process has already been described another way.

      CATHERINE:
      that's not how they told the FDA

      HOST:
      So the future cannot simply be dropped into the present.

      It has to be written in early.

      CATHERINE:
      validation package

      HOST:
      A validation package. The specific instrument. The specific workflow. The evidence that this is not just an interesting gadget, but something the site can stand behind.

      For Catherine, adoption is not a moment of enthusiasm. It is a chain of proof.

      CATHERINE:
      from start to finish

      HOST:
      From start to finish.

      That phrase matters because the hospital is not an empty room waiting for innovation. It is a daily operating system. Staff, patients, protocols, accreditation, product handling, documentation, timing.

      A new system has to fit all of that.

      CATHERINE:
      every day who's gonna use it

      HOST:
      Every day, who is going to use it?

      That is Catherine's test. Not whether a technology sounds elegant. Not whether it solves a problem in theory. Whether it works in the hands of the people who have to use it when the product is thawed, the patient is waiting, and the clock is already running.

      CATHERINE:
      if it doesn't work

      HOST:
      If it does not work there, then it does not work.

      And then Catherine says something that changes the emotional temperature of the interview.

      After all the friction, all the mismatch, all the explanations she has to give, she does not step away from the problem. She leans toward it.

      CATHERINE:
      first person who's ever called and asked me for input

      HOST:
      She says this is the first time someone has called and asked for her input.

      That line lands because, throughout the conversation, Catherine has been describing what happens when site realities arrive too late: after the protocol, after the product design, after the assumptions have hardened.

      Here, she is being asked earlier.

      CATHERINE:
      future for, for patient access

      HOST:
      For Catherine, that future is not abstract. It is tied to patient access.

      But she does not make the ending too neat. She does not say the gap is closed. She says she wants to keep giving input. She sees the gap. And she sees herself inside the system that has to change.

      CATHERINE:
      I'm part of the problem as well

      HOST:
      That is the unresolved turn.

      Not blame. Not a finished solution.

      A site-side expert saying: bring us in early, prove it on the actual workflow, make it usable for the people who touch it every day — and maybe the future becomes something the hospital can actually adopt.
    tape_plan:
      - quote: "put that into their IND"
        purpose: "Establishes the first adoption condition: the technology or workflow must be included upstream in the sponsor's regulatory path."
        source_ref:
          transcript_id: "IDI01"
          location: "md:line:0127"
          evidence_quote: "put that into their IND"
      - quote: "that's not how they told the FDA"
        purpose: "Shows why late-stage adoption can fail even when the idea is appealing."
        source_ref:
          transcript_id: "IDI01"
          location: "md:line:0127"
          evidence_quote: "that's not how they told the FDA"
      - quote: "validation package"
        purpose: "Introduces the proof burden the hospital needs before accepting a new system."
        source_ref:
          transcript_id: "IDI01"
          location: "md:line:0128"
          evidence_quote: "validation package"
      - quote: "from start to finish"
        purpose: "Captures Catherine's core condition that adoption must be co-designed across the whole workflow."
        source_ref:
          transcript_id: "IDI01"
          location: "md:line:0129"
          evidence_quote: "from start to finish"
      - quote: "every day who's gonna use it"
        purpose: "Shifts the adoption test from technical novelty to daily-user fit."
        source_ref:
          transcript_id: "IDI01"
          location: "md:line:0176"
          evidence_quote: "every day who's gonna use it"
      - quote: "if it doesn't work"
        purpose: "Gives a blunt practical standard for whether innovation succeeds."
        source_ref:
          transcript_id: "IDI01"
          location: "md:line:0178"
          evidence_quote: "if it doesn't work"
      - quote: "first person who's ever called and asked me for input"
        purpose: "Creates the late emotional turn: Catherine feels asked into the design conversation rather than left to receive finished decisions."
        source_ref:
          transcript_id: "IDI01"
          location: "md:line:0182"
          evidence_quote: "first person who's ever called and asked me for input"
      - quote: "future for, for patient access"
        purpose: "Connects the workflow conversation to Catherine's broader stake in patient access."
        source_ref:
          transcript_id: "IDI01"
          location: "md:line:0186"
          evidence_quote: "future for, for patient access"
      - quote: "I'm part of the problem as well"
        purpose: "Preserves the unresolved ending: Catherine opts into helping close the gap without claiming the problem is solved."
        source_ref:
          transcript_id: "IDI01"
          location: "md:line:0192"
          evidence_quote: "I'm part of the problem as well"
    scene_plan:
      - scene_index: 1
        scene_title: "The future cannot be dropped in late"
        peak_ids:
          - "IDI01.NPK003"
        dramatic_function: "Creates pressure around the idea that a promising automated prep system may fail if it is not already built into the sponsor's regulatory and workflow plan."
      - scene_index: 2
        scene_title: "The chain of proof"
        peak_ids:
          - "IDI01.NPK003"
        dramatic_function: "Turns adoption from enthusiasm into a practical burden of validation, specific instruments, and start-to-finish workflow alignment."
      - scene_index: 3
        scene_title: "The daily-user test"
        peak_ids:
          - "IDI01.NPK003"
        dramatic_function: "Moves the story from filings and validation to the people who must use the system every day."
      - scene_index: 4
        scene_title: "Asked early enough"
        peak_ids:
          - "IDI01.NPK003"
        dramatic_function: "Creates the emotional turn where Catherine feels invited into the solution rather than positioned as a late-stage obstacle."
      - scene_index: 5
        scene_title: "Inside the gap"
        peak_ids:
          - "IDI01.NPK003"
        dramatic_function: "Ends with unresolved commitment: patient access matters, the gap remains, and Catherine wants to help close it."
    source_refs:
      - transcript_id: "IDI01"
        location: "md:line:0127"
        evidence_quote: "put that into their IND"
      - transcript_id: "IDI01"
        location: "md:line:0127"
        evidence_quote: "that's not how they told the FDA"
      - transcript_id: "IDI01"
        location: "md:line:0128"
        evidence_quote: "validation package"
      - transcript_id: "IDI01"
        location: "md:line:0129"
        evidence_quote: "from start to finish"
      - transcript_id: "IDI01"
        location: "md:line:0176"
        evidence_quote: "every day who's gonna use it"
      - transcript_id: "IDI01"
        location: "md:line:0178"
        evidence_quote: "if it doesn't work"
      - transcript_id: "IDI01"
        location: "md:line:0182"
        evidence_quote: "first person who's ever called and asked me for input"
      - transcript_id: "IDI01"
        location: "md:line:0186"
        evidence_quote: "future for, for patient access"
      - transcript_id: "IDI01"
        location: "md:line:0192"
        evidence_quote: "I'm part of the problem as well"
    derived_from:
      - "IDI01.NPK003"
    confidence: "High"
    notes: null

verification:
  schema_valid: true
  id_format_valid: true
  required_fields_complete: true
  source_refs_present: true
  derived_from_refs_valid: true
  downstream_ready: true
  transcript_id_prefix_applied: true
  selected_peak_matched: true
  tape_fidelity_review_complete: true
  anti_essay_review_complete: true
  warnings: []
```
