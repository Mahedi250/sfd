"use client";

export default function LangToggle({ lang, onChange }) {
  const isBn = lang === "bn";
  return (
    <button
      onClick={() => onChange(isBn ? "en" : "bn")}
      aria-label="Toggle language"
      className="lang-toggle"
      style={{
        position: "relative",
        display: "inline-flex", alignItems: "center",
        background: "#F1F4F9", border: "1px solid var(--line)",
        borderRadius: 999, padding: 3, cursor: "pointer",
        width: 128, height: 38,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute", top: 3, bottom: 3,
          left: isBn ? 3 : "calc(50% + 0px)",
          width: "calc(50% - 3px)",
          background: "#fff", borderRadius: 999,
          boxShadow: "var(--shadow-sm)",
          transition: "left .3s cubic-bezier(.2,.7,.2,1)",
          border: "1px solid var(--line-2)",
        }}
      />
      <span style={{
        position: "relative", flex: 1, textAlign: "center",
        fontSize: 12, fontWeight: 700, letterSpacing: ".04em",
        color: isBn ? "var(--ink)" : "var(--ink-3)",
        fontFamily: "'Hind Siliguri', sans-serif",
      }}>বাংলা</span>
      <span style={{
        position: "relative", flex: 1, textAlign: "center",
        fontSize: 12, fontWeight: 700, letterSpacing: ".04em",
        color: !isBn ? "var(--ink)" : "var(--ink-3)",
      }}>EN</span>
    </button>
  );
}
