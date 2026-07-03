/* =========================================================
   CASEFILE · IDI01 Catherine — full observation atom registry.
   The complete 52-atom set (IDI01.OA###) from 1.0_observation_atoms,
   so every concern → cause → atom → verbatim-quote traversal in
   The Casefile resolves. Each entry is [loc, conf, observation, quote].
   Merges into window.RESEARCH.atoms (which crux-data.js also seeds),
   and is exposed via CASE.atom(). Source: 1.0_observation_atoms.md
   ========================================================= */
window.RESEARCH = window.RESEARCH || {};
window.RESEARCH.atoms = window.RESEARCH.atoms || {};

(function () {
  const A = {
    "IDI01.OA001": ["line 27", "High", "Requests for processing keep rising", "requests more and more for processing"],
    "IDI01.OA002": ["line 28", "High", "About 30% of products need in-lab manipulation", "30% of our products need some in la- in-lab manipulation"],
    "IDI01.OA003": ["line 31", "High", "They handle no in vivo therapies", "do not handle any in vivo therapies"],
    "IDI01.OA004": ["line 31", "High", "Pharmacy owns the in vivo therapies", "handled by the pharmacy department"],
    "IDI01.OA005": ["line 35", "High", "Her wish: one bag or vial, ready to give", "single bag or vial that is ready just to thaw and give to the patient"],
    "IDI01.OA006": ["line 35", "High", "Products can arrive in four, five, six bags", "multiple bags, four, five, six bags"],
    "IDI01.OA007": ["line 35", "High", "Each bag must be thawed independently", "have to be thawed independently"],
    "IDI01.OA008": ["line 35", "High", "There is a wait time between bags", "have a wait time in between"],
    "IDI01.OA009": ["line 36", "High", "A multi-bag dose can take three hours to give", "take three hours for my staff and the nursing staff to administer that product"],
    "IDI01.OA010": ["line 51", "High", "Some products expire 30 minutes after thaw", "30 minutes or less"],
    "IDI01.OA011": ["line 51", "High", "Some need thawing across two or three vials", "need to be thawed in two or three vials"],
    "IDI01.OA012": ["line 51", "High", "Volume must be drawn into a syringe", "placed into a syringe"],
    "IDI01.OA013": ["line 51", "High", "The dose must reach the patient in 30 minutes", "get in the patient within 30 minutes"],
    "IDI01.OA014": ["line 53", "High", "Even an hour isn't enough sometimes", "even an hour expiration really is not enough in some circumstances"],
    "IDI01.OA015": ["line 53", "High", "Sponsors don't understand the problem", "they don't understand the problem"],
    "IDI01.OA016": ["line 53", "High", "Sponsors won't or can't share stability data", "not willing or able or have the data"],
    "IDI01.OA017": ["line 54", "High", "Products they make in-house get four hours+", "four hours or more expiration"],
    "IDI01.OA018": ["line 61", "High", "One current product arrives as 18 vials", "18 individual vials"],
    "IDI01.OA019": ["line 61", "High", "Every one of the 18 vials must be thawed", "have to be thawed"],
    "IDI01.OA020": ["line 61", "High", "Every vial needs a Gram stain", "Gram stain performed"],
    "IDI01.OA021": ["line 67", "High", "It must reach the OR patient within four hours", "within four hours"],
    "IDI01.OA022": ["line 73", "High", "They support about 100 clinical trials", "about 100 clinical trials"],
    "IDI01.OA023": ["line 73", "High", "Every sponsor does the same thing differently", "every single sponsor has their own different way of doing the same thing"],
    "IDI01.OA024": ["line 75", "High", "Some samples are drawn hours after infusion", "collected so many hours after the infusion"],
    "IDI01.OA025": ["line 75", "High", "Those samples must make a 3:00 PM FedEx pickup", "3:00 PM FedEx pickup"],
    "IDI01.OA026": ["line 78", "High", "A four-hour sample can miss the pickup", "we've missed the FedEx pickup"],
    "IDI01.OA027": ["line 88", "High", "CDPH requires them to follow AABB rules", "requires us to follow the AABB"],
    "IDI01.OA028": ["line 89", "High", "Those rules are stricter elsewhere", "more strict in other parts of the country"],
    "IDI01.OA029": ["line 91", "High", "She explained 3+ times last month it's not the hospital", "at least three times in the last month"],
    "IDI01.OA030": ["line 93", "High", "The facility is FACT accredited", "we are FACT accredited"],
    "IDI01.OA031": ["line 93", "High", "Many biotechs are not FACT accredited", "are not FACT accredited"],
    "IDI01.OA032": ["line 93", "High", "Some sponsors don't know what FACT is", "maybe even don't know what FACT is"],
    "IDI01.OA033": ["line 94", "High", "A sponsor pulled out over arrival inspection", "pulled out of a trial"],
    "IDI01.OA034": ["line 96", "High", "They open the Dewar to verify the right product", "checking that they've sent us the right product"],
    "IDI01.OA035": ["line 95", "High", "They can't store a hundred Dewars", "we can't store a hundred Dewars"],
    "IDI01.OA036": ["line 101", "High", "They try to educate the sponsors", "educate the sponsors"],
    "IDI01.OA037": ["line 102", "High", "They pull in the PI and medical director", "pull in the PI and our medical director"],
    "IDI01.OA038": ["line 103", "High", "They can often reach a compromise", "come to a compromise"],
    "IDI01.OA039": ["line 104", "High", "Sometimes they have to say no", "we have to say no"],
    "IDI01.OA040": ["line 107", "High", "The lab is a 15-minute walk across campus", "15-minute walk across campus"],
    "IDI01.OA041": ["line 128", "High", "They need a validation package per instrument", "validation package"],
    "IDI01.OA042": ["line 129", "High", "Accept sponsor gadgets and they'd be buried in equipment", "we would be buried in equipment"],
    "IDI01.OA043": ["line 127", "High", "If it isn't in the IND, the sponsor says no", "then they're gonna say no"],
    "IDI01.OA044": ["line 155", "High", "Some sponsors require infusion pumps", "use infusion pumps"],
    "IDI01.OA045": ["line 157", "High", "Many sponsors forbid infusion pumps", "do not use an infusion pump"],
    "IDI01.OA046": ["line 158", "High", "Nurses aren't trained for manual drips anymore", "do not get trained how to do manual, drip infusions without an infusion pump anymore"],
    "IDI01.OA047": ["line 148", "High", "Most cell-therapy facilities are similar", "are very similar"],
    "IDI01.OA048": ["line 150", "High", "They rely on older tech: water baths, BSCs", "we do rely on older technology"],
    "IDI01.OA049": ["line 169", "High", "About 12–13 approved commercial therapies", "12 or 13 approved commercial cell therapies"],
    "IDI01.OA050": ["line 169", "High", "More commercial therapies keep coming", "more and more coming out"],
    "IDI01.OA051": ["line 170", "High", "Multi-bag persists because the trial was run that way", "multiple bag infusions"],
    "IDI01.OA052": ["line 186", "High", "A lab of safety cabinets won't keep up", "not gonna be able to keep up"]
  };

  const atoms = {};
  for (const id in A) {
    const [loc, conf, observation, quote] = A[id];
    atoms[id] = { observation, quote, loc, conf };
  }
  Object.assign(window.RESEARCH.atoms, atoms);
})();
