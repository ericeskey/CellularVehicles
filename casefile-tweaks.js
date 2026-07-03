/* =========================================================
   CASEFILE · Tweaks panel (vanilla, editorial-styled).
   Wires the host edit-mode protocol so the toolbar toggle
   shows/hides the panel, and persists via the EDITMODE block.
   Two tweaks:
     · KT framework   nod | formal   (how visible Kepner-Tregoe is)
     · Evidence gate  advisory | strict (whether open gates lock
       the decision brief)
   Applies state as <html data-kt> / <html data-gate> and fires
   a 'casetweak' event other scripts listen to.
   ========================================================= */
(function () {
  const LS_KEY = "casefile-tweaks-v1";
  const defaults = window.CASE_TWEAK_DEFAULTS || { kt: "nod", gate: "advisory" };

  let stored = {};
  try { stored = JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch (e) { stored = {}; }
  const state = Object.assign({}, defaults, stored);

  const root = document.documentElement;
  function apply() {
    root.setAttribute("data-kt", state.kt);
    root.setAttribute("data-gate", state.gate);
    window.dispatchEvent(new CustomEvent("casetweak", { detail: Object.assign({}, state) }));
  }
  apply();

  function setTweak(key, val) {
    state[key] = val;
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
    // persist through the host (rewrites the EDITMODE block on disk)
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: val } }, "*"); } catch (e) {}
    apply();
    syncUI();
  }

  /* ---- panel styling (editorial idiom: sharp, paper, ink, mono) ---- */
  const css = `
  .cf-twk{position:fixed;right:18px;bottom:18px;z-index:2147483646;width:256px;
    background:var(--paper,#F2F0EB);color:var(--ink,#0A0A0A);
    border:1px solid var(--ink,#0A0A0A);box-shadow:0 14px 40px rgba(10,10,10,.18);
    font-family:var(--font-sans,Inter,system-ui,sans-serif);display:none}
  .cf-twk.open{display:block}
  .cf-twk .cf-hd{display:flex;align-items:center;justify-content:space-between;
    border-bottom:1px solid var(--ink,#0A0A0A);padding:11px 12px 11px 14px;cursor:move;user-select:none}
  .cf-twk .cf-hd b{font-family:var(--font-mono,monospace);font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:400}
  .cf-twk .cf-x{appearance:none;border:0;background:none;color:var(--fg2,#6B6862);font-size:15px;line-height:1;cursor:pointer;padding:2px 4px}
  .cf-twk .cf-x:hover{color:var(--ink,#0A0A0A)}
  .cf-twk .cf-body{padding:14px}
  .cf-twk .cf-row+.cf-row{margin-top:16px}
  .cf-twk .cf-l{font-family:var(--font-mono,monospace);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg2,#6B6862);display:block;margin-bottom:7px}
  .cf-twk .cf-seg{display:flex;border:1px solid var(--ink,#0A0A0A)}
  .cf-twk .cf-seg button{flex:1;appearance:none;border:0;border-right:1px solid var(--ink,#0A0A0A);
    background:var(--paper,#F2F0EB);color:var(--ash,#6B6862);font-family:var(--font-mono,monospace);
    font-size:10px;letter-spacing:.06em;text-transform:uppercase;padding:8px 6px;cursor:pointer}
  .cf-twk .cf-seg button:last-child{border-right:0}
  .cf-twk .cf-seg button.on{background:var(--ink,#0A0A0A);color:var(--paper,#F2F0EB)}
  .cf-twk .cf-seg button:not(.on):hover{background:rgba(10,10,10,.05);color:var(--ink,#0A0A0A)}
  .cf-twk .cf-note{font-size:11px;line-height:1.4;color:var(--fg2,#6B6862);margin-top:7px}
  `;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  const panel = document.createElement("div");
  panel.className = "cf-twk";
  panel.setAttribute("data-omelette-chrome", "");
  panel.innerHTML = `
    <div class="cf-hd"><b>Tweaks</b><button class="cf-x" aria-label="Close">✕</button></div>
    <div class="cf-body">
      <div class="cf-row">
        <span class="cf-l">Kepner-Tregoe framework</span>
        <div class="cf-seg" data-k="kt">
          <button data-v="nod">Nod</button>
          <button data-v="formal">Formal</button>
        </div>
        <div class="cf-note" data-note="kt"></div>
      </div>
      <div class="cf-row">
        <span class="cf-l">Evidence gate</span>
        <div class="cf-seg" data-k="gate">
          <button data-v="advisory">Advisory</button>
          <button data-v="strict">Strict</button>
        </div>
        <div class="cf-note" data-note="gate"></div>
      </div>
    </div>`;
  document.body.appendChild(panel);

  const NOTES = {
    kt: { nod: "KT is the quiet scaffold; the editorial voice leads.", formal: "Every KT process is named, for clients who run it." },
    gate: { advisory: "The brief stays open; open gaps are flagged.", strict: "Open gates lock the decision brief until resolved." }
  };

  function syncUI() {
    panel.querySelectorAll(".cf-seg").forEach(seg => {
      const k = seg.dataset.k;
      seg.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.v === state[k]));
      const note = panel.querySelector(`[data-note="${k}"]`);
      if (note) note.textContent = NOTES[k][state[k]];
    });
  }
  panel.querySelectorAll(".cf-seg button").forEach(b => {
    b.addEventListener("click", () => setTweak(b.parentElement.dataset.k, b.dataset.v));
  });
  syncUI();

  /* ---- host protocol ---- */
  function setOpen(o) { panel.classList.toggle("open", !!o); }
  window.addEventListener("message", (e) => {
    const t = e && e.data && e.data.type;
    if (t === "__activate_edit_mode") setOpen(true);
    else if (t === "__deactivate_edit_mode") setOpen(false);
  });
  panel.querySelector(".cf-x").addEventListener("click", () => {
    setOpen(false);
    try { window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); } catch (e) {}
  });
  try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}

  /* ---- drag ---- */
  const hd = panel.querySelector(".cf-hd");
  hd.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("cf-x")) return;
    const r = panel.getBoundingClientRect();
    let right = window.innerWidth - r.right, bottom = window.innerHeight - r.bottom;
    const sx = e.clientX, sy = e.clientY;
    const move = (ev) => {
      panel.style.right = Math.max(8, right - (ev.clientX - sx)) + "px";
      panel.style.bottom = Math.max(8, bottom - (ev.clientY - sy)) + "px";
    };
    const up = () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
    window.addEventListener("mousemove", move); window.addEventListener("mouseup", up);
    e.preventDefault();
  });

  window.CASE_TWEAKS = { get: () => Object.assign({}, state), set: setTweak };
})();
