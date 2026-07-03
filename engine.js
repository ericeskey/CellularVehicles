/* =========================================================
   The Convergence Engine · IDI01 Catherine
   Watch belief form: 52 observations, seven independent
   readings vote, consensus emerges, then re-sort by who
   authored the burden. Reads window.RESEARCH / PRIORS /
   EMERGENT from catherine-data.js.
   ========================================================= */
(function () {
  const R = window.RESEARCH;
  const EV = R.atoms.slice();
  const SVGNS = 'http://www.w3.org/2000/svg';
  const el = (n, a) => { const e = document.createElementNS(SVGNS, n); for (const k in a) e.setAttribute(k, a[k]); return e; };

  const ORDER = R.order;
  const NVOT = ORDER.length;   // 7 readings
  const TH = 4;                // consensus threshold: 4+ of 7 independent readings
  const voterSets = {};
  ORDER.forEach(name => voterSets[name] = new Set(R.readingAtoms[name]));

  const PRIORS = window.PRIORS;
  const EMERGENT = window.EMERGENT;
  const GLYPH = { reframed: '↻', confirmed: '✓', overturned: '✕' };

  // x-axis uses transcript line; a derived clock label rides along for the trace
  const fmtClock = s => { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  const timeOf = line => fmtClock(180 + (line - 27) * 7);
  EV.forEach((e, i) => { e.n = i + 1; e.t = e.line; e.time = timeOf(e.line); });
  // jitter observations that share a transcript line so they don't stack
  const lineGroups = {};
  EV.forEach(e => { (lineGroups[e.line] = lineGroups[e.line] || []).push(e); });
  Object.values(lineGroups).forEach(g => g.forEach((e, i) => { e.xoff = (i - (g.length - 1) / 2) * 7; }));

  const votesAt = (id, k) => ORDER.slice(0, k).reduce((a, name) => a + (voterSets[name].has(id) ? 1 : 0), 0);
  const votesAll = (id) => votesAt(id, NVOT);

  // re-sort beat: phase = who authored the burden (upstream vs site)
  const PHASES = R.phases;
  const phaseIdx = k => Math.max(0, PHASES.findIndex(p => p.k === k));
  const phaseOf = id => (R.byId(id) || {}).phase || 'Cross-cutting';
  const upCount = PHASES.filter(p => p.up).length;

  function verdictFor(k) {
    if (k === 0) return { v: 'The interview, as evidence — every observation she made, fixed in the order she said it. The question isn’t what she <em>mentioned</em>; it’s which read of the demand the evidence actually supports. Read it seven independent ways and watch where the signal <b>piles up</b>.', m: 'Customer evidence · 52 observations · seven readings to apply' };
    if (k >= NVOT) return { v: 'Seven independent readings, one consensus: the site-side burden is <b>authored upstream</b> — in the container, the stability window, and the protocol. Scaling the site was never the lever.', m: 'Posterior · belief has moved' };
    const last = ORDER[k - 1];
    return { v: `Add <b>${last}</b>. The same observations keep being voted for — the core holds while the rest stays noise.`, m: `${k} of ${NVOT} readings applied` };
  }

  const W = 1000, H = 540, mL = 56, mR = 48, mT = 64, mB = 44;
  const tMin = Math.min(...EV.map(e => e.t)), tMax = Math.max(...EV.map(e => e.t));
  const x = t => mL + (t - tMin) / (tMax - tMin) * (W - mL - mR);
  const yOf = v => (H - mB) - (v / NVOT) * (H - mB - mT);

  // one linear sequence: starting point → four reads → the turn → meet her → interview → readings → re-sort → updated read
  const FRAMES = [{ mode: 'intro' }];
  PRIORS.forEach((p, i) => FRAMES.push({ mode: 'prior', pi: i }));
  FRAMES.push({ mode: 'handoff' });
  FRAMES.push({ mode: 'meet' });
  FRAMES.push({ mode: 'field', applied: 0, reorg: false });
  for (let k = 1; k <= NVOT; k++) FRAMES.push({ mode: 'field', applied: k, reorg: false });
  FRAMES.push({ mode: 'field', applied: NVOT, reorg: true });
  FRAMES.push({ mode: 'reckon' });
  const LAST = FRAMES.length - 1;

  let f = 0, mode = 'intro', priorIdx = 0, reckonStage = 0;
  let applied = 0, reorg = false, posterior = false, pinnedEv = null, playing = false, timer = null;
  const svg = document.getElementById('field');

  function renderHead() {
    document.getElementById('headEyebrow').textContent =
      (mode === 'intro' || mode === 'prior') ? 'Demand discovery · competing reads on where demand is hiding'
      : mode === 'handoff' ? 'From assumptions to evidence · the customer gets the final vote'
      : mode === 'meet' ? 'Meet the customer · IDI01 Catherine, in her own words'
      : mode === 'reckon' ? 'Updated demand read · what now deserves action'
      : 'Customer evidence · which read explains the pressure';
  }
  function renderChips() {
    document.getElementById('applied').innerHTML = ORDER.map((name, i) =>
      `<span class="vchip${i < applied ? ' on' : ''}">${name}</span>`).join('') +
      `<span class="vchip${reorg ? ' on' : ''}" style="margin-left:8px">↻ Re-sort</span>`;
  }
  function renderControls() {
    document.getElementById('back').disabled = (f === 0);
    const nxt = document.getElementById('next');
    const atEnd = (mode === 'reckon' && reckonStage === 1);
    nxt.disabled = atEnd;
    let label;
    if (atEnd) label = 'Demand read updated';
    else if (mode === 'reckon') label = 'Judge against the evidence ▷';
    else if (mode === 'intro') label = 'Walk the four reads ▷';
    else if (mode === 'prior') label = priorIdx < PRIORS.length - 1 ? 'Next read ▷' : 'Bring in the evidence ▷';
    else if (mode === 'handoff') label = 'Meet the customer ▷';
    else if (mode === 'meet') label = 'Examine the interview ▷';
    else if (reorg) label = 'Back to the four reads ▷';
    else if (applied === 0) label = 'Apply first reading ▷';
    else if (applied < NVOT) label = 'Apply next reading ▷';
    else label = 'Re-sort by who authored it ▷';
    nxt.textContent = label;
  }
  function renderVerdict() {
    if (posterior) {
      document.getElementById('verdict').innerHTML =
        `<div class="vd-verdict">Same four bets, judged by seven readings. Automate, standardize, educate, scale — every prior aimed at <b>the site</b>. The lever the evidence points to sits <b>upstream</b>: design the product for the site from the start.</div>` +
        `<div class="vd-meta">Posterior · belief has moved · <b>scaling the site was never the lever</b></div>`;
      return;
    }
    if (reorg) {
      const preRun = EV.filter(e => votesAll(e.id) >= TH && PHASES[phaseIdx(phaseOf(e.id))].up).length;
      const totalCons = EV.filter(e => votesAll(e.id) >= TH).length;
      document.getElementById('verdict').innerHTML =
        `<div class="vd-verdict">Now re-sort the same observations by who <b>authored</b> the burden. The consensus core slides to the <b>upstream</b> side of the line — decided before the product ever shipped.</div>` +
        `<div class="vd-meta"><b>${preRun}</b> of ${totalCons} agreed-on moments were authored upstream</div>`;
      return;
    }
    const d = verdictFor(applied);
    const consensus = EV.filter(e => votesAt(e.id, applied) >= TH).length;
    document.getElementById('verdict').innerHTML =
      `<div class="vd-verdict">${d.v}</div><div class="vd-meta">${d.m} · <b>${consensus}</b> observation${consensus === 1 ? '' : 's'} at consensus</div>`;
  }
  function renderField() {
    svg.innerHTML = '';
    svg.appendChild(el('rect', { class: 'consensus-band', x: 0, y: yOf(NVOT) - 10, width: W, height: yOf(TH) - (yOf(NVOT) - 10) }));
    svg.appendChild(el('line', { x1: mL, y1: yOf(TH), x2: W - mR, y2: yOf(TH), stroke: 'var(--signal)', 'stroke-width': 1, 'stroke-dasharray': '3 4', opacity: 0.5 }));
    const cl = el('text', { class: 'cb-lab', x: W - 12, y: yOf(TH) + 2, transform: `rotate(-90 ${W - 12} ${yOf(TH) + 2})`, 'text-anchor': 'start' }); cl.textContent = 'consensus'; svg.appendChild(cl);
    const ay = el('text', { class: 'axis-lab', x: 12, y: mT + 2, transform: `rotate(-90 12 ${mT + 2})` }); ay.textContent = 'votes accumulated →'; svg.appendChild(ay);

    const NL = PHASES.length;
    const laneX = i => mL + (i + 0.5) / NL * (W - mL - mR);

    if (!reorg) {
      const ax = el('text', { class: 'axis-lab', x: mL, y: H - 12 }); ax.textContent = `${timeOf(tMin)}  ——  the interview  ——  ${timeOf(tMax)}`; svg.appendChild(ax);
      EV.forEach(e => {
        const v = votesAt(e.id, applied);
        const r = 4 + v * 2.2;
        const g = el('g', { class: 'node', 'data-ev': e.id });
        g.appendChild(el('circle', { cx: x(e.t) + (e.xoff || 0), cy: yOf(v), r, fill: v >= TH ? 'var(--signal)' : 'var(--ink)', opacity: v <= 1 ? 0.3 : 1 }));
        svg.appendChild(g);
      });
      return;
    }

    // reorg: lanes by who authored the burden (upstream | site)
    const divDx = mL + upCount / NL * (W - mL - mR);
    svg.appendChild(el('line', { x1: divDx, y1: mT - 4, x2: divDx, y2: H - mB + 8, stroke: 'var(--ink)', 'stroke-width': 1, 'stroke-dasharray': '4 4', opacity: 0.55 }));
    const lpre = el('text', { class: 'axis-lab', x: divDx - 8, y: H - 12, 'text-anchor': 'end' }); lpre.textContent = 'authored upstream'; svg.appendChild(lpre);
    const lsite = el('text', { class: 'axis-lab', x: divDx + 8, y: H - 12 }); lsite.textContent = 'absorbed at the site →'; svg.appendChild(lsite);
    PHASES.forEach((p, i) => {
      const t = el('text', { class: 'cb-lab', x: laneX(i), y: 18, 'text-anchor': 'middle', fill: p.up ? 'var(--signal)' : 'var(--ash)' }); t.textContent = p.k; svg.appendChild(t);
    });
    const byPhase = {};
    EV.forEach(e => { const p = phaseOf(e.id); (byPhase[p] = byPhase[p] || []).push(e); });
    Object.keys(byPhase).forEach(pk => {
      const pi = phaseIdx(pk);
      const aside = PHASES[pi].aside;
      const buckets = {};
      byPhase[pk].forEach(e => { const v = votesAll(e.id); (buckets[v] = buckets[v] || []).push(e); });
      Object.keys(buckets).forEach(vv => {
        const v = +vv, arr = buckets[vv];
        arr.forEach((e, idx) => {
          const r = 4 + v * 2.2;
          const cx = laneX(pi) + (idx - (arr.length - 1) / 2) * 13;
          const op = aside ? 0.22 : (v >= TH ? 1 : (v <= 1 ? 0.25 : 0.6));
          const g = el('g', { class: 'node', 'data-ev': e.id });
          g.appendChild(el('circle', { cx, cy: yOf(v), r, fill: (v >= TH && !aside) ? 'var(--signal)' : 'var(--ink)', opacity: op }));
          svg.appendChild(g);
        });
      });
    });
  }
  function renderFocalPrior() {
    const p = PRIORS[priorIdx];
    const num = String(priorIdx + 1).padStart(2, '0');
    const tot = '0' + PRIORS.length;
    const dots = PRIORS.map((_, i) =>
      `<span class="rail-dot${i === priorIdx ? ' on' : (i < priorIdx ? ' done' : '')}"></span>`).join('');
    document.getElementById('focalstage').innerHTML = `
      <div class="focal">
        <div class="focal-meta"><span class="focal-count">Prior ${num} / ${tot}</span><span class="focal-tag">${p.tag}</span></div>
        <h2 class="focal-belief">“${p.belief}”</h2>
        <div class="focal-facets">
          <div class="focal-facet" style="--d:.4s"><span class="focal-k">Why it matters</span><p>${p.why}</p></div>
          <div class="focal-facet" style="--d:.95s"><span class="focal-k">If it’s true, you’d</span><p>${p.implies}</p></div>
        </div>
        <div class="focal-rail">${dots}</div>
      </div>`;
  }
  function renderFocalReckon(revealed) {
    const cards = PRIORS.map((p, i) => {
      const num = String(i + 1).padStart(2, '0');
      const v = p.verdict;
      const tail = revealed
        ? `<div class="rc-vlabel"><span class="gl">${GLYPH[v.state]}</span>${v.label}</div><div class="rc-note">${v.note}</div>`
        : `<div class="rc-pending">weighing against the evidence…</div>`;
      return `<div class="rcard${revealed ? ' ' + v.state : ''}"><div class="pc-tag">Read ${num} · ${p.tag}</div>` +
        `<div class="rc-belief">“${p.belief}”</div>${tail}</div>`;
    }).join('');
    const title = revealed
      ? 'Now — judged by what the interview voted for.'
      : 'The four reads, as the room walked in holding them.';
    const chain = revealed
      ? 'Competing reads → customer evidence → <b>updated demand read</b> → what deserves action'
      : '<b>Competing reads</b> → customer evidence → updated demand read → what deserves action';
    const emer = revealed
      ? `<div class="emergent emergent-focal"><div class="pc-tag">The strongest demand signal — on no one’s list</div>` +
        `<div class="em-belief">“${EMERGENT.belief}”</div><div class="em-note">${EMERGENT.note}</div></div>`
      : '';
    document.getElementById('focalstage').innerHTML = `
      <div class="focal focal-reckon" data-reveal="${revealed ? 1 : 0}">
        <div class="focal-meta"><span class="focal-count">The updated demand read</span><span class="focal-tag">before → after</span></div>
        <div class="reckon-chain">${chain}</div>
        <h2 class="focal-belief reckon-title">${title}</h2>
        <div class="reckon-grid">${cards}</div>
        ${emer}
      </div>`;
  }
  function renderFocalHandoff() {
    document.getElementById('focalstage').innerHTML = `
      <div class="focal focal-handoff">
        <div class="focal-meta"><span class="focal-count">From assumptions to evidence</span><span class="focal-tag">the turn</span></div>
        <h2 class="focal-belief">The customer gets the final vote.</h2>
        <p class="intro-lede">However compelling a theory sounds in the room, only the customer settles it. So demand discovery stops debating and starts observing — what they say, do, work around, and will actually change or pay for. The richest evidence is the <b>conversation itself</b>.</p>
        <div class="intake">
          <div class="intake-k">Bring in the conversation</div>
          <div class="intake-forms">Recorded interview · Audio or video · Transcript · Live capture</div>
          <div class="intake-loaded"><span class="dot"></span>Loaded — IDI01 Catherine · cell-therapy site delivery · operations &amp; scientific director</div>
        </div>
      </div>`;
  }
  function renderFocalMeet() {
    document.getElementById('focalstage').innerHTML = `
      <div class="focal focal-meet">
        <div class="focal-meta"><span class="focal-count">Meet the customer</span><span class="focal-tag">IDI01 · Catherine</span></div>
        <h2 class="focal-belief">“I’m part of the problem as well.”</h2>
        <div class="meet-id"><b>Catherine</b> · operations &amp; scientific director · hospital cell-therapy facility · two decades, biotech to bedside</div>
        <div class="meet-why">She sits where the sponsor’s product meets the patient: she educates sponsors, sets the boundaries, and absorbs whatever the design decided upstream. She’s not an outlier but an <b>archetype</b> — the treatment-site operations lead every cell-therapy sponsor has to get through. What the field will pay for lives in the <b>handoff only she holds</b>.</div>
        <div class="player">
          <button class="play-btn" id="meetPlay" aria-label="Play from the interview">▸</button>
          <div class="pmeta">
            <div class="plabel">From the interview · IDI01 Catherine</div>
            <div class="ptrack"><div class="pfill" id="pfill"></div></div>
            <div class="ptime" id="ptime">0:00 / —:—</div>
          </div>
        </div>
        <div class="meet-quote">“The first person who’s ever called and asked me for input.”<span class="cite">IDI01 Catherine</span></div>
      </div>`;
  }
  function renderFocalIntro() {
    document.getElementById('focalstage').innerHTML = `
      <div class="focal focal-intro">
        <div class="focal-meta"><span class="focal-count">Demand discovery</span><span class="focal-tag">the starting point</span></div>
        <h2 class="focal-belief">We don’t enter the interview blank.</h2>
        <p class="intro-lede">Every team already carries reads on what the customer wants — usually unspoken, and quietly competing. Left unnamed, the call goes to whoever argues most confidently, not to the read the evidence supports. So we surface them first. Only then can the interview do its real work: showing which read the customer’s own words back, and which the room has been overvaluing.</p>
        <div class="intro-foot">Step one of the method · name the room’s reads before a single quote is heard</div>
      </div>`;
  }
  function render() {
    document.body.setAttribute('data-mode', mode);
    document.body.classList.toggle('is-focal', mode !== 'field');
    renderHead(); renderChips(); renderControls();
    if (mode === 'intro') renderFocalIntro();
    else if (mode === 'handoff') renderFocalHandoff();
    else if (mode === 'meet') renderFocalMeet();
    else if (mode === 'prior') renderFocalPrior();
    else if (mode === 'reckon') renderFocalReckon(reckonStage === 1);
    else { renderVerdict(); renderField(); renderDetail(pinnedEv); }
  }

  function renderDetail(ev) {
    const d = document.getElementById('detail');
    if (!ev) { d.innerHTML = `<div class="det-empty"><div class="det-eyebrow">Trace</div><p>Hover any observation for a glance. Click to keep its words and votes here.</p><p class="held">Four demand reads held · judged at the end ▸</p></div>`; return; }
    const total = votesAll(ev.id);
    const chips = ORDER.map(name => {
      const on = voterSets[name].has(ev.id);
      return `<span class="chip${on ? '' : ' off'}">${name}${on ? '' : ' —'}</span>`;
    }).join('');
    d.innerHTML = `<div class="det-eyebrow">${ev.time} · ${ev.kind}</div>
      <div class="det-title">${ev.title}</div>
      <div class="det-votes">${total} of ${NVOT} readings voted${total >= TH ? ' · consensus' : ''}</div>
      <div class="det-quote">“${ev.quote}”</div>
      <div class="det-in">voted for by ${chips}</div>`;
  }

  const am0 = document.getElementById('catAudio');
  function go(n) {
    if (am0 && !am0.paused) am0.pause();
    f = Math.max(0, Math.min(LAST, n));
    const fr = FRAMES[f];
    mode = fr.mode;
    if (mode === 'prior') { priorIdx = fr.pi; applied = 0; reorg = false; posterior = false; }
    else if (mode === 'field') { applied = fr.applied; reorg = fr.reorg; posterior = false; }
    else if (mode === 'intro') { applied = 0; reorg = false; posterior = false; priorIdx = 0; }
    else if (mode === 'handoff') { applied = 0; reorg = false; posterior = false; }
    else if (mode === 'meet') { applied = 0; reorg = false; posterior = false; }
    else { applied = NVOT; reorg = true; posterior = true; reckonStage = 0; }
    render();
  }
  function nextStep() { if (mode === 'reckon' && reckonStage === 0) { reckonStage = 1; render(); } else { go(f + 1); } }
  function prevStep() { if (mode === 'reckon' && reckonStage === 1) { reckonStage = 0; render(); } else { go(f - 1); } }
  function stopPlay() { playing = false; if (timer) clearTimeout(timer); document.getElementById('play').textContent = '▸ Play'; }
  function step() {
    if (!playing) return;
    if (mode === 'reckon' && reckonStage === 1) { stopPlay(); return; }
    nextStep();
    timer = setTimeout(step, mode === 'intro' ? 2600 : mode === 'handoff' ? 2600 : mode === 'meet' ? 3200 : mode === 'prior' ? 2100 : mode === 'reckon' ? 2000 : 1600);
  }
  function play() { if (mode === 'reckon' && reckonStage === 1) go(0); playing = true; document.getElementById('play').textContent = '❚❚ Pause'; timer = setTimeout(step, 600); }

  document.getElementById('next').addEventListener('click', () => { stopPlay(); nextStep(); });
  document.getElementById('back').addEventListener('click', () => { stopPlay(); prevStep(); });
  document.getElementById('reset').addEventListener('click', () => { stopPlay(); go(0); });
  document.getElementById('play').addEventListener('click', () => { if (playing) stopPlay(); else play(); });
  svg.addEventListener('click', e => { const g = e.target.closest('[data-ev]'); if (g) { pinnedEv = R.byId(g.dataset.ev); renderDetail(pinnedEv); } });

  const tip = document.getElementById('tip');
  svg.addEventListener('mousemove', e => {
    const g = e.target.closest('[data-ev]');
    if (!g) { tip.style.display = 'none'; return; }
    const ev = R.byId(g.dataset.ev); const v = votesAt(ev.id, applied);
    tip.innerHTML = `<b>${ev.title}</b><span class="${v >= TH ? 'cons' : ''}">${ev.time} · ${v}/${NVOT} readings${v >= TH ? ' · consensus' : ''}</span>`;
    tip.style.display = 'block';
    tip.style.left = Math.min(e.clientX + 14, window.innerWidth - 250) + 'px';
    tip.style.top = (e.clientY + 14) + 'px';
  });
  svg.addEventListener('mouseleave', () => { tip.style.display = 'none'; });

  // ---- meet-her player · plays the interview audio (placeholder: full file
  //      from 0 until a trimmed self-introduction clip is provided) ----
  const setPlayGlyph = g => { const b = document.getElementById('meetPlay'); if (b) b.textContent = g; };
  document.getElementById('focalstage').addEventListener('click', e => {
    if (!e.target.closest('#meetPlay')) return;
    if (am0.paused) am0.play().catch(() => {}); else am0.pause();
  });
  am0.addEventListener('play', () => setPlayGlyph('❚❚'));
  am0.addEventListener('pause', () => setPlayGlyph('▸'));
  am0.addEventListener('timeupdate', () => {
    const fill = document.getElementById('pfill'), tm = document.getElementById('ptime');
    const dur = am0.duration || 0, pos = am0.currentTime;
    if (fill && dur) fill.style.width = (pos / dur * 100) + '%';
    if (tm) tm.textContent = fmtClock(pos) + ' / ' + (dur ? fmtClock(dur) : '—:—');
  });

  render();
})();
