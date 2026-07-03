/* =========================================================
   THE CONSTELLATION · Read + Listen (anthology).
   One opener + three voiced stories, one per narrative.
   Derived from uploads/2.2.1.2.2 IDI01.NS001–003 (story_markdown)
   and data.js narratives NS-001..003. Text-only: no narration
   audio exists for Catherine, so the Listen view is a read-along.
   ========================================================= */
window.CONSTELLATION = {
  title: "When the Therapy Works, but the Site Absorbs the Gap",
  standfirst: "Three stories from one hospital cell-therapy facility. In each, the science is sound, and the work still lands on the site, because the product was designed before the hospital was ever in the room.",

  opener: [
    { t:"p", v:"What happens when a cell therapy is scientifically ready and still becomes hard to deliver, because the choices that shape it are fixed before the hospital ever sees the product?" },
    { t:"p", v:"These three stories follow Catherine, the operations and scientific director of a hospital cell-therapy facility, where sponsor products, trial protocols, regulation, storage, and nursing all have to be reconciled into something a patient can actually receive. The science works. The trials enroll. The therapies reach approval." },
    { t:"p", v:"At first each problem looks like ordinary friction: a few extra containers, a short expiration, one more requirement to explain. Each seems small enough to absorb. Then the pattern comes into focus. Container count, stability window, protocol, and device are all decided upstream, and the burden of making them fit lands on the site." },
    { t:"pq", v:"The burden the site absorbs is authored upstream." },
    { t:"p", v:"What follows moves through three incidents. Eighteen vials against a four-hour clock. A refusal that turns out to be accreditation, storage, and verification. A phone call that becomes a sequence of adoption gates. Read together, they ask you to hear cell therapy differently: feasibility is not only efficacy, and a workable therapy is one the daily user can actually run." }
  ],

  stories: [
    {
      num: "01", id: "NS-001", title: "Eighteen Vials and a Four-Hour Clock",
      audio: "../media/constellation/ns-001.mp3",
      dek: "A therapy can be scientifically viable and still become impossible to deliver.",
      protagonist: "Catherine and the cell-therapy processing and administration workflow.",
      tension: "Ready-to-use administration and timing margin versus product designs that fragment the dose and compress the window.",
      line: "Impossible. Impossible in a large hospital.",
      inThis: [
        "Why a single-container dose is more than a convenience.",
        "How container count turns one dose into hours of work.",
        "Why a 30-minute expiration can be impossible in a large hospital.",
        "How post-thaw work gets pushed onto the site instead of the fill step.",
        "Where product presentation becomes a feasibility wall."
      ],
      why: "A therapy is not deliverable simply because it is effective. The harder test is whether its presentation and timing fit the hospital that must administer it. When the dose arrives as 18 vials against a four-hour clock, the science is intact and the delivery is not.",
      fits: "The opening story. It begins at the smallest unit of the work, a container, and the first sign that feasibility is decided before the product ships.",
      blocks: [
        { t:"p", v:"The fit Catherine wants is concrete: a single bag or vial that can be thawed and given to the patient." },
        { t:"p", v:"The format she has to account for can look like 18 individual vials. The dose splits into separate containers. Each added container adds post-thaw work before administration can happen. With some presentations, it can take three hours. The product still has to be used within four hours." },
        { t:"p", v:"The reversal is quiet but severe. The container choice is made before the hospital work begins; the time burden appears after thaw. Catherine’s question goes back to the fill step: why didn’t they do that when they filled the bag?" },
        { t:"pq", v:"Impossible. Impossible in a large hospital." },
        { t:"p", v:"By administration, the site is no longer solving a simple handling preference. It is trying to fit repeated thaw-and-prep work inside a clock that nearly closes while the work is being done. In a large hospital, the boundary is already visible." },
        { t:"p", v:"Nothing about the science had failed. The cells were viable. The trial was real. What did not fit was the shape the product arrived in, and the number of minutes left once it was thawed." },
        { t:"p", v:"The dose reached the patient. It reached them because the site absorbed the gap between how the product was presented and how a hospital actually runs. The next product would arrive the same way, carrying the same question of whether it could be given at all." }
      ],
      changed: {
        before: "Post-thaw handling looked like a place where a product could be made simpler to give.",
        after: "Container count, thaw work, and expiration windows became constraints that could make delivery infeasible.",
        now: "A therapy can fail operationally at the point where its product presentation meets the hospital clock."
      }
    },

    {
      num: "02", id: "NS-002", title: "When the Site Had to Say No",
      audio: "../media/constellation/ns-002.mp3",
      dek: "A refusal can be the operational form of rules the site did not write.",
      protagonist: "Catherine and the clinical site at the sponsor-facility interface.",
      tension: "Educating, compromising, and making allowances versus obligations that sometimes force a hard refusal.",
      line: "That’s not us as a hospital that’s creating that barrier.",
      inThis: [
        "Why apparent hospital resistance is often external obligation.",
        "How AABB rules and FACT accreditation set non-negotiable limits.",
        "Why arrival inspection and Dewar storage are safety duties, not preferences.",
        "How education and compromise reach a boundary.",
        "Where a misunderstanding becomes a trial-stopping conflict."
      ],
      why: "A site can look obstructive when it is actually carrying regulation, accreditation, and patient-safety duties it did not author. Education and compromise stretch only so far; when a request crosses a fixed requirement, the refusal is the constraint made visible.",
      fits: "The second story moves from product to relationship, where the site becomes translator and boundary-setter for constraints sponsors mistake for hospital preference.",
      blocks: [
        { t:"p", v:"The explanation had become familiar. In the same month, sponsors had raised this kind of issue at least three times, and Catherine kept pointing to obligations that did not originate inside the hospital. One requirement is that they follow the AABB. Another is the site’s FACT accreditation." },
        { t:"p", v:"Then the dispute narrowed to product receipt. The site had to inspect the product when it arrives. It also had a storage limit that could not be smoothed over by more willingness: they can’t store a hundred Dewars." },
        { t:"pq", v:"We have to say no." },
        { t:"p", v:"Catherine’s first move was not a flat refusal. The work was to educate the sponsors and come to a compromise. The pressure was that compromise could only go so far. When the request crossed into a requirement the site could not bend, the answer became the one she tries not to start with." },
        { t:"p", v:"The consequence was not just another explanation. They pulled out. The same boundary being treated as a hospital obstacle became the line where a trial no longer fit the site." },
        { t:"p", v:"None of it was arbitrary. The inspection verified the right product had arrived. The storage limit was physical. The accreditation was real. What looked like a hospital being difficult was a set of duties the site was required to carry, and could not hand back." }
      ],
      changed: {
        before: "The site was repeatedly translating external requirements that sponsors could mistake for hospital preference.",
        after: "The dispute over inspection and storage ended with a sponsor pulling out.",
        now: "A refusal can be the operational form of accreditation, storage limits, and verification duties."
      }
    },

    {
      num: "03", id: "NS-003", title: "The Call Before the Device Becomes the Work",
      audio: "../media/constellation/ns-003.mp3",
      dek: "Asking the daily user early can decide whether a tool helps or becomes more work.",
      protagonist: "Catherine as a site-side representative of the daily users who must make new workflows work.",
      tension: "Automation and future access versus IND constraints, validation burden, equipment load, and daily-user fit.",
      line: "The first person who’s ever called and asked me for input.",
      inThis: [
        "Why a new tool’s first condition sits upstream in the IND.",
        "How validation and whole-workflow fit gate adoption.",
        "Why more equipment can be a burden, not relief.",
        "How the daily user decides whether a tool works.",
        "Where early site input changes what gets built."
      ],
      why: "New cell therapy innovation becomes plausible only when it is built with the evidence systems and the daily users who must validate and run it. Asked early, the site can shape a tool; handed one late, it inherits more work.",
      fits: "The closing story looks forward, to how a proposed tool becomes either support for patient access or one more late-stage burden.",
      blocks: [
        { t:"p", v:"When someone calls Catherine and asks for input, a new preparation system is not treated as a simple add-on. Her first condition sits upstream: a sponsor would have to put that into their IND. If the filed instructions say something else, the site is left with a basic problem, because that’s not how they told the FDA." },
        { t:"p", v:"Then the system has to arrive with proof. Catherine names a validation package and looks at the workflow from start to finish. A device that leaves the facility carrying more equipment is not relief; it is how they would be buried in equipment." },
        { t:"p", v:"The pressure moves from the filing to daily use. The person every day who’s going to use it is where the promise is tested. If the system arrives too late, and if it doesn’t work, the problem lands where the work has to happen." },
        { t:"pq", v:"The first person who’s ever called and asked me for input." },
        { t:"p", v:"The call itself changes shape. What sounds like a request for input becomes a sequence of adoption gates: filing, validation, whole-workflow fit, equipment burden, and daily use. At the same time, the work is already pressing against capacity, not going to be able to keep up." },
        { t:"p", v:"The future for patient access still has to pass through the hands of the people expected to run it every day. Being asked early is rare. It is also the only point at which the site can shape the tool instead of inheriting it." }
      ],
      changed: {
        before: "A new cell therapy tool could appear as something handed to a site after core decisions were already made.",
        after: "Catherine’s conditions make adoption depend on upstream filing, validation, whole-workflow fit, and daily-user input.",
        now: "The rare act of asking the daily user early can determine whether a tool supports access or becomes more work."
      }
    }
  ],

  learn: [
    "Why product presentation can decide whether a therapy is deliverable.",
    "How container count and short windows turn one dose into hours of work.",
    "Why site refusals are often external obligations, not preferences.",
    "How accreditation, storage, and verification become operational limits.",
    "Why adopting a new tool runs through the IND, validation, and daily use.",
    "How asking the daily user early changes what gets built.",
    "Why a therapy can succeed scientifically and still land its burden on the site."
  ],
  start: "Start with Eighteen Vials and a Four-Hour Clock. The 18-vial case is the doorway into the whole set: a viable therapy, a closing window, and the first sign that feasibility is authored upstream.",

  close: "Three stories, one facility. The therapy works in every one of them. What lands on the site, and what Catherine keeps reconciling, is everything the sponsor decided before the product arrived."
};
