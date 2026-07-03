/* =========================================================
   WORKFLOW · R01 Martin — his actual job, critical-path spine.
   Sourced from uploads/workflow.md (critical_path, rework loops,
   bottlenecks, fragile handoffs, breakdowns, waits). Each step
   carries its evidence quote. fr = pre-run friction step.
   ========================================================= */
window.WORKFLOW = {
  spine: [
    { id:'wf_001', t:'Identify mutation targets', phase:'Prepare', dur:'', fr:false, q:"we try to understand what mutations develop in these patients" },
    { id:'wf_003', t:'Prepare libraries', phase:'Prepare', dur:'2 days – 1 week', fr:false, wait:true, q:"it can take up to a week until we have the library ready" },
    { id:'wf_014', t:'Create the sample sheet', phase:'Set up', dur:'', fr:false, q:"you have to convert this with some easy programming language into a sample sheet" },
    { id:'wf_017', t:'Gather denaturing chemicals', phase:'Denature', dur:'', fr:true, q:"These are sometimes spread over the whole institute" },
    { id:'wf_018', t:'Denature, fresh', phase:'Denature', dur:'20–40 min', fr:true, q:"right before sequencing, they have to be denatured" },
    { id:'wf_020', t:'Carry on ice, 20 m', phase:'Load', dur:'hurry', fr:true, q:"Put everything on ice, and you try to hurry to the machine" },
    { id:'wf_022', t:'Import the sample sheet', phase:'Load', dur:'', fr:true, anchor:true, q:"We're always afraid at the beginning whether our sample sheet is working" },
    { id:'wf_029', t:'Start the run', phase:'Run', dur:'11–21 h', fr:false, run:true, q:"It takes between 11 and, I think, 21 hours" },
    { id:'wf_030', t:'Wait for the run', phase:'Run', dur:'11–21 h', fr:false, wait:true, q:"It's a long time. This is sometimes annoying." },
    { id:'wf_032', t:'Retrieve data', phase:'Results', dur:'', fr:false, q:"everyone expects these machines to give you fast queue files" },
    { id:'wf_035', t:'Analyze', phase:'Results', dur:'2–4 h', fr:false, q:"this analysis takes them like two to four hours" },
    { id:'wf_037', t:'Decide: NovaSeq or adjust', phase:'Decide', dur:'', fr:false, q:"we can go to the NovaSeq. Or, we have to adjust certain things" }
  ],
  loops: [
    { from:'wf_022', to:'wf_022', label:'reject → fix → re-import · ×2–3', sub:'and students come to Martin' },
    { from:'wf_022', to:'wf_018', label:'delay past ~30 min → denature again', sub:'the fresh library has gone stale' }
  ]
};
