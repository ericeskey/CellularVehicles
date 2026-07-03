- transformation_id: tx_001
  transformation_name: Fragmented Workflow to Continuous Workflow
  input_state: "Work is interrupted, spread across days, or delayed by process timing."
  output_state: "Work proceeds in fewer continuous blocks with less context loss."
  state_change_summary: "A workflow moves from fragmented execution to more continuous execution."
  primary_frame: Workflow Transformation
  supporting_frames:
    - Operational Visibility
    - Perishability Management
  dimensions_changed:
    - Workflow Fragmentation
    - Time Sensitivity
    - Rework Likelihood
    - Cognitive Load
  actor_or_system_changed: "Martin and the sequencing workflow"
  trigger_or_constructor_candidate: "Shorter run times, clearer timing, reduced delay-sensitive steps"
  evidence_atoms:
    - atom_id: obs_085
      evidence: "Preparation often takes 15 to 16 hours."
    - atom_id: obs_086
      evidence: "Long PCRs and incubation steps force work into two days."
    - atom_id: obs_105
      evidence: "Delayed results spread analysis across days."
    - atom_id: obs_106
      evidence: "Fragmentation contributes to a week before the next MiSeq run."
  frequency_estimate: High
  domain_scope: Domain-general
  value_of_change: "Reduces context loss, waiting, rework, and coordination burden."
  repeatability: High
  skill_potential: High
  workflow_position: delivery
  confidence: High

- transformation_id: tx_002
  transformation_name: Opaque Error to Diagnosable Error
  input_state: "The system reports that something is wrong without explaining the likely cause."
  output_state: "The system makes the error cause specific enough for the actor to correct it."
  state_change_summary: "Failure feedback moves from cryptic to actionable."
  primary_frame: Operational Visibility
  supporting_frames:
    - Workflow Transformation
    - Expertise Reliance
  dimensions_changed:
    - Visibility of State
    - Error Recoverability
    - Expert Dependence
    - Cognitive Load
  actor_or_system_changed: "MiSeq interface and user troubleshooting behavior"
  trigger_or_constructor_candidate: "Specific diagnostic messages for common sample sheet problems"
  evidence_atoms:
    - atom_id: obs_029
      evidence: "MiSeq error responses are cryptic."
    - atom_id: obs_030
      evidence: "Martin wants more specific sample sheet error guidance."
    - atom_id: obs_034
      evidence: "Most sample sheet issues are one of three common problems."
    - atom_id: obs_035
      evidence: "Mac and Windows line-ending differences can cause problems."
    - atom_id: obs_037
      evidence: "Wrong delimiters can cause problems."
  frequency_estimate: High
  domain_scope: Domain-general
  value_of_change: "Turns failure from a blocking event into a recoverable event."
  repeatability: High
  skill_potential: High
  workflow_position: diagnosis
  confidence: High

- transformation_id: tx_003
  transformation_name: Expert-Dependent Recovery to User-Recoverable Recovery
  input_state: "Non-expert users are blocked and must ask Martin to resolve errors."
  output_state: "Users can resolve common issues without expert intervention."
  state_change_summary: "Recovery capability shifts from expert-only to distributed among trained users."
  primary_frame: Expertise Reliance
  supporting_frames:
    - Operational Visibility
    - Workflow Transformation
  dimensions_changed:
    - Expert Dependence
    - Error Recoverability
    - Visibility of State
    - Cognitive Load
  actor_or_system_changed: "PhD students, Martin, and the error-recovery process"
  trigger_or_constructor_candidate: "Embedded guidance, common-error checks, clearer corrective instructions"
  evidence_atoms:
    - atom_id: obs_033
      evidence: "PhD students come to Martin when sample sheet errors occur."
    - atom_id: obs_041
      evidence: "New users commonly make the same sample sheet mistakes two or three times."
    - atom_id: obs_042
      evidence: "Sample sheet mistakes are easy to make."
    - atom_id: obs_043
      evidence: "Sample sheet mistakes are easy to prevent."
  frequency_estimate: Medium
  domain_scope: Domain-general
  value_of_change: "Frees expert attention and allows routine work to proceed without escalation."
  repeatability: High
  skill_potential: High
  workflow_position: diagnosis
  confidence: High

