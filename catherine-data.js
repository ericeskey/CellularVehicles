/* =========================================================
   RESEARCH DATA · IDI01 Catherine, 2026-07-01
   One interview (ARMI / cell-therapy site delivery), parsed by
   the WHALE_HUNT pipeline into 52 observation atoms and seven
   independent analytic readings. The atoms are the shared
   substrate; every reading references them by id.

   Provenance (uploads/):
     atoms      · 1.0_observation_atoms.md            (OA001–OA052)
     Chronology · 2.1.x moment discovery + charge
     Peaks      · 2.2.1.0_narrative_peak_detection.md (NPK001–003)
     Narratives · 2.2.1.2.1_narrative_structure.md    (NS001–003)
     Transform. · 1.5.5_transformation_discovery.md   (TR001–009)
     Skills     · 1.5.7_skill_discovery.md            (SKL001–006)
     Cruxes     · 1.2_crux_discovery.md               (CRX001–006)
     Outcomes   · 1.4.4_odi_outcome_prioritization.md (OUT001–024)
     Priors     · 1.2 + 1.3.1_kt_situation_appraisal.md (authored)

   Each reading's atom set is the CURATED core evidence of that
   reading (its most load-bearing atoms), not every atom it
   touches — so consensus means several independent lenses
   centred on the same observation.
   ========================================================= */
