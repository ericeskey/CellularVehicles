/* =========================================================
   THE SHIFT · GRADED · IDI01 Catherine
   Catherine's three reference frames (1.5.3/1.5.4), each rewritten
   as a 7-point behaviourally-anchored scale. now/ideal = where the
   site sits today and where it needs to be. Rungs are grounded in
   her own moments (ev → window.RESEARCH event ids) where evidence exists.
   ========================================================= */
window.SHIFT_SCALES = [
  {
    id: "sc_load",
    frame: "Execution Load State",
    txs: ["tx_001", "tx_002", "tx_003"],
    wand: true,
    lowPole: "Overloaded",
    highPole: "Within capacity",
    axis: "How much the product's format and timing overload the site's hands, clock, and capacity.",
    now: 2,
    ideal: 6,
    rungs: [
      { label: "Buried", desc: "Multi-bag, multi-vial products and 30-minute clocks pile more handling on staff than the day can hold.", ev: "NE-005" },
      { label: "Absorbing it", desc: "The site keeps up only by absorbing three-hour administrations and racing post-thaw windows by hand.", ev: "NE-003" },
      { label: "Triaged", desc: "The heaviest products are known and worked around case by case, but nothing lightens the load itself." },
      { label: "Bounded", desc: "Handling steps, waits, and timing are mapped, so the site can plan against them instead of being surprised." },
      { label: "Fits the window", desc: "Product format and stability leave usable margin for the site's real workflow." },
      { label: "Ready to give", desc: "One bag or vial, thawed and given, inside a timeline the site can actually meet.", ev: "NE-001" },
      { label: "Effortless", desc: "Volume can grow without adding load; the format scales with demand." }
    ]
  },
  {
    id: "sc_constraint",
    frame: "Constraint Changeability State",
    txs: ["tx_005", "tx_006", "tx_007", "tx_009"],
    wand: false,
    lowPole: "Misread as fixed",
    highPole: "Moved by evidence",
    axis: "Whether a barrier gets treated as the hospital's obstruction or reconciled through evidence, alignment, and shared understanding.",
    now: 2,
    ideal: 6,
    rungs: [
      { label: "Blamed on the site", desc: "Sponsors read a regulatory or accreditation barrier as the hospital being difficult.", ev: "NE-008" },
      { label: "Explained again", desc: "The site educates sponsors again and again that the barrier is regulation, not preference.", ev: "NE-010" },
      { label: "Escalated", desc: "The PI and medical director are pulled in to make the constraint legible." },
      { label: "Understood", desc: "Sponsors grasp why the boundary exists and stop mistaking it for obstruction.", ev: "NE-002" },
      { label: "Evidenced", desc: "Stability data and validation turn a hard 'no' into a workable, documented case.", ev: "NE-011" },
      { label: "Aligned", desc: "Sponsor and site share the constraint and design around it together.", ev: "NE-011" },
      { label: "Anticipated", desc: "Constraints are known and reconciled before a trial is ever proposed." }
    ]
  },
  {
    id: "sc_integration",
    frame: "Method Integration Fit",
    txs: ["tx_004", "tx_008"],
    wand: false,
    lowPole: "Forced to fit",
    highPole: "Designed to fit",
    axis: "How well a sponsor's product, device, or protocol fits the site's validated methods, equipment, and staff.",
    now: 2,
    ideal: 5,
    rungs: [
      { label: "Misfit", desc: "Sponsor-specific devices and protocols collide with the site's validated tools and nursing practice.", ev: "NE-012" },
      { label: "Worked around", desc: "The site absorbs each sponsor's different way of doing the same thing, tool by tool." },
      { label: "Documented", desc: "Instruments and methods are validated case by case, with a package per sponsor." },
      { label: "Standardizing", desc: "Shared methods start to replace idiosyncratic per-sponsor procedures.", ev: "NE-006" },
      { label: "Fits the site", desc: "Products and devices are chosen to work with the site's existing validated setup.", ev: "NE-009" },
      { label: "Built in from the start", desc: "New methods are co-developed and validated into the site before launch.", ev: "NE-011" },
      { label: "Native", desc: "The product assumes the site's reality; integration is a non-event." }
    ]
  }
];