- transformation_id: tx_004
  transformation_name: Perishable Step to Buffered Step
  input_state: "A step must be completed within a freshness window, and delays can invalidate prior work."
  output_state: "The step is protected, buffered, delayed safely, or made less sensitive to timing."
  state_change_summary: "A fragile time-dependent state becomes more tolerant of delay."
  primary_frame: Perishability Management
  supporting_frames:
    - Workflow Transformation
    - Workspace Coupling
  dimensions_changed:
    - Time Sensitivity
    - Rework Likelihood
    - Material Readiness
    - Physical Proximity
  actor_or_system_changed: "Denaturing workflow and material state"
  trigger_or_constructor_candidate: "Closer staging, integrated denaturing, extended freshness, or reduced delay"
  evidence_atoms:
    - atom_id: obs_062
      evidence: "Libraries must be denatured directly before going into the MiSeq."
    - atom_id: obs_064
      evidence: "Sample sheet delays can require re-denaturing."
    - atom_id: obs_068
      evidence: "Martin carries denatured material on ice and hurries to the machine."
    - atom_id: obs_069
      evidence: "The machine is about 20 meters away."
  frequency_estimate: Medium
  domain_scope: Domain-general
  value_of_change: "Reduces rework and protects fragile work from timing disruptions."
  repeatability: Medium
  skill_potential: Medium
  workflow_position: delivery
  confidence: High

- transformation_id: tx_005
  transformation_name: Manual Fragile Chemistry to System-Handled Preparation
  input_state: "The user performs low-level chemistry that is outside their core expertise and can ruin the experiment."
  output_state: "The system absorbs, guides, or verifies the preparation step."
  state_change_summary: "Responsibility for fragile preparation moves from human execution toward system support."
  primary_frame: Manual-to-Automated Transfer
  supporting_frames:
    - Perishability Management
    - Expertise Reliance
  dimensions_changed:
    - Task Automation Potential
    - Preparation Burden
    - Expert Dependence
    - Rework Likelihood
  actor_or_system_changed: "Martin, denaturing process, and sequencing system"
  trigger_or_constructor_candidate: "Machine-integrated denaturing or guided preparation verification"
  evidence_atoms:
    - atom_id: obs_070
      evidence: "Martin finds denaturing annoying."
    - atom_id: obs_071
      evidence: "Denaturing requires chemicals with a certain pH."
    - atom_id: obs_073
      evidence: "Martin wants denaturing handled by the machine."
    - atom_id: obs_075
      evidence: "A mistake in denaturing chemistry can destroy an experiment."
    - atom_id: obs_117
      evidence: "Martin's top desired change is removing denaturing."
  frequency_estimate: Medium
  domain_scope: Domain-general
  value_of_change: "Reduces risk, expertise burden, and manual preparation friction."
  repeatability: Medium
  skill_potential: Medium
  workflow_position: delivery
  confidence: High

- transformation_id: tx_006
  transformation_name: Unknown Completion Timing to Predictable Completion Timing
  input_state: "The actor lacks a clear estimate of when a process will complete."
  output_state: "The actor can anticipate when output will be available and plan next work."
  state_change_summary: "Timing state moves from uncertain to forecastable."
  primary_frame: Operational Visibility
  supporting_frames:
    - Workflow Transformation
  dimensions_changed:
    - Run-Time Predictability
    - Visibility of State
    - Workflow Fragmentation
    - Cognitive Load
  actor_or_system_changed: "Martin's planning around MiSeq runs"
  trigger_or_constructor_candidate: "Immediate run-time estimate or completion forecast"
  evidence_atoms:
    - atom_id: obs_099
      evidence: "Typical MiSeq runs take 11 to 21 hours."
    - atom_id: obs_101
      evidence: "Martin does not get an immediate estimated run time."
    - atom_id: obs_102
      evidence: "Martin wants to know whether data will be ready next morning or afternoon."
  frequency_estimate: Medium
  domain_scope: Domain-general
  value_of_change: "Improves scheduling, handoff planning, and continuity of analysis."
  repeatability: High
  skill_potential: Medium
  workflow_position: delivery
  confidence: High

