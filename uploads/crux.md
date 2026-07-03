candidate_cruxes:
  - crux_id: crux_001
    crux_title: "Sequencing flow depends on fragile pre-run readiness"
    crux_statement: "Run continuity depends on sample sheets, denaturing, materials, and timing all being correct at the same moment."
    crux_type: workflow_constraint
    visible_tension: "Need smooth sequencing flow vs. fragile pre-run dependencies"
    why_it_might_be_a_crux: "Multiple problems converge before the run starts: sample sheet errors, fresh denaturing requirements, scattered chemicals, pH-sensitive reagents, and limited error guidance."
    supporting_atoms: [obs_029, obs_030, obs_031, obs_032, obs_035, obs_037, obs_040, obs_064, obs_067, obs_071, obs_072, obs_075]
    recurring_patterns: "Small upstream errors repeatedly delay or disrupt sequencing."
    upstream_conditions: "Manual setup, cryptic validation, freshness requirements, scattered materials, and chemistry sensitivity."
    downstream_consequences: "Rework, lost time, repeated denaturing, reliance on Martin, and workflow fragmentation."
    alternative_interpretations: "The issue may be user training, lab organization, or instrument UX rather than sequencing workflow design."
    leverage_hypothesis: "If pre-run readiness became dependable, run starts, delegation, and cadence might become easier."
    scope: workflow
    evidence_strength: High
    leverage_potential: High
    confidence: High

  - crux_id: crux_002
    crux_title: "Error recovery depends on expert intervention"
    crux_statement: "Non-expert users cannot reliably recover from common setup errors without Martin’s help."
    crux_type: capability_gap
    visible_tension: "Need delegation vs. dependence on expert troubleshooting"
    why_it_might_be_a_crux: "PhD students hit recurring sample sheet errors and must come to Martin; most errors are common but not surfaced clearly."
    supporting_atoms: [obs_031, obs_032, obs_033, obs_034, obs_035, obs_036, obs_037, obs_040, obs_041]
    recurring_patterns: "Common mistakes recur when new or less-experienced people prepare sample sheets."
    upstream_conditions: "Cryptic error messages, hidden formatting rules, and inconsistent user experience."
    downstream_consequences: "Martin is interrupted, students lose autonomy, and errors repeat."
    alternative_interpretations: "The crux may be onboarding discipline or lack of local SOPs."
    leverage_hypothesis: "If common errors became self-diagnosable, more work could be delegated."
    scope: team
    evidence_strength: High
    leverage_potential: High
    confidence: High

  - crux_id: crux_003
    crux_title: "Turnaround time breaks experimental momentum"
    crux_statement: "The delay between run completion, analysis, and next-run planning causes work to lose continuity."
    crux_type: bottleneck
    visible_tension: "Need experimental momentum vs. long run and analysis timing"
    why_it_might_be_a_crux: "Run times of 11–21 hours, uncertain completion timing, and 2–4 hour analysis make sequencing spill across days."
    supporting_atoms: [obs_099, obs_100, obs_101, obs_102, obs_103, obs_104, obs_105, obs_106, obs_107, obs_108, obs_109, obs_110]
    recurring_patterns: "Delayed output causes analysis and next-run decisions to fragment."
    upstream_conditions: "Long run duration, uncertain ETA, computational analysis time, and competing work."
    downstream_consequences: "Loss of focus, slower iteration, fewer routines, and longer gaps between runs."
    alternative_interpretations: "The limiting factor may be scheduling discipline rather than instrument speed."
    leverage_hypothesis: "If sequencing-to-analysis timing compressed, iteration and learning cadence might improve."
    scope: workflow
    evidence_strength: High
    leverage_potential: High
    confidence: High

  - crux_id: crux_004
    crux_title: "Physical placement separates the sequencer from the work"
    crux_statement: "The sequencer’s location and footprint separate it from the materials and workspace needed to run it smoothly."
    crux_type: structural_constraint
    visible_tension: "Need colocated work vs. oversized and displaced equipment"
    why_it_might_be_a_crux: "Width prevents placement in the PCR work area; the machine is in a separate cool room; required materials are not all nearby."
    supporting_atoms: [obs_055, obs_056, obs_057, obs_058, obs_059, obs_060, obs_061, obs_065, obs_067, obs_068, obs_069]
    recurring_patterns: "Work requires movement between sequencer, fridge, chemicals, ice, and workspace."
    upstream_conditions: "Machine size, lab layout, storage practices, and material dispersion."
    downstream_consequences: "More walking, more setup burden, unpleasant environment, and more friction during error recovery."
    alternative_interpretations: "The crux may be local lab organization rather than instrument footprint."
    leverage_hypothesis: "If sequencing work were physically integrated, setup and recovery might become smoother."
    scope: workflow
    evidence_strength: Medium
    leverage_potential: Medium
    confidence: Medium

  - crux_id: crux_005
    crux_title: "Manual low-level chemistry carries disproportionate risk"
    crux_statement: "A small manual chemistry step can jeopardize an otherwise complex sequencing workflow."
    crux_type: dependency
    visible_tension: "Need advanced molecular analysis vs. dependence on fragile low-level chemistry"
    why_it_might_be_a_crux: "Denaturing is fresh, pH-sensitive, annoying, outside core expertise, and capable of destroying an experiment if done wrong."
    supporting_atoms: [obs_062, obs_064, obs_070, obs_071, obs_072, obs_073, obs_074, obs_075, obs_117, obs_118]
    recurring_patterns: "Denaturing appears repeatedly as a disliked, risky, time-sensitive precondition."
    upstream_conditions: "Chemistry requirements, freshness constraints, pH instability, and manual preparation."
    downstream_consequences: "Rework, anxiety, delay, and possible experiment failure."
    alternative_interpretations: "The pain may reflect unfamiliarity or poor reagent management rather than the step itself."
    leverage_hypothesis: "If this dependency became less fragile, confidence and flow before sequencing might improve."
    scope: workflow
    evidence_strength: High
    leverage_potential: High
    confidence: High

  - crux_id: crux_006
    crux_title: "Workflow complexity exceeds one person’s cognitive bandwidth"
    crux_statement: "Martin’s role spans too many linked responsibilities for the workflow to remain easy to control."
    crux_type: coordination_failure
    visible_tension: "Need end-to-end control vs. overloaded central operator"
    why_it_might_be_a_crux: "Martin handles patient acquisition, lab work, library preparation, sequencing, analysis, visualization, supervision, and troubleshooting."
    supporting_atoms: [obs_011, obs_012, obs_013, obs_014, obs_016, obs_017, obs_033, obs_112]
    recurring_patterns: "Many workflow functions converge on Martin."
    upstream_conditions: "Small team structure, specialized bioinformatics capability, and recurring student errors."
    downstream_consequences: "Multitasking burden, interruptions, and limited delegation."
    alternative_interpretations: "This may be a local staffing issue rather than a sequencing process issue."
    leverage_hypothesis: "If responsibilities became less centralized, throughput and resilience might improve."
    scope: team
    evidence_strength: Medium
    leverage_potential: Medium
    confidence: Medium

