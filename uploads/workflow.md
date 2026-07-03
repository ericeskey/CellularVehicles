workflow_steps:
  - workflow_step_id: wf_001
    sequence_index: 1
    step_title: Identify patient material and mutation targets
    step_type: preparation
    actors: [Martin, clinical group]
    inputs: [patient material, clinical mutation interests]
    outputs: [mutation list, patient populations for sequencing]
    tools_or_materials: [patient samples, clinical data]
    location: clinical research department
    duration: not specified
    dependencies: [patient acquisition, access to patient material]
    failure_risks: []
    evidence: "we seek patient material, and we try to understand what mutations develop in these patients"
    confidence: High

  - workflow_step_id: wf_002
    sequence_index: 2
    step_title: Choose low-throughput sequencing use case
    step_type: decision
    actors: [Martin]
    inputs: [project stage, available libraries, mutation list, high-throughput plan]
    outputs: [MiSeq QC path or targeted deep sequencing path]
    tools_or_materials: [MiSeq, Chromium, NovaSeq outsourcing path]
    location: lab
    duration: not specified
    dependencies: [project stage]
    failure_risks: [workflow frequency varies by project stage]
    evidence: "It really depends on what we're doing and what stage we are right now."
    confidence: High

  - workflow_step_id: wf_003
    sequence_index: 3
    step_title: Prepare or receive sequencing libraries
    step_type: preparation
    actors: [Martin, PhD students]
    inputs: [patient cells, DNA or RNA material, prepared libraries]
    outputs: [sequencing libraries]
    tools_or_materials: [library prep kits, PCR strips, 1.5 ml tubes, tips]
    location: lab
    duration: "two to three days; up to a week from patient cells"
    dependencies: [sample availability, library prep protocol]
    failure_risks: [long preparation time, work split across days]
    evidence: "If we start just with the patient cells, it can take up to a week until we have the library ready"
    confidence: High

  - workflow_step_id: wf_004
    sequence_index: 4
    step_title: Design primers for targeted deep sequencing
    step_type: preparation
    actors: [Martin]
    inputs: [patient mutation list]
    outputs: [primers for each mutation]
    tools_or_materials: [primer design process]
    location: lab
    duration: not specified
    dependencies: [mutation list]
    failure_risks: []
    evidence: "We have a list of mutations for our patients. We design primers for these mutations for every single mutation."
    confidence: High

  - workflow_step_id: wf_005
    sequence_index: 5
    step_title: Run PCRs for mutations and populations
    step_type: execution
    actors: [Martin, lab team]
    inputs: [primers, DNA populations, mutation targets]
    outputs: [PCR products]
    tools_or_materials: [PCR strips, PCR reagents, tips]
    location: lab
    duration: not specified
    dependencies: [primer design, sample populations]
    failure_risks: [large number of PCRs increases handling burden]
    evidence: "This is going to be between 50 and 500 PCRs that we do."
    confidence: High

  - workflow_step_id: wf_006
    sequence_index: 6
    step_title: Extract DNA from PCRs
    step_type: preparation
    actors: [Martin, lab team]
    inputs: [PCR products]
    outputs: [extracted DNA]
    tools_or_materials: [DNA extraction materials]
    location: lab
    duration: not specified
    dependencies: [completed PCRs]
    failure_risks: []
    evidence: "We then, extract the DNA from all these PCRs."
    confidence: High

  - workflow_step_id: wf_007
    sequence_index: 7
    step_title: Pool PCR-derived material
    step_type: preparation
    actors: [Martin, lab team]
    inputs: [extracted DNA]
    outputs: [pooled material]
    tools_or_materials: [tubes, racks]
    location: lab
    duration: not specified
    dependencies: [DNA extraction]
    failure_risks: [incorrect pooling]
    evidence: "We pull them together."
    confidence: High

  - workflow_step_id: wf_008
    sequence_index: 8
    step_title: Plan indexing
    step_type: decision
    actors: [Martin]
    inputs: [mutations, populations, overlap considerations]
    outputs: [index pooling plan]
    tools_or_materials: [indexing scheme]
    location: lab
    duration: not specified
    dependencies: [pooled PCR material]
    failure_risks: [overlapping mutations placed incorrectly]
    evidence: "We think about before how we do our indexing."
    confidence: High

  - workflow_step_id: wf_009
    sequence_index: 9
    step_title: Run NEB library preparation protocol
    step_type: preparation
    actors: [Martin, lab team]
    inputs: [pooled material, index plan]
    outputs: [prepared library]
    tools_or_materials: [NEB library preparation kit]
    location: lab
    duration: "about two days"
    dependencies: [PCR pooling, indexing plan]
    failure_risks: [long protocol, incubation delays, split-day work]
    evidence: "we do this library preparation protocol... which takes about two days."
    confidence: High

  - workflow_step_id: wf_010
    sequence_index: 10
    step_title: Check library fragment size
    step_type: validation
    actors: [Martin]
    inputs: [prepared library]
    outputs: [fragment-size validation result]
    tools_or_materials: [fragment-size checking machine]
    location: lab
    duration: not specified
    dependencies: [library preparation completion]
    failure_risks: [wrong fragment size indicates major preparation error]
    evidence: "looks at fraction size... to see if you've done something horribly wrong"
    confidence: High

  - workflow_step_id: wf_011
    sequence_index: 11
    step_title: Determine library concentration
    step_type: validation
    actors: [Martin, lab team]
    inputs: [validated libraries]
    outputs: [concentration values]
    tools_or_materials: [concentration measurement tools]
    location: lab
    duration: not specified
    dependencies: [fragment-size validation]
    failure_risks: [incorrect concentration affects pooling]
    evidence: "we pool our samples after determining concentration"
    confidence: High

  - workflow_step_id: wf_012
    sequence_index: 12
    step_title: Pool sequencing library
    step_type: preparation
    actors: [Martin, lab team]
    inputs: [libraries, concentration values]
    outputs: [pooled sequencing library]
    tools_or_materials: [tubes, pipettes, tips]
    location: lab
    duration: not specified
    dependencies: [concentration determination]
    failure_risks: [incorrect pooling]
    evidence: "we have a pooled sequencing library."
    confidence: High

  - workflow_step_id: wf_013
    sequence_index: 13
    step_title: Store prepared libraries
    step_type: storage
    actors: [Martin, lab team]
    inputs: [prepared sequencing libraries]
    outputs: [stored libraries]
    tools_or_materials: [fridge, freezer]
    location: post-PCR room
    duration: "several weeks possible"
    dependencies: [completed library preparation]
    failure_risks: []
    evidence: "these sequencing libraries are prepared, they can be stored for several weeks"
    confidence: High

  - workflow_step_id: wf_014
    sequence_index: 14
    step_title: Create or convert sample sheet
    step_type: setup
    actors: [Martin, PhD students]
    inputs: [index information, sample information, multiplexing data]
    outputs: [sample sheet]
    tools_or_materials: [computer, editor, simple programming language]
    location: lab computer
    duration: not specified
    dependencies: [sample/index plan]
    failure_risks: [wrong delimiter, missing required blocks, Mac/Windows line-ending issues]
    evidence: "you have to convert this with some easy programming language into a sample sheet"
    confidence: High

  - workflow_step_id: wf_015
    sequence_index: 15
    step_title: Thaw reagent cartridge
    step_type: preparation
    actors: [Martin]
    inputs: [reagent cartridge]
    outputs: [thawed reagent cartridge]
    tools_or_materials: [MiSeq reagent cartridge]
    location: lab
    duration: not specified
    dependencies: [planned sequencing run]
    failure_risks: [cartridge must be ready before run]
    evidence: "This has to be thawed before."
    confidence: High

  - workflow_step_id: wf_016
    sequence_index: 16
    step_title: Place reagent cartridge into MiSeq
    step_type: setup
    actors: [Martin]
    inputs: [thawed reagent cartridge]
    outputs: [cartridge loaded into MiSeq]
    tools_or_materials: [MiSeq, reagent cartridge]
    location: MiSeq room / cool room
    duration: not specified
    dependencies: [cartridge thawing]
    failure_risks: []
    evidence: "We thaw the reagent cartridge, replace it into the MiSeq"
    confidence: High

  - workflow_step_id: wf_017
    sequence_index: 17
    step_title: Gather denaturing materials
    step_type: preparation
    actors: [Martin]
    inputs: [stored libraries, denaturing chemicals]
    outputs: [materials ready for denaturing]
    tools_or_materials: [ethanol, sodium hydroxide, small chemicals, ice, centrifuge]
    location: post-PCR room and institute
    duration: not specified
    dependencies: [libraries available, chemicals available]
    failure_risks: [chemicals missing, chemicals out of date, pH changed]
    evidence: "These are sometimes spread over the whole institute"
    confidence: High

  - workflow_step_id: wf_018
    sequence_index: 18
    step_title: Denature libraries directly before sequencing
    step_type: preparation
    actors: [Martin]
    inputs: [stored library, denaturing chemicals]
    outputs: [fresh denatured library material]
    tools_or_materials: [ethanol, sodium hydroxide, heat step, centrifuge, ice]
    location: post-PCR room
    duration: "20 to 40 minutes"
    dependencies: [reagent cartridge preparation, library availability, denaturing materials]
    failure_risks: [wrong pH, wrong concentration, chemistry mistake, experiment destruction]
    evidence: "right before sequencing, they have to be denatured"
    confidence: High

  - workflow_step_id: wf_019
    sequence_index: 19
    step_title: Keep denatured product cold
    step_type: storage
    actors: [Martin]
    inputs: [denatured library material]
    outputs: [cooled denatured library material]
    tools_or_materials: [ice]
    location: post-PCR room
    duration: immediate / fresh
    dependencies: [denaturing completion]
    failure_risks: [denatured product loses freshness]
    evidence: "Put everything on ice"
    confidence: High

  - workflow_step_id: wf_020
    sequence_index: 20
    step_title: Carry cooled library material to MiSeq
    step_type: transfer
    actors: [Martin]
    inputs: [600 microliters of cooled library material, flow cell]
    outputs: [library material at MiSeq]
    tools_or_materials: [ice, small tube, flow cell]
    location: "about 20 meters from post-PCR room to MiSeq room"
    duration: immediate / hurry
    dependencies: [fresh denatured product]
    failure_risks: [delay after denaturing]
    evidence: "Put everything on ice, and you try to hurry to the machine"
    confidence: High

  - workflow_step_id: wf_021
    sequence_index: 21
    step_title: Start guided MiSeq setup
    step_type: setup
    actors: [Martin, PhD students]
    inputs: [denatured product, cartridge, flow cell, sample sheet]
    outputs: [run setup sequence started]
    tools_or_materials: [MiSeq graphical interface, touchpad]
    location: MiSeq room / cool room
    duration: not specified
    dependencies: [materials at machine]
    failure_risks: [touchpad latency, setup errors]
    evidence: "it tells you step by step what you have to do"
    confidence: High

  - workflow_step_id: wf_022
    sequence_index: 22
    step_title: Import sample sheet
    step_type: setup
    actors: [Martin, PhD students]
    inputs: [sample sheet]
    outputs: [sample sheet accepted or rejected]
    tools_or_materials: [MiSeq, sample sheet]
    location: MiSeq room / cool room
    duration: not specified
    dependencies: [sample sheet creation]
    failure_risks: [cryptic error, rejected sample sheet]
    evidence: "whether you have to import a sample sheet, which tells the machine how to do multiplex data"
    confidence: High

  - workflow_step_id: wf_023
    sequence_index: 23
    step_title: Diagnose sample sheet error
    step_type: rework
    actors: [Martin, PhD students]
    inputs: [rejected sample sheet, cryptic MiSeq error]
    outputs: [suspected sample sheet issue]
    tools_or_materials: [MiSeq, another machine, converter, editor]
    location: MiSeq room and another machine
    duration: "often about 10 minutes for line-ending issue"
    dependencies: [sample sheet rejection]
    failure_risks: [unclear error, expert dependency, repeated correction]
    evidence: "take the sample sheet back, go to another machine, try to understand what is the problem, and go back into this machine"
    confidence: High

  - workflow_step_id: wf_024
    sequence_index: 24
    step_title: Correct line-ending issue
    step_type: rework
    actors: [Martin]
    inputs: [sample sheet with Mac/Windows line-ending issue]
    outputs: [converted sample sheet]
    tools_or_materials: [line-ending converter]
    location: another machine
    duration: "about 10 minutes"
    dependencies: [identifying line-ending problem]
    failure_risks: [Martin has to remember converter process]
    evidence: "it always takes me like 10 minutes to remember how to do that"
    confidence: High

  - workflow_step_id: wf_025
    sequence_index: 25
    step_title: Correct delimiter issue
    step_type: rework
    actors: [Martin, PhD students]
    inputs: [sample sheet with wrong delimiter]
    outputs: [comma-separated sample sheet]
    tools_or_materials: [editor]
    location: another machine
    duration: not specified
    dependencies: [identifying delimiter problem]
    failure_risks: [tabs used because easier to read; MiSeq expects commas]
    evidence: "the machine was comma separator"
    confidence: High

  - workflow_step_id: wf_026
    sequence_index: 26
    step_title: Correct missing or malformed required sample sheet blocks
    step_type: rework
    actors: [Martin, PhD students]
    inputs: [sample sheet with missing required lines or spacing errors]
    outputs: [corrected sample sheet]
    tools_or_materials: [editor]
    location: another machine
    duration: not specified
    dependencies: [identifying required-block problem]
    failure_risks: [people forget required blocks]
    evidence: "some of them are really required... Oftentimes, people just forget this"
    confidence: High

  - workflow_step_id: wf_027
    sequence_index: 27
    step_title: Repeat sample sheet import after correction
    step_type: rework
    actors: [Martin, PhD students]
    inputs: [corrected sample sheet]
    outputs: [accepted sample sheet or another error]
    tools_or_materials: [MiSeq, corrected sample sheet]
    location: MiSeq room / cool room
    duration: not specified
    dependencies: [sample sheet correction]
    failure_risks: [loop repeats multiple times, denatured library becomes stale]
    evidence: "go back into this machine"
    confidence: High

  - workflow_step_id: wf_028
    sequence_index: 28
    step_title: Re-denature library if setup delay is too long
    step_type: rework
    actors: [Martin, PhD students]
    inputs: [stale denatured product, original library, denaturing materials]
    outputs: [fresh denatured library]
    tools_or_materials: [ethanol, sodium hydroxide, heat step, ice, centrifuge]
    location: post-PCR room
    duration: "triggered if sample sheet problem takes about half an hour"
    dependencies: [setup delay, library still available]
    failure_risks: [loss of freshness, repeated denaturing]
    evidence: "If it takes half an hour to fix the sample sheet problem... he has to denature his library, again"
    confidence: High

  - workflow_step_id: wf_029
    sequence_index: 29
    step_title: Start MiSeq run
    step_type: execution
    actors: [Martin, PhD students]
    inputs: [accepted sample sheet, loaded cartridge, flow cell, fresh denatured library]
    outputs: [sequencing run in progress]
    tools_or_materials: [MiSeq]
    location: MiSeq room / cool room
    duration: "11 to 21 hours"
    dependencies: [setup completion, accepted sample sheet, fresh denatured product]
    failure_risks: [long run time, unclear completion estimate]
    evidence: "It takes between 11 and, I think, 21 hours."
    confidence: High

  - workflow_step_id: wf_030
    sequence_index: 30
    step_title: Wait for sequencing run to finish
    step_type: waiting
    actors: [Martin]
    inputs: [running MiSeq]
    outputs: [completed sequencing run]
    tools_or_materials: [MiSeq]
    location: MiSeq room / elsewhere while waiting
    duration: "11 to 21 hours"
    dependencies: [run started]
    failure_risks: [workflow fragmentation, next-day analysis delay]
    evidence: "It's a long time. This is sometimes annoying."
    confidence: High

  - workflow_step_id: wf_031
    sequence_index: 31
    step_title: Perform post-run washing
    step_type: cleanup
    actors: [Martin, lab users]
    inputs: [completed MiSeq run, washing liquid]
    outputs: [washed MiSeq]
    tools_or_materials: [washing cartridge, washing liquid, water, Tween 20 or surfactant]
    location: MiSeq room
    duration: "about half an hour elapsed; about five minutes hands-on"
    dependencies: [run completion, washing materials available]
    failure_risks: [materials disorganized, repeated filling of many slots]
    evidence: "provide a certain washing liquid into 20 different slots into the washing cartridge"
    confidence: High

  - workflow_step_id: wf_032
    sequence_index: 32
    step_title: Retrieve sequencing data
    step_type: transfer
    actors: [Martin]
    inputs: [completed MiSeq run]
    outputs: [sequencing data, FASTQ files or raw data]
    tools_or_materials: [MiSeq output, FASTQ files]
    location: MiSeq / analysis computer
    duration: not specified
    dependencies: [run completion]
    failure_risks: [quirky output processing, data-format mismatch]
    evidence: "everyone expects these machines to give you fast queue files"
    confidence: High

  - workflow_step_id: wf_033
    sequence_index: 33
    step_title: Bypass or handle machine data processing
    step_type: analysis
    actors: [Martin]
    inputs: [raw data, machine output]
    outputs: [usable sequencing files]
    tools_or_materials: [bioinformatics tools]
    location: analysis workstation
    duration: not specified
    dependencies: [data output]
    failure_risks: [MiSeq processing not user-friendly, unsupported data types]
    evidence: "I'm just omitting the step totally because I have the bioinformatics background to do that."
    confidence: High

  - workflow_step_id: wf_034
    sequence_index: 34
    step_title: Demultiplex data if needed
    step_type: analysis
    actors: [Martin]
    inputs: [raw data, indexed sequencing output]
    outputs: [FASTQ files]
    tools_or_materials: [bioinformatics workflow]
    location: analysis workstation
    duration: not specified
    dependencies: [data output, library protocol]
    failure_risks: [10X data not supported by MiSeq demultiplexing]
    evidence: "If it's not included in the machine, you have to export the raw data and do it yourself."
    confidence: High

  - workflow_step_id: wf_035
    sequence_index: 35
    step_title: Analyze sequencing data
    step_type: analysis
    actors: [Martin]
    inputs: [FASTQ files, sequencing data]
    outputs: [analysis results]
    tools_or_materials: [bioinformatics pipeline]
    location: analysis workstation
    duration: "two to four hours"
    dependencies: [data retrieval, usable files]
    failure_risks: [analysis delayed into next day, context fades]
    evidence: "this analysis takes them like two to four hours"
    confidence: High

  - workflow_step_id: wf_036
    sequence_index: 36
    step_title: Review results while experiment is still fresh
    step_type: validation
    actors: [Martin]
    inputs: [analysis results, memory of experiment]
    outputs: [identified mistakes or confirmation]
    tools_or_materials: [analysis outputs]
    location: analysis workstation
    duration: not specified
    dependencies: [analysis completion]
    failure_risks: [delayed analysis makes experiment less mentally available]
    evidence: "my mind is still set in that experiment"
    confidence: High

  - workflow_step_id: wf_037
    sequence_index: 37
    step_title: Decide whether to proceed, adjust, or repeat
    step_type: decision
    actors: [Martin, PhD students]
    inputs: [analysis results, error assessment, coverage assessment]
    outputs: [next preparation plan, adjustment plan, NovaSeq go/no-go]
    tools_or_materials: [analysis results, team discussion]
    location: lab / analysis setting
    duration: not specified
    dependencies: [result review]
    failure_risks: [late results delay team alignment]
    evidence: "we can make arrangements for the next day to start the next preparation with certain mistakes ruled out"
    confidence: High

  - workflow_step_id: wf_038
    sequence_index: 38
    step_title: Proceed to NovaSeq if MiSeq QC is acceptable
    step_type: handoff
    actors: [Martin, Berlin Institute of Health]
    inputs: [validated library, acceptable MiSeq QC data]
    outputs: [NovaSeq sequencing path]
    tools_or_materials: [NovaSeq, outsourced sequencing process]
    location: Berlin Institute of Health
    duration: not specified
    dependencies: [MiSeq QC approval]
    failure_risks: [costly run if QC is wrong]
    evidence: "we see, 'Okay, this is nice. We can go to the NovaSeq.'"
    confidence: High