- transformation_id: tx_007
  transformation_name: Delayed Feedback to Same-Context Feedback
  input_state: "Results arrive after the actor's attention has moved away from the experiment."
  output_state: "Results arrive while the experiment context is still active in the actor's mind."
  state_change_summary: "Feedback timing moves closer to the moment of work."
  primary_frame: Workflow Transformation
  supporting_frames:
    - Operational Visibility
    - Cognitive Load
  dimensions_changed:
    - Workflow Fragmentation
    - Cognitive Load
    - Time Sensitivity
    - Run-Time Predictability
  actor_or_system_changed: "Martin's analysis process"
  trigger_or_constructor_candidate: "Shorter sequencing run time or faster transition from run to analysis"
  evidence_atoms:
    - atom_id: obs_103
      evidence: "Martin tends to look at data immediately after producing it."
    - atom_id: obs_104
      evidence: "Martin can better analyze mistakes when the experiment is fresh in mind."
    - atom_id: obs_107
      evidence: "A four-hour run would be very helpful."
    - atom_id: obs_109
      evidence: "Faster sequencing would allow afternoon setup and next-morning results."
  frequency_estimate: Medium
  domain_scope: Domain-general
  value_of_change: "Preserves context and improves the actor's ability to interpret errors or next steps."
  repeatability: High
  skill_potential: High
  workflow_position: diagnosis
  confidence: High

- transformation_id: tx_008
  transformation_name: Distributed Materials to Point-of-Use Readiness
  input_state: "Materials required for a task are spread across locations or not staged where work occurs."
  output_state: "Materials are available near the point of use when needed."
  state_change_summary: "Material readiness moves from distributed/search-dependent to staged/available."
  primary_frame: Workspace Coupling
  supporting_frames:
    - Perishability Management
    - Workflow Transformation
  dimensions_changed:
    - Physical Proximity
    - Material Readiness
    - Workflow Fragmentation
    - Time Sensitivity
  actor_or_system_changed: "Lab workspace and preparation flow"
  trigger_or_constructor_candidate: "Point-of-use staging, workspace reconfiguration, material checklist"
  evidence_atoms:
    - atom_id: obs_060
      evidence: "Martin wants water near the sequencer."
    - atom_id: obs_061
      evidence: "Martin wants reagents and bottles near the sequencer."
    - atom_id: obs_065
      evidence: "Martin needs ethanol, sodium hydroxide, small chemicals, and a centrifuge near the sequencer."
    - atom_id: obs_067
      evidence: "Denaturing chemicals are sometimes spread across the institute."
  frequency_estimate: Medium
  domain_scope: Domain-general
  value_of_change: "Reduces searching, movement, delay, and time-sensitive handling risk."
  repeatability: High
  skill_potential: Medium
  workflow_position: intake
  confidence: High

- transformation_id: tx_009
  transformation_name: Poor Workspace Fit to Point-of-Work Fit
  input_state: "The machine does not fit where the work naturally occurs."
  output_state: "The machine fits closer to the work area and supports smoother flow."
  state_change_summary: "Physical fit moves from displaced equipment to point-of-work integration."
  primary_frame: Workspace Coupling
  supporting_frames:
    - Workflow Transformation
  dimensions_changed:
    - Physical Fit
    - Physical Proximity
    - Workflow Fragmentation
  actor_or_system_changed: "Sequencer placement and lab workspace"
  trigger_or_constructor_candidate: "Reduced machine width or workspace-compatible footprint"
  evidence_atoms:
    - atom_id: obs_055
      evidence: "Martin thinks MiSeq could be smaller."
    - atom_id: obs_056
      evidence: "Width matters more than height or depth."
    - atom_id: obs_057
      evidence: "Half-width would allow placement in the PCR work area."
    - atom_id: obs_058
      evidence: "Current MiSeq is located with equipment too big for normal workspace."
  frequency_estimate: Low-Medium
  domain_scope: Domain-general
  value_of_change: "Reduces spatial separation and supports more natural workflow sequence."
  repeatability: Medium
  skill_potential: Low
  workflow_position: delivery
  confidence: High

