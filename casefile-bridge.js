/* =========================================================
   CASEFILE · the hinge + the decision spine ("The Call").
   - concern ↔ crux bipartite map, computed from shared atoms
   - the evidence-gap worklist (the "what we don't know yet"
     to-do list that tags each gap to the concern/crux/outcome
     it unblocks and the decision it gates)
   - the KT pipeline (SA → PA → gates → Decision Analysis →
     Potential Problem Analysis) with COT mapped onto it
   - decision-brief cards: each candidate move scored against
     must/want outcomes, gated by open evidence
   Loaded after casefile-data.js + crux-data.js + odi-data.js.
   ========================================================= */
window.CASE = window.CASE || {};

(function () {
  const R = window.RESEARCH;
  const CR = (R && R.cruxes) || [];
  const cruxById = Object.fromEntries(CR.map(c => [c.id, c]));

  const SHORT = { crux_001:"Upstream lock-in", crux_002:"Time slack", crux_003:"Sponsor gaps",
                  crux_004:"Protocol lock-in", crux_005:"Site capacity", crux_006:"Nursing capability" };
  CASE.cruxShort = SHORT;
  CASE.crux = (id) => cruxById[id];

  /* ---- concern ↔ crux edges from shared atoms ---- */
  function inter(a, b) { const S = new Set(a); return b.filter(x => S.has(x)); }
  const edges = [];
  CASE.concerns.forEach(c => {
    CR.forEach(k => {
      const sh = inter(c.atoms, k.atoms);
      if (sh.length) edges.push({ concern:c.id, crux:k.id, n:sh.length, atoms:sh });
    });
  });
  CASE.concernCruxEdges = edges;
  // primary crux per concern (largest shared-atom load)
  CASE.primaryCrux = {};
  CASE.concerns.forEach(c => {
    const es = edges.filter(e => e.concern === c.id).sort((a,b) => b.n - a.n);
    CASE.primaryCrux[c.id] = es.length ? es[0].crux : null;
  });
  CASE.cruxesFor = (cid) => edges.filter(e => e.concern === cid).sort((a,b) => b.n - a.n);
  CASE.concernsFor = (kid) => edges.filter(e => e.crux === kid).sort((a,b) => b.n - a.n);

  /* ---- the evidence-gap worklist (the hinge) ----
     The five situation-appraisal gaps, each tagged to what it
     unblocks downstream. `gates` names the decision it holds up. */
  CASE.gaps = [
    { id:"gap_001",
      q:"How much processing capacity, utilization, and backlog does the site actually have as volume grows?",
      concerns:["concern_001"], cruxes:["crux_005","crux_001"], outcome:"OUT001", tx:"tx_003",
      gates:"dec_01", gatesLabel:"Fit capacity to the growing volume",
      learn:"Measure current processing load, safety-cabinet utilization, staffing, and backlog across a quarter.",
      why:"Separates a scaling investment from a workflow-simplification fix." },
    { id:"gap_002",
      q:"How often do multi-container and short-expiration products occur, and how much staff and nursing time do they consume?",
      concerns:["concern_002","concern_003"], cruxes:["crux_002","crux_001"], outcome:"OUT004", tx:"tx_001",
      gates:"dec_02", gatesLabel:"Consolidate the product presentation upstream",
      learn:"Log container count, thaw, wait, and administration time, and timing near-misses per product.",
      why:"Sizes the prize for pushing consolidation and stability upstream to the sponsor." },
    { id:"gap_003",
      q:"Which products and sponsors lack stability data beyond the labeled expiration?",
      concerns:["concern_004","concern_003"], cruxes:["crux_003","crux_002"], outcome:"OUT006", tx:"tx_005",
      gates:"dec_03", gatesLabel:"Build the stability-evidence case",
      learn:"Inventory affected products and whether post-expiration stability studies exist.",
      why:"Decides whether the window can be widened with evidence or must be designed around." },
    { id:"gap_004",
      q:"How often are post-infusion sample pickups missed, and what happens downstream when they are?",
      concerns:["concern_005"], cruxes:["crux_002"], outcome:"OUT011", tx:"tx_002",
      gates:"dec_04", gatesLabel:"Align sampling windows with the courier cutoff",
      learn:"Track infusion and collection times against the 3:00 PM pickup across trials.",
      why:"Tells you whether to renegotiate protocol timing or add a courier option." },
    { id:"gap_005",
      q:"How often does sponsor unfamiliarity with regulation and accreditation create friction across trials?",
      concerns:["concern_006"], cruxes:["crux_003"], outcome:"OUT012", tx:"tx_006",
      gates:"dec_05", gatesLabel:"Set the boundaries with sponsors before activation",
      learn:"Count regulatory-education episodes and their causes over a run of trial setups.",
      why:"Separates a one-time onboarding fix from a per-sponsor negotiation burden." },
    { id:"gap_006",
      q:"How often do device-validation objections and no-pump protocols collide with site capability and nursing training?",
      concerns:["concern_007","concern_008"], cruxes:["crux_004","crux_006"], outcome:"OUT020", tx:"tx_008",
      gates:"dec_06", gatesLabel:"Validate method-operation fit before adoption",
      learn:"Record device-validation and pump-restriction events and where nursing capability falls short.",
      why:"Keeps an equipment-and-training bet from being made on anecdote." }
  ];
  CASE.gapById = Object.fromEntries(CASE.gaps.map(g => [g.id, g]));

  /* ---- the KT rational-process pipeline (SA → PA → gates → DA → PPA) ---- */
  CASE.pipeline = [
    { id:"sa", kt:"Situation Appraisal", nod:"Sort the concerns",
      verb:"Clarify · prioritize · plan",
      in:"Raw observations", out:"8 ranked concerns, clustered",
      body:"List every concern, separate problem from risk, rank by urgency, impact and trend, and decide what to look at first.",
      target:"#diagnosis", targetLabel:"Triage", half:"diagnosis" },
    { id:"pa", kt:"Problem Analysis", nod:"Find the cause",
      verb:"Specify · compare · test",
      in:"One prioritized concern", out:"A most-plausible cause",
      body:"State the deviation, bound it with IS / IS-NOT, list candidate causes, and select the one the evidence best supports.",
      target:"#diagnosis", targetLabel:"Open a concern", half:"diagnosis" },
    { id:"gate", kt:"Evidence gates", nod:"What we don't know yet",
      verb:"Name · assign · resolve",
      in:"Critical missing evidence", out:"A worklist that clears",
      body:"Each cause carries the evidence still missing to trust it. Until those gates clear, a decision rests on assumption.",
      target:"#gates", targetLabel:"The worklist", half:"hinge" },
    { id:"da", kt:"Decision Analysis", nod:"Choose the move",
      verb:"Objectives · alternatives · weigh",
      in:"Cleared cause + objectives", out:"A leading option",
      body:"Set the must-have and want-to-have objectives, lay the alternatives against them, and weigh the best balance of value and risk.",
      target:"#call", targetLabel:"The brief", half:"decision" },
    { id:"ppa", kt:"Potential Problem Analysis", nod:"Protect the move",
      verb:"Anticipate · guard",
      in:"The leading option", out:"Risks to watch",
      body:"Before committing, name what could go wrong with the chosen move and what would tell you early.",
      target:"#call", targetLabel:"The brief", half:"decision" }
  ];

  /* ---- COT → existing-lens map (what the decision half plugs into) ---- */
  CASE.cot = [
    { key:"Cruxes", kt:"feeds Decision Analysis", role:"Where the decision pivots",
      blurb:"The load-bearing problems Problem Analysis surfaces. One crux, upstream lock-in, carries the load of three others: pull it and the rest redistribute.",
      from:"Problem Analysis", lens:"the-keystone.html", lensName:"The Keystone",
      pick:"crux_001", pickLabel:"Upstream lock-in \u00b7 rank 1" },
    { key:"Outcomes", kt:"sets the criteria", role:"What good looks like",
      blurb:"The desired outcomes become the must-have and want-to-have objectives a decision is weighed against, scored by importance and satisfaction.",
      from:"the deviation statements", lens:"the-opportunity.html", lensName:"The Opportunity",
      pick:"OUT005", pickLabel:"Dose expires before administration \u00b7 opportunity 5" },
    { key:"Transformations", kt:"are the alternatives", role:"The candidate moves & their risks",
      blurb:"Each friction rewritten as a state change is a candidate alternative. Evaluated against the outcomes, then stress-tested for what could go wrong.",
      from:"every concern", lens:"the-shift.html", lensName:"The Shift",
      pick:"tx_001", pickLabel:"Consolidate the product presentation" }
  ];

  /* ---- decision-brief cards: candidate moves, scored & gated ---- */
  // musts  = binding criteria (Risk-class outcomes that must not fail)
  // wants  = weighted desirables (Functional / Organizational outcomes)
  CASE.decisions = [
    { id:"dec_01", tx:"tx_003", crux:"crux_005",
      title:"Fit capacity to the growing volume",
      statement:"Should the next bet expand and modernize processing capacity, or simplify the workflow that consumes it?",
      concerns:["concern_001"],
      musts:[], wants:["OUT001","OUT018","OUT024"],
      gaps:["gap_001"],
      risks:["Adding capacity without simplifying handling just scales a high-touch workflow.","A safety-cabinet-based model may not scale even with more staff or space.","Volume growth is driven upstream by trials and approvals the site does not control."],
      lens:"the-shift.html" },

    { id:"dec_02", tx:"tx_001", crux:"crux_001",
      title:"Consolidate the product presentation upstream",
      statement:"Should the site push sponsors toward a single ready-to-administer container rather than multi-bag, multi-vial doses?",
      concerns:["concern_002","concern_001"],
      musts:["OUT005"], wants:["OUT002","OUT003","OUT004"],
      gaps:["gap_002"],
      risks:["Container count is fixed upstream in the IND and pivotal trial, before the site ever sees it.","Consolidation may not be possible for products whose format is tied to manufacturing.","If multi-container products are rare, the payback may not justify the negotiation."],
      lens:"the-shift.html" },

    { id:"dec_03", tx:"tx_005", crux:"crux_003",
      title:"Build the stability-evidence case",
      statement:"Should the site require sponsor stability data covering the real preparation and administration time before activation?",
      concerns:["concern_004","concern_003"],
      musts:["OUT006"], wants:["OUT005","OUT019"],
      gaps:["gap_003"],
      risks:["Sponsors may not have post-expiration stability data to give, whatever the site requires.","A hard data requirement could slow or block otherwise workable trials.","Wider windows still leave the multi-container and transport time unaddressed."],
      lens:"the-shift.html" },

    { id:"dec_04", tx:"tx_002", crux:"crux_002",
      title:"Align sampling windows with the courier cutoff",
      statement:"Should protocol sampling times be aligned to the fixed pickup deadline, or should the courier window be renegotiated?",
      concerns:["concern_005"],
      musts:["OUT011"], wants:["OUT010"],
      gaps:["gap_004"],
      risks:["Sampling times are set by protocol, which the site cannot change unilaterally.","A later or second pickup adds cost and may not exist on the route.","If missed pickups are rare, the coordination effort may exceed the harm."],
      lens:"the-shift.html" },

    { id:"dec_05", tx:"tx_006", crux:"crux_003",
      title:"Set the boundaries with sponsors before activation",
      statement:"Should regulatory, accreditation, and inspection requirements be settled with sponsors before a trial is activated rather than explained after?",
      concerns:["concern_006"],
      musts:["OUT013"], wants:["OUT012","OUT014","OUT015"],
      gaps:["gap_005"],
      risks:["Some sponsors will still object even once the rationale is clear.","Front-loading requirements could deter sponsors before a trial starts.","Regulation and accreditation are external boundaries the site cannot relax to compromise."],
      lens:"the-shift.html" },

    { id:"dec_06", tx:"tx_008", crux:"crux_004",
      title:"Validate method-operation fit before adoption",
      statement:"Should sponsor devices, pumps, and methods be tested against site validation and nursing capability before they are accepted?",
      concerns:["concern_007","concern_008"],
      musts:["OUT020"], wants:["OUT021","OUT022","OUT023"],
      gaps:["gap_006"],
      risks:["A device not in the sponsor's IND gets refused regardless of site validation.","Building manual-drip nursing capability takes time the trial timeline may not allow.","Accepting many sponsor gadgets risks burying the site in equipment."],
      lens:"the-shift.html" }
  ];
  CASE.decisionById = Object.fromEntries(CASE.decisions.map(d => [d.id, d]));
  CASE.decisionForGap = (gapId) => CASE.decisions.find(d => (d.gaps || []).includes(gapId));

  // outcome lookup helper (ODI registry)
  CASE.outcome = (id) => (window.ODI ? window.ODI.byId(id) : null);
})();