window.RESEARCH = {
  meta: {
    participant: "Catherine",
    role: "Operations & scientific director, cell-therapy facility",
    org: "Academic medical-center cell-therapy facility",
    interviewer: "Daniel",
    date: "2026-07-01",
    ref: "IDI01",
    subject: "Delivering cell therapies at the treatment site",
    line: "The therapy works because the site absorbs what the sponsor designed."
  },

  /* ---- the substrate: 52 observation atoms, in interview order ----
     line   = source line in the normalized transcript (monotonic → x-axis)
     kind   = friction · desire · context
     charge = 1 low · 2 medium · 3 high (experiential weight)
     phase  = where the burden is AUTHORED (re-sort by decision owner) */
  atoms: [
    { id:"OA001", line:27,  kind:"context",  charge:2, phase:"Cross-cutting", title:"Requests for processing keep rising", quote:"requests more and more for processing" },
    { id:"OA002", line:28,  kind:"context",  charge:2, phase:"Prepare",       title:"About 30% of products need in-lab manipulation", quote:"30% of our products need some in la- in-lab manipulation" },
    { id:"OA003", line:31,  kind:"context",  charge:1, phase:"Cross-cutting", title:"They handle no in vivo therapies", quote:"do not handle any in vivo therapies" },
    { id:"OA004", line:31,  kind:"context",  charge:1, phase:"Cross-cutting", title:"Pharmacy owns the in vivo therapies", quote:"handled by the pharmacy department" },
    { id:"OA005", line:35,  kind:"desire",   charge:3, phase:"Container",     title:"Her wish: one bag or vial, ready to give", quote:"single bag or vial that is ready just to thaw and give to the patient" },
    { id:"OA006", line:35,  kind:"friction", charge:2, phase:"Container",     title:"Products can arrive in four, five, six bags", quote:"multiple bags, four, five, six bags" },
    { id:"OA007", line:35,  kind:"friction", charge:2, phase:"Container",     title:"Each bag must be thawed independently", quote:"have to be thawed independently" },
    { id:"OA008", line:35,  kind:"friction", charge:2, phase:"Container",     title:"There is a wait time between bags", quote:"have a wait time in between" },
    { id:"OA009", line:36,  kind:"friction", charge:3, phase:"Container",     title:"A multi-bag dose can take three hours to give", quote:"take three hours for my staff and the nursing staff to administer that product" },
    { id:"OA010", line:51,  kind:"friction", charge:3, phase:"Stability",     title:"Some products expire 30 minutes after thaw", quote:"30 minutes or less" },
    { id:"OA011", line:51,  kind:"friction", charge:2, phase:"Stability",     title:"Some need thawing across two or three vials", quote:"need to be thawed in two or three vials" },
    { id:"OA012", line:51,  kind:"friction", charge:2, phase:"Stability",     title:"Volume must be drawn into a syringe", quote:"placed into a syringe" },
    { id:"OA013", line:51,  kind:"friction", charge:3, phase:"Stability",     title:"The dose must reach the patient in 30 minutes", quote:"get in the patient within 30 minutes" },
    { id:"OA014", line:53,  kind:"friction", charge:2, phase:"Stability",     title:"Even an hour isn't enough sometimes", quote:"even an hour expiration really is not enough in some circumstances" },
    { id:"OA015", line:53,  kind:"friction", charge:3, phase:"Cross-cutting", title:"Sponsors don't understand the problem", quote:"they don't understand the problem" },
    { id:"OA016", line:53,  kind:"friction", charge:3, phase:"Stability",     title:"Sponsors won't or can't share stability data", quote:"not willing or able or have the data" },
    { id:"OA017", line:54,  kind:"context",  charge:1, phase:"Stability",     title:"Products they make in-house get four hours+", quote:"four hours or more expiration" },
    { id:"OA018", line:61,  kind:"friction", charge:3, phase:"Container",     title:"One current product arrives as 18 vials", quote:"18 individual vials" },
    { id:"OA019", line:61,  kind:"friction", charge:2, phase:"Container",     title:"Every one of the 18 vials must be thawed", quote:"have to be thawed" },
    { id:"OA020", line:61,  kind:"friction", charge:2, phase:"Container",     title:"Every vial needs a Gram stain", quote:"Gram stain performed" },
    { id:"OA021", line:67,  kind:"friction", charge:3, phase:"Stability",     title:"It must reach the OR patient within four hours", quote:"within four hours" },
    { id:"OA022", line:73,  kind:"context",  charge:2, phase:"Cross-cutting", title:"They support about 100 clinical trials", quote:"about 100 clinical trials" },
    { id:"OA023", line:73,  kind:"friction", charge:2, phase:"Protocol",      title:"Every sponsor does the same thing differently", quote:"every single sponsor has their own different way of doing the same thing" },
    { id:"OA024", line:75,  kind:"context",  charge:2, phase:"Protocol",      title:"Some samples are drawn hours after infusion", quote:"collected so many hours after the infusion" },
    { id:"OA025", line:75,  kind:"friction", charge:2, phase:"Protocol",      title:"Those samples must make a 3:00 PM FedEx pickup", quote:"3:00 PM FedEx pickup" },
    { id:"OA026", line:78,  kind:"friction", charge:2, phase:"Deliver",       title:"A four-hour sample can miss the pickup", quote:"we've missed the FedEx pickup" },
    { id:"OA027", line:88,  kind:"context",  charge:2, phase:"Cross-cutting", title:"CDPH requires them to follow AABB rules", quote:"requires us to follow the AABB" },
    { id:"OA028", line:89,  kind:"context",  charge:1, phase:"Cross-cutting", title:"Those rules are stricter elsewhere", quote:"more strict in other parts of the country" },
    { id:"OA029", line:91,  kind:"friction", charge:3, phase:"Cross-cutting", title:"She explained 3+ times last month it's not the hospital", quote:"at least three times in the last month" },
    { id:"OA030", line:93,  kind:"context",  charge:1, phase:"Receive",       title:"The facility is FACT accredited", quote:"we are FACT accredited" },
    { id:"OA031", line:93,  kind:"context",  charge:1, phase:"Cross-cutting", title:"Many biotechs are not FACT accredited", quote:"are not FACT accredited" },
    { id:"OA032", line:93,  kind:"friction", charge:2, phase:"Cross-cutting", title:"Some sponsors don't know what FACT is", quote:"maybe even don't know what FACT is" },
    { id:"OA033", line:94,  kind:"friction", charge:3, phase:"Receive",       title:"A sponsor pulled out over arrival inspection", quote:"pulled out of a trial" },
    { id:"OA034", line:96,  kind:"context",  charge:1, phase:"Receive",       title:"They open the Dewar to verify the right product", quote:"checking that they've sent us the right product" },
    { id:"OA035", line:95,  kind:"friction", charge:3, phase:"Receive",       title:"They can't store a hundred Dewars", quote:"we can't store a hundred Dewars" },
    { id:"OA036", line:101, kind:"context",  charge:1, phase:"Cross-cutting", title:"They try to educate the sponsors", quote:"educate the sponsors" },
    { id:"OA037", line:102, kind:"context",  charge:1, phase:"Cross-cutting", title:"They pull in the PI and medical director", quote:"pull in the PI and our medical director" },
    { id:"OA038", line:103, kind:"context",  charge:1, phase:"Cross-cutting", title:"They can often reach a compromise", quote:"come to a compromise" },
    { id:"OA039", line:104, kind:"friction", charge:2, phase:"Deliver",       title:"Sometimes they have to say no", quote:"we have to say no" },
    { id:"OA040", line:107, kind:"friction", charge:2, phase:"Prepare",       title:"The lab is a 15-minute walk across campus", quote:"15-minute walk across campus" },
    { id:"OA041", line:128, kind:"friction", charge:2, phase:"Receive",       title:"They need a validation package per instrument", quote:"validation package" },
    { id:"OA042", line:129, kind:"friction", charge:3, phase:"Receive",       title:"Accept sponsor gadgets and they'd be buried in equipment", quote:"we would be buried in equipment" },
    { id:"OA043", line:127, kind:"friction", charge:2, phase:"Protocol",      title:"If it isn't in the IND, the sponsor says no", quote:"then they're gonna say no" },
    { id:"OA044", line:155, kind:"context",  charge:2, phase:"Protocol",      title:"Some sponsors require infusion pumps", quote:"use infusion pumps" },
    { id:"OA045", line:157, kind:"friction", charge:2, phase:"Protocol",      title:"Many sponsors forbid infusion pumps", quote:"do not use an infusion pump" },
    { id:"OA046", line:158, kind:"friction", charge:2, phase:"Prepare",       title:"Nurses aren't trained for manual drips anymore", quote:"do not get trained how to do manual, drip infusions without an infusion pump anymore" },
    { id:"OA047", line:148, kind:"context",  charge:1, phase:"Cross-cutting", title:"Most cell-therapy facilities are similar", quote:"are very similar" },
    { id:"OA048", line:150, kind:"friction", charge:2, phase:"Prepare",       title:"They rely on older tech: water baths, BSCs", quote:"we do rely on older technology" },
    { id:"OA049", line:169, kind:"context",  charge:1, phase:"Cross-cutting", title:"About 12–13 approved commercial therapies", quote:"12 or 13 approved commercial cell therapies" },
    { id:"OA050", line:169, kind:"context",  charge:2, phase:"Cross-cutting", title:"More commercial therapies keep coming", quote:"more and more coming out" },
    { id:"OA051", line:170, kind:"friction", charge:3, phase:"Container",     title:"Multi-bag persists because the trial was run that way", quote:"multiple bag infusions" },
    { id:"OA052", line:186, kind:"friction", charge:3, phase:"Cross-cutting", title:"A lab of safety cabinets won't keep up", quote:"not gonna be able to keep up" }
  ],

  /* ---- seven independent readings · each votes for the atoms it seizes on ----
     ORDER matters: this is the sequence the demo applies them in. */
  order: ["Chronology", "Peaks", "Narratives", "Transformation", "Skills", "Cruxes", "Outcomes"],
  readingAtoms: {
    // the plain first read — the highest-charge moments as you listen
    Chronology:     ["OA005","OA009","OA010","OA013","OA015","OA016","OA018","OA021","OA029","OA033","OA035","OA042","OA051","OA052"],
    // NPK001–003 · the three dramatic turns' core evidence
    Peaks:          ["OA005","OA009","OA010","OA018","OA020","OA021","OA029","OA033","OA035","OA039","OA041","OA042","OA043","OA052"],
    // NS001–003 · the three arcs' spine
    Narratives:     ["OA001","OA005","OA006","OA007","OA009","OA010","OA013","OA018","OA021","OA027","OA033","OA034","OA035","OA041","OA042","OA051","OA052"],
    // TR001 handling · TR002 timing · TR003 capacity — the state-change cores
    Transformation: ["OA005","OA006","OA007","OA008","OA009","OA010","OA011","OA012","OA013","OA014","OA016","OA018","OA019","OA020","OA021","OA051","OA052"],
    // SKL002 capacity-fit · SKL001 timing-map · SKL003 standardize
    Skills:         ["OA001","OA002","OA006","OA007","OA009","OA010","OA018","OA020","OA022","OA023","OA035","OA042","OA048","OA050","OA051","OA052"],
    // CRX001 upstream-dependency · CRX002 time-slack bottleneck
    Cruxes:         ["OA006","OA009","OA010","OA013","OA016","OA018","OA021","OA023","OA033","OA035","OA041","OA045","OA051","OA052"],
    // top ODI opportunities (opp 5): OUT005/004/001/006/010/023/019/011
    Outcomes:       ["OA001","OA005","OA009","OA010","OA013","OA014","OA016","OA023","OA026","OA046","OA051","OA052"]
  },

  /* ---- re-sort beat: where the burden is AUTHORED (decision owner) ----
     Upstream lanes (sponsor / manufacturer) sit left of the divider;
     site lanes (the hospital) sit right; cross-cutting is the aside. */
  phases: [
    { k:"Container",     up:true  },
    { k:"Stability",     up:true  },
    { k:"Protocol",      up:true  },
    { k:"Receive",       up:false },
    { k:"Prepare",       up:false },
    { k:"Deliver",       up:false },
    { k:"Cross-cutting", up:false, aside:true }
  ],

  byId(id) { return this.atoms.find(a => a.id === id); }
};