ranked_candidate_cruxes:
  - rank: 1
    crux_id: crux_001
    rationale: "Best explains sample sheet friction, denaturing risk, material movement, rework, and timing disruption."
  - rank: 2
    crux_id: crux_005
    rationale: "Denaturing is the most explicit high-risk dependency and Martin’s stated top pain point."
  - rank: 3
    crux_id: crux_003
    rationale: "Run and analysis timing directly shapes workflow cadence and next-run momentum."
  - rank: 4
    crux_id: crux_002
    rationale: "Strong evidence, but narrower than the broader pre-run readiness crux."
  - rank: 5
    crux_id: crux_004
    rationale: "Meaningful physical constraint, but may be lab-specific."
  - rank: 6
    crux_id: crux_006
    rationale: "Important context, but less directly tied to the instrument/process evidence."

most_likely_crux:
  crux_id: crux_001
  crux_title: "Sequencing flow depends on fragile pre-run readiness"
  diagnosis: "The central leverage point is not one complaint; it is the dependency stack before the run. Sample sheet validity, denaturing freshness, material availability, machine location, and error recovery all have to align before sequencing can proceed smoothly."

alternative_cruxes:
  - crux_id: crux_005
    reason: "Martin explicitly names denaturing as the one thing he would remove."
  - crux_id: crux_003
    reason: "Turnaround time appears to govern workflow cadence and learning speed."
  - crux_id: crux_002
    reason: "Delegation breaks down when routine errors require expert recovery."

critical_uncertainties:
  - "How often do sample sheet errors materially delay runs?"
  - "How often does denaturing need to be repeated because of setup delays?"
  - "Which delay contributes more to lost cadence: pre-run setup, run time, or analysis time?"
  - "Do other users share Martin’s denaturing pain, or is it specific to his workflow?"
  - "How much of the friction comes from MiSeq design versus local lab organization?"

evidence_gaps:
  - "No direct observation of the workflow."
  - "No quantified frequency of failed or delayed runs."
  - "No comparison across other labs or users."
  - "No cost estimate for rework or delay."
  - "No independent evidence from PhD students or other operators."