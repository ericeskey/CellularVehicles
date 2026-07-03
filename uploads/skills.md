- skill_id: sk_001
  skill_name: Diagnosing Hidden Failure States
  skill_definition: "Identify opaque failure points and convert them into specific, actionable diagnoses."
  performed_transformations:
    - tx_002
  input_state: "A process fails, but the cause is hidden, vague, or cryptic."
  output_state: "The likely failure cause is visible, specific, and correctable."
  primary_frame: Operational Visibility
  supporting_frames:
    - Workflow Transformation
    - Expertise Reliance
  required_inputs:
    - failure event
    - current error message or symptom
    - expected valid state
    - common failure patterns
    - actor's attempted action
  method_summary: "Compare the failure symptom against recurring known failure patterns, identify the most likely hidden state, and express the diagnosis in corrective language."
  success_criteria:
    - "Failure cause is stated specifically."
    - "Actor knows the next corrective action."
    - "Diagnosis reduces need for expert escalation."
    - "Same failure can be recognized again."
  failure_modes:
    - "Treating symptoms as causes."
    - "Overfitting to one known error."
    - "Inventing causes not supported by evidence."
    - "Providing diagnosis without corrective action."
  evidence_base:
    transformations:
      - tx_002
    atoms:
      - obs_029
      - obs_030
      - obs_034
      - obs_035
      - obs_037
  repeatability: High
  teachability: High
  testability: High
  domain_scope: Domain-general
  workflow_position: diagnosis
  productization_potential: High
  confidence: High

- skill_id: sk_002
  skill_name: Converting Expert Workarounds Into User Guidance
  skill_definition: "Translate expert-dependent recovery behavior into instructions that trained non-experts can follow."
  performed_transformations:
    - tx_003
    - tx_011
  input_state: "A recurring task requires expert intervention because users lack the tacit knowledge to recover or avoid errors."
  output_state: "The task includes explicit guidance that enables users to recover from or prevent common errors."
  primary_frame: Expertise Reliance
  supporting_frames:
    - Operational Visibility
    - Workflow Transformation
  required_inputs:
    - recurring expert interventions
    - common novice mistakes
    - expert correction steps
    - decision points where users get stuck
    - valid and invalid examples
  method_summary: "Observe where users escalate, extract the expert's implicit checks, convert those checks into explicit prompts or rules, and place them at the point of failure or prevention."
  success_criteria:
    - "Non-experts can complete the task without escalation."
    - "Common mistakes are caught before blocking progress."
    - "Expert intervention decreases."
    - "Guidance is usable at the moment of need."
  failure_modes:
    - "Capturing expert advice too abstractly."
    - "Adding instructions too late in the workflow."
    - "Creating guidance that requires expert interpretation."
    - "Ignoring edge cases that still require escalation."
  evidence_base:
    transformations:
      - tx_003
      - tx_011
    atoms:
      - obs_033
      - obs_034
      - obs_041
      - obs_042
      - obs_043
  repeatability: High
  teachability: High
  testability: High
  domain_scope: Domain-general
  workflow_position: diagnosis
  productization_potential: High
  confidence: High

- skill_id: sk_003
  skill_name: Preventing Predictable User Errors
  skill_definition: "Identify common recurring mistakes and construct checks that prevent them before they interrupt work."
  performed_transformations:
    - tx_011
    - tx_002
  input_state: "Users repeatedly make predictable errors that are easy to prevent but costly when discovered late."
  output_state: "Predictable errors are checked, prevented, or corrected before they block progress."
  primary_frame: Operational Visibility
  supporting_frames:
    - Expertise Reliance
    - Workflow Transformation
  required_inputs:
    - repeated error examples
    - frequency of error occurrence
    - required valid format or state
    - point in workflow where error is introduced
    - point where error is detected
  method_summary: "List recurring errors, locate where each error enters the workflow, define a simple validity check, and place the check before the error becomes costly."
  success_criteria:
    - "Common errors are detected earlier."
    - "Error prevention happens before process failure."
    - "Users understand what to change."
    - "Rework and escalation decrease."
  failure_modes:
    - "Checking after the failure already occurs."
    - "Preventing rare errors while missing common ones."
    - "Making validation too complex."
    - "Blocking valid edge cases."
  evidence_base:
    transformations:
      - tx_011
      - tx_002
    atoms:
      - obs_034
      - obs_035
      - obs_037
      - obs_040
      - obs_041
      - obs_042
      - obs_043
  repeatability: High
  teachability: High
  testability: High
  domain_scope: Domain-general
  workflow_position: diagnosis
  productization_potential: High
  confidence: High

