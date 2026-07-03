/* =========================================================
   CASEFILE · decision UI, "The Call".
   - the evidence-gap worklist (the hinge): checkable, persisted,
     tagged to concern/crux/outcome, and gating one decision each
   - the KT rational-process pipeline (interactive)
   - the COT snap-in with deep-links to the existing lenses
   - the decision-brief workbench: candidate moves scored against
     must/want outcomes, gated live by the worklist
   ========================================================= */
(function () {
  const SHORTC = {
    concern_001:"Capacity vs. demand", concern_002:"Multi-container formats", concern_003:"Post-thaw window",
    concern_004:"Missing stability data", concern_005:"Missed pickups", concern_006:"Sponsor friction",
    concern_007:"Device barriers", concern_008:"Pump vs. nursing"
  };
  const SHORTK = CASE.cruxShort;
  const LS = "casefile-gates-v1";
  let resolved = {};
  try { resolved = JSON.parse(localStorage.getItem(LS) || "{}"); } catch (e) { resolved = {}; }
  let proceedAnyway = false;
  let activeDecision = "dec_01";

  const isDone = id => !!resolved[id];
  const openCount = () => CASE.gaps.filter(g => !isDone(g.id)).length;
  const save = () => { try { localStorage.setItem(LS, JSON.stringify(resolved)); } catch (e) {} };

  const CHECK = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 7.3 5.7 10 11 4.4" fill="none" stroke="#F2F0EB" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ============ GATES WORKLIST ============ */
  const gatesMount = document.getElementById("gates-mount");
  function gapTags(g) {
    const dec = CASE.decisionById[g.gates];
    const out = CASE.outcome(g.outcome);
    return `<div class="gtags">
      ${g.concerns.map(c => `<span class="gtag">concern <button class="lk" data-concern="${c}">${SHORTC[c]}</button></span>`).join("")}
      ${g.cruxes.map(k => `<span class="gtag">crux <button class="lk" data-crux="${k}">${SHORTK[k]}</button></span>`).join("")}
      ${out ? `<span class="gtag">outcome \u00b7 ${out.cls.toLowerCase()}</span>` : ""}
      <span class="gtag gate">gates \u2192 <button class="lk" data-dec="${g.gates}">${g.gatesLabel}</button></span>
    </div>`;
  }
  function renderGates() {
    gatesMount.innerHTML = `<div class="gates">
      <div class="gates-top">
        <div class="gt-lead">
          <div class="bl"><span class="kt-nod">The to-do list between knowing and deciding</span><span class="kt-formal">Critical missing evidence \u00b7 resolve before Decision Analysis</span></div>
          <p>Mark a gap resolved as you learn the answer. <b>In strict mode, the decision brief stays locked until every gate clears.</b></p>
        </div>
        <div class="meter">
          <div class="ml"><span>Evidence gates</span><span id="meter-count"></span></div>
          <div class="mbar"><div class="mfill" id="meter-fill"></div></div>
          <button class="mtog" id="meter-tog"></button>
        </div>
      </div>
      ${CASE.gaps.map((g, i) => `
        <div class="gaprow${isDone(g.id) ? " done" : ""}" data-gaprow="${g.id}">
          <div class="check"><button class="gbox" data-toggle="${g.id}" aria-label="resolve">${CHECK}</button></div>
          <div class="gbody">
            <div class="gq"><span style="font-family:var(--font-mono);font-size:12px;color:var(--fg3);margin-right:10px">${String(i+1).padStart(2,"0")}</span>${g.q}</div>
            <div class="glearn"><b>To settle it:</b> ${g.learn} <span style="color:var(--fg3)">${g.why}</span></div>
            ${gapTags(g)}
          </div>
        </div>`).join("")}
    </div>`;
    bindGates();
    updateMeter();
  }
  function updateMeter() {
    const done = CASE.gaps.length - openCount();
    const fill = document.getElementById("meter-fill");
    const cnt = document.getElementById("meter-count");
    if (fill) fill.style.width = (done / CASE.gaps.length * 100) + "%";
    if (cnt) cnt.textContent = done + " / " + CASE.gaps.length + " resolved";
    const meta = document.getElementById("meta-gates");
    if (meta) meta.textContent = openCount() + " of " + CASE.gaps.length;
    const tog = document.getElementById("meter-tog");
    if (tog) tog.textContent = done === CASE.gaps.length ? "all clear, reset" : "mark all resolved";
  }
  function bindGates() {
    gatesMount.querySelectorAll("[data-toggle]").forEach(b => b.addEventListener("click", () => {
      const id = b.dataset.toggle; resolved[id] = !resolved[id]; save();
      gatesMount.querySelector(`[data-gaprow="${id}"]`).classList.toggle("done", !!resolved[id]);
      updateMeter(); updateLock(); renderBrief(); updateCardStates();
    }));
    gatesMount.querySelectorAll("[data-concern]").forEach(b => b.addEventListener("click", () => gotoConcern(b.dataset.concern)));
    gatesMount.querySelectorAll("[data-crux]").forEach(b => b.addEventListener("click", () => gotoCrux(b.dataset.crux)));
    gatesMount.querySelectorAll("[data-dec]").forEach(b => b.addEventListener("click", () => selectDecision(b.dataset.dec, true)));
    const tog = document.getElementById("meter-tog");
    if (tog) tog.addEventListener("click", () => {
      const allDone = openCount() === 0;
      CASE.gaps.forEach(g => { resolved[g.id] = !allDone; });
      save(); renderGates(); updateLock(); renderBrief(); updateCardStates();
    });
  }
  function gotoConcern(id) {
    const sec = document.getElementById("diagnosis"); if (sec) sec.scrollIntoView({ behavior:"smooth", block:"start" });
    if (window.CASEFILE_DIAG) { window.CASEFILE_DIAG.setMode("triage"); setTimeout(() => window.CASEFILE_DIAG.selectConcern(id), 120); }
  }
  function gotoCrux(id) {
    const sec = document.getElementById("diagnosis"); if (sec) sec.scrollIntoView({ behavior:"smooth", block:"start" });
    if (window.CASEFILE_DIAG) window.CASEFILE_DIAG.setMode("bridge");
  }

  /* flash a gate row when linked from the drawer */
  window.addEventListener("casefile-flashgate", (e) => {
    const id = e.detail && e.detail.id;
    const row = gatesMount.querySelector(`[data-gaprow="${id}"]`);
    if (row) { row.style.transition = "background .2s"; row.style.background = "rgba(214,74,31,0.12)"; setTimeout(() => row.style.background = "", 1400); }
  });

  /* ============ KT PIPELINE ============ */
  const pipeMount = document.getElementById("pipeline-mount");
  function renderPipeline() {
    const P = CASE.pipeline;
    pipeMount.innerHTML = `
      <div class="pipe">
        ${P.map((s, i) => `<div class="pstage" data-stage="${s.id}">
          <div class="pnum">0${i+1}</div>
          <div class="pkt"><span class="kt-nod">${s.nod}</span><span class="kt-formal">${s.kt}</span></div>
          <div class="pname"><span class="kt-formal">${s.kt}</span><span class="kt-nod">${s.nod}</span></div>
          <div class="pverb">${s.verb}</div>
          <div class="phalf">${s.half === "diagnosis" ? "what's wrong" : s.half === "hinge" ? "the hinge" : "what to do"}</div>
          <div class="parrow"></div>
        </div>`).join("")}
      </div>
      <div class="cotband">
        <div class="cspan" style="grid-column:1 / 4">Diagnosis, evidence-anchored, traceable</div>
        <div class="cspan cot" style="grid-column:4 / 6">Decisioning ingredients \u2192 Cruxes \u00b7 Outcomes \u00b7 Transformations</div>
      </div>
      <div class="pstage-detail" id="pstage-detail"></div>`;
    pipeMount.querySelectorAll(".pstage").forEach(st => st.addEventListener("click", () => togglePipe(st.dataset.stage)));
  }
  let activeStage = null;
  function togglePipe(id) {
    const det = document.getElementById("pstage-detail");
    pipeMount.querySelectorAll(".pstage").forEach(s => s.classList.toggle("on", s.dataset.stage === id && activeStage !== id));
    if (activeStage === id) { activeStage = null; det.classList.remove("show"); return; }
    activeStage = id;
    const s = CASE.pipeline.find(p => p.id === id);
    det.innerHTML = `
      <div class="pd-kt"><span class="kt-formal"><b>${s.kt}</b></span><span class="kt-nod"><b>${s.nod}</b></span> \u00b7 ${s.verb}</div>
      <h4><span class="kt-formal">${s.kt}</span><span class="kt-nod">${s.nod}</span></h4>
      <p>${s.body}</p>
      <div class="pd-io">
        <div class="io"><span class="iol">In</span>${s.in}</div>
        <div class="io"><span class="iol">Out</span>${s.out}</div>
      </div>
      <button class="pd-go" data-target="${s.target}">${s.targetLabel} \u2192</button>`;
    det.classList.add("show");
    det.querySelector(".pd-go").addEventListener("click", () => {
      const t = s.target;
      const sec = document.querySelector(t);
      if (sec) sec.scrollIntoView({ behavior:"smooth", block:"start" });
    });
  }

  /* ============ COT SNAP-IN ============ */
  const cotMount = document.getElementById("cot-mount");
  function renderCOT() {
    cotMount.innerHTML = `<div class="cot">
      ${CASE.cot.map(c => `<div class="col">
        <div class="ckey">${c.key}</div>
        <div class="ckt">${c.kt}</div>
        <div class="crole">${c.role}</div>
        <div class="cblurb">${c.blurb}</div>
        <div class="cfrom">From ${c.from}</div>
        <div class="cpick">
          <div class="cpl">Sharpest example</div>
          <div class="cpt">${c.pickLabel}</div>
        </div>
        <div class="clink"><a href="${c.lens}">Open ${c.lensName} <span class="arr">\u2192</span></a></div>
      </div>`).join("")}
    </div>`;
  }

  /* ============ WORKBENCH ============ */
  const wbMount = document.getElementById("workbench-mount");
  function cardState(d) {
    if (!d.gaps.length) return { k:"scope", label:"Scope before betting" };
    const open = d.gaps.filter(g => !isDone(g)).length;
    if (open > 0) return { k:"open", label:"Provisional \u00b7 " + open + " gate" + (open>1?"s":"") + " open" };
    return { k:"ready", label:"Decision-ready" };
  }
  function renderWB() {
    wbMount.innerHTML = `<div class="wb">
      <div class="wb-list" id="wb-list">
        <div class="wl-h"><div class="bl"><span class="kt-nod">Candidate moves</span><span class="kt-formal">Alternatives</span></div></div>
        ${CASE.decisions.map(d => {
          const s = cardState(d);
          return `<button class="wb-opt${d.id===activeDecision?" on":""}" data-dec="${d.id}">
            <div class="wo-tx">${d.tx.replace("tx_","transformation ")}</div>
            <div class="wo-t">${d.title}</div>
            <div class="wo-state ${s.k==="open"?"open":"ready"}">${s.label}</div>
          </button>`;
        }).join("")}
      </div>
      <div class="brief" id="brief"></div>
    </div>`;
    wbMount.querySelectorAll(".wb-opt").forEach(b => b.addEventListener("click", () => selectDecision(b.dataset.dec)));
    renderBrief();
  }
  function outcomeLi(regId, role) {
    const o = CASE.outcome(regId);
    if (!o) return "";
    const tag = role === "must" ? "must" : "opp " + o.opp.toFixed(1);
    return `<div class="b-li"><span class="bm ${role==="must"?"sig":""}">${role==="must"?"\u25a0":tag}</span><span class="bt"><b>${o.n}</b><span>${o.cls} \u00b7 ${role==="must"?"must not fail":"opportunity "+o.opp.toFixed(1)+" / 5"}</span></span></div>`;
  }
  function updateCardStates() {
    wbMount.querySelectorAll(".wb-opt").forEach(b => {
      const d = CASE.decisionById[b.dataset.dec]; if (!d) return;
      const s = cardState(d);
      const elx = b.querySelector(".wo-state");
      if (elx) { elx.className = "wo-state " + (s.k === "open" ? "open" : "ready"); elx.textContent = s.label; }
    });
  }
  function renderBrief() {
    const brief = document.getElementById("brief");
    if (!brief) return;
    const d = CASE.decisionById[activeDecision];
    const s = cardState(d);
    const crux = d.crux ? CASE.crux(d.crux) : null;
    const openGaps = d.gaps.filter(g => !isDone(g));
    brief.innerHTML = `
      <div class="b-eyebrow"><span>${d.id.replace("dec_","decision ")} \u00b7 ${d.tx.replace("tx_","tx ")}</span><span class="kt-formal">Decision Analysis</span></div>
      <div class="b-stmt">${d.statement}</div>
      <span class="b-verdict ${s.k==="open"?"open":""}">${s.k==="open"?"\u25c9":"\u25cf"} ${s.label}</span>
      <div class="b-grid">
        <div>
          <div class="b-sec"><div class="bl"><span class="kt-nod">Must hold</span><span class="kt-formal">Must objectives</span></div>
            ${d.musts.length ? d.musts.map(m => outcomeLi(m,"must")).join("") : `<div class="b-li"><span class="bm">\u00b7</span><span class="bt"><span>No binding must, this is an optimization, not a risk gate.</span></span></div>`}
          </div>
          <div class="b-sec"><div class="bl"><span class="kt-nod">Want to improve</span><span class="kt-formal">Want objectives \u00b7 weighted</span></div>
            ${d.wants.map(w => outcomeLi(w,"want")).join("")}
          </div>
        </div>
        <div>
          <div class="b-sec"><div class="bl"><span class="kt-nod">Pivots on</span><span class="kt-formal">Crux addressed</span></div>
            ${crux ? `<div class="b-crux"><div class="bcl">crux ${crux.rank} \u00b7 leverage ${crux.lev.toLowerCase()}</div><div class="bct">${crux.title}</div><a href="the-keystone.html">In The Keystone \u2192</a></div>`
                   : `<div class="b-li"><span class="bm">\u00b7</span><span class="bt"><span>No single crux, a localized output fix, ranked below run-start and continuity.</span></span></div>`}
          </div>
          <div class="b-sec"><div class="bl"><span class="sig">Still gating this</span><span class="kt-formal">open evidence gates</span></div>
            ${d.gaps.length ? d.gaps.map(gid => {
              const g = CASE.gapById[gid]; const done = isDone(gid);
              return `<div class="b-li ${done?"":"gateopen"}"><span class="bm">${done?"\u2713":"?"}</span><span class="bt"><button class="lk" data-gapjump="${gid}"><b>${g.gatesLabel ? g.q : g.q}</b></button><span>${done?"resolved":"open, resolve in the worklist above"}</span></span></div>`;
            }).join("") : `<div class="b-li"><span class="bm">\u00b7</span><span class="bt"><span>No appraisal gate maps here yet, scope the protocol diversity first.</span></span></div>`}
          </div>
        </div>
        <div class="b-sec full"><div class="bl"><span class="kt-nod">Guard against</span><span class="kt-formal">Potential Problem Analysis</span></div>
          ${d.risks.map((r,i) => `<div class="b-li"><span class="bm">!</span><span class="bt">${r}</span></div>`).join("")}
        </div>
        <div class="b-sec full"><div class="bl">The move</div>
          <div class="b-li"><span class="bm">\u2192</span><span class="bt"><a href="${d.lens}" style="color:var(--ink);text-decoration:none;border-bottom:2px solid var(--signal)">See it framed as a transformation in The Shift \u2192</a></span></div>
          ${d.concerns.length ? `<div class="b-li"><span class="bm">\u25c7</span><span class="bt">Resolves: ${d.concerns.map(c => `<button class="lk" data-concernjump="${c}">${SHORTC[c]}</button>`).join(", ")}</span></div>` : ""}
        </div>
      </div>`;
    brief.querySelectorAll("[data-gapjump]").forEach(b => b.addEventListener("click", () => {
      const sec = document.getElementById("gates"); if (sec) sec.scrollIntoView({ behavior:"smooth", block:"start" });
      window.dispatchEvent(new CustomEvent("casefile-flashgate", { detail:{ id:b.dataset.gapjump } }));
    }));
    brief.querySelectorAll("[data-concernjump]").forEach(b => b.addEventListener("click", () => gotoConcern(b.dataset.concernjump)));
  }
  function selectDecision(id, scroll) {
    activeDecision = id;
    wbMount.querySelectorAll(".wb-opt").forEach(b => b.classList.toggle("on", b.dataset.dec === id));
    renderBrief();
    if (scroll) { const sec = document.getElementById("call"); if (sec) document.getElementById("workbench-mount").scrollIntoView({ behavior:"smooth", block:"center" }); }
  }

  /* ============ LOCK (strict gate) ============ */
  const lockWrap = document.getElementById("wb-lock");
  function updateLock() {
    const mode = document.documentElement.getAttribute("data-gate");
    const locked = mode === "strict" && openCount() > 0 && !proceedAnyway;
    lockWrap.classList.toggle("locked", locked);
  }
  const proceedBtn = document.getElementById("proceed-anyway");
  if (proceedBtn) proceedBtn.addEventListener("click", () => { proceedAnyway = true; updateLock(); });
  window.addEventListener("casetweak", () => { proceedAnyway = false; updateLock(); });

  /* ============ INIT ============ */
  renderGates();
  renderPipeline();
  renderCOT();
  renderWB();
  updateLock();
  window.CASEFILE_DECISION = { selectDecision };
})();
