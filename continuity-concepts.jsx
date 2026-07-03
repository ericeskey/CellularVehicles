/* =========================================================
   IDEATE v2 · CONTINUITY, not convergence
   The product is an unbroken thread: Customer → Evidence →
   Meaning → Decision. Convergence shrinks to ONE station.
   Every mechanism must END AT A DECISION.
   ========================================================= */

function Frame2({ eyebrow, title, em, children, caption }) {
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

/* ---------- 0 · The diagnosis ---------- */
function Diagnosis() {
  return (
    <div className="cc diag">
      <div className="cc-pad">
        <div className="cc-eyebrow">Ideate v2 · the reframe</div>
        <div className="cc-title">Why none were a <em>hell&nbsp;yes</em></div>
        <ol className="dg-list">
          <li><b>They prove the wrong thing.</b> Convergence proves our reading is consistent. The wound isn’t inconsistent analysis — it’s evidence that never reached a decision.</li>
          <li><b>They’re half-built bridges.</b> Every one ends at “the gap” — the finding. They help you admire the canyon, not cross it.</li>
          <li><b>They sell the apparatus.</b> “Seven reads” is our cleverness. The buyer asks one thing: did the thread stay intact — mouth to decision?</li>
        </ol>
        <div className="dg-turn">
          The product is not convergence. It’s <span className="sig">continuity</span>.<br />
          <span className="dg-thread">Customer → Evidence → Meaning → Decision — one unbroken thread.</span>
        </div>
      </div>
      <div className="cc-cap"><b>The test for every mechanism below:</b> does the thread stay unbroken — and does it end at a decision, not a finding?</div>
    </div>
  );
}

/* ---------- A · The Unbroken Thread ---------- */
function Thread() {
  const USUAL = [
    { k: "Ask",        s: "questions" },
    { k: "Capture",    s: "findings" },
    { k: "Synthesize", s: "themes" },
    { k: "Deck",       s: "presented — the end" },
    { k: "",           s: "decision · action: unbuilt" },
  ];
  const DHW = [
    { k: "Raw voice",   s: "one customer" },
    { k: "Evidence",    s: "independently assessed" },
    { k: "Belief",      s: "shared, trusted" },
    { k: "Proposition", s: "decision-ready" },
    { k: "→ aggregate", s: "16 interviews + survey" },
  ];
  return (
    <Frame2
      eyebrow="Concept A · report vs. convert"
      title="The Unbroken" em="Thread"
      caption="<b>Research reports; Demand Discovery converts.</b> The usual path ends at the deck — the rest is hope. We carry each interview, unbroken, to a decision-ready proposition; the aggregate (16 interviews + a survey) carries those to the team’s decision. Independent assessments decorrelate error at both scales (Hawkins; Kahneman)."
    >
      <div className="th">
        <div className="th-track">
          <div className="th-cap">Most research · framed around learning</div>
          <div className="thread usual five">
            <div className="rail"></div>
            <div className="nodes">
              <span className="node"></span><span className="node"></span>
              <span className="node"></span><span className="node"></span>
              <span className="node ghost"></span>
            </div>
          </div>
          <div className="labels five">
            {USUAL.map((s, i) => (
              <div key={i} className={i === 4 ? "ghost-lab" : ""}>
                <div className="lk">{s.k || "—"}</div>
                <div className="ls">{s.s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="th-track">
          <div className="th-cap dhw">Demand Discovery · framed around converting</div>
          <div className="thread dhw five">
            <div className="rail"></div>
            <div className="nodes">
              <span className="node"></span><span className="node"></span>
              <span className="node"></span><span className="node goal"></span>
              <span className="node handoff"></span>
            </div>
          </div>
          <div className="labels five">
            {DHW.map((s, i) => (
              <div key={i} className={i === 3 ? "goal-lab" : (i === 4 ? "handoff-lab" : "")}>
                <div className="lk">{s.k}</div>
                <div className="ls">{s.s}</div>
                {i === 1 && <div className="annot">↳ multiple independent assessments · 7 this case</div>}
              </div>
            ))}
          </div>
          <div className="agg-note">The decision &amp; action are the aggregate’s — 16 voices and a survey — never one interview’s.</div>
        </div>
      </div>
    </Frame2>
  );
}

/* ---------- B · The Provenance Chain ---------- */
function Provenance() {
  return (
    <Frame2
      eyebrow="Concept B · pull the thread"
      title="The Provenance" em="Chain"
      caption="<b>Skeptic-proof continuity.</b> Pull any decision and walk the thread back to the customer’s actual words. Nothing asserted; every link holds."
    >
      <div className="pc">
        <div className="pc-node decision">
          <div className="pc-k">Decision</div>
          <div className="pc-v">Fund the pre-run readiness layer</div>
        </div>
        <div className="pc-link">↑ because</div>
        <div className="pc-node">
          <div className="pc-k">Meaning</div>
          <div className="pc-v">The fragile middle only Martin can hold</div>
        </div>
        <div className="pc-link">↑ grounded in</div>
        <div className="pc-node">
          <div className="pc-k">Evidence</div>
          <div className="pc-v">Independent assessments agree it’s here <span className="pc-note">· 7 this case</span></div>
        </div>
        <div className="pc-link">↑ traced to</div>
        <div className="pc-node quote">
          <div className="pc-k">Customer · R01 · 28:14</div>
          <div className="pc-q">“Give it a library, get back data.”</div>
        </div>
      </div>
    </Frame2>
  );
}

/* ---------- C · The Last Span ---------- */
function LastSpan() {
  return (
    <Frame2
      eyebrow="Concept C · the crossing"
      title="The Last" em="Span"
      caption="<b>Insight is a product; alignment is the outcome.</b> Most research is a bridge that stops mid-canyon. The product is the final span — the decision."
    >
      <div className="ls2">
        <div className="span-panel">
          <div className="sp-cap">Most research</div>
          <div className="beam">
            <div className="pier">Evidence</div>
            <div className="deck"></div>
            <div className="gap"></div>
            <div className="pier hollow">Decision</div>
          </div>
          <div className="sp-foot">Admire it — can’t cross.</div>
        </div>
        <div className="span-panel">
          <div className="sp-cap dhw">Demand Discovery</div>
          <div className="beam">
            <div className="pier">Evidence</div>
            <div className="deck"></div>
            <div className="deck span-final"></div>
            <div className="pier goal">Decision</div>
          </div>
          <div className="sp-foot">The last span lands. You cross.</div>
        </div>
      </div>
    </Frame2>
  );
}

/* ---------- D · The Two Rooms ---------- */
function TwoRooms() {
  return (
    <Frame2
      eyebrow="Concept D · shared conviction"
      title="The Two" em="Rooms"
      caption="<b>Rehabilitates convergence.</b> Agreement only matters if it produces a committed decision. Same evidence, two endings — divergence vs. conviction."
    >
      <div className="rooms">
        <div className="room">
          <div className="rm-cap">Insight without alignment</div>
          <div className="rm-evidence">Same evidence</div>
          <div className="rm-fan">
            <span>ship it</span><span>fix onboarding</span><span>wait</span><span>pivot</span>
          </div>
          <div className="rm-foot">Four readers, four conclusions. Nothing moves.</div>
        </div>
        <div className="room">
          <div className="rm-cap dhw">Shared conviction</div>
          <div className="rm-evidence">Same evidence</div>
          <div className="rm-one">Close the pre-run gap</div>
          <div className="rm-foot">Independent assessments, one conviction. The team moves.</div>
        </div>
      </div>
    </Frame2>
  );
}

/* ---------- assemble ---------- */
function App2() {
  const { DesignCanvas, DCSection, DCArtboard } = window;
  return (
    <DesignCanvas>
      <DCSection
        id="continuity"
        title="Continuity, not convergence"
        subtitle="Ideate v2 · the product is an unbroken thread from the customer’s mouth to a decision. Convergence shrinks to one station on it. Every mechanism ends at a decision, not a finding."
      >
        <DCArtboard id="diag" label="The diagnosis" width={460} height={620}><Diagnosis /></DCArtboard>
        <DCArtboard id="thread" label="A · Unbroken Thread" width={700} height={628}><Thread /></DCArtboard>
        <DCArtboard id="prov" label="B · Provenance Chain" width={460} height={660}><Provenance /></DCArtboard>
        <DCArtboard id="span" label="C · The Last Span" width={560} height={520}><LastSpan /></DCArtboard>
        <DCArtboard id="rooms" label="D · Two Rooms" width={520} height={620}><TwoRooms /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App2 />);