- skill_id: sk_004
  skill_name: Compressing Fragmented Workflows
  skill_definition: "Locate interruptions, waits, rework loops, and forced handoffs, then restructure work toward fewer continuous blocks."
  performed_transformations:
    - tx_001
    - tx_015
  input_state: "Work is spread across time, interrupted by waits, or broken into fragments that slow iteration."
  output_state: "Work is organized into a more continuous flow with fewer interruption points."
  primary_frame: Workflow Transformation
  supporting_frames:
    - Operational Visibility
    - Perishability Management
  required_inputs:
    - sequence of work steps
    - elapsed time by step
    - hands-on time by step
    - wait states
    - rework triggers
    - decision points
  method_summary: "Map the workflow as state changes, distinguish hands-on work from elapsed waiting, identify fragmentation points, and propose a tighter sequence that preserves context and reduces delay."
  success_criteria:
    - "Major fragmentation points are visible."
    - "Wait states are separated from work states."
    - "Rework triggers are identified."
    - "A shorter or smoother workflow path is defined."
  failure_modes:
    - "Confusing speed with continuity."
    - "Ignoring necessary incubation or wait states."
    - "Combining steps that cannot safely be combined."
    - "Optimizing one actor's flow while increasing system burden."
  evidence_base:
    transformations:
      - tx_001
      - tx_015
    atoms:
      - obs_085
      - obs_086
      - obs_099
      - obs_105
      - obs_106
      - obs_107
      - obs_110
      - obs_119
  repeatability: High
  teachability: Medium
  testability: Medium
  domain_scope: Domain-general
  workflow_position: synthesis
  productization_potential: High
  confidence: High

- skill_id: sk_005
  skill_name: Preserving Same-Context Feedback
  skill_definition: "Move feedback closer to the original action so actors can interpret results while the work context remains active."
  performed_transformations:
    - tx_007
    - tx_006
    - tx_015
  input_state: "Feedback arrives after attention, memory, or team context has moved away from the original work."
  output_state: "Feedback arrives soon enough to support interpretation, correction, and next-step decisions in the same context."
  primary_frame: Workflow Transformation
  supporting_frames:
    - Operational Visibility
    - Expertise Reliance
  required_inputs:
    - action that produces feedback
    - feedback timing
    - decision timing
    - context-loss points
    - downstream actions dependent on feedback
  method_summary: "Trace the feedback loop from action to result to decision, identify where context decays, and define the timing or visibility change needed to keep interpretation connected to the original work."
  success_criteria:
    - "Feedback arrives before context is lost."
    - "Actor can interpret results with fewer reminders or reconstruction steps."
    - "Next action can be decided sooner."
    - "Learning loop tightens."
  failure_modes:
    - "Accelerating feedback without improving interpretability."
    - "Delivering feedback before the actor can act on it."
    - "Ignoring cognitive context loss."
    - "Treating all delays as equally harmful."
  evidence_base:
    transformations:
      - tx_007
      - tx_006
      - tx_015
    atoms:
      - obs_101
      - obs_102
      - obs_103
      - obs_104
      - obs_105
      - obs_107
      - obs_109
  repeatability: High
  teachability: Medium
  testability: Medium
  domain_scope: Domain-general
  workflow_position: decision
  productization_potential: Medium
  confidence: High

- skill_id: sk_006
  skill_name: Staging Point-of-Use Readiness
  skill_definition: "Arrange required materials, tools, and information near the moment and place where they are needed."
  performed_transformations:
    - tx_008
    - tx_004
  input_state: "Required materials are distributed, missing, stale, or inconveniently separated from the work."
  output_state: "Required materials are ready, current, and available at the point of use."
  primary_frame: Workspace Coupling
  supporting_frames:
    - Perishability Management
    - Workflow Transformation
  required_inputs:
    - required materials
    - point of use
    - current material locations
    - time sensitivity of each material
    - readiness criteria
  method_summary: "Identify what must be available at the point of action, determine readiness conditions, and stage materials to reduce searching, travel, and time-sensitive handling."
  success_criteria:
    - "Materials are available when needed."
    - "Searching and movement decrease."
    - "Time-sensitive steps are less exposed to delay."
    - "Readiness can be checked before execution."
  failure_modes:
    - "Staging materials that are not actually needed."
    - "Ignoring expiration or freshness constraints."
    - "Improving proximity while reducing safety or control."
    - "Failing to define readiness criteria."
  evidence_base:
    transformations:
      - tx_008
      - tx_004
    atoms:
      - obs_060
      - obs_061
      - obs_062
      - obs_064
      - obs_065
      - obs_067
      - obs_068
      - obs_069
  repeatability: High
  teachability: High
  testability: Medium
  domain_scope: Domain-general
  workflow_position: intake
  productization_potential: Medium
  confidence: High

