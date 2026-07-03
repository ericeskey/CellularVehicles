/* =========================================================
   CASEFILE · IDI01 Catherine, the diagnosis layer (Kepner-Tregoe).
   Situation Appraisal + per-concern Problem Analysis, authored
   from 1.3.1_kt_situation_appraisal.md and 1.3.2_kt_problem_analysis/
   IDI01.CONC00N.md. Causes and IS/IS-NOT rows reference IDI01.OA###
   atoms (resolved against window.RESEARCH.atoms from casefile-atoms.js
   + crux-data.js) so the drawer can traverse concern → cause → atom
   → verbatim quote. Loaded after casefile-atoms.js + crux-data.js.
   Concern ids map to source: concern_001 = IDI01.CONC001, etc.
   ========================================================= */
window.CASE = window.CASE || {};

(function () {
  // priority rank from 1.3.1 priority_ranking
  const RANK = { concern_001:1, concern_003:2, concern_002:3, concern_006:4,
                 concern_004:5, concern_005:6, concern_008:7, concern_007:8 };

  const CLUSTER = {
    concern_001:"Capacity & product-handling", concern_002:"Capacity & product-handling",
    concern_003:"Capacity & product-handling",
    concern_004:"Sponsor & trial-execution friction", concern_005:"Sponsor & trial-execution friction",
    concern_006:"Sponsor & trial-execution friction",
    concern_007:"Equipment & administration barriers", concern_008:"Equipment & administration barriers"
  };

  const U = "Not yet bounded"; // editorial rendering of an "Unknown" IS-NOT

  const CONCERNS = [
    {
      id:"concern_001", n:"Rising cell therapy volume may outstrip lab-based processing workflows.",
      type:"Risk", urgency:"High", impact:"High", trend:"Worsening", conf:"High",
      summary:"Processing requests keep rising, about 30% of products need in-lab manipulation, more commercial therapies keep coming, and a lab of biological safety cabinets is said not to keep up.",
      related:["concern_002","concern_003"],
      commonCauses:["Rising processing demand and an expanding therapy portfolio","About 30% of products need in-lab manipulation","Reliance on older lab technology and safety-cabinet processing"],
      atoms:["IDI01.OA001","IDI01.OA002","IDI01.OA022","IDI01.OA048","IDI01.OA049","IDI01.OA050","IDI01.OA052"],
      deviation:"The lab should absorb growing processing demand, but requests keep rising and Catherine says doing everything in a lab of biological safety cabinets is not going to keep up.",
      object:"Cell therapy in-lab processing workflows, including biological-safety-cabinet manipulation and older lab technology.",
      standard:"No quantified capacity, utilization, staffing, or backlog standard is stated.",
      actual:"Requests for processing are increasing; about 30% of products need in-lab manipulation; the site supports about 100 trials and 12 or 13 commercial therapies with more coming; it relies on older technology; safety-cabinet work is said not to keep up.",
      isnot:[
        {dim:"What", is:"A scalability risk in cell therapy processing: rising requests and product growth handled through in-lab manipulation and safety-cabinet work said not to keep up.", isNot:"In vivo therapies, which the pharmacy department handles.",
         dist:["The concern is about processing requests and in-lab manipulation, not all therapy handling.","The affected work is lab and biological-safety-cabinet processing."],
         chg:["Requests for processing are increasing."],
         atoms:["IDI01.OA001","IDI01.OA002","IDI01.OA003","IDI01.OA004","IDI01.OA052"]},
        {dim:"Where", is:"In the cell therapy lab and in-lab manipulation workflow, on older technology and biological safety cabinets.", isNot:U,
         dist:["About 30% of products require in-lab manipulation.","The workflow relies on older lab technology such as water baths."],
         atoms:["IDI01.OA002","IDI01.OA048","IDI01.OA052"]},
        {dim:"When", is:"Now and forward-looking: requests keep coming, more commercial therapies keep coming out, and the lab/BSC model is said not to keep up.", isNot:U,
         dist:["Processing requests are increasing.","More commercial cell therapies are coming out."],
         chg:["The commercial therapy portfolio is increasing."],
         atoms:["IDI01.OA001","IDI01.OA050","IDI01.OA052"]},
        {dim:"Extent", is:"About 30% of products need in-lab manipulation; the site supports about 100 trials and 12 or 13 commercial therapies, with more coming.", isNot:"They handle no in vivo therapies.",
         dist:["A quantified product subset needs lab manipulation.","The portfolio spans about 100 trials and 12 or 13 approved commercial therapies."],
         atoms:["IDI01.OA002","IDI01.OA003","IDI01.OA022","IDI01.OA049","IDI01.OA050"]}
      ],
      causes:[
        {id:"cause_001", s:"Rising processing demand and an expanding therapy portfolio put more load on the same lab-based workflows.", type:"change", pl:"High", conf:"High",
         sup:["IDI01.OA001","IDI01.OA022","IDI01.OA049","IDI01.OA050"], con:[],
         ei:["Matches the evidence that requests and therapies are increasing.","Explains why the same lab workflows face greater workload exposure."]},
        {id:"cause_002", s:"The product mix routes a substantial minority of products into lab manipulation, since about 30% need in-lab work.", type:"distinction", pl:"Medium", conf:"High",
         sup:["IDI01.OA002"], con:[],
         ei:["Explains why the affected object is the in-lab processing workflow.","Identifies the share of products that require lab work."]},
        {id:"cause_003", s:"Reliance on older lab technology and safety-cabinet-centered processing is a capability constraint on scalability.", type:"capability_gap", pl:"High", conf:"High",
         sup:["IDI01.OA048","IDI01.OA052"], con:[],
         ei:["Directly explains why the stressed object is the lab/BSC processing workflow.","Accounts for the statement that the current lab model will not keep up."]},
        {id:"cause_004", s:"Multi-container product formats create repeated thawing, testing, transfer, and administration steps that raise workload per product.", type:"environmental_condition", pl:"Medium", conf:"Medium",
         sup:["IDI01.OA006","IDI01.OA007","IDI01.OA008","IDI01.OA009","IDI01.OA011","IDI01.OA012","IDI01.OA018","IDI01.OA019","IDI01.OA020","IDI01.OA051"], con:[],
         ei:["Increases time and handling burden per case, reducing throughput under rising demand.","Connects handling-complexity evidence to the scalability risk."]},
        {id:"cause_005", s:"Short post-thaw windows and the distance between lab and patient areas reduce scheduling margin for lab-based processing.", type:"environmental_condition", pl:"Medium", conf:"Medium",
         sup:["IDI01.OA010","IDI01.OA013","IDI01.OA014","IDI01.OA021","IDI01.OA040"], con:[],
         ei:["Tight timing margins reduce flexibility as demand rises.","Explains why in-lab products stress the workflow when paired with rising requests."]}
      ],
      most:{id:"cause_003", rationale:"The strongest cause is the lab/BSC processing model itself: the evidence states reliance on older technology and that doing everything in a lab of biological safety cabinets is not going to keep up. Demand growth, product mix, container formats, and short windows all raise pressure, but this cause best explains why the workflow may fail to scale.",
        missing:["Measured processing capacity, biological-safety-cabinet utilization, staffing load, and backlog.","Time trend for processing requests and commercial-therapy starts, separated by products needing in-lab manipulation.","Cycle-time and labor-time data for in-lab manipulation and multi-container handling."]}
    },

    {
      id:"concern_002", n:"Multi-container product formats create lengthy thawing, testing, and administration workflows.",
      type:"Problem", urgency:"Medium", impact:"High", trend:"Persistent", conf:"High",
      summary:"Products can arrive as four to six bags, two or three vials, or 18 vials, with independent thawing, wait time, syringe transfer, per-vial Gram stains, and one multi-bag dose taking three hours to administer.",
      related:["concern_001","concern_003"],
      commonCauses:["Products split across multiple separate containers","Product-specific preparation and testing steps beyond thawing","Legacy multi-bag formats carried over from the pivotal trial"],
      atoms:["IDI01.OA006","IDI01.OA007","IDI01.OA008","IDI01.OA009","IDI01.OA011","IDI01.OA012","IDI01.OA018","IDI01.OA019","IDI01.OA020","IDI01.OA051"],
      deviation:"A dose should arrive as one usable unit, but affected products are supplied as multiple bags or vials requiring independent thawing, wait time, syringe transfer, and per-vial Gram stains, with one multi-bag product taking three hours to administer.",
      object:"Cell therapy product handling from thawing, preparation, and testing through administration by lab and nursing staff.",
      standard:"No quantified handling-time standard is stated.",
      actual:"Some products are supplied in four to six bags, two or three vials, or 18 vials, with independent thawing, wait time between bags, vial-to-syringe transfer, per-vial Gram stains, and a cited three-hour administration.",
      isnot:[
        {dim:"What", is:"Products presented as multiple bags or vials requiring repeated thawing, handling, transfer, or testing.", isNot:U,
         dist:["Examples include four to six bags, two or three vials, and 18 individual vials.","Some workflows add vial-to-syringe transfer and Gram stains on top of thawing."],
         atoms:["IDI01.OA006","IDI01.OA007","IDI01.OA011","IDI01.OA012","IDI01.OA018","IDI01.OA019","IDI01.OA020"]},
        {dim:"Where", is:"In the product handling and administration workflow involving lab staff and nursing staff.", isNot:U,
         dist:["At least one administration involves both lab staff and nursing staff.","The workflow includes preparation and testing steps, not only final administration."],
         atoms:["IDI01.OA009","IDI01.OA012","IDI01.OA020"]},
        {dim:"When", is:"During thawing, preparation, testing, and administration, including wait time between sequential bags.", isNot:U,
         dist:["The timing burden includes sequential steps between containers.","One multi-bag product is evidenced as taking three hours to administer."],
         atoms:["IDI01.OA007","IDI01.OA008","IDI01.OA009"]},
        {dim:"Extent", is:"Container count ranges from four to six bags, two or three vials, and an 18-vial product; task count includes thawing, wait time, transfer, Gram stain, and administration. Frequency is not quantified.", isNot:U,
         dist:["Container count varies by product.","The workload includes both container count and task count."],
         atoms:["IDI01.OA006","IDI01.OA009","IDI01.OA011","IDI01.OA012","IDI01.OA018","IDI01.OA019","IDI01.OA020"]}
      ],
      causes:[
        {id:"cause_001", s:"Affected products are split across multiple separate containers, requiring sequential per-container thawing and wait time.", type:"distinction", pl:"High", conf:"High",
         sup:["IDI01.OA006","IDI01.OA007","IDI01.OA008","IDI01.OA018","IDI01.OA019"], con:[],
         ei:["Multiple separate containers explain repeated thawing steps.","Wait time between bags explains why administration becomes lengthy."]},
        {id:"cause_002", s:"Product-specific preparation and testing add handling steps beyond thawing, including vial-to-syringe transfer and per-vial Gram stains.", type:"process_failure", pl:"High", conf:"High",
         sup:["IDI01.OA011","IDI01.OA012","IDI01.OA018","IDI01.OA020"], con:[],
         ei:["Syringe transfer explains added preparation work.","Per-vial Gram stains explain added testing work for multi-vial products."]},
        {id:"cause_003", s:"For some commercial therapies, multiple-bag formats persist because the pivotal clinical trial was run that way.", type:"environmental_condition", pl:"Medium", conf:"High",
         sup:["IDI01.OA051"], con:[],
         ei:["Explains why multi-bag formats remain in use for at least some commercial therapies.","Persistent multi-bag formats feed the independent thawing, wait-time, and long administration workflow."]}
      ],
      most:{id:"cause_001", rationale:"The container split best explains the core evidence: multiple bags or vials require repeated per-container thawing, wait time, and expanded handling for an 18-vial product. Product-specific testing and legacy formats add or subset contributors, but the multi-container pattern carries the workflow length.",
        missing:["Frequency of affected products by container count and product type.","Measured time contribution of each step: thawing, wait time, transfer, Gram stain, and administration.","Evidence distinguishing sponsor-required steps from site-selected handling steps."]}
    },

    {
      id:"concern_003", n:"Short post-thaw expiration windows leave little margin for manipulation, transport, and administration.",
      type:"Problem", urgency:"High", impact:"High", trend:"Persistent", conf:"High",
      summary:"Some products expire 30 minutes or less after thaw, may need vial-to-syringe transfer, must reach the patient within 30 minutes or the OR within four hours, and the lab can be a 15-minute walk across campus.",
      related:["concern_001","concern_002","concern_004"],
      commonCauses:["Sponsor stability data may not extend past current expiration","A required vial-to-syringe manipulation step consumes the window","The lab is a 15-minute walk across campus"],
      atoms:["IDI01.OA010","IDI01.OA012","IDI01.OA013","IDI01.OA014","IDI01.OA021","IDI01.OA040"],
      deviation:"There should be enough post-thaw time to complete manipulation, transport, and administration, but some products expire in 30 minutes or less, some must reach the patient within 30 minutes, and even an hour can be insufficient.",
      object:"Post-thaw product handling spanning in-lab manipulation, cross-campus transport, and patient or OR administration.",
      standard:"Post-thaw time sufficient to complete required manipulation, transport, and administration; exact target duration is not stated.",
      actual:"Some products have post-thaw expiration of 30 minutes or less, may require vial-to-syringe transfer, must reach the patient within 30 minutes or the OR within four hours, and the lab can be a 15-minute walk across campus.",
      isnot:[
        {dim:"What", is:"Post-thaw timing margin insufficient for some handling: expiration can be 30 minutes or less, products may need syringe transfer, and an hour can still be insufficient.", isNot:"Internally manufactured products, which can have four hours or more expiration.",
         dist:["The evidence names products with 30-minute-or-less expiration.","The affected work can include vial-to-syringe manipulation.","Both 30-minute patient delivery and four-hour OR delivery are evidenced."],
         atoms:["IDI01.OA010","IDI01.OA012","IDI01.OA013","IDI01.OA014","IDI01.OA021"]},
        {dim:"Where", is:"In the lab-to-patient or lab-to-OR workflow; the lab can be a 15-minute walk across campus while products must reach patient-care destinations.", isNot:U,
         dist:["The lab is separated from patient care by a 15-minute walk across campus.","One evidenced destination is the OR."],
         atoms:["IDI01.OA013","IDI01.OA021","IDI01.OA040"]},
        {dim:"When", is:"After thaw and before administration: deadlines include 30 minutes or less, patient delivery within 30 minutes, and OR delivery within four hours.", isNot:U,
         dist:["The timing constraint is post-thaw.","Some products must reach the patient within 30 minutes.","One product must reach the OR patient within four hours."],
         atoms:["IDI01.OA010","IDI01.OA013","IDI01.OA014","IDI01.OA021"]},
        {dim:"Extent", is:"Established for some products, including those with 30-minute expiration and those needing syringe transfer; frequency and the affected product list are not bounded.", isNot:"Internally manufactured products can have four hours or more expiration.",
         dist:["Extent is described as 'some products'.","Lab distance adds a fixed 15-minute transport component where that workflow applies."],
         atoms:["IDI01.OA010","IDI01.OA012","IDI01.OA040"]}
      ],
      causes:[
        {id:"cause_001", s:"Some expiration windows may remain short because sponsors are not willing or able to provide stability data beyond the current expiration.", type:"information_gap", pl:"High", conf:"Medium",
         sup:["IDI01.OA010","IDI01.OA014","IDI01.OA015","IDI01.OA016"], con:["IDI01.OA017"],
         ei:["If stability evidence beyond expiration is unavailable, the allowable window can stay shorter than the workflow needs.","Fits the evidence that even an hour can be insufficient while internally manufactured products get longer windows."]},
        {id:"cause_002", s:"A required post-thaw vial-to-syringe manipulation step consumes part of the expiration window before administration.", type:"distinction", pl:"Medium", conf:"Medium",
         sup:["IDI01.OA010","IDI01.OA012","IDI01.OA013"], con:[],
         ei:["Explains why the short window leaves little margin: a manipulation step sits inside the time-limited workflow."]},
        {id:"cause_003", s:"The lab's physical distance from patient-care locations consumes transport time inside the post-thaw deadline.", type:"environmental_condition", pl:"High", conf:"Medium",
         sup:["IDI01.OA013","IDI01.OA021","IDI01.OA040"], con:[],
         ei:["A 15-minute walk is substantial against a 30-minute post-thaw window.","Explains why transport leaves little remaining margin for manipulation and administration."]},
        {id:"cause_004", s:"Multi-container product formats create repeated thawing, waiting, testing, and administration steps that can consume the available post-thaw time.", type:"distinction", pl:"Medium", conf:"Medium",
         sup:["IDI01.OA006","IDI01.OA007","IDI01.OA008","IDI01.OA009","IDI01.OA018","IDI01.OA020","IDI01.OA051"], con:[],
         ei:["Repeated steps explain why fixed windows leave little margin to complete the workflow."]}
      ],
      most:{id:"cause_001", rationale:"The sponsor stability-data gap best explains why windows stay shorter than the workflow requires: even an hour can be insufficient, sponsors are not willing or able to provide data beyond expiration, and internally manufactured products get four hours or more. Other causes explain how time is consumed; this one explains why the window stays short.",
        missing:["Product-specific stability data showing how the 30-minute, one-hour, and four-hour limits were set.","Elapsed-time measurements for thaw, syringe transfer, transport, and administration.","Which sponsors or products lack stability data beyond expiration, and whether those are the products with insufficient margin."]}
    },

    {
      id:"concern_004", n:"Sponsor stability data past expiration is unavailable when current windows may be insufficient.",
      type:"Uncertainty", urgency:"Medium", impact:"High", trend:"Persistent", conf:"High",
      summary:"An hour expiration can be insufficient, sponsors are described as not understanding the problem and not willing or able to provide data past expiration, while internally manufactured products can have four hours or more.",
      related:["concern_003","concern_006"],
      commonCauses:["Sponsors may not understand the site's post-thaw timing problem","Sponsors may lack the stability evidence to support use beyond expiration","Sponsor willingness or alignment with the site's data need may be missing"],
      atoms:["IDI01.OA014","IDI01.OA015","IDI01.OA016","IDI01.OA017"],
      deviation:"Stability support should cover the real preparation and administration time, but sponsors do not extend data beyond expiration even though an hour can be insufficient, while internally made products get four hours or more.",
      object:"Sponsor-provided stability data and post-thaw expiration support for cell therapy handling and administration.",
      standard:"No explicit standard is stated; the only contrast is internally manufactured products with four hours or more expiration.",
      actual:"Sponsors are described as not understanding the problem and as not willing or able or having data beyond expiration, while an hour expiration may be insufficient in some circumstances.",
      isnot:[
        {dim:"What", is:"Unavailable or non-provided sponsor stability data past expiration when current windows may be insufficient.", isNot:"Internally manufactured products, a contrast class with four hours or more expiration.",
         dist:["The issue is data beyond expiration, not only the existence of an expiration label.","It is contrasted with internally manufactured products that get longer windows."],
         atoms:["IDI01.OA014","IDI01.OA015","IDI01.OA016","IDI01.OA017"]},
        {dim:"Where", is:"At the sponsor-site interface for stability data and within post-thaw workflows that may include manipulation, transport, and administration.", isNot:U,
         dist:["Related timing evidence places the burden where product needs syringe handling, patient delivery, and movement from a lab a 15-minute walk away."],
         atoms:["IDI01.OA012","IDI01.OA013","IDI01.OA014","IDI01.OA016","IDI01.OA040"]},
        {dim:"When", is:"During the post-thaw period, especially with short windows, when an hour may be insufficient, or when the product must reach the patient or OR in a defined window.", isNot:U,
         dist:["The timing issue is specifically post-thaw and past expiration.","Related evidence includes 30 minutes or less, within 30 minutes, within four hours, and four hours or more for internal products."],
         atoms:["IDI01.OA010","IDI01.OA013","IDI01.OA014","IDI01.OA017","IDI01.OA021"]},
        {dim:"Extent", is:"Occurs in some circumstances, involves sponsors as a group, and is contrasted with internally manufactured products; affected products, sponsors, and frequency are not quantified.", isNot:U,
         dist:["The evidence distinguishes sponsor-associated data from internally manufactured products with longer expiration."],
         atoms:["IDI01.OA014","IDI01.OA015","IDI01.OA016","IDI01.OA017"]}
      ],
      causes:[
        {id:"cause_001", s:"Sponsors may not understand the site's post-thaw timing problem, reducing recognition of why data beyond expiration is needed.", type:"information_gap", pl:"High", conf:"Medium",
         sup:["IDI01.OA013","IDI01.OA014","IDI01.OA015","IDI01.OA040"], con:[],
         ei:["If sponsors do not understand the site's need for margin, they may not generate or provide data beyond expiration."]},
        {id:"cause_002", s:"Sponsors may lack the capability or underlying evidence to support use beyond the labeled expiration.", type:"capability_gap", pl:"High", conf:"Medium",
         sup:["IDI01.OA014","IDI01.OA016","IDI01.OA017"], con:[],
         ei:["If sponsors do not possess post-expiration stability evidence, the data cannot be provided when the site needs margin.","Consistent with internally manufactured products having longer windows."]},
        {id:"cause_003", s:"Sponsor willingness or alignment with the site's data need may be insufficient, leading to non-provision of data past expiration.", type:"coordination_failure", pl:"Medium", conf:"Medium",
         sup:["IDI01.OA014","IDI01.OA015","IDI01.OA016"], con:[],
         ei:["If willingness or alignment is lacking, data may not be provided even when the site sees the window as insufficient."]}
      ],
      most:{id:"cause_002", rationale:"The capability gap most directly explains the data-unavailable component: if sponsors do not have or cannot support stability evidence beyond expiration, the data cannot be provided despite insufficient windows. Confidence stays Medium because the source groups willingness, ability, and possession together and names no specific sponsor or product.",
        missing:["Which specific products or sponsors lack stability data beyond expiration.","Whether post-expiration stability studies exist for those products.","Whether non-provision is due to missing data, inability, unwillingness, or misunderstanding.","How often current windows are insufficient for the affected products."]}
    },

    {
      id:"concern_005", n:"Variable sponsor timing and fixed courier cutoffs can make trial samples miss shipment pickups.",
      type:"Problem", urgency:"Medium", impact:"Medium", trend:"Persistent", conf:"High",
      summary:"The site supports about 100 trials, every sponsor does the same thing differently, some samples are drawn hours after infusion, and a sample taken four hours after infusion can miss the 3:00 PM FedEx pickup.",
      related:["concern_006"],
      commonCauses:["Sponsor-required post-infusion timing misaligned with the fixed pickup","Sponsor-by-sponsor variation across a large trial portfolio"],
      atoms:["IDI01.OA022","IDI01.OA023","IDI01.OA024","IDI01.OA025","IDI01.OA026"],
      deviation:"Samples that must make the 3:00 PM FedEx pickup should be available in time, but a sample collected four hours after infusion can miss the pickup.",
      object:"Clinical trial post-infusion sample collection and FedEx shipment workflow.",
      standard:"Samples that have to be in a 3:00 PM FedEx pickup are collected and available in time for that pickup.",
      actual:"Some blood samples must be collected hours after infusion, and a sample taken four hours after infusion can miss the FedEx pickup.",
      isnot:[
        {dim:"What", is:"Clinical trial samples governed by sponsor protocol timing can miss a required FedEx pickup.", isNot:U,
         dist:["The concern involves trials the site supports.","Sponsors differ in how they do the same thing.","Some samples are timed to be collected hours after infusion."],
         atoms:["IDI01.OA022","IDI01.OA023","IDI01.OA024","IDI01.OA025","IDI01.OA026"]},
        {dim:"Where", is:"In the trial sample collection and outbound FedEx shipping workflow.", isNot:U,
         dist:["The workflow connects sponsor protocol requirements, post-infusion collection, and FedEx pickup.","The evidenced dependency is a 3:00 PM FedEx pickup."],
         atoms:["IDI01.OA022","IDI01.OA023","IDI01.OA024","IDI01.OA025"]},
        {dim:"When", is:"After infusion, at protocol-specified collection intervals, before a 3:00 PM pickup deadline.", isNot:U,
         dist:["Some samples are collected hours after infusion.","The evidenced pickup time is 3:00 PM.","A four-hour post-infusion timing is associated with a missed pickup."],
         atoms:["IDI01.OA024","IDI01.OA025","IDI01.OA026"]},
        {dim:"Extent", is:"About 100 trials with sponsor-to-sponsor variation; missed pickup is evidenced for a four-hour sample, but frequency and downstream consequences are not bounded.", isNot:U,
         dist:["The workflow spans about 100 trials.","Every sponsor has its own way of doing the same thing.","At least one timed collection is four hours after infusion."],
         atoms:["IDI01.OA022","IDI01.OA023","IDI01.OA026"]}
      ],
      causes:[
        {id:"cause_001", s:"Sponsor-required post-infusion collection intervals can be misaligned with the fixed 3:00 PM pickup, so a sample drawn hours after infusion may not be ready to ship.", type:"coordination_failure", pl:"High", conf:"High",
         sup:["IDI01.OA024","IDI01.OA025","IDI01.OA026"], con:[],
         ei:["Explains why the problem appears after infusion and around the fixed pickup time.","Explains the evidenced case where a four-hour sample missed the pickup."]},
        {id:"cause_002", s:"Sponsor-by-sponsor variation across a large trial portfolio creates inconsistent sample timing that is hard to coordinate with one fixed pickup.", type:"coordination_failure", pl:"Medium", conf:"Medium",
         sup:["IDI01.OA022","IDI01.OA023","IDI01.OA024","IDI01.OA025"], con:[],
         ei:["Explains the variable sponsor-protocol component of the problem.","Explains why the issue sits in trial execution rather than one uniform workflow."]}
      ],
      most:{id:"cause_001", rationale:"The timing misalignment directly links the evidenced sequence: samples drawn hours after infusion must meet a 3:00 PM pickup, and a four-hour sample has missed it. Sponsor variation is plausible context but is less directly tied to the specific missed-pickup event.",
        missing:["Actual infusion and collection times relative to the 3:00 PM pickup for missed and successful shipments.","Frequency of missed pickups by sponsor, protocol, and timing.","Whether post-collection delays, separate from protocol timing, contribute.","Downstream consequences of missed pickups."]}
    },

    {
      id:"concern_006", n:"Sponsor unfamiliarity with site regulation and accreditation creates repeated friction and can jeopardize trials.",
      type:"Problem", urgency:"Medium", impact:"High", trend:"Persistent", conf:"High",
      summary:"CDPH requires AABB rules, the site is FACT accredited while many biotechs are not, staff explained regulatory barriers at least three times last month, and one sponsor pulled out over required arrival inspection.",
      related:["concern_004","concern_005"],
      commonCauses:["Many sponsors lack the FACT and accreditation context to understand site requirements","CDPH/AABB and patient-safety requirements make some barriers non-discretionary","Sponsor expectations were not aligned with the site's arrival-inspection requirement"],
      atoms:["IDI01.OA027","IDI01.OA029","IDI01.OA030","IDI01.OA031","IDI01.OA032","IDI01.OA033","IDI01.OA034","IDI01.OA035","IDI01.OA039"],
      deviation:"Sponsors should understand the site's regulatory and accreditation boundaries, but staff had to explain at least three times last month that a barrier was regulatory rather than hospital-created, and one sponsor pulled out over arrival inspection.",
      object:"Sponsor-site trial participation involving regulatory, accreditation, patient-safety, and product-receipt requirements.",
      standard:"No formal baseline is stated.",
      actual:"CDPH requires AABB rules, the site is FACT accredited, many biotechs are not FACT accredited or may not know FACT, staff explained regulatory barriers at least three times last month, and one sponsor pulled out over required arrival inspection.",
      isnot:[
        {dim:"What", is:"Sponsor-site friction over regulatory, accreditation, patient-safety, and product-receipt requirements, including repeated explanations and a trial pullout over arrival inspection.", isNot:"A barrier created solely by the hospital; at least some barriers are not the hospital creating them.",
         dist:["The site must follow AABB under CDPH and is FACT accredited, while many biotechs are not.","The product-receipt conflict includes required arrival inspection and verifying the right product was sent."],
         atoms:["IDI01.OA027","IDI01.OA029","IDI01.OA030","IDI01.OA031","IDI01.OA032","IDI01.OA033","IDI01.OA034"]},
        {dim:"Where", is:"At the FACT-accredited site, in contexts governed by CDPH/AABB, and when product arrives in a Dewar for inspection and verification.", isNot:U,
         dist:["The site is FACT accredited while many biotechs are not FACT accredited or may not know FACT.","The product-receipt issue occurs when product arrives and the site opens the Dewar."],
         atoms:["IDI01.OA027","IDI01.OA030","IDI01.OA031","IDI01.OA032","IDI01.OA033","IDI01.OA034"]},
        {dim:"When", is:"During sponsor interactions about regulatory barriers, at least three times last month, and at product arrival when inspection is required or patient safety is at stake.", isNot:U,
         dist:["The only quantified marker is at least three explanations last month.","The product-receipt timing is when product arrives at the facility."],
         atoms:["IDI01.OA029","IDI01.OA033","IDI01.OA034","IDI01.OA039"]},
        {dim:"Extent", is:"At least three explanations last month, many biotechs not FACT accredited, one sponsor pullout over arrival inspection, and a constraint that the site cannot store a hundred Dewars.", isNot:"Not evidenced as blocking every interaction; they can often reach a compromise or make allowances.",
         dist:["Partially quantified by three explanations and one pullout; sponsor unfamiliarity is qualitative.","The site also reports a physical product-receipt and storage constraint involving Dewars."],
         atoms:["IDI01.OA029","IDI01.OA031","IDI01.OA032","IDI01.OA033","IDI01.OA035"]}
      ],
      causes:[
        {id:"cause_001", s:"Many sponsors lack the accreditation context to understand FACT-accredited site requirements: the site is FACT accredited while many biotechs are not and may not know what FACT is.", type:"information_gap", pl:"High", conf:"Medium",
         sup:["IDI01.OA027","IDI01.OA029","IDI01.OA030","IDI01.OA031","IDI01.OA032"], con:[],
         ei:["Explains why sponsors would need repeated clarification of regulatory and accreditation barriers.","Explains the gap between the FACT-accredited site and sponsors without that context."]},
        {id:"cause_002", s:"CDPH/AABB and patient-safety requirements make some site barriers non-discretionary, so conflicting sponsor requests create friction.", type:"environmental_condition", pl:"Medium", conf:"Medium",
         sup:["IDI01.OA027","IDI01.OA029","IDI01.OA039"], con:[],
         ei:["Explains why the site cannot always accommodate sponsors when regulation or safety is involved.","Explains repeated friction around barriers sponsors perceive as site-created."]},
        {id:"cause_003", s:"Sponsor expectations were not aligned with the site's arrival-inspection requirement to inspect products and verify the right product.", type:"coordination_failure", pl:"High", conf:"High",
         sup:["IDI01.OA033","IDI01.OA034"], con:[],
         ei:["Explains the trial-jeopardy portion through a directly observed sponsor pullout over arrival inspection.","Explains product-receipt friction at the point of arrival."]}
      ],
      most:{id:"cause_001", rationale:"The accreditation information gap has the broadest fit: it explains repeated recent explanations that barriers were regulatory not hospital-created, and is supported by the contrast between a FACT-accredited site and many biotechs that are not accredited or unaware of FACT. The arrival-inspection cause is strongly supported but narrower.",
        missing:["Whether the sponsors in the recent explanations were among those not FACT accredited or unfamiliar with FACT/AABB.","What the sponsor that pulled out understood about arrival inspection beforehand.","How often FACT, AABB, safety, and product-receipt issues create friction across sponsors and trials."]}
    },

    {
      id:"concern_007", n:"Sponsor-specific devices face validation, IND, and site equipment-burden barriers.",
      type:"Risk", urgency:"Low", impact:"Medium", trend:"Persistent", conf:"High",
      summary:"Specific instruments need validation packages, sponsor gadgets could bury the site in equipment, and sponsors reject devices not put into the IND or previously tried.",
      related:["concern_008"],
      commonCauses:["A validation package is required for the actual specific instrument","Sponsors reject devices not in the IND or previously tried","The site has limited capacity to absorb sponsor-specific gadgets"],
      atoms:["IDI01.OA041","IDI01.OA042","IDI01.OA043"],
      deviation:"Devices should be adoptable when useful, but the actual instrument needs a validation package, sponsors say no if a device is not in the IND, and accepting sponsor gadgets would bury the site in equipment.",
      object:"Sponsor-specific device and gadget evaluation and use at the cell therapy site.",
      standard:"No measured standard is stated; the evidence only names prerequisites for validation and IND or prior-use acceptance.",
      actual:"Specific instruments need validation packages; sponsor gadgets could leave the site buried in equipment; sponsors may say no if a device has not been put into the IND or tried.",
      isnot:[
        {dim:"What", is:"Sponsor-specific devices face validation-package, IND/prior-use, and site equipment-burden barriers.", isNot:"The related infusion-pump and manual-drip nursing-training conflict, which is a separate concern.",
         dist:["The concern is tied to validation of the actual specific instrument.","It includes sponsor-side IND or prior-use acceptance.","It includes site-side equipment burden from sponsor gadgets."],
         atoms:["IDI01.OA041","IDI01.OA042","IDI01.OA043"]},
        {dim:"Where", is:"At the site equipment environment and in sponsor IND/protocol documentation for the actual specific instrument.", isNot:U,
         dist:["The validation barrier is at the specific-instrument level, not a device category.","The IND barrier is in sponsor-side documentation.","The equipment-burden barrier is in the site's ability to absorb gadgets."],
         atoms:["IDI01.OA041","IDI01.OA042","IDI01.OA043"]},
        {dim:"When", is:"When use of an actual specific instrument requires validation evidence, and when a company has not put the device into its IND or tried it.", isNot:U,
         dist:["The sponsor rejection is explicitly tied to the device not being in the IND or tried."],
         atoms:["IDI01.OA041","IDI01.OA043"]},
        {dim:"Extent", is:"Qualitative and not quantified; three barrier classes appear: required validation package, potential equipment burden, and rejection if the device is not in the IND or tried.", isNot:U,
         dist:["The evidence names multiple barrier types rather than one quantified failure.","Equipment burden is described qualitatively as being buried in equipment."],
         atoms:["IDI01.OA041","IDI01.OA042","IDI01.OA043"]}
      ],
      causes:[
        {id:"cause_001", s:"A requirement for validation evidence on the actual specific instrument creates a prerequisite barrier for sponsor-specific devices.", type:"information_gap", pl:"High", conf:"High",
         sup:["IDI01.OA041"], con:[],
         ei:["Explains why sponsor devices face validation barriers: the site needs evidence the actual instrument is validated."]},
        {id:"cause_002", s:"Sponsor regulatory or protocol documentation can block device use when the company has not put the device into its IND or tried it.", type:"process_failure", pl:"High", conf:"High",
         sup:["IDI01.OA043"], con:[],
         ei:["Explains the IND barrier: sponsor acceptance depends on IND inclusion or prior use."]},
        {id:"cause_003", s:"The site has limited tolerance or capacity for accumulating sponsor-specific gadgets, creating an equipment-burden barrier.", type:"capability_gap", pl:"High", conf:"High",
         sup:["IDI01.OA042"], con:[],
         ei:["Explains why the site resists sponsor gadgets: many devices would create an equipment-management burden."]}
      ],
      most:{id:"cause_002", rationale:"The IND barrier carries the most explicit conditional evidence: if the company has not put the device into its IND or tried it, the sponsor will say no. Validation and equipment burden are also supported, but the evidence does not quantify which barrier most often blocks devices.",
        missing:["Counts of devices rejected because they were not in the sponsor IND or tried.","Whether validation packages are routinely absent for actual specific instruments.","Current and projected number of sponsor-specific gadgets and the real equipment-management burden."]}
    },

    {
      id:"concern_008", n:"Infusion pump restrictions conflict with current nursing training for manual drip infusions.",
      type:"Risk", urgency:"Medium", impact:"Medium", trend:"Persistent", conf:"Medium",
      summary:"Some sponsors require infusion pumps, many forbid them, and nurses are no longer trained to do manual drip infusions without a pump.",
      related:["concern_007"],
      commonCauses:["Nurses are no longer trained for manual drip infusions without pumps","Sponsor pump-use instructions are inconsistent across sponsors"],
      atoms:["IDI01.OA044","IDI01.OA045","IDI01.OA046"],
      deviation:"Nurses should be able to execute the required administration method, but many sponsors forbid infusion pumps while nurses are no longer trained to do manual drip infusions without one.",
      object:"Nursing infusion-administration workflow under sponsor pump-use instructions.",
      standard:"No explicit administration-training standard is stated.",
      actual:"Some sponsors want infusion pumps, many say not to use one, and nurses do not get trained to do manual drip infusions without an infusion pump anymore.",
      isnot:[
        {dim:"What", is:"A risk that sponsor no-pump restrictions conflict with current nursing training, since nurses are no longer trained for manual drip infusions without a pump.", isNot:"Universal sponsor opposition to pumps; some sponsors want to use infusion pumps.",
         dist:["Many sponsors say not to use a pump, while some want pumps.","The affected skill is manual drip infusion without a pump."],
         chg:["Nurses are no longer trained to do manual drip infusions without a pump."],
         atoms:["IDI01.OA044","IDI01.OA045","IDI01.OA046"]},
        {dim:"Where", is:"In the nursing infusion-administration workflow where sponsor instructions determine whether pumps may be used.", isNot:U,
         dist:["The concern sits in infusion administration involving nurses and pump-use instructions."],
         atoms:["IDI01.OA044","IDI01.OA045","IDI01.OA046"]},
        {dim:"When", is:"In the current training state, indicated by nurses no longer being trained to perform manual drip infusions without a pump.", isNot:U,
         dist:["The evidence marks the present training condition with the word 'anymore'."],
         chg:["Manual drip infusion without a pump is no longer part of current nursing training."],
         atoms:["IDI01.OA046"]},
        {dim:"Extent", is:"Qualitative: many sponsors prohibit pumps, some want them, and nurses are no longer trained for manual drips; frequency and outcomes are not quantified.", isNot:"It does not affect all sponsors the same way; some sponsors want pumps.",
         dist:["No-pump instructions are attributed to many sponsors, pump use to some."],
         atoms:["IDI01.OA044","IDI01.OA045","IDI01.OA046"]}
      ],
      causes:[
        {id:"cause_001", s:"Current nursing training no longer includes manual drip infusions without pumps, creating a capability gap when sponsors prohibit pump use.", type:"capability_gap", pl:"High", conf:"High",
         sup:["IDI01.OA045","IDI01.OA046"], con:[],
         ei:["When a sponsor requires no pump, administration depends on manual-drip capability that current training no longer provides."]},
        {id:"cause_002", s:"Sponsor pump-use instructions are inconsistent, with some wanting pumps and many prohibiting them, producing sponsor-specific administration requirements.", type:"coordination_failure", pl:"Medium", conf:"High",
         sup:["IDI01.OA044","IDI01.OA045"], con:[],
         ei:["Mixed instructions explain why no-pump restrictions arise and can expose the training conflict.","Explains why the issue is not universal sponsor opposition to pumps."]}
      ],
      most:{id:"cause_001", rationale:"The capability gap is most plausible because the concern is specifically a conflict with current nursing training: the evidence directly identifies the manual-drip training gap and the no-pump instruction that exposes it. Sponsor variability explains the mix but not why no-pump cases conflict with nursing capability.",
        missing:["Frequency or count of sponsor protocols that prohibit pumps.","Current nursing competency and training records for manual drip infusions.","Observed patient-care consequences when no-pump instructions apply."]}
    }
  ];

  // attach derived fields
  const PRI = { concern_001:"High", concern_002:"High", concern_003:"High", concern_004:"High",
                concern_005:"Medium", concern_006:"High", concern_007:"Medium", concern_008:"Medium" };
  CONCERNS.forEach(c => {
    c.rank = RANK[c.id];
    c.cluster = CLUSTER[c.id];
    c.priority = PRI[c.id];
  });

  CASE.concerns = CONCERNS;
  CASE.byConcern = Object.fromEntries(CONCERNS.map(c => [c.id, c]));

  CASE.clusters = [
    { id:"cluster_001", name:"Capacity & product-handling", concerns:["concern_001","concern_002","concern_003"] },
    { id:"cluster_002", name:"Sponsor & trial-execution friction", concerns:["concern_004","concern_005","concern_006"] },
    { id:"cluster_003", name:"Equipment & administration barriers", concerns:["concern_007","concern_008"] }
  ];

  CASE.sa = {
    question: "Of everything that is wrong, what is wrong, how badly, and what do we look at first?",
    nextConcern: "concern_001",
    nextRationale: "Highest combined urgency, impact, worsening trend, and evidence breadth, with a direct statement that current lab-based workflows may not keep up.",
    ranking: [
      { rank:1, id:"concern_001", rationale:"Demand and portfolio indicators are rising and an atom states lab/BSC workflows will not keep up." },
      { rank:2, id:"concern_003", rationale:"Short post-thaw windows are tied to patient and OR timing constraints." },
      { rank:3, id:"concern_002", rationale:"Multiple containers add repeated thawing, testing, and administration, including a cited three-hour case." },
      { rank:4, id:"concern_006", rationale:"Sponsor friction is recent and repeated, and one sponsor pulled out of a trial." },
      { rank:5, id:"concern_004", rationale:"Unavailable stability data compounds expiration-window uncertainty, though affected products are unspecified." },
      { rank:6, id:"concern_005", rationale:"Missed pickup has occurred under variable protocols, but downstream consequences are undescribed." },
      { rank:7, id:"concern_008", rationale:"Pump restrictions conflict with nursing training, but frequency and outcomes are undescribed." },
      { rank:8, id:"concern_007", rationale:"Device barriers are concrete but less urgent than capacity, timing, or trial-friction concerns." }
    ],
    sourceNote: "Appraisal uses only the IDI01 observation atom registry from Catherine's interview."
  };

  CASE.atom = (id) => window.RESEARCH.atoms[id];
  CASE.U = U;
})();
