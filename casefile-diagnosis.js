/* =========================================================
   CASEFILE · diagnosis UI, the 3-mode evidence canvas.
   Modes: triage (severity matrix) · bridge (concern → crux,
   wired by shared atoms) · graph (force-directed, expandable
   to causes and atoms). A shared drawer renders the full
   Problem Analysis for any concern, traversable to the
   verbatim quote. Filters narrow by type / priority / conf.
   ========================================================= */
(function () {
  const SVGNS = "http://www.w3.org/2000/svg";
  const C = CASE.concerns;
  const byC = CASE.byConcern;
  const CR = (window.RESEARCH && window.RESEARCH.cruxes) || [];
  const cruxById = Object.fromEntries(CR.map(k => [k.id, k]));
  const SHORTK = CASE.cruxShort;
  const SHORTC = {
    concern_001:"Capacity vs. demand", concern_002:"Multi-container formats", concern_003:"Post-thaw window",
    concern_004:"Missing stability data", concern_005:"Missed pickups", concern_006:"Sponsor friction",
    concern_007:"Device barriers", concern_008:"Pump vs. nursing"
  };
  const NEXT = CASE.sa.nextConcern;
  const shortAtom = (id) => String(id).replace(/^IDI01\./, "");

  const W = 1000, H = 720;
  const field = document.getElementById("field");
  const gAxes = document.getElementById("g-axes");
  const gEdges = document.getElementById("g-edges");
  const gNodes = document.getElementById("g-nodes");
  const drawer = document.getElementById("drawer");
  const capEl = document.getElementById("canvas-cap");
  const hintEl = document.getElementById("canvas-hint");

  const state = { mode:"triage", sel:null, selType:null, filt:{ type:"all", priority:"all", conf:"all" }, expanded:null, expandedCause:null };

  function el(tag, attrs, parent) {
    const e = document.createElementNS(SVGNS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    (parent || gNodes).appendChild(e);
    return e;
  }
  function clear(g) { while (g.firstChild) g.removeChild(g.firstChild); }
  function tq(s) { return "\u201C" + String(s).replace(/^"|"$/g, "").replace(/'/g, "\u2019") + "\u201D"; }

  function passes(c) {
    const f = state.filt;
    return (f.type === "all" || c.type === f.type) &&
           (f.priority === "all" || c.priority === f.priority) &&
           (f.conf === "all" || c.conf === f.conf);
  }

  const CAP = {
    triage: "Urgency × impact. Square = problem, diamond = risk; size tracks priority. Signal marks the recommended next analysis.",
    bridge: "Concerns (left) wired to the six cruxes (right) by shared evidence. A thicker line means more shared atoms.",
    graph: "Concerns and cruxes pulled together by shared atoms. Drag any node. Click a concern to expand its causes; a cause to expand its atoms."
  };
  const HINT = { triage:"click a concern", bridge:"click to trace", graph:"drag · click · expand" };

  /* =====================================================
     SHAPES
     ===================================================== */
  function shapeFor(g, kind, size, cls) {
    // kind: 'problem' square, 'risk' diamond, 'crux' square, 'cause' circle, 'atom' dot
    if (kind === "risk") {
      el("rect", { x:-size/2, y:-size/2, width:size, height:size, transform:"rotate(45)", class:"shape" }, g);
    } else if (kind === "cause") {
      el("circle", { r:size/2, class:"shape" }, g);
    } else if (kind === "atom") {
      el("circle", { r:size/2, class:"shape" }, g);
    } else {
      el("rect", { x:-size/2, y:-size/2, width:size, height:size, class:"shape" }, g);
    }
  }

  /* =====================================================
     TRIAGE, severity matrix
     ===================================================== */
  const LV = { Low:0, Medium:1, High:2 };
  function layoutTriage() {
    clear(gAxes); clear(gEdges); clear(gNodes);
    const M = { l:120, r:90, t:64, b:92 }, pw = W - M.l - M.r, ph = H - M.t - M.b;
    // gridlines
    for (let i = 0; i <= 3; i++) {
      const x = M.l + (i/3)*pw, y = M.t + (i/3)*ph;
      el("line", { x1:x, y1:M.t, x2:x, y2:H-M.b, class:"axis-soft" }, gAxes);
      el("line", { x1:M.l, y1:y, x2:W-M.r, y2:y, class:"axis-soft" }, gAxes);
    }
    el("line", { x1:M.l, y1:H-M.b, x2:W-M.r, y2:H-M.b, class:"axis-line" }, gAxes);
    el("line", { x1:M.l, y1:M.t, x2:M.l, y2:H-M.b, class:"axis-line" }, gAxes);
    const xl = el("text", { x:(M.l+W-M.r)/2, y:H-M.b+38, "text-anchor":"middle", class:"axis-lab" }, gAxes); xl.textContent = "Urgency \u2192";
    const yl = el("text", { x:0, y:0, class:"axis-lab", "text-anchor":"middle", transform:`translate(${M.l-34},${(M.t+H-M.b)/2}) rotate(-90)` }, gAxes); yl.textContent = "Impact \u2192";
    ["Low","Med","High"].forEach((t,i) => {
      const x = M.l + ((i+0.5)/3)*pw;
      const tx = el("text", { x:x, y:H-M.b+20, "text-anchor":"middle", class:"quad-note" }, gAxes); tx.textContent = t;
      const y = M.t + ((1-(i+0.5)/3))*ph;
      const ty = el("text", { x:M.l-12, y:y+3, "text-anchor":"end", class:"quad-note" }, gAxes); ty.textContent = t;
    });
    const qn = el("text", { x:W-M.r-6, y:M.t+14, "text-anchor":"end", class:"quad-note" }, gAxes); qn.textContent = "act first \u2197";

    // group concerns by cell
    const cells = {};
    C.forEach(c => {
      const key = LV[c.urgency] + "_" + LV[c.impact];
      (cells[key] = cells[key] || []).push(c);
    });
    Object.keys(cells).forEach(key => {
      const [ux, iy] = key.split("_").map(Number);
      const cx = M.l + ((ux+0.5)/3)*pw, cy = M.t + ((1-(iy+0.5)/3))*ph;
      const list = cells[key].slice().sort((a,b) => a.rank - b.rank);
      const n = list.length;
      list.forEach((c, idx) => {
        // stack vertically within a cell so labels never collide horizontally
        const dy = n > 1 ? (idx - (n-1)/2) * 64 : 0;
        c._x = cx; c._y = cy + dy;
        drawConcernNode(c);
      });
    });
    capEl.textContent = CAP.triage; hintEl.textContent = HINT.triage;
    refreshSel();
  }

  function drawConcernNode(c) {
    const big = c.priority === "High" ? 34 : c.priority === "Medium" ? 28 : 23;
    const isNext = c.id === NEXT;
    const g = el("g", { class:"node" + (isNext ? " sig" : ""), transform:`translate(${c._x},${c._y})` });
    g.dataset.id = c.id;
    if (isNext) el("circle", { r:big/2 + 9, class:"reticle" }, g);
    shapeFor(g, c.type === "Risk" ? "risk" : "problem", big, "");
    const rk = el("text", { x:0, y:4, "text-anchor":"middle", class:"rk" }, g); rk.textContent = c.rank;
    const lab = el("text", { x:0, y:big/2 + 16, "text-anchor":"middle", class:"nlab" }, g); lab.textContent = SHORTC[c.id];
    const sub = el("text", { x:0, y:big/2 + 30, "text-anchor":"middle", class:"nsub" }, g);
    sub.textContent = c.type + (c.trend === "Worsening" ? " \u2191" : "");
    c._g = g;
    g.addEventListener("click", (e) => { e.stopPropagation(); selectConcern(c.id); });
  }

  /* =====================================================
     BRIDGE, concern → crux (shared atoms)
     ===================================================== */
  let bridgeEdges = [];
  function layoutBridge() {
    clear(gAxes); clear(gEdges); clear(gNodes);
    const M = { t:70, b:60 };
    const leftX = 280, rightX = 730;
    const ch = el("text", { x:leftX, y:42, "text-anchor":"middle", class:"col-head" }, gAxes); ch.textContent = "Concerns \u00b7 by priority";
    const kh = el("text", { x:rightX, y:42, "text-anchor":"middle", class:"col-head" }, gAxes); kh.textContent = "Cruxes \u00b7 leverage";

    const ranked = C.slice().sort((a,b) => a.rank - b.rank);
    const n = ranked.length;
    ranked.forEach((c, i) => { c._x = leftX; c._y = M.t + (i/(n-1))*(H-M.t-M.b); });
    const cr = CR.slice().sort((a,b) => a.rank - b.rank);
    cr.forEach((k, i) => { k._x = rightX; k._y = M.t + 40 + (i/(cr.length-1))*(H-M.t-M.b-80); });

    // edges
    bridgeEdges = CASE.concernCruxEdges.map(e => {
      const c = byC[e.concern], k = cruxById[e.crux];
      const x1 = c._x + 14, y1 = c._y, x2 = k._x - 16, y2 = k._y;
      const mx = (x1 + x2) / 2;
      const path = el("path", { d:`M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`,
        class:"edge", "stroke-width": (0.8 + e.n * 0.55).toFixed(2) }, gEdges);
      return { e, path };
    });

    // concern nodes (left)
    ranked.forEach(c => {
      const g = el("g", { class:"node", transform:`translate(${c._x},${c._y})` });
      g.dataset.id = c.id; g.dataset.kind = "concern";
      shapeFor(g, c.type === "Risk" ? "risk" : "problem", 22, "");
      const rk = el("text", { x:0, y:3.5, "text-anchor":"middle", class:"rk", style:"font-size:10px" }, g); rk.textContent = c.rank;
      const lab = el("text", { x:-20, y:-1, "text-anchor":"end", class:"nlab" }, g); lab.textContent = SHORTC[c.id];
      const sub = el("text", { x:-20, y:12, "text-anchor":"end", class:"nsub" }, g); sub.textContent = c.priority + " \u00b7 " + c.type;
      c._g = g;
      g.addEventListener("click", (ev) => { ev.stopPropagation(); selectConcern(c.id); });
      g.addEventListener("mouseenter", () => hoverBridge(c.id, "concern"));
      g.addEventListener("mouseleave", () => { if (!state.sel) clearBridgeHi(); else applyBridgeHi(); });
    });
    // crux nodes (right)
    cr.forEach(k => {
      const isTop = k.rank === 1;
      const g = el("g", { class:"node" + (isTop ? " sig" : ""), transform:`translate(${k._x},${k._y})` });
      g.dataset.id = k.id; g.dataset.kind = "crux";
      shapeFor(g, "crux", 26, "");
      const rk = el("text", { x:0, y:4, "text-anchor":"middle", class:"rk" }, g); rk.textContent = k.rank;
      const lab = el("text", { x:20, y:-1, "text-anchor":"start", class:"nlab" }, g); lab.textContent = SHORTK[k.id];
      const sub = el("text", { x:20, y:12, "text-anchor":"start", class:"nsub" }, g); sub.textContent = "leverage " + k.lev.toLowerCase();
      k._g = g;
      g.addEventListener("click", (ev) => { ev.stopPropagation(); selectCrux(k.id); });
      g.addEventListener("mouseenter", () => hoverBridge(k.id, "crux"));
      g.addEventListener("mouseleave", () => { if (!state.sel) clearBridgeHi(); else applyBridgeHi(); });
    });
    capEl.textContent = CAP.bridge; hintEl.textContent = HINT.bridge;
    refreshSel();
    if (state.sel) applyBridgeHi(); else clearBridgeHi();
  }
  function clearBridgeHi() {
    bridgeEdges.forEach(b => { b.path.classList.remove("on"); b.path.classList.remove("dim"); });
    gNodes.querySelectorAll(".node").forEach(g => g.classList.remove("faded","sel"));
    applyFilterFade();
  }
  function hoverBridge(id, kind) {
    bridgeEdges.forEach(b => {
      const on = (kind === "concern" && b.e.concern === id) || (kind === "crux" && b.e.crux === id);
      b.path.classList.toggle("on", on); b.path.classList.toggle("dim", !on);
    });
  }
  function applyBridgeHi() {
    if (!state.sel) return;
    const id = state.sel, kind = state.selType;
    bridgeEdges.forEach(b => {
      const on = (kind === "concern" && b.e.concern === id) || (kind === "crux" && b.e.crux === id);
      b.path.classList.toggle("on", on); b.path.classList.toggle("dim", !on);
    });
  }

  /* =====================================================
     GRAPH, force-directed, expandable
     ===================================================== */
  let nodes = [], links = [], raf = null, dragNode = null;
  function buildGraphModel() {
    nodes = []; links = [];
    const cmap = {};
    C.forEach((c, i) => { const a = (i/C.length)*Math.PI*2; const nd = { id:c.id, type:"concern", r:(c.priority==="High"?20:16), x:W/2 + Math.cos(a)*320, y:H/2 + Math.sin(a)*250, vx:0, vy:0 }; nodes.push(nd); cmap[c.id]=nd; });
    const kmap = {};
    CR.forEach((k, i) => { const a = (i/CR.length)*Math.PI*2 + 0.5; const nd = { id:k.id, type:"crux", r:15, x:W/2 + Math.cos(a)*130, y:H/2 + Math.sin(a)*110, vx:0, vy:0 }; nodes.push(nd); kmap[k.id]=nd; });
    CASE.concernCruxEdges.forEach(e => { if (cmap[e.concern] && kmap[e.crux]) links.push({ s:cmap[e.concern], t:kmap[e.crux], len:165, w:e.n }); });
    // expansion
    if (state.expanded) {
      const c = byC[state.expanded]; const parent = cmap[c.id];
      c.causes.forEach(ca => {
        const nd = { id:c.id+"/"+ca.id, type:"cause", r:9, label:ca.type.replace(/_/g," "), x:parent.x+(Math.random()-0.5)*80, y:parent.y+(Math.random()-0.5)*80, vx:0, vy:0, most: ca.id===c.most.id };
        nodes.push(nd); links.push({ s:parent, t:nd, len:78, w:1 });
        if (state.expandedCause === c.id+"/"+ca.id) {
          ca.sup.forEach(aid => {
            const an = { id:c.id+"/"+ca.id+"/"+aid, type:"atom", r:5, atom:aid, x:nd.x+(Math.random()-0.5)*50, y:nd.y+(Math.random()-0.5)*50, vx:0, vy:0 };
            nodes.push(an); links.push({ s:nd, t:an, len:46, w:1 });
          });
        }
      });
    }
  }
  function drawGraph() {
    clear(gAxes); clear(gEdges); clear(gNodes);
    links.forEach(l => { l._line = el("line", { class:"edge", "stroke-width":(0.7 + l.w*0.4).toFixed(2) }, gEdges); });
    nodes.forEach(nd => {
      let cls = "node " + (nd.type === "concern" ? "" : nd.type);
      if (nd.type === "concern" && byC[nd.id] && byC[nd.id].id === NEXT) cls += " sig";
      if (nd.type === "crux" && cruxById[nd.id] && cruxById[nd.id].rank === 1) cls += " sig";
      const g = el("g", { class:cls.trim() });
      g.dataset.gid = nd.id; nd._g = g;
      if (nd.type === "concern") {
        const c = byC[nd.id];
        shapeFor(g, c.type === "Risk" ? "risk" : "problem", nd.r*2, "");
        const rk = el("text", { x:0, y:3.5, "text-anchor":"middle", class:"rk", style:"font-size:10px" }, g); rk.textContent = c.rank;
        const lab = el("text", { x:0, y:nd.r+13, "text-anchor":"middle", class:"nlab" }, g); lab.textContent = SHORTC[nd.id];
      } else if (nd.type === "crux") {
        shapeFor(g, "crux", nd.r*2, "");
        const lab = el("text", { x:0, y:nd.r+12, "text-anchor":"middle", class:"nlab" }, g); lab.textContent = SHORTK[nd.id];
      } else if (nd.type === "cause") {
        shapeFor(g, "cause", nd.r*2, "");
        if (nd.most) el("circle", { r:nd.r+4, class:"reticle" }, g);
        const lab = el("text", { x:0, y:nd.r+11, "text-anchor":"middle", class:"nlab", style:"font-size:8.5px" }, g); lab.textContent = nd.label;
      } else {
        shapeFor(g, "atom", nd.r*2, "");
        const lab = el("text", { x:0, y:nd.r+10, "text-anchor":"middle", class:"nlab" }, g); lab.textContent = shortAtom(nd.atom);
      }
      bindGraphNode(g, nd);
    });
    capEl.textContent = CAP.graph; hintEl.textContent = HINT.graph;
  }
  function bindGraphNode(g, nd) {
    g.addEventListener("mousedown", (e) => { e.stopPropagation(); startDrag(nd, e); });
    g.addEventListener("click", (e) => {
      e.stopPropagation();
      if (nd._moved) { nd._moved = false; return; }
      if (nd.type === "concern") {
        selectConcern(nd.id);
        state.expanded = (state.expanded === nd.id) ? null : nd.id;
        state.expandedCause = null;
        rebuildGraph();
      } else if (nd.type === "crux") {
        selectCrux(nd.id);
      } else if (nd.type === "cause") {
        state.expandedCause = (state.expandedCause === nd.id) ? null : nd.id;
        rebuildGraph();
      } else if (nd.type === "atom") {
        const parts = nd.id.split("/"); selectConcern(parts[0]); setTimeout(() => flashAtom(nd.atom), 60);
      }
    });
  }
  function rebuildGraph() { buildGraphModel(); drawGraph(); applyFilterFade(); refreshSel(); restartSim(); }

  function startDrag(nd, e) {
    dragNode = nd; nd._moved = false;
    const pt = svgPoint(e);
    dragNode._ox = nd.x - pt.x; dragNode._oy = nd.y - pt.y;
    const move = (ev) => {
      const p = svgPoint(ev);
      nd.x = p.x + dragNode._ox; nd.y = p.y + dragNode._oy; nd.vx = 0; nd.vy = 0; nd._moved = true;
      tickPositions();
    };
    const up = () => { dragNode = null; window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
    window.addEventListener("mousemove", move); window.addEventListener("mouseup", up);
  }
  function svgPoint(e) {
    const r = field.getBoundingClientRect();
    return { x:(e.clientX - r.left)/r.width*W, y:(e.clientY - r.top)/r.height*H };
  }
  function physicsStep() {
    const cx = W/2, cy = H/2;
    for (let i=0;i<nodes.length;i++) {
      const a = nodes[i];
      if (a === dragNode) continue;
      a.vx += (cx - a.x) * 0.0006;
      a.vy += (cy - a.y) * 0.0006;
      for (let j=0;j<nodes.length;j++) {
        if (i===j) continue;
        const b = nodes[j];
        let dx = a.x-b.x, dy = a.y-b.y; let d2 = dx*dx+dy*dy; if (d2<4) d2=4;
        const d = Math.sqrt(d2);
        let rep = ((a.r+b.r)*(a.r+b.r)) / d2 * 5.5;
        if (rep > 2.6) rep = 2.6;
        a.vx += (dx/d)*rep; a.vy += (dy/d)*rep;
      }
    }
    links.forEach(l => {
      let dx = l.t.x-l.s.x, dy = l.t.y-l.s.y; const d = Math.sqrt(dx*dx+dy*dy)||1;
      const f = (d - l.len) * 0.016;
      const fx = (dx/d)*f, fy = (dy/d)*f;
      if (l.s !== dragNode) { l.s.vx += fx; l.s.vy += fy; }
      if (l.t !== dragNode) { l.t.vx -= fx; l.t.vy -= fy; }
    });
    nodes.forEach(n => {
      if (n === dragNode) return;
      n.vx *= 0.85; n.vy *= 0.85;
      const sp = Math.hypot(n.vx, n.vy); if (sp > 9) { n.vx = n.vx/sp*9; n.vy = n.vy/sp*9; }
      n.x += n.vx; n.y += n.vy;
      n.x = Math.max(46, Math.min(W-46, n.x)); n.y = Math.max(52, Math.min(H-44, n.y));
    });
  }
  function warmGraph(steps) { for (let i=0;i<steps;i++) physicsStep(); tickPositions(); }
  function tickPositions() {
    nodes.forEach(n => { if (n._g) n._g.setAttribute("transform", `translate(${n.x.toFixed(1)},${n.y.toFixed(1)})`); });
    links.forEach(l => { if (l._line) { l._line.setAttribute("x1", l.s.x.toFixed(1)); l._line.setAttribute("y1", l.s.y.toFixed(1)); l._line.setAttribute("x2", l.t.x.toFixed(1)); l._line.setAttribute("y2", l.t.y.toFixed(1)); } });
  }
  function loop() { if (state.mode !== "graph") { raf = null; return; } physicsStep(); tickPositions(); raf = requestAnimationFrame(loop); }
  function restartSim() { if (raf) cancelAnimationFrame(raf); if (state.mode === "graph") { raf = requestAnimationFrame(loop); } }

  /* =====================================================
     FILTER FADE (shared)
     ===================================================== */
  function applyFilterFade() {
    gNodes.querySelectorAll(".node").forEach(g => {
      const id = g.dataset.id || (g.dataset.gid && g.dataset.gid.indexOf("/")<0 ? g.dataset.gid : null);
      if (id && byC[id]) {
        const ok = passes(byC[id]);
        g.classList.toggle("faded", !ok);
        g.style.pointerEvents = ok ? "" : "none";
      }
    });
    if (state.mode === "bridge") {
      bridgeEdges.forEach(b => {
        const ok = passes(byC[b.e.concern]);
        if (!state.sel) b.path.style.opacity = ok ? "" : "0.12";
      });
    }
  }

  /* =====================================================
     SELECTION + DRAWER
     ===================================================== */
  function refreshSel() {
    gNodes.querySelectorAll(".node").forEach(g => {
      const id = g.dataset.id || g.dataset.gid;
      g.classList.toggle("sel", !!state.sel && id === state.sel);
    });
  }
  function selectConcern(id) {
    state.sel = id; state.selType = "concern";
    drawer.innerHTML = concernPanel(byC[id]);
    drawer.scrollTop = 0; bindDrawer();
    refreshSel();
    if (state.mode === "bridge") applyBridgeHi();
  }
  function selectCrux(id) {
    state.sel = id; state.selType = "crux";
    drawer.innerHTML = cruxPanel(cruxById[id]);
    drawer.scrollTop = 0; bindDrawer();
    refreshSel();
    if (state.mode === "bridge") applyBridgeHi();
  }
  function deselect() {
    state.sel = null; state.selType = null;
    drawer.innerHTML = overviewPanel();
    bindDrawer(); refreshSel();
    if (state.mode === "bridge") clearBridgeHi();
  }

  const TYPED = t => t.replace(/_/g, " ");
  const sigClass = v => v === "High" ? "sig" : "";

  function atomRow(id) {
    const a = CASE.atom(id); if (!a) return "";
    return `<div class="atom" data-atomrow="${id}">
      <div class="ah"><span>${shortAtom(id)}</span><span>${a.loc}</span></div>
      <div class="ao">${a.observation}</div>
      <div class="aq">${tq(a.quote)}</div></div>`;
  }
  function achips(ids) {
    return `<div class="achips">${ids.map(id => `<button class="achip" data-atom="${id}">${shortAtom(id)}</button>`).join("")}</div>`;
  }

  function concernPanel(c) {
    const primary = CASE.primaryCrux[c.id];
    const cruxEdges = CASE.cruxesFor(c.id);
    // union of all atoms cited anywhere in this concern
    const set = new Set(c.atoms);
    c.isnot.forEach(r => r.atoms.forEach(a => set.add(a)));
    c.causes.forEach(ca => { ca.sup.forEach(a => set.add(a)); (ca.con||[]).forEach(a => set.add(a)); });
    const allAtoms = Array.from(set).sort();

    const isnotHTML = c.isnot.map(r => `
      <details class="isrow">
        <summary><span class="dim">${r.dim}</span><span class="is">${r.is}</span><span class="isn">${r.isNot === CASE.U ? r.isNot : "not: " + r.isNot}</span></summary>
        <div class="isbody">
          <div class="mini">Distinctions</div>
          <ul>${r.dist.map(d => `<li>${d}</li>`).join("")}</ul>
          ${r.chg ? `<div class="mini">Changes</div><ul class="chg">${r.chg.map(d => `<li>${d}</li>`).join("")}</ul>` : ""}
          <div class="mini">Evidence</div>${achips(r.atoms)}
        </div>
      </details>`).join("");

    const causesHTML = c.causes.map(ca => {
      const isMost = ca.id === c.most.id;
      return `<details class="cause${isMost ? " most" : ""}"${isMost ? " open" : ""}>
        <summary>
          <div class="ch"><span class="ctype">${TYPED(ca.type)}</span>${isMost ? '<span class="cmost">most plausible</span>' : ''}<span class="cpl">${ca.pl} \u00b7 ${ca.conf}</span></div>
          <div class="cs">${ca.s}</div>
        </summary>
        <div class="cbody">
          ${ca.ei.map(e => `<div class="ei">${e}</div>`).join("")}
          ${(ca.en||[]).map(e => `<div class="en">${e}</div>`).join("")}
          <div class="mini" style="font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg2);margin:11px 0 5px">Supported by</div>
          ${achips(ca.sup)}
          ${(ca.con && ca.con.length) ? `<div class="mini" style="font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;margin:9px 0 5px" class="conlab"><span class="conlab">Tension with</span></div>${achips(ca.con)}` : ""}
        </div>
      </details>`;
    }).join("");

    const gate = CASE.gaps.find(g => g.concerns.includes(c.id));

    return `<div class="concern-panel">
      <div class="ptype"><span>${c.type} \u00b7 ${c.cluster}</span><span class="rk">priority ${c.rank} / 8</span></div>
      <div class="pid">${c.id.replace("_"," ")}<span class="kt-formal"> \u00b7 Problem Analysis</span></div>
      <h3>${c.n}</h3>
      <div class="pq">${c.deviation}</div>

      <div class="pblock"><div class="bl"><span class="kt-nod">Should be / is</span><span class="kt-formal">Deviation \u00b7 standard vs actual</span></div>
        <div class="dev">
          <div class="cell std"><div class="cl">Expected</div><div class="ct">${c.standard}</div></div>
          <div class="cell act"><div class="cl">Actual</div><div class="ct">${c.actual}</div></div>
        </div>
      </div>

      <div class="pblock"><div class="bl"><span class="kt-nod">Where it is &amp; isn't</span><span class="kt-formal">IS / IS-NOT</span><span class="blr">tap a row</span></div>
        <div class="isnot">${isnotHTML}</div>
      </div>

      <div class="pblock"><div class="bl"><span class="kt-nod">Candidate causes</span><span class="kt-formal">Possible causes \u00b7 by type</span><span class="blr">${c.causes.length}</span></div>
        ${causesHTML}
      </div>

      <div class="pblock"><div class="bl">Most plausible cause</div>
        <p style="font-size:13.5px;line-height:1.55">${c.most.rationale}</p>
      </div>

      <div class="pblock"><div class="bl"><span class="sig">What we don't know yet</span><span class="kt-formal">critical missing evidence</span></div>
        <ul class="dlist" style="list-style:none">${c.most.missing.map(m => `<li style="display:grid;grid-template-columns:18px 1fr;gap:8px;border-top:1px solid var(--fog);padding:8px 0;font-size:12.5px;line-height:1.45"><span style="font-family:var(--font-mono);color:var(--signal);font-size:11px">?</span><span>${m}</span></li>`).join("")}</ul>
        ${gate ? `<button class="gatelink" data-gate="${gate.id}"><span class="gk">Gates a decision</span><div class="gt">${gate.gatesLabel}, see the worklist below</div></button>` : ""}
      </div>

      <div class="pblock"><div class="bl">Wires to cruxes</div>
        <div class="navchips">${cruxEdges.map(e => `<button class="crux" data-crux="${e.crux}">${SHORTK[e.crux]} \u00b7 ${e.n}${e.crux===primary?" \u25c6":""}</button>`).join("")}</div>
      </div>

      ${c.related.length ? `<div class="pblock"><div class="bl">Related concerns</div>
        <div class="navchips">${c.related.map(r => `<button data-concern="${r}">${SHORTC[r]}</button>`).join("")}</div></div>` : ""}

      <div class="pblock"><div class="bl">Built from ${allAtoms.length} observations</div>
        <div class="atoms">${allAtoms.map(atomRow).join("")}</div>
      </div>
    </div>`;
  }

  function cruxPanel(k) {
    const cons = CASE.concernsFor(k.id);
    return `<div class="crux-panel">
      <div class="ptype"><span>${k.rank === 1 ? "<b>Most likely crux</b>" : "Candidate crux"}</span><span class="rk">rank ${k.rank} / 6</span></div>
      <div class="pid">${k.id.replace("_"," ")}</div>
      <h3>${k.title}</h3>
      <div class="pq ${k.rank===1?"sig":""}">${k.statement}</div>
      <div class="pblock"><div class="bl">If it moved</div><p>${k.leverage}</p></div>
      <div class="prow"><span class="k">Evidence</span><span class="v ${sigClass(k.ev)}">${k.ev}</span></div>
      <div class="prow"><span class="k">Leverage</span><span class="v ${sigClass(k.lev)}">${k.lev}</span></div>
      <div class="prow"><span class="k">Scope</span><span class="v">${k.scope}</span></div>
      <div class="pblock"><div class="bl">Concerns that feed it</div>
        <div class="navchips">${cons.map(e => `<button data-concern="${e.concern}">${SHORTC[e.concern]} \u00b7 ${e.n}</button>`).join("")}</div>
      </div>
      <div class="pblock"><div class="bl">Read against</div><p style="color:var(--ash)">${k.alt}</p></div>
      <div class="pblock"><a href="the-keystone.html" style="font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink);text-decoration:none;border:1px solid var(--ink);padding:9px 13px;display:inline-block">See it in The Keystone \u2192</a></div>
    </div>`;
  }

  function overviewPanel() {
    const sa = CASE.sa, mk = byC[sa.nextConcern];
    return `<div class="ov">
      <div class="ptype"><span class="kt-nod">The appraisal</span><span class="kt-formal">Situation Appraisal</span><span>8 concerns</span></div>
      <div class="lq">Eight concerns, one refrain: the burden the site absorbs is authored upstream.</div>
      <p class="diag">Each concern is sorted by urgency, impact, and trend, then run through Problem Analysis cause by cause. Pick any node on the left, or start with the one the appraisal says to analyze first.</p>
      <div class="nextcall" data-concern="${mk.id}">
        <div class="kk"><span class="kt-nod">Analyze first \u00b7 priority 1</span><span class="kt-formal">Recommended next \u00b7 Problem Analysis</span></div>
        <h4>${mk.n}</h4>
        <p>${sa.nextRationale}</p>
        <span class="go">Open the problem analysis \u2192</span>
      </div>
      <div class="pblock"><div class="bl">The ranking</div>
        <div class="rankpick">
          ${sa.ranking.map(r => `<button data-concern="${r.id}" class="${r.id===sa.nextConcern?"sig":""}"><span class="rn">${String(r.rank).padStart(2,"0")}</span><span class="rt"><b>${SHORTC[r.id]}</b><span>${r.rationale}</span></span></button>`).join("")}
        </div>
      </div>
      <p class="diag" style="margin-top:18px;font-size:11.5px;color:var(--fg3)">${sa.sourceNote}</p>
    </div>`;
  }

  function flashAtom(id) {
    const row = drawer.querySelector(`[data-atomrow="${id}"]`);
    if (row) { row.classList.remove("flash"); void row.offsetWidth; row.classList.add("flash"); row.scrollIntoView({ block:"center" }); }
  }

  function bindDrawer() {
    drawer.querySelectorAll("[data-concern]").forEach(b => b.addEventListener("click", () => selectConcern(b.dataset.concern)));
    drawer.querySelectorAll("[data-crux]").forEach(b => b.addEventListener("click", () => selectCrux(b.dataset.crux)));
    drawer.querySelectorAll("[data-atom]").forEach(b => b.addEventListener("click", () => flashAtom(b.dataset.atom)));
    drawer.querySelectorAll("[data-gate]").forEach(b => b.addEventListener("click", () => {
      const g = document.getElementById("gates"); if (g) g.scrollIntoView({ behavior:"smooth", block:"start" });
      window.dispatchEvent(new CustomEvent("casefile-flashgate", { detail:{ id:b.dataset.gate } }));
    }));
  }

  /* =====================================================
     MODE SWITCH + WIRING
     ===================================================== */
  function setMode(m) {
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    state.mode = m;
    document.querySelectorAll("#modes button").forEach(b => b.classList.toggle("on", b.dataset.mode === m));
    if (m === "triage") layoutTriage();
    else if (m === "bridge") layoutBridge();
    else { buildGraphModel(); warmGraph(90); drawGraph(); restartSim(); }
    applyFilterFade();
    refreshSel();
  }

  document.querySelectorAll("#modes button").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
  document.querySelectorAll("#filters .seg").forEach(seg => {
    seg.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
      seg.querySelectorAll("button").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      state.filt[seg.dataset.filt] = b.dataset.v;
      applyFilterFade();
      if (state.mode === "bridge" && state.sel) applyBridgeHi();
    }));
  });
  field.addEventListener("click", () => { if (state.sel) deselect(); });

  // init
  deselect();
  setMode("triage");
  window.CASEFILE_DIAG = { selectConcern, setMode };
})();
