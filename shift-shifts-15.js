/* THE SHIFT · GRADED · IDI01 Catherine — 9 transformations, each on its own
   7-point scale. desire from 1.5.6 total_score; ability inversely from how
   upstream-authored the change is (the site cannot unilaterally build what the
   sponsor designs). frame = the reference-frame scale it rolls up into
   (shift-scales.js id). Rungs grounded in her moments where evidence exists. */
window.SHIFT_15 = [
  {
    id: "tx_001", frame: "sc_load", wand: true, short: "Direct handling",
    name: "Fragmented Product Units to Direct Handling",
    lowPole: "Fragmented units", highPole: "Direct handling",
    axis: "Fragmented, high-touch product handling becomes consolidated direct handling.",
    now: 1, ideal: 6, desire: 6, ability: 2, ev: null, nowEv: "NE-001", idealEv: "NE-001",
    rungs: [
      { label: "Four, five, six bags", desc: "Products arrive split across bags or vials, each thawed independently with waits between.", ev: "NE-001" },
      { label: "Eighteen vials", desc: "At the extreme, a dose is 18 vials, each thawed and Gram-stained by hand.", ev: "NE-005" },
      { label: "Batched", desc: "The site groups the handling steps, but the unit count is unchanged." },
      { label: "Consolidated prep", desc: "Fewer containers reach the bench; some steps are combined off the clock." },
      { label: "Few units", desc: "The product ships in one or two ready units, not a sequence to assemble." },
      { label: "One bag, ready to give", desc: "A single bag or vial, thawed and given to the patient.", ev: "NE-001" },
      { label: "No handling", desc: "The unit is administration-ready with no site-side assembly at all." }
    ]
  },
  {
    id: "tx_002", frame: "sc_load", wand: true, short: "Timing margin",
    name: "Time-Window Conflict to Timing Margin",
    lowPole: "Window conflict", highPole: "Timing margin",
    axis: "Tight and conflicting timing constraints become aligned timing with usable margin.",
    now: 1, ideal: 6, desire: 7, ability: 2, ev: null, nowEv: "NE-003", idealEv: null,
    rungs: [
      { label: "30 minutes or less", desc: "A thawed dose must reach the patient in half an hour; impossible in a large hospital.", ev: "NE-003" },
      { label: "Racing the clock", desc: "Thaw, transfer, transport, and a 3 PM shipping cutoff all collide inside the window.", ev: "NE-007" },
      { label: "Known deadlines", desc: "The timing constraints are mapped, even where they still conflict." },
      { label: "Some slack", desc: "The window is loosened enough to absorb an ordinary hiccup." },
      { label: "Workable window", desc: "Expiry and administration leave usable margin for the site's real workflow." },
      { label: "Four hours or more", desc: "Stability covers the full prepare-and-administer path with room to spare." },
      { label: "Timing-free", desc: "The dose is stable enough that timing is no longer a constraint." }
    ]
  },
  {
    id: "tx_003", frame: "sc_load", wand: false, short: "Capacity fit",
    name: "Capacity Strain to Capacity Fit",
    lowPole: "Capacity strain", highPole: "Capacity fit",
    axis: "Demand-overwhelmed execution becomes capacity-fit execution.",
    now: 1, ideal: 6, desire: 7, ability: 5, ev: null, nowEv: null, idealEv: "NE-006",
    rungs: [
      { label: "Won't keep up", desc: "A lab of safety cabinets can't scale to the multi-container products coming." },
      { label: "Absorbing demand", desc: "Rising requests are met only by stretching current staff and space." },
      { label: "Prioritised", desc: "The site triages which products it can take on." },
      { label: "Standardised", desc: "Shared workflows let the site handle more without more effort.", ev: "NE-006" },
      { label: "Scales with volume", desc: "Capacity grows with demand rather than against it." },
      { label: "Fits demand", desc: "Processing keeps pace with a growing portfolio comfortably." },
      { label: "Elastic", desc: "Volume is no longer a constraint on what the site can accept." }
    ]
  },
  {
    id: "tx_004", frame: "sc_integration", wand: false, short: "Standard method",
    name: "Sponsor-Specific Variability to Shared Method Standardization",
    lowPole: "Every sponsor differs", highPole: "Shared method",
    axis: "Idiosyncratic protocol variation becomes standardized, repeatable method.",
    now: 1, ideal: 6, desire: 7, ability: 3, ev: null, nowEv: "NE-002", idealEv: "NE-006",
    rungs: [
      { label: "Every sponsor different", desc: "Each sponsor has its own way of doing the same task." },
      { label: "Absorbed per trial", desc: "The site relearns and revalidates for each sponsor's protocol." },
      { label: "Documented", desc: "Per-sponsor methods are written down, still idiosyncratic." },
      { label: "Converging", desc: "Common steps are pulled toward a shared procedure.", ev: "NE-006" },
      { label: "Shared method", desc: "One standardized, repeatable method covers most trials." },
      { label: "Standard by default", desc: "Sponsors adopt the site's validated shared method.", ev: "NE-006" },
      { label: "Universal", desc: "Method variation is designed out across the portfolio." }
    ]
  },
  {
    id: "tx_005", frame: "sc_constraint", wand: false, short: "Validated case",
    name: "Evidence Gap to Validated Change Case",
    lowPole: "Evidence gap", highPole: "Validated case",
    axis: "Unsupported requests become evidence-backed decision cases.",
    now: 1, ideal: 6, desire: 7, ability: 4, ev: null, nowEv: "NE-009", idealEv: "NE-011",
    rungs: [
      { label: "No data", desc: "A request is refused because stability or validation evidence doesn't exist." },
      { label: "Unsupported ask", desc: "The sponsor wants an exception but can't back it." },
      { label: "Case opened", desc: "The site and sponsor start gathering what's needed." },
      { label: "Partial evidence", desc: "Some data supports a limited, conditional change." },
      { label: "Validated", desc: "Evidence and validation turn a hard 'no' into a documented yes.", ev: "NE-011" },
      { label: "Change case in hand", desc: "The exception is backed by data before it's even requested.", ev: "NE-011" },
      { label: "Pre-cleared", desc: "Evidence is built in, so the change never needs to be argued." }
    ]
  },
  {
    id: "tx_006", frame: "sc_constraint", wand: false, short: "Shared understanding",
    name: "Sponsor Misunderstanding to Shared Constraint Understanding",
    lowPole: "Misunderstood", highPole: "Shared understanding",
    axis: "Misaligned understanding becomes shared constraint understanding.",
    now: 1, ideal: 6, desire: 6, ability: 5, ev: null, nowEv: "NE-008", idealEv: "NE-002",
    rungs: [
      { label: "Blamed on the hospital", desc: "Sponsors read a regulatory barrier as the site being difficult.", ev: "NE-008" },
      { label: "Explained again", desc: "The site educates sponsors repeatedly that it's regulation, not preference.", ev: "NE-010" },
      { label: "Escalated", desc: "The PI and medical director are pulled in to make it legible." },
      { label: "Acknowledged", desc: "The sponsor accepts the constraint is real." },
      { label: "Understood", desc: "The sponsor grasps why the boundary exists.", ev: "NE-002" },
      { label: "Shared", desc: "Sponsor and site hold the same picture of the constraint.", ev: "NE-002" },
      { label: "Assumed", desc: "Sponsors know the site's constraints before they engage." }
    ]
  },
  {
    id: "tx_007", frame: "sc_constraint", wand: false, short: "Safety-bounded",
    name: "Undifferentiated Requests to Safety-Bounded Decisions",
    lowPole: "Anything goes", highPole: "Safety-bounded",
    axis: "Ambiguous requests become classified decision boundaries.",
    now: 1, ideal: 6, desire: 7, ability: 5, ev: null, nowEv: null, idealEv: null,
    rungs: [
      { label: "Anything goes", desc: "Requests arrive with no read on what's safe or compliant." },
      { label: "Case by case", desc: "Each request is judged from scratch against safety and AABB rules." },
      { label: "Triaged", desc: "Requests are sorted by whether they touch a hard boundary." },
      { label: "Bounded", desc: "Clear categories separate negotiable from non-negotiable." },
      { label: "Decision rules", desc: "A shared boundary tells sponsor and site what's possible up front." },
      { label: "Safety-bounded", desc: "Requests are shaped by known limits before they're even made." },
      { label: "Self-governing", desc: "The boundaries are built into how trials are proposed." }
    ]
  },
  {
    id: "tx_008", frame: "sc_integration", wand: false, short: "Operational fit",
    name: "Legacy Tool Mismatch to Validated Operational Fit",
    lowPole: "Tool mismatch", highPole: "Operational fit",
    axis: "Tool and method mismatch becomes validated operational fit.",
    now: 1, ideal: 6, desire: 6, ability: 4, ev: null, nowEv: "NE-012", idealEv: "NE-009",
    rungs: [
      { label: "Collides with practice", desc: "Sponsor devices and pump rules clash with the site's tools and nursing.", ev: "NE-012" },
      { label: "Worked around", desc: "The site bends its older, validated setup to each protocol." },
      { label: "Validated per case", desc: "Each instrument gets its own validation package." },
      { label: "Compatible", desc: "New methods are checked against the site's real equipment." },
      { label: "Fits the site", desc: "Products are chosen to work with existing validated tools.", ev: "NE-009" },
      { label: "Built to fit", desc: "Methods are co-developed and validated into the site before launch.", ev: "NE-011" },
      { label: "Native fit", desc: "The method assumes the site's setup; no adaptation needed." }
    ]
  },
  {
    id: "tx_009", frame: "sc_constraint", wand: false, short: "Verifiable receipt",
    name: "Opaque Product Receipt to Verifiable Product Receipt",
    lowPole: "Opaque receipt", highPole: "Verifiable receipt",
    axis: "Opaque receipt becomes inspectable, verifiable receipt.",
    now: 1, ideal: 6, desire: 4, ability: 5, ev: null, nowEv: "NE-009", idealEv: null,
    rungs: [
      { label: "Can't verify", desc: "A sponsor resists the site opening the Dewar to confirm the right product.", ev: "NE-009" },
      { label: "Pulled out", desc: "Inspection friction can cost a trial outright.", ev: "NE-009" },
      { label: "Negotiated", desc: "Arrival checks are argued case by case." },
      { label: "Documented", desc: "Inspection steps are agreed and written into the protocol." },
      { label: "Verifiable", desc: "The site confirms identity and integrity on arrival without friction." },
      { label: "Transparent", desc: "Product receipt is inspectable by design." },
      { label: "Assured", desc: "Identity and integrity are guaranteed before it ever ships." }
    ]
  }
];
