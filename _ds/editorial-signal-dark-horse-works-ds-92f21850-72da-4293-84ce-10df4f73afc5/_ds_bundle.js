/* @ds-bundle: {"format":3,"namespace":"EditorialSignalDarkHorseWorksDS_92f218","components":[],"sourceHashes":{"ui_kits/site/DiagnosisForm.jsx":"006bf2e30e1d","ui_kits/site/Footer.jsx":"f01b8661c553","ui_kits/site/Hero.jsx":"87ad13eb44af","ui_kits/site/MomentBlock.jsx":"e5225878a5dc","ui_kits/site/Nav.jsx":"c934eb9ad66b","ui_kits/site/Primitives.jsx":"ff9cfaa27958","ui_kits/site/ProofRow.jsx":"0e35cb5c2fda"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EditorialSignalDarkHorseWorksDS_92f218 = window.EditorialSignalDarkHorseWorksDS_92f218 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/site/DiagnosisForm.jsx
try { (() => {
/* global React, Eyebrow, Button */
const {
  useState
} = React;
function DiagnosisForm() {
  const [email, setEmail] = useState("");
  const [stuck, setStuck] = useState("");
  const [sent, setSent] = useState(false);
  const fieldLabel = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: "var(--ash)",
    display: "block",
    marginBottom: 8
  };
  const underline = {
    background: "transparent",
    border: 0,
    borderBottom: "1px solid var(--ink)",
    padding: "10px 0",
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    color: "var(--ink)",
    outline: "none",
    width: "100%"
  };
  const box = {
    ...underline,
    border: "1px solid var(--ink)",
    borderBottom: "1px solid var(--ink)",
    padding: 14,
    resize: "none",
    minHeight: 96,
    fontFamily: "Inter, sans-serif"
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "diagnosis",
    style: {
      padding: "clamp(64px, 10vh, 140px) clamp(24px, 5vw, 80px)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "START A DIAGNOSIS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
      fontSize: "clamp(36px, 4.5vw, 56px)",
      lineHeight: 1.05,
      letterSpacing: "-0.025em",
      margin: "24px 0 48px",
      maxWidth: "20ch"
    }
  }, "Tell us what's stuck. We'll tell you if it's demand."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--ink)",
      paddingTop: 24,
      maxWidth: 560,
      fontSize: 16,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 8
    }
  }, "Received."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ash)"
    }
  }, "We read every diagnosis personally. Expect a reply within two business days \u2014 not a sequence, not a calendar link.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 32,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: fieldLabel
  }, "Work email"), /*#__PURE__*/React.createElement("input", {
    style: underline,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: fieldLabel
  }, "What's stuck?"), /*#__PURE__*/React.createElement("textarea", {
    style: box,
    value: stuck,
    onChange: e => setStuck(e.target.value),
    placeholder: "Customers say they love it. Revenue doesn't move."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true
  }, "Send Diagnosis"))));
}
Object.assign(window, {
  DiagnosisForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/DiagnosisForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Footer.jsx
try { (() => {
/* global React */

function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--ink)",
      padding: "48px clamp(24px, 5vw, 80px)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap",
      color: "var(--ash)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "0.14em",
      color: "var(--ink)"
    }
  }, "DARK HORSE WORKS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.02em"
    }
  }, "\xA9 2026 \xB7 BUILT FOR OPERATORS, NOT AUDIENCES"));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Hero.jsx
try { (() => {
/* global React, Button */

function Hero({
  onPrimary,
  onSecondary
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(80px, 14vh, 160px) clamp(24px, 5vw, 80px) 120px",
      minHeight: "82vh",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 900,
      fontSize: "clamp(56px, 9vw, 112px)",
      lineHeight: 0.95,
      letterSpacing: "-0.035em",
      color: "var(--ink)",
      margin: 0,
      maxWidth: "16ch"
    }
  }, "CUSTOMERS LOVE IT.", /*#__PURE__*/React.createElement("br", null), "REVENUE SAYS OTHERWISE."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 48,
      fontSize: 17,
      lineHeight: 1.55,
      color: "var(--ash)",
      maxWidth: "42ch"
    }
  }, "You're burning runway in a market full of interest \u2014 but no real demand. Demand Discovery reveals what customers will actually pay for \u2014 so you stop chasing mirages and win as the dark horse."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      alignItems: "center",
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    arrow: true,
    onClick: onPrimary
  }, "Find Your Real Demand Signal"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    arrow: true,
    onClick: onSecondary
  }, "See how this works")));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/MomentBlock.jsx