- skill_id: sk_007
  skill_name: Making Inventory Glanceable
  skill_definition: "Convert hidden or scattered inventory states into visible, quickly inspectable readiness states."
  performed_transformations:
    - tx_010
  input_state: "Components are hidden, scattered, or difficult to assess without opening, searching, or remembering."
  output_state: "Component availability is visible at a glance."
  primary_frame: Operational Visibility
  supporting_frames:
    - Workspace Coupling
    - Burden Externalization
  required_inputs:
    - inventory components
    - current storage arrangement
    - readiness indicators
    - frequency of use
    - stockout consequences
  method_summary: "Group components by use context, expose remaining quantities, and create a visual arrangement that makes missing or low components immediately apparent."
  success_criteria:
    - "Availability can be assessed quickly."
    - "Low or missing components are visible."
    - "Searching decreases."
    - "Readiness can be verified before work starts."
  failure_modes:
    - "Creating visibility without preserving organization."
    - "Making components visible but not protected."
    - "Overcomplicating the visual system."
    - "Tracking inventory that does not matter."
  evidence_base:
    transformations:
      - tx_010
    atoms:
      - obs_089
      - obs_090
      - obs_091
  repeatability: High
  teachability: High
  testability: High
  domain_scope: Domain-general
  workflow_position: intake
  productization_potential: Medium
  confidence: Medium

- skill_id: sk_008
  skill_name: Configuring Flexible Output Handoffs
  skill_definition: "Convert rigid default outputs into configurable outputs that match downstream processing needs."
  performed_transformations:
    - tx_013
  input_state: "A system output does not fit downstream protocol, format, or processing requirements."
  output_state: "The output is configured to match the downstream use case."
  primary_frame: Operational Visibility
  supporting_frames:
    - Manual-to-Automated Transfer
    - Expertise Reliance
  required_inputs:
    - available output formats
    - downstream processing requirements
    - protocol or use-case type
    - current mismatch
    - user expertise level
  method_summary: "Identify downstream requirements, compare them against system defaults, define configuration choices, and make output selection explicit before handoff."
  success_criteria:
    - "Output format matches downstream use."
    - "Manual workaround decreases."
    - "Configuration choices are explicit."
    - "Specialist intervention is reduced."
  failure_modes:
    - "Configuring for the wrong downstream user."
    - "Hiding complexity without preserving required control."
    - "Supporting common cases while breaking edge cases."
    - "Assuming one standard output fits all uses."
  evidence_base:
    transformations:
      - tx_013
    atoms:
      - obs_111
      - obs_112
      - obs_114
      - obs_115
      - obs_116
  repeatability: Medium
  teachability: Medium
  testability: Medium
  domain_scope: Domain-adjacent
  workflow_position: delivery
  productization_potential: Medium
  confidence: Medium

- skill_id: sk_009
  skill_name: Identifying Automation Transfer Points
  skill_definition: "Find manual steps where responsibility could shift from human execution to system guidance, verification, or automation."
  performed_transformations:
    - tx_005
    - tx_012
  input_state: "A human performs repetitive, fragile, or low-value manual steps."
  output_state: "Candidate steps are specified for guidance, verification, or automation transfer."
  primary_frame: Manual-to-Automated Transfer
  supporting_frames:
    - Workflow Transformation
    - Expertise Reliance
    - Perishability Management
  required_inputs:
    - current manual steps
    - burden level
    - error consequences
    - expertise requirements
    - repeat frequency
    - feasibility constraints
  method_summary: "Scan the workflow for repetitive, fragile, expertise-heavy, or low-value manual steps, then classify whether each is best suited for guidance, verification, partial automation, or full automation."
  success_criteria:
    - "Automation candidates are bounded to specific steps."
    - "Responsibility shift is clearly defined."
    - "Risk and value are explicit."
    - "The candidate is not merely a vague wish for automation."
  failure_modes:
    - "Calling every annoying task automatable."
    - "Ignoring feasibility or safety constraints."
    - "Automating a low-value step before a high-risk one."
    - "Collapsing guidance, verification, and automation into one category."
  evidence_base:
    transformations:
      - tx_005
      - tx_012
    atoms:
      - obs_050
      - obs_051
      - obs_052
      - obs_070
      - obs_071
      - obs_073
      - obs_075
      - obs_117
  repeatability: Medium
  teachability: Medium
  testability: Medium
  domain_scope: Domain-general
  workflow_position: synthesis
  productization_potential: Medium
  confidence: Medium