workflow_structure:
  workflow_start:
    description: "The workflow begins when Martin's group has patient material, mutation questions, or prepared libraries that require low-throughput sequencing."
    evidence: "we seek patient material, and we try to understand what mutations develop in these patients"
    citation: ":contentReference[oaicite:0]{index=0}"

  workflow_end:
    description: "The workflow ends when Martin has usable sequencing data, reviews the results, and either proceeds to NovaSeq, adjusts the method, or prepares the next MiSeq run."
    evidence: "we see, 'Okay, this is nice. We can go to the NovaSeq.' Or, 'We have to adjust certain things'"
    citation: ":contentReference[oaicite:1]{index=1}"

  critical_path:
    - wf_001
    - wf_002
    - wf_003
    - wf_014
    - wf_015
    - wf_016
    - wf_017
    - wf_018
    - wf_019
    - wf_020
    - wf_021
    - wf_022
    - wf_029
    - wf_030
    - wf_032
    - wf_035
    - wf_036
    - wf_037

  major_decisions:
    - decision_id: dec_001
      description: "Use MiSeq for method establishment / QC or targeted deep sequencing."
      related_steps: [wf_002]
    - decision_id: dec_002
      description: "Determine which mutations and populations belong in which index pools."
      related_steps: [wf_008]
    - decision_id: dec_003
      description: "Decide whether fragment size indicates the library is acceptable."
      related_steps: [wf_010]
    - decision_id: dec_004
      description: "Decide whether MiSeq data is good enough to proceed to NovaSeq."
      related_steps: [wf_037, wf_038]
    - decision_id: dec_005
      description: "Decide whether to repeat or adjust preparation based on analysis results."
      related_steps: [wf_036, wf_037]

  major_waits:
    - wait_id: wait_001
      description: "Library preparation can take two to three days or up to a week from patient cells."
      related_steps: [wf_003, wf_009]
    - wait_id: wait_002
      description: "Reagent cartridge must be thawed before sequencing."
      related_steps: [wf_015]
    - wait_id: wait_003
      description: "MiSeq run takes 11 to 21 hours."
      related_steps: [wf_029, wf_030]
    - wait_id: wait_004
      description: "Post-run washing takes about half an hour elapsed time."
      related_steps: [wf_031]
    - wait_id: wait_005
      description: "Analysis can spread across days if results arrive late."
      related_steps: [wf_035, wf_036]

  major_rework_loops:
    - loop_id: loop_001
      description: "Sample sheet rejected by MiSeq, taken to another machine, corrected, and re-imported."
      related_steps: [wf_022, wf_023, wf_024, wf_025, wf_026, wf_027]
    - loop_id: loop_002
      description: "If sample sheet correction takes too long, the library must be denatured again."
      related_steps: [wf_018, wf_022, wf_023, wf_028]
    - loop_id: loop_003
      description: "Analysis identifies mistakes, leading to adjusted preparation before the next MiSeq run."
      related_steps: [wf_035, wf_036, wf_037]

  critical_dependencies:
    - "Patient material must be available."
    - "Libraries must be prepared before MiSeq setup."
    - "Sample sheet must contain required blocks and correct delimiters."
    - "Reagent cartridge must be thawed before run setup."
    - "Denatured library must be fresh when loaded."
    - "Denaturing chemicals must have correct pH and concentration."
    - "MiSeq must accept the sample sheet before sequencing can start."
    - "Run output must be converted into usable data for analysis."
    - "Analysis results must be available before Martin can decide whether to proceed or adjust."

  bottlenecks:
    - bottleneck_id: bot_001
      description: "Martin is the person PhD students come to when sample sheets fail."
      related_steps: [wf_023]
    - bottleneck_id: bot_002
      description: "Denaturing is time-sensitive, chemical-dependent, and close to run setup."
      related_steps: [wf_017, wf_018, wf_028]
    - bottleneck_id: bot_003
      description: "MiSeq run time delays analysis and next-run planning."
      related_steps: [wf_029, wf_030, wf_035]
    - bottleneck_id: bot_004
      description: "Library preparation spans multiple days because of PCRs and incubation steps."
      related_steps: [wf_003, wf_009]
    - bottleneck_id: bot_005
      description: "Unsupported or inflexible FASTQ/demultiplexing output creates extra analysis work."
      related_steps: [wf_033, wf_034]

  fragile_handoffs:
    - handoff_id: fh_001
      description: "Fresh denatured material moves from post-PCR room to MiSeq about 20 meters away."
      related_steps: [wf_018, wf_019, wf_020]
    - handoff_id: fh_002
      description: "Sample sheet moves between MiSeq and another machine during correction."
      related_steps: [wf_022, wf_023, wf_027]
    - handoff_id: fh_003
      description: "MiSeq QC result determines whether an expensive NovaSeq run proceeds."
      related_steps: [wf_037, wf_038]
    - handoff_id: fh_004
      description: "Sequencing output moves from machine-generated files to Martin's bioinformatics workflow."
      related_steps: [wf_032, wf_033, wf_034]

  workflow_breakdowns:
    - breakdown_id: br_001
      description: "MiSeq gives cryptic sample sheet errors."
      related_steps: [wf_022, wf_023]
    - breakdown_id: br_002
      description: "New users repeatedly make sample sheet mistakes."
      related_steps: [wf_014, wf_023]
    - breakdown_id: br_003
      description: "Sample sheet correction can take long enough to make denatured product stale."
      related_steps: [wf_023, wf_028]
    - breakdown_id: br_004
      description: "Denaturing chemicals may be missing, out of date, or at the wrong pH."
      related_steps: [wf_017, wf_018]
    - breakdown_id: br_005
      description: "Long run time causes analysis and next preparation to fragment across days."
      related_steps: [wf_030, wf_035, wf_036, wf_037]
    - breakdown_id: br_006
      description: "Data output is not flexible enough for all library protocols."
      related_steps: [wf_033, wf_034]