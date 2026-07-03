/* =========================================================
   IDEATE · Convergence reveal — five mechanisms
   Each concept: same seven reads, same destination (the gap).
   Only the FORM of the collapse differs.
   ========================================================= */

const READS = [
  { n: "01", axis: "Chronology",     find: "The hardest moments cluster before the run begins" },
  { n: "02", axis: "Relation",       find: "Pre-run steps pull hardest on everything else" },
  { n: "03", axis: "Transformation", find: "The widest gap is getting a run ready" },
  { n: "04", axis: "Argument",       find: "His expertise is absorbing pre-run friction" },
  { n: "05", axis: "Leverage",       find: "Pre-run readiness ranks first of six cruxes" },
  { n: "06", axis: "Demand",         find: "Workflow continuity is the most under-served want" },
  { n: "07", axis: "Diagnosis",      find: "Denaturing & sample-sheet errors top the concerns" },
];

function Frame({ eyebrow, title, em, children, caption }) {
  return (
    <div className="cc">
      <div className="cc-pad">
        <div className="cc-eyebrow">{eyebrow}</div>
        <div className="cc-title">{title} {em && <em>{em}</em>}</div>
        <div className="cc-body">{children}</div>
      </div>
      <div className="cc-cap" dangerouslySetInnerHTML={{ __html: caption }} />
    </div>
  );
}

/* ---------- A · The Roll Call ---------- */
function RollCall() {
  return (
    <Frame
      eyebrow="Concept A · the tally"
      title="The Roll" em="Call"
      caption="<b>Narrated.</b> You read down the column — each line, reached its own way, names the same place. Repetition is the proof. List logic, zero decoration."
    >
      <div className="rc">
        {READS.map((r) => (
          <div className="rc-row" key={r.n}>
            <span className="rc-num">{r.n}</span>
            <div>
              <div className="rc-axis">{r.axis} · asked alone</div>
              <div className="rc-find">{r.find}</div>
            </div>
            <span className="rc-tick">↘</span>
          </div>
        ))}
        <div className="rc-resolve">
          <span className="lab">All seven land on</span>
          <span className="val">The gap</span>
        </div>
        <div className="rc-foot">“Give it a library, get back data” — the fragile middle</div>
      </div>
    </Frame>
  );
}

/* ---------- B · The Sealed Verdicts ---------- */
function Sealed() {
  const sealed = ["06", "07"];
  return (
    <Frame
      eyebrow="Concept B · sequestered"
      title="The Sealed" em="Verdicts"
      caption="<b>Skeptic-proof.</b> Each read stays sealed until opened — jurors who never conferred. Independence is literal, not asserted. Open one at a time as you narrate."
    >
      <div className="sv-grid">
        {READS.map((r) =>
          sealed.includes(r.n) ? (
            <div className="sv-card sealed" key={r.n}>
              <div className="sv-seal">Read {r.n}<br />— sealed —</div>
            </div>
          ) : (
            <div className="sv-card" key={r.n}>
              <span className="sv-axis">{r.axis}</span>
              <span className="sv-find">{r.find}</span>
            </div>
          )
        )}
        <div className="sv-card resolve">
          <span className="sv-axis sig">Each opens to</span>
          <span className="sv-val">The gap →</span>
        </div>
      </div>
    </Frame>
  );
}