- transformation_id: tx_010
  transformation_name: Hidden Inventory to Glanceable Inventory
  input_state: "Kit components are distributed across boxes and require opening or searching."
  output_state: "Remaining components can be seen at a glance."
  state_change_summary: "Inventory state moves from hidden/distributed to visible/organized."
  primary_frame: Operational Visibility
  supporting_frames:
    - Burden Externalization
    - Workspace Coupling
  dimensions_changed:
    - Visibility of State
    - Material Readiness
    - Cognitive Load
    - Preparation Burden
  actor_or_system_changed: "Kit organization and Martin's material management"
  trigger_or_constructor_candidate: "Rack organization or packaging that exposes component availability"
  evidence_atoms:
    - atom_id: obs_089
      evidence: "Multiple boxes with one or two tubes each are annoying."
    - atom_id: obs_090
      evidence: "Martin removes tubes and puts them into a rack."
    - atom_id: obs_091
      evidence: "Martin likes seeing remaining kit components at a glance."
  frequency_estimate: Low-Medium
  domain_scope: Domain-general
  value_of_change: "Reduces searching, uncertainty, and accidental stockout risk."
  repeatability: High
  skill_potential: Medium
  workflow_position: intake
  confidence: High

- transformation_id: tx_011
  transformation_name: Repeated Novice Mistake to Prevented Mistake
  input_state: "New users repeatedly make predictable errors."
  output_state: "Predictable errors are prevented before they block progress."
  state_change_summary: "Common error pattern moves from repeated occurrence to preemptive prevention."
  primary_frame: Expertise Reliance
  supporting_frames:
    - Operational Visibility
    - Workflow Transformation
  dimensions_changed:
    - Error Recoverability
    - Expert Dependence
    - Visibility of State
    - Rework Likelihood
  actor_or_system_changed: "New users and sample sheet creation process"
  trigger_or_constructor_candidate: "Pre-checks, validation rules, or standard templates"
  evidence_atoms:
    - atom_id: obs_034
      evidence: "Most sample sheet issues are one of three common problems."
    - atom_id: obs_041
      evidence: "New users commonly make these mistakes two or three times."
    - atom_id: obs_042
      evidence: "Mistakes are easy to make."
    - atom_id: obs_043
      evidence: "Mistakes are easy to prevent."
  frequency_estimate: Medium
  domain_scope: Domain-general
  value_of_change: "Prevents avoidable interruption and reduces expert escalation."
  repeatability: High
  skill_potential: High
  workflow_position: diagnosis
  confidence: High

- transformation_id: tx_012
  transformation_name: Manual Repetitive Fill to Automated Fill
  input_state: "The actor manually fills many washing cartridge slots."
  output_state: "The filling burden is reduced or transferred to a mechanism."
  state_change_summary: "A repetitive preparation step moves from manual execution toward automation."
  primary_frame: Manual-to-Automated Transfer
  supporting_frames:
    - Workflow Transformation
  dimensions_changed:
    - Task Automation Potential
    - Preparation Burden
    - Cognitive Load
  actor_or_system_changed: "Washing process and user effort"
  trigger_or_constructor_candidate: "Mechanism that distributes washing liquid from a single input"
  evidence_atoms:
    - atom_id: obs_050
      evidence: "Washing requires adding liquid into many cartridge slots."
    - atom_id: obs_051
      evidence: "Martin finds this somewhat cumbersome."
    - atom_id: obs_052
      evidence: "Martin sees washing preparation as automatable."
    - atom_id: obs_053
      evidence: "Hands-on washing time is about five minutes once organized."
  frequency_estimate: Low-Medium
  domain_scope: Domain-general
  value_of_change: "Reduces repetitive manual effort, though the current burden is not severe."
  repeatability: Medium
  skill_potential: Low-Medium
  workflow_position: delivery
  confidence: High

