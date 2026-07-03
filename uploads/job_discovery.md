job_registry:
  - job_id: job_001
    job_statement: Prepare a sequencing run.
    actor: Scientist / sequencing user
    supporting_outcomes:
      - reg_001
      - reg_002
      - reg_003
      - reg_004
      - reg_005
      - reg_006
      - reg_007
      - reg_008
      - reg_009
      - reg_010
      - reg_011
      - reg_012
      - reg_013
    confidence: High

  - job_id: job_002
    job_statement: Generate sequencing data.
    actor: Scientist / sequencing user
    supporting_outcomes:
      - reg_015
      - reg_016
    confidence: High

  - job_id: job_003
    job_statement: Turn sequencing output into usable analysis input.
    actor: Scientist / bioinformatics user
    supporting_outcomes:
      - reg_017
      - reg_019
    confidence: High

  - job_id: job_004
    job_statement: Maintain continuity across sequencing workflow cycles.
    actor: Scientist / lab workflow owner
    supporting_outcomes:
      - reg_003
      - reg_014
      - reg_018
    confidence: Medium

job_maps:
  - job_id: job_001
    job_statement: Prepare a sequencing run.
    job_map:
      define:
        description: Determine what run will be performed and what inputs are required.
        outcomes:
          - reg_011
      locate:
        description: Find and gather required libraries, reagents, consumables, and equipment.
        outcomes:
          - reg_006
          - reg_012
      prepare:
        description: Prepare libraries, denaturation chemistry, consumables, and washing materials.
        outcomes:
          - reg_004
          - reg_008
          - reg_009
          - reg_011
          - reg_013
      confirm:
        description: Verify that sample sheets, reagents, and prepared libraries are ready for sequencing.
        outcomes:
          - reg_001
          - reg_010
      execute:
        description: Load the prepared library and start the sequencing run.
        outcomes:
          - reg_007
          - reg_008
      monitor:
        description: Detect setup problems before they disrupt the run.
        outcomes:
          - reg_002
      modify:
        description: Correct setup errors or preparation problems.
        outcomes:
          - reg_002
          - reg_003
      conclude:
        description: Complete preparation and leave the system ready to run.
        outcomes:
          - reg_005

  - job_id: job_002
    job_statement: Generate sequencing data.
    job_map:
      define:
        description: Determine sequencing parameters and expected run requirements.
        outcomes: []
      locate:
        description: Access the sequencer and required run materials.
        outcomes: []
      prepare:
        description: Ready the sequencer for the run.
        outcomes: []
      confirm:
        description: Confirm the run can proceed.
        outcomes:
          - reg_016
      execute:
        description: Run the sequencing process.
        outcomes:
          - reg_015
      monitor:
        description: Track when the run will finish.
        outcomes:
          - reg_016
      modify:
        description: Adjust expectations or workflow timing based on run progress.
        outcomes:
          - reg_016
      conclude:
        description: Complete the run and make data available.
        outcomes:
          - reg_015

  - job_id: job_003
    job_statement: Turn sequencing output into usable analysis input.
    job_map:
      define:
        description: Determine what output format and protocol-specific handling are required.
        outcomes:
          - reg_019
      locate:
        description: Access raw sequencing output and relevant protocol information.
        outcomes: []
      prepare:
        description: Configure output processing or demultiplexing.
        outcomes:
          - reg_019
      confirm:
        description: Verify that output files match the library protocol.
        outcomes:
          - reg_019
      execute:
        description: Generate analysis-ready files.
        outcomes:
          - reg_019
      monitor:
        description: Track whether output processing is working correctly.
        outcomes: []
      modify:
        description: Adjust output handling when protocol requirements differ.
        outcomes:
          - reg_019
      conclude:
        description: Begin downstream analysis from usable files.
        outcomes:
          - reg_017

  - job_id: job_004
    job_statement: Maintain continuity across sequencing workflow cycles.
    job_map:
      define:
        description: Decide what work should happen next across preparation, sequencing, and analysis.
        outcomes:
          - reg_018
      locate:
        description: Find people, materials, and information needed for the next workflow step.
        outcomes:
          - reg_003
      prepare:
        description: Arrange work so the next step can happen without avoidable delay.
        outcomes:
          - reg_018
      confirm:
        description: Confirm whether the prior step supports moving forward.
        outcomes:
          - reg_018
      execute:
        description: Move from one workflow step to the next.
        outcomes:
          - reg_017
          - reg_018
      monitor:
        description: Track interruptions, delays, and handoffs across the workflow.
        outcomes:
          - reg_018
      modify:
        description: Re-plan work when timing, errors, or people interrupt continuity.
        outcomes:
          - reg_003
      conclude:
        description: Reset materials, waste, and workflow context for the next cycle.
        outcomes:
          - reg_014

outcome_to_step_mapping:
  reg_001:
    job_id: job_001
    step: Confirm
  reg_002:
    job_id: job_001
    step: Modify
  reg_003:
    job_id: job_004
    step: Modify
  reg_004:
    job_id: job_001
    step: Prepare
  reg_005:
    job_id: job_001
    step: Conclude
  reg_006:
    job_id: job_001
    step: Locate
  reg_007:
    job_id: job_001
    step: Execute
  reg_008:
    job_id: job_001
    step: Execute
  reg_009:
    job_id: job_001
    step: Prepare
  reg_010:
    job_id: job_001
    step: Confirm
  reg_011:
    job_id: job_001
    step: Prepare
  reg_012:
    job_id: job_001
    step: Locate
  reg_013:
    job_id: job_001
    step: Prepare
  reg_014:
    job_id: job_004
    step: Conclude
  reg_015:
    job_id: job_002
    step: Execute
  reg_016:
    job_id: job_002
    step: Monitor
  reg_017:
    job_id: job_003
    step: Conclude
  reg_018:
    job_id: job_004
    step: Execute
  reg_019:
    job_id: job_003
    step: Execute