/* ---------- C · The Triangulation ---------- */
function Triangulation() {
  const cx = 250, cy = 175;
  const anchors = [
    { x: 70,  y: 36,  a: "Chronology" },
    { x: 250, y: 24,  a: "Relation" },
    { x: 430, y: 36,  a: "Transformation" },
    { x: 470, y: 175, a: "Argument" },
    { x: 410, y: 312, a: "Leverage" },
    { x: 130, y: 322, a: "Demand" },
    { x: 32,  y: 175, a: "Diagnosis" },
  ];
  return (
    <Frame
      eyebrow="Concept C · the fix"
      title="The" em="Triangulation"
      caption="<b>Spatial.</b> Seven instruments, seven bearings, one fix. The most striking — and the most at risk of reading decorative. Guard the restraint: hairlines only."
    >
      <svg className="tri" viewBox="0 0 500 350" width="100%">
        {anchors.map((p, i) => (
          <line key={"l" + i} x1={p.x} y1={p.y} x2={cx} y2={cy}
                stroke="var(--fog)" strokeWidth="1" />
        ))}
        {anchors.map((p, i) => (
          <g key={"g" + i}>
            <circle cx={p.x} cy={p.y} r="2.5" fill="var(--ink)" />
            <text x={p.x} y={p.y - 8} textAnchor="middle"
                  className="tri-lab">{p.a}</text>
          </g>
        ))}
        <circle cx={cx} cy={cy} r="6" fill="var(--signal)" />
        <circle cx={cx} cy={cy} r="13" fill="none" stroke="var(--signal)" strokeWidth="1" />
        <text x={cx} y={cy + 34} textAnchor="middle" className="tri-fix">THE GAP</text>
      </svg>
    </Frame>
  );
}

/* ---------- D · The Column Collapse ---------- */
function Collapse() {
  return (
    <Frame
      eyebrow="Concept D · self-narrating"
      title="The Column" em="Collapse"
      caption="<b>Forwarded mode.</b> Scroll collapses seven reads into one sentence — it narrates itself with no presenter. The best answer to the cold-forward constraint."
    >
      <div className="cl-stack">
        {READS.map((r) => (
          <div className="cl-line" key={r.n}>
            <span className="ax">{r.n} {r.axis}</span>
            <span className="fd">{r.find}</span>
          </div>
        ))}
      </div>
      <div className="cl-bracket">↓ &nbsp; seven collapse to one &nbsp; ↓</div>
      <div className="cl-final">
        <span className="q">“Give it a library,<br />get back data.”</span><br />
        Everything he’ll pay for is the middle.
      </div>
    </Frame>
  );
}

/* ---------- E · The Density Overlay ---------- */
function Density() {
  const phases = ["Pre-run", "Run", "Post"];
  // which phase each read weights (index into phases)
  const weight = {
    "01": [0], "02": [0], "03": [0], "04": [0],
    "05": [0], "06": [0, 1], "07": [0],
  };
  return (
    <Frame
      eyebrow="Concept E · the overlay"
      title="The Density" em="Map"
      caption="<b>At a glance.</b> Seven reads laid over one timeline. Where they all darken is the finding — density equals consensus. Reads instantly, even cold."
    >
      <div className="dn">
        <div className="dn-h"></div>
        {phases.map((p, i) => (
          <div className={"dn-h ph" + (i === 0 ? " sig" : "")} key={p}>{p}</div>
        ))}
        {READS.map((r) => (
          <React.Fragment key={r.n}>
            <div className="dn-rl">{r.n} {r.axis}</div>
            {phases.map((p, i) => (
              <div className={"dn-cell" + (weight[r.n].includes(i) ? " on" : "")} key={i}></div>
            ))}
          </React.Fragment>
        ))}
        <div className="dn-tl">Tally</div>
        <div className="dn-t sig">7</div>
        <div className="dn-t">1</div>
        <div className="dn-t">0</div>
      </div>
      <div className="dn-foot">Every read weights <b>pre-run</b>. The column can’t be argued with.</div>
    </Frame>
  );
}

/* ---------- assemble ---------- */
function App() {
  const { DesignCanvas, DCSection, DCArtboard } = window;
  return (
    <DesignCanvas>
      <DCSection
        id="reveal"
        title="The convergence reveal"
        subtitle="Ideate · five mechanisms for making “seven independent reads → one conviction” felt. Same reads, same destination — only the form of the collapse differs. Judgment deferred; pick territory, don’t polish yet."
      >
        <DCArtboard id="a" label="A · The Roll Call" width={480} height={690}><RollCall /></DCArtboard>
        <DCArtboard id="b" label="B · Sealed Verdicts" width={480} height={690}><Sealed /></DCArtboard>
        <DCArtboard id="c" label="C · Triangulation" width={560} height={560}><Triangulation /></DCArtboard>
        <DCArtboard id="d" label="D · Column Collapse" width={460} height={760}><Collapse /></DCArtboard>
        <DCArtboard id="e" label="E · Density Map" width={520} height={620}><Density /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