try { (() => {
/* global React, Eyebrow, PullQuote */

function MomentBlock() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(64px, 10vh, 140px) clamp(24px, 5vw, 80px)",
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "THE MOMENT"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 72px)",
      lineHeight: 1.05,
      letterSpacing: "-0.025em",
      color: "var(--ink)",
      margin: "28px 0 56px",
      maxWidth: "18ch"
    }
  }, "This is where most founders get stuck:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "var(--ash)"
    }
  }, "You've done the interviews."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "var(--ash)"
    }
  }, "Customers say they \"love it.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "var(--ash)"
    }
  }, "The team feels momentum."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "var(--ink)",
      fontWeight: 700
    }
  }, "But revenue doesn't move.")), /*#__PURE__*/React.createElement(PullQuote, null, "You're not failing.", /*#__PURE__*/React.createElement("br", null), "You're chasing false demand \u2014 signals that feel good but don't convert."));
}
Object.assign(window, {
  MomentBlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/MomentBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Nav.jsx
try { (() => {
/* global React */

function Nav({
  onDiagnosis,
  theme,
  onToggleTheme
}) {
  const link = {
    fontSize: 13,
    color: "var(--ash)",
    textDecoration: "none",
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: "var(--ink)"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "22px clamp(24px, 5vw, 80px)",
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "0.14em"
    }
  }, "DARK HORSE WORKS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link
  }, "When to Call Us"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "What It Reveals"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Proof"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Insights"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "About"), /*#__PURE__*/React.createElement("a", {
    onClick: onDiagnosis,
    style: {
      ...link,
      color: "var(--ink)",
      textDecoration: "underline",
      textUnderlineOffset: 4,
      textDecorationThickness: 1.5,
      fontWeight: 500
    }
  }, "Start a Diagnosis"), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      width: 28,
      height: 28,
      background: "transparent",
      border: "1px solid var(--ink)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      color: "var(--ink)"
    }
  }, theme === "dark" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
  })) : /*#__PURE__*/React.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  }))))));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Primitives.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      color: "var(--ash)",
      lineHeight: 1,
      ...style
    }
  }, children);
}
function Button({
  variant = "primary",
  children,
  onClick,
  arrow
}) {
  const base = {
    padding: "14px 20px",
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: "0.01em",
    cursor: "pointer",
    border: "1px solid var(--ink)",
    borderRadius: 0,
    transition: "background 150ms cubic-bezier(.2,.8,.2,1), transform 150ms cubic-bezier(.2,.8,.2,1)",
    display: "inline-flex",
    alignItems: "center",
    gap: 10
  };
  const styles = {
    primary: {
      ...base,
      background: "var(--ink)",
      color: "var(--paper)"
    },
    ghost: {
      ...base,
      background: "transparent",
      color: "var(--ink)"
    },
    link: {
      background: "transparent",
      color: "var(--ink)",
      border: 0,
      padding: "4px 0",
      textDecoration: "underline",
      textUnderlineOffset: 4,
      textDecorationThickness: 2,
      fontFamily: "Inter, sans-serif",
      fontSize: 14,
      fontWeight: 500,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    style: styles[variant],
    onClick: onClick
  }, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2192"));
}
function PullQuote({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: "3px solid var(--ink)",
      padding: "4px 24px",
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--ink)",
      maxWidth: "68ch"
    }
  }, children);
}
function MarkerCard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 40,
      bottom: 40,
      background: "var(--paper)",
      border: "1px solid var(--ink)",
      padding: "14px 16px",
      minWidth: 210,
      zIndex: 10,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 900,
      fontSize: 12,
      lineHeight: 1.25,
      letterSpacing: "-0.01em"
    }
  }, "CUSTOMERS LOVE IT.", /*#__PURE__*/React.createElement("br", null), "REVENUE SAYS", /*#__PURE__*/React.createElement("br", null), "OTHERWISE."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 9,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ash)",
      marginTop: 10
    }
  }, "DARK HORSE WORKS"));
}
Object.assign(window, {
  Eyebrow,
  Button,
  PullQuote,
  MarkerCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ProofRow.jsx
try { (() => {
/* global React, Eyebrow */

function ProofRow() {
  const items = [{
    n: "41",
    u: "engagements",
    c: "Fortune 500 innovation teams, 2022 — present."
  }, {
    n: "$1.4B",
    u: "in pipeline re-routed",
    c: "Away from false demand. Toward what pays."
  }, {
    n: "0",
    u: "decks of filler",
    c: "We write conclusions, not capability slides."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(64px, 10vh, 140px) clamp(24px, 5vw, 80px)",
      background: "var(--bone)",
      borderTop: "1px solid var(--ink)",
      borderBottom: "1px solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "PROOF"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 48,
      marginTop: 48
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: "1px solid var(--ink)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 900,
      fontSize: 56,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "var(--ink)"
    }
  }, it.n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      color: "var(--ash)"
    }
  }, it.u), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--ink)"
    }
  }, it.c)))));
}
Object.assign(window, {
  ProofRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ProofRow.jsx", error: String((e && e.message) || e) }); }

})();
