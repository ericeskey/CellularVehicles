/* =========================================================
   MOMENTS · R01 Martin — the experiential layer.
   Sourced from uploads/moment_discovery.md (moments → events + quote),
   moment_classification.md (emotion → valence), and
   journey_timeline.md (pits / peaks / desired-future).
   step = position in the job of producing reliable sequencing data
   (ODI job_001 step vocabulary). val = emotional valence (-1 low · 0 · +1).
   ========================================================= */
window.MOMENTS = [
  { id:'MOM-001', n:1,  title:'Becoming the guy for everything', type:'identity_shift', emotion:'Pride · Insight',     step:6, val:0,  pit:false, time:'05:30', quote:"My personal role now is I'm the guy for everything… I'm in between everything right now." },
  { id:'MOM-002', n:2,  title:'The workflow loses routine',      type:'uncertainty',     emotion:'Insight',            step:6, val:-1, pit:true,  time:'07:29', quote:"We're not in a diagnostic rotation where everything is fluent." },
  { id:'MOM-003', n:3,  title:'The sample sheet stops the machine', type:'frustration',  emotion:'Insight · Connection', step:2, val:-1, pit:true,  time:'12:14', quote:"They hit that break, and they're useless. They have to come to me." },
  { id:'MOM-004', n:4,  title:'The machine feels cared for',     type:'success',         emotion:'Connection · Elevation', step:3, val:1, pit:false, time:'20:00', quote:"This machine gives me good data. So I'm kind of taking care of it." },
  { id:'MOM-005', n:5,  title:'The machine is in the wrong place', type:'workflow_shift', emotion:'Insight',           step:0, val:-1, pit:true,  time:'24:00', quote:"We could place it into our PCR like where the work was actually happening." },
  { id:'MOM-006', n:6,  title:'The fresh sample creates a race', type:'pit',             emotion:'Elevation · Insight', step:1, val:-1, pit:true,  time:'27:00', quote:"Put everything on ice, and you try to hurry to the machine." },
  { id:'MOM-007', n:7,  title:'Denaturing becomes the step to remove', type:'frustration', emotion:'Insight · Elevation', step:1, val:-1, pit:true, time:'31:00', quote:"It feels unnecessary that you have to do it… give the machine a library, and I get my sequencing data." },
  { id:'MOM-008', n:8,  title:'MiSeq protects against expensive mistakes', type:'decision', emotion:'Pride · Insight', step:5, val:1,  pit:false, time:'34:00', quote:"We have to adjust certain things before we spend 10 to 20,000 euros on a NovaSeq run." },
  { id:'MOM-009', n:9,  title:'One hard day would preserve momentum', type:'workflow_shift', emotion:'Insight · Pride', step:6, val:0,  pit:false, time:'38:30', quote:"That would be perfect for me because then I would do everything on one day." },
  { id:'MOM-010', n:10, title:'Packaging waste feels sad',       type:'pit',             emotion:'Connection · Insight', step:0, val:-1, pit:true,  time:'44:30', quote:"It always makes me a bit sad how much is produced by these styrofoam boxes." },
  { id:'MOM-011', n:11, title:'Delayed data breaks the thread',  type:'pit',             emotion:'Insight',            step:4, val:-1, pit:true,  time:'47:00', quote:"The workflow is fragmentated like that." },
  { id:'MOM-012', n:12, title:'Four hours would feel like real throughput', type:'breakthrough', emotion:'Elevation · Pride', step:3, val:1, pit:false, time:'50:00', quote:"Make it four hours run time. That would be perfect." },
  { id:'MOM-013', n:13, title:'Built-in analysis is rejected; FASTQ is the ask', type:'realization', emotion:'Insight', step:5, val:0,  pit:false, time:'54:00', quote:"It would be helpful to have a choice of some standard input data." },
  { id:'MOM-014', n:14, title:'Reflection becomes its own reward', type:'realization',   emotion:'Insight · Connection', step:6, val:1,  pit:false, time:'56:29', quote:"It was fun. It's always nice to think about your work." }
];

window.JOB_STEPS = [
  { key:'Locate',       gloss:'access the machine & materials' },
  { key:'Prepare',      gloss:'ready the run' },
  { key:'Confirm',      gloss:'confirm it can proceed' },
  { key:'Execute',      gloss:'run the sequencing' },
  { key:'Monitor',      gloss:'track when it finishes' },
  { key:'Conclude',     gloss:'make data usable · decide next' },
  { key:'Cross-cutting', gloss:'spans the whole job' }
];