/* ---- the room's priors: the reads a cell-therapy sponsor / developer
   walks in holding about what the treatment site wants. Stated neutrally
   at entry; judged against the evidence at the close. Grounded in the crux
   ranking and the situation appraisal. ---- */
window.PRIORS = [
  { tag:"The obvious bet", belief:"Automate the prep at the site.",
    why:"The visible pain is hours of manual thawing and handling. Put a machine on the bench and take the work off the staff.",
    implies:"ship the site an automated prep device to speed the hands-on work.",
    verdict:{ state:"reframed", label:"A device the site can't accept",
      note:"Off-the-shelf automation becomes “one more thing we'd be buried in.” It only lands if it's in the IND and validated for the exact instrument, from start to finish. The speed was never the site's to give." } },

  { tag:"The workflow read", belief:"Standardize the hospital's procedures.",
    why:"Every sponsor sees the same site doing the same task a different way. Impose one clean SOP and the friction goes away.",
    implies:"push a single standardized site workflow across your trials.",
    verdict:{ state:"reframed", label:"Standardize upstream, not the site",
      note:"The variation she can't absorb is authored by sponsors, not the hospital: “every single sponsor has their own different way of doing the same thing.” Standardize the product and protocol, not the site that receives them." } },

  { tag:"The relationship read", belief:"The site just needs to understand our protocol.",
    why:"Trial friction reads like a communication gap. Educate the site, explain the requirements, and it clears.",
    implies:"invest in explaining your protocol and requirements to the site.",
    verdict:{ state:"overturned", label:"It runs the other way",
      note:"She is the one educating sponsors — three times last month — that a barrier is regulation and accreditation, not hospital preference. The gap is the sponsor not understanding the hospital. Some sponsors don't even know what FACT is." } },

  { tag:"The capacity read", belief:"Scale the facility to keep up with demand.",
    why:"Volume is climbing — about 100 trials, more therapies every year. Add throughput and space and the site keeps pace.",
    implies:"help the site add capacity, storage, and staff.",
    verdict:{ state:"reframed", label:"You can't out-scale the format",
      note:"A lab of biological safety cabinets “is not gonna be able to keep up” against multi-container, short-expiry products. The demand isn't for more site capacity; it's for products that don't consume the scarce time the site has." } }
];

window.EMERGENT = {
  belief:"Design the product for the site — from the start.",
  note:"The widest signal on the board was on no one's list: continuity from the sponsor's design bench to the patient's bedside. Container count, stability window, protocol, and device are all decided upstream, before the product ever ships — and dysfunction built into the pivotal trial persists after approval. The lever the evidence points to is upstream, not at the site." };
