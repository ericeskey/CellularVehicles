/* =========================================================
   ODI LAYER · IDI01 Catherine — Outcome-Driven Innovation read.
   The prioritization run applied to the 24-outcome registry.
   Scores 1-3 (1 Low · 2 Moderate · 3 High), estimated from the
   transcript atoms and outcome registry per 1.4.4. Evidence-based
   HYPOTHESES, not quantified ODI survey results.
     Opportunity = Importance + max(Importance - Satisfaction, 0)
     Ability gap = Importance - Ability
   Source: 1.4.1 discovery · 1.4.2 classification · 1.4.3 jobs · 1.4.4 prioritization
   ========================================================= */
window.ODI = (function () {
  const CLASSES = {
    Functional:     { key:"Functional",     glyph:"diamond",  blurb:"Task performance: speed, effort, steps." },
    Risk:           { key:"Risk",           glyph:"square",   blurb:"Avoiding a patient-safety or trial-blocking failure." },
    Consumption:    { key:"Consumption",    glyph:"circle",   blurb:"Ease of handling, storing, and receiving the product." },
    Organizational: { key:"Organizational", glyph:"triangle", blurb:"Coordination, capacity, and continuity across people." }
  };
  const SCALE = { 1:"Low", 2:"Moderate", 3:"High" };
  const O = [
  {
    "id": "OUT001",
    "n": "Increase the ability to keep up with growing cell therapy product processing demand without exceeding available lab processing capacity.",
    "cls": "Organizational",
    "job": "JOB006",
    "step": "Monitor",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 1,
    "j": 3,
    "why": "High because the outcome addresses growing processing demand, 30% of products needing in-lab manipulation, and more commercial therapies coming out. Low because current lab processing capacity is described as insufficient for future demand.",
    "ev": [
      {
        "t": "requests more and more for processing",
        "src": "line 27"
      },
      {
        "t": "30% of our products need some in la- in-lab manipulation",
        "src": "line 28"
      },
      {
        "t": "more and more coming out",
        "src": "line 169"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT002",
    "n": "Minimize the time and effort required to thaw multiple vials and transfer them into a syringe before administration.",
    "cls": "Functional",
    "job": "JOB001",
    "step": "Prepare",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 2,
    "j": 3,
    "why": "High because thawing and syringe transfer may need to fit within a 30-minute patient-administration window. Low because current products can require thawing multiple vials and transferring volume into a syringe.",
    "ev": [
      {
        "t": "single bag or vial that is ready just to thaw and give to the patient",
        "src": "line 35"
      },
      {
        "t": "need to be thawed in two or three vials",
        "src": "line 51"
      },
      {
        "t": "placed into a syringe",
        "src": "line 51"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT003",
    "n": "Minimize the effort required to thaw products supplied in multiple bags.",
    "cls": "Functional",
    "job": "JOB001",
    "step": "Prepare",
    "d": 3,
    "i": 2,
    "s": 1,
    "a": 2,
    "j": 2,
    "why": "Moderate because independent thawing of multiple bags adds preparation effort, though the stronger downstream issue is administration duration. Low because products may arrive in four, five, or six bags that each have to be thawed independently.",
    "ev": [
      {
        "t": "multiple bags, four, five, six bags",
        "src": "line 35"
      },
      {
        "t": "have to be thawed independently",
        "src": "line 35"
      }
    ],
    "src": [],
    "opp": 3
  },
  {
    "id": "OUT004",
    "n": "Minimize the time it takes to administer products supplied in multiple bags.",
    "cls": "Functional",
    "job": "JOB001",
    "step": "Execute",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 1,
    "j": 3,
    "why": "High because three-hour administration occupies both her staff and nursing staff. Low because multi-bag products require independent thawing, wait time between bags, and long administration time.",
    "ev": [
      {
        "t": "have a wait time in between",
        "src": "line 35"
      },
      {
        "t": "take three hours for my staff and the nursing staff to administer that product",
        "src": "line 36"
      },
      {
        "t": "multiple bag infusions",
        "src": "line 170"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT005",
    "n": "Minimize the likelihood that a thawed product expires before it can be administered.",
    "cls": "Risk",
    "job": "JOB001",
    "step": "Monitor",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 1,
    "j": 3,
    "why": "High because products may need to reach the patient within 30 minutes after thaw. Low because some products have 30-minute-or-less post-thaw expiration and the participant said an hour is not enough in some circumstances.",
    "ev": [
      {
        "t": "30 minutes or less",
        "src": "line 51"
      },
      {
        "t": "get in the patient within 30 minutes",
        "src": "line 51"
      },
      {
        "t": "even an hour expiration really is not enough in some circumstances",
        "src": "line 53"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT006",
    "n": "Increase confidence that product stability information covers the actual preparation and administration time needed.",
    "cls": "Risk",
    "job": "JOB001",
    "step": "Confirm",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 1,
    "j": 3,
    "why": "High because stability information determines whether preparation and administration can be completed safely within the allowed window. Low because sponsors may be 'not willing or able' or may not have stability data beyond the stated expiration time.",
    "ev": [
      {
        "t": "even an hour expiration really is not enough in some circumstances",
        "src": "line 53"
      },
      {
        "t": "not willing or able or have the data",
        "src": "line 53"
      },
      {
        "t": "four hours or more expiration",
        "src": "line 54"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT007",
    "n": "Minimize the effort required to thaw products supplied as many individual vials.",
    "cls": "Functional",
    "job": "JOB001",
    "step": "Prepare",
    "d": 2,
    "i": 2,
    "s": 1,
    "a": 2,
    "j": 2,
    "why": "Moderate because thawing many vials adds preparation burden and contributes to time-sensitive administration workflows. Low because the cited product comes in 18 individual vials that all have to be thawed.",
    "ev": [
      {
        "t": "18 individual vials",
        "src": "line 61"
      },
      {
        "t": "have to be thawed",
        "src": "line 61"
      }
    ],
    "src": [],
    "opp": 3
  },
  {
    "id": "OUT008",
    "n": "Minimize the effort required to perform required Gram stains on products supplied as many individual vials.",
    "cls": "Functional",
    "job": "JOB001",
    "step": "Prepare",
    "d": 2,
    "i": 2,
    "s": 1,
    "a": 2,
    "j": 2,
    "why": "Moderate because required Gram stains are necessary testing steps but the evidence emphasizes their effort mainly through the 18-vial count. Low because each of the 18 vials requires a Gram stain.",
    "ev": [
      {
        "t": "18 individual vials",
        "src": "line 61"
      },
      {
        "t": "Gram stain performed",
        "src": "line 61"
      }
    ],
    "src": [],
    "opp": 3
  },
  {
    "id": "OUT009",
    "n": "Increase the likelihood that products requiring per-vial thawing and Gram stain are administered in the OR within four hours.",
    "cls": "Risk",
    "job": "JOB001",
    "step": "Monitor",
    "d": 3,
    "i": 3,
    "s": 2,
    "a": 2,
    "j": 3,
    "why": "High because per-vial thawing and Gram stains must be completed before OR administration within four hours. Moderate because the evidence shows a demanding timing requirement, but does not state that the four-hour deadline is routinely missed.",
    "ev": [
      {
        "t": "18 individual vials",
        "src": "line 61"
      },
      {
        "t": "have to be thawed",
        "src": "line 61"
      },
      {
        "t": "Gram stain performed",
        "src": "line 61"
      }
    ],
    "src": [],
    "opp": 4
  },
  {
    "id": "OUT010",
    "n": "Minimize variability in sponsor-specific ways of performing the same clinical trial task.",
    "cls": "Organizational",
    "job": "JOB002",
    "step": "Define",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 2,
    "j": 3,
    "why": "High because variability occurs across about 100 clinical trials and affects workflow design. Low because sponsor-specific variability is described as the current norm.",
    "ev": [
      {
        "t": "about 100 clinical trials",
        "src": "line 73"
      },
      {
        "t": "every single sponsor has their own different way of doing the same thing",
        "src": "line 73"
      },
      {
        "t": "collected so many hours after the infusion",
        "src": "line 75"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT011",
    "n": "Increase the likelihood that post-infusion blood samples are collected and shipped before fixed pickup deadlines.",
    "cls": "Risk",
    "job": "JOB003",
    "step": "Execute",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 1,
    "j": 3,
    "why": "High because post-infusion samples must be collected after specified intervals and still reach a fixed pickup deadline. Low because the participant stated that they have missed the FedEx pickup.",
    "ev": [
      {
        "t": "collected so many hours after the infusion",
        "src": "line 75"
      },
      {
        "t": "3:00 PM FedEx pickup",
        "src": "line 75"
      },
      {
        "t": "take a sample four hours after infusion",
        "src": "line 78"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT012",
    "n": "Increase the likelihood that sponsors understand regulatory, accreditation, and facility requirements before trial setup decisions are made.",
    "cls": "Functional",
    "job": "JOB002",
    "step": "Define",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 2,
    "j": 3,
    "why": "High because sponsor misunderstanding can affect trial setup decisions and even lead to trial withdrawal. Low because sponsors may not understand AABB, FACT, facility requirements, or the source of barriers.",
    "ev": [
      {
        "t": "requires us to follow the AABB",
        "src": "line 88"
      },
      {
        "t": "that's not us as a hospital that's creating that barrier",
        "src": "line 91"
      },
      {
        "t": "educate the sponsors",
        "src": "line 101"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT013",
    "n": "Increase confidence that sponsor-requested workflows comply with AABB and applicable public health requirements.",
    "cls": "Risk",
    "job": "JOB002",
    "step": "Confirm",
    "d": 3,
    "i": 3,
    "s": 2,
    "a": 3,
    "j": 3,
    "why": "High because the facility is required to follow AABB and applicable public health requirements. Moderate because sponsor conflicts occur, but the facility appears to have established compliance standards.",
    "ev": [
      {
        "t": "requires us to follow the AABB",
        "src": "line 88"
      },
      {
        "t": "more strict in other parts of the country",
        "src": "line 89"
      },
      {
        "t": "we have to say no",
        "src": "line 104"
      }
    ],
    "src": [],
    "opp": 4
  },
  {
    "id": "OUT014",
    "n": "Increase the ability to reach workable compromises with sponsors without compromising requirements or patient safety.",
    "cls": "Risk",
    "job": "JOB002",
    "step": "Modify",
    "d": 3,
    "i": 3,
    "s": 2,
    "a": 2,
    "j": 3,
    "why": "High because workable compromises affect whether sponsor workflows can proceed without compromising patient safety. Moderate because they can often come to a compromise or make allowances, but sometimes must say no.",
    "ev": [
      {
        "t": "come to a compromise",
        "src": "line 103"
      },
      {
        "t": "make allowances",
        "src": "line 103"
      },
      {
        "t": "we have to say no",
        "src": "line 104"
      }
    ],
    "src": [],
    "opp": 4
  },
  {
    "id": "OUT015",
    "n": "Minimize the likelihood that a sponsor withdraws from a trial because required product arrival inspection is not accepted.",
    "cls": "Risk",
    "job": "JOB002",
    "step": "Conclude",
    "d": 3,
    "i": 3,
    "s": 2,
    "a": 2,
    "j": 3,
    "why": "High because a sponsor pulled out of a trial over required arrival inspection. Moderate because the evidence shows a serious event, but only one explicit withdrawal example.",
    "ev": [
      {
        "t": "pulled out of a trial",
        "src": "line 94"
      },
      {
        "t": "we needed to be able to inspect the product when it arrives at our facility",
        "src": "line 94"
      },
      {
        "t": "checking that they've sent us the right product",
        "src": "line 96"
      }
    ],
    "src": [],
    "opp": 4
  },
  {
    "id": "OUT016",
    "n": "Increase confidence that the correct product has been received when a Dewar arrives at the facility.",
    "cls": "Risk",
    "job": "JOB004",
    "step": "Confirm",
    "d": 3,
    "i": 3,
    "s": 3,
    "a": 3,
    "j": 3,
    "why": "High because the facility must verify that the right product was sent. High because the facility already opens the Dewar and checks that the right product was received.",
    "ev": [
      {
        "t": "opening up the Dewar",
        "src": "line 96"
      },
      {
        "t": "checking that they've sent us the right product",
        "src": "line 96"
      }
    ],
    "src": [],
    "opp": 3
  },
  {
    "id": "OUT017",
    "n": "Minimize the effort required to inspect arriving products while managing Dewar storage constraints.",
    "cls": "Functional",
    "job": "JOB004",
    "step": "Execute",
    "d": 2,
    "i": 2,
    "s": 1,
    "a": 2,
    "j": 2,
    "why": "Moderate because arrival inspection is required, but this outcome focuses on effort under storage constraints rather than product-identity risk itself. Low because the facility must inspect products while also facing the constraint that it cannot store a hundred Dewars.",
    "ev": [
      {
        "t": "we needed to be able to inspect the product when it arrives at our facility",
        "src": "line 94"
      },
      {
        "t": "opening up the Dewar",
        "src": "line 96"
      },
      {
        "t": "we can't store a hundred Dewars",
        "src": "line 95"
      }
    ],
    "src": [],
    "opp": 3
  },
  {
    "id": "OUT018",
    "n": "Minimize the likelihood that incoming Dewars exceed available facility storage capacity.",
    "cls": "Organizational",
    "job": "JOB004",
    "step": "Prepare",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 1,
    "j": 3,
    "why": "High because the storage issue is linked to supporting about 100 clinical trials. Low because the facility lacks capacity for many incoming Dewars.",
    "ev": [
      {
        "t": "about 100 clinical trials",
        "src": "line 73"
      },
      {
        "t": "we can't store a hundred Dewars",
        "src": "line 95"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT019",
    "n": "Minimize the likelihood that campus distance delays preparation or administration of products with short expiration windows.",
    "cls": "Risk",
    "job": "JOB001",
    "step": "Locate",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 1,
    "j": 3,
    "why": "High because campus distance can consume a large share of a 30-minute administration window. Low because the lab is described as a 15-minute walk across campus and even into another hospital.",
    "ev": [
      {
        "t": "15-minute walk across campus",
        "src": "line 107"
      },
      {
        "t": "30 minutes or less",
        "src": "line 51"
      },
      {
        "t": "get in the patient within 30 minutes",
        "src": "line 51"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT020",
    "n": "Increase confidence that sponsor-proposed instruments have acceptable validation evidence and required IND inclusion before use.",
    "cls": "Risk",
    "job": "JOB005",
    "step": "Confirm",
    "d": 3,
    "i": 3,
    "s": 2,
    "a": 2,
    "j": 3,
    "why": "High because instrument validation and IND inclusion affect regulatory acceptability and operational use. Moderate because the facility knows what evidence is required, but sponsor readiness may be missing.",
    "ev": [
      {
        "t": "validation package",
        "src": "line 128"
      },
      {
        "t": "actual specific instrument has been validated",
        "src": "line 128"
      },
      {
        "t": "put that into their IND",
        "src": "line 127"
      }
    ],
    "src": [],
    "opp": 4
  },
  {
    "id": "OUT021",
    "n": "Minimize the likelihood that sponsor-proposed equipment overwhelms available equipment management capacity.",
    "cls": "Organizational",
    "job": "JOB005",
    "step": "Define",
    "d": 3,
    "i": 3,
    "s": 2,
    "a": 2,
    "j": 3,
    "why": "High because equipment overload can constrain trial workflow operations. Moderate because the facility is resistant to sponsor gadgets, which mitigates the issue, but capacity concerns remain.",
    "ev": [
      {
        "t": "we would be buried in equipment",
        "src": "line 129"
      }
    ],
    "src": [],
    "opp": 4
  },
  {
    "id": "OUT022",
    "n": "Minimize variability in sponsor requirements for using infusion pumps during administration.",
    "cls": "Organizational",
    "job": "JOB001",
    "step": "Define",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 2,
    "j": 3,
    "why": "High because pump requirements define the administration method and link directly to nursing execution capability. Low because current sponsor requirements are inconsistent across protocols.",
    "ev": [
      {
        "t": "use infusion pumps",
        "src": "line 155"
      },
      {
        "t": "do not use an infusion pump",
        "src": "line 157"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT023",
    "n": "Increase the ability of nursing staff to administer therapies when infusion pumps are prohibited.",
    "cls": "Functional",
    "job": "JOB001",
    "step": "Execute",
    "d": 3,
    "i": 3,
    "s": 1,
    "a": 1,
    "j": 3,
    "why": "High because therapy administration depends on nursing staff being able to execute the required administration method. Low because nurses 'do not get trained' to do manual drip infusions without pumps anymore.",
    "ev": [
      {
        "t": "do not use an infusion pump",
        "src": "line 157"
      },
      {
        "t": "do not get trained how to do manual, drip infusions without an infusion pump anymore",
        "src": "line 158"
      }
    ],
    "src": [],
    "opp": 5
  },
  {
    "id": "OUT024",
    "n": "Minimize the effort required to execute cell therapy workflows using older lab technology.",
    "cls": "Functional",
    "job": "JOB001",
    "step": "Prepare",
    "d": 2,
    "i": 2,
    "s": 1,
    "a": 2,
    "j": 2,
    "why": "Moderate because older lab technology affects execution effort but is less directly tied to a specific missed deadline in the evidence. Low because the facility relies on older technology such as water baths.",
    "ev": [
      {
        "t": "we do rely on older technology",
        "src": "line 150"
      },
      {
        "t": "water baths",
        "src": "line 150"
      }
    ],
    "src": [],
    "opp": 3
  }
];
  O.forEach(o => { o.opp = o.i + Math.max(o.i - o.s, 0); o.gap = o.i - o.a; o.served = o.i>o.s?"under":o.i<o.s?"over":"even"; });
  const ranked = O.slice().sort((a,b)=> b.opp-a.opp || b.gap-a.gap || b.j-a.j || b.d-a.d);
  ranked.forEach((o,i)=>{ o.rank = i+1; });
  const tierOf = (o)=> o.opp>=5?"high":o.opp>=3?"mod":o.opp>=2?"served":"low";
  O.forEach(o=>{ o.tier = tierOf(o); });

  const STEP_ORDER = ["Define","Locate","Prepare","Confirm","Execute","Monitor","Modify","Conclude"];
  const STEP_DESC = {
    Define:  "Determine what the product and protocol require.",
    Locate:  "Find the product, staff, materials, and space needed.",
    Prepare: "Ready the product, workspace, and team before administration.",
    Confirm: "Verify identity, compliance, and readiness before proceeding.",
    Execute: "Carry out the core handling or administration step.",
    Monitor: "Track timing, expiration, and constraints as the work runs.",
    Modify:  "Adjust or compromise when constraints or errors intervene.",
    Conclude:"Complete the step and reset for the next."
  };
  const JOBS = [
  {
    "id": "JOB001",
    "name": "Prepare and administer cell therapy products to patients under protocol-specific handling and timing constraints.",
    "actor": "Cell-therapy lab + nursing staff",
    "conf": "High"
  },
  {
    "id": "JOB002",
    "name": "Align sponsor clinical trial workflow requirements with facility, regulatory, and safety constraints before trial activation.",
    "actor": "Operations & scientific director",
    "conf": "High"
  },
  {
    "id": "JOB003",
    "name": "Collect and ship post-infusion clinical trial blood samples before fixed pickup deadlines.",
    "actor": "Lab / clinical-trial staff",
    "conf": "High"
  },
  {
    "id": "JOB004",
    "name": "Receive and inspect cell therapy products at the facility under product-identity and storage constraints.",
    "actor": "Cell-therapy lab staff",
    "conf": "High"
  },
  {
    "id": "JOB005",
    "name": "Evaluate sponsor-proposed instruments and equipment for use in cell therapy trial workflows.",
    "actor": "Operations & scientific director",
    "conf": "High"
  },
  {
    "id": "JOB006",
    "name": "Manage cell therapy product processing capacity as demand grows.",
    "actor": "Facility leadership",
    "conf": "High"
  }
];
  JOBS.forEach(j => { j.steps = STEP_DESC; });

  const byId = (id) => O.find(o => o.id === id);
  JOBS.forEach(j => {
    j.map = STEP_ORDER.map(step => ({ step, desc: STEP_DESC[step],
      outcomes: O.filter(o => o.job === j.id && o.step === step).sort((a,b)=>a.rank-b.rank) }));
    j.outcomes = O.filter(o => o.job === j.id).sort((a,b)=>a.rank-b.rank);
  });

  return {
    classes: CLASSES, scale: SCALE, stepOrder: STEP_ORDER,
    outcomes: O, ranked, jobs: JOBS, byId,
    method: {
      oppFormula:"Importance + max(Importance − Satisfaction, 0)",
      gapFormula:"Importance − Ability",
      scaleNote:"1 Low · 2 Moderate · 3 High",
      caveat:"Estimated from one interview. Treat every ranking as an evidence-based hypothesis, not a quantified ODI survey."
    },
    topOpportunity: ranked.filter(o => o.opp >= 5),
    topAbilityGap: ranked.slice().sort((a,b)=> b.gap-a.gap || b.opp-a.opp).filter(o => o.gap >= 1),
    topJCW: ranked.filter(o => o.j >= 3)
  };
})();