- transformation_id: tx_013
  transformation_name: Raw Output Constraint to Flexible Output Configuration
  input_state: "The machine outputs data in limited formats or requires external processing for certain protocols."
  output_state: "The actor can configure output according to common library protocol requirements."
  state_change_summary: "Data output moves from rigid/default to protocol-aware configurable."
  primary_frame: Operational Visibility
  supporting_frames:
    - Manual-to-Automated Transfer
    - Expertise Reliance
  dimensions_changed:
    - Visibility of State
    - Expert Dependence
    - Task Automation Potential
    - Cognitive Load
  actor_or_system_changed: "MiSeq data output process and bioinformatics handoff"
  trigger_or_constructor_candidate: "Protocol-aware output options or graphical configuration"
  evidence_atoms:
    - atom_id: obs_111
      evidence: "Martin expects sequencers to output FASTQ files."
    - atom_id: obs_112
      evidence: "Martin bypasses processing because he has bioinformatics skills."
    - atom_id: obs_114
      evidence: "MiSeq cannot demultiplex 10X data unless included."
    - atom_id: obs_115
      evidence: "Martin wants more flexible FASTQ options."
    - atom_id: obs_116
      evidence: "Martin wants a graphical interface for data type and run structure."
  frequency_estimate: Medium
  domain_scope: Domain-adjacent
  value_of_change: "Reduces specialist workaround burden and improves downstream data usability."
  repeatability: Medium
  skill_potential: Medium
  workflow_position: delivery
  confidence: High

- transformation_id: tx_014
  transformation_name: Excess Packaging Burden to Reduced Secondary Burden
  input_state: "Consumables arrive with packaging that adds opening, disposal, and waste burden."
  output_state: "Packaging creates less secondary work and less waste salience."
  state_change_summary: "Secondary burden around the primary task is reduced."
  primary_frame: Burden Externalization
  supporting_frames:
    - Operational Visibility
    - Workflow Transformation
  dimensions_changed:
    - Waste Burden
    - Preparation Burden
    - Material Readiness
    - Cognitive Load
  actor_or_system_changed: "Consumable unpacking and disposal process"
  trigger_or_constructor_candidate: "Less wrapping, easier opening, returnable packaging, clearer disposal paths"
  evidence_atoms:
    - atom_id: obs_092
      evidence: "Illumina dry ice boxes feel oversized."
    - atom_id: obs_093
      evidence: "Illumina cartridges are overwrapped in plastic."
    - atom_id: obs_094
      evidence: "Scissors are needed to open plastic wrapping."
    - atom_id: obs_097
      evidence: "Styrofoam containers are not returned to producers."
    - atom_id: obs_098
      evidence: "Martin feels sad about waste from styrofoam boxes."
  frequency_estimate: Low-Medium
  domain_scope: Domain-general
  value_of_change: "Reduces peripheral effort, disposal complexity, and emotional salience of waste."
  repeatability: Medium
  skill_potential: Low
  workflow_position: intake
  confidence: Medium

- transformation_id: tx_015
  transformation_name: Slow Iteration to Rapid Iteration
  input_state: "Sequencing, analysis, and next-run decisions are separated by long elapsed time."
  output_state: "The actor can run, analyze, decide, and prepare the next cycle faster."
  state_change_summary: "The iteration loop compresses from week-scale or multi-day to faster repeatable cycles."
  primary_frame: Workflow Transformation
  supporting_frames:
    - Operational Visibility
    - Expertise Reliance
  dimensions_changed:
    - Workflow Fragmentation
    - Run-Time Predictability
    - Cognitive Load
    - Rework Likelihood
  actor_or_system_changed: "Experiment iteration cycle"
  trigger_or_constructor_candidate: "Shorter run time, immediate analysis readiness, preserved experimental context"
  evidence_atoms:
    - atom_id: obs_099
      evidence: "Runs take 11 to 21 hours."
    - atom_id: obs_106
      evidence: "It normally takes a week until the next MiSeq run."
    - atom_id: obs_107
      evidence: "A four-hour sequencing run would be very helpful."
    - atom_id: obs_110
      evidence: "Repeating work every day or every second day reduces mistakes."
    - atom_id: obs_119
      evidence: "Martin wants run time drastically reduced."
  frequency_estimate: Medium
  domain_scope: Domain-general
  value_of_change: "Accelerates learning cycles and supports routine formation."
  repeatability: High
  skill_potential: High
  workflow_position: decision
  confidence